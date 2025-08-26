import { __decorate } from "tslib";
import { ESCAPE } from '@angular/cdk/keycodes';
import { OverlayRef } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, EventEmitter, Inject, Injector, Input, Optional, Output, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BpsModalFooterDirective } from './bps-modal-footer.directive';
import { BpsModalRef } from './bps-modal-ref.class';
import { NZ_MODAL_CONFIG } from './bps-modal-config';
import { getElementOffset, InputBoolean, isPromise } from 'ng-zorro-antd/core/util';
import { WithConfig } from '../bps-tree/tree/config.service';
import { warnDeprecation } from 'ng-zorro-antd/core/logger';
import * as i0 from "@angular/core";
import * as i1 from "../bps-tree/tree/config.service";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "ng-zorro-antd/i18n";
import * as i4 from "./bps-modal-control.service";
import * as i5 from "@angular/cdk/a11y";
import * as i6 from "@angular/common";
import * as i7 from "../core/addon/string_template_outlet";
import * as i8 from "ng-zorro-antd/icon";
import * as i9 from "ng-zorro-antd/core/no-animation";
import * as i10 from "../bps-button/bps-button.component";
import * as i11 from "../core/pipes/nz-css-unit.pipe";
const _c0 = ["modalContainer"];
const _c1 = ["bodyContainer"];
const _c2 = ["autoFocusButtonOk"];
const _c3 = ["*"];
function BpsModalComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function BpsModalComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 13);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("z-index", ctx_r1.bpsZIndex);
    i0.ɵɵclassProp("ant-modal-mask-hidden", ctx_r1.hidden);
    i0.ɵɵproperty("ngClass", ctx_r1.maskAnimationClassMap)("ngStyle", ctx_r1.bpsMaskStyle);
} }
function BpsModalComponent_button_9_ng_container_2_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 19);
} }
function BpsModalComponent_button_9_ng_container_2_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 20);
} }
function BpsModalComponent_button_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsModalComponent_button_9_ng_container_2_img_1_Template, 1, 0, "img", 17)(2, BpsModalComponent_button_9_ng_container_2_img_2_Template, 1, 0, "img", 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.bpsModalDisabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.bpsModalDisabled);
} }
function BpsModalComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function BpsModalComponent_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onClickCloseBtn()); });
    i0.ɵɵelementStart(1, "span", 15);
    i0.ɵɵtemplate(2, BpsModalComponent_button_9_ng_container_2_Template, 3, 2, "ng-container", 16);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("bps-modal-disabled", ctx_r1.bpsModalDisabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.bpsCloseIcon);
} }
function BpsModalComponent_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 23);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const tplContentDefault_r4 = i0.ɵɵreference(12);
    i0.ɵɵproperty("ngTemplateOutlet", tplContentDefault_r4);
} }
function BpsModalComponent_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 23);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const tplContentConfirm_r5 = i0.ɵɵreference(14);
    i0.ɵɵproperty("ngTemplateOutlet", tplContentConfirm_r5);
} }
function BpsModalComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 21);
    i0.ɵɵtemplate(1, BpsModalComponent_ng_container_10_ng_container_1_Template, 1, 1, "ng-container", 22)(2, BpsModalComponent_ng_container_10_ng_container_2_Template, 1, 1, "ng-container", 22);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r1.isModalType("default"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r1.isModalType("confirm"));
} }
function BpsModalComponent_ng_template_11_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 23);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.bpsTitle);
} }
function BpsModalComponent_ng_template_11_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 30);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r1.bpsTitle, i0.ɵɵsanitizeHtml);
} }
function BpsModalComponent_ng_template_11_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27)(1, "div", 28);
    i0.ɵɵelementContainerStart(2, 21);
    i0.ɵɵtemplate(3, BpsModalComponent_ng_template_11_div_0_ng_container_3_Template, 1, 1, "ng-container", 22)(4, BpsModalComponent_ng_template_11_div_0_ng_container_4_Template, 2, 1, "ng-container", 29);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("bps-modal-disabled", ctx_r1.bpsModalDisabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r1.isTemplateRef(ctx_r1.bpsTitle));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r1.isNonEmptyString(ctx_r1.bpsTitle));
} }
function BpsModalComponent_ng_template_11_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 23);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.bpsContent);
} }
function BpsModalComponent_ng_template_11_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 30);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r1.bpsContent, i0.ɵɵsanitizeHtml);
} }
function BpsModalComponent_ng_template_11_ng_container_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 23);
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const tplOriginContent_r6 = i0.ɵɵreference(1);
    i0.ɵɵproperty("ngTemplateOutlet", tplOriginContent_r6);
} }
function BpsModalComponent_ng_template_11_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 21);
    i0.ɵɵtemplate(1, BpsModalComponent_ng_template_11_ng_container_4_ng_container_1_Template, 1, 1, "ng-container", 22)(2, BpsModalComponent_ng_template_11_ng_container_4_ng_container_2_Template, 2, 1, "ng-container", 29)(3, BpsModalComponent_ng_template_11_ng_container_4_ng_container_3_Template, 1, 1, "ng-container", 31);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r1.isTemplateRef(ctx_r1.bpsContent));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r1.isNonEmptyString(ctx_r1.bpsContent));
} }
function BpsModalComponent_ng_template_11_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 23);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.bpsFooter);
} }
function BpsModalComponent_ng_template_11_div_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 30);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r1.bpsFooter, i0.ɵɵsanitizeHtml);
} }
function BpsModalComponent_ng_template_11_div_5_ng_container_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 35);
    i0.ɵɵlistener("click", function BpsModalComponent_ng_template_11_div_5_ng_container_4_button_1_Template_button_click_0_listener() { const button_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onButtonClick(button_r8)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r8 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("hidden", !ctx_r1.getButtonCallableProp(button_r8, "show"))("bpsLoading", ctx_r1.getButtonCallableProp(button_r8, "loading"))("disabled", ctx_r1.getButtonCallableProp(button_r8, "disabled"))("bpsType", button_r8.type)("bpsShape", button_r8.shape)("bpsSize", button_r8.size)("bpsGhost", button_r8.ghost);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(button_r8.label);
} }
function BpsModalComponent_ng_template_11_div_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsModalComponent_ng_template_11_div_5_ng_container_4_button_1_Template, 2, 8, "button", 34);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.bpsFooter);
} }
function BpsModalComponent_ng_template_11_div_5_ng_container_5_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 38);
    i0.ɵɵlistener("click", function BpsModalComponent_ng_template_11_div_5_ng_container_5_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onClickOkCancel("cancel")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("bpsLoading", ctx_r1.bpsCancelLoading)("disabled", ctx_r1.bpsCancelDisabled);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.cancelText, " ");
} }
function BpsModalComponent_ng_template_11_div_5_ng_container_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 39);
    i0.ɵɵlistener("click", function BpsModalComponent_ng_template_11_div_5_ng_container_5_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onClickOkCancel("ok")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("bpsType", ctx_r1.bpsOkType)("bpsLoading", ctx_r1.bpsOkLoading)("disabled", ctx_r1.bpsOkDisabled);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.okText, " ");
} }
function BpsModalComponent_ng_template_11_div_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsModalComponent_ng_template_11_div_5_ng_container_5_button_1_Template, 2, 3, "button", 36)(2, BpsModalComponent_ng_template_11_div_5_ng_container_5_button_2_Template, 2, 4, "button", 37);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.bpsCancelText !== null);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.bpsOkText !== null);
} }
function BpsModalComponent_ng_template_11_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵelementContainerStart(1, 21);
    i0.ɵɵtemplate(2, BpsModalComponent_ng_template_11_div_5_ng_container_2_Template, 1, 1, "ng-container", 22)(3, BpsModalComponent_ng_template_11_div_5_ng_container_3_Template, 2, 1, "ng-container", 29)(4, BpsModalComponent_ng_template_11_div_5_ng_container_4_Template, 2, 1, "ng-container", 29)(5, BpsModalComponent_ng_template_11_div_5_ng_container_5_Template, 3, 2, "ng-container", 33);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r1.isTemplateRef(ctx_r1.bpsFooter));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r1.isNonEmptyString(ctx_r1.bpsFooter));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r1.isModalButtons(ctx_r1.bpsFooter));
} }
function BpsModalComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BpsModalComponent_ng_template_11_div_0_Template, 5, 5, "div", 24);
    i0.ɵɵelementStart(1, "div", 25);
    i0.ɵɵelementContainerStart(2, null, 4);
    i0.ɵɵtemplate(4, BpsModalComponent_ng_template_11_ng_container_4_Template, 4, 3, "ng-container", 12);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, BpsModalComponent_ng_template_11_div_5_Template, 6, 4, "div", 26);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r1.bpsTitle);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", ctx_r1.bpsBodyStyle);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r1.isComponent(ctx_r1.bpsContent));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.bpsFooter !== null);
} }
function BpsModalComponent_ng_template_13_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 23);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.bpsTitle);
} }
function BpsModalComponent_ng_template_13_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 30);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r1.bpsTitle, i0.ɵɵsanitizeHtml);
} }
function BpsModalComponent_ng_template_13_ng_container_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 23);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.bpsContent);
} }
function BpsModalComponent_ng_template_13_ng_container_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 30);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r1.bpsContent, i0.ɵɵsanitizeHtml);
} }
function BpsModalComponent_ng_template_13_ng_container_11_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0, 23);
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const tplOriginContent_r6 = i0.ɵɵreference(1);
    i0.ɵɵproperty("ngTemplateOutlet", tplOriginContent_r6);
} }
function BpsModalComponent_ng_template_13_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 21);
    i0.ɵɵtemplate(1, BpsModalComponent_ng_template_13_ng_container_11_ng_container_1_Template, 1, 1, "ng-container", 22)(2, BpsModalComponent_ng_template_13_ng_container_11_ng_container_2_Template, 2, 1, "ng-container", 29)(3, BpsModalComponent_ng_template_13_ng_container_11_ng_container_3_Template, 1, 1, "ng-container", 31);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r1.isTemplateRef(ctx_r1.bpsContent));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r1.isNonEmptyString(ctx_r1.bpsContent));
} }
function BpsModalComponent_ng_template_13_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 47);
    i0.ɵɵlistener("click", function BpsModalComponent_ng_template_13_button_13_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onClickOkCancel("cancel")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("bpsLoading", ctx_r1.bpsCancelLoading)("disabled", ctx_r1.bpsCancelDisabled);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.cancelText, " ");
} }
function BpsModalComponent_ng_template_13_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 39, 5);
    i0.ɵɵlistener("click", function BpsModalComponent_ng_template_13_button_14_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onClickOkCancel("ok")); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("bpsType", ctx_r1.bpsOkType)("bpsLoading", ctx_r1.bpsOkLoading)("disabled", ctx_r1.bpsOkDisabled);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.okText, " ");
} }
function BpsModalComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25)(1, "div", 40)(2, "div", 41);
    i0.ɵɵelement(3, "i", 42);
    i0.ɵɵelementStart(4, "span", 43);
    i0.ɵɵelementContainerStart(5, 21);
    i0.ɵɵtemplate(6, BpsModalComponent_ng_template_13_ng_container_6_Template, 1, 1, "ng-container", 22)(7, BpsModalComponent_ng_template_13_ng_container_7_Template, 2, 1, "ng-container", 29);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 44);
    i0.ɵɵelementContainerStart(9, null, 4);
    i0.ɵɵtemplate(11, BpsModalComponent_ng_template_13_ng_container_11_Template, 4, 3, "ng-container", 12);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 45);
    i0.ɵɵtemplate(13, BpsModalComponent_ng_template_13_button_13_Template, 2, 3, "button", 46)(14, BpsModalComponent_ng_template_13_button_14_Template, 3, 4, "button", 37);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", ctx_r1.bpsBodyStyle);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("nzType", ctx_r1.bpsIconType);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngSwitch", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r1.isTemplateRef(ctx_r1.bpsTitle));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", ctx_r1.isNonEmptyString(ctx_r1.bpsTitle));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r1.isComponent(ctx_r1.bpsContent));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.bpsCancelText !== null);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.bpsOkText !== null);
} }
export const MODAL_ANIMATE_DURATION = 200; // Duration when perform animations (ms)
export const WRAP_CLASS_NAME = 'ant-modal-wrap';
const NZ_CONFIG_COMPONENT_NAME = 'modal';
// tslint:disable-next-line:no-any
export class BpsModalComponent extends BpsModalRef {
    set modalFooter(value) {
        if (value && value.templateRef) {
            this.setFooterWithTemplate(value.templateRef);
        }
    }
    get afterOpen() {
        // Observable alias for nzAfterOpen
        return this.bpsAfterOpen.asObservable();
    }
    get afterClose() {
        // Observable alias for nzAfterClose
        return this.bpsAfterClose.asObservable();
    }
    get cancelText() {
        return this.bpsCancelText || this.locale.cancelText;
    }
    get okText() {
        return this.bpsOkText || this.locale.okText;
    }
    get hidden() {
        return !this.bpsVisible && !this.animationState;
    } // Indicate whether this dialog should hidden
    /**
     * @description
     * The calculated highest weight of mask value
     *
     * Weight of different mask input:
     * component default value < global configuration < component input value
     */
    get mask() {
        if (this.bpsMask != null) {
            return this.bpsMask;
        }
        else if (this.bpsModalGlobalConfig && this.bpsModalGlobalConfig.bpsMask != null) {
            return this.bpsModalGlobalConfig.bpsMask;
        }
        else {
            return true;
        }
    }
    /**
     * @description
     * The calculated highest weight of maskClosable value
     *
     * Weight of different maskClosable input:
     * component default value < global configuration < component input value
     */
    get maskClosable() {
        if (this.bpsMaskClosable != null) {
            return this.bpsMaskClosable;
        }
        else if (this.bpsModalGlobalConfig && this.bpsModalGlobalConfig.bpsMaskClosable != null) {
            return this.bpsModalGlobalConfig.bpsMaskClosable;
        }
        else {
            return true;
        }
    }
    constructor(nzConfigService, overlay, overlayKeyboardDispatcher, i18n, cfr, elementRef, viewContainer, modalControl, focusTrapFactory, cdr, bpsModalGlobalConfig, document // tslint:disable-line:no-any
    ) {
        super();
        this.nzConfigService = nzConfigService;
        this.overlay = overlay;
        this.overlayKeyboardDispatcher = overlayKeyboardDispatcher;
        this.i18n = i18n;
        this.cfr = cfr;
        this.elementRef = elementRef;
        this.viewContainer = viewContainer;
        this.modalControl = modalControl;
        this.focusTrapFactory = focusTrapFactory;
        this.cdr = cdr;
        this.bpsModalGlobalConfig = bpsModalGlobalConfig;
        this.document = document;
        this.bpsVisible = false;
        this.bpsClosable = true;
        this.bpsOkLoading = false;
        this.bpsOkDisabled = false;
        this.bpsCancelDisabled = false;
        this.bpsCancelLoading = false;
        this.bpsKeyboard = true;
        this.bpsNoAnimation = false;
        this.bpsModalDisabled = false;
        this.bpsGetContainer = () => this.overlay.create(); // [STATIC]
        this.bpsZIndex = 1000;
        this.bpsWidth = 520;
        this.bpsCloseIcon = 'close';
        this.bpsOkType = 'variation-1';
        this.bpsIconType = 'question-circle'; // Confirm Modal ONLY
        this.bpsModalType = 'default';
        this.bpsOnOk = new EventEmitter();
        this.bpsOnCancel = new EventEmitter();
        this.bpsAfterOpen = new EventEmitter(); // Trigger when modal open(visible) after animations
        this.bpsAfterClose = new EventEmitter(); // Trigger when modal leave-animation over
        this.bpsVisibleChange = new EventEmitter();
        this.locale = {};
        this.transformOrigin = '0px 0px 0px'; // The origin point that animation based on
        this.unsubscribe$ = new Subject();
        this.dialogMouseDown = false;
        this.scrollStrategy = this.overlay.scrollStrategies.block();
        if (this.bpsModalGlobalConfig) {
            warnDeprecation('`NZ_MODAL_CONFIG` has been deprecated and will be removed in 9.0.0. Please use global config instead.');
        }
    }
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Modal');
        });
        if (this.isComponent(this.bpsContent)) {
            this.createDynamicComponent(this.bpsContent); // Create component along without View
        }
        if (this.isModalButtons(this.bpsFooter)) {
            // Setup default button options
            this.bpsFooter = this.formatModalButtons(this.bpsFooter);
        }
        // Place the modal dom to elsewhere
        this.container = typeof this.bpsGetContainer === 'function' ? this.bpsGetContainer() : this.bpsGetContainer;
        if (this.container instanceof HTMLElement) {
            this.container.appendChild(this.elementRef.nativeElement);
            fromEvent(this.document.body, 'keydown')
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe(e => this.keydownListener(e));
        }
        else if (this.container instanceof OverlayRef) {
            // NOTE: only attach the dom to overlay, the view container is not changed actually
            this.setOverlayRef(this.container);
            this.container.overlayElement.appendChild(this.elementRef.nativeElement);
        }
        if (this.overlayRef) {
            this.overlayRef
                .keydownEvents()
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe(e => this.keydownListener(e));
        }
        // Register modal when afterOpen/afterClose is stable
        this.modalControl.registerModal(this);
    }
    // [NOTE] NOT available when using by service!
    // Because ngOnChanges never be called when using by service,
    // here we can't support "nzContent"(Component) etc. as inputs that initialized dynamically.
    // BUT: User also can change "nzContent" dynamically to trigger UI changes (provided you don't use Component that needs initializations)
    ngOnChanges(changes) {
        if (changes.bpsVisible) {
            this.handleVisibleStateChange(this.bpsVisible, !changes.bpsVisible.firstChange); // Do not trigger animation while initializing
        }
    }
    ngAfterViewInit() {
        // If using Component, it is the time to attach View while bodyContainer is ready
        if (this.contentComponentRef) {
            this.bodyContainer.insert(this.contentComponentRef.hostView);
        }
        if (this.autoFocusButtonOk) {
            this.autoFocusButtonOk.nativeElement.focus();
        }
    }
    ngOnDestroy() {
        // Close self before destructing
        this.changeVisibleFromInside(false).then(() => {
            this.modalControl.deregisterModal(this);
            if (this.container instanceof OverlayRef) {
                this.container.dispose();
            }
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
        });
        clearTimeout(this.timeoutId);
    }
    setFooterWithTemplate(templateRef) {
        this.bpsFooter = templateRef;
        this.cdr.markForCheck();
    }
    setOverlayRef(overlayRef) {
        this.overlayRef = overlayRef;
    }
    keydownListener(event) {
        if (event.keyCode === ESCAPE && this.bpsKeyboard) {
            this.onClickOkCancel('cancel');
        }
    }
    open() {
        this.changeVisibleFromInside(true);
    }
    close(result) {
        this.changeVisibleFromInside(false, result);
    }
    destroy(result) {
        // Destroy equals Close
        this.close(result);
    }
    triggerOk() {
        this.onClickOkCancel('ok');
    }
    triggerCancel() {
        this.onClickOkCancel('cancel');
    }
    getInstance() {
        return this;
    }
    getContentComponentRef() {
        return this.contentComponentRef;
    }
    getContentComponent() {
        return this.contentComponentRef && this.contentComponentRef.instance;
    }
    getElement() {
        return this.elementRef && this.elementRef.nativeElement;
    }
    onMaskDialogDown() {
        this.dialogMouseDown = true;
    }
    onDialogUp() {
        if (this.dialogMouseDown) {
            this.timeoutId = setTimeout(() => {
                this.dialogMouseDown = false;
            }, 0);
        }
    }
    onClickMask($event) {
        if (this.mask &&
            this.maskClosable &&
            $event.target.classList.contains(WRAP_CLASS_NAME) &&
            this.bpsVisible &&
            !this.dialogMouseDown) {
            this.onClickOkCancel('cancel');
        }
    }
    isModalType(type) {
        return this.bpsModalType === type;
    }
    onClickCloseBtn() {
        if (this.bpsVisible) {
            this.onClickOkCancel('cancel');
        }
    }
    onClickOkCancel(type) {
        const trigger = { ok: this.bpsOnOk, cancel: this.bpsOnCancel }[type];
        const loadingKey = { ok: 'bpsOkLoading', cancel: 'bpsCancelLoading' }[type];
        if (trigger instanceof EventEmitter) {
            trigger.emit(this.getContentComponent());
        }
        else if (typeof trigger === 'function') {
            const result = trigger(this.getContentComponent());
            const caseClose = (doClose) => doClose !== false && this.close(doClose); // Users can return "false" to prevent closing by default
            if (isPromise(result)) {
                this[loadingKey] = true;
                const handleThen = (doClose) => {
                    this[loadingKey] = false;
                    caseClose(doClose);
                };
                result.then(handleThen).catch(handleThen);
            }
            else {
                caseClose(result);
            }
        }
    }
    isNonEmptyString(value) {
        return typeof value === 'string' && value !== '';
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    isComponent(value) {
        return value instanceof Type;
    }
    isModalButtons(value) {
        return Array.isArray(value) && value.length > 0;
    }
    // Do rest things when visible state changed
    handleVisibleStateChange(visible, animation = true, closeResult) {
        if (visible) {
            // Hide scrollbar at the first time when shown up
            this.scrollStrategy.enable();
            this.savePreviouslyFocusedElement();
            this.trapFocus();
            if (this.container instanceof OverlayRef) {
                this.overlayKeyboardDispatcher.add(this.overlayRef);
            }
        }
        else {
            if (this.container instanceof OverlayRef) {
                this.overlayKeyboardDispatcher.remove(this.overlayRef);
            }
        }
        return Promise.resolve(animation ? this.animateTo(visible) : undefined).then(() => {
            // Emit open/close event after animations over
            if (visible) {
                this.bpsAfterOpen.emit();
            }
            else {
                this.bpsAfterClose.emit(closeResult);
                this.restoreFocus();
                this.scrollStrategy.disable();
                // Mark the for check so it can react if the view container is using OnPush change detection.
                this.cdr.markForCheck();
            }
        });
    }
    // Lookup a button's property, if the prop is a function, call & then return the result, otherwise, return itself.
    getButtonCallableProp(options, prop) {
        const value = options[prop];
        const args = [];
        if (this.contentComponentRef) {
            args.push(this.contentComponentRef.instance);
        }
        return typeof value === 'function' ? value.apply(options, args) : value;
    }
    // On nzFooter's modal button click
    onButtonClick(button) {
        const result = this.getButtonCallableProp(button, 'onClick'); // Call onClick directly
        if (isPromise(result)) {
            button.loading = true;
            result.then(() => (button.loading = false)).catch(() => (button.loading = false));
        }
    }
    // Change nzVisible from inside
    changeVisibleFromInside(visible, closeResult) {
        if (this.bpsVisible !== visible) {
            // Change nzVisible value immediately
            this.bpsVisible = visible;
            this.bpsVisibleChange.emit(visible);
            return this.handleVisibleStateChange(visible, true, closeResult);
        }
        return Promise.resolve();
    }
    changeAnimationState(state) {
        this.animationState = state;
        if (state) {
            this.maskAnimationClassMap = {
                [`fade-${state}`]: true,
                [`fade-${state}-active`]: true
            };
            this.modalAnimationClassMap = {
                [`zoom-${state}`]: true,
                [`zoom-${state}-active`]: true
            };
        }
        else {
            this.maskAnimationClassMap = this.modalAnimationClassMap = null;
        }
    }
    animateTo(isVisible) {
        if (isVisible) {
            // Figure out the lastest click position when shows up
            setTimeout(() => this.updateTransformOrigin()); // [NOTE] Using timeout due to the document.click event is fired later than visible change, so if not postponed to next event-loop, we can't get the lastest click position
        }
        this.changeAnimationState(isVisible ? 'enter' : 'leave');
        return new Promise(resolve => setTimeout(() => {
            // Return when animation is over
            this.changeAnimationState(null);
            resolve();
        }, this.bpsNoAnimation ? 0 : MODAL_ANIMATE_DURATION));
    }
    formatModalButtons(buttons) {
        return buttons.map(button => {
            return {
                ...{
                    type: 'default',
                    size: 'default',
                    autoLoading: true,
                    show: true,
                    loading: false,
                    disabled: false
                },
                ...button
            };
        });
    }
    /**
     * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
     * @param component Component class
     */
    createDynamicComponent(component) {
        const factory = this.cfr.resolveComponentFactory(component);
        const childInjector = Injector.create({
            providers: [{ provide: BpsModalRef, useValue: this }],
            parent: this.viewContainer.parentInjector
        });
        this.contentComponentRef = factory.create(childInjector);
        if (this.bpsComponentParams) {
            Object.assign(this.contentComponentRef.instance, this.bpsComponentParams);
        }
        // Do the first change detection immediately (or we do detection at ngAfterViewInit, multi-changes error will be thrown)
        this.contentComponentRef.changeDetectorRef.detectChanges();
    }
    // Update transform-origin to the last click position on document
    updateTransformOrigin() {
        const modalElement = this.modalContainer.nativeElement;
        if (this.previouslyFocusedElement) {
            const previouslyDOMRect = this.previouslyFocusedElement.getBoundingClientRect();
            const lastPosition = getElementOffset(this.previouslyFocusedElement);
            const x = lastPosition.left + previouslyDOMRect.width / 2;
            const y = lastPosition.top + previouslyDOMRect.height / 2;
            this.transformOrigin = `${x - modalElement.offsetLeft}px ${y - modalElement.offsetTop}px 0px`;
        }
    }
    savePreviouslyFocusedElement() {
        if (this.document) {
            this.previouslyFocusedElement = this.document.activeElement;
        }
    }
    trapFocus() {
        if (!this.focusTrap) {
            this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
        }
        this.focusTrap.focusInitialElementWhenReady();
    }
    restoreFocus() {
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.focus === 'function') {
            this.previouslyFocusedElement.focus();
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    }
    static { this.ɵfac = function BpsModalComponent_Factory(t) { return new (t || BpsModalComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i2.Overlay), i0.ɵɵdirectiveInject(i2.OverlayKeyboardDispatcher), i0.ɵɵdirectiveInject(i3.NzI18nService), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i4.BpsModalControlService), i0.ɵɵdirectiveInject(i5.FocusTrapFactory), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(NZ_MODAL_CONFIG, 8), i0.ɵɵdirectiveInject(DOCUMENT)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsModalComponent, selectors: [["bps-modal"]], contentQueries: function BpsModalComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, BpsModalFooterDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalFooter = _t.first);
        } }, viewQuery: function BpsModalComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
            i0.ɵɵviewQuery(_c1, 5, ViewContainerRef);
            i0.ɵɵviewQuery(_c2, 5, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modalContainer = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.bodyContainer = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.autoFocusButtonOk = _t.first);
        } }, inputs: { bpsVisible: "bpsVisible", bpsClosable: "bpsClosable", bpsOkLoading: "bpsOkLoading", bpsOkDisabled: "bpsOkDisabled", bpsCancelDisabled: "bpsCancelDisabled", bpsCancelLoading: "bpsCancelLoading", bpsKeyboard: "bpsKeyboard", bpsNoAnimation: "bpsNoAnimation", bpsModalDisabled: "bpsModalDisabled", bpsMask: "bpsMask", bpsMaskClosable: "bpsMaskClosable", bpsContent: "bpsContent", bpsComponentParams: "bpsComponentParams", bpsFooter: "bpsFooter", bpsGetContainer: "bpsGetContainer", bpsZIndex: "bpsZIndex", bpsWidth: "bpsWidth", bpsWrapClassName: "bpsWrapClassName", bpsClassName: "bpsClassName", bpsStyle: "bpsStyle", bpsTitle: "bpsTitle", bpsCloseIcon: "bpsCloseIcon", bpsMaskStyle: "bpsMaskStyle", bpsBodyStyle: "bpsBodyStyle", bpsOkText: "bpsOkText", bpsCancelText: "bpsCancelText", bpsOkType: "bpsOkType", bpsIconType: "bpsIconType", bpsModalType: "bpsModalType", bpsOnOk: "bpsOnOk", bpsOnCancel: "bpsOnCancel" }, outputs: { bpsOnOk: "bpsOnOk", bpsOnCancel: "bpsOnCancel", bpsAfterOpen: "bpsAfterOpen", bpsAfterClose: "bpsAfterClose", bpsVisibleChange: "bpsVisibleChange" }, exportAs: ["bpsModal"], features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 15, vars: 22, consts: [["tplOriginContent", ""], ["modalContainer", ""], ["tplContentDefault", ""], ["tplContentConfirm", ""], ["bodyContainer", ""], ["autoFocusButtonOk", ""], [3, "nzNoAnimation"], ["class", "ant-modal-mask", 3, "ngClass", "ant-modal-mask-hidden", "ngStyle", "zIndex", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", 3, "click", "mouseup"], ["role", "document", 3, "mousedown", "ngClass", "ngStyle"], [1, "ant-modal-content"], ["class", "ant-modal-close", "aria-label", "Close", 3, "click", 4, "ngIf"], [3, "ngSwitch", 4, "ngIf"], [1, "ant-modal-mask", 3, "ngClass", "ngStyle"], ["aria-label", "Close", 1, "ant-modal-close", 3, "click"], [1, "ant-modal-close-x"], [4, "nzStringTemplateOutlet"], ["src", "assets/bps-icons/sps_x_icon_closepanel_white.svg", "class", "ant-modal-close-icon", 4, "ngIf"], ["src", "assets/bps-icons/sps_x_icon_closepanel_grey.svg", "class", "ant-modal-close-icon", 4, "ngIf"], ["src", "assets/bps-icons/sps_x_icon_closepanel_white.svg", 1, "ant-modal-close-icon"], ["src", "assets/bps-icons/sps_x_icon_closepanel_grey.svg", 1, "ant-modal-close-icon"], [3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], [3, "ngTemplateOutlet"], ["class", "ant-modal-header", 4, "ngIf"], [1, "ant-modal-body", 3, "ngStyle"], ["class", "ant-modal-footer", 4, "ngIf"], [1, "ant-modal-header"], [1, "ant-modal-title"], [4, "ngSwitchCase"], [3, "innerHTML"], [3, "ngTemplateOutlet", 4, "ngSwitchDefault"], [1, "ant-modal-footer"], [4, "ngSwitchDefault"], ["bps-button", "", 3, "hidden", "bpsLoading", "disabled", "bpsType", "bpsShape", "bpsSize", "bpsGhost", "click", 4, "ngFor", "ngForOf"], ["bps-button", "", 3, "click", "hidden", "bpsLoading", "disabled", "bpsType", "bpsShape", "bpsSize", "bpsGhost"], ["bpsType", "variation-1", "bps-button", "", 3, "bpsLoading", "disabled", "click", 4, "ngIf"], ["bps-button", "", 3, "bpsType", "bpsLoading", "disabled", "click", 4, "ngIf"], ["bpsType", "variation-1", "bps-button", "", 3, "click", "bpsLoading", "disabled"], ["bps-button", "", 3, "click", "bpsType", "bpsLoading", "disabled"], [1, "ant-modal-confirm-body-wrapper"], [1, "ant-modal-confirm-body"], ["nz-icon", "", 3, "nzType"], [1, "ant-modal-confirm-title"], [1, "ant-modal-confirm-content"], [1, "ant-modal-confirm-btns"], ["bps-button", "", "bpsType", "variation-1", 3, "bpsLoading", "disabled", "click", 4, "ngIf"], ["bps-button", "", "bpsType", "variation-1", 3, "click", "bpsLoading", "disabled"]], template: function BpsModalComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, BpsModalComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(2, "div", 6);
            i0.ɵɵtemplate(3, BpsModalComponent_div_3_Template, 1, 6, "div", 7);
            i0.ɵɵelementStart(4, "div", 8);
            i0.ɵɵlistener("click", function BpsModalComponent_Template_div_click_4_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onClickMask($event)); })("mouseup", function BpsModalComponent_Template_div_mouseup_4_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDialogUp()); });
            i0.ɵɵelementStart(5, "div", 9, 1);
            i0.ɵɵpipe(7, "nzToCssUnit");
            i0.ɵɵlistener("mousedown", function BpsModalComponent_Template_div_mousedown_5_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onMaskDialogDown()); });
            i0.ɵɵelementStart(8, "div", 10);
            i0.ɵɵtemplate(9, BpsModalComponent_button_9_Template, 3, 3, "button", 11)(10, BpsModalComponent_ng_container_10_Template, 3, 3, "ng-container", 12);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(11, BpsModalComponent_ng_template_11_Template, 6, 4, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(13, BpsModalComponent_ng_template_13_Template, 15, 8, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzNoAnimation", ctx.bpsNoAnimation);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.mask);
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("ant-modal-wrap ", ctx.bpsWrapClassName, "");
            i0.ɵɵstyleProp("z-index", ctx.bpsZIndex)("visibility", ctx.hidden ? "hidden" : null);
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("ant-modal ", ctx.bpsClassName, "");
            i0.ɵɵstyleProp("width", i0.ɵɵpipeBind1(7, 20, ctx.bpsWidth))("transform-origin", ctx.transformOrigin);
            i0.ɵɵproperty("ngClass", ctx.modalAnimationClassMap)("ngStyle", ctx.bpsStyle);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.bpsClosable);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.hidden);
        } }, dependencies: [i6.NgClass, i6.NgForOf, i6.NgIf, i6.NgTemplateOutlet, i6.NgStyle, i6.NgSwitch, i6.NgSwitchCase, i6.NgSwitchDefault, i7.NzStringTemplateOutletDirective, i8.NzIconDirective, i9.NzNoAnimationDirective, i10.BpsButtonComponent, i11.NzToCssUnitPipe], styles: [".ant-modal-content[_ngcontent-%COMP%]{border-radius:8px!important;box-shadow:0 3px 12px #000000e6!important;background-color:#262626!important}.ant-modal-header[_ngcontent-%COMP%]{background-color:#00a2d1!important;border-bottom:none!important;padding:16px 0 16px 35px!important;border-radius:8px 8px 0 0!important}.ant-modal-title[_ngcontent-%COMP%]{font-size:18px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:.67!important;letter-spacing:normal!important;text-align:left!important;color:#fff!important}.ant-modal-close-x[_ngcontent-%COMP%]{width:46px!important;height:45px!important;color:#fff!important;line-height:40px!important;padding-right:19px!important}.bps-modal-disabled[_ngcontent-%COMP%]{color:#666!important}"] }); }
}
__decorate([
    InputBoolean()
], BpsModalComponent.prototype, "bpsVisible", void 0);
__decorate([
    InputBoolean()
], BpsModalComponent.prototype, "bpsClosable", void 0);
__decorate([
    InputBoolean()
], BpsModalComponent.prototype, "bpsOkLoading", void 0);
__decorate([
    InputBoolean()
], BpsModalComponent.prototype, "bpsOkDisabled", void 0);
__decorate([
    InputBoolean()
], BpsModalComponent.prototype, "bpsCancelDisabled", void 0);
__decorate([
    InputBoolean()
], BpsModalComponent.prototype, "bpsCancelLoading", void 0);
__decorate([
    InputBoolean()
], BpsModalComponent.prototype, "bpsKeyboard", void 0);
__decorate([
    InputBoolean()
], BpsModalComponent.prototype, "bpsNoAnimation", void 0);
__decorate([
    InputBoolean()
], BpsModalComponent.prototype, "bpsModalDisabled", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    InputBoolean()
], BpsModalComponent.prototype, "bpsMask", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    InputBoolean()
], BpsModalComponent.prototype, "bpsMaskClosable", void 0);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsModalComponent, [{
        type: Component,
        args: [{ selector: 'bps-modal', exportAs: 'bpsModal', changeDetection: ChangeDetectionStrategy.Default, template: "<ng-template #tplOriginContent><ng-content></ng-content></ng-template> <!-- Compatible: the <ng-content> can appear only once -->\r\n\r\n<div [nzNoAnimation]=\"bpsNoAnimation\">\r\n  <div *ngIf=\"mask\"\r\n    class=\"ant-modal-mask\"\r\n    [ngClass]=\"maskAnimationClassMap\"\r\n    [class.ant-modal-mask-hidden]=\"hidden\"\r\n    [ngStyle]=\"bpsMaskStyle\"\r\n    [style.zIndex]=\"bpsZIndex\"\r\n  ></div>\r\n  <div\r\n    (click)=\"onClickMask($event)\"\r\n    (mouseup)=\"onDialogUp()\"\r\n    class=\"ant-modal-wrap {{ bpsWrapClassName }}\"\r\n    [style.zIndex]=\"bpsZIndex\"\r\n    [style.visibility]=\"hidden ? 'hidden' : null\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n  >\r\n    <div #modalContainer\r\n      class=\"ant-modal {{ bpsClassName }}\"\r\n      (mousedown)=\"onMaskDialogDown()\"\r\n      [ngClass]=\"modalAnimationClassMap\"\r\n      [ngStyle]=\"bpsStyle\"\r\n      [style.width]=\"bpsWidth | nzToCssUnit\"\r\n      [style.transform-origin]=\"transformOrigin\"\r\n      role=\"document\"\r\n    >\r\n      <div class=\"ant-modal-content\">\r\n        <button *ngIf=\"bpsClosable\" (click)=\"onClickCloseBtn()\" class=\"ant-modal-close\" aria-label=\"Close\">\r\n          <span class=\"ant-modal-close-x\" [class.bps-modal-disabled]=\"bpsModalDisabled\">\r\n            <ng-container *nzStringTemplateOutlet=\"bpsCloseIcon\">\r\n              <img *ngIf=\"!bpsModalDisabled\" src=\"assets/bps-icons/sps_x_icon_closepanel_white.svg\" class=\"ant-modal-close-icon\" />\r\n              <img *ngIf=\"bpsModalDisabled\" src=\"assets/bps-icons/sps_x_icon_closepanel_grey.svg\" class=\"ant-modal-close-icon\" />\r\n            </ng-container>\r\n          </span>\r\n        </button>\r\n        <ng-container *ngIf=\"!hidden\" [ngSwitch]=\"true\">\r\n          <ng-container *ngSwitchCase=\"isModalType('default')\" [ngTemplateOutlet]=\"tplContentDefault\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('confirm')\" [ngTemplateOutlet]=\"tplContentConfirm\"></ng-container>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- [Predefined] Default Modal Content -->\r\n<ng-template #tplContentDefault>\r\n  <div *ngIf=\"bpsTitle\" class=\"ant-modal-header\">\r\n    <div class=\"ant-modal-title\" [class.bps-modal-disabled]=\"bpsModalDisabled\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(bpsTitle)\" [ngTemplateOutlet]=\"bpsTitle\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(bpsTitle)\"><div [innerHTML]=\"bpsTitle\"></div></ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" [ngStyle]=\"bpsBodyStyle\">\r\n    <ng-container #bodyContainer>\r\n      <ng-container *ngIf=\"!isComponent(bpsContent)\" [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(bpsContent)\" [ngTemplateOutlet]=\"bpsContent\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(bpsContent)\"><div [innerHTML]=\"bpsContent\"></div></ng-container>\r\n        <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n  <div *ngIf=\"bpsFooter !== null\" class=\"ant-modal-footer\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(bpsFooter)\" [ngTemplateOutlet]=\"bpsFooter\"></ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(bpsFooter)\"><div [innerHTML]=\"bpsFooter\"></div></ng-container>\r\n      <ng-container *ngSwitchCase=\"isModalButtons(bpsFooter)\">\r\n        <button *ngFor=\"let button of bpsFooter\" bps-button\r\n          (click)=\"onButtonClick(button)\"\r\n          [hidden]=\"!getButtonCallableProp(button, 'show')\"\r\n          [bpsLoading]=\"getButtonCallableProp(button, 'loading')\"\r\n          [disabled]=\"getButtonCallableProp(button, 'disabled')\"\r\n          [bpsType]=\"button.type\"\r\n          [bpsShape]=\"button.shape\"\r\n          [bpsSize]=\"button.size\"\r\n          [bpsGhost]=\"button.ghost\"\r\n        >{{ button.label }}</button>\r\n      </ng-container>\r\n      <ng-container *ngSwitchDefault>\r\n        <button *ngIf=\"bpsCancelText!==null\" bpsType=\"variation-1\" bps-button (click)=\"onClickOkCancel('cancel')\" [bpsLoading]=\"bpsCancelLoading\" [disabled]=\"bpsCancelDisabled\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"bpsOkText!==null\" bps-button [bpsType]=\"bpsOkType\" (click)=\"onClickOkCancel('ok')\" [bpsLoading]=\"bpsOkLoading\" [disabled]=\"bpsOkDisabled\">\r\n          {{ okText }}\r\n        </button>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] Default Modal Content -->\r\n\r\n<!-- [Predefined] Confirm Modal Content -->\r\n<ng-template #tplContentConfirm>\r\n  <div class=\"ant-modal-body\" [ngStyle]=\"bpsBodyStyle\">\r\n    <div class=\"ant-modal-confirm-body-wrapper\">\r\n      <div class=\"ant-modal-confirm-body\">\r\n        <i nz-icon [nzType]=\"bpsIconType\"></i>\r\n        <span class=\"ant-modal-confirm-title\">\r\n          <ng-container [ngSwitch]=\"true\">\r\n            <ng-container *ngSwitchCase=\"isTemplateRef(bpsTitle)\" [ngTemplateOutlet]=\"bpsTitle\"></ng-container>\r\n            <ng-container *ngSwitchCase=\"isNonEmptyString(bpsTitle)\"><span [innerHTML]=\"bpsTitle\"></span></ng-container>\r\n          </ng-container>\r\n        </span>\r\n        <div class=\"ant-modal-confirm-content\">\r\n          <ng-container #bodyContainer>\r\n            <ng-container *ngIf=\"!isComponent(bpsContent)\" [ngSwitch]=\"true\">\r\n              <ng-container *ngSwitchCase=\"isTemplateRef(bpsContent)\" [ngTemplateOutlet]=\"bpsContent\"></ng-container>\r\n              <ng-container *ngSwitchCase=\"isNonEmptyString(bpsContent)\"><div [innerHTML]=\"bpsContent\"></div></ng-container>\r\n              <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n            </ng-container>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n      <div class=\"ant-modal-confirm-btns\">\r\n        <button *ngIf=\"bpsCancelText!==null\"\r\n          bps-button\r\n          bpsType=\"variation-1\"\r\n          (click)=\"onClickOkCancel('cancel')\"\r\n          [bpsLoading]=\"bpsCancelLoading\"\r\n          [disabled]=\"bpsCancelDisabled\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button #autoFocusButtonOk\r\n          *ngIf=\"bpsOkText!==null\"\r\n          bps-button\r\n          (click)=\"onClickOkCancel('ok')\"\r\n          [bpsType]=\"bpsOkType\"\r\n          [bpsLoading]=\"bpsOkLoading\"\r\n          [disabled]=\"bpsOkDisabled\">\r\n          {{ okText }}\r\n        </button>\r\n      </div>\r\n    </div> <!-- /.ant-modal-confirm-body-wrapper -->\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] Confirm Modal Content -->\r\n", styles: [".ant-modal-content{border-radius:8px!important;box-shadow:0 3px 12px #000000e6!important;background-color:#262626!important}.ant-modal-header{background-color:#00a2d1!important;border-bottom:none!important;padding:16px 0 16px 35px!important;border-radius:8px 8px 0 0!important}.ant-modal-title{font-size:18px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:.67!important;letter-spacing:normal!important;text-align:left!important;color:#fff!important}.ant-modal-close-x{width:46px!important;height:45px!important;color:#fff!important;line-height:40px!important;padding-right:19px!important}.bps-modal-disabled{color:#666!important}\n"] }]
    }], () => [{ type: i1.NzConfigService }, { type: i2.Overlay }, { type: i2.OverlayKeyboardDispatcher }, { type: i3.NzI18nService }, { type: i0.ComponentFactoryResolver }, { type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i4.BpsModalControlService }, { type: i5.FocusTrapFactory }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_MODAL_CONFIG]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }], { bpsVisible: [{
            type: Input
        }], bpsClosable: [{
            type: Input
        }], bpsOkLoading: [{
            type: Input
        }], bpsOkDisabled: [{
            type: Input
        }], bpsCancelDisabled: [{
            type: Input
        }], bpsCancelLoading: [{
            type: Input
        }], bpsKeyboard: [{
            type: Input
        }], bpsNoAnimation: [{
            type: Input
        }], bpsModalDisabled: [{
            type: Input
        }], bpsMask: [{
            type: Input
        }], bpsMaskClosable: [{
            type: Input
        }], bpsContent: [{
            type: Input
        }], bpsComponentParams: [{
            type: Input
        }], bpsFooter: [{
            type: Input
        }], bpsGetContainer: [{
            type: Input
        }], bpsZIndex: [{
            type: Input
        }], bpsWidth: [{
            type: Input
        }], bpsWrapClassName: [{
            type: Input
        }], bpsClassName: [{
            type: Input
        }], bpsStyle: [{
            type: Input
        }], bpsTitle: [{
            type: Input
        }], bpsCloseIcon: [{
            type: Input
        }], bpsMaskStyle: [{
            type: Input
        }], bpsBodyStyle: [{
            type: Input
        }], bpsOkText: [{
            type: Input
        }], bpsCancelText: [{
            type: Input
        }], bpsOkType: [{
            type: Input
        }], bpsIconType: [{
            type: Input
        }], bpsModalType: [{
            type: Input
        }], bpsOnOk: [{
            type: Input
        }, {
            type: Output
        }], bpsOnCancel: [{
            type: Input
        }, {
            type: Output
        }], bpsAfterOpen: [{
            type: Output
        }], bpsAfterClose: [{
            type: Output
        }], bpsVisibleChange: [{
            type: Output
        }], modalContainer: [{
            type: ViewChild,
            args: ['modalContainer', { static: true }]
        }], bodyContainer: [{
            type: ViewChild,
            args: ['bodyContainer', { static: false, read: ViewContainerRef }]
        }], autoFocusButtonOk: [{
            type: ViewChild,
            args: ['autoFocusButtonOk', { static: false, read: ElementRef }]
        }], modalFooter: [{
            type: ContentChild,
            args: [BpsModalFooterDirective, { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsModalComponent, { className: "BpsModalComponent", filePath: "lib\\components\\bps-modal\\bps-modal.component.ts", lineNumber: 61 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLW1vZGFsL2Jwcy1tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1tb2RhbC9icHMtbW9kYWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLEVBQTJELFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFHVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLFdBQVcsRUFDWCxJQUFJLEVBQ0osU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBR3BELE9BQU8sRUFBa0IsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNw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RUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7WUFHL0QsV0FBVztrQkFEZCxZQUFZO21CQUFDLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7a0ZBOUM3QyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb2N1c1RyYXAsIEZvY3VzVHJhcEZhY3RvcnkgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcblxyXG5pbXBvcnQgeyBFU0NBUEUgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQgeyBCbG9ja1Njcm9sbFN0cmF0ZWd5LCBPdmVybGF5LCBPdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyLCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIENvbXBvbmVudFJlZixcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0LFxyXG4gIEluamVjdG9yLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFR5cGUsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgQnBzTW9kYWxGb290ZXJEaXJlY3RpdmUgfSBmcm9tICcuL2Jwcy1tb2RhbC1mb290ZXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQnBzTW9kYWxSZWYgfSBmcm9tICcuL2Jwcy1tb2RhbC1yZWYuY2xhc3MnO1xyXG5pbXBvcnQgeyBNb2RhbE9wdGlvbnMsIE1vZGFsQnV0dG9uT3B0aW9ucywgTW9kYWxUeXBlLCBPbkNsaWNrQ2FsbGJhY2sgfSBmcm9tICcuL2Jwcy1tb2RhbC50eXBlJztcclxuaW1wb3J0IHsgQnBzTW9kYWxDb250cm9sU2VydmljZSB9IGZyb20gJy4vYnBzLW1vZGFsLWNvbnRyb2wuc2VydmljZSc7XHJcbmltcG9ydCB7IEJwc01vZGFsQ29uZmlnLCBOWl9NT0RBTF9DT05GSUcgfSBmcm9tICcuL2Jwcy1tb2RhbC1jb25maWcnO1xyXG5pbXBvcnQgeyBnZXRFbGVtZW50T2Zmc2V0LCBJbnB1dEJvb2xlYW4sIGlzUHJvbWlzZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnLi4vYnBzLXRyZWUvdHJlZS9jb25maWcuc2VydmljZSc7XHJcbmltcG9ydCB7IHdhcm5EZXByZWNhdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9sb2dnZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PREFMX0FOSU1BVEVfRFVSQVRJT04gPSAyMDA7IC8vIER1cmF0aW9uIHdoZW4gcGVyZm9ybSBhbmltYXRpb25zIChtcylcclxuZXhwb3J0IGNvbnN0IFdSQVBfQ0xBU1NfTkFNRSA9ICdhbnQtbW9kYWwtd3JhcCc7XHJcblxyXG50eXBlIEFuaW1hdGlvblN0YXRlID0gJ2VudGVyJyB8ICdsZWF2ZScgfCBudWxsO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ21vZGFsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnBzLW1vZGFsJyxcclxuICBleHBvcnRBczogJ2Jwc01vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnBzLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9icHMtbW9kYWwuY29tcG9uZW50LmNzcyddLFxyXG4gIC8vIFVzaW5nIE9uUHVzaCBmb3IgbW9kYWwgY2F1c2VkIGZvb3RlciBjYW4gbm90IHRvIGRldGVjdCBjaGFuZ2VzLiB3ZSBjYW4gZml4IGl0IHdoZW4gOC54LlxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdFxyXG59KVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG5leHBvcnQgY2xhc3MgQnBzTW9kYWxDb21wb25lbnQ8VCA9IGFueSwgUiA9IGFueT4gZXh0ZW5kcyBCcHNNb2RhbFJlZjxULCBSPlxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgTW9kYWxPcHRpb25zPFQ+IHtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzVmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNDbG9zYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc09rTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNPa0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0NhbmNlbERpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0NhbmNlbExvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzS2V5Ym9hcmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNOb0FuaW1hdGlvbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNNb2RhbERpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gIC8vIFRPRE8oaHN1YW54eXopOiBhZGQgZGVmYXVsdCB2YWx1ZSBvbmNlIG9sZCBBUEkgaXMgZGVwcmVjYXRlZC5cclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIEBJbnB1dEJvb2xlYW4oKSBicHNNYXNrOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSkgQElucHV0Qm9vbGVhbigpIGJwc01hc2tDbG9zYWJsZTogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCkgYnBzQ29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+IHwgVHlwZTxUPjsgLy8gW1NUQVRJQ10gSWYgbm90IHNwZWNpZmllZCwgd2lsbCB1c2UgPG5nLWNvbnRlbnQ+XHJcbiAgQElucHV0KCkgYnBzQ29tcG9uZW50UGFyYW1zOiBUOyAvLyBbU1RBVElDXSBPTkxZIGF2YWxpYWJsZSB3aGVuIG56Q29udGVudCBpcyBhIGNvbXBvbmVudFxyXG4gIEBJbnB1dCgpIGJwc0Zvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+IHwgQXJyYXk8TW9kYWxCdXR0b25PcHRpb25zPFQ+PiB8IG51bGw7IC8vIFtTVEFUSUNdIERlZmF1bHQgTW9kYWwgT05MWVxyXG4gIEBJbnB1dCgpIGJwc0dldENvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBPdmVybGF5UmVmIHwgKCgpID0+IEhUTUxFbGVtZW50IHwgT3ZlcmxheVJlZikgPSAoKSA9PiB0aGlzLm92ZXJsYXkuY3JlYXRlKCk7IC8vIFtTVEFUSUNdXHJcbiAgQElucHV0KCkgYnBzWkluZGV4OiBudW1iZXIgPSAxMDAwO1xyXG4gIEBJbnB1dCgpIGJwc1dpZHRoOiBudW1iZXIgfCBzdHJpbmcgPSA1MjA7XHJcbiAgQElucHV0KCkgYnBzV3JhcENsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGJwc0NsYXNzTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGJwc1N0eWxlOiBvYmplY3Q7XHJcbiAgQElucHV0KCkgYnBzVGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PjtcclxuICBASW5wdXQoKSBicHNDbG9zZUljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+ID0gJ2Nsb3NlJztcclxuICBASW5wdXQoKSBicHNNYXNrU3R5bGU6IG9iamVjdDtcclxuICBASW5wdXQoKSBicHNCb2R5U3R5bGU6IG9iamVjdDtcclxuICBASW5wdXQoKSBicHNPa1RleHQ6IHN0cmluZyB8IG51bGw7XHJcbiAgQElucHV0KCkgYnBzQ2FuY2VsVGV4dDogc3RyaW5nIHwgbnVsbDtcclxuICBASW5wdXQoKSBicHNPa1R5cGU6IHN0cmluZyA9ICd2YXJpYXRpb24tMSc7XHJcbiAgQElucHV0KCkgYnBzSWNvblR5cGU6IHN0cmluZyA9ICdxdWVzdGlvbi1jaXJjbGUnOyAvLyBDb25maXJtIE1vZGFsIE9OTFlcclxuICBASW5wdXQoKSBicHNNb2RhbFR5cGU6IE1vZGFsVHlwZSA9ICdkZWZhdWx0JztcclxuXHJcbiAgQElucHV0KCkgQE91dHB1dCgpIHJlYWRvbmx5IGJwc09uT2s6IEV2ZW50RW1pdHRlcjxUPiB8IE9uQ2xpY2tDYWxsYmFjazxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuICBASW5wdXQoKSBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzT25DYW5jZWw6IEV2ZW50RW1pdHRlcjxUPiB8IE9uQ2xpY2tDYWxsYmFjazxUPiA9IG5ldyBFdmVudEVtaXR0ZXI8VD4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc0FmdGVyT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTsgLy8gVHJpZ2dlciB3aGVuIG1vZGFsIG9wZW4odmlzaWJsZSkgYWZ0ZXIgYW5pbWF0aW9uc1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNBZnRlckNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxSPigpOyAvLyBUcmlnZ2VyIHdoZW4gbW9kYWwgbGVhdmUtYW5pbWF0aW9uIG92ZXJcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzVmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnbW9kYWxDb250YWluZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSBtb2RhbENvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdib2R5Q29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIGJvZHlDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XHJcbiAgQFZpZXdDaGlsZCgnYXV0b0ZvY3VzQnV0dG9uT2snLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IEVsZW1lbnRSZWYgfSkgYXV0b0ZvY3VzQnV0dG9uT2s6IEVsZW1lbnRSZWY7IC8vIE9ubHkgYWltIHRvIGZvY3VzIHRoZSBvayBidXR0b24gdGhhdCBuZWVkcyB0byBiZSBhdXRvIGZvY3VzZWRcclxuXHJcbiAgQENvbnRlbnRDaGlsZChCcHNNb2RhbEZvb3RlckRpcmVjdGl2ZSwgeyBzdGF0aWM6IGZhbHNlIH0pXHJcbiAgc2V0IG1vZGFsRm9vdGVyKHZhbHVlOiBCcHNNb2RhbEZvb3RlckRpcmVjdGl2ZSkge1xyXG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLnRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuc2V0Rm9vdGVyV2l0aFRlbXBsYXRlKHZhbHVlLnRlbXBsYXRlUmVmKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBhZnRlck9wZW4oKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICAvLyBPYnNlcnZhYmxlIGFsaWFzIGZvciBuekFmdGVyT3BlblxyXG4gICAgcmV0dXJuIHRoaXMuYnBzQWZ0ZXJPcGVuLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFmdGVyQ2xvc2UoKTogT2JzZXJ2YWJsZTxSPiB7XHJcbiAgICAvLyBPYnNlcnZhYmxlIGFsaWFzIGZvciBuekFmdGVyQ2xvc2VcclxuICAgIHJldHVybiB0aGlzLmJwc0FmdGVyQ2xvc2UuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgY2FuY2VsVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuYnBzQ2FuY2VsVGV4dCB8fCB0aGlzLmxvY2FsZS5jYW5jZWxUZXh0ITtcclxuICB9XHJcblxyXG4gIGdldCBva1RleHQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmJwc09rVGV4dCB8fCB0aGlzLmxvY2FsZS5va1RleHQhO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhpZGRlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5icHNWaXNpYmxlICYmICF0aGlzLmFuaW1hdGlvblN0YXRlO1xyXG4gIH0gLy8gSW5kaWNhdGUgd2hldGhlciB0aGlzIGRpYWxvZyBzaG91bGQgaGlkZGVuXHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIFRoZSBjYWxjdWxhdGVkIGhpZ2hlc3Qgd2VpZ2h0IG9mIG1hc2sgdmFsdWVcclxuICAgKlxyXG4gICAqIFdlaWdodCBvZiBkaWZmZXJlbnQgbWFzayBpbnB1dDpcclxuICAgKiBjb21wb25lbnQgZGVmYXVsdCB2YWx1ZSA8IGdsb2JhbCBjb25maWd1cmF0aW9uIDwgY29tcG9uZW50IGlucHV0IHZhbHVlXHJcbiAgICovXHJcbiAgZ2V0IG1hc2soKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5icHNNYXNrICE9IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYnBzTWFzaztcclxuICAgIH0gZWxzZSBpZiAodGhpcy5icHNNb2RhbEdsb2JhbENvbmZpZyAmJiB0aGlzLmJwc01vZGFsR2xvYmFsQ29uZmlnLmJwc01hc2sgIT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5icHNNb2RhbEdsb2JhbENvbmZpZy5icHNNYXNrO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBUaGUgY2FsY3VsYXRlZCBoaWdoZXN0IHdlaWdodCBvZiBtYXNrQ2xvc2FibGUgdmFsdWVcclxuICAgKlxyXG4gICAqIFdlaWdodCBvZiBkaWZmZXJlbnQgbWFza0Nsb3NhYmxlIGlucHV0OlxyXG4gICAqIGNvbXBvbmVudCBkZWZhdWx0IHZhbHVlIDwgZ2xvYmFsIGNvbmZpZ3VyYXRpb24gPCBjb21wb25lbnQgaW5wdXQgdmFsdWVcclxuICAgKi9cclxuICBnZXQgbWFza0Nsb3NhYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuYnBzTWFza0Nsb3NhYmxlICE9IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYnBzTWFza0Nsb3NhYmxlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmJwc01vZGFsR2xvYmFsQ29uZmlnICYmIHRoaXMuYnBzTW9kYWxHbG9iYWxDb25maWcuYnBzTWFza0Nsb3NhYmxlICE9IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYnBzTW9kYWxHbG9iYWxDb25maWcuYnBzTWFza0Nsb3NhYmxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2NhbGU6IHsgb2tUZXh0Pzogc3RyaW5nOyBjYW5jZWxUZXh0Pzogc3RyaW5nIH0gPSB7fTtcclxuICBtYXNrQW5pbWF0aW9uQ2xhc3NNYXA6IG9iamVjdCB8IG51bGw7XHJcbiAgbW9kYWxBbmltYXRpb25DbGFzc01hcDogb2JqZWN0IHwgbnVsbDtcclxuICB0cmFuc2Zvcm1PcmlnaW4gPSAnMHB4IDBweCAwcHgnOyAvLyBUaGUgb3JpZ2luIHBvaW50IHRoYXQgYW5pbWF0aW9uIGJhc2VkIG9uXHJcblxyXG4gIHByaXZhdGUgY29udGVudENvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFQ+OyAvLyBIYW5kbGUgdGhlIHJlZmVyZW5jZSB3aGVuIHVzaW5nIG56Q29udGVudCBhcyBDb21wb25lbnRcclxuICBwcml2YXRlIGFuaW1hdGlvblN0YXRlOiBBbmltYXRpb25TdGF0ZTsgLy8gQ3VycmVudCBhbmltYXRpb24gc3RhdGVcclxuICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBPdmVybGF5UmVmO1xyXG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIHByZXZpb3VzbHlGb2N1c2VkRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBmb2N1c1RyYXA6IEZvY3VzVHJhcDtcclxuICBwcml2YXRlIHNjcm9sbFN0cmF0ZWd5OiBCbG9ja1Njcm9sbFN0cmF0ZWd5O1xyXG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcclxuICBwcml2YXRlIGRpYWxvZ01vdXNlRG93biA9IGZhbHNlO1xyXG4gIHByaXZhdGUgdGltZW91dElkOiBudW1iZXI7XHJcblxyXG4gIFtrZXk6IHN0cmluZ106IGFueTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXHJcbiAgICBwcml2YXRlIG92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXI6IE92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXIsXHJcbiAgICBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSBtb2RhbENvbnRyb2w6IEJwc01vZGFsQ29udHJvbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGZvY3VzVHJhcEZhY3Rvcnk6IEZvY3VzVHJhcEZhY3RvcnksXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX01PREFMX0NPTkZJRykgcHJpdmF0ZSBicHNNb2RhbEdsb2JhbENvbmZpZzogQnBzTW9kYWxDb25maWcsXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnNjcm9sbFN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKTtcclxuXHJcbiAgICBpZiAodGhpcy5icHNNb2RhbEdsb2JhbENvbmZpZykge1xyXG4gICAgICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAgICAgJ2BOWl9NT0RBTF9DT05GSUdgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSBnbG9iYWwgY29uZmlnIGluc3RlYWQuJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnTW9kYWwnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLmlzQ29tcG9uZW50KHRoaXMuYnBzQ29udGVudCkpIHtcclxuICAgICAgdGhpcy5jcmVhdGVEeW5hbWljQ29tcG9uZW50KHRoaXMuYnBzQ29udGVudCBhcyBUeXBlPFQ+KTsgLy8gQ3JlYXRlIGNvbXBvbmVudCBhbG9uZyB3aXRob3V0IFZpZXdcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc01vZGFsQnV0dG9ucyh0aGlzLmJwc0Zvb3RlcikpIHtcclxuICAgICAgLy8gU2V0dXAgZGVmYXVsdCBidXR0b24gb3B0aW9uc1xyXG4gICAgICB0aGlzLmJwc0Zvb3RlciA9IHRoaXMuZm9ybWF0TW9kYWxCdXR0b25zKHRoaXMuYnBzRm9vdGVyIGFzIEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBsYWNlIHRoZSBtb2RhbCBkb20gdG8gZWxzZXdoZXJlXHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IHR5cGVvZiB0aGlzLmJwc0dldENvbnRhaW5lciA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuYnBzR2V0Q29udGFpbmVyKCkgOiB0aGlzLmJwc0dldENvbnRhaW5lcjtcclxuICAgIGlmICh0aGlzLmNvbnRhaW5lciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgZnJvbUV2ZW50PEtleWJvYXJkRXZlbnQ+KHRoaXMuZG9jdW1lbnQuYm9keSwgJ2tleWRvd24nKVxyXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXHJcbiAgICAgICAgLnN1YnNjcmliZShlID0+IHRoaXMua2V5ZG93bkxpc3RlbmVyKGUpKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5jb250YWluZXIgaW5zdGFuY2VvZiBPdmVybGF5UmVmKSB7XHJcbiAgICAgIC8vIE5PVEU6IG9ubHkgYXR0YWNoIHRoZSBkb20gdG8gb3ZlcmxheSwgdGhlIHZpZXcgY29udGFpbmVyIGlzIG5vdCBjaGFuZ2VkIGFjdHVhbGx5XHJcbiAgICAgIHRoaXMuc2V0T3ZlcmxheVJlZih0aGlzLmNvbnRhaW5lcik7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLm92ZXJsYXlFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZlxyXG4gICAgICAgIC5rZXlkb3duRXZlbnRzKClcclxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoZSA9PiB0aGlzLmtleWRvd25MaXN0ZW5lcihlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVnaXN0ZXIgbW9kYWwgd2hlbiBhZnRlck9wZW4vYWZ0ZXJDbG9zZSBpcyBzdGFibGVcclxuICAgIHRoaXMubW9kYWxDb250cm9sLnJlZ2lzdGVyTW9kYWwodGhpcyk7XHJcbiAgfVxyXG5cclxuICAvLyBbTk9URV0gTk9UIGF2YWlsYWJsZSB3aGVuIHVzaW5nIGJ5IHNlcnZpY2UhXHJcbiAgLy8gQmVjYXVzZSBuZ09uQ2hhbmdlcyBuZXZlciBiZSBjYWxsZWQgd2hlbiB1c2luZyBieSBzZXJ2aWNlLFxyXG4gIC8vIGhlcmUgd2UgY2FuJ3Qgc3VwcG9ydCBcIm56Q29udGVudFwiKENvbXBvbmVudCkgZXRjLiBhcyBpbnB1dHMgdGhhdCBpbml0aWFsaXplZCBkeW5hbWljYWxseS5cclxuICAvLyBCVVQ6IFVzZXIgYWxzbyBjYW4gY2hhbmdlIFwibnpDb250ZW50XCIgZHluYW1pY2FsbHkgdG8gdHJpZ2dlciBVSSBjaGFuZ2VzIChwcm92aWRlZCB5b3UgZG9uJ3QgdXNlIFxiQ29tcG9uZW50IHRoYXQgbmVlZHMgaW5pdGlhbGl6YXRpb25zKVxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLmJwc1Zpc2libGUpIHtcclxuICAgICAgdGhpcy5oYW5kbGVWaXNpYmxlU3RhdGVDaGFuZ2UodGhpcy5icHNWaXNpYmxlLCAhY2hhbmdlcy5icHNWaXNpYmxlLmZpcnN0Q2hhbmdlKTsgLy8gRG8gbm90IHRyaWdnZXIgYW5pbWF0aW9uIHdoaWxlIGluaXRpYWxpemluZ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgLy8gSWYgdXNpbmcgQ29tcG9uZW50LCBpdCBpcyB0aGUgdGltZSB0byBhdHRhY2ggVmlldyB3aGlsZSBib2R5Q29udGFpbmVyIGlzIHJlYWR5XHJcbiAgICBpZiAodGhpcy5jb250ZW50Q29tcG9uZW50UmVmKSB7XHJcbiAgICAgIHRoaXMuYm9keUNvbnRhaW5lci5pbnNlcnQodGhpcy5jb250ZW50Q29tcG9uZW50UmVmLmhvc3RWaWV3KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5hdXRvRm9jdXNCdXR0b25Paykge1xyXG4gICAgICAodGhpcy5hdXRvRm9jdXNCdXR0b25Pay5uYXRpdmVFbGVtZW50IGFzIEhUTUxCdXR0b25FbGVtZW50KS5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAvLyBDbG9zZSBzZWxmIGJlZm9yZSBkZXN0cnVjdGluZ1xyXG4gICAgdGhpcy5jaGFuZ2VWaXNpYmxlRnJvbUluc2lkZShmYWxzZSkudGhlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMubW9kYWxDb250cm9sLmRlcmVnaXN0ZXJNb2RhbCh0aGlzKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmNvbnRhaW5lciBpbnN0YW5jZW9mIE92ZXJsYXlSZWYpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5kaXNwb3NlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcclxuICAgICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcclxuICAgIH0pO1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElkKTtcclxuICB9XHJcblxyXG4gIHNldEZvb3RlcldpdGhUZW1wbGF0ZSh0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8e30+KTogdm9pZCB7XHJcbiAgICB0aGlzLmJwc0Zvb3RlciA9IHRlbXBsYXRlUmVmO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBzZXRPdmVybGF5UmVmKG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYpOiB2b2lkIHtcclxuICAgIHRoaXMub3ZlcmxheVJlZiA9IG92ZXJsYXlSZWY7XHJcbiAgfVxyXG5cclxuICBrZXlkb3duTGlzdGVuZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFU0NBUEUgJiYgdGhpcy5icHNLZXlib2FyZCkge1xyXG4gICAgICB0aGlzLm9uQ2xpY2tPa0NhbmNlbCgnY2FuY2VsJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVuKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VWaXNpYmxlRnJvbUluc2lkZSh0cnVlKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKHJlc3VsdD86IFIpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlVmlzaWJsZUZyb21JbnNpZGUoZmFsc2UsIHJlc3VsdCk7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KHJlc3VsdD86IFIpOiB2b2lkIHtcclxuICAgIC8vIERlc3Ryb3kgZXF1YWxzIENsb3NlXHJcbiAgICB0aGlzLmNsb3NlKHJlc3VsdCk7XHJcbiAgfVxyXG5cclxuICB0cmlnZ2VyT2soKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2xpY2tPa0NhbmNlbCgnb2snKTtcclxuICB9XHJcblxyXG4gIHRyaWdnZXJDYW5jZWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2xpY2tPa0NhbmNlbCgnY2FuY2VsJyk7XHJcbiAgfVxyXG5cclxuICBnZXRJbnN0YW5jZSgpOiBCcHNNb2RhbENvbXBvbmVudCB7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGdldENvbnRlbnRDb21wb25lbnRSZWYoKTogQ29tcG9uZW50UmVmPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWY7XHJcbiAgfVxyXG5cclxuICBnZXRDb250ZW50Q29tcG9uZW50KCk6IFQge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGVudENvbXBvbmVudFJlZiAmJiB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuaW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYgJiYgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBvbk1hc2tEaWFsb2dEb3duKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dNb3VzZURvd24gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgb25EaWFsb2dVcCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRpYWxvZ01vdXNlRG93bikge1xyXG4gICAgICB0aGlzLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nTW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgIH0sIDApIGFzIGFueTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xpY2tNYXNrKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLm1hc2sgJiZcclxuICAgICAgdGhpcy5tYXNrQ2xvc2FibGUgJiZcclxuICAgICAgKCRldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucyhXUkFQX0NMQVNTX05BTUUpICYmXHJcbiAgICAgIHRoaXMuYnBzVmlzaWJsZSAmJlxyXG4gICAgICAhdGhpcy5kaWFsb2dNb3VzZURvd25cclxuICAgICkge1xyXG4gICAgICB0aGlzLm9uQ2xpY2tPa0NhbmNlbCgnY2FuY2VsJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc01vZGFsVHlwZSh0eXBlOiBNb2RhbFR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmJwc01vZGFsVHlwZSA9PT0gdHlwZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkNsaWNrQ2xvc2VCdG4oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5icHNWaXNpYmxlKSB7XHJcbiAgICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkNsaWNrT2tDYW5jZWwodHlwZTogJ29rJyB8ICdjYW5jZWwnKTogdm9pZCB7XHJcbiAgICBjb25zdCB0cmlnZ2VyID0geyBvazogdGhpcy5icHNPbk9rLCBjYW5jZWw6IHRoaXMuYnBzT25DYW5jZWwgfVt0eXBlXTtcclxuICAgIGNvbnN0IGxvYWRpbmdLZXkgPSB7IG9rOiAnYnBzT2tMb2FkaW5nJywgY2FuY2VsOiAnYnBzQ2FuY2VsTG9hZGluZycgfVt0eXBlXTtcclxuICAgIGlmICh0cmlnZ2VyIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XHJcbiAgICAgIHRyaWdnZXIuZW1pdCh0aGlzLmdldENvbnRlbnRDb21wb25lbnQoKSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0cmlnZ2VyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRyaWdnZXIodGhpcy5nZXRDb250ZW50Q29tcG9uZW50KCkpO1xyXG4gICAgICBjb25zdCBjYXNlQ2xvc2UgPSAoZG9DbG9zZTogYm9vbGVhbiB8IHZvaWQgfCB7fSkgPT4gZG9DbG9zZSAhPT0gZmFsc2UgJiYgdGhpcy5jbG9zZShkb0Nsb3NlIGFzIFIpOyAvLyBVc2VycyBjYW4gcmV0dXJuIFwiZmFsc2VcIiB0byBwcmV2ZW50IGNsb3NpbmcgYnkgZGVmYXVsdFxyXG4gICAgICBpZiAoaXNQcm9taXNlKHJlc3VsdCkpIHtcclxuICAgICAgICB0aGlzW2xvYWRpbmdLZXldID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBoYW5kbGVUaGVuID0gKGRvQ2xvc2U6IGJvb2xlYW4gfCB2b2lkIHwge30pID0+IHtcclxuICAgICAgICAgIHRoaXNbbG9hZGluZ0tleV0gPSBmYWxzZTtcclxuICAgICAgICAgIGNhc2VDbG9zZShkb0Nsb3NlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIChyZXN1bHQgYXMgUHJvbWlzZTx2b2lkPikudGhlbihoYW5kbGVUaGVuKS5jYXRjaChoYW5kbGVUaGVuKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjYXNlQ2xvc2UocmVzdWx0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzTm9uRW1wdHlTdHJpbmcodmFsdWU6IHt9KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZSAhPT0gJyc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNUZW1wbGF0ZVJlZih2YWx1ZToge30pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzQ29tcG9uZW50KHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVHlwZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc01vZGFsQnV0dG9ucyh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+IHwgQXJyYXk8TW9kYWxCdXR0b25PcHRpb25zPFQ+PiB8IG51bGwpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgLy8gRG8gcmVzdCB0aGluZ3Mgd2hlbiB2aXNpYmxlIHN0YXRlIGNoYW5nZWRcclxuICBwcml2YXRlIGhhbmRsZVZpc2libGVTdGF0ZUNoYW5nZSh2aXNpYmxlOiBib29sZWFuLCBhbmltYXRpb246IGJvb2xlYW4gPSB0cnVlLCBjbG9zZVJlc3VsdD86IFIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICh2aXNpYmxlKSB7XHJcbiAgICAgIC8vIEhpZGUgc2Nyb2xsYmFyIGF0IHRoZSBmaXJzdCB0aW1lIHdoZW4gc2hvd24gdXBcclxuICAgICAgdGhpcy5zY3JvbGxTdHJhdGVneS5lbmFibGUoKTtcclxuICAgICAgdGhpcy5zYXZlUHJldmlvdXNseUZvY3VzZWRFbGVtZW50KCk7XHJcbiAgICAgIHRoaXMudHJhcEZvY3VzKCk7XHJcbiAgICAgIGlmICh0aGlzLmNvbnRhaW5lciBpbnN0YW5jZW9mIE92ZXJsYXlSZWYpIHtcclxuICAgICAgICB0aGlzLm92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXIuYWRkKHRoaXMub3ZlcmxheVJlZik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLmNvbnRhaW5lciBpbnN0YW5jZW9mIE92ZXJsYXlSZWYpIHtcclxuICAgICAgICB0aGlzLm92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXIucmVtb3ZlKHRoaXMub3ZlcmxheVJlZik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGFuaW1hdGlvbiA/IHRoaXMuYW5pbWF0ZVRvKHZpc2libGUpIDogdW5kZWZpbmVkKS50aGVuKCgpID0+IHtcclxuICAgICAgLy8gRW1pdCBvcGVuL2Nsb3NlIGV2ZW50IGFmdGVyIGFuaW1hdGlvbnMgb3ZlclxyXG4gICAgICBpZiAodmlzaWJsZSkge1xyXG4gICAgICAgIHRoaXMuYnBzQWZ0ZXJPcGVuLmVtaXQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmJwc0FmdGVyQ2xvc2UuZW1pdChjbG9zZVJlc3VsdCk7XHJcbiAgICAgICAgdGhpcy5yZXN0b3JlRm9jdXMoKTtcclxuICAgICAgICB0aGlzLnNjcm9sbFN0cmF0ZWd5LmRpc2FibGUoKTtcclxuICAgICAgICAvLyBNYXJrIHRoZSBmb3IgY2hlY2sgc28gaXQgY2FuIHJlYWN0IGlmIHRoZSB2aWV3IGNvbnRhaW5lciBpcyB1c2luZyBPblB1c2ggY2hhbmdlIGRldGVjdGlvbi5cclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBMb29rdXAgYSBidXR0b24ncyBwcm9wZXJ0eSwgaWYgdGhlIHByb3AgaXMgYSBmdW5jdGlvbiwgY2FsbCAmIHRoZW4gcmV0dXJuIHRoZSByZXN1bHQsIG90aGVyd2lzZSwgcmV0dXJuIGl0c2VsZi5cclxuICBwdWJsaWMgZ2V0QnV0dG9uQ2FsbGFibGVQcm9wKG9wdGlvbnM6IE1vZGFsQnV0dG9uT3B0aW9uczxUPiwgcHJvcDogc3RyaW5nKToge30ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBvcHRpb25zW3Byb3BdO1xyXG4gICAgY29uc3QgYXJnczogVFtdID0gW107XHJcbiAgICBpZiAodGhpcy5jb250ZW50Q29tcG9uZW50UmVmKSB7XHJcbiAgICAgIGFyZ3MucHVzaCh0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuaW5zdGFuY2UpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLmFwcGx5KG9wdGlvbnMsIGFyZ3MpIDogdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvLyBPbiBuekZvb3RlcidzIG1vZGFsIGJ1dHRvbiBjbGlja1xyXG4gIHB1YmxpYyBvbkJ1dHRvbkNsaWNrKGJ1dHRvbjogTW9kYWxCdXR0b25PcHRpb25zPFQ+KTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdldEJ1dHRvbkNhbGxhYmxlUHJvcChidXR0b24sICdvbkNsaWNrJyk7IC8vIENhbGwgb25DbGljayBkaXJlY3RseVxyXG4gICAgaWYgKGlzUHJvbWlzZShyZXN1bHQpKSB7XHJcbiAgICAgIGJ1dHRvbi5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgKHJlc3VsdCBhcyBQcm9taXNlPHt9PikudGhlbigoKSA9PiAoYnV0dG9uLmxvYWRpbmcgPSBmYWxzZSkpLmNhdGNoKCgpID0+IChidXR0b24ubG9hZGluZyA9IGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDaGFuZ2UgbnpWaXNpYmxlIGZyb20gaW5zaWRlXHJcbiAgcHJpdmF0ZSBjaGFuZ2VWaXNpYmxlRnJvbUluc2lkZSh2aXNpYmxlOiBib29sZWFuLCBjbG9zZVJlc3VsdD86IFIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICh0aGlzLmJwc1Zpc2libGUgIT09IHZpc2libGUpIHtcclxuICAgICAgLy8gQ2hhbmdlIG56VmlzaWJsZSB2YWx1ZSBpbW1lZGlhdGVseVxyXG4gICAgICB0aGlzLmJwc1Zpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgICB0aGlzLmJwc1Zpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKTtcclxuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlVmlzaWJsZVN0YXRlQ2hhbmdlKHZpc2libGUsIHRydWUsIGNsb3NlUmVzdWx0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hhbmdlQW5pbWF0aW9uU3RhdGUoc3RhdGU6IEFuaW1hdGlvblN0YXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gc3RhdGU7XHJcbiAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgdGhpcy5tYXNrQW5pbWF0aW9uQ2xhc3NNYXAgPSB7XHJcbiAgICAgICAgW2BmYWRlLSR7c3RhdGV9YF06IHRydWUsXHJcbiAgICAgICAgW2BmYWRlLSR7c3RhdGV9LWFjdGl2ZWBdOiB0cnVlXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMubW9kYWxBbmltYXRpb25DbGFzc01hcCA9IHtcclxuICAgICAgICBbYHpvb20tJHtzdGF0ZX1gXTogdHJ1ZSxcclxuICAgICAgICBbYHpvb20tJHtzdGF0ZX0tYWN0aXZlYF06IHRydWVcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubWFza0FuaW1hdGlvbkNsYXNzTWFwID0gdGhpcy5tb2RhbEFuaW1hdGlvbkNsYXNzTWFwID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYW5pbWF0ZVRvKGlzVmlzaWJsZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYgKGlzVmlzaWJsZSkge1xyXG4gICAgICAvLyBGaWd1cmUgb3V0IHRoZSBsYXN0ZXN0IGNsaWNrIHBvc2l0aW9uIHdoZW4gc2hvd3MgdXBcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZVRyYW5zZm9ybU9yaWdpbigpKTsgLy8gW05PVEVdIFVzaW5nIHRpbWVvdXQgZHVlIHRvIHRoZSBkb2N1bWVudC5jbGljayBldmVudCBpcyBmaXJlZCBsYXRlciB0aGFuIHZpc2libGUgY2hhbmdlLCBzbyBpZiBub3QgcG9zdHBvbmVkIHRvIG5leHQgZXZlbnQtbG9vcCwgd2UgY2FuJ3QgZ2V0IHRoZSBsYXN0ZXN0IGNsaWNrIHBvc2l0aW9uXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGFuZ2VBbmltYXRpb25TdGF0ZShpc1Zpc2libGUgPyAnZW50ZXInIDogJ2xlYXZlJyk7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PlxyXG4gICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIC8vIFJldHVybiB3aGVuIGFuaW1hdGlvbiBpcyBvdmVyXHJcbiAgICAgICAgICB0aGlzLmNoYW5nZUFuaW1hdGlvblN0YXRlKG51bGwpO1xyXG4gICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGhpcy5icHNOb0FuaW1hdGlvbiA/IDAgOiBNT0RBTF9BTklNQVRFX0RVUkFUSU9OXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1hdE1vZGFsQnV0dG9ucyhidXR0b25zOiBBcnJheTxNb2RhbEJ1dHRvbk9wdGlvbnM8VD4+KTogQXJyYXk8TW9kYWxCdXR0b25PcHRpb25zPFQ+PiB7XHJcbiAgICByZXR1cm4gYnV0dG9ucy5tYXAoYnV0dG9uID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi57XHJcbiAgICAgICAgICB0eXBlOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgICBzaXplOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgICBhdXRvTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRpc2FibGVkOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLi4uYnV0dG9uXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIGNvbXBvbmVudCBkeW5hbWljYWxseSBidXQgbm90IGF0dGFjaCB0byBhbnkgVmlldyAodGhpcyBhY3Rpb24gd2lsbCBiZSBleGVjdXRlZCB3aGVuIGJvZHlDb250YWluZXIgaXMgcmVhZHkpXHJcbiAgICogQHBhcmFtIGNvbXBvbmVudCBDb21wb25lbnQgY2xhc3NcclxuICAgKi9cclxuICBwcml2YXRlIGNyZWF0ZUR5bmFtaWNDb21wb25lbnQoY29tcG9uZW50OiBUeXBlPFQ+KTogdm9pZCB7XHJcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5jZnIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcclxuICAgIGNvbnN0IGNoaWxkSW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xyXG4gICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEJwc01vZGFsUmVmLCB1c2VWYWx1ZTogdGhpcyB9XSxcclxuICAgICAgcGFyZW50OiB0aGlzLnZpZXdDb250YWluZXIucGFyZW50SW5qZWN0b3JcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jb250ZW50Q29tcG9uZW50UmVmID0gZmFjdG9yeS5jcmVhdGUoY2hpbGRJbmplY3Rvcik7XHJcbiAgICBpZiAodGhpcy5icHNDb21wb25lbnRQYXJhbXMpIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuaW5zdGFuY2UsIHRoaXMuYnBzQ29tcG9uZW50UGFyYW1zKTtcclxuICAgIH1cclxuICAgIC8vIERvIHRoZSBmaXJzdCBjaGFuZ2UgZGV0ZWN0aW9uIGltbWVkaWF0ZWx5IChvciB3ZSBkbyBkZXRlY3Rpb24gYXQgbmdBZnRlclZpZXdJbml0LCBtdWx0aS1jaGFuZ2VzIGVycm9yIHdpbGwgYmUgdGhyb3duKVxyXG4gICAgdGhpcy5jb250ZW50Q29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIC8vIFVwZGF0ZSB0cmFuc2Zvcm0tb3JpZ2luIHRvIHRoZSBsYXN0IGNsaWNrIHBvc2l0aW9uIG9uIGRvY3VtZW50XHJcbiAgcHJpdmF0ZSB1cGRhdGVUcmFuc2Zvcm1PcmlnaW4oKTogdm9pZCB7XHJcbiAgICBjb25zdCBtb2RhbEVsZW1lbnQgPSB0aGlzLm1vZGFsQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBpZiAodGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQpIHtcclxuICAgICAgY29uc3QgcHJldmlvdXNseURPTVJlY3QgPSB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgY29uc3QgbGFzdFBvc2l0aW9uID0gZ2V0RWxlbWVudE9mZnNldCh0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCk7XHJcbiAgICAgIGNvbnN0IHggPSBsYXN0UG9zaXRpb24ubGVmdCArIHByZXZpb3VzbHlET01SZWN0LndpZHRoIC8gMjtcclxuICAgICAgY29uc3QgeSA9IGxhc3RQb3NpdGlvbi50b3AgKyBwcmV2aW91c2x5RE9NUmVjdC5oZWlnaHQgLyAyO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybU9yaWdpbiA9IGAke3ggLSBtb2RhbEVsZW1lbnQub2Zmc2V0TGVmdH1weCAke3kgLSBtb2RhbEVsZW1lbnQub2Zmc2V0VG9wfXB4IDBweGA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kb2N1bWVudCkge1xyXG4gICAgICB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCA9IHRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJhcEZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmZvY3VzVHJhcCkge1xyXG4gICAgICB0aGlzLmZvY3VzVHJhcCA9IHRoaXMuZm9jdXNUcmFwRmFjdG9yeS5jcmVhdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5mb2N1c1RyYXAuZm9jdXNJbml0aWFsRWxlbWVudFdoZW5SZWFkeSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXN0b3JlRm9jdXMoKTogdm9pZCB7XHJcbiAgICAvLyBXZSBuZWVkIHRoZSBleHRyYSBjaGVjaywgYmVjYXVzZSBJRSBjYW4gc2V0IHRoZSBgYWN0aXZlRWxlbWVudGAgdG8gbnVsbCBpbiBzb21lIGNhc2VzLlxyXG4gICAgaWYgKHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50ICYmIHR5cGVvZiB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudC5mb2N1cyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZm9jdXNUcmFwKSB7XHJcbiAgICAgIHRoaXMuZm9jdXNUcmFwLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPG5nLXRlbXBsYXRlICN0cGxPcmlnaW5Db250ZW50PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPiA8IS0tIENvbXBhdGlibGU6IHRoZSA8bmctY29udGVudD4gY2FuIGFwcGVhciBvbmx5IG9uY2UgLS0+XHJcblxyXG48ZGl2IFtuek5vQW5pbWF0aW9uXT1cImJwc05vQW5pbWF0aW9uXCI+XHJcbiAgPGRpdiAqbmdJZj1cIm1hc2tcIlxyXG4gICAgY2xhc3M9XCJhbnQtbW9kYWwtbWFza1wiXHJcbiAgICBbbmdDbGFzc109XCJtYXNrQW5pbWF0aW9uQ2xhc3NNYXBcIlxyXG4gICAgW2NsYXNzLmFudC1tb2RhbC1tYXNrLWhpZGRlbl09XCJoaWRkZW5cIlxyXG4gICAgW25nU3R5bGVdPVwiYnBzTWFza1N0eWxlXCJcclxuICAgIFtzdHlsZS56SW5kZXhdPVwiYnBzWkluZGV4XCJcclxuICA+PC9kaXY+XHJcbiAgPGRpdlxyXG4gICAgKGNsaWNrKT1cIm9uQ2xpY2tNYXNrKCRldmVudClcIlxyXG4gICAgKG1vdXNldXApPVwib25EaWFsb2dVcCgpXCJcclxuICAgIGNsYXNzPVwiYW50LW1vZGFsLXdyYXAge3sgYnBzV3JhcENsYXNzTmFtZSB9fVwiXHJcbiAgICBbc3R5bGUuekluZGV4XT1cImJwc1pJbmRleFwiXHJcbiAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJoaWRkZW4gPyAnaGlkZGVuJyA6IG51bGxcIlxyXG4gICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgICByb2xlPVwiZGlhbG9nXCJcclxuICA+XHJcbiAgICA8ZGl2ICNtb2RhbENvbnRhaW5lclxyXG4gICAgICBjbGFzcz1cImFudC1tb2RhbCB7eyBicHNDbGFzc05hbWUgfX1cIlxyXG4gICAgICAobW91c2Vkb3duKT1cIm9uTWFza0RpYWxvZ0Rvd24oKVwiXHJcbiAgICAgIFtuZ0NsYXNzXT1cIm1vZGFsQW5pbWF0aW9uQ2xhc3NNYXBcIlxyXG4gICAgICBbbmdTdHlsZV09XCJicHNTdHlsZVwiXHJcbiAgICAgIFtzdHlsZS53aWR0aF09XCJicHNXaWR0aCB8IG56VG9Dc3NVbml0XCJcclxuICAgICAgW3N0eWxlLnRyYW5zZm9ybS1vcmlnaW5dPVwidHJhbnNmb3JtT3JpZ2luXCJcclxuICAgICAgcm9sZT1cImRvY3VtZW50XCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImJwc0Nsb3NhYmxlXCIgKGNsaWNrKT1cIm9uQ2xpY2tDbG9zZUJ0bigpXCIgY2xhc3M9XCJhbnQtbW9kYWwtY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LW1vZGFsLWNsb3NlLXhcIiBbY2xhc3MuYnBzLW1vZGFsLWRpc2FibGVkXT1cImJwc01vZGFsRGlzYWJsZWRcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImJwc0Nsb3NlSWNvblwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgKm5nSWY9XCIhYnBzTW9kYWxEaXNhYmxlZFwiIHNyYz1cImFzc2V0cy9icHMtaWNvbnMvc3BzX3hfaWNvbl9jbG9zZXBhbmVsX3doaXRlLnN2Z1wiIGNsYXNzPVwiYW50LW1vZGFsLWNsb3NlLWljb25cIiAvPlxyXG4gICAgICAgICAgICAgIDxpbWcgKm5nSWY9XCJicHNNb2RhbERpc2FibGVkXCIgc3JjPVwiYXNzZXRzL2Jwcy1pY29ucy9zcHNfeF9pY29uX2Nsb3NlcGFuZWxfZ3JleS5zdmdcIiBjbGFzcz1cImFudC1tb2RhbC1jbG9zZS1pY29uXCIgLz5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFoaWRkZW5cIiBbbmdTd2l0Y2hdPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNNb2RhbFR5cGUoJ2RlZmF1bHQnKVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRwbENvbnRlbnREZWZhdWx0XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc01vZGFsVHlwZSgnY29uZmlybScpXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwidHBsQ29udGVudENvbmZpcm1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48IS0tIFtQcmVkZWZpbmVkXSBEZWZhdWx0IE1vZGFsIENvbnRlbnQgLS0+XHJcbjxuZy10ZW1wbGF0ZSAjdHBsQ29udGVudERlZmF1bHQ+XHJcbiAgPGRpdiAqbmdJZj1cImJwc1RpdGxlXCIgY2xhc3M9XCJhbnQtbW9kYWwtaGVhZGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLXRpdGxlXCIgW2NsYXNzLmJwcy1tb2RhbC1kaXNhYmxlZF09XCJicHNNb2RhbERpc2FibGVkXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInRydWVcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc1RlbXBsYXRlUmVmKGJwc1RpdGxlKVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJwc1RpdGxlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNOb25FbXB0eVN0cmluZyhicHNUaXRsZSlcIj48ZGl2IFtpbm5lckhUTUxdPVwiYnBzVGl0bGVcIj48L2Rpdj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLWJvZHlcIiBbbmdTdHlsZV09XCJicHNCb2R5U3R5bGVcIj5cclxuICAgIDxuZy1jb250YWluZXIgI2JvZHlDb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNDb21wb25lbnQoYnBzQ29udGVudClcIiBbbmdTd2l0Y2hdPVwidHJ1ZVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYoYnBzQ29udGVudClcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJicHNDb250ZW50XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNOb25FbXB0eVN0cmluZyhicHNDb250ZW50KVwiPjxkaXYgW2lubmVySFRNTF09XCJicHNDb250ZW50XCI+PC9kaXY+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0IFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRwbE9yaWdpbkNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuICA8ZGl2ICpuZ0lmPVwiYnBzRm9vdGVyICE9PSBudWxsXCIgY2xhc3M9XCJhbnQtbW9kYWwtZm9vdGVyXCI+XHJcbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJ0cnVlXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYoYnBzRm9vdGVyKVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJwc0Zvb3RlclwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc05vbkVtcHR5U3RyaW5nKGJwc0Zvb3RlcilcIj48ZGl2IFtpbm5lckhUTUxdPVwiYnBzRm9vdGVyXCI+PC9kaXY+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTW9kYWxCdXR0b25zKGJwc0Zvb3RlcilcIj5cclxuICAgICAgICA8YnV0dG9uICpuZ0Zvcj1cImxldCBidXR0b24gb2YgYnBzRm9vdGVyXCIgYnBzLWJ1dHRvblxyXG4gICAgICAgICAgKGNsaWNrKT1cIm9uQnV0dG9uQ2xpY2soYnV0dG9uKVwiXHJcbiAgICAgICAgICBbaGlkZGVuXT1cIiFnZXRCdXR0b25DYWxsYWJsZVByb3AoYnV0dG9uLCAnc2hvdycpXCJcclxuICAgICAgICAgIFticHNMb2FkaW5nXT1cImdldEJ1dHRvbkNhbGxhYmxlUHJvcChidXR0b24sICdsb2FkaW5nJylcIlxyXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImdldEJ1dHRvbkNhbGxhYmxlUHJvcChidXR0b24sICdkaXNhYmxlZCcpXCJcclxuICAgICAgICAgIFticHNUeXBlXT1cImJ1dHRvbi50eXBlXCJcclxuICAgICAgICAgIFticHNTaGFwZV09XCJidXR0b24uc2hhcGVcIlxyXG4gICAgICAgICAgW2Jwc1NpemVdPVwiYnV0dG9uLnNpemVcIlxyXG4gICAgICAgICAgW2Jwc0dob3N0XT1cImJ1dHRvbi5naG9zdFwiXHJcbiAgICAgICAgPnt7IGJ1dHRvbi5sYWJlbCB9fTwvYnV0dG9uPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxyXG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJicHNDYW5jZWxUZXh0IT09bnVsbFwiIGJwc1R5cGU9XCJ2YXJpYXRpb24tMVwiIGJwcy1idXR0b24gKGNsaWNrKT1cIm9uQ2xpY2tPa0NhbmNlbCgnY2FuY2VsJylcIiBbYnBzTG9hZGluZ109XCJicHNDYW5jZWxMb2FkaW5nXCIgW2Rpc2FibGVkXT1cImJwc0NhbmNlbERpc2FibGVkXCI+XHJcbiAgICAgICAgICB7eyBjYW5jZWxUZXh0IH19XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImJwc09rVGV4dCE9PW51bGxcIiBicHMtYnV0dG9uIFticHNUeXBlXT1cImJwc09rVHlwZVwiIChjbGljayk9XCJvbkNsaWNrT2tDYW5jZWwoJ29rJylcIiBbYnBzTG9hZGluZ109XCJicHNPa0xvYWRpbmdcIiBbZGlzYWJsZWRdPVwiYnBzT2tEaXNhYmxlZFwiPlxyXG4gICAgICAgICAge3sgb2tUZXh0IH19XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbjwhLS0gL1tQcmVkZWZpbmVkXSBEZWZhdWx0IE1vZGFsIENvbnRlbnQgLS0+XHJcblxyXG48IS0tIFtQcmVkZWZpbmVkXSBDb25maXJtIE1vZGFsIENvbnRlbnQgLS0+XHJcbjxuZy10ZW1wbGF0ZSAjdHBsQ29udGVudENvbmZpcm0+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC1ib2R5XCIgW25nU3R5bGVdPVwiYnBzQm9keVN0eWxlXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLWNvbmZpcm0tYm9keS13cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtY29uZmlybS1ib2R5XCI+XHJcbiAgICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cImJwc0ljb25UeXBlXCI+PC9pPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LW1vZGFsLWNvbmZpcm0tdGl0bGVcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInRydWVcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNUZW1wbGF0ZVJlZihicHNUaXRsZSlcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJicHNUaXRsZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc05vbkVtcHR5U3RyaW5nKGJwc1RpdGxlKVwiPjxzcGFuIFtpbm5lckhUTUxdPVwiYnBzVGl0bGVcIj48L3NwYW4+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC1jb25maXJtLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgI2JvZHlDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNDb21wb25lbnQoYnBzQ29udGVudClcIiBbbmdTd2l0Y2hdPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYoYnBzQ29udGVudClcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJicHNDb250ZW50XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNOb25FbXB0eVN0cmluZyhicHNDb250ZW50KVwiPjxkaXYgW2lubmVySFRNTF09XCJicHNDb250ZW50XCI+PC9kaXY+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0IFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRwbE9yaWdpbkNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtY29uZmlybS1idG5zXCI+XHJcbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImJwc0NhbmNlbFRleHQhPT1udWxsXCJcclxuICAgICAgICAgIGJwcy1idXR0b25cclxuICAgICAgICAgIGJwc1R5cGU9XCJ2YXJpYXRpb24tMVwiXHJcbiAgICAgICAgICAoY2xpY2spPVwib25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKVwiXHJcbiAgICAgICAgICBbYnBzTG9hZGluZ109XCJicHNDYW5jZWxMb2FkaW5nXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCJicHNDYW5jZWxEaXNhYmxlZFwiPlxyXG4gICAgICAgICAge3sgY2FuY2VsVGV4dCB9fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gI2F1dG9Gb2N1c0J1dHRvbk9rXHJcbiAgICAgICAgICAqbmdJZj1cImJwc09rVGV4dCE9PW51bGxcIlxyXG4gICAgICAgICAgYnBzLWJ1dHRvblxyXG4gICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2tPa0NhbmNlbCgnb2snKVwiXHJcbiAgICAgICAgICBbYnBzVHlwZV09XCJicHNPa1R5cGVcIlxyXG4gICAgICAgICAgW2Jwc0xvYWRpbmddPVwiYnBzT2tMb2FkaW5nXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCJicHNPa0Rpc2FibGVkXCI+XHJcbiAgICAgICAgICB7eyBva1RleHQgfX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4gPCEtLSAvLmFudC1tb2RhbC1jb25maXJtLWJvZHktd3JhcHBlciAtLT5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuPCEtLSAvW1ByZWRlZmluZWRdIENvbmZpcm0gTW9kYWwgQ29udGVudCAtLT5cclxuIl19