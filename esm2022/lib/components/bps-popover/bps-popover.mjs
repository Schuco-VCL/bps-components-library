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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsPopoverDirective, deps: [{ token: i0.ElementRef }, { token: i0.ViewContainerRef }, { token: i0.ComponentFactoryResolver }, { token: i0.Renderer2 }, { token: i1.NzNoAnimationDirective, host: true, optional: true }, { token: i2.NzConfigService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: BpsPopoverDirective, selector: "[bps-popover]", inputs: { arrowPointAtCenter: ["bpsPopoverArrowPointAtCenter", "arrowPointAtCenter"], title: ["bpsPopoverTitle", "title"], content: ["bpsPopoverContent", "content"], directiveTitle: ["bps-popover", "directiveTitle"], trigger: ["bpsPopoverTrigger", "trigger"], placement: ["bpsPopoverPlacement", "placement"], origin: ["bpsPopoverOrigin", "origin"], visible: ["bpsPopoverVisible", "visible"], mouseEnterDelay: ["bpsPopoverMouseEnterDelay", "mouseEnterDelay"], mouseLeaveDelay: ["bpsPopoverMouseLeaveDelay", "mouseLeaveDelay"], overlayClassName: ["bpsPopoverOverlayClassName", "overlayClassName"], overlayStyle: ["bpsPopoverOverlayStyle", "overlayStyle"], popoverType: ["bpsPopoverType", "popoverType"], bpsPopoverBackdrop: "bpsPopoverBackdrop" }, outputs: { visibleChange: "bpsPopoverVisibleChange" }, host: { properties: { "class.ant-popover-open": "visible" } }, exportAs: ["bpsPopover"], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    InputBoolean()
], BpsPopoverDirective.prototype, "arrowPointAtCenter", void 0);
__decorate([
    WithConfig()
], BpsPopoverDirective.prototype, "bpsPopoverBackdrop", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsPopoverDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bps-popover]',
                    exportAs: 'bpsPopover',
                    host: {
                        '[class.ant-popover-open]': 'visible'
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i0.ComponentFactoryResolver }, { type: i0.Renderer2 }, { type: i1.NzNoAnimationDirective, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }, { type: i2.NzConfigService }]; }, propDecorators: { arrowPointAtCenter: [{
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
            }] } });
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsPopoverComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i3.Directionality, optional: true }, { token: i1.NzNoAnimationDirective, host: true, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsPopoverComponent, selector: "bps-popover", exportAs: ["nzPopoverComponent"], usesInheritance: true, ngImport: i0, template: `
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
  `, isInline: true, styles: [".ant-popover-placement-right .ant-popover-arrow-content:before{border-left:1px solid #00a2d1!important;border-bottom:1px solid #00a2d1!important;background-color:#262626!important;border-right-color:#262626!important;border-top-color:#262626!important}.ant-popover-placement-left .ant-popover-arrow-content:before{border-right:1px solid #00a2d1!important;border-top:1px solid #00a2d1!important;background-color:#262626!important;border-left-color:#262626!important;border-bottom-color:#262626!important}.ant-popover-placement-top .ant-popover-arrow-content:before{border-right:1px solid #00a2d1!important;border-bottom:1px solid #00a2d1!important;background-color:#262626!important;border-top-color:#262626!important;border-left-color:#262626!important}.ant-popover-placement-bottom .ant-popover-arrow-content:before{border-left:1px solid #00a2d1!important;border-top:1px solid #00a2d1!important;background-color:#262626!important;border-bottom-color:#262626!important;border-right-color:#262626!important}.ant-popover-arrow-content:before{top:-12.31px;left:-12.31px}.ant-popover-arrow-content{background-color:#00a2d1}.ant-popover-arrow-content:before{border-style:unset!important}.ant-popover-inner{box-shadow:0 3px 12px #000000e6!important;border:solid 1px #00a2d1!important;background-color:#262626!important;border-radius:8px!important}.ant-popover-inner-content{font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:left!important;color:#fff;padding:15px!important}.bps-popover-content-title{font-size:13px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.31;letter-spacing:normal;text-align:left;color:#00a2d1;margin-bottom:10px}.bps-popover-content-subtitle{font-size:11px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.36;letter-spacing:normal;text-align:left;color:#fff;margin-bottom:15px}.bps-popover-inner-variation_7a{border:solid 1px #7bc053!important}.ant-popover-placement-right .ant-popover-arrow-content.bps-popover-arrow-variation_7a:before{border-left:1px solid #7bc053!important;border-bottom:1px solid #7bc053!important;background-color:#262626!important;border-right-color:#262626!important;border-top-color:#262626!important}.ant-popover-placement-left .ant-popover-arrow-content.bps-popover-arrow-variation_7a:before{border-right:1px solid #7bc053!important;border-top:1px solid #7bc053!important;background-color:#262626!important;border-left-color:#262626!important;border-bottom-color:#262626!important}.ant-popover-placement-top .ant-popover-arrow-content.bps-popover-arrow-variation_7a:before{border-right:1px solid #7bc053!important;border-bottom:1px solid #7bc053!important;background-color:#262626!important;border-top-color:#262626!important;border-left-color:#262626!important}.ant-popover-placement-bottom .ant-popover-arrow-content.bps-popover-arrow-variation_7a:before{border-left:1px solid #7bc053!important;border-top:1px solid #7bc053!important;background-color:#262626!important;border-bottom-color:#262626!important;border-right-color:#262626!important}.bps-popover-custom-content-icon{width:45px;position:relative;float:left;top:50%;transform:translateY(-50%);padding-left:8px}.bps-popover-custom-content{width:370px;position:relative;float:right;top:50%;transform:translateY(-50%);padding-right:10px}\n"], dependencies: [{ kind: "directive", type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i4.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i5.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: i6.CdkConnectedOverlay, selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]", inputs: ["cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPositionStrategy", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayWidth", "cdkConnectedOverlayHeight", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayMinHeight", "cdkConnectedOverlayBackdropClass", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayViewportMargin", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOpen", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayLockPosition", "cdkConnectedOverlayFlexibleDimensions", "cdkConnectedOverlayGrowAfterOpen", "cdkConnectedOverlayPush"], outputs: ["backdropClick", "positionChange", "attach", "detach", "overlayKeydown", "overlayOutsideClick"], exportAs: ["cdkConnectedOverlay"] }, { kind: "directive", type: i1.NzNoAnimationDirective, selector: "[nzNoAnimation]", inputs: ["nzNoAnimation"], exportAs: ["nzNoAnimation"] }, { kind: "directive", type: i7.NzConnectedOverlayDirective, selector: "[cdkConnectedOverlay][nzConnectedOverlay]", inputs: ["nzArrowPointAtCenter"], exportAs: ["nzConnectedOverlay"] }], animations: [zoomBigMotion], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsPopoverComponent, decorators: [{
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
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i3.Directionality, decorators: [{
                    type: Optional
                }] }, { type: i1.NzNoAnimationDirective, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXBvcG92ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1wb3BvdmVyL2Jwcy1wb3BvdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFHVCxTQUFTLEVBRVQsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdELE9BQU8sRUFBZ0MsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHckYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdELE9BQU8sRUFDTCxjQUFjLEVBQ2Qsc0JBQXNCLEVBR3ZCLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7OztBQUUvQixNQUFNLHFCQUFxQixHQUFnQixTQUFTLENBQUM7QUFZckQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLHNCQUFzQjtJQTBCMUMsbUJBQW1CO1FBQ3BDLE9BQU87WUFDTCxrQkFBa0IsRUFBRSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFDbEUsR0FBRyxLQUFLLENBQUMsbUJBQW1CLEVBQUU7U0FDL0IsQ0FBQztJQUNKLENBQUM7SUFFRCxZQUNFLFVBQXNCLEVBQ3RCLFFBQTBCLEVBQzFCLFFBQWtDLEVBQ2xDLFFBQW1CLEVBQ0MsV0FBb0MsRUFDeEQsZUFBaUM7UUFFakMsS0FBSyxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxXQUFX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IERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgem9vbUJpZ01vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xyXG5pbXBvcnQgeyBOekNvbmZpZ0tleSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XHJcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOZ1N0eWxlSW50ZXJmYWNlLCBOelRTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgQnBzVG9vbFRpcENvbXBvbmVudCB9IGZyb20gJy4uL2Jwcy10b29sdGlwL3Rvb2x0aXAnO1xyXG5pbXBvcnQge1xyXG4gIGlzVG9vbHRpcEVtcHR5LFxyXG4gIE56VG9vbHRpcEJhc2VEaXJlY3RpdmUsXHJcbiAgTnpUb29sdGlwVHJpZ2dlcixcclxuICBQcm9wZXJ0eU1hcHBpbmdcclxufSBmcm9tICcuLy4uL2Jwcy10b29sdGlwL2Jhc2UnO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX01PRFVMRV9OQU1FOiBOekNvbmZpZ0tleSA9ICdwb3BvdmVyJztcclxuXHJcbmV4cG9ydCB0eXBlIEJwc1BvcG92ZXJUeXBlID0gJ3ZhcmlhdGlvbl8xJyB8ICd2YXJpYXRpb25fMicgfCAndmFyaWF0aW9uXzMnIHwgJ3ZhcmlhdGlvbl80JyB8ICd2YXJpYXRpb25fNScgfCAndmFyaWF0aW9uXzYnIHwgJ3ZhcmlhdGlvbl83YScgfFxyXG4gICd2YXJpYXRpb25fN2InIHwgJ3ZhcmlhdGlvbl84YScgfCAndmFyaWF0aW9uXzhiJyB8ICd2YXJpYXRpb25fOWEnIHwgJ3ZhcmlhdGlvbl85YicgfCAndmFyaWF0aW9uXzEwJyB8ICd2YXJpYXRpb25fMTEnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYnBzLXBvcG92ZXJdJyxcclxuICBleHBvcnRBczogJ2Jwc1BvcG92ZXInLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LXBvcG92ZXItb3Blbl0nOiAndmlzaWJsZSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNQb3BvdmVyRGlyZWN0aXZlIGV4dGVuZHMgTnpUb29sdGlwQmFzZURpcmVjdGl2ZSB7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc1BvcG92ZXJBcnJvd1BvaW50QXRDZW50ZXI6IEJvb2xlYW5JbnB1dDtcclxuXHJcbiAgcmVhZG9ubHkgX256TW9kdWxlTmFtZTogTnpDb25maWdLZXkgPSBOWl9DT05GSUdfTU9EVUxFX05BTUU7XHJcblxyXG4gIEBJbnB1dCgnYnBzUG9wb3ZlckFycm93UG9pbnRBdENlbnRlcicpIEBJbnB1dEJvb2xlYW4oKSBvdmVycmlkZSBhcnJvd1BvaW50QXRDZW50ZXI/OiBib29sZWFuO1xyXG4gIEBJbnB1dCgnYnBzUG9wb3ZlclRpdGxlJykgb3ZlcnJpZGUgdGl0bGU/OiBOelRTVHlwZTtcclxuICBASW5wdXQoJ2Jwc1BvcG92ZXJDb250ZW50Jykgb3ZlcnJpZGUgY29udGVudD86IE56VFNUeXBlO1xyXG4gIEBJbnB1dCgnYnBzLXBvcG92ZXInKSBvdmVycmlkZSBkaXJlY3RpdmVUaXRsZT86IE56VFNUeXBlIHwgbnVsbDtcclxuICBASW5wdXQoJ2Jwc1BvcG92ZXJUcmlnZ2VyJykgb3ZlcnJpZGUgdHJpZ2dlcj86IE56VG9vbHRpcFRyaWdnZXIgPSAnaG92ZXInO1xyXG4gIEBJbnB1dCgnYnBzUG9wb3ZlclBsYWNlbWVudCcpIG92ZXJyaWRlIHBsYWNlbWVudD86IHN0cmluZyB8IHN0cmluZ1tdID0gJ3RvcCc7XHJcbiAgQElucHV0KCdicHNQb3BvdmVyT3JpZ2luJykgb3ZlcnJpZGUgb3JpZ2luPzogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XHJcbiAgQElucHV0KCdicHNQb3BvdmVyVmlzaWJsZScpIG92ZXJyaWRlIHZpc2libGU/OiBib29sZWFuO1xyXG4gIEBJbnB1dCgnYnBzUG9wb3Zlck1vdXNlRW50ZXJEZWxheScpIG92ZXJyaWRlIG1vdXNlRW50ZXJEZWxheT86IG51bWJlcjtcclxuICBASW5wdXQoJ2Jwc1BvcG92ZXJNb3VzZUxlYXZlRGVsYXknKSBvdmVycmlkZSBtb3VzZUxlYXZlRGVsYXk/OiBudW1iZXI7XHJcbiAgQElucHV0KCdicHNQb3BvdmVyT3ZlcmxheUNsYXNzTmFtZScpIG92ZXJyaWRlIG92ZXJsYXlDbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgQElucHV0KCdicHNQb3BvdmVyT3ZlcmxheVN0eWxlJykgb3ZlcnJpZGUgb3ZlcmxheVN0eWxlPzogTmdTdHlsZUludGVyZmFjZTtcclxuICBASW5wdXQoJ2Jwc1BvcG92ZXJUeXBlJykgcG9wb3ZlclR5cGU6IEJwc1BvcG92ZXJUeXBlID0gJ3ZhcmlhdGlvbl8xJztcclxuXHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBicHNQb3BvdmVyQmFja2Ryb3A/OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8tb3V0cHV0LXJlbmFtZVxyXG4gIEBPdXRwdXQoJ2Jwc1BvcG92ZXJWaXNpYmxlQ2hhbmdlJykgb3ZlcnJpZGUgcmVhZG9ubHkgdmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgb3ZlcnJpZGUgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8QnBzUG9wb3ZlckNvbXBvbmVudD4gPSB0aGlzLmhvc3RWaWV3LmNyZWF0ZUNvbXBvbmVudChCcHNQb3BvdmVyQ29tcG9uZW50KTtcclxuXHJcbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldFByb3h5UHJvcGVydHlNYXAoKTogUHJvcGVydHlNYXBwaW5nIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJwc1BvcG92ZXJCYWNrZHJvcDogWydicHNCYWNrZHJvcCcsICgpID0+IHRoaXMuYnBzUG9wb3ZlckJhY2tkcm9wXSxcclxuICAgICAgLi4uc3VwZXIuZ2V0UHJveHlQcm9wZXJ0eU1hcCgpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgaG9zdFZpZXc6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxyXG4gICAgbnpDb25maWdTZXJ2aWNlPzogTnpDb25maWdTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCBob3N0VmlldywgcmVzb2x2ZXIsIHJlbmRlcmVyLCBub0FuaW1hdGlvbiwgbnpDb25maWdTZXJ2aWNlKTtcclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnBzLXBvcG92ZXInLFxyXG4gIGV4cG9ydEFzOiAnbnpQb3BvdmVyQ29tcG9uZW50JyxcclxuICBhbmltYXRpb25zOiBbem9vbUJpZ01vdGlvbl0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBzdHlsZVVybHM6IFsnYnBzLXBvcG92ZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctdGVtcGxhdGVcclxuICAgICAgI292ZXJsYXk9XCJjZGtDb25uZWN0ZWRPdmVybGF5XCJcclxuICAgICAgY2RrQ29ubmVjdGVkT3ZlcmxheVxyXG4gICAgICBuekNvbm5lY3RlZE92ZXJsYXlcclxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlIYXNCYWNrZHJvcF09XCJoYXNCYWNrZHJvcFwiXHJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cIm9yaWdpblwiXHJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cIl9wb3NpdGlvbnNcIlxyXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwiX3Zpc2libGVcIlxyXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVB1c2hdPVwidHJ1ZVwiXHJcbiAgICAgIFtuekFycm93UG9pbnRBdENlbnRlcl09XCJicHNBcnJvd1BvaW50QXRDZW50ZXJcIlxyXG4gICAgICAob3ZlcmxheU91dHNpZGVDbGljayk9XCJvbkNsaWNrT3V0c2lkZSgkZXZlbnQpXCJcclxuICAgICAgKGRldGFjaCk9XCJoaWRlKClcIlxyXG4gICAgICAocG9zaXRpb25DaGFuZ2UpPVwib25Qb3NpdGlvbkNoYW5nZSgkZXZlbnQpXCJcclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzPVwiYW50LXBvcG92ZXJcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtcG9wb3Zlci1ydGxdPVwiZGlyID09PSAncnRsJ1wiXHJcbiAgICAgICAgW25nQ2xhc3NdPVwiX2NsYXNzTWFwXCJcclxuICAgICAgICBbbmdTdHlsZV09XCJicHNPdmVybGF5U3R5bGVcIlxyXG4gICAgICAgIFtALmRpc2FibGVkXT1cIiEhbm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gICAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgICAgICBbQHpvb21CaWdNb3Rpb25dPVwiJ2FjdGl2ZSdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFudC1wb3BvdmVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcG9wb3Zlci1hcnJvdyBicHMtcG9wb3Zlci1hcnJvdy17e2Jwc1BvcG92ZXJUeXBlfX1cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtcG9wb3Zlci1hcnJvdy1jb250ZW50IGJwcy1wb3BvdmVyLWlubmVyLXt7YnBzUG9wb3ZlclR5cGV9fVwiPjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1wb3BvdmVyLWlubmVyXCIgcm9sZT1cInRvb2x0aXBcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBvcG92ZXItdGl0bGVcIiAqbmdJZj1cImJwc1RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiYnBzVGl0bGVcIj57eyBicHNUaXRsZSB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXBvcG92ZXItaW5uZXItY29udGVudCBicHMtcG9wb3Zlci1pbm5lci1jb250ZW50LXt7YnBzUG9wb3ZlclR5cGV9fVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImJwc0NvbnRlbnRcIj57eyBicHNDb250ZW50IH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNQb3BvdmVyQ29tcG9uZW50IGV4dGVuZHMgQnBzVG9vbFRpcENvbXBvbmVudCB7XHJcbiAgb3ZlcnJpZGUgX3ByZWZpeCA9ICdhbnQtcG9wb3Zlcic7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBPcHRpb25hbCgpIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihjZHIsIGRpcmVjdGlvbmFsaXR5LCBub0FuaW1hdGlvbik7XHJcbiAgfVxyXG5cclxuICBnZXQgaGFzQmFja2Ryb3AoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5icHNUcmlnZ2VyID09PSAnY2xpY2snID8gdGhpcy5icHNCYWNrZHJvcCA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGlzRW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNUb29sdGlwRW1wdHkodGhpcy5icHNUaXRsZSkgJiYgaXNUb29sdGlwRW1wdHkodGhpcy5icHNDb250ZW50KTtcclxuICB9XHJcbn1cclxuIl19