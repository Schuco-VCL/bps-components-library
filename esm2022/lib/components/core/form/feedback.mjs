import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/icon";
function BpsFormItemFeedbackIconComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 1);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzType", ctx_r0.iconType);
} }
const iconTypeMap = {
    error: 'close-circle-fill',
    validating: 'loading',
    success: 'check-circle-fill',
    warning: 'exclamation-circle-fill'
};
export class BpsFormItemFeedbackIconComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.status = '';
        this.iconType = null;
    }
    ngOnChanges(_changes) {
        this.updateIcon();
    }
    updateIcon() {
        this.iconType = this.status ? iconTypeMap[this.status] : null;
        this.cdr.markForCheck();
    }
    static { this.ɵfac = function BpsFormItemFeedbackIconComponent_Factory(t) { return new (t || BpsFormItemFeedbackIconComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsFormItemFeedbackIconComponent, selectors: [["bps-form-item-feedback-icon"]], hostAttrs: [1, "ant-form-item-feedback-icon"], hostVars: 8, hostBindings: function BpsFormItemFeedbackIconComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-form-item-feedback-icon-error", ctx.status === "error")("ant-form-item-feedback-icon-warning", ctx.status === "warning")("ant-form-item-feedback-icon-success", ctx.status === "success")("ant-form-item-feedback-icon-validating", ctx.status === "validating");
        } }, inputs: { status: "status" }, exportAs: ["bpsFormFeedbackIcon"], features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"]], template: function BpsFormItemFeedbackIconComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BpsFormItemFeedbackIconComponent_span_0_Template, 1, 1, "span", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.iconType);
        } }, dependencies: [i1.NgIf, i2.NzIconDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsFormItemFeedbackIconComponent, [{
        type: Component,
        args: [{
                selector: 'bps-form-item-feedback-icon',
                exportAs: 'bpsFormFeedbackIcon',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <span *ngIf="iconType" nz-icon [nzType]="iconType"></span> `,
                host: {
                    class: 'ant-form-item-feedback-icon',
                    '[class.ant-form-item-feedback-icon-error]': 'status==="error"',
                    '[class.ant-form-item-feedback-icon-warning]': 'status==="warning"',
                    '[class.ant-form-item-feedback-icon-success]': 'status==="success"',
                    '[class.ant-form-item-feedback-icon-validating]': 'status==="validating"'
                }
            }]
    }], () => [{ type: i0.ChangeDetectorRef }], { status: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsFormItemFeedbackIconComponent, { className: "BpsFormItemFeedbackIconComponent", filePath: "lib\\components\\core\\form\\feedback.ts", lineNumber: 35 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NvcmUvZm9ybS9mZWVkYmFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxLQUFLLEVBR0wsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDOzs7OztJQWlCVCwwQkFBMEQ7OztJQUEzQix3Q0FBbUI7O0FBYmhFLE1BQU0sV0FBVyxHQUFHO0lBQ2xCLEtBQUssRUFBRSxtQkFBbUI7SUFDMUIsVUFBVSxFQUFFLFNBQVM7SUFDckIsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QixPQUFPLEVBQUUseUJBQXlCO0NBQzFCLENBQUM7QUFpQlgsTUFBTSxPQUFPLGdDQUFnQztJQUUzQyxZQUFtQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQURoQyxXQUFNLEdBQXFCLEVBQUUsQ0FBQztRQUd2QyxhQUFRLEdBQXdELElBQUksQ0FBQztJQUZ4QixDQUFDO0lBSTlDLFdBQVcsQ0FBQyxRQUF1QjtRQUNqQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM5RCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7aUdBYlUsZ0NBQWdDO29FQUFoQyxnQ0FBZ0M7WUFBaEMsbUVBQVMsT0FBTyxDQUFnQix1REFBdkIsU0FBUyxDQUFjLHVEQUF2QixTQUFTLENBQWMsMERBQXZCLFlBQVksQ0FBVzs7WUFUL0IsbUZBQW1EOztZQUE1QyxtQ0FBYzs7O2lGQVN0QixnQ0FBZ0M7Y0FmNUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFLDhEQUE4RDtnQkFDeEUsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSw2QkFBNkI7b0JBQ3BDLDJDQUEyQyxFQUFFLGtCQUFrQjtvQkFDL0QsNkNBQTZDLEVBQUUsb0JBQW9CO29CQUNuRSw2Q0FBNkMsRUFBRSxvQkFBb0I7b0JBQ25FLGdEQUFnRCxFQUFFLHVCQUF1QjtpQkFDMUU7YUFDRjtrREFFVSxNQUFNO2tCQUFkLEtBQUs7O2tGQURLLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOelZhbGlkYXRlU3RhdHVzIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuXHJcbmNvbnN0IGljb25UeXBlTWFwID0ge1xyXG4gIGVycm9yOiAnY2xvc2UtY2lyY2xlLWZpbGwnLFxyXG4gIHZhbGlkYXRpbmc6ICdsb2FkaW5nJyxcclxuICBzdWNjZXNzOiAnY2hlY2stY2lyY2xlLWZpbGwnLFxyXG4gIHdhcm5pbmc6ICdleGNsYW1hdGlvbi1jaXJjbGUtZmlsbCdcclxufSBhcyBjb25zdDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnBzLWZvcm0taXRlbS1mZWVkYmFjay1pY29uJyxcclxuICBleHBvcnRBczogJ2Jwc0Zvcm1GZWVkYmFja0ljb24nLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGU6IGAgPHNwYW4gKm5nSWY9XCJpY29uVHlwZVwiIG56LWljb24gW256VHlwZV09XCJpY29uVHlwZVwiPjwvc3Bhbj4gYCxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2FudC1mb3JtLWl0ZW0tZmVlZGJhY2staWNvbicsXHJcbiAgICAnW2NsYXNzLmFudC1mb3JtLWl0ZW0tZmVlZGJhY2staWNvbi1lcnJvcl0nOiAnc3RhdHVzPT09XCJlcnJvclwiJyxcclxuICAgICdbY2xhc3MuYW50LWZvcm0taXRlbS1mZWVkYmFjay1pY29uLXdhcm5pbmddJzogJ3N0YXR1cz09PVwid2FybmluZ1wiJyxcclxuICAgICdbY2xhc3MuYW50LWZvcm0taXRlbS1mZWVkYmFjay1pY29uLXN1Y2Nlc3NdJzogJ3N0YXR1cz09PVwic3VjY2Vzc1wiJyxcclxuICAgICdbY2xhc3MuYW50LWZvcm0taXRlbS1mZWVkYmFjay1pY29uLXZhbGlkYXRpbmddJzogJ3N0YXR1cz09PVwidmFsaWRhdGluZ1wiJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc0Zvcm1JdGVtRmVlZGJhY2tJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBzdGF0dXM6IE56VmFsaWRhdGVTdGF0dXMgPSAnJztcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XHJcblxyXG4gIGljb25UeXBlOiB0eXBlb2YgaWNvblR5cGVNYXBba2V5b2YgdHlwZW9mIGljb25UeXBlTWFwXSB8IG51bGwgPSBudWxsO1xyXG5cclxuICBuZ09uQ2hhbmdlcyhfY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVJY29uKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJY29uKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pY29uVHlwZSA9IHRoaXMuc3RhdHVzID8gaWNvblR5cGVNYXBbdGhpcy5zdGF0dXNdIDogbnVsbDtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxufVxyXG4iXX0=