import { __decorate } from "tslib";
import { ENTER, LEFT_ARROW, RIGHT_ARROW, SPACE } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { WithConfig } from 'ng-zorro-antd/core/config';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/config";
import * as i2 from "@angular/cdk/a11y";
import * as i3 from "@angular/cdk/bidi";
import * as i4 from "@angular/common";
import * as i5 from "../core/addon/string_template_outlet";
import * as i6 from "ng-zorro-antd/icon";
import * as i7 from "ng-zorro-antd/core/wave";
const _c0 = ["switchElement"];
function BpsSwitchComponent_ng_container_0_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 9);
} }
function BpsSwitchComponent_ng_container_0_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.bpsCheckedChildren);
} }
function BpsSwitchComponent_ng_container_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsSwitchComponent_ng_container_0_ng_container_6_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.bpsCheckedChildren);
} }
function BpsSwitchComponent_ng_container_0_ng_template_7_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.bpsUnCheckedChildren);
} }
function BpsSwitchComponent_ng_container_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BpsSwitchComponent_ng_container_0_ng_template_7_ng_container_0_Template, 2, 1, "ng-container", 10);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.bpsUnCheckedChildren);
} }
function BpsSwitchComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 3, 0)(3, "span", 4);
    i0.ɵɵtemplate(4, BpsSwitchComponent_ng_container_0_span_4_Template, 1, 0, "span", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 6);
    i0.ɵɵtemplate(6, BpsSwitchComponent_ng_container_0_ng_container_6_Template, 2, 1, "ng-container", 7)(7, BpsSwitchComponent_ng_container_0_ng_template_7_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "div", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const uncheckTemplate_r2 = i0.ɵɵreference(8);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("ant-switch-checked", ctx_r0.isChecked)("ant-switch-loading", ctx_r0.bpsLoading)("ant-switch-disabled", ctx_r0.bpsDisabled)("ant-switch-small", ctx_r0.bpsSize === "small")("ant-switch-rtl", ctx_r0.dir === "rtl");
    i0.ɵɵproperty("disabled", ctx_r0.bpsDisabled)("nzWaveExtraNode", true);
    i0.ɵɵattribute("id", ctx_r0.bpsId);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.bpsLoading);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.isChecked)("ngIfElse", uncheckTemplate_r2);
} }
function BpsSwitchComponent_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 12)(2, "div", 13);
    i0.ɵɵlistener("click", function BpsSwitchComponent_ng_container_1_ng_container_3_Template_div_click_2_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.checkNode(ctx_r0.bpsDualValues[0], ctx_r0.bpsDualValues[1])); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 14);
    i0.ɵɵlistener("click", function BpsSwitchComponent_ng_container_1_ng_container_3_Template_div_click_4_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.checkNode(ctx_r0.bpsDualValues[1], ctx_r0.bpsDualValues[0])); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("bps-switch-checked", ctx_r0.bpsDualValues[0].checked);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.bpsDualValues[0].title, " ");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("bps-switch-checked", ctx_r0.bpsDualValues[1].checked);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.bpsDualValues[1].title, " ");
} }
function BpsSwitchComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 11, 0);
    i0.ɵɵlistener("keydown", function BpsSwitchComponent_ng_container_1_Template_button_keydown_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onKeyDown($event)); });
    i0.ɵɵtemplate(3, BpsSwitchComponent_ng_container_1_ng_container_3_Template, 6, 6, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("bps-switch-disabled", ctx_r0.bpsDisabled);
    i0.ɵɵproperty("disabled", ctx_r0.bpsDisabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.bpsDualValues.length > 1);
} }
const NZ_CONFIG_MODULE_NAME = 'switch';
export class BpsSwitchComponent {
    updateValue(value) {
        if (this.isChecked !== value) {
            this.isChecked = value;
            this.onChange(this.isChecked);
        }
    }
    focus() {
        this.focusMonitor.focusVia(this.switchElement?.nativeElement, 'keyboard');
    }
    blur() {
        this.switchElement?.nativeElement.blur();
    }
    constructor(nzConfigService, host, ngZone, cdr, focusMonitor, directionality) {
        this.nzConfigService = nzConfigService;
        this.host = host;
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.isChecked = false;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.bpsLoading = false;
        this.bpsDisabled = false;
        this.bpsControl = false;
        this.bpsCheckedChildren = null;
        this.bpsUnCheckedChildren = null;
        this.bpsSize = 'default';
        this.bpsId = null;
        this.bpsDual = false;
        this.bpsDualValues = [];
        this.bpsDualValuesChange = new EventEmitter();
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        this.isNzDisableFirstChange = true;
    }
    ngOnInit() {
        this.directionality.change.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
        this.ngZone.runOutsideAngular(() => {
            fromEvent(this.host.nativeElement, 'click')
                .pipe(takeUntil(this.destroy$))
                .subscribe(event => {
                event.preventDefault();
                if (this.bpsControl || this.bpsDisabled || this.bpsLoading) {
                    return;
                }
                this.ngZone.run(() => {
                    this.updateValue(!this.isChecked);
                    this.cdr.markForCheck();
                });
            });
            if (this.switchElement === null || this.switchElement === undefined)
                return;
            fromEvent(this.switchElement?.nativeElement, 'keydown')
                .pipe(takeUntil(this.destroy$))
                .subscribe(event => {
                if (this.bpsControl || this.bpsDisabled || this.bpsLoading) {
                    return;
                }
                const { keyCode } = event;
                if (keyCode !== LEFT_ARROW && keyCode !== RIGHT_ARROW && keyCode !== SPACE && keyCode !== ENTER) {
                    return;
                }
                event.preventDefault();
                this.ngZone.run(() => {
                    if (keyCode === LEFT_ARROW) {
                        this.updateValue(false);
                    }
                    else if (keyCode === RIGHT_ARROW) {
                        this.updateValue(true);
                    }
                    else if (keyCode === SPACE || keyCode === ENTER) {
                        this.updateValue(!this.isChecked);
                    }
                    this.cdr.markForCheck();
                });
            });
        });
    }
    ngAfterViewInit() {
        if (this.switchElement === null || this.switchElement === undefined)
            return;
        this.focusMonitor
            .monitor(this.switchElement?.nativeElement, true)
            .pipe(takeUntil(this.destroy$))
            .subscribe(focusOrigin => {
            if (!focusOrigin) {
                /** https://github.com/angular/angular/issues/17793 **/
                Promise.resolve().then(() => this.onTouched());
            }
        });
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.switchElement?.nativeElement);
        this.destroy$.next();
        this.destroy$.complete();
    }
    checkNode(nodeA, nodeB) {
        if (!this.bpsDisabled) {
            nodeA.checked = true;
            nodeB.checked = false;
            this.bpsDualValuesChange.emit(this.bpsDualValues);
        }
    }
    onKeyDown(e) {
        if (!this.bpsControl && !this.bpsDisabled && !this.bpsLoading) {
            if (e.keyCode === LEFT_ARROW) {
                this.updateValue(false);
                e.preventDefault();
            }
            else if (e.keyCode === RIGHT_ARROW) {
                this.updateValue(true);
                e.preventDefault();
            }
            else if (e.keyCode === SPACE || e.keyCode === ENTER) {
                this.updateValue(!this.isChecked);
                e.preventDefault();
            }
        }
    }
    writeValue(value) {
        this.isChecked = value;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this.bpsDisabled = (this.isNzDisableFirstChange && this.bpsDisabled) || disabled;
        this.isNzDisableFirstChange = false;
        this.cdr.markForCheck();
    }
    static { this.ɵfac = function BpsSwitchComponent_Factory(t) { return new (t || BpsSwitchComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.FocusMonitor), i0.ɵɵdirectiveInject(i3.Directionality, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsSwitchComponent, selectors: [["bps-switch"]], viewQuery: function BpsSwitchComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.switchElement = _t.first);
        } }, inputs: { bpsLoading: "bpsLoading", bpsDisabled: "bpsDisabled", bpsControl: "bpsControl", bpsCheckedChildren: "bpsCheckedChildren", bpsUnCheckedChildren: "bpsUnCheckedChildren", bpsSize: "bpsSize", bpsId: "bpsId", bpsDual: "bpsDual", bpsDualValues: "bpsDualValues" }, outputs: { bpsDualValuesChange: "bpsDualValuesChange" }, exportAs: ["bpsSwitch"], features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => BpsSwitchComponent),
                    multi: true
                }
            ])], decls: 2, vars: 2, consts: [["switchElement", ""], ["uncheckTemplate", ""], [4, "ngIf"], ["nz-wave", "", "type", "button", 1, "ant-switch", 3, "disabled", "nzWaveExtraNode"], [1, "ant-switch-handle"], ["nz-icon", "", "nzType", "loading", "class", "ant-switch-loading-icon", 4, "ngIf"], [1, "ant-switch-inner"], [4, "ngIf", "ngIfElse"], [1, "ant-click-animating-node"], ["nz-icon", "", "nzType", "loading", 1, "ant-switch-loading-icon"], [4, "nzStringTemplateOutlet"], ["type", "button", 1, "ant-switch", "bps-switch", 3, "keydown", "disabled"], [1, "bps-switch-inner"], [1, "bps-switch-node", "bps-switch-node-left", 3, "click"], [1, "bps-switch-node", "bps-switch-node-right", 3, "click"]], template: function BpsSwitchComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BpsSwitchComponent_ng_container_0_Template, 10, 16, "ng-container", 2)(1, BpsSwitchComponent_ng_container_1_Template, 4, 4, "ng-container", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.bpsDual);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.bpsDual);
        } }, dependencies: [i4.NgIf, i5.NzStringTemplateOutletDirective, i6.NzIconDirective, i7.NzWaveDirective], styles: [".ant-switch:after{background-color:#999!important;width:16px!important;height:16px!important;top:-3px;left:-1px!important}.ant-switch-handle:before{top:-5px;background-color:#999!important;width:16px!important;height:16px!important;left:0}.ant-switch:focus{box-shadow:none!important}.ant-switch{min-width:30px!important;height:12px!important;border-radius:100px!important;border:solid 1px #666666!important;background-color:#363636!important;background-image:none!important}.ant-switch-checked:not(.ant-switch-disabled) .ant-switch-handle:before{border:solid 1px #00a2d1!important;background-color:#00a2d1!important}.ant-switch-checked .ant-switch-handle:before{left:100%!important;margin-left:1px!important;transform:translate(calc(-100% + 2px))}.ant-switch:not(.ant-switch-checked) .ant-switch-handle:before{transform:translate(calc(-100% + 14px))}.ant-switch-checked{border:solid 1px #00a2d1!important}.ant-switch-disabled:after{background-color:#474747!important;border:1px solid #474747!important}.ant-switch-disabled{border:solid 1px #474747!important}.bps-switch{border:none!important;height:unset!important;border-radius:4px!important}.bps-switch-inner{background-color:#474747!important;border-radius:4px}.ant-switch-handle.bps-switch:after{content:\"\"!important;position:relative!important}.bps-switch-node{border-radius:4px;border:solid 1px #474747;padding:0 14px;background-color:#363636;margin:0;display:inline-block;font-size:11px;font-weight:400;font-stretch:normal;font-style:normal;letter-spacing:normal;text-align:center;color:#fff}.bps-switch-node:not(.bps-switch-checked):hover{background-color:#484848}.bps-switch-node-left{border-radius:4px 0 0 4px;border-right:none}.bps-switch-node-right{border-radius:0 4px 4px 0;border-left:none}.bps-switch-checked{border-radius:4px;border:solid 1px #00a2d1}.bps-switch-disabled .bps-switch-node{background-color:#363636!important;border-color:#474747!important;color:#666!important;cursor:not-allowed}.bps-switch-disabled .bps-switch-inner{background-color:#363636}\n", "bps-switch{display:inline-block}\n"], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], BpsSwitchComponent.prototype, "bpsLoading", void 0);
__decorate([
    InputBoolean()
], BpsSwitchComponent.prototype, "bpsDisabled", void 0);
__decorate([
    InputBoolean()
], BpsSwitchComponent.prototype, "bpsControl", void 0);
__decorate([
    WithConfig()
], BpsSwitchComponent.prototype, "bpsSize", void 0);
__decorate([
    InputBoolean()
], BpsSwitchComponent.prototype, "bpsDual", void 0);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsSwitchComponent, [{
        type: Component,
        args: [{ selector: 'bps-switch', exportAs: 'bpsSwitch', preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => BpsSwitchComponent),
                        multi: true
                    }
                ], template: `
<ng-container *ngIf="!bpsDual">
  <button
      nz-wave
      type="button"
      class="ant-switch"
      #switchElement
      [attr.id]="bpsId"
      [disabled]="bpsDisabled"
      [class.ant-switch-checked]="isChecked"
      [class.ant-switch-loading]="bpsLoading"
      [class.ant-switch-disabled]="bpsDisabled"
      [class.ant-switch-small]="bpsSize === 'small'"
      [class.ant-switch-rtl]="dir === 'rtl'"
      [nzWaveExtraNode]="true"
    >
      <span class="ant-switch-handle">
        <span *ngIf="bpsLoading" nz-icon nzType="loading" class="ant-switch-loading-icon"></span>
      </span>
      <span class="ant-switch-inner">
        <ng-container *ngIf="isChecked; else uncheckTemplate">
          <ng-container *nzStringTemplateOutlet="bpsCheckedChildren">{{ bpsCheckedChildren }}</ng-container>
        </ng-container>
        <ng-template #uncheckTemplate>
          <ng-container *nzStringTemplateOutlet="bpsUnCheckedChildren">{{ bpsUnCheckedChildren }}</ng-container>
        </ng-template>
      </span>
      <div class="ant-click-animating-node"></div>
    </button>
</ng-container>
<ng-container *ngIf="bpsDual">
  <button type="button" #switchElement
          class="ant-switch bps-switch"
          [disabled]="bpsDisabled"
          [class.bps-switch-disabled]="bpsDisabled"
          (keydown)="onKeyDown($event)">
    <ng-container *ngIf="bpsDualValues.length > 1">
      <div class="bps-switch-inner">
        <div class="bps-switch-node bps-switch-node-left"
             (click)="checkNode(bpsDualValues[0], bpsDualValues[1])"
             [class.bps-switch-checked]="bpsDualValues[0].checked">
          {{ bpsDualValues[0].title }}
        </div>
        <div class="bps-switch-node bps-switch-node-right"
             (click)="checkNode(bpsDualValues[1], bpsDualValues[0])"
             [class.bps-switch-checked]="bpsDualValues[1].checked">
          {{ bpsDualValues[1].title }}
        </div>
      </div>  
    </ng-container>
  </button>
</ng-container>
  `, styles: [".ant-switch:after{background-color:#999!important;width:16px!important;height:16px!important;top:-3px;left:-1px!important}.ant-switch-handle:before{top:-5px;background-color:#999!important;width:16px!important;height:16px!important;left:0}.ant-switch:focus{box-shadow:none!important}.ant-switch{min-width:30px!important;height:12px!important;border-radius:100px!important;border:solid 1px #666666!important;background-color:#363636!important;background-image:none!important}.ant-switch-checked:not(.ant-switch-disabled) .ant-switch-handle:before{border:solid 1px #00a2d1!important;background-color:#00a2d1!important}.ant-switch-checked .ant-switch-handle:before{left:100%!important;margin-left:1px!important;transform:translate(calc(-100% + 2px))}.ant-switch:not(.ant-switch-checked) .ant-switch-handle:before{transform:translate(calc(-100% + 14px))}.ant-switch-checked{border:solid 1px #00a2d1!important}.ant-switch-disabled:after{background-color:#474747!important;border:1px solid #474747!important}.ant-switch-disabled{border:solid 1px #474747!important}.bps-switch{border:none!important;height:unset!important;border-radius:4px!important}.bps-switch-inner{background-color:#474747!important;border-radius:4px}.ant-switch-handle.bps-switch:after{content:\"\"!important;position:relative!important}.bps-switch-node{border-radius:4px;border:solid 1px #474747;padding:0 14px;background-color:#363636;margin:0;display:inline-block;font-size:11px;font-weight:400;font-stretch:normal;font-style:normal;letter-spacing:normal;text-align:center;color:#fff}.bps-switch-node:not(.bps-switch-checked):hover{background-color:#484848}.bps-switch-node-left{border-radius:4px 0 0 4px;border-right:none}.bps-switch-node-right{border-radius:0 4px 4px 0;border-left:none}.bps-switch-checked{border-radius:4px;border:solid 1px #00a2d1}.bps-switch-disabled .bps-switch-node{background-color:#363636!important;border-color:#474747!important;color:#666!important;cursor:not-allowed}.bps-switch-disabled .bps-switch-inner{background-color:#363636}\n", "bps-switch{display:inline-block}\n"] }]
    }], () => [{ type: i1.NzConfigService }, { type: i0.ElementRef }, { type: i0.NgZone }, { type: i0.ChangeDetectorRef }, { type: i2.FocusMonitor }, { type: i3.Directionality, decorators: [{
                type: Optional
            }] }], { switchElement: [{
            type: ViewChild,
            args: ['switchElement', { static: true }]
        }], bpsLoading: [{
            type: Input
        }], bpsDisabled: [{
            type: Input
        }], bpsControl: [{
            type: Input
        }], bpsCheckedChildren: [{
            type: Input
        }], bpsUnCheckedChildren: [{
            type: Input
        }], bpsSize: [{
            type: Input
        }], bpsId: [{
            type: Input
        }], bpsDual: [{
            type: Input
        }], bpsDualValues: [{
            type: Input
        }], bpsDualValuesChange: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsSwitchComponent, { className: "BpsSwitchComponent", filePath: "lib\\components\\bps-switch\\bps-switch.component.ts", lineNumber: 107 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXN3aXRjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1zd2l0Y2gvYnBzLXN3aXRjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQWdDLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXJGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7SUEwQy9DLDBCQUF5Rjs7O0lBSXZGLDZCQUEyRDtJQUFBLFlBQXdCOzs7O0lBQXhCLGNBQXdCO0lBQXhCLCtDQUF3Qjs7O0lBRHJGLDZCQUFzRDtJQUNwRCxvSEFBMkQ7Ozs7SUFBNUMsY0FBMEM7SUFBMUMsa0VBQTBDOzs7SUFHekQsNkJBQTZEO0lBQUEsWUFBMEI7Ozs7SUFBMUIsY0FBMEI7SUFBMUIsaURBQTBCOzs7SUFBdkYsbUhBQTZEOzs7SUFBOUMsb0VBQTRDOzs7SUF2QnJFLDZCQUErQjtJQWV6QixBQWRKLG9DQWFHLGNBQ2lDO0lBQzlCLG9GQUFrRjtJQUNw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QUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBRW1CLE9BQU87a0JBQS9CLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0ksbUJBQW1CO2tCQUE1QixNQUFNOztrRkFyQkksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xyXG5pbXBvcnQgeyBFTlRFUiwgTEVGVF9BUlJPVywgUklHSFRfQVJST1csIFNQQUNFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTnpDb25maWdLZXksIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xyXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE56U2l6ZURTVHlwZSwgT25DaGFuZ2VUeXBlLCBPblRvdWNoZWRUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX01PRFVMRV9OQU1FOiBOekNvbmZpZ0tleSA9ICdzd2l0Y2gnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicHMtc3dpdGNoJyxcclxuICBleHBvcnRBczogJ2Jwc1N3aXRjaCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJwc1N3aXRjaENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICBzdHlsZVVybHM6IFsnLi9icHMtc3dpdGNoLmNvbXBvbmVudC5jc3MnXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgYnBzLXN3aXRjaCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICB0ZW1wbGF0ZTogYFxyXG48bmctY29udGFpbmVyICpuZ0lmPVwiIWJwc0R1YWxcIj5cclxuICA8YnV0dG9uXHJcbiAgICAgIG56LXdhdmVcclxuICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgIGNsYXNzPVwiYW50LXN3aXRjaFwiXHJcbiAgICAgICNzd2l0Y2hFbGVtZW50XHJcbiAgICAgIFthdHRyLmlkXT1cImJwc0lkXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImJwc0Rpc2FibGVkXCJcclxuICAgICAgW2NsYXNzLmFudC1zd2l0Y2gtY2hlY2tlZF09XCJpc0NoZWNrZWRcIlxyXG4gICAgICBbY2xhc3MuYW50LXN3aXRjaC1sb2FkaW5nXT1cImJwc0xvYWRpbmdcIlxyXG4gICAgICBbY2xhc3MuYW50LXN3aXRjaC1kaXNhYmxlZF09XCJicHNEaXNhYmxlZFwiXHJcbiAgICAgIFtjbGFzcy5hbnQtc3dpdGNoLXNtYWxsXT1cImJwc1NpemUgPT09ICdzbWFsbCdcIlxyXG4gICAgICBbY2xhc3MuYW50LXN3aXRjaC1ydGxdPVwiZGlyID09PSAncnRsJ1wiXHJcbiAgICAgIFtueldhdmVFeHRyYU5vZGVdPVwidHJ1ZVwiXHJcbiAgICA+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXN3aXRjaC1oYW5kbGVcIj5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cImJwc0xvYWRpbmdcIiBuei1pY29uIG56VHlwZT1cImxvYWRpbmdcIiBjbGFzcz1cImFudC1zd2l0Y2gtbG9hZGluZy1pY29uXCI+PC9zcGFuPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXN3aXRjaC1pbm5lclwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0NoZWNrZWQ7IGVsc2UgdW5jaGVja1RlbXBsYXRlXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiYnBzQ2hlY2tlZENoaWxkcmVuXCI+e3sgYnBzQ2hlY2tlZENoaWxkcmVuIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICN1bmNoZWNrVGVtcGxhdGU+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiYnBzVW5DaGVja2VkQ2hpbGRyZW5cIj57eyBicHNVbkNoZWNrZWRDaGlsZHJlbiB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1jbGljay1hbmltYXRpbmctbm9kZVwiPjwvZGl2PlxyXG4gICAgPC9idXR0b24+XHJcbjwvbmctY29udGFpbmVyPlxyXG48bmctY29udGFpbmVyICpuZ0lmPVwiYnBzRHVhbFwiPlxyXG4gIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICNzd2l0Y2hFbGVtZW50XHJcbiAgICAgICAgICBjbGFzcz1cImFudC1zd2l0Y2ggYnBzLXN3aXRjaFwiXHJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiYnBzRGlzYWJsZWRcIlxyXG4gICAgICAgICAgW2NsYXNzLmJwcy1zd2l0Y2gtZGlzYWJsZWRdPVwiYnBzRGlzYWJsZWRcIlxyXG4gICAgICAgICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJicHNEdWFsVmFsdWVzLmxlbmd0aCA+IDFcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImJwcy1zd2l0Y2gtaW5uZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnBzLXN3aXRjaC1ub2RlIGJwcy1zd2l0Y2gtbm9kZS1sZWZ0XCJcclxuICAgICAgICAgICAgIChjbGljayk9XCJjaGVja05vZGUoYnBzRHVhbFZhbHVlc1swXSwgYnBzRHVhbFZhbHVlc1sxXSlcIlxyXG4gICAgICAgICAgICAgW2NsYXNzLmJwcy1zd2l0Y2gtY2hlY2tlZF09XCJicHNEdWFsVmFsdWVzWzBdLmNoZWNrZWRcIj5cclxuICAgICAgICAgIHt7IGJwc0R1YWxWYWx1ZXNbMF0udGl0bGUgfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnBzLXN3aXRjaC1ub2RlIGJwcy1zd2l0Y2gtbm9kZS1yaWdodFwiXHJcbiAgICAgICAgICAgICAoY2xpY2spPVwiY2hlY2tOb2RlKGJwc0R1YWxWYWx1ZXNbMV0sIGJwc0R1YWxWYWx1ZXNbMF0pXCJcclxuICAgICAgICAgICAgIFtjbGFzcy5icHMtc3dpdGNoLWNoZWNrZWRdPVwiYnBzRHVhbFZhbHVlc1sxXS5jaGVja2VkXCI+XHJcbiAgICAgICAgICB7eyBicHNEdWFsVmFsdWVzWzFdLnRpdGxlIH19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PiAgXHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICA8L2J1dHRvbj5cclxuPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzU3dpdGNoQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25Jbml0IHtcclxuICByZWFkb25seSBfbnpNb2R1bGVOYW1lOiBOekNvbmZpZ0tleSA9IE5aX0NPTkZJR19NT0RVTEVfTkFNRTtcclxuXHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc0xvYWRpbmc6IEJvb2xlYW5JbnB1dDtcclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYnBzRGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYnBzQ29udHJvbDogQm9vbGVhbklucHV0O1xyXG5cclxuICBpc0NoZWNrZWQgPSBmYWxzZTtcclxuICBvbkNoYW5nZTogT25DaGFuZ2VUeXBlID0gKCkgPT4geyB9O1xyXG4gIG9uVG91Y2hlZDogT25Ub3VjaGVkVHlwZSA9ICgpID0+IHsgfTtcclxuICBAVmlld0NoaWxkKCdzd2l0Y2hFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgc3dpdGNoRWxlbWVudCE6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0NvbnRyb2wgPSBmYWxzZTtcclxuICBASW5wdXQoKSBicHNDaGVja2VkQ2hpbGRyZW46IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgYnBzVW5DaGVja2VkQ2hpbGRyZW46IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBicHNTaXplOiBOelNpemVEU1R5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgYnBzSWQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzRHVhbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGJwc0R1YWxWYWx1ZXM6IHsgdGl0bGU6IHN0cmluZzsgY2hlY2tlZDogYm9vbGVhbiB9W10gPSBbXTtcclxuICBAT3V0cHV0KCkgYnBzRHVhbFZhbHVlc0NoYW5nZTogRXZlbnRFbWl0dGVyPHsgdGl0bGU6IHN0cmluZzsgY2hlY2tlZDogYm9vbGVhbiB9W10+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIGlzTnpEaXNhYmxlRmlyc3RDaGFuZ2UgPSB0cnVlO1xyXG5cclxuICB1cGRhdGVWYWx1ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNDaGVja2VkICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLmlzQ2hlY2tlZCA9IHZhbHVlO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuaXNDaGVja2VkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5zd2l0Y2hFbGVtZW50Py5uYXRpdmVFbGVtZW50LCAna2V5Ym9hcmQnKTtcclxuICB9XHJcblxyXG4gIGJsdXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN3aXRjaEVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGhvc3Q6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcclxuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcclxuXHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGZyb21FdmVudCh0aGlzLmhvc3QubmF0aXZlRWxlbWVudCwgJ2NsaWNrJylcclxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgIGlmICh0aGlzLmJwc0NvbnRyb2wgfHwgdGhpcy5icHNEaXNhYmxlZCB8fCB0aGlzLmJwc0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoIXRoaXMuaXNDaGVja2VkKTtcclxuICAgICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnN3aXRjaEVsZW1lbnQgPT09IG51bGwgfHwgdGhpcy5zd2l0Y2hFbGVtZW50ID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgZnJvbUV2ZW50PEtleWJvYXJkRXZlbnQ+KHRoaXMuc3dpdGNoRWxlbWVudD8ubmF0aXZlRWxlbWVudCwgJ2tleWRvd24nKVxyXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLmJwc0NvbnRyb2wgfHwgdGhpcy5icHNEaXNhYmxlZCB8fCB0aGlzLmJwc0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XHJcbiAgICAgICAgICBpZiAoa2V5Q29kZSAhPT0gTEVGVF9BUlJPVyAmJiBrZXlDb2RlICE9PSBSSUdIVF9BUlJPVyAmJiBrZXlDb2RlICE9PSBTUEFDRSAmJiBrZXlDb2RlICE9PSBFTlRFUikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoa2V5Q29kZSA9PT0gTEVGVF9BUlJPVykge1xyXG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IFJJR0hUX0FSUk9XKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBTUEFDRSB8fCBrZXlDb2RlID09PSBFTlRFUikge1xyXG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoIXRoaXMuaXNDaGVja2VkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc3dpdGNoRWxlbWVudCA9PT0gbnVsbCB8fCB0aGlzLnN3aXRjaEVsZW1lbnQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgdGhpcy5mb2N1c01vbml0b3JcclxuICAgICAgLm1vbml0b3IodGhpcy5zd2l0Y2hFbGVtZW50Py5uYXRpdmVFbGVtZW50LCB0cnVlKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoZm9jdXNPcmlnaW4gPT4ge1xyXG4gICAgICAgIGlmICghZm9jdXNPcmlnaW4pIHtcclxuICAgICAgICAgIC8qKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNzc5MyAqKi9cclxuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5vblRvdWNoZWQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5zd2l0Y2hFbGVtZW50Py5uYXRpdmVFbGVtZW50KTtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tOb2RlKG5vZGVBOiB7IHRpdGxlOiBzdHJpbmc7IGNoZWNrZWQ6IGJvb2xlYW4gfSwgbm9kZUI6IHsgdGl0bGU6IHN0cmluZzsgY2hlY2tlZDogYm9vbGVhbiB9KSB7XHJcbiAgICBpZiAoIXRoaXMuYnBzRGlzYWJsZWQpIHtcclxuICAgICAgbm9kZUEuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIG5vZGVCLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5icHNEdWFsVmFsdWVzQ2hhbmdlLmVtaXQodGhpcy5icHNEdWFsVmFsdWVzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuYnBzQ29udHJvbCAmJiAhdGhpcy5icHNEaXNhYmxlZCAmJiAhdGhpcy5icHNMb2FkaW5nKSB7XHJcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IExFRlRfQVJST1cpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKGZhbHNlKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBSSUdIVF9BUlJPVykge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUodHJ1ZSk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gU1BBQ0UgfHwgZS5rZXlDb2RlID09PSBFTlRFUikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoIXRoaXMuaXNDaGVja2VkKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuaXNDaGVja2VkID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IE9uQ2hhbmdlVHlwZSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IE9uVG91Y2hlZFR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmJwc0Rpc2FibGVkID0gKHRoaXMuaXNOekRpc2FibGVGaXJzdENoYW5nZSAmJiB0aGlzLmJwc0Rpc2FibGVkKSB8fCBkaXNhYmxlZDtcclxuICAgIHRoaXMuaXNOekRpc2FibGVGaXJzdENoYW5nZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==