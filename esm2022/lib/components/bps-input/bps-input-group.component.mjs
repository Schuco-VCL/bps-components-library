import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ContentChildren, Directive, Input, Optional, ViewEncapsulation } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { distinctUntilChanged, map, mergeMap, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { NzFormNoStatusService } from 'ng-zorro-antd/core/form';
import { getStatusClassNames, InputBoolean } from 'ng-zorro-antd/core/util';
import { BpsInputDirective } from './bps-input.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "ng-zorro-antd/core/form";
import * as i4 from "@angular/common";
import * as i5 from "./input-group-slot.component";
import * as i6 from "../core/form/feedback";
const _c0 = ["*"];
function BpsInputGroupComponent_span_0_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 7);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("icon", ctx_r0.bpsAddOnBeforeIcon)("template", ctx_r0.bpsAddOnBefore);
} }
function BpsInputGroupComponent_span_0_span_2_ng_template_1_Template(rf, ctx) { }
function BpsInputGroupComponent_span_0_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 8);
    i0.ɵɵtemplate(1, BpsInputGroupComponent_span_0_span_2_ng_template_1_Template, 0, 0, "ng-template", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    const affixTemplate_r2 = i0.ɵɵreference(4);
    i0.ɵɵclassProp("ant-input-affix-wrapper-disabled", ctx_r0.disabled)("ant-input-affix-wrapper-sm", ctx_r0.isSmall)("ant-input-affix-wrapper-lg", ctx_r0.isLarge)("ant-input-affix-wrapper-focused", ctx_r0.focused);
    i0.ɵɵproperty("ngClass", ctx_r0.affixInGroupStatusCls);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", affixTemplate_r2);
} }
function BpsInputGroupComponent_span_0_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 7);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("icon", ctx_r0.bpsAddOnAfterIcon)("template", ctx_r0.bpsAddOnAfter);
} }
function BpsInputGroupComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 4);
    i0.ɵɵtemplate(1, BpsInputGroupComponent_span_0_span_1_Template, 1, 2, "span", 5)(2, BpsInputGroupComponent_span_0_span_2_Template, 2, 10, "span", 6)(3, BpsInputGroupComponent_span_0_span_3_Template, 1, 2, "span", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const contentTemplate_r3 = i0.ɵɵreference(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.bpsAddOnBefore || ctx_r0.bpsAddOnBeforeIcon);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isAffix || ctx_r0.hasFeedback)("ngIfElse", contentTemplate_r3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.bpsAddOnAfter || ctx_r0.bpsAddOnAfterIcon);
} }
function BpsInputGroupComponent_ng_template_1_ng_template_0_ng_template_0_Template(rf, ctx) { }
function BpsInputGroupComponent_ng_template_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BpsInputGroupComponent_ng_template_1_ng_template_0_ng_template_0_Template, 0, 0, "ng-template", 9);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const affixTemplate_r2 = i0.ɵɵreference(4);
    i0.ɵɵproperty("ngTemplateOutlet", affixTemplate_r2);
} }
function BpsInputGroupComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BpsInputGroupComponent_ng_template_1_ng_template_0_Template, 1, 1, "ng-template", 10);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const contentTemplate_r3 = i0.ɵɵreference(6);
    i0.ɵɵproperty("ngIf", ctx_r0.isAffix)("ngIfElse", contentTemplate_r3);
} }
function BpsInputGroupComponent_ng_template_3_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 13);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("icon", ctx_r0.bpsPrefixIcon)("template", ctx_r0.bpsPrefix);
} }
function BpsInputGroupComponent_ng_template_3_ng_template_1_Template(rf, ctx) { }
function BpsInputGroupComponent_ng_template_3_span_2_bps_form_item_feedback_icon_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "bps-form-item-feedback-icon", 16);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("status", ctx_r0.status);
} }
function BpsInputGroupComponent_ng_template_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 14);
    i0.ɵɵtemplate(1, BpsInputGroupComponent_ng_template_3_span_2_bps_form_item_feedback_icon_1_Template, 1, 1, "bps-form-item-feedback-icon", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("icon", ctx_r0.bpsSuffixIcon)("template", ctx_r0.bpsSuffix);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isFeedback);
} }
function BpsInputGroupComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BpsInputGroupComponent_ng_template_3_span_0_Template, 1, 2, "span", 11)(1, BpsInputGroupComponent_ng_template_3_ng_template_1_Template, 0, 0, "ng-template", 9)(2, BpsInputGroupComponent_ng_template_3_span_2_Template, 2, 3, "span", 12);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const contentTemplate_r3 = i0.ɵɵreference(6);
    i0.ɵɵproperty("ngIf", ctx_r0.bpsPrefix || ctx_r0.bpsPrefixIcon);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", contentTemplate_r3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.bpsSuffix || ctx_r0.bpsSuffixIcon || ctx_r0.isFeedback);
} }
function BpsInputGroupComponent_ng_template_5_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵelement(1, "bps-form-item-feedback-icon", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("status", ctx_r0.status);
} }
function BpsInputGroupComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
    i0.ɵɵtemplate(1, BpsInputGroupComponent_ng_template_5_span_1_Template, 2, 1, "span", 17);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isAddOn && !ctx_r0.isAffix && ctx_r0.isFeedback);
} }
export class NzInputGroupWhitSuffixOrPrefixDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    static { this.ɵfac = function NzInputGroupWhitSuffixOrPrefixDirective_Factory(t) { return new (t || NzInputGroupWhitSuffixOrPrefixDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: NzInputGroupWhitSuffixOrPrefixDirective, selectors: [["bps-input-group", "bpsSuffix", ""], ["bps-input-group", "bpsPrefix", ""]] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzInputGroupWhitSuffixOrPrefixDirective, [{
        type: Directive,
        args: [{
                selector: `bps-input-group[bpsSuffix], bps-input-group[bpsPrefix]`
            }]
    }], () => [{ type: i0.ElementRef }], null); })();
export class BpsInputGroupComponent {
    constructor(focusMonitor, elementRef, renderer, cdr, directionality, nzFormStatusService, nzFormNoStatusService) {
        this.focusMonitor = focusMonitor;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cdr = cdr;
        this.directionality = directionality;
        this.nzFormStatusService = nzFormStatusService;
        this.nzFormNoStatusService = nzFormNoStatusService;
        this.bpsAddOnBeforeIcon = null;
        this.bpsAddOnAfterIcon = null;
        this.bpsPrefixIcon = null;
        this.bpsSuffixIcon = null;
        this.bpsStatus = '';
        this.bpsSize = 'default';
        this.bpsSearch = false;
        this.bpsCompact = false;
        this.isLarge = false;
        this.isSmall = false;
        this.isAffix = false;
        this.isAddOn = false;
        this.isFeedback = false;
        this.focused = false;
        this.disabled = false;
        this.dir = 'ltr';
        // status
        this.prefixCls = 'ant-input';
        this.affixStatusCls = {};
        this.groupStatusCls = {};
        this.affixInGroupStatusCls = {};
        this.status = '';
        this.hasFeedback = false;
        this.destroy$ = new Subject();
    }
    updateChildrenInputSize() {
        if (this.listOfNzInputDirective) {
            this.listOfNzInputDirective.forEach(item => (item.size = this.bpsSize));
        }
    }
    ngOnInit() {
        this.nzFormStatusService?.formStatusChanges
            .pipe(distinctUntilChanged((pre, cur) => {
            return pre.status === cur.status && pre.hasFeedback === cur.hasFeedback;
        }), takeUntil(this.destroy$))
            .subscribe(({ status, hasFeedback }) => {
            this.setStatusStyles(status, hasFeedback);
        });
        this.focusMonitor
            .monitor(this.elementRef, true)
            .pipe(takeUntil(this.destroy$))
            .subscribe(focusOrigin => {
            this.focused = !!focusOrigin;
            this.cdr.markForCheck();
        });
        this.dir = this.directionality.value;
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngAfterContentInit() {
        this.updateChildrenInputSize();
        const listOfInputChange$ = this.listOfNzInputDirective.changes.pipe(startWith(this.listOfNzInputDirective));
        listOfInputChange$
            .pipe(switchMap(list => merge(...[listOfInputChange$, ...list.map((input) => input.disabled$)])), mergeMap(() => listOfInputChange$), map(list => list.some((input) => input.disabled)), takeUntil(this.destroy$))
            .subscribe(disabled => {
            this.disabled = disabled;
            this.cdr.markForCheck();
        });
    }
    ngOnChanges(changes) {
        const { bpsSize, bpsSuffix, bpsPrefix, bpsPrefixIcon, bpsSuffixIcon, bpsAddOnAfter, bpsAddOnBefore, bpsAddOnAfterIcon, bpsAddOnBeforeIcon, bpsStatus } = changes;
        if (bpsSize) {
            this.updateChildrenInputSize();
            this.isLarge = this.bpsSize === 'large';
            this.isSmall = this.bpsSize === 'small';
        }
        if (bpsSuffix || bpsPrefix || bpsPrefixIcon || bpsSuffixIcon) {
            this.isAffix = !!(this.bpsSuffix || this.bpsPrefix || this.bpsPrefixIcon || this.bpsSuffixIcon);
        }
        if (bpsAddOnAfter || bpsAddOnBefore || bpsAddOnAfterIcon || bpsAddOnBeforeIcon) {
            this.isAddOn = !!(this.bpsAddOnAfter || this.bpsAddOnBefore || this.bpsAddOnAfterIcon || this.bpsAddOnBeforeIcon);
            this.nzFormNoStatusService?.noFormStatus?.next(this.isAddOn);
        }
        if (bpsStatus) {
            this.setStatusStyles(this.bpsStatus, this.hasFeedback);
        }
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
        this.destroy$.next();
        this.destroy$.complete();
    }
    setStatusStyles(status, hasFeedback) {
        // set inner status
        this.status = status;
        this.hasFeedback = hasFeedback;
        this.isFeedback = !!status && hasFeedback;
        const baseAffix = !!(this.bpsSuffix || this.bpsPrefix || this.bpsPrefixIcon || this.bpsSuffixIcon);
        this.isAffix = baseAffix || (!this.isAddOn && hasFeedback);
        this.affixInGroupStatusCls =
            this.isAffix || this.isFeedback
                ? (this.affixStatusCls = getStatusClassNames(`${this.prefixCls}-affix-wrapper`, status, hasFeedback))
                : {};
        this.cdr.markForCheck();
        // render status if nzStatus is set
        this.affixStatusCls = getStatusClassNames(`${this.prefixCls}-affix-wrapper`, this.isAddOn ? '' : status, this.isAddOn ? false : hasFeedback);
        this.groupStatusCls = getStatusClassNames(`${this.prefixCls}-group-wrapper`, this.isAddOn ? status : '', this.isAddOn ? hasFeedback : false);
        const statusCls = {
            ...this.affixStatusCls,
            ...this.groupStatusCls
        };
        Object.keys(statusCls).forEach(status => {
            if (statusCls[status]) {
                this.renderer.addClass(this.elementRef.nativeElement, status);
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, status);
            }
        });
    }
    static { this.ɵfac = function BpsInputGroupComponent_Factory(t) { return new (t || BpsInputGroupComponent)(i0.ɵɵdirectiveInject(i1.FocusMonitor), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Directionality, 8), i0.ɵɵdirectiveInject(i3.NzFormStatusService, 8), i0.ɵɵdirectiveInject(i3.NzFormNoStatusService, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsInputGroupComponent, selectors: [["bps-input-group"]], contentQueries: function BpsInputGroupComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, BpsInputDirective, 4);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzInputDirective = _t);
        } }, hostVars: 40, hostBindings: function BpsInputGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-input-group-compact", ctx.bpsCompact)("ant-input-search-enter-button", ctx.bpsSearch)("ant-input-search", ctx.bpsSearch)("ant-input-search-rtl", ctx.dir === "rtl")("ant-input-search-sm", ctx.bpsSearch && ctx.isSmall)("ant-input-search-large", ctx.bpsSearch && ctx.isLarge)("ant-input-group-wrapper", ctx.isAddOn)("ant-input-group-wrapper-rtl", ctx.dir === "rtl")("ant-input-group-wrapper-lg", ctx.isAddOn && ctx.isLarge)("ant-input-group-wrapper-sm", ctx.isAddOn && ctx.isSmall)("ant-input-affix-wrapper", ctx.isAffix && !ctx.isAddOn)("ant-input-affix-wrapper-rtl", ctx.dir === "rtl")("ant-input-affix-wrapper-focused", ctx.isAffix && ctx.focused)("ant-input-affix-wrapper-disabled", ctx.isAffix && ctx.disabled)("ant-input-affix-wrapper-lg", ctx.isAffix && !ctx.isAddOn && ctx.isLarge)("ant-input-affix-wrapper-sm", ctx.isAffix && !ctx.isAddOn && ctx.isSmall)("ant-input-group", !ctx.isAffix && !ctx.isAddOn)("ant-input-group-rtl", ctx.dir === "rtl")("ant-input-group-lg", !ctx.isAffix && !ctx.isAddOn && ctx.isLarge)("ant-input-group-sm", !ctx.isAffix && !ctx.isAddOn && ctx.isSmall);
        } }, inputs: { bpsAddOnBeforeIcon: "bpsAddOnBeforeIcon", bpsAddOnAfterIcon: "bpsAddOnAfterIcon", bpsPrefixIcon: "bpsPrefixIcon", bpsSuffixIcon: "bpsSuffixIcon", bpsAddOnBefore: "bpsAddOnBefore", bpsAddOnAfter: "bpsAddOnAfter", bpsPrefix: "bpsPrefix", bpsStatus: "bpsStatus", bpsSuffix: "bpsSuffix", bpsSize: "bpsSize", bpsSearch: "bpsSearch", bpsCompact: "bpsCompact" }, exportAs: ["bpsInputGroup"], features: [i0.ɵɵProvidersFeature([NzFormNoStatusService]), i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 7, vars: 2, consts: [["noAddOnTemplate", ""], ["affixTemplate", ""], ["contentTemplate", ""], ["class", "ant-input-wrapper ant-input-group", 4, "ngIf", "ngIfElse"], [1, "ant-input-wrapper", "ant-input-group"], ["bps-input-group-slot", "", "type", "addon", 3, "icon", "template", 4, "ngIf"], ["class", "ant-input-affix-wrapper", 3, "ant-input-affix-wrapper-disabled", "ant-input-affix-wrapper-sm", "ant-input-affix-wrapper-lg", "ant-input-affix-wrapper-focused", "ngClass", 4, "ngIf", "ngIfElse"], ["bps-input-group-slot", "", "type", "addon", 3, "icon", "template"], [1, "ant-input-affix-wrapper", 3, "ngClass"], [3, "ngTemplateOutlet"], [3, "ngIf", "ngIfElse"], ["bps-input-group-slot", "", "type", "prefix", 3, "icon", "template", 4, "ngIf"], ["bps-input-group-slot", "", "type", "suffix", 3, "icon", "template", 4, "ngIf"], ["bps-input-group-slot", "", "type", "prefix", 3, "icon", "template"], ["bps-input-group-slot", "", "type", "suffix", 3, "icon", "template"], [3, "status", 4, "ngIf"], [3, "status"], ["bps-input-group-slot", "", "type", "suffix", 4, "ngIf"], ["bps-input-group-slot", "", "type", "suffix"]], template: function BpsInputGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, BpsInputGroupComponent_span_0_Template, 4, 4, "span", 3)(1, BpsInputGroupComponent_ng_template_1_Template, 1, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(3, BpsInputGroupComponent_ng_template_3_Template, 3, 3, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(5, BpsInputGroupComponent_ng_template_5_Template, 2, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const noAddOnTemplate_r4 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx.isAddOn)("ngIfElse", noAddOnTemplate_r4);
        } }, dependencies: [i4.NgClass, i4.NgIf, i4.NgTemplateOutlet, i5.BpsInputGroupSlotComponent, i6.BpsFormItemFeedbackIconComponent], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], BpsInputGroupComponent.prototype, "bpsSearch", void 0);
__decorate([
    InputBoolean()
], BpsInputGroupComponent.prototype, "bpsCompact", void 0);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsInputGroupComponent, [{
        type: Component,
        args: [{
                selector: 'bps-input-group',
                exportAs: 'bpsInputGroup',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NzFormNoStatusService],
                template: `
    <span class="ant-input-wrapper ant-input-group" *ngIf="isAddOn; else noAddOnTemplate">
      <span
        *ngIf="bpsAddOnBefore || bpsAddOnBeforeIcon"
        bps-input-group-slot
        type="addon"
        [icon]="bpsAddOnBeforeIcon"
        [template]="bpsAddOnBefore"
      ></span>
      <span
        *ngIf="isAffix || hasFeedback; else contentTemplate"
        class="ant-input-affix-wrapper"
        [class.ant-input-affix-wrapper-disabled]="disabled"
        [class.ant-input-affix-wrapper-sm]="isSmall"
        [class.ant-input-affix-wrapper-lg]="isLarge"
        [class.ant-input-affix-wrapper-focused]="focused"
        [ngClass]="affixInGroupStatusCls"
      >
        <ng-template [ngTemplateOutlet]="affixTemplate"></ng-template>
      </span>
      <span
        *ngIf="bpsAddOnAfter || bpsAddOnAfterIcon"
        bps-input-group-slot
        type="addon"
        [icon]="bpsAddOnAfterIcon"
        [template]="bpsAddOnAfter"
      ></span>
    </span>
    <ng-template #noAddOnTemplate>
      <ng-template [ngIf]="isAffix" [ngIfElse]="contentTemplate">
        <ng-template [ngTemplateOutlet]="affixTemplate"></ng-template>
      </ng-template>
    </ng-template>
    <ng-template #affixTemplate>
      <span
        *ngIf="bpsPrefix || bpsPrefixIcon"
        bps-input-group-slot
        type="prefix"
        [icon]="bpsPrefixIcon"
        [template]="bpsPrefix"
      ></span>
      <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
      <span
        *ngIf="bpsSuffix || bpsSuffixIcon || isFeedback"
        bps-input-group-slot
        type="suffix"
        [icon]="bpsSuffixIcon"
        [template]="bpsSuffix"
      >
        <bps-form-item-feedback-icon *ngIf="isFeedback" [status]="status"></bps-form-item-feedback-icon>
      </span>
    </ng-template>
    <ng-template #contentTemplate>
      <ng-content></ng-content>
      <span *ngIf="!isAddOn && !isAffix && isFeedback" bps-input-group-slot type="suffix">
        <bps-form-item-feedback-icon [status]="status"></bps-form-item-feedback-icon>
      </span>
    </ng-template>
  `,
                host: {
                    '[class.ant-input-group-compact]': `bpsCompact`,
                    '[class.ant-input-search-enter-button]': `bpsSearch`,
                    '[class.ant-input-search]': `bpsSearch`,
                    '[class.ant-input-search-rtl]': `dir === 'rtl'`,
                    '[class.ant-input-search-sm]': `bpsSearch && isSmall`,
                    '[class.ant-input-search-large]': `bpsSearch && isLarge`,
                    '[class.ant-input-group-wrapper]': `isAddOn`,
                    '[class.ant-input-group-wrapper-rtl]': `dir === 'rtl'`,
                    '[class.ant-input-group-wrapper-lg]': `isAddOn && isLarge`,
                    '[class.ant-input-group-wrapper-sm]': `isAddOn && isSmall`,
                    '[class.ant-input-affix-wrapper]': `isAffix && !isAddOn`,
                    '[class.ant-input-affix-wrapper-rtl]': `dir === 'rtl'`,
                    '[class.ant-input-affix-wrapper-focused]': `isAffix && focused`,
                    '[class.ant-input-affix-wrapper-disabled]': `isAffix && disabled`,
                    '[class.ant-input-affix-wrapper-lg]': `isAffix && !isAddOn && isLarge`,
                    '[class.ant-input-affix-wrapper-sm]': `isAffix && !isAddOn && isSmall`,
                    '[class.ant-input-group]': `!isAffix && !isAddOn`,
                    '[class.ant-input-group-rtl]': `dir === 'rtl'`,
                    '[class.ant-input-group-lg]': `!isAffix && !isAddOn && isLarge`,
                    '[class.ant-input-group-sm]': `!isAffix && !isAddOn && isSmall`
                }
            }]
    }], () => [{ type: i1.FocusMonitor }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i2.Directionality, decorators: [{
                type: Optional
            }] }, { type: i3.NzFormStatusService, decorators: [{
                type: Optional
            }] }, { type: i3.NzFormNoStatusService, decorators: [{
                type: Optional
            }] }], { listOfNzInputDirective: [{
            type: ContentChildren,
            args: [BpsInputDirective]
        }], bpsAddOnBeforeIcon: [{
            type: Input
        }], bpsAddOnAfterIcon: [{
            type: Input
        }], bpsPrefixIcon: [{
            type: Input
        }], bpsSuffixIcon: [{
            type: Input
        }], bpsAddOnBefore: [{
            type: Input
        }], bpsAddOnAfter: [{
            type: Input
        }], bpsPrefix: [{
            type: Input
        }], bpsStatus: [{
            type: Input
        }], bpsSuffix: [{
            type: Input
        }], bpsSize: [{
            type: Input
        }], bpsSearch: [{
            type: Input
        }], bpsCompact: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsInputGroupComponent, { className: "BpsInputGroupComponent", filePath: "lib\\components\\bps-input\\bps-input-group.component.ts", lineNumber: 127 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWlucHV0LWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWlucHV0L2Jwcy1pbnB1dC1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULGVBQWUsRUFDZixTQUFTLEVBRVQsS0FBSyxFQUlMLFFBQVEsRUFLUixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RyxPQUFPLEVBQUUscUJBQXFCLEVBQXVCLE1BQU0seUJBQXlCLENBQUM7QUFFckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7Ozs7O0lBa0JwRCwwQkFNUTs7O0lBRE4sQUFEQSxnREFBMkIsbUNBQ0E7Ozs7SUFFN0IsK0JBUUM7SUFDQyxxR0FBZ0Q7SUFDbEQsaUJBQU87Ozs7SUFKTCxBQURBLEFBREEsQUFEQSxtRUFBbUQsOENBQ1AsOENBQ0EsbURBQ0s7SUFDakQsc0RBQWlDO0lBRXBCLGNBQWtDO0lBQWxDLG1EQUFrQzs7O0lBRWpELDBCQU1ROzs7SUFETixBQURBLCtDQUEwQixrQ0FDQTs7O0lBeEI5QiwrQkFBc0Y7SUFtQnBGLEFBWEEsQUFQQSxnRkFNQyxvRUFTQSxtRUFTQTtJQUNILGlCQUFPOzs7O0lBeEJGLGNBQTBDO0lBQTFDLHlFQUEwQztJQU8xQyxjQUE4QjtJQUFBLEFBQTlCLDJEQUE4QixnQ0FBb0I7SUFXbEQsY0FBd0M7SUFBeEMsdUVBQXdDOzs7O0lBU3pDLG1IQUFnRDs7OztJQUFuQyxtREFBa0M7OztJQURqRCxzR0FBMkQ7Ozs7SUFBN0IsQUFBakIscUNBQWdCLGdDQUE2Qjs7O0lBSzFELDJCQU1ROzs7SUFETixBQURBLDJDQUFzQiw4QkFDQTs7OztJQVV0QixrREFBZ0c7OztJQUFoRCxzQ0FBaUI7OztJQVBuRSxnQ0FNQztJQUNDLDZJQUFrRTtJQUNwRSxpQkFBTzs7O0lBSEwsQUFEQSwyQ0FBc0IsOEJBQ0E7SUFFUSxjQUFnQjtJQUFoQix3Q0FBZ0I7OztJQVBoRCxBQURBLEFBUEEsd0ZBTUMsd0ZBQ2lELDJFQU9qRDs7OztJQWJFLCtEQUFnQztJQU10QixjQUFvQztJQUFwQyxxREFBb0M7SUFFOUMsY0FBOEM7SUFBOUMsb0ZBQThDOzs7SUFXakQsZ0NBQW9GO0lBQ2xGLGtEQUE2RTtJQUMvRSxpQkFBTzs7O0lBRHdCLGNBQWlCO0lBQWpCLHNDQUFpQjs7O0lBRmhELGtCQUF5QjtJQUN6Qix3RkFBb0Y7OztJQUE3RSxjQUF3QztJQUF4Qyw4RUFBd0M7O0FBakVyRCxNQUFNLE9BQU8sdUNBQXVDO0lBQ2xELFlBQW1CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBSSxDQUFDO3dHQURuQyx1Q0FBdUM7b0VBQXZDLHVDQUF1Qzs7aUZBQXZDLHVDQUF1QztjQUhuRCxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdEQUF3RDthQUNuRTs7QUE4RkQsTUFBTSxPQUFPLHNCQUFzQjtJQWtDakMsWUFDVSxZQUEwQixFQUMxQixVQUFzQixFQUN0QixRQUFtQixFQUNuQixHQUFzQixFQUNWLGNBQThCLEVBQzlCLG1CQUF5QyxFQUN6QyxxQkFBNkM7UUFOekQsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ1YsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBc0I7UUFDekMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF3QjtRQXBDMUQsdUJBQWtCLEdBQW1CLElBQUksQ0FBQztRQUMxQyxzQkFBaUIsR0FBbUIsSUFBSSxDQUFDO1FBQ3pDLGtCQUFhLEdBQW1CLElBQUksQ0FBQztRQUNyQyxrQkFBYSxHQUFtQixJQUFJLENBQUM7UUFJckMsY0FBUyxHQUFhLEVBQUUsQ0FBQztRQUV6QixZQUFPLEdBQWtCLFNBQVMsQ0FBQztRQUNuQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixRQUFHLEdBQWMsS0FBSyxDQUFDO1FBQ3ZCLFNBQVM7UUFDVCxjQUFTLEdBQVcsV0FBVyxDQUFDO1FBQ2hDLG1CQUFjLEdBQXFCLEVBQUUsQ0FBQztRQUN0QyxtQkFBYyxHQUFxQixFQUFFLENBQUM7UUFDdEMsMEJBQXFCLEdBQXFCLEVBQUUsQ0FBQztRQUM3QyxXQUFNLEdBQXFCLEVBQUUsQ0FBQztRQUM5QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUNyQixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQVVuQyxDQUFDO0lBRUwsdUJBQXVCO1FBQ3JCLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMxRSxDQUFDO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsbUJBQW1CLEVBQUUsaUJBQWlCO2FBQ3hDLElBQUksQ0FDSCxvQkFBb0IsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNoQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsV0FBVyxLQUFLLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDMUUsQ0FBQyxDQUFDLEVBQ0YsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDekI7YUFDQSxTQUFTLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO1FBRUwsSUFBSSxDQUFDLFlBQVk7YUFDZCxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7YUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBRUwsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQW9CLEVBQUUsRUFBRTtZQUM1RixJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDL0IsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztRQUM1RyxrQkFBa0I7YUFDZixJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUF3QixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzdHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUNsQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBd0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ3BFLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCO2FBQ0EsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLE1BQU0sRUFDSixPQUFPLEVBQ1AsU0FBUyxFQUNULFNBQVMsRUFDVCxhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixjQUFjLEVBQ2QsaUJBQWlCLEVBQ2pCLGtCQUFrQixFQUNsQixTQUFTLEVBQ1YsR0FBRyxPQUFPLENBQUM7UUFDWixJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ1osSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDO1FBQzFDLENBQUM7UUFDRCxJQUFJLFNBQVMsSUFBSSxTQUFTLElBQUksYUFBYSxJQUFJLGFBQWEsRUFBRSxDQUFDO1lBQzdELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2xHLENBQUM7UUFDRCxJQUFJLGFBQWEsSUFBSSxjQUFjLElBQUksaUJBQWlCLElBQUksa0JBQWtCLEVBQUUsQ0FBQztZQUMvRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDbEgsSUFBSSxDQUFDLHFCQUFxQixFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9ELENBQUM7UUFDRCxJQUFJLFNBQVMsRUFBRSxDQUFDO1lBQ2QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6RCxDQUFDO0lBQ0gsQ0FBQztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTyxlQUFlLENBQUMsTUFBd0IsRUFBRSxXQUFvQjtRQUNwRSxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLFdBQVcsQ0FBQztRQUMxQyxNQUFNLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkcsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksV0FBVyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLHFCQUFxQjtZQUN4QixJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxVQUFVO2dCQUM3QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLG1CQUFtQixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUNyRyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxtQkFBbUIsQ0FDdkMsR0FBRyxJQUFJLENBQUMsU0FBUyxnQkFBZ0IsRUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUNuQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLGNBQWMsR0FBRyxtQkFBbUIsQ0FDdkMsR0FBRyxJQUFJLENBQUMsU0FBUyxnQkFBZ0IsRUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUNuQyxDQUFDO1FBQ0YsTUFBTSxTQUFTLEdBQUc7WUFDaEIsR0FBRyxJQUFJLENBQUMsY0FBYztZQUN0QixHQUFHLElBQUksQ0FBQyxjQUFjO1NBQ3ZCLENBQUM7UUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN0QyxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNoRSxDQUFDO2lCQUFNLENBQUM7Z0JBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDbkUsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzt1RkFoS1Usc0JBQXNCO29FQUF0QixzQkFBc0I7d0NBSWhCLGlCQUFpQjs7Ozs7WUFKdkIseURBQXNCLGdEQUFBLG1DQUFBLHFDQUFkLEtBQUssQ0FBUyxxREFBQSx3REFBQSx3Q0FBQSw0Q0FBZCxLQUFLLENBQVMsMERBQUEsMERBQUEsd0RBQUEsNENBQWQsS0FBSyxDQUFTLCtEQUFBLGlFQUFBLDBFQUFBLDBFQUFBLGlEQUFBLG9DQUFkLEtBQUssQ0FBUyxtRUFBQSxtRUFBQTt5YkFuRnRCLENBQUMscUJBQXFCLENBQUM7O1lBcURoQyxBQW5CQSxBQUxBLEFBM0JBLHlFQUFzRiwyR0EyQnhELDJHQUtGLDJHQW1CRTs7O1lBbkRrQyxBQUFmLGtDQUFlLGdDQUFvQjs7O0FBZ0c3RDtJQUFmLFlBQVksRUFBRTt5REFBbUI7QUFDbEI7SUFBZixZQUFZLEVBQUU7MERBQW9CO2lGQWhCakMsc0JBQXNCO2NBekZsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ2xDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBEVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osaUNBQWlDLEVBQUUsWUFBWTtvQkFDL0MsdUNBQXVDLEVBQUUsV0FBVztvQkFDcEQsMEJBQTBCLEVBQUUsV0FBVztvQkFDdkMsOEJBQThCLEVBQUUsZUFBZTtvQkFDL0MsNkJBQTZCLEVBQUUsc0JBQXNCO29CQUNyRCxnQ0FBZ0MsRUFBRSxzQkFBc0I7b0JBQ3hELGlDQUFpQyxFQUFFLFNBQVM7b0JBQzVDLHFDQUFxQyxFQUFFLGVBQWU7b0JBQ3RELG9DQUFvQyxFQUFFLG9CQUFvQjtvQkFDMUQsb0NBQW9DLEVBQUUsb0JBQW9CO29CQUMxRCxpQ0FBaUMsRUFBRSxxQkFBcUI7b0JBQ3hELHFDQUFxQyxFQUFFLGVBQWU7b0JBQ3RELHlDQUF5QyxFQUFFLG9CQUFvQjtvQkFDL0QsMENBQTBDLEVBQUUscUJBQXFCO29CQUNqRSxvQ0FBb0MsRUFBRSxnQ0FBZ0M7b0JBQ3RFLG9DQUFvQyxFQUFFLGdDQUFnQztvQkFDdEUseUJBQXlCLEVBQUUsc0JBQXNCO29CQUNqRCw2QkFBNkIsRUFBRSxlQUFlO29CQUM5Qyw0QkFBNEIsRUFBRSxpQ0FBaUM7b0JBQy9ELDRCQUE0QixFQUFFLGlDQUFpQztpQkFDaEU7YUFDRjs7c0JBd0NJLFFBQVE7O3NCQUNSLFFBQVE7O3NCQUNSLFFBQVE7cUJBckN5QixzQkFBc0I7a0JBQXpELGVBQWU7bUJBQUMsaUJBQWlCO1lBQ3pCLGtCQUFrQjtrQkFBMUIsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDbUIsU0FBUztrQkFBakMsS0FBSztZQUNtQixVQUFVO2tCQUFsQyxLQUFLOztrRkFoQkssc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgbWVyZ2VNYXAsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOekZvcm1Ob1N0YXR1c1NlcnZpY2UsIE56Rm9ybVN0YXR1c1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvZm9ybSc7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTmdDbGFzc0ludGVyZmFjZSwgTnpTaXplTERTVHlwZSwgTnpTdGF0dXMsIE56VmFsaWRhdGVTdGF0dXMgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBnZXRTdGF0dXNDbGFzc05hbWVzLCBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBCcHNJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vYnBzLWlucHV0LmRpcmVjdGl2ZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogYGJwcy1pbnB1dC1ncm91cFticHNTdWZmaXhdLCBicHMtaW5wdXQtZ3JvdXBbYnBzUHJlZml4XWBcclxufSlcclxuZXhwb3J0IGNsYXNzIE56SW5wdXRHcm91cFdoaXRTdWZmaXhPclByZWZpeERpcmVjdGl2ZSB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jwcy1pbnB1dC1ncm91cCcsXHJcbiAgZXhwb3J0QXM6ICdicHNJbnB1dEdyb3VwJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW056Rm9ybU5vU3RhdHVzU2VydmljZV0sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuIGNsYXNzPVwiYW50LWlucHV0LXdyYXBwZXIgYW50LWlucHV0LWdyb3VwXCIgKm5nSWY9XCJpc0FkZE9uOyBlbHNlIG5vQWRkT25UZW1wbGF0ZVwiPlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgICpuZ0lmPVwiYnBzQWRkT25CZWZvcmUgfHwgYnBzQWRkT25CZWZvcmVJY29uXCJcclxuICAgICAgICBicHMtaW5wdXQtZ3JvdXAtc2xvdFxyXG4gICAgICAgIHR5cGU9XCJhZGRvblwiXHJcbiAgICAgICAgW2ljb25dPVwiYnBzQWRkT25CZWZvcmVJY29uXCJcclxuICAgICAgICBbdGVtcGxhdGVdPVwiYnBzQWRkT25CZWZvcmVcIlxyXG4gICAgICA+PC9zcGFuPlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgICpuZ0lmPVwiaXNBZmZpeCB8fCBoYXNGZWVkYmFjazsgZWxzZSBjb250ZW50VGVtcGxhdGVcIlxyXG4gICAgICAgIGNsYXNzPVwiYW50LWlucHV0LWFmZml4LXdyYXBwZXJcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlci1kaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLXNtXT1cImlzU21hbGxcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlci1sZ109XCJpc0xhcmdlXCJcclxuICAgICAgICBbY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXItZm9jdXNlZF09XCJmb2N1c2VkXCJcclxuICAgICAgICBbbmdDbGFzc109XCJhZmZpeEluR3JvdXBTdGF0dXNDbHNcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImFmZml4VGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgKm5nSWY9XCJicHNBZGRPbkFmdGVyIHx8IGJwc0FkZE9uQWZ0ZXJJY29uXCJcclxuICAgICAgICBicHMtaW5wdXQtZ3JvdXAtc2xvdFxyXG4gICAgICAgIHR5cGU9XCJhZGRvblwiXHJcbiAgICAgICAgW2ljb25dPVwiYnBzQWRkT25BZnRlckljb25cIlxyXG4gICAgICAgIFt0ZW1wbGF0ZV09XCJicHNBZGRPbkFmdGVyXCJcclxuICAgICAgPjwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxuZy10ZW1wbGF0ZSAjbm9BZGRPblRlbXBsYXRlPlxyXG4gICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiaXNBZmZpeFwiIFtuZ0lmRWxzZV09XCJjb250ZW50VGVtcGxhdGVcIj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYWZmaXhUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPG5nLXRlbXBsYXRlICNhZmZpeFRlbXBsYXRlPlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgICpuZ0lmPVwiYnBzUHJlZml4IHx8IGJwc1ByZWZpeEljb25cIlxyXG4gICAgICAgIGJwcy1pbnB1dC1ncm91cC1zbG90XHJcbiAgICAgICAgdHlwZT1cInByZWZpeFwiXHJcbiAgICAgICAgW2ljb25dPVwiYnBzUHJlZml4SWNvblwiXHJcbiAgICAgICAgW3RlbXBsYXRlXT1cImJwc1ByZWZpeFwiXHJcbiAgICAgID48L3NwYW4+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50VGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgICpuZ0lmPVwiYnBzU3VmZml4IHx8IGJwc1N1ZmZpeEljb24gfHwgaXNGZWVkYmFja1wiXHJcbiAgICAgICAgYnBzLWlucHV0LWdyb3VwLXNsb3RcclxuICAgICAgICB0eXBlPVwic3VmZml4XCJcclxuICAgICAgICBbaWNvbl09XCJicHNTdWZmaXhJY29uXCJcclxuICAgICAgICBbdGVtcGxhdGVdPVwiYnBzU3VmZml4XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxicHMtZm9ybS1pdGVtLWZlZWRiYWNrLWljb24gKm5nSWY9XCJpc0ZlZWRiYWNrXCIgW3N0YXR1c109XCJzdGF0dXNcIj48L2Jwcy1mb3JtLWl0ZW0tZmVlZGJhY2staWNvbj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjY29udGVudFRlbXBsYXRlPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDxzcGFuICpuZ0lmPVwiIWlzQWRkT24gJiYgIWlzQWZmaXggJiYgaXNGZWVkYmFja1wiIGJwcy1pbnB1dC1ncm91cC1zbG90IHR5cGU9XCJzdWZmaXhcIj5cclxuICAgICAgICA8YnBzLWZvcm0taXRlbS1mZWVkYmFjay1pY29uIFtzdGF0dXNdPVwic3RhdHVzXCI+PC9icHMtZm9ybS1pdGVtLWZlZWRiYWNrLWljb24+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgYCxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC1jb21wYWN0XSc6IGBicHNDb21wYWN0YCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaC1lbnRlci1idXR0b25dJzogYGJwc1NlYXJjaGAsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zZWFyY2hdJzogYGJwc1NlYXJjaGAsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zZWFyY2gtcnRsXSc6IGBkaXIgPT09ICdydGwnYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaC1zbV0nOiBgYnBzU2VhcmNoICYmIGlzU21hbGxgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc2VhcmNoLWxhcmdlXSc6IGBicHNTZWFyY2ggJiYgaXNMYXJnZWAsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC13cmFwcGVyXSc6IGBpc0FkZE9uYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXdyYXBwZXItcnRsXSc6IGBkaXIgPT09ICdydGwnYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXdyYXBwZXItbGddJzogYGlzQWRkT24gJiYgaXNMYXJnZWAsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC13cmFwcGVyLXNtXSc6IGBpc0FkZE9uICYmIGlzU21hbGxgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlcl0nOiBgaXNBZmZpeCAmJiAhaXNBZGRPbmAsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLXJ0bF0nOiBgZGlyID09PSAncnRsJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLWZvY3VzZWRdJzogYGlzQWZmaXggJiYgZm9jdXNlZGAsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLWRpc2FibGVkXSc6IGBpc0FmZml4ICYmIGRpc2FibGVkYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXItbGddJzogYGlzQWZmaXggJiYgIWlzQWRkT24gJiYgaXNMYXJnZWAsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLXNtXSc6IGBpc0FmZml4ICYmICFpc0FkZE9uICYmIGlzU21hbGxgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXBdJzogYCFpc0FmZml4ICYmICFpc0FkZE9uYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXJ0bF0nOiBgZGlyID09PSAncnRsJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC1sZ10nOiBgIWlzQWZmaXggJiYgIWlzQWRkT24gJiYgaXNMYXJnZWAsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC1zbV0nOiBgIWlzQWZmaXggJiYgIWlzQWRkT24gJiYgaXNTbWFsbGBcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNJbnB1dEdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc1NlYXJjaDogQm9vbGVhbklucHV0O1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNDb21wYWN0OiBCb29sZWFuSW5wdXQ7XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oQnBzSW5wdXREaXJlY3RpdmUpIGxpc3RPZk56SW5wdXREaXJlY3RpdmUhOiBRdWVyeUxpc3Q8QnBzSW5wdXREaXJlY3RpdmU+O1xyXG4gIEBJbnB1dCgpIGJwc0FkZE9uQmVmb3JlSWNvbj86IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGJwc0FkZE9uQWZ0ZXJJY29uPzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgYnBzUHJlZml4SWNvbj86IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGJwc1N1ZmZpeEljb24/OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBicHNBZGRPbkJlZm9yZT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGJwc0FkZE9uQWZ0ZXI/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBicHNQcmVmaXg/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBicHNTdGF0dXM6IE56U3RhdHVzID0gJyc7XHJcbiAgQElucHV0KCkgYnBzU3VmZml4Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgYnBzU2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzU2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0NvbXBhY3QgPSBmYWxzZTtcclxuICBpc0xhcmdlID0gZmFsc2U7XHJcbiAgaXNTbWFsbCA9IGZhbHNlO1xyXG4gIGlzQWZmaXggPSBmYWxzZTtcclxuICBpc0FkZE9uID0gZmFsc2U7XHJcbiAgaXNGZWVkYmFjayA9IGZhbHNlO1xyXG4gIGZvY3VzZWQgPSBmYWxzZTtcclxuICBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XHJcbiAgLy8gc3RhdHVzXHJcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWlucHV0JztcclxuICBhZmZpeFN0YXR1c0NsczogTmdDbGFzc0ludGVyZmFjZSA9IHt9O1xyXG4gIGdyb3VwU3RhdHVzQ2xzOiBOZ0NsYXNzSW50ZXJmYWNlID0ge307XHJcbiAgYWZmaXhJbkdyb3VwU3RhdHVzQ2xzOiBOZ0NsYXNzSW50ZXJmYWNlID0ge307XHJcbiAgc3RhdHVzOiBOelZhbGlkYXRlU3RhdHVzID0gJyc7XHJcbiAgaGFzRmVlZGJhY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIG56Rm9ybVN0YXR1c1NlcnZpY2U/OiBOekZvcm1TdGF0dXNTZXJ2aWNlLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuekZvcm1Ob1N0YXR1c1NlcnZpY2U/OiBOekZvcm1Ob1N0YXR1c1NlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICB1cGRhdGVDaGlsZHJlbklucHV0U2l6ZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmxpc3RPZk56SW5wdXREaXJlY3RpdmUpIHtcclxuICAgICAgdGhpcy5saXN0T2ZOeklucHV0RGlyZWN0aXZlLmZvckVhY2goaXRlbSA9PiAoaXRlbS5zaXplID0gdGhpcy5icHNTaXplKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpGb3JtU3RhdHVzU2VydmljZT8uZm9ybVN0YXR1c0NoYW5nZXNcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKHByZSwgY3VyKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gcHJlLnN0YXR1cyA9PT0gY3VyLnN0YXR1cyAmJiBwcmUuaGFzRmVlZGJhY2sgPT09IGN1ci5oYXNGZWVkYmFjaztcclxuICAgICAgICB9KSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCh7IHN0YXR1cywgaGFzRmVlZGJhY2sgfSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdHVzU3R5bGVzKHN0YXR1cywgaGFzRmVlZGJhY2spO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvclxyXG4gICAgICAubW9uaXRvcih0aGlzLmVsZW1lbnRSZWYsIHRydWUpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZShmb2N1c09yaWdpbiA9PiB7XHJcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gISFmb2N1c09yaWdpbjtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xyXG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuSW5wdXRTaXplKCk7XHJcbiAgICBjb25zdCBsaXN0T2ZJbnB1dENoYW5nZSQgPSB0aGlzLmxpc3RPZk56SW5wdXREaXJlY3RpdmUuY2hhbmdlcy5waXBlKHN0YXJ0V2l0aCh0aGlzLmxpc3RPZk56SW5wdXREaXJlY3RpdmUpKTtcclxuICAgIGxpc3RPZklucHV0Q2hhbmdlJFxyXG4gICAgICAucGlwZShcclxuICAgICAgICBzd2l0Y2hNYXAobGlzdCA9PiBtZXJnZSguLi5bbGlzdE9mSW5wdXRDaGFuZ2UkLCAuLi5saXN0Lm1hcCgoaW5wdXQ6IEJwc0lucHV0RGlyZWN0aXZlKSA9PiBpbnB1dC5kaXNhYmxlZCQpXSkpLFxyXG4gICAgICAgIG1lcmdlTWFwKCgpID0+IGxpc3RPZklucHV0Q2hhbmdlJCksXHJcbiAgICAgICAgbWFwKGxpc3QgPT4gbGlzdC5zb21lKChpbnB1dDogQnBzSW5wdXREaXJlY3RpdmUpID0+IGlucHV0LmRpc2FibGVkKSksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZShkaXNhYmxlZCA9PiB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBicHNTaXplLFxyXG4gICAgICBicHNTdWZmaXgsXHJcbiAgICAgIGJwc1ByZWZpeCxcclxuICAgICAgYnBzUHJlZml4SWNvbixcclxuICAgICAgYnBzU3VmZml4SWNvbixcclxuICAgICAgYnBzQWRkT25BZnRlcixcclxuICAgICAgYnBzQWRkT25CZWZvcmUsXHJcbiAgICAgIGJwc0FkZE9uQWZ0ZXJJY29uLFxyXG4gICAgICBicHNBZGRPbkJlZm9yZUljb24sXHJcbiAgICAgIGJwc1N0YXR1c1xyXG4gICAgfSA9IGNoYW5nZXM7XHJcbiAgICBpZiAoYnBzU2l6ZSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuSW5wdXRTaXplKCk7XHJcbiAgICAgIHRoaXMuaXNMYXJnZSA9IHRoaXMuYnBzU2l6ZSA9PT0gJ2xhcmdlJztcclxuICAgICAgdGhpcy5pc1NtYWxsID0gdGhpcy5icHNTaXplID09PSAnc21hbGwnO1xyXG4gICAgfVxyXG4gICAgaWYgKGJwc1N1ZmZpeCB8fCBicHNQcmVmaXggfHwgYnBzUHJlZml4SWNvbiB8fCBicHNTdWZmaXhJY29uKSB7XHJcbiAgICAgIHRoaXMuaXNBZmZpeCA9ICEhKHRoaXMuYnBzU3VmZml4IHx8IHRoaXMuYnBzUHJlZml4IHx8IHRoaXMuYnBzUHJlZml4SWNvbiB8fCB0aGlzLmJwc1N1ZmZpeEljb24pO1xyXG4gICAgfVxyXG4gICAgaWYgKGJwc0FkZE9uQWZ0ZXIgfHwgYnBzQWRkT25CZWZvcmUgfHwgYnBzQWRkT25BZnRlckljb24gfHwgYnBzQWRkT25CZWZvcmVJY29uKSB7XHJcbiAgICAgIHRoaXMuaXNBZGRPbiA9ICEhKHRoaXMuYnBzQWRkT25BZnRlciB8fCB0aGlzLmJwc0FkZE9uQmVmb3JlIHx8IHRoaXMuYnBzQWRkT25BZnRlckljb24gfHwgdGhpcy5icHNBZGRPbkJlZm9yZUljb24pO1xyXG4gICAgICB0aGlzLm56Rm9ybU5vU3RhdHVzU2VydmljZT8ubm9Gb3JtU3RhdHVzPy5uZXh0KHRoaXMuaXNBZGRPbik7XHJcbiAgICB9XHJcbiAgICBpZiAoYnBzU3RhdHVzKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdHVzU3R5bGVzKHRoaXMuYnBzU3RhdHVzLCB0aGlzLmhhc0ZlZWRiYWNrKTtcclxuICAgIH1cclxuICB9XHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLmVsZW1lbnRSZWYpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFN0YXR1c1N0eWxlcyhzdGF0dXM6IE56VmFsaWRhdGVTdGF0dXMsIGhhc0ZlZWRiYWNrOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAvLyBzZXQgaW5uZXIgc3RhdHVzXHJcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuICAgIHRoaXMuaGFzRmVlZGJhY2sgPSBoYXNGZWVkYmFjaztcclxuICAgIHRoaXMuaXNGZWVkYmFjayA9ICEhc3RhdHVzICYmIGhhc0ZlZWRiYWNrO1xyXG4gICAgY29uc3QgYmFzZUFmZml4ID0gISEodGhpcy5icHNTdWZmaXggfHwgdGhpcy5icHNQcmVmaXggfHwgdGhpcy5icHNQcmVmaXhJY29uIHx8IHRoaXMuYnBzU3VmZml4SWNvbik7XHJcbiAgICB0aGlzLmlzQWZmaXggPSBiYXNlQWZmaXggfHwgKCF0aGlzLmlzQWRkT24gJiYgaGFzRmVlZGJhY2spO1xyXG4gICAgdGhpcy5hZmZpeEluR3JvdXBTdGF0dXNDbHMgPVxyXG4gICAgICB0aGlzLmlzQWZmaXggfHwgdGhpcy5pc0ZlZWRiYWNrXHJcbiAgICAgICAgPyAodGhpcy5hZmZpeFN0YXR1c0NscyA9IGdldFN0YXR1c0NsYXNzTmFtZXMoYCR7dGhpcy5wcmVmaXhDbHN9LWFmZml4LXdyYXBwZXJgLCBzdGF0dXMsIGhhc0ZlZWRiYWNrKSlcclxuICAgICAgICA6IHt9O1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAvLyByZW5kZXIgc3RhdHVzIGlmIG56U3RhdHVzIGlzIHNldFxyXG4gICAgdGhpcy5hZmZpeFN0YXR1c0NscyA9IGdldFN0YXR1c0NsYXNzTmFtZXMoXHJcbiAgICAgIGAke3RoaXMucHJlZml4Q2xzfS1hZmZpeC13cmFwcGVyYCxcclxuICAgICAgdGhpcy5pc0FkZE9uID8gJycgOiBzdGF0dXMsXHJcbiAgICAgIHRoaXMuaXNBZGRPbiA/IGZhbHNlIDogaGFzRmVlZGJhY2tcclxuICAgICk7XHJcbiAgICB0aGlzLmdyb3VwU3RhdHVzQ2xzID0gZ2V0U3RhdHVzQ2xhc3NOYW1lcyhcclxuICAgICAgYCR7dGhpcy5wcmVmaXhDbHN9LWdyb3VwLXdyYXBwZXJgLFxyXG4gICAgICB0aGlzLmlzQWRkT24gPyBzdGF0dXMgOiAnJyxcclxuICAgICAgdGhpcy5pc0FkZE9uID8gaGFzRmVlZGJhY2sgOiBmYWxzZVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHN0YXR1c0NscyA9IHtcclxuICAgICAgLi4udGhpcy5hZmZpeFN0YXR1c0NscyxcclxuICAgICAgLi4udGhpcy5ncm91cFN0YXR1c0Nsc1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5rZXlzKHN0YXR1c0NscykuZm9yRWFjaChzdGF0dXMgPT4ge1xyXG4gICAgICBpZiAoc3RhdHVzQ2xzW3N0YXR1c10pIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBzdGF0dXMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHN0YXR1cyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=