import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, forwardRef, Inject, Input, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { BpsRadioButtonDirective } from './radio-button.directive';
import { NzRadioService } from 'ng-zorro-antd/radio';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "ng-zorro-antd/core/form";
import * as i4 from "ng-zorro-antd/radio";
import * as i5 from "./radio-button.directive";
const _c0 = ["inputElement"];
const _c1 = ["bps-radio", ""];
const _c2 = ["*"];
export class BpsRadioComponent {
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    blur() {
        this.inputElement.nativeElement.blur();
    }
    constructor(ngZone, elementRef, cdr, renderer, focusMonitor, directionality, nzRadioService, nzRadioButtonDirective, nzFormStatusService) {
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.renderer = renderer;
        this.focusMonitor = focusMonitor;
        this.directionality = directionality;
        this.nzRadioService = nzRadioService;
        this.nzRadioButtonDirective = nzRadioButtonDirective;
        this.nzFormStatusService = nzFormStatusService;
        this.isNgModel = false;
        this.destroy$ = new Subject();
        this.isNzDisableFirstChange = true;
        this.isChecked = false;
        this.name = null;
        this.isRadioButton = !!this.nzRadioButtonDirective;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.bpsValue = null;
        this.bpsDisabled = false;
        this.bpsAutoFocus = false;
        this.bpsRadioButtonType = 'variation1';
        this.dir = 'ltr';
    }
    setDisabledState(disabled) {
        this.bpsDisabled = (this.isNzDisableFirstChange && this.bpsDisabled) || disabled;
        this.isNzDisableFirstChange = false;
        this.cdr.markForCheck();
    }
    writeValue(value) {
        this.isChecked = value;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.isNgModel = true;
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    ngOnInit() {
        if (this.nzRadioService) {
            this.nzRadioService.name$.pipe(takeUntil(this.destroy$)).subscribe(name => {
                this.name = name;
                this.cdr.markForCheck();
            });
            this.nzRadioService.disabled$.pipe(takeUntil(this.destroy$)).subscribe(disabled => {
                this.bpsDisabled = (this.isNzDisableFirstChange && this.bpsDisabled) || disabled;
                this.isNzDisableFirstChange = false;
                this.cdr.markForCheck();
            });
            this.nzRadioService.selected$.pipe(takeUntil(this.destroy$)).subscribe(value => {
                const isChecked = this.isChecked;
                this.isChecked = this.bpsValue === value;
                // We don't have to run `onChange()` on each `nz-radio` button whenever the `selected$` emits.
                // If we have 8 `nz-radio` buttons within the `nz-radio-group` and they're all connected with
                // `ngModel` or `formControl` then `onChange()` will be called 8 times for each `nz-radio` button.
                // We prevent this by checking if `isChecked` has been changed or not.
                if (this.isNgModel &&
                    isChecked !== this.isChecked &&
                    // We're only intereted if `isChecked` has been changed to `false` value to emit `false` to the ascendant form,
                    // since we already emit `true` within the `setupClickListener`.
                    this.isChecked === false) {
                    this.onChange(false);
                }
                this.cdr.markForCheck();
            });
        }
        this.focusMonitor
            .monitor(this.elementRef, true)
            .pipe(takeUntil(this.destroy$))
            .subscribe(focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then(() => this.onTouched());
                if (this.nzRadioService) {
                    this.nzRadioService.touch();
                }
            }
        });
        this.directionality.change.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
        this.setupClickListener();
    }
    ngAfterViewInit() {
        if (this.bpsAutoFocus) {
            this.focus();
        }
        this.renderer.addClass(this.elementRef.nativeElement, `bps-radio-button-${this.bpsRadioButtonType}`);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.focusMonitor.stopMonitoring(this.elementRef);
    }
    setupClickListener() {
        this.ngZone.runOutsideAngular(() => {
            fromEvent(this.elementRef.nativeElement, 'click')
                .pipe(takeUntil(this.destroy$))
                .subscribe(event => {
                /** prevent label click triggered twice. **/
                event.stopPropagation();
                event.preventDefault();
                if (this.bpsDisabled || this.isChecked) {
                    return;
                }
                this.ngZone.run(() => {
                    this.focus();
                    this.nzRadioService?.select(this.bpsValue);
                    if (this.isNgModel) {
                        this.isChecked = true;
                        this.onChange(true);
                    }
                    this.cdr.markForCheck();
                });
            });
        });
    }
    static { this.ɵfac = function BpsRadioComponent_Factory(t) { return new (t || BpsRadioComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.FocusMonitor), i0.ɵɵdirectiveInject(i2.Directionality, 8), i0.ɵɵdirectiveInject(NzRadioService, 8), i0.ɵɵdirectiveInject(BpsRadioButtonDirective, 8), i0.ɵɵdirectiveInject(i3.NzFormStatusService, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsRadioComponent, selectors: [["", "bps-radio", ""], ["", "bps-radio-button", ""]], viewQuery: function BpsRadioComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        } }, hostVars: 18, hostBindings: function BpsRadioComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-radio-wrapper-in-form-item", !!ctx.nzFormStatusService)("ant-radio-wrapper", !ctx.isRadioButton)("ant-radio-button-wrapper", ctx.isRadioButton)("ant-radio-wrapper-checked", ctx.isChecked && !ctx.isRadioButton)("ant-radio-button-wrapper-checked", ctx.isChecked && ctx.isRadioButton)("ant-radio-wrapper-disabled", ctx.bpsDisabled && !ctx.isRadioButton)("ant-radio-button-wrapper-disabled", ctx.bpsDisabled && ctx.isRadioButton)("ant-radio-wrapper-rtl", !ctx.isRadioButton && ctx.dir === "rtl")("ant-radio-button-wrapper-rtl", ctx.isRadioButton && ctx.dir === "rtl");
        } }, inputs: { bpsValue: "bpsValue", bpsDisabled: "bpsDisabled", bpsAutoFocus: "bpsAutoFocus", bpsRadioButtonType: "bpsRadioButtonType" }, exportAs: ["bpsRadio"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => BpsRadioComponent),
                    multi: true
                }
            ])], attrs: _c1, ngContentSelectors: _c2, decls: 6, vars: 24, consts: [["inputElement", ""], ["type", "radio", 3, "disabled", "checked"], [1, "bps-custom-content-radio"]], template: function BpsRadioComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵelement(1, "input", 1, 0)(3, "span");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span", 2);
            i0.ɵɵprojection(5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-radio", !ctx.isRadioButton)("ant-radio-checked", ctx.isChecked && !ctx.isRadioButton)("ant-radio-disabled", ctx.bpsDisabled && !ctx.isRadioButton)("ant-radio-button", ctx.isRadioButton)("ant-radio-button-checked", ctx.isChecked && ctx.isRadioButton)("ant-radio-button-disabled", ctx.bpsDisabled && ctx.isRadioButton);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("ant-radio-input", !ctx.isRadioButton)("ant-radio-button-input", ctx.isRadioButton);
            i0.ɵɵproperty("disabled", ctx.bpsDisabled)("checked", ctx.isChecked);
            i0.ɵɵattribute("autofocus", ctx.bpsAutoFocus ? "autofocus" : null)("name", ctx.name);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("ant-radio-inner", !ctx.isRadioButton)("ant-radio-button-inner", ctx.isRadioButton);
        } }, encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], BpsRadioComponent.prototype, "bpsDisabled", void 0);
__decorate([
    InputBoolean()
], BpsRadioComponent.prototype, "bpsAutoFocus", void 0);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsRadioComponent, [{
        type: Component,
        args: [{
                selector: '[bps-radio],[bps-radio-button]',
                exportAs: 'bpsRadio',
                preserveWhitespaces: false,
                template: `
    <span
      [class.ant-radio]="!isRadioButton"
      [class.ant-radio-checked]="isChecked && !isRadioButton"
      [class.ant-radio-disabled]="bpsDisabled && !isRadioButton"
      [class.ant-radio-button]="isRadioButton"
      [class.ant-radio-button-checked]="isChecked && isRadioButton"
      [class.ant-radio-button-disabled]="bpsDisabled && isRadioButton"
    >
      <input
        #inputElement
        type="radio"
        [attr.autofocus]="bpsAutoFocus ? 'autofocus' : null"
        [class.ant-radio-input]="!isRadioButton"
        [class.ant-radio-button-input]="isRadioButton"
        [disabled]="bpsDisabled"
        [checked]="isChecked"
        [attr.name]="name"
      />
      <span [class.ant-radio-inner]="!isRadioButton" [class.ant-radio-button-inner]="isRadioButton"></span>
    </span>
    <span class="bps-custom-content-radio"><ng-content></ng-content></span>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => BpsRadioComponent),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-radio-wrapper-in-form-item]': '!!nzFormStatusService',
                    '[class.ant-radio-wrapper]': '!isRadioButton',
                    '[class.ant-radio-button-wrapper]': 'isRadioButton',
                    '[class.ant-radio-wrapper-checked]': 'isChecked && !isRadioButton',
                    '[class.ant-radio-button-wrapper-checked]': 'isChecked && isRadioButton',
                    '[class.ant-radio-wrapper-disabled]': 'bpsDisabled && !isRadioButton',
                    '[class.ant-radio-button-wrapper-disabled]': 'bpsDisabled && isRadioButton',
                    '[class.ant-radio-wrapper-rtl]': `!isRadioButton && dir === 'rtl'`,
                    '[class.ant-radio-button-wrapper-rtl]': `isRadioButton && dir === 'rtl'`
                }
            }]
    }], () => [{ type: i0.NgZone }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i1.FocusMonitor }, { type: i2.Directionality, decorators: [{
                type: Optional
            }] }, { type: i4.NzRadioService, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NzRadioService]
            }] }, { type: i5.BpsRadioButtonDirective, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [BpsRadioButtonDirective]
            }] }, { type: i3.NzFormStatusService, decorators: [{
                type: Optional
            }] }], { inputElement: [{
            type: ViewChild,
            args: ['inputElement', { static: true }]
        }], bpsValue: [{
            type: Input
        }], bpsDisabled: [{
            type: Input
        }], bpsAutoFocus: [{
            type: Input
        }], bpsRadioButtonType: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsRadioComponent, { className: "BpsRadioComponent", filePath: "lib\\components\\bps-radio\\bps-radio.component.ts", lineNumber: 87 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXJhZGlvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXJhZGlvL2Jwcy1yYWRpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQU9BLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUlMLFFBQVEsRUFFUixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXZELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7OztBQXFEckQsTUFBTSxPQUFPLGlCQUFpQjtJQXFCNUIsS0FBSztRQUNILElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsWUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsWUFDVSxNQUFjLEVBQ2QsVUFBc0IsRUFDdEIsR0FBc0IsRUFDdEIsUUFBbUIsRUFDbkIsWUFBMEIsRUFDZCxjQUE4QixFQUNOLGNBQXFDLEVBQzVCLHNCQUFzRCxFQUN4RixtQkFBeUM7UUFScEQsV0FB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a0JBQW5DLEtBQUs7WUFDbUIsWUFBWTtrQkFBcEMsS0FBSztZQUVHLGtCQUFrQjtrQkFBMUIsS0FBSzs7a0ZBakJLLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBmb3J3YXJkUmVmLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE56Rm9ybVN0YXR1c1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvZm9ybSc7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnpTYWZlQW55LCBPbkNoYW5nZVR5cGUsIE9uVG91Y2hlZFR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBCcHNSYWRpb0J1dHRvbkRpcmVjdGl2ZSB9IGZyb20gJy4vcmFkaW8tYnV0dG9uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE56UmFkaW9TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9yYWRpbyc7XHJcblxyXG5leHBvcnQgdHlwZSBCcHNSYWRpb0J1dHRvblR5cGUgPSAndmFyaWF0aW9uMScgfCAndmFyaWF0aW9uMicgfCAndmFyaWF0aW9uMycgfCAndmFyaWF0aW9uNScgfCAndmFyaWF0aW9uNicgfCAndmFyaWF0aW9uNycgfCAndmFyaWF0aW9uOGEnXHJcbiAgfCAndmFyaWF0aW9uOGInIHwgJ3ZhcmlhdGlvbjhjJyB8ICd2YXJpYXRpb244ZCcgfCAndmFyaWF0aW9uOGUnIHwgJ3ZhcmlhdGlvbjknIHwgJ3ZhcmlhdGlvbjEwJyB8ICd2YXJpYXRpb24xMScgfCAndmFyaWF0aW9uMTInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbYnBzLXJhZGlvXSxbYnBzLXJhZGlvLWJ1dHRvbl0nLFxyXG4gIGV4cG9ydEFzOiAnYnBzUmFkaW8nLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8c3BhblxyXG4gICAgICBbY2xhc3MuYW50LXJhZGlvXT1cIiFpc1JhZGlvQnV0dG9uXCJcclxuICAgICAgW2NsYXNzLmFudC1yYWRpby1jaGVja2VkXT1cImlzQ2hlY2tlZCAmJiAhaXNSYWRpb0J1dHRvblwiXHJcbiAgICAgIFtjbGFzcy5hbnQtcmFkaW8tZGlzYWJsZWRdPVwiYnBzRGlzYWJsZWQgJiYgIWlzUmFkaW9CdXR0b25cIlxyXG4gICAgICBbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbl09XCJpc1JhZGlvQnV0dG9uXCJcclxuICAgICAgW2NsYXNzLmFudC1yYWRpby1idXR0b24tY2hlY2tlZF09XCJpc0NoZWNrZWQgJiYgaXNSYWRpb0J1dHRvblwiXHJcbiAgICAgIFtjbGFzcy5hbnQtcmFkaW8tYnV0dG9uLWRpc2FibGVkXT1cImJwc0Rpc2FibGVkICYmIGlzUmFkaW9CdXR0b25cIlxyXG4gICAgPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICAjaW5wdXRFbGVtZW50XHJcbiAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICBbYXR0ci5hdXRvZm9jdXNdPVwiYnBzQXV0b0ZvY3VzID8gJ2F1dG9mb2N1cycgOiBudWxsXCJcclxuICAgICAgICBbY2xhc3MuYW50LXJhZGlvLWlucHV0XT1cIiFpc1JhZGlvQnV0dG9uXCJcclxuICAgICAgICBbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi1pbnB1dF09XCJpc1JhZGlvQnV0dG9uXCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwiYnBzRGlzYWJsZWRcIlxyXG4gICAgICAgIFtjaGVja2VkXT1cImlzQ2hlY2tlZFwiXHJcbiAgICAgICAgW2F0dHIubmFtZV09XCJuYW1lXCJcclxuICAgICAgLz5cclxuICAgICAgPHNwYW4gW2NsYXNzLmFudC1yYWRpby1pbm5lcl09XCIhaXNSYWRpb0J1dHRvblwiIFtjbGFzcy5hbnQtcmFkaW8tYnV0dG9uLWlubmVyXT1cImlzUmFkaW9CdXR0b25cIj48L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzcz1cImJwcy1jdXN0b20tY29udGVudC1yYWRpb1wiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L3NwYW4+XHJcbiAgYCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnBzUmFkaW9Db21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8td3JhcHBlci1pbi1mb3JtLWl0ZW1dJzogJyEhbnpGb3JtU3RhdHVzU2VydmljZScsXHJcbiAgICAnW2NsYXNzLmFudC1yYWRpby13cmFwcGVyXSc6ICchaXNSYWRpb0J1dHRvbicsXHJcbiAgICAnW2NsYXNzLmFudC1yYWRpby1idXR0b24td3JhcHBlcl0nOiAnaXNSYWRpb0J1dHRvbicsXHJcbiAgICAnW2NsYXNzLmFudC1yYWRpby13cmFwcGVyLWNoZWNrZWRdJzogJ2lzQ2hlY2tlZCAmJiAhaXNSYWRpb0J1dHRvbicsXHJcbiAgICAnW2NsYXNzLmFudC1yYWRpby1idXR0b24td3JhcHBlci1jaGVja2VkXSc6ICdpc0NoZWNrZWQgJiYgaXNSYWRpb0J1dHRvbicsXHJcbiAgICAnW2NsYXNzLmFudC1yYWRpby13cmFwcGVyLWRpc2FibGVkXSc6ICdicHNEaXNhYmxlZCAmJiAhaXNSYWRpb0J1dHRvbicsXHJcbiAgICAnW2NsYXNzLmFudC1yYWRpby1idXR0b24td3JhcHBlci1kaXNhYmxlZF0nOiAnYnBzRGlzYWJsZWQgJiYgaXNSYWRpb0J1dHRvbicsXHJcbiAgICAnW2NsYXNzLmFudC1yYWRpby13cmFwcGVyLXJ0bF0nOiBgIWlzUmFkaW9CdXR0b24gJiYgZGlyID09PSAncnRsJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1yYWRpby1idXR0b24td3JhcHBlci1ydGxdJzogYGlzUmFkaW9CdXR0b24gJiYgZGlyID09PSAncnRsJ2BcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNSYWRpb0NvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc0Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc0F1dG9Gb2N1czogQm9vbGVhbklucHV0O1xyXG5cclxuICBwcml2YXRlIGlzTmdNb2RlbCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgaXNOekRpc2FibGVGaXJzdENoYW5nZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgaXNDaGVja2VkID0gZmFsc2U7XHJcbiAgbmFtZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgaXNSYWRpb0J1dHRvbiA9ICEhdGhpcy5uelJhZGlvQnV0dG9uRGlyZWN0aXZlO1xyXG4gIG9uQ2hhbmdlOiBPbkNoYW5nZVR5cGUgPSAoKSA9PiB7IH07XHJcbiAgb25Ub3VjaGVkOiBPblRvdWNoZWRUeXBlID0gKCkgPT4geyB9O1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0RWxlbWVudCE6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XHJcbiAgQElucHV0KCkgYnBzVmFsdWU6IE56U2FmZUFueSB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNBdXRvRm9jdXMgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgYnBzUmFkaW9CdXR0b25UeXBlOiBCcHNSYWRpb0J1dHRvblR5cGUgPSAndmFyaWF0aW9uMSc7XHJcblxyXG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XHJcblxyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5pbnB1dEVsZW1lbnQhLCAna2V5Ym9hcmQnKTtcclxuICB9XHJcblxyXG4gIGJsdXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudCEubmF0aXZlRWxlbWVudC5ibHVyKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE56UmFkaW9TZXJ2aWNlKSBwcml2YXRlIG56UmFkaW9TZXJ2aWNlOiBOelJhZGlvU2VydmljZSB8IG51bGwsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEJwc1JhZGlvQnV0dG9uRGlyZWN0aXZlKSBwcml2YXRlIG56UmFkaW9CdXR0b25EaXJlY3RpdmU6IEJwc1JhZGlvQnV0dG9uRGlyZWN0aXZlIHwgbnVsbCxcclxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBuekZvcm1TdGF0dXNTZXJ2aWNlPzogTnpGb3JtU3RhdHVzU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuYnBzRGlzYWJsZWQgPSAodGhpcy5pc056RGlzYWJsZUZpcnN0Q2hhbmdlICYmIHRoaXMuYnBzRGlzYWJsZWQpIHx8IGRpc2FibGVkO1xyXG4gICAgdGhpcy5pc056RGlzYWJsZUZpcnN0Q2hhbmdlID0gZmFsc2U7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuaXNDaGVja2VkID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IE9uQ2hhbmdlVHlwZSk6IHZvaWQge1xyXG4gICAgdGhpcy5pc05nTW9kZWwgPSB0cnVlO1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IE9uVG91Y2hlZFR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56UmFkaW9TZXJ2aWNlKSB7XHJcbiAgICAgIHRoaXMubnpSYWRpb1NlcnZpY2UubmFtZSQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShuYW1lID0+IHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5uelJhZGlvU2VydmljZS5kaXNhYmxlZCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShkaXNhYmxlZCA9PiB7XHJcbiAgICAgICAgdGhpcy5icHNEaXNhYmxlZCA9ICh0aGlzLmlzTnpEaXNhYmxlRmlyc3RDaGFuZ2UgJiYgdGhpcy5icHNEaXNhYmxlZCkgfHwgZGlzYWJsZWQ7XHJcbiAgICAgICAgdGhpcy5pc056RGlzYWJsZUZpcnN0Q2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm56UmFkaW9TZXJ2aWNlLnNlbGVjdGVkJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgICBjb25zdCBpc0NoZWNrZWQgPSB0aGlzLmlzQ2hlY2tlZDtcclxuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9IHRoaXMuYnBzVmFsdWUgPT09IHZhbHVlO1xyXG4gICAgICAgIC8vIFdlIGRvbid0IGhhdmUgdG8gcnVuIGBvbkNoYW5nZSgpYCBvbiBlYWNoIGBuei1yYWRpb2AgYnV0dG9uIHdoZW5ldmVyIHRoZSBgc2VsZWN0ZWQkYCBlbWl0cy5cclxuICAgICAgICAvLyBJZiB3ZSBoYXZlIDggYG56LXJhZGlvYCBidXR0b25zIHdpdGhpbiB0aGUgYG56LXJhZGlvLWdyb3VwYCBhbmQgdGhleSdyZSBhbGwgY29ubmVjdGVkIHdpdGhcclxuICAgICAgICAvLyBgbmdNb2RlbGAgb3IgYGZvcm1Db250cm9sYCB0aGVuIGBvbkNoYW5nZSgpYCB3aWxsIGJlIGNhbGxlZCA4IHRpbWVzIGZvciBlYWNoIGBuei1yYWRpb2AgYnV0dG9uLlxyXG4gICAgICAgIC8vIFdlIHByZXZlbnQgdGhpcyBieSBjaGVja2luZyBpZiBgaXNDaGVja2VkYCBoYXMgYmVlbiBjaGFuZ2VkIG9yIG5vdC5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB0aGlzLmlzTmdNb2RlbCAmJlxyXG4gICAgICAgICAgaXNDaGVja2VkICE9PSB0aGlzLmlzQ2hlY2tlZCAmJlxyXG4gICAgICAgICAgLy8gV2UncmUgb25seSBpbnRlcmV0ZWQgaWYgYGlzQ2hlY2tlZGAgaGFzIGJlZW4gY2hhbmdlZCB0byBgZmFsc2VgIHZhbHVlIHRvIGVtaXQgYGZhbHNlYCB0byB0aGUgYXNjZW5kYW50IGZvcm0sXHJcbiAgICAgICAgICAvLyBzaW5jZSB3ZSBhbHJlYWR5IGVtaXQgYHRydWVgIHdpdGhpbiB0aGUgYHNldHVwQ2xpY2tMaXN0ZW5lcmAuXHJcbiAgICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9PT0gZmFsc2VcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMub25DaGFuZ2UoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvclxyXG4gICAgICAubW9uaXRvcih0aGlzLmVsZW1lbnRSZWYsIHRydWUpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZShmb2N1c09yaWdpbiA9PiB7XHJcbiAgICAgICAgaWYgKCFmb2N1c09yaWdpbikge1xyXG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLm9uVG91Y2hlZCgpKTtcclxuICAgICAgICAgIGlmICh0aGlzLm56UmFkaW9TZXJ2aWNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubnpSYWRpb1NlcnZpY2UudG91Y2goKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XHJcblxyXG4gICAgdGhpcy5zZXR1cENsaWNrTGlzdGVuZXIoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmJwc0F1dG9Gb2N1cykge1xyXG4gICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgYnBzLXJhZGlvLWJ1dHRvbi0ke3RoaXMuYnBzUmFkaW9CdXR0b25UeXBlfWApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuZWxlbWVudFJlZik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldHVwQ2xpY2tMaXN0ZW5lcigpOiB2b2lkIHtcclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY2xpY2snKVxyXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICAgIC8qKiBwcmV2ZW50IGxhYmVsIGNsaWNrIHRyaWdnZXJlZCB0d2ljZS4gKiovXHJcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBpZiAodGhpcy5icHNEaXNhYmxlZCB8fCB0aGlzLmlzQ2hlY2tlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIHRoaXMubnpSYWRpb1NlcnZpY2U/LnNlbGVjdCh0aGlzLmJwc1ZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNOZ01vZGVsKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=