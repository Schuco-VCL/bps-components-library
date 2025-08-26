import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../core/addon/string_template_outlet";
import * as i3 from "ng-zorro-antd/icon";
function BpsSelectArrowComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 4);
} }
function BpsSelectArrowComponent_ng_template_1_ng_container_0_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 8);
} }
function BpsSelectArrowComponent_ng_template_1_ng_container_0_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 9);
} }
function BpsSelectArrowComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsSelectArrowComponent_ng_template_1_ng_container_0_span_1_Template, 1, 0, "span", 6)(2, BpsSelectArrowComponent_ng_template_1_ng_container_0_span_2_Template, 1, 0, "span", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.search);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.search);
} }
function BpsSelectArrowComponent_ng_template_1_ng_template_1_ng_container_0_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 11);
} if (rf & 2) {
    const suffixIcon_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("nzType", suffixIcon_r2);
} }
function BpsSelectArrowComponent_ng_template_1_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsSelectArrowComponent_ng_template_1_ng_template_1_ng_container_0_span_1_Template, 1, 1, "span", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const suffixIcon_r2 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", suffixIcon_r2);
} }
function BpsSelectArrowComponent_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BpsSelectArrowComponent_ng_template_1_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 3);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.suffixIcon);
} }
function BpsSelectArrowComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BpsSelectArrowComponent_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 5)(1, BpsSelectArrowComponent_ng_template_1_ng_template_1_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const suffixTemplate_r3 = i0.ɵɵreference(2);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r0.showArrow && !ctx_r0.suffixIcon)("ngIfElse", suffixTemplate_r3);
} }
function BpsSelectArrowComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.feedbackIcon);
} }
export class BpsSelectArrowComponent {
    constructor() {
        this.loading = false;
        this.search = false;
        this.showArrow = false;
        this.suffixIcon = null;
        this.feedbackIcon = null;
    }
    static { this.ɵfac = function BpsSelectArrowComponent_Factory(t) { return new (t || BpsSelectArrowComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsSelectArrowComponent, selectors: [["bps-select-arrow"]], hostAttrs: [1, "ant-select-arrow"], hostVars: 2, hostBindings: function BpsSelectArrowComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-select-arrow-loading", ctx.loading);
        } }, inputs: { loading: "loading", search: "search", showArrow: "showArrow", suffixIcon: "suffixIcon", feedbackIcon: "feedbackIcon" }, decls: 4, vars: 3, consts: [["defaultArrow", ""], ["suffixTemplate", ""], ["nz-icon", "", "nzType", "loading", 4, "ngIf", "ngIfElse"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzType", "loading"], [4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "down", 4, "ngIf"], ["nz-icon", "", "nzType", "search", 4, "ngIf"], ["nz-icon", "", "nzType", "down"], ["nz-icon", "", "nzType", "search"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"]], template: function BpsSelectArrowComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BpsSelectArrowComponent_span_0_Template, 1, 0, "span", 2)(1, BpsSelectArrowComponent_ng_template_1_Template, 3, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(3, BpsSelectArrowComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
        } if (rf & 2) {
            const defaultArrow_r4 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx.loading)("ngIfElse", defaultArrow_r4);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("nzStringTemplateOutlet", ctx.feedbackIcon);
        } }, dependencies: [i1.NgIf, i2.NzStringTemplateOutletDirective, i3.NzIconDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsSelectArrowComponent, [{
        type: Component,
        args: [{
                selector: 'bps-select-arrow',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <span nz-icon nzType="loading" *ngIf="loading; else defaultArrow"></span>
    <ng-template #defaultArrow>
      <ng-container *ngIf="showArrow && !suffixIcon; else suffixTemplate">
        <span nz-icon nzType="down" *ngIf="!search"></span>
        <span nz-icon nzType="search" *ngIf="search"></span>
      </ng-container>
      <ng-template #suffixTemplate>
        <ng-container *nzStringTemplateOutlet="suffixIcon; let suffixIcon">
          <span *ngIf="suffixIcon" nz-icon [nzType]="suffixIcon"></span>
        </ng-container>
      </ng-template>
    </ng-template>
    <ng-container *nzStringTemplateOutlet="feedbackIcon">{{ feedbackIcon }}</ng-container>
  `,
                host: {
                    class: 'ant-select-arrow',
                    '[class.ant-select-arrow-loading]': 'loading'
                }
            }]
    }], () => [], { loading: [{
            type: Input
        }], search: [{
            type: Input
        }], showArrow: [{
            type: Input
        }], suffixIcon: [{
            type: Input
        }], feedbackIcon: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsSelectArrowComponent, { className: "BpsSelectArrowComponent", filePath: "lib\\components\\bps-select\\select-arrow.component.ts", lineNumber: 30 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWFycm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9zZWxlY3QtYXJyb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUFTdEcsMEJBQXlFOzs7SUFHckUsMEJBQW1EOzs7SUFDbkQsMEJBQW9EOzs7SUFGdEQsNkJBQW9FO0lBRWxFLEFBREEsdUdBQTRDLDBGQUNDOzs7O0lBRGhCLGNBQWE7SUFBYixxQ0FBYTtJQUNYLGNBQVk7SUFBWixvQ0FBWTs7O0lBSXpDLDJCQUE4RDs7O0lBQTdCLHNDQUFxQjs7O0lBRHhELDZCQUFtRTtJQUNqRSxzSEFBdUQ7Ozs7SUFBaEQsY0FBZ0I7SUFBaEIsb0NBQWdCOzs7SUFEekIsc0hBQW1FOzs7SUFBcEQsMERBQW9DOzs7SUFEckQsQUFKQSx3R0FBb0UsMEhBSXZDOzs7O0lBSmtCLEFBQWhDLDZEQUFnQywrQkFBbUI7OztJQVVwRSw2QkFBcUQ7SUFBQSxZQUFrQjs7OztJQUFsQixjQUFrQjtJQUFsQix5Q0FBa0I7O0FBTzNFLE1BQU0sT0FBTyx1QkFBdUI7SUFPbEM7UUFOUyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBMkMsSUFBSSxDQUFDO1FBQzFELGlCQUFZLEdBQTJDLElBQUksQ0FBQztJQUV0RCxDQUFDO3dGQVBMLHVCQUF1QjtvRUFBdkIsdUJBQXVCO1lBQXZCLHVEQUF1Qjs7WUFQaEMsQUFYQSxBQURBLDBFQUFrRSw0R0FDdkMsNkVBVzBCOzs7WUFaTixBQUFmLGtDQUFlLDZCQUFpQjtZQVlqRCxlQUFvQztZQUFwQyx5REFBb0M7OztpRkFPMUMsdUJBQXVCO2NBeEJuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0dBY1Q7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxrQkFBa0I7b0JBQ3pCLGtDQUFrQyxFQUFFLFNBQVM7aUJBQzlDO2FBQ0Y7b0JBRVUsT0FBTztrQkFBZixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLOztrRkFMSyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnBzLXNlbGVjdC1hcnJvdycsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gbnotaWNvbiBuelR5cGU9XCJsb2FkaW5nXCIgKm5nSWY9XCJsb2FkaW5nOyBlbHNlIGRlZmF1bHRBcnJvd1wiPjwvc3Bhbj5cclxuICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdEFycm93PlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd0Fycm93ICYmICFzdWZmaXhJY29uOyBlbHNlIHN1ZmZpeFRlbXBsYXRlXCI+XHJcbiAgICAgICAgPHNwYW4gbnotaWNvbiBuelR5cGU9XCJkb3duXCIgKm5nSWY9XCIhc2VhcmNoXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIG56LWljb24gbnpUeXBlPVwic2VhcmNoXCIgKm5nSWY9XCJzZWFyY2hcIj48L3NwYW4+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctdGVtcGxhdGUgI3N1ZmZpeFRlbXBsYXRlPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJzdWZmaXhJY29uOyBsZXQgc3VmZml4SWNvblwiPlxyXG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCJzdWZmaXhJY29uXCIgbnotaWNvbiBbbnpUeXBlXT1cInN1ZmZpeEljb25cIj48L3NwYW4+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImZlZWRiYWNrSWNvblwiPnt7IGZlZWRiYWNrSWNvbiB9fTwvbmctY29udGFpbmVyPlxyXG4gIGAsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdhbnQtc2VsZWN0LWFycm93JyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1hcnJvdy1sb2FkaW5nXSc6ICdsb2FkaW5nJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc1NlbGVjdEFycm93Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBsb2FkaW5nID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2hvd0Fycm93ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc3VmZml4SWNvbjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGZlZWRiYWNrSWNvbjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIl19