import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Directive, EventEmitter, Host, Input, Optional, Output, ViewEncapsulation } from '@angular/core';
import { zoomBigMotion } from 'ng-zorro-antd/core/animation';
import { WithConfig } from 'ng-zorro-antd/core/config';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { BpsToolTipComponent } from '../bps-tooltip/tooltip';
import { isTooltipEmpty, NzTooltipBaseDirective } from './../bps-tooltip/base';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/no-animation";
import * as i2 from "ng-zorro-antd/core/config";
import * as i3 from "@angular/cdk/bidi";
import * as i4 from "@angular/common";
import * as i5 from "../core/addon/string_template_outlet";
import * as i6 from "@angular/cdk/overlay";
import * as i7 from "ng-zorro-antd/core/overlay";
function BpsPopoverComponent_ng_template_0_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.bpsTitle);
} }
function BpsPopoverComponent_ng_template_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, BpsPopoverComponent_ng_template_0_div_6_ng_container_1_Template, 2, 1, "ng-container", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.bpsTitle);
} }
function BpsPopoverComponent_ng_template_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.bpsContent);
} }
function BpsPopoverComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div");
    i0.ɵɵelement(3, "span");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 4)(5, "div");
    i0.ɵɵtemplate(6, BpsPopoverComponent_ng_template_0_div_6_Template, 2, 1, "div", 5);
    i0.ɵɵelementStart(7, "div");
    i0.ɵɵtemplate(8, BpsPopoverComponent_ng_template_0_ng_container_8_Template, 2, 1, "ng-container", 6);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-popover-rtl", ctx_r1.dir === "rtl");
    i0.ɵɵproperty("ngClass", ctx_r1._classMap)("ngStyle", ctx_r1.bpsOverlayStyle)("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("ant-popover-arrow bps-popover-arrow-", ctx_r1.bpsPopoverType, "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("ant-popover-arrow-content bps-popover-inner-", ctx_r1.bpsPopoverType, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.bpsTitle);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("ant-popover-inner-content bps-popover-inner-content-", ctx_r1.bpsPopoverType, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.bpsContent);
} }
const NZ_CONFIG_MODULE_NAME = 'popover';
export class BpsPopoverDirective extends NzTooltipBaseDirective {
    getProxyPropertyMap() {
        return {
            bpsPopoverBackdrop: ['bpsBackdrop', () => this.bpsPopoverBackdrop],
            ...super.getProxyPropertyMap()
        };
    }
    constructor(elementRef, hostView, resolver, renderer, noAnimation, nzConfigService) {
        super(elementRef, hostView, resolver, renderer, noAnimation, nzConfigService);
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.trigger = 'hover';
        this.placement = 'top';
        this.popoverType = 'variation_1';
        this.bpsPopoverBackdrop = false;
        // eslint-disable-next-line @angular-eslint/no-output-rename
        this.visibleChange = new EventEmitter();
        this.componentRef = this.hostView.createComponent(BpsPopoverComponent);
    }
    static { this.ɵfac = function BpsPopoverDirective_Factory(t) { return new (t || BpsPopoverDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective, 9), i0.ɵɵdirectiveInject(i2.NzConfigService)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BpsPopoverDirective, selectors: [["", "bps-popover", ""]], hostVars: 2, hostBindings: function BpsPopoverDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-popover-open", ctx.visible);
        } }, inputs: { arrowPointAtCenter: [i0.ɵɵInputFlags.None, "bpsPopoverArrowPointAtCenter", "arrowPointAtCenter"], title: [i0.ɵɵInputFlags.None, "bpsPopoverTitle", "title"], content: [i0.ɵɵInputFlags.None, "bpsPopoverContent", "content"], directiveTitle: [i0.ɵɵInputFlags.None, "bps-popover", "directiveTitle"], trigger: [i0.ɵɵInputFlags.None, "bpsPopoverTrigger", "trigger"], placement: [i0.ɵɵInputFlags.None, "bpsPopoverPlacement", "placement"], origin: [i0.ɵɵInputFlags.None, "bpsPopoverOrigin", "origin"], visible: [i0.ɵɵInputFlags.None, "bpsPopoverVisible", "visible"], mouseEnterDelay: [i0.ɵɵInputFlags.None, "bpsPopoverMouseEnterDelay", "mouseEnterDelay"], mouseLeaveDelay: [i0.ɵɵInputFlags.None, "bpsPopoverMouseLeaveDelay", "mouseLeaveDelay"], overlayClassName: [i0.ɵɵInputFlags.None, "bpsPopoverOverlayClassName", "overlayClassName"], overlayStyle: [i0.ɵɵInputFlags.None, "bpsPopoverOverlayStyle", "overlayStyle"], popoverType: [i0.ɵɵInputFlags.None, "bpsPopoverType", "popoverType"], bpsPopoverBackdrop: "bpsPopoverBackdrop" }, outputs: { visibleChange: "bpsPopoverVisibleChange" }, exportAs: ["bpsPopover"], features: [i0.ɵɵInheritDefinitionFeature] }); }
}
__decorate([
    InputBoolean()
], BpsPopoverDirective.prototype, "arrowPointAtCenter", void 0);
__decorate([
    WithConfig()
], BpsPopoverDirective.prototype, "bpsPopoverBackdrop", void 0);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsPopoverDirective, [{
        type: Directive,
        args: [{
                selector: '[bps-popover]',
                exportAs: 'bpsPopover',
                host: {
                    '[class.ant-popover-open]': 'visible'
                }
            }]
    }], () => [{ type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i0.ComponentFactoryResolver }, { type: i0.Renderer2 }, { type: i1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }, { type: i2.NzConfigService }], { arrowPointAtCenter: [{
            type: Input,
            args: ['bpsPopoverArrowPointAtCenter']
        }], title: [{
            type: Input,
            args: ['bpsPopoverTitle']
        }], content: [{
            type: Input,
            args: ['bpsPopoverContent']
        }], directiveTitle: [{
            type: Input,
            args: ['bps-popover']
        }], trigger: [{
            type: Input,
            args: ['bpsPopoverTrigger']
        }], placement: [{
            type: Input,
            args: ['bpsPopoverPlacement']
        }], origin: [{
            type: Input,
            args: ['bpsPopoverOrigin']
        }], visible: [{
            type: Input,
            args: ['bpsPopoverVisible']
        }], mouseEnterDelay: [{
            type: Input,
            args: ['bpsPopoverMouseEnterDelay']
        }], mouseLeaveDelay: [{
            type: Input,
            args: ['bpsPopoverMouseLeaveDelay']
        }], overlayClassName: [{
            type: Input,
            args: ['bpsPopoverOverlayClassName']
        }], overlayStyle: [{
            type: Input,
            args: ['bpsPopoverOverlayStyle']
        }], popoverType: [{
            type: Input,
            args: ['bpsPopoverType']
        }], bpsPopoverBackdrop: [{
            type: Input
        }], visibleChange: [{
            type: Output,
            args: ['bpsPopoverVisibleChange']
        }] }); })();
export class BpsPopoverComponent extends BpsToolTipComponent {
    constructor(cdr, directionality, noAnimation) {
        super(cdr, directionality, noAnimation);
        this._prefix = 'ant-popover';
    }
    get hasBackdrop() {
        return this.bpsTrigger === 'click' ? this.bpsBackdrop : false;
    }
    isEmpty() {
        return isTooltipEmpty(this.bpsTitle) && isTooltipEmpty(this.bpsContent);
    }
    static { this.ɵfac = function BpsPopoverComponent_Factory(t) { return new (t || BpsPopoverComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i3.Directionality, 8), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective, 9)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsPopoverComponent, selectors: [["bps-popover"]], exportAs: ["nzPopoverComponent"], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 6, consts: [["overlay", "cdkConnectedOverlay"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "overlayOutsideClick", "detach", "positionChange", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPush", "nzArrowPointAtCenter"], [1, "ant-popover", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-popover-content"], ["role", "tooltip", 1, "ant-popover-inner"], ["class", "ant-popover-title", 4, "ngIf"], [4, "nzStringTemplateOutlet"], [1, "ant-popover-title"]], template: function BpsPopoverComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵtemplate(0, BpsPopoverComponent_ng_template_0_Template, 9, 18, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵlistener("overlayOutsideClick", function BpsPopoverComponent_Template_ng_template_overlayOutsideClick_0_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onClickOutside($event)); })("detach", function BpsPopoverComponent_Template_ng_template_detach_0_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.hide()); })("positionChange", function BpsPopoverComponent_Template_ng_template_positionChange_0_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onPositionChange($event)); });
        } if (rf & 2) {
            i0.ɵɵproperty("cdkConnectedOverlayHasBackdrop", ctx.hasBackdrop)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayOpen", ctx._visible)("cdkConnectedOverlayPush", true)("nzArrowPointAtCenter", ctx.bpsArrowPointAtCenter);
        } }, dependencies: [i4.NgClass, i4.NgIf, i4.NgStyle, i5.NzStringTemplateOutletDirective, i6.CdkConnectedOverlay, i1.NzNoAnimationDirective, i7.NzConnectedOverlayDirective], styles: [".ant-popover-placement-right .ant-popover-arrow-content:before{border-left:1px solid #00a2d1!important;border-bottom:1px solid #00a2d1!important;background-color:#262626!important;border-right-color:#262626!important;border-top-color:#262626!important}.ant-popover-placement-left .ant-popover-arrow-content:before{border-right:1px solid #00a2d1!important;border-top:1px solid #00a2d1!important;background-color:#262626!important;border-left-color:#262626!important;border-bottom-color:#262626!important}.ant-popover-placement-top .ant-popover-arrow-content:before{border-right:1px solid #00a2d1!important;border-bottom:1px solid #00a2d1!important;background-color:#262626!important;border-top-color:#262626!important;border-left-color:#262626!important}.ant-popover-placement-bottom .ant-popover-arrow-content:before{border-left:1px solid #00a2d1!important;border-top:1px solid #00a2d1!important;background-color:#262626!important;border-bottom-color:#262626!important;border-right-color:#262626!important}.ant-popover-arrow-content:before{top:-12.31px;left:-12.31px}.ant-popover-arrow-content{background-color:#00a2d1}.ant-popover-arrow-content:before{border-style:unset!important}.ant-popover-inner{box-shadow:0 3px 12px #000000e6!important;border:solid 1px #00a2d1!important;background-color:#262626!important;border-radius:8px!important}.ant-popover-inner-content{font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:left!important;color:#fff;padding:15px!important}.bps-popover-content-title{font-size:13px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.31;letter-spacing:normal;text-align:left;color:#00a2d1;margin-bottom:10px}.bps-popover-content-subtitle{font-size:11px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.36;letter-spacing:normal;text-align:left;color:#fff;margin-bottom:15px}.bps-popover-inner-variation_7a{border:solid 1px #7bc053!important}.ant-popover-placement-right .ant-popover-arrow-content.bps-popover-arrow-variation_7a:before{border-left:1px solid #7bc053!important;border-bottom:1px solid #7bc053!important;background-color:#262626!important;border-right-color:#262626!important;border-top-color:#262626!important}.ant-popover-placement-left .ant-popover-arrow-content.bps-popover-arrow-variation_7a:before{border-right:1px solid #7bc053!important;border-top:1px solid #7bc053!important;background-color:#262626!important;border-left-color:#262626!important;border-bottom-color:#262626!important}.ant-popover-placement-top .ant-popover-arrow-content.bps-popover-arrow-variation_7a:before{border-right:1px solid #7bc053!important;border-bottom:1px solid #7bc053!important;background-color:#262626!important;border-top-color:#262626!important;border-left-color:#262626!important}.ant-popover-placement-bottom .ant-popover-arrow-content.bps-popover-arrow-variation_7a:before{border-left:1px solid #7bc053!important;border-top:1px solid #7bc053!important;background-color:#262626!important;border-bottom-color:#262626!important;border-right-color:#262626!important}.bps-popover-custom-content-icon{width:45px;position:relative;float:left;top:50%;transform:translateY(-50%);padding-left:8px}.bps-popover-custom-content{width:370px;position:relative;float:right;top:50%;transform:translateY(-50%);padding-right:10px}\n"], encapsulation: 2, data: { animation: [zoomBigMotion] }, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsPopoverComponent, [{
        type: Component,
        args: [{ selector: 'bps-popover', exportAs: 'nzPopoverComponent', animations: [zoomBigMotion], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, preserveWhitespaces: false, template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="hasBackdrop"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayOpen]="_visible"
      [cdkConnectedOverlayPush]="true"
      [nzArrowPointAtCenter]="bpsArrowPointAtCenter"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        class="ant-popover"
        [class.ant-popover-rtl]="dir === 'rtl'"
        [ngClass]="_classMap"
        [ngStyle]="bpsOverlayStyle"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@zoomBigMotion]="'active'"
      >
        <div class="ant-popover-content">
          <div class="ant-popover-arrow bps-popover-arrow-{{bpsPopoverType}}">
            <span class="ant-popover-arrow-content bps-popover-inner-{{bpsPopoverType}}"></span>
          </div>
          <div class="ant-popover-inner" role="tooltip">
            <div>
              <div class="ant-popover-title" *ngIf="bpsTitle">
                <ng-container *nzStringTemplateOutlet="bpsTitle">{{ bpsTitle }}</ng-container>
              </div> 
              <div class="ant-popover-inner-content bps-popover-inner-content-{{bpsPopoverType}}">
                <ng-container *nzStringTemplateOutlet="bpsContent">{{ bpsContent }}</ng-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `, styles: [".ant-popover-placement-right .ant-popover-arrow-content:before{border-left:1px solid #00a2d1!important;border-bottom:1px solid #00a2d1!important;background-color:#262626!important;border-right-color:#262626!important;border-top-color:#262626!important}.ant-popover-placement-left .ant-popover-arrow-content:before{border-right:1px solid #00a2d1!important;border-top:1px solid #00a2d1!important;background-color:#262626!important;border-left-color:#262626!important;border-bottom-color:#262626!important}.ant-popover-placement-top .ant-popover-arrow-content:before{border-right:1px solid #00a2d1!important;border-bottom:1px solid #00a2d1!important;background-color:#262626!important;border-top-color:#262626!important;border-left-color:#262626!important}.ant-popover-placement-bottom .ant-popover-arrow-content:before{border-left:1px solid #00a2d1!important;border-top:1px solid #00a2d1!important;background-color:#262626!important;border-bottom-color:#262626!important;border-right-color:#262626!important}.ant-popover-arrow-content:before{top:-12.31px;left:-12.31px}.ant-popover-arrow-content{background-color:#00a2d1}.ant-popover-arrow-content:before{border-style:unset!important}.ant-popover-inner{box-shadow:0 3px 12px #000000e6!important;border:solid 1px #00a2d1!important;background-color:#262626!important;border-radius:8px!important}.ant-popover-inner-content{font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:left!important;color:#fff;padding:15px!important}.bps-popover-content-title{font-size:13px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.31;letter-spacing:normal;text-align:left;color:#00a2d1;margin-bottom:10px}.bps-popover-content-subtitle{font-size:11px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.36;letter-spacing:normal;text-align:left;color:#fff;margin-bottom:15px}.bps-popover-inner-variation_7a{border:solid 1px #7bc053!important}.ant-popover-placement-right .ant-popover-arrow-content.bps-popover-arrow-variation_7a:before{border-left:1px solid #7bc053!important;border-bottom:1px solid #7bc053!important;background-color:#262626!important;border-right-color:#262626!important;border-top-color:#262626!important}.ant-popover-placement-left .ant-popover-arrow-content.bps-popover-arrow-variation_7a:before{border-right:1px solid #7bc053!important;border-top:1px solid #7bc053!important;background-color:#262626!important;border-left-color:#262626!important;border-bottom-color:#262626!important}.ant-popover-placement-top .ant-popover-arrow-content.bps-popover-arrow-variation_7a:before{border-right:1px solid #7bc053!important;border-bottom:1px solid #7bc053!important;background-color:#262626!important;border-top-color:#262626!important;border-left-color:#262626!important}.ant-popover-placement-bottom .ant-popover-arrow-content.bps-popover-arrow-variation_7a:before{border-left:1px solid #7bc053!important;border-top:1px solid #7bc053!important;background-color:#262626!important;border-bottom-color:#262626!important;border-right-color:#262626!important}.bps-popover-custom-content-icon{width:45px;position:relative;float:left;top:50%;transform:translateY(-50%);padding-left:8px}.bps-popover-custom-content{width:370px;position:relative;float:right;top:50%;transform:translateY(-50%);padding-right:10px}\n"] }]
    }], () => [{ type: i0.ChangeDetectorRef }, { type: i3.Directionality, decorators: [{
                type: Optional
            }] }, { type: i1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsPopoverComponent, { className: "BpsPopoverComponent", filePath: "lib\\components\\bps-popover\\bps-popover.ts", lineNumber: 141 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXBvcG92ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1wb3BvdmVyL2Jwcy1wb3BvdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFHVCxTQUFTLEVBRVQsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdELE9BQU8sRUFBZ0MsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHckYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdELE9BQU8sRUFDTCxjQUFjLEVBQ2Qsc0JBQXNCLEVBR3ZCLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7SUFrR2YsNkJBQWlEO0lBQUEsWUFBYzs7OztJQUFkLGNBQWM7SUFBZCxxQ0FBYzs7O0lBRGpFLDhCQUFnRDtJQUM5QywwR0FBaUQ7SUFDbkQsaUJBQU07OztJQURXLGNBQWdDO0lBQWhDLHdEQUFnQzs7O0lBRy9DLDZCQUFtRDtJQUFBLFlBQWdCOzs7O0lBQWhCLGNBQWdCO0lBQWhCLHVDQUFnQjs7O0lBVHpFLEFBREYsQUFURiw4QkFRQyxhQUNrQyxVQUNxQztJQUNsRSx1QkFBb0Y7SUFDdEYsaUJBQU07SUFFSixBQURGLDhCQUE4QyxVQUN2QztJQUNILGtGQUFnRDtJQUdoRCwyQkFBb0Y7SUFDbEYsb0dBQW1EO0lBSzdELEFBREUsQUFERSxBQURFLEFBREUsaUJBQU0sRUFDRixFQUNGLEVBQ0YsRUFDRjs7O0lBdEJKLHVE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LFVBQVUsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNoRSxDQUFDO0lBRWtCLE9BQU87UUFDeEIsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUUsQ0FBQztvRkFqQlUsbUJBQW1CO29FQUFuQixtQkFBbUI7O1lBMUM1QixtSEFhQztZQURDLEFBREEsQUFEQSw2S0FBdUIsMEJBQXNCLEtBQUMsZ0lBQ3BDLFVBQU0sS0FBQyxzSkFDQyw0QkFBd0IsS0FBQzs7WUFIM0MsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLGdFQUE4Qyx5Q0FDVixnREFDTyx5Q0FDUCxpQ0FDSixtREFDYzs0akhBZnRDLENBQUMsYUFBYSxDQUFDOztpRkFnRGhCLG1CQUFtQjtjQW5EL0IsU0FBUzsyQkFDRSxhQUFhLFlBQ2Isb0JBQW9CLGNBQ2xCLENBQUMsYUFBYSxDQUFDLG1CQUNWLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksdUJBQ2hCLEtBQUssWUFFaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUNUOztzQkFPRSxRQUFROztzQkFDUixJQUFJOztzQkFBSSxRQUFROztrRkFOUixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIENvbXBvbmVudFJlZixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IHpvb21CaWdNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgTnpDb25maWdLZXksIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTmdTdHlsZUludGVyZmFjZSwgTnpUU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IEJwc1Rvb2xUaXBDb21wb25lbnQgfSBmcm9tICcuLi9icHMtdG9vbHRpcC90b29sdGlwJztcclxuaW1wb3J0IHtcclxuICBpc1Rvb2x0aXBFbXB0eSxcclxuICBOelRvb2x0aXBCYXNlRGlyZWN0aXZlLFxyXG4gIE56VG9vbHRpcFRyaWdnZXIsXHJcbiAgUHJvcGVydHlNYXBwaW5nXHJcbn0gZnJvbSAnLi8uLi9icHMtdG9vbHRpcC9iYXNlJztcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19NT0RVTEVfTkFNRTogTnpDb25maWdLZXkgPSAncG9wb3Zlcic7XHJcblxyXG5leHBvcnQgdHlwZSBCcHNQb3BvdmVyVHlwZSA9ICd2YXJpYXRpb25fMScgfCAndmFyaWF0aW9uXzInIHwgJ3ZhcmlhdGlvbl8zJyB8ICd2YXJpYXRpb25fNCcgfCAndmFyaWF0aW9uXzUnIHwgJ3ZhcmlhdGlvbl82JyB8ICd2YXJpYXRpb25fN2EnIHxcclxuICAndmFyaWF0aW9uXzdiJyB8ICd2YXJpYXRpb25fOGEnIHwgJ3ZhcmlhdGlvbl84YicgfCAndmFyaWF0aW9uXzlhJyB8ICd2YXJpYXRpb25fOWInIHwgJ3ZhcmlhdGlvbl8xMCcgfCAndmFyaWF0aW9uXzExJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2Jwcy1wb3BvdmVyXScsXHJcbiAgZXhwb3J0QXM6ICdicHNQb3BvdmVyJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1wb3BvdmVyLW9wZW5dJzogJ3Zpc2libGUnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzUG9wb3ZlckRpcmVjdGl2ZSBleHRlbmRzIE56VG9vbHRpcEJhc2VEaXJlY3RpdmUge1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNQb3BvdmVyQXJyb3dQb2ludEF0Q2VudGVyOiBCb29sZWFuSW5wdXQ7XHJcblxyXG4gIHJlYWRvbmx5IF9uek1vZHVsZU5hbWU6IE56Q29uZmlnS2V5ID0gTlpfQ09ORklHX01PRFVMRV9OQU1FO1xyXG5cclxuICBASW5wdXQoJ2Jwc1BvcG92ZXJBcnJvd1BvaW50QXRDZW50ZXInKSBASW5wdXRCb29sZWFuKCkgb3ZlcnJpZGUgYXJyb3dQb2ludEF0Q2VudGVyPzogYm9vbGVhbjtcclxuICBASW5wdXQoJ2Jwc1BvcG92ZXJUaXRsZScpIG92ZXJyaWRlIHRpdGxlPzogTnpUU1R5cGU7XHJcbiAgQElucHV0KCdicHNQb3BvdmVyQ29udGVudCcpIG92ZXJyaWRlIGNvbnRlbnQ/OiBOelRTVHlwZTtcclxuICBASW5wdXQoJ2Jwcy1wb3BvdmVyJykgb3ZlcnJpZGUgZGlyZWN0aXZlVGl0bGU/OiBOelRTVHlwZSB8IG51bGw7XHJcbiAgQElucHV0KCdicHNQb3BvdmVyVHJpZ2dlcicpIG92ZXJyaWRlIHRyaWdnZXI/OiBOelRvb2x0aXBUcmlnZ2VyID0gJ2hvdmVyJztcclxuICBASW5wdXQoJ2Jwc1BvcG92ZXJQbGFjZW1lbnQnKSBvdmVycmlkZSBwbGFjZW1lbnQ/OiBzdHJpbmcgfCBzdHJpbmdbXSA9ICd0b3AnO1xyXG4gIEBJbnB1dCgnYnBzUG9wb3Zlck9yaWdpbicpIG92ZXJyaWRlIG9yaWdpbj86IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xyXG4gIEBJbnB1dCgnYnBzUG9wb3ZlclZpc2libGUnKSBvdmVycmlkZSB2aXNpYmxlPzogYm9vbGVhbjtcclxuICBASW5wdXQoJ2Jwc1BvcG92ZXJNb3VzZUVudGVyRGVsYXknKSBvdmVycmlkZSBtb3VzZUVudGVyRGVsYXk/OiBudW1iZXI7XHJcbiAgQElucHV0KCdicHNQb3BvdmVyTW91c2VMZWF2ZURlbGF5Jykgb3ZlcnJpZGUgbW91c2VMZWF2ZURlbGF5PzogbnVtYmVyO1xyXG4gIEBJbnB1dCgnYnBzUG9wb3Zlck92ZXJsYXlDbGFzc05hbWUnKSBvdmVycmlkZSBvdmVybGF5Q2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIEBJbnB1dCgnYnBzUG9wb3Zlck92ZXJsYXlTdHlsZScpIG92ZXJyaWRlIG92ZXJsYXlTdHlsZT86IE5nU3R5bGVJbnRlcmZhY2U7XHJcbiAgQElucHV0KCdicHNQb3BvdmVyVHlwZScpIHBvcG92ZXJUeXBlOiBCcHNQb3BvdmVyVHlwZSA9ICd2YXJpYXRpb25fMSc7XHJcblxyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgYnBzUG9wb3ZlckJhY2tkcm9wPzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLW91dHB1dC1yZW5hbWVcclxuICBAT3V0cHV0KCdicHNQb3BvdmVyVmlzaWJsZUNoYW5nZScpIG92ZXJyaWRlIHJlYWRvbmx5IHZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIG92ZXJyaWRlIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPEJwc1BvcG92ZXJDb21wb25lbnQ+ID0gdGhpcy5ob3N0Vmlldy5jcmVhdGVDb21wb25lbnQoQnBzUG9wb3ZlckNvbXBvbmVudCk7XHJcblxyXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXRQcm94eVByb3BlcnR5TWFwKCk6IFByb3BlcnR5TWFwcGluZyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBicHNQb3BvdmVyQmFja2Ryb3A6IFsnYnBzQmFja2Ryb3AnLCAoKSA9PiB0aGlzLmJwc1BvcG92ZXJCYWNrZHJvcF0sXHJcbiAgICAgIC4uLnN1cGVyLmdldFByb3h5UHJvcGVydHlNYXAoKVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIGhvc3RWaWV3OiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSxcclxuICAgIG56Q29uZmlnU2VydmljZT86IE56Q29uZmlnU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgaG9zdFZpZXcsIHJlc29sdmVyLCByZW5kZXJlciwgbm9BbmltYXRpb24sIG56Q29uZmlnU2VydmljZSk7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jwcy1wb3BvdmVyJyxcclxuICBleHBvcnRBczogJ256UG9wb3ZlckNvbXBvbmVudCcsXHJcbiAgYW5pbWF0aW9uczogW3pvb21CaWdNb3Rpb25dLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgc3R5bGVVcmxzOiBbJ2Jwcy1wb3BvdmVyLmNvbXBvbmVudC5jc3MnXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICNvdmVybGF5PVwiY2RrQ29ubmVjdGVkT3ZlcmxheVwiXHJcbiAgICAgIGNka0Nvbm5lY3RlZE92ZXJsYXlcclxuICAgICAgbnpDb25uZWN0ZWRPdmVybGF5XHJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5SGFzQmFja2Ryb3BdPVwiaGFzQmFja2Ryb3BcIlxyXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJvcmlnaW5cIlxyXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJfcG9zaXRpb25zXCJcclxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cIl92aXNpYmxlXCJcclxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlQdXNoXT1cInRydWVcIlxyXG4gICAgICBbbnpBcnJvd1BvaW50QXRDZW50ZXJdPVwiYnBzQXJyb3dQb2ludEF0Q2VudGVyXCJcclxuICAgICAgKG92ZXJsYXlPdXRzaWRlQ2xpY2spPVwib25DbGlja091dHNpZGUoJGV2ZW50KVwiXHJcbiAgICAgIChkZXRhY2gpPVwiaGlkZSgpXCJcclxuICAgICAgKHBvc2l0aW9uQ2hhbmdlKT1cIm9uUG9zaXRpb25DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cImFudC1wb3BvdmVyXCJcclxuICAgICAgICBbY2xhc3MuYW50LXBvcG92ZXItcnRsXT1cImRpciA9PT0gJ3J0bCdcIlxyXG4gICAgICAgIFtuZ0NsYXNzXT1cIl9jbGFzc01hcFwiXHJcbiAgICAgICAgW25nU3R5bGVdPVwiYnBzT3ZlcmxheVN0eWxlXCJcclxuICAgICAgICBbQC5kaXNhYmxlZF09XCIhIW5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgICAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICAgICAgW0B6b29tQmlnTW90aW9uXT1cIidhY3RpdmUnXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcG9wb3Zlci1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBvcG92ZXItYXJyb3cgYnBzLXBvcG92ZXItYXJyb3cte3ticHNQb3BvdmVyVHlwZX19XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXBvcG92ZXItYXJyb3ctY29udGVudCBicHMtcG9wb3Zlci1pbm5lci17e2Jwc1BvcG92ZXJUeXBlfX1cIj48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcG9wb3Zlci1pbm5lclwiIHJvbGU9XCJ0b29sdGlwXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1wb3BvdmVyLXRpdGxlXCIgKm5nSWY9XCJicHNUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImJwc1RpdGxlXCI+e3sgYnBzVGl0bGUgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1wb3BvdmVyLWlubmVyLWNvbnRlbnQgYnBzLXBvcG92ZXItaW5uZXItY29udGVudC17e2Jwc1BvcG92ZXJUeXBlfX1cIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJicHNDb250ZW50XCI+e3sgYnBzQ29udGVudCB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzUG9wb3ZlckNvbXBvbmVudCBleHRlbmRzIEJwc1Rvb2xUaXBDb21wb25lbnQge1xyXG4gIG92ZXJyaWRlIF9wcmVmaXggPSAnYW50LXBvcG92ZXInO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIoY2RyLCBkaXJlY3Rpb25hbGl0eSwgbm9BbmltYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhhc0JhY2tkcm9wKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYnBzVHJpZ2dlciA9PT0gJ2NsaWNrJyA/IHRoaXMuYnBzQmFja2Ryb3AgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBvdmVycmlkZSBpc0VtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGlzVG9vbHRpcEVtcHR5KHRoaXMuYnBzVGl0bGUpICYmIGlzVG9vbHRpcEVtcHR5KHRoaXMuYnBzQ29udGVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==