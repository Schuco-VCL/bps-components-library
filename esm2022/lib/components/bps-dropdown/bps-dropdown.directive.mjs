import { __decorate } from "tslib";
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject, EMPTY, Subject, combineLatest, fromEvent, merge } from 'rxjs';
import { auditTime, distinctUntilChanged, filter, map, mapTo, switchMap, takeUntil } from 'rxjs/operators';
import { WithConfig } from 'ng-zorro-antd/core/config';
import { POSITION_MAP } from 'ng-zorro-antd/core/overlay';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/config";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "@angular/cdk/platform";
const NZ_CONFIG_MODULE_NAME = 'dropDown';
const listOfPositions = [
    POSITION_MAP.bottomLeft,
    POSITION_MAP.bottomRight,
    POSITION_MAP.topRight,
    POSITION_MAP.topLeft
];
export class BpsDropDownDirective {
    setDropdownMenuValue(key, value) {
        if (this.bpsDropdownMenu) {
            this.bpsDropdownMenu.setValue(key, value);
        }
    }
    constructor(nzConfigService, elementRef, overlay, renderer, viewContainerRef, platform) {
        this.nzConfigService = nzConfigService;
        this.elementRef = elementRef;
        this.overlay = overlay;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.platform = platform;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.overlayRef = null;
        this.destroy$ = new Subject();
        this.positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(this.elementRef.nativeElement)
            .withLockedPosition()
            .withTransformOriginOn('.ant-dropdown');
        this.inputVisible$ = new BehaviorSubject(false);
        this.bpsTrigger$ = new BehaviorSubject('hover');
        this.overlayClose$ = new Subject();
        this.bpsDropdownMenu = null;
        this.bpsTrigger = 'hover';
        this.bpsMatchWidthElement = null;
        this.bpsBackdrop = false;
        this.bpsClickHide = true;
        this.bpsDisabled = false;
        this.bpsVisible = false;
        this.bpsOverlayClassName = '';
        this.bpsOverlayStyle = {};
        this.bpsPlacement = 'bottomLeft';
        this.bpsVisibleChange = new EventEmitter();
    }
    ngAfterViewInit() {
        if (this.bpsDropdownMenu) {
            const nativeElement = this.elementRef.nativeElement;
            this.bpsDropdownMenu.bpsPlacement = this.bpsPlacement;
            /** host mouse state **/
            const hostMouseState$ = merge(fromEvent(nativeElement, 'mouseenter').pipe(mapTo(true)), fromEvent(nativeElement, 'mouseleave').pipe(mapTo(false)));
            /** menu mouse state **/
            const menuMouseState$ = this.bpsDropdownMenu.mouseState$;
            /** merged mouse state **/
            const mergedMouseState$ = merge(menuMouseState$, hostMouseState$);
            /** host click state **/
            const hostClickState$ = fromEvent(nativeElement, 'click').pipe(map(() => !this.bpsVisible));
            /** visible state switch by bpsTrigger **/
            const visibleStateByTrigger$ = this.bpsTrigger$.pipe(switchMap(trigger => {
                if (trigger === 'hover') {
                    return mergedMouseState$;
                }
                else if (trigger === 'click') {
                    return hostClickState$;
                }
                else {
                    return EMPTY;
                }
            }));
            const descendantMenuItemClick$ = this.bpsDropdownMenu.descendantMenuItemClick$.pipe(filter(() => this.bpsClickHide), mapTo(false));
            const domTriggerVisible$ = merge(visibleStateByTrigger$, descendantMenuItemClick$, this.overlayClose$).pipe(filter(() => !this.bpsDisabled));
            const visible$ = merge(this.inputVisible$, domTriggerVisible$);
            combineLatest([visible$, this.bpsDropdownMenu.isChildSubMenuOpen$])
                .pipe(map(([visible, sub]) => visible || sub), auditTime(150), distinctUntilChanged(), filter(() => this.platform.isBrowser), takeUntil(this.destroy$))
                .subscribe((visible) => {
                const element = this.bpsMatchWidthElement ? this.bpsMatchWidthElement.nativeElement : nativeElement;
                const triggerWidth = element.getBoundingClientRect().width;
                if (this.bpsVisible !== visible) {
                    this.bpsVisibleChange.emit(visible);
                }
                this.bpsVisible = visible;
                if (visible) {
                    /** set up overlayRef **/
                    if (!this.overlayRef) {
                        /** new overlay **/
                        this.overlayRef = this.overlay.create({
                            positionStrategy: this.positionStrategy,
                            minWidth: triggerWidth,
                            disposeOnNavigation: true,
                            hasBackdrop: this.bpsBackdrop && this.bpsTrigger === 'click',
                            scrollStrategy: this.overlay.scrollStrategies.reposition()
                        });
                        merge(this.overlayRef.backdropClick(), this.overlayRef.detachments(), this.overlayRef
                            .outsidePointerEvents()
                            .pipe(filter((e) => !this.elementRef.nativeElement.contains(e.target))), this.overlayRef.keydownEvents().pipe(filter(e => e.keyCode === ESCAPE && !hasModifierKey(e))))
                            .pipe(takeUntil(this.destroy$))
                            .subscribe(() => {
                            this.overlayClose$.next(false);
                        });
                    }
                    else {
                        /** update overlay config **/
                        const overlayConfig = this.overlayRef.getConfig();
                        overlayConfig.minWidth = triggerWidth;
                    }
                    /** open dropdown with animation **/
                    this.positionStrategy.withPositions([POSITION_MAP[this.bpsPlacement], ...listOfPositions]);
                    /** reset portal if needed **/
                    if (!this.portal || this.portal.templateRef !== this.bpsDropdownMenu.templateRef) {
                        this.portal = new TemplatePortal(this.bpsDropdownMenu.templateRef, this.viewContainerRef);
                    }
                    this.overlayRef.attach(this.portal);
                }
                else {
                    /** detach overlayRef if needed **/
                    if (this.overlayRef) {
                        this.overlayRef.detach();
                    }
                }
            });
            this.bpsDropdownMenu.animationStateChange$.pipe(takeUntil(this.destroy$)).subscribe(event => {
                if (event.toState === 'void') {
                    if (this.overlayRef) {
                        this.overlayRef.dispose();
                    }
                    this.overlayRef = null;
                }
            });
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
        }
    }
    ngOnChanges(changes) {
        const { bpsVisible, bpsDisabled, bpsOverlayClassName, bpsOverlayStyle, bpsTrigger } = changes;
        if (bpsTrigger) {
            this.bpsTrigger$.next(this.bpsTrigger);
        }
        if (bpsVisible) {
            this.inputVisible$.next(this.bpsVisible);
        }
        if (bpsDisabled) {
            const nativeElement = this.elementRef.nativeElement;
            if (this.bpsDisabled) {
                this.renderer.setAttribute(nativeElement, 'disabled', '');
                this.inputVisible$.next(false);
            }
            else {
                this.renderer.removeAttribute(nativeElement, 'disabled');
            }
        }
        if (bpsOverlayClassName) {
            this.setDropdownMenuValue('bpsOverlayClassName', this.bpsOverlayClassName);
        }
        if (bpsOverlayStyle) {
            this.setDropdownMenuValue('bpsOverlayStyle', this.bpsOverlayStyle);
        }
    }
    static { this.ɵfac = function BpsDropDownDirective_Factory(t) { return new (t || BpsDropDownDirective)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.Overlay), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i3.Platform)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BpsDropDownDirective, selectors: [["", "bps-dropdown", ""]], hostAttrs: [1, "ant-dropdown-trigger"], inputs: { bpsDropdownMenu: "bpsDropdownMenu", bpsTrigger: "bpsTrigger", bpsMatchWidthElement: "bpsMatchWidthElement", bpsBackdrop: "bpsBackdrop", bpsClickHide: "bpsClickHide", bpsDisabled: "bpsDisabled", bpsVisible: "bpsVisible", bpsOverlayClassName: "bpsOverlayClassName", bpsOverlayStyle: "bpsOverlayStyle", bpsPlacement: "bpsPlacement" }, outputs: { bpsVisibleChange: "bpsVisibleChange" }, exportAs: ["bpsDropdown"], features: [i0.ɵɵNgOnChangesFeature] }); }
}
__decorate([
    WithConfig(),
    InputBoolean()
], BpsDropDownDirective.prototype, "bpsBackdrop", void 0);
__decorate([
    InputBoolean()
], BpsDropDownDirective.prototype, "bpsClickHide", void 0);
__decorate([
    InputBoolean()
], BpsDropDownDirective.prototype, "bpsDisabled", void 0);
__decorate([
    InputBoolean()
], BpsDropDownDirective.prototype, "bpsVisible", void 0);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsDropDownDirective, [{
        type: Directive,
        args: [{
                selector: '[bps-dropdown]',
                exportAs: 'bpsDropdown',
                host: {
                    class: 'ant-dropdown-trigger'
                }
            }]
    }], () => [{ type: i1.NzConfigService }, { type: i0.ElementRef }, { type: i2.Overlay }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i3.Platform }], { bpsDropdownMenu: [{
            type: Input
        }], bpsTrigger: [{
            type: Input
        }], bpsMatchWidthElement: [{
            type: Input
        }], bpsBackdrop: [{
            type: Input
        }], bpsClickHide: [{
            type: Input
        }], bpsDisabled: [{
            type: Input
        }], bpsVisible: [{
            type: Input
        }], bpsOverlayClassName: [{
            type: Input
        }], bpsOverlayStyle: [{
            type: Input
        }], bpsPlacement: [{
            type: Input
        }], bpsVisibleChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWRyb3Bkb3duLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWRyb3Bkb3duL2Jwcy1kcm9wZG93bi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFFTCxTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBSVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNHLE9BQU8sRUFBZ0MsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7QUFJdkQsTUFBTSxxQkFBcUIsR0FBZ0IsVUFBVSxDQUFDO0FBRXRELE1BQU0sZUFBZSxHQUFHO0lBQ3RCLFlBQVksQ0FBQyxVQUFVO0lBQ3ZCLFlBQVksQ0FBQyxXQUFXO0lBQ3hCLFlBQVksQ0FBQyxRQUFRO0lBQ3JCLFlBQVksQ0FBQyxPQUFPO0NBQ3JCLENBQUM7QUFTRixNQUFNLE9BQU8sb0JBQW9CO0lBK0IvQixvQkFBb0IsQ0FBMkMsR0FBTSxF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LEVBQUUsYUFBYTtnQkFDdkIsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxzQkFBc0I7aUJBQzlCO2FBQ0Y7NktBb0JVLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csb0JBQW9CO2tCQUE1QixLQUFLO1lBQzBDLFdBQVc7a0JBQTFELEtBQUs7WUFDbUIsWUFBWTtrQkFBcEMsS0FBSztZQUNtQixXQUFXO2tCQUFuQyxLQUFLO1lBQ21CLFVBQVU7a0JBQWxDLEtBQUs7WUFDRyxtQkFBbUI7a0JBQTNCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNhLGdCQUFnQjtrQkFBbEMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVTQ0FQRSwgaGFzTW9kaWZpZXJLZXkgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIEVNUFRZLCBTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBmcm9tRXZlbnQsIG1lcmdlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGF1ZGl0VGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCBtYXBUbywgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOekNvbmZpZ0tleSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XHJcbmltcG9ydCB7IFBPU0lUSU9OX01BUCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9vdmVybGF5JztcclxuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbmRleGFibGVPYmplY3QgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBCcHNEcm9wZG93bk1lbnVDb21wb25lbnQsIE56UGxhY2VtZW50VHlwZSB9IGZyb20gJy4vZHJvcGRvd24tbWVudS5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX01PRFVMRV9OQU1FOiBOekNvbmZpZ0tleSA9ICdkcm9wRG93bic7XHJcblxyXG5jb25zdCBsaXN0T2ZQb3NpdGlvbnMgPSBbXHJcbiAgUE9TSVRJT05fTUFQLmJvdHRvbUxlZnQsXHJcbiAgUE9TSVRJT05fTUFQLmJvdHRvbVJpZ2h0LFxyXG4gIFBPU0lUSU9OX01BUC50b3BSaWdodCxcclxuICBQT1NJVElPTl9NQVAudG9wTGVmdFxyXG5dO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYnBzLWRyb3Bkb3duXScsXHJcbiAgZXhwb3J0QXM6ICdicHNEcm9wZG93bicsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdhbnQtZHJvcGRvd24tdHJpZ2dlcidcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNEcm9wRG93bkRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICByZWFkb25seSBfbnpNb2R1bGVOYW1lOiBOekNvbmZpZ0tleSA9IE5aX0NPTkZJR19NT0RVTEVfTkFNRTtcclxuXHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc0JhY2tkcm9wOiBCb29sZWFuSW5wdXQ7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc0NsaWNrSGlkZTogQm9vbGVhbklucHV0O1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNEaXNhYmxlZDogQm9vbGVhbklucHV0O1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNWaXNpYmxlOiBCb29sZWFuSW5wdXQ7XHJcblxyXG4gIHByaXZhdGUgcG9ydGFsPzogVGVtcGxhdGVQb3J0YWw7XHJcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgcHJpdmF0ZSBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5XHJcbiAgICAucG9zaXRpb24oKVxyXG4gICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpXHJcbiAgICAud2l0aExvY2tlZFBvc2l0aW9uKClcclxuICAgIC53aXRoVHJhbnNmb3JtT3JpZ2luT24oJy5hbnQtZHJvcGRvd24nKTtcclxuICBwcml2YXRlIGlucHV0VmlzaWJsZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuICBwcml2YXRlIGJwc1RyaWdnZXIkID0gbmV3IEJlaGF2aW9yU3ViamVjdDwnY2xpY2snIHwgJ2hvdmVyJz4oJ2hvdmVyJyk7XHJcbiAgcHJpdmF0ZSBvdmVybGF5Q2xvc2UkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICBASW5wdXQoKSBicHNEcm9wZG93bk1lbnU6IEJwc0Ryb3Bkb3duTWVudUNvbXBvbmVudCB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGJwc1RyaWdnZXI6ICdjbGljaycgfCAnaG92ZXInID0gJ2hvdmVyJztcclxuICBASW5wdXQoKSBicHNNYXRjaFdpZHRoRWxlbWVudDogRWxlbWVudFJlZiB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnPGJvb2xlYW4+KCkgQElucHV0Qm9vbGVhbigpIGJwc0JhY2tkcm9wID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0NsaWNrSGlkZSA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc1Zpc2libGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBicHNPdmVybGF5Q2xhc3NOYW1lOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBicHNPdmVybGF5U3R5bGU6IEluZGV4YWJsZU9iamVjdCA9IHt9O1xyXG4gIEBJbnB1dCgpIGJwc1BsYWNlbWVudDogTnpQbGFjZW1lbnRUeXBlID0gJ2JvdHRvbUxlZnQnO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNWaXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHNldERyb3Bkb3duTWVudVZhbHVlPFQgZXh0ZW5kcyBrZXlvZiBCcHNEcm9wZG93bk1lbnVDb21wb25lbnQ+KGtleTogVCwgdmFsdWU6IEJwc0Ryb3Bkb3duTWVudUNvbXBvbmVudFtUXSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYnBzRHJvcGRvd25NZW51KSB7XHJcbiAgICAgIHRoaXMuYnBzRHJvcGRvd25NZW51LnNldFZhbHVlKGtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYnBzRHJvcGRvd25NZW51KSB7XHJcbiAgICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgICB0aGlzLmJwc0Ryb3Bkb3duTWVudS5icHNQbGFjZW1lbnQgPSB0aGlzLmJwc1BsYWNlbWVudDtcclxuXHJcbiAgICAgIC8qKiBob3N0IG1vdXNlIHN0YXRlICoqL1xyXG4gICAgICBjb25zdCBob3N0TW91c2VTdGF0ZSQgPSBtZXJnZShcclxuICAgICAgICBmcm9tRXZlbnQobmF0aXZlRWxlbWVudCwgJ21vdXNlZW50ZXInKS5waXBlKG1hcFRvKHRydWUpKSxcclxuICAgICAgICBmcm9tRXZlbnQobmF0aXZlRWxlbWVudCwgJ21vdXNlbGVhdmUnKS5waXBlKG1hcFRvKGZhbHNlKSlcclxuICAgICAgKTtcclxuICAgICAgLyoqIG1lbnUgbW91c2Ugc3RhdGUgKiovXHJcbiAgICAgIGNvbnN0IG1lbnVNb3VzZVN0YXRlJCA9IHRoaXMuYnBzRHJvcGRvd25NZW51Lm1vdXNlU3RhdGUkO1xyXG4gICAgICAvKiogbWVyZ2VkIG1vdXNlIHN0YXRlICoqL1xyXG4gICAgICBjb25zdCBtZXJnZWRNb3VzZVN0YXRlJCA9IG1lcmdlKG1lbnVNb3VzZVN0YXRlJCwgaG9zdE1vdXNlU3RhdGUkKTtcclxuICAgICAgLyoqIGhvc3QgY2xpY2sgc3RhdGUgKiovXHJcbiAgICAgIGNvbnN0IGhvc3RDbGlja1N0YXRlJCA9IGZyb21FdmVudChuYXRpdmVFbGVtZW50LCAnY2xpY2snKS5waXBlKG1hcCgoKSA9PiAhdGhpcy5icHNWaXNpYmxlKSk7XHJcbiAgICAgIC8qKiB2aXNpYmxlIHN0YXRlIHN3aXRjaCBieSBicHNUcmlnZ2VyICoqL1xyXG4gICAgICBjb25zdCB2aXNpYmxlU3RhdGVCeVRyaWdnZXIkID0gdGhpcy5icHNUcmlnZ2VyJC5waXBlKFxyXG4gICAgICAgIHN3aXRjaE1hcCh0cmlnZ2VyID0+IHtcclxuICAgICAgICAgIGlmICh0cmlnZ2VyID09PSAnaG92ZXInKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXJnZWRNb3VzZVN0YXRlJDtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodHJpZ2dlciA9PT0gJ2NsaWNrJykge1xyXG4gICAgICAgICAgICByZXR1cm4gaG9zdENsaWNrU3RhdGUkO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIEVNUFRZO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRlc2NlbmRhbnRNZW51SXRlbUNsaWNrJCA9IHRoaXMuYnBzRHJvcGRvd25NZW51LmRlc2NlbmRhbnRNZW51SXRlbUNsaWNrJC5waXBlKFxyXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLmJwc0NsaWNrSGlkZSksXHJcbiAgICAgICAgbWFwVG8oZmFsc2UpXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRvbVRyaWdnZXJWaXNpYmxlJCA9IG1lcmdlKHZpc2libGVTdGF0ZUJ5VHJpZ2dlciQsIGRlc2NlbmRhbnRNZW51SXRlbUNsaWNrJCwgdGhpcy5vdmVybGF5Q2xvc2UkKS5waXBlKFxyXG4gICAgICAgIGZpbHRlcigoKSA9PiAhdGhpcy5icHNEaXNhYmxlZClcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgdmlzaWJsZSQgPSBtZXJnZSh0aGlzLmlucHV0VmlzaWJsZSQsIGRvbVRyaWdnZXJWaXNpYmxlJCk7XHJcbiAgICAgIGNvbWJpbmVMYXRlc3QoW3Zpc2libGUkLCB0aGlzLmJwc0Ryb3Bkb3duTWVudS5pc0NoaWxkU3ViTWVudU9wZW4kXSlcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIG1hcCgoW3Zpc2libGUsIHN1Yl0pID0+IHZpc2libGUgfHwgc3ViKSxcclxuICAgICAgICAgIGF1ZGl0VGltZSgxNTApLFxyXG4gICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLnBsYXRmb3JtLmlzQnJvd3NlciksXHJcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgodmlzaWJsZTogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuYnBzTWF0Y2hXaWR0aEVsZW1lbnQgPyB0aGlzLmJwc01hdGNoV2lkdGhFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgOiBuYXRpdmVFbGVtZW50O1xyXG4gICAgICAgICAgY29uc3QgdHJpZ2dlcldpZHRoID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICAgICAgICAgIGlmICh0aGlzLmJwc1Zpc2libGUgIT09IHZpc2libGUpIHtcclxuICAgICAgICAgICAgdGhpcy5icHNWaXNpYmxlQ2hhbmdlLmVtaXQodmlzaWJsZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmJwc1Zpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgICAgICAgaWYgKHZpc2libGUpIHtcclxuICAgICAgICAgICAgLyoqIHNldCB1cCBvdmVybGF5UmVmICoqL1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMub3ZlcmxheVJlZikge1xyXG4gICAgICAgICAgICAgIC8qKiBuZXcgb3ZlcmxheSAqKi9cclxuICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMucG9zaXRpb25TdHJhdGVneSxcclxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiB0cmlnZ2VyV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBkaXNwb3NlT25OYXZpZ2F0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaGFzQmFja2Ryb3A6IHRoaXMuYnBzQmFja2Ryb3AgJiYgdGhpcy5icHNUcmlnZ2VyID09PSAnY2xpY2snLFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oKVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIG1lcmdlKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKSxcclxuICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2htZW50cygpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5UmVmXHJcbiAgICAgICAgICAgICAgICAgIC5vdXRzaWRlUG9pbnRlckV2ZW50cygpXHJcbiAgICAgICAgICAgICAgICAgIC5waXBlKGZpbHRlcigoZTogTW91c2VFdmVudCkgPT4gIXRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5UmVmLmtleWRvd25FdmVudHMoKS5waXBlKGZpbHRlcihlID0+IGUua2V5Q29kZSA9PT0gRVNDQVBFICYmICFoYXNNb2RpZmllcktleShlKSkpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheUNsb3NlJC5uZXh0KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8qKiB1cGRhdGUgb3ZlcmxheSBjb25maWcgKiovXHJcbiAgICAgICAgICAgICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IHRoaXMub3ZlcmxheVJlZi5nZXRDb25maWcoKTtcclxuICAgICAgICAgICAgICBvdmVybGF5Q29uZmlnLm1pbldpZHRoID0gdHJpZ2dlcldpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qKiBvcGVuIGRyb3Bkb3duIHdpdGggYW5pbWF0aW9uICoqL1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kud2l0aFBvc2l0aW9ucyhbUE9TSVRJT05fTUFQW3RoaXMuYnBzUGxhY2VtZW50XSwgLi4ubGlzdE9mUG9zaXRpb25zXSk7XHJcbiAgICAgICAgICAgIC8qKiByZXNldCBwb3J0YWwgaWYgbmVlZGVkICoqL1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucG9ydGFsIHx8IHRoaXMucG9ydGFsLnRlbXBsYXRlUmVmICE9PSB0aGlzLmJwc0Ryb3Bkb3duTWVudSEudGVtcGxhdGVSZWYpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLmJwc0Ryb3Bkb3duTWVudSEudGVtcGxhdGVSZWYsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5vdmVybGF5UmVmLmF0dGFjaCh0aGlzLnBvcnRhbCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvKiogZGV0YWNoIG92ZXJsYXlSZWYgaWYgbmVlZGVkICoqL1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmJwc0Ryb3Bkb3duTWVudSEuYW5pbWF0aW9uU3RhdGVDaGFuZ2UkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC50b1N0YXRlID09PSAndm9pZCcpIHtcclxuICAgICAgICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcclxuICAgICAgICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMub3ZlcmxheVJlZiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBicHNWaXNpYmxlLCBicHNEaXNhYmxlZCwgYnBzT3ZlcmxheUNsYXNzTmFtZSwgYnBzT3ZlcmxheVN0eWxlLCBicHNUcmlnZ2VyIH0gPSBjaGFuZ2VzO1xyXG4gICAgaWYgKGJwc1RyaWdnZXIpIHtcclxuICAgICAgdGhpcy5icHNUcmlnZ2VyJC5uZXh0KHRoaXMuYnBzVHJpZ2dlcik7XHJcbiAgICB9XHJcbiAgICBpZiAoYnBzVmlzaWJsZSkge1xyXG4gICAgICB0aGlzLmlucHV0VmlzaWJsZSQubmV4dCh0aGlzLmJwc1Zpc2libGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGJwc0Rpc2FibGVkKSB7XHJcbiAgICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgICAgaWYgKHRoaXMuYnBzRGlzYWJsZWQpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCAnJyk7XHJcbiAgICAgICAgdGhpcy5pbnB1dFZpc2libGUkLm5leHQoZmFsc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoYnBzT3ZlcmxheUNsYXNzTmFtZSkge1xyXG4gICAgICB0aGlzLnNldERyb3Bkb3duTWVudVZhbHVlKCdicHNPdmVybGF5Q2xhc3NOYW1lJywgdGhpcy5icHNPdmVybGF5Q2xhc3NOYW1lKTtcclxuICAgIH1cclxuICAgIGlmIChicHNPdmVybGF5U3R5bGUpIHtcclxuICAgICAgdGhpcy5zZXREcm9wZG93bk1lbnVWYWx1ZSgnYnBzT3ZlcmxheVN0eWxlJywgdGhpcy5icHNPdmVybGF5U3R5bGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=