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
const _c0 = ["inputElement"];
const _c1 = ["bps-checkbox", ""];
const _c2 = ["*"];
function BpsCheckboxComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function BpsCheckboxComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsCheckboxComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const content_r2 = i0.ɵɵreference(7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", content_r2);
} }
function BpsCheckboxComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function BpsCheckboxComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsCheckboxComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const content_r2 = i0.ɵɵreference(7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", content_r2);
} }
function BpsCheckboxComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} }
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
    static { this.ɵfac = function BpsCheckboxComponent_Factory(t) { return new (t || BpsCheckboxComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NzCheckboxWrapperComponent, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.FocusMonitor), i0.ɵɵdirectiveInject(i3.Directionality, 8), i0.ɵɵdirectiveInject(i4.NzFormStatusService, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsCheckboxComponent, selectors: [["", "bps-checkbox", ""]], viewQuery: function BpsCheckboxComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        } }, hostAttrs: [1, "ant-checkbox-wrapper"], hostVars: 8, hostBindings: function BpsCheckboxComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-checkbox-wrapper-in-form-item", !!ctx.bpsFormStatusService)("ant-checkbox-wrapper-checked", ctx.bpsChecked)("bps-checkbox-variation3", ctx.bpsType === "variation3")("ant-checkbox-rtl", ctx.dir === "rtl");
        } }, inputs: { bpsValue: "bpsValue", bpsAutoFocus: "bpsAutoFocus", bpsDisabled: "bpsDisabled", bpsIndeterminate: "bpsIndeterminate", bpsChecked: "bpsChecked", bpsId: "bpsId", bpsType: "bpsType" }, outputs: { bpsCheckedChange: "bpsCheckedChange" }, exportAs: ["bpsCheckbox"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => BpsCheckboxComponent),
                    multi: true
                }
            ])], attrs: _c1, ngContentSelectors: _c2, decls: 8, vars: 17, consts: [["inputElement", ""], ["content", ""], [1, "ant-checkbox"], ["type", "checkbox", 1, "ant-checkbox-input", 3, "ngModelChange", "checked", "ngModel", "disabled"], [1, "ant-checkbox-inner"], [4, "ngIf"], [4, "ngTemplateOutlet"]], template: function BpsCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "span", 2)(1, "input", 3, 0);
            i0.ɵɵlistener("ngModelChange", function BpsCheckboxComponent_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.innerCheckedChange($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "span", 4);
            i0.ɵɵtemplate(4, BpsCheckboxComponent_ng_container_4_Template, 2, 1, "ng-container", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(5, BpsCheckboxComponent_ng_container_5_Template, 2, 1, "ng-container", 5)(6, BpsCheckboxComponent_ng_template_6_Template, 2, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-checkbox-checked", ctx.bpsChecked && !ctx.bpsIndeterminate)("ant-checkbox-disabled", ctx.bpsDisabled)("bps-checkbox-variation1", ctx.bpsType === "variation1")("bps-checkbox-variation3", ctx.bpsType === "variation3")("ant-checkbox-indeterminate", ctx.bpsIndeterminate);
            i0.ɵɵadvance();
            i0.ɵɵproperty("checked", ctx.bpsChecked)("ngModel", ctx.bpsChecked)("disabled", ctx.bpsDisabled);
            i0.ɵɵattribute("autofocus", ctx.bpsAutoFocus ? "autofocus" : null)("id", ctx.bpsId);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.bpsType === "variation1" || ctx.bpsType === "variation3");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.bpsType === "variation2");
        } }, dependencies: [i5.NgIf, i5.NgTemplateOutlet, i6.CheckboxControlValueAccessor, i6.NgControlStatus, i6.NgModel], styles: [".ant-checkbox-inner{width:15px!important;height:15px!important;border-radius:3px!important;background-color:#363636!important;border:solid 1px #707070!important}.ant-checkbox-wrapper.bps-checkbox-variation3:after{display:none!important}.ant-checkbox-wrapper{display:inline-block}.ant-checkbox-inner:after{top:48%!important;left:22%!important}.ant-checkbox{border-radius:3px!important;font-size:12px!important;width:15px!important;height:15px!important}.ant-checkbox:hover .ant-checkbox-inner{border:1px solid #445c67!important}.ant-checkbox.bps-checkbox-variation3:hover .ant-checkbox-inner{border:none!important}.ant-checkbox.bps-checkbox-variation3:hover,.ant-checkbox.bps-checkbox-variation3{width:15px!important;height:15px!important;border:none!important;box-shadow:none!important;transition:all .3s}.ant-checkbox-checked .ant-checkbox-inner:after{border-color:#00a2d1!important}.ant-checkbox-checked:after{border:none!important}.ant-checkbox-wrapper.cdk-focused .bps-checkbox-variation3 .ant-checkbox-inner{box-shadow:none!important;border:none!important}.bps-checkbox-variation3.ant-checkbox-checked .ant-checkbox-inner:after{border:none!important}.bps-checkbox-variation1,.bps-checkbox-variation1:hover,.bps-checkbox-variation1 .ant-checkbox-inner{width:65px!important;height:40px!important;border-radius:8px!important}.bps-checkbox-variation1 .ant-checkbox-inner,.bps-checkbox-variation1:hover .ant-checkbox-inner{background-color:#262626!important}.bps-checkbox-variation1 .ant-checkbox-inner{text-align:center}.bps-checkbox-variation3 .ant-checkbox-inner:hover,.bps-checkbox-variation3 .ant-checkbox-inner{border:none!important;background-color:transparent!important}.bps-checkbox-variation1:not(.ant-checkbox-disabled):hover .ant-checkbox-inner{border:solid 2px #00a2d1!important;transition:all .1s!important}.bps-checkbox-variation3 .ant-checkbox-inner svg,.bps-checkbox-variation1 .ant-checkbox-inner svg{display:table-cell!important;vertical-align:middle!important;text-align:center!important;margin:0 auto!important;height:100%!important}.bps-checkbox-variation3 .ant-checkbox-inner img,.bps-checkbox-variation1 .ant-checkbox-inner img{text-align:center!important;margin:0 auto!important;position:relative;top:45%;transform:translateY(-45%)}.ant-checkbox-checked.bps-checkbox-variation3 .ant-checkbox-inner:after,.ant-checkbox-checked.bps-checkbox-variation1 .ant-checkbox-inner:after{content:unset!important}.ant-checkbox-checked.bps-checkbox-variation1 .ant-checkbox-inner{border:solid 2px #00a2d1!important}.ant-checkbox.ant-checkbox-disabled:hover .ant-checkbox-inner,.ant-checkbox.ant-checkbox-disabled .ant-checkbox-inner,.ant-checkbox.ant-checkbox-disabled .ant-checkbox-inner:after{border-color:#474747!important;box-shadow:none!important}.bps-checkbox-variation1.ant-checkbox-disabled .ant-checkbox-inner svg{opacity:.4!important}.ant-checkbox-disabled,.ant-checkbox-disabled .ant-checkbox-input,.ant-checkbox-disabled+span{cursor:initial!important}\n"], encapsulation: 2, changeDetection: 0 }); }
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsCheckboxComponent, [{
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
    }], () => [{ type: i0.NgZone }, { type: i0.ElementRef }, { type: i1.NzCheckboxWrapperComponent, decorators: [{
                type: Optional
            }] }, { type: i0.ChangeDetectorRef }, { type: i2.FocusMonitor }, { type: i3.Directionality, decorators: [{
                type: Optional
            }] }, { type: i4.NzFormStatusService, decorators: [{
                type: Optional
            }] }], { inputElement: [{
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsCheckboxComponent, { className: "BpsCheckboxComponent", filePath: "lib\\components\\bps-checkbox\\bps-checkbox.component.ts", lineNumber: 85 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWNoZWNrYm94L2Jwcy1jaGVja2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7O0lBa0M3Qyx3QkFBeUQ7OztJQUQzRCw2QkFBMkU7SUFDekUsc0dBQTBDOzs7OztJQUEzQixjQUF5QjtJQUF6Qiw2Q0FBeUI7OztJQUs1Qyx3QkFBeUQ7OztJQUQzRCw2QkFBK0M7SUFDN0Msc0dBQTBDOzs7OztJQUEzQixjQUF5QjtJQUF6Qiw2Q0FBeUI7OztJQUVwQiw0QkFBTTtJQUFBLGtCQUF5QjtJQUFBLGlCQUFPOztBQWtCaEUsTUFBTSxPQUFPLG9CQUFvQjtJQXNCL0Isa0JBQWtCLENBQUMsT0FBZ0I7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztZQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM1QyxJQUFJLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO2dCQUNyQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDOUMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQWM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBZ0I7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQWlCO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxRQUFpQjtRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLHVCQUF1QixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxRQUFRLENBQUM7UUFDbEYsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxZQUNVLE1BQWMsRUFDZCxVQUFtQyxFQUN2QiwyQkFBdUQsRUFDbkUsR0FBc0IsRUFDdEIsWUFBMEIsRUFDZCxjQUE4QixFQUMvQixvQkFBMEM7UUFOckQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBQ3ZCLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNEI7UUFDbkUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDZCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDL0IseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQTdEL0QsUUFBRyxHQUFjLEtBQUssQ0FBQztRQUNmLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQy9CLDRCQUF1QixHQUFZLElBQUksQ0FBQztRQUVoRCxhQUFRLEdBQWlCLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNuQyxjQUFTLEdBQWtCLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVsQixxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ3pELGFBQVEsR0FBcUIsSUFBSSxDQUFDO1FBQ2xCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25DLFVBQUssR0FBa0IsSUFBSSxDQUFDO1FBQzVCLFlBQU8sR0FBb0IsWUFBWSxDQUFDO0lBZ0Q3QyxDQUFDO0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZO2FBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO2FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ2pCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFDakQsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsSUFBSSxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFFRCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQW9CLEVBQUUsRUFBRTtZQUMzRixJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUVyQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtZQUNqQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDO2lCQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDOUIsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDYixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDckIsT0FBTztnQkFDVCxDQUFDO2dCQUNELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUMxQixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBRUwsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQztpQkFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzlCLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEQsSUFBSSxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQztxRkE3SFUsb0JBQW9CO29FQUFwQixvQkFBb0I7Ozs7OztZQUFwQiwrRUFBb0IsZ0RBQUEsNENBQVIsWUFBWSxDQUFKLGlDQUFaLEtBQUssQ0FBTzs0VEFoQnBCO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ25ELEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7OztZQTVCRyxBQVJGLCtCQU9DLGtCQVdHO1lBREEsNEpBQWlCLDhCQUEwQixLQUFDO1lBVDlDLGlCQVVFO1lBQ0YsK0JBQWlDO1lBQy9CLHVGQUEyRTtZQUkvRSxBQURFLGlCQUFPLEVBQ0Y7WUFJUCxBQUhBLHVGQUErQyx5R0FHekI7O1lBdEJwQixBQURBLEFBREEsQUFEQSxBQURBLCtFQUE4RCwwQ0FDbkIseURBQ2UseURBQ0Esb0RBQ0w7WUFRbkQsY0FBc0I7WUFFdEIsQUFEQSxBQURBLHdDQUFzQiwyQkFDQSw2QkFDRTs7WUFJVCxlQUEwRDtZQUExRCxtRkFBMEQ7WUFLOUQsY0FBOEI7WUFBOUIsbURBQThCOzs7QUFvQ3RCO0lBQWYsWUFBWSxFQUFFOzBEQUFzQjtBQUNyQjtJQUFmLFlBQVksRUFBRTt5REFBcUI7QUFDcEI7SUFBZixZQUFZLEVBQUU7OERBQTBCO0FBQ3pCO0lBQWYsWUFBWSxFQUFFO3dEQUFvQjtpRkFsQmpDLG9CQUFvQjtjQXJEaEMsU0FBUzsyQkFDRSxnQkFBZ0IsWUFDaEIsYUFBYSx1QkFDRixLQUFLLG1CQUNULHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksWUFDM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThCVCxhQUNVO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLHFCQUFxQixDQUFDO3dCQUNuRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRixRQUVLO29CQUNKLEtBQUssRUFBRSxzQkFBc0I7b0JBQzdCLDJDQUEyQyxFQUFFLHdCQUF3QjtvQkFDckUsc0NBQXNDLEVBQUUsWUFBWTtvQkFDcEQsaUNBQWlDLEVBQUUsMEJBQTBCO29CQUM3RCwwQkFBMEIsRUFBRSxlQUFlO2lCQUM1Qzs7c0JBaUVFLFFBQVE7O3NCQUdSLFFBQVE7O3NCQUNSLFFBQVE7cUJBdkRrQyxZQUFZO2tCQUF4RCxTQUFTO21CQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDeEIsZ0JBQWdCO2tCQUFsQyxNQUFNO1lBQ0UsUUFBUTtrQkFBaEIsS0FBSztZQUNtQixZQUFZO2tCQUFwQyxLQUFLO1lBQ21CLFdBQVc7a0JBQW5DLEtBQUs7WUFDbUIsZ0JBQWdCO2tCQUF4QyxLQUFLO1lBQ21CLFVBQVU7a0JBQWxDLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7O2tGQXBCSyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE56Rm9ybVN0YXR1c1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvZm9ybSc7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnpTYWZlQW55LCBPbkNoYW5nZVR5cGUsIE9uVG91Y2hlZFR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxyXG5leHBvcnQgdHlwZSBCcHNDaGVja2JveFR5cGUgPSAndmFyaWF0aW9uMScgfCAndmFyaWF0aW9uMicgfCAndmFyaWF0aW9uMyc7XHJcblxyXG5pbXBvcnQgeyBOekNoZWNrYm94V3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vYnBzLWNoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2Jwcy1jaGVja2JveF0nLFxyXG4gIGV4cG9ydEFzOiAnYnBzQ2hlY2tib3gnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuXHJcbiAgICAgIGNsYXNzPVwiYW50LWNoZWNrYm94XCJcclxuICAgICAgW2NsYXNzLmFudC1jaGVja2JveC1jaGVja2VkXT1cImJwc0NoZWNrZWQgJiYgIWJwc0luZGV0ZXJtaW5hdGVcIlxyXG4gICAgICBbY2xhc3MuYW50LWNoZWNrYm94LWRpc2FibGVkXT1cImJwc0Rpc2FibGVkXCJcclxuICAgICAgW2NsYXNzLmJwcy1jaGVja2JveC12YXJpYXRpb24xXT1cImJwc1R5cGUgPT09ICd2YXJpYXRpb24xJ1wiXHJcbiAgICAgIFtjbGFzcy5icHMtY2hlY2tib3gtdmFyaWF0aW9uM109XCJicHNUeXBlID09PSAndmFyaWF0aW9uMydcIlxyXG4gICAgICBbY2xhc3MuYW50LWNoZWNrYm94LWluZGV0ZXJtaW5hdGVdPVwiYnBzSW5kZXRlcm1pbmF0ZVwiXHJcbiAgICA+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgICNpbnB1dEVsZW1lbnRcclxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgIGNsYXNzPVwiYW50LWNoZWNrYm94LWlucHV0XCJcclxuICAgICAgICBbYXR0ci5hdXRvZm9jdXNdPVwiYnBzQXV0b0ZvY3VzID8gJ2F1dG9mb2N1cycgOiBudWxsXCJcclxuICAgICAgICBbYXR0ci5pZF09XCJicHNJZFwiXHJcbiAgICAgICAgW2NoZWNrZWRdPVwiYnBzQ2hlY2tlZFwiXHJcbiAgICAgICAgW25nTW9kZWxdPVwiYnBzQ2hlY2tlZFwiXHJcbiAgICAgICAgW2Rpc2FibGVkXT1cImJwc0Rpc2FibGVkXCJcclxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJpbm5lckNoZWNrZWRDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiYW50LWNoZWNrYm94LWlubmVyXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImJwc1R5cGUgPT09ICd2YXJpYXRpb24xJyB8fCBicHNUeXBlID09PSAndmFyaWF0aW9uMydcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZW50XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJicHNUeXBlID09PSAndmFyaWF0aW9uMidcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLXRlbXBsYXRlICNjb250ZW50PjxzcGFuPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L3NwYW4+PC9uZy10ZW1wbGF0ZT5cclxuICBgLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnBzQ2hlY2tib3hDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnBzLWNoZWNrYm94LmNvbXBvbmVudC5jc3MnXSxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2FudC1jaGVja2JveC13cmFwcGVyJyxcclxuICAgICdbY2xhc3MuYW50LWNoZWNrYm94LXdyYXBwZXItaW4tZm9ybS1pdGVtXSc6ICchIWJwc0Zvcm1TdGF0dXNTZXJ2aWNlJyxcclxuICAgICdbY2xhc3MuYW50LWNoZWNrYm94LXdyYXBwZXItY2hlY2tlZF0nOiAnYnBzQ2hlY2tlZCcsXHJcbiAgICAnW2NsYXNzLmJwcy1jaGVja2JveC12YXJpYXRpb24zXSc6IGBicHNUeXBlID09PSAndmFyaWF0aW9uMydgLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2hlY2tib3gtcnRsXSc6IGBkaXIgPT09ICdydGwnYFxyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc0NoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYnBzQXV0b0ZvY3VzOiBCb29sZWFuSW5wdXQ7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc0Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc0luZGV0ZXJtaW5hdGU6IEJvb2xlYW5JbnB1dDtcclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYnBzQ2hlY2tlZDogQm9vbGVhbklucHV0O1xyXG5cclxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgaXNicHNEaXNhYmxlRmlyc3RDaGFuZ2U6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBvbkNoYW5nZTogT25DaGFuZ2VUeXBlID0gKCkgPT4geyB9O1xyXG4gIG9uVG91Y2hlZDogT25Ub3VjaGVkVHlwZSA9ICgpID0+IHsgfTtcclxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dEVsZW1lbnQhOiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNDaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBJbnB1dCgpIGJwc1ZhbHVlOiBOelNhZmVBbnkgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzQXV0b0ZvY3VzID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzQ2hlY2tlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGJwc0lkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBicHNUeXBlOiBCcHNDaGVja2JveFR5cGUgPSAndmFyaWF0aW9uMic7XHJcblxyXG4gIGlubmVyQ2hlY2tlZENoYW5nZShjaGVja2VkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuYnBzRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5icHNDaGVja2VkID0gY2hlY2tlZDtcclxuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLmJwc0NoZWNrZWQpO1xyXG4gICAgICB0aGlzLmJwc0NoZWNrZWRDaGFuZ2UuZW1pdCh0aGlzLmJwc0NoZWNrZWQpO1xyXG4gICAgICBpZiAodGhpcy5icHNDaGVja2JveFdyYXBwZXJDb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLmJwc0NoZWNrYm94V3JhcHBlckNvbXBvbmVudC5vbkNoYW5nZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmJwc0NoZWNrZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogT25DaGFuZ2VUeXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogT25Ub3VjaGVkVHlwZSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuYnBzRGlzYWJsZWQgPSAodGhpcy5pc2Jwc0Rpc2FibGVGaXJzdENoYW5nZSAmJiB0aGlzLmJwc0Rpc2FibGVkKSB8fCBkaXNhYmxlZDtcclxuICAgIHRoaXMuaXNicHNEaXNhYmxlRmlyc3RDaGFuZ2UgPSBmYWxzZTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgZm9jdXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLmlucHV0RWxlbWVudCwgJ2tleWJvYXJkJyk7XHJcbiAgfVxyXG5cclxuICBibHVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5ibHVyKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBicHNDaGVja2JveFdyYXBwZXJDb21wb25lbnQ6IE56Q2hlY2tib3hXcmFwcGVyQ29tcG9uZW50LFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcixcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxyXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGJwc0Zvcm1TdGF0dXNTZXJ2aWNlPzogTnpGb3JtU3RhdHVzU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c01vbml0b3JcclxuICAgICAgLm1vbml0b3IodGhpcy5lbGVtZW50UmVmLCB0cnVlKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoZm9jdXNPcmlnaW4gPT4ge1xyXG4gICAgICAgIGlmICghZm9jdXNPcmlnaW4pIHtcclxuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5vblRvdWNoZWQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIGlmICh0aGlzLmJwc0NoZWNrYm94V3JhcHBlckNvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLmJwc0NoZWNrYm94V3JhcHBlckNvbXBvbmVudC5hZGRDaGVja2JveCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xyXG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xyXG5cclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgZnJvbUV2ZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY2xpY2snKVxyXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICAgICAgICBpZiAodGhpcy5icHNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlubmVyQ2hlY2tlZENoYW5nZSghdGhpcy5icHNDaGVja2VkKTtcclxuICAgICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIGZyb21FdmVudCh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnY2xpY2snKVxyXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYnBzQXV0b0ZvY3VzKSB7XHJcbiAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5lbGVtZW50UmVmKTtcclxuICAgIGlmICh0aGlzLmJwc0NoZWNrYm94V3JhcHBlckNvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLmJwc0NoZWNrYm94V3JhcHBlckNvbXBvbmVudC5yZW1vdmVDaGVja2JveCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19