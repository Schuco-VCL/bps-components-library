import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { BehaviorSubject } from 'rxjs';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import * as i0 from "@angular/core";
import * as i1 from "../core/services/update-host-class.service";
import * as i2 from "@angular/common";
import * as i3 from "../core/addon/string_template_outlet";
import * as i4 from "ng-zorro-antd/empty";
import * as i5 from "ng-zorro-antd/grid";
import * as i6 from "ng-zorro-antd/spin";
const _c0 = ["*"];
const _c1 = (a0, a1) => ({ $implicit: a0, index: a1 });
function BpsListComponent_ng_container_0_ng_template_1_div_0_ng_container_1_ng_template_1_Template(rf, ctx) { }
function BpsListComponent_ng_container_0_ng_template_1_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsListComponent_ng_container_0_ng_template_1_div_0_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.bpsRenderItem)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c1, item_r1, index_r2));
} }
function BpsListComponent_ng_container_0_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, BpsListComponent_ng_container_0_ng_template_1_div_0_ng_container_1_Template, 2, 5, "ng-container", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.bpsDataSource);
} }
function BpsListComponent_ng_container_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BpsListComponent_ng_container_0_ng_template_1_div_0_Template, 2, 1, "div", 7);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r2.bpsDataSource.length > 0);
} }
function BpsListComponent_ng_container_0_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.bpsHeader);
} }
function BpsListComponent_ng_container_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, BpsListComponent_ng_container_0_div_3_ng_container_1_Template, 2, 1, "ng-container", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r2.bpsHeader);
} }
function BpsListComponent_ng_container_0_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} if (rf & 2) {
    i0.ɵɵstyleProp("min-height", 53, "px");
} }
function BpsListComponent_ng_container_0_ng_container_5_div_2_div_1_ng_template_1_Template(rf, ctx) { }
function BpsListComponent_ng_container_0_ng_container_5_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, BpsListComponent_ng_container_0_ng_container_5_div_2_div_1_ng_template_1_Template, 0, 0, "ng-template", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const index_r5 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("nzSpan", ctx_r2.bpsGrid.span)("nzXs", ctx_r2.bpsGrid.xs)("nzSm", ctx_r2.bpsGrid.sm)("nzMd", ctx_r2.bpsGrid.md)("nzLg", ctx_r2.bpsGrid.lg)("nzXl", ctx_r2.bpsGrid.xl)("nzXXl", ctx_r2.bpsGrid.xxl);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.bpsRenderItem)("ngTemplateOutletContext", i0.ɵɵpureFunction2(9, _c1, item_r4, index_r5));
} }
function BpsListComponent_ng_container_0_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtemplate(1, BpsListComponent_ng_container_0_ng_container_5_div_2_div_1_Template, 2, 12, "div", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("nzGutter", ctx_r2.bpsGrid.gutter);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.bpsDataSource);
} }
function BpsListComponent_ng_container_0_ng_container_5_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵelement(1, "nz-embed-empty", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzComponentName", "list")("specificContent", ctx_r2.bpsNoResult);
} }
function BpsListComponent_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsListComponent_ng_container_0_ng_container_5_div_1_Template, 1, 2, "div", 13)(2, BpsListComponent_ng_container_0_ng_container_5_div_2_Template, 2, 2, "div", 14)(3, BpsListComponent_ng_container_0_ng_container_5_div_3_Template, 2, 2, "div", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const itemsTpl_r6 = i0.ɵɵreference(2);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.bpsLoading && ctx_r2.bpsDataSource.length === 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.bpsGrid)("ngIfElse", itemsTpl_r6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.bpsLoading && ctx_r2.bpsDataSource.length === 0);
} }
function BpsListComponent_ng_container_0_div_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.bpsFooter);
} }
function BpsListComponent_ng_container_0_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵtemplate(1, BpsListComponent_ng_container_0_div_7_ng_container_1_Template, 2, 1, "ng-container", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r2.bpsFooter);
} }
function BpsListComponent_ng_container_0_ng_template_8_Template(rf, ctx) { }
function BpsListComponent_ng_container_0_div_9_ng_template_1_Template(rf, ctx) { }
function BpsListComponent_ng_container_0_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtemplate(1, BpsListComponent_ng_container_0_div_9_ng_template_1_Template, 0, 0, "ng-template", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.bpsPagination);
} }
function BpsListComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsListComponent_ng_container_0_ng_template_1_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(3, BpsListComponent_ng_container_0_div_3_Template, 2, 1, "div", 2);
    i0.ɵɵelementStart(4, "nz-spin", 3);
    i0.ɵɵtemplate(5, BpsListComponent_ng_container_0_ng_container_5_Template, 4, 4, "ng-container", 1);
    i0.ɵɵprojection(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, BpsListComponent_ng_container_0_div_7_Template, 2, 1, "div", 4)(8, BpsListComponent_ng_container_0_ng_template_8_Template, 0, 0, "ng-template", 5)(9, BpsListComponent_ng_container_0_div_9_Template, 2, 1, "div", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r2.bpsHeader);
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzSpinning", ctx_r2.bpsLoading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.bpsDataSource);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.bpsFooter);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.bpsLoadMore);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.bpsPagination);
} }
export class BpsListComponent {
    _setClassMap() {
        const classMap = {
            ['bps-cmacs-custom-scrollbar']: true,
            [this.prefixCls]: true,
            [`bps-list-type-${this.bpsListType}`]: true,
            [`${this.prefixCls}-vertical`]: this.bpsItemLayout === 'vertical',
            [`${this.prefixCls}-lg`]: this.bpsSize === 'large',
            [`${this.prefixCls}-sm`]: this.bpsSize === 'small',
            [`${this.prefixCls}-split`]: this.bpsSplit,
            [`${this.prefixCls}-bordered`]: this.bpsBordered,
            [`${this.prefixCls}-loading`]: this.bpsLoading,
            [`${this.prefixCls}-grid`]: this.bpsGrid,
            [`${this.prefixCls}-something-after-last-item`]: !!(this.bpsLoadMore || this.bpsPagination || this.bpsFooter)
        };
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    }
    get itemLayoutNotify$() {
        return this.itemLayoutNotifySource.asObservable();
    }
    constructor(el, updateHostClassService) {
        this.el = el;
        this.updateHostClassService = updateHostClassService;
        this.bpsBordered = false;
        this.bpsDisabled = false;
        this.bpsListType = 'variation1';
        this.bpsItemLayout = 'horizontal';
        this.bpsLoading = false;
        this.bpsSize = 'default';
        this.bpsSplit = true;
        // #endregion
        // #region styles
        this.prefixCls = 'ant-list';
        // #endregion
        this.itemLayoutNotifySource = new BehaviorSubject(this.bpsItemLayout);
    }
    ngOnInit() {
        this._setClassMap();
    }
    ngOnChanges(changes) {
        this._setClassMap();
        if (changes.bpsItemLayout) {
            this.itemLayoutNotifySource.next(this.bpsItemLayout);
        }
    }
    ngOnDestroy() {
        this.itemLayoutNotifySource.unsubscribe();
    }
    static { this.ɵfac = function BpsListComponent_Factory(t) { return new (t || BpsListComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsListComponent, selectors: [["bps-list"], ["", "bps-list", ""]], inputs: { bpsDataSource: "bpsDataSource", bpsBordered: "bpsBordered", bpsDisabled: "bpsDisabled", bpsGrid: "bpsGrid", bpsListType: "bpsListType", bpsHeader: "bpsHeader", bpsFooter: "bpsFooter", bpsItemLayout: "bpsItemLayout", bpsRenderItem: "bpsRenderItem", bpsLoading: "bpsLoading", bpsLoadMore: "bpsLoadMore", bpsPagination: "bpsPagination", bpsSize: "bpsSize", bpsSplit: "bpsSplit", bpsNoResult: "bpsNoResult" }, exportAs: ["bpsList"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService]), i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 1, consts: [["itemsTpl", ""], [4, "ngIf"], ["class", "ant-list-header", 4, "ngIf"], [3, "nzSpinning"], ["class", "ant-list-footer", 4, "ngIf"], [3, "ngTemplateOutlet"], ["class", "ant-list-pagination", 4, "ngIf"], ["class", "ant-list-items", 4, "ngIf"], [1, "ant-list-items"], [4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-list-header"], [4, "nzStringTemplateOutlet"], [3, "min-height", 4, "ngIf"], ["nz-row", "", 3, "nzGutter", 4, "ngIf", "ngIfElse"], ["class", "ant-list-empty-text", 4, "ngIf"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl", 4, "ngFor", "ngForOf"], ["nz-col", "", 3, "nzSpan", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], [1, "ant-list-empty-text"], [3, "nzComponentName", "specificContent"], [1, "ant-list-footer"], [1, "ant-list-pagination"]], template: function BpsListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, BpsListComponent_ng_container_0_Template, 10, 6, "ng-container", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.bpsDisabled);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i3.NzStringTemplateOutletDirective, i4.NzEmbedEmptyComponent, i5.NzColDirective, i5.NzRowDirective, i6.NzSpinComponent], styles: [".ant-list-bordered{width:217px!important;max-width:217px!important;height:80px!important;max-height:80px!important;overflow-y:scroll!important;overflow-x:hidden!important;padding:5px!important;border-radius:4px!important;border:solid 1px #474747!important}.ant-list-bordered .ant-list-item{width:200px!important;height:20px!important;border-radius:10px!important;font-size:11px!important;font-weight:300!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:left!important;color:#fff!important;margin-bottom:2px!important;padding:0 8px 2px 9px!important}.ant-list-bordered .ant-list-item:hover{cursor:pointer}.ant-list-bordered.bps-list-type-variation1 .ant-list-item{background-color:#005068!important}.ant-list-bordered.bps-list-type-variation2 .ant-list-item{background-color:#00a2d1!important}.ant-list-bordered.bps-list-type-variation3 .ant-list-item{background-color:#005681!important}.ant-list-bordered.bps-list-type-variation4 .ant-list-item{background-color:#06809f!important}.ant-list-bordered.bps-list-type-variation5 .ant-list-item{background-color:#445c67!important}.ant-list-bordered.bps-list-type-variation6 .ant-list-item{background-color:#778d98!important}.ant-list-split .ant-list-item{border-bottom:unset}.bps-delete-list-icon{position:relative;float:right;top:50%;transform:translateY(-50%)}.bps-list-item-content{position:relative;float:left;top:50%;width:calc(100% - 8px);max-width:calc(100% - 8px);overflow:hidden;text-overflow:ellipsis;transform:translateY(-50%);white-space:nowrap;padding-right:5px;margin-top:-4px}.ant-list-bordered .ant-list-item.bps-delete-icon-hovered{background-color:#bc0000!important}\n", "bps-list,bps-list nz-spin{display:block}\n"], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], BpsListComponent.prototype, "bpsBordered", void 0);
__decorate([
    InputBoolean()
], BpsListComponent.prototype, "bpsDisabled", void 0);
__decorate([
    InputBoolean()
], BpsListComponent.prototype, "bpsLoading", void 0);
__decorate([
    InputBoolean()
], BpsListComponent.prototype, "bpsSplit", void 0);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsListComponent, [{
        type: Component,
        args: [{ selector: 'bps-list, [bps-list]', exportAs: 'bpsList', providers: [NzUpdateHostClassService], preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container *ngIf=\"!bpsDisabled\">\r\n  <ng-template #itemsTpl>\r\n    <div class=\"ant-list-items\" *ngIf=\"bpsDataSource.length > 0\">\r\n      <ng-container *ngFor=\"let item of bpsDataSource; let index = index\">\r\n        <ng-template [ngTemplateOutlet]=\"bpsRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\r\n      </ng-container>\r\n    </div>\r\n  </ng-template>\r\n  <div *ngIf=\"bpsHeader\" class=\"ant-list-header\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsHeader\">{{ bpsHeader }}</ng-container>\r\n  </div>\r\n  <nz-spin [nzSpinning]=\"bpsLoading\">\r\n    <ng-container *ngIf=\"bpsDataSource\">\r\n      <div *ngIf=\"bpsLoading && bpsDataSource.length === 0\" [style.min-height.px]=\"53\"></div>\r\n      <div *ngIf=\"bpsGrid; else itemsTpl\" nz-row [nzGutter]=\"bpsGrid.gutter\">\r\n        <div nz-col [nzSpan]=\"bpsGrid.span\" [nzXs]=\"bpsGrid.xs\" [nzSm]=\"bpsGrid.sm\" [nzMd]=\"bpsGrid.md\" [nzLg]=\"bpsGrid.lg\" [nzXl]=\"bpsGrid.xl\"\r\n             [nzXXl]=\"bpsGrid.xxl\" *ngFor=\"let item of bpsDataSource; let index = index\">\r\n          <ng-template [ngTemplateOutlet]=\"bpsRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!bpsLoading && bpsDataSource.length === 0\" class=\"ant-list-empty-text\">\r\n        <nz-embed-empty [nzComponentName]=\"'list'\" [specificContent]=\"bpsNoResult\"></nz-embed-empty>\r\n      </div>\r\n    </ng-container>\r\n    <ng-content></ng-content>\r\n  </nz-spin>\r\n  <div *ngIf=\"bpsFooter\" class=\"ant-list-footer\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsFooter\">{{ bpsFooter }}</ng-container>\r\n  </div>\r\n  <ng-template [ngTemplateOutlet]=\"bpsLoadMore\"></ng-template>\r\n  <div *ngIf=\"bpsPagination\" class=\"ant-list-pagination\">\r\n    <ng-template [ngTemplateOutlet]=\"bpsPagination\"></ng-template>\r\n  </div>\r\n</ng-container>\r\n", styles: [".ant-list-bordered{width:217px!important;max-width:217px!important;height:80px!important;max-height:80px!important;overflow-y:scroll!important;overflow-x:hidden!important;padding:5px!important;border-radius:4px!important;border:solid 1px #474747!important}.ant-list-bordered .ant-list-item{width:200px!important;height:20px!important;border-radius:10px!important;font-size:11px!important;font-weight:300!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:left!important;color:#fff!important;margin-bottom:2px!important;padding:0 8px 2px 9px!important}.ant-list-bordered .ant-list-item:hover{cursor:pointer}.ant-list-bordered.bps-list-type-variation1 .ant-list-item{background-color:#005068!important}.ant-list-bordered.bps-list-type-variation2 .ant-list-item{background-color:#00a2d1!important}.ant-list-bordered.bps-list-type-variation3 .ant-list-item{background-color:#005681!important}.ant-list-bordered.bps-list-type-variation4 .ant-list-item{background-color:#06809f!important}.ant-list-bordered.bps-list-type-variation5 .ant-list-item{background-color:#445c67!important}.ant-list-bordered.bps-list-type-variation6 .ant-list-item{background-color:#778d98!important}.ant-list-split .ant-list-item{border-bottom:unset}.bps-delete-list-icon{position:relative;float:right;top:50%;transform:translateY(-50%)}.bps-list-item-content{position:relative;float:left;top:50%;width:calc(100% - 8px);max-width:calc(100% - 8px);overflow:hidden;text-overflow:ellipsis;transform:translateY(-50%);white-space:nowrap;padding-right:5px;margin-top:-4px}.ant-list-bordered .ant-list-item.bps-delete-icon-hovered{background-color:#bc0000!important}\n", "bps-list,bps-list nz-spin{display:block}\n"] }]
    }], () => [{ type: i0.ElementRef }, { type: i1.NzUpdateHostClassService }], { bpsDataSource: [{
            type: Input
        }], bpsBordered: [{
            type: Input
        }], bpsDisabled: [{
            type: Input
        }], bpsGrid: [{
            type: Input
        }], bpsListType: [{
            type: Input
        }], bpsHeader: [{
            type: Input
        }], bpsFooter: [{
            type: Input
        }], bpsItemLayout: [{
            type: Input
        }], bpsRenderItem: [{
            type: Input
        }], bpsLoading: [{
            type: Input
        }], bpsLoadMore: [{
            type: Input
        }], bpsPagination: [{
            type: Input
        }], bpsSize: [{
            type: Input
        }], bpsSplit: [{
            type: Input
        }], bpsNoResult: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsListComponent, { className: "BpsListComponent", filePath: "lib\\components\\bps-list\\bps-list.component.ts", lineNumber: 40 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtbGlzdC9icHMtbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1saXN0L2Jwcy1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxLQUFLLEVBTUwsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRW5ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOzs7Ozs7Ozs7Ozs7SUNiaEYsNkJBQW9FO0lBQ2xFLG9JQUE4Rzs7Ozs7O0lBQWpHLGNBQWtDO0lBQUMsQUFBbkMsdURBQWtDLDBFQUE4RDs7O0lBRmpILDhCQUE2RDtJQUMzRCxzSEFBb0U7SUFHdEUsaUJBQU07OztJQUgyQixjQUFrQjtJQUFsQiw4Q0FBa0I7OztJQURuRCw4RkFBNkQ7OztJQUFoQyxzREFBOEI7OztJQU8zRCw2QkFBa0Q7SUFBQSxZQUFlOzs7O0lBQWYsY0FBZTtJQUFmLHNDQUFlOzs7SUFEbkUsK0JBQStDO0lBQzdDLHlHQUFrRDtJQUNwRCxpQkFBTTs7O0lBRFcsY0FBaUM7SUFBakMseURBQWlDOzs7SUFJOUMsc0JBQXVGOztJQUFqQyxzQ0FBMEI7Ozs7SUFFOUUsK0JBQ2lGO0lBQy9FLDRIQUE4RztJQUNoSCxpQkFBTTs7Ozs7SUFGRCxBQUQrRyxBQUFwQixBQUFwQixBQUFwQixBQUFwQixB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Q0Usc0JBQXNCLFlBQ3RCLFNBQVMsYUFFUixDQUFDLHdCQUF3QixDQUFDLHVCQUNoQixLQUFLLGlCQUNYLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU07a0ZBY3RDLGFBQWE7a0JBQXJCLEtBQUs7WUFFbUIsV0FBVztrQkFBbkMsS0FBSztZQUVtQixXQUFXO2tCQUFuQyxLQUFLO1lBRUcsT0FBTztrQkFBZixLQUFLO1lBRUcsV0FBVztrQkFBbkIsS0FBSztZQUVHLFNBQVM7a0JBQWpCLEtBQUs7WUFFRyxTQUFTO2tCQUFqQixLQUFLO1lBRUcsYUFBYTtrQkFBckIsS0FBSztZQUVHLGFBQWE7a0JBQXJCLEtBQUs7WUFFbUIsVUFBVTtrQkFBbEMsS0FBSztZQUVHLFdBQVc7a0JBQW5CLEtBQUs7WUFFRyxhQUFhO2tCQUFyQixLQUFLO1lBRUcsT0FBTztrQkFBZixLQUFLO1lBRW1CLFFBQVE7a0JBQWhDLEtBQUs7WUFFRyxXQUFXO2tCQUFuQixLQUFLOztrRkEvQkssZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuXHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOekxpc3RHcmlkIH0gZnJvbSAnbmctem9ycm8tYW50ZC9saXN0JztcclxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTnpEaXJlY3Rpb25WSFR5cGUsIE56U2l6ZUxEU1R5cGUgfSBmcm9tICcuLi9jb3JlL3R5cGVzJztcclxuXHJcbmV4cG9ydCB0eXBlIEJwc0xpc3RUeXBlID0gJ3ZhcmlhdGlvbjEnIHwgJ3ZhcmlhdGlvbjInIHwgJ3ZhcmlhdGlvbjMnIHwgJ3ZhcmlhdGlvbjQnIHwgJ3ZhcmlhdGlvbjUnIHwgJ3ZhcmlhdGlvbjYnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicHMtbGlzdCwgW2Jwcy1saXN0XScsXHJcbiAgZXhwb3J0QXM6ICdicHNMaXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnBzLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgYnBzLWxpc3QsXHJcbiAgICAgIGJwcy1saXN0IG56LXNwaW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBzdHlsZVVybHM6IFsnLi9icHMtbGlzdC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICAvLyAjcmVnaW9uIGZpZWxkc1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBASW5wdXQoKSBicHNEYXRhU291cmNlOiBhbnlbXTtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0JvcmRlcmVkID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNEaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBicHNHcmlkOiBOekxpc3RHcmlkO1xyXG5cclxuICBASW5wdXQoKSBicHNMaXN0VHlwZTogQnBzTGlzdFR5cGUgPSAndmFyaWF0aW9uMSc7XHJcblxyXG4gIEBJbnB1dCgpIGJwc0hlYWRlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpIGJwc0Zvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcblxyXG4gIEBJbnB1dCgpIGJwc0l0ZW1MYXlvdXQ6IE56RGlyZWN0aW9uVkhUeXBlID0gJ2hvcml6b250YWwnO1xyXG5cclxuICBASW5wdXQoKSBicHNSZW5kZXJJdGVtOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0xvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgYnBzTG9hZE1vcmU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSBicHNQYWdpbmF0aW9uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KCkgYnBzU2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc1NwbGl0ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KCkgYnBzTm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gc3R5bGVzXHJcblxyXG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC1saXN0JztcclxuXHJcbiAgcHJpdmF0ZSBfc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcclxuICAgICAgWydicHMtY21hY3MtY3VzdG9tLXNjcm9sbGJhciddOiB0cnVlLFxyXG4gICAgICBbdGhpcy5wcmVmaXhDbHNdOiB0cnVlLFxyXG4gICAgICBbYGJwcy1saXN0LXR5cGUtJHt0aGlzLmJwc0xpc3RUeXBlfWBdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXZlcnRpY2FsYF06IHRoaXMuYnBzSXRlbUxheW91dCA9PT0gJ3ZlcnRpY2FsJyxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1sZ2BdOiB0aGlzLmJwc1NpemUgPT09ICdsYXJnZScsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc21gXTogdGhpcy5icHNTaXplID09PSAnc21hbGwnLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNwbGl0YF06IHRoaXMuYnBzU3BsaXQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tYm9yZGVyZWRgXTogdGhpcy5icHNCb3JkZXJlZCxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1sb2FkaW5nYF06IHRoaXMuYnBzTG9hZGluZyxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ncmlkYF06IHRoaXMuYnBzR3JpZCxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zb21ldGhpbmctYWZ0ZXItbGFzdC1pdGVtYF06ICEhKHRoaXMuYnBzTG9hZE1vcmUgfHwgdGhpcy5icHNQYWdpbmF0aW9uIHx8IHRoaXMuYnBzRm9vdGVyKVxyXG4gICAgfTtcclxuICAgIHRoaXMudXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBjbGFzc01hcCk7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIHByaXZhdGUgaXRlbUxheW91dE5vdGlmeVNvdXJjZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TnpEaXJlY3Rpb25WSFR5cGU+KHRoaXMuYnBzSXRlbUxheW91dCk7XHJcblxyXG4gIGdldCBpdGVtTGF5b3V0Tm90aWZ5JCgpOiBPYnNlcnZhYmxlPE56RGlyZWN0aW9uVkhUeXBlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtTGF5b3V0Tm90aWZ5U291cmNlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSB1cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMuX3NldENsYXNzTWFwKCk7XHJcbiAgICBpZiAoY2hhbmdlcy5icHNJdGVtTGF5b3V0KSB7XHJcbiAgICAgIHRoaXMuaXRlbUxheW91dE5vdGlmeVNvdXJjZS5uZXh0KHRoaXMuYnBzSXRlbUxheW91dCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXRlbUxheW91dE5vdGlmeVNvdXJjZS51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiIWJwc0Rpc2FibGVkXCI+XHJcbiAgPG5nLXRlbXBsYXRlICNpdGVtc1RwbD5cclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtbGlzdC1pdGVtc1wiICpuZ0lmPVwiYnBzRGF0YVNvdXJjZS5sZW5ndGggPiAwXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgYnBzRGF0YVNvdXJjZTsgbGV0IGluZGV4ID0gaW5kZXhcIj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnBzUmVuZGVySXRlbVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaXRlbSwgaW5kZXg6IGluZGV4IH1cIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbiAgPGRpdiAqbmdJZj1cImJwc0hlYWRlclwiIGNsYXNzPVwiYW50LWxpc3QtaGVhZGVyXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiYnBzSGVhZGVyXCI+e3sgYnBzSGVhZGVyIH19PC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbiAgPG56LXNwaW4gW256U3Bpbm5pbmddPVwiYnBzTG9hZGluZ1wiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImJwc0RhdGFTb3VyY2VcIj5cclxuICAgICAgPGRpdiAqbmdJZj1cImJwc0xvYWRpbmcgJiYgYnBzRGF0YVNvdXJjZS5sZW5ndGggPT09IDBcIiBbc3R5bGUubWluLWhlaWdodC5weF09XCI1M1wiPjwvZGl2PlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwiYnBzR3JpZDsgZWxzZSBpdGVtc1RwbFwiIG56LXJvdyBbbnpHdXR0ZXJdPVwiYnBzR3JpZC5ndXR0ZXJcIj5cclxuICAgICAgICA8ZGl2IG56LWNvbCBbbnpTcGFuXT1cImJwc0dyaWQuc3BhblwiIFtuelhzXT1cImJwc0dyaWQueHNcIiBbbnpTbV09XCJicHNHcmlkLnNtXCIgW256TWRdPVwiYnBzR3JpZC5tZFwiIFtuekxnXT1cImJwc0dyaWQubGdcIiBbbnpYbF09XCJicHNHcmlkLnhsXCJcclxuICAgICAgICAgICAgIFtuelhYbF09XCJicHNHcmlkLnh4bFwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGJwc0RhdGFTb3VyY2U7IGxldCBpbmRleCA9IGluZGV4XCI+XHJcbiAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnBzUmVuZGVySXRlbVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaXRlbSwgaW5kZXg6IGluZGV4IH1cIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiAqbmdJZj1cIiFicHNMb2FkaW5nICYmIGJwc0RhdGFTb3VyY2UubGVuZ3RoID09PSAwXCIgY2xhc3M9XCJhbnQtbGlzdC1lbXB0eS10ZXh0XCI+XHJcbiAgICAgICAgPG56LWVtYmVkLWVtcHR5IFtuekNvbXBvbmVudE5hbWVdPVwiJ2xpc3QnXCIgW3NwZWNpZmljQ29udGVudF09XCJicHNOb1Jlc3VsdFwiPjwvbnotZW1iZWQtZW1wdHk+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPC9uei1zcGluPlxyXG4gIDxkaXYgKm5nSWY9XCJicHNGb290ZXJcIiBjbGFzcz1cImFudC1saXN0LWZvb3RlclwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImJwc0Zvb3RlclwiPnt7IGJwc0Zvb3RlciB9fTwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG4gIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJicHNMb2FkTW9yZVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgPGRpdiAqbmdJZj1cImJwc1BhZ2luYXRpb25cIiBjbGFzcz1cImFudC1saXN0LXBhZ2luYXRpb25cIj5cclxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJicHNQYWdpbmF0aW9uXCI+PC9uZy10ZW1wbGF0ZT5cclxuICA8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcbiJdfQ==