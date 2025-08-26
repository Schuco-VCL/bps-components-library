import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Host, Input, Optional, ViewEncapsulation } from '@angular/core';
import { InputBoolean, toBoolean } from 'ng-zorro-antd/core/util';
import { NzColDirective } from '../bps-grid/nz-col.directive';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import * as i0 from "@angular/core";
import * as i1 from "../core/services/update-host-class.service";
import * as i2 from "./bps-form-item.component";
import * as i3 from "../bps-grid/nz-row.directive";
export class BpsFormLabelComponent extends NzColDirective {
    set bpsNoColon(value) {
        this.noColon = toBoolean(value);
    }
    get bpsNoColon() {
        return !!this.noColon;
    }
    constructor(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, renderer, cdr) {
        super(nzUpdateHostClassService, elementRef, nzFormItemComponent || nzRowDirective, renderer);
        this.cdr = cdr;
        this.bpsRequired = false;
        this.defaultNoColon = false;
        this.noColon = 'default';
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-label');
    }
    setDefaultNoColon(value) {
        this.defaultNoColon = toBoolean(value);
        this.cdr.markForCheck();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsFormLabelComponent, deps: [{ token: i1.NzUpdateHostClassService }, { token: i0.ElementRef }, { token: i2.BpsFormItemComponent, host: true, optional: true }, { token: i3.NzRowDirective, host: true, optional: true }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BpsFormLabelComponent, selector: "bps-form-label", inputs: { bpsFor: "bpsFor", bpsRequired: "bpsRequired", bpsNoColon: "bpsNoColon" }, providers: [NzUpdateHostClassService], exportAs: ["bpsFormLabel"], usesInheritance: true, ngImport: i0, template: "<label [attr.for]=\"bpsFor\"\r\n  [class.ant-form-item-no-colon]=\"noColon === 'default' ? defaultNoColon : bpsNoColon\"\r\n  [class.ant-form-item-required]=\"bpsRequired\">\r\n  <ng-content></ng-content>\r\n</label>\r\n", changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], BpsFormLabelComponent.prototype, "bpsRequired", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsFormLabelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-form-label', exportAs: 'bpsFormLabel', providers: [NzUpdateHostClassService], preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<label [attr.for]=\"bpsFor\"\r\n  [class.ant-form-item-no-colon]=\"noColon === 'default' ? defaultNoColon : bpsNoColon\"\r\n  [class.ant-form-item-required]=\"bpsRequired\">\r\n  <ng-content></ng-content>\r\n</label>\r\n" }]
        }], ctorParameters: () => [{ type: i1.NzUpdateHostClassService }, { type: i0.ElementRef }, { type: i2.BpsFormItemComponent, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }] }, { type: i3.NzRowDirective, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }] }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }], propDecorators: { bpsFor: [{
                type: Input
            }], bpsRequired: [{
                type: Input
            }], bpsNoColon: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWZvcm0tbGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtZm9ybS9icHMtZm9ybS1sYWJlbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1mb3JtL2Jwcy1mb3JtLWxhYmVsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxJQUFJLEVBQ0osS0FBSyxFQUVMLFFBQVEsRUFFUixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7Ozs7O0FBYXRGLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxjQUFjO0lBR3ZELElBQ0ksVUFBVSxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNELElBQUksVUFBVTtRQUNaLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUtELFlBQ0Usd0JBQWtELEVBQ2xELFVBQXNCLEVBQ0YsbUJBQXlDLEVBQ3pDLGNBQThCLEVBQ2xELFFBQW1CLEVBQ1gsR0FBc0I7UUFFOUIsS0FBSyxDQUFDLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxtQkFBbUIsSUFBSSxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFGckYsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFsQlAsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFTN0MsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsWUFBTyxHQUFxQixTQUFTLENBQUM7UUFXcEMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELGlCQUFpQixDQUFDLEtBQWM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsV0FBVztRQUNULEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsZUFBZTtRQUNiLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMxQixDQUFDOytHQXJDVSxxQkFBcUI7bUdBQXJCLHFCQUFxQiw2SEFOckIsQ0FBQyx3QkFBd0IsQ0FBQyw2RUN4QnZDLDhOQUtBOztBRDJCMkI7SUFBZixZQUFZLEVBQUU7MERBQXFCOzRGQUZsQyxxQkFBcUI7a0JBVGpDLFNBQVM7K0JBQ0UsZ0JBQWdCLFlBQ2hCLGNBQWMsYUFDYixDQUFDLHdCQUF3QixDQUFDLHVCQUNoQixLQUFLLGlCQUNYLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU07OzBCQW9CNUMsUUFBUTs7MEJBQUksSUFBSTs7MEJBQ2hCLFFBQVE7OzBCQUFJLElBQUk7aUdBakJWLE1BQU07c0JBQWQsS0FBSztnQkFDbUIsV0FBVztzQkFBbkMsS0FBSztnQkFFRixVQUFVO3NCQURiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3B0aW9uYWwsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgdG9Cb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBOekNvbERpcmVjdGl2ZSB9IGZyb20gJy4uL2Jwcy1ncmlkL256LWNvbC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOelJvd0RpcmVjdGl2ZSB9IGZyb20gJy4uL2Jwcy1ncmlkL256LXJvdy5kaXJlY3RpdmUnO1xyXG5cclxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEJwc0Zvcm1JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9icHMtZm9ybS1pdGVtLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jwcy1mb3JtLWxhYmVsJyxcclxuICBleHBvcnRBczogJ2Jwc0Zvcm1MYWJlbCcsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9icHMtZm9ybS1sYWJlbC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc0Zvcm1MYWJlbENvbXBvbmVudCBleHRlbmRzIE56Q29sRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBicHNGb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzUmVxdWlyZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIHNldCBicHNOb0NvbG9uKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm5vQ29sb24gPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuICBnZXQgYnBzTm9Db2xvbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIXRoaXMubm9Db2xvbjtcclxuICB9XHJcblxyXG4gIGRlZmF1bHROb0NvbG9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgbm9Db2xvbjogYm9vbGVhbiB8IHN0cmluZyA9ICdkZWZhdWx0JztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIG56Rm9ybUl0ZW1Db21wb25lbnQ6IEJwc0Zvcm1JdGVtQ29tcG9uZW50LFxyXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBuelJvd0RpcmVjdGl2ZTogTnpSb3dEaXJlY3RpdmUsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgICBzdXBlcihuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIGVsZW1lbnRSZWYsIG56Rm9ybUl0ZW1Db21wb25lbnQgfHwgbnpSb3dEaXJlY3RpdmUsIHJlbmRlcmVyKTtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1mb3JtLWl0ZW0tbGFiZWwnKTtcclxuICB9XHJcblxyXG4gIHNldERlZmF1bHROb0NvbG9uKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlZmF1bHROb0NvbG9uID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdBZnRlclZpZXdJbml0KCk7XHJcbiAgfVxyXG59XHJcbiIsIjxsYWJlbCBbYXR0ci5mb3JdPVwiYnBzRm9yXCJcclxuICBbY2xhc3MuYW50LWZvcm0taXRlbS1uby1jb2xvbl09XCJub0NvbG9uID09PSAnZGVmYXVsdCcgPyBkZWZhdWx0Tm9Db2xvbiA6IGJwc05vQ29sb25cIlxyXG4gIFtjbGFzcy5hbnQtZm9ybS1pdGVtLXJlcXVpcmVkXT1cImJwc1JlcXVpcmVkXCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2xhYmVsPlxyXG4iXX0=