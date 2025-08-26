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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NzInputGroupWhitSuffixOrPrefixDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: NzInputGroupWhitSuffixOrPrefixDirective, selector: "bps-input-group[bpsSuffix], bps-input-group[bpsPrefix]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NzInputGroupWhitSuffixOrPrefixDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: `bps-input-group[bpsSuffix], bps-input-group[bpsPrefix]`
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsInputGroupComponent, deps: [{ token: i1.FocusMonitor }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }, { token: i2.Directionality, optional: true }, { token: i3.NzFormStatusService, optional: true }, { token: i3.NzFormNoStatusService, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BpsInputGroupComponent, selector: "bps-input-group", inputs: { bpsAddOnBeforeIcon: "bpsAddOnBeforeIcon", bpsAddOnAfterIcon: "bpsAddOnAfterIcon", bpsPrefixIcon: "bpsPrefixIcon", bpsSuffixIcon: "bpsSuffixIcon", bpsAddOnBefore: "bpsAddOnBefore", bpsAddOnAfter: "bpsAddOnAfter", bpsPrefix: "bpsPrefix", bpsStatus: "bpsStatus", bpsSuffix: "bpsSuffix", bpsSize: "bpsSize", bpsSearch: "bpsSearch", bpsCompact: "bpsCompact" }, host: { properties: { "class.ant-input-group-compact": "bpsCompact", "class.ant-input-search-enter-button": "bpsSearch", "class.ant-input-search": "bpsSearch", "class.ant-input-search-rtl": "dir === 'rtl'", "class.ant-input-search-sm": "bpsSearch && isSmall", "class.ant-input-search-large": "bpsSearch && isLarge", "class.ant-input-group-wrapper": "isAddOn", "class.ant-input-group-wrapper-rtl": "dir === 'rtl'", "class.ant-input-group-wrapper-lg": "isAddOn && isLarge", "class.ant-input-group-wrapper-sm": "isAddOn && isSmall", "class.ant-input-affix-wrapper": "isAffix && !isAddOn", "class.ant-input-affix-wrapper-rtl": "dir === 'rtl'", "class.ant-input-affix-wrapper-focused": "isAffix && focused", "class.ant-input-affix-wrapper-disabled": "isAffix && disabled", "class.ant-input-affix-wrapper-lg": "isAffix && !isAddOn && isLarge", "class.ant-input-affix-wrapper-sm": "isAffix && !isAddOn && isSmall", "class.ant-input-group": "!isAffix && !isAddOn", "class.ant-input-group-rtl": "dir === 'rtl'", "class.ant-input-group-lg": "!isAffix && !isAddOn && isLarge", "class.ant-input-group-sm": "!isAffix && !isAddOn && isSmall" } }, providers: [NzFormNoStatusService], queries: [{ propertyName: "listOfNzInputDirective", predicate: BpsInputDirective }], exportAs: ["bpsInputGroup"], usesOnChanges: true, ngImport: i0, template: `
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsInputGroupComponent, decorators: [{
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
        }], ctorParameters: () => [{ type: i1.FocusMonitor }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i2.Directionality, decorators: [{
                    type: Optional
                }] }, { type: i3.NzFormStatusService, decorators: [{
                    type: Optional
                }] }, { type: i3.NzFormNoStatusService, decorators: [{
                    type: Optional
                }] }], propDecorators: { listOfNzInputDirective: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWlucHV0LWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWlucHV0L2Jwcy1pbnB1dC1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULGVBQWUsRUFDZixTQUFTLEVBRVQsS0FBSyxFQUlMLFFBQVEsRUFLUixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RyxPQUFPLEVBQUUscUJBQXFCLEVBQXVCLE1BQU0seUJBQXlCLENBQUM7QUFFckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7OztBQUsxRCxNQUFNLE9BQU8sdUNBQXVDO0lBQ2xELFlBQW1CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBSSxDQUFDOytHQURuQyx1Q0FBdUM7bUdBQXZDLHVDQUF1Qzs7NEZBQXZDLHVDQUF1QztrQkFIbkQsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsd0RBQXdEO2lCQUNuRTs7QUE4RkQsTUFBTSxPQUFPLHNCQUFzQjtJQWtDakMsWUFDVSxZQUEwQixFQUMxQixVQUFzQixFQUN0QixRQUFtQixFQUNuQixHQUFzQixFQUNWLGNBQThCLEVBQzlCLG1CQUF5QyxFQUN6QyxxQkFBNkM7UUFO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QUFhO3NCQUFyQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDbUIsU0FBUztzQkFBakMsS0FBSztnQkFDbUIsVUFBVTtzQkFBbEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIG1lcmdlTWFwLCBzdGFydFdpdGgsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTnpGb3JtTm9TdGF0dXNTZXJ2aWNlLCBOekZvcm1TdGF0dXNTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2Zvcm0nO1xyXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE5nQ2xhc3NJbnRlcmZhY2UsIE56U2l6ZUxEU1R5cGUsIE56U3RhdHVzLCBOelZhbGlkYXRlU3RhdHVzIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgZ2V0U3RhdHVzQ2xhc3NOYW1lcywgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgQnBzSW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL2Jwcy1pbnB1dC5kaXJlY3RpdmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IGBicHMtaW5wdXQtZ3JvdXBbYnBzU3VmZml4XSwgYnBzLWlucHV0LWdyb3VwW2Jwc1ByZWZpeF1gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOeklucHV0R3JvdXBXaGl0U3VmZml4T3JQcmVmaXhEaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicHMtaW5wdXQtZ3JvdXAnLFxyXG4gIGV4cG9ydEFzOiAnYnBzSW5wdXRHcm91cCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtOekZvcm1Ob1N0YXR1c1NlcnZpY2VdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8c3BhbiBjbGFzcz1cImFudC1pbnB1dC13cmFwcGVyIGFudC1pbnB1dC1ncm91cFwiICpuZ0lmPVwiaXNBZGRPbjsgZWxzZSBub0FkZE9uVGVtcGxhdGVcIj5cclxuICAgICAgPHNwYW5cclxuICAgICAgICAqbmdJZj1cImJwc0FkZE9uQmVmb3JlIHx8IGJwc0FkZE9uQmVmb3JlSWNvblwiXHJcbiAgICAgICAgYnBzLWlucHV0LWdyb3VwLXNsb3RcclxuICAgICAgICB0eXBlPVwiYWRkb25cIlxyXG4gICAgICAgIFtpY29uXT1cImJwc0FkZE9uQmVmb3JlSWNvblwiXHJcbiAgICAgICAgW3RlbXBsYXRlXT1cImJwc0FkZE9uQmVmb3JlXCJcclxuICAgICAgPjwvc3Bhbj5cclxuICAgICAgPHNwYW5cclxuICAgICAgICAqbmdJZj1cImlzQWZmaXggfHwgaGFzRmVlZGJhY2s7IGVsc2UgY29udGVudFRlbXBsYXRlXCJcclxuICAgICAgICBjbGFzcz1cImFudC1pbnB1dC1hZmZpeC13cmFwcGVyXCJcclxuICAgICAgICBbY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXItZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlci1zbV09XCJpc1NtYWxsXCJcclxuICAgICAgICBbY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXItbGddPVwiaXNMYXJnZVwiXHJcbiAgICAgICAgW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLWZvY3VzZWRdPVwiZm9jdXNlZFwiXHJcbiAgICAgICAgW25nQ2xhc3NdPVwiYWZmaXhJbkdyb3VwU3RhdHVzQ2xzXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJhZmZpeFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgICpuZ0lmPVwiYnBzQWRkT25BZnRlciB8fCBicHNBZGRPbkFmdGVySWNvblwiXHJcbiAgICAgICAgYnBzLWlucHV0LWdyb3VwLXNsb3RcclxuICAgICAgICB0eXBlPVwiYWRkb25cIlxyXG4gICAgICAgIFtpY29uXT1cImJwc0FkZE9uQWZ0ZXJJY29uXCJcclxuICAgICAgICBbdGVtcGxhdGVdPVwiYnBzQWRkT25BZnRlclwiXHJcbiAgICAgID48L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgICA8bmctdGVtcGxhdGUgI25vQWRkT25UZW1wbGF0ZT5cclxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cImlzQWZmaXhcIiBbbmdJZkVsc2VdPVwiY29udGVudFRlbXBsYXRlXCI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImFmZml4VGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjYWZmaXhUZW1wbGF0ZT5cclxuICAgICAgPHNwYW5cclxuICAgICAgICAqbmdJZj1cImJwc1ByZWZpeCB8fCBicHNQcmVmaXhJY29uXCJcclxuICAgICAgICBicHMtaW5wdXQtZ3JvdXAtc2xvdFxyXG4gICAgICAgIHR5cGU9XCJwcmVmaXhcIlxyXG4gICAgICAgIFtpY29uXT1cImJwc1ByZWZpeEljb25cIlxyXG4gICAgICAgIFt0ZW1wbGF0ZV09XCJicHNQcmVmaXhcIlxyXG4gICAgICA+PC9zcGFuPlxyXG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPHNwYW5cclxuICAgICAgICAqbmdJZj1cImJwc1N1ZmZpeCB8fCBicHNTdWZmaXhJY29uIHx8IGlzRmVlZGJhY2tcIlxyXG4gICAgICAgIGJwcy1pbnB1dC1ncm91cC1zbG90XHJcbiAgICAgICAgdHlwZT1cInN1ZmZpeFwiXHJcbiAgICAgICAgW2ljb25dPVwiYnBzU3VmZml4SWNvblwiXHJcbiAgICAgICAgW3RlbXBsYXRlXT1cImJwc1N1ZmZpeFwiXHJcbiAgICAgID5cclxuICAgICAgICA8YnBzLWZvcm0taXRlbS1mZWVkYmFjay1pY29uICpuZ0lmPVwiaXNGZWVkYmFja1wiIFtzdGF0dXNdPVwic3RhdHVzXCI+PC9icHMtZm9ybS1pdGVtLWZlZWRiYWNrLWljb24+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8bmctdGVtcGxhdGUgI2NvbnRlbnRUZW1wbGF0ZT5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8c3BhbiAqbmdJZj1cIiFpc0FkZE9uICYmICFpc0FmZml4ICYmIGlzRmVlZGJhY2tcIiBicHMtaW5wdXQtZ3JvdXAtc2xvdCB0eXBlPVwic3VmZml4XCI+XHJcbiAgICAgICAgPGJwcy1mb3JtLWl0ZW0tZmVlZGJhY2staWNvbiBbc3RhdHVzXT1cInN0YXR1c1wiPjwvYnBzLWZvcm0taXRlbS1mZWVkYmFjay1pY29uPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gIGAsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdF0nOiBgYnBzQ29tcGFjdGAsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zZWFyY2gtZW50ZXItYnV0dG9uXSc6IGBicHNTZWFyY2hgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc2VhcmNoXSc6IGBicHNTZWFyY2hgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc2VhcmNoLXJ0bF0nOiBgZGlyID09PSAncnRsJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zZWFyY2gtc21dJzogYGJwc1NlYXJjaCAmJiBpc1NtYWxsYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LXNlYXJjaC1sYXJnZV0nOiBgYnBzU2VhcmNoICYmIGlzTGFyZ2VgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXAtd3JhcHBlcl0nOiBgaXNBZGRPbmAsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC13cmFwcGVyLXJ0bF0nOiBgZGlyID09PSAncnRsJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC13cmFwcGVyLWxnXSc6IGBpc0FkZE9uICYmIGlzTGFyZ2VgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXAtd3JhcHBlci1zbV0nOiBgaXNBZGRPbiAmJiBpc1NtYWxsYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWFmZml4LXdyYXBwZXJdJzogYGlzQWZmaXggJiYgIWlzQWRkT25gLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlci1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlci1mb2N1c2VkXSc6IGBpc0FmZml4ICYmIGZvY3VzZWRgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlci1kaXNhYmxlZF0nOiBgaXNBZmZpeCAmJiBkaXNhYmxlZGAsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLWxnXSc6IGBpc0FmZml4ICYmICFpc0FkZE9uICYmIGlzTGFyZ2VgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlci1zbV0nOiBgaXNBZmZpeCAmJiAhaXNBZGRPbiAmJiBpc1NtYWxsYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWdyb3VwXSc6IGAhaXNBZmZpeCAmJiAhaXNBZGRPbmAsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXAtbGddJzogYCFpc0FmZml4ICYmICFpc0FkZE9uICYmIGlzTGFyZ2VgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZ3JvdXAtc21dJzogYCFpc0FmZml4ICYmICFpc0FkZE9uICYmIGlzU21hbGxgXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzSW5wdXRHcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNTZWFyY2g6IEJvb2xlYW5JbnB1dDtcclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYnBzQ29tcGFjdDogQm9vbGVhbklucHV0O1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKEJwc0lucHV0RGlyZWN0aXZlKSBsaXN0T2ZOeklucHV0RGlyZWN0aXZlITogUXVlcnlMaXN0PEJwc0lucHV0RGlyZWN0aXZlPjtcclxuICBASW5wdXQoKSBicHNBZGRPbkJlZm9yZUljb24/OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBicHNBZGRPbkFmdGVySWNvbj86IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGJwc1ByZWZpeEljb24/OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBicHNTdWZmaXhJY29uPzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgYnBzQWRkT25CZWZvcmU/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBicHNBZGRPbkFmdGVyPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgYnBzUHJlZml4Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgYnBzU3RhdHVzOiBOelN0YXR1cyA9ICcnO1xyXG4gIEBJbnB1dCgpIGJwc1N1ZmZpeD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIGJwc1NpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc1NlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNDb21wYWN0ID0gZmFsc2U7XHJcbiAgaXNMYXJnZSA9IGZhbHNlO1xyXG4gIGlzU21hbGwgPSBmYWxzZTtcclxuICBpc0FmZml4ID0gZmFsc2U7XHJcbiAgaXNBZGRPbiA9IGZhbHNlO1xyXG4gIGlzRmVlZGJhY2sgPSBmYWxzZTtcclxuICBmb2N1c2VkID0gZmFsc2U7XHJcbiAgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xyXG4gIC8vIHN0YXR1c1xyXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1pbnB1dCc7XHJcbiAgYWZmaXhTdGF0dXNDbHM6IE5nQ2xhc3NJbnRlcmZhY2UgPSB7fTtcclxuICBncm91cFN0YXR1c0NsczogTmdDbGFzc0ludGVyZmFjZSA9IHt9O1xyXG4gIGFmZml4SW5Hcm91cFN0YXR1c0NsczogTmdDbGFzc0ludGVyZmFjZSA9IHt9O1xyXG4gIHN0YXR1czogTnpWYWxpZGF0ZVN0YXR1cyA9ICcnO1xyXG4gIGhhc0ZlZWRiYWNrOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuekZvcm1TdGF0dXNTZXJ2aWNlPzogTnpGb3JtU3RhdHVzU2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgbnpGb3JtTm9TdGF0dXNTZXJ2aWNlPzogTnpGb3JtTm9TdGF0dXNTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgdXBkYXRlQ2hpbGRyZW5JbnB1dFNpemUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZOeklucHV0RGlyZWN0aXZlKSB7XHJcbiAgICAgIHRoaXMubGlzdE9mTnpJbnB1dERpcmVjdGl2ZS5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uc2l6ZSA9IHRoaXMuYnBzU2l6ZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56Rm9ybVN0YXR1c1NlcnZpY2U/LmZvcm1TdGF0dXNDaGFuZ2VzXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChwcmUsIGN1cikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHByZS5zdGF0dXMgPT09IGN1ci5zdGF0dXMgJiYgcHJlLmhhc0ZlZWRiYWNrID09PSBjdXIuaGFzRmVlZGJhY2s7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoeyBzdGF0dXMsIGhhc0ZlZWRiYWNrIH0pID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXR1c1N0eWxlcyhzdGF0dXMsIGhhc0ZlZWRiYWNrKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5mb2N1c01vbml0b3JcclxuICAgICAgLm1vbml0b3IodGhpcy5lbGVtZW50UmVmLCB0cnVlKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoZm9jdXNPcmlnaW4gPT4ge1xyXG4gICAgICAgIHRoaXMuZm9jdXNlZCA9ICEhZm9jdXNPcmlnaW47XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcclxuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xyXG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVDaGlsZHJlbklucHV0U2l6ZSgpO1xyXG4gICAgY29uc3QgbGlzdE9mSW5wdXRDaGFuZ2UkID0gdGhpcy5saXN0T2ZOeklucHV0RGlyZWN0aXZlLmNoYW5nZXMucGlwZShzdGFydFdpdGgodGhpcy5saXN0T2ZOeklucHV0RGlyZWN0aXZlKSk7XHJcbiAgICBsaXN0T2ZJbnB1dENoYW5nZSRcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgc3dpdGNoTWFwKGxpc3QgPT4gbWVyZ2UoLi4uW2xpc3RPZklucHV0Q2hhbmdlJCwgLi4ubGlzdC5tYXAoKGlucHV0OiBCcHNJbnB1dERpcmVjdGl2ZSkgPT4gaW5wdXQuZGlzYWJsZWQkKV0pKSxcclxuICAgICAgICBtZXJnZU1hcCgoKSA9PiBsaXN0T2ZJbnB1dENoYW5nZSQpLFxyXG4gICAgICAgIG1hcChsaXN0ID0+IGxpc3Quc29tZSgoaW5wdXQ6IEJwc0lucHV0RGlyZWN0aXZlKSA9PiBpbnB1dC5kaXNhYmxlZCkpLFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoZGlzYWJsZWQgPT4ge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgYnBzU2l6ZSxcclxuICAgICAgYnBzU3VmZml4LFxyXG4gICAgICBicHNQcmVmaXgsXHJcbiAgICAgIGJwc1ByZWZpeEljb24sXHJcbiAgICAgIGJwc1N1ZmZpeEljb24sXHJcbiAgICAgIGJwc0FkZE9uQWZ0ZXIsXHJcbiAgICAgIGJwc0FkZE9uQmVmb3JlLFxyXG4gICAgICBicHNBZGRPbkFmdGVySWNvbixcclxuICAgICAgYnBzQWRkT25CZWZvcmVJY29uLFxyXG4gICAgICBicHNTdGF0dXNcclxuICAgIH0gPSBjaGFuZ2VzO1xyXG4gICAgaWYgKGJwc1NpemUpIHtcclxuICAgICAgdGhpcy51cGRhdGVDaGlsZHJlbklucHV0U2l6ZSgpO1xyXG4gICAgICB0aGlzLmlzTGFyZ2UgPSB0aGlzLmJwc1NpemUgPT09ICdsYXJnZSc7XHJcbiAgICAgIHRoaXMuaXNTbWFsbCA9IHRoaXMuYnBzU2l6ZSA9PT0gJ3NtYWxsJztcclxuICAgIH1cclxuICAgIGlmIChicHNTdWZmaXggfHwgYnBzUHJlZml4IHx8IGJwc1ByZWZpeEljb24gfHwgYnBzU3VmZml4SWNvbikge1xyXG4gICAgICB0aGlzLmlzQWZmaXggPSAhISh0aGlzLmJwc1N1ZmZpeCB8fCB0aGlzLmJwc1ByZWZpeCB8fCB0aGlzLmJwc1ByZWZpeEljb24gfHwgdGhpcy5icHNTdWZmaXhJY29uKTtcclxuICAgIH1cclxuICAgIGlmIChicHNBZGRPbkFmdGVyIHx8IGJwc0FkZE9uQmVmb3JlIHx8IGJwc0FkZE9uQWZ0ZXJJY29uIHx8IGJwc0FkZE9uQmVmb3JlSWNvbikge1xyXG4gICAgICB0aGlzLmlzQWRkT24gPSAhISh0aGlzLmJwc0FkZE9uQWZ0ZXIgfHwgdGhpcy5icHNBZGRPbkJlZm9yZSB8fCB0aGlzLmJwc0FkZE9uQWZ0ZXJJY29uIHx8IHRoaXMuYnBzQWRkT25CZWZvcmVJY29uKTtcclxuICAgICAgdGhpcy5uekZvcm1Ob1N0YXR1c1NlcnZpY2U/Lm5vRm9ybVN0YXR1cz8ubmV4dCh0aGlzLmlzQWRkT24pO1xyXG4gICAgfVxyXG4gICAgaWYgKGJwc1N0YXR1cykge1xyXG4gICAgICB0aGlzLnNldFN0YXR1c1N0eWxlcyh0aGlzLmJwc1N0YXR1cywgdGhpcy5oYXNGZWVkYmFjayk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5lbGVtZW50UmVmKTtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRTdGF0dXNTdHlsZXMoc3RhdHVzOiBOelZhbGlkYXRlU3RhdHVzLCBoYXNGZWVkYmFjazogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgLy8gc2V0IGlubmVyIHN0YXR1c1xyXG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICB0aGlzLmhhc0ZlZWRiYWNrID0gaGFzRmVlZGJhY2s7XHJcbiAgICB0aGlzLmlzRmVlZGJhY2sgPSAhIXN0YXR1cyAmJiBoYXNGZWVkYmFjaztcclxuICAgIGNvbnN0IGJhc2VBZmZpeCA9ICEhKHRoaXMuYnBzU3VmZml4IHx8IHRoaXMuYnBzUHJlZml4IHx8IHRoaXMuYnBzUHJlZml4SWNvbiB8fCB0aGlzLmJwc1N1ZmZpeEljb24pO1xyXG4gICAgdGhpcy5pc0FmZml4ID0gYmFzZUFmZml4IHx8ICghdGhpcy5pc0FkZE9uICYmIGhhc0ZlZWRiYWNrKTtcclxuICAgIHRoaXMuYWZmaXhJbkdyb3VwU3RhdHVzQ2xzID1cclxuICAgICAgdGhpcy5pc0FmZml4IHx8IHRoaXMuaXNGZWVkYmFja1xyXG4gICAgICAgID8gKHRoaXMuYWZmaXhTdGF0dXNDbHMgPSBnZXRTdGF0dXNDbGFzc05hbWVzKGAke3RoaXMucHJlZml4Q2xzfS1hZmZpeC13cmFwcGVyYCwgc3RhdHVzLCBoYXNGZWVkYmFjaykpXHJcbiAgICAgICAgOiB7fTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgLy8gcmVuZGVyIHN0YXR1cyBpZiBuelN0YXR1cyBpcyBzZXRcclxuICAgIHRoaXMuYWZmaXhTdGF0dXNDbHMgPSBnZXRTdGF0dXNDbGFzc05hbWVzKFxyXG4gICAgICBgJHt0aGlzLnByZWZpeENsc30tYWZmaXgtd3JhcHBlcmAsXHJcbiAgICAgIHRoaXMuaXNBZGRPbiA/ICcnIDogc3RhdHVzLFxyXG4gICAgICB0aGlzLmlzQWRkT24gPyBmYWxzZSA6IGhhc0ZlZWRiYWNrXHJcbiAgICApO1xyXG4gICAgdGhpcy5ncm91cFN0YXR1c0NscyA9IGdldFN0YXR1c0NsYXNzTmFtZXMoXHJcbiAgICAgIGAke3RoaXMucHJlZml4Q2xzfS1ncm91cC13cmFwcGVyYCxcclxuICAgICAgdGhpcy5pc0FkZE9uID8gc3RhdHVzIDogJycsXHJcbiAgICAgIHRoaXMuaXNBZGRPbiA/IGhhc0ZlZWRiYWNrIDogZmFsc2VcclxuICAgICk7XHJcbiAgICBjb25zdCBzdGF0dXNDbHMgPSB7XHJcbiAgICAgIC4uLnRoaXMuYWZmaXhTdGF0dXNDbHMsXHJcbiAgICAgIC4uLnRoaXMuZ3JvdXBTdGF0dXNDbHNcclxuICAgIH07XHJcbiAgICBPYmplY3Qua2V5cyhzdGF0dXNDbHMpLmZvckVhY2goc3RhdHVzID0+IHtcclxuICAgICAgaWYgKHN0YXR1c0Nsc1tzdGF0dXNdKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgc3RhdHVzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBzdGF0dXMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19