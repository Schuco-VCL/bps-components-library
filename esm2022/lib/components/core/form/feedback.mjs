import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/icon";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsFormItemFeedbackIconComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BpsFormItemFeedbackIconComponent, selector: "bps-form-item-feedback-icon", inputs: { status: "status" }, host: { properties: { "class.ant-form-item-feedback-icon-error": "status===\"error\"", "class.ant-form-item-feedback-icon-warning": "status===\"warning\"", "class.ant-form-item-feedback-icon-success": "status===\"success\"", "class.ant-form-item-feedback-icon-validating": "status===\"validating\"" }, classAttribute: "ant-form-item-feedback-icon" }, exportAs: ["bpsFormFeedbackIcon"], usesOnChanges: true, ngImport: i0, template: ` <span *ngIf="iconType" nz-icon [nzType]="iconType"></span> `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsFormItemFeedbackIconComponent, decorators: [{
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
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { status: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NvcmUvZm9ybS9mZWVkYmFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxLQUFLLEVBR0wsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDOzs7O0FBSXZCLE1BQU0sV0FBVyxHQUFHO0lBQ2xCLEtBQUssRUFBRSxtQkFBbUI7SUFDMUIsVUFBVSxFQUFFLFNBQVM7SUFDckIsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QixPQUFPLEVBQUUseUJBQXlCO0NBQzFCLENBQUM7QUFpQlgsTUFBTSxPQUFPLGdDQUFnQztJQUUzQyxZQUFtQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQURoQyxXQUFNLEdBQXFCLEVBQUUsQ0FBQztRQUd2QyxhQUFRLEdBQXdELElBQUksQ0FBQztJQUZ4QixDQUFDO0lBSTlDLFdBQVcsQ0FBQyxRQUF1QjtRQUNqQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM5RCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7K0dBYlUsZ0NBQWdDO21HQUFoQyxnQ0FBZ0Msd2ZBVGpDLDhEQUE4RDs7NEZBUzdELGdDQUFnQztrQkFmNUMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2QyxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSw4REFBOEQ7b0JBQ3hFLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsNkJBQTZCO3dCQUNwQywyQ0FBMkMsRUFBRSxrQkFBa0I7d0JBQy9ELDZDQUE2QyxFQUFFLG9CQUFvQjt3QkFDbkUsNkNBQTZDLEVBQUUsb0JBQW9CO3dCQUNuRSxnREFBZ0QsRUFBRSx1QkFBdUI7cUJBQzFFO2lCQUNGO3NGQUVVLE1BQU07c0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOelZhbGlkYXRlU3RhdHVzIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuXHJcbmNvbnN0IGljb25UeXBlTWFwID0ge1xyXG4gIGVycm9yOiAnY2xvc2UtY2lyY2xlLWZpbGwnLFxyXG4gIHZhbGlkYXRpbmc6ICdsb2FkaW5nJyxcclxuICBzdWNjZXNzOiAnY2hlY2stY2lyY2xlLWZpbGwnLFxyXG4gIHdhcm5pbmc6ICdleGNsYW1hdGlvbi1jaXJjbGUtZmlsbCdcclxufSBhcyBjb25zdDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnBzLWZvcm0taXRlbS1mZWVkYmFjay1pY29uJyxcclxuICBleHBvcnRBczogJ2Jwc0Zvcm1GZWVkYmFja0ljb24nLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGU6IGAgPHNwYW4gKm5nSWY9XCJpY29uVHlwZVwiIG56LWljb24gW256VHlwZV09XCJpY29uVHlwZVwiPjwvc3Bhbj4gYCxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2FudC1mb3JtLWl0ZW0tZmVlZGJhY2staWNvbicsXHJcbiAgICAnW2NsYXNzLmFudC1mb3JtLWl0ZW0tZmVlZGJhY2staWNvbi1lcnJvcl0nOiAnc3RhdHVzPT09XCJlcnJvclwiJyxcclxuICAgICdbY2xhc3MuYW50LWZvcm0taXRlbS1mZWVkYmFjay1pY29uLXdhcm5pbmddJzogJ3N0YXR1cz09PVwid2FybmluZ1wiJyxcclxuICAgICdbY2xhc3MuYW50LWZvcm0taXRlbS1mZWVkYmFjay1pY29uLXN1Y2Nlc3NdJzogJ3N0YXR1cz09PVwic3VjY2Vzc1wiJyxcclxuICAgICdbY2xhc3MuYW50LWZvcm0taXRlbS1mZWVkYmFjay1pY29uLXZhbGlkYXRpbmddJzogJ3N0YXR1cz09PVwidmFsaWRhdGluZ1wiJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc0Zvcm1JdGVtRmVlZGJhY2tJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBzdGF0dXM6IE56VmFsaWRhdGVTdGF0dXMgPSAnJztcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XHJcblxyXG4gIGljb25UeXBlOiB0eXBlb2YgaWNvblR5cGVNYXBba2V5b2YgdHlwZW9mIGljb25UeXBlTWFwXSB8IG51bGwgPSBudWxsO1xyXG5cclxuICBuZ09uQ2hhbmdlcyhfY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVJY29uKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJY29uKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pY29uVHlwZSA9IHRoaXMuc3RhdHVzID8gaWNvblR5cGVNYXBbdGhpcy5zdGF0dXNdIDogbnVsbDtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxufVxyXG4iXX0=