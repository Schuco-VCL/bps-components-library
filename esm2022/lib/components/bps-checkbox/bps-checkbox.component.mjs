import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "./bps-checkbox-wrapper.component";
import * as i2 from "@angular/cdk/a11y";
import * as i3 from "@angular/cdk/bidi";
import * as i4 from "ng-zorro-antd/core/form";
import * as i5 from "@angular/common";
import * as i6 from "@angular/forms";
export class BpsCheckboxComponent {
    innerCheckedChange(checked) {
        if (!this.bpsDisabled) {
            this.bpsChecked = checked;
            this.onChange(this.bpsChecked);
            this.bpsCheckedChange.emit(this.bpsChecked);
            if (this.bpsCheckboxWrapperComponent) {
                this.bpsCheckboxWrapperComponent.onChange();
            }
        }
    }
    writeValue(value) {
        this.bpsChecked = value;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this.bpsDisabled = (this.isbpsDisableFirstChange && this.bpsDisabled) || disabled;
        this.isbpsDisableFirstChange = false;
        this.cdr.markForCheck();
    }
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    blur() {
        this.inputElement.nativeElement.blur();
    }
    constructor(ngZone, elementRef, bpsCheckboxWrapperComponent, cdr, focusMonitor, directionality, bpsFormStatusService) {
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.bpsCheckboxWrapperComponent = bpsCheckboxWrapperComponent;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.directionality = directionality;
        this.bpsFormStatusService = bpsFormStatusService;
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        this.isbpsDisableFirstChange = true;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.bpsCheckedChange = new EventEmitter();
        this.bpsValue = null;
        this.bpsAutoFocus = false;
        this.bpsDisabled = false;
        this.bpsIndeterminate = false;
        this.bpsChecked = false;
        this.bpsId = null;
        this.bpsType = 'variation2';
    }
    ngOnInit() {
        this.focusMonitor
            .monitor(this.elementRef, true)
            .pipe(takeUntil(this.destroy$))
            .subscribe(focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then(() => this.onTouched());
            }
        });
        if (this.bpsCheckboxWrapperComponent) {
            this.bpsCheckboxWrapperComponent.addCheckbox(this);
        }
        this.directionality.change.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
        this.ngZone.runOutsideAngular(() => {
            fromEvent(this.elementRef.nativeElement, 'click')
                .pipe(takeUntil(this.destroy$))
                .subscribe(event => {
                event.preventDefault();
                this.focus();
                if (this.bpsDisabled) {
                    return;
                }
                this.ngZone.run(() => {
                    this.innerCheckedChange(!this.bpsChecked);
                    this.cdr.markForCheck();
                });
            });
            fromEvent(this.inputElement.nativeElement, 'click')
                .pipe(takeUntil(this.destroy$))
                .subscribe(event => event.stopPropagation());
        });
    }
    ngAfterViewInit() {
        if (this.bpsAutoFocus) {
            this.focus();
        }
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
        if (this.bpsCheckboxWrapperComponent) {
            this.bpsCheckboxWrapperComponent.removeCheckbox(this);
        }
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsCheckboxComponent, deps: [{ token: i0.NgZone }, { token: i0.ElementRef }, { token: i1.NzCheckboxWrapperComponent, optional: true }, { token: i0.ChangeDetectorRef }, { token: i2.FocusMonitor }, { token: i3.Directionality, optional: true }, { token: i4.NzFormStatusService, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsCheckboxComponent, selector: "[bps-checkbox]", inputs: { bpsValue: "bpsValue", bpsAutoFocus: "bpsAutoFocus", bpsDisabled: "bpsDisabled", bpsIndeterminate: "bpsIndeterminate", bpsChecked: "bpsChecked", bpsId: "bpsId", bpsType: "bpsType" }, outputs: { bpsCheckedChange: "bpsCheckedChange" }, host: { properties: { "class.ant-checkbox-wrapper-in-form-item": "!!bpsFormStatusService", "class.ant-checkbox-wrapper-checked": "bpsChecked", "class.bps-checkbox-variation3": "bpsType === 'variation3'", "class.ant-checkbox-rtl": "dir === 'rtl'" }, classAttribute: "ant-checkbox-wrapper" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => BpsCheckboxComponent),
                multi: true
            }
        ], viewQueries: [{ propertyName: "inputElement", first: true, predicate: ["inputElement"], descendants: true, static: true }], exportAs: ["bpsCheckbox"], ngImport: i0, template: `
    <span
      class="ant-checkbox"
      [class.ant-checkbox-checked]="bpsChecked && !bpsIndeterminate"
      [class.ant-checkbox-disabled]="bpsDisabled"
      [class.bps-checkbox-variation1]="bpsType === 'variation1'"
      [class.bps-checkbox-variation3]="bpsType === 'variation3'"
      [class.ant-checkbox-indeterminate]="bpsIndeterminate"
    >
      <input
        #inputElement
        type="checkbox"
        class="ant-checkbox-input"
        [attr.autofocus]="bpsAutoFocus ? 'autofocus' : null"
        [attr.id]="bpsId"
        [checked]="bpsChecked"
        [ngModel]="bpsChecked"
        [disabled]="bpsDisabled"
        (ngModelChange)="innerCheckedChange($event)"
      />
      <span class="ant-checkbox-inner">
        <ng-container *ngIf="bpsType === 'variation1' || bpsType === 'variation3'">
          <ng-container *ngTemplateOutlet="content"></ng-container>
        </ng-container>
      </span>
    </span>
    <ng-container *ngIf="bpsType === 'variation2'">
      <ng-container *ngTemplateOutlet="content"></ng-container>
    </ng-container>
    <ng-template #content><span><ng-content></ng-content></span></ng-template>
  `, isInline: true, styles: [".ant-checkbox-inner{width:15px!important;height:15px!important;border-radius:3px!important;background-color:#363636!important;border:solid 1px #707070!important}.ant-checkbox-wrapper.bps-checkbox-variation3:after{display:none!important}.ant-checkbox-wrapper{display:inline-block}.ant-checkbox-inner:after{top:48%!important;left:22%!important}.ant-checkbox{border-radius:3px!important;font-size:12px!important;width:15px!important;height:15px!important}.ant-checkbox:hover .ant-checkbox-inner{border:1px solid #445c67!important}.ant-checkbox.bps-checkbox-variation3:hover .ant-checkbox-inner{border:none!important}.ant-checkbox.bps-checkbox-variation3:hover,.ant-checkbox.bps-checkbox-variation3{width:15px!important;height:15px!important;border:none!important;box-shadow:none!important;transition:all .3s}.ant-checkbox-checked .ant-checkbox-inner:after{border-color:#00a2d1!important}.ant-checkbox-checked:after{border:none!important}.ant-checkbox-wrapper.cdk-focused .bps-checkbox-variation3 .ant-checkbox-inner{box-shadow:none!important;border:none!important}.bps-checkbox-variation3.ant-checkbox-checked .ant-checkbox-inner:after{border:none!important}.bps-checkbox-variation1,.bps-checkbox-variation1:hover,.bps-checkbox-variation1 .ant-checkbox-inner{width:65px!important;height:40px!important;border-radius:8px!important}.bps-checkbox-variation1 .ant-checkbox-inner,.bps-checkbox-variation1:hover .ant-checkbox-inner{background-color:#262626!important}.bps-checkbox-variation1 .ant-checkbox-inner{text-align:center}.bps-checkbox-variation3 .ant-checkbox-inner:hover,.bps-checkbox-variation3 .ant-checkbox-inner{border:none!important;background-color:transparent!important}.bps-checkbox-variation1:not(.ant-checkbox-disabled):hover .ant-checkbox-inner{border:solid 2px #00a2d1!important;transition:all .1s!important}.bps-checkbox-variation3 .ant-checkbox-inner svg,.bps-checkbox-variation1 .ant-checkbox-inner svg{display:table-cell!important;vertical-align:middle!important;text-align:center!important;margin:0 auto!important;height:100%!important}.bps-checkbox-variation3 .ant-checkbox-inner img,.bps-checkbox-variation1 .ant-checkbox-inner img{text-align:center!important;margin:0 auto!important;position:relative;top:45%;transform:translateY(-45%)}.ant-checkbox-checked.bps-checkbox-variation3 .ant-checkbox-inner:after,.ant-checkbox-checked.bps-checkbox-variation1 .ant-checkbox-inner:after{content:unset!important}.ant-checkbox-checked.bps-checkbox-variation1 .ant-checkbox-inner{border:solid 2px #00a2d1!important}.ant-checkbox.ant-checkbox-disabled:hover .ant-checkbox-inner,.ant-checkbox.ant-checkbox-disabled .ant-checkbox-inner,.ant-checkbox.ant-checkbox-disabled .ant-checkbox-inner:after{border-color:#474747!important;box-shadow:none!important}.bps-checkbox-variation1.ant-checkbox-disabled .ant-checkbox-inner svg{opacity:.4!important}.ant-checkbox-disabled,.ant-checkbox-disabled .ant-checkbox-input,.ant-checkbox-disabled+span{cursor:initial!important}\n"], dependencies: [{ kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i5.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i6.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i6.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], BpsCheckboxComponent.prototype, "bpsAutoFocus", void 0);
__decorate([
    InputBoolean()
], BpsCheckboxComponent.prototype, "bpsDisabled", void 0);
__decorate([
    InputBoolean()
], BpsCheckboxComponent.prototype, "bpsIndeterminate", void 0);
__decorate([
    InputBoolean()
], BpsCheckboxComponent.prototype, "bpsChecked", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsCheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: '[bps-checkbox]', exportAs: 'bpsCheckbox', preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: `
    <span
      class="ant-checkbox"
      [class.ant-checkbox-checked]="bpsChecked && !bpsIndeterminate"
      [class.ant-checkbox-disabled]="bpsDisabled"
      [class.bps-checkbox-variation1]="bpsType === 'variation1'"
      [class.bps-checkbox-variation3]="bpsType === 'variation3'"
      [class.ant-checkbox-indeterminate]="bpsIndeterminate"
    >
      <input
        #inputElement
        type="checkbox"
        class="ant-checkbox-input"
        [attr.autofocus]="bpsAutoFocus ? 'autofocus' : null"
        [attr.id]="bpsId"
        [checked]="bpsChecked"
        [ngModel]="bpsChecked"
        [disabled]="bpsDisabled"
        (ngModelChange)="innerCheckedChange($event)"
      />
      <span class="ant-checkbox-inner">
        <ng-container *ngIf="bpsType === 'variation1' || bpsType === 'variation3'">
          <ng-container *ngTemplateOutlet="content"></ng-container>
        </ng-container>
      </span>
    </span>
    <ng-container *ngIf="bpsType === 'variation2'">
      <ng-container *ngTemplateOutlet="content"></ng-container>
    </ng-container>
    <ng-template #content><span><ng-content></ng-content></span></ng-template>
  `, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => BpsCheckboxComponent),
                            multi: true
                        }
                    ], host: {
                        class: 'ant-checkbox-wrapper',
                        '[class.ant-checkbox-wrapper-in-form-item]': '!!bpsFormStatusService',
                        '[class.ant-checkbox-wrapper-checked]': 'bpsChecked',
                        '[class.bps-checkbox-variation3]': `bpsType === 'variation3'`,
                        '[class.ant-checkbox-rtl]': `dir === 'rtl'`
                    }, styles: [".ant-checkbox-inner{width:15px!important;height:15px!important;border-radius:3px!important;background-color:#363636!important;border:solid 1px #707070!important}.ant-checkbox-wrapper.bps-checkbox-variation3:after{display:none!important}.ant-checkbox-wrapper{display:inline-block}.ant-checkbox-inner:after{top:48%!important;left:22%!important}.ant-checkbox{border-radius:3px!important;font-size:12px!important;width:15px!important;height:15px!important}.ant-checkbox:hover .ant-checkbox-inner{border:1px solid #445c67!important}.ant-checkbox.bps-checkbox-variation3:hover .ant-checkbox-inner{border:none!important}.ant-checkbox.bps-checkbox-variation3:hover,.ant-checkbox.bps-checkbox-variation3{width:15px!important;height:15px!important;border:none!important;box-shadow:none!important;transition:all .3s}.ant-checkbox-checked .ant-checkbox-inner:after{border-color:#00a2d1!important}.ant-checkbox-checked:after{border:none!important}.ant-checkbox-wrapper.cdk-focused .bps-checkbox-variation3 .ant-checkbox-inner{box-shadow:none!important;border:none!important}.bps-checkbox-variation3.ant-checkbox-checked .ant-checkbox-inner:after{border:none!important}.bps-checkbox-variation1,.bps-checkbox-variation1:hover,.bps-checkbox-variation1 .ant-checkbox-inner{width:65px!important;height:40px!important;border-radius:8px!important}.bps-checkbox-variation1 .ant-checkbox-inner,.bps-checkbox-variation1:hover .ant-checkbox-inner{background-color:#262626!important}.bps-checkbox-variation1 .ant-checkbox-inner{text-align:center}.bps-checkbox-variation3 .ant-checkbox-inner:hover,.bps-checkbox-variation3 .ant-checkbox-inner{border:none!important;background-color:transparent!important}.bps-checkbox-variation1:not(.ant-checkbox-disabled):hover .ant-checkbox-inner{border:solid 2px #00a2d1!important;transition:all .1s!important}.bps-checkbox-variation3 .ant-checkbox-inner svg,.bps-checkbox-variation1 .ant-checkbox-inner svg{display:table-cell!important;vertical-align:middle!important;text-align:center!important;margin:0 auto!important;height:100%!important}.bps-checkbox-variation3 .ant-checkbox-inner img,.bps-checkbox-variation1 .ant-checkbox-inner img{text-align:center!important;margin:0 auto!important;position:relative;top:45%;transform:translateY(-45%)}.ant-checkbox-checked.bps-checkbox-variation3 .ant-checkbox-inner:after,.ant-checkbox-checked.bps-checkbox-variation1 .ant-checkbox-inner:after{content:unset!important}.ant-checkbox-checked.bps-checkbox-variation1 .ant-checkbox-inner{border:solid 2px #00a2d1!important}.ant-checkbox.ant-checkbox-disabled:hover .ant-checkbox-inner,.ant-checkbox.ant-checkbox-disabled .ant-checkbox-inner,.ant-checkbox.ant-checkbox-disabled .ant-checkbox-inner:after{border-color:#474747!important;box-shadow:none!important}.bps-checkbox-variation1.ant-checkbox-disabled .ant-checkbox-inner svg{opacity:.4!important}.ant-checkbox-disabled,.ant-checkbox-disabled .ant-checkbox-input,.ant-checkbox-disabled+span{cursor:initial!important}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }, { type: i0.ElementRef }, { type: i1.NzCheckboxWrapperComponent, decorators: [{
                    type: Optional
                }] }, { type: i0.ChangeDetectorRef }, { type: i2.FocusMonitor }, { type: i3.Directionality, decorators: [{
                    type: Optional
                }] }, { type: i4.NzFormStatusService, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { inputElement: [{
                type: ViewChild,
                args: ['inputElement', { static: true }]
            }], bpsCheckedChange: [{
                type: Output
            }], bpsValue: [{
                type: Input
            }], bpsAutoFocus: [{
                type: Input
            }], bpsDisabled: [{
                type: Input
            }], bpsIndeterminate: [{
                type: Input
            }], bpsChecked: [{
                type: Input
            }], bpsId: [{
                type: Input
            }], bpsType: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWNoZWNrYm94L2Jwcy1jaGVja2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7QUEyRHZELE1BQU0sT0FBTyxvQkFBb0I7SUFzQi9CLGtCQUFrQixDQUFDLE9BQWdCO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzVDLElBQUksSUFBSSxDQUFDLDJCQUEyQixFQUFFO2dCQUNwQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDN0M7U0FDRjtJQUNILENBQUM7SUFFRCxVQUFVLENBQUMsS0FBYztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFH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RSxZQUFZO3dCQUNwRCxpQ0FBaUMsRUFBRSwwQkFBMEI7d0JBQzdELDBCQUEwQixFQUFFLGVBQWU7cUJBQzVDOzswQkFpRUUsUUFBUTs7MEJBR1IsUUFBUTs7MEJBQ1IsUUFBUTs0Q0F2RGtDLFlBQVk7c0JBQXhELFNBQVM7dUJBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFDeEIsZ0JBQWdCO3NCQUFsQyxNQUFNO2dCQUNFLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ21CLFlBQVk7c0JBQXBDLEtBQUs7Z0JBQ21CLFdBQVc7c0JBQW5DLEtBQUs7Z0JBQ21CLGdCQUFnQjtzQkFBeEMsS0FBSztnQkFDbUIsVUFBVTtzQkFBbEMsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOekZvcm1TdGF0dXNTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2Zvcm0nO1xyXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE56U2FmZUFueSwgT25DaGFuZ2VUeXBlLCBPblRvdWNoZWRUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuZXhwb3J0IHR5cGUgQnBzQ2hlY2tib3hUeXBlID0gJ3ZhcmlhdGlvbjEnIHwgJ3ZhcmlhdGlvbjInIHwgJ3ZhcmlhdGlvbjMnO1xyXG5cclxuaW1wb3J0IHsgTnpDaGVja2JveFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuL2Jwcy1jaGVja2JveC13cmFwcGVyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1ticHMtY2hlY2tib3hdJyxcclxuICBleHBvcnRBczogJ2Jwc0NoZWNrYm94JyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8c3BhblxyXG4gICAgICBjbGFzcz1cImFudC1jaGVja2JveFwiXHJcbiAgICAgIFtjbGFzcy5hbnQtY2hlY2tib3gtY2hlY2tlZF09XCJicHNDaGVja2VkICYmICFicHNJbmRldGVybWluYXRlXCJcclxuICAgICAgW2NsYXNzLmFudC1jaGVja2JveC1kaXNhYmxlZF09XCJicHNEaXNhYmxlZFwiXHJcbiAgICAgIFtjbGFzcy5icHMtY2hlY2tib3gtdmFyaWF0aW9uMV09XCJicHNUeXBlID09PSAndmFyaWF0aW9uMSdcIlxyXG4gICAgICBbY2xhc3MuYnBzLWNoZWNrYm94LXZhcmlhdGlvbjNdPVwiYnBzVHlwZSA9PT0gJ3ZhcmlhdGlvbjMnXCJcclxuICAgICAgW2NsYXNzLmFudC1jaGVja2JveC1pbmRldGVybWluYXRlXT1cImJwc0luZGV0ZXJtaW5hdGVcIlxyXG4gICAgPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICAjaW5wdXRFbGVtZW50XHJcbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICBjbGFzcz1cImFudC1jaGVja2JveC1pbnB1dFwiXHJcbiAgICAgICAgW2F0dHIuYXV0b2ZvY3VzXT1cImJwc0F1dG9Gb2N1cyA/ICdhdXRvZm9jdXMnIDogbnVsbFwiXHJcbiAgICAgICAgW2F0dHIuaWRdPVwiYnBzSWRcIlxyXG4gICAgICAgIFtjaGVja2VkXT1cImJwc0NoZWNrZWRcIlxyXG4gICAgICAgIFtuZ01vZGVsXT1cImJwc0NoZWNrZWRcIlxyXG4gICAgICAgIFtkaXNhYmxlZF09XCJicHNEaXNhYmxlZFwiXHJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiaW5uZXJDaGVja2VkQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAvPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImFudC1jaGVja2JveC1pbm5lclwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJicHNUeXBlID09PSAndmFyaWF0aW9uMScgfHwgYnBzVHlwZSA9PT0gJ3ZhcmlhdGlvbjMnXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiYnBzVHlwZSA9PT0gJ3ZhcmlhdGlvbjInXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZW50XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDxuZy10ZW1wbGF0ZSAjY29udGVudD48c3Bhbj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9zcGFuPjwvbmctdGVtcGxhdGU+XHJcbiAgYCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJwc0NoZWNrYm94Q29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIHN0eWxlVXJsczogWycuL2Jwcy1jaGVja2JveC5jb21wb25lbnQuY3NzJ10sXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdhbnQtY2hlY2tib3gtd3JhcHBlcicsXHJcbiAgICAnW2NsYXNzLmFudC1jaGVja2JveC13cmFwcGVyLWluLWZvcm0taXRlbV0nOiAnISFicHNGb3JtU3RhdHVzU2VydmljZScsXHJcbiAgICAnW2NsYXNzLmFudC1jaGVja2JveC13cmFwcGVyLWNoZWNrZWRdJzogJ2Jwc0NoZWNrZWQnLFxyXG4gICAgJ1tjbGFzcy5icHMtY2hlY2tib3gtdmFyaWF0aW9uM10nOiBgYnBzVHlwZSA9PT0gJ3ZhcmlhdGlvbjMnYCxcclxuICAgICdbY2xhc3MuYW50LWNoZWNrYm94LXJ0bF0nOiBgZGlyID09PSAncnRsJ2BcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNDaGVja2JveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc0F1dG9Gb2N1czogQm9vbGVhbklucHV0O1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNEaXNhYmxlZDogQm9vbGVhbklucHV0O1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNJbmRldGVybWluYXRlOiBCb29sZWFuSW5wdXQ7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc0NoZWNrZWQ6IEJvb2xlYW5JbnB1dDtcclxuXHJcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIGlzYnBzRGlzYWJsZUZpcnN0Q2hhbmdlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgb25DaGFuZ2U6IE9uQ2hhbmdlVHlwZSA9ICgpID0+IHsgfTtcclxuICBvblRvdWNoZWQ6IE9uVG91Y2hlZFR5cGUgPSAoKSA9PiB7IH07XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXRFbGVtZW50ITogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzQ2hlY2tlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBASW5wdXQoKSBicHNWYWx1ZTogTnpTYWZlQW55IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0F1dG9Gb2N1cyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNJbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0NoZWNrZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBicHNJZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgYnBzVHlwZTogQnBzQ2hlY2tib3hUeXBlID0gJ3ZhcmlhdGlvbjInO1xyXG5cclxuICBpbm5lckNoZWNrZWRDaGFuZ2UoY2hlY2tlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmJwc0Rpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuYnBzQ2hlY2tlZCA9IGNoZWNrZWQ7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5icHNDaGVja2VkKTtcclxuICAgICAgdGhpcy5icHNDaGVja2VkQ2hhbmdlLmVtaXQodGhpcy5icHNDaGVja2VkKTtcclxuICAgICAgaWYgKHRoaXMuYnBzQ2hlY2tib3hXcmFwcGVyQ29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5icHNDaGVja2JveFdyYXBwZXJDb21wb25lbnQub25DaGFuZ2UoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5icHNDaGVja2VkID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IE9uQ2hhbmdlVHlwZSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IE9uVG91Y2hlZFR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmJwc0Rpc2FibGVkID0gKHRoaXMuaXNicHNEaXNhYmxlRmlyc3RDaGFuZ2UgJiYgdGhpcy5icHNEaXNhYmxlZCkgfHwgZGlzYWJsZWQ7XHJcbiAgICB0aGlzLmlzYnBzRGlzYWJsZUZpcnN0Q2hhbmdlID0gZmFsc2U7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5pbnB1dEVsZW1lbnQsICdrZXlib2FyZCcpO1xyXG4gIH1cclxuXHJcbiAgYmx1cigpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgYnBzQ2hlY2tib3hXcmFwcGVyQ29tcG9uZW50OiBOekNoZWNrYm94V3JhcHBlckNvbXBvbmVudCxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcclxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBicHNGb3JtU3RhdHVzU2VydmljZT86IE56Rm9ybVN0YXR1c1NlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yXHJcbiAgICAgIC5tb25pdG9yKHRoaXMuZWxlbWVudFJlZiwgdHJ1ZSlcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKGZvY3VzT3JpZ2luID0+IHtcclxuICAgICAgICBpZiAoIWZvY3VzT3JpZ2luKSB7XHJcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMub25Ub3VjaGVkKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICBpZiAodGhpcy5icHNDaGVja2JveFdyYXBwZXJDb21wb25lbnQpIHtcclxuICAgICAgdGhpcy5icHNDaGVja2JveFdyYXBwZXJDb21wb25lbnQuYWRkQ2hlY2tib3godGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcclxuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcclxuXHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGZyb21FdmVudCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NsaWNrJylcclxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgICAgICAgaWYgKHRoaXMuYnBzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbm5lckNoZWNrZWRDaGFuZ2UoIXRoaXMuYnBzQ2hlY2tlZCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBmcm9tRXZlbnQodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2NsaWNrJylcclxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgLnN1YnNjcmliZShldmVudCA9PiBldmVudC5zdG9wUHJvcGFnYXRpb24oKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmJwc0F1dG9Gb2N1cykge1xyXG4gICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuZWxlbWVudFJlZik7XHJcbiAgICBpZiAodGhpcy5icHNDaGVja2JveFdyYXBwZXJDb21wb25lbnQpIHtcclxuICAgICAgdGhpcy5icHNDaGVja2JveFdyYXBwZXJDb21wb25lbnQucmVtb3ZlQ2hlY2tib3godGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==