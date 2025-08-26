import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, Inject, Input, Optional, ViewChild, ViewEncapsulation, HostListener, Output, EventEmitter } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { NZ_WAVE_GLOBAL_CONFIG } from 'ng-zorro-antd/core/wave';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { BpsInputDirective } from '../bps-input/bps-input.directive';
import { WithConfig } from '../bps-tree/tree/config.service';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { isEmpty } from '../core/util/check';
import { findFirstNotEmptyNode, findLastNotEmptyNode } from '../core/util/dom';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/observers";
import * as i2 from "../core/services/update-host-class.service";
import * as i3 from "../bps-tree/tree/config.service";
import * as i4 from "@angular/common";
import * as i5 from "ng-zorro-antd/icon";
import * as i6 from "@angular/forms";
import * as i7 from "../bps-tooltip/tooltip";
import * as i8 from "../bps-input/bps-input.directive";
const _c0 = ["contentElement"];
const _c1 = ["bps-button", ""];
const _c2 = ["*"];
function BpsButtonComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 7);
} }
function BpsButtonComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 8, 1);
    i0.ɵɵprojection(2);
    i0.ɵɵelementEnd();
} }
function BpsButtonComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 8, 1);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.bpsValue);
} }
function BpsButtonComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵlistener("click", function BpsButtonComponent_div_5_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.startEditionMode($event)); });
    i0.ɵɵelement(1, "div", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("bps-editable-btn-edit-icon-wrapper-disabled", !ctx_r1.bpsEditionEnabled);
    i0.ɵɵproperty("bpsTooltipType", ctx_r1.bpsEditTooltipType)("bpsTooltipTitle", ctx_r1.bpsEditTooltipTitle ? ctx_r1.bpsEditTooltipTitle : "Edit")("bpsTooltipPlacement", ctx_r1.bpsEditTooltipPlacement);
} }
function BpsButtonComponent_div_6_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 14);
} }
function BpsButtonComponent_div_6_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 15);
} }
function BpsButtonComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, BpsButtonComponent_div_6_img_1_Template, 1, 0, "img", 12)(2, BpsButtonComponent_div_6_img_2_Template, 1, 0, "img", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("bpsTooltipType", ctx_r1.bpsComputedTooltipType)("bpsTooltipTitle", ctx_r1.bpsComputedTooltipTitle ? ctx_r1.bpsComputedTooltipTitle : ctx_r1.bpsComputed ? "Computed" : "Not Computed")("bpsTooltipPlacement", ctx_r1.bpsComputedTooltipPlacement);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.bpsComputed);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.bpsComputed);
} }
const NZ_CONFIG_COMPONENT_NAME = 'button';
export class BpsButtonComponent {
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289 */
    setClassMap() {
        const prefixCls = 'ant-btn';
        const sizeMap = { large: 'lg', small: 'sm' };
        this.nzUpdateHostClassService.updateHostClass(this.el, {
            [`${prefixCls}-${this.bpsType}`]: this.bpsType,
            [`${prefixCls}-${this.bpsShape}`]: this.bpsShape,
            [`${prefixCls}-${sizeMap[this.bpsSize]}`]: sizeMap[this.bpsSize],
            [`${prefixCls}-loading`]: this.bpsLoading,
            [`${prefixCls}-icon-only`]: this.iconOnly && !this.bpsSearch && !this.isInDropdown,
            [`${prefixCls}-background-ghost`]: this.bpsGhost,
            [`${prefixCls}-block`]: this.bpsBlock,
            [`ant-input-search-button`]: this.bpsSearch
        });
    }
    updateIconDisplay(value) {
        if (this.iconElement) {
            this.renderer.setStyle(this.iconElement, 'display', value ? 'none' : 'inline-block');
        }
    }
    checkContent() {
        const hasIcon = this.listOfIconElement && this.listOfIconElement.length;
        if (hasIcon) {
            this.moveIcon();
        }
        this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
        /** https://github.com/angular/angular/issues/12530 **/
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.setStyle(this.contentElement.nativeElement, 'display', 'none');
            this.iconOnly = !!hasIcon;
        }
        else {
            this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
            this.iconOnly = false;
        }
        this.setClassMap();
        this.updateIconDisplay(this.bpsLoading);
        if (!this.cdr.destroyed) {
            this.cdr.detectChanges();
        }
    }
    moveIcon() {
        if (this.listOfIconElement && this.listOfIconElement.length) {
            const firstChildElement = findFirstNotEmptyNode(this.contentElement.nativeElement);
            const lastChildElement = findLastNotEmptyNode(this.contentElement.nativeElement);
            if (firstChildElement && firstChildElement === this.listOfIconElement.first.nativeElement) {
                this.renderer.insertBefore(this.el, firstChildElement, this.contentElement.nativeElement);
                this.iconElement = firstChildElement;
            }
            else if (lastChildElement && lastChildElement === this.listOfIconElement.last.nativeElement) {
                this.renderer.appendChild(this.el, lastChildElement);
            }
        }
    }
    preventDefault($event) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
    }
    handleClick(e) {
        if (this.bpsType !== 'editable') {
            return;
        }
        if (this.showEditionMode && this.inputElement && this.inputElement.nativeElement !== e.target) {
            this.showEditionMode = false;
            this.bpsValueChange.emit(this.bpsValue);
        }
    }
    endEditMode($event) {
        this.preventDefault($event);
        if ($event.key === 'Enter' || $event.key === 'enter') {
            this.showEditionMode = false;
            this.bpsValueChange.emit(this.bpsValue);
        }
    }
    onClick(event) {
        if (this.bpsType !== 'editable') {
            return;
        }
        this.clicks++;
        setTimeout(() => {
            if (this.clicks === 1) {
                this.isSelected = !this.isSelected;
                this.isSelectedChange.emit(this.isSelected);
            }
            this.clicks = 0;
        }, 300);
    }
    startEditionMode($event) {
        $event.stopImmediatePropagation();
        $event.stopPropagation();
        if (!this.bpsEditionEnabled)
            return;
        this.showEditionMode = true;
        this.cdr.detectChanges();
        this.inputElement.nativeElement.focus();
        this.inputElement.nativeElement.select();
    }
    constructor(elementRef, cdr, renderer, contentObserver, nzUpdateHostClassService, ngZone, nzConfigService, waveConfig, animationType) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.renderer = renderer;
        this.contentObserver = contentObserver;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.ngZone = ngZone;
        this.nzConfigService = nzConfigService;
        this.waveConfig = waveConfig;
        this.animationType = animationType;
        this.isSelected = false;
        this.isSelectedChange = new EventEmitter();
        this.showEditionMode = false;
        /*@HostBinding('attr.nz-wave') nzWave = new NzWaveDirective(
          this.ngZone,
          this.elementRef,
          this.waveConfig,
          this.animationType
        );*/
        this.bpsBlock = false;
        this.bpsGhost = false;
        this.bpsSearch = false;
        this.bpsComputed = false;
        this.bpsLoading = false;
        this.bpsEditionEnabled = true;
        this.bpsType = 'default';
        this.bpsValue = '';
        this.bpsComputedTooltipType = 'variation_11';
        this.bpsComputedTooltipPlacement = 'top';
        this.bpsComputedTooltipTitle = null;
        this.bpsEditTooltipType = 'variation_11';
        this.bpsEditTooltipPlacement = 'top';
        this.bpsEditTooltipTitle = null;
        this.bpsValueChange = new EventEmitter();
        this.bpsShape = null;
        this.el = this.elementRef.nativeElement;
        this.isInDropdown = false;
        this.iconOnly = false;
        this.destroy$ = new Subject();
        this.clicks = 0;
        this.renderer.addClass(elementRef.nativeElement, 'ant-btn');
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.setClassMap();
            this.cdr.markForCheck();
        });
    }
    ngAfterContentInit() {
        if (!this.contentElement) {
            return;
        }
        this.contentObserver
            .observe(this.contentElement)
            .pipe(startWith(true), takeUntil(this.destroy$))
            .subscribe(() => {
            // https://github.com/NG-ZORRO/ng-zorro-antd/issues/3079
            Promise.resolve().then(() => this.checkContent());
        });
    }
    ngOnInit() {
        this.setClassMap();
        //this.nzWave.ngOnInit();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        //this.nzWave.ngOnDestroy();
    }
    ngOnChanges(changes) {
        if (changes.bpsBlock ||
            changes.bpsGhost ||
            changes.bpsSearch ||
            changes.bpsType ||
            changes.bpsShape ||
            changes.bpsSize ||
            changes.bpsLoading) {
            this.setClassMap();
        }
        if (changes.bpsLoading) {
            this.updateIconDisplay(this.bpsLoading);
        }
        /*if (changes.bpsType && changes.bpsType.currentValue === 'link') {
          this.nzWave.disable();
        } else {
          this.nzWave.enable();
        }*/
    }
    static { this.ɵfac = function BpsButtonComponent_Factory(t) { return new (t || BpsButtonComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.ContentObserver), i0.ɵɵdirectiveInject(i2.NzUpdateHostClassService), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i3.NzConfigService), i0.ɵɵdirectiveInject(NZ_WAVE_GLOBAL_CONFIG, 8), i0.ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsButtonComponent, selectors: [["", "bps-button", ""]], contentQueries: function BpsButtonComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, NzIconDirective, 4, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfIconElement = _t);
        } }, viewQuery: function BpsButtonComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
            i0.ɵɵviewQuery(BpsInputDirective, 7, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
        } }, hostVars: 4, hostBindings: function BpsButtonComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mouseup", function BpsButtonComponent_mouseup_HostBindingHandler($event) { return ctx.handleClick($event); }, false, i0.ɵɵresolveWindow)("click", function BpsButtonComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } if (rf & 2) {
            i0.ɵɵclassProp("bps-button-editable-selected", ctx.isSelected)("bps-button-editable-onedition", ctx.showEditionMode);
        } }, inputs: { isSelected: "isSelected", bpsBlock: "bpsBlock", bpsGhost: "bpsGhost", bpsSearch: "bpsSearch", bpsComputed: "bpsComputed", bpsLoading: "bpsLoading", bpsEditionEnabled: "bpsEditionEnabled", bpsType: "bpsType", bpsValue: "bpsValue", bpsComputedTooltipType: "bpsComputedTooltipType", bpsComputedTooltipPlacement: "bpsComputedTooltipPlacement", bpsComputedTooltipTitle: "bpsComputedTooltipTitle", bpsEditTooltipType: "bpsEditTooltipType", bpsEditTooltipPlacement: "bpsEditTooltipPlacement", bpsEditTooltipTitle: "bpsEditTooltipTitle", bpsShape: "bpsShape", bpsSize: "bpsSize" }, outputs: { isSelectedChange: "isSelectedChange", bpsValueChange: "bpsValueChange" }, exportAs: ["bpsButton"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService]), i0.ɵɵNgOnChangesFeature], attrs: _c1, ngContentSelectors: _c2, decls: 7, vars: 8, consts: [["inputElement", ""], ["contentElement", ""], ["nz-icon", "", "nzType", "loading", 4, "ngIf"], ["class", "bps-custom-content", 4, "ngIf"], ["bps-input", "", "autofocus", "", 1, "bps-button-editable-input", 3, "focus", "click", "dblclick", "keyup", "ngModelChange", "ngModel"], ["class", "bps-editable-btn-edit-icon-wrapper", "bps-tooltip", "", 3, "bps-editable-btn-edit-icon-wrapper-disabled", "bpsTooltipType", "bpsTooltipTitle", "bpsTooltipPlacement", "click", 4, "ngIf"], ["class", "bps-computed-icon", "bps-tooltip", "", 3, "bpsTooltipType", "bpsTooltipTitle", "bpsTooltipPlacement", 4, "ngIf"], ["nz-icon", "", "nzType", "loading"], [1, "bps-custom-content"], ["bps-tooltip", "", 1, "bps-editable-btn-edit-icon-wrapper", 3, "click", "bpsTooltipType", "bpsTooltipTitle", "bpsTooltipPlacement"], [1, "bps-editable-btn-edit-icon"], ["bps-tooltip", "", 1, "bps-computed-icon", 3, "bpsTooltipType", "bpsTooltipTitle", "bpsTooltipPlacement"], ["src", "/assets/bps-icons/sps_green_dot_icon_computed.svg", 4, "ngIf"], ["src", "/assets/bps-icons/sps_grey_dot_icon_notcomputed.svg", 4, "ngIf"], ["src", "/assets/bps-icons/sps_green_dot_icon_computed.svg"], ["src", "/assets/bps-icons/sps_grey_dot_icon_notcomputed.svg"]], template: function BpsButtonComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, BpsButtonComponent_i_0_Template, 1, 0, "i", 2)(1, BpsButtonComponent_span_1_Template, 3, 0, "span", 3)(2, BpsButtonComponent_span_2_Template, 3, 1, "span", 3);
            i0.ɵɵelementStart(3, "input", 4, 0);
            i0.ɵɵlistener("focus", function BpsButtonComponent_Template_input_focus_3_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView($event.target.select()); })("click", function BpsButtonComponent_Template_input_click_3_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.preventDefault($event)); })("dblclick", function BpsButtonComponent_Template_input_dblclick_3_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.preventDefault($event)); })("keyup", function BpsButtonComponent_Template_input_keyup_3_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.endEditMode($event)); });
            i0.ɵɵtwoWayListener("ngModelChange", function BpsButtonComponent_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.bpsValue, $event) || (ctx.bpsValue = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, BpsButtonComponent_div_5_Template, 2, 5, "div", 5)(6, BpsButtonComponent_div_6_Template, 3, 5, "div", 6);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.bpsLoading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.bpsType !== "editable");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.bpsType === "editable" && !ctx.showEditionMode);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("bps-invisible", !ctx.showEditionMode);
            i0.ɵɵtwoWayProperty("ngModel", ctx.bpsValue);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.bpsType === "editable" && !ctx.showEditionMode);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.bpsType === "editable");
        } }, dependencies: [i4.NgIf, i5.NzIconDirective, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgModel, i7.BpsTooltipDirective, i8.BpsInputDirective], styles: [".ant-btn-variation-1{height:40px!important;border-radius:8px!important;border:solid 2px #00a2d1!important;background-color:transparent!important;font-size:12px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.58!important;letter-spacing:normal!important;text-align:center!important;color:#00a2d1!important}.bps-editable-btn-edit-icon-wrapper-disabled{cursor:initial!important}.ant-btn-variation-1[disabled],.ant-btn-variation-2[disabled],.ant-btn-variation-2[disabled]:hover{border-color:#474747!important;color:#474747!important}.ant-btn-variation-1:focus,.ant-btn-variation-1.active{border-color:#445c67!important;color:#445c67!important}.ant-btn-variation-1:active{color:#00a2d1!important;border:solid 2px #00a2d1!important}.ant-btn-variation-2{height:40px!important;border-radius:8px!important;border:solid 2px #474747!important;background-color:#363636!important;font-size:12px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.58!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important}.ant-btn-variation-2[disabled]{background-color:transparent!important}.ant-btn-variation-2:hover{border-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-2:focus,.ant-btn-variation-2.active{border-color:#445c67!important;color:#fff!important}.ant-btn-variation-2:active{color:#fff!important;border-color:#474747!important}.ant-btn-variation-3,.ant-btn-variation-4,.ant-btn-variation-5{height:30px!important;border-radius:8px!important;background-color:#00a2d1!important;color:#fff!important;font-size:10px!important;font-weight:700!important;border:none!important;font-stretch:normal!important;font-style:normal!important;line-height:1.2;letter-spacing:.3px!important;text-align:center!important}.ant-btn-variation-4{height:28px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important}.ant-btn-variation-5{height:22px!important;border-radius:11px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important}.ant-btn-variation-7,.ant-btn-variation-8,.ant-btn-editable,.ant-btn-variation-6{height:22px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border-radius:11px!important;background-color:#363636!important;border:none!important}.ant-btn-editable{width:100%;text-align:left!important;font-size:12px!important;height:20px!important;border:1px solid #363636!important;padding-top:0}.ant-btn-editable .bps-custom-content{position:relative;top:1px;max-width:calc(100% - 25px);white-space:nowrap;overflow:hidden;display:inline-block!important;text-overflow:ellipsis;margin:unset!important}.ant-btn-editable.bps-button-editable-selected .bps-custom-content{max-width:calc(100% - 35px)}.bps-computed-icon{position:relative;float:right;margin-right:5px!important;top:-1px}.ant-btn-variation-9,.ant-btn-variation-9:hover{height:22px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border-radius:8px!important;background-color:#253d47!important;border:none!important}.ant-btn-variation-3[disabled],.ant-btn-variation-4[disabled],.ant-btn-variation-5[disabled],.ant-btn-variation-6[disabled],.ant-btn-variation-7[disabled],.ant-btn-variation-8[disabled],.ant-btn-editable[disabled],.ant-btn-variation-9[disabled],.ant-btn-variation-4[disabled]:hover,.ant-btn-variation-8[disabled]:hover,.ant-btn-editable[disabled]:hover,.ant-btn-variation-9[disabled]:hover,.ant-btn-variation-5[disabled]:hover,.ant-btn-variation-7[disabled]:hover,.ant-btn-variation-6[disabled]:hover,.ant-btn-variation-3[disabled]:hover{background-color:#363636!important;border:none!important;color:#666!important}.ant-btn-editable[disabled],.ant-btn-editable[disabled]:hover{border:1px solid #363636!important}.ant-btn-variation-3:hover,.ant-btn-variation-5:hover,.ant-btn-variation-7:hover,.ant-btn-variation-8:hover,.ant-btn-variation-4:hover{background-color:#445c67!important;color:#fff!important}.ant-btn-editable:not(.bps-button-editable-onedition):hover{background-color:#474747!important;border:1px solid #262626}.ant-btn-editable[disabled]:hover{background-color:#363636!important;border:1px solid #363636!important}.ant-btn-variation-6:hover{background-color:#bc0000!important;color:#fff!important}.ant-btn-variation-3:focus,.ant-btn-variation-4:focus,.ant-btn-variation-5:focus,.ant-btn-variation-3.active,.ant-btn-variation-5.active,.ant-btn-variation-4.active{background-color:#445c67!important;color:#fff!important}.ant-btn-variation-9:focus,.ant-btn-variation-9.active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-7:focus,.ant-btn-variation-7.active{background-color:#363636!important}.ant-btn-variation-7:active{background-color:#00a2d1!important}.ant-btn-variation-6:focus,.ant-btn-variation-6.active{background-color:maroon!important;color:#fff!important}.ant-btn-variation-8:focus,.ant-btn-variation-8.active{background-color:#253d47!important;color:#999!important}.ant-btn-variation-3:active,.ant-btn-variation-5:active,.ant-btn-variation-4:active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-6:active,.ant-btn-variation-8:active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-9:active{background-color:#253d47!important;color:#fff!important}.ant-btn-variation-10,.ant-btn-variation-11,.ant-btn-variation-13,.ant-btn-variation-13:hover,.ant-btn-variation-11:hover,.ant-btn-variation-10:hover{width:30px!important;height:30px!important;border-radius:8px!important;background-color:#363636!important;border:none!important;padding:0!important;color:#fff!important}.ant-btn-variation-13,.ant-btn-variation-13:hover{border-radius:4px!important;width:22px!important;height:22px!important}.ant-btn-variation-13:hover{background-color:#445c67!important}.ant-btn-variation-11:hover,.ant-btn-variation-11{background-color:#253d47!important}.ant-btn-variation-10[disabled]:hover,.ant-btn-variation-11[disabled]:hover,.ant-btn-variation-13[disabled]:hover,.ant-btn-variation-14[disabled]:hover,.ant-btn-variation-15[disabled]:hover,.ant-btn-variation-16[disabled]:hover,.ant-btn-variation-20[disabled]:hover,.ant-btn-variation-11[disabled],.ant-btn-variation-13[disabled],.ant-btn-variation-15[disabled],.ant-btn-variation-16[disabled],.ant-btn-variation-20[disabled],.ant-btn-variation-14[disabled],.ant-btn-variation-10[disabled]{background-color:#363636!important;border:none!important;color:#666!important}.ant-btn-variation-10[disabled]:hover svg,.ant-btn-variation-15[disabled]:hover svg,.ant-btn-variation-11[disabled]:hover svg,.ant-btn-variation-13[disabled]:hover svg,.ant-btn-variation-14[disabled]:hover svg,.ant-btn-variation-16[disabled]:hover svg,.ant-btn-variation-11[disabled] svg,.ant-btn-variation-15[disabled] svg,.ant-btn-variation-16[disabled] svg,.ant-btn-variation-14[disabled] svg,.ant-btn-variation-13[disabled] svg,.ant-btn-variation-10[disabled] svg{opacity:.2!important}.ant-btn-variation-10:focus,.ant-btn-variation-13:focus,.ant-btn-variation-13.active,.ant-btn-variation-10.active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-11:active{background-color:#00a2d1!important;color:#fff!important}.bps-custom-content{display:table!important;margin:0 auto!important}.bps-custom-content svg{display:table-cell!important;vertical-align:middle!important}.ant-btn-variation-12,.ant-btn-variation-12:hover{height:40px;width:40px;background-color:#253d47!important;border-radius:12px!important;border:solid 2px #00a2d1!important;background-clip:content-box!important;padding:5px!important;color:#fff!important}.ant-btn-variation-12:hover{background-color:#445c67!important}.ant-btn-variation-12[disabled],.ant-btn-variation-12[disabled]:hover{background-color:#363636!important;border-color:#666!important;color:#666!important}.ant-btn-variation-12[disabled]:hover svg,.ant-btn-variation-12[disabled] svg{opacity:.2!important}.ant-btn-variation-12:focus,.ant-btn-variation-12.active{background-color:#00a2d1!important}.ant-btn-variation-12:active{background-color:#253d47!important}.ant-btn-variation-15,.ant-btn-variation-16,.ant-btn-variation-14{width:30px!important;height:30px!important;background-color:#00a2d1!important;border-radius:100px!important;border:none!important;color:#fff!important;padding:0!important}.ant-btn-variation-14:hover{color:#fff!important;background-color:#445c67!important;border:none!important}.ant-btn-variation-15{background-color:#363636!important}.ant-btn-variation-15:hover{color:#fff!important;background-color:#bc0000!important;border:none!important}.ant-btn-variation-16{background-color:#363636!important}.ant-btn-variation-16:hover{background-color:#474747!important}.ant-btn-variation-14:focus,.ant-btn-variation-14.active{background-color:#253d47!important;color:#fff!important}.ant-btn-variation-16:focus,.ant-btn-variation-16.active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-15:focus,.ant-btn-variation-15.active{background-color:maroon!important;color:#fff!important}.ant-btn-variation-14:active{background-color:#00a2d1!important}.ant-btn-variation-10:active,.ant-btn-variation-15:active,.ant-btn-variation-16:active,.ant-btn-variation-13:active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-17:hover,.ant-btn-variation-17{height:32px!important;width:32px!important;font-size:17px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.71!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border:solid 2px #ffffff!important;background-color:#888!important;padding:0!important;border-radius:100px!important}.ant-btn-variation-17:hover{background-color:#666!important;color:#fff!important}.ant-btn-variation-17:focus,.ant-btn-variation-17.active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-17:active{background-color:#888!important}.ant-btn-variation-17[disabled]:hover,.ant-btn-variation-17[disabled]{border:solid 2px #666666!important;background-color:#888!important;color:#666!important}.ant-btn-variation-18:hover,.ant-btn-variation-19:hover,.ant-btn-variation-19,.ant-btn-variation-18{background-color:#262626!important;height:30px!important;width:30px!important;padding:0!important;border:none!important;border-radius:100px!important}.ant-btn-variation-19:hover,.ant-btn-variation-19{height:20px!important;width:20px!important;border-radius:4px!important}.ant-btn-variation-18:hover{background-color:#363636!important;color:#fff!important}.ant-btn-variation-18:focus,.ant-btn-variation-18.active{background-color:#474747!important;color:#fff!important}.ant-btn-variation-18:active,.ant-btn-variation-19:active{background-color:#262626!important}.ant-btn-variation-18[disabled]:hover,.ant-btn-variation-19[disabled]:hover,.ant-btn-variation-19[disabled],.ant-btn-variation-18[disabled]{border:none!important;background-color:#262626!important;color:#666!important}.ant-btn-variation-18[disabled]:hover svg,.ant-btn-variation-19[disabled]:hover svg,.ant-btn-variation-20[disabled]:hover svg,.ant-btn-variation-19[disabled] svg,.ant-btn-variation-20[disabled] svg,.ant-btn-variation-18[disabled] svg{opacity:.2!important}.ant-btn-variation-20,.ant-btn-variation-20:hover{width:25px!important;height:30px!important;background-color:#363636!important;border:none!important;border-radius:100px 0 0 100px!important;color:#fff!important}.ant-btn-variation-20:hover{background-color:#474747!important;color:#fff!important}.ant-btn-variation-20:focus,.ant-btn-variation-20.active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-20:active{background-color:#363636!important;border:none!important}.bps-button-editable-selected:hover,.bps-button-editable-selected{border:solid 1px #00a2d1!important}.bps-button-editable-input{max-width:calc(100% - 25px)!important;display:inline-block;background-color:transparent!important;position:relative;top:-2px;border:none!important;padding:0!important;font-size:12px!important;border-radius:unset!important;overflow:hidden;line-height:1.36!important;margin:unset}.bps-invisible{display:none}.bps-editable-btn-edit-icon-wrapper{position:absolute!important;top:1px;right:33px;transform:scale(.85)}.bps-editable-btn-edit-icon:after{content:\"\"}.bps-button-editable-selected .bps-editable-btn-edit-icon:after{content:url(/assets/bps-icons/sps_editname_icon_home_hoverrow.svg)}.bps-button-editable-selected .bps-editable-btn-edit-icon-wrapper:not(.bps-editable-btn-edit-icon-wrapper-disabled):hover .bps-editable-btn-edit-icon:after{content:url(/assets/bps-icons/sps_editname_icon_home_hover.svg)}.ant-btn.disabled,.ant-btn[disabled]{cursor:initial!important}\n"], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], BpsButtonComponent.prototype, "isSelected", void 0);
__decorate([
    InputBoolean()
], BpsButtonComponent.prototype, "bpsBlock", void 0);
__decorate([
    InputBoolean()
], BpsButtonComponent.prototype, "bpsGhost", void 0);
__decorate([
    InputBoolean()
], BpsButtonComponent.prototype, "bpsSearch", void 0);
__decorate([
    InputBoolean()
], BpsButtonComponent.prototype, "bpsComputed", void 0);
__decorate([
    InputBoolean()
], BpsButtonComponent.prototype, "bpsLoading", void 0);
__decorate([
    InputBoolean()
], BpsButtonComponent.prototype, "bpsEditionEnabled", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, 'default')
], BpsButtonComponent.prototype, "bpsSize", void 0);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsButtonComponent, [{
        type: Component,
        args: [{ selector: '[bps-button]', exportAs: 'bpsButton', providers: [NzUpdateHostClassService], preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                    '[class.bps-button-editable-selected]': 'isSelected',
                    '[class.bps-button-editable-onedition]': 'showEditionMode'
                }, template: "<i nz-icon nzType=\"loading\" *ngIf=\"bpsLoading\"></i>\r\n<span *ngIf=\"bpsType !== 'editable'\" class=\"bps-custom-content\" #contentElement><ng-content></ng-content></span>\r\n\r\n<span *ngIf=\"bpsType === 'editable' && !showEditionMode\" class=\"bps-custom-content\" #contentElement>{{bpsValue}}</span>\r\n<input #inputElement bps-input\r\n       autofocus\r\n       (focus)=\"$event.target.select()\"\r\n       [class.bps-invisible]=\"!showEditionMode\"\r\n       (click)=\"preventDefault($event)\"\r\n       (dblclick)=\"preventDefault($event)\"\r\n       (keyup)=\"endEditMode($event)\"\r\n       class=\"bps-button-editable-input\"\r\n       [(ngModel)]=\"bpsValue\"\r\n/>\r\n\r\n<div class=\"bps-editable-btn-edit-icon-wrapper\"\r\n      [class.bps-editable-btn-edit-icon-wrapper-disabled]=\"!bpsEditionEnabled\"\r\n      (click)=\"startEditionMode($event)\"\r\n      bps-tooltip\r\n      [bpsTooltipType]=\"bpsEditTooltipType\"\r\n      [bpsTooltipTitle]=\"bpsEditTooltipTitle ? bpsEditTooltipTitle : 'Edit'\"\r\n      [bpsTooltipPlacement]=\"bpsEditTooltipPlacement\"\r\n      *ngIf=\"bpsType === 'editable' && !showEditionMode\">\r\n  <div class=\"bps-editable-btn-edit-icon\"></div>\r\n</div>\r\n\r\n<div  class=\"bps-computed-icon\"\r\n      bps-tooltip\r\n      [bpsTooltipType]=\"bpsComputedTooltipType\"\r\n      [bpsTooltipTitle]=\"bpsComputedTooltipTitle ? bpsComputedTooltipTitle : bpsComputed ? 'Computed' : 'Not Computed'\"\r\n      [bpsTooltipPlacement]=\"bpsComputedTooltipPlacement\"\r\n      *ngIf=\"bpsType === 'editable'\">\r\n  <img *ngIf=\"bpsComputed\"     \r\n       src=\"/assets/bps-icons/sps_green_dot_icon_computed.svg\" />\r\n  <img *ngIf=\"!bpsComputed\"\r\n       src=\"/assets/bps-icons/sps_grey_dot_icon_notcomputed.svg\" />\r\n</div>\r\n", styles: [".ant-btn-variation-1{height:40px!important;border-radius:8px!important;border:solid 2px #00a2d1!important;background-color:transparent!important;font-size:12px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.58!important;letter-spacing:normal!important;text-align:center!important;color:#00a2d1!important}.bps-editable-btn-edit-icon-wrapper-disabled{cursor:initial!important}.ant-btn-variation-1[disabled],.ant-btn-variation-2[disabled],.ant-btn-variation-2[disabled]:hover{border-color:#474747!important;color:#474747!important}.ant-btn-variation-1:focus,.ant-btn-variation-1.active{border-color:#445c67!important;color:#445c67!important}.ant-btn-variation-1:active{color:#00a2d1!important;border:solid 2px #00a2d1!important}.ant-btn-variation-2{height:40px!important;border-radius:8px!important;border:solid 2px #474747!important;background-color:#363636!important;font-size:12px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.58!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important}.ant-btn-variation-2[disabled]{background-color:transparent!important}.ant-btn-variation-2:hover{border-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-2:focus,.ant-btn-variation-2.active{border-color:#445c67!important;color:#fff!important}.ant-btn-variation-2:active{color:#fff!important;border-color:#474747!important}.ant-btn-variation-3,.ant-btn-variation-4,.ant-btn-variation-5{height:30px!important;border-radius:8px!important;background-color:#00a2d1!important;color:#fff!important;font-size:10px!important;font-weight:700!important;border:none!important;font-stretch:normal!important;font-style:normal!important;line-height:1.2;letter-spacing:.3px!important;text-align:center!important}.ant-btn-variation-4{height:28px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important}.ant-btn-variation-5{height:22px!important;border-radius:11px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important}.ant-btn-variation-7,.ant-btn-variation-8,.ant-btn-editable,.ant-btn-variation-6{height:22px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border-radius:11px!important;background-color:#363636!important;border:none!important}.ant-btn-editable{width:100%;text-align:left!important;font-size:12px!important;height:20px!important;border:1px solid #363636!important;padding-top:0}.ant-btn-editable .bps-custom-content{position:relative;top:1px;max-width:calc(100% - 25px);white-space:nowrap;overflow:hidden;display:inline-block!important;text-overflow:ellipsis;margin:unset!important}.ant-btn-editable.bps-button-editable-selected .bps-custom-content{max-width:calc(100% - 35px)}.bps-computed-icon{position:relative;float:right;margin-right:5px!important;top:-1px}.ant-btn-variation-9,.ant-btn-variation-9:hover{height:22px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border-radius:8px!important;background-color:#253d47!important;border:none!important}.ant-btn-variation-3[disabled],.ant-btn-variation-4[disabled],.ant-btn-variation-5[disabled],.ant-btn-variation-6[disabled],.ant-btn-variation-7[disabled],.ant-btn-variation-8[disabled],.ant-btn-editable[disabled],.ant-btn-variation-9[disabled],.ant-btn-variation-4[disabled]:hover,.ant-btn-variation-8[disabled]:hover,.ant-btn-editable[disabled]:hover,.ant-btn-variation-9[disabled]:hover,.ant-btn-variation-5[disabled]:hover,.ant-btn-variation-7[disabled]:hover,.ant-btn-variation-6[disabled]:hover,.ant-btn-variation-3[disabled]:hover{background-color:#363636!important;border:none!important;color:#666!important}.ant-btn-editable[disabled],.ant-btn-editable[disabled]:hover{border:1px solid #363636!important}.ant-btn-variation-3:hover,.ant-btn-variation-5:hover,.ant-btn-variation-7:hover,.ant-btn-variation-8:hover,.ant-btn-variation-4:hover{background-color:#445c67!important;color:#fff!important}.ant-btn-editable:not(.bps-button-editable-onedition):hover{background-color:#474747!important;border:1px solid #262626}.ant-btn-editable[disabled]:hover{background-color:#363636!important;border:1px solid #363636!important}.ant-btn-variation-6:hover{background-color:#bc0000!important;color:#fff!important}.ant-btn-variation-3:focus,.ant-btn-variation-4:focus,.ant-btn-variation-5:focus,.ant-btn-variation-3.active,.ant-btn-variation-5.active,.ant-btn-variation-4.active{background-color:#445c67!important;color:#fff!important}.ant-btn-variation-9:focus,.ant-btn-variation-9.active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-7:focus,.ant-btn-variation-7.active{background-color:#363636!important}.ant-btn-variation-7:active{background-color:#00a2d1!important}.ant-btn-variation-6:focus,.ant-btn-variation-6.active{background-color:maroon!important;color:#fff!important}.ant-btn-variation-8:focus,.ant-btn-variation-8.active{background-color:#253d47!important;color:#999!important}.ant-btn-variation-3:active,.ant-btn-variation-5:active,.ant-btn-variation-4:active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-6:active,.ant-btn-variation-8:active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-9:active{background-color:#253d47!important;color:#fff!important}.ant-btn-variation-10,.ant-btn-variation-11,.ant-btn-variation-13,.ant-btn-variation-13:hover,.ant-btn-variation-11:hover,.ant-btn-variation-10:hover{width:30px!important;height:30px!important;border-radius:8px!important;background-color:#363636!important;border:none!important;padding:0!important;color:#fff!important}.ant-btn-variation-13,.ant-btn-variation-13:hover{border-radius:4px!important;width:22px!important;height:22px!important}.ant-btn-variation-13:hover{background-color:#445c67!important}.ant-btn-variation-11:hover,.ant-btn-variation-11{background-color:#253d47!important}.ant-btn-variation-10[disabled]:hover,.ant-btn-variation-11[disabled]:hover,.ant-btn-variation-13[disabled]:hover,.ant-btn-variation-14[disabled]:hover,.ant-btn-variation-15[disabled]:hover,.ant-btn-variation-16[disabled]:hover,.ant-btn-variation-20[disabled]:hover,.ant-btn-variation-11[disabled],.ant-btn-variation-13[disabled],.ant-btn-variation-15[disabled],.ant-btn-variation-16[disabled],.ant-btn-variation-20[disabled],.ant-btn-variation-14[disabled],.ant-btn-variation-10[disabled]{background-color:#363636!important;border:none!important;color:#666!important}.ant-btn-variation-10[disabled]:hover svg,.ant-btn-variation-15[disabled]:hover svg,.ant-btn-variation-11[disabled]:hover svg,.ant-btn-variation-13[disabled]:hover svg,.ant-btn-variation-14[disabled]:hover svg,.ant-btn-variation-16[disabled]:hover svg,.ant-btn-variation-11[disabled] svg,.ant-btn-variation-15[disabled] svg,.ant-btn-variation-16[disabled] svg,.ant-btn-variation-14[disabled] svg,.ant-btn-variation-13[disabled] svg,.ant-btn-variation-10[disabled] svg{opacity:.2!important}.ant-btn-variation-10:focus,.ant-btn-variation-13:focus,.ant-btn-variation-13.active,.ant-btn-variation-10.active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-11:active{background-color:#00a2d1!important;color:#fff!important}.bps-custom-content{display:table!important;margin:0 auto!important}.bps-custom-content svg{display:table-cell!important;vertical-align:middle!important}.ant-btn-variation-12,.ant-btn-variation-12:hover{height:40px;width:40px;background-color:#253d47!important;border-radius:12px!important;border:solid 2px #00a2d1!important;background-clip:content-box!important;padding:5px!important;color:#fff!important}.ant-btn-variation-12:hover{background-color:#445c67!important}.ant-btn-variation-12[disabled],.ant-btn-variation-12[disabled]:hover{background-color:#363636!important;border-color:#666!important;color:#666!important}.ant-btn-variation-12[disabled]:hover svg,.ant-btn-variation-12[disabled] svg{opacity:.2!important}.ant-btn-variation-12:focus,.ant-btn-variation-12.active{background-color:#00a2d1!important}.ant-btn-variation-12:active{background-color:#253d47!important}.ant-btn-variation-15,.ant-btn-variation-16,.ant-btn-variation-14{width:30px!important;height:30px!important;background-color:#00a2d1!important;border-radius:100px!important;border:none!important;color:#fff!important;padding:0!important}.ant-btn-variation-14:hover{color:#fff!important;background-color:#445c67!important;border:none!important}.ant-btn-variation-15{background-color:#363636!important}.ant-btn-variation-15:hover{color:#fff!important;background-color:#bc0000!important;border:none!important}.ant-btn-variation-16{background-color:#363636!important}.ant-btn-variation-16:hover{background-color:#474747!important}.ant-btn-variation-14:focus,.ant-btn-variation-14.active{background-color:#253d47!important;color:#fff!important}.ant-btn-variation-16:focus,.ant-btn-variation-16.active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-15:focus,.ant-btn-variation-15.active{background-color:maroon!important;color:#fff!important}.ant-btn-variation-14:active{background-color:#00a2d1!important}.ant-btn-variation-10:active,.ant-btn-variation-15:active,.ant-btn-variation-16:active,.ant-btn-variation-13:active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-17:hover,.ant-btn-variation-17{height:32px!important;width:32px!important;font-size:17px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.71!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border:solid 2px #ffffff!important;background-color:#888!important;padding:0!important;border-radius:100px!important}.ant-btn-variation-17:hover{background-color:#666!important;color:#fff!important}.ant-btn-variation-17:focus,.ant-btn-variation-17.active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-17:active{background-color:#888!important}.ant-btn-variation-17[disabled]:hover,.ant-btn-variation-17[disabled]{border:solid 2px #666666!important;background-color:#888!important;color:#666!important}.ant-btn-variation-18:hover,.ant-btn-variation-19:hover,.ant-btn-variation-19,.ant-btn-variation-18{background-color:#262626!important;height:30px!important;width:30px!important;padding:0!important;border:none!important;border-radius:100px!important}.ant-btn-variation-19:hover,.ant-btn-variation-19{height:20px!important;width:20px!important;border-radius:4px!important}.ant-btn-variation-18:hover{background-color:#363636!important;color:#fff!important}.ant-btn-variation-18:focus,.ant-btn-variation-18.active{background-color:#474747!important;color:#fff!important}.ant-btn-variation-18:active,.ant-btn-variation-19:active{background-color:#262626!important}.ant-btn-variation-18[disabled]:hover,.ant-btn-variation-19[disabled]:hover,.ant-btn-variation-19[disabled],.ant-btn-variation-18[disabled]{border:none!important;background-color:#262626!important;color:#666!important}.ant-btn-variation-18[disabled]:hover svg,.ant-btn-variation-19[disabled]:hover svg,.ant-btn-variation-20[disabled]:hover svg,.ant-btn-variation-19[disabled] svg,.ant-btn-variation-20[disabled] svg,.ant-btn-variation-18[disabled] svg{opacity:.2!important}.ant-btn-variation-20,.ant-btn-variation-20:hover{width:25px!important;height:30px!important;background-color:#363636!important;border:none!important;border-radius:100px 0 0 100px!important;color:#fff!important}.ant-btn-variation-20:hover{background-color:#474747!important;color:#fff!important}.ant-btn-variation-20:focus,.ant-btn-variation-20.active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-20:active{background-color:#363636!important;border:none!important}.bps-button-editable-selected:hover,.bps-button-editable-selected{border:solid 1px #00a2d1!important}.bps-button-editable-input{max-width:calc(100% - 25px)!important;display:inline-block;background-color:transparent!important;position:relative;top:-2px;border:none!important;padding:0!important;font-size:12px!important;border-radius:unset!important;overflow:hidden;line-height:1.36!important;margin:unset}.bps-invisible{display:none}.bps-editable-btn-edit-icon-wrapper{position:absolute!important;top:1px;right:33px;transform:scale(.85)}.bps-editable-btn-edit-icon:after{content:\"\"}.bps-button-editable-selected .bps-editable-btn-edit-icon:after{content:url(/assets/bps-icons/sps_editname_icon_home_hoverrow.svg)}.bps-button-editable-selected .bps-editable-btn-edit-icon-wrapper:not(.bps-editable-btn-edit-icon-wrapper-disabled):hover .bps-editable-btn-edit-icon:after{content:url(/assets/bps-icons/sps_editname_icon_home_hover.svg)}.ant-btn.disabled,.ant-btn[disabled]{cursor:initial!important}\n"] }]
    }], () => [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i1.ContentObserver }, { type: i2.NzUpdateHostClassService }, { type: i0.NgZone }, { type: i3.NzConfigService }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_WAVE_GLOBAL_CONFIG]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ANIMATION_MODULE_TYPE]
            }] }], { isSelected: [{
            type: Input
        }], isSelectedChange: [{
            type: Output
        }], contentElement: [{
            type: ViewChild,
            args: ['contentElement', { static: true }]
        }], listOfIconElement: [{
            type: ContentChildren,
            args: [NzIconDirective, { read: ElementRef }]
        }], bpsBlock: [{
            type: Input
        }], bpsGhost: [{
            type: Input
        }], bpsSearch: [{
            type: Input
        }], bpsComputed: [{
            type: Input
        }], bpsLoading: [{
            type: Input
        }], bpsEditionEnabled: [{
            type: Input
        }], bpsType: [{
            type: Input
        }], bpsValue: [{
            type: Input
        }], bpsComputedTooltipType: [{
            type: Input
        }], bpsComputedTooltipPlacement: [{
            type: Input
        }], bpsComputedTooltipTitle: [{
            type: Input
        }], bpsEditTooltipType: [{
            type: Input
        }], bpsEditTooltipPlacement: [{
            type: Input
        }], bpsEditTooltipTitle: [{
            type: Input
        }], bpsValueChange: [{
            type: Output
        }], bpsShape: [{
            type: Input
        }], bpsSize: [{
            type: Input
        }], inputElement: [{
            type: ViewChild,
            args: [BpsInputDirective, { static: true, read: ElementRef }]
        }], handleClick: [{
            type: HostListener,
            args: ['window:mouseup', ['$event']]
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsButtonComponent, { className: "BpsButtonComponent", filePath: "lib\\components\\bps-button\\bps-button.component.ts", lineNumber: 62 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1idXR0b24vYnBzLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1idXR0b24vYnBzLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUVMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFFVixNQUFNLEVBQ04sS0FBSyxFQUtMLFFBQVEsRUFJUixTQUFTLEVBQ1QsaUJBQWlCLEVBRWpCLFlBQVksRUFDWixNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQW1CLFVBQVUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRXRGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQkFB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O2tCQUEzQixLQUFLO1lBQ0ksY0FBYztrQkFBdkIsTUFBTTtZQUNFLFFBQVE7a0JBQWhCLEtBQUs7WUFDb0QsT0FBTztrQkFBaEUsS0FBSztZQUM0RCxZQUFZO2tCQUE3RSxTQUFTO21CQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBc0VoRSxXQUFXO2tCQURWLFlBQVk7bUJBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFzQjFDLE9BQU87a0JBRE4sWUFBWTttQkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O2tGQXpIdEIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGVudE9ic2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL29ic2VydmVycyc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIFZpZXdSZWYsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQU5JTUFUSU9OX01PRFVMRV9UWVBFIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBOeldhdmVDb25maWcsIE5aX1dBVkVfR0xPQkFMX0NPTkZJRyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS93YXZlJztcclxuXHJcbmltcG9ydCB7IE56SWNvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEJwc0lucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi4vYnBzLWlucHV0L2Jwcy1pbnB1dC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICcuLi9icHMtdHJlZS90cmVlL2NvbmZpZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTnpTaXplTERTVHlwZSwgTnpTaXplTWFwIH0gZnJvbSAnLi4vY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xyXG5pbXBvcnQgeyBmaW5kRmlyc3ROb3RFbXB0eU5vZGUsIGZpbmRMYXN0Tm90RW1wdHlOb2RlIH0gZnJvbSAnLi4vY29yZS91dGlsL2RvbSc7XHJcblxyXG5leHBvcnQgdHlwZSBOekJ1dHRvblR5cGUgPSAncHJpbWFyeScgfCAnZGFzaGVkJyB8ICdkYW5nZXInIHwgJ2RlZmF1bHQnIHwgJ2xpbmsnIHwgJ3ZhcmlhdGlvbi0xJyB8ICd2YXJpYXRpb24tMicgfCAndmFyaWF0aW9uLTMnXHJcbiAgfCAndmFyaWF0aW9uLTQnIHwgJ3ZhcmlhdGlvbi01JyB8ICd2YXJpYXRpb24tNicgfCAndmFyaWF0aW9uLTcnIHwgJ3ZhcmlhdGlvbi04JyB8ICd2YXJpYXRpb24tOScgfCAndmFyaWF0aW9uLTEwJyB8ICd2YXJpYXRpb24tMTEnXHJcbiAgfCAndmFyaWF0aW9uLTEyJyAgfCAndmFyaWF0aW9uLTEzJyB8ICd2YXJpYXRpb24tMTQnIHwgJ3ZhcmlhdGlvbi0xNScgfCAndmFyaWF0aW9uLTE2JyB8ICd2YXJpYXRpb24tMTcnIHwgJ3ZhcmlhdGlvbi0xOCcgfCAndmFyaWF0aW9uLTE5JyB8ICd2YXJpYXRpb24tMjAnIHwgJ2VkaXRhYmxlJztcclxuZXhwb3J0IHR5cGUgTnpCdXR0b25TaGFwZSA9ICdjaXJjbGUnIHwgJ3JvdW5kJyB8IG51bGw7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnYnV0dG9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW2Jwcy1idXR0b25dJyxcclxuICBleHBvcnRBczogJ2Jwc0J1dHRvbicsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9icHMtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9icHMtYnV0dG9uLmNvbXBvbmVudC5jc3MnXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmJwcy1idXR0b24tZWRpdGFibGUtc2VsZWN0ZWRdJzogJ2lzU2VsZWN0ZWQnLFxyXG4gICAgJ1tjbGFzcy5icHMtYnV0dG9uLWVkaXRhYmxlLW9uZWRpdGlvbl0nOiAnc2hvd0VkaXRpb25Nb2RlJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc0J1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBpc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIGlzU2VsZWN0ZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgc2hvd0VkaXRpb25Nb2RlID0gZmFsc2U7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgY29udGVudEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihOekljb25EaXJlY3RpdmUsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBsaXN0T2ZJY29uRWxlbWVudDogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xyXG4gIC8qQEhvc3RCaW5kaW5nKCdhdHRyLm56LXdhdmUnKSBueldhdmUgPSBuZXcgTnpXYXZlRGlyZWN0aXZlKFxyXG4gICAgdGhpcy5uZ1pvbmUsXHJcbiAgICB0aGlzLmVsZW1lbnRSZWYsXHJcbiAgICB0aGlzLndhdmVDb25maWcsXHJcbiAgICB0aGlzLmFuaW1hdGlvblR5cGVcclxuICApOyovXHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNCbG9jazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNHaG9zdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzQ29tcHV0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNFZGl0aW9uRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgYnBzVHlwZTogTnpCdXR0b25UeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIGJwc1ZhbHVlOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBicHNDb21wdXRlZFRvb2x0aXBUeXBlOiBzdHJpbmcgPSAndmFyaWF0aW9uXzExJztcclxuICBASW5wdXQoKSBicHNDb21wdXRlZFRvb2x0aXBQbGFjZW1lbnQ6IHN0cmluZyA9ICd0b3AnO1xyXG4gIEBJbnB1dCgpIGJwc0NvbXB1dGVkVG9vbHRpcFRpdGxlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBicHNFZGl0VG9vbHRpcFR5cGU6IHN0cmluZyA9ICd2YXJpYXRpb25fMTEnO1xyXG4gIEBJbnB1dCgpIGJwc0VkaXRUb29sdGlwUGxhY2VtZW50OiBzdHJpbmcgPSAndG9wJztcclxuICBASW5wdXQoKSBicHNFZGl0VG9vbHRpcFRpdGxlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBAT3V0cHV0KCkgYnBzVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQElucHV0KCkgYnBzU2hhcGU6IE56QnV0dG9uU2hhcGUgPSBudWxsO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgJ2RlZmF1bHQnKSBicHNTaXplOiBOelNpemVMRFNUeXBlO1xyXG4gIEBWaWV3Q2hpbGQoQnBzSW5wdXREaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlLCByZWFkOiBFbGVtZW50UmVmIH0pIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgcmVhZG9ubHkgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgaXNJbkRyb3Bkb3duID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBpY29uRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBpY29uT25seSA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICAvKiogdGVtcCBzb2x1dGlvbiBzaW5jZSBubyBtZXRob2QgYWRkIGNsYXNzTWFwIHRvIGhvc3QgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNzI4OSAqL1xyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJlZml4Q2xzID0gJ2FudC1idG4nO1xyXG4gICAgY29uc3Qgc2l6ZU1hcDogTnpTaXplTWFwID0geyBsYXJnZTogJ2xnJywgc21hbGw6ICdzbScgfTtcclxuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCB7XHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9LSR7dGhpcy5icHNUeXBlfWBdOiB0aGlzLmJwc1R5cGUsXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9LSR7dGhpcy5icHNTaGFwZX1gXTogdGhpcy5icHNTaGFwZSxcclxuICAgICAgW2Ake3ByZWZpeENsc30tJHtzaXplTWFwW3RoaXMuYnBzU2l6ZV19YF06IHNpemVNYXBbdGhpcy5icHNTaXplXSxcclxuICAgICAgW2Ake3ByZWZpeENsc30tbG9hZGluZ2BdOiB0aGlzLmJwc0xvYWRpbmcsXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9LWljb24tb25seWBdOiB0aGlzLmljb25Pbmx5ICYmICF0aGlzLmJwc1NlYXJjaCAmJiAhdGhpcy5pc0luRHJvcGRvd24sXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9LWJhY2tncm91bmQtZ2hvc3RgXTogdGhpcy5icHNHaG9zdCxcclxuICAgICAgW2Ake3ByZWZpeENsc30tYmxvY2tgXTogdGhpcy5icHNCbG9jayxcclxuICAgICAgW2BhbnQtaW5wdXQtc2VhcmNoLWJ1dHRvbmBdOiB0aGlzLmJwc1NlYXJjaFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJY29uRGlzcGxheSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaWNvbkVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmljb25FbGVtZW50LCAnZGlzcGxheScsIHZhbHVlID8gJ25vbmUnIDogJ2lubGluZS1ibG9jaycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tDb250ZW50KCk6IHZvaWQge1xyXG4gICAgY29uc3QgaGFzSWNvbiA9IHRoaXMubGlzdE9mSWNvbkVsZW1lbnQgJiYgdGhpcy5saXN0T2ZJY29uRWxlbWVudC5sZW5ndGg7XHJcbiAgICBpZiAoaGFzSWNvbikge1xyXG4gICAgICB0aGlzLm1vdmVJY29uKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknKTtcclxuICAgIC8qKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMjUzMCAqKi9cclxuICAgIGlmIChpc0VtcHR5KHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgdGhpcy5pY29uT25seSA9ICEhaGFzSWNvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScpO1xyXG4gICAgICB0aGlzLmljb25Pbmx5ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLnVwZGF0ZUljb25EaXNwbGF5KHRoaXMuYnBzTG9hZGluZyk7XHJcbiAgICBpZiAoISh0aGlzLmNkciBhcyBWaWV3UmVmKS5kZXN0cm95ZWQpIHtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbW92ZUljb24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZJY29uRWxlbWVudCAmJiB0aGlzLmxpc3RPZkljb25FbGVtZW50Lmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBmaXJzdENoaWxkRWxlbWVudCA9IGZpbmRGaXJzdE5vdEVtcHR5Tm9kZSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICBjb25zdCBsYXN0Q2hpbGRFbGVtZW50ID0gZmluZExhc3ROb3RFbXB0eU5vZGUodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgaWYgKGZpcnN0Q2hpbGRFbGVtZW50ICYmIGZpcnN0Q2hpbGRFbGVtZW50ID09PSB0aGlzLmxpc3RPZkljb25FbGVtZW50LmZpcnN0Lm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLmVsLCBmaXJzdENoaWxkRWxlbWVudCwgdGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICB0aGlzLmljb25FbGVtZW50ID0gZmlyc3RDaGlsZEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIH0gZWxzZSBpZiAobGFzdENoaWxkRWxlbWVudCAmJiBsYXN0Q2hpbGRFbGVtZW50ID09PSB0aGlzLmxpc3RPZkljb25FbGVtZW50Lmxhc3QubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbCwgbGFzdENoaWxkRWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXZlbnREZWZhdWx0KCRldmVudCkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6bW91c2V1cCcsIFsnJGV2ZW50J10pXHJcbiAgaGFuZGxlQ2xpY2soZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYnBzVHlwZSAhPT0gJ2VkaXRhYmxlJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2hvd0VkaXRpb25Nb2RlICYmIHRoaXMuaW5wdXRFbGVtZW50ICYmIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgIT09IGUudGFyZ2V0KSB7XHJcbiAgICAgIHRoaXMuc2hvd0VkaXRpb25Nb2RlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuYnBzVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLmJwc1ZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVuZEVkaXRNb2RlKCRldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgdGhpcy5wcmV2ZW50RGVmYXVsdCgkZXZlbnQpO1xyXG4gICAgaWYgKCRldmVudC5rZXkgPT09ICdFbnRlcicgfHwgJGV2ZW50LmtleSA9PT0gJ2VudGVyJykge1xyXG4gICAgICB0aGlzLnNob3dFZGl0aW9uTW9kZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmJwc1ZhbHVlQ2hhbmdlLmVtaXQodGhpcy5icHNWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbGlja3MgPSAwO1xyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5icHNUeXBlICE9PSAnZWRpdGFibGUnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuY2xpY2tzKys7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuY2xpY2tzID09PSAxKSB7XHJcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gIXRoaXMuaXNTZWxlY3RlZDtcclxuICAgICAgICB0aGlzLmlzU2VsZWN0ZWRDaGFuZ2UuZW1pdCh0aGlzLmlzU2VsZWN0ZWQpO1xyXG4gICAgICB9IFxyXG4gICAgICB0aGlzLmNsaWNrcyA9IDA7XHJcbiAgICB9LCAzMDApO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRFZGl0aW9uTW9kZSgkZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAkZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAoIXRoaXMuYnBzRWRpdGlvbkVuYWJsZWQpIHJldHVybjtcclxuICAgIHRoaXMuc2hvd0VkaXRpb25Nb2RlID0gdHJ1ZTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0KCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgY29udGVudE9ic2VydmVyOiBDb250ZW50T2JzZXJ2ZXIsXHJcbiAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfV0FWRV9HTE9CQUxfQ09ORklHKSBwcml2YXRlIHdhdmVDb25maWc6IE56V2F2ZUNvbmZpZyxcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQU5JTUFUSU9OX01PRFVMRV9UWVBFKSBwcml2YXRlIGFuaW1hdGlvblR5cGU6IHN0cmluZ1xyXG4gICkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtYnRuJyk7XHJcbiAgICB0aGlzLm56Q29uZmlnU2VydmljZVxyXG4gICAgICAuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuY29udGVudEVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb250ZW50T2JzZXJ2ZXJcclxuICAgICAgLm9ic2VydmUodGhpcy5jb250ZW50RWxlbWVudClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgc3RhcnRXaXRoKHRydWUpLFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2lzc3Vlcy8zMDc5XHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLmNoZWNrQ29udGVudCgpKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIC8vdGhpcy5ueldhdmUubmdPbkluaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgICAvL3RoaXMubnpXYXZlLm5nT25EZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGNoYW5nZXMuYnBzQmxvY2sgfHxcclxuICAgICAgY2hhbmdlcy5icHNHaG9zdCB8fFxyXG4gICAgICBjaGFuZ2VzLmJwc1NlYXJjaCB8fFxyXG4gICAgICBjaGFuZ2VzLmJwc1R5cGUgfHxcclxuICAgICAgY2hhbmdlcy5icHNTaGFwZSB8fFxyXG4gICAgICBjaGFuZ2VzLmJwc1NpemUgfHxcclxuICAgICAgY2hhbmdlcy5icHNMb2FkaW5nXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMuYnBzTG9hZGluZykge1xyXG4gICAgICB0aGlzLnVwZGF0ZUljb25EaXNwbGF5KHRoaXMuYnBzTG9hZGluZyk7XHJcbiAgICB9XHJcbiAgICAvKmlmIChjaGFuZ2VzLmJwc1R5cGUgJiYgY2hhbmdlcy5icHNUeXBlLmN1cnJlbnRWYWx1ZSA9PT0gJ2xpbmsnKSB7XHJcbiAgICAgIHRoaXMubnpXYXZlLmRpc2FibGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubnpXYXZlLmVuYWJsZSgpO1xyXG4gICAgfSovXHJcbiAgfVxyXG59XHJcbiIsIjxpIG56LWljb24gbnpUeXBlPVwibG9hZGluZ1wiICpuZ0lmPVwiYnBzTG9hZGluZ1wiPjwvaT5cclxuPHNwYW4gKm5nSWY9XCJicHNUeXBlICE9PSAnZWRpdGFibGUnXCIgY2xhc3M9XCJicHMtY3VzdG9tLWNvbnRlbnRcIiAjY29udGVudEVsZW1lbnQ+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pjwvc3Bhbj5cclxuXHJcbjxzcGFuICpuZ0lmPVwiYnBzVHlwZSA9PT0gJ2VkaXRhYmxlJyAmJiAhc2hvd0VkaXRpb25Nb2RlXCIgY2xhc3M9XCJicHMtY3VzdG9tLWNvbnRlbnRcIiAjY29udGVudEVsZW1lbnQ+e3ticHNWYWx1ZX19PC9zcGFuPlxyXG48aW5wdXQgI2lucHV0RWxlbWVudCBicHMtaW5wdXRcclxuICAgICAgIGF1dG9mb2N1c1xyXG4gICAgICAgKGZvY3VzKT1cIiRldmVudC50YXJnZXQuc2VsZWN0KClcIlxyXG4gICAgICAgW2NsYXNzLmJwcy1pbnZpc2libGVdPVwiIXNob3dFZGl0aW9uTW9kZVwiXHJcbiAgICAgICAoY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAoZGJsY2xpY2spPVwicHJldmVudERlZmF1bHQoJGV2ZW50KVwiXHJcbiAgICAgICAoa2V5dXApPVwiZW5kRWRpdE1vZGUoJGV2ZW50KVwiXHJcbiAgICAgICBjbGFzcz1cImJwcy1idXR0b24tZWRpdGFibGUtaW5wdXRcIlxyXG4gICAgICAgWyhuZ01vZGVsKV09XCJicHNWYWx1ZVwiXHJcbi8+XHJcblxyXG48ZGl2IGNsYXNzPVwiYnBzLWVkaXRhYmxlLWJ0bi1lZGl0LWljb24td3JhcHBlclwiXHJcbiAgICAgIFtjbGFzcy5icHMtZWRpdGFibGUtYnRuLWVkaXQtaWNvbi13cmFwcGVyLWRpc2FibGVkXT1cIiFicHNFZGl0aW9uRW5hYmxlZFwiXHJcbiAgICAgIChjbGljayk9XCJzdGFydEVkaXRpb25Nb2RlKCRldmVudClcIlxyXG4gICAgICBicHMtdG9vbHRpcFxyXG4gICAgICBbYnBzVG9vbHRpcFR5cGVdPVwiYnBzRWRpdFRvb2x0aXBUeXBlXCJcclxuICAgICAgW2Jwc1Rvb2x0aXBUaXRsZV09XCJicHNFZGl0VG9vbHRpcFRpdGxlID8gYnBzRWRpdFRvb2x0aXBUaXRsZSA6ICdFZGl0J1wiXHJcbiAgICAgIFticHNUb29sdGlwUGxhY2VtZW50XT1cImJwc0VkaXRUb29sdGlwUGxhY2VtZW50XCJcclxuICAgICAgKm5nSWY9XCJicHNUeXBlID09PSAnZWRpdGFibGUnICYmICFzaG93RWRpdGlvbk1vZGVcIj5cclxuICA8ZGl2IGNsYXNzPVwiYnBzLWVkaXRhYmxlLWJ0bi1lZGl0LWljb25cIj48L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48ZGl2ICBjbGFzcz1cImJwcy1jb21wdXRlZC1pY29uXCJcclxuICAgICAgYnBzLXRvb2x0aXBcclxuICAgICAgW2Jwc1Rvb2x0aXBUeXBlXT1cImJwc0NvbXB1dGVkVG9vbHRpcFR5cGVcIlxyXG4gICAgICBbYnBzVG9vbHRpcFRpdGxlXT1cImJwc0NvbXB1dGVkVG9vbHRpcFRpdGxlID8gYnBzQ29tcHV0ZWRUb29sdGlwVGl0bGUgOiBicHNDb21wdXRlZCA/ICdDb21wdXRlZCcgOiAnTm90IENvbXB1dGVkJ1wiXHJcbiAgICAgIFticHNUb29sdGlwUGxhY2VtZW50XT1cImJwc0NvbXB1dGVkVG9vbHRpcFBsYWNlbWVudFwiXHJcbiAgICAgICpuZ0lmPVwiYnBzVHlwZSA9PT0gJ2VkaXRhYmxlJ1wiPlxyXG4gIDxpbWcgKm5nSWY9XCJicHNDb21wdXRlZFwiICAgICBcclxuICAgICAgIHNyYz1cIi9hc3NldHMvYnBzLWljb25zL3Nwc19ncmVlbl9kb3RfaWNvbl9jb21wdXRlZC5zdmdcIiAvPlxyXG4gIDxpbWcgKm5nSWY9XCIhYnBzQ29tcHV0ZWRcIlxyXG4gICAgICAgc3JjPVwiL2Fzc2V0cy9icHMtaWNvbnMvc3BzX2dyZXlfZG90X2ljb25fbm90Y29tcHV0ZWQuc3ZnXCIgLz5cclxuPC9kaXY+XHJcbiJdfQ==