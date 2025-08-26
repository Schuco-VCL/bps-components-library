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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsFormControlComponent, deps: [{ token: i1.NzUpdateHostClassService }, { token: i0.ElementRef }, { token: i2.BpsFormItemComponent, host: true, optional: true }, { token: i3.NzRowDirective, host: true, optional: true }, { token: i0.ChangeDetectorRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BpsFormControlComponent, selector: "bps-form-control", inputs: { bpsSuccessTip: "bpsSuccessTip", bpsWarningTip: "bpsWarningTip", bpsErrorTip: "bpsErrorTip", bpsValidatingTip: "bpsValidatingTip", bpsExtra: "bpsExtra", bpsHasFeedback: "bpsHasFeedback", bpsValidateStatus: "bpsValidateStatus" }, providers: [NzUpdateHostClassService], queries: [{ propertyName: "defaultValidateControl", first: true, predicate: NgControl, descendants: true }], exportAs: ["bpsFormControl"], usesInheritance: true, ngImport: i0, template: "<div class=\"ant-form-item-control\" [ngClass]=\"controlClassMap\">\r\n  <span class=\"ant-form-item-children\">\r\n    <ng-content></ng-content>\r\n    <span class=\"ant-form-item-children-icon\">\r\n      <i *ngIf=\"bpsHasFeedback && iconType\" nz-icon [nzType]=\"iconType\"></i>\r\n    </span>\r\n  </span>\r\n  <div class=\"ant-form-explain\" *ngIf=\"showSuccessTip || showWarningTip || showErrorTip || showValidatingTip\">\r\n    <div @helpMotion>\r\n      <ng-container *ngIf=\"showSuccessTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsSuccessTip;context:{$implicit:validateControl};\">{{ bpsSuccessTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showWarningTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsWarningTip;context:{$implicit:validateControl};\">{{ bpsWarningTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showErrorTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsErrorTip;context:{$implicit:validateControl};\">{{ bpsErrorTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showValidatingTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsValidatingTip;context:{$implicit:validateControl};\">{{ bpsValidatingTip }}</ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <ng-content *ngIf=\"!hasTips\" select=\"bps-form-explain\"></ng-content>\r\n  <ng-content *ngIf=\"!bpsExtra\" select=\"bps-form-extra\"></ng-content>\r\n  <div class=\"ant-form-extra\" *ngIf=\"bpsExtra\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsExtra\">{{ bpsExtra }}</ng-container>\r\n  </div>\r\n</div>\r\n", styles: ["bps-form-control{display:block}form .has-feedback .ant-input-suffix i{margin-right:18px}\n"], dependencies: [{ kind: "directive", type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i5.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: i6.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], animations: [helpMotion], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsFormControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-form-control', exportAs: 'bpsFormControl', preserveWhitespaces: false, animations: [helpMotion], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [NzUpdateHostClassService], template: "<div class=\"ant-form-item-control\" [ngClass]=\"controlClassMap\">\r\n  <span class=\"ant-form-item-children\">\r\n    <ng-content></ng-content>\r\n    <span class=\"ant-form-item-children-icon\">\r\n      <i *ngIf=\"bpsHasFeedback && iconType\" nz-icon [nzType]=\"iconType\"></i>\r\n    </span>\r\n  </span>\r\n  <div class=\"ant-form-explain\" *ngIf=\"showSuccessTip || showWarningTip || showErrorTip || showValidatingTip\">\r\n    <div @helpMotion>\r\n      <ng-container *ngIf=\"showSuccessTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsSuccessTip;context:{$implicit:validateControl};\">{{ bpsSuccessTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showWarningTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsWarningTip;context:{$implicit:validateControl};\">{{ bpsWarningTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showErrorTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsErrorTip;context:{$implicit:validateControl};\">{{ bpsErrorTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showValidatingTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsValidatingTip;context:{$implicit:validateControl};\">{{ bpsValidatingTip }}</ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <ng-content *ngIf=\"!hasTips\" select=\"bps-form-explain\"></ng-content>\r\n  <ng-content *ngIf=\"!bpsExtra\" select=\"bps-form-extra\"></ng-content>\r\n  <div class=\"ant-form-extra\" *ngIf=\"bpsExtra\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsExtra\">{{ bpsExtra }}</ng-container>\r\n  </div>\r\n</div>\r\n", styles: ["bps-form-control{display:block}form .has-feedback .ant-input-suffix i{margin-right:18px}\n"] }]
        }], ctorParameters: () => [{ type: i1.NzUpdateHostClassService }, { type: i0.ElementRef }, { type: i2.BpsFormItemComponent, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }] }, { type: i3.NzRowDirective, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }] }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }], propDecorators: { defaultValidateControl: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWZvcm0tY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1mb3JtL2Jwcy1mb3JtLWNvbnRyb2wuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtZm9ybS9icHMtZm9ybS1jb250cm9sLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFHTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFlBQVksRUFFWixJQUFJLEVBQ0osS0FBSyxFQUdMLFFBQVEsRUFHUixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0csT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUlwQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFdEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7QUF5QjlELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxjQUFjO0lBZ0J6RCxJQUNJLGNBQWMsQ0FBQyxLQUFjO1FBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUNJLGlCQUFpQixDQUFDLEtBQThEO1FBQ2xGLElBQUksS0FBSyxZQUFZLGtCQUFrQixJQUFJLEtBQUssWUFBWSxPQUFPLEVBQUUsQ0FBQztZQUNwRSxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEIsQ0FBQzthQUFNLElBQUksS0FBSyxZQUFZLGVBQWUsRUFBRSxDQUFDO1lBQzVDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEIsQ0FBQzthQUFNLENBQUM7WUFDTixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM1QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM1QixDQUFDO0lBQ0gsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLG1FQUFtRTtRQUNuRSxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUMvRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQzlFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxNQUFjO1FBQ2xDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWU7WUFDNUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQztZQUM1RCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQVksQ0FBQztJQUN2RCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztZQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLHlCQUF5QixDQUFDO1FBQzVDLENBQUM7YUFBTSxJQUNMLElBQUksQ0FBQyxjQUFjLEtBQUssWUFBWTtZQUNwQyxJQUFJLENBQUMsY0FBYyxLQUFLLFNBQVM7WUFDakMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxFQUNyQyxDQUFDO1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDNUIsQ0FBQzthQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxPQUFPLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDcEYsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQztRQUN0QyxDQUFDO2FBQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNwRixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztZQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLG1CQUFtQixDQUFDO1FBQ3RDLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDckIsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakUsQ0FBQztRQUNELElBQUksQ0FBQyxlQUFlLEdBQUc7WUFDckIsQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVM7WUFDMUMsQ0FBQyxlQUFlLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxLQUFLLFlBQVk7WUFDL0MsQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU87WUFDdEMsQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVM7WUFDMUMsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxNQUFNO1NBQ3JELENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0QsQ0FBQztJQUVELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNELENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxJQUFJLGlCQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssWUFBWSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDakUsQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ25HLENBQUM7SUFFRCxZQUNFLHdCQUFrRCxFQUNsRCxVQUFzQixFQUNNLG1CQUF5QyxFQUNqRCxjQUE4QixFQUMxQyxHQUFzQixFQUM5QixRQUFtQjtRQUVuQixLQUFLLENBQUMsd0JBQStCLEVBQUUsVUFBVSxFQUFFLG1CQUFtQixJQUFJLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUx4RSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXNCO1FBRTdELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBNUh4QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixvQkFBZSxHQUFpQixZQUFZLENBQUMsS0FBSyxDQUFDO1FBRzNELFdBQU0sR0FBNEIsSUFBSSxDQUFDO1FBQ3ZDLG9CQUFlLEdBQWdCLEVBQUUsQ0FBQztRQTJIaEMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLCtCQUErQixDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELFFBQVE7UUFDTixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbEQsSUFBSSxJQUFJLENBQUMsc0JBQXNCLFlBQVksb0JBQW9CLEVBQUUsQ0FBQztnQkFDaEUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUM7WUFDL0QsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUM7WUFDdkQsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsZUFBZTtRQUNiLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMxQixDQUFDOytHQTNKVSx1QkFBdUI7bUdBQXZCLHVCQUF1Qix5UkFidkIsQ0FBQyx3QkFBd0IsQ0FBQyw4RUFzQnZCLFNBQVMscUdDNUR6QiwybkRBNkJBLDZzQkRNYyxDQUFDLFVBQVUsQ0FBQzs7NEZBZ0JiLHVCQUF1QjtrQkFwQm5DLFNBQVM7K0JBQ0Usa0JBQWtCLFlBQ2xCLGdCQUFnQix1QkFDTCxLQUFLLGNBQ2QsQ0FBQyxVQUFVLENBQUMsaUJBQ1QsaUJBQWlCLENBQUMsSUFBSSxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTSxhQUNwQyxDQUFDLHdCQUF3QixDQUFDOzswQkF5SWxDLFFBQVE7OzBCQUFJLElBQUk7OzBCQUNoQixRQUFROzswQkFBSSxJQUFJO2lHQXBIeUIsc0JBQXNCO3NCQUFqRSxZQUFZO3VCQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0JBQ2pDLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUdGLGNBQWM7c0JBRGpCLEtBQUs7Z0JBV0YsaUJBQWlCO3NCQURwQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVW50eXBlZEZvcm1Db250cm9sLCBGb3JtQ29udHJvbERpcmVjdGl2ZSwgRm9ybUNvbnRyb2xOYW1lLCBOZ0NvbnRyb2wsIE5nTW9kZWwgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBCcHNGb3JtSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vYnBzLWZvcm0taXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBoZWxwTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XHJcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XHJcbmltcG9ydCB7IE5nQ2xhc3NUeXBlIH0gZnJvbSAnLi4vY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgTnpDb2xEaXJlY3RpdmUgfSBmcm9tICcuLi9icHMtZ3JpZC9uei1jb2wuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTnpSb3dEaXJlY3RpdmUgfSBmcm9tICcuLi9icHMtZ3JpZC9uei1yb3cuZGlyZWN0aXZlJztcclxuXHJcbmV4cG9ydCB0eXBlIE56Rm9ybUNvbnRyb2xTdGF0dXNUeXBlID0gJ3dhcm5pbmcnIHwgJ3ZhbGlkYXRpbmcnIHwgJ2Vycm9yJyB8ICdzdWNjZXNzJyB8IG51bGw7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jwcy1mb3JtLWNvbnRyb2wnLFxyXG4gIGV4cG9ydEFzOiAnYnBzRm9ybUNvbnRyb2wnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGFuaW1hdGlvbnM6IFtoZWxwTW90aW9uXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy1mb3JtLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBicHMtZm9ybS1jb250cm9sIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgICBmb3JtIC5oYXMtZmVlZGJhY2sgLmFudC1pbnB1dC1zdWZmaXggaSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzRm9ybUNvbnRyb2xDb21wb25lbnQgZXh0ZW5kcyBOekNvbERpcmVjdGl2ZVxyXG4gIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBfaGFzRmVlZGJhY2sgPSBmYWxzZTtcclxuICBwcml2YXRlIHZhbGlkYXRlQ2hhbmdlczogU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gIHByaXZhdGUgdmFsaWRhdGVTdHJpbmc6IHN0cmluZyB8IG51bGw7XHJcbiAgdmFsaWRhdGVDb250cm9sOiBVbnR5cGVkRm9ybUNvbnRyb2wgfCBOZ01vZGVsIHwgbnVsbDtcclxuICBzdGF0dXM6IE56Rm9ybUNvbnRyb2xTdGF0dXNUeXBlID0gbnVsbDtcclxuICBjb250cm9sQ2xhc3NNYXA6IE5nQ2xhc3NUeXBlID0ge307XHJcbiAgaWNvblR5cGU6IHN0cmluZztcclxuICBAQ29udGVudENoaWxkKE5nQ29udHJvbCwgeyBzdGF0aWM6IGZhbHNlIH0pIGRlZmF1bHRWYWxpZGF0ZUNvbnRyb2w6IEZvcm1Db250cm9sTmFtZSB8IEZvcm1Db250cm9sRGlyZWN0aXZlO1xyXG4gIEBJbnB1dCgpIGJwc1N1Y2Nlc3NUaXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBVbnR5cGVkRm9ybUNvbnRyb2wgfCBOZ01vZGVsIH0+O1xyXG4gIEBJbnB1dCgpIGJwc1dhcm5pbmdUaXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBVbnR5cGVkRm9ybUNvbnRyb2wgfCBOZ01vZGVsIH0+O1xyXG4gIEBJbnB1dCgpIGJwc0Vycm9yVGlwOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogVW50eXBlZEZvcm1Db250cm9sIHwgTmdNb2RlbCB9PjtcclxuICBASW5wdXQoKSBicHNWYWxpZGF0aW5nVGlwOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogVW50eXBlZEZvcm1Db250cm9sIHwgTmdNb2RlbCB9PjtcclxuICBASW5wdXQoKSBicHNFeHRyYTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGJwc0hhc0ZlZWRiYWNrKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9oYXNGZWVkYmFjayA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgICB0aGlzLnNldENvbnRyb2xDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGJwc0hhc0ZlZWRiYWNrKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hhc0ZlZWRiYWNrO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYnBzVmFsaWRhdGVTdGF0dXModmFsdWU6IHN0cmluZyB8IFVudHlwZWRGb3JtQ29udHJvbCB8IEZvcm1Db250cm9sTmFtZSB8IE5nTW9kZWwpIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFVudHlwZWRGb3JtQ29udHJvbCB8fCB2YWx1ZSBpbnN0YW5jZW9mIE5nTW9kZWwpIHtcclxuICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2wgPSB2YWx1ZTtcclxuICAgICAgdGhpcy52YWxpZGF0ZVN0cmluZyA9IG51bGw7XHJcbiAgICAgIHRoaXMud2F0Y2hDb250cm9sKCk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgRm9ybUNvbnRyb2xOYW1lKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sID0gdmFsdWUuY29udHJvbDtcclxuICAgICAgdGhpcy52YWxpZGF0ZVN0cmluZyA9IG51bGw7XHJcbiAgICAgIHRoaXMud2F0Y2hDb250cm9sKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbGlkYXRlU3RyaW5nID0gdmFsdWU7XHJcbiAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sID0gbnVsbDtcclxuICAgICAgdGhpcy5zZXRDb250cm9sQ2xhc3NNYXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZVN1YnNjcmliZSgpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsaWRhdGVDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICB3YXRjaENvbnRyb2woKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbW92ZVN1YnNjcmliZSgpO1xyXG4gICAgLyoqIG1pc3MgZGV0ZWN0IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEwODg3ICoqL1xyXG4gICAgaWYgKHRoaXMudmFsaWRhdGVDb250cm9sICYmIHRoaXMudmFsaWRhdGVDb250cm9sLnN0YXR1c0NoYW5nZXMpIHtcclxuICAgICAgdGhpcy52YWxpZGF0ZUNoYW5nZXMgPSB0aGlzLnZhbGlkYXRlQ29udHJvbC5zdGF0dXNDaGFuZ2VzLnBpcGUoKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0Q29udHJvbENsYXNzTWFwKCk7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVDb250cm9sU3RhdHVzKHN0YXR1czogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKCEhdGhpcy52YWxpZGF0ZUNvbnRyb2wgJiZcclxuICAgICAgKHRoaXMudmFsaWRhdGVDb250cm9sLmRpcnR5IHx8IHRoaXMudmFsaWRhdGVDb250cm9sLnRvdWNoZWQpICYmXHJcbiAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sLnN0YXR1cyA9PT0gc3RhdHVzKSBhcyBib29sZWFuO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29udHJvbENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmFsaWRhdGVTdHJpbmcgPT09ICd3YXJuaW5nJykge1xyXG4gICAgICB0aGlzLnN0YXR1cyA9ICd3YXJuaW5nJztcclxuICAgICAgdGhpcy5pY29uVHlwZSA9ICdleGNsYW1hdGlvbi1jaXJjbGUtZmlsbCc7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICB0aGlzLnZhbGlkYXRlU3RyaW5nID09PSAndmFsaWRhdGluZycgfHxcclxuICAgICAgdGhpcy52YWxpZGF0ZVN0cmluZyA9PT0gJ3BlbmRpbmcnIHx8XHJcbiAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sU3RhdHVzKCdQRU5ESU5HJylcclxuICAgICkge1xyXG4gICAgICB0aGlzLnN0YXR1cyA9ICd2YWxpZGF0aW5nJztcclxuICAgICAgdGhpcy5pY29uVHlwZSA9ICdsb2FkaW5nJztcclxuICAgIH0gZWxzZSBpZiAodGhpcy52YWxpZGF0ZVN0cmluZyA9PT0gJ2Vycm9yJyB8fCB0aGlzLnZhbGlkYXRlQ29udHJvbFN0YXR1cygnSU5WQUxJRCcpKSB7XHJcbiAgICAgIHRoaXMuc3RhdHVzID0gJ2Vycm9yJztcclxuICAgICAgdGhpcy5pY29uVHlwZSA9ICdjbG9zZS1jaXJjbGUtZmlsbCc7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFsaWRhdGVTdHJpbmcgPT09ICdzdWNjZXNzJyB8fCB0aGlzLnZhbGlkYXRlQ29udHJvbFN0YXR1cygnVkFMSUQnKSkge1xyXG4gICAgICB0aGlzLnN0YXR1cyA9ICdzdWNjZXNzJztcclxuICAgICAgdGhpcy5pY29uVHlwZSA9ICdjaGVjay1jaXJjbGUtZmlsbCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN0YXR1cyA9IG51bGw7XHJcbiAgICAgIHRoaXMuaWNvblR5cGUgPSAnJztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmhhc1RpcHMpIHtcclxuICAgICAgdGhpcy5uekZvcm1JdGVtQ29tcG9uZW50LnNldFdpdGhIZWxwVmlhVGlwcyh0aGlzLnNob3dFcnJvclRpcCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbnRyb2xDbGFzc01hcCA9IHtcclxuICAgICAgW2BoYXMtd2FybmluZ2BdOiB0aGlzLnN0YXR1cyA9PT0gJ3dhcm5pbmcnLFxyXG4gICAgICBbYGlzLXZhbGlkYXRpbmdgXTogdGhpcy5zdGF0dXMgPT09ICd2YWxpZGF0aW5nJyxcclxuICAgICAgW2BoYXMtZXJyb3JgXTogdGhpcy5zdGF0dXMgPT09ICdlcnJvcicsXHJcbiAgICAgIFtgaGFzLXN1Y2Nlc3NgXTogdGhpcy5zdGF0dXMgPT09ICdzdWNjZXNzJyxcclxuICAgICAgW2BoYXMtZmVlZGJhY2tgXTogdGhpcy5icHNIYXNGZWVkYmFjayAmJiB0aGlzLnN0YXR1c1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldCBoYXNUaXBzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhKHRoaXMuYnBzU3VjY2Vzc1RpcCB8fCB0aGlzLmJwc1dhcm5pbmdUaXAgfHwgdGhpcy5icHNFcnJvclRpcCB8fCB0aGlzLmJwc1ZhbGlkYXRpbmdUaXApO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3dTdWNjZXNzVGlwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAnc3VjY2VzcycgJiYgISF0aGlzLmJwc1N1Y2Nlc3NUaXA7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd1dhcm5pbmdUaXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICd3YXJuaW5nJyAmJiAhIXRoaXMuYnBzV2FybmluZ1RpcDtcclxuICB9XHJcblxyXG4gIGdldCBzaG93RXJyb3JUaXAoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09ICdlcnJvcicgJiYgISF0aGlzLmJwc0Vycm9yVGlwO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNob3dWYWxpZGF0aW5nVGlwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSAndmFsaWRhdGluZycgJiYgISF0aGlzLmJwc1ZhbGlkYXRpbmdUaXA7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hvd0lubmVyVGlwKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hvd1N1Y2Nlc3NUaXAgfHwgdGhpcy5zaG93V2FybmluZ1RpcCB8fCB0aGlzLnNob3dFcnJvclRpcCB8fCB0aGlzLnNob3dWYWxpZGF0aW5nVGlwO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIHByaXZhdGUgbnpGb3JtSXRlbUNvbXBvbmVudDogQnBzRm9ybUl0ZW1Db21wb25lbnQsXHJcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIG56Um93RGlyZWN0aXZlOiBOelJvd0RpcmVjdGl2ZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjJcclxuICApIHtcclxuICAgIHN1cGVyKG56VXBkYXRlSG9zdENsYXNzU2VydmljZSBhcyBhbnksIGVsZW1lbnRSZWYsIG56Rm9ybUl0ZW1Db21wb25lbnQgfHwgbnpSb3dEaXJlY3RpdmUsIHJlbmRlcmVyKTtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1mb3JtLWl0ZW0tY29udHJvbC13cmFwcGVyJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgICB0aGlzLnNldENvbnRyb2xDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbW92ZVN1YnNjcmliZSgpO1xyXG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy52YWxpZGF0ZUNvbnRyb2wgJiYgIXRoaXMudmFsaWRhdGVTdHJpbmcpIHtcclxuICAgICAgaWYgKHRoaXMuZGVmYXVsdFZhbGlkYXRlQ29udHJvbCBpbnN0YW5jZW9mIEZvcm1Db250cm9sRGlyZWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5icHNWYWxpZGF0ZVN0YXR1cyA9IHRoaXMuZGVmYXVsdFZhbGlkYXRlQ29udHJvbC5jb250cm9sO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYnBzVmFsaWRhdGVTdGF0dXMgPSB0aGlzLmRlZmF1bHRWYWxpZGF0ZUNvbnRyb2w7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYW50LWZvcm0taXRlbS1jb250cm9sXCIgW25nQ2xhc3NdPVwiY29udHJvbENsYXNzTWFwXCI+XHJcbiAgPHNwYW4gY2xhc3M9XCJhbnQtZm9ybS1pdGVtLWNoaWxkcmVuXCI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8c3BhbiBjbGFzcz1cImFudC1mb3JtLWl0ZW0tY2hpbGRyZW4taWNvblwiPlxyXG4gICAgICA8aSAqbmdJZj1cImJwc0hhc0ZlZWRiYWNrICYmIGljb25UeXBlXCIgbnotaWNvbiBbbnpUeXBlXT1cImljb25UeXBlXCI+PC9pPlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvc3Bhbj5cclxuICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0tZXhwbGFpblwiICpuZ0lmPVwic2hvd1N1Y2Nlc3NUaXAgfHwgc2hvd1dhcm5pbmdUaXAgfHwgc2hvd0Vycm9yVGlwIHx8IHNob3dWYWxpZGF0aW5nVGlwXCI+XHJcbiAgICA8ZGl2IEBoZWxwTW90aW9uPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd1N1Y2Nlc3NUaXBcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiYnBzU3VjY2Vzc1RpcDtjb250ZXh0OnskaW1wbGljaXQ6dmFsaWRhdGVDb250cm9sfTtcIj57eyBicHNTdWNjZXNzVGlwIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd1dhcm5pbmdUaXBcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiYnBzV2FybmluZ1RpcDtjb250ZXh0OnskaW1wbGljaXQ6dmFsaWRhdGVDb250cm9sfTtcIj57eyBicHNXYXJuaW5nVGlwIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd0Vycm9yVGlwXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImJwc0Vycm9yVGlwO2NvbnRleHQ6eyRpbXBsaWNpdDp2YWxpZGF0ZUNvbnRyb2x9O1wiPnt7IGJwc0Vycm9yVGlwIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd1ZhbGlkYXRpbmdUaXBcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiYnBzVmFsaWRhdGluZ1RpcDtjb250ZXh0OnskaW1wbGljaXQ6dmFsaWRhdGVDb250cm9sfTtcIj57eyBicHNWYWxpZGF0aW5nVGlwIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhaGFzVGlwc1wiIHNlbGVjdD1cImJwcy1mb3JtLWV4cGxhaW5cIj48L25nLWNvbnRlbnQ+XHJcbiAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhYnBzRXh0cmFcIiBzZWxlY3Q9XCJicHMtZm9ybS1leHRyYVwiPjwvbmctY29udGVudD5cclxuICA8ZGl2IGNsYXNzPVwiYW50LWZvcm0tZXh0cmFcIiAqbmdJZj1cImJwc0V4dHJhXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiYnBzRXh0cmFcIj57eyBicHNFeHRyYSB9fTwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19