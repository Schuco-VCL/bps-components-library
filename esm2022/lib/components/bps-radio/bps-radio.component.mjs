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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsRadioComponent, deps: [{ token: i0.NgZone }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i0.Renderer2 }, { token: i1.FocusMonitor }, { token: i2.Directionality, optional: true }, { token: NzRadioService, optional: true }, { token: BpsRadioButtonDirective, optional: true }, { token: i3.NzFormStatusService, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BpsRadioComponent, selector: "[bps-radio],[bps-radio-button]", inputs: { bpsValue: "bpsValue", bpsDisabled: "bpsDisabled", bpsAutoFocus: "bpsAutoFocus", bpsRadioButtonType: "bpsRadioButtonType" }, host: { properties: { "class.ant-radio-wrapper-in-form-item": "!!nzFormStatusService", "class.ant-radio-wrapper": "!isRadioButton", "class.ant-radio-button-wrapper": "isRadioButton", "class.ant-radio-wrapper-checked": "isChecked && !isRadioButton", "class.ant-radio-button-wrapper-checked": "isChecked && isRadioButton", "class.ant-radio-wrapper-disabled": "bpsDisabled && !isRadioButton", "class.ant-radio-button-wrapper-disabled": "bpsDisabled && isRadioButton", "class.ant-radio-wrapper-rtl": "!isRadioButton && dir === 'rtl'", "class.ant-radio-button-wrapper-rtl": "isRadioButton && dir === 'rtl'" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => BpsRadioComponent),
                multi: true
            }
        ], viewQueries: [{ propertyName: "inputElement", first: true, predicate: ["inputElement"], descendants: true, static: true }], exportAs: ["bpsRadio"], ngImport: i0, template: `
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
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], BpsRadioComponent.prototype, "bpsDisabled", void 0);
__decorate([
    InputBoolean()
], BpsRadioComponent.prototype, "bpsAutoFocus", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsRadioComponent, decorators: [{
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
        }], ctorParameters: () => [{ type: i0.NgZone }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i1.FocusMonitor }, { type: i2.Directionality, decorators: [{
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
                }] }], propDecorators: { inputElement: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXJhZGlvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXJhZGlvL2Jwcy1yYWRpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQU9BLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUlMLFFBQVEsRUFFUixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXZELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7OztBQXFEckQsTUFBTSxPQUFPLGlCQUFpQjtJQXFCNUIsS0FBSztRQUNILElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsWUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsWUFDVSxNQUFjLEVBQ2QsVUFBc0IsRUFDdEIsR0FBc0IsRUFDdEIsUUFBbUIsRUFDbkIsWUFBMEIsRUFDZCxjQUE4QixFQUNOLGNBQXFDLEVBQzVCLHNCQUFzRCxFQUN4RixtQkFBeUM7UUFScEQsV0FBTSxH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LE1BQU07b0JBQy9DLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxrQkFBa0IsQ0FBQzs0QkFDaEQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLHdDQUF3QyxFQUFFLHVCQUF1Qjt3QkFDakUsMkJBQTJCLEVBQUUsZ0JBQWdCO3dCQUM3QyxrQ0FBa0MsRUFBRSxlQUFlO3dCQUNuRCxtQ0FBbUMsRUFBRSw2QkFBNkI7d0JBQ2xFLDBDQUEwQyxFQUFFLDRCQUE0Qjt3QkFDeEUsb0NBQW9DLEVBQUUsK0JBQStCO3dCQUNyRSwyQ0FBMkMsRUFBRSw4QkFBOEI7d0JBQzNFLCtCQUErQixFQUFFLGlDQUFpQzt3QkFDbEUsc0NBQXNDLEVBQUUsZ0NBQWdDO3FCQUN6RTtpQkFDRjs7MEJBb0NJLFFBQVE7OzBCQUNSLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMsY0FBYzs7MEJBQ2pDLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMsdUJBQXVCOzswQkFDMUMsUUFBUTt5Q0ExQmtDLFlBQVk7c0JBQXhELFNBQVM7dUJBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFDbEMsUUFBUTtzQkFBaEIsS0FBSztnQkFDbUIsV0FBVztzQkFBbkMsS0FBSztnQkFDbUIsWUFBWTtzQkFBcEMsS0FBSztnQkFFRyxrQkFBa0I7c0JBQTFCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgZm9yd2FyZFJlZixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOekZvcm1TdGF0dXNTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2Zvcm0nO1xyXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE56U2FmZUFueSwgT25DaGFuZ2VUeXBlLCBPblRvdWNoZWRUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgQnBzUmFkaW9CdXR0b25EaXJlY3RpdmUgfSBmcm9tICcuL3JhZGlvLWJ1dHRvbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOelJhZGlvU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcmFkaW8nO1xyXG5cclxuZXhwb3J0IHR5cGUgQnBzUmFkaW9CdXR0b25UeXBlID0gJ3ZhcmlhdGlvbjEnIHwgJ3ZhcmlhdGlvbjInIHwgJ3ZhcmlhdGlvbjMnIHwgJ3ZhcmlhdGlvbjUnIHwgJ3ZhcmlhdGlvbjYnIHwgJ3ZhcmlhdGlvbjcnIHwgJ3ZhcmlhdGlvbjhhJ1xyXG4gIHwgJ3ZhcmlhdGlvbjhiJyB8ICd2YXJpYXRpb244YycgfCAndmFyaWF0aW9uOGQnIHwgJ3ZhcmlhdGlvbjhlJyB8ICd2YXJpYXRpb245JyB8ICd2YXJpYXRpb24xMCcgfCAndmFyaWF0aW9uMTEnIHwgJ3ZhcmlhdGlvbjEyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2Jwcy1yYWRpb10sW2Jwcy1yYWRpby1idXR0b25dJyxcclxuICBleHBvcnRBczogJ2Jwc1JhZGlvJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW5cclxuICAgICAgW2NsYXNzLmFudC1yYWRpb109XCIhaXNSYWRpb0J1dHRvblwiXHJcbiAgICAgIFtjbGFzcy5hbnQtcmFkaW8tY2hlY2tlZF09XCJpc0NoZWNrZWQgJiYgIWlzUmFkaW9CdXR0b25cIlxyXG4gICAgICBbY2xhc3MuYW50LXJhZGlvLWRpc2FibGVkXT1cImJwc0Rpc2FibGVkICYmICFpc1JhZGlvQnV0dG9uXCJcclxuICAgICAgW2NsYXNzLmFudC1yYWRpby1idXR0b25dPVwiaXNSYWRpb0J1dHRvblwiXHJcbiAgICAgIFtjbGFzcy5hbnQtcmFkaW8tYnV0dG9uLWNoZWNrZWRdPVwiaXNDaGVja2VkICYmIGlzUmFkaW9CdXR0b25cIlxyXG4gICAgICBbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi1kaXNhYmxlZF09XCJicHNEaXNhYmxlZCAmJiBpc1JhZGlvQnV0dG9uXCJcclxuICAgID5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgI2lucHV0RWxlbWVudFxyXG4gICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgW2F0dHIuYXV0b2ZvY3VzXT1cImJwc0F1dG9Gb2N1cyA/ICdhdXRvZm9jdXMnIDogbnVsbFwiXHJcbiAgICAgICAgW2NsYXNzLmFudC1yYWRpby1pbnB1dF09XCIhaXNSYWRpb0J1dHRvblwiXHJcbiAgICAgICAgW2NsYXNzLmFudC1yYWRpby1idXR0b24taW5wdXRdPVwiaXNSYWRpb0J1dHRvblwiXHJcbiAgICAgICAgW2Rpc2FibGVkXT1cImJwc0Rpc2FibGVkXCJcclxuICAgICAgICBbY2hlY2tlZF09XCJpc0NoZWNrZWRcIlxyXG4gICAgICAgIFthdHRyLm5hbWVdPVwibmFtZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxzcGFuIFtjbGFzcy5hbnQtcmFkaW8taW5uZXJdPVwiIWlzUmFkaW9CdXR0b25cIiBbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi1pbm5lcl09XCJpc1JhZGlvQnV0dG9uXCI+PC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJicHMtY3VzdG9tLWNvbnRlbnQtcmFkaW9cIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9zcGFuPlxyXG4gIGAsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJwc1JhZGlvQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXJhZGlvLXdyYXBwZXItaW4tZm9ybS1pdGVtXSc6ICchIW56Rm9ybVN0YXR1c1NlcnZpY2UnLFxyXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8td3JhcHBlcl0nOiAnIWlzUmFkaW9CdXR0b24nLFxyXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXJdJzogJ2lzUmFkaW9CdXR0b24nLFxyXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8td3JhcHBlci1jaGVja2VkXSc6ICdpc0NoZWNrZWQgJiYgIWlzUmFkaW9CdXR0b24nLFxyXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXItY2hlY2tlZF0nOiAnaXNDaGVja2VkICYmIGlzUmFkaW9CdXR0b24nLFxyXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8td3JhcHBlci1kaXNhYmxlZF0nOiAnYnBzRGlzYWJsZWQgJiYgIWlzUmFkaW9CdXR0b24nLFxyXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXItZGlzYWJsZWRdJzogJ2Jwc0Rpc2FibGVkICYmIGlzUmFkaW9CdXR0b24nLFxyXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8td3JhcHBlci1ydGxdJzogYCFpc1JhZGlvQnV0dG9uICYmIGRpciA9PT0gJ3J0bCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXItcnRsXSc6IGBpc1JhZGlvQnV0dG9uICYmIGRpciA9PT0gJ3J0bCdgXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzUmFkaW9Db21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkluaXQge1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNEaXNhYmxlZDogQm9vbGVhbklucHV0O1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNBdXRvRm9jdXM6IEJvb2xlYW5JbnB1dDtcclxuXHJcbiAgcHJpdmF0ZSBpc05nTW9kZWwgPSBmYWxzZTtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIGlzTnpEaXNhYmxlRmlyc3RDaGFuZ2U6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIGlzQ2hlY2tlZCA9IGZhbHNlO1xyXG4gIG5hbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIGlzUmFkaW9CdXR0b24gPSAhIXRoaXMubnpSYWRpb0J1dHRvbkRpcmVjdGl2ZTtcclxuICBvbkNoYW5nZTogT25DaGFuZ2VUeXBlID0gKCkgPT4geyB9O1xyXG4gIG9uVG91Y2hlZDogT25Ub3VjaGVkVHlwZSA9ICgpID0+IHsgfTtcclxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dEVsZW1lbnQhOiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG4gIEBJbnB1dCgpIGJwc1ZhbHVlOiBOelNhZmVBbnkgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzRGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzQXV0b0ZvY3VzID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIGJwc1JhZGlvQnV0dG9uVHlwZTogQnBzUmFkaW9CdXR0b25UeXBlID0gJ3ZhcmlhdGlvbjEnO1xyXG5cclxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xyXG5cclxuICBmb2N1cygpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLmZvY3VzVmlhKHRoaXMuaW5wdXRFbGVtZW50ISwgJ2tleWJvYXJkJyk7XHJcbiAgfVxyXG5cclxuICBibHVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQhLm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcixcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOelJhZGlvU2VydmljZSkgcHJpdmF0ZSBuelJhZGlvU2VydmljZTogTnpSYWRpb1NlcnZpY2UgfCBudWxsLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChCcHNSYWRpb0J1dHRvbkRpcmVjdGl2ZSkgcHJpdmF0ZSBuelJhZGlvQnV0dG9uRGlyZWN0aXZlOiBCcHNSYWRpb0J1dHRvbkRpcmVjdGl2ZSB8IG51bGwsXHJcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgbnpGb3JtU3RhdHVzU2VydmljZT86IE56Rm9ybVN0YXR1c1NlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmJwc0Rpc2FibGVkID0gKHRoaXMuaXNOekRpc2FibGVGaXJzdENoYW5nZSAmJiB0aGlzLmJwc0Rpc2FibGVkKSB8fCBkaXNhYmxlZDtcclxuICAgIHRoaXMuaXNOekRpc2FibGVGaXJzdENoYW5nZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzQ2hlY2tlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBPbkNoYW5nZVR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNOZ01vZGVsID0gdHJ1ZTtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBPblRvdWNoZWRUeXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uelJhZGlvU2VydmljZSkge1xyXG4gICAgICB0aGlzLm56UmFkaW9TZXJ2aWNlLm5hbWUkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUobmFtZSA9PiB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMubnpSYWRpb1NlcnZpY2UuZGlzYWJsZWQkLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoZGlzYWJsZWQgPT4ge1xyXG4gICAgICAgIHRoaXMuYnBzRGlzYWJsZWQgPSAodGhpcy5pc056RGlzYWJsZUZpcnN0Q2hhbmdlICYmIHRoaXMuYnBzRGlzYWJsZWQpIHx8IGRpc2FibGVkO1xyXG4gICAgICAgIHRoaXMuaXNOekRpc2FibGVGaXJzdENoYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5uelJhZGlvU2VydmljZS5zZWxlY3RlZCQucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNDaGVja2VkID0gdGhpcy5pc0NoZWNrZWQ7XHJcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSB0aGlzLmJwc1ZhbHVlID09PSB2YWx1ZTtcclxuICAgICAgICAvLyBXZSBkb24ndCBoYXZlIHRvIHJ1biBgb25DaGFuZ2UoKWAgb24gZWFjaCBgbnotcmFkaW9gIGJ1dHRvbiB3aGVuZXZlciB0aGUgYHNlbGVjdGVkJGAgZW1pdHMuXHJcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSA4IGBuei1yYWRpb2AgYnV0dG9ucyB3aXRoaW4gdGhlIGBuei1yYWRpby1ncm91cGAgYW5kIHRoZXkncmUgYWxsIGNvbm5lY3RlZCB3aXRoXHJcbiAgICAgICAgLy8gYG5nTW9kZWxgIG9yIGBmb3JtQ29udHJvbGAgdGhlbiBgb25DaGFuZ2UoKWAgd2lsbCBiZSBjYWxsZWQgOCB0aW1lcyBmb3IgZWFjaCBgbnotcmFkaW9gIGJ1dHRvbi5cclxuICAgICAgICAvLyBXZSBwcmV2ZW50IHRoaXMgYnkgY2hlY2tpbmcgaWYgYGlzQ2hlY2tlZGAgaGFzIGJlZW4gY2hhbmdlZCBvciBub3QuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdGhpcy5pc05nTW9kZWwgJiZcclxuICAgICAgICAgIGlzQ2hlY2tlZCAhPT0gdGhpcy5pc0NoZWNrZWQgJiZcclxuICAgICAgICAgIC8vIFdlJ3JlIG9ubHkgaW50ZXJldGVkIGlmIGBpc0NoZWNrZWRgIGhhcyBiZWVuIGNoYW5nZWQgdG8gYGZhbHNlYCB2YWx1ZSB0byBlbWl0IGBmYWxzZWAgdG8gdGhlIGFzY2VuZGFudCBmb3JtLFxyXG4gICAgICAgICAgLy8gc2luY2Ugd2UgYWxyZWFkeSBlbWl0IGB0cnVlYCB3aXRoaW4gdGhlIGBzZXR1cENsaWNrTGlzdGVuZXJgLlxyXG4gICAgICAgICAgdGhpcy5pc0NoZWNrZWQgPT09IGZhbHNlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5mb2N1c01vbml0b3JcclxuICAgICAgLm1vbml0b3IodGhpcy5lbGVtZW50UmVmLCB0cnVlKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoZm9jdXNPcmlnaW4gPT4ge1xyXG4gICAgICAgIGlmICghZm9jdXNPcmlnaW4pIHtcclxuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5vblRvdWNoZWQoKSk7XHJcbiAgICAgICAgICBpZiAodGhpcy5uelJhZGlvU2VydmljZSkge1xyXG4gICAgICAgICAgICB0aGlzLm56UmFkaW9TZXJ2aWNlLnRvdWNoKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xyXG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xyXG5cclxuICAgIHRoaXMuc2V0dXBDbGlja0xpc3RlbmVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5icHNBdXRvRm9jdXMpIHtcclxuICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYGJwcy1yYWRpby1idXR0b24tJHt0aGlzLmJwc1JhZGlvQnV0dG9uVHlwZX1gKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLmVsZW1lbnRSZWYpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXR1cENsaWNrTGlzdGVuZXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGZyb21FdmVudDxNb3VzZUV2ZW50Pih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NsaWNrJylcclxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICAgICAvKiogcHJldmVudCBsYWJlbCBjbGljayB0cmlnZ2VyZWQgdHdpY2UuICoqL1xyXG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgaWYgKHRoaXMuYnBzRGlzYWJsZWQgfHwgdGhpcy5pc0NoZWNrZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgICAgICAgICB0aGlzLm56UmFkaW9TZXJ2aWNlPy5zZWxlY3QodGhpcy5icHNWYWx1ZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTmdNb2RlbCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuaXNDaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19