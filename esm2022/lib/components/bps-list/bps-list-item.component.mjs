import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ContentChildren, HostBinding, Input, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { BpsListItemMetaComponent } from './bps-list-item-meta.component';
import * as i0 from "@angular/core";
import * as i1 from "./bps-list.component";
import * as i2 from "@angular/common";
import * as i3 from "../core/addon/string_template_outlet";
const _c0 = ["*"];
function BpsListItemComponent_ng_template_0_ul_0_li_1_ng_template_1_Template(rf, ctx) { }
function BpsListItemComponent_ng_template_0_ul_0_li_1_em_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "em", 9);
} }
function BpsListItemComponent_ng_template_0_ul_0_li_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtemplate(1, BpsListItemComponent_ng_template_0_ul_0_li_1_ng_template_1_Template, 0, 0, "ng-template", 7)(2, BpsListItemComponent_ng_template_0_ul_0_li_1_em_2_Template, 1, 0, "em", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", i_r1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !last_r2);
} }
function BpsListItemComponent_ng_template_0_ul_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 5);
    i0.ɵɵtemplate(1, BpsListItemComponent_ng_template_0_ul_0_li_1_Template, 3, 2, "li", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.bpsActions);
} }
function BpsListItemComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BpsListItemComponent_ng_template_0_ul_0_Template, 2, 1, "ul", 4);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", (ctx_r2.bpsActions == null ? null : ctx_r2.bpsActions.length) > 0);
} }
function BpsListItemComponent_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵlistener("click", function BpsListItemComponent_ng_template_2_ng_container_2_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onDelete()); })("mouseenter", function BpsListItemComponent_ng_template_2_ng_container_2_Template_div_mouseenter_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onDeleteHover(true)); })("mouseleave", function BpsListItemComponent_ng_template_2_ng_container_2_Template_div_mouseleave_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onDeleteHover(false)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 13)(3, "defs")(4, "style");
    i0.ɵɵtext(5, " .prefix__cls-1 { fill: #fff } ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "g", 14);
    i0.ɵɵelement(7, "rect", 15)(8, "rect", 16);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} }
function BpsListItemComponent_ng_template_2_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.bpsContent);
} }
function BpsListItemComponent_ng_template_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsListItemComponent_ng_template_2_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r2.bpsContent);
} }
function BpsListItemComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵlistener("mouseenter", function BpsListItemComponent_ng_template_2_Template_div_mouseenter_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onHover(true)); })("mouseleave", function BpsListItemComponent_ng_template_2_Template_div_mouseleave_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onHover(false)); });
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, BpsListItemComponent_ng_template_2_ng_container_2_Template, 9, 0, "ng-container", 11)(3, BpsListItemComponent_ng_template_2_ng_container_3_Template, 2, 1, "ng-container", 11);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.bpsDelete);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.bpsContent);
} }
function BpsListItemComponent_ng_template_4_ng_template_0_Template(rf, ctx) { }
function BpsListItemComponent_ng_template_4_ng_template_1_Template(rf, ctx) { }
function BpsListItemComponent_ng_template_4_ng_template_2_Template(rf, ctx) { }
function BpsListItemComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BpsListItemComponent_ng_template_4_ng_template_0_Template, 0, 0, "ng-template", 7)(1, BpsListItemComponent_ng_template_4_ng_template_1_Template, 0, 0, "ng-template", 7)(2, BpsListItemComponent_ng_template_4_ng_template_2_Template, 0, 0, "ng-template", 7);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const actionsTpl_r6 = i0.ɵɵreference(1);
    const contentTpl_r7 = i0.ɵɵreference(3);
    i0.ɵɵproperty("ngTemplateOutlet", contentTpl_r7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.bpsExtra);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", actionsTpl_r6);
} }
function BpsListItemComponent_ng_container_6_ng_template_2_Template(rf, ctx) { }
function BpsListItemComponent_ng_container_6_ng_template_3_Template(rf, ctx) { }
function BpsListItemComponent_ng_container_6_ng_template_5_Template(rf, ctx) { }
function BpsListItemComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵtemplate(2, BpsListItemComponent_ng_container_6_ng_template_2_Template, 0, 0, "ng-template", 7)(3, BpsListItemComponent_ng_container_6_ng_template_3_Template, 0, 0, "ng-template", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 19);
    i0.ɵɵtemplate(5, BpsListItemComponent_ng_container_6_ng_template_5_Template, 0, 0, "ng-template", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const actionsTpl_r6 = i0.ɵɵreference(1);
    const contentTpl_r7 = i0.ɵɵreference(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", contentTpl_r7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", actionsTpl_r6);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.bpsExtra);
} }
export class BpsListItemComponent {
    get isVerticalAndExtra() {
        return this.itemLayout === 'vertical' && !!this.bpsExtra;
    }
    onDeleteHover(event) {
        this._onDeleteHover = event;
        this.ondeletehover.emit(event);
    }
    onHover(event) {
        this.hover.emit(event);
    }
    onDelete() {
        this.ondelete.emit();
    }
    constructor(elementRef, renderer, parentComp, cdr) {
        this.parentComp = parentComp;
        this.cdr = cdr;
        this._onDeleteHover = false;
        this.bpsActions = [];
        this.bpsNoFlex = false;
        this.bpsDelete = false;
        this.ondelete = new EventEmitter();
        this.ondeletehover = new EventEmitter();
        this.hover = new EventEmitter();
        renderer.addClass(elementRef.nativeElement, 'ant-list-item');
    }
    ngAfterViewInit() {
        this.itemLayout$ = this.parentComp.itemLayoutNotify$.subscribe(val => {
            this.itemLayout = val;
            this.cdr.detectChanges();
        });
    }
    ngOnDestroy() {
        if (this.itemLayout$) {
            this.itemLayout$.unsubscribe();
        }
    }
    static { this.ɵfac = function BpsListItemComponent_Factory(t) { return new (t || BpsListItemComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.BpsListComponent), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsListItemComponent, selectors: [["bps-list-item"], ["", "bps-list-item", ""]], contentQueries: function BpsListItemComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, BpsListItemMetaComponent, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.metas = _t);
        } }, hostVars: 4, hostBindings: function BpsListItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("bps-delete-icon-hovered", ctx._onDeleteHover)("ant-list-item-no-flex", ctx.bpsNoFlex);
        } }, inputs: { bpsActions: "bpsActions", bpsContent: "bpsContent", bpsExtra: "bpsExtra", bpsNoFlex: "bpsNoFlex", bpsDelete: "bpsDelete" }, outputs: { ondelete: "ondelete", ondeletehover: "ondeletehover", hover: "hover" }, exportAs: ["bpsListItem"], ngContentSelectors: _c0, decls: 7, vars: 2, consts: [["actionsTpl", ""], ["contentTpl", ""], ["simpleTpl", ""], [4, "ngIf", "ngIfElse"], ["class", "ant-list-item-action", 4, "ngIf"], [1, "ant-list-item-action"], [4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], ["class", "ant-list-item-action-split", 4, "ngIf"], [1, "ant-list-item-action-split"], [1, "bps-list-item-content", 3, "mouseenter", "mouseleave"], [4, "ngIf"], [1, "bps-delete-list-icon", 3, "click", "mouseenter", "mouseleave"], ["xmlns", "http://www.w3.org/2000/svg", "width", "10.609", "height", "10.609", "viewBox", "0 0 10.609 10.609"], ["id", "prefix__sps_x_icon_deleteglass_white", "transform", "rotate(45 799.93 -996.928)"], ["id", "prefix__Rectangle_1881", "width", "2", "height", "13", "data-name", "Rectangle 1881", "rx", "1", "transform", "translate(945.732 267.142)", 1, "prefix__cls-1"], ["id", "prefix__Rectangle_1882", "width", "2", "height", "13", "data-name", "Rectangle 1882", "rx", "1", "transform", "rotate(-90 607.436 -332.794)", 1, "prefix__cls-1"], [4, "nzStringTemplateOutlet"], [1, "ant-list-item-main"], [1, "ant-list-item-extra"]], template: function BpsListItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, BpsListItemComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(2, BpsListItemComponent_ng_template_2_Template, 4, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(4, BpsListItemComponent_ng_template_4_Template, 3, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(6, BpsListItemComponent_ng_container_6_Template, 6, 3, "ng-container", 3);
        } if (rf & 2) {
            const simpleTpl_r8 = i0.ɵɵreference(5);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.isVerticalAndExtra)("ngIfElse", simpleTpl_r8);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i3.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], BpsListItemComponent.prototype, "bpsNoFlex", void 0);
__decorate([
    InputBoolean()
], BpsListItemComponent.prototype, "bpsDelete", void 0);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsListItemComponent, [{
        type: Component,
        args: [{ selector: 'bps-list-item, [bps-list-item]', exportAs: 'bpsListItem', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                    '[class.bps-delete-icon-hovered]': '_onDeleteHover'
                }, template: "<ng-template #actionsTpl>\r\n  <ul *ngIf=\"bpsActions?.length > 0\" class=\"ant-list-item-action\">\r\n    <li *ngFor=\"let i of bpsActions; let last=last;\">\r\n      <ng-template [ngTemplateOutlet]=\"i\"></ng-template>\r\n      <em *ngIf=\"!last\" class=\"ant-list-item-action-split\"></em>\r\n    </li>\r\n  </ul>\r\n</ng-template>\r\n<ng-template #contentTpl>\r\n  <div class=\"bps-list-item-content\"\r\n       (mouseenter)=\"onHover(true)\"\r\n       (mouseleave)=\"onHover(false)\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n  <ng-container *ngIf=\"bpsDelete\">\r\n    <div class=\"bps-delete-list-icon\"\r\n         (click)=\"onDelete()\"\r\n         (mouseenter)=\"onDeleteHover(true)\"\r\n         (mouseleave)=\"onDeleteHover(false)\">\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10.609\" height=\"10.609\" viewBox=\"0 0 10.609 10.609\">\r\n        <defs>\r\n          <style>\r\n\r\n            .prefix__cls-1 {\r\n              fill: #fff\r\n            }\r\n          </style>\r\n        </defs>\r\n        <g id=\"prefix__sps_x_icon_deleteglass_white\" transform=\"rotate(45 799.93 -996.928)\">\r\n          <rect id=\"prefix__Rectangle_1881\" width=\"2\" height=\"13\" class=\"prefix__cls-1\" data-name=\"Rectangle 1881\" rx=\"1\" transform=\"translate(945.732 267.142)\" />\r\n          <rect id=\"prefix__Rectangle_1882\" width=\"2\" height=\"13\" class=\"prefix__cls-1\" data-name=\"Rectangle 1882\" rx=\"1\" transform=\"rotate(-90 607.436 -332.794)\" />\r\n        </g>\r\n      </svg>\r\n    </div>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"bpsContent\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsContent\">{{ bpsContent }}</ng-container>\r\n  </ng-container>\r\n</ng-template>\r\n<ng-template #simpleTpl>\r\n  <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\r\n  <ng-template [ngTemplateOutlet]=\"bpsExtra\"></ng-template>\r\n  <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\r\n</ng-template>\r\n<ng-container *ngIf=\"isVerticalAndExtra; else simpleTpl\">\r\n  <div class=\"ant-list-item-main\">\r\n    <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\r\n    <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\r\n  </div>\r\n  <div class=\"ant-list-item-extra\">\r\n    <ng-template [ngTemplateOutlet]=\"bpsExtra\"></ng-template>\r\n  </div>\r\n</ng-container>\r\n" }]
    }], () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.BpsListComponent }, { type: i0.ChangeDetectorRef }], { metas: [{
            type: ContentChildren,
            args: [BpsListItemMetaComponent]
        }], bpsActions: [{
            type: Input
        }], bpsContent: [{
            type: Input
        }], bpsExtra: [{
            type: Input
        }], bpsNoFlex: [{
            type: Input
        }, {
            type: HostBinding,
            args: ['class.ant-list-item-no-flex']
        }], bpsDelete: [{
            type: Input
        }], ondelete: [{
            type: Output
        }], ondeletehover: [{
            type: Output
        }], hover: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsListItemComponent, { className: "BpsListItemComponent", filePath: "lib\\components\\bps-list\\bps-list-item.component.ts", lineNumber: 36 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWxpc3QtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1saXN0L2Jwcy1saXN0LWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtbGlzdC9icHMtbGlzdC1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxlQUFlLEVBRWYsV0FBVyxFQUNYLEtBQUssRUFLTCxpQkFBaUIsRUFDakIsWUFBWSxFQUNaLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFJdkQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7O0lDakJwRSx3QkFBMEQ7OztJQUY1RCwwQkFBaUQ7SUFFL0MsQUFEQSw2R0FBb0MsOEVBQ2lCO0lBQ3ZELGlCQUFLOzs7O0lBRlUsY0FBc0I7SUFBdEIsdUNBQXNCO0lBQzlCLGNBQVc7SUFBWCwrQkFBVzs7O0lBSHBCLDZCQUFnRTtJQUM5RCxzRkFBaUQ7SUFJbkQsaUJBQUs7OztJQUplLGNBQWU7SUFBZiwyQ0FBZTs7O0lBRG5DLGlGQUFnRTs7O0lBQTNELHdGQUE0Qjs7OztJQWFqQyw2QkFBZ0M7SUFDOUIsK0JBR3lDO0lBQXBDLEFBREEsQUFEQSxxTUFBUyxpQkFBVSxLQUFDLGtNQUNOLHFCQUFjLElBQUksQ0FBQyxLQUFDLGtNQUNwQixxQkFBYyxLQUFLLENBQUMsS0FBQzs7SUFHbEMsQUFERixBQURGLCtCQUFtRyxXQUMzRixZQUNHO0lBRUwsK0NBR0Y7SUFDRixBQURFLGlCQUFRLEVBQ0g7SUFDUCw2QkFBb0Y7SUFFbEYsQUFEQSwyQkFBeUosZUFDRTtJQUdqSyxBQURFLEFBREUsaUJBQUksRUFDQSxFQUNGOzs7O0lBR04sNkJBQW1EO0lBQUEsWUFBZ0I7Ozs7SUFBaEIsY0FBZ0I7SUFBaEIsdUNBQWdCOzs7SUFEckUsNkJBQWlDO0lBQy9CLHFIQUFtRDs7OztJQUFwQyxjQUFrQztJQUFsQywwREFBa0M7Ozs7SUEzQm5ELCtCQUVtQztJQUE5QixBQURBLCtMQUFjLGVBQVEsSUFBSSxDQUFDLEtBQUMsa0xBQ2QsZUFBUSxLQUFLLENBQUMsS0FBQztJQUNoQyxrQkFBeUI7SUFDM0IsaUJBQU07SUFzQk4sQUFyQkEsc0dBQWdDLHlGQXFCQzs7O0lBckJsQixlQUFlO0lBQWYsdUNBQWU7SUFxQmYsY0FBZ0I7SUFBaEIsd0NBQWdCOzs7Ozs7SUFPL0IsQUFEQSxBQURBLG1HQUE2QyxzRkFDRixzRkFDRTs7Ozs7SUFGaEMsZ0RBQStCO0lBQy9CLGNBQTZCO0lBQTdCLGtEQUE2QjtJQUM3QixjQUErQjtJQUEvQixnREFBK0I7Ozs7OztJQUU5Qyw2QkFBeUQ7SUFDdkQsK0JBQWdDO0lBRTlCLEFBREEsb0dBQTZDLHVGQUNBO0lBQy9DLGlCQUFNO0lBQ04sK0JBQWlDO0lBQy9CLG9HQUEyQztJQUM3QyxpQkFBTTs7Ozs7O0lBTFMsZUFBK0I7SUFBL0IsZ0RBQStCO0lBQy9CLGNBQStCO0lBQS9CLGdEQUErQjtJQUcvQixlQUE2QjtJQUE3QixrREFBNkI7O0FEZjlDLE1BQU0sT0FBTyxvQkFBb0I7SUFrQi9CLElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDM0QsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFLO1FBQ2pCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBSztRQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsWUFDRSxVQUFzQixFQUN0QixRQUFtQixFQUNYLFVBQTRCLEVBQzVCLEdBQXNCO1FBRHRCLGVBQVUsR0FBVixVQUFVLENBQWtCO1FBQzVCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBckNoQyxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUdkLGVBQVUsR0FBNkIsRUFBRSxDQUFDO1FBR2tCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDdkUsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVqQyxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdEQsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMzRCxVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUE0QjNELFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbkUsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7WUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqQyxDQUFDO0lBQ0gsQ0FBQztxRkF2RFUsb0JBQW9CO29FQUFwQixvQkFBb0I7d0NBSWQsd0JBQXdCOzs7OztZQUo5Qiw2REFBb0Isd0NBQUE7OztZQ1NqQyxBQUxBLEFBL0JBLEFBUkEsc0hBQXlCLHlHQVFBLHlHQStCRCwwRUFLaUM7OztZQUExQyxlQUEwQjtZQUFBLEFBQTFCLDZDQUEwQiwwQkFBYzs7O0FERGdCO0lBQTNELFlBQVksRUFBRTt1REFBd0U7QUFDdkU7SUFBZixZQUFZLEVBQUU7dURBQW1CO2lGQVRoQyxvQkFBb0I7Y0FYaEMsU0FBUzsyQkFDRSxnQ0FBZ0MsWUFDaEMsYUFBYSx1QkFFRixLQUFLLGlCQUNYLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU0sUUFDekM7b0JBQ0osaUNBQWlDLEVBQUUsZ0JBQWdCO2lCQUNwRDtrSUFNMEMsS0FBSztrQkFBL0MsZUFBZTttQkFBQyx3QkFBd0I7WUFDaEMsVUFBVTtrQkFBbEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQytELFNBQVM7a0JBQTdFLEtBQUs7O2tCQUFvQixXQUFXO21CQUFDLDZCQUE2QjtZQUMxQyxTQUFTO2tCQUFqQyxLQUFLO1lBRUksUUFBUTtrQkFBakIsTUFBTTtZQUNHLGFBQWE7a0JBQXRCLE1BQU07WUFDRyxLQUFLO2tCQUFkLE1BQU07O2tGQWJJLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE91dHB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTnpEaXJlY3Rpb25WSFR5cGUgfSBmcm9tICcuLi9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgQnBzTGlzdEl0ZW1NZXRhQ29tcG9uZW50IH0gZnJvbSAnLi9icHMtbGlzdC1pdGVtLW1ldGEuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnBzTGlzdENvbXBvbmVudCB9IGZyb20gJy4vYnBzLWxpc3QuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnBzLWxpc3QtaXRlbSwgW2Jwcy1saXN0LWl0ZW1dJyxcclxuICBleHBvcnRBczogJ2Jwc0xpc3RJdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnBzLWxpc3QtaXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmJwcy1kZWxldGUtaWNvbi1ob3ZlcmVkXSc6ICdfb25EZWxldGVIb3ZlcidcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNMaXN0SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIF9vbkRlbGV0ZUhvdmVyID0gZmFsc2U7XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oQnBzTGlzdEl0ZW1NZXRhQ29tcG9uZW50KSBtZXRhcyE6IFF1ZXJ5TGlzdDxCcHNMaXN0SXRlbU1ldGFDb21wb25lbnQ+O1xyXG4gIEBJbnB1dCgpIGJwc0FjdGlvbnM6IEFycmF5PFRlbXBsYXRlUmVmPHZvaWQ+PiA9IFtdO1xyXG4gIEBJbnB1dCgpIGJwc0NvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGJwc0V4dHJhOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbGlzdC1pdGVtLW5vLWZsZXgnKSBicHNOb0ZsZXg6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzRGVsZXRlID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKSBvbmRlbGV0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25kZWxldGVob3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgaG92ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIHByaXZhdGUgaXRlbUxheW91dDogTnpEaXJlY3Rpb25WSFR5cGU7XHJcbiAgcHJpdmF0ZSBpdGVtTGF5b3V0JDogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBnZXQgaXNWZXJ0aWNhbEFuZEV4dHJhKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXRlbUxheW91dCA9PT0gJ3ZlcnRpY2FsJyAmJiAhIXRoaXMuYnBzRXh0cmE7XHJcbiAgfVxyXG5cclxuICBvbkRlbGV0ZUhvdmVyKGV2ZW50KSB7XHJcbiAgICB0aGlzLl9vbkRlbGV0ZUhvdmVyID0gZXZlbnQ7XHJcbiAgICB0aGlzLm9uZGVsZXRlaG92ZXIuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBvbkhvdmVyKGV2ZW50KSB7XHJcbiAgICB0aGlzLmhvdmVyLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgb25EZWxldGUoKSB7XHJcbiAgICB0aGlzLm9uZGVsZXRlLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIHBhcmVudENvbXA6IEJwc0xpc3RDb21wb25lbnQsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1saXN0LWl0ZW0nKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXRlbUxheW91dCQgPSB0aGlzLnBhcmVudENvbXAuaXRlbUxheW91dE5vdGlmeSQuc3Vic2NyaWJlKHZhbCA9PiB7XHJcbiAgICAgIHRoaXMuaXRlbUxheW91dCA9IHZhbDtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLml0ZW1MYXlvdXQkKSB7XHJcbiAgICAgIHRoaXMuaXRlbUxheW91dCQudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPG5nLXRlbXBsYXRlICNhY3Rpb25zVHBsPlxyXG4gIDx1bCAqbmdJZj1cImJwc0FjdGlvbnM/Lmxlbmd0aCA+IDBcIiBjbGFzcz1cImFudC1saXN0LWl0ZW0tYWN0aW9uXCI+XHJcbiAgICA8bGkgKm5nRm9yPVwibGV0IGkgb2YgYnBzQWN0aW9uczsgbGV0IGxhc3Q9bGFzdDtcIj5cclxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImlcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICA8ZW0gKm5nSWY9XCIhbGFzdFwiIGNsYXNzPVwiYW50LWxpc3QtaXRlbS1hY3Rpb24tc3BsaXRcIj48L2VtPlxyXG4gICAgPC9saT5cclxuICA8L3VsPlxyXG48L25nLXRlbXBsYXRlPlxyXG48bmctdGVtcGxhdGUgI2NvbnRlbnRUcGw+XHJcbiAgPGRpdiBjbGFzcz1cImJwcy1saXN0LWl0ZW0tY29udGVudFwiXHJcbiAgICAgICAobW91c2VlbnRlcik9XCJvbkhvdmVyKHRydWUpXCJcclxuICAgICAgIChtb3VzZWxlYXZlKT1cIm9uSG92ZXIoZmFsc2UpXCI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImJwc0RlbGV0ZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImJwcy1kZWxldGUtbGlzdC1pY29uXCJcclxuICAgICAgICAgKGNsaWNrKT1cIm9uRGVsZXRlKClcIlxyXG4gICAgICAgICAobW91c2VlbnRlcik9XCJvbkRlbGV0ZUhvdmVyKHRydWUpXCJcclxuICAgICAgICAgKG1vdXNlbGVhdmUpPVwib25EZWxldGVIb3ZlcihmYWxzZSlcIj5cclxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMC42MDlcIiBoZWlnaHQ9XCIxMC42MDlcIiB2aWV3Qm94PVwiMCAwIDEwLjYwOSAxMC42MDlcIj5cclxuICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgIDxzdHlsZT5cclxuXHJcbiAgICAgICAgICAgIC5wcmVmaXhfX2Nscy0xIHtcclxuICAgICAgICAgICAgICBmaWxsOiAjZmZmXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgIDxnIGlkPVwicHJlZml4X19zcHNfeF9pY29uX2RlbGV0ZWdsYXNzX3doaXRlXCIgdHJhbnNmb3JtPVwicm90YXRlKDQ1IDc5OS45MyAtOTk2LjkyOClcIj5cclxuICAgICAgICAgIDxyZWN0IGlkPVwicHJlZml4X19SZWN0YW5nbGVfMTg4MVwiIHdpZHRoPVwiMlwiIGhlaWdodD1cIjEzXCIgY2xhc3M9XCJwcmVmaXhfX2Nscy0xXCIgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDE4ODFcIiByeD1cIjFcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTQ1LjczMiAyNjcuMTQyKVwiIC8+XHJcbiAgICAgICAgICA8cmVjdCBpZD1cInByZWZpeF9fUmVjdGFuZ2xlXzE4ODJcIiB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIxM1wiIGNsYXNzPVwicHJlZml4X19jbHMtMVwiIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSAxODgyXCIgcng9XCIxXCIgdHJhbnNmb3JtPVwicm90YXRlKC05MCA2MDcuNDM2IC0zMzIuNzk0KVwiIC8+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJicHNDb250ZW50XCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiYnBzQ29udGVudFwiPnt7IGJwc0NvbnRlbnQgfX08L25nLWNvbnRhaW5lcj5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuPG5nLXRlbXBsYXRlICNzaW1wbGVUcGw+XHJcbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRlbnRUcGxcIj48L25nLXRlbXBsYXRlPlxyXG4gIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJicHNFeHRyYVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImFjdGlvbnNUcGxcIj48L25nLXRlbXBsYXRlPlxyXG48L25nLXRlbXBsYXRlPlxyXG48bmctY29udGFpbmVyICpuZ0lmPVwiaXNWZXJ0aWNhbEFuZEV4dHJhOyBlbHNlIHNpbXBsZVRwbFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtbGlzdC1pdGVtLW1haW5cIj5cclxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50VHBsXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJhY3Rpb25zVHBsXCI+PC9uZy10ZW1wbGF0ZT5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiYW50LWxpc3QtaXRlbS1leHRyYVwiPlxyXG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJwc0V4dHJhXCI+PC9uZy10ZW1wbGF0ZT5cclxuICA8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcbiJdfQ==