import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../core/addon/string_template_outlet";
import * as i3 from "ng-zorro-antd/icon";
const _c0 = ["bps-input-group-slot", ""];
function BpsInputGroupSlotComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 2);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzType", ctx_r0.icon);
} }
function BpsInputGroupSlotComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.template);
} }
export class BpsInputGroupSlotComponent {
    constructor() {
        this.icon = null;
        this.type = null;
        this.template = null;
    }
    static { this.ɵfac = function BpsInputGroupSlotComponent_Factory(t) { return new (t || BpsInputGroupSlotComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsInputGroupSlotComponent, selectors: [["", "bps-input-group-slot", ""]], hostVars: 6, hostBindings: function BpsInputGroupSlotComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-input-group-addon", ctx.type === "addon")("ant-input-prefix", ctx.type === "prefix")("ant-input-suffix", ctx.type === "suffix");
        } }, inputs: { icon: "icon", type: "type", template: "template" }, attrs: _c0, decls: 2, vars: 2, consts: [["nz-icon", "", 3, "nzType", 4, "ngIf"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"]], template: function BpsInputGroupSlotComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BpsInputGroupSlotComponent_i_0_Template, 1, 1, "i", 0)(1, BpsInputGroupSlotComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.icon);
            i0.ɵɵadvance();
            i0.ɵɵproperty("nzStringTemplateOutlet", ctx.template);
        } }, dependencies: [i1.NgIf, i2.NzStringTemplateOutletDirective, i3.NzIconDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsInputGroupSlotComponent, [{
        type: Component,
        args: [{
                selector: '[bps-input-group-slot]',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <i nz-icon [nzType]="icon" *ngIf="icon"></i>
    <ng-container *nzStringTemplateOutlet="template">{{ template }}</ng-container>
  `,
                host: {
                    '[class.ant-input-group-addon]': `type === 'addon'`,
                    '[class.ant-input-prefix]': `type === 'prefix'`,
                    '[class.ant-input-suffix]': `type === 'suffix'`
                }
            }]
    }], null, { icon: [{
            type: Input
        }], type: [{
            type: Input
        }], template: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsInputGroupSlotComponent, { className: "BpsInputGroupSlotComponent", filePath: "lib\\components\\bps-input\\input-group-slot.component.ts", lineNumber: 18 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZ3JvdXAtc2xvdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1pbnB1dC9pbnB1dC1ncm91cC1zbG90LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQVF0Ryx1QkFBNEM7OztJQUFqQyxvQ0FBZTs7O0lBQzFCLDZCQUFpRDtJQUFBLFlBQWM7Ozs7SUFBZCxjQUFjO0lBQWQscUNBQWM7O0FBUW5FLE1BQU0sT0FBTywwQkFBMEI7SUFmdkM7UUFnQlcsU0FBSSxHQUFtQixJQUFJLENBQUM7UUFDNUIsU0FBSSxHQUF5QyxJQUFJLENBQUM7UUFDbEQsYUFBUSxHQUF1QyxJQUFJLENBQUM7S0FDOUQ7MkZBSlksMEJBQTBCO29FQUExQiwwQkFBMEI7WUFBMUIscURBQVMsT0FBTyxDQUFVLGtDQUFqQixRQUFRLENBQVMsa0NBQWpCLFFBQVEsQ0FBUzs7WUFSbkMsQUFEQSx1RUFBd0MsZ0ZBQ1M7O1lBRHJCLCtCQUFVO1lBQ3ZCLGNBQWdDO1lBQWhDLHFEQUFnQzs7O2lGQVF0QywwQkFBMEI7Y0FmdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7R0FHVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osK0JBQStCLEVBQUUsa0JBQWtCO29CQUNuRCwwQkFBMEIsRUFBRSxtQkFBbUI7b0JBQy9DLDBCQUEwQixFQUFFLG1CQUFtQjtpQkFDaEQ7YUFDRjtnQkFFVSxJQUFJO2tCQUFaLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLOztrRkFISywwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1ticHMtaW5wdXQtZ3JvdXAtc2xvdF0nLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxpIG56LWljb24gW256VHlwZV09XCJpY29uXCIgKm5nSWY9XCJpY29uXCI+PC9pPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlXCI+e3sgdGVtcGxhdGUgfX08L25nLWNvbnRhaW5lcj5cclxuICBgLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLWFkZG9uXSc6IGB0eXBlID09PSAnYWRkb24nYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LXByZWZpeF0nOiBgdHlwZSA9PT0gJ3ByZWZpeCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc3VmZml4XSc6IGB0eXBlID09PSAnc3VmZml4J2BcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNJbnB1dEdyb3VwU2xvdENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgaWNvbj86IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIHR5cGU6ICdhZGRvbicgfCAncHJlZml4JyB8ICdzdWZmaXgnIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgdGVtcGxhdGU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xyXG59XHJcbiJdfQ==