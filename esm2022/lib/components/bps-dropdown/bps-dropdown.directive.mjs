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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsDropDownDirective, deps: [{ token: i1.NzConfigService }, { token: i0.ElementRef }, { token: i2.Overlay }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i3.Platform }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: BpsDropDownDirective, selector: "[bps-dropdown]", inputs: { bpsDropdownMenu: "bpsDropdownMenu", bpsTrigger: "bpsTrigger", bpsMatchWidthElement: "bpsMatchWidthElement", bpsBackdrop: "bpsBackdrop", bpsClickHide: "bpsClickHide", bpsDisabled: "bpsDisabled", bpsVisible: "bpsVisible", bpsOverlayClassName: "bpsOverlayClassName", bpsOverlayStyle: "bpsOverlayStyle", bpsPlacement: "bpsPlacement" }, outputs: { bpsVisibleChange: "bpsVisibleChange" }, host: { classAttribute: "ant-dropdown-trigger" }, exportAs: ["bpsDropdown"], usesOnChanges: true, ngImport: i0 }); }
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsDropDownDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bps-dropdown]',
                    exportAs: 'bpsDropdown',
                    host: {
                        class: 'ant-dropdown-trigger'
                    }
                }]
        }], ctorParameters: () => [{ type: i1.NzConfigService }, { type: i0.ElementRef }, { type: i2.Overlay }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i3.Platform }], propDecorators: { bpsDropdownMenu: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWRyb3Bkb3duLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWRyb3Bkb3duL2Jwcy1kcm9wZG93bi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFFTCxTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBSVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNHLE9BQU8sRUFBZ0MsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7QUFJdkQsTUFBTSxxQkFBcUIsR0FBZ0IsVUFBVSxDQUFDO0FBRXRELE1BQU0sZUFBZSxHQUFHO0lBQ3RCLFlBQVksQ0FBQyxVQUFVO0lBQ3ZCLFlBQVksQ0FBQyxXQUFXO0lBQ3hCLFlBQVksQ0FBQyxRQUFRO0lBQ3JCLFlBQVksQ0FBQyxPQUFPO0NBQ3JCLENBQUM7QUFTRixNQUFNLE9BQU8sb0JBQW9CO0lBK0IvQixvQkFBb0IsQ0FBMkMsR0FBTSxF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QVEsRUFBRSxhQUFhO29CQUN2QixJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLHNCQUFzQjtxQkFDOUI7aUJBQ0Y7aU5Bb0JVLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxvQkFBb0I7c0JBQTVCLEtBQUs7Z0JBQzBDLFdBQVc7c0JBQTFELEtBQUs7Z0JBQ21CLFlBQVk7c0JBQXBDLEtBQUs7Z0JBQ21CLFdBQVc7c0JBQW5DLEtBQUs7Z0JBQ21CLFVBQVU7c0JBQWxDLEtBQUs7Z0JBQ0csbUJBQW1CO3NCQUEzQixLQUFLO2dCQUNHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDYSxnQkFBZ0I7c0JBQWxDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFU0NBUEUsIGhhc01vZGlmaWVyS2V5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBFTVBUWSwgU3ViamVjdCwgY29tYmluZUxhdGVzdCwgZnJvbUV2ZW50LCBtZXJnZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBhdWRpdFRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgbWFwVG8sIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTnpDb25maWdLZXksIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xyXG5pbXBvcnQgeyBQT1NJVElPTl9NQVAgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3ZlcmxheSc7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5kZXhhYmxlT2JqZWN0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgQnBzRHJvcGRvd25NZW51Q29tcG9uZW50LCBOelBsYWNlbWVudFR5cGUgfSBmcm9tICcuL2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19NT0RVTEVfTkFNRTogTnpDb25maWdLZXkgPSAnZHJvcERvd24nO1xyXG5cclxuY29uc3QgbGlzdE9mUG9zaXRpb25zID0gW1xyXG4gIFBPU0lUSU9OX01BUC5ib3R0b21MZWZ0LFxyXG4gIFBPU0lUSU9OX01BUC5ib3R0b21SaWdodCxcclxuICBQT1NJVElPTl9NQVAudG9wUmlnaHQsXHJcbiAgUE9TSVRJT05fTUFQLnRvcExlZnRcclxuXTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2Jwcy1kcm9wZG93bl0nLFxyXG4gIGV4cG9ydEFzOiAnYnBzRHJvcGRvd24nLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnYW50LWRyb3Bkb3duLXRyaWdnZXInXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzRHJvcERvd25EaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgcmVhZG9ubHkgX256TW9kdWxlTmFtZTogTnpDb25maWdLZXkgPSBOWl9DT05GSUdfTU9EVUxFX05BTUU7XHJcblxyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNCYWNrZHJvcDogQm9vbGVhbklucHV0O1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNDbGlja0hpZGU6IEJvb2xlYW5JbnB1dDtcclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYnBzRGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYnBzVmlzaWJsZTogQm9vbGVhbklucHV0O1xyXG5cclxuICBwcml2YXRlIHBvcnRhbD86IFRlbXBsYXRlUG9ydGFsO1xyXG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZiB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gIHByaXZhdGUgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheVxyXG4gICAgLnBvc2l0aW9uKClcclxuICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KVxyXG4gICAgLndpdGhMb2NrZWRQb3NpdGlvbigpXHJcbiAgICAud2l0aFRyYW5zZm9ybU9yaWdpbk9uKCcuYW50LWRyb3Bkb3duJyk7XHJcbiAgcHJpdmF0ZSBpbnB1dFZpc2libGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgcHJpdmF0ZSBicHNUcmlnZ2VyJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8J2NsaWNrJyB8ICdob3Zlcic+KCdob3ZlcicpO1xyXG4gIHByaXZhdGUgb3ZlcmxheUNsb3NlJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgQElucHV0KCkgYnBzRHJvcGRvd25NZW51OiBCcHNEcm9wZG93bk1lbnVDb21wb25lbnQgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBicHNUcmlnZ2VyOiAnY2xpY2snIHwgJ2hvdmVyJyA9ICdob3Zlcic7XHJcbiAgQElucHV0KCkgYnBzTWF0Y2hXaWR0aEVsZW1lbnQ6IEVsZW1lbnRSZWYgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZzxib29sZWFuPigpIEBJbnB1dEJvb2xlYW4oKSBicHNCYWNrZHJvcCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNDbGlja0hpZGUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNWaXNpYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYnBzT3ZlcmxheUNsYXNzTmFtZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgYnBzT3ZlcmxheVN0eWxlOiBJbmRleGFibGVPYmplY3QgPSB7fTtcclxuICBASW5wdXQoKSBicHNQbGFjZW1lbnQ6IE56UGxhY2VtZW50VHlwZSA9ICdib3R0b21MZWZ0JztcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzVmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBzZXREcm9wZG93bk1lbnVWYWx1ZTxUIGV4dGVuZHMga2V5b2YgQnBzRHJvcGRvd25NZW51Q29tcG9uZW50PihrZXk6IFQsIHZhbHVlOiBCcHNEcm9wZG93bk1lbnVDb21wb25lbnRbVF0pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmJwc0Ryb3Bkb3duTWVudSkge1xyXG4gICAgICB0aGlzLmJwc0Ryb3Bkb3duTWVudS5zZXRWYWx1ZShrZXksIHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHJlYWRvbmx5IG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxyXG4gICkgeyB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmJwc0Ryb3Bkb3duTWVudSkge1xyXG4gICAgICBjb25zdCBuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgICAgdGhpcy5icHNEcm9wZG93bk1lbnUuYnBzUGxhY2VtZW50ID0gdGhpcy5icHNQbGFjZW1lbnQ7XHJcblxyXG4gICAgICAvKiogaG9zdCBtb3VzZSBzdGF0ZSAqKi9cclxuICAgICAgY29uc3QgaG9zdE1vdXNlU3RhdGUkID0gbWVyZ2UoXHJcbiAgICAgICAgZnJvbUV2ZW50KG5hdGl2ZUVsZW1lbnQsICdtb3VzZWVudGVyJykucGlwZShtYXBUbyh0cnVlKSksXHJcbiAgICAgICAgZnJvbUV2ZW50KG5hdGl2ZUVsZW1lbnQsICdtb3VzZWxlYXZlJykucGlwZShtYXBUbyhmYWxzZSkpXHJcbiAgICAgICk7XHJcbiAgICAgIC8qKiBtZW51IG1vdXNlIHN0YXRlICoqL1xyXG4gICAgICBjb25zdCBtZW51TW91c2VTdGF0ZSQgPSB0aGlzLmJwc0Ryb3Bkb3duTWVudS5tb3VzZVN0YXRlJDtcclxuICAgICAgLyoqIG1lcmdlZCBtb3VzZSBzdGF0ZSAqKi9cclxuICAgICAgY29uc3QgbWVyZ2VkTW91c2VTdGF0ZSQgPSBtZXJnZShtZW51TW91c2VTdGF0ZSQsIGhvc3RNb3VzZVN0YXRlJCk7XHJcbiAgICAgIC8qKiBob3N0IGNsaWNrIHN0YXRlICoqL1xyXG4gICAgICBjb25zdCBob3N0Q2xpY2tTdGF0ZSQgPSBmcm9tRXZlbnQobmF0aXZlRWxlbWVudCwgJ2NsaWNrJykucGlwZShtYXAoKCkgPT4gIXRoaXMuYnBzVmlzaWJsZSkpO1xyXG4gICAgICAvKiogdmlzaWJsZSBzdGF0ZSBzd2l0Y2ggYnkgYnBzVHJpZ2dlciAqKi9cclxuICAgICAgY29uc3QgdmlzaWJsZVN0YXRlQnlUcmlnZ2VyJCA9IHRoaXMuYnBzVHJpZ2dlciQucGlwZShcclxuICAgICAgICBzd2l0Y2hNYXAodHJpZ2dlciA9PiB7XHJcbiAgICAgICAgICBpZiAodHJpZ2dlciA9PT0gJ2hvdmVyJykge1xyXG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VkTW91c2VTdGF0ZSQ7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGhvc3RDbGlja1N0YXRlJDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBFTVBUWTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkZXNjZW5kYW50TWVudUl0ZW1DbGljayQgPSB0aGlzLmJwc0Ryb3Bkb3duTWVudS5kZXNjZW5kYW50TWVudUl0ZW1DbGljayQucGlwZShcclxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5icHNDbGlja0hpZGUpLFxyXG4gICAgICAgIG1hcFRvKGZhbHNlKVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkb21UcmlnZ2VyVmlzaWJsZSQgPSBtZXJnZSh2aXNpYmxlU3RhdGVCeVRyaWdnZXIkLCBkZXNjZW5kYW50TWVudUl0ZW1DbGljayQsIHRoaXMub3ZlcmxheUNsb3NlJCkucGlwZShcclxuICAgICAgICBmaWx0ZXIoKCkgPT4gIXRoaXMuYnBzRGlzYWJsZWQpXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHZpc2libGUkID0gbWVyZ2UodGhpcy5pbnB1dFZpc2libGUkLCBkb21UcmlnZ2VyVmlzaWJsZSQpO1xyXG4gICAgICBjb21iaW5lTGF0ZXN0KFt2aXNpYmxlJCwgdGhpcy5icHNEcm9wZG93bk1lbnUuaXNDaGlsZFN1Yk1lbnVPcGVuJF0pXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICBtYXAoKFt2aXNpYmxlLCBzdWJdKSA9PiB2aXNpYmxlIHx8IHN1YiksXHJcbiAgICAgICAgICBhdWRpdFRpbWUoMTUwKSxcclxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpLFxyXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKHZpc2libGU6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmJwc01hdGNoV2lkdGhFbGVtZW50ID8gdGhpcy5icHNNYXRjaFdpZHRoRWxlbWVudC5uYXRpdmVFbGVtZW50IDogbmF0aXZlRWxlbWVudDtcclxuICAgICAgICAgIGNvbnN0IHRyaWdnZXJXaWR0aCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgICAgICAgICBpZiAodGhpcy5icHNWaXNpYmxlICE9PSB2aXNpYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnBzVmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5icHNWaXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgICAgIGlmICh2aXNpYmxlKSB7XHJcbiAgICAgICAgICAgIC8qKiBzZXQgdXAgb3ZlcmxheVJlZiAqKi9cclxuICAgICAgICAgICAgaWYgKCF0aGlzLm92ZXJsYXlSZWYpIHtcclxuICAgICAgICAgICAgICAvKiogbmV3IG92ZXJsYXkgKiovXHJcbiAgICAgICAgICAgICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLnBvc2l0aW9uU3RyYXRlZ3ksXHJcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogdHJpZ2dlcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgZGlzcG9zZU9uTmF2aWdhdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGhhc0JhY2tkcm9wOiB0aGlzLmJwc0JhY2tkcm9wICYmIHRoaXMuYnBzVHJpZ2dlciA9PT0gJ2NsaWNrJyxcclxuICAgICAgICAgICAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKClcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBtZXJnZShcclxuICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNobWVudHMoKSxcclxuICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheVJlZlxyXG4gICAgICAgICAgICAgICAgICAub3V0c2lkZVBvaW50ZXJFdmVudHMoKVxyXG4gICAgICAgICAgICAgICAgICAucGlwZShmaWx0ZXIoKGU6IE1vdXNlRXZlbnQpID0+ICF0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhlLnRhcmdldCkpKSxcclxuICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheVJlZi5rZXlkb3duRXZlbnRzKCkucGlwZShmaWx0ZXIoZSA9PiBlLmtleUNvZGUgPT09IEVTQ0FQRSAmJiAhaGFzTW9kaWZpZXJLZXkoZSkpKVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXlDbG9zZSQubmV4dChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvKiogdXBkYXRlIG92ZXJsYXkgY29uZmlnICoqL1xyXG4gICAgICAgICAgICAgIGNvbnN0IG92ZXJsYXlDb25maWcgPSB0aGlzLm92ZXJsYXlSZWYuZ2V0Q29uZmlnKCk7XHJcbiAgICAgICAgICAgICAgb3ZlcmxheUNvbmZpZy5taW5XaWR0aCA9IHRyaWdnZXJXaWR0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKiogb3BlbiBkcm9wZG93biB3aXRoIGFuaW1hdGlvbiAqKi9cclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5LndpdGhQb3NpdGlvbnMoW1BPU0lUSU9OX01BUFt0aGlzLmJwc1BsYWNlbWVudF0sIC4uLmxpc3RPZlBvc2l0aW9uc10pO1xyXG4gICAgICAgICAgICAvKiogcmVzZXQgcG9ydGFsIGlmIG5lZWRlZCAqKi9cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBvcnRhbCB8fCB0aGlzLnBvcnRhbC50ZW1wbGF0ZVJlZiAhPT0gdGhpcy5icHNEcm9wZG93bk1lbnUhLnRlbXBsYXRlUmVmKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5icHNEcm9wZG93bk1lbnUhLnRlbXBsYXRlUmVmLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheVJlZi5hdHRhY2godGhpcy5wb3J0YWwpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLyoqIGRldGFjaCBvdmVybGF5UmVmIGlmIG5lZWRlZCAqKi9cclxuICAgICAgICAgICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xyXG4gICAgICAgICAgICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5icHNEcm9wZG93bk1lbnUhLmFuaW1hdGlvblN0YXRlQ2hhbmdlJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ3ZvaWQnKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLm92ZXJsYXlSZWYgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgYnBzVmlzaWJsZSwgYnBzRGlzYWJsZWQsIGJwc092ZXJsYXlDbGFzc05hbWUsIGJwc092ZXJsYXlTdHlsZSwgYnBzVHJpZ2dlciB9ID0gY2hhbmdlcztcclxuICAgIGlmIChicHNUcmlnZ2VyKSB7XHJcbiAgICAgIHRoaXMuYnBzVHJpZ2dlciQubmV4dCh0aGlzLmJwc1RyaWdnZXIpO1xyXG4gICAgfVxyXG4gICAgaWYgKGJwc1Zpc2libGUpIHtcclxuICAgICAgdGhpcy5pbnB1dFZpc2libGUkLm5leHQodGhpcy5icHNWaXNpYmxlKTtcclxuICAgIH1cclxuICAgIGlmIChicHNEaXNhYmxlZCkge1xyXG4gICAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIGlmICh0aGlzLmJwc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgJycpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRWaXNpYmxlJC5uZXh0KGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGJwc092ZXJsYXlDbGFzc05hbWUpIHtcclxuICAgICAgdGhpcy5zZXREcm9wZG93bk1lbnVWYWx1ZSgnYnBzT3ZlcmxheUNsYXNzTmFtZScsIHRoaXMuYnBzT3ZlcmxheUNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoYnBzT3ZlcmxheVN0eWxlKSB7XHJcbiAgICAgIHRoaXMuc2V0RHJvcGRvd25NZW51VmFsdWUoJ2Jwc092ZXJsYXlTdHlsZScsIHRoaXMuYnBzT3ZlcmxheVN0eWxlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19