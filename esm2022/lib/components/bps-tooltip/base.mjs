import { Directive, EventEmitter, Optional, TemplateRef, ViewChild } from '@angular/core';
import { asapScheduler, Subject } from 'rxjs';
import { delay, distinctUntilChanged, filter, takeUntil } from 'rxjs/operators';
import { DEFAULT_TOOLTIP_POSITIONS, getPlacementName, POSITION_MAP } from 'ng-zorro-antd/core/overlay';
import { isNotNil, toBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/no-animation";
import * as i2 from "ng-zorro-antd/core/config";
import * as i3 from "@angular/cdk/bidi";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzTooltipBaseDirective, deps: [{ token: i0.ElementRef }, { token: i0.ViewContainerRef }, { token: i0.ComponentFactoryResolver }, { token: i0.Renderer2 }, { token: i1.NzNoAnimationDirective }, { token: i2.NzConfigService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: NzTooltipBaseDirective, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzTooltipBaseDirective, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i0.ComponentFactoryResolver }, { type: i0.Renderer2 }, { type: i1.NzNoAnimationDirective }, { type: i2.NzConfigService }]; } });
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzTooltipBaseComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i3.Directionality, optional: true }, { token: i1.NzNoAnimationDirective }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: NzTooltipBaseComponent, viewQueries: [{ propertyName: "overlay", first: true, predicate: ["overlay"], descendants: true }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzTooltipBaseComponent, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i3.Directionality, decorators: [{
                    type: Optional
                }] }, { type: i1.NzNoAnimationDirective }]; }, propDecorators: { overlay: [{
                type: ViewChild,
                args: ['overlay', { static: false }]
            }] } });
export function isTooltipEmpty(value) {
    return value instanceof TemplateRef ? false : value === '' || !isNotNil(value);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXRvb2x0aXAvYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBS0wsU0FBUyxFQUVULFlBQVksRUFJWixRQUFRLEVBR1IsV0FBVyxFQUNYLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUloRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFpQixNQUFNLDRCQUE0QixDQUFDO0FBRXRILE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBUzlELE1BQU0sT0FBZ0Isc0JBQXNCO0lBeUIxQzs7T0FFRztJQUNILElBQWMsTUFBTTtRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUM7SUFDbkQsQ0FBQztJQUVELElBQWMsWUFBWTtRQUN4QixPQUFPLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxJQUFjLGdCQUFnQjtRQUM1QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQWMsWUFBWTtRQUN4QixPQUFPLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxJQUFjLFFBQVE7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUM7SUFDdkQs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O1lBQ2YsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxJQUFJO1lBQ2hDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxjQUFjLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsSUFBSTtTQUMvRCxDQUFDO0lBQ0osQ0FBQzsrR0FuS21CLHNCQUFzQjttR0FBdEIsc0JBQXNCOzs0RkFBdEIsc0JBQXNCO2tCQUYzQyxTQUFTOzswQkFtRUwsUUFBUTtpRkE3RDhCLE9BQU87c0JBQS9DLFNBQVM7dUJBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7QUF1S3pDLE1BQU0sVUFBVSxjQUFjLENBQUMsS0FBd0M7SUFDckUsT0FBTyxLQUFLLFlBQVksV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xyXG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBhc2FwU2NoZWR1bGVyLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlbGF5LCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIFBvcENvbmZpcm1Db25maWcsIFBvcG92ZXJDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcclxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xyXG5pbXBvcnQgeyBERUZBVUxUX1RPT0xUSVBfUE9TSVRJT05TLCBnZXRQbGFjZW1lbnROYW1lLCBQT1NJVElPTl9NQVAsIFBPU0lUSU9OX1RZUEUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3ZlcmxheSc7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTmdDbGFzc0ludGVyZmFjZSwgTmdTdHlsZUludGVyZmFjZSwgTnpTYWZlQW55LCBOelRTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IGlzTm90TmlsLCB0b0Jvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BlcnR5TWFwcGluZyB7XHJcbiAgW2tleTogc3RyaW5nXTogW3N0cmluZywgKCkgPT4gdW5rbm93bl07XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIE56VG9vbHRpcFRyaWdnZXIgPSAnY2xpY2snIHwgJ2ZvY3VzJyB8ICdob3ZlcicgfCBudWxsO1xyXG5cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOelRvb2x0aXBCYXNlRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gIGFycm93UG9pbnRBdENlbnRlcj86IGJvb2xlYW47XHJcbiAgY29uZmlnPzogUmVxdWlyZWQ8UG9wb3ZlckNvbmZpZyB8IFBvcENvbmZpcm1Db25maWc+O1xyXG4gIGRpcmVjdGl2ZVRpdGxlPzogTnpUU1R5cGUgfCBudWxsO1xyXG4gIGRpcmVjdGl2ZUNvbnRlbnQ/OiBOelRTVHlwZSB8IG51bGw7XHJcbiAgdGl0bGU/OiBOelRTVHlwZSB8IG51bGw7XHJcbiAgY29udGVudD86IE56VFNUeXBlIHwgbnVsbDtcclxuICB0cmlnZ2VyPzogTnpUb29sdGlwVHJpZ2dlcjtcclxuICBwbGFjZW1lbnQ/OiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICBvcmlnaW4/OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcclxuICB2aXNpYmxlPzogYm9vbGVhbjtcclxuICBtb3VzZUVudGVyRGVsYXk/OiBudW1iZXI7XHJcbiAgbW91c2VMZWF2ZURlbGF5PzogbnVtYmVyO1xyXG4gIG92ZXJsYXlDbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgdG9vbHRpcFR5cGU/OiBzdHJpbmc7XHJcbiAgcG9wb3ZlclR5cGU/OiBzdHJpbmc7XHJcbiAgb3ZlcmxheVN0eWxlPzogTmdTdHlsZUludGVyZmFjZTtcclxuICB0b29sdGlwRGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIHZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvciBjcmVhdGUgdG9vbHRpcCBkeW5hbWljYWxseS4gVGhpcyBzaG91bGQgYmUgb3ZlcnJpZGUgZm9yIGVhY2ggZGlmZmVyZW50IGNvbXBvbmVudC5cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgY29tcG9uZW50UmVmITogQ29tcG9uZW50UmVmPE56VG9vbHRpcEJhc2VDb21wb25lbnQ+O1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIHRydWUgdGl0bGUgdGhhdCB3b3VsZCBiZSB1c2VkIGluIG90aGVyIHBhcnRzIG9uIHRoaXMgY29tcG9uZW50LlxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBnZXQgX3RpdGxlKCk6IE56VFNUeXBlIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy50aXRsZSB8fCB0aGlzLmRpcmVjdGl2ZVRpdGxlIHx8IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IF9wb3BvdmVyVHlwZSgpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLnBvcG92ZXJUeXBlIHx8IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IF90b29sdGlwRGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy50b29sdGlwRGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IF90b29sdGlwVHlwZSgpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLnRvb2x0aXBUeXBlIHx8IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IF9jb250ZW50KCk6IE56VFNUeXBlIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50IHx8IHRoaXMuZGlyZWN0aXZlQ29udGVudCB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldCBfdHJpZ2dlcigpOiBOelRvb2x0aXBUcmlnZ2VyIHtcclxuICAgIHJldHVybiB0eXBlb2YgdGhpcy50cmlnZ2VyICE9PSAndW5kZWZpbmVkJyA/IHRoaXMudHJpZ2dlciA6ICdob3Zlcic7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IF9wbGFjZW1lbnQoKTogc3RyaW5nW10ge1xyXG4gICAgY29uc3QgcCA9IHRoaXMucGxhY2VtZW50O1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocCkgJiYgcC5sZW5ndGggPiAwID8gcCA6IHR5cGVvZiBwID09PSAnc3RyaW5nJyAmJiBwID8gW3BdIDogWyd0b3AnXTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXQgX3Zpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiB0aGlzLnZpc2libGUgIT09ICd1bmRlZmluZWQnID8gdGhpcy52aXNpYmxlIDogdGhpcy5pbnRlcm5hbFZpc2libGUpIHx8IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldCBfbW91c2VFbnRlckRlbGF5KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5tb3VzZUVudGVyRGVsYXkgfHwgMC4xNTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXQgX21vdXNlTGVhdmVEZWxheSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubW91c2VMZWF2ZURlbGF5IHx8IDAuMTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXQgX292ZXJsYXlDbGFzc05hbWUoKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5Q2xhc3NOYW1lIHx8IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IF9vdmVybGF5U3R5bGUoKTogTmdTdHlsZUludGVyZmFjZSB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheVN0eWxlIHx8IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGludGVybmFsVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICBwcm90ZWN0ZWQgZ2V0UHJveHlQcm9wZXJ0eU1hcCgpOiBQcm9wZXJ0eU1hcHBpbmcge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbm9BbmltYXRpb246IFsnbm9BbmltYXRpb24nLCAoKSA9PiAhIXRoaXMubm9BbmltYXRpb25dXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50PzogTnpUb29sdGlwQmFzZUNvbXBvbmVudDtcclxuXHJcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgdHJpZ2dlckRpc3Bvc2FibGVzOiBBcnJheTwoKSA9PiB2b2lkPiA9IFtdO1xyXG5cclxuICBwcml2YXRlIGRlbGF5VGltZXI/OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcm90ZWN0ZWQgaG9zdFZpZXc6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcm90ZWN0ZWQgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJvdGVjdGVkIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSxcclxuICAgIHByb3RlY3RlZCBuekNvbmZpZ1NlcnZpY2U/OiBOekNvbmZpZ1NlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgdHJpZ2dlciB9ID0gY2hhbmdlcztcclxuXHJcbiAgICBpZiAodHJpZ2dlciAmJiAhdHJpZ2dlci5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgdGhpcy5yZWdpc3RlclRyaWdnZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlUHJvcGVydGllc0J5Q2hhbmdlcyhjaGFuZ2VzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcbiAgICB0aGlzLnJlZ2lzdGVyVHJpZ2dlcnMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcblxyXG4gICAgLy8gQ2xlYXIgdG9nZ2xpbmcgdGltZXIuIElzc3VlICMzODc1ICM0MzE3ICM0Mzg2XHJcbiAgICB0aGlzLmNsZWFyVG9nZ2xpbmdUaW1lcigpO1xyXG4gICAgdGhpcy5yZW1vdmVUcmlnZ2VyTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBzaG93KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb21wb25lbnQ/LnNob3coKTtcclxuICB9XHJcblxyXG4gIGhpZGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbXBvbmVudD8uaGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRm9yY2UgdGhlIGNvbXBvbmVudCB0byB1cGRhdGUgaXRzIHBvc2l0aW9uLlxyXG4gICAqL1xyXG4gIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50LnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBkeW5hbWljIHRvb2x0aXAgY29tcG9uZW50LiBUaGlzIG1ldGhvZCBjYW4gYmUgb3ZlcnJpZGUuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGNyZWF0ZUNvbXBvbmVudCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuY29tcG9uZW50UmVmO1xyXG4gICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgTnpUb29sdGlwQmFzZUNvbXBvbmVudDtcclxuXHJcbiAgICAvLyBSZW1vdmUgdGhlIGNvbXBvbmVudCdzIERPTSBiZWNhdXNlIGl0IHNob3VsZCBiZSBpbiB0aGUgb3ZlcmxheSBjb250YWluZXIuXHJcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKFxyXG4gICAgICB0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLFxyXG4gICAgICBjb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudFxyXG4gICAgKTtcclxuICAgIHRoaXMuY29tcG9uZW50LnNldE92ZXJsYXlPcmlnaW4odGhpcy5vcmlnaW4gfHwgdGhpcy5lbGVtZW50UmVmKTtcclxuXHJcbiAgICB0aGlzLmluaXRQcm9wZXJ0aWVzKCk7XHJcblxyXG4gICAgY29uc3QgbmdWaXNpYmxlQ2hhbmdlJCA9IHRoaXMuY29tcG9uZW50LmJwc1Zpc2libGVDaGFuZ2UucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcclxuXHJcbiAgICBuZ1Zpc2libGVDaGFuZ2UkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKHZpc2libGU6IGJvb2xlYW4pID0+IHtcclxuICAgICAgdGhpcy5pbnRlcm5hbFZpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEluIHNvbWUgY2FzZXMsIHRoZSByZW5kZXJpbmcgdGFrZXMgaW50byBhY2NvdW50IHRoZSBoZWlnaHQgYXQgd2hpY2ggdGhlIGBhcnJvd2AgaXMgaW4gd3JvbmcgcGxhY2UsXHJcbiAgICAvLyBzbyBgY2RrYCBzZXRzIHRoZSBjb250YWluZXIgcG9zaXRpb24gaW5jb3JyZWN0bHkuXHJcbiAgICAvLyBUbyBhdm9pZCB0aGlzLCBhZnRlciBwbGFjaW5nIHRoZSBgYXJyb3dgIGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uLCB3ZSBzaG91bGQgYHJlLWNhbGN1bGF0ZWAgdGhlIHBvc2l0aW9uIG9mIHRoZSBgb3ZlcmxheWAuXHJcbiAgICBuZ1Zpc2libGVDaGFuZ2UkXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGZpbHRlcigodmlzaWJsZTogYm9vbGVhbikgPT4gdmlzaWJsZSksXHJcbiAgICAgICAgZGVsYXkoMCwgYXNhcFNjaGVkdWxlciksXHJcbiAgICAgICAgZmlsdGVyKCgpID0+IEJvb2xlYW4odGhpcy5jb21wb25lbnQ/Lm92ZXJsYXk/Lm92ZXJsYXlSZWYpKSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudD8udXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcmVnaXN0ZXJUcmlnZ2VycygpOiB2b2lkIHtcclxuICAgIC8vIFdoZW4gdGhlIG1ldGhvZCBnZXRzIGludm9rZWQsIGFsbCBwcm9wZXJ0aWVzIGhhcyBiZWVuIHN5bmNlZCB0byB0aGUgZHluYW1pYyBjb21wb25lbnQuXHJcbiAgICAvLyBBZnRlciByZW1vdmluZyB0aGUgb2xkIEFQSSwgd2UgY2FuIGp1c3QgY2hlY2sgdGhlIGRpcmVjdGl2ZSdzIG93biBgbnpUcmlnZ2VyYC5cclxuICAgIGNvbnN0IGVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjb25zdCB0cmlnZ2VyID0gdGhpcy50cmlnZ2VyO1xyXG5cclxuICAgIHRoaXMucmVtb3ZlVHJpZ2dlckxpc3RlbmVycygpO1xyXG5cclxuICAgIGlmICh0cmlnZ2VyID09PSAnaG92ZXInKSB7XHJcbiAgICAgIGxldCBvdmVybGF5RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICAgIHRoaXMudHJpZ2dlckRpc3Bvc2FibGVzLnB1c2goXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oZWwsICdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5kZWxheUVudGVyTGVhdmUodHJ1ZSwgdHJ1ZSwgdGhpcy5fbW91c2VFbnRlckRlbGF5KTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnRyaWdnZXJEaXNwb3NhYmxlcy5wdXNoKFxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZGVsYXlFbnRlckxlYXZlKHRydWUsIGZhbHNlLCB0aGlzLl9tb3VzZUxlYXZlRGVsYXkpO1xyXG4gICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50Py5vdmVybGF5Lm92ZXJsYXlSZWYgJiYgIW92ZXJsYXlFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIG92ZXJsYXlFbGVtZW50ID0gdGhpcy5jb21wb25lbnQub3ZlcmxheS5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50O1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJEaXNwb3NhYmxlcy5wdXNoKFxyXG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKG92ZXJsYXlFbGVtZW50LCAnbW91c2VlbnRlcicsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsYXlFbnRlckxlYXZlKGZhbHNlLCB0cnVlLCB0aGlzLl9tb3VzZUVudGVyRGVsYXkpO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckRpc3Bvc2FibGVzLnB1c2goXHJcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4ob3ZlcmxheUVsZW1lbnQsICdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxheUVudGVyTGVhdmUoZmFsc2UsIGZhbHNlLCB0aGlzLl9tb3VzZUxlYXZlRGVsYXkpO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAodHJpZ2dlciA9PT0gJ2ZvY3VzJykge1xyXG4gICAgICB0aGlzLnRyaWdnZXJEaXNwb3NhYmxlcy5wdXNoKHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnZm9jdXNpbicsICgpID0+IHRoaXMuc2hvdygpKSk7XHJcbiAgICAgIHRoaXMudHJpZ2dlckRpc3Bvc2FibGVzLnB1c2godGhpcy5yZW5kZXJlci5saXN0ZW4oZWwsICdmb2N1c291dCcsICgpID0+IHRoaXMuaGlkZSgpKSk7XHJcbiAgICB9IGVsc2UgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcclxuICAgICAgdGhpcy50cmlnZ2VyRGlzcG9zYWJsZXMucHVzaChcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihlbCwgJ2NsaWNrJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICAvLyBFbHNlIGRvIG5vdGhpbmcgYmVjYXVzZSB1c2VyIHdhbnRzIHRvIGNvbnRyb2wgdGhlIHZpc2liaWxpdHkgcHJvZ3JhbW1hdGljYWxseS5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlUHJvcGVydGllc0J5Q2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXNCeUtleXMoT2JqZWN0LmtleXMoY2hhbmdlcykpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVQcm9wZXJ0aWVzQnlLZXlzKGtleXM/OiBzdHJpbmdbXSk6IHZvaWQge1xyXG4gICAgY29uc3QgbWFwcGluZ1Byb3BlcnRpZXM6IFByb3BlcnR5TWFwcGluZyA9IHtcclxuICAgICAgLy8gY29tbW9uIG1hcHBpbmdzXHJcbiAgICAgIHRpdGxlOiBbJ2Jwc1RpdGxlJywgKCkgPT4gdGhpcy5fdGl0bGVdLFxyXG4gICAgICBkaXJlY3RpdmVUaXRsZTogWydicHNUaXRsZScsICgpID0+IHRoaXMuX3RpdGxlXSxcclxuICAgICAgdG9vbHRpcFR5cGU6IFsnYnBzVG9vbHRpcFR5cGUnLCAoKSA9PiB0aGlzLl90b29sdGlwVHlwZV0sXHJcbiAgICAgIHBvcG92ZXJUeXBlOiBbJ2Jwc1BvcG92ZXJUeXBlJywgKCkgPT4gdGhpcy5fcG9wb3ZlclR5cGVdLFxyXG4gICAgICB0b29sdGlwRGlzYWJsZWQ6IFsnYnBzVG9vbHRpcERpc2FibGVkJywgKCkgPT4gdGhpcy5fdG9vbHRpcERpc2FibGVkXSxcclxuICAgICAgY29udGVudDogWydicHNDb250ZW50JywgKCkgPT4gdGhpcy5fY29udGVudF0sXHJcbiAgICAgIGRpcmVjdGl2ZUNvbnRlbnQ6IFsnYnBzQ29udGVudCcsICgpID0+IHRoaXMuX2NvbnRlbnRdLFxyXG4gICAgICB0cmlnZ2VyOiBbJ2Jwc1RyaWdnZXInLCAoKSA9PiB0aGlzLl90cmlnZ2VyXSxcclxuICAgICAgcGxhY2VtZW50OiBbJ2Jwc1BsYWNlbWVudCcsICgpID0+IHRoaXMuX3BsYWNlbWVudF0sXHJcbiAgICAgIHZpc2libGU6IFsnYnBzVmlzaWJsZScsICgpID0+IHRoaXMuX3Zpc2libGVdLFxyXG4gICAgICBtb3VzZUVudGVyRGVsYXk6IFsnYnBzTW91c2VFbnRlckRlbGF5JywgKCkgPT4gdGhpcy5fbW91c2VFbnRlckRlbGF5XSxcclxuICAgICAgbW91c2VMZWF2ZURlbGF5OiBbJ2Jwc01vdXNlTGVhdmVEZWxheScsICgpID0+IHRoaXMuX21vdXNlTGVhdmVEZWxheV0sXHJcbiAgICAgIG92ZXJsYXlDbGFzc05hbWU6IFsnYnBzT3ZlcmxheUNsYXNzTmFtZScsICgpID0+IHRoaXMuX292ZXJsYXlDbGFzc05hbWVdLFxyXG4gICAgICBvdmVybGF5U3R5bGU6IFsnYnBzT3ZlcmxheVN0eWxlJywgKCkgPT4gdGhpcy5fb3ZlcmxheVN0eWxlXSxcclxuICAgICAgYXJyb3dQb2ludEF0Q2VudGVyOiBbJ2Jwc0Fycm93UG9pbnRBdENlbnRlcicsICgpID0+IHRoaXMuYXJyb3dQb2ludEF0Q2VudGVyXSxcclxuICAgICAgLi4udGhpcy5nZXRQcm94eVByb3BlcnR5TWFwKClcclxuICAgIH07XHJcblxyXG4gICAgKGtleXMgfHwgT2JqZWN0LmtleXMobWFwcGluZ1Byb3BlcnRpZXMpLmZpbHRlcihrZXkgPT4gIWtleS5zdGFydHNXaXRoKCdkaXJlY3RpdmUnKSkpLmZvckVhY2goXHJcbiAgICAgIChwcm9wZXJ0eTogTnpTYWZlQW55KSA9PiB7XHJcbiAgICAgICAgaWYgKG1hcHBpbmdQcm9wZXJ0aWVzW3Byb3BlcnR5XSkge1xyXG4gICAgICAgICAgY29uc3QgW25hbWUsIHZhbHVlRm5dID0gbWFwcGluZ1Byb3BlcnRpZXNbcHJvcGVydHldO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVDb21wb25lbnRWYWx1ZShuYW1lLCB2YWx1ZUZuKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmNvbXBvbmVudD8udXBkYXRlQnlEaXJlY3RpdmUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdFByb3BlcnRpZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXNCeUtleXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlQ29tcG9uZW50VmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBOelNhZmVBbnkpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgdGhpcy5jb21wb25lbnRba2V5XSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZWxheUVudGVyTGVhdmUoaXNPcmlnaW46IGJvb2xlYW4sIGlzRW50ZXI6IGJvb2xlYW4sIGRlbGF5OiBudW1iZXIgPSAtMSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGVsYXlUaW1lcikge1xyXG4gICAgICB0aGlzLmNsZWFyVG9nZ2xpbmdUaW1lcigpO1xyXG4gICAgfSBlbHNlIGlmIChkZWxheSA+IDApIHtcclxuICAgICAgdGhpcy5kZWxheVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kZWxheVRpbWVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlzRW50ZXIgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xyXG4gICAgICB9LCBkZWxheSAqIDEwMDApIGFzIGFueTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGBpc09yaWdpbmAgaXMgdXNlZCBkdWUgdG8gdGhlIHRvb2x0aXAgd2lsbCBub3QgaGlkZSBpbW1lZGlhdGVseVxyXG4gICAgICAvLyAobWF5IGNhdXNlZCBieSB0aGUgZmFkZS1vdXQgYW5pbWF0aW9uKS5cclxuICAgICAgaXNFbnRlciAmJiBpc09yaWdpbiA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZVRyaWdnZXJMaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRyaWdnZXJEaXNwb3NhYmxlcy5mb3JFYWNoKGRpc3Bvc2UgPT4gZGlzcG9zZSgpKTtcclxuICAgIHRoaXMudHJpZ2dlckRpc3Bvc2FibGVzLmxlbmd0aCA9IDA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyVG9nZ2xpbmdUaW1lcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRlbGF5VGltZXIpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlUaW1lcik7XHJcbiAgICAgIHRoaXMuZGVsYXlUaW1lciA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoKVxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1jbGFzcy1zdWZmaXhcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE56VG9vbHRpcEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc1Zpc2libGU6IEJvb2xlYW5JbnB1dDtcclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYnBzQXJyb3dQb2ludEF0Q2VudGVyOiBCb29sZWFuSW5wdXQ7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ292ZXJsYXknLCB7IHN0YXRpYzogZmFsc2UgfSkgb3ZlcmxheSE6IENka0Nvbm5lY3RlZE92ZXJsYXk7XHJcblxyXG4gIGJwc1RpdGxlOiBOelRTVHlwZSB8IG51bGwgPSBudWxsO1xyXG4gIGJwc0NvbnRlbnQ6IE56VFNUeXBlIHwgbnVsbCA9IG51bGw7XHJcbiAgYnBzQXJyb3dQb2ludEF0Q2VudGVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgYnBzT3ZlcmxheUNsYXNzTmFtZSE6IHN0cmluZztcclxuICBicHNPdmVybGF5U3R5bGU6IE5nU3R5bGVJbnRlcmZhY2UgPSB7fTtcclxuICBicHNCYWNrZHJvcCA9IGZhbHNlO1xyXG4gIGJwc01vdXNlRW50ZXJEZWxheT86IG51bWJlcjtcclxuICBicHNNb3VzZUxlYXZlRGVsYXk/OiBudW1iZXI7XHJcbiAgYnBzVG9vbHRpcFR5cGU/OiBzdHJpbmc7XHJcbiAgYnBzUG9wb3ZlclR5cGU/OiBzdHJpbmc7XHJcbiAgYnBzVG9vbHRpcERpc2FibGVkPzogYm9vbGVhbjtcclxuXHJcbiAgYnBzVmlzaWJsZUNoYW5nZSA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcblxyXG4gIHNldCBicHNWaXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBjb25zdCB2aXNpYmxlID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIGlmICh0aGlzLl92aXNpYmxlICE9PSB2aXNpYmxlKSB7XHJcbiAgICAgIHRoaXMuX3Zpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgICB0aGlzLmJwc1Zpc2libGVDaGFuZ2UubmV4dCh2aXNpYmxlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBicHNWaXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XHJcbiAgfVxyXG5cclxuICBfdmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICBzZXQgYnBzVHJpZ2dlcih2YWx1ZTogTnpUb29sdGlwVHJpZ2dlcikge1xyXG4gICAgdGhpcy5fdHJpZ2dlciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGJwc1RyaWdnZXIoKTogTnpUb29sdGlwVHJpZ2dlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdHJpZ2dlcjtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBfdHJpZ2dlcjogTnpUb29sdGlwVHJpZ2dlciA9ICdob3Zlcic7XHJcblxyXG4gIHNldCBicHNQbGFjZW1lbnQodmFsdWU6IFBPU0lUSU9OX1RZUEVbXSkge1xyXG4gICAgY29uc3QgcHJlZmVycmVkUG9zaXRpb24gPSB2YWx1ZS5tYXAocGxhY2VtZW50ID0+IFBPU0lUSU9OX01BUFtwbGFjZW1lbnRdKTtcclxuICAgIHRoaXMuX3Bvc2l0aW9ucyA9IFsuLi5wcmVmZXJyZWRQb3NpdGlvbiwgLi4uREVGQVVMVF9UT09MVElQX1BPU0lUSU9OU107XHJcbiAgfVxyXG5cclxuICBwcmVmZXJyZWRQbGFjZW1lbnQ6IHN0cmluZyA9ICd0b3AnO1xyXG5cclxuICBvcmlnaW4hOiBFbGVtZW50UmVmPE56U2FmZUFueT47XHJcblxyXG4gIHB1YmxpYyBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xyXG5cclxuICBfY2xhc3NNYXA6IE5nQ2xhc3NJbnRlcmZhY2UgPSB7fTtcclxuXHJcbiAgX3ByZWZpeCA9ICdhbnQtdG9vbHRpcCc7XHJcblxyXG4gIF9wb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFsuLi5ERUZBVUxUX1RPT0xUSVBfUE9TSVRJT05TXTtcclxuXHJcbiAgcHJvdGVjdGVkIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxyXG4gICAgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcclxuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5icHNWaXNpYmxlQ2hhbmdlLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIHNob3coKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5icHNWaXNpYmxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuaXNFbXB0eSgpKSB7XHJcbiAgICAgIHRoaXMuYnBzVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuYnBzVmlzaWJsZUNoYW5nZS5uZXh0KHRydWUpO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZm9yIGx0ciBmb3Igb3ZlcmxheSB0byBkaXNwbGF5IHRvb2x0aXAgaW4gY29ycmVjdCBwbGFjZW1lbnQgaW4gcnRsIGRpcmVjdGlvbi5cclxuICAgIGlmICh0aGlzLm9yaWdpbiAmJiB0aGlzLm92ZXJsYXkgJiYgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYuZ2V0RGlyZWN0aW9uKCkgPT09ICdydGwnKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheS5vdmVybGF5UmVmLnNldERpcmVjdGlvbignbHRyJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoaWRlKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmJwc1Zpc2libGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYnBzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5icHNWaXNpYmxlQ2hhbmdlLm5leHQoZmFsc2UpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQnlEaXJlY3RpdmUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0eWxlcygpO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG5cclxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlVmlzaWJpbGl0eUJ5VGl0bGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRm9yY2UgdGhlIGNvbXBvbmVudCB0byB1cGRhdGUgaXRzIHBvc2l0aW9uLlxyXG4gICAqL1xyXG4gIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3JpZ2luICYmIHRoaXMub3ZlcmxheSAmJiB0aGlzLm92ZXJsYXkub3ZlcmxheVJlZikge1xyXG4gICAgICB0aGlzLm92ZXJsYXkub3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XHJcbiAgICB0aGlzLnByZWZlcnJlZFBsYWNlbWVudCA9IGdldFBsYWNlbWVudE5hbWUocG9zaXRpb24pITtcclxuICAgIHRoaXMudXBkYXRlU3R5bGVzKCk7XHJcblxyXG4gICAgLy8gV2UgaGF2ZSB0byB0cmlnZ2VyIGltbWVkaWF0ZSBjaGFuZ2UgZGV0ZWN0aW9uIG9yIHRoZSBlbGVtZW50IHdvdWxkIGJsaW5rLlxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgc2V0T3ZlcmxheU9yaWdpbihvcmlnaW46IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICB0aGlzLm9yaWdpbiA9IG9yaWdpbjtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja091dHNpZGUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5vcmlnaW4ubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmIHRoaXMuYnBzVHJpZ2dlciAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhpZGUgdGhlIGNvbXBvbmVudCB3aGlsZSB0aGUgY29udGVudCBpcyBlbXB0eS5cclxuICAgKi9cclxuICBwcml2YXRlIHVwZGF0ZVZpc2liaWxpdHlCeVRpdGxlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHVwZGF0ZVN0eWxlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NsYXNzTWFwID0ge1xyXG4gICAgICBbdGhpcy5icHNPdmVybGF5Q2xhc3NOYW1lXTogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMuX3ByZWZpeH0tcGxhY2VtZW50LSR7dGhpcy5wcmVmZXJyZWRQbGFjZW1lbnR9YF06IHRydWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbXB0eSBjb21wb25lbnQgY2Fubm90IGJlIG9wZW5lZC5cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgaXNFbXB0eSgpOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNUb29sdGlwRW1wdHkodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmID8gZmFsc2UgOiB2YWx1ZSA9PT0gJycgfHwgIWlzTm90TmlsKHZhbHVlKTtcclxufVxyXG4iXX0=