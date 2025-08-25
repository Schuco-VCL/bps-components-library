import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ContentChildren, Directive, Input, Optional, ViewEncapsulation } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { distinctUntilChanged, map, mergeMap, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { NzFormNoStatusService } from 'ng-zorro-antd/core/form';
import { getStatusClassNames, InputBoolean } from 'ng-zorro-antd/core/util';
import { BpsInputDirective } from './bps-input.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "ng-zorro-antd/core/form";
import * as i4 from "@angular/common";
import * as i5 from "./input-group-slot.component";
import * as i6 from "../core/form/feedback";
export class NzInputGroupWhitSuffixOrPrefixDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzInputGroupWhitSuffixOrPrefixDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: NzInputGroupWhitSuffixOrPrefixDirective, selector: "bps-input-group[bpsSuffix], bps-input-group[bpsPrefix]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzInputGroupWhitSuffixOrPrefixDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: `bps-input-group[bpsSuffix], bps-input-group[bpsPrefix]`
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; } });
export class BpsInputGroupComponent {
    constructor(focusMonitor, elementRef, renderer, cdr, directionality, nzFormStatusService, nzFormNoStatusService) {
        this.focusMonitor = focusMonitor;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cdr = cdr;
        this.directionality = directionality;
        this.nzFormStatusService = nzFormStatusService;
        this.nzFormNoStatusService = nzFormNoStatusService;
        this.bpsAddOnBeforeIcon = null;
        this.bpsAddOnAfterIcon = null;
        this.bpsPrefixIcon = null;
        this.bpsSuffixIcon = null;
        this.bpsStatus = '';
        this.bpsSize = 'default';
        this.bpsSearch = false;
        this.bpsCompact = false;
        this.isLarge = false;
        this.isSmall = false;
        this.isAffix = false;
        this.isAddOn = false;
        this.isFeedback = false;
        this.focused = false;
        this.disabled = false;
        this.dir = 'ltr';
        // status
        this.prefixCls = 'ant-input';
        this.affixStatusCls = {};
        this.groupStatusCls = {};
        this.affixInGroupStatusCls = {};
        this.status = '';
        this.hasFeedback = false;
        this.destroy$ = new Subject();
    }
    updateChildrenInputSize() {
        if (this.listOfNzInputDirective) {
            this.listOfNzInputDirective.forEach(item => (item.size = this.bpsSize));
        }
    }
    ngOnInit() {
        this.nzFormStatusService?.formStatusChanges
            .pipe(distinctUntilChanged((pre, cur) => {
            return pre.status === cur.status && pre.hasFeedback === cur.hasFeedback;
        }), takeUntil(this.destroy$))
            .subscribe(({ status, hasFeedback }) => {
            this.setStatusStyles(status, hasFeedback);
        });
        this.focusMonitor
            .monitor(this.elementRef, true)
            .pipe(takeUntil(this.destroy$))
            .subscribe(focusOrigin => {
            this.focused = !!focusOrigin;
            this.cdr.markForCheck();
        });
        this.dir = this.directionality.value;
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngAfterContentInit() {
        this.updateChildrenInputSize();
        const listOfInputChange$ = this.listOfNzInputDirective.changes.pipe(startWith(this.listOfNzInputDirective));
        listOfInputChange$
            .pipe(switchMap(list => merge(...[listOfInputChange$, ...list.map((input) => input.disabled$)])), mergeMap(() => listOfInputChange$), map(list => list.some((input) => input.disabled)), takeUntil(this.destroy$))
            .subscribe(disabled => {
            this.disabled = disabled;
            this.cdr.markForCheck();
        });
    }
    ngOnChanges(changes) {
        const { bpsSize, bpsSuffix, bpsPrefix, bpsPrefixIcon, bpsSuffixIcon, bpsAddOnAfter, bpsAddOnBefore, bpsAddOnAfterIcon, bpsAddOnBeforeIcon, bpsStatus } = changes;
        if (bpsSize) {
            this.updateChildrenInputSize();
            this.isLarge = this.bpsSize === 'large';
            this.isSmall = this.bpsSize === 'small';
        }
        if (bpsSuffix || bpsPrefix || bpsPrefixIcon || bpsSuffixIcon) {
            this.isAffix = !!(this.bpsSuffix || this.bpsPrefix || this.bpsPrefixIcon || this.bpsSuffixIcon);
        }
        if (bpsAddOnAfter || bpsAddOnBefore || bpsAddOnAfterIcon || bpsAddOnBeforeIcon) {
            this.isAddOn = !!(this.bpsAddOnAfter || this.bpsAddOnBefore || this.bpsAddOnAfterIcon || this.bpsAddOnBeforeIcon);
            this.nzFormNoStatusService?.noFormStatus?.next(this.isAddOn);
        }
        if (bpsStatus) {
            this.setStatusStyles(this.bpsStatus, this.hasFeedback);
        }
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
        this.destroy$.next();
        this.destroy$.complete();
    }
    setStatusStyles(status, hasFeedback) {
        // set inner status
        this.status = status;
        this.hasFeedback = hasFeedback;
        this.isFeedback = !!status && hasFeedback;
        const baseAffix = !!(this.bpsSuffix || this.bpsPrefix || this.bpsPrefixIcon || this.bpsSuffixIcon);
        this.isAffix = baseAffix || (!this.isAddOn && hasFeedback);
        this.affixInGroupStatusCls =
            this.isAffix || this.isFeedback
                ? (this.affixStatusCls = getStatusClassNames(`${this.prefixCls}-affix-wrapper`, status, hasFeedback))
                : {};
        this.cdr.markForCheck();
        // render status if nzStatus is set
        this.affixStatusCls = getStatusClassNames(`${this.prefixCls}-affix-wrapper`, this.isAddOn ? '' : status, this.isAddOn ? false : hasFeedback);
        this.groupStatusCls = getStatusClassNames(`${this.prefixCls}-group-wrapper`, this.isAddOn ? status : '', this.isAddOn ? hasFeedback : false);
        const statusCls = {
            ...this.affixStatusCls,
            ...this.groupStatusCls
        };
        Object.keys(statusCls).forEach(status => {
            if (statusCls[status]) {
                this.renderer.addClass(this.elementRef.nativeElement, status);
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, status);
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsInputGroupComponent, deps: [{ token: i1.FocusMonitor }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }, { token: i2.Directionality, optional: true }, { token: i3.NzFormStatusService, optional: true }, { token: i3.NzFormNoStatusService, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsInputGroupComponent, selector: "bps-input-group", inputs: { bpsAddOnBeforeIcon: "bpsAddOnBeforeIcon", bpsAddOnAfterIcon: "bpsAddOnAfterIcon", bpsPrefixIcon: "bpsPrefixIcon", bpsSuffixIcon: "bpsSuffixIcon", bpsAddOnBefore: "bpsAddOnBefore", bpsAddOnAfter: "bpsAddOnAfter", bpsPrefix: "bpsPrefix", bpsStatus: "bpsStatus", bpsSuffix: "bpsSuffix", bpsSize: "bpsSize", bpsSearch: "bpsSearch", bpsCompact: "bpsCompact" }, host: { properties: { "class.ant-input-group-compact": "bpsCompact", "class.ant-input-search-enter-button": "bpsSearch", "class.ant-input-search": "bpsSearch", "class.ant-input-search-rtl": "dir === 'rtl'", "class.ant-input-search-sm": "bpsSearch && isSmall", "class.ant-input-search-large": "bpsSearch && isLarge", "class.ant-input-group-wrapper": "isAddOn", "class.ant-input-group-wrapper-rtl": "dir === 'rtl'", "class.ant-input-group-wrapper-lg": "isAddOn && isLarge", "class.ant-input-group-wrapper-sm": "isAddOn && isSmall", "class.ant-input-affix-wrapper": "isAffix && !isAddOn", "class.ant-input-affix-wrapper-rtl": "dir === 'rtl'", "class.ant-input-affix-wrapper-focused": "isAffix && focused", "class.ant-input-affix-wrapper-disabled": "isAffix && disabled", "class.ant-input-affix-wrapper-lg": "isAffix && !isAddOn && isLarge", "class.ant-input-affix-wrapper-sm": "isAffix && !isAddOn && isSmall", "class.ant-input-group": "!isAffix && !isAddOn", "class.ant-input-group-rtl": "dir === 'rtl'", "class.ant-input-group-lg": "!isAffix && !isAddOn && isLarge", "class.ant-input-group-sm": "!isAffix && !isAddOn && isSmall" } }, providers: [NzFormNoStatusService], queries: [{ propertyName: "listOfNzInputDirective", predicate: BpsInputDirective }], exportAs: ["bpsInputGroup"], usesOnChanges: true, ngImport: i0, template: `
    <span class="ant-input-wrapper ant-input-group" *ngIf="isAddOn; else noAddOnTemplate">
      <span
        *ngIf="bpsAddOnBefore || bpsAddOnBeforeIcon"
        bps-input-group-slot
        type="addon"
        [icon]="bpsAddOnBeforeIcon"
        [template]="bpsAddOnBefore"
      ></span>
      <span
        *ngIf="isAffix || hasFeedback; else contentTemplate"
        class="ant-input-affix-wrapper"
        [class.ant-input-affix-wrapper-disabled]="disabled"
        [class.ant-input-affix-wrapper-sm]="isSmall"
        [class.ant-input-affix-wrapper-lg]="isLarge"
        [class.ant-input-affix-wrapper-focused]="focused"
        [ngClass]="affixInGroupStatusCls"
      >
        <ng-template [ngTemplateOutlet]="affixTemplate"></ng-template>
      </span>
      <span
        *ngIf="bpsAddOnAfter || bpsAddOnAfterIcon"
        bps-input-group-slot
        type="addon"
        [icon]="bpsAddOnAfterIcon"
        [template]="bpsAddOnAfter"
      ></span>
    </span>
    <ng-template #noAddOnTemplate>
      <ng-template [ngIf]="isAffix" [ngIfElse]="contentTemplate">
        <ng-template [ngTemplateOutlet]="affixTemplate"></ng-template>
      </ng-template>
    </ng-template>
    <ng-template #affixTemplate>
      <span
        *ngIf="bpsPrefix || bpsPrefixIcon"
        bps-input-group-slot
        type="prefix"
        [icon]="bpsPrefixIcon"
        [template]="bpsPrefix"
      ></span>
      <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
      <span
        *ngIf="bpsSuffix || bpsSuffixIcon || isFeedback"
        bps-input-group-slot
        type="suffix"
        [icon]="bpsSuffixIcon"
        [template]="bpsSuffix"
      >
        <bps-form-item-feedback-icon *ngIf="isFeedback" [status]="status"></bps-form-item-feedback-icon>
      </span>
    </ng-template>
    <ng-template #contentTemplate>
      <ng-content></ng-content>
      <span *ngIf="!isAddOn && !isAffix && isFeedback" bps-input-group-slot type="suffix">
        <bps-form-item-feedback-icon [status]="status"></bps-form-item-feedback-icon>
      </span>
    </ng-template>
  `, isInline: true, dependencies: [{ kind: "directive", type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i5.BpsInputGroupSlotComponent, selector: "[bps-input-group-slot]", inputs: ["icon", "type", "template"] }, { kind: "component", type: i6.BpsFormItemFeedbackIconComponent, selector: "bps-form-item-feedback-icon", inputs: ["status"], exportAs: ["bpsFormFeedbackIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], BpsInputGroupComponent.prototype, "bpsSearch", void 0);
__decorate([
    InputBoolean()
], BpsInputGroupComponent.prototype, "bpsCompact", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsInputGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bps-input-group',
                    exportAs: 'bpsInputGroup',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [NzFormNoStatusService],
                    template: `
    <span class="ant-input-wrapper ant-input-group" *ngIf="isAddOn; else noAddOnTemplate">
      <span
        *ngIf="bpsAddOnBefore || bpsAddOnBeforeIcon"
        bps-input-group-slot
        type="addon"
        [icon]="bpsAddOnBeforeIcon"
        [template]="bpsAddOnBefore"
      ></span>
      <span
        *ngIf="isAffix || hasFeedback; else contentTemplate"
        class="ant-input-affix-wrapper"
        [class.ant-input-affix-wrapper-disabled]="disabled"
        [class.ant-input-affix-wrapper-sm]="isSmall"
        [class.ant-input-affix-wrapper-lg]="isLarge"
        [class.ant-input-affix-wrapper-focused]="focused"
        [ngClass]="affixInGroupStatusCls"
      >
        <ng-template [ngTemplateOutlet]="affixTemplate"></ng-template>
      </span>
      <span
        *ngIf="bpsAddOnAfter || bpsAddOnAfterIcon"
        bps-input-group-slot
        type="addon"
        [icon]="bpsAddOnAfterIcon"
        [template]="bpsAddOnAfter"
      ></span>
    </span>
    <ng-template #noAddOnTemplate>
      <ng-template [ngIf]="isAffix" [ngIfElse]="contentTemplate">
        <ng-template [ngTemplateOutlet]="affixTemplate"></ng-template>
      </ng-template>
    </ng-template>
    <ng-template #affixTemplate>
      <span
        *ngIf="bpsPrefix || bpsPrefixIcon"
        bps-input-group-slot
        type="prefix"
        [icon]="bpsPrefixIcon"
        [template]="bpsPrefix"
      ></span>
      <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
      <span
        *ngIf="bpsSuffix || bpsSuffixIcon || isFeedback"
        bps-input-group-slot
        type="suffix"
        [icon]="bpsSuffixIcon"
        [template]="bpsSuffix"
      >
        <bps-form-item-feedback-icon *ngIf="isFeedback" [status]="status"></bps-form-item-feedback-icon>
      </span>
    </ng-template>
    <ng-template #contentTemplate>
      <ng-content></ng-content>
      <span *ngIf="!isAddOn && !isAffix && isFeedback" bps-input-group-slot type="suffix">
        <bps-form-item-feedback-icon [status]="status"></bps-form-item-feedback-icon>
      </span>
    </ng-template>
  `,
                    host: {
                        '[class.ant-input-group-compact]': `bpsCompact`,
                        '[class.ant-input-search-enter-button]': `bpsSearch`,
                        '[class.ant-input-search]': `bpsSearch`,
                        '[class.ant-input-search-rtl]': `dir === 'rtl'`,
                        '[class.ant-input-search-sm]': `bpsSearch && isSmall`,
                        '[class.ant-input-search-large]': `bpsSearch && isLarge`,
                        '[class.ant-input-group-wrapper]': `isAddOn`,
                        '[class.ant-input-group-wrapper-rtl]': `dir === 'rtl'`,
                        '[class.ant-input-group-wrapper-lg]': `isAddOn && isLarge`,
                        '[class.ant-input-group-wrapper-sm]': `isAddOn && isSmall`,
                        '[class.ant-input-affix-wrapper]': `isAffix && !isAddOn`,
                        '[class.ant-input-affix-wrapper-rtl]': `dir === 'rtl'`,
                        '[class.ant-input-affix-wrapper-focused]': `isAffix && focused`,
                        '[class.ant-input-affix-wrapper-disabled]': `isAffix && disabled`,
                        '[class.ant-input-affix-wrapper-lg]': `isAffix && !isAddOn && isLarge`,
                        '[class.ant-input-affix-wrapper-sm]': `isAffix && !isAddOn && isSmall`,
                        '[class.ant-input-group]': `!isAffix && !isAddOn`,
                        '[class.ant-input-group-rtl]': `dir === 'rtl'`,
                        '[class.ant-input-group-lg]': `!isAffix && !isAddOn && isLarge`,
                        '[class.ant-input-group-sm]': `!isAffix && !isAddOn && isSmall`
                    }
                }]
        }], ctorParameters: function () { return [{ type: i1.FocusMonitor }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i2.Directionality, decorators: [{
                    type: Optional
                }] }, { type: i3.NzFormStatusService, decorators: [{
                    type: Optional
                }] }, { type: i3.NzFormNoStatusService, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { listOfNzInputDirective: [{
                type: ContentChildren,
                args: [BpsInputDirective]
            }], bpsAddOnBeforeIcon: [{
                type: Input
            }], bpsAddOnAfterIcon: [{
                type: Input
            }], bpsPrefixIcon: [{
                type: Input
            }], bpsSuffixIcon: [{
                type: Input
            }], bpsAddOnBefore: [{
                type: Input
            }], bpsAddOnAfter: [{
                type: Input
            }], bpsPrefix: [{
                type: Input
            }], bpsStatus: [{
                type: Input
            }], bpsSuffix: [{
                type: Input
            }], bpsSize: [{
                type: Input
            }], bpsSearch: [{
                type: Input
            }], bpsCompact: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWlucHV0LWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWlucHV0L2Jwcy1pbnB1dC1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULGVBQWUsRUFDZixTQUFTLEVBRVQsS0FBSyxFQUlMLFFBQVEsRUFLUixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RyxPQUFPLEVBQUUscUJBQXFCLEVBQXVCLE1BQU0seUJBQXlCLENBQUM7QUFFckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7OztBQUsxRCxNQUFNLE9BQU8sdUNBQXVDO0lBQ2xELFlBQW1CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBSSxDQUFDOytHQURuQyx1Q0FBdUM7bUdBQXZDLHVDQUF1Qzs7NEZBQXZDLHVDQUF1QztrQkFIbkQsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsd0RBQXdEO2lCQUNuRTs7QUE4RkQsTUFBTSxPQUFPLHNCQUFzQjtJQWtDakMsWUFDVSxZQUEwQixFQUMxQixVQUFzQixFQUN0QixRQUFtQixFQUNuQixHQUFzQixFQUNWLGNBQThCLEVBQzlCLG1CQUF5QyxFQUN6QyxxQkFBNkM7UUFO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QVM7c0JBQWpCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNtQixTQUFTO3NCQUFqQyxLQUFLO2dCQUNtQixVQUFVO3NCQUFsQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgbWVyZ2VNYXAsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOekZvcm1Ob1N0YXR1c1NlcnZpY2UsIE56Rm9ybVN0YXR1c1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvZm9ybSc7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTmdDbGFzc0ludGVyZmFjZSwgTnpTaXplTERTVHlwZSwgTnpTdGF0dXMsIE56VmFsaWRhdGVTdGF0dXMgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBnZXRTdGF0dXNDbGFzc05hbWVzLCBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBCcHNJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vYnBzLWlucHV0LmRpcmVjdGl2ZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogYGJwcy1pbnB1dC1ncm91cFticHNTdWZmaXhdLCBicHMtaW5wdXQtZ3JvdXBbYnBzUHJlZml4XWBcclxufSlcclxuZXhwb3J0IGNsYXNzIE56SW5wdXRHcm91cFdoaXRTdWZmaXhPclByZWZpeERpcmVjdGl2ZSB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jwcy1pbnB1dC1ncm91cCcsXHJcbiAgZXhwb3J0QXM6ICdicHNJbnB1dEdyb3VwJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW056Rm9ybU5vU3RhdHVzU2VydmljZV0sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuIGNsYXNzPVwiYW50LWlucHV0LXdyYXBwZXIgYW50LWlucHV0LWdyb3VwXCIgKm5nSWY9XCJpc0FkZE9uOyBlbHNlIG5vQWRkT25UZW1wbGF0ZVwiPlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgICpuZ0lmPVwiYnBzQWRkT25CZWZvcmUgfHwgYnBzQWRkT25CZWZvcmVJY29uXCJcclxuICAgICAgICBicHMtaW5wdXQtZ3JvdXAtc2xvdFxyXG4gICAgICAgIHR5cGU9XCJhZGRvblwiXHJcbiAgICAgICAgW2ljb25dPVwiYnBzQWRkT25CZWZvcmVJY29uXCJcclxuICAgICAgICBbdGVtcGxhdGVdPVwiYnBzQWRkT25CZWZvcmVcIlxyXG4gICAgICA+PC9zcGFuPlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgICpuZ0lmPVwiaXNBZmZpeCB8fCBoYXNGZWVkYmFjazsgZWxzZSBjb250ZW50VGVtcGxhdGVcIlxyXG4gICAgICAgIGNsYXNzPVwiYW50LWlucHV0LWFmZml4LXdyYXBwZXJcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlci1kaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLXNtXT1cImlzU21hbGxcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlci1sZ109XCJpc0xhcmdlXCJcclxuICAgICAgICBbY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXItZm9jdXNlZF09XCJmb2N1c2VkXCJcclxuICAgICAgICBbbmdDbGFzc109XCJhZmZpeEluR3JvdXBTdGF0dXNDbHNcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImFmZml4VGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgKm5nSWY9XCJicHNBZGRPbkFmdGVyIHx8IGJwc0FkZE9uQWZ0ZXJJY29uXCJcclxuICAgICAgICBicHMtaW5wdXQtZ3JvdXAtc2xvdFxyXG4gICAgICAgIHR5cGU9XCJhZGRvblwiXHJcbiAgICAgICAgW2ljb25dPVwiYnBzQWRkT25BZnRlckljb25cIlxyXG4gICAgICAgIFt0ZW1wbGF0ZV09XCJicHNBZGRPbkFmdGVyXCJcclxuICAgICAgPjwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxuZy10ZW1wbGF0ZSAjbm9BZGRPblRlbXBsYXRlPlxyXG4gICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiaXNBZmZpeFwiIFtuZ0lmRWxzZV09XCJjb250ZW50VGVtcGxhdGVcIj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYWZmaXhUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPG5nLXRlbXBsYXRlICNhZmZpeFRlbXBsYXRlPlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgICpuZ0lmPVwiYnBzUHJlZml4IHx8IGJwc1ByZWZpeEljb25cIlxyXG4gICAgICAgIGJwcy1pbnB1dC1ncm91cC1zbG90XHJcbiAgICAgICAgdHlwZT1cInByZWZpeFwiXHJcbiAgICAgICAgW2ljb25dPVwiYnBzUHJlZml4SWNvblwiXHJcbiAgICAgICAgW3RlbXBsYXRlXT1cImJwc1ByZWZpeFwiXHJcbiAgICAgID48L3NwYW4+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50VGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgICpuZ0lmPVwiYnBzU3VmZml4IHx8IGJwc1N1ZmZpeEljb24gfHwgaXNGZWVkYmFja1wiXHJcbiAgICAgICAgYnBzLWlucHV0LWdyb3VwLXNsb3RcclxuICAgICAgICB0eXBlPVwic3VmZml4XCJcclxuICAgICAgICBbaWNvbl09XCJicHNTdWZmaXhJY29uXCJcclxuICAgICAgICBbdGVtcGxhdGVdPVwiYnBzU3VmZml4XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxicHMtZm9ybS1pdGVtLWZlZWRiYWNrLWljb24gKm5nSWY9XCJpc0ZlZWRiYWNrXCIgW3N0YXR1c109XCJzdGF0dXNcIj48L2Jwcy1mb3JtLWl0ZW0tZmVlZGJhY2staWNvbj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjY29udGVudFRlbXBsYXRlPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDxzcGFuICpuZ0lmPVwiIWlzQWRkT24gJiYgIWlzQWZmaXggJiYgaXNGZWVkYmFja1wiIGJwcy1pbnB1dC1ncm91cC1zbG90IHR5cGU9XCJzdWZmaXhcIj5cclxuICAgICAgICA8YnBzLWZvcm0taXRlbS1mZWVkYmFjay1pY29uIFtzdGF0dXNdPVwic3RhdHVzXCI+PC9icHMtZm9ybS1pdGVtLWZlZWRiYWNrLWljb24+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgYCxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC1jb21wYWN0XSc6IGBicHNDb21wYWN0YCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaC1lbnRlci1idXR0b25dJzogYGJwc1NlYXJjaGAsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zZWFyY2hdJzogYGJwc1NlYXJjaGAsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zZWFyY2gtcnRsXSc6IGBkaXIgPT09ICdydGwnYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaC1zbV0nOiBgYnBzU2VhcmNoICYmIGlzU21hbGxgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc2VhcmNoLWxhcmdlXSc6IGBicHNTZWFyY2ggJiYgaXNMYXJnZWAsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC13cmFwcGVyXSc6IGBpc0FkZE9uYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXdyYXBwZXItcnRsXSc6IGBkaXIgPT09ICdydGwnYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXdyYXBwZXItbGddJzogYGlzQWRkT24gJiYgaXNMYXJnZWAsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC13cmFwcGVyLXNtXSc6IGBpc0FkZE9uICYmIGlzU21hbGxgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlcl0nOiBgaXNBZmZpeCAmJiAhaXNBZGRPbmAsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLXJ0bF0nOiBgZGlyID09PSAncnRsJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLWZvY3VzZWRdJzogYGlzQWZmaXggJiYgZm9jdXNlZGAsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLWRpc2FibGVkXSc6IGBpc0FmZml4ICYmIGRpc2FibGVkYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXItbGddJzogYGlzQWZmaXggJiYgIWlzQWRkT24gJiYgaXNMYXJnZWAsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLXNtXSc6IGBpc0FmZml4ICYmICFpc0FkZE9uICYmIGlzU21hbGxgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXBdJzogYCFpc0FmZml4ICYmICFpc0FkZE9uYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwLXJ0bF0nOiBgZGlyID09PSAncnRsJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC1sZ10nOiBgIWlzQWZmaXggJiYgIWlzQWRkT24gJiYgaXNMYXJnZWAsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC1zbV0nOiBgIWlzQWZmaXggJiYgIWlzQWRkT24gJiYgaXNTbWFsbGBcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNJbnB1dEdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc1NlYXJjaDogQm9vbGVhbklucHV0O1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNDb21wYWN0OiBCb29sZWFuSW5wdXQ7XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oQnBzSW5wdXREaXJlY3RpdmUpIGxpc3RPZk56SW5wdXREaXJlY3RpdmUhOiBRdWVyeUxpc3Q8QnBzSW5wdXREaXJlY3RpdmU+O1xyXG4gIEBJbnB1dCgpIGJwc0FkZE9uQmVmb3JlSWNvbj86IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGJwc0FkZE9uQWZ0ZXJJY29uPzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgYnBzUHJlZml4SWNvbj86IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGJwc1N1ZmZpeEljb24/OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBicHNBZGRPbkJlZm9yZT86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGJwc0FkZE9uQWZ0ZXI/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBicHNQcmVmaXg/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBicHNTdGF0dXM6IE56U3RhdHVzID0gJyc7XHJcbiAgQElucHV0KCkgYnBzU3VmZml4Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgYnBzU2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzU2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0NvbXBhY3QgPSBmYWxzZTtcclxuICBpc0xhcmdlID0gZmFsc2U7XHJcbiAgaXNTbWFsbCA9IGZhbHNlO1xyXG4gIGlzQWZmaXggPSBmYWxzZTtcclxuICBpc0FkZE9uID0gZmFsc2U7XHJcbiAgaXNGZWVkYmFjayA9IGZhbHNlO1xyXG4gIGZvY3VzZWQgPSBmYWxzZTtcclxuICBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XHJcbiAgLy8gc3RhdHVzXHJcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWlucHV0JztcclxuICBhZmZpeFN0YXR1c0NsczogTmdDbGFzc0ludGVyZmFjZSA9IHt9O1xyXG4gIGdyb3VwU3RhdHVzQ2xzOiBOZ0NsYXNzSW50ZXJmYWNlID0ge307XHJcbiAgYWZmaXhJbkdyb3VwU3RhdHVzQ2xzOiBOZ0NsYXNzSW50ZXJmYWNlID0ge307XHJcbiAgc3RhdHVzOiBOelZhbGlkYXRlU3RhdHVzID0gJyc7XHJcbiAgaGFzRmVlZGJhY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIG56Rm9ybVN0YXR1c1NlcnZpY2U/OiBOekZvcm1TdGF0dXNTZXJ2aWNlLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuekZvcm1Ob1N0YXR1c1NlcnZpY2U/OiBOekZvcm1Ob1N0YXR1c1NlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICB1cGRhdGVDaGlsZHJlbklucHV0U2l6ZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmxpc3RPZk56SW5wdXREaXJlY3RpdmUpIHtcclxuICAgICAgdGhpcy5saXN0T2ZOeklucHV0RGlyZWN0aXZlLmZvckVhY2goaXRlbSA9PiAoaXRlbS5zaXplID0gdGhpcy5icHNTaXplKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpGb3JtU3RhdHVzU2VydmljZT8uZm9ybVN0YXR1c0NoYW5nZXNcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKHByZSwgY3VyKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gcHJlLnN0YXR1cyA9PT0gY3VyLnN0YXR1cyAmJiBwcmUuaGFzRmVlZGJhY2sgPT09IGN1ci5oYXNGZWVkYmFjaztcclxuICAgICAgICB9KSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCh7IHN0YXR1cywgaGFzRmVlZGJhY2sgfSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdHVzU3R5bGVzKHN0YXR1cywgaGFzRmVlZGJhY2spO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvclxyXG4gICAgICAubW9uaXRvcih0aGlzLmVsZW1lbnRSZWYsIHRydWUpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZShmb2N1c09yaWdpbiA9PiB7XHJcbiAgICAgICAgdGhpcy5mb2N1c2VkID0gISFmb2N1c09yaWdpbjtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xyXG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuSW5wdXRTaXplKCk7XHJcbiAgICBjb25zdCBsaXN0T2ZJbnB1dENoYW5nZSQgPSB0aGlzLmxpc3RPZk56SW5wdXREaXJlY3RpdmUuY2hhbmdlcy5waXBlKHN0YXJ0V2l0aCh0aGlzLmxpc3RPZk56SW5wdXREaXJlY3RpdmUpKTtcclxuICAgIGxpc3RPZklucHV0Q2hhbmdlJFxyXG4gICAgICAucGlwZShcclxuICAgICAgICBzd2l0Y2hNYXAobGlzdCA9PiBtZXJnZSguLi5bbGlzdE9mSW5wdXRDaGFuZ2UkLCAuLi5saXN0Lm1hcCgoaW5wdXQ6IEJwc0lucHV0RGlyZWN0aXZlKSA9PiBpbnB1dC5kaXNhYmxlZCQpXSkpLFxyXG4gICAgICAgIG1lcmdlTWFwKCgpID0+IGxpc3RPZklucHV0Q2hhbmdlJCksXHJcbiAgICAgICAgbWFwKGxpc3QgPT4gbGlzdC5zb21lKChpbnB1dDogQnBzSW5wdXREaXJlY3RpdmUpID0+IGlucHV0LmRpc2FibGVkKSksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZShkaXNhYmxlZCA9PiB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBicHNTaXplLFxyXG4gICAgICBicHNTdWZmaXgsXHJcbiAgICAgIGJwc1ByZWZpeCxcclxuICAgICAgYnBzUHJlZml4SWNvbixcclxuICAgICAgYnBzU3VmZml4SWNvbixcclxuICAgICAgYnBzQWRkT25BZnRlcixcclxuICAgICAgYnBzQWRkT25CZWZvcmUsXHJcbiAgICAgIGJwc0FkZE9uQWZ0ZXJJY29uLFxyXG4gICAgICBicHNBZGRPbkJlZm9yZUljb24sXHJcbiAgICAgIGJwc1N0YXR1c1xyXG4gICAgfSA9IGNoYW5nZXM7XHJcbiAgICBpZiAoYnBzU2l6ZSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuSW5wdXRTaXplKCk7XHJcbiAgICAgIHRoaXMuaXNMYXJnZSA9IHRoaXMuYnBzU2l6ZSA9PT0gJ2xhcmdlJztcclxuICAgICAgdGhpcy5pc1NtYWxsID0gdGhpcy5icHNTaXplID09PSAnc21hbGwnO1xyXG4gICAgfVxyXG4gICAgaWYgKGJwc1N1ZmZpeCB8fCBicHNQcmVmaXggfHwgYnBzUHJlZml4SWNvbiB8fCBicHNTdWZmaXhJY29uKSB7XHJcbiAgICAgIHRoaXMuaXNBZmZpeCA9ICEhKHRoaXMuYnBzU3VmZml4IHx8IHRoaXMuYnBzUHJlZml4IHx8IHRoaXMuYnBzUHJlZml4SWNvbiB8fCB0aGlzLmJwc1N1ZmZpeEljb24pO1xyXG4gICAgfVxyXG4gICAgaWYgKGJwc0FkZE9uQWZ0ZXIgfHwgYnBzQWRkT25CZWZvcmUgfHwgYnBzQWRkT25BZnRlckljb24gfHwgYnBzQWRkT25CZWZvcmVJY29uKSB7XHJcbiAgICAgIHRoaXMuaXNBZGRPbiA9ICEhKHRoaXMuYnBzQWRkT25BZnRlciB8fCB0aGlzLmJwc0FkZE9uQmVmb3JlIHx8IHRoaXMuYnBzQWRkT25BZnRlckljb24gfHwgdGhpcy5icHNBZGRPbkJlZm9yZUljb24pO1xyXG4gICAgICB0aGlzLm56Rm9ybU5vU3RhdHVzU2VydmljZT8ubm9Gb3JtU3RhdHVzPy5uZXh0KHRoaXMuaXNBZGRPbik7XHJcbiAgICB9XHJcbiAgICBpZiAoYnBzU3RhdHVzKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdHVzU3R5bGVzKHRoaXMuYnBzU3RhdHVzLCB0aGlzLmhhc0ZlZWRiYWNrKTtcclxuICAgIH1cclxuICB9XHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLmVsZW1lbnRSZWYpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFN0YXR1c1N0eWxlcyhzdGF0dXM6IE56VmFsaWRhdGVTdGF0dXMsIGhhc0ZlZWRiYWNrOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAvLyBzZXQgaW5uZXIgc3RhdHVzXHJcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuICAgIHRoaXMuaGFzRmVlZGJhY2sgPSBoYXNGZWVkYmFjaztcclxuICAgIHRoaXMuaXNGZWVkYmFjayA9ICEhc3RhdHVzICYmIGhhc0ZlZWRiYWNrO1xyXG4gICAgY29uc3QgYmFzZUFmZml4ID0gISEodGhpcy5icHNTdWZmaXggfHwgdGhpcy5icHNQcmVmaXggfHwgdGhpcy5icHNQcmVmaXhJY29uIHx8IHRoaXMuYnBzU3VmZml4SWNvbik7XHJcbiAgICB0aGlzLmlzQWZmaXggPSBiYXNlQWZmaXggfHwgKCF0aGlzLmlzQWRkT24gJiYgaGFzRmVlZGJhY2spO1xyXG4gICAgdGhpcy5hZmZpeEluR3JvdXBTdGF0dXNDbHMgPVxyXG4gICAgICB0aGlzLmlzQWZmaXggfHwgdGhpcy5pc0ZlZWRiYWNrXHJcbiAgICAgICAgPyAodGhpcy5hZmZpeFN0YXR1c0NscyA9IGdldFN0YXR1c0NsYXNzTmFtZXMoYCR7dGhpcy5wcmVmaXhDbHN9LWFmZml4LXdyYXBwZXJgLCBzdGF0dXMsIGhhc0ZlZWRiYWNrKSlcclxuICAgICAgICA6IHt9O1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAvLyByZW5kZXIgc3RhdHVzIGlmIG56U3RhdHVzIGlzIHNldFxyXG4gICAgdGhpcy5hZmZpeFN0YXR1c0NscyA9IGdldFN0YXR1c0NsYXNzTmFtZXMoXHJcbiAgICAgIGAke3RoaXMucHJlZml4Q2xzfS1hZmZpeC13cmFwcGVyYCxcclxuICAgICAgdGhpcy5pc0FkZE9uID8gJycgOiBzdGF0dXMsXHJcbiAgICAgIHRoaXMuaXNBZGRPbiA/IGZhbHNlIDogaGFzRmVlZGJhY2tcclxuICAgICk7XHJcbiAgICB0aGlzLmdyb3VwU3RhdHVzQ2xzID0gZ2V0U3RhdHVzQ2xhc3NOYW1lcyhcclxuICAgICAgYCR7dGhpcy5wcmVmaXhDbHN9LWdyb3VwLXdyYXBwZXJgLFxyXG4gICAgICB0aGlzLmlzQWRkT24gPyBzdGF0dXMgOiAnJyxcclxuICAgICAgdGhpcy5pc0FkZE9uID8gaGFzRmVlZGJhY2sgOiBmYWxzZVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHN0YXR1c0NscyA9IHtcclxuICAgICAgLi4udGhpcy5hZmZpeFN0YXR1c0NscyxcclxuICAgICAgLi4udGhpcy5ncm91cFN0YXR1c0Nsc1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5rZXlzKHN0YXR1c0NscykuZm9yRWFjaChzdGF0dXMgPT4ge1xyXG4gICAgICBpZiAoc3RhdHVzQ2xzW3N0YXR1c10pIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBzdGF0dXMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHN0YXR1cyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=