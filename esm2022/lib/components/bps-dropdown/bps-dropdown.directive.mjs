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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsDropDownDirective, deps: [{ token: i1.NzConfigService }, { token: i0.ElementRef }, { token: i2.Overlay }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i3.Platform }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: BpsDropDownDirective, selector: "[bps-dropdown]", inputs: { bpsDropdownMenu: "bpsDropdownMenu", bpsTrigger: "bpsTrigger", bpsMatchWidthElement: "bpsMatchWidthElement", bpsBackdrop: "bpsBackdrop", bpsClickHide: "bpsClickHide", bpsDisabled: "bpsDisabled", bpsVisible: "bpsVisible", bpsOverlayClassName: "bpsOverlayClassName", bpsOverlayStyle: "bpsOverlayStyle", bpsPlacement: "bpsPlacement" }, outputs: { bpsVisibleChange: "bpsVisibleChange" }, host: { classAttribute: "ant-dropdown-trigger" }, exportAs: ["bpsDropdown"], usesOnChanges: true, ngImport: i0 }); }
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsDropDownDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bps-dropdown]',
                    exportAs: 'bpsDropdown',
                    host: {
                        class: 'ant-dropdown-trigger'
                    }
                }]
        }], ctorParameters: function () { return [{ type: i1.NzConfigService }, { type: i0.ElementRef }, { type: i2.Overlay }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i3.Platform }]; }, propDecorators: { bpsDropdownMenu: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWRyb3Bkb3duLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWRyb3Bkb3duL2Jwcy1kcm9wZG93bi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFFTCxTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBSVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNHLE9BQU8sRUFBZ0MsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7QUFJdkQsTUFBTSxxQkFBcUIsR0FBZ0IsVUFBVSxDQUFDO0FBRXRELE1BQU0sZUFBZSxHQUFHO0lBQ3RCLFlBQVksQ0FBQyxVQUFVO0lBQ3ZCLFlBQVksQ0FBQyxXQUFXO0lBQ3hCLFlBQVksQ0FBQyxRQUFRO0lBQ3JCLFlBQVksQ0FBQyxPQUFPO0NBQ3JCLENBQUM7QUFTRixNQUFNLE9BQU8sb0JBQW9CO0lBK0IvQixvQkFBb0IsQ0FBMkMsR0FBTSxF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O3NCQUFsQyxLQUFLO2dCQUNHLG1CQUFtQjtzQkFBM0IsS0FBSztnQkFDRyxlQUFlO3NCQUF2QixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ2EsZ0JBQWdCO3NCQUFsQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRVNDQVBFLCBoYXNNb2RpZmllcktleSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgRU1QVFksIFN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIGZyb21FdmVudCwgbWVyZ2UgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgYXVkaXRUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIG1hcFRvLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE56Q29uZmlnS2V5LCBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcclxuaW1wb3J0IHsgUE9TSVRJT05fTUFQIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL292ZXJsYXknO1xyXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIEluZGV4YWJsZU9iamVjdCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuXHJcbmltcG9ydCB7IEJwc0Ryb3Bkb3duTWVudUNvbXBvbmVudCwgTnpQbGFjZW1lbnRUeXBlIH0gZnJvbSAnLi9kcm9wZG93bi1tZW51LmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfTU9EVUxFX05BTUU6IE56Q29uZmlnS2V5ID0gJ2Ryb3BEb3duJztcclxuXHJcbmNvbnN0IGxpc3RPZlBvc2l0aW9ucyA9IFtcclxuICBQT1NJVElPTl9NQVAuYm90dG9tTGVmdCxcclxuICBQT1NJVElPTl9NQVAuYm90dG9tUmlnaHQsXHJcbiAgUE9TSVRJT05fTUFQLnRvcFJpZ2h0LFxyXG4gIFBPU0lUSU9OX01BUC50b3BMZWZ0XHJcbl07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1ticHMtZHJvcGRvd25dJyxcclxuICBleHBvcnRBczogJ2Jwc0Ryb3Bkb3duJyxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2FudC1kcm9wZG93bi10cmlnZ2VyJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc0Ryb3BEb3duRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIHJlYWRvbmx5IF9uek1vZHVsZU5hbWU6IE56Q29uZmlnS2V5ID0gTlpfQ09ORklHX01PRFVMRV9OQU1FO1xyXG5cclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYnBzQmFja2Ryb3A6IEJvb2xlYW5JbnB1dDtcclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYnBzQ2xpY2tIaWRlOiBCb29sZWFuSW5wdXQ7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc0Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc1Zpc2libGU6IEJvb2xlYW5JbnB1dDtcclxuXHJcbiAgcHJpdmF0ZSBwb3J0YWw/OiBUZW1wbGF0ZVBvcnRhbDtcclxuICBwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICBwcml2YXRlIHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlcclxuICAgIC5wb3NpdGlvbigpXHJcbiAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudClcclxuICAgIC53aXRoTG9ja2VkUG9zaXRpb24oKVxyXG4gICAgLndpdGhUcmFuc2Zvcm1PcmlnaW5PbignLmFudC1kcm9wZG93bicpO1xyXG4gIHByaXZhdGUgaW5wdXRWaXNpYmxlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIHByaXZhdGUgYnBzVHJpZ2dlciQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PCdjbGljaycgfCAnaG92ZXInPignaG92ZXInKTtcclxuICBwcml2YXRlIG92ZXJsYXlDbG9zZSQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gIEBJbnB1dCgpIGJwc0Ryb3Bkb3duTWVudTogQnBzRHJvcGRvd25NZW51Q29tcG9uZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgYnBzVHJpZ2dlcjogJ2NsaWNrJyB8ICdob3ZlcicgPSAnaG92ZXInO1xyXG4gIEBJbnB1dCgpIGJwc01hdGNoV2lkdGhFbGVtZW50OiBFbGVtZW50UmVmIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWc8Ym9vbGVhbj4oKSBASW5wdXRCb29sZWFuKCkgYnBzQmFja2Ryb3AgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzQ2xpY2tIaWRlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzRGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzVmlzaWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGJwc092ZXJsYXlDbGFzc05hbWU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGJwc092ZXJsYXlTdHlsZTogSW5kZXhhYmxlT2JqZWN0ID0ge307XHJcbiAgQElucHV0KCkgYnBzUGxhY2VtZW50OiBOelBsYWNlbWVudFR5cGUgPSAnYm90dG9tTGVmdCc7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc1Zpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgc2V0RHJvcGRvd25NZW51VmFsdWU8VCBleHRlbmRzIGtleW9mIEJwc0Ryb3Bkb3duTWVudUNvbXBvbmVudD4oa2V5OiBULCB2YWx1ZTogQnBzRHJvcGRvd25NZW51Q29tcG9uZW50W1RdKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5icHNEcm9wZG93bk1lbnUpIHtcclxuICAgICAgdGhpcy5icHNEcm9wZG93bk1lbnUuc2V0VmFsdWUoa2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyByZWFkb25seSBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm1cclxuICApIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5icHNEcm9wZG93bk1lbnUpIHtcclxuICAgICAgY29uc3QgbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICAgIHRoaXMuYnBzRHJvcGRvd25NZW51LmJwc1BsYWNlbWVudCA9IHRoaXMuYnBzUGxhY2VtZW50O1xyXG5cclxuICAgICAgLyoqIGhvc3QgbW91c2Ugc3RhdGUgKiovXHJcbiAgICAgIGNvbnN0IGhvc3RNb3VzZVN0YXRlJCA9IG1lcmdlKFxyXG4gICAgICAgIGZyb21FdmVudChuYXRpdmVFbGVtZW50LCAnbW91c2VlbnRlcicpLnBpcGUobWFwVG8odHJ1ZSkpLFxyXG4gICAgICAgIGZyb21FdmVudChuYXRpdmVFbGVtZW50LCAnbW91c2VsZWF2ZScpLnBpcGUobWFwVG8oZmFsc2UpKVxyXG4gICAgICApO1xyXG4gICAgICAvKiogbWVudSBtb3VzZSBzdGF0ZSAqKi9cclxuICAgICAgY29uc3QgbWVudU1vdXNlU3RhdGUkID0gdGhpcy5icHNEcm9wZG93bk1lbnUubW91c2VTdGF0ZSQ7XHJcbiAgICAgIC8qKiBtZXJnZWQgbW91c2Ugc3RhdGUgKiovXHJcbiAgICAgIGNvbnN0IG1lcmdlZE1vdXNlU3RhdGUkID0gbWVyZ2UobWVudU1vdXNlU3RhdGUkLCBob3N0TW91c2VTdGF0ZSQpO1xyXG4gICAgICAvKiogaG9zdCBjbGljayBzdGF0ZSAqKi9cclxuICAgICAgY29uc3QgaG9zdENsaWNrU3RhdGUkID0gZnJvbUV2ZW50KG5hdGl2ZUVsZW1lbnQsICdjbGljaycpLnBpcGUobWFwKCgpID0+ICF0aGlzLmJwc1Zpc2libGUpKTtcclxuICAgICAgLyoqIHZpc2libGUgc3RhdGUgc3dpdGNoIGJ5IGJwc1RyaWdnZXIgKiovXHJcbiAgICAgIGNvbnN0IHZpc2libGVTdGF0ZUJ5VHJpZ2dlciQgPSB0aGlzLmJwc1RyaWdnZXIkLnBpcGUoXHJcbiAgICAgICAgc3dpdGNoTWFwKHRyaWdnZXIgPT4ge1xyXG4gICAgICAgICAgaWYgKHRyaWdnZXIgPT09ICdob3ZlcicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1lcmdlZE1vdXNlU3RhdGUkO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyID09PSAnY2xpY2snKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBob3N0Q2xpY2tTdGF0ZSQ7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gRU1QVFk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZGVzY2VuZGFudE1lbnVJdGVtQ2xpY2skID0gdGhpcy5icHNEcm9wZG93bk1lbnUuZGVzY2VuZGFudE1lbnVJdGVtQ2xpY2skLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuYnBzQ2xpY2tIaWRlKSxcclxuICAgICAgICBtYXBUbyhmYWxzZSlcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZG9tVHJpZ2dlclZpc2libGUkID0gbWVyZ2UodmlzaWJsZVN0YXRlQnlUcmlnZ2VyJCwgZGVzY2VuZGFudE1lbnVJdGVtQ2xpY2skLCB0aGlzLm92ZXJsYXlDbG9zZSQpLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKCgpID0+ICF0aGlzLmJwc0Rpc2FibGVkKVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCB2aXNpYmxlJCA9IG1lcmdlKHRoaXMuaW5wdXRWaXNpYmxlJCwgZG9tVHJpZ2dlclZpc2libGUkKTtcclxuICAgICAgY29tYmluZUxhdGVzdChbdmlzaWJsZSQsIHRoaXMuYnBzRHJvcGRvd25NZW51LmlzQ2hpbGRTdWJNZW51T3BlbiRdKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgbWFwKChbdmlzaWJsZSwgc3ViXSkgPT4gdmlzaWJsZSB8fCBzdWIpLFxyXG4gICAgICAgICAgYXVkaXRUaW1lKDE1MCksXHJcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxyXG4gICAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSxcclxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKCh2aXNpYmxlOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5icHNNYXRjaFdpZHRoRWxlbWVudCA/IHRoaXMuYnBzTWF0Y2hXaWR0aEVsZW1lbnQubmF0aXZlRWxlbWVudCA6IG5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICBjb25zdCB0cmlnZ2VyV2lkdGggPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgICAgICAgaWYgKHRoaXMuYnBzVmlzaWJsZSAhPT0gdmlzaWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJwc1Zpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuYnBzVmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICAgICAgICBpZiAodmlzaWJsZSkge1xyXG4gICAgICAgICAgICAvKiogc2V0IHVwIG92ZXJsYXlSZWYgKiovXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5vdmVybGF5UmVmKSB7XHJcbiAgICAgICAgICAgICAgLyoqIG5ldyBvdmVybGF5ICoqL1xyXG4gICAgICAgICAgICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5wb3NpdGlvblN0cmF0ZWd5LFxyXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IHRyaWdnZXJXaWR0aCxcclxuICAgICAgICAgICAgICAgIGRpc3Bvc2VPbk5hdmlnYXRpb246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBoYXNCYWNrZHJvcDogdGhpcy5icHNCYWNrZHJvcCAmJiB0aGlzLmJwc1RyaWdnZXIgPT09ICdjbGljaycsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgbWVyZ2UoXHJcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaG1lbnRzKCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlSZWZcclxuICAgICAgICAgICAgICAgICAgLm91dHNpZGVQb2ludGVyRXZlbnRzKClcclxuICAgICAgICAgICAgICAgICAgLnBpcGUoZmlsdGVyKChlOiBNb3VzZUV2ZW50KSA9PiAhdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSksXHJcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlSZWYua2V5ZG93bkV2ZW50cygpLnBpcGUoZmlsdGVyKGUgPT4gZS5rZXlDb2RlID09PSBFU0NBUEUgJiYgIWhhc01vZGlmaWVyS2V5KGUpKSlcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5Q2xvc2UkLm5leHQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgLyoqIHVwZGF0ZSBvdmVybGF5IGNvbmZpZyAqKi9cclxuICAgICAgICAgICAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gdGhpcy5vdmVybGF5UmVmLmdldENvbmZpZygpO1xyXG4gICAgICAgICAgICAgIG92ZXJsYXlDb25maWcubWluV2lkdGggPSB0cmlnZ2VyV2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyoqIG9wZW4gZHJvcGRvd24gd2l0aCBhbmltYXRpb24gKiovXHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25TdHJhdGVneS53aXRoUG9zaXRpb25zKFtQT1NJVElPTl9NQVBbdGhpcy5icHNQbGFjZW1lbnRdLCAuLi5saXN0T2ZQb3NpdGlvbnNdKTtcclxuICAgICAgICAgICAgLyoqIHJlc2V0IHBvcnRhbCBpZiBuZWVkZWQgKiovXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wb3J0YWwgfHwgdGhpcy5wb3J0YWwudGVtcGxhdGVSZWYgIT09IHRoaXMuYnBzRHJvcGRvd25NZW51IS50ZW1wbGF0ZVJlZikge1xyXG4gICAgICAgICAgICAgIHRoaXMucG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMuYnBzRHJvcGRvd25NZW51IS50ZW1wbGF0ZVJlZiwgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoKHRoaXMucG9ydGFsKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8qKiBkZXRhY2ggb3ZlcmxheVJlZiBpZiBuZWVkZWQgKiovXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcclxuICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuYnBzRHJvcGRvd25NZW51IS5hbmltYXRpb25TdGF0ZUNoYW5nZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICd2b2lkJykge1xyXG4gICAgICAgICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xyXG4gICAgICAgICAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5vdmVybGF5UmVmID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IGJwc1Zpc2libGUsIGJwc0Rpc2FibGVkLCBicHNPdmVybGF5Q2xhc3NOYW1lLCBicHNPdmVybGF5U3R5bGUsIGJwc1RyaWdnZXIgfSA9IGNoYW5nZXM7XHJcbiAgICBpZiAoYnBzVHJpZ2dlcikge1xyXG4gICAgICB0aGlzLmJwc1RyaWdnZXIkLm5leHQodGhpcy5icHNUcmlnZ2VyKTtcclxuICAgIH1cclxuICAgIGlmIChicHNWaXNpYmxlKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRWaXNpYmxlJC5uZXh0KHRoaXMuYnBzVmlzaWJsZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoYnBzRGlzYWJsZWQpIHtcclxuICAgICAgY29uc3QgbmF0aXZlRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgICBpZiAodGhpcy5icHNEaXNhYmxlZCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsICcnKTtcclxuICAgICAgICB0aGlzLmlucHV0VmlzaWJsZSQubmV4dChmYWxzZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChicHNPdmVybGF5Q2xhc3NOYW1lKSB7XHJcbiAgICAgIHRoaXMuc2V0RHJvcGRvd25NZW51VmFsdWUoJ2Jwc092ZXJsYXlDbGFzc05hbWUnLCB0aGlzLmJwc092ZXJsYXlDbGFzc05hbWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGJwc092ZXJsYXlTdHlsZSkge1xyXG4gICAgICB0aGlzLnNldERyb3Bkb3duTWVudVZhbHVlKCdicHNPdmVybGF5U3R5bGUnLCB0aGlzLmJwc092ZXJsYXlTdHlsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==