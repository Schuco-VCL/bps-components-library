import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild, ElementRef, HostListener, ChangeDetectionStrategy, } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { BpsInputDirective } from '../bps-input/bps-input.directive';
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "ng-zorro-antd/table";
import * as i5 from "../bps-dropdown/bps-dropdown.directive";
import * as i6 from "../bps-input/bps-input-group.component";
import * as i7 from "../bps-input/bps-input.directive";
const _c0 = (a0, a1) => ({ data: a0, index: a1 });
function BpsTableComponent_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 13);
    i0.ɵɵlistener("click", function BpsTableComponent_input_1_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.preventDefault($event)); })("keyup", function BpsTableComponent_input_1_Template_input_keyup_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.updateSearch($event.target.value)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("placeholder", ctx_r2.filterPlaceholder);
} }
function BpsTableComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 14);
} if (rf & 2) {
    i0.ɵɵproperty("nzWidth", "40px");
} }
function BpsTableComponent_ng_container_7_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function BpsTableComponent_ng_container_7_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsTableComponent_ng_container_7_ng_container_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", field_r5.template.ref)("ngTemplateOutletContext", field_r5.template.context);
} }
function BpsTableComponent_ng_container_7_ng_container_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const field_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵtextInterpolate(field_r5.display);
} }
function BpsTableComponent_ng_container_7_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const customFilter_r6 = i0.ɵɵreference(12);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", customFilter_r6);
} }
function BpsTableComponent_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "th", 16);
    i0.ɵɵtwoWayListener("nzSortOrderChange", function BpsTableComponent_ng_container_7_ng_container_1_Template_th_nzSortOrderChange_1_listener($event) { i0.ɵɵrestoreView(_r4); const field_r5 = i0.ɵɵnextContext().$implicit; i0.ɵɵtwoWayBindingSet(field_r5.sortOrder, $event) || (field_r5.sortOrder = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("nzSortOrderChange", function BpsTableComponent_ng_container_7_ng_container_1_Template_th_nzSortOrderChange_1_listener($event) { i0.ɵɵrestoreView(_r4); const field_r5 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.sort({ key: field_r5.property, value: $event })); });
    i0.ɵɵtemplate(2, BpsTableComponent_ng_container_7_ng_container_1_ng_container_2_Template, 2, 2, "ng-container", 17)(3, BpsTableComponent_ng_container_7_ng_container_1_ng_template_3_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(5, BpsTableComponent_ng_container_7_ng_container_1_ng_container_5_Template, 2, 1, "ng-container", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const cellValue_r7 = i0.ɵɵreference(4);
    const field_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵclassProp("bps-column-disabled", field_r5.disabled);
    i0.ɵɵproperty("ngClass", field_r5.ngClass);
    i0.ɵɵtwoWayProperty("nzSortOrder", field_r5.sortOrder);
    i0.ɵɵproperty("nzShowSort", field_r5.showSort)("nzWidth", field_r5.width);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", field_r5.template)("ngIfElse", cellValue_r7);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", field_r5.showCustomFilter);
} }
function BpsTableComponent_ng_container_7_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function BpsTableComponent_ng_container_7_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsTableComponent_ng_container_7_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", field_r5.template.ref)("ngTemplateOutletContext", field_r5.template.context);
} }
function BpsTableComponent_ng_container_7_ng_container_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const field_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵtextInterpolate(field_r5.display);
} }
function BpsTableComponent_ng_container_7_ng_container_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const customFilter_r6 = i0.ɵɵreference(12);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", customFilter_r6);
} }
function BpsTableComponent_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "th", 20);
    i0.ɵɵtemplate(2, BpsTableComponent_ng_container_7_ng_container_2_ng_container_2_Template, 2, 2, "ng-container", 17)(3, BpsTableComponent_ng_container_7_ng_container_2_ng_template_3_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(5, BpsTableComponent_ng_container_7_ng_container_2_ng_container_5_Template, 2, 1, "ng-container", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const cellValue_r8 = i0.ɵɵreference(4);
    const field_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵclassProp("bps-column-disabled", field_r5.disabled);
    i0.ɵɵproperty("ngClass", field_r5.ngClass)("nzWidth", field_r5.width);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", field_r5.template)("ngIfElse", cellValue_r8);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", field_r5.showCustomFilter);
} }
function BpsTableComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsTableComponent_ng_container_7_ng_container_1_Template, 6, 9, "ng-container", 15)(2, BpsTableComponent_ng_container_7_ng_container_2_Template, 6, 7, "ng-container", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", field_r5.showSort);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !field_r5.showSort);
} }
function BpsTableComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 21);
} if (rf & 2) {
    i0.ɵɵproperty("nzWidth", "70px");
} }
function BpsTableComponent_ng_template_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "td", 24);
    i0.ɵɵlistener("nzExpandChange", function BpsTableComponent_ng_template_10_ng_container_1_Template_td_nzExpandChange_1_listener($event) { i0.ɵɵrestoreView(_r11); const data_r10 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.expandRow(data_r10, $event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r10 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzExpand", ctx_r2.mapOfExpandData[data_r10[ctx_r2.config.fieldId]]);
} }
function BpsTableComponent_ng_template_10_td_2_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function BpsTableComponent_ng_template_10_td_2_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsTableComponent_ng_template_10_td_2_ng_container_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r12 = i0.ɵɵnextContext(2).$implicit;
    const data_r10 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", data_r10[field_r12.property].ref)("ngTemplateOutletContext", data_r10[field_r12.property].context);
} }
function BpsTableComponent_ng_template_10_td_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsTableComponent_ng_template_10_td_2_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r12 = i0.ɵɵnextContext().$implicit;
    const data_r10 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r10[field_r12.property]);
} }
function BpsTableComponent_ng_template_10_td_2_ng_container_2_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 27);
    i0.ɵɵlistener("click", function BpsTableComponent_ng_template_10_td_2_ng_container_2_ng_container_1_ng_container_3_Template_span_click_1_listener($event) { i0.ɵɵrestoreView(_r13); const data_r10 = i0.ɵɵnextContext(4).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.startEdit(data_r10, $event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function BpsTableComponent_ng_template_10_td_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 26);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, BpsTableComponent_ng_template_10_td_2_ng_container_2_ng_container_1_ng_container_3_Template, 2, 0, "ng-container", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    const field_r12 = ctx_r13.$implicit;
    const fi_r15 = ctx_r13.index;
    const data_r10 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", data_r10[field_r12.property], " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !fi_r15);
} }
function BpsTableComponent_ng_template_10_td_2_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 28);
    i0.ɵɵtwoWayListener("ngModelChange", function BpsTableComponent_ng_template_10_td_2_ng_container_2_ng_template_2_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r16); const field_r12 = i0.ɵɵnextContext(2).$implicit; const data_r10 = i0.ɵɵnextContext().$implicit; i0.ɵɵtwoWayBindingSet(data_r10[field_r12.property], $event) || (data_r10[field_r12.property] = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("click", function BpsTableComponent_ng_template_10_td_2_ng_container_2_ng_template_2_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r2 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r2.preventDefault($event)); })("keyup", function BpsTableComponent_ng_template_10_td_2_ng_container_2_ng_template_2_Template_input_keyup_0_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r16 = i0.ɵɵnextContext(3); const data_r10 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.endEditMode($event, i_r18, data_r10)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r12 = i0.ɵɵnextContext(2).$implicit;
    const data_r10 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtwoWayProperty("ngModel", data_r10[field_r12.property]);
} }
function BpsTableComponent_ng_template_10_td_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsTableComponent_ng_template_10_td_2_ng_container_2_ng_container_1_Template, 4, 2, "ng-container", 17)(2, BpsTableComponent_ng_template_10_td_2_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const editTpl_r19 = i0.ɵɵreference(3);
    const data_r10 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.editId !== data_r10[ctx_r2.config.fieldId])("ngIfElse", editTpl_r19);
} }
function BpsTableComponent_ng_template_10_td_2_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r12 = i0.ɵɵnextContext(2).$implicit;
    const data_r10 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", data_r10[field_r12.property], " ");
} }
function BpsTableComponent_ng_template_10_td_2_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 28);
    i0.ɵɵtwoWayListener("ngModelChange", function BpsTableComponent_ng_template_10_td_2_ng_container_3_ng_container_2_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r20); const field_r12 = i0.ɵɵnextContext(2).$implicit; const data_r10 = i0.ɵɵnextContext().$implicit; i0.ɵɵtwoWayBindingSet(data_r10[field_r12.property], $event) || (data_r10[field_r12.property] = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("click", function BpsTableComponent_ng_template_10_td_2_ng_container_3_ng_container_2_Template_input_click_1_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r2 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r2.preventDefault($event)); })("keyup", function BpsTableComponent_ng_template_10_td_2_ng_container_3_ng_container_2_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r16 = i0.ɵɵnextContext(3); const data_r10 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.endEditMode($event, i_r18, data_r10)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r12 = i0.ɵɵnextContext(2).$implicit;
    const data_r10 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("bps-editable-cell-input-home-table", ctx_r2.tableType === "home");
    i0.ɵɵtwoWayProperty("ngModel", data_r10[field_r12.property]);
} }
function BpsTableComponent_ng_template_10_td_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsTableComponent_ng_template_10_td_2_ng_container_3_ng_container_1_Template, 3, 1, "ng-container", 15)(2, BpsTableComponent_ng_template_10_td_2_ng_container_3_ng_container_2_Template, 2, 3, "ng-container", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r12 = i0.ɵɵnextContext().$implicit;
    const data_r10 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.editId !== data_r10[ctx_r2.config.fieldId] || ctx_r2.editProperty !== field_r12.property);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.editId === data_r10[ctx_r2.config.fieldId] && ctx_r2.editProperty === field_r12.property);
} }
function BpsTableComponent_ng_template_10_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 25);
    i0.ɵɵtemplate(1, BpsTableComponent_ng_template_10_td_2_ng_container_1_Template, 2, 1, "ng-container", 15)(2, BpsTableComponent_ng_template_10_td_2_ng_container_2_Template, 4, 2, "ng-container", 15)(3, BpsTableComponent_ng_template_10_td_2_ng_container_3_Template, 3, 2, "ng-container", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r12 = ctx.$implicit;
    const fi_r15 = ctx.index;
    const data_r10 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r2.getTDClassMap(field_r12, data_r10, fi_r15));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isCeldTypeTemplateRef(field_r12));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isCeldTypeDefault(field_r12) && ctx_r2.tableType !== "home");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isCeldTypeDefault(field_r12) && ctx_r2.tableType === "home");
} }
function BpsTableComponent_ng_template_10_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td")(1, "i", 29);
    i0.ɵɵlistener("click", function BpsTableComponent_ng_template_10_td_3_Template_i_click_1_listener() { i0.ɵɵrestoreView(_r21); const data_r10 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.emitBpsEvent(data_r10, "moreBtnClicked")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "i", 30);
    i0.ɵɵlistener("bpsForcedUpdatedPosition", function BpsTableComponent_ng_template_10_td_3_Template_i_bpsForcedUpdatedPosition_2_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.changeIcon($event)); })("click", function BpsTableComponent_ng_template_10_td_3_Template_i_click_2_listener() { i0.ɵɵrestoreView(_r21); const data_r10 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.emitBpsEvent(data_r10, "deleteBtnClicked")); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("bpsDropdownMenu", ctx_r2.moreMenu);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("bps-table-home-delete-icon-position-updated", ctx_r2.forceUpdate);
    i0.ɵɵproperty("bpsDropdownMenu", ctx_r2.deleteMenu);
} }
function BpsTableComponent_ng_template_10_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "tr", 31)(2, "td");
    i0.ɵɵelementContainer(3, 32);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext();
    const data_r10 = ctx_r16.$implicit;
    const i_r18 = ctx_r16.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzExpand", ctx_r2.mapOfExpandData[data_r10[ctx_r2.config.fieldId]]);
    i0.ɵɵadvance();
    i0.ɵɵattribute("colspan", ctx_r2.getFields().length + 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.rowExpandTemplate)("ngTemplateOutletContext", i0.ɵɵpureFunction2(4, _c0, data_r10, i_r18));
} }
function BpsTableComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 22);
    i0.ɵɵlistener("click", function BpsTableComponent_ng_template_10_Template_tr_click_0_listener($event) { const data_r10 = i0.ɵɵrestoreView(_r9).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.clickRow($event, data_r10)); });
    i0.ɵɵtemplate(1, BpsTableComponent_ng_template_10_ng_container_1_Template, 2, 1, "ng-container", 15)(2, BpsTableComponent_ng_template_10_td_2_Template, 4, 4, "td", 23)(3, BpsTableComponent_ng_template_10_td_3_Template, 3, 4, "td", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, BpsTableComponent_ng_template_10_ng_container_4_Template, 4, 7, "ng-container", 15);
} if (rf & 2) {
    const data_r10 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-table-selected-row", ctx_r2.isRowSelected(data_r10))("bps-table4-custom-row", data_r10.bpsTable4CustomRow)("bps-table-home-expanded-row", ctx_r2.mapOfExpandData[data_r10[ctx_r2.config.fieldId]])("bps-table-pair-row", ctx_r2.tableType === "report" && !(i_r18 % 2));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.expandable);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.getFields());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.tableType === "home");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.expandable);
} }
function BpsTableComponent_ng_template_11_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "img", 36);
    i0.ɵɵelementContainerEnd();
} }
function BpsTableComponent_ng_template_11_ng_template_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "img", 37);
    i0.ɵɵelementContainerEnd();
} }
function BpsTableComponent_ng_template_11_ng_template_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "img", 38);
    i0.ɵɵelementContainerEnd();
} }
function BpsTableComponent_ng_template_11_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BpsTableComponent_ng_template_11_ng_template_4_ng_container_0_Template, 2, 0, "ng-container", 15)(1, BpsTableComponent_ng_template_11_ng_template_4_ng_container_1_Template, 2, 0, "ng-container", 15)(2, BpsTableComponent_ng_template_11_ng_template_4_ng_container_2_Template, 2, 0, "ng-container", 15);
} if (rf & 2) {
    const disabled_r24 = ctx.false;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", !ctx_r2.searchBoxHovered && !disabled_r24);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.searchBoxHovered && !disabled_r24);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", disabled_r24);
} }
function BpsTableComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33)(1, "bps-input-group", 34);
    i0.ɵɵlistener("click", function BpsTableComponent_ng_template_11_Template_bps_input_group_click_1_listener($event) { i0.ɵɵrestoreView(_r22); const searchInput_r23 = i0.ɵɵreference(3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.focusInput($event, searchInput_r23)); })("mouseenter", function BpsTableComponent_ng_template_11_Template_bps_input_group_mouseenter_1_listener() { i0.ɵɵrestoreView(_r22); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.searchBoxHovered = true); })("mouseleave", function BpsTableComponent_ng_template_11_Template_bps_input_group_mouseleave_1_listener() { i0.ɵɵrestoreView(_r22); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.searchBoxHovered = false); });
    i0.ɵɵelementStart(2, "input", 35, 4);
    i0.ɵɵlistener("click", function BpsTableComponent_ng_template_11_Template_input_click_2_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.preventDefault($event)); })("keyup", function BpsTableComponent_ng_template_11_Template_input_keyup_2_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.updateSearch($event.target.value)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(4, BpsTableComponent_ng_template_11_ng_template_4_Template, 3, 3, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const searchPrefixIcon_r25 = i0.ɵɵreference(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("bpsPrefix", searchPrefixIcon_r25);
} }
export var TemplateType = {
    Date: 'Date',
    Select: 'Select',
    Number: 'Number',
    String: 'String',
    Boolean: 'Boolean',
    Time: 'Time',
};
export var CeldType = {
    Default: 'Default',
    TemplateRef: 'TemplateRef'
};
// tslint:disable-next-line no-any
export class BpsTableComponent {
    /* Table API */
    // tslint:disable-next-line: no-input-rename
    set data(data) {
        this._data = data;
        this.updateCheckboxCache();
    }
    handleClick(e) {
        if (this.editId !== null && this.inputElement && this.inputElement.nativeElement !== e.target) {
            this.emitOnEditEvent();
            this.editId = null;
        }
    }
    sort(sort) {
        const field = this.getFields().filter(item => item.property === sort.key)[0];
        if (field.disabled) {
            return;
        }
        this.sortChange.emit({ sortName: sort.key, sortValue: sort.value });
    }
    emitOnEditEvent() {
        let editedEl = this._data.filter(el => el[this.config.fieldId] === this.editId);
        if (editedEl.length) {
            this.onedit.emit(editedEl);
        }
    }
    focusInput($event, input) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
        input.focus();
    }
    endEditMode($event, index, data = null) {
        if ($event.key === 'Enter' || $event.key === 'enter') {
            this.emitOnEditEvent();
            this.editId = null;
            this.editProperty = null;
        }
    }
    preventDefault($event) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
    }
    emitBpsEvent($event, type) {
        switch (type) {
            case 'pageIndex':
                this.pageIndexChange.emit($event);
                break;
            case 'currentPageData':
                this.currentPageDataChange.emit($event);
                break;
            case 'queryParams':
                this.queryParamsChange.emit($event);
                break;
            case 'pageSize':
                this.pageSizeChange.emit($event);
                break;
            case 'moreBtnClicked':
                this.moreBtnClicked.emit($event);
                break;
            case 'deleteBtnClicked':
                this.deleteBtnClicked.emit($event);
                break;
        }
    }
    getFields() {
        return this.config ? this.config.fields.filter(item => item.hidden === undefined || !item.hidden) : [];
    }
    constructor(cdr, i18n) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.locale = {}; // tslint:disable-line:no-any
        this.destroy$ = new Subject();
        this.checkboxCache = [];
        this.mapOfExpandData = {};
        this._data = [];
        this.editId = null;
        this.editProperty = null;
        this.isExpanded = false;
        this.searchBoxHovered = false;
        this._searchSubject = new Subject();
        this.frontPagination = true;
        this.total = 0;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.showPagination = true;
        this.paginationPosition = 'bottom';
        this.bordered = false;
        this.widthConfig = [];
        this.loading = false;
        this.loadingDelay = 0;
        this.scroll = { x: null, y: null };
        this.pageSizeOptions = [10, 20, 30, 40, 50];
        this.showQuickJumper = false;
        this.showSizeChanger = false;
        this.hideOnSinglePage = false;
        this.simple = false;
        this.virtualItemSize = 0;
        this.virtualMaxBufferPx = 200;
        this.virtualMinBufferPx = 100;
        this.inlineEdit = false;
        this.pageIndexChange = new EventEmitter();
        this.currentPageDataChange = new EventEmitter();
        this.queryParamsChange = new EventEmitter();
        this.pageSizeChange = new EventEmitter();
        this.onclickRow = new EventEmitter();
        this.ondblclickRow = new EventEmitter();
        this.selectionChange = new EventEmitter();
        /* Thead API */
        this.singleSort = true;
        this.sortChange = new EventEmitter();
        this.configChange = new EventEmitter();
        this.onedit = new EventEmitter();
        this.tableType = 'report';
        this.expandable = false;
        this.searchValueChange = new EventEmitter();
        this.moreBtnClicked = new EventEmitter();
        this.deleteBtnClicked = new EventEmitter();
        this.expandChange = new EventEmitter();
        this.forceUpdate = false;
        this.clicks = 0;
        this._setSearchSubscription();
    }
    _setSearchSubscription() {
        this._searchSubject.pipe(debounceTime(500)).subscribe((searchValue) => {
            this.searchValueChange.emit(searchValue);
        });
    }
    updateSearch(searchTextValue) {
        this._searchSubject.next(searchTextValue);
    }
    ngAfterViewInit() {
        this.cdr.detectChanges();
    }
    ngOnChanges(changes) {
        if (changes.data && this.config) {
            this.updateCheckboxCache();
        }
    }
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Table');
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this._searchSubject.unsubscribe();
    }
    isCeldTypeTemplateRef(field) {
        return field.celdType === CeldType.TemplateRef;
    }
    isCeldTypeDefault(field) {
        return field.celdType === CeldType.Default;
    }
    getTDClassMap(field, data, fi = 9999) {
        return {
            ...field.ngClass,
            ['bps-td-disabled']: data.disabled,
            ['bps-td-no-padding']: data[this.config.fieldId] === this.editId,
            ['bps-fst-column']: !fi,
        };
    }
    isRowSelected(data) {
        if (this.config) {
            const dataSelected = this.checkboxCache.filter(item => item.selected).map(item => item.data[this.config.fieldId]);
            return dataSelected.indexOf(data[this.config.fieldId]) !== -1;
        }
        return false;
    }
    updateCheckboxCache() {
        const temp = [...this.checkboxCache];
        this.checkboxCache.length = 0;
        this._data.forEach(item => {
            const checkItem = temp.filter(e => e.data[this.config.fieldId] === item[this.config.fieldId]);
            this.checkboxCache.push({
                selected: checkItem.length ? checkItem[0].selected : false,
                data: item
            });
        });
    }
    clickRow(event, data) {
        this.clicks++;
        setTimeout(() => {
            if (this.clicks === 1) {
                this.selectRow(data);
                if (this.expandable) {
                    const key = this.config.fieldId;
                    this.expandRow(data, !this.mapOfExpandData[data[key]]);
                    this.cdr.detectChanges();
                }
                event.preventDefault();
                event.stopImmediatePropagation();
            }
            else if (this.clicks === 2) {
                this.ondblclickRow.emit(data);
            }
            this.clicks = 0;
        }, 300);
    }
    startEdit(data, event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.inlineEdit && !data.disabled) {
            this.editId = data[this.config.fieldId];
            this.cdr.detectChanges();
            this.inputElement.nativeElement.focus();
            setTimeout(() => {
                this.inputElement.nativeElement.select();
            }, 100);
        }
    }
    editRow(data, property) {
        if (!data.disabled) {
            this.editId = data[this.config.fieldId];
            this.editProperty = property;
            this.cdr.detectChanges();
            this.inputElement.nativeElement.focus();
            setTimeout(() => {
                this.inputElement.nativeElement.select();
            }, 100);
        }
    }
    selectRow(data, selectionOnly = false) {
        if (!data.disabled) {
            if (!selectionOnly) {
                this.onclickRow.emit(data);
            }
            this.checkboxCache.forEach(item => {
                if (item.data[this.config.fieldId] === data[this.config.fieldId]) {
                    item.selected = true;
                    this.selectionChange.emit(item);
                }
                else {
                    item.selected = false;
                }
            });
            this.cdr.detectChanges();
        }
    }
    expandRow(data, $event) {
        this.mapOfExpandData = {};
        this.mapOfExpandData[data[this.config.fieldId]] = $event;
        this.expandChange.emit(this.mapOfExpandData);
    }
    changeIcon($event) {
        this.forceUpdate = $event;
        this.cdr.detectChanges();
    }
    static { this.ɵfac = function BpsTableComponent_Factory(t) { return new (t || BpsTableComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzI18nService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsTableComponent, selectors: [["bps-table"]], viewQuery: function BpsTableComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(BpsInputDirective, 5, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        } }, hostBindings: function BpsTableComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mouseup", function BpsTableComponent_mouseup_HostBindingHandler($event) { return ctx.handleClick($event); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { data: "data", frontPagination: "frontPagination", total: "total", pageIndex: "pageIndex", pageSize: "pageSize", showPagination: "showPagination", paginationPosition: "paginationPosition", bordered: "bordered", widthConfig: "widthConfig", loading: "loading", loadingDelay: "loadingDelay", loadingIndicator: "loadingIndicator", scroll: "scroll", title: "title", footer: "footer", noResult: "noResult", pageSizeOptions: "pageSizeOptions", showQuickJumper: "showQuickJumper", showSizeChanger: "showSizeChanger", showTotal: "showTotal", hideOnSinglePage: "hideOnSinglePage", simple: "simple", virtualItemSize: "virtualItemSize", virtualMaxBufferPx: "virtualMaxBufferPx", virtualMinBufferPx: "virtualMinBufferPx", virtualForTrackBy: "virtualForTrackBy", inlineEdit: "inlineEdit", singleSort: "singleSort", config: "config", gridID: "gridID", filterPlaceholder: "filterPlaceholder", tableType: "tableType", expandable: "expandable", moreMenu: "moreMenu", deleteMenu: "deleteMenu", rowExpandTemplate: "rowExpandTemplate" }, outputs: { pageIndexChange: "pageIndexChange", currentPageDataChange: "currentPageDataChange", queryParamsChange: "queryParamsChange", pageSizeChange: "pageSizeChange", onclickRow: "onclickRow", ondblclickRow: "ondblclickRow", selectionChange: "selectionChange", sortChange: "sortChange", configChange: "configChange", onedit: "onedit", searchValueChange: "searchValueChange", moreBtnClicked: "moreBtnClicked", deleteBtnClicked: "deleteBtnClicked", expandChange: "expandChange" }, exportAs: ["bpsTable"], features: [i0.ɵɵNgOnChangesFeature], decls: 13, vars: 35, consts: [["gridComponent", ""], ["customFilter", ""], ["cellValue", ""], ["editTpl", ""], ["searchInput", ""], ["searchPrefixIcon", ""], [3, "id"], ["bps-input", "", "class", "bps-table-glass-filter", 3, "placeholder", "click", "keyup", 4, "ngIf"], [1, "bps-table", 3, "nzPageIndexChange", "nzCurrentPageDataChange", "nzQueryParams", "nzPageSizeChange", "nzData", "nzFrontPagination", "nzTotal", "nzPageIndex", "nzPageSize", "nzShowPagination", "nzPaginationPosition", "nzBordered", "nzWidthConfig", "nzLoading", "nzLoadingIndicator", "nzLoadingDelay", "nzScroll", "nzTitle", "nzFooter", "nzNoResult", "nzPageSizeOptions", "nzShowQuickJumper", "nzShowSizeChanger", "nzShowTotal", "nzHideOnSinglePage", "nzSimple", "nzVirtualItemSize", "nzVirtualMaxBufferPx", "nzVirtualMinBufferPx", "nzVirtualForTrackBy"], ["nzShowExpand", "", 3, "nzWidth", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "nzWidth", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], ["bps-input", "", 1, "bps-table-glass-filter", 3, "click", "keyup", "placeholder"], ["nzShowExpand", "", 3, "nzWidth"], [4, "ngIf"], ["nzCustomFilter", "", 3, "nzSortOrderChange", "ngClass", "nzSortOrder", "nzShowSort", "nzWidth"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngTemplateOutlet"], ["nzCustomFilter", "", 3, "ngClass", "nzWidth"], [3, "nzWidth"], [3, "click"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["nzShowExpand", "", 2, "border-bottom", "none !important", 3, "nzExpandChange", "nzExpand"], [3, "ngClass"], [1, "bps-table-td-content"], [1, "bps-report-table-menu-pencil", 3, "click"], ["bps-input", "", 1, "bps-editable-cell-input", 3, "ngModelChange", "click", "keyup", "ngModel"], ["bps-dropdown", "", "bpsTrigger", "click", "bpsPlacement", "rightTop", 1, "bps-table-home-more-icon", 3, "click", "bpsDropdownMenu"], ["bps-dropdown", "", "bpsTrigger", "click", "bpsPlacement", "rightTop", 1, "bps-table-home-delete-icon", 3, "bpsForcedUpdatedPosition", "click", "bpsDropdownMenu"], [3, "nzExpand"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "bps-table-filter-icon"], [1, "bps-table-custom-filter", 3, "click", "mouseenter", "mouseleave", "bpsPrefix"], ["bps-input", "", "nz-th-extra", "", "nzTableFilter", "", 1, "bps-table-filter-custom-input", 3, "click", "keyup"], ["src", "/assets/bps-icons/sps_search_icon_home_enabled.svg", 1, "bps-custom-filter-img"], ["src", "/assets/bps-icons/sps_search_icon_home_hover_activated.svg", 1, "bps-custom-filter-img"], ["src", "/assets/bps-icons/sps_search_icon_home_disabled.svg", 1, "bps-custom-filter-img"]], template: function BpsTableComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 6);
            i0.ɵɵtemplate(1, BpsTableComponent_input_1_Template, 1, 1, "input", 7);
            i0.ɵɵelementStart(2, "nz-table", 8, 0);
            i0.ɵɵlistener("nzPageIndexChange", function BpsTableComponent_Template_nz_table_nzPageIndexChange_2_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.emitBpsEvent($event, "pageIndex")); })("nzCurrentPageDataChange", function BpsTableComponent_Template_nz_table_nzCurrentPageDataChange_2_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.emitBpsEvent($event, "currentPageData")); })("nzQueryParams", function BpsTableComponent_Template_nz_table_nzQueryParams_2_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.emitBpsEvent($event, "queryParams")); })("nzPageSizeChange", function BpsTableComponent_Template_nz_table_nzPageSizeChange_2_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.emitBpsEvent($event, "pageSize")); });
            i0.ɵɵelementStart(4, "thead")(5, "tr");
            i0.ɵɵtemplate(6, BpsTableComponent_th_6_Template, 1, 1, "th", 9)(7, BpsTableComponent_ng_container_7_Template, 3, 2, "ng-container", 10)(8, BpsTableComponent_th_8_Template, 1, 1, "th", 11);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "tbody");
            i0.ɵɵtemplate(10, BpsTableComponent_ng_template_10_Template, 5, 12, "ng-template", 12);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(11, BpsTableComponent_ng_template_11_Template, 6, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const gridComponent_r26 = i0.ɵɵreference(3);
            i0.ɵɵclassMapInterpolate1("bps-table-", ctx.tableType, "");
            i0.ɵɵpropertyInterpolate("id", ctx.gridID);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.tableType === "glass_profile");
            i0.ɵɵadvance();
            i0.ɵɵproperty("nzData", ctx._data)("nzFrontPagination", ctx.frontPagination)("nzTotal", ctx.total)("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzShowPagination", ctx.showPagination)("nzPaginationPosition", ctx.paginationPosition)("nzBordered", ctx.bordered)("nzWidthConfig", ctx.widthConfig)("nzLoading", ctx.loading)("nzLoadingIndicator", ctx.loadingIndicator)("nzLoadingDelay", ctx.loadingDelay)("nzScroll", ctx.scroll)("nzTitle", ctx.title)("nzFooter", ctx.footer)("nzNoResult", ctx.noResult)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowQuickJumper", ctx.showQuickJumper)("nzShowSizeChanger", ctx.showSizeChanger)("nzShowTotal", ctx.showTotal)("nzHideOnSinglePage", ctx.hideOnSinglePage)("nzSimple", ctx.simple)("nzVirtualItemSize", ctx.virtualItemSize)("nzVirtualMaxBufferPx", ctx.virtualMaxBufferPx)("nzVirtualMinBufferPx", ctx.virtualMinBufferPx)("nzVirtualForTrackBy", ctx.virtualForTrackBy);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.expandable);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.getFields());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.tableType === "home");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", gridComponent_r26.data);
        } }, dependencies: [i2.NgClass, i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.NzTableComponent, i4.NzThAddOnComponent, i4.NzTableCellDirective, i4.NzThMeasureDirective, i4.NzTdAddOnComponent, i4.NzTheadComponent, i4.NzTbodyComponent, i4.NzTrDirective, i4.NzTrExpandDirective, i4.NzTableFixedRowComponent, i5.BpsDropDownDirective, i6.BpsInputGroupComponent, i7.BpsInputDirective], styles: [".bps-table .ant-table-thead>tr>th,   .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){padding:5px;font-size:12px;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.33;letter-spacing:normal!important;text-align:left;color:#fff!important;background-color:#262626!important}  .bps-table-report .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){border-bottom:none!important;border-right:1px solid #363636!important}  .bps-table-home .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){padding:12px 5px 12px 0!important;border-bottom:1.2px solid #363636!important;border-right:none!important;color:#999!important}  .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel).bps-td-disabled{color:#666!important}  .bps-table-report .bps-table .ant-table-thead>tr:first-child>th:first-child{padding-left:20px!important}  .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel):last-child{border-right:unset!important}  .bps-table .ant-table-thead>tr>th{padding:10px;border-bottom:none!important;border-radius:0!important}  .bps-table-home .bps-table .ant-table-thead>tr>th{padding:17px 5px 17px 0!important;border-bottom:1.2px solid #363636!important;border-top:1px solid #262626!important;border-radius:0!important}  .bps-table-report .ant-table-tbody>tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)>td:not(.bps-td-expandable-panel):not(.bps-td-disabled){background:#313b3f!important}  .bps-table-report .ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td:not(.bps-td-expandable-panel):not(.bps-td-disabled) .bps-table-td-content{width:calc(100% - 18px)!important}  .bps-table .ant-table-tbody>tr.bps-table-pair-row>td:not(.bps-td-expandable-panel){background-color:#313131!important}  .bps-table-expandable-panel .ant-table-body{background-color:#313131!important}  .bps-table .ant-table-body{background-color:#262626!important}  .bps-table-home .bps-table .ant-table-body{margin-top:2px!important}  .bps-table-report .bps-table .ant-table-body{margin-top:3px!important}  .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar,   .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar,   .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar{width:8px!important;height:8px!important}  .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar-track,   .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar-track,   .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar-track{background-color:#262626!important}  .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar-thumb,   .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar-thumb,   .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar-thumb{background-color:#363636!important;border-radius:10px!important;border:2px solid #262626!important;background-clip:padding-box!important}  .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar-thumb:hover,   .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar-thumb:hover,   .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#363636!important;border-radius:10px!important}  .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar-corner,   .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar-corner,   .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar-corner{background-color:#262626!important}  .bps-table-home .bps-table .ant-table-header.ant-table-hide-scrollbar,   .bps-table-report .bps-table .ant-table-header.ant-table-hide-scrollbar,   .bps-table-glass_profile .bps-table .ant-table-header.ant-table-hide-scrollbar{background-color:#262626!important;margin-bottom:unset!important;overflow-x:hidden!important;border-bottom:none!important}  .bps-table-report .bps-table .ant-table-header{box-shadow:-6px 3px 8px #000!important;z-index:2!important;position:relative!important;padding-bottom:0!important;overflow-y:hidden!important;overflow-x:hidden!important;margin-right:15px!important;border-top:1px solid #363636!important}  .bps-table-report .ant-table table{padding-right:6px}  .bps-table .ant-table{background-color:transparent}  .bps-table-glass_profile .bps-table .ant-table-header{box-shadow:-1px 4px 5px #000!important;z-index:2!important;position:relative!important}  .bps-table-home .bps-table .ant-table-header{box-shadow:-15px 2px 8px #000!important;z-index:2!important;position:relative!important}  .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-expandable-panel){background-color:#445c67!important}.bps-fst-column[_ngcontent-%COMP%]{padding-left:20px!important;position:relative}.bps-editable-cell-input[_ngcontent-%COMP%]{border-radius:0!important;border-color:#00a2d1!important;padding-left:18px!important}.bps-td-no-padding[_ngcontent-%COMP%]{padding:0!important}  .bps-table .ant-table-expand-icon-th,   .bps-table-home .bps-table .ant-table-tbody>tr>td.ant-table-row-expand-icon-cell{width:40px!important;min-width:40px!important;padding-right:0!important;text-align:center}  .bps-table .ant-table-row-expand-icon{background:#262626!important;border:none!important;width:unset!important;height:unset!important}  .bps-table .ant-table-row-expand-icon-expanded:after,   .bps-table-home .bps-table .ant-table-tbody>tr .ant-table-row-expand-icon-expanded:after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_active.svg);transform:rotate(0);top:-10px;background-color:transparent}  .bps-table .ant-table-row-expand-icon-collapsed:after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_enabled.svg);top:-10px;background:transparent}  .bps-table-home .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-expandable-panel),   .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-expandable-panel){background:#262626!important;color:#fff!important;cursor:pointer}  .bps-table-home .bps-table .ant-table-tbody>tr:hover:not(.ant-table-selected-row) .ant-table-row-expand-icon-collapsed:after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_hover.svg)}  .bps-table .anticon svg{display:none!important}  .anticon.ant-table-column-sorter-up.anticon-caret-up:not(.active)+.anticon.ant-table-column-sorter-down.anticon-caret-down:not(.active){content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_grey.svg)}  .bps-table .anticon.ant-table-column-sorter-up.anticon-caret-up.active:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingup_blue.svg);position:relative;top:-2px}  .bps-table .anticon.ant-table-column-sorter-down.anticon-caret-down.active:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_blue.svg)}  .bps-table .anticon.ant-table-column-sorter-down.anticon-caret-down.off:after,   .bps-table .bps-column-disabled .anticon.ant-table-column-sorter-down.anticon-caret-down.active:after,   .bps-table .bps-column-disabled .anticon.ant-table-column-sorter-up.anticon-caret-up.active:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_grey.svg)}  .bps-table .ant-table-measure-now{display:none}  .bps-table .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner{margin-top:unset!important;margin-left:10px!important;line-height:unset!important}  .bps-table .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-filters{padding-right:unset!important}  .bps-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters>:not(.ant-table-column-sorter){position:unset!important}  .bps-table .ant-table-column-title{position:unset;z-index:1}  .bps-table .ant-table-header{overflow:hidden!important}.bps-table-filter-icon[_ngcontent-%COMP%]{position:absolute;top:10px;right:55px;width:270px;transition:all .3s;display:inline-block}  .bps-table .bps-table-custom-filter .ant-input-prefix{padding:5px;background-color:#3d3d3d;border-radius:100px;left:1.4px!important;top:calc(50% + .8px);left:12.2px!important;position:absolute;z-index:3;top:5.2px}.bps-custom-filter-img[_ngcontent-%COMP%]{background:#3d3d3d;transition:all .3s}.bps-table-filter-custom-input[_ngcontent-%COMP%]{border:solid 1px #535353!important;background-color:#343434!important;padding-left:24px!important;transition:all .3s}.bps-table-filter-custom-input[_ngcontent-%COMP%]:hover{border:solid 1px #535353!important}.bps-table-home-more-icon[_ngcontent-%COMP%]:after{content:url(/assets/bps-icons/sps_dots_icon_home_enabled.svg);position:relative;top:-3px}.bps-table-home-delete-icon[_ngcontent-%COMP%]:after{content:url(/assets/bps-icons/sps_arrowdeleteshare_icon_home_right.svg);position:relative;left:1px}.bps-table-home-delete-icon.bps-table-home-delete-icon-position-updated[_ngcontent-%COMP%]:after{content:url(/assets/bps-icons/sps_arrowdeleteshare_icon_home_bottom.svg)}.bps-table-home-more-icon[_ngcontent-%COMP%]{margin-right:11px}.bps-table-home-delete-icon[_ngcontent-%COMP%]{padding:4px 9px;position:relative;background-color:#363636;border-radius:100px}.bps-table-home-more-icon[_ngcontent-%COMP%]{background-color:#363636;border-radius:100px;padding:4px 6px}.bps-table-home-more-icon[_ngcontent-%COMP%]:hover, .bps-table-home-delete-icon[_ngcontent-%COMP%]:hover{cursor:pointer}  .bps-table-home .bps-table .ant-table-tbody>tr:hover .bps-table-home-more-icon:after,   .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row .bps-table-home-more-icon:after{content:url(/assets/bps-icons/sps_dots_icon_home_hover_active.svg)}  .bps-table-home .bps-table .ant-table-tbody>tr:hover .bps-table-home-delete-icon:after,   .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row .bps-table-home-delete-icon:after{content:url(/assets/bps-icons/sps_arrowdeleteshare_icon_home_active_right.svg)}  .bps-table-home .bps-table .ant-table-tbody>tr:hover .bps-table-home-delete-icon.bps-table-home-delete-icon-position-updated:after,   .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row .bps-table-home-delete-icon.bps-table-home-delete-icon-position-updated:after{content:url(/assets/bps-icons/sps_arrowdeleteshare_icon_home_active_bottom.svg)}  .bps-table-glass_profile .bps-table .ant-table table{border-spacing:0 5px!important}  .bps-table-glass_profile .bps-table .ant-table-thead>tr>th,   .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){font-size:11px!important}  .bps-table-glass_profile .bps-table .ant-table-thead>tr>th{padding:7px!important}  .bps-table-glass_profile .bps-table .ant-table-thead>tr>th:first-child{padding-left:20px!important}  .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel):first-child{border-radius:3px 0 0 3px!important}  .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel):last-child{border-radius:0 3px 3px 0!important}  .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){background-color:#363636!important;border-right:none!important;border-left:none!important;border-collapse:separate!important;padding:11px 5px}  .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-expandable-panel){background-color:#363636!important}  .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled){cursor:pointer}  .bps-table .ant-table-column-sorters{display:inline-flex}  .bps-table .ant-table-thead>tr>th .ant-table-column-sorter{vertical-align:top!important;top:0;position:relative}  .bps-table .ant-table-thead>tr>th.bps-column-disabled{color:#666!important}  .bps-table .ant-table-thead>tr>th.bps-column-disabled:hover{cursor:not-allowed}.bps-table-glass-filter[_ngcontent-%COMP%]{width:185px;font-size:10px!important;height:20px!important;border:none!important;margin-left:20px}  .bps-table-glass_profile .bps-table .ant-table-thead>tr>th{border-top:none!important}.bps-table-glass-filter[_ngcontent-%COMP%]::placeholder{color:#666;font-size:10px}  .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled){box-shadow:0 1px #445c67 inset,0 -1px #445c67 inset!important}  .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled):first-child{box-shadow:1px 0 #445c67 inset,0 1px #445c67 inset,0 -1px #445c67 inset!important}  .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled):last-child{box-shadow:0 1px #445c67 inset,0 -1px #445c67 inset,-1px 0 #445c67 inset!important}  .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td{border-bottom:none!important;transition:all .3s}.bps-td-disabled[_ngcontent-%COMP%]{cursor:not-allowed}  .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.bps-td-disabled),   .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-disabled){box-shadow:0 1px #00a2d1 inset,0 -1px #00a2d1 inset!important}  .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.bps-td-disabled):first-child,   .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-disabled):first-child{box-shadow:1px 0 #00a2d1 inset,0 1px #00a2d1 inset,0 -1px #00a2d1 inset!important}  .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-disabled):last-child,   .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.bps-td-disabled):last-child{box-shadow:0 1px #00a2d1 inset,0 -1px #00a2d1 inset,-1px 0 #00a2d1 inset!important}  .bps-table-glass_profile .bps-table .ant-table-tbody>tr.bps-table4-custom-row>td,   .bps-table-glass_profile .bps-table .ant-table-tbody>tr.bps-table4-custom-row:hover>td{background-color:#253d47!important}  .ant-table-fixed-header .ant-table-scroll .ant-table-header::-webkit-scrollbar{border:none!important}  .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-expanded-row>td{padding:0!important;border-bottom:none!important}  .bps-table-home .bps-table .ant-table-tbody>tr.bps-table-home-expanded-row>td{border-bottom:none!important}  .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar{width:8px!important;height:8px!important}  .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-track{background-color:#313131!important}  .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-thumb{background-color:#262626!important;border-radius:10px!important;border:2px solid #313131!important;background-clip:padding-box!important}  .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#262626!important;border-radius:10px!important}  .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-corner{background-color:#313131!important}.bps-editable-cell-input-home-table[_ngcontent-%COMP%]{padding-left:4px!important;border-radius:4px!important;width:95%!important}.bps-report-table-menu-pencil[_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:5px;right:5px}  .bps-table-report .ant-table-tbody>tr:hover td:not(.bps-td-disabled) .bps-report-table-menu-pencil:after{content:url(/assets/bps-icons/sps_editname_icon_home_hoverrow.svg);transform:scale(.95)}td[_ngcontent-%COMP%]:not(.bps-td-disabled)   .bps-report-table-menu-pencil[_ngcontent-%COMP%]:hover:after{content:url(/assets/bps-icons/sps_editname_icon_home_hover.svg)!important;position:absolute;top:5px;right:5px;cursor:pointer}"], changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "frontPagination", void 0);
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "showPagination", void 0);
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "bordered", void 0);
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "loading", void 0);
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "showQuickJumper", void 0);
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "showSizeChanger", void 0);
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "hideOnSinglePage", void 0);
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "simple", void 0);
__decorate([
    InputNumber()
], BpsTableComponent.prototype, "virtualItemSize", void 0);
__decorate([
    InputNumber()
], BpsTableComponent.prototype, "virtualMaxBufferPx", void 0);
__decorate([
    InputNumber()
], BpsTableComponent.prototype, "virtualMinBufferPx", void 0);
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "inlineEdit", void 0);
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "expandable", void 0);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsTableComponent, [{
        type: Component,
        args: [{ selector: 'bps-table', exportAs: 'bpsTable', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div id=\"{{gridID}}\"\r\n     class=\"bps-table-{{tableType}}\">\r\n  <input bps-input\r\n         *ngIf=\"tableType === 'glass_profile'\"\r\n         class=\"bps-table-glass-filter\"\r\n         [placeholder]=\"filterPlaceholder\"\r\n         (click)=\"preventDefault($event)\"\r\n         (keyup)=\"updateSearch($event.target.value)\">\r\n  <nz-table #gridComponent\r\n            class=\"bps-table\"\r\n            [nzData]=\"_data\"\r\n            [nzFrontPagination]=\"frontPagination\"\r\n            [nzTotal]=\"total\"\r\n            [nzPageIndex]=\"pageIndex\"\r\n            [nzPageSize]=\"pageSize\"\r\n            [nzShowPagination]=\"showPagination\"\r\n            [nzPaginationPosition]=\"paginationPosition\"\r\n            [nzBordered]=\"bordered\"\r\n            [nzWidthConfig]=\"widthConfig\"\r\n            [nzLoading]=\"loading\"\r\n            [nzLoadingIndicator]=\"loadingIndicator\"\r\n            [nzLoadingDelay]=\"loadingDelay\"\r\n            [nzScroll]=\"scroll\"\r\n            [nzTitle]=\"title\"\r\n            [nzFooter]=\"footer\"\r\n            [nzNoResult]=\"noResult\"\r\n            [nzPageSizeOptions]=\"pageSizeOptions\"\r\n            [nzShowQuickJumper]=\"showQuickJumper\"\r\n            [nzShowSizeChanger]=\"showSizeChanger\"\r\n            [nzShowTotal]=\"showTotal\"\r\n            [nzHideOnSinglePage]=\"hideOnSinglePage\"\r\n            [nzSimple]=\"simple\"\r\n            [nzVirtualItemSize]=\"virtualItemSize\"\r\n            [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\r\n            [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\r\n            [nzVirtualForTrackBy]=\"virtualForTrackBy\"\r\n            (nzPageIndexChange)=\"emitBpsEvent($event, 'pageIndex')\"\r\n            (nzCurrentPageDataChange)=\"emitBpsEvent($event, 'currentPageData')\"\r\n            (nzQueryParams)=\"emitBpsEvent($event, 'queryParams')\"\r\n            (nzPageSizeChange)=\"emitBpsEvent($event, 'pageSize')\">\r\n    <thead>\r\n      <tr>\r\n\r\n        <th *ngIf=\"expandable\"\r\n            [nzWidth]=\"'40px'\"\r\n            nzShowExpand>\r\n        </th>\r\n\r\n        <ng-container *ngFor=\"let field of getFields(); index as th\">\r\n          <ng-container *ngIf=\"field.showSort\">\r\n            <th [ngClass]=\"field.ngClass\"\r\n                [class.bps-column-disabled]=\"field.disabled\"\r\n                [(nzSortOrder)]=\"field.sortOrder\"\r\n\r\n                [nzShowSort]=\"field.showSort\"\r\n                (nzSortOrderChange)=\"sort({key: field.property, value: $event})\"\r\n                nzCustomFilter\r\n                [nzWidth]=\"field.width\">\r\n              <ng-container *ngIf=\"field.template; else cellValue\">\r\n                <ng-container *ngTemplateOutlet=\"field.template.ref; context: field.template.context\"></ng-container>\r\n              </ng-container>\r\n              <ng-template #cellValue>{{field.display}}</ng-template>\r\n\r\n              <ng-container *ngIf=\"field.showCustomFilter\">\r\n                <ng-container [ngTemplateOutlet]=\"customFilter\"></ng-container>\r\n              </ng-container>\r\n            </th>\r\n          </ng-container>\r\n\r\n          <ng-container *ngIf=\"!field.showSort\">\r\n            <th [ngClass]=\"field.ngClass\"\r\n                [class.bps-column-disabled]=\"field.disabled\"\r\n                nzCustomFilter\r\n                [nzWidth]=\"field.width\">\r\n              <ng-container *ngIf=\"field.template; else cellValue\">\r\n                <ng-container *ngTemplateOutlet=\"field.template.ref; context: field.template.context\"></ng-container>\r\n              </ng-container>\r\n              <ng-template #cellValue>{{field.display}}</ng-template>\r\n\r\n              <ng-container *ngIf=\"field.showCustomFilter\">\r\n                <ng-container [ngTemplateOutlet]=\"customFilter\"></ng-container>\r\n              </ng-container>\r\n            </th>\r\n          </ng-container>\r\n        </ng-container>     \r\n\r\n        <th *ngIf=\"tableType === 'home'\"\r\n            [nzWidth]=\"'70px'\">\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <ng-template ngFor let-data [ngForOf]=\"gridComponent.data\" let-i=\"index\">\r\n        <tr [class.ant-table-selected-row]=\"isRowSelected(data)\"\r\n            [class.bps-table4-custom-row]=\"data.bpsTable4CustomRow\"\r\n            [class.bps-table-home-expanded-row]=\"mapOfExpandData[data[config.fieldId]]\"\r\n            (click)=\"clickRow($event, data)\"\r\n            [class.bps-table-pair-row]=\"tableType === 'report' && !(i % 2)\">\r\n\r\n          <ng-container *ngIf=\"expandable\">\r\n            <td nzShowExpand\r\n                style=\"border-bottom: none !important\"\r\n                (nzExpandChange)=\"expandRow(data, $event)\"\r\n                [nzExpand]=\"mapOfExpandData[data[config.fieldId]]\"></td>\r\n          </ng-container>\r\n\r\n          <td *ngFor=\"let field of getFields(); index as fi\"\r\n              [ngClass]=\"getTDClassMap(field, data, fi)\">\r\n\r\n            <ng-container *ngIf=\"isCeldTypeTemplateRef(field)\">\r\n              <ng-container *ngIf=\"data[field.property]\">\r\n                <ng-container *ngTemplateOutlet=\"data[field.property].ref; context: data[field.property].context\"></ng-container>\r\n              </ng-container>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"isCeldTypeDefault(field) && tableType !== 'home'\">\r\n              <ng-container *ngIf=\"editId !== data[config.fieldId]; else editTpl\">\r\n                <div class=\"bps-table-td-content\">\r\n                  {{ data[field.property] }}\r\n                </div>\r\n                <ng-container *ngIf=\"!fi\">\r\n                  <span class=\"bps-report-table-menu-pencil\" (click)=\"startEdit(data, $event)\"></span>\r\n                </ng-container>\r\n              </ng-container>\r\n              <ng-template #editTpl>\r\n                <input bps-input [(ngModel)]=\"data[field.property]\"\r\n                       class=\"bps-editable-cell-input\"\r\n                       (click)=\"preventDefault($event)\"\r\n                       (keyup)=\"endEditMode($event, i, data)\" />\r\n              </ng-template>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"isCeldTypeDefault(field) && tableType === 'home'\">\r\n              <ng-container *ngIf=\"editId !== data[config.fieldId] || editProperty !== field.property\">\r\n                <div>\r\n                  {{ data[field.property] }}\r\n                </div>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"editId === data[config.fieldId] && editProperty === field.property\">\r\n                <input bps-input [(ngModel)]=\"data[field.property]\"\r\n                       class=\"bps-editable-cell-input\"\r\n                       [class.bps-editable-cell-input-home-table]=\"tableType === 'home'\"\r\n                       (click)=\"preventDefault($event)\"\r\n                       (keyup)=\"endEditMode($event, i, data)\" />\r\n              </ng-container>\r\n\r\n            </ng-container>\r\n          </td>\r\n\r\n          <td *ngIf=\"tableType === 'home'\">\r\n            <i class=\"bps-table-home-more-icon\"\r\n               bps-dropdown\r\n               (click)=\"emitBpsEvent(data, 'moreBtnClicked')\"\r\n               [bpsDropdownMenu]=\"moreMenu\"\r\n               bpsTrigger=\"click\"\r\n               bpsPlacement=\"rightTop\"></i>\r\n            <i class=\"bps-table-home-delete-icon\"\r\n               [class.bps-table-home-delete-icon-position-updated]=\"forceUpdate\"\r\n               bps-dropdown\r\n               (bpsForcedUpdatedPosition)=\"changeIcon($event)\"\r\n               (click)=\"emitBpsEvent(data, 'deleteBtnClicked')\"\r\n               [bpsDropdownMenu]=\"deleteMenu\"\r\n               bpsTrigger=\"click\"\r\n               bpsPlacement=\"rightTop\"></i>\r\n          </td>\r\n\r\n        </tr>\r\n\r\n        <ng-container *ngIf=\"expandable\">\r\n          <tr [nzExpand]=\"mapOfExpandData[data[config.fieldId]]\">\r\n            <td [attr.colspan]=\"getFields().length + 2\">\r\n              <ng-container [ngTemplateOutlet]=\"rowExpandTemplate\" [ngTemplateOutletContext]=\"{data: data, index: i}\"></ng-container>\r\n            </td>\r\n          </tr>\r\n        </ng-container>\r\n      </ng-template>\r\n\r\n    </tbody>\r\n  </nz-table>\r\n</div>\r\n\r\n<ng-template #customFilter>\r\n  <div class=\"bps-table-filter-icon\">\r\n    <bps-input-group [bpsPrefix]=\"searchPrefixIcon\"\r\n                     (click)=\"focusInput($event, searchInput)\"\r\n                     (mouseenter)=\"searchBoxHovered = true;\"\r\n                     (mouseleave)=\"searchBoxHovered = false;\"\r\n                     class=\"bps-table-custom-filter\">\r\n      <input bps-input\r\n             #searchInput\r\n             nz-th-extra\r\n             class=\"bps-table-filter-custom-input\"\r\n             (click)=\"preventDefault($event)\"\r\n             (keyup)=\"updateSearch($event.target.value)\"\r\n             nzTableFilter>\r\n    </bps-input-group>\r\n  </div>\r\n  \r\n  <ng-template #searchPrefixIcon let-disabled=\"false\">\r\n    <ng-container *ngIf=\"!searchBoxHovered  && !disabled\">\r\n      <img class=\"bps-custom-filter-img\" src=\"/assets/bps-icons/sps_search_icon_home_enabled.svg\" />\r\n    </ng-container>\r\n    <ng-container *ngIf=\"searchBoxHovered && !disabled\">\r\n      <img class=\"bps-custom-filter-img\" src=\"/assets/bps-icons/sps_search_icon_home_hover_activated.svg\" />\r\n    </ng-container>\r\n    <ng-container *ngIf=\"disabled\">\r\n      <img class=\"bps-custom-filter-img\" src=\"/assets/bps-icons/sps_search_icon_home_disabled.svg\" />\r\n    </ng-container>\r\n  </ng-template>\r\n</ng-template>\r\n", styles: ["::ng-deep .bps-table .ant-table-thead>tr>th,::ng-deep .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){padding:5px;font-size:12px;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.33;letter-spacing:normal!important;text-align:left;color:#fff!important;background-color:#262626!important}::ng-deep .bps-table-report .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){border-bottom:none!important;border-right:1px solid #363636!important}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){padding:12px 5px 12px 0!important;border-bottom:1.2px solid #363636!important;border-right:none!important;color:#999!important}::ng-deep .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel).bps-td-disabled{color:#666!important}::ng-deep .bps-table-report .bps-table .ant-table-thead>tr:first-child>th:first-child{padding-left:20px!important}::ng-deep .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel):last-child{border-right:unset!important}::ng-deep .bps-table .ant-table-thead>tr>th{padding:10px;border-bottom:none!important;border-radius:0!important}::ng-deep .bps-table-home .bps-table .ant-table-thead>tr>th{padding:17px 5px 17px 0!important;border-bottom:1.2px solid #363636!important;border-top:1px solid #262626!important;border-radius:0!important}::ng-deep .bps-table-report .ant-table-tbody>tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)>td:not(.bps-td-expandable-panel):not(.bps-td-disabled){background:#313b3f!important}::ng-deep .bps-table-report .ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td:not(.bps-td-expandable-panel):not(.bps-td-disabled) .bps-table-td-content{width:calc(100% - 18px)!important}::ng-deep .bps-table .ant-table-tbody>tr.bps-table-pair-row>td:not(.bps-td-expandable-panel){background-color:#313131!important}::ng-deep .bps-table-expandable-panel .ant-table-body{background-color:#313131!important}::ng-deep .bps-table .ant-table-body{background-color:#262626!important}::ng-deep .bps-table-home .bps-table .ant-table-body{margin-top:2px!important}::ng-deep .bps-table-report .bps-table .ant-table-body{margin-top:3px!important}::ng-deep .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar,::ng-deep .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar,::ng-deep .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar{width:8px!important;height:8px!important}::ng-deep .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar-track,::ng-deep .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar-track,::ng-deep .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar-track{background-color:#262626!important}::ng-deep .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar-thumb,::ng-deep .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar-thumb,::ng-deep .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar-thumb{background-color:#363636!important;border-radius:10px!important;border:2px solid #262626!important;background-clip:padding-box!important}::ng-deep .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar-thumb:hover,::ng-deep .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar-thumb:hover,::ng-deep .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#363636!important;border-radius:10px!important}::ng-deep .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar-corner,::ng-deep .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar-corner,::ng-deep .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar-corner{background-color:#262626!important}::ng-deep .bps-table-home .bps-table .ant-table-header.ant-table-hide-scrollbar,::ng-deep .bps-table-report .bps-table .ant-table-header.ant-table-hide-scrollbar,::ng-deep .bps-table-glass_profile .bps-table .ant-table-header.ant-table-hide-scrollbar{background-color:#262626!important;margin-bottom:unset!important;overflow-x:hidden!important;border-bottom:none!important}::ng-deep .bps-table-report .bps-table .ant-table-header{box-shadow:-6px 3px 8px #000!important;z-index:2!important;position:relative!important;padding-bottom:0!important;overflow-y:hidden!important;overflow-x:hidden!important;margin-right:15px!important;border-top:1px solid #363636!important}::ng-deep .bps-table-report .ant-table table{padding-right:6px}::ng-deep .bps-table .ant-table{background-color:transparent}::ng-deep .bps-table-glass_profile .bps-table .ant-table-header{box-shadow:-1px 4px 5px #000!important;z-index:2!important;position:relative!important}::ng-deep .bps-table-home .bps-table .ant-table-header{box-shadow:-15px 2px 8px #000!important;z-index:2!important;position:relative!important}::ng-deep .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-expandable-panel){background-color:#445c67!important}.bps-fst-column{padding-left:20px!important;position:relative}.bps-editable-cell-input{border-radius:0!important;border-color:#00a2d1!important;padding-left:18px!important}.bps-td-no-padding{padding:0!important}::ng-deep .bps-table .ant-table-expand-icon-th,::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr>td.ant-table-row-expand-icon-cell{width:40px!important;min-width:40px!important;padding-right:0!important;text-align:center}::ng-deep .bps-table .ant-table-row-expand-icon{background:#262626!important;border:none!important;width:unset!important;height:unset!important}::ng-deep .bps-table .ant-table-row-expand-icon-expanded:after,::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr .ant-table-row-expand-icon-expanded:after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_active.svg);transform:rotate(0);top:-10px;background-color:transparent}::ng-deep .bps-table .ant-table-row-expand-icon-collapsed:after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_enabled.svg);top:-10px;background:transparent}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-expandable-panel),::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-expandable-panel){background:#262626!important;color:#fff!important;cursor:pointer}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr:hover:not(.ant-table-selected-row) .ant-table-row-expand-icon-collapsed:after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_hover.svg)}::ng-deep .bps-table .anticon svg{display:none!important}::ng-deep .anticon.ant-table-column-sorter-up.anticon-caret-up:not(.active)+.anticon.ant-table-column-sorter-down.anticon-caret-down:not(.active){content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_grey.svg)}::ng-deep .bps-table .anticon.ant-table-column-sorter-up.anticon-caret-up.active:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingup_blue.svg);position:relative;top:-2px}::ng-deep .bps-table .anticon.ant-table-column-sorter-down.anticon-caret-down.active:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_blue.svg)}::ng-deep .bps-table .anticon.ant-table-column-sorter-down.anticon-caret-down.off:after,::ng-deep .bps-table .bps-column-disabled .anticon.ant-table-column-sorter-down.anticon-caret-down.active:after,::ng-deep .bps-table .bps-column-disabled .anticon.ant-table-column-sorter-up.anticon-caret-up.active:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_grey.svg)}::ng-deep .bps-table .ant-table-measure-now{display:none}::ng-deep .bps-table .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner{margin-top:unset!important;margin-left:10px!important;line-height:unset!important}::ng-deep .bps-table .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-filters{padding-right:unset!important}::ng-deep .bps-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters>:not(.ant-table-column-sorter){position:unset!important}::ng-deep .bps-table .ant-table-column-title{position:unset;z-index:1}::ng-deep .bps-table .ant-table-header{overflow:hidden!important}.bps-table-filter-icon{position:absolute;top:10px;right:55px;width:270px;transition:all .3s;display:inline-block}::ng-deep .bps-table .bps-table-custom-filter .ant-input-prefix{padding:5px;background-color:#3d3d3d;border-radius:100px;left:1.4px!important;top:calc(50% + .8px);left:12.2px!important;position:absolute;z-index:3;top:5.2px}.bps-custom-filter-img{background:#3d3d3d;transition:all .3s}.bps-table-filter-custom-input{border:solid 1px #535353!important;background-color:#343434!important;padding-left:24px!important;transition:all .3s}.bps-table-filter-custom-input:hover{border:solid 1px #535353!important}.bps-table-home-more-icon:after{content:url(/assets/bps-icons/sps_dots_icon_home_enabled.svg);position:relative;top:-3px}.bps-table-home-delete-icon:after{content:url(/assets/bps-icons/sps_arrowdeleteshare_icon_home_right.svg);position:relative;left:1px}.bps-table-home-delete-icon.bps-table-home-delete-icon-position-updated:after{content:url(/assets/bps-icons/sps_arrowdeleteshare_icon_home_bottom.svg)}.bps-table-home-more-icon{margin-right:11px}.bps-table-home-delete-icon{padding:4px 9px;position:relative;background-color:#363636;border-radius:100px}.bps-table-home-more-icon{background-color:#363636;border-radius:100px;padding:4px 6px}.bps-table-home-more-icon:hover,.bps-table-home-delete-icon:hover{cursor:pointer}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr:hover .bps-table-home-more-icon:after,::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row .bps-table-home-more-icon:after{content:url(/assets/bps-icons/sps_dots_icon_home_hover_active.svg)}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr:hover .bps-table-home-delete-icon:after,::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row .bps-table-home-delete-icon:after{content:url(/assets/bps-icons/sps_arrowdeleteshare_icon_home_active_right.svg)}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr:hover .bps-table-home-delete-icon.bps-table-home-delete-icon-position-updated:after,::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row .bps-table-home-delete-icon.bps-table-home-delete-icon-position-updated:after{content:url(/assets/bps-icons/sps_arrowdeleteshare_icon_home_active_bottom.svg)}::ng-deep .bps-table-glass_profile .bps-table .ant-table table{border-spacing:0 5px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-thead>tr>th,::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){font-size:11px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-thead>tr>th{padding:7px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-thead>tr>th:first-child{padding-left:20px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel):first-child{border-radius:3px 0 0 3px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel):last-child{border-radius:0 3px 3px 0!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){background-color:#363636!important;border-right:none!important;border-left:none!important;border-collapse:separate!important;padding:11px 5px}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-expandable-panel){background-color:#363636!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled){cursor:pointer}::ng-deep .bps-table .ant-table-column-sorters{display:inline-flex}::ng-deep .bps-table .ant-table-thead>tr>th .ant-table-column-sorter{vertical-align:top!important;top:0;position:relative}::ng-deep .bps-table .ant-table-thead>tr>th.bps-column-disabled{color:#666!important}::ng-deep .bps-table .ant-table-thead>tr>th.bps-column-disabled:hover{cursor:not-allowed}.bps-table-glass-filter{width:185px;font-size:10px!important;height:20px!important;border:none!important;margin-left:20px}::ng-deep .bps-table-glass_profile .bps-table .ant-table-thead>tr>th{border-top:none!important}.bps-table-glass-filter::placeholder{color:#666;font-size:10px}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled){box-shadow:0 1px #445c67 inset,0 -1px #445c67 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled):first-child{box-shadow:1px 0 #445c67 inset,0 1px #445c67 inset,0 -1px #445c67 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled):last-child{box-shadow:0 1px #445c67 inset,0 -1px #445c67 inset,-1px 0 #445c67 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td{border-bottom:none!important;transition:all .3s}.bps-td-disabled{cursor:not-allowed}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.bps-td-disabled),::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-disabled){box-shadow:0 1px #00a2d1 inset,0 -1px #00a2d1 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.bps-td-disabled):first-child,::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-disabled):first-child{box-shadow:1px 0 #00a2d1 inset,0 1px #00a2d1 inset,0 -1px #00a2d1 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-disabled):last-child,::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.bps-td-disabled):last-child{box-shadow:0 1px #00a2d1 inset,0 -1px #00a2d1 inset,-1px 0 #00a2d1 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.bps-table4-custom-row>td,::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.bps-table4-custom-row:hover>td{background-color:#253d47!important}::ng-deep .ant-table-fixed-header .ant-table-scroll .ant-table-header::-webkit-scrollbar{border:none!important}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-expanded-row>td{padding:0!important;border-bottom:none!important}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.bps-table-home-expanded-row>td{border-bottom:none!important}::ng-deep .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar{width:8px!important;height:8px!important}::ng-deep .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-track{background-color:#313131!important}::ng-deep .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-thumb{background-color:#262626!important;border-radius:10px!important;border:2px solid #313131!important;background-clip:padding-box!important}::ng-deep .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#262626!important;border-radius:10px!important}::ng-deep .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-corner{background-color:#313131!important}.bps-editable-cell-input-home-table{padding-left:4px!important;border-radius:4px!important;width:95%!important}.bps-report-table-menu-pencil:after{content:\"\";position:absolute;top:5px;right:5px}::ng-deep .bps-table-report .ant-table-tbody>tr:hover td:not(.bps-td-disabled) .bps-report-table-menu-pencil:after{content:url(/assets/bps-icons/sps_editname_icon_home_hoverrow.svg);transform:scale(.95)}td:not(.bps-td-disabled) .bps-report-table-menu-pencil:hover:after{content:url(/assets/bps-icons/sps_editname_icon_home_hover.svg)!important;position:absolute;top:5px;right:5px;cursor:pointer}\n"] }]
    }], () => [{ type: i0.ChangeDetectorRef }, { type: i1.NzI18nService }], { data: [{
            type: Input
        }], frontPagination: [{
            type: Input
        }], total: [{
            type: Input
        }], pageIndex: [{
            type: Input
        }], pageSize: [{
            type: Input
        }], showPagination: [{
            type: Input
        }], paginationPosition: [{
            type: Input
        }], bordered: [{
            type: Input
        }], widthConfig: [{
            type: Input
        }], loading: [{
            type: Input
        }], loadingDelay: [{
            type: Input
        }], loadingIndicator: [{
            type: Input
        }], scroll: [{
            type: Input
        }], title: [{
            type: Input
        }], footer: [{
            type: Input
        }], noResult: [{
            type: Input
        }], pageSizeOptions: [{
            type: Input
        }], showQuickJumper: [{
            type: Input
        }], showSizeChanger: [{
            type: Input
        }], showTotal: [{
            type: Input
        }], hideOnSinglePage: [{
            type: Input
        }], simple: [{
            type: Input
        }], virtualItemSize: [{
            type: Input
        }], virtualMaxBufferPx: [{
            type: Input
        }], virtualMinBufferPx: [{
            type: Input
        }], virtualForTrackBy: [{
            type: Input
        }], inlineEdit: [{
            type: Input
        }], pageIndexChange: [{
            type: Output
        }], currentPageDataChange: [{
            type: Output
        }], queryParamsChange: [{
            type: Output
        }], pageSizeChange: [{
            type: Output
        }], onclickRow: [{
            type: Output
        }], ondblclickRow: [{
            type: Output
        }], selectionChange: [{
            type: Output
        }], singleSort: [{
            type: Input
        }], sortChange: [{
            type: Output
        }], config: [{
            type: Input
        }], configChange: [{
            type: Output
        }], gridID: [{
            type: Input
        }], filterPlaceholder: [{
            type: Input
        }], onedit: [{
            type: Output
        }], tableType: [{
            type: Input
        }], expandable: [{
            type: Input
        }], searchValueChange: [{
            type: Output
        }], moreBtnClicked: [{
            type: Output
        }], deleteBtnClicked: [{
            type: Output
        }], expandChange: [{
            type: Output
        }], moreMenu: [{
            type: Input
        }], deleteMenu: [{
            type: Input
        }], rowExpandTemplate: [{
            type: Input
        }], inputElement: [{
            type: ViewChild,
            args: [BpsInputDirective, { static: false, read: ElementRef }]
        }], handleClick: [{
            type: HostListener,
            args: ['window:mouseup', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsTableComponent, { className: "BpsTableComponent", filePath: "lib\\components\\bps-table\\bps-table.component.ts", lineNumber: 52 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXRhYmxlL2Jwcy10YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy10YWJsZS9icHMtdGFibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBR04sU0FBUyxFQUlULFVBQVUsRUFDVixZQUFZLEVBQ1osdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQVUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUl6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7SUN0QmxFLGlDQUttRDtJQUE1QyxBQURBLG9MQUFTLDZCQUFzQixLQUFDLHVLQUN2Qix3Q0FBaUMsS0FBQztJQUxsRCxpQkFLbUQ7OztJQUY1QyxzREFBaUM7OztJQXNDbEMseUJBR0s7O0lBRkQsZ0NBQWtCOzs7SUFlZCx3QkFBcUc7OztJQUR2Ryw2QkFBcUQ7SUFDbkQsa0lBQXNGOzs7O0lBQXZFLGNBQXNDO0lBQUEsQUFBdEMsd0RBQXNDLHNEQUErQjs7O0lBRTlELFlBQWlCOzs7SUFBakIsc0NBQWlCOzs7SUFFekMsNkJBQTZDO0lBQzNDLDRCQUErRDs7Ozs7SUFBakQsY0FBaUM7SUFBakMsa0RBQWlD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O2tCQUF4QyxLQUFLO1lBQ21CLE1BQU07a0JBQTlCLEtBQUs7WUFDa0IsZUFBZTtrQkFBdEMsS0FBSztZQUNrQixrQkFBa0I7a0JBQXpDLEtBQUs7WUFDa0Isa0JBQWtCO2tCQUF6QyxLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ21CLFVBQVU7a0JBQWxDLEtBQUs7WUFDSSxlQUFlO2tCQUF4QixNQUFNO1lBQ0cscUJBQXFCO2tCQUE5QixNQUFNO1lBQ0csaUJBQWlCO2tCQUExQixNQUFNO1lBQ0csY0FBYztrQkFBdkIsTUFBTTtZQUNHLFVBQVU7a0JBQW5CLE1BQU07WUFDRyxhQUFhO2tCQUF0QixNQUFNO1lBQ0csZUFBZTtrQkFBeEIsTUFBTTtZQUdFLFVBQVU7a0JBQWxCLEtBQUs7WUFDSSxVQUFVO2tCQUFuQixNQUFNO1lBR0UsTUFBTTtrQkFBZCxLQUFLO1lBQ0ksWUFBWTtrQkFBckIsTUFBTTtZQUNFLE1BQU07a0JBQWQsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNJLE1BQU07a0JBQWYsTUFBTTtZQUNFLFNBQVM7a0JBQWpCLEtBQUs7WUFDbUIsVUFBVTtrQkFBbEMsS0FBSztZQUNJLGlCQUFpQjtrQkFBMUIsTUFBTTtZQUNHLGNBQWM7a0JBQXZCLE1BQU07WUFDRyxnQkFBZ0I7a0JBQXpCLE1BQU07WUFDRyxZQUFZO2tCQUFyQixNQUFNO1lBQ0UsUUFBUTtrQkFBaEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFFNkQsWUFBWTtrQkFBOUUsU0FBUzttQkFBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUlqRSxXQUFXO2tCQURWLFlBQVk7bUJBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7O2tGQTVFL0IsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFRyYWNrQnlGdW5jdGlvbixcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCwgY29uZmlnIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCwgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IFRhYmxlQ29uZmlnLCBGaWVsZCB9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlcy9ncmlkLWNvbmZpZyc7XHJcbmltcG9ydCB7IEJwc0lucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi4vYnBzLWlucHV0L2Jwcy1pbnB1dC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuZXhwb3J0IHR5cGUgQnBzVGFibGVUeXBlID0gJ3JlcG9ydCcgfCAnaG9tZScgfCAnZ2xhc3NfcHJvZmlsZSc7XHJcblxyXG5leHBvcnQgdmFyIFRlbXBsYXRlVHlwZSA9IHtcclxuICBEYXRlOiAnRGF0ZScsXHJcbiAgU2VsZWN0OiAnU2VsZWN0JyxcclxuICBOdW1iZXI6ICdOdW1iZXInLFxyXG4gIFN0cmluZzogJ1N0cmluZycsXHJcbiAgQm9vbGVhbjogJ0Jvb2xlYW4nLFxyXG4gIFRpbWU6ICdUaW1lJyxcclxufVxyXG5cclxuZXhwb3J0IHZhciBDZWxkVHlwZSA9IHtcclxuICBEZWZhdWx0OiAnRGVmYXVsdCcsXHJcbiAgVGVtcGxhdGVSZWY6ICdUZW1wbGF0ZVJlZidcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2Jwcy10YWJsZScsXHJcbiAgZXhwb3J0QXM6ICdicHNUYWJsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy10YWJsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnBzLXRhYmxlLmNvbXBvbmVudC5jc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbmV4cG9ydCBjbGFzcyBCcHNUYWJsZUNvbXBvbmVudDxUID0gYW55PiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG4gIGxvY2FsZTogYW55ID0ge307IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgY2hlY2tib3hDYWNoZTogQ2hlY2tib3hTZWxlY3RbXSA9IFtdO1xyXG4gIG1hcE9mRXhwYW5kRGF0YTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcclxuICBfZGF0YSA9IFtdO1xyXG4gIGVkaXRJZCA9IG51bGw7XHJcbiAgZWRpdFByb3BlcnR5ID0gbnVsbDtcclxuICBpc0V4cGFuZGVkID0gZmFsc2U7XHJcbiAgc2VhcmNoQm94SG92ZXJlZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX3NlYXJjaFN1YmplY3Q6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIC8qIFRhYmxlIEFQSSAqLyBcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWlucHV0LXJlbmFtZVxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRhdGEoZGF0YSkge1xyXG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XHJcbiAgICB0aGlzLnVwZGF0ZUNoZWNrYm94Q2FjaGUoKTtcclxuICB9XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZyb250UGFnaW5hdGlvbiA9IHRydWU7XHJcbiAgQElucHV0KCkgdG90YWwgPSAwO1xyXG4gIEBJbnB1dCgpIHBhZ2VJbmRleCA9IDE7XHJcbiAgQElucHV0KCkgcGFnZVNpemUgPSAxMDtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1BhZ2luYXRpb24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHBhZ2luYXRpb25Qb3NpdGlvbjogJ3RvcCcgfCAnYm90dG9tJyB8ICdib3RoJyA9ICdib3R0b20nO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBib3JkZXJlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHdpZHRoQ29uZmlnOiBzdHJpbmdbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbG9hZGluZ0RlbGF5ID0gMDtcclxuICBASW5wdXQoKSBsb2FkaW5nSW5kaWNhdG9yOiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBzY3JvbGw6IHsgeD86IHN0cmluZyB8IG51bGw7IHk/OiBzdHJpbmcgfCBudWxsIH0gPSB7IHg6IG51bGwsIHk6IG51bGwgfTtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgZm9vdGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBub1Jlc3VsdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgcGFnZVNpemVPcHRpb25zID0gWzEwLCAyMCwgMzAsIDQwLCA1MF07XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dRdWlja0p1bXBlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93U2l6ZUNoYW5nZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaG93VG90YWw6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBudW1iZXI7IHJhbmdlOiBbbnVtYmVyLCBudW1iZXJdIH0+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBoaWRlT25TaW5nbGVQYWdlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNpbXBsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxJdGVtU2l6ZSA9IDA7XHJcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmlydHVhbE1heEJ1ZmZlclB4ID0gMjAwO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxNaW5CdWZmZXJQeCA9IDEwMDtcclxuICBASW5wdXQoKSB2aXJ0dWFsRm9yVHJhY2tCeTogVHJhY2tCeUZ1bmN0aW9uPFQ+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpbmxpbmVFZGl0ID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHBhZ2VJbmRleENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBjdXJyZW50UGFnZURhdGFDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgcXVlcnlQYXJhbXNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgcGFnZVNpemVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25jbGlja1JvdyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmRibGNsaWNrUm93ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuLyogVGhlYWQgQVBJICovXHJcbiAgQElucHV0KCkgc2luZ2xlU29ydCA9IHRydWU7XHJcbiAgQE91dHB1dCgpIHNvcnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBcclxuICAvKiBCUFMgQVBJICovIFxyXG4gIEBJbnB1dCgpIGNvbmZpZzogVGFibGVDb25maWc7XHJcbiAgQE91dHB1dCgpIGNvbmZpZ0NoYW5nZTogRXZlbnRFbWl0dGVyPFRhYmxlQ29uZmlnPiA9IG5ldyBFdmVudEVtaXR0ZXI8VGFibGVDb25maWc+KCk7XHJcbiAgQElucHV0KCkgZ3JpZElEOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZmlsdGVyUGxhY2Vob2xkZXI6IHN0cmluZztcclxuICBAT3V0cHV0KCkgb25lZGl0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQElucHV0KCkgdGFibGVUeXBlOiBCcHNUYWJsZVR5cGUgPSAncmVwb3J0JztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZXhwYW5kYWJsZSA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBzZWFyY2hWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgbW9yZUJ0bkNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGRlbGV0ZUJ0bkNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGV4cGFuZENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBASW5wdXQoKSBtb3JlTWVudTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBASW5wdXQoKSBkZWxldGVNZW51OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBJbnB1dCgpIHJvd0V4cGFuZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBAVmlld0NoaWxkKEJwc0lucHV0RGlyZWN0aXZlLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IEVsZW1lbnRSZWYgfSkgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIGZvcmNlVXBkYXRlID0gZmFsc2U7XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzptb3VzZXVwJywgWyckZXZlbnQnXSlcclxuICBoYW5kbGVDbGljayhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5lZGl0SWQgIT09IG51bGwgJiYgdGhpcy5pbnB1dEVsZW1lbnQgJiYgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCAhPT0gZS50YXJnZXQpIHtcclxuICAgICAgdGhpcy5lbWl0T25FZGl0RXZlbnQoKTtcclxuICAgICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc29ydChzb3J0OiB7IGtleTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0pOiB2b2lkIHtcclxuICAgIGNvbnN0IGZpZWxkOiBhbnkgPSB0aGlzLmdldEZpZWxkcygpLmZpbHRlcihpdGVtID0+IGl0ZW0ucHJvcGVydHkgPT09IHNvcnQua2V5KVswXTtcclxuICAgIGlmIChmaWVsZC5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnNvcnRDaGFuZ2UuZW1pdCh7IHNvcnROYW1lOiBzb3J0LmtleSwgc29ydFZhbHVlOiBzb3J0LnZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgZW1pdE9uRWRpdEV2ZW50KCkge1xyXG4gICAgbGV0IGVkaXRlZEVsID0gdGhpcy5fZGF0YS5maWx0ZXIoZWwgPT4gZWxbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IHRoaXMuZWRpdElkKTtcclxuICAgIGlmIChlZGl0ZWRFbC5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5vbmVkaXQuZW1pdChlZGl0ZWRFbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb2N1c0lucHV0KCRldmVudDogRXZlbnQsIGlucHV0OiBhbnkpIHtcclxuXHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICRldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIGlucHV0LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBlbmRFZGl0TW9kZSgkZXZlbnQ6IEtleWJvYXJkRXZlbnQsIGluZGV4OiBudW1iZXIsIGRhdGE6IGFueSA9IG51bGwpIHtcclxuICAgIGlmICgkZXZlbnQua2V5ID09PSAnRW50ZXInIHx8ICRldmVudC5rZXkgPT09ICdlbnRlcicpIHtcclxuICAgICAgdGhpcy5lbWl0T25FZGl0RXZlbnQoKTtcclxuICAgICAgdGhpcy5lZGl0SWQgPSBudWxsO1xyXG4gICAgICB0aGlzLmVkaXRQcm9wZXJ0eSA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmV2ZW50RGVmYXVsdCgkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgZW1pdEJwc0V2ZW50KCRldmVudCwgdHlwZTogc3RyaW5nKSB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSAncGFnZUluZGV4JzpcclxuICAgICAgICB0aGlzLnBhZ2VJbmRleENoYW5nZS5lbWl0KCRldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2N1cnJlbnRQYWdlRGF0YSc6XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZURhdGFDaGFuZ2UuZW1pdCgkZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdxdWVyeVBhcmFtcyc6XHJcbiAgICAgICAgdGhpcy5xdWVyeVBhcmFtc0NoYW5nZS5lbWl0KCRldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3BhZ2VTaXplJzpcclxuICAgICAgICB0aGlzLnBhZ2VTaXplQ2hhbmdlLmVtaXQoJGV2ZW50KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnbW9yZUJ0bkNsaWNrZWQnOlxyXG4gICAgICAgIHRoaXMubW9yZUJ0bkNsaWNrZWQuZW1pdCgkZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdkZWxldGVCdG5DbGlja2VkJzpcclxuICAgICAgICB0aGlzLmRlbGV0ZUJ0bkNsaWNrZWQuZW1pdCgkZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0RmllbGRzKCk6IEZpZWxkW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcuZmllbGRzLmZpbHRlcihpdGVtID0+IGl0ZW0uaGlkZGVuID09PSB1bmRlZmluZWQgfHwgIWl0ZW0uaGlkZGVuKSA6IFtdO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2VcclxuICApIHtcclxuICAgIHRoaXMuX3NldFNlYXJjaFN1YnNjcmlwdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2V0U2VhcmNoU3Vic2NyaXB0aW9uKCkge1xyXG4gICAgdGhpcy5fc2VhcmNoU3ViamVjdC5waXBlKFxyXG4gICAgICBkZWJvdW5jZVRpbWUoNTAwKVxyXG4gICAgKS5zdWJzY3JpYmUoKHNlYXJjaFZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgICAgdGhpcy5zZWFyY2hWYWx1ZUNoYW5nZS5lbWl0KHNlYXJjaFZhbHVlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZVNlYXJjaChzZWFyY2hUZXh0VmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fc2VhcmNoU3ViamVjdC5uZXh0KHNlYXJjaFRleHRWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy5kYXRhICYmIHRoaXMuY29uZmlnKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2hlY2tib3hDYWNoZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUYWJsZScpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICAgIHRoaXMuX3NlYXJjaFN1YmplY3QudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIGlzQ2VsZFR5cGVUZW1wbGF0ZVJlZihmaWVsZDogRmllbGQpIHtcclxuICAgIHJldHVybiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuVGVtcGxhdGVSZWY7XHJcbiAgfVxyXG5cclxuICBpc0NlbGRUeXBlRGVmYXVsdChmaWVsZDogRmllbGQpIHtcclxuICAgIHJldHVybiBmaWVsZC5jZWxkVHlwZSA9PT0gQ2VsZFR5cGUuRGVmYXVsdDtcclxuICB9XHJcblxyXG4gIGdldFREQ2xhc3NNYXAoZmllbGQ6IEZpZWxkLCBkYXRhLCBmaSA9IDk5OTkpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmZpZWxkLm5nQ2xhc3MsXHJcbiAgICAgIFsnYnBzLXRkLWRpc2FibGVkJ106IGRhdGEuZGlzYWJsZWQsXHJcbiAgICAgIFsnYnBzLXRkLW5vLXBhZGRpbmcnXTogZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXSA9PT0gdGhpcy5lZGl0SWQsXHJcbiAgICAgIFsnYnBzLWZzdC1jb2x1bW4nXTogIWZpLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNSb3dTZWxlY3RlZChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmNvbmZpZykge1xyXG4gICAgICBjb25zdCBkYXRhU2VsZWN0ZWQgPSB0aGlzLmNoZWNrYm94Q2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCkubWFwKGl0ZW0gPT4gaXRlbS5kYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdKTtcclxuICAgICAgcmV0dXJuIGRhdGFTZWxlY3RlZC5pbmRleE9mKGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pICE9PSAtMTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNoZWNrYm94Q2FjaGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCB0ZW1wID0gWy4uLnRoaXMuY2hlY2tib3hDYWNoZV07XHJcbiAgICB0aGlzLmNoZWNrYm94Q2FjaGUubGVuZ3RoID0gMDtcclxuICAgIHRoaXMuX2RhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgY2hlY2tJdGVtID0gdGVtcC5maWx0ZXIoZSA9PiBlLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IGl0ZW1bdGhpcy5jb25maWcuZmllbGRJZF0pO1xyXG4gICAgICB0aGlzLmNoZWNrYm94Q2FjaGUucHVzaCh7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IGNoZWNrSXRlbS5sZW5ndGggPyBjaGVja0l0ZW1bMF0uc2VsZWN0ZWQgOiBmYWxzZSxcclxuICAgICAgICBkYXRhOiBpdGVtXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbGlja3MgPSAwO1xyXG4gIGNsaWNrUm93KGV2ZW50OiBNb3VzZUV2ZW50LCBkYXRhOiBhbnkpIHtcclxuICAgIHRoaXMuY2xpY2tzKys7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuY2xpY2tzID09PSAxKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RSb3coZGF0YSk7XHJcbiAgICAgICAgaWYgKHRoaXMuZXhwYW5kYWJsZSkge1xyXG4gICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5jb25maWcuZmllbGRJZDtcclxuICAgICAgICAgIHRoaXMuZXhwYW5kUm93KGRhdGEsICF0aGlzLm1hcE9mRXhwYW5kRGF0YVtkYXRhW2tleV1dKTtcclxuICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmNsaWNrcyA9PT0gMil7XHJcbiAgICAgICAgdGhpcy5vbmRibGNsaWNrUm93LmVtaXQoZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jbGlja3MgPSAwO1xyXG4gICAgfSwgMzAwKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0RWRpdChkYXRhOiBhbnksIGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAodGhpcy5pbmxpbmVFZGl0ICYmICFkYXRhLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuZWRpdElkID0gZGF0YVt0aGlzLmNvbmZpZy5maWVsZElkXTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0KCk7XHJcbiAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlZGl0Um93KGRhdGEsIHByb3BlcnR5KSB7XHJcbiAgICBpZiAoIWRhdGEuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5lZGl0SWQgPSBkYXRhW3RoaXMuY29uZmlnLmZpZWxkSWRdO1xyXG4gICAgICB0aGlzLmVkaXRQcm9wZXJ0eSA9IHByb3BlcnR5O1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5zZWxlY3QoKTtcclxuICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdFJvdyhkYXRhOiBhbnksIHNlbGVjdGlvbk9ubHkgPSBmYWxzZSkge1xyXG4gICAgaWYgKCFkYXRhLmRpc2FibGVkKSB7XHJcbiAgICAgIGlmICghc2VsZWN0aW9uT25seSkge1xyXG4gICAgICAgIHRoaXMub25jbGlja1Jvdy5lbWl0KGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2hlY2tib3hDYWNoZS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0gPT09IGRhdGFbdGhpcy5jb25maWcuZmllbGRJZF0pIHtcclxuICAgICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChpdGVtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbS5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0gIFxyXG4gIH1cclxuXHJcbiAgZXhwYW5kUm93KGRhdGEsICRldmVudCkge1xyXG4gICAgdGhpcy5tYXBPZkV4cGFuZERhdGEgPSB7fTtcclxuICAgIHRoaXMubWFwT2ZFeHBhbmREYXRhW2RhdGFbdGhpcy5jb25maWcuZmllbGRJZF1dID0gJGV2ZW50O1xyXG4gICAgdGhpcy5leHBhbmRDaGFuZ2UuZW1pdCh0aGlzLm1hcE9mRXhwYW5kRGF0YSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VJY29uKCRldmVudCkge1xyXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSA9ICRldmVudDtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrYm94U2VsZWN0IHtcclxuICBkYXRhOiBhbnk7XHJcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XHJcbn1cclxuIiwiPGRpdiBpZD1cInt7Z3JpZElEfX1cIlxyXG4gICAgIGNsYXNzPVwiYnBzLXRhYmxlLXt7dGFibGVUeXBlfX1cIj5cclxuICA8aW5wdXQgYnBzLWlucHV0XHJcbiAgICAgICAgICpuZ0lmPVwidGFibGVUeXBlID09PSAnZ2xhc3NfcHJvZmlsZSdcIlxyXG4gICAgICAgICBjbGFzcz1cImJwcy10YWJsZS1nbGFzcy1maWx0ZXJcIlxyXG4gICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmlsdGVyUGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAoY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgIChrZXl1cCk9XCJ1cGRhdGVTZWFyY2goJGV2ZW50LnRhcmdldC52YWx1ZSlcIj5cclxuICA8bnotdGFibGUgI2dyaWRDb21wb25lbnRcclxuICAgICAgICAgICAgY2xhc3M9XCJicHMtdGFibGVcIlxyXG4gICAgICAgICAgICBbbnpEYXRhXT1cIl9kYXRhXCJcclxuICAgICAgICAgICAgW256RnJvbnRQYWdpbmF0aW9uXT1cImZyb250UGFnaW5hdGlvblwiXHJcbiAgICAgICAgICAgIFtuelRvdGFsXT1cInRvdGFsXCJcclxuICAgICAgICAgICAgW256UGFnZUluZGV4XT1cInBhZ2VJbmRleFwiXHJcbiAgICAgICAgICAgIFtuelBhZ2VTaXplXT1cInBhZ2VTaXplXCJcclxuICAgICAgICAgICAgW256U2hvd1BhZ2luYXRpb25dPVwic2hvd1BhZ2luYXRpb25cIlxyXG4gICAgICAgICAgICBbbnpQYWdpbmF0aW9uUG9zaXRpb25dPVwicGFnaW5hdGlvblBvc2l0aW9uXCJcclxuICAgICAgICAgICAgW256Qm9yZGVyZWRdPVwiYm9yZGVyZWRcIlxyXG4gICAgICAgICAgICBbbnpXaWR0aENvbmZpZ109XCJ3aWR0aENvbmZpZ1wiXHJcbiAgICAgICAgICAgIFtuekxvYWRpbmddPVwibG9hZGluZ1wiXHJcbiAgICAgICAgICAgIFtuekxvYWRpbmdJbmRpY2F0b3JdPVwibG9hZGluZ0luZGljYXRvclwiXHJcbiAgICAgICAgICAgIFtuekxvYWRpbmdEZWxheV09XCJsb2FkaW5nRGVsYXlcIlxyXG4gICAgICAgICAgICBbbnpTY3JvbGxdPVwic2Nyb2xsXCJcclxuICAgICAgICAgICAgW256VGl0bGVdPVwidGl0bGVcIlxyXG4gICAgICAgICAgICBbbnpGb290ZXJdPVwiZm9vdGVyXCJcclxuICAgICAgICAgICAgW256Tm9SZXN1bHRdPVwibm9SZXN1bHRcIlxyXG4gICAgICAgICAgICBbbnpQYWdlU2l6ZU9wdGlvbnNdPVwicGFnZVNpemVPcHRpb25zXCJcclxuICAgICAgICAgICAgW256U2hvd1F1aWNrSnVtcGVyXT1cInNob3dRdWlja0p1bXBlclwiXHJcbiAgICAgICAgICAgIFtuelNob3dTaXplQ2hhbmdlcl09XCJzaG93U2l6ZUNoYW5nZXJcIlxyXG4gICAgICAgICAgICBbbnpTaG93VG90YWxdPVwic2hvd1RvdGFsXCJcclxuICAgICAgICAgICAgW256SGlkZU9uU2luZ2xlUGFnZV09XCJoaWRlT25TaW5nbGVQYWdlXCJcclxuICAgICAgICAgICAgW256U2ltcGxlXT1cInNpbXBsZVwiXHJcbiAgICAgICAgICAgIFtuelZpcnR1YWxJdGVtU2l6ZV09XCJ2aXJ0dWFsSXRlbVNpemVcIlxyXG4gICAgICAgICAgICBbbnpWaXJ0dWFsTWF4QnVmZmVyUHhdPVwidmlydHVhbE1heEJ1ZmZlclB4XCJcclxuICAgICAgICAgICAgW256VmlydHVhbE1pbkJ1ZmZlclB4XT1cInZpcnR1YWxNaW5CdWZmZXJQeFwiXHJcbiAgICAgICAgICAgIFtuelZpcnR1YWxGb3JUcmFja0J5XT1cInZpcnR1YWxGb3JUcmFja0J5XCJcclxuICAgICAgICAgICAgKG56UGFnZUluZGV4Q2hhbmdlKT1cImVtaXRCcHNFdmVudCgkZXZlbnQsICdwYWdlSW5kZXgnKVwiXHJcbiAgICAgICAgICAgIChuekN1cnJlbnRQYWdlRGF0YUNoYW5nZSk9XCJlbWl0QnBzRXZlbnQoJGV2ZW50LCAnY3VycmVudFBhZ2VEYXRhJylcIlxyXG4gICAgICAgICAgICAobnpRdWVyeVBhcmFtcyk9XCJlbWl0QnBzRXZlbnQoJGV2ZW50LCAncXVlcnlQYXJhbXMnKVwiXHJcbiAgICAgICAgICAgIChuelBhZ2VTaXplQ2hhbmdlKT1cImVtaXRCcHNFdmVudCgkZXZlbnQsICdwYWdlU2l6ZScpXCI+XHJcbiAgICA8dGhlYWQ+XHJcbiAgICAgIDx0cj5cclxuXHJcbiAgICAgICAgPHRoICpuZ0lmPVwiZXhwYW5kYWJsZVwiXHJcbiAgICAgICAgICAgIFtueldpZHRoXT1cIic0MHB4J1wiXHJcbiAgICAgICAgICAgIG56U2hvd0V4cGFuZD5cclxuICAgICAgICA8L3RoPlxyXG5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBnZXRGaWVsZHMoKTsgaW5kZXggYXMgdGhcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZC5zaG93U29ydFwiPlxyXG4gICAgICAgICAgICA8dGggW25nQ2xhc3NdPVwiZmllbGQubmdDbGFzc1wiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3MuYnBzLWNvbHVtbi1kaXNhYmxlZF09XCJmaWVsZC5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICBbKG56U29ydE9yZGVyKV09XCJmaWVsZC5zb3J0T3JkZXJcIlxyXG5cclxuICAgICAgICAgICAgICAgIFtuelNob3dTb3J0XT1cImZpZWxkLnNob3dTb3J0XCJcclxuICAgICAgICAgICAgICAgIChuelNvcnRPcmRlckNoYW5nZSk9XCJzb3J0KHtrZXk6IGZpZWxkLnByb3BlcnR5LCB2YWx1ZTogJGV2ZW50fSlcIlxyXG4gICAgICAgICAgICAgICAgbnpDdXN0b21GaWx0ZXJcclxuICAgICAgICAgICAgICAgIFtueldpZHRoXT1cImZpZWxkLndpZHRoXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkLnRlbXBsYXRlOyBlbHNlIGNlbGxWYWx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImZpZWxkLnRlbXBsYXRlLnJlZjsgY29udGV4dDogZmllbGQudGVtcGxhdGUuY29udGV4dFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjY2VsbFZhbHVlPnt7ZmllbGQuZGlzcGxheX19PC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkLnNob3dDdXN0b21GaWx0ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tRmlsdGVyXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWZpZWxkLnNob3dTb3J0XCI+XHJcbiAgICAgICAgICAgIDx0aCBbbmdDbGFzc109XCJmaWVsZC5uZ0NsYXNzXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5icHMtY29sdW1uLWRpc2FibGVkXT1cImZpZWxkLmRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgIG56Q3VzdG9tRmlsdGVyXHJcbiAgICAgICAgICAgICAgICBbbnpXaWR0aF09XCJmaWVsZC53aWR0aFwiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZC50ZW1wbGF0ZTsgZWxzZSBjZWxsVmFsdWVcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJmaWVsZC50ZW1wbGF0ZS5yZWY7IGNvbnRleHQ6IGZpZWxkLnRlbXBsYXRlLmNvbnRleHRcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2NlbGxWYWx1ZT57e2ZpZWxkLmRpc3BsYXl9fTwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZC5zaG93Q3VzdG9tRmlsdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbUZpbHRlclwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+ICAgICBcclxuXHJcbiAgICAgICAgPHRoICpuZ0lmPVwidGFibGVUeXBlID09PSAnaG9tZSdcIlxyXG4gICAgICAgICAgICBbbnpXaWR0aF09XCInNzBweCdcIj5cclxuICAgICAgICA8L3RoPlxyXG4gICAgICA8L3RyPlxyXG4gICAgPC90aGVhZD5cclxuXHJcbiAgICA8dGJvZHk+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtZGF0YSBbbmdGb3JPZl09XCJncmlkQ29tcG9uZW50LmRhdGFcIiBsZXQtaT1cImluZGV4XCI+XHJcbiAgICAgICAgPHRyIFtjbGFzcy5hbnQtdGFibGUtc2VsZWN0ZWQtcm93XT1cImlzUm93U2VsZWN0ZWQoZGF0YSlcIlxyXG4gICAgICAgICAgICBbY2xhc3MuYnBzLXRhYmxlNC1jdXN0b20tcm93XT1cImRhdGEuYnBzVGFibGU0Q3VzdG9tUm93XCJcclxuICAgICAgICAgICAgW2NsYXNzLmJwcy10YWJsZS1ob21lLWV4cGFuZGVkLXJvd109XCJtYXBPZkV4cGFuZERhdGFbZGF0YVtjb25maWcuZmllbGRJZF1dXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cImNsaWNrUm93KCRldmVudCwgZGF0YSlcIlxyXG4gICAgICAgICAgICBbY2xhc3MuYnBzLXRhYmxlLXBhaXItcm93XT1cInRhYmxlVHlwZSA9PT0gJ3JlcG9ydCcgJiYgIShpICUgMilcIj5cclxuXHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZXhwYW5kYWJsZVwiPlxyXG4gICAgICAgICAgICA8dGQgbnpTaG93RXhwYW5kXHJcbiAgICAgICAgICAgICAgICBzdHlsZT1cImJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudFwiXHJcbiAgICAgICAgICAgICAgICAobnpFeHBhbmRDaGFuZ2UpPVwiZXhwYW5kUm93KGRhdGEsICRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgW256RXhwYW5kXT1cIm1hcE9mRXhwYW5kRGF0YVtkYXRhW2NvbmZpZy5maWVsZElkXV1cIj48L3RkPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBnZXRGaWVsZHMoKTsgaW5kZXggYXMgZmlcIlxyXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImdldFREQ2xhc3NNYXAoZmllbGQsIGRhdGEsIGZpKVwiPlxyXG5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzQ2VsZFR5cGVUZW1wbGF0ZVJlZihmaWVsZClcIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJkYXRhW2ZpZWxkLnByb3BlcnR5XS5yZWY7IGNvbnRleHQ6IGRhdGFbZmllbGQucHJvcGVydHldLmNvbnRleHRcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNDZWxkVHlwZURlZmF1bHQoZmllbGQpICYmIHRhYmxlVHlwZSAhPT0gJ2hvbWUnXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVkaXRJZCAhPT0gZGF0YVtjb25maWcuZmllbGRJZF07IGVsc2UgZWRpdFRwbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJwcy10YWJsZS10ZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIHt7IGRhdGFbZmllbGQucHJvcGVydHldIH19XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZmlcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJicHMtcmVwb3J0LXRhYmxlLW1lbnUtcGVuY2lsXCIgKGNsaWNrKT1cInN0YXJ0RWRpdChkYXRhLCAkZXZlbnQpXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNlZGl0VHBsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGJwcy1pbnB1dCBbKG5nTW9kZWwpXT1cImRhdGFbZmllbGQucHJvcGVydHldXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJwcy1lZGl0YWJsZS1jZWxsLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImVuZEVkaXRNb2RlKCRldmVudCwgaSwgZGF0YSlcIiAvPlxyXG4gICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzQ2VsZFR5cGVEZWZhdWx0KGZpZWxkKSAmJiB0YWJsZVR5cGUgPT09ICdob21lJ1wiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJlZGl0SWQgIT09IGRhdGFbY29uZmlnLmZpZWxkSWRdIHx8IGVkaXRQcm9wZXJ0eSAhPT0gZmllbGQucHJvcGVydHlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIHt7IGRhdGFbZmllbGQucHJvcGVydHldIH19XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZWRpdElkID09PSBkYXRhW2NvbmZpZy5maWVsZElkXSAmJiBlZGl0UHJvcGVydHkgPT09IGZpZWxkLnByb3BlcnR5XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgYnBzLWlucHV0IFsobmdNb2RlbCldPVwiZGF0YVtmaWVsZC5wcm9wZXJ0eV1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnBzLWVkaXRhYmxlLWNlbGwtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5icHMtZWRpdGFibGUtY2VsbC1pbnB1dC1ob21lLXRhYmxlXT1cInRhYmxlVHlwZSA9PT0gJ2hvbWUnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImVuZEVkaXRNb2RlKCRldmVudCwgaSwgZGF0YSlcIiAvPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgIDx0ZCAqbmdJZj1cInRhYmxlVHlwZSA9PT0gJ2hvbWUnXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYnBzLXRhYmxlLWhvbWUtbW9yZS1pY29uXCJcclxuICAgICAgICAgICAgICAgYnBzLWRyb3Bkb3duXHJcbiAgICAgICAgICAgICAgIChjbGljayk9XCJlbWl0QnBzRXZlbnQoZGF0YSwgJ21vcmVCdG5DbGlja2VkJylcIlxyXG4gICAgICAgICAgICAgICBbYnBzRHJvcGRvd25NZW51XT1cIm1vcmVNZW51XCJcclxuICAgICAgICAgICAgICAgYnBzVHJpZ2dlcj1cImNsaWNrXCJcclxuICAgICAgICAgICAgICAgYnBzUGxhY2VtZW50PVwicmlnaHRUb3BcIj48L2k+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYnBzLXRhYmxlLWhvbWUtZGVsZXRlLWljb25cIlxyXG4gICAgICAgICAgICAgICBbY2xhc3MuYnBzLXRhYmxlLWhvbWUtZGVsZXRlLWljb24tcG9zaXRpb24tdXBkYXRlZF09XCJmb3JjZVVwZGF0ZVwiXHJcbiAgICAgICAgICAgICAgIGJwcy1kcm9wZG93blxyXG4gICAgICAgICAgICAgICAoYnBzRm9yY2VkVXBkYXRlZFBvc2l0aW9uKT1cImNoYW5nZUljb24oJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgIChjbGljayk9XCJlbWl0QnBzRXZlbnQoZGF0YSwgJ2RlbGV0ZUJ0bkNsaWNrZWQnKVwiXHJcbiAgICAgICAgICAgICAgIFticHNEcm9wZG93bk1lbnVdPVwiZGVsZXRlTWVudVwiXHJcbiAgICAgICAgICAgICAgIGJwc1RyaWdnZXI9XCJjbGlja1wiXHJcbiAgICAgICAgICAgICAgIGJwc1BsYWNlbWVudD1cInJpZ2h0VG9wXCI+PC9pPlxyXG4gICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgPC90cj5cclxuXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImV4cGFuZGFibGVcIj5cclxuICAgICAgICAgIDx0ciBbbnpFeHBhbmRdPVwibWFwT2ZFeHBhbmREYXRhW2RhdGFbY29uZmlnLmZpZWxkSWRdXVwiPlxyXG4gICAgICAgICAgICA8dGQgW2F0dHIuY29sc3Bhbl09XCJnZXRGaWVsZHMoKS5sZW5ndGggKyAyXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJyb3dFeHBhbmRUZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ZGF0YTogZGF0YSwgaW5kZXg6IGl9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgIDwvdGJvZHk+XHJcbiAgPC9uei10YWJsZT5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGUgI2N1c3RvbUZpbHRlcj5cclxuICA8ZGl2IGNsYXNzPVwiYnBzLXRhYmxlLWZpbHRlci1pY29uXCI+XHJcbiAgICA8YnBzLWlucHV0LWdyb3VwIFticHNQcmVmaXhdPVwic2VhcmNoUHJlZml4SWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJmb2N1c0lucHV0KCRldmVudCwgc2VhcmNoSW5wdXQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwic2VhcmNoQm94SG92ZXJlZCA9IHRydWU7XCJcclxuICAgICAgICAgICAgICAgICAgICAgKG1vdXNlbGVhdmUpPVwic2VhcmNoQm94SG92ZXJlZCA9IGZhbHNlO1wiXHJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnBzLXRhYmxlLWN1c3RvbS1maWx0ZXJcIj5cclxuICAgICAgPGlucHV0IGJwcy1pbnB1dFxyXG4gICAgICAgICAgICAgI3NlYXJjaElucHV0XHJcbiAgICAgICAgICAgICBuei10aC1leHRyYVxyXG4gICAgICAgICAgICAgY2xhc3M9XCJicHMtdGFibGUtZmlsdGVyLWN1c3RvbS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAoY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAoa2V5dXApPVwidXBkYXRlU2VhcmNoKCRldmVudC50YXJnZXQudmFsdWUpXCJcclxuICAgICAgICAgICAgIG56VGFibGVGaWx0ZXI+XHJcbiAgICA8L2Jwcy1pbnB1dC1ncm91cD5cclxuICA8L2Rpdj5cclxuICBcclxuICA8bmctdGVtcGxhdGUgI3NlYXJjaFByZWZpeEljb24gbGV0LWRpc2FibGVkPVwiZmFsc2VcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhc2VhcmNoQm94SG92ZXJlZCAgJiYgIWRpc2FibGVkXCI+XHJcbiAgICAgIDxpbWcgY2xhc3M9XCJicHMtY3VzdG9tLWZpbHRlci1pbWdcIiBzcmM9XCIvYXNzZXRzL2Jwcy1pY29ucy9zcHNfc2VhcmNoX2ljb25faG9tZV9lbmFibGVkLnN2Z1wiIC8+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzZWFyY2hCb3hIb3ZlcmVkICYmICFkaXNhYmxlZFwiPlxyXG4gICAgICA8aW1nIGNsYXNzPVwiYnBzLWN1c3RvbS1maWx0ZXItaW1nXCIgc3JjPVwiL2Fzc2V0cy9icHMtaWNvbnMvc3BzX3NlYXJjaF9pY29uX2hvbWVfaG92ZXJfYWN0aXZhdGVkLnN2Z1wiIC8+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkaXNhYmxlZFwiPlxyXG4gICAgICA8aW1nIGNsYXNzPVwiYnBzLWN1c3RvbS1maWx0ZXItaW1nXCIgc3JjPVwiL2Fzc2V0cy9icHMtaWNvbnMvc3BzX3NlYXJjaF9pY29uX2hvbWVfZGlzYWJsZWQuc3ZnXCIgLz5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvbmctdGVtcGxhdGU+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==