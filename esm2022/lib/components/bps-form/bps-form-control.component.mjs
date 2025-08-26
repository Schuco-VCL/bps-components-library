import { ChangeDetectionStrategy, Component, ContentChild, Host, Input, Optional, ViewEncapsulation } from '@angular/core';
import { UntypedFormControl, FormControlDirective, FormControlName, NgControl, NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';
import { helpMotion } from 'ng-zorro-antd/core/animation';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { toBoolean } from 'ng-zorro-antd/core/util';
import { NzColDirective } from '../bps-grid/nz-col.directive';
import * as i0 from "@angular/core";
import * as i1 from "../core/services/update-host-class.service";
import * as i2 from "./bps-form-item.component";
import * as i3 from "../bps-grid/nz-row.directive";
import * as i4 from "@angular/common";
import * as i5 from "../core/addon/string_template_outlet";
import * as i6 from "ng-zorro-antd/icon";
const _c0 = ["*", [["bps-form-explain"]], [["bps-form-extra"]]];
const _c1 = ["*", "bps-form-explain", "bps-form-extra"];
const _c2 = a0 => ({ $implicit: a0 });
function BpsFormControlComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 7);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzType", ctx_r0.iconType);
} }
function BpsFormControlComponent_div_5_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.bpsSuccessTip);
} }
function BpsFormControlComponent_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsFormControlComponent_div_5_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.bpsSuccessTip)("nzStringTemplateOutletContext", i0.ɵɵpureFunction1(2, _c2, ctx_r0.validateControl));
} }
function BpsFormControlComponent_div_5_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.bpsWarningTip);
} }
function BpsFormControlComponent_div_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsFormControlComponent_div_5_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.bpsWarningTip)("nzStringTemplateOutletContext", i0.ɵɵpureFunction1(2, _c2, ctx_r0.validateControl));
} }
function BpsFormControlComponent_div_5_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.bpsErrorTip);
} }
function BpsFormControlComponent_div_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsFormControlComponent_div_5_ng_container_4_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.bpsErrorTip)("nzStringTemplateOutletContext", i0.ɵɵpureFunction1(2, _c2, ctx_r0.validateControl));
} }
function BpsFormControlComponent_div_5_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.bpsValidatingTip);
} }
function BpsFormControlComponent_div_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsFormControlComponent_div_5_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.bpsValidatingTip)("nzStringTemplateOutletContext", i0.ɵɵpureFunction1(2, _c2, ctx_r0.validateControl));
} }
function BpsFormControlComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "div");
    i0.ɵɵtemplate(2, BpsFormControlComponent_div_5_ng_container_2_Template, 2, 4, "ng-container", 5)(3, BpsFormControlComponent_div_5_ng_container_3_Template, 2, 4, "ng-container", 5)(4, BpsFormControlComponent_div_5_ng_container_4_Template, 2, 4, "ng-container", 5)(5, BpsFormControlComponent_div_5_ng_container_5_Template, 2, 4, "ng-container", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("@helpMotion", undefined);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showSuccessTip);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showWarningTip);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showErrorTip);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showValidatingTip);
} }
function BpsFormControlComponent_ng_content_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 1, ["*ngIf", "!hasTips"]);
} }
function BpsFormControlComponent_ng_content_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 2, ["*ngIf", "!bpsExtra"]);
} }
function BpsFormControlComponent_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.bpsExtra);
} }
function BpsFormControlComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, BpsFormControlComponent_div_8_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.bpsExtra);
} }
export class BpsFormControlComponent extends NzColDirective {
    set bpsHasFeedback(value) {
        this._hasFeedback = toBoolean(value);
        this.setControlClassMap();
    }
    get bpsHasFeedback() {
        return this._hasFeedback;
    }
    set bpsValidateStatus(value) {
        if (value instanceof UntypedFormControl || value instanceof NgModel) {
            this.validateControl = value;
            this.validateString = null;
            this.watchControl();
        }
        else if (value instanceof FormControlName) {
            this.validateControl = value.control;
            this.validateString = null;
            this.watchControl();
        }
        else {
            this.validateString = value;
            this.validateControl = null;
            this.setControlClassMap();
        }
    }
    removeSubscribe() {
        this.validateChanges.unsubscribe();
    }
    watchControl() {
        this.removeSubscribe();
        /** miss detect https://github.com/angular/angular/issues/10887 **/
        if (this.validateControl && this.validateControl.statusChanges) {
            this.validateChanges = this.validateControl.statusChanges.pipe().subscribe(() => {
                this.setControlClassMap();
                this.cdr.markForCheck();
            });
        }
    }
    validateControlStatus(status) {
        return (!!this.validateControl &&
            (this.validateControl.dirty || this.validateControl.touched) &&
            this.validateControl.status === status);
    }
    setControlClassMap() {
        if (this.validateString === 'warning') {
            this.status = 'warning';
            this.iconType = 'exclamation-circle-fill';
        }
        else if (this.validateString === 'validating' ||
            this.validateString === 'pending' ||
            this.validateControlStatus('PENDING')) {
            this.status = 'validating';
            this.iconType = 'loading';
        }
        else if (this.validateString === 'error' || this.validateControlStatus('INVALID')) {
            this.status = 'error';
            this.iconType = 'close-circle-fill';
        }
        else if (this.validateString === 'success' || this.validateControlStatus('VALID')) {
            this.status = 'success';
            this.iconType = 'check-circle-fill';
        }
        else {
            this.status = null;
            this.iconType = '';
        }
        if (this.hasTips) {
            this.nzFormItemComponent.setWithHelpViaTips(this.showErrorTip);
        }
        this.controlClassMap = {
            [`has-warning`]: this.status === 'warning',
            [`is-validating`]: this.status === 'validating',
            [`has-error`]: this.status === 'error',
            [`has-success`]: this.status === 'success',
            [`has-feedback`]: this.bpsHasFeedback && this.status
        };
    }
    get hasTips() {
        return !!(this.bpsSuccessTip || this.bpsWarningTip || this.bpsErrorTip || this.bpsValidatingTip);
    }
    get showSuccessTip() {
        return this.status === 'success' && !!this.bpsSuccessTip;
    }
    get showWarningTip() {
        return this.status === 'warning' && !!this.bpsWarningTip;
    }
    get showErrorTip() {
        return this.status === 'error' && !!this.bpsErrorTip;
    }
    get showValidatingTip() {
        return this.status === 'validating' && !!this.bpsValidatingTip;
    }
    get showInnerTip() {
        return this.showSuccessTip || this.showWarningTip || this.showErrorTip || this.showValidatingTip;
    }
    constructor(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, cdr, renderer) {
        super(nzUpdateHostClassService, elementRef, nzFormItemComponent || nzRowDirective, renderer);
        this.nzFormItemComponent = nzFormItemComponent;
        this.cdr = cdr;
        this._hasFeedback = false;
        this.validateChanges = Subscription.EMPTY;
        this.status = null;
        this.controlClassMap = {};
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-control-wrapper');
    }
    ngOnInit() {
        super.ngOnInit();
        this.setControlClassMap();
    }
    ngOnDestroy() {
        this.removeSubscribe();
        super.ngOnDestroy();
    }
    ngAfterContentInit() {
        if (!this.validateControl && !this.validateString) {
            if (this.defaultValidateControl instanceof FormControlDirective) {
                this.bpsValidateStatus = this.defaultValidateControl.control;
            }
            else {
                this.bpsValidateStatus = this.defaultValidateControl;
            }
        }
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
    static { this.ɵfac = function BpsFormControlComponent_Factory(t) { return new (t || BpsFormControlComponent)(i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.BpsFormItemComponent, 9), i0.ɵɵdirectiveInject(i3.NzRowDirective, 9), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsFormControlComponent, selectors: [["bps-form-control"]], contentQueries: function BpsFormControlComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, NgControl, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.defaultValidateControl = _t.first);
        } }, inputs: { bpsSuccessTip: "bpsSuccessTip", bpsWarningTip: "bpsWarningTip", bpsErrorTip: "bpsErrorTip", bpsValidatingTip: "bpsValidatingTip", bpsExtra: "bpsExtra", bpsHasFeedback: "bpsHasFeedback", bpsValidateStatus: "bpsValidateStatus" }, exportAs: ["bpsFormControl"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c1, decls: 9, vars: 6, consts: [[1, "ant-form-item-control", 3, "ngClass"], [1, "ant-form-item-children"], [1, "ant-form-item-children-icon"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["class", "ant-form-explain", 4, "ngIf"], [4, "ngIf"], ["class", "ant-form-extra", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], [1, "ant-form-explain"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [1, "ant-form-extra"], [4, "nzStringTemplateOutlet"]], template: function BpsFormControlComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "div", 0)(1, "span", 1);
            i0.ɵɵprojection(2);
            i0.ɵɵelementStart(3, "span", 2);
            i0.ɵɵtemplate(4, BpsFormControlComponent_i_4_Template, 1, 1, "i", 3);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(5, BpsFormControlComponent_div_5_Template, 6, 5, "div", 4)(6, BpsFormControlComponent_ng_content_6_Template, 1, 0, "ng-content", 5)(7, BpsFormControlComponent_ng_content_7_Template, 1, 0, "ng-content", 5)(8, BpsFormControlComponent_div_8_Template, 2, 1, "div", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.controlClassMap);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.bpsHasFeedback && ctx.iconType);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showSuccessTip || ctx.showWarningTip || ctx.showErrorTip || ctx.showValidatingTip);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.hasTips);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.bpsExtra);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.bpsExtra);
        } }, dependencies: [i4.NgClass, i4.NgIf, i5.NzStringTemplateOutletDirective, i6.NzIconDirective], styles: ["bps-form-control{display:block}form .has-feedback .ant-input-suffix i{margin-right:18px}\n"], encapsulation: 2, data: { animation: [helpMotion] }, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsFormControlComponent, [{
        type: Component,
        args: [{ selector: 'bps-form-control', exportAs: 'bpsFormControl', preserveWhitespaces: false, animations: [helpMotion], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [NzUpdateHostClassService], template: "<div class=\"ant-form-item-control\" [ngClass]=\"controlClassMap\">\r\n  <span class=\"ant-form-item-children\">\r\n    <ng-content></ng-content>\r\n    <span class=\"ant-form-item-children-icon\">\r\n      <i *ngIf=\"bpsHasFeedback && iconType\" nz-icon [nzType]=\"iconType\"></i>\r\n    </span>\r\n  </span>\r\n  <div class=\"ant-form-explain\" *ngIf=\"showSuccessTip || showWarningTip || showErrorTip || showValidatingTip\">\r\n    <div @helpMotion>\r\n      <ng-container *ngIf=\"showSuccessTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsSuccessTip;context:{$implicit:validateControl};\">{{ bpsSuccessTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showWarningTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsWarningTip;context:{$implicit:validateControl};\">{{ bpsWarningTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showErrorTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsErrorTip;context:{$implicit:validateControl};\">{{ bpsErrorTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showValidatingTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsValidatingTip;context:{$implicit:validateControl};\">{{ bpsValidatingTip }}</ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <ng-content *ngIf=\"!hasTips\" select=\"bps-form-explain\"></ng-content>\r\n  <ng-content *ngIf=\"!bpsExtra\" select=\"bps-form-extra\"></ng-content>\r\n  <div class=\"ant-form-extra\" *ngIf=\"bpsExtra\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsExtra\">{{ bpsExtra }}</ng-container>\r\n  </div>\r\n</div>\r\n", styles: ["bps-form-control{display:block}form .has-feedback .ant-input-suffix i{margin-right:18px}\n"] }]
    }], () => [{ type: i1.NzUpdateHostClassService }, { type: i0.ElementRef }, { type: i2.BpsFormItemComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: i3.NzRowDirective, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }], { defaultValidateControl: [{
            type: ContentChild,
            args: [NgControl, { static: false }]
        }], bpsSuccessTip: [{
            type: Input
        }], bpsWarningTip: [{
            type: Input
        }], bpsErrorTip: [{
            type: Input
        }], bpsValidatingTip: [{
            type: Input
        }], bpsExtra: [{
            type: Input
        }], bpsHasFeedback: [{
            type: Input
        }], bpsValidateStatus: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsFormControlComponent, { className: "BpsFormControlComponent", filePath: "lib\\components\\bps-form\\bps-form-control.component.ts", lineNumber: 52 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWZvcm0tY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1mb3JtL2Jwcy1mb3JtLWNvbnRyb2wuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtZm9ybS9icHMtZm9ybS1jb250cm9sLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFHTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFlBQVksRUFFWixJQUFJLEVBQ0osS0FBSyxFQUdMLFFBQVEsRUFHUixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0csT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUlwQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFdEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7Ozs7O0lDdEJ4RCx1QkFBc0U7OztJQUF4Qix3Q0FBbUI7OztJQU0vRCw2QkFBMkY7SUFBQSxZQUFtQjs7OztJQUFuQixjQUFtQjtJQUFuQiwwQ0FBbUI7OztJQURoSCw2QkFBcUM7SUFDbkMsK0dBQTJGOzs7O0lBQTVFLGNBQXNDO0lBQUEsQUFBdEMsNkRBQXNDLHFGQUFvQzs7O0lBR3pGLDZCQUEy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LGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFHRixjQUFjO2tCQURqQixLQUFLO1lBV0YsaUJBQWlCO2tCQURwQixLQUFLOztrRkExQkssdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVW50eXBlZEZvcm1Db250cm9sLCBGb3JtQ29udHJvbERpcmVjdGl2ZSwgRm9ybUNvbnRyb2xOYW1lLCBOZ0NvbnRyb2wsIE5nTW9kZWwgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBCcHNGb3JtSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vYnBzLWZvcm0taXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBoZWxwTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XHJcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XHJcbmltcG9ydCB7IE5nQ2xhc3NUeXBlIH0gZnJvbSAnLi4vY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgTnpDb2xEaXJlY3RpdmUgfSBmcm9tICcuLi9icHMtZ3JpZC9uei1jb2wuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpSb3dEaXJlY3RpdmUgfSBmcm9tICcuLi9icHMtZ3JpZC9uei1yb3cuZGlyZWN0aXZlJztcclxuXHJcbmV4cG9ydCB0eXBlIE56Rm9ybUNvbnRyb2xTdGF0dXNUeXBlID0gJ3dhcm5pbmcnIHwgJ3ZhbGlkYXRpbmcnIHwgJ2Vycm9yJyB8ICdzdWNjZXNzJyB8IG51bGw7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jwcy1mb3JtLWNvbnRyb2wnLFxyXG4gIGV4cG9ydEFzOiAnYnBzRm9ybUNvbnRyb2wnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGFuaW1hdGlvbnM6IFtoZWxwTW90aW9uXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy1mb3JtLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBicHMtZm9ybS1jb250cm9sIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgICBmb3JtIC5oYXMtZmVlZGJhY2sgLmFudC1pbnB1dC1zdWZmaXggaSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzRm9ybUNvbnRyb2xDb21wb25lbnQgZXh0ZW5kcyBOekNvbERpcmVjdGl2ZVxyXG4gIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBfaGFzRmVlZGJhY2sgPSBmYWxzZTtcclxuICBwcml2YXRlIHZhbGlkYXRlQ2hhbmdlczogU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gIHByaXZhdGUgdmFsaWRhdGVTdHJpbmc6IHN0cmluZyB8IG51bGw7XHJcbiAgdmFsaWRhdGVDb250cm9sOiBVbnR5cGVkRm9ybUNvbnRyb2wgfCBOZ01vZGVsIHwgbnVsbDtcclxuICBzdGF0dXM6IE56Rm9ybUNvbnRyb2xTdGF0dXNUeXBlID0gbnVsbDtcclxuICBjb250cm9sQ2xhc3NNYXA6IE5nQ2xhc3NUeXBlID0ge307XHJcbiAgaWNvblR5cGU6IHN0cmluZztcclxuICBAQ29udGVudENoaWxkKE5nQ29udHJvbCwgeyBzdGF0aWM6IGZhbHNlIH0pIGRlZmF1bHRWYWxpZGF0ZUNvbnRyb2w6IEZvcm1Db250cm9sTmFtZSB8IEZvcm1Db250cm9sRGlyZWN0aXZlO1xyXG4gIEBJbnB1dCgpIGJwc1N1Y2Nlc3NUaXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBVbnR5cGVkRm9ybUNvbnRyb2wgfCBOZ01vZGVsIH0+O1xyXG4gIEBJbnB1dCgpIGJwc1dhcm5pbmdUaXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBVbnR5cGVkRm9ybUNvbnRyb2wgfCBOZ01vZGVsIH0+O1xyXG4gIEBJbnB1dCgpIGJwc0Vycm9yVGlwOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogVW50eXBlZEZvcm1Db250cm9sIHwgTmdNb2RlbCB9PjtcclxuICBASW5wdXQoKSBicHNWYWxpZGF0aW5nVGlwOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogVW50eXBlZEZvcm1Db250cm9sIHwgTmdNb2RlbCB9PjtcclxuICBASW5wdXQoKSBicHNFeHRyYTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGJwc0hhc0ZlZWRiYWNrKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9oYXNGZWVkYmFjayA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICB0aGlzLnNldENvbnRyb2xDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGJwc0hhc0ZlZWRiYWNrKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hhc0ZlZWRiYWNrO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYnBzVmFsaWRhdGVTdGF0dXModmFsdWU6IHN0cmluZyB8IFVudHlwZWRGb3JtQ29udHJvbCB8IEZvcm1Db250cm9sTmFtZSB8IE5nTW9kZWwpIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFVudHlwZWRGb3JtQ29udHJvbCB8fCB2YWx1ZSBpbnN0YW5jZW9mIE5nTW9kZWwpIHtcclxuICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2wgPSB2YWx1ZTtcclxuICAgICAgdGhpcy52YWxpZGF0ZVN0cmluZyA9IG51bGw7XHJcbiAgICAgIHRoaXMud2F0Y2hDb250cm9sKCk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgRm9ybUNvbnRyb2xOYW1lKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sID0gdmFsdWUuY29udHJvbDtcclxuICAgICAgdGhpcy52YWxpZGF0ZVN0cmluZyA9IG51bGw7XHJcbiAgICAgIHRoaXMud2F0Y2hDb250cm9sKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbGlkYXRlU3RyaW5nID0gdmFsdWU7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sID0gbnVsbDtcclxuICAgICAgdGhpcy5zZXRDb250cm9sQ2xhc3NNYXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZVN1YnNjcmliZSgpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsaWRhdGVDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICB3YXRjaENvbnRyb2woKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbW92ZVN1YnNjcmliZSgpO1xyXG4gICAgLyoqIG1pc3MgZGV0ZWN0IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEwODg3ICoqL1xyXG4gICAgaWYgKHRoaXMudmFsaWRhdGVDb250cm9sICYmIHRoaXMudmFsaWRhdGVDb250cm9sLnN0YXR1c0NoYW5nZXMpIHtcclxuICAgICAgdGhpcy52YWxpZGF0ZUNoYW5nZXMgPSB0aGlzLnZhbGlkYXRlQ29udHJvbC5zdGF0dXNDaGFuZ2VzLnBpcGUoKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0Q29udHJvbENsYXNzTWFwKCk7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVDb250cm9sU3RhdHVzKHN0YXR1czogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKCEhdGhpcy52YWxpZGF0ZUNvbnRyb2wgJiZcclxuICAgICAgKHRoaXMudmFsaWRhdGVDb250cm9sLmRpcnR5IHx8IHRoaXMudmFsaWRhdGVDb250cm9sLnRvdWNoZWQpICYmXHJcbiAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sLnN0YXR1cyA9PT0gc3RhdHVzKSBhcyBib29sZWFuO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29udHJvbENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmFsaWRhdGVTdHJpbmcgPT09ICd3YXJuaW5nJykge1xyXG4gICAgICB0aGlzLnN0YXR1cyA9ICd3YXJuaW5nJztcclxuICAgICAgdGhpcy5pY29uVHlwZSA9ICdleGNsYW1hdGlvbi1jaXJjbGUtZmlsbCc7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICB0aGlzLnZhbGlkYXRlU3RyaW5nID09PSAndmFsaWRhdGluZycgfHxcclxuICAgICAgdGhpcy52YWxpZGF0ZVN0cmluZyA9PT0gJ3BlbmRpbmcnIHx8XHJcbiAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sU3RhdHVzKCdQRU5ESU5HJylcclxuICAgICkge1xyXG4gICAgICB0aGlzLnN0YXR1cyA9ICd2YWxpZGF0aW5nJztcclxuICAgICAgdGhpcy5pY29uVHlwZSA9ICdsb2FkaW5nJztcclxuICAgIH0gZWxzZSBpZiAodGhpcy52YWxpZGF0ZVN0cmluZyA9PT0gJ2Vycm9yJyB8fCB0aGlzLnZhbGlkYXRlQ29udHJvbFN0YXR1cygnSU5WQUxJRCcpKSB7XHJcbiAgICAgIHRoaXMuc3RhdHVzID0gJ2Vycm9yJztcclxuICAgICAgdGhpcy5pY29uVHlwZSA9ICdjbG9zZS1jaXJjbGUtZmlsbCc7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFsaWRhdGVTdHJpbmcgPT09ICdzdWNjZXNzJyB8fCB0aGlzLnZhbGlkYXRlQ29udHJvbFN0YXR1cygnVkFMSUQnKSkge1xyXG4gICAgICB0aGlzLnN0YXR1cyA9ICdzdWNjZXNzJztcclxuICAgICAgdGhpcy5pY29uVHlwZSA9ICdjaGVjay1jaXJjbGUtZmlsbCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN0YXR1cyA9IG51bGw7XHJcbiAgICAgIHRoaXMuaWNvblR5cGUgPSAnJztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmhhc1RpcHMpIHtcclxuICAgICAgdGhpcy5uekZvcm1JdGVtQ29tcG9uZW50LnNldFdpdGhIZWxwVmlhVGlwcyh0aGlzLnNob3dFcnJvclRpcCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbnRyb2xDbGFzc01hcCA9IHtcclxuICAgICAgW2BoYXMtd2FybmluZ2BdOiB0aGlzLnN0YXR1cyA9PT0gJ3dhcm5pbmcnLFxyXG4gICAgICBbYGlzLXZhbGlkYXRpbmdgXTogdGhpcy5zdGF0dXMgPT09ICd2YWxpZGF0aW5nJyxcclxuICAgICAgW2BoYXMtZXJyb3JgXTogdGhpcy5zdGF0dXMgPT09ICdlcnJvcicsXHJcbiAgICAgIFtgaGFzLXN1Y2Nlc3NgXTogdGhpcy5zdGF0dXMgPT09ICdzdWNjZXNzJyxcclxuICAgICAgW2BoYXMtZmVlZGJhY2tgXTogdGhpcy5icHNIYXNGZWVkYmFjayAmJiB0aGlzLnN0YXR1c1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldCBoYXNUaXBzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhKHRoaXMuYnBzU3VjY2Vzc1RpcCB8fCB0aGlzLmJwc1dhcm5pbmdUaXAgfHwgdGhpcy5icHNFcnJvclRpcCB8fCB0aGlzLmJwc1ZhbGlkYXRpbmdUaXApO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3dTdWNjZXNzVGlwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnc3VjY2VzcycgJiYgISF0aGlzLmJwc1N1Y2Nlc3NUaXA7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd1dhcm5pbmdUaXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICd3YXJuaW5nJyAmJiAhIXRoaXMuYnBzV2FybmluZ1RpcDtcclxuICB9XHJcblxyXG4gIGdldCBzaG93RXJyb3JUaXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdlcnJvcicgJiYgISF0aGlzLmJwc0Vycm9yVGlwO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3dWYWxpZGF0aW5nVGlwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAndmFsaWRhdGluZycgJiYgISF0aGlzLmJwc1ZhbGlkYXRpbmdUaXA7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd0lubmVyVGlwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hvd1N1Y2Nlc3NUaXAgfHwgdGhpcy5zaG93V2FybmluZ1RpcCB8fCB0aGlzLnNob3dFcnJvclRpcCB8fCB0aGlzLnNob3dWYWxpZGF0aW5nVGlwO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIHByaXZhdGUgbnpGb3JtSXRlbUNvbXBvbmVudDogQnBzRm9ybUl0ZW1Db21wb25lbnQsXHJcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIG56Um93RGlyZWN0aXZlOiBOelJvd0RpcmVjdGl2ZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjJcclxuICApIHtcclxuICAgIHN1cGVyKG56VXBkYXRlSG9zdENsYXNzU2VydmljZSBhcyBhbnksIGVsZW1lbnRSZWYsIG56Rm9ybUl0ZW1Db21wb25lbnQgfHwgbnpSb3dEaXJlY3RpdmUsIHJlbmRlcmVyKTtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1mb3JtLWl0ZW0tY29udHJvbC13cmFwcGVyJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgICB0aGlzLnNldENvbnRyb2xDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbW92ZVN1YnNjcmliZSgpO1xyXG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy52YWxpZGF0ZUNvbnRyb2wgJiYgIXRoaXMudmFsaWRhdGVTdHJpbmcpIHtcclxuICAgICAgaWYgKHRoaXMuZGVmYXVsdFZhbGlkYXRlQ29udHJvbCBpbnN0YW5jZW9mIEZvcm1Db250cm9sRGlyZWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5icHNWYWxpZGF0ZVN0YXR1cyA9IHRoaXMuZGVmYXVsdFZhbGlkYXRlQ29udHJvbC5jb250cm9sO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYnBzVmFsaWRhdGVTdGF0dXMgPSB0aGlzLmRlZmF1bHRWYWxpZGF0ZUNvbnRyb2w7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sXCIgW25nQ2xhc3NdPVwiY29udHJvbENsYXNzTWFwXCI+XHJcbiAgPHNwYW4gY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNoaWxkcmVuXCI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8c3BhbiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY2hpbGRyZW4taWNvblwiPlxyXG4gICAgICA8aSAqbmdJZj1cImJwc0hhc0ZlZWRiYWNrICYmIGljb25UeXBlXCIgbnotaWNvbiBbbnpUeXBlXT1cImljb25UeXBlXCI+PC9pPlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvc3Bhbj5cclxuICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0tZXhwbGFpblwiICpuZ0lmPVwic2hvd1N1Y2Nlc3NUaXAgfHwgc2hvd1dhcm5pbmdUaXAgfHwgc2hvd0Vycm9yVGlwIHx8IHNob3dWYWxpZGF0aW5nVGlwXCI+XHJcbiAgICA8ZGl2IEBoZWxwTW90aW9uPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd1N1Y2Nlc3NUaXBcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiYnBzU3VjY2Vzc1RpcDtjb250ZXh0OnskaW1wbGljaXQ6dmFsaWRhdGVDb250cm9sfTtcIj57eyBicHNTdWNjZXNzVGlwIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd1dhcm5pbmdUaXBcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiYnBzV2FybmluZ1RpcDtjb250ZXh0OnskaW1wbGljaXQ6dmFsaWRhdGVDb250cm9sfTtcIj57eyBicHNXYXJuaW5nVGlwIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd0Vycm9yVGlwXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImJwc0Vycm9yVGlwO2NvbnRleHQ6eyRpbXBsaWNpdDp2YWxpZGF0ZUNvbnRyb2x9O1wiPnt7IGJwc0Vycm9yVGlwIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd1ZhbGlkYXRpbmdUaXBcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiYnBzVmFsaWRhdGluZ1RpcDtjb250ZXh0OnskaW1wbGljaXQ6dmFsaWRhdGVDb250cm9sfTtcIj57eyBicHNWYWxpZGF0aW5nVGlwIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhaGFzVGlwc1wiIHNlbGVjdD1cImJwcy1mb3JtLWV4cGxhaW5cIj48L25nLWNvbnRlbnQ+XHJcbiAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhYnBzRXh0cmFcIiBzZWxlY3Q9XCJicHMtZm9ybS1leHRyYVwiPjwvbmctY29udGVudD5cclxuICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0tZXh0cmFcIiAqbmdJZj1cImJwc0V4dHJhXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiYnBzRXh0cmFcIj57eyBicHNFeHRyYSB9fTwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19