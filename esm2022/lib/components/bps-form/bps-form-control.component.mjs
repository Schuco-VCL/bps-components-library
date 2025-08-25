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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsFormControlComponent, deps: [{ token: i1.NzUpdateHostClassService }, { token: i0.ElementRef }, { token: i2.BpsFormItemComponent, host: true, optional: true }, { token: i3.NzRowDirective, host: true, optional: true }, { token: i0.ChangeDetectorRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsFormControlComponent, selector: "bps-form-control", inputs: { bpsSuccessTip: "bpsSuccessTip", bpsWarningTip: "bpsWarningTip", bpsErrorTip: "bpsErrorTip", bpsValidatingTip: "bpsValidatingTip", bpsExtra: "bpsExtra", bpsHasFeedback: "bpsHasFeedback", bpsValidateStatus: "bpsValidateStatus" }, providers: [NzUpdateHostClassService], queries: [{ propertyName: "defaultValidateControl", first: true, predicate: NgControl, descendants: true }], exportAs: ["bpsFormControl"], usesInheritance: true, ngImport: i0, template: "<div class=\"ant-form-item-control\" [ngClass]=\"controlClassMap\">\r\n  <span class=\"ant-form-item-children\">\r\n    <ng-content></ng-content>\r\n    <span class=\"ant-form-item-children-icon\">\r\n      <i *ngIf=\"bpsHasFeedback && iconType\" nz-icon [nzType]=\"iconType\"></i>\r\n    </span>\r\n  </span>\r\n  <div class=\"ant-form-explain\" *ngIf=\"showSuccessTip || showWarningTip || showErrorTip || showValidatingTip\">\r\n    <div @helpMotion>\r\n      <ng-container *ngIf=\"showSuccessTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsSuccessTip;context:{$implicit:validateControl};\">{{ bpsSuccessTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showWarningTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsWarningTip;context:{$implicit:validateControl};\">{{ bpsWarningTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showErrorTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsErrorTip;context:{$implicit:validateControl};\">{{ bpsErrorTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showValidatingTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsValidatingTip;context:{$implicit:validateControl};\">{{ bpsValidatingTip }}</ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <ng-content *ngIf=\"!hasTips\" select=\"bps-form-explain\"></ng-content>\r\n  <ng-content *ngIf=\"!bpsExtra\" select=\"bps-form-extra\"></ng-content>\r\n  <div class=\"ant-form-extra\" *ngIf=\"bpsExtra\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsExtra\">{{ bpsExtra }}</ng-container>\r\n  </div>\r\n</div>\r\n", styles: ["bps-form-control{display:block}form .has-feedback .ant-input-suffix i{margin-right:18px}\n"], dependencies: [{ kind: "directive", type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i5.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: i6.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], animations: [helpMotion], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsFormControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-form-control', exportAs: 'bpsFormControl', preserveWhitespaces: false, animations: [helpMotion], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [NzUpdateHostClassService], template: "<div class=\"ant-form-item-control\" [ngClass]=\"controlClassMap\">\r\n  <span class=\"ant-form-item-children\">\r\n    <ng-content></ng-content>\r\n    <span class=\"ant-form-item-children-icon\">\r\n      <i *ngIf=\"bpsHasFeedback && iconType\" nz-icon [nzType]=\"iconType\"></i>\r\n    </span>\r\n  </span>\r\n  <div class=\"ant-form-explain\" *ngIf=\"showSuccessTip || showWarningTip || showErrorTip || showValidatingTip\">\r\n    <div @helpMotion>\r\n      <ng-container *ngIf=\"showSuccessTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsSuccessTip;context:{$implicit:validateControl};\">{{ bpsSuccessTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showWarningTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsWarningTip;context:{$implicit:validateControl};\">{{ bpsWarningTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showErrorTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsErrorTip;context:{$implicit:validateControl};\">{{ bpsErrorTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showValidatingTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsValidatingTip;context:{$implicit:validateControl};\">{{ bpsValidatingTip }}</ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <ng-content *ngIf=\"!hasTips\" select=\"bps-form-explain\"></ng-content>\r\n  <ng-content *ngIf=\"!bpsExtra\" select=\"bps-form-extra\"></ng-content>\r\n  <div class=\"ant-form-extra\" *ngIf=\"bpsExtra\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsExtra\">{{ bpsExtra }}</ng-container>\r\n  </div>\r\n</div>\r\n", styles: ["bps-form-control{display:block}form .has-feedback .ant-input-suffix i{margin-right:18px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NzUpdateHostClassService }, { type: i0.ElementRef }, { type: i2.BpsFormItemComponent, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }] }, { type: i3.NzRowDirective, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }] }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }]; }, propDecorators: { defaultValidateControl: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWZvcm0tY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1mb3JtL2Jwcy1mb3JtLWNvbnRyb2wuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtZm9ybS9icHMtZm9ybS1jb250cm9sLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFHTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFlBQVksRUFFWixJQUFJLEVBQ0osS0FBSyxFQUdMLFFBQVEsRUFHUixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0csT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUlwQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFdEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7QUF5QjlELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxjQUFjO0lBZ0J6RCxJQUNJLGNBQWMsQ0FBQyxLQUFjO1FBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLGNB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T0FBTyxDQUFDO2FBQzlEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUM7YUFDdEQ7U0FDRjtJQUNILENBQUM7SUFFRCxlQUFlO1FBQ2IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLENBQUM7K0dBM0pVLHVCQUF1QjttR0FBdkIsdUJBQXVCLHlSQWJ2QixDQUFDLHdCQUF3QixDQUFDLDhFQXNCdkIsU0FBUyxxR0M1RHpCLDJuREE2QkEsNnNCRE1jLENBQUMsVUFBVSxDQUFDOzs0RkFnQmIsdUJBQXVCO2tCQXBCbkMsU0FBUzsrQkFDRSxrQkFBa0IsWUFDbEIsZ0JBQWdCLHVCQUNMLEtBQUssY0FDZCxDQUFDLFVBQVUsQ0FBQyxpQkFDVCxpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNLGFBQ3BDLENBQUMsd0JBQXdCLENBQUM7OzBCQXlJbEMsUUFBUTs7MEJBQUksSUFBSTs7MEJBQ2hCLFFBQVE7OzBCQUFJLElBQUk7b0dBcEh5QixzQkFBc0I7c0JBQWpFLFlBQVk7dUJBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtnQkFDakMsYUFBYTtzQkFBckIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBR0YsY0FBYztzQkFEakIsS0FBSztnQkFXRixpQkFBaUI7c0JBRHBCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVbnR5cGVkRm9ybUNvbnRyb2wsIEZvcm1Db250cm9sRGlyZWN0aXZlLCBGb3JtQ29udHJvbE5hbWUsIE5nQ29udHJvbCwgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IEJwc0Zvcm1JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9icHMtZm9ybS1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGhlbHBNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmdDbGFzc1R5cGUgfSBmcm9tICcuLi9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBOekNvbERpcmVjdGl2ZSB9IGZyb20gJy4uL2Jwcy1ncmlkL256LWNvbC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOelJvd0RpcmVjdGl2ZSB9IGZyb20gJy4uL2Jwcy1ncmlkL256LXJvdy5kaXJlY3RpdmUnO1xyXG5cclxuZXhwb3J0IHR5cGUgTnpGb3JtQ29udHJvbFN0YXR1c1R5cGUgPSAnd2FybmluZycgfCAndmFsaWRhdGluZycgfCAnZXJyb3InIHwgJ3N1Y2Nlc3MnIHwgbnVsbDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnBzLWZvcm0tY29udHJvbCcsXHJcbiAgZXhwb3J0QXM6ICdicHNGb3JtQ29udHJvbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgYW5pbWF0aW9uczogW2hlbHBNb3Rpb25dLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnBzLWZvcm0tY29udHJvbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIGJwcy1mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcm0gLmhhcy1mZWVkYmFjayAuYW50LWlucHV0LXN1ZmZpeCBpIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNGb3JtQ29udHJvbENvbXBvbmVudCBleHRlbmRzIE56Q29sRGlyZWN0aXZlXHJcbiAgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIF9oYXNGZWVkYmFjayA9IGZhbHNlO1xyXG4gIHByaXZhdGUgdmFsaWRhdGVDaGFuZ2VzOiBTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcbiAgcHJpdmF0ZSB2YWxpZGF0ZVN0cmluZzogc3RyaW5nIHwgbnVsbDtcclxuICB2YWxpZGF0ZUNvbnRyb2w6IFVudHlwZWRGb3JtQ29udHJvbCB8IE5nTW9kZWwgfCBudWxsO1xyXG4gIHN0YXR1czogTnpGb3JtQ29udHJvbFN0YXR1c1R5cGUgPSBudWxsO1xyXG4gIGNvbnRyb2xDbGFzc01hcDogTmdDbGFzc1R5cGUgPSB7fTtcclxuICBpY29uVHlwZTogc3RyaW5nO1xyXG4gIEBDb250ZW50Q2hpbGQoTmdDb250cm9sLCB7IHN0YXRpYzogZmFsc2UgfSkgZGVmYXVsdFZhbGlkYXRlQ29udHJvbDogRm9ybUNvbnRyb2xOYW1lIHwgRm9ybUNvbnRyb2xEaXJlY3RpdmU7XHJcbiAgQElucHV0KCkgYnBzU3VjY2Vzc1RpcDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IFVudHlwZWRGb3JtQ29udHJvbCB8IE5nTW9kZWwgfT47XHJcbiAgQElucHV0KCkgYnBzV2FybmluZ1RpcDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IFVudHlwZWRGb3JtQ29udHJvbCB8IE5nTW9kZWwgfT47XHJcbiAgQElucHV0KCkgYnBzRXJyb3JUaXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBVbnR5cGVkRm9ybUNvbnRyb2wgfCBOZ01vZGVsIH0+O1xyXG4gIEBJbnB1dCgpIGJwc1ZhbGlkYXRpbmdUaXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBVbnR5cGVkRm9ybUNvbnRyb2wgfCBOZ01vZGVsIH0+O1xyXG4gIEBJbnB1dCgpIGJwc0V4dHJhOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYnBzSGFzRmVlZGJhY2sodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2hhc0ZlZWRiYWNrID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIHRoaXMuc2V0Q29udHJvbENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgYnBzSGFzRmVlZGJhY2soKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faGFzRmVlZGJhY2s7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBicHNWYWxpZGF0ZVN0YXR1cyh2YWx1ZTogc3RyaW5nIHwgVW50eXBlZEZvcm1Db250cm9sIHwgRm9ybUNvbnRyb2xOYW1lIHwgTmdNb2RlbCkge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVW50eXBlZEZvcm1Db250cm9sIHx8IHZhbHVlIGluc3RhbmNlb2YgTmdNb2RlbCkge1xyXG4gICAgICB0aGlzLnZhbGlkYXRlQ29udHJvbCA9IHZhbHVlO1xyXG4gICAgICB0aGlzLnZhbGlkYXRlU3RyaW5nID0gbnVsbDtcclxuICAgICAgdGhpcy53YXRjaENvbnRyb2woKTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBGb3JtQ29udHJvbE5hbWUpIHtcclxuICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2wgPSB2YWx1ZS5jb250cm9sO1xyXG4gICAgICB0aGlzLnZhbGlkYXRlU3RyaW5nID0gbnVsbDtcclxuICAgICAgdGhpcy53YXRjaENvbnRyb2woKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVTdHJpbmcgPSB2YWx1ZTtcclxuICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2wgPSBudWxsO1xyXG4gICAgICB0aGlzLnNldENvbnRyb2xDbGFzc01hcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU3Vic2NyaWJlKCk6IHZvaWQge1xyXG4gICAgdGhpcy52YWxpZGF0ZUNoYW5nZXMudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIHdhdGNoQ29udHJvbCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVtb3ZlU3Vic2NyaWJlKCk7XHJcbiAgICAvKiogbWlzcyBkZXRlY3QgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTA4ODcgKiovXHJcbiAgICBpZiAodGhpcy52YWxpZGF0ZUNvbnRyb2wgJiYgdGhpcy52YWxpZGF0ZUNvbnRyb2wuc3RhdHVzQ2hhbmdlcykge1xyXG4gICAgICB0aGlzLnZhbGlkYXRlQ2hhbmdlcyA9IHRoaXMudmFsaWRhdGVDb250cm9sLnN0YXR1c0NoYW5nZXMucGlwZSgpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRDb250cm9sQ2xhc3NNYXAoKTtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZUNvbnRyb2xTdGF0dXMoc3RhdHVzOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoISF0aGlzLnZhbGlkYXRlQ29udHJvbCAmJlxyXG4gICAgICAodGhpcy52YWxpZGF0ZUNvbnRyb2wuZGlydHkgfHwgdGhpcy52YWxpZGF0ZUNvbnRyb2wudG91Y2hlZCkgJiZcclxuICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2wuc3RhdHVzID09PSBzdGF0dXMpIGFzIGJvb2xlYW47XHJcbiAgfVxyXG5cclxuICBzZXRDb250cm9sQ2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52YWxpZGF0ZVN0cmluZyA9PT0gJ3dhcm5pbmcnKSB7XHJcbiAgICAgIHRoaXMuc3RhdHVzID0gJ3dhcm5pbmcnO1xyXG4gICAgICB0aGlzLmljb25UeXBlID0gJ2V4Y2xhbWF0aW9uLWNpcmNsZS1maWxsJztcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIHRoaXMudmFsaWRhdGVTdHJpbmcgPT09ICd2YWxpZGF0aW5nJyB8fFxyXG4gICAgICB0aGlzLnZhbGlkYXRlU3RyaW5nID09PSAncGVuZGluZycgfHxcclxuICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2xTdGF0dXMoJ1BFTkRJTkcnKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuc3RhdHVzID0gJ3ZhbGlkYXRpbmcnO1xyXG4gICAgICB0aGlzLmljb25UeXBlID0gJ2xvYWRpbmcnO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnZhbGlkYXRlU3RyaW5nID09PSAnZXJyb3InIHx8IHRoaXMudmFsaWRhdGVDb250cm9sU3RhdHVzKCdJTlZBTElEJykpIHtcclxuICAgICAgdGhpcy5zdGF0dXMgPSAnZXJyb3InO1xyXG4gICAgICB0aGlzLmljb25UeXBlID0gJ2Nsb3NlLWNpcmNsZS1maWxsJztcclxuICAgIH0gZWxzZSBpZiAodGhpcy52YWxpZGF0ZVN0cmluZyA9PT0gJ3N1Y2Nlc3MnIHx8IHRoaXMudmFsaWRhdGVDb250cm9sU3RhdHVzKCdWQUxJRCcpKSB7XHJcbiAgICAgIHRoaXMuc3RhdHVzID0gJ3N1Y2Nlc3MnO1xyXG4gICAgICB0aGlzLmljb25UeXBlID0gJ2NoZWNrLWNpcmNsZS1maWxsJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhdHVzID0gbnVsbDtcclxuICAgICAgdGhpcy5pY29uVHlwZSA9ICcnO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaGFzVGlwcykge1xyXG4gICAgICB0aGlzLm56Rm9ybUl0ZW1Db21wb25lbnQuc2V0V2l0aEhlbHBWaWFUaXBzKHRoaXMuc2hvd0Vycm9yVGlwKTtcclxuICAgIH1cclxuICAgIHRoaXMuY29udHJvbENsYXNzTWFwID0ge1xyXG4gICAgICBbYGhhcy13YXJuaW5nYF06IHRoaXMuc3RhdHVzID09PSAnd2FybmluZycsXHJcbiAgICAgIFtgaXMtdmFsaWRhdGluZ2BdOiB0aGlzLnN0YXR1cyA9PT0gJ3ZhbGlkYXRpbmcnLFxyXG4gICAgICBbYGhhcy1lcnJvcmBdOiB0aGlzLnN0YXR1cyA9PT0gJ2Vycm9yJyxcclxuICAgICAgW2BoYXMtc3VjY2Vzc2BdOiB0aGlzLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnLFxyXG4gICAgICBbYGhhcy1mZWVkYmFja2BdOiB0aGlzLmJwc0hhc0ZlZWRiYWNrICYmIHRoaXMuc3RhdHVzXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhhc1RpcHMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISEodGhpcy5icHNTdWNjZXNzVGlwIHx8IHRoaXMuYnBzV2FybmluZ1RpcCB8fCB0aGlzLmJwc0Vycm9yVGlwIHx8IHRoaXMuYnBzVmFsaWRhdGluZ1RpcCk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd1N1Y2Nlc3NUaXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdzdWNjZXNzJyAmJiAhIXRoaXMuYnBzU3VjY2Vzc1RpcDtcclxuICB9XHJcblxyXG4gIGdldCBzaG93V2FybmluZ1RpcCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gJ3dhcm5pbmcnICYmICEhdGhpcy5icHNXYXJuaW5nVGlwO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3dFcnJvclRpcCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gJ2Vycm9yJyAmJiAhIXRoaXMuYnBzRXJyb3JUaXA7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd1ZhbGlkYXRpbmdUaXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICd2YWxpZGF0aW5nJyAmJiAhIXRoaXMuYnBzVmFsaWRhdGluZ1RpcDtcclxuICB9XHJcblxyXG4gIGdldCBzaG93SW5uZXJUaXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaG93U3VjY2Vzc1RpcCB8fCB0aGlzLnNob3dXYXJuaW5nVGlwIHx8IHRoaXMuc2hvd0Vycm9yVGlwIHx8IHRoaXMuc2hvd1ZhbGlkYXRpbmdUaXA7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHJpdmF0ZSBuekZvcm1JdGVtQ29tcG9uZW50OiBCcHNGb3JtSXRlbUNvbXBvbmVudCxcclxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgbnpSb3dEaXJlY3RpdmU6IE56Um93RGlyZWN0aXZlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMlxyXG4gICkge1xyXG4gICAgc3VwZXIobnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIGFzIGFueSwgZWxlbWVudFJlZiwgbnpGb3JtSXRlbUNvbXBvbmVudCB8fCBuelJvd0RpcmVjdGl2ZSwgcmVuZGVyZXIpO1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWZvcm0taXRlbS1jb250cm9sLXdyYXBwZXInKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkluaXQoKTtcclxuICAgIHRoaXMuc2V0Q29udHJvbENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVtb3ZlU3Vic2NyaWJlKCk7XHJcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnZhbGlkYXRlQ29udHJvbCAmJiAhdGhpcy52YWxpZGF0ZVN0cmluZykge1xyXG4gICAgICBpZiAodGhpcy5kZWZhdWx0VmFsaWRhdGVDb250cm9sIGluc3RhbmNlb2YgRm9ybUNvbnRyb2xEaXJlY3RpdmUpIHtcclxuICAgICAgICB0aGlzLmJwc1ZhbGlkYXRlU3RhdHVzID0gdGhpcy5kZWZhdWx0VmFsaWRhdGVDb250cm9sLmNvbnRyb2w7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5icHNWYWxpZGF0ZVN0YXR1cyA9IHRoaXMuZGVmYXVsdFZhbGlkYXRlQ29udHJvbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdBZnRlclZpZXdJbml0KCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNvbnRyb2xcIiBbbmdDbGFzc109XCJjb250cm9sQ2xhc3NNYXBcIj5cclxuICA8c3BhbiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY2hpbGRyZW5cIj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDxzcGFuIGNsYXNzPVwiYW50LWZvcm0taXRlbS1jaGlsZHJlbi1pY29uXCI+XHJcbiAgICAgIDxpICpuZ0lmPVwiYnBzSGFzRmVlZGJhY2sgJiYgaWNvblR5cGVcIiBuei1pY29uIFtuelR5cGVdPVwiaWNvblR5cGVcIj48L2k+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9zcGFuPlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtZm9ybS1leHBsYWluXCIgKm5nSWY9XCJzaG93U3VjY2Vzc1RpcCB8fCBzaG93V2FybmluZ1RpcCB8fCBzaG93RXJyb3JUaXAgfHwgc2hvd1ZhbGlkYXRpbmdUaXBcIj5cclxuICAgIDxkaXYgQGhlbHBNb3Rpb24+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93U3VjY2Vzc1RpcFwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJicHNTdWNjZXNzVGlwO2NvbnRleHQ6eyRpbXBsaWNpdDp2YWxpZGF0ZUNvbnRyb2x9O1wiPnt7IGJwc1N1Y2Nlc3NUaXAgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93V2FybmluZ1RpcFwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJicHNXYXJuaW5nVGlwO2NvbnRleHQ6eyRpbXBsaWNpdDp2YWxpZGF0ZUNvbnRyb2x9O1wiPnt7IGJwc1dhcm5pbmdUaXAgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93RXJyb3JUaXBcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiYnBzRXJyb3JUaXA7Y29udGV4dDp7JGltcGxpY2l0OnZhbGlkYXRlQ29udHJvbH07XCI+e3sgYnBzRXJyb3JUaXAgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93VmFsaWRhdGluZ1RpcFwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJicHNWYWxpZGF0aW5nVGlwO2NvbnRleHQ6eyRpbXBsaWNpdDp2YWxpZGF0ZUNvbnRyb2x9O1wiPnt7IGJwc1ZhbGlkYXRpbmdUaXAgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8bmctY29udGVudCAqbmdJZj1cIiFoYXNUaXBzXCIgc2VsZWN0PVwiYnBzLWZvcm0tZXhwbGFpblwiPjwvbmctY29udGVudD5cclxuICA8bmctY29udGVudCAqbmdJZj1cIiFicHNFeHRyYVwiIHNlbGVjdD1cImJwcy1mb3JtLWV4dHJhXCI+PC9uZy1jb250ZW50PlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtZm9ybS1leHRyYVwiICpuZ0lmPVwiYnBzRXh0cmFcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJicHNFeHRyYVwiPnt7IGJwc0V4dHJhIH19PC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=