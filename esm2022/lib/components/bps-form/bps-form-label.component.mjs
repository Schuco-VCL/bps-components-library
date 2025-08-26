import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Host, Input, Optional, ViewEncapsulation } from '@angular/core';
import { InputBoolean, toBoolean } from 'ng-zorro-antd/core/util';
import { NzColDirective } from '../bps-grid/nz-col.directive';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import * as i0 from "@angular/core";
import * as i1 from "../core/services/update-host-class.service";
import * as i2 from "./bps-form-item.component";
import * as i3 from "../bps-grid/nz-row.directive";
const _c0 = ["*"];
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
    static { this.ɵfac = function BpsFormLabelComponent_Factory(t) { return new (t || BpsFormLabelComponent)(i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.BpsFormItemComponent, 9), i0.ɵɵdirectiveInject(i3.NzRowDirective, 9), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsFormLabelComponent, selectors: [["bps-form-label"]], inputs: { bpsFor: "bpsFor", bpsRequired: "bpsRequired", bpsNoColon: "bpsNoColon" }, exportAs: ["bpsFormLabel"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 2, vars: 5, template: function BpsFormLabelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "label");
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-form-item-no-colon", ctx.noColon === "default" ? ctx.defaultNoColon : ctx.bpsNoColon)("ant-form-item-required", ctx.bpsRequired);
            i0.ɵɵattribute("for", ctx.bpsFor);
        } }, encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], BpsFormLabelComponent.prototype, "bpsRequired", void 0);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsFormLabelComponent, [{
        type: Component,
        args: [{ selector: 'bps-form-label', exportAs: 'bpsFormLabel', providers: [NzUpdateHostClassService], preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<label [attr.for]=\"bpsFor\"\r\n  [class.ant-form-item-no-colon]=\"noColon === 'default' ? defaultNoColon : bpsNoColon\"\r\n  [class.ant-form-item-required]=\"bpsRequired\">\r\n  <ng-content></ng-content>\r\n</label>\r\n" }]
    }], () => [{ type: i1.NzUpdateHostClassService }, { type: i0.ElementRef }, { type: i2.BpsFormItemComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: i3.NzRowDirective, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }], { bpsFor: [{
            type: Input
        }], bpsRequired: [{
            type: Input
        }], bpsNoColon: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsFormLabelComponent, { className: "BpsFormLabelComponent", filePath: "lib\\components\\bps-form\\bps-form-label.component.ts", lineNumber: 31 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWZvcm0tbGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtZm9ybS9icHMtZm9ybS1sYWJlbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1mb3JtL2Jwcy1mb3JtLWxhYmVsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxJQUFJLEVBQ0osS0FBSyxFQUVMLFFBQVEsRUFFUixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7Ozs7OztBQWF0RixNQUFNLE9BQU8scUJBQXNCLFNBQVEsY0FBYztJQUd2RCxJQUNJLFVBQVUsQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxJQUFJLFVBQVU7UUFDWixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFLRCxZQUNFLHdCQUFrRCxFQUNsRCxVQUFzQixFQUNGLG1CQUF5QyxFQUN6QyxjQUE4QixFQUNsRCxRQUFtQixFQUNYLEdBQXNCO1FBRTlCLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsbUJBQW1CLElBQUksY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRnJGLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBbEJQLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBUzdDLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLFlBQU8sR0FBcUIsU0FBUyxDQUFDO1FBV3BDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFjO1FBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFdBQVc7UUFDVCxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGVBQWU7UUFDYixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQztzRkFyQ1UscUJBQXFCO29FQUFyQixxQkFBcUIsb0xBTnJCLENBQUMsd0JBQXdCLENBQUM7O1lDeEJ2Qyw2QkFFK0M7WUFDN0Msa0JBQXlCO1lBQzNCLGlCQUFROztZQUZOLEFBREEseUdBQW9GLDJDQUN4Qzs7OztBRDhCbkI7SUFBZixZQUFZLEVBQUU7MERBQXFCO2lGQUZsQyxxQkFBcUI7Y0FUakMsU0FBUzsyQkFDRSxnQkFBZ0IsWUFDaEIsY0FBYyxhQUNiLENBQUMsd0JBQXdCLENBQUMsdUJBQ2hCLEtBQUssaUJBQ1gsaUJBQWlCLENBQUMsSUFBSSxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTTs7c0JBb0I1QyxRQUFROztzQkFBSSxJQUFJOztzQkFDaEIsUUFBUTs7c0JBQUksSUFBSTs2RUFqQlYsTUFBTTtrQkFBZCxLQUFLO1lBQ21CLFdBQVc7a0JBQW5DLEtBQUs7WUFFRixVQUFVO2tCQURiLEtBQUs7O2tGQUhLLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPcHRpb25hbCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCB0b0Jvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IE56Q29sRGlyZWN0aXZlIH0gZnJvbSAnLi4vYnBzLWdyaWQvbnotY29sLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE56Um93RGlyZWN0aXZlIH0gZnJvbSAnLi4vYnBzLWdyaWQvbnotcm93LmRpcmVjdGl2ZSc7XHJcblxyXG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgQnBzRm9ybUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2Jwcy1mb3JtLWl0ZW0uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnBzLWZvcm0tbGFiZWwnLFxyXG4gIGV4cG9ydEFzOiAnYnBzRm9ybUxhYmVsJyxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy1mb3JtLWxhYmVsLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzRm9ybUxhYmVsQ29tcG9uZW50IGV4dGVuZHMgTnpDb2xEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIGJwc0Zvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNSZXF1aXJlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGJwc05vQ29sb24odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMubm9Db2xvbiA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG4gIGdldCBicHNOb0NvbG9uKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhdGhpcy5ub0NvbG9uO1xyXG4gIH1cclxuXHJcbiAgZGVmYXVsdE5vQ29sb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBub0NvbG9uOiBib29sZWFuIHwgc3RyaW5nID0gJ2RlZmF1bHQnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgbnpGb3JtSXRlbUNvbXBvbmVudDogQnBzRm9ybUl0ZW1Db21wb25lbnQsXHJcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIG56Um93RGlyZWN0aXZlOiBOelJvd0RpcmVjdGl2ZSxcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHN1cGVyKG56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgZWxlbWVudFJlZiwgbnpGb3JtSXRlbUNvbXBvbmVudCB8fCBuelJvd0RpcmVjdGl2ZSwgcmVuZGVyZXIpO1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWZvcm0taXRlbS1sYWJlbCcpO1xyXG4gIH1cclxuXHJcbiAgc2V0RGVmYXVsdE5vQ29sb24odmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGVmYXVsdE5vQ29sb24gPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcclxuICB9XHJcbn1cclxuIiwiPGxhYmVsIFthdHRyLmZvcl09XCJicHNGb3JcIlxyXG4gIFtjbGFzcy5hbnQtZm9ybS1pdGVtLW5vLWNvbG9uXT1cIm5vQ29sb24gPT09ICdkZWZhdWx0JyA/IGRlZmF1bHROb0NvbG9uIDogYnBzTm9Db2xvblwiXHJcbiAgW2NsYXNzLmFudC1mb3JtLWl0ZW0tcmVxdWlyZWRdPVwiYnBzUmVxdWlyZWRcIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvbGFiZWw+XHJcbiJdfQ==