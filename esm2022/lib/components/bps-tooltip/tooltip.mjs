import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Directive, EventEmitter, Host, Input, Optional, Output, ViewEncapsulation } from '@angular/core';
import { zoomBigMotion } from 'ng-zorro-antd/core/animation';
import { isPresetColor } from 'ng-zorro-antd/core/color';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { isTooltipEmpty, NzTooltipBaseComponent, NzTooltipBaseDirective } from './base';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/no-animation";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "@angular/common";
import * as i4 from "../core/addon/string_template_outlet";
import * as i5 from "@angular/cdk/overlay";
import * as i6 from "ng-zorro-antd/core/overlay";
function BpsToolTipComponent_ng_template_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.bpsTitle);
} }
function BpsToolTipComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    i0.ɵɵelement(3, "span", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵtemplate(5, BpsToolTipComponent_ng_template_0_ng_container_5_Template, 2, 1, "ng-container", 6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-tooltip-rtl", ctx_r1.dir === "rtl")("bps-tooltip-disabled", ctx_r1.bpsTooltipDisabled);
    i0.ɵɵproperty("ngClass", ctx_r1._classMap)("ngStyle", ctx_r1.bpsOverlayStyle)("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    i0.ɵɵadvance(3);
    i0.ɵɵclassMapInterpolate1("ant-tooltip-arrow-content bps-tooltip-arrow-", ctx_r1.bpsTooltipType, "");
    i0.ɵɵproperty("ngStyle", ctx_r1._contentStyleMap);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("ant-tooltip-inner bps-tooltip-inner-", ctx_r1.bpsTooltipType, "");
    i0.ɵɵproperty("ngStyle", ctx_r1._contentStyleMap);
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r1.bpsTitle)("nzStringTemplateOutletContext", ctx_r1.bpsTitleContext);
} }
export class BpsTooltipDirective extends NzTooltipBaseDirective {
    constructor(elementRef, hostView, resolver, renderer, noAnimation) {
        super(elementRef, hostView, resolver, renderer, noAnimation);
        this.titleContext = null;
        this.trigger = 'hover';
        this.placement = 'top';
        this.popoverType = 'variation_8a';
        this.tooltipType = 'variation_8a';
        this.tooltipDisabled = false;
        // eslint-disable-next-line @angular-eslint/no-output-rename
        this.visibleChange = new EventEmitter();
        this.componentRef = this.hostView.createComponent(BpsToolTipComponent);
    }
    getProxyPropertyMap() {
        return {
            ...super.getProxyPropertyMap(),
            bpsTooltipColor: ['bpsColor', () => this.bpsTooltipColor],
            bpsTooltipTitleContext: ['bpsTitleContext', () => this.titleContext]
        };
    }
    static { this.ɵfac = function BpsTooltipDirective_Factory(t) { return new (t || BpsTooltipDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective, 9)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BpsTooltipDirective, selectors: [["", "bps-tooltip", ""]], hostVars: 4, hostBindings: function BpsTooltipDirective_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-tooltip-open", ctx.visible)("bps-tooltip-disabled", ctx.tooltipDisabled);
        } }, inputs: { title: [i0.ɵɵInputFlags.None, "bpsTooltipTitle", "title"], titleContext: [i0.ɵɵInputFlags.None, "bpsTooltipTitleContext", "titleContext"], directiveTitle: [i0.ɵɵInputFlags.None, "bps-tooltip", "directiveTitle"], trigger: [i0.ɵɵInputFlags.None, "bpsTooltipTrigger", "trigger"], placement: [i0.ɵɵInputFlags.None, "bpsTooltipPlacement", "placement"], origin: [i0.ɵɵInputFlags.None, "bpsTooltipOrigin", "origin"], visible: [i0.ɵɵInputFlags.None, "bpsTooltipVisible", "visible"], mouseEnterDelay: [i0.ɵɵInputFlags.None, "bpsTooltipMouseEnterDelay", "mouseEnterDelay"], mouseLeaveDelay: [i0.ɵɵInputFlags.None, "bpsTooltipMouseLeaveDelay", "mouseLeaveDelay"], overlayClassName: [i0.ɵɵInputFlags.None, "bpsTooltipOverlayClassName", "overlayClassName"], overlayStyle: [i0.ɵɵInputFlags.None, "bpsTooltipOverlayStyle", "overlayStyle"], arrowPointAtCenter: [i0.ɵɵInputFlags.None, "bpsTooltipArrowPointAtCenter", "arrowPointAtCenter"], bpsTooltipColor: "bpsTooltipColor", popoverType: [i0.ɵɵInputFlags.None, "bpsPopoverType", "popoverType"], tooltipType: [i0.ɵɵInputFlags.None, "bpsTooltipType", "tooltipType"], tooltipDisabled: [i0.ɵɵInputFlags.None, "bpsTooltipDisabled", "tooltipDisabled"] }, outputs: { visibleChange: "bpsTooltipVisibleChange" }, exportAs: ["bpsTooltip"], features: [i0.ɵɵInheritDefinitionFeature] }); }
}
__decorate([
    InputBoolean()
], BpsTooltipDirective.prototype, "arrowPointAtCenter", void 0);
__decorate([
    InputBoolean()
], BpsTooltipDirective.prototype, "tooltipDisabled", void 0);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsTooltipDirective, [{
        type: Directive,
        args: [{
                selector: '[bps-tooltip]',
                exportAs: 'bpsTooltip',
                host: {
                    '[class.ant-tooltip-open]': 'visible',
                    '[class.bps-tooltip-disabled]': 'tooltipDisabled'
                }
            }]
    }], () => [{ type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i0.ComponentFactoryResolver }, { type: i0.Renderer2 }, { type: i1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }], { title: [{
            type: Input,
            args: ['bpsTooltipTitle']
        }], titleContext: [{
            type: Input,
            args: ['bpsTooltipTitleContext']
        }], directiveTitle: [{
            type: Input,
            args: ['bps-tooltip']
        }], trigger: [{
            type: Input,
            args: ['bpsTooltipTrigger']
        }], placement: [{
            type: Input,
            args: ['bpsTooltipPlacement']
        }], origin: [{
            type: Input,
            args: ['bpsTooltipOrigin']
        }], visible: [{
            type: Input,
            args: ['bpsTooltipVisible']
        }], mouseEnterDelay: [{
            type: Input,
            args: ['bpsTooltipMouseEnterDelay']
        }], mouseLeaveDelay: [{
            type: Input,
            args: ['bpsTooltipMouseLeaveDelay']
        }], overlayClassName: [{
            type: Input,
            args: ['bpsTooltipOverlayClassName']
        }], overlayStyle: [{
            type: Input,
            args: ['bpsTooltipOverlayStyle']
        }], arrowPointAtCenter: [{
            type: Input,
            args: ['bpsTooltipArrowPointAtCenter']
        }], bpsTooltipColor: [{
            type: Input
        }], popoverType: [{
            type: Input,
            args: ['bpsPopoverType']
        }], tooltipType: [{
            type: Input,
            args: ['bpsTooltipType']
        }], tooltipDisabled: [{
            type: Input,
            args: ['bpsTooltipDisabled']
        }], visibleChange: [{
            type: Output,
            args: ['bpsTooltipVisibleChange']
        }] }); })();
export class BpsToolTipComponent extends NzTooltipBaseComponent {
    constructor(cdr, directionality, noAnimation) {
        super(cdr, directionality, noAnimation);
        this.bpsTitle = null;
        this.bpsTooltipType = 'variation_8a';
        this.bpsPopoverType = 'variation_8a';
        this.bpsTooltipDisabled = false;
        this.bpsTitleContext = null;
        this._contentStyleMap = {};
    }
    isEmpty() {
        return isTooltipEmpty(this.bpsTitle);
    }
    updateStyles() {
        const isColorPreset = this.bpsColor && isPresetColor(this.bpsColor);
        this._classMap = {
            [this.bpsOverlayClassName]: true,
            [`${this._prefix}-placement-${this.preferredPlacement}`]: true,
            [`${this._prefix}-${this.bpsColor}`]: isColorPreset
        };
        this._contentStyleMap = {
            backgroundColor: !!this.bpsColor && !isColorPreset ? this.bpsColor : null
        };
    }
    static { this.ɵfac = function BpsToolTipComponent_Factory(t) { return new (t || BpsToolTipComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.Directionality, 8), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective, 9)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsToolTipComponent, selectors: [["bps-tooltip"]], exportAs: ["bpsTooltipComponent"], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [["overlay", "cdkConnectedOverlay"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "overlayOutsideClick", "detach", "positionChange", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPush", "nzArrowPointAtCenter"], [1, "ant-tooltip", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-tooltip-content"], [1, "ant-tooltip-arrow"], [3, "ngStyle"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"]], template: function BpsToolTipComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵtemplate(0, BpsToolTipComponent_ng_template_0_Template, 6, 19, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵlistener("overlayOutsideClick", function BpsToolTipComponent_Template_ng_template_overlayOutsideClick_0_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onClickOutside($event)); })("detach", function BpsToolTipComponent_Template_ng_template_detach_0_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.hide()); })("positionChange", function BpsToolTipComponent_Template_ng_template_positionChange_0_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onPositionChange($event)); });
        } if (rf & 2) {
            i0.ɵɵproperty("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx._visible)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayPush", true)("nzArrowPointAtCenter", ctx.bpsArrowPointAtCenter);
        } }, dependencies: [i3.NgClass, i3.NgStyle, i4.NzStringTemplateOutletDirective, i5.CdkConnectedOverlay, i1.NzNoAnimationDirective, i6.NzConnectedOverlayDirective], styles: [".ant-tooltip-inner{min-width:70px!important;height:22px!important;min-height:22px!important;font-size:11px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;letter-spacing:normal!important;text-align:left!important;color:#fff!important;padding:2px 10px!important;text-align:center!important;border-radius:6px!important}.ant-tooltip-arrow-content:before{background:transparent}.ant-tooltip-arrow{width:17px;height:17px}.bps-tooltip-inner-variation_8a{background-color:#00a2d1!important;box-shadow:0 3px 12px #000000e6!important}.bps-tooltip-arrow-variation_8a:before{background-color:#00a2d1!important}.bps-tooltip-inner-variation_8b{background-color:#7bc053!important;box-shadow:0 3px 12px #000000e6!important}.bps-tooltip-arrow-variation_8b:before{background-color:#7bc053!important}.bps-tooltip-inner-variation_9a{background-color:#00a2d1!important;box-shadow:none!important}.bps-tooltip-arrow-variation_9a:before{background-color:#00a2d1!important;box-shadow:none!important}.bps-tooltip-inner-variation_9b{background-color:#7bc053!important;box-shadow:none!important}.bps-tooltip-arrow-variation_9b:before{background-color:#7bc053!important;box-shadow:none!important}.bps-tooltip-inner-variation_10,.bps-tooltip-inner-variation_11{min-width:60px!important;box-shadow:0 3px 12px #000000e6!important;border:solid 1px #00a2d1!important;background-color:#363636}.bps-tooltip-inner-variation_11{box-shadow:none!important}.bps-tooltip-arrow-variation_10:before,.bps-tooltip-arrow-variation_11:before{content:unset!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_8a,.bps-tooltip-disabled .bps-tooltip-inner-variation_8b{background-color:#363636!important;color:#666!important}.bps-tooltip-disabled .bps-tooltip-arrow-variation_8a:before,.bps-tooltip-disabled .bps-tooltip-arrow-variation_8b:before{background-color:#363636!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_9a,.bps-tooltip-disabled .bps-tooltip-inner-variation_9b{background-color:#363636!important;color:#666!important}.bps-tooltip-disabled .bps-tooltip-arrow-variation_9a:before,.bps-tooltip-disabled .bps-tooltip-arrow-variation_9b:before{background-color:#363636!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_10,.bps-tooltip-disabled .bps-tooltip-inner-variation_11{background-color:#363636!important;color:#666!important;border:solid 1px #666666!important}\n"], encapsulation: 2, data: { animation: [zoomBigMotion] }, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsToolTipComponent, [{
        type: Component,
        args: [{ selector: 'bps-tooltip', exportAs: 'bpsTooltipComponent', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, animations: [zoomBigMotion], template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="_visible"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayPush]="true"
      [nzArrowPointAtCenter]="bpsArrowPointAtCenter"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        class="ant-tooltip"
        [class.ant-tooltip-rtl]="dir === 'rtl'"
        [class.bps-tooltip-disabled]="bpsTooltipDisabled"
        [ngClass]="_classMap"
        [ngStyle]="bpsOverlayStyle"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@zoomBigMotion]="'active'"
      >
        <div class="ant-tooltip-content">
          <div class="ant-tooltip-arrow">
            <span class="ant-tooltip-arrow-content bps-tooltip-arrow-{{bpsTooltipType}}" [ngStyle]="_contentStyleMap"></span>
          </div>
          <div class="ant-tooltip-inner bps-tooltip-inner-{{bpsTooltipType}}" [ngStyle]="_contentStyleMap">
            <ng-container *nzStringTemplateOutlet="bpsTitle; context: bpsTitleContext">{{ bpsTitle }}</ng-container>
          </div>
        </div>
      </div>
    </ng-template>
  `, preserveWhitespaces: false, styles: [".ant-tooltip-inner{min-width:70px!important;height:22px!important;min-height:22px!important;font-size:11px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;letter-spacing:normal!important;text-align:left!important;color:#fff!important;padding:2px 10px!important;text-align:center!important;border-radius:6px!important}.ant-tooltip-arrow-content:before{background:transparent}.ant-tooltip-arrow{width:17px;height:17px}.bps-tooltip-inner-variation_8a{background-color:#00a2d1!important;box-shadow:0 3px 12px #000000e6!important}.bps-tooltip-arrow-variation_8a:before{background-color:#00a2d1!important}.bps-tooltip-inner-variation_8b{background-color:#7bc053!important;box-shadow:0 3px 12px #000000e6!important}.bps-tooltip-arrow-variation_8b:before{background-color:#7bc053!important}.bps-tooltip-inner-variation_9a{background-color:#00a2d1!important;box-shadow:none!important}.bps-tooltip-arrow-variation_9a:before{background-color:#00a2d1!important;box-shadow:none!important}.bps-tooltip-inner-variation_9b{background-color:#7bc053!important;box-shadow:none!important}.bps-tooltip-arrow-variation_9b:before{background-color:#7bc053!important;box-shadow:none!important}.bps-tooltip-inner-variation_10,.bps-tooltip-inner-variation_11{min-width:60px!important;box-shadow:0 3px 12px #000000e6!important;border:solid 1px #00a2d1!important;background-color:#363636}.bps-tooltip-inner-variation_11{box-shadow:none!important}.bps-tooltip-arrow-variation_10:before,.bps-tooltip-arrow-variation_11:before{content:unset!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_8a,.bps-tooltip-disabled .bps-tooltip-inner-variation_8b{background-color:#363636!important;color:#666!important}.bps-tooltip-disabled .bps-tooltip-arrow-variation_8a:before,.bps-tooltip-disabled .bps-tooltip-arrow-variation_8b:before{background-color:#363636!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_9a,.bps-tooltip-disabled .bps-tooltip-inner-variation_9b{background-color:#363636!important;color:#666!important}.bps-tooltip-disabled .bps-tooltip-arrow-variation_9a:before,.bps-tooltip-disabled .bps-tooltip-arrow-variation_9b:before{background-color:#363636!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_10,.bps-tooltip-disabled .bps-tooltip-inner-variation_11{background-color:#363636!important;color:#666!important;border:solid 1px #666666!important}\n"] }]
    }], () => [{ type: i0.ChangeDetectorRef }, { type: i2.Directionality, decorators: [{
                type: Optional
            }] }, { type: i1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsToolTipComponent, { className: "BpsToolTipComponent", filePath: "lib\\components\\bps-tooltip\\tooltip.ts", lineNumber: 131 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXRvb2x0aXAvdG9vbHRpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBR1QsU0FBUyxFQUVULFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBR04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFpQixNQUFNLDBCQUEwQixDQUFDO0FBR3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUd2RCxPQUFPLEVBQ0wsY0FBYyxFQUNkLHNCQUFzQixFQUN0QixzQkFBc0IsRUFHdkIsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7OztJQTBGSiw2QkFBMkU7SUFBQSxZQUFjOzs7O0lBQWQsY0FBYztJQUFkLHFDQUFjOzs7SUFKM0YsQUFERixBQVZGLDhCQVNDLGFBQ2tDLGFBQ0E7SUFDN0IsMEJBQWlIO0lBQ25ILGlCQUFNO0lBQ04sOEJBQWlHO0lBQy9GLG9HQUEyRTtJQUdqRixBQURFLEFBREUsaUJBQU0sRUFDRixFQUNGOzs7SUFmSixBQURBLHVEQUF1QyxtREFDVTtJQUtqRCxBQURBLEFBREEsQUFEQSxBQURBLDBDQUFxQixtQ0FDTSx3RkFDZ0IsdUZBQ0MsNEJBQ2pCO0lBSWpCLGVBQXNFO0lBQXRFLG9HQUFzRTtJQUFDLGlEQUE0QjtJQUV0RyxjQUE4RDtJQUE5RCw0RkFBOEQ7SUFBQyxpREFBNEI7SUFDL0UsY0FBa0M7SUFBQSxBQUFsQyx3REFBa0MseURBQXdCOztBQWhGckYsTUFBTSxPQUFPLG1CQUFvQixTQUFRLHNCQUFz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Ozs7O0dBa0NULHVCQUNvQixLQUFLOztzQkFldkIsUUFBUTs7c0JBQ1IsSUFBSTs7c0JBQUksUUFBUTs7a0ZBZFIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBDb21wb25lbnRSZWYsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyB6b29tQmlnTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XHJcbmltcG9ydCB7IGlzUHJlc2V0Q29sb3IsIE56UHJlc2V0Q29sb3IgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29sb3InO1xyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTmdTdHlsZUludGVyZmFjZSwgTnpUU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IEJwc1BvcG92ZXJUeXBlIH0gZnJvbSAnLi4vYnBzLXBvcG92ZXIvYnBzLXBvcG92ZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICBpc1Rvb2x0aXBFbXB0eSxcclxuICBOelRvb2x0aXBCYXNlQ29tcG9uZW50LFxyXG4gIE56VG9vbHRpcEJhc2VEaXJlY3RpdmUsXHJcbiAgTnpUb29sdGlwVHJpZ2dlcixcclxuICBQcm9wZXJ0eU1hcHBpbmdcclxufSBmcm9tICcuL2Jhc2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYnBzLXRvb2x0aXBdJyxcclxuICBleHBvcnRBczogJ2Jwc1Rvb2x0aXAnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXRvb2x0aXAtb3Blbl0nOiAndmlzaWJsZScsXHJcbiAgICAnW2NsYXNzLmJwcy10b29sdGlwLWRpc2FibGVkXSc6ICd0b29sdGlwRGlzYWJsZWQnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzVG9vbHRpcERpcmVjdGl2ZSBleHRlbmRzIE56VG9vbHRpcEJhc2VEaXJlY3RpdmUge1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNUb29sdGlwQXJyb3dQb2ludEF0Q2VudGVyOiBCb29sZWFuSW5wdXQ7XHJcblxyXG4gIEBJbnB1dCgnYnBzVG9vbHRpcFRpdGxlJykgb3ZlcnJpZGUgdGl0bGU/OiBOelRTVHlwZSB8IG51bGw7XHJcbiAgQElucHV0KCdicHNUb29sdGlwVGl0bGVDb250ZXh0JykgdGl0bGVDb250ZXh0PzogT2JqZWN0IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCdicHMtdG9vbHRpcCcpIG92ZXJyaWRlIGRpcmVjdGl2ZVRpdGxlPzogTnpUU1R5cGUgfCBudWxsO1xyXG4gIEBJbnB1dCgnYnBzVG9vbHRpcFRyaWdnZXInKSBvdmVycmlkZSB0cmlnZ2VyPzogTnpUb29sdGlwVHJpZ2dlciA9ICdob3Zlcic7XHJcbiAgQElucHV0KCdicHNUb29sdGlwUGxhY2VtZW50Jykgb3ZlcnJpZGUgcGxhY2VtZW50Pzogc3RyaW5nIHwgc3RyaW5nW10gPSAndG9wJztcclxuICBASW5wdXQoJ2Jwc1Rvb2x0aXBPcmlnaW4nKSBvdmVycmlkZSBvcmlnaW4/OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcclxuICBASW5wdXQoJ2Jwc1Rvb2x0aXBWaXNpYmxlJykgb3ZlcnJpZGUgdmlzaWJsZT86IGJvb2xlYW47XHJcbiAgQElucHV0KCdicHNUb29sdGlwTW91c2VFbnRlckRlbGF5Jykgb3ZlcnJpZGUgbW91c2VFbnRlckRlbGF5PzogbnVtYmVyO1xyXG4gIEBJbnB1dCgnYnBzVG9vbHRpcE1vdXNlTGVhdmVEZWxheScpIG92ZXJyaWRlIG1vdXNlTGVhdmVEZWxheT86IG51bWJlcjtcclxuICBASW5wdXQoJ2Jwc1Rvb2x0aXBPdmVybGF5Q2xhc3NOYW1lJykgb3ZlcnJpZGUgb3ZlcmxheUNsYXNzTmFtZT86IHN0cmluZztcclxuICBASW5wdXQoJ2Jwc1Rvb2x0aXBPdmVybGF5U3R5bGUnKSBvdmVycmlkZSBvdmVybGF5U3R5bGU/OiBOZ1N0eWxlSW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgnYnBzVG9vbHRpcEFycm93UG9pbnRBdENlbnRlcicpIEBJbnB1dEJvb2xlYW4oKSBvdmVycmlkZSBhcnJvd1BvaW50QXRDZW50ZXI/OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGJwc1Rvb2x0aXBDb2xvcj86IHN0cmluZztcclxuICBASW5wdXQoJ2Jwc1BvcG92ZXJUeXBlJykgcG9wb3ZlclR5cGU6IEJwc1BvcG92ZXJUeXBlID0gJ3ZhcmlhdGlvbl84YSc7XHJcbiAgQElucHV0KCdicHNUb29sdGlwVHlwZScpIHRvb2x0aXBUeXBlOiBCcHNQb3BvdmVyVHlwZSA9ICd2YXJpYXRpb25fOGEnO1xyXG4gIEBJbnB1dCgnYnBzVG9vbHRpcERpc2FibGVkJykgQElucHV0Qm9vbGVhbigpIHRvb2x0aXBEaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLW91dHB1dC1yZW5hbWVcclxuICBAT3V0cHV0KCdicHNUb29sdGlwVmlzaWJsZUNoYW5nZScpIG92ZXJyaWRlIHJlYWRvbmx5IHZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIG92ZXJyaWRlIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPEJwc1Rvb2xUaXBDb21wb25lbnQ+ID0gdGhpcy5ob3N0Vmlldy5jcmVhdGVDb21wb25lbnQoQnBzVG9vbFRpcENvbXBvbmVudCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIGhvc3RWaWV3OiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgaG9zdFZpZXcsIHJlc29sdmVyLCByZW5kZXJlciwgbm9BbmltYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldFByb3h5UHJvcGVydHlNYXAoKTogUHJvcGVydHlNYXBwaW5nIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnN1cGVyLmdldFByb3h5UHJvcGVydHlNYXAoKSxcclxuICAgICAgYnBzVG9vbHRpcENvbG9yOiBbJ2Jwc0NvbG9yJywgKCkgPT4gdGhpcy5icHNUb29sdGlwQ29sb3JdLFxyXG4gICAgICBicHNUb29sdGlwVGl0bGVDb250ZXh0OiBbJ2Jwc1RpdGxlQ29udGV4dCcsICgpID0+IHRoaXMudGl0bGVDb250ZXh0XVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnBzLXRvb2x0aXAnLFxyXG4gIGV4cG9ydEFzOiAnYnBzVG9vbHRpcENvbXBvbmVudCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzdHlsZVVybHM6IFsnLi9icHMtdG9vbHRpcC5jb21wb25lbnQuY3NzJ10sXHJcbiAgYW5pbWF0aW9uczogW3pvb21CaWdNb3Rpb25dLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctdGVtcGxhdGVcclxuICAgICAgI292ZXJsYXk9XCJjZGtDb25uZWN0ZWRPdmVybGF5XCJcclxuICAgICAgY2RrQ29ubmVjdGVkT3ZlcmxheVxyXG4gICAgICBuekNvbm5lY3RlZE92ZXJsYXlcclxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwib3JpZ2luXCJcclxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cIl92aXNpYmxlXCJcclxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnNdPVwiX3Bvc2l0aW9uc1wiXHJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5UHVzaF09XCJ0cnVlXCJcclxuICAgICAgW256QXJyb3dQb2ludEF0Q2VudGVyXT1cImJwc0Fycm93UG9pbnRBdENlbnRlclwiXHJcbiAgICAgIChvdmVybGF5T3V0c2lkZUNsaWNrKT1cIm9uQ2xpY2tPdXRzaWRlKCRldmVudClcIlxyXG4gICAgICAoZGV0YWNoKT1cImhpZGUoKVwiXHJcbiAgICAgIChwb3NpdGlvbkNoYW5nZSk9XCJvblBvc2l0aW9uQ2hhbmdlKCRldmVudClcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJhbnQtdG9vbHRpcFwiXHJcbiAgICAgICAgW2NsYXNzLmFudC10b29sdGlwLXJ0bF09XCJkaXIgPT09ICdydGwnXCJcclxuICAgICAgICBbY2xhc3MuYnBzLXRvb2x0aXAtZGlzYWJsZWRdPVwiYnBzVG9vbHRpcERpc2FibGVkXCJcclxuICAgICAgICBbbmdDbGFzc109XCJfY2xhc3NNYXBcIlxyXG4gICAgICAgIFtuZ1N0eWxlXT1cImJwc092ZXJsYXlTdHlsZVwiXHJcbiAgICAgICAgW0AuZGlzYWJsZWRdPVwiISFub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICAgICAgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gICAgICAgIFtAem9vbUJpZ01vdGlvbl09XCInYWN0aXZlJ1wiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXRvb2x0aXAtY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC10b29sdGlwLWFycm93XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXRvb2x0aXAtYXJyb3ctY29udGVudCBicHMtdG9vbHRpcC1hcnJvdy17e2Jwc1Rvb2x0aXBUeXBlfX1cIiBbbmdTdHlsZV09XCJfY29udGVudFN0eWxlTWFwXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXRvb2x0aXAtaW5uZXIgYnBzLXRvb2x0aXAtaW5uZXIte3ticHNUb29sdGlwVHlwZX19XCIgW25nU3R5bGVdPVwiX2NvbnRlbnRTdHlsZU1hcFwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiYnBzVGl0bGU7IGNvbnRleHQ6IGJwc1RpdGxlQ29udGV4dFwiPnt7IGJwc1RpdGxlIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gIGAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2VcclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc1Rvb2xUaXBDb21wb25lbnQgZXh0ZW5kcyBOelRvb2x0aXBCYXNlQ29tcG9uZW50IHtcclxuICBvdmVycmlkZSBicHNUaXRsZTogTnpUU1R5cGUgfCBudWxsID0gbnVsbDtcclxuICBvdmVycmlkZSBicHNUb29sdGlwVHlwZTogc3RyaW5nID0gJ3ZhcmlhdGlvbl84YSc7XHJcbiAgb3ZlcnJpZGUgYnBzUG9wb3ZlclR5cGU6IHN0cmluZyA9ICd2YXJpYXRpb25fOGEnO1xyXG4gIG92ZXJyaWRlIGJwc1Rvb2x0aXBEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGJwc1RpdGxlQ29udGV4dDogT2JqZWN0IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIGJwc0NvbG9yPzogc3RyaW5nIHwgTnpQcmVzZXRDb2xvcjtcclxuXHJcbiAgX2NvbnRlbnRTdHlsZU1hcDogTmdTdHlsZUludGVyZmFjZSA9IHt9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIoY2RyLCBkaXJlY3Rpb25hbGl0eSwgbm9BbmltYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGlzRW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNUb29sdGlwRW1wdHkodGhpcy5icHNUaXRsZSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdXBkYXRlU3R5bGVzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaXNDb2xvclByZXNldCA9IHRoaXMuYnBzQ29sb3IgJiYgaXNQcmVzZXRDb2xvcih0aGlzLmJwc0NvbG9yKTtcclxuXHJcbiAgICB0aGlzLl9jbGFzc01hcCA9IHtcclxuICAgICAgW3RoaXMuYnBzT3ZlcmxheUNsYXNzTmFtZV06IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLl9wcmVmaXh9LXBsYWNlbWVudC0ke3RoaXMucHJlZmVycmVkUGxhY2VtZW50fWBdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5fcHJlZml4fS0ke3RoaXMuYnBzQ29sb3J9YF06IGlzQ29sb3JQcmVzZXRcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fY29udGVudFN0eWxlTWFwID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICEhdGhpcy5icHNDb2xvciAmJiAhaXNDb2xvclByZXNldCA/IHRoaXMuYnBzQ29sb3IgOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=