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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsSwitchComponent, deps: [{ token: i1.NzConfigService }, { token: i0.ElementRef }, { token: i0.NgZone }, { token: i0.ChangeDetectorRef }, { token: i2.FocusMonitor }, { token: i3.Directionality, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BpsSwitchComponent, selector: "bps-switch", inputs: { bpsLoading: "bpsLoading", bpsDisabled: "bpsDisabled", bpsControl: "bpsControl", bpsCheckedChildren: "bpsCheckedChildren", bpsUnCheckedChildren: "bpsUnCheckedChildren", bpsSize: "bpsSize", bpsId: "bpsId", bpsDual: "bpsDual", bpsDualValues: "bpsDualValues" }, outputs: { bpsDualValuesChange: "bpsDualValuesChange" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => BpsSwitchComponent),
                multi: true
            }
        ], viewQueries: [{ propertyName: "switchElement", first: true, predicate: ["switchElement"], descendants: true, static: true }], exportAs: ["bpsSwitch"], ngImport: i0, template: `
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
  `, isInline: true, styles: [".ant-switch:after{background-color:#999!important;width:16px!important;height:16px!important;top:-3px;left:-1px!important}.ant-switch-handle:before{top:-5px;background-color:#999!important;width:16px!important;height:16px!important;left:0}.ant-switch:focus{box-shadow:none!important}.ant-switch{min-width:30px!important;height:12px!important;border-radius:100px!important;border:solid 1px #666666!important;background-color:#363636!important;background-image:none!important}.ant-switch-checked:not(.ant-switch-disabled) .ant-switch-handle:before{border:solid 1px #00a2d1!important;background-color:#00a2d1!important}.ant-switch-checked .ant-switch-handle:before{left:100%!important;margin-left:1px!important;transform:translate(calc(-100% + 2px))}.ant-switch:not(.ant-switch-checked) .ant-switch-handle:before{transform:translate(calc(-100% + 14px))}.ant-switch-checked{border:solid 1px #00a2d1!important}.ant-switch-disabled:after{background-color:#474747!important;border:1px solid #474747!important}.ant-switch-disabled{border:solid 1px #474747!important}.bps-switch{border:none!important;height:unset!important;border-radius:4px!important}.bps-switch-inner{background-color:#474747!important;border-radius:4px}.ant-switch-handle.bps-switch:after{content:\"\"!important;position:relative!important}.bps-switch-node{border-radius:4px;border:solid 1px #474747;padding:0 14px;background-color:#363636;margin:0;display:inline-block;font-size:11px;font-weight:400;font-stretch:normal;font-style:normal;letter-spacing:normal;text-align:center;color:#fff}.bps-switch-node:not(.bps-switch-checked):hover{background-color:#484848}.bps-switch-node-left{border-radius:4px 0 0 4px;border-right:none}.bps-switch-node-right{border-radius:0 4px 4px 0;border-left:none}.bps-switch-checked{border-radius:4px;border:solid 1px #00a2d1}.bps-switch-disabled .bps-switch-node{background-color:#363636!important;border-color:#474747!important;color:#666!important;cursor:not-allowed}.bps-switch-disabled .bps-switch-inner{background-color:#363636}\n", "bps-switch{display:inline-block}\n"], dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i5.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: i6.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i7.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsSwitchComponent, decorators: [{
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
        }], ctorParameters: () => [{ type: i1.NzConfigService }, { type: i0.ElementRef }, { type: i0.NgZone }, { type: i0.ChangeDetectorRef }, { type: i2.FocusMonitor }, { type: i3.Directionality, decorators: [{
                    type: Optional
                }] }], propDecorators: { switchElement: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXN3aXRjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1zd2l0Y2gvYnBzLXN3aXRjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQWdDLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXJGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7O0FBRXZELE1BQU0scUJBQXFCLEdBQWdCLFFBQVEsQ0FBQztBQTZFcEQsTUFBTSxPQUFPLGtCQUFrQjtJQTRCN0IsV0FBVyxDQUFDLEtBQWM7UUFDeEIsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7SUFDSCxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxZQUFZLENB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L0IsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNJLG1CQUFtQjtzQkFBNUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuaW1wb3J0IHsgRU5URVIsIExFRlRfQVJST1csIFJJR0hUX0FSUk9XLCBTUEFDRSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE56Q29uZmlnS2V5LCBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcclxuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBOelNpemVEU1R5cGUsIE9uQ2hhbmdlVHlwZSwgT25Ub3VjaGVkVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19NT0RVTEVfTkFNRTogTnpDb25maWdLZXkgPSAnc3dpdGNoJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnBzLXN3aXRjaCcsXHJcbiAgZXhwb3J0QXM6ICdicHNTd2l0Y2gnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCcHNTd2l0Y2hDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnBzLXN3aXRjaC5jb21wb25lbnQuY3NzJ10sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIGJwcy1zd2l0Y2gge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF0sXHJcbiAgdGVtcGxhdGU6IGBcclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFicHNEdWFsXCI+XHJcbiAgPGJ1dHRvblxyXG4gICAgICBuei13YXZlXHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICBjbGFzcz1cImFudC1zd2l0Y2hcIlxyXG4gICAgICAjc3dpdGNoRWxlbWVudFxyXG4gICAgICBbYXR0ci5pZF09XCJicHNJZFwiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJicHNEaXNhYmxlZFwiXHJcbiAgICAgIFtjbGFzcy5hbnQtc3dpdGNoLWNoZWNrZWRdPVwiaXNDaGVja2VkXCJcclxuICAgICAgW2NsYXNzLmFudC1zd2l0Y2gtbG9hZGluZ109XCJicHNMb2FkaW5nXCJcclxuICAgICAgW2NsYXNzLmFudC1zd2l0Y2gtZGlzYWJsZWRdPVwiYnBzRGlzYWJsZWRcIlxyXG4gICAgICBbY2xhc3MuYW50LXN3aXRjaC1zbWFsbF09XCJicHNTaXplID09PSAnc21hbGwnXCJcclxuICAgICAgW2NsYXNzLmFudC1zd2l0Y2gtcnRsXT1cImRpciA9PT0gJ3J0bCdcIlxyXG4gICAgICBbbnpXYXZlRXh0cmFOb2RlXT1cInRydWVcIlxyXG4gICAgPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImFudC1zd2l0Y2gtaGFuZGxlXCI+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJicHNMb2FkaW5nXCIgbnotaWNvbiBuelR5cGU9XCJsb2FkaW5nXCIgY2xhc3M9XCJhbnQtc3dpdGNoLWxvYWRpbmctaWNvblwiPjwvc3Bhbj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImFudC1zd2l0Y2gtaW5uZXJcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNDaGVja2VkOyBlbHNlIHVuY2hlY2tUZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImJwc0NoZWNrZWRDaGlsZHJlblwiPnt7IGJwc0NoZWNrZWRDaGlsZHJlbiB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjdW5jaGVja1RlbXBsYXRlPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImJwc1VuQ2hlY2tlZENoaWxkcmVuXCI+e3sgYnBzVW5DaGVja2VkQ2hpbGRyZW4gfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtY2xpY2stYW5pbWF0aW5nLW5vZGVcIj48L2Rpdj5cclxuICAgIDwvYnV0dG9uPlxyXG48L25nLWNvbnRhaW5lcj5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImJwc0R1YWxcIj5cclxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAjc3dpdGNoRWxlbWVudFxyXG4gICAgICAgICAgY2xhc3M9XCJhbnQtc3dpdGNoIGJwcy1zd2l0Y2hcIlxyXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImJwc0Rpc2FibGVkXCJcclxuICAgICAgICAgIFtjbGFzcy5icHMtc3dpdGNoLWRpc2FibGVkXT1cImJwc0Rpc2FibGVkXCJcclxuICAgICAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiYnBzRHVhbFZhbHVlcy5sZW5ndGggPiAxXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJicHMtc3dpdGNoLWlubmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJwcy1zd2l0Y2gtbm9kZSBicHMtc3dpdGNoLW5vZGUtbGVmdFwiXHJcbiAgICAgICAgICAgICAoY2xpY2spPVwiY2hlY2tOb2RlKGJwc0R1YWxWYWx1ZXNbMF0sIGJwc0R1YWxWYWx1ZXNbMV0pXCJcclxuICAgICAgICAgICAgIFtjbGFzcy5icHMtc3dpdGNoLWNoZWNrZWRdPVwiYnBzRHVhbFZhbHVlc1swXS5jaGVja2VkXCI+XHJcbiAgICAgICAgICB7eyBicHNEdWFsVmFsdWVzWzBdLnRpdGxlIH19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJwcy1zd2l0Y2gtbm9kZSBicHMtc3dpdGNoLW5vZGUtcmlnaHRcIlxyXG4gICAgICAgICAgICAgKGNsaWNrKT1cImNoZWNrTm9kZShicHNEdWFsVmFsdWVzWzFdLCBicHNEdWFsVmFsdWVzWzBdKVwiXHJcbiAgICAgICAgICAgICBbY2xhc3MuYnBzLXN3aXRjaC1jaGVja2VkXT1cImJwc0R1YWxWYWx1ZXNbMV0uY2hlY2tlZFwiPlxyXG4gICAgICAgICAge3sgYnBzRHVhbFZhbHVlc1sxXS50aXRsZSB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gIFxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9idXR0b24+XHJcbjwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc1N3aXRjaENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcbiAgcmVhZG9ubHkgX256TW9kdWxlTmFtZTogTnpDb25maWdLZXkgPSBOWl9DT05GSUdfTU9EVUxFX05BTUU7XHJcblxyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNMb2FkaW5nOiBCb29sZWFuSW5wdXQ7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc0Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc0NvbnRyb2w6IEJvb2xlYW5JbnB1dDtcclxuXHJcbiAgaXNDaGVja2VkID0gZmFsc2U7XHJcbiAgb25DaGFuZ2U6IE9uQ2hhbmdlVHlwZSA9ICgpID0+IHsgfTtcclxuICBvblRvdWNoZWQ6IE9uVG91Y2hlZFR5cGUgPSAoKSA9PiB7IH07XHJcbiAgQFZpZXdDaGlsZCgnc3dpdGNoRWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pIHN3aXRjaEVsZW1lbnQhOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzTG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNDb250cm9sID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYnBzQ2hlY2tlZENoaWxkcmVuOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGJwc1VuQ2hlY2tlZENoaWxkcmVuOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgYnBzU2l6ZTogTnpTaXplRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIGJwc0lkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0R1YWwgPSBmYWxzZTtcclxuICBASW5wdXQoKSBicHNEdWFsVmFsdWVzOiB7IHRpdGxlOiBzdHJpbmc7IGNoZWNrZWQ6IGJvb2xlYW4gfVtdID0gW107XHJcbiAgQE91dHB1dCgpIGJwc0R1YWxWYWx1ZXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IHRpdGxlOiBzdHJpbmc7IGNoZWNrZWQ6IGJvb2xlYW4gfVtdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSBpc056RGlzYWJsZUZpcnN0Q2hhbmdlID0gdHJ1ZTtcclxuXHJcbiAgdXBkYXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzQ2hlY2tlZCAhPT0gdmFsdWUpIHtcclxuICAgICAgdGhpcy5pc0NoZWNrZWQgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLmlzQ2hlY2tlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb2N1cygpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLmZvY3VzVmlhKHRoaXMuc3dpdGNoRWxlbWVudD8ubmF0aXZlRWxlbWVudCwgJ2tleWJvYXJkJyk7XHJcbiAgfVxyXG5cclxuICBibHVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zd2l0Y2hFbGVtZW50Py5uYXRpdmVFbGVtZW50LmJsdXIoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBob3N0OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHlcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XHJcblxyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBmcm9tRXZlbnQodGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQsICdjbGljaycpXHJcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICBpZiAodGhpcy5icHNDb250cm9sIHx8IHRoaXMuYnBzRGlzYWJsZWQgfHwgdGhpcy5icHNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKCF0aGlzLmlzQ2hlY2tlZCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5zd2l0Y2hFbGVtZW50ID09PSBudWxsIHx8IHRoaXMuc3dpdGNoRWxlbWVudCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgIGZyb21FdmVudDxLZXlib2FyZEV2ZW50Pih0aGlzLnN3aXRjaEVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQsICdrZXlkb3duJylcclxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5icHNDb250cm9sIHx8IHRoaXMuYnBzRGlzYWJsZWQgfHwgdGhpcy5icHNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xyXG4gICAgICAgICAgaWYgKGtleUNvZGUgIT09IExFRlRfQVJST1cgJiYga2V5Q29kZSAhPT0gUklHSFRfQVJST1cgJiYga2V5Q29kZSAhPT0gU1BBQ0UgJiYga2V5Q29kZSAhPT0gRU5URVIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGtleUNvZGUgPT09IExFRlRfQVJST1cpIHtcclxuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBSSUdIVF9BUlJPVykge1xyXG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gU1BBQ0UgfHwga2V5Q29kZSA9PT0gRU5URVIpIHtcclxuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKCF0aGlzLmlzQ2hlY2tlZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnN3aXRjaEVsZW1lbnQgPT09IG51bGwgfHwgdGhpcy5zd2l0Y2hFbGVtZW50ID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yXHJcbiAgICAgIC5tb25pdG9yKHRoaXMuc3dpdGNoRWxlbWVudD8ubmF0aXZlRWxlbWVudCwgdHJ1ZSlcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKGZvY3VzT3JpZ2luID0+IHtcclxuICAgICAgICBpZiAoIWZvY3VzT3JpZ2luKSB7XHJcbiAgICAgICAgICAvKiogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTc3OTMgKiovXHJcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMub25Ub3VjaGVkKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuc3dpdGNoRWxlbWVudD8ubmF0aXZlRWxlbWVudCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIGNoZWNrTm9kZShub2RlQTogeyB0aXRsZTogc3RyaW5nOyBjaGVja2VkOiBib29sZWFuIH0sIG5vZGVCOiB7IHRpdGxlOiBzdHJpbmc7IGNoZWNrZWQ6IGJvb2xlYW4gfSkge1xyXG4gICAgaWYgKCF0aGlzLmJwc0Rpc2FibGVkKSB7XHJcbiAgICAgIG5vZGVBLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICBub2RlQi5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuYnBzRHVhbFZhbHVlc0NoYW5nZS5lbWl0KHRoaXMuYnBzRHVhbFZhbHVlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmJwc0NvbnRyb2wgJiYgIXRoaXMuYnBzRGlzYWJsZWQgJiYgIXRoaXMuYnBzTG9hZGluZykge1xyXG4gICAgICBpZiAoZS5rZXlDb2RlID09PSBMRUZUX0FSUk9XKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShmYWxzZSk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gUklHSFRfQVJST1cpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRydWUpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IFNQQUNFIHx8IGUua2V5Q29kZSA9PT0gRU5URVIpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKCF0aGlzLmlzQ2hlY2tlZCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzQ2hlY2tlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBPbkNoYW5nZVR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBPblRvdWNoZWRUeXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5icHNEaXNhYmxlZCA9ICh0aGlzLmlzTnpEaXNhYmxlRmlyc3RDaGFuZ2UgJiYgdGhpcy5icHNEaXNhYmxlZCkgfHwgZGlzYWJsZWQ7XHJcbiAgICB0aGlzLmlzTnpEaXNhYmxlRmlyc3RDaGFuZ2UgPSBmYWxzZTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxufVxyXG4iXX0=