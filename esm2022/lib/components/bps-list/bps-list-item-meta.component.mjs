import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../core/addon/string_template_outlet";
import * as i3 from "ng-zorro-antd/avatar";
function BpsListItemMetaComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "nz-avatar", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzSrc", ctx_r0.avatarStr);
} }
function BpsListItemMetaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, BpsListItemMetaComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.avatarStr)("ngIfElse", ctx_r0.avatarTpl);
} }
function BpsListItemMetaComponent_div_1_h4_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.bpsTitle);
} }
function BpsListItemMetaComponent_div_1_h4_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 8);
    i0.ɵɵtemplate(1, BpsListItemMetaComponent_div_1_h4_1_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.bpsTitle);
} }
function BpsListItemMetaComponent_div_1_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.bpsDescription);
} }
function BpsListItemMetaComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, BpsListItemMetaComponent_div_1_div_2_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.bpsDescription);
} }
function BpsListItemMetaComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, BpsListItemMetaComponent_div_1_h4_1_Template, 2, 1, "h4", 6)(2, BpsListItemMetaComponent_div_1_div_2_Template, 2, 1, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.bpsTitle);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.bpsDescription);
} }
export class BpsListItemMetaComponent {
    set bpsAvatar(value) {
        if (value instanceof TemplateRef) {
            this.avatarStr = '';
            this.avatarTpl = value;
        }
        else {
            this.avatarStr = value;
        }
    }
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.avatarStr = '';
        this.renderer.addClass(elementRef.nativeElement, 'ant-list-item-meta');
    }
    static { this.ɵfac = function BpsListItemMetaComponent_Factory(t) { return new (t || BpsListItemMetaComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsListItemMetaComponent, selectors: [["bps-list-item-meta"], ["", "bps-list-item-meta", ""]], inputs: { bpsAvatar: "bpsAvatar", bpsTitle: "bpsTitle", bpsDescription: "bpsDescription" }, exportAs: ["bpsListItemMeta"], decls: 2, vars: 2, consts: [["class", "ant-list-item-meta-avatar", 4, "ngIf"], ["class", "ant-list-item-meta-content", 4, "ngIf"], [1, "ant-list-item-meta-avatar"], [4, "ngIf", "ngIfElse"], [3, "nzSrc"], [1, "ant-list-item-meta-content"], ["class", "ant-list-item-meta-title", 4, "ngIf"], ["class", "ant-list-item-meta-description", 4, "ngIf"], [1, "ant-list-item-meta-title"], [4, "nzStringTemplateOutlet"], [1, "ant-list-item-meta-description"]], template: function BpsListItemMetaComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BpsListItemMetaComponent_div_0_Template, 2, 2, "div", 0)(1, BpsListItemMetaComponent_div_1_Template, 3, 2, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.avatarStr || ctx.avatarTpl);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.bpsTitle || ctx.bpsDescription);
        } }, dependencies: [i1.NgIf, i2.NzStringTemplateOutletDirective, i3.NzAvatarComponent], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsListItemMetaComponent, [{
        type: Component,
        args: [{ selector: 'bps-list-item-meta, [bps-list-item-meta]', exportAs: 'bpsListItemMeta', preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div *ngIf=\"avatarStr || avatarTpl\" class=\"ant-list-item-meta-avatar\">\r\n  <ng-container *ngIf=\"avatarStr; else avatarTpl\">\r\n    <nz-avatar [nzSrc]=\"avatarStr\"></nz-avatar>\r\n  </ng-container>\r\n</div>\r\n<div *ngIf=\"bpsTitle || bpsDescription\" class=\"ant-list-item-meta-content\">\r\n  <h4 *ngIf=\"bpsTitle\" class=\"ant-list-item-meta-title\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsTitle\">{{ bpsTitle }}</ng-container>\r\n  </h4>\r\n  <div *ngIf=\"bpsDescription\" class=\"ant-list-item-meta-description\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsDescription\">{{ bpsDescription }}</ng-container>\r\n  </div>\r\n</div>\r\n" }]
    }], () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], { bpsAvatar: [{
            type: Input
        }], bpsTitle: [{
            type: Input
        }], bpsDescription: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsListItemMetaComponent, { className: "BpsListItemMetaComponent", filePath: "lib\\components\\bps-list\\bps-list-item-meta.component.ts", lineNumber: 19 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWxpc3QtaXRlbS1tZXRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWxpc3QvYnBzLWxpc3QtaXRlbS1tZXRhLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWxpc3QvYnBzLWxpc3QtaXRlbS1tZXRhLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUVULEtBQUssRUFFTCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNQckIsNkJBQWdEO0lBQzlDLCtCQUEyQzs7OztJQUFoQyxjQUFtQjtJQUFuQix3Q0FBbUI7OztJQUZsQyw4QkFBc0U7SUFDcEUsaUdBQWdEO0lBR2xELGlCQUFNOzs7SUFIVyxjQUFpQjtJQUFBLEFBQWpCLHVDQUFpQiw4QkFBYzs7O0lBTTVDLDZCQUFpRDtJQUFBLFlBQWM7Ozs7SUFBZCxjQUFjO0lBQWQscUNBQWM7OztJQURqRSw2QkFBc0Q7SUFDcEQsc0dBQWlEO0lBQ25ELGlCQUFLOzs7SUFEWSxjQUFnQztJQUFoQyx3REFBZ0M7OztJQUcvQyw2QkFBdUQ7SUFBQSxZQUFvQjs7OztJQUFwQixjQUFvQjtJQUFwQiwyQ0FBb0I7OztJQUQ3RSwrQkFBbUU7SUFDakUsdUdBQXVEO0lBQ3pELGlCQUFNOzs7SUFEVyxjQUFzQztJQUF0Qyw4REFBc0M7OztJQUx6RCw4QkFBMkU7SUFJekUsQUFIQSw2RUFBc0Qsa0VBR2E7SUFHckUsaUJBQU07OztJQU5DLGNBQWM7SUFBZCxzQ0FBYztJQUdiLGNBQW9CO0lBQXBCLDRDQUFvQjs7QURTNUIsTUFBTSxPQUFPLHdCQUF3QjtJQUluQyxJQUNJLFNBQVMsQ0FBQyxLQUFpQztRQUM3QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBTUQsWUFBbUIsVUFBc0IsRUFBVSxRQUFtQjtRQUFuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQWpCdEUsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQWtCYixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDekUsQ0FBQzt5RkFwQlUsd0JBQXdCO29FQUF4Qix3QkFBd0I7WUNickMsQUFMQSx5RUFBc0UsNERBS0s7O1lBTHJFLHFEQUE0QjtZQUs1QixjQUFnQztZQUFoQyx5REFBZ0M7OztpRkRhekIsd0JBQXdCO2NBUnBDLFNBQVM7MkJBQ0UsMENBQTBDLFlBQzFDLGlCQUFpQix1QkFFTixLQUFLLG1CQUNULHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7bUVBT2pDLFNBQVM7a0JBRFosS0FBSztZQVVHLFFBQVE7a0JBQWhCLEtBQUs7WUFFRyxjQUFjO2tCQUF0QixLQUFLOztrRkFoQkssd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnBzLWxpc3QtaXRlbS1tZXRhLCBbYnBzLWxpc3QtaXRlbS1tZXRhXScsXHJcbiAgZXhwb3J0QXM6ICdicHNMaXN0SXRlbU1ldGEnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9icHMtbGlzdC1pdGVtLW1ldGEuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc0xpc3RJdGVtTWV0YUNvbXBvbmVudCB7XHJcbiAgYXZhdGFyU3RyID0gJyc7XHJcbiAgYXZhdGFyVHBsOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYnBzQXZhdGFyKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5hdmF0YXJTdHIgPSAnJztcclxuICAgICAgdGhpcy5hdmF0YXJUcGwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYXZhdGFyU3RyID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBicHNUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpIGJwc0Rlc2NyaXB0aW9uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtbGlzdC1pdGVtLW1ldGEnKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiAqbmdJZj1cImF2YXRhclN0ciB8fCBhdmF0YXJUcGxcIiBjbGFzcz1cImFudC1saXN0LWl0ZW0tbWV0YS1hdmF0YXJcIj5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiYXZhdGFyU3RyOyBlbHNlIGF2YXRhclRwbFwiPlxyXG4gICAgPG56LWF2YXRhciBbbnpTcmNdPVwiYXZhdGFyU3RyXCI+PC9uei1hdmF0YXI+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG48ZGl2ICpuZ0lmPVwiYnBzVGl0bGUgfHwgYnBzRGVzY3JpcHRpb25cIiBjbGFzcz1cImFudC1saXN0LWl0ZW0tbWV0YS1jb250ZW50XCI+XHJcbiAgPGg0ICpuZ0lmPVwiYnBzVGl0bGVcIiBjbGFzcz1cImFudC1saXN0LWl0ZW0tbWV0YS10aXRsZVwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImJwc1RpdGxlXCI+e3sgYnBzVGl0bGUgfX08L25nLWNvbnRhaW5lcj5cclxuICA8L2g0PlxyXG4gIDxkaXYgKm5nSWY9XCJicHNEZXNjcmlwdGlvblwiIGNsYXNzPVwiYW50LWxpc3QtaXRlbS1tZXRhLWRlc2NyaXB0aW9uXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiYnBzRGVzY3JpcHRpb25cIj57eyBicHNEZXNjcmlwdGlvbiB9fTwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19