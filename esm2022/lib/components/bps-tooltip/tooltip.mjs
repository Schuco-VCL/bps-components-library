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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsTooltipDirective, deps: [{ token: i0.ElementRef }, { token: i0.ViewContainerRef }, { token: i0.ComponentFactoryResolver }, { token: i0.Renderer2 }, { token: i1.NzNoAnimationDirective, host: true, optional: true }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: BpsTooltipDirective, selector: "[bps-tooltip]", inputs: { title: ["bpsTooltipTitle", "title"], titleContext: ["bpsTooltipTitleContext", "titleContext"], directiveTitle: ["bps-tooltip", "directiveTitle"], trigger: ["bpsTooltipTrigger", "trigger"], placement: ["bpsTooltipPlacement", "placement"], origin: ["bpsTooltipOrigin", "origin"], visible: ["bpsTooltipVisible", "visible"], mouseEnterDelay: ["bpsTooltipMouseEnterDelay", "mouseEnterDelay"], mouseLeaveDelay: ["bpsTooltipMouseLeaveDelay", "mouseLeaveDelay"], overlayClassName: ["bpsTooltipOverlayClassName", "overlayClassName"], overlayStyle: ["bpsTooltipOverlayStyle", "overlayStyle"], arrowPointAtCenter: ["bpsTooltipArrowPointAtCenter", "arrowPointAtCenter"], bpsTooltipColor: "bpsTooltipColor", popoverType: ["bpsPopoverType", "popoverType"], tooltipType: ["bpsTooltipType", "tooltipType"], tooltipDisabled: ["bpsTooltipDisabled", "tooltipDisabled"] }, outputs: { visibleChange: "bpsTooltipVisibleChange" }, host: { properties: { "class.ant-tooltip-open": "visible", "class.bps-tooltip-disabled": "tooltipDisabled" } }, exportAs: ["bpsTooltip"], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    InputBoolean()
], BpsTooltipDirective.prototype, "arrowPointAtCenter", void 0);
__decorate([
    InputBoolean()
], BpsTooltipDirective.prototype, "tooltipDisabled", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsTooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bps-tooltip]',
                    exportAs: 'bpsTooltip',
                    host: {
                        '[class.ant-tooltip-open]': 'visible',
                        '[class.bps-tooltip-disabled]': 'tooltipDisabled'
                    }
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i0.ComponentFactoryResolver }, { type: i0.Renderer2 }, { type: i1.NzNoAnimationDirective, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }], propDecorators: { title: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsToolTipComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i2.Directionality, optional: true }, { token: i1.NzNoAnimationDirective, host: true, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BpsToolTipComponent, selector: "bps-tooltip", exportAs: ["bpsTooltipComponent"], usesInheritance: true, ngImport: i0, template: `
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
  `, isInline: true, styles: [".ant-tooltip-inner{min-width:70px!important;height:22px!important;min-height:22px!important;font-size:11px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;letter-spacing:normal!important;text-align:left!important;color:#fff!important;padding:2px 10px!important;text-align:center!important;border-radius:6px!important}.ant-tooltip-arrow-content:before{background:transparent}.ant-tooltip-arrow{width:17px;height:17px}.bps-tooltip-inner-variation_8a{background-color:#00a2d1!important;box-shadow:0 3px 12px #000000e6!important}.bps-tooltip-arrow-variation_8a:before{background-color:#00a2d1!important}.bps-tooltip-inner-variation_8b{background-color:#7bc053!important;box-shadow:0 3px 12px #000000e6!important}.bps-tooltip-arrow-variation_8b:before{background-color:#7bc053!important}.bps-tooltip-inner-variation_9a{background-color:#00a2d1!important;box-shadow:none!important}.bps-tooltip-arrow-variation_9a:before{background-color:#00a2d1!important;box-shadow:none!important}.bps-tooltip-inner-variation_9b{background-color:#7bc053!important;box-shadow:none!important}.bps-tooltip-arrow-variation_9b:before{background-color:#7bc053!important;box-shadow:none!important}.bps-tooltip-inner-variation_10,.bps-tooltip-inner-variation_11{min-width:60px!important;box-shadow:0 3px 12px #000000e6!important;border:solid 1px #00a2d1!important;background-color:#363636}.bps-tooltip-inner-variation_11{box-shadow:none!important}.bps-tooltip-arrow-variation_10:before,.bps-tooltip-arrow-variation_11:before{content:unset!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_8a,.bps-tooltip-disabled .bps-tooltip-inner-variation_8b{background-color:#363636!important;color:#666!important}.bps-tooltip-disabled .bps-tooltip-arrow-variation_8a:before,.bps-tooltip-disabled .bps-tooltip-arrow-variation_8b:before{background-color:#363636!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_9a,.bps-tooltip-disabled .bps-tooltip-inner-variation_9b{background-color:#363636!important;color:#666!important}.bps-tooltip-disabled .bps-tooltip-arrow-variation_9a:before,.bps-tooltip-disabled .bps-tooltip-arrow-variation_9b:before{background-color:#363636!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_10,.bps-tooltip-disabled .bps-tooltip-inner-variation_11{background-color:#363636!important;color:#666!important;border:solid 1px #666666!important}\n"], dependencies: [{ kind: "directive", type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i3.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i4.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: i5.CdkConnectedOverlay, selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]", inputs: ["cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPositionStrategy", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayWidth", "cdkConnectedOverlayHeight", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayMinHeight", "cdkConnectedOverlayBackdropClass", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayViewportMargin", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOpen", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayLockPosition", "cdkConnectedOverlayFlexibleDimensions", "cdkConnectedOverlayGrowAfterOpen", "cdkConnectedOverlayPush", "cdkConnectedOverlayDisposeOnNavigation"], outputs: ["backdropClick", "positionChange", "attach", "detach", "overlayKeydown", "overlayOutsideClick"], exportAs: ["cdkConnectedOverlay"] }, { kind: "directive", type: i1.NzNoAnimationDirective, selector: "[nzNoAnimation]", inputs: ["nzNoAnimation"], exportAs: ["nzNoAnimation"] }, { kind: "directive", type: i6.NzConnectedOverlayDirective, selector: "[cdkConnectedOverlay][nzConnectedOverlay]", inputs: ["nzArrowPointAtCenter"], exportAs: ["nzConnectedOverlay"] }], animations: [zoomBigMotion], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsToolTipComponent, decorators: [{
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
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i2.Directionality, decorators: [{
                    type: Optional
                }] }, { type: i1.NzNoAnimationDirective, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXRvb2x0aXAvdG9vbHRpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBR1QsU0FBUyxFQUVULFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUNMLFFBQVEsRUFDUixNQUFNLEVBR04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFpQixNQUFNLDBCQUEwQixDQUFDO0FBR3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUd2RCxPQUFPLEVBQ0wsY0FBYyxFQUNkLHNCQUFzQixFQUN0QixzQkFBc0IsRUFHdkIsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7O0FBVWhCLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxzQkFBc0I7SUF5QjdELFlBQ0UsVUFBc0IsRUFDdEIsUUFBMEIsRUFDMUIsUUFBa0MsRUFDbEMsUUFBbUIsRUFDQyxXQUFvQztRQUV4RCxLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBNUI5QixpQkFBWSxHQUFtQixJQUFJLENBQUM7UUFFaEMsWUFBTyxHQUFzQixPQUFPLENBQUM7UUFDbkMsY0FBUyxHQUF1QixLQUFLLENBQUM7UUFTcEQsZ0JBQVcsR0FBbUIsY0FBYyxDQUFDO1FBQzdDLGdCQUFXLEdBQW1CLGNBQWMsQ0FBQztRQUN6QixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUVyRSw0REFBNEQ7UUFDUCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFeEYsaUJB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LFFBQVEsRUFBRSxDQUFDLEVBQUUsYUFBYTtTQUNwRCxDQUFDO1FBRUYsSUFBSSxDQUFDLGdCQUFnQixHQUFHO1lBQ3RCLGVBQWUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSTtTQUMxRSxDQUFDO0lBQ0osQ0FBQzsrR0FuQ1UsbUJBQW1CO21HQUFuQixtQkFBbUIsNkdBckNwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtDVCxnbklBbkNXLENBQUMsYUFBYSxDQUFDOzs0RkFzQ2hCLG1CQUFtQjtrQkE1Qy9CLFNBQVM7K0JBQ0UsYUFBYSxZQUNiLHFCQUFxQixtQkFDZCx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLGNBRXpCLENBQUMsYUFBYSxDQUFDLFlBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0NULHVCQUNvQixLQUFLOzswQkFldkIsUUFBUTs7MEJBQ1IsSUFBSTs7MEJBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgem9vbUJpZ01vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xyXG5pbXBvcnQgeyBpc1ByZXNldENvbG9yLCBOelByZXNldENvbG9yIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbG9yJztcclxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xyXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE5nU3R5bGVJbnRlcmZhY2UsIE56VFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBCcHNQb3BvdmVyVHlwZSB9IGZyb20gJy4uL2Jwcy1wb3BvdmVyL2Jwcy1wb3BvdmVyJztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNUb29sdGlwRW1wdHksXHJcbiAgTnpUb29sdGlwQmFzZUNvbXBvbmVudCxcclxuICBOelRvb2x0aXBCYXNlRGlyZWN0aXZlLFxyXG4gIE56VG9vbHRpcFRyaWdnZXIsXHJcbiAgUHJvcGVydHlNYXBwaW5nXHJcbn0gZnJvbSAnLi9iYXNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2Jwcy10b29sdGlwXScsXHJcbiAgZXhwb3J0QXM6ICdicHNUb29sdGlwJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC10b29sdGlwLW9wZW5dJzogJ3Zpc2libGUnLFxyXG4gICAgJ1tjbGFzcy5icHMtdG9vbHRpcC1kaXNhYmxlZF0nOiAndG9vbHRpcERpc2FibGVkJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc1Rvb2x0aXBEaXJlY3RpdmUgZXh0ZW5kcyBOelRvb2x0aXBCYXNlRGlyZWN0aXZlIHtcclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYnBzVG9vbHRpcEFycm93UG9pbnRBdENlbnRlcjogQm9vbGVhbklucHV0O1xyXG5cclxuICBASW5wdXQoJ2Jwc1Rvb2x0aXBUaXRsZScpIG92ZXJyaWRlIHRpdGxlPzogTnpUU1R5cGUgfCBudWxsO1xyXG4gIEBJbnB1dCgnYnBzVG9vbHRpcFRpdGxlQ29udGV4dCcpIHRpdGxlQ29udGV4dD86IE9iamVjdCB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgnYnBzLXRvb2x0aXAnKSBvdmVycmlkZSBkaXJlY3RpdmVUaXRsZT86IE56VFNUeXBlIHwgbnVsbDtcclxuICBASW5wdXQoJ2Jwc1Rvb2x0aXBUcmlnZ2VyJykgb3ZlcnJpZGUgdHJpZ2dlcj86IE56VG9vbHRpcFRyaWdnZXIgPSAnaG92ZXInO1xyXG4gIEBJbnB1dCgnYnBzVG9vbHRpcFBsYWNlbWVudCcpIG92ZXJyaWRlIHBsYWNlbWVudD86IHN0cmluZyB8IHN0cmluZ1tdID0gJ3RvcCc7XHJcbiAgQElucHV0KCdicHNUb29sdGlwT3JpZ2luJykgb3ZlcnJpZGUgb3JpZ2luPzogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XHJcbiAgQElucHV0KCdicHNUb29sdGlwVmlzaWJsZScpIG92ZXJyaWRlIHZpc2libGU/OiBib29sZWFuO1xyXG4gIEBJbnB1dCgnYnBzVG9vbHRpcE1vdXNlRW50ZXJEZWxheScpIG92ZXJyaWRlIG1vdXNlRW50ZXJEZWxheT86IG51bWJlcjtcclxuICBASW5wdXQoJ2Jwc1Rvb2x0aXBNb3VzZUxlYXZlRGVsYXknKSBvdmVycmlkZSBtb3VzZUxlYXZlRGVsYXk/OiBudW1iZXI7XHJcbiAgQElucHV0KCdicHNUb29sdGlwT3ZlcmxheUNsYXNzTmFtZScpIG92ZXJyaWRlIG92ZXJsYXlDbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgQElucHV0KCdicHNUb29sdGlwT3ZlcmxheVN0eWxlJykgb3ZlcnJpZGUgb3ZlcmxheVN0eWxlPzogTmdTdHlsZUludGVyZmFjZTtcclxuICBASW5wdXQoJ2Jwc1Rvb2x0aXBBcnJvd1BvaW50QXRDZW50ZXInKSBASW5wdXRCb29sZWFuKCkgb3ZlcnJpZGUgYXJyb3dQb2ludEF0Q2VudGVyPzogYm9vbGVhbjtcclxuICBASW5wdXQoKSBicHNUb29sdGlwQ29sb3I/OiBzdHJpbmc7XHJcbiAgQElucHV0KCdicHNQb3BvdmVyVHlwZScpIHBvcG92ZXJUeXBlOiBCcHNQb3BvdmVyVHlwZSA9ICd2YXJpYXRpb25fOGEnO1xyXG4gIEBJbnB1dCgnYnBzVG9vbHRpcFR5cGUnKSB0b29sdGlwVHlwZTogQnBzUG9wb3ZlclR5cGUgPSAndmFyaWF0aW9uXzhhJztcclxuICBASW5wdXQoJ2Jwc1Rvb2x0aXBEaXNhYmxlZCcpIEBJbnB1dEJvb2xlYW4oKSB0b29sdGlwRGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1vdXRwdXQtcmVuYW1lXHJcbiAgQE91dHB1dCgnYnBzVG9vbHRpcFZpc2libGVDaGFuZ2UnKSBvdmVycmlkZSByZWFkb25seSB2aXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBvdmVycmlkZSBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxCcHNUb29sVGlwQ29tcG9uZW50PiA9IHRoaXMuaG9zdFZpZXcuY3JlYXRlQ29tcG9uZW50KEJwc1Rvb2xUaXBDb21wb25lbnQpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBob3N0VmlldzogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGhvc3RWaWV3LCByZXNvbHZlciwgcmVuZGVyZXIsIG5vQW5pbWF0aW9uKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXRQcm94eVByb3BlcnR5TWFwKCk6IFByb3BlcnR5TWFwcGluZyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zdXBlci5nZXRQcm94eVByb3BlcnR5TWFwKCksXHJcbiAgICAgIGJwc1Rvb2x0aXBDb2xvcjogWydicHNDb2xvcicsICgpID0+IHRoaXMuYnBzVG9vbHRpcENvbG9yXSxcclxuICAgICAgYnBzVG9vbHRpcFRpdGxlQ29udGV4dDogWydicHNUaXRsZUNvbnRleHQnLCAoKSA9PiB0aGlzLnRpdGxlQ29udGV4dF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jwcy10b29sdGlwJyxcclxuICBleHBvcnRBczogJ2Jwc1Rvb2x0aXBDb21wb25lbnQnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnBzLXRvb2x0aXAuY29tcG9uZW50LmNzcyddLFxyXG4gIGFuaW1hdGlvbnM6IFt6b29tQmlnTW90aW9uXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICNvdmVybGF5PVwiY2RrQ29ubmVjdGVkT3ZlcmxheVwiXHJcbiAgICAgIGNka0Nvbm5lY3RlZE92ZXJsYXlcclxuICAgICAgbnpDb25uZWN0ZWRPdmVybGF5XHJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cIm9yaWdpblwiXHJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJfdmlzaWJsZVwiXHJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cIl9wb3NpdGlvbnNcIlxyXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVB1c2hdPVwidHJ1ZVwiXHJcbiAgICAgIFtuekFycm93UG9pbnRBdENlbnRlcl09XCJicHNBcnJvd1BvaW50QXRDZW50ZXJcIlxyXG4gICAgICAob3ZlcmxheU91dHNpZGVDbGljayk9XCJvbkNsaWNrT3V0c2lkZSgkZXZlbnQpXCJcclxuICAgICAgKGRldGFjaCk9XCJoaWRlKClcIlxyXG4gICAgICAocG9zaXRpb25DaGFuZ2UpPVwib25Qb3NpdGlvbkNoYW5nZSgkZXZlbnQpXCJcclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzPVwiYW50LXRvb2x0aXBcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtdG9vbHRpcC1ydGxdPVwiZGlyID09PSAncnRsJ1wiXHJcbiAgICAgICAgW2NsYXNzLmJwcy10b29sdGlwLWRpc2FibGVkXT1cImJwc1Rvb2x0aXBEaXNhYmxlZFwiXHJcbiAgICAgICAgW25nQ2xhc3NdPVwiX2NsYXNzTWFwXCJcclxuICAgICAgICBbbmdTdHlsZV09XCJicHNPdmVybGF5U3R5bGVcIlxyXG4gICAgICAgIFtALmRpc2FibGVkXT1cIiEhbm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gICAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgICAgICBbQHpvb21CaWdNb3Rpb25dPVwiJ2FjdGl2ZSdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC10b29sdGlwLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdG9vbHRpcC1hcnJvd1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFudC10b29sdGlwLWFycm93LWNvbnRlbnQgYnBzLXRvb2x0aXAtYXJyb3cte3ticHNUb29sdGlwVHlwZX19XCIgW25nU3R5bGVdPVwiX2NvbnRlbnRTdHlsZU1hcFwiPjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC10b29sdGlwLWlubmVyIGJwcy10b29sdGlwLWlubmVyLXt7YnBzVG9vbHRpcFR5cGV9fVwiIFtuZ1N0eWxlXT1cIl9jb250ZW50U3R5bGVNYXBcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImJwc1RpdGxlOyBjb250ZXh0OiBicHNUaXRsZUNvbnRleHRcIj57eyBicHNUaXRsZSB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICBgLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNUb29sVGlwQ29tcG9uZW50IGV4dGVuZHMgTnpUb29sdGlwQmFzZUNvbXBvbmVudCB7XHJcbiAgb3ZlcnJpZGUgYnBzVGl0bGU6IE56VFNUeXBlIHwgbnVsbCA9IG51bGw7XHJcbiAgb3ZlcnJpZGUgYnBzVG9vbHRpcFR5cGU6IHN0cmluZyA9ICd2YXJpYXRpb25fOGEnO1xyXG4gIG92ZXJyaWRlIGJwc1BvcG92ZXJUeXBlOiBzdHJpbmcgPSAndmFyaWF0aW9uXzhhJztcclxuICBvdmVycmlkZSBicHNUb29sdGlwRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBicHNUaXRsZUNvbnRleHQ6IE9iamVjdCB8IG51bGwgPSBudWxsO1xyXG5cclxuICBicHNDb2xvcj86IHN0cmluZyB8IE56UHJlc2V0Q29sb3I7XHJcblxyXG4gIF9jb250ZW50U3R5bGVNYXA6IE5nU3R5bGVJbnRlcmZhY2UgPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHN1cGVyKGNkciwgZGlyZWN0aW9uYWxpdHksIG5vQW5pbWF0aW9uKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBpc0VtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGlzVG9vbHRpcEVtcHR5KHRoaXMuYnBzVGl0bGUpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG92ZXJyaWRlIHVwZGF0ZVN0eWxlcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGlzQ29sb3JQcmVzZXQgPSB0aGlzLmJwc0NvbG9yICYmIGlzUHJlc2V0Q29sb3IodGhpcy5icHNDb2xvcik7XHJcblxyXG4gICAgdGhpcy5fY2xhc3NNYXAgPSB7XHJcbiAgICAgIFt0aGlzLmJwc092ZXJsYXlDbGFzc05hbWVdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5fcHJlZml4fS1wbGFjZW1lbnQtJHt0aGlzLnByZWZlcnJlZFBsYWNlbWVudH1gXTogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMuX3ByZWZpeH0tJHt0aGlzLmJwc0NvbG9yfWBdOiBpc0NvbG9yUHJlc2V0XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuX2NvbnRlbnRTdHlsZU1hcCA9IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAhIXRoaXMuYnBzQ29sb3IgJiYgIWlzQ29sb3JQcmVzZXQgPyB0aGlzLmJwc0NvbG9yIDogbnVsbFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19