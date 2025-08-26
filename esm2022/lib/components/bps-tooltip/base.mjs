import { Directive, EventEmitter, Optional, TemplateRef, ViewChild } from '@angular/core';
import { asapScheduler, Subject } from 'rxjs';
import { delay, distinctUntilChanged, filter, takeUntil } from 'rxjs/operators';
import { DEFAULT_TOOLTIP_POSITIONS, getPlacementName, POSITION_MAP } from 'ng-zorro-antd/core/overlay';
import { isNotNil, toBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/no-animation";
import * as i2 from "ng-zorro-antd/core/config";
import * as i3 from "@angular/cdk/bidi";
const _c0 = ["overlay"];
export class NzTooltipBaseDirective {
    /**
     * This true title that would be used in other parts on this component.
     */
    get _title() {
        return this.title || this.directiveTitle || null;
    }
    get _popoverType() {
        return this.popoverType || null;
    }
    get _tooltipDisabled() {
        return this.tooltipDisabled;
    }
    get _tooltipType() {
        return this.tooltipType || null;
    }
    get _content() {
        return this.content || this.directiveContent || null;
    }
    get _trigger() {
        return typeof this.trigger !== 'undefined' ? this.trigger : 'hover';
    }
    get _placement() {
        const p = this.placement;
        return Array.isArray(p) && p.length > 0 ? p : typeof p === 'string' && p ? [p] : ['top'];
    }
    get _visible() {
        return (typeof this.visible !== 'undefined' ? this.visible : this.internalVisible) || false;
    }
    get _mouseEnterDelay() {
        return this.mouseEnterDelay || 0.15;
    }
    get _mouseLeaveDelay() {
        return this.mouseLeaveDelay || 0.1;
    }
    get _overlayClassName() {
        return this.overlayClassName || null;
    }
    get _overlayStyle() {
        return this.overlayStyle || null;
    }
    getProxyPropertyMap() {
        return {
            noAnimation: ['noAnimation', () => !!this.noAnimation]
        };
    }
    constructor(elementRef, hostView, resolver, renderer, noAnimation, nzConfigService) {
        this.elementRef = elementRef;
        this.hostView = hostView;
        this.resolver = resolver;
        this.renderer = renderer;
        this.noAnimation = noAnimation;
        this.nzConfigService = nzConfigService;
        this.visibleChange = new EventEmitter();
        this.internalVisible = false;
        this.destroy$ = new Subject();
        this.triggerDisposables = [];
    }
    ngOnChanges(changes) {
        const { trigger } = changes;
        if (trigger && !trigger.isFirstChange()) {
            this.registerTriggers();
        }
        if (this.component) {
            this.updatePropertiesByChanges(changes);
        }
    }
    ngAfterViewInit() {
        this.createComponent();
        this.registerTriggers();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        // Clear toggling timer. Issue #3875 #4317 #4386
        this.clearTogglingTimer();
        this.removeTriggerListeners();
    }
    show() {
        this.component?.show();
    }
    hide() {
        this.component?.hide();
    }
    /**
     * Force the component to update its position.
     */
    updatePosition() {
        if (this.component) {
            this.component.updatePosition();
        }
    }
    /**
     * Create a dynamic tooltip component. This method can be override.
     */
    createComponent() {
        const componentRef = this.componentRef;
        this.component = componentRef.instance;
        // Remove the component's DOM because it should be in the overlay container.
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), componentRef.location.nativeElement);
        this.component.setOverlayOrigin(this.origin || this.elementRef);
        this.initProperties();
        const ngVisibleChange$ = this.component.bpsVisibleChange.pipe(distinctUntilChanged());
        ngVisibleChange$.pipe(takeUntil(this.destroy$)).subscribe((visible) => {
            this.internalVisible = visible;
            this.visibleChange.emit(visible);
        });
        // In some cases, the rendering takes into account the height at which the `arrow` is in wrong place,
        // so `cdk` sets the container position incorrectly.
        // To avoid this, after placing the `arrow` in the correct position, we should `re-calculate` the position of the `overlay`.
        ngVisibleChange$
            .pipe(filter((visible) => visible), delay(0, asapScheduler), filter(() => Boolean(this.component?.overlay?.overlayRef)), takeUntil(this.destroy$))
            .subscribe(() => {
            this.component?.updatePosition();
        });
    }
    registerTriggers() {
        // When the method gets invoked, all properties has been synced to the dynamic component.
        // After removing the old API, we can just check the directive's own `nzTrigger`.
        const el = this.elementRef.nativeElement;
        const trigger = this.trigger;
        this.removeTriggerListeners();
        if (trigger === 'hover') {
            let overlayElement;
            this.triggerDisposables.push(this.renderer.listen(el, 'mouseenter', () => {
                this.delayEnterLeave(true, true, this._mouseEnterDelay);
            }));
            this.triggerDisposables.push(this.renderer.listen(el, 'mouseleave', () => {
                this.delayEnterLeave(true, false, this._mouseLeaveDelay);
                if (this.component?.overlay.overlayRef && !overlayElement) {
                    overlayElement = this.component.overlay.overlayRef.overlayElement;
                    this.triggerDisposables.push(this.renderer.listen(overlayElement, 'mouseenter', () => {
                        this.delayEnterLeave(false, true, this._mouseEnterDelay);
                    }));
                    this.triggerDisposables.push(this.renderer.listen(overlayElement, 'mouseleave', () => {
                        this.delayEnterLeave(false, false, this._mouseLeaveDelay);
                    }));
                }
            }));
        }
        else if (trigger === 'focus') {
            this.triggerDisposables.push(this.renderer.listen(el, 'focusin', () => this.show()));
            this.triggerDisposables.push(this.renderer.listen(el, 'focusout', () => this.hide()));
        }
        else if (trigger === 'click') {
            this.triggerDisposables.push(this.renderer.listen(el, 'click', (e) => {
                e.preventDefault();
                this.show();
            }));
        }
        // Else do nothing because user wants to control the visibility programmatically.
    }
    updatePropertiesByChanges(changes) {
        this.updatePropertiesByKeys(Object.keys(changes));
    }
    updatePropertiesByKeys(keys) {
        const mappingProperties = {
            // common mappings
            title: ['bpsTitle', () => this._title],
            directiveTitle: ['bpsTitle', () => this._title],
            tooltipType: ['bpsTooltipType', () => this._tooltipType],
            popoverType: ['bpsPopoverType', () => this._popoverType],
            tooltipDisabled: ['bpsTooltipDisabled', () => this._tooltipDisabled],
            content: ['bpsContent', () => this._content],
            directiveContent: ['bpsContent', () => this._content],
            trigger: ['bpsTrigger', () => this._trigger],
            placement: ['bpsPlacement', () => this._placement],
            visible: ['bpsVisible', () => this._visible],
            mouseEnterDelay: ['bpsMouseEnterDelay', () => this._mouseEnterDelay],
            mouseLeaveDelay: ['bpsMouseLeaveDelay', () => this._mouseLeaveDelay],
            overlayClassName: ['bpsOverlayClassName', () => this._overlayClassName],
            overlayStyle: ['bpsOverlayStyle', () => this._overlayStyle],
            arrowPointAtCenter: ['bpsArrowPointAtCenter', () => this.arrowPointAtCenter],
            ...this.getProxyPropertyMap()
        };
        (keys || Object.keys(mappingProperties).filter(key => !key.startsWith('directive'))).forEach((property) => {
            if (mappingProperties[property]) {
                const [name, valueFn] = mappingProperties[property];
                this.updateComponentValue(name, valueFn());
            }
        });
        this.component?.updateByDirective();
    }
    initProperties() {
        this.updatePropertiesByKeys();
    }
    updateComponentValue(key, value) {
        if (typeof value !== 'undefined') {
            // @ts-ignore
            this.component[key] = value;
        }
    }
    delayEnterLeave(isOrigin, isEnter, delay = -1) {
        if (this.delayTimer) {
            this.clearTogglingTimer();
        }
        else if (delay > 0) {
            this.delayTimer = setTimeout(() => {
                this.delayTimer = undefined;
                isEnter ? this.show() : this.hide();
            }, delay * 1000);
        }
        else {
            // `isOrigin` is used due to the tooltip will not hide immediately
            // (may caused by the fade-out animation).
            isEnter && isOrigin ? this.show() : this.hide();
        }
    }
    removeTriggerListeners() {
        this.triggerDisposables.forEach(dispose => dispose());
        this.triggerDisposables.length = 0;
    }
    clearTogglingTimer() {
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
            this.delayTimer = undefined;
        }
    }
    static { this.ɵfac = function NzTooltipBaseDirective_Factory(t) { return new (t || NzTooltipBaseDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective), i0.ɵɵdirectiveInject(i2.NzConfigService)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: NzTooltipBaseDirective, features: [i0.ɵɵNgOnChangesFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzTooltipBaseDirective, [{
        type: Directive
    }], () => [{ type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i0.ComponentFactoryResolver }, { type: i0.Renderer2 }, { type: i1.NzNoAnimationDirective }, { type: i2.NzConfigService }], null); })();
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class NzTooltipBaseComponent {
    set bpsVisible(value) {
        const visible = toBoolean(value);
        if (this._visible !== visible) {
            this._visible = visible;
            this.bpsVisibleChange.next(visible);
        }
    }
    get bpsVisible() {
        return this._visible;
    }
    set bpsTrigger(value) {
        this._trigger = value;
    }
    get bpsTrigger() {
        return this._trigger;
    }
    set bpsPlacement(value) {
        const preferredPosition = value.map(placement => POSITION_MAP[placement]);
        this._positions = [...preferredPosition, ...DEFAULT_TOOLTIP_POSITIONS];
    }
    constructor(cdr, directionality, noAnimation) {
        this.cdr = cdr;
        this.directionality = directionality;
        this.noAnimation = noAnimation;
        this.bpsTitle = null;
        this.bpsContent = null;
        this.bpsArrowPointAtCenter = false;
        this.bpsOverlayStyle = {};
        this.bpsBackdrop = false;
        this.bpsVisibleChange = new Subject();
        this._visible = false;
        this._trigger = 'hover';
        this.preferredPlacement = 'top';
        this.dir = 'ltr';
        this._classMap = {};
        this._prefix = 'ant-tooltip';
        this._positions = [...DEFAULT_TOOLTIP_POSITIONS];
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnDestroy() {
        this.bpsVisibleChange.complete();
        this.destroy$.next();
        this.destroy$.complete();
    }
    show() {
        if (this.bpsVisible) {
            return;
        }
        if (!this.isEmpty()) {
            this.bpsVisible = true;
            this.bpsVisibleChange.next(true);
            this.cdr.detectChanges();
        }
        // for ltr for overlay to display tooltip in correct placement in rtl direction.
        if (this.origin && this.overlay && this.overlay.overlayRef && this.overlay.overlayRef.getDirection() === 'rtl') {
            this.overlay.overlayRef.setDirection('ltr');
        }
    }
    hide() {
        if (!this.bpsVisible) {
            return;
        }
        this.bpsVisible = false;
        this.bpsVisibleChange.next(false);
        this.cdr.detectChanges();
    }
    updateByDirective() {
        this.updateStyles();
        this.cdr.detectChanges();
        Promise.resolve().then(() => {
            this.updatePosition();
            this.updateVisibilityByTitle();
        });
    }
    /**
     * Force the component to update its position.
     */
    updatePosition() {
        if (this.origin && this.overlay && this.overlay.overlayRef) {
            this.overlay.overlayRef.updatePosition();
        }
    }
    onPositionChange(position) {
        this.preferredPlacement = getPlacementName(position);
        this.updateStyles();
        // We have to trigger immediate change detection or the element would blink.
        this.cdr.detectChanges();
    }
    setOverlayOrigin(origin) {
        this.origin = origin;
        this.cdr.markForCheck();
    }
    onClickOutside(event) {
        if (!this.origin.nativeElement.contains(event.target) && this.bpsTrigger !== null) {
            this.hide();
        }
    }
    /**
     * Hide the component while the content is empty.
     */
    updateVisibilityByTitle() {
        if (this.isEmpty()) {
            this.hide();
        }
    }
    updateStyles() {
        this._classMap = {
            [this.bpsOverlayClassName]: true,
            [`${this._prefix}-placement-${this.preferredPlacement}`]: true
        };
    }
    static { this.ɵfac = function NzTooltipBaseComponent_Factory(t) { return new (t || NzTooltipBaseComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i3.Directionality, 8), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: NzTooltipBaseComponent, viewQuery: function NzTooltipBaseComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.overlay = _t.first);
        } } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzTooltipBaseComponent, [{
        type: Directive
    }], () => [{ type: i0.ChangeDetectorRef }, { type: i3.Directionality, decorators: [{
                type: Optional
            }] }, { type: i1.NzNoAnimationDirective }], { overlay: [{
            type: ViewChild,
            args: ['overlay', { static: false }]
        }] }); })();
export function isTooltipEmpty(value) {
    return value instanceof TemplateRef ? false : value === '' || !isNotNil(value);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXRvb2x0aXAvYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBS0wsU0FBUyxFQUVULFlBQVksRUFJWixRQUFRLEVBR1IsV0FBVyxFQUNYLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUloRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFpQixNQUFNLDRCQUE0QixDQUFDO0FBRXRILE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztBQVM5RCxNQUFNLE9BQWdCLHNCQUFzQjtJQXlCMUM7O09BRUc7SUFDSCxJQUFjLE1BQU07UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDO0lBQ25ELENBQUM7SUFFRCxJQUFjLFlBQVk7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRUQsSUFBYyxnQkFBZ0I7UUFDNUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFjLFlBQVk7UUFDeEIsT0FBTyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRUQsSUFBYyxRQUFRO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDO0lBQ3ZE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QUFFLENBQUM7WUFDbEYsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNLLHVCQUF1QjtRQUM3QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLENBQUM7SUFDSCxDQUFDO0lBRVMsWUFBWTtRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ2YsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxJQUFJO1lBQ2hDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxjQUFjLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsSUFBSTtTQUMvRCxDQUFDO0lBQ0osQ0FBQzt1RkFuS21CLHNCQUFzQjtvRUFBdEIsc0JBQXNCOzs7Ozs7O2lGQUF0QixzQkFBc0I7Y0FGM0MsU0FBUzs7c0JBbUVMLFFBQVE7MERBN0Q4QixPQUFPO2tCQUEvQyxTQUFTO21CQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0FBdUt6QyxNQUFNLFVBQVUsY0FBYyxDQUFDLEtBQXdDO0lBQ3JFLE9BQU8sS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2pGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuaW1wb3J0IHsgQ2RrQ29ubmVjdGVkT3ZlcmxheSwgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLCBDb25uZWN0aW9uUG9zaXRpb25QYWlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIENvbXBvbmVudFJlZixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgYXNhcFNjaGVkdWxlciwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWxheSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlLCBQb3BDb25maXJtQ29uZmlnLCBQb3BvdmVyQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XHJcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgREVGQVVMVF9UT09MVElQX1BPU0lUSU9OUywgZ2V0UGxhY2VtZW50TmFtZSwgUE9TSVRJT05fTUFQLCBQT1NJVElPTl9UWVBFIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL292ZXJsYXknO1xyXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE5nQ2xhc3NJbnRlcmZhY2UsIE5nU3R5bGVJbnRlcmZhY2UsIE56U2FmZUFueSwgTnpUU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBpc05vdE5pbCwgdG9Cb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wZXJ0eU1hcHBpbmcge1xyXG4gIFtrZXk6IHN0cmluZ106IFtzdHJpbmcsICgpID0+IHVua25vd25dO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBOelRvb2x0aXBUcmlnZ2VyID0gJ2NsaWNrJyB8ICdmb2N1cycgfCAnaG92ZXInIHwgbnVsbDtcclxuXHJcbkBEaXJlY3RpdmUoKVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuICBhcnJvd1BvaW50QXRDZW50ZXI/OiBib29sZWFuO1xyXG4gIGNvbmZpZz86IFJlcXVpcmVkPFBvcG92ZXJDb25maWcgfCBQb3BDb25maXJtQ29uZmlnPjtcclxuICBkaXJlY3RpdmVUaXRsZT86IE56VFNUeXBlIHwgbnVsbDtcclxuICBkaXJlY3RpdmVDb250ZW50PzogTnpUU1R5cGUgfCBudWxsO1xyXG4gIHRpdGxlPzogTnpUU1R5cGUgfCBudWxsO1xyXG4gIGNvbnRlbnQ/OiBOelRTVHlwZSB8IG51bGw7XHJcbiAgdHJpZ2dlcj86IE56VG9vbHRpcFRyaWdnZXI7XHJcbiAgcGxhY2VtZW50Pzogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgb3JpZ2luPzogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XHJcbiAgdmlzaWJsZT86IGJvb2xlYW47XHJcbiAgbW91c2VFbnRlckRlbGF5PzogbnVtYmVyO1xyXG4gIG1vdXNlTGVhdmVEZWxheT86IG51bWJlcjtcclxuICBvdmVybGF5Q2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIHRvb2x0aXBUeXBlPzogc3RyaW5nO1xyXG4gIHBvcG92ZXJUeXBlPzogc3RyaW5nO1xyXG4gIG92ZXJsYXlTdHlsZT86IE5nU3R5bGVJbnRlcmZhY2U7XHJcbiAgdG9vbHRpcERpc2FibGVkPzogYm9vbGVhbjtcclxuICB2aXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICAvKipcclxuICAgKiBGb3IgY3JlYXRlIHRvb2x0aXAgZHluYW1pY2FsbHkuIFRoaXMgc2hvdWxkIGJlIG92ZXJyaWRlIGZvciBlYWNoIGRpZmZlcmVudCBjb21wb25lbnQuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGNvbXBvbmVudFJlZiE6IENvbXBvbmVudFJlZjxOelRvb2x0aXBCYXNlQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyB0cnVlIHRpdGxlIHRoYXQgd291bGQgYmUgdXNlZCBpbiBvdGhlciBwYXJ0cyBvbiB0aGlzIGNvbXBvbmVudC5cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgZ2V0IF90aXRsZSgpOiBOelRTVHlwZSB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMudGl0bGUgfHwgdGhpcy5kaXJlY3RpdmVUaXRsZSB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldCBfcG9wb3ZlclR5cGUoKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5wb3BvdmVyVHlwZSB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldCBfdG9vbHRpcERpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudG9vbHRpcERpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldCBfdG9vbHRpcFR5cGUoKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy50b29sdGlwVHlwZSB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldCBfY29udGVudCgpOiBOelRTVHlwZSB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGVudCB8fCB0aGlzLmRpcmVjdGl2ZUNvbnRlbnQgfHwgbnVsbDtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXQgX3RyaWdnZXIoKTogTnpUb29sdGlwVHJpZ2dlciB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMudHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnRyaWdnZXIgOiAnaG92ZXInO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldCBfcGxhY2VtZW50KCk6IHN0cmluZ1tdIHtcclxuICAgIGNvbnN0IHAgPSB0aGlzLnBsYWNlbWVudDtcclxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHApICYmIHAubGVuZ3RoID4gMCA/IHAgOiB0eXBlb2YgcCA9PT0gJ3N0cmluZycgJiYgcCA/IFtwXSA6IFsndG9wJ107XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IF92aXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgdGhpcy52aXNpYmxlICE9PSAndW5kZWZpbmVkJyA/IHRoaXMudmlzaWJsZSA6IHRoaXMuaW50ZXJuYWxWaXNpYmxlKSB8fCBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXQgX21vdXNlRW50ZXJEZWxheSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubW91c2VFbnRlckRlbGF5IHx8IDAuMTU7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IF9tb3VzZUxlYXZlRGVsYXkoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm1vdXNlTGVhdmVEZWxheSB8fCAwLjE7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IF9vdmVybGF5Q2xhc3NOYW1lKCk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheUNsYXNzTmFtZSB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldCBfb3ZlcmxheVN0eWxlKCk6IE5nU3R5bGVJbnRlcmZhY2UgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLm92ZXJsYXlTdHlsZSB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbnRlcm5hbFZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgcHJvdGVjdGVkIGdldFByb3h5UHJvcGVydHlNYXAoKTogUHJvcGVydHlNYXBwaW5nIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5vQW5pbWF0aW9uOiBbJ25vQW5pbWF0aW9uJywgKCkgPT4gISF0aGlzLm5vQW5pbWF0aW9uXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudD86IE56VG9vbHRpcEJhc2VDb21wb25lbnQ7XHJcblxyXG4gIHByb3RlY3RlZCByZWFkb25seSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHRyaWdnZXJEaXNwb3NhYmxlczogQXJyYXk8KCkgPT4gdm9pZD4gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBkZWxheVRpbWVyPzogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJvdGVjdGVkIGhvc3RWaWV3OiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJvdGVjdGVkIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByb3RlY3RlZCBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUsXHJcbiAgICBwcm90ZWN0ZWQgbnpDb25maWdTZXJ2aWNlPzogTnpDb25maWdTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IHRyaWdnZXIgfSA9IGNoYW5nZXM7XHJcblxyXG4gICAgaWYgKHRyaWdnZXIgJiYgIXRyaWdnZXIuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIHRoaXMucmVnaXN0ZXJUcmlnZ2VycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXNCeUNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNyZWF0ZUNvbXBvbmVudCgpO1xyXG4gICAgdGhpcy5yZWdpc3RlclRyaWdnZXJzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG5cclxuICAgIC8vIENsZWFyIHRvZ2dsaW5nIHRpbWVyLiBJc3N1ZSAjMzg3NSAjNDMxNyAjNDM4NlxyXG4gICAgdGhpcy5jbGVhclRvZ2dsaW5nVGltZXIoKTtcclxuICAgIHRoaXMucmVtb3ZlVHJpZ2dlckxpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgc2hvdygpOiB2b2lkIHtcclxuICAgIHRoaXMuY29tcG9uZW50Py5zaG93KCk7XHJcbiAgfVxyXG5cclxuICBoaWRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb21wb25lbnQ/LmhpZGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvcmNlIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlIGl0cyBwb3NpdGlvbi5cclxuICAgKi9cclxuICB1cGRhdGVQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLmNvbXBvbmVudC51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgZHluYW1pYyB0b29sdGlwIGNvbXBvbmVudC4gVGhpcyBtZXRob2QgY2FuIGJlIG92ZXJyaWRlLlxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBjcmVhdGVDb21wb25lbnQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudFJlZjtcclxuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIE56VG9vbHRpcEJhc2VDb21wb25lbnQ7XHJcblxyXG4gICAgLy8gUmVtb3ZlIHRoZSBjb21wb25lbnQncyBET00gYmVjYXVzZSBpdCBzaG91bGQgYmUgaW4gdGhlIG92ZXJsYXkgY29udGFpbmVyLlxyXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChcclxuICAgICAgdGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSxcclxuICAgICAgY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnRcclxuICAgICk7XHJcbiAgICB0aGlzLmNvbXBvbmVudC5zZXRPdmVybGF5T3JpZ2luKHRoaXMub3JpZ2luIHx8IHRoaXMuZWxlbWVudFJlZik7XHJcblxyXG4gICAgdGhpcy5pbml0UHJvcGVydGllcygpO1xyXG5cclxuICAgIGNvbnN0IG5nVmlzaWJsZUNoYW5nZSQgPSB0aGlzLmNvbXBvbmVudC5icHNWaXNpYmxlQ2hhbmdlLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XHJcblxyXG4gICAgbmdWaXNpYmxlQ2hhbmdlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCh2aXNpYmxlOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIHRoaXMuaW50ZXJuYWxWaXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQodmlzaWJsZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBJbiBzb21lIGNhc2VzLCB0aGUgcmVuZGVyaW5nIHRha2VzIGludG8gYWNjb3VudCB0aGUgaGVpZ2h0IGF0IHdoaWNoIHRoZSBgYXJyb3dgIGlzIGluIHdyb25nIHBsYWNlLFxyXG4gICAgLy8gc28gYGNka2Agc2V0cyB0aGUgY29udGFpbmVyIHBvc2l0aW9uIGluY29ycmVjdGx5LlxyXG4gICAgLy8gVG8gYXZvaWQgdGhpcywgYWZ0ZXIgcGxhY2luZyB0aGUgYGFycm93YCBpbiB0aGUgY29ycmVjdCBwb3NpdGlvbiwgd2Ugc2hvdWxkIGByZS1jYWxjdWxhdGVgIHRoZSBwb3NpdGlvbiBvZiB0aGUgYG92ZXJsYXlgLlxyXG4gICAgbmdWaXNpYmxlQ2hhbmdlJFxyXG4gICAgICAucGlwZShcclxuICAgICAgICBmaWx0ZXIoKHZpc2libGU6IGJvb2xlYW4pID0+IHZpc2libGUpLFxyXG4gICAgICAgIGRlbGF5KDAsIGFzYXBTY2hlZHVsZXIpLFxyXG4gICAgICAgIGZpbHRlcigoKSA9PiBCb29sZWFuKHRoaXMuY29tcG9uZW50Py5vdmVybGF5Py5vdmVybGF5UmVmKSksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQ/LnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlZ2lzdGVyVHJpZ2dlcnMoKTogdm9pZCB7XHJcbiAgICAvLyBXaGVuIHRoZSBtZXRob2QgZ2V0cyBpbnZva2VkLCBhbGwgcHJvcGVydGllcyBoYXMgYmVlbiBzeW5jZWQgdG8gdGhlIGR5bmFtaWMgY29tcG9uZW50LlxyXG4gICAgLy8gQWZ0ZXIgcmVtb3ZpbmcgdGhlIG9sZCBBUEksIHdlIGNhbiBqdXN0IGNoZWNrIHRoZSBkaXJlY3RpdmUncyBvd24gYG56VHJpZ2dlcmAuXHJcbiAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgY29uc3QgdHJpZ2dlciA9IHRoaXMudHJpZ2dlcjtcclxuXHJcbiAgICB0aGlzLnJlbW92ZVRyaWdnZXJMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICBpZiAodHJpZ2dlciA9PT0gJ2hvdmVyJykge1xyXG4gICAgICBsZXQgb3ZlcmxheUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgICB0aGlzLnRyaWdnZXJEaXNwb3NhYmxlcy5wdXNoKFxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnbW91c2VlbnRlcicsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZGVsYXlFbnRlckxlYXZlKHRydWUsIHRydWUsIHRoaXMuX21vdXNlRW50ZXJEZWxheSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgICAgdGhpcy50cmlnZ2VyRGlzcG9zYWJsZXMucHVzaChcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihlbCwgJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRlbGF5RW50ZXJMZWF2ZSh0cnVlLCBmYWxzZSwgdGhpcy5fbW91c2VMZWF2ZURlbGF5KTtcclxuICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudD8ub3ZlcmxheS5vdmVybGF5UmVmICYmICFvdmVybGF5RWxlbWVudCkge1xyXG4gICAgICAgICAgICBvdmVybGF5RWxlbWVudCA9IHRoaXMuY29tcG9uZW50Lm92ZXJsYXkub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudDtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRGlzcG9zYWJsZXMucHVzaChcclxuICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihvdmVybGF5RWxlbWVudCwgJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGF5RW50ZXJMZWF2ZShmYWxzZSwgdHJ1ZSwgdGhpcy5fbW91c2VFbnRlckRlbGF5KTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJEaXNwb3NhYmxlcy5wdXNoKFxyXG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKG92ZXJsYXlFbGVtZW50LCAnbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsYXlFbnRlckxlYXZlKGZhbHNlLCBmYWxzZSwgdGhpcy5fbW91c2VMZWF2ZURlbGF5KTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHRyaWdnZXIgPT09ICdmb2N1cycpIHtcclxuICAgICAgdGhpcy50cmlnZ2VyRGlzcG9zYWJsZXMucHVzaCh0aGlzLnJlbmRlcmVyLmxpc3RlbihlbCwgJ2ZvY3VzaW4nLCAoKSA9PiB0aGlzLnNob3coKSkpO1xyXG4gICAgICB0aGlzLnRyaWdnZXJEaXNwb3NhYmxlcy5wdXNoKHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnZm9jdXNvdXQnLCAoKSA9PiB0aGlzLmhpZGUoKSkpO1xyXG4gICAgfSBlbHNlIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XHJcbiAgICAgIHRoaXMudHJpZ2dlckRpc3Bvc2FibGVzLnB1c2goXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oZWwsICdjbGljaycsIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB0aGlzLnNob3coKTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgLy8gRWxzZSBkbyBub3RoaW5nIGJlY2F1c2UgdXNlciB3YW50cyB0byBjb250cm9sIHRoZSB2aXNpYmlsaXR5IHByb2dyYW1tYXRpY2FsbHkuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVByb3BlcnRpZXNCeUNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVQcm9wZXJ0aWVzQnlLZXlzKE9iamVjdC5rZXlzKGNoYW5nZXMpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlUHJvcGVydGllc0J5S2V5cyhrZXlzPzogc3RyaW5nW10pOiB2b2lkIHtcclxuICAgIGNvbnN0IG1hcHBpbmdQcm9wZXJ0aWVzOiBQcm9wZXJ0eU1hcHBpbmcgPSB7XHJcbiAgICAgIC8vIGNvbW1vbiBtYXBwaW5nc1xyXG4gICAgICB0aXRsZTogWydicHNUaXRsZScsICgpID0+IHRoaXMuX3RpdGxlXSxcclxuICAgICAgZGlyZWN0aXZlVGl0bGU6IFsnYnBzVGl0bGUnLCAoKSA9PiB0aGlzLl90aXRsZV0sXHJcbiAgICAgIHRvb2x0aXBUeXBlOiBbJ2Jwc1Rvb2x0aXBUeXBlJywgKCkgPT4gdGhpcy5fdG9vbHRpcFR5cGVdLFxyXG4gICAgICBwb3BvdmVyVHlwZTogWydicHNQb3BvdmVyVHlwZScsICgpID0+IHRoaXMuX3BvcG92ZXJUeXBlXSxcclxuICAgICAgdG9vbHRpcERpc2FibGVkOiBbJ2Jwc1Rvb2x0aXBEaXNhYmxlZCcsICgpID0+IHRoaXMuX3Rvb2x0aXBEaXNhYmxlZF0sXHJcbiAgICAgIGNvbnRlbnQ6IFsnYnBzQ29udGVudCcsICgpID0+IHRoaXMuX2NvbnRlbnRdLFxyXG4gICAgICBkaXJlY3RpdmVDb250ZW50OiBbJ2Jwc0NvbnRlbnQnLCAoKSA9PiB0aGlzLl9jb250ZW50XSxcclxuICAgICAgdHJpZ2dlcjogWydicHNUcmlnZ2VyJywgKCkgPT4gdGhpcy5fdHJpZ2dlcl0sXHJcbiAgICAgIHBsYWNlbWVudDogWydicHNQbGFjZW1lbnQnLCAoKSA9PiB0aGlzLl9wbGFjZW1lbnRdLFxyXG4gICAgICB2aXNpYmxlOiBbJ2Jwc1Zpc2libGUnLCAoKSA9PiB0aGlzLl92aXNpYmxlXSxcclxuICAgICAgbW91c2VFbnRlckRlbGF5OiBbJ2Jwc01vdXNlRW50ZXJEZWxheScsICgpID0+IHRoaXMuX21vdXNlRW50ZXJEZWxheV0sXHJcbiAgICAgIG1vdXNlTGVhdmVEZWxheTogWydicHNNb3VzZUxlYXZlRGVsYXknLCAoKSA9PiB0aGlzLl9tb3VzZUxlYXZlRGVsYXldLFxyXG4gICAgICBvdmVybGF5Q2xhc3NOYW1lOiBbJ2Jwc092ZXJsYXlDbGFzc05hbWUnLCAoKSA9PiB0aGlzLl9vdmVybGF5Q2xhc3NOYW1lXSxcclxuICAgICAgb3ZlcmxheVN0eWxlOiBbJ2Jwc092ZXJsYXlTdHlsZScsICgpID0+IHRoaXMuX292ZXJsYXlTdHlsZV0sXHJcbiAgICAgIGFycm93UG9pbnRBdENlbnRlcjogWydicHNBcnJvd1BvaW50QXRDZW50ZXInLCAoKSA9PiB0aGlzLmFycm93UG9pbnRBdENlbnRlcl0sXHJcbiAgICAgIC4uLnRoaXMuZ2V0UHJveHlQcm9wZXJ0eU1hcCgpXHJcbiAgICB9O1xyXG5cclxuICAgIChrZXlzIHx8IE9iamVjdC5rZXlzKG1hcHBpbmdQcm9wZXJ0aWVzKS5maWx0ZXIoa2V5ID0+ICFrZXkuc3RhcnRzV2l0aCgnZGlyZWN0aXZlJykpKS5mb3JFYWNoKFxyXG4gICAgICAocHJvcGVydHk6IE56U2FmZUFueSkgPT4ge1xyXG4gICAgICAgIGlmIChtYXBwaW5nUHJvcGVydGllc1twcm9wZXJ0eV0pIHtcclxuICAgICAgICAgIGNvbnN0IFtuYW1lLCB2YWx1ZUZuXSA9IG1hcHBpbmdQcm9wZXJ0aWVzW3Byb3BlcnR5XTtcclxuICAgICAgICAgIHRoaXMudXBkYXRlQ29tcG9uZW50VmFsdWUobmFtZSwgdmFsdWVGbigpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5jb21wb25lbnQ/LnVwZGF0ZUJ5RGlyZWN0aXZlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRQcm9wZXJ0aWVzKCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVQcm9wZXJ0aWVzQnlLZXlzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUNvbXBvbmVudFZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogTnpTYWZlQW55KTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIHRoaXMuY29tcG9uZW50W2tleV0gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVsYXlFbnRlckxlYXZlKGlzT3JpZ2luOiBib29sZWFuLCBpc0VudGVyOiBib29sZWFuLCBkZWxheTogbnVtYmVyID0gLTEpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRlbGF5VGltZXIpIHtcclxuICAgICAgdGhpcy5jbGVhclRvZ2dsaW5nVGltZXIoKTtcclxuICAgIH0gZWxzZSBpZiAoZGVsYXkgPiAwKSB7XHJcbiAgICAgIHRoaXMuZGVsYXlUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGVsYXlUaW1lciA9IHVuZGVmaW5lZDtcclxuICAgICAgICBpc0VudGVyID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcclxuICAgICAgfSwgZGVsYXkgKiAxMDAwKSBhcyBhbnk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBgaXNPcmlnaW5gIGlzIHVzZWQgZHVlIHRvIHRoZSB0b29sdGlwIHdpbGwgbm90IGhpZGUgaW1tZWRpYXRlbHlcclxuICAgICAgLy8gKG1heSBjYXVzZWQgYnkgdGhlIGZhZGUtb3V0IGFuaW1hdGlvbikuXHJcbiAgICAgIGlzRW50ZXIgJiYgaXNPcmlnaW4gPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVUcmlnZ2VyTGlzdGVuZXJzKCk6IHZvaWQge1xyXG4gICAgdGhpcy50cmlnZ2VyRGlzcG9zYWJsZXMuZm9yRWFjaChkaXNwb3NlID0+IGRpc3Bvc2UoKSk7XHJcbiAgICB0aGlzLnRyaWdnZXJEaXNwb3NhYmxlcy5sZW5ndGggPSAwO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhclRvZ2dsaW5nVGltZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kZWxheVRpbWVyKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5VGltZXIpO1xyXG4gICAgICB0aGlzLmRlbGF5VGltZXIgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKClcclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9kaXJlY3RpdmUtY2xhc3Mtc3VmZml4XHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOelRvb2x0aXBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNWaXNpYmxlOiBCb29sZWFuSW5wdXQ7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc0Fycm93UG9pbnRBdENlbnRlcjogQm9vbGVhbklucHV0O1xyXG5cclxuICBAVmlld0NoaWxkKCdvdmVybGF5JywgeyBzdGF0aWM6IGZhbHNlIH0pIG92ZXJsYXkhOiBDZGtDb25uZWN0ZWRPdmVybGF5O1xyXG5cclxuICBicHNUaXRsZTogTnpUU1R5cGUgfCBudWxsID0gbnVsbDtcclxuICBicHNDb250ZW50OiBOelRTVHlwZSB8IG51bGwgPSBudWxsO1xyXG4gIGJwc0Fycm93UG9pbnRBdENlbnRlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGJwc092ZXJsYXlDbGFzc05hbWUhOiBzdHJpbmc7XHJcbiAgYnBzT3ZlcmxheVN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlID0ge307XHJcbiAgYnBzQmFja2Ryb3AgPSBmYWxzZTtcclxuICBicHNNb3VzZUVudGVyRGVsYXk/OiBudW1iZXI7XHJcbiAgYnBzTW91c2VMZWF2ZURlbGF5PzogbnVtYmVyO1xyXG4gIGJwc1Rvb2x0aXBUeXBlPzogc3RyaW5nO1xyXG4gIGJwc1BvcG92ZXJUeXBlPzogc3RyaW5nO1xyXG4gIGJwc1Rvb2x0aXBEaXNhYmxlZD86IGJvb2xlYW47XHJcblxyXG4gIGJwc1Zpc2libGVDaGFuZ2UgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG5cclxuICBzZXQgYnBzVmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgY29uc3QgdmlzaWJsZSA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICBpZiAodGhpcy5fdmlzaWJsZSAhPT0gdmlzaWJsZSkge1xyXG4gICAgICB0aGlzLl92aXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgdGhpcy5icHNWaXNpYmxlQ2hhbmdlLm5leHQodmlzaWJsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgYnBzVmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xyXG4gIH1cclxuXHJcbiAgX3Zpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgc2V0IGJwc1RyaWdnZXIodmFsdWU6IE56VG9vbHRpcFRyaWdnZXIpIHtcclxuICAgIHRoaXMuX3RyaWdnZXIgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBicHNUcmlnZ2VyKCk6IE56VG9vbHRpcFRyaWdnZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RyaWdnZXI7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgX3RyaWdnZXI6IE56VG9vbHRpcFRyaWdnZXIgPSAnaG92ZXInO1xyXG5cclxuICBzZXQgYnBzUGxhY2VtZW50KHZhbHVlOiBQT1NJVElPTl9UWVBFW10pIHtcclxuICAgIGNvbnN0IHByZWZlcnJlZFBvc2l0aW9uID0gdmFsdWUubWFwKHBsYWNlbWVudCA9PiBQT1NJVElPTl9NQVBbcGxhY2VtZW50XSk7XHJcbiAgICB0aGlzLl9wb3NpdGlvbnMgPSBbLi4ucHJlZmVycmVkUG9zaXRpb24sIC4uLkRFRkFVTFRfVE9PTFRJUF9QT1NJVElPTlNdO1xyXG4gIH1cclxuXHJcbiAgcHJlZmVycmVkUGxhY2VtZW50OiBzdHJpbmcgPSAndG9wJztcclxuXHJcbiAgb3JpZ2luITogRWxlbWVudFJlZjxOelNhZmVBbnk+O1xyXG5cclxuICBwdWJsaWMgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcclxuXHJcbiAgX2NsYXNzTWFwOiBOZ0NsYXNzSW50ZXJmYWNlID0ge307XHJcblxyXG4gIF9wcmVmaXggPSAnYW50LXRvb2x0aXAnO1xyXG5cclxuICBfcG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbLi4uREVGQVVMVF9UT09MVElQX1BPU0lUSU9OU107XHJcblxyXG4gIHByb3RlY3RlZCBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcclxuICAgIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuYnBzVmlzaWJsZUNoYW5nZS5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBzaG93KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYnBzVmlzaWJsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmlzRW1wdHkoKSkge1xyXG4gICAgICB0aGlzLmJwc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgICB0aGlzLmJwc1Zpc2libGVDaGFuZ2UubmV4dCh0cnVlKTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZvciBsdHIgZm9yIG92ZXJsYXkgdG8gZGlzcGxheSB0b29sdGlwIGluIGNvcnJlY3QgcGxhY2VtZW50IGluIHJ0bCBkaXJlY3Rpb24uXHJcbiAgICBpZiAodGhpcy5vcmlnaW4gJiYgdGhpcy5vdmVybGF5ICYmIHRoaXMub3ZlcmxheS5vdmVybGF5UmVmICYmIHRoaXMub3ZlcmxheS5vdmVybGF5UmVmLmdldERpcmVjdGlvbigpID09PSAncnRsJykge1xyXG4gICAgICB0aGlzLm92ZXJsYXkub3ZlcmxheVJlZi5zZXREaXJlY3Rpb24oJ2x0cicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGlkZSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5icHNWaXNpYmxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmJwc1Zpc2libGUgPSBmYWxzZTtcclxuICAgIHRoaXMuYnBzVmlzaWJsZUNoYW5nZS5uZXh0KGZhbHNlKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUJ5RGlyZWN0aXZlKCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVTdHlsZXMoKTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuXHJcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVZpc2liaWxpdHlCeVRpdGxlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvcmNlIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlIGl0cyBwb3NpdGlvbi5cclxuICAgKi9cclxuICB1cGRhdGVQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9yaWdpbiAmJiB0aGlzLm92ZXJsYXkgJiYgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYpIHtcclxuICAgICAgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xyXG4gICAgdGhpcy5wcmVmZXJyZWRQbGFjZW1lbnQgPSBnZXRQbGFjZW1lbnROYW1lKHBvc2l0aW9uKSE7XHJcbiAgICB0aGlzLnVwZGF0ZVN0eWxlcygpO1xyXG5cclxuICAgIC8vIFdlIGhhdmUgdG8gdHJpZ2dlciBpbW1lZGlhdGUgY2hhbmdlIGRldGVjdGlvbiBvciB0aGUgZWxlbWVudCB3b3VsZCBibGluay5cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHNldE92ZXJsYXlPcmlnaW4ob3JpZ2luOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pik6IHZvaWQge1xyXG4gICAgdGhpcy5vcmlnaW4gPSBvcmlnaW47XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2tPdXRzaWRlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMub3JpZ2luLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiB0aGlzLmJwc1RyaWdnZXIgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIaWRlIHRoZSBjb21wb25lbnQgd2hpbGUgdGhlIGNvbnRlbnQgaXMgZW1wdHkuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSB1cGRhdGVWaXNpYmlsaXR5QnlUaXRsZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkge1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCB1cGRhdGVTdHlsZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jbGFzc01hcCA9IHtcclxuICAgICAgW3RoaXMuYnBzT3ZlcmxheUNsYXNzTmFtZV06IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLl9wcmVmaXh9LXBsYWNlbWVudC0ke3RoaXMucHJlZmVycmVkUGxhY2VtZW50fWBdOiB0cnVlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW1wdHkgY29tcG9uZW50IGNhbm5vdCBiZSBvcGVuZWQuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGFic3RyYWN0IGlzRW1wdHkoKTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVG9vbHRpcEVtcHR5KHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwpOiBib29sZWFuIHtcclxuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZiA/IGZhbHNlIDogdmFsdWUgPT09ICcnIHx8ICFpc05vdE5pbCh2YWx1ZSk7XHJcbn1cclxuIl19