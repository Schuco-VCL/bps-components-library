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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsTooltipDirective, deps: [{ token: i0.ElementRef }, { token: i0.ViewContainerRef }, { token: i0.ComponentFactoryResolver }, { token: i0.Renderer2 }, { token: i1.NzNoAnimationDirective, host: true, optional: true }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: BpsTooltipDirective, selector: "[bps-tooltip]", inputs: { title: ["bpsTooltipTitle", "title"], titleContext: ["bpsTooltipTitleContext", "titleContext"], directiveTitle: ["bps-tooltip", "directiveTitle"], trigger: ["bpsTooltipTrigger", "trigger"], placement: ["bpsTooltipPlacement", "placement"], origin: ["bpsTooltipOrigin", "origin"], visible: ["bpsTooltipVisible", "visible"], mouseEnterDelay: ["bpsTooltipMouseEnterDelay", "mouseEnterDelay"], mouseLeaveDelay: ["bpsTooltipMouseLeaveDelay", "mouseLeaveDelay"], overlayClassName: ["bpsTooltipOverlayClassName", "overlayClassName"], overlayStyle: ["bpsTooltipOverlayStyle", "overlayStyle"], arrowPointAtCenter: ["bpsTooltipArrowPointAtCenter", "arrowPointAtCenter"], bpsTooltipColor: "bpsTooltipColor", popoverType: ["bpsPopoverType", "popoverType"], tooltipType: ["bpsTooltipType", "tooltipType"], tooltipDisabled: ["bpsTooltipDisabled", "tooltipDisabled"] }, outputs: { visibleChange: "bpsTooltipVisibleChange" }, host: { properties: { "class.ant-tooltip-open": "visible", "class.bps-tooltip-disabled": "tooltipDisabled" } }, exportAs: ["bpsTooltip"], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    InputBoolean()
], BpsTooltipDirective.prototype, "arrowPointAtCenter", void 0);
__decorate([
    InputBoolean()
], BpsTooltipDirective.prototype, "tooltipDisabled", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsTooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bps-tooltip]',
                    exportAs: 'bpsTooltip',
                    host: {
                        '[class.ant-tooltip-open]': 'visible',
                        '[class.bps-tooltip-disabled]': 'tooltipDisabled'
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i0.ComponentFactoryResolver }, { type: i0.Renderer2 }, { type: i1.NzNoAnimationDirective, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }]; }, propDecorators: { title: [{
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
            }] } });
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsToolTipComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i2.Directionality, optional: true }, { token: i1.NzNoAnimationDirective, host: true, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsToolTipComponent, selector: "bps-tooltip", exportAs: ["bpsTooltipComponent"], usesInheritance: true, ngImport: i0, template: `
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
  `, isInline: true, styles: [".ant-tooltip-inner{min-width:70px!important;height:22px!important;min-height:22px!important;font-size:11px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;letter-spacing:normal!important;text-align:left!important;color:#fff!important;padding:2px 10px!important;text-align:center!important;border-radius:6px!important}.ant-tooltip-arrow-content:before{background:transparent}.ant-tooltip-arrow{width:17px;height:17px}.bps-tooltip-inner-variation_8a{background-color:#00a2d1!important;box-shadow:0 3px 12px #000000e6!important}.bps-tooltip-arrow-variation_8a:before{background-color:#00a2d1!important}.bps-tooltip-inner-variation_8b{background-color:#7bc053!important;box-shadow:0 3px 12px #000000e6!important}.bps-tooltip-arrow-variation_8b:before{background-color:#7bc053!important}.bps-tooltip-inner-variation_9a{background-color:#00a2d1!important;box-shadow:none!important}.bps-tooltip-arrow-variation_9a:before{background-color:#00a2d1!important;box-shadow:none!important}.bps-tooltip-inner-variation_9b{background-color:#7bc053!important;box-shadow:none!important}.bps-tooltip-arrow-variation_9b:before{background-color:#7bc053!important;box-shadow:none!important}.bps-tooltip-inner-variation_10,.bps-tooltip-inner-variation_11{min-width:60px!important;box-shadow:0 3px 12px #000000e6!important;border:solid 1px #00a2d1!important;background-color:#363636}.bps-tooltip-inner-variation_11{box-shadow:none!important}.bps-tooltip-arrow-variation_10:before,.bps-tooltip-arrow-variation_11:before{content:unset!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_8a,.bps-tooltip-disabled .bps-tooltip-inner-variation_8b{background-color:#363636!important;color:#666!important}.bps-tooltip-disabled .bps-tooltip-arrow-variation_8a:before,.bps-tooltip-disabled .bps-tooltip-arrow-variation_8b:before{background-color:#363636!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_9a,.bps-tooltip-disabled .bps-tooltip-inner-variation_9b{background-color:#363636!important;color:#666!important}.bps-tooltip-disabled .bps-tooltip-arrow-variation_9a:before,.bps-tooltip-disabled .bps-tooltip-arrow-variation_9b:before{background-color:#363636!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_10,.bps-tooltip-disabled .bps-tooltip-inner-variation_11{background-color:#363636!important;color:#666!important;border:solid 1px #666666!important}\n"], dependencies: [{ kind: "directive", type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i3.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i4.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: i5.CdkConnectedOverlay, selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]", inputs: ["cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPositionStrategy", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayWidth", "cdkConnectedOverlayHeight", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayMinHeight", "cdkConnectedOverlayBackdropClass", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayViewportMargin", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOpen", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayLockPosition", "cdkConnectedOverlayFlexibleDimensions", "cdkConnectedOverlayGrowAfterOpen", "cdkConnectedOverlayPush"], outputs: ["backdropClick", "positionChange", "attach", "detach", "overlayKeydown", "overlayOutsideClick"], exportAs: ["cdkConnectedOverlay"] }, { kind: "directive", type: i1.NzNoAnimationDirective, selector: "[nzNoAnimation]", inputs: ["nzNoAnimation"], exportAs: ["nzNoAnimation"] }, { kind: "directive", type: i6.NzConnectedOverlayDirective, selector: "[cdkConnectedOverlay][nzConnectedOverlay]", inputs: ["nzArrowPointAtCenter"], exportAs: ["nzConnectedOverlay"] }], animations: [zoomBigMotion], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsToolTipComponent, decorators: [{
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
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i2.Directionality, decorators: [{
                    type: Optional
                }] }, { type: i1.NzNoAnimationDirective, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXRvb2x0aXAvdG9vbHRpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBR1QsU0FBUyxFQUVULFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBR04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFpQixNQUFNLDBCQUEwQixDQUFDO0FBR3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUd2RCxPQUFPLEVBQ0wsY0FBYyxFQUNkLHNCQUFzQixFQUN0QixzQkFBc0IsRUFHdkIsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7O0FBVWhCLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxzQkFBc0I7SUF5QjdELFlBQ0UsVUFBc0IsRUFDdEIsUUFBMEIsRUFDMUIsUUFBa0MsRUFDbEMsUUFBbUIsRUFDQyxXQUFvQztRQUV4RCxLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBNUI5QixpQkFBWSxHQUFtQixJQUFJLENBQUM7UUFFaEMsWUFBTyxHQUFzQixPQUFPLENBQUM7UUFDbkMsY0FBUyxHQUF1QixLQUFLLENBQUM7UUFTcEQsZ0JBQVcsR0FBbUIsY0FBYyxDQUFDO1FBQzdDLGdCQUFXLEdBQW1CLGNBQWMsQ0FBQztRQUN6QixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUVyRSw0REFBNEQ7UUFDUCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFeEYsaUJB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UUFBUSxFQUFFLENBQUMsRUFBRSxhQUFhO1NBQ3BELENBQUM7UUFFRixJQUFJLENBQUMsZ0JBQWdCLEdBQUc7WUFDdEIsZUFBZSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJO1NBQzFFLENBQUM7SUFDSixDQUFDOytHQW5DVSxtQkFBbUI7bUdBQW5CLG1CQUFtQiw2R0FyQ3BCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0NULHNrSUFuQ1csQ0FBQyxhQUFhLENBQUM7OzRGQXNDaEIsbUJBQW1CO2tCQTVDL0IsU0FBUzsrQkFDRSxhQUFhLFlBQ2IscUJBQXFCLG1CQUNkLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksY0FFekIsQ0FBQyxhQUFhLENBQUMsWUFDakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQ1QsdUJBQ29CLEtBQUs7OzBCQWV2QixRQUFROzswQkFDUixJQUFJOzswQkFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBDb21wb25lbnRSZWYsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyB6b29tQmlnTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XHJcbmltcG9ydCB7IGlzUHJlc2V0Q29sb3IsIE56UHJlc2V0Q29sb3IgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29sb3InO1xyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTmdTdHlsZUludGVyZmFjZSwgTnpUU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IEJwc1BvcG92ZXJUeXBlIH0gZnJvbSAnLi4vYnBzLXBvcG92ZXIvYnBzLXBvcG92ZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICBpc1Rvb2x0aXBFbXB0eSxcclxuICBOelRvb2x0aXBCYXNlQ29tcG9uZW50LFxyXG4gIE56VG9vbHRpcEJhc2VEaXJlY3RpdmUsXHJcbiAgTnpUb29sdGlwVHJpZ2dlcixcclxuICBQcm9wZXJ0eU1hcHBpbmdcclxufSBmcm9tICcuL2Jhc2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYnBzLXRvb2x0aXBdJyxcclxuICBleHBvcnRBczogJ2Jwc1Rvb2x0aXAnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXRvb2x0aXAtb3Blbl0nOiAndmlzaWJsZScsXHJcbiAgICAnW2NsYXNzLmJwcy10b29sdGlwLWRpc2FibGVkXSc6ICd0b29sdGlwRGlzYWJsZWQnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzVG9vbHRpcERpcmVjdGl2ZSBleHRlbmRzIE56VG9vbHRpcEJhc2VEaXJlY3RpdmUge1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNUb29sdGlwQXJyb3dQb2ludEF0Q2VudGVyOiBCb29sZWFuSW5wdXQ7XHJcblxyXG4gIEBJbnB1dCgnYnBzVG9vbHRpcFRpdGxlJykgb3ZlcnJpZGUgdGl0bGU/OiBOelRTVHlwZSB8IG51bGw7XHJcbiAgQElucHV0KCdicHNUb29sdGlwVGl0bGVDb250ZXh0JykgdGl0bGVDb250ZXh0PzogT2JqZWN0IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCdicHMtdG9vbHRpcCcpIG92ZXJyaWRlIGRpcmVjdGl2ZVRpdGxlPzogTnpUU1R5cGUgfCBudWxsO1xyXG4gIEBJbnB1dCgnYnBzVG9vbHRpcFRyaWdnZXInKSBvdmVycmlkZSB0cmlnZ2VyPzogTnpUb29sdGlwVHJpZ2dlciA9ICdob3Zlcic7XHJcbiAgQElucHV0KCdicHNUb29sdGlwUGxhY2VtZW50Jykgb3ZlcnJpZGUgcGxhY2VtZW50Pzogc3RyaW5nIHwgc3RyaW5nW10gPSAndG9wJztcclxuICBASW5wdXQoJ2Jwc1Rvb2x0aXBPcmlnaW4nKSBvdmVycmlkZSBvcmlnaW4/OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcclxuICBASW5wdXQoJ2Jwc1Rvb2x0aXBWaXNpYmxlJykgb3ZlcnJpZGUgdmlzaWJsZT86IGJvb2xlYW47XHJcbiAgQElucHV0KCdicHNUb29sdGlwTW91c2VFbnRlckRlbGF5Jykgb3ZlcnJpZGUgbW91c2VFbnRlckRlbGF5PzogbnVtYmVyO1xyXG4gIEBJbnB1dCgnYnBzVG9vbHRpcE1vdXNlTGVhdmVEZWxheScpIG92ZXJyaWRlIG1vdXNlTGVhdmVEZWxheT86IG51bWJlcjtcclxuICBASW5wdXQoJ2Jwc1Rvb2x0aXBPdmVybGF5Q2xhc3NOYW1lJykgb3ZlcnJpZGUgb3ZlcmxheUNsYXNzTmFtZT86IHN0cmluZztcclxuICBASW5wdXQoJ2Jwc1Rvb2x0aXBPdmVybGF5U3R5bGUnKSBvdmVycmlkZSBvdmVybGF5U3R5bGU/OiBOZ1N0eWxlSW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgnYnBzVG9vbHRpcEFycm93UG9pbnRBdENlbnRlcicpIEBJbnB1dEJvb2xlYW4oKSBvdmVycmlkZSBhcnJvd1BvaW50QXRDZW50ZXI/OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGJwc1Rvb2x0aXBDb2xvcj86IHN0cmluZztcclxuICBASW5wdXQoJ2Jwc1BvcG92ZXJUeXBlJykgcG9wb3ZlclR5cGU6IEJwc1BvcG92ZXJUeXBlID0gJ3ZhcmlhdGlvbl84YSc7XHJcbiAgQElucHV0KCdicHNUb29sdGlwVHlwZScpIHRvb2x0aXBUeXBlOiBCcHNQb3BvdmVyVHlwZSA9ICd2YXJpYXRpb25fOGEnO1xyXG4gIEBJbnB1dCgnYnBzVG9vbHRpcERpc2FibGVkJykgQElucHV0Qm9vbGVhbigpIHRvb2x0aXBEaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLW91dHB1dC1yZW5hbWVcclxuICBAT3V0cHV0KCdicHNUb29sdGlwVmlzaWJsZUNoYW5nZScpIG92ZXJyaWRlIHJlYWRvbmx5IHZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIG92ZXJyaWRlIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPEJwc1Rvb2xUaXBDb21wb25lbnQ+ID0gdGhpcy5ob3N0Vmlldy5jcmVhdGVDb21wb25lbnQoQnBzVG9vbFRpcENvbXBvbmVudCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIGhvc3RWaWV3OiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIoZWxlbWVudFJlZiwgaG9zdFZpZXcsIHJlc29sdmVyLCByZW5kZXJlciwgbm9BbmltYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldFByb3h5UHJvcGVydHlNYXAoKTogUHJvcGVydHlNYXBwaW5nIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnN1cGVyLmdldFByb3h5UHJvcGVydHlNYXAoKSxcclxuICAgICAgYnBzVG9vbHRpcENvbG9yOiBbJ2Jwc0NvbG9yJywgKCkgPT4gdGhpcy5icHNUb29sdGlwQ29sb3JdLFxyXG4gICAgICBicHNUb29sdGlwVGl0bGVDb250ZXh0OiBbJ2Jwc1RpdGxlQ29udGV4dCcsICgpID0+IHRoaXMudGl0bGVDb250ZXh0XVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnBzLXRvb2x0aXAnLFxyXG4gIGV4cG9ydEFzOiAnYnBzVG9vbHRpcENvbXBvbmVudCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzdHlsZVVybHM6IFsnLi9icHMtdG9vbHRpcC5jb21wb25lbnQuY3NzJ10sXHJcbiAgYW5pbWF0aW9uczogW3pvb21CaWdNb3Rpb25dLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctdGVtcGxhdGVcclxuICAgICAgI292ZXJsYXk9XCJjZGtDb25uZWN0ZWRPdmVybGF5XCJcclxuICAgICAgY2RrQ29ubmVjdGVkT3ZlcmxheVxyXG4gICAgICBuekNvbm5lY3RlZE92ZXJsYXlcclxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcmlnaW5dPVwib3JpZ2luXCJcclxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cIl92aXNpYmxlXCJcclxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnNdPVwiX3Bvc2l0aW9uc1wiXHJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5UHVzaF09XCJ0cnVlXCJcclxuICAgICAgW256QXJyb3dQb2ludEF0Q2VudGVyXT1cImJwc0Fycm93UG9pbnRBdENlbnRlclwiXHJcbiAgICAgIChvdmVybGF5T3V0c2lkZUNsaWNrKT1cIm9uQ2xpY2tPdXRzaWRlKCRldmVudClcIlxyXG4gICAgICAoZGV0YWNoKT1cImhpZGUoKVwiXHJcbiAgICAgIChwb3NpdGlvbkNoYW5nZSk9XCJvblBvc2l0aW9uQ2hhbmdlKCRldmVudClcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJhbnQtdG9vbHRpcFwiXHJcbiAgICAgICAgW2NsYXNzLmFudC10b29sdGlwLXJ0bF09XCJkaXIgPT09ICdydGwnXCJcclxuICAgICAgICBbY2xhc3MuYnBzLXRvb2x0aXAtZGlzYWJsZWRdPVwiYnBzVG9vbHRpcERpc2FibGVkXCJcclxuICAgICAgICBbbmdDbGFzc109XCJfY2xhc3NNYXBcIlxyXG4gICAgICAgIFtuZ1N0eWxlXT1cImJwc092ZXJsYXlTdHlsZVwiXHJcbiAgICAgICAgW0AuZGlzYWJsZWRdPVwiISFub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICAgICAgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gICAgICAgIFtAem9vbUJpZ01vdGlvbl09XCInYWN0aXZlJ1wiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXRvb2x0aXAtY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC10b29sdGlwLWFycm93XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXRvb2x0aXAtYXJyb3ctY29udGVudCBicHMtdG9vbHRpcC1hcnJvdy17e2Jwc1Rvb2x0aXBUeXBlfX1cIiBbbmdTdHlsZV09XCJfY29udGVudFN0eWxlTWFwXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXRvb2x0aXAtaW5uZXIgYnBzLXRvb2x0aXAtaW5uZXIte3ticHNUb29sdGlwVHlwZX19XCIgW25nU3R5bGVdPVwiX2NvbnRlbnRTdHlsZU1hcFwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiYnBzVGl0bGU7IGNvbnRleHQ6IGJwc1RpdGxlQ29udGV4dFwiPnt7IGJwc1RpdGxlIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gIGAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2VcclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc1Rvb2xUaXBDb21wb25lbnQgZXh0ZW5kcyBOelRvb2x0aXBCYXNlQ29tcG9uZW50IHtcclxuICBvdmVycmlkZSBicHNUaXRsZTogTnpUU1R5cGUgfCBudWxsID0gbnVsbDtcclxuICBvdmVycmlkZSBicHNUb29sdGlwVHlwZTogc3RyaW5nID0gJ3ZhcmlhdGlvbl84YSc7XHJcbiAgb3ZlcnJpZGUgYnBzUG9wb3ZlclR5cGU6IHN0cmluZyA9ICd2YXJpYXRpb25fOGEnO1xyXG4gIG92ZXJyaWRlIGJwc1Rvb2x0aXBEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGJwc1RpdGxlQ29udGV4dDogT2JqZWN0IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIGJwc0NvbG9yPzogc3RyaW5nIHwgTnpQcmVzZXRDb2xvcjtcclxuXHJcbiAgX2NvbnRlbnRTdHlsZU1hcDogTmdTdHlsZUludGVyZmFjZSA9IHt9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIoY2RyLCBkaXJlY3Rpb25hbGl0eSwgbm9BbmltYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGlzRW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNUb29sdGlwRW1wdHkodGhpcy5icHNUaXRsZSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdXBkYXRlU3R5bGVzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaXNDb2xvclByZXNldCA9IHRoaXMuYnBzQ29sb3IgJiYgaXNQcmVzZXRDb2xvcih0aGlzLmJwc0NvbG9yKTtcclxuXHJcbiAgICB0aGlzLl9jbGFzc01hcCA9IHtcclxuICAgICAgW3RoaXMuYnBzT3ZlcmxheUNsYXNzTmFtZV06IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLl9wcmVmaXh9LXBsYWNlbWVudC0ke3RoaXMucHJlZmVycmVkUGxhY2VtZW50fWBdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5fcHJlZml4fS0ke3RoaXMuYnBzQ29sb3J9YF06IGlzQ29sb3JQcmVzZXRcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fY29udGVudFN0eWxlTWFwID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICEhdGhpcy5icHNDb2xvciAmJiAhaXNDb2xvclByZXNldCA/IHRoaXMuYnBzQ29sb3IgOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=