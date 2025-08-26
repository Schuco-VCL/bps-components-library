import { BACKSPACE } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, Component, EventEmitter, Host, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BpsSelectSearchComponent } from './select-search.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/no-animation";
import * as i2 from "@angular/common";
import * as i3 from "./select-item.component";
import * as i4 from "./select-placeholder.component";
import * as i5 from "./select-search.component";
function BpsSelectTopControlComponent_ng_container_1_bps_select_item_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "bps-select-item", 6);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("deletable", false)("disabled", false)("removeIcon", ctx_r1.removeIcon)("label", ctx_r1.listOfTopItem[0].bpsLabel)("contentTemplateOutlet", ctx_r1.customTemplate)("contentTemplateOutletContext", ctx_r1.listOfTopItem[0]);
} }
function BpsSelectTopControlComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "bps-select-search", 4);
    i0.ɵɵlistener("isComposingChange", function BpsSelectTopControlComponent_ng_container_1_Template_bps_select_search_isComposingChange_1_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.isComposingChange($event)); })("valueChange", function BpsSelectTopControlComponent_ng_container_1_Template_bps_select_search_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onInputValueChange($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, BpsSelectTopControlComponent_ng_container_1_bps_select_item_2_Template, 1, 6, "bps-select-item", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("bpsId", ctx_r1.bpsId)("disabled", ctx_r1.disabled)("value", ctx_r1.inputValue)("showInput", ctx_r1.showSearch)("mirrorSync", false)("autofocus", ctx_r1.autofocus)("focusTrigger", ctx_r1.open);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isShowSingleLabel);
} }
function BpsSelectTopControlComponent_ng_container_2_bps_select_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "bps-select-item", 9);
    i0.ɵɵlistener("delete", function BpsSelectTopControlComponent_ng_container_2_bps_select_item_1_Template_bps_select_item_delete_0_listener() { const item_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onDeleteItem(item_r5.contentTemplateOutletContext)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("removeIcon", ctx_r1.removeIcon)("label", item_r5.bpsLabel)("disabled", item_r5.bpsDisabled || ctx_r1.disabled)("contentTemplateOutlet", item_r5.contentTemplateOutlet)("deletable", true)("contentTemplateOutletContext", item_r5.contentTemplateOutletContext);
} }
function BpsSelectTopControlComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsSelectTopControlComponent_ng_container_2_bps_select_item_1_Template, 1, 6, "bps-select-item", 7);
    i0.ɵɵelementStart(2, "bps-select-search", 8);
    i0.ɵɵlistener("isComposingChange", function BpsSelectTopControlComponent_ng_container_2_Template_bps_select_search_isComposingChange_2_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.isComposingChange($event)); })("valueChange", function BpsSelectTopControlComponent_ng_container_2_Template_bps_select_search_valueChange_2_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onInputValueChange($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.listOfSlicedItem)("ngForTrackBy", ctx_r1.trackValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("bpsId", ctx_r1.bpsId)("disabled", ctx_r1.disabled)("value", ctx_r1.inputValue)("autofocus", ctx_r1.autofocus)("showInput", true)("mirrorSync", true)("focusTrigger", ctx_r1.open);
} }
function BpsSelectTopControlComponent_bps_select_placeholder_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "bps-select-placeholder", 10);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("placeholder", ctx_r1.placeHolder);
} }
export class BpsSelectTopControlComponent {
    updateTemplateVariable() {
        const isSelectedValueEmpty = this.listOfTopItem.length === 0;
        this.isShowPlaceholder = isSelectedValueEmpty && !this.isComposing && !this.inputValue;
        this.isShowSingleLabel = !isSelectedValueEmpty && !this.isComposing && !this.inputValue;
    }
    isComposingChange(isComposing) {
        this.isComposing = isComposing;
        this.updateTemplateVariable();
    }
    onInputValueChange(value) {
        if (value !== this.inputValue) {
            this.inputValue = value;
            this.updateTemplateVariable();
            this.inputValueChange.emit(value);
            this.tokenSeparate(value, this.tokenSeparators);
        }
    }
    tokenSeparate(inputValue, tokenSeparators) {
        const includesSeparators = (str, separators) => {
            // eslint-disable-next-line @typescript-eslint/prefer-for-of
            for (let i = 0; i < separators.length; ++i) {
                if (str.lastIndexOf(separators[i]) > 0) {
                    return true;
                }
            }
            return false;
        };
        const splitBySeparators = (str, separators) => {
            const reg = new RegExp(`[${separators.join()}]`);
            const array = str.split(reg).filter(token => token);
            return [...new Set(array)];
        };
        if (inputValue &&
            inputValue.length &&
            tokenSeparators.length &&
            this.mode !== 'default' &&
            includesSeparators(inputValue, tokenSeparators)) {
            const listOfLabel = splitBySeparators(inputValue, tokenSeparators);
            this.tokenize.next(listOfLabel);
        }
    }
    clearInputValue() {
        if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.clearInputValue();
        }
    }
    focus() {
        if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.focus();
        }
    }
    blur() {
        if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.blur();
        }
    }
    trackValue(_index, option) {
        return option.bpsValue;
    }
    onDeleteItem(item) {
        if (!this.disabled && !item.bpsDisabled) {
            this.deleteItem.next(item);
        }
    }
    constructor(elementRef, ngZone, noAnimation) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.noAnimation = noAnimation;
        this.bpsId = null;
        this.showSearch = false;
        this.placeHolder = null;
        this.open = false;
        this.maxTagCount = Infinity;
        this.autofocus = false;
        this.disabled = false;
        this.mode = 'default';
        this.customTemplate = null;
        this.maxTagPlaceholder = null;
        this.removeIcon = null;
        this.listOfTopItem = [];
        this.tokenSeparators = [];
        this.tokenize = new EventEmitter();
        this.inputValueChange = new EventEmitter();
        this.deleteItem = new EventEmitter();
        this.listOfSlicedItem = [];
        this.isShowPlaceholder = true;
        this.isShowSingleLabel = false;
        this.isComposing = false;
        this.inputValue = null;
        this.destroy$ = new Subject();
    }
    ngOnChanges(changes) {
        const { listOfTopItem, maxTagCount, customTemplate, maxTagPlaceholder } = changes;
        if (listOfTopItem) {
            this.updateTemplateVariable();
        }
        if (listOfTopItem || maxTagCount || customTemplate || maxTagPlaceholder) {
            const listOfSlicedItem = this.listOfTopItem.slice(0, this.maxTagCount).map(o => ({
                bpsLabel: o.bpsLabel,
                bpsValue: o.bpsValue,
                bpsDisabled: o.bpsDisabled,
                contentTemplateOutlet: this.customTemplate,
                contentTemplateOutletContext: o
            }));
            if (this.listOfTopItem.length > this.maxTagCount) {
                const exceededLabel = `+ ${this.listOfTopItem.length - this.maxTagCount} ...`;
                const listOfSelectedValue = this.listOfTopItem.map(item => item.bpsValue);
                const exceededItem = {
                    bpsLabel: exceededLabel,
                    bpsValue: '$$__nz_exceeded_item',
                    bpsDisabled: true,
                    contentTemplateOutlet: this.maxTagPlaceholder,
                    contentTemplateOutletContext: listOfSelectedValue.slice(this.maxTagCount)
                };
                listOfSlicedItem.push(exceededItem);
            }
            this.listOfSlicedItem = listOfSlicedItem;
        }
    }
    ngOnInit() {
        this.ngZone.runOutsideAngular(() => {
            fromEvent(this.elementRef.nativeElement, 'click')
                .pipe(takeUntil(this.destroy$))
                .subscribe(event => {
                // `HTMLElement.focus()` is a native DOM API which doesn't require Angular to run change detection.
                if (event.target !== this.nzSelectSearchComponent.inputElement.nativeElement) {
                    this.nzSelectSearchComponent.focus();
                }
            });
            fromEvent(this.elementRef.nativeElement, 'keydown')
                .pipe(takeUntil(this.destroy$))
                .subscribe(event => {
                if (event.target instanceof HTMLInputElement) {
                    const inputValue = event.target.value;
                    if (event.keyCode === BACKSPACE &&
                        this.mode !== 'default' &&
                        !inputValue &&
                        this.listOfTopItem.length > 0) {
                        event.preventDefault();
                        // Run change detection only if the user has pressed the `Backspace` key and the following condition is met.
                        this.ngZone.run(() => this.onDeleteItem(this.listOfTopItem[this.listOfTopItem.length - 1]));
                    }
                }
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
    static { this.ɵfac = function BpsSelectTopControlComponent_Factory(t) { return new (t || BpsSelectTopControlComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i1.NzNoAnimationDirective, 9)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsSelectTopControlComponent, selectors: [["bps-select-top-control"]], viewQuery: function BpsSelectTopControlComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(BpsSelectSearchComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzSelectSearchComponent = _t.first);
        } }, hostAttrs: [1, "ant-select-selector"], inputs: { bpsId: "bpsId", showSearch: "showSearch", placeHolder: "placeHolder", open: "open", maxTagCount: "maxTagCount", autofocus: "autofocus", disabled: "disabled", mode: "mode", customTemplate: "customTemplate", maxTagPlaceholder: "maxTagPlaceholder", removeIcon: "removeIcon", listOfTopItem: "listOfTopItem", tokenSeparators: "tokenSeparators" }, outputs: { tokenize: "tokenize", inputValueChange: "inputValueChange", deleteItem: "deleteItem" }, exportAs: ["bpsSelectTopControl"], features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 3, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "placeholder", 4, "ngIf"], [3, "isComposingChange", "valueChange", "bpsId", "disabled", "value", "showInput", "mirrorSync", "autofocus", "focusTrigger"], [3, "deletable", "disabled", "removeIcon", "label", "contentTemplateOutlet", "contentTemplateOutletContext", 4, "ngIf"], [3, "deletable", "disabled", "removeIcon", "label", "contentTemplateOutlet", "contentTemplateOutletContext"], [3, "removeIcon", "label", "disabled", "contentTemplateOutlet", "deletable", "contentTemplateOutletContext", "delete", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "isComposingChange", "valueChange", "bpsId", "disabled", "value", "autofocus", "showInput", "mirrorSync", "focusTrigger"], [3, "delete", "removeIcon", "label", "disabled", "contentTemplateOutlet", "deletable", "contentTemplateOutletContext"], [3, "placeholder"]], template: function BpsSelectTopControlComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0, 0);
            i0.ɵɵtemplate(1, BpsSelectTopControlComponent_ng_container_1_Template, 3, 8, "ng-container", 1)(2, BpsSelectTopControlComponent_ng_container_2_Template, 3, 9, "ng-container", 2);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵtemplate(3, BpsSelectTopControlComponent_bps_select_placeholder_3_Template, 1, 1, "bps-select-placeholder", 3);
        } if (rf & 2) {
            i0.ɵɵproperty("ngSwitch", ctx.mode);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngSwitchCase", "default");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.isShowPlaceholder);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault, i3.BpsSelectItemComponent, i4.BpsSelectPlaceholderComponent, i5.BpsSelectSearchComponent], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsSelectTopControlComponent, [{
        type: Component,
        args: [{
                selector: 'bps-select-top-control',
                exportAs: 'bpsSelectTopControl',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: `
    <!--single mode-->
    <ng-container [ngSwitch]="mode">
      <ng-container *ngSwitchCase="'default'">
        <bps-select-search
          [bpsId]="bpsId"
          [disabled]="disabled"
          [value]="inputValue!"
          [showInput]="showSearch"
          [mirrorSync]="false"
          [autofocus]="autofocus"
          [focusTrigger]="open"
          (isComposingChange)="isComposingChange($event)"
          (valueChange)="onInputValueChange($event)"
        ></bps-select-search>
        <bps-select-item
          *ngIf="isShowSingleLabel"
          [deletable]="false"
          [disabled]="false"
          [removeIcon]="removeIcon"
          [label]="listOfTopItem[0].bpsLabel"
          [contentTemplateOutlet]="customTemplate"
          [contentTemplateOutletContext]="listOfTopItem[0]"
        ></bps-select-item>
      </ng-container>
      <ng-container *ngSwitchDefault>
        <!--multiple or tags mode-->
        <bps-select-item
          *ngFor="let item of listOfSlicedItem; trackBy: trackValue"
          [removeIcon]="removeIcon"
          [label]="item.bpsLabel"
          [disabled]="item.bpsDisabled || disabled"
          [contentTemplateOutlet]="item.contentTemplateOutlet"
          [deletable]="true"
          [contentTemplateOutletContext]="item.contentTemplateOutletContext"
          (delete)="onDeleteItem(item.contentTemplateOutletContext)"
        ></bps-select-item>
        <bps-select-search
          [bpsId]="bpsId"
          [disabled]="disabled"
          [value]="inputValue!"
          [autofocus]="autofocus"
          [showInput]="true"
          [mirrorSync]="true"
          [focusTrigger]="open"
          (isComposingChange)="isComposingChange($event)"
          (valueChange)="onInputValueChange($event)"
        ></bps-select-search>
      </ng-container>
    </ng-container>
    <bps-select-placeholder *ngIf="isShowPlaceholder" [placeholder]="placeHolder"></bps-select-placeholder>
  `,
                host: { class: 'ant-select-selector' }
            }]
    }], () => [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: i1.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }], { bpsId: [{
            type: Input
        }], showSearch: [{
            type: Input
        }], placeHolder: [{
            type: Input
        }], open: [{
            type: Input
        }], maxTagCount: [{
            type: Input
        }], autofocus: [{
            type: Input
        }], disabled: [{
            type: Input
        }], mode: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }], maxTagPlaceholder: [{
            type: Input
        }], removeIcon: [{
            type: Input
        }], listOfTopItem: [{
            type: Input
        }], tokenSeparators: [{
            type: Input
        }], tokenize: [{
            type: Output
        }], inputValueChange: [{
            type: Output
        }], deleteItem: [{
            type: Output
        }], nzSelectSearchComponent: [{
            type: ViewChild,
            args: [BpsSelectSearchComponent]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsSelectTopControlComponent, { className: "BpsSelectTopControlComponent", filePath: "lib\\components\\bps-select\\select-top-control.component.ts", lineNumber: 90 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9zZWxlY3QtdG9wLWNvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFLTCxRQUFRLEVBQ1IsTUFBTSxFQUdOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSzNDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7OztJQXdCN0QscUNBUW1COzs7SUFEakIsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLGlDQUFtQixtQkFDRCxpQ0FDTywyQ0FDVSxnREFDSyx5REFDUzs7OztJQW5CckQsNkJBQXdDO0lBQ3RDLDRDQVVDO0lBREMsQUFEQSwwT0FBcUIsZ0NBQXlCLEtBQUMsaU5BQ2hDLGlDQUEwQixLQUFDO0lBQzNDLGlCQUFvQjtJQUNyQixvSEFRQzs7OztJQWxCQyxjQUFlO0lBTWYsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLEFBREEsb0NBQWUsNkJBQ00sNEJBQ0EsZ0NBQ0cscUJBQ0osK0JBQ0csNkJBQ0Y7SUFLcEIsY0FBdUI7SUFBdkIsK0NBQXVCOzs7O0lBVzFCLDBDQVNDO0lBREMseVBBQVUseURBQStDLEtBQUM7SUFDM0QsaUJBQWtCOzs7O0lBRmpCLEFBREEsQUFE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cnQgeyBCQUNLU1BBQ0UgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuXHJcbmltcG9ydCB7IEJwc1NlbGVjdFNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0LXNlYXJjaC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelNlbGVjdEl0ZW1JbnRlcmZhY2UsIE56U2VsZWN0TW9kZVR5cGUsIE56U2VsZWN0VG9wQ29udHJvbEl0ZW1UeXBlIH0gZnJvbSAnLi9zZWxlY3QudHlwZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicHMtc2VsZWN0LXRvcC1jb250cm9sJyxcclxuICBleHBvcnRBczogJ2Jwc1NlbGVjdFRvcENvbnRyb2wnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDwhLS1zaW5nbGUgbW9kZS0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwibW9kZVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInZGVmYXVsdCdcIj5cclxuICAgICAgICA8YnBzLXNlbGVjdC1zZWFyY2hcclxuICAgICAgICAgIFticHNJZF09XCJicHNJZFwiXHJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgW3ZhbHVlXT1cImlucHV0VmFsdWUhXCJcclxuICAgICAgICAgIFtzaG93SW5wdXRdPVwic2hvd1NlYXJjaFwiXHJcbiAgICAgICAgICBbbWlycm9yU3luY109XCJmYWxzZVwiXHJcbiAgICAgICAgICBbYXV0b2ZvY3VzXT1cImF1dG9mb2N1c1wiXHJcbiAgICAgICAgICBbZm9jdXNUcmlnZ2VyXT1cIm9wZW5cIlxyXG4gICAgICAgICAgKGlzQ29tcG9zaW5nQ2hhbmdlKT1cImlzQ29tcG9zaW5nQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgICAgKHZhbHVlQ2hhbmdlKT1cIm9uSW5wdXRWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICA+PC9icHMtc2VsZWN0LXNlYXJjaD5cclxuICAgICAgICA8YnBzLXNlbGVjdC1pdGVtXHJcbiAgICAgICAgICAqbmdJZj1cImlzU2hvd1NpbmdsZUxhYmVsXCJcclxuICAgICAgICAgIFtkZWxldGFibGVdPVwiZmFsc2VcIlxyXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImZhbHNlXCJcclxuICAgICAgICAgIFtyZW1vdmVJY29uXT1cInJlbW92ZUljb25cIlxyXG4gICAgICAgICAgW2xhYmVsXT1cImxpc3RPZlRvcEl0ZW1bMF0uYnBzTGFiZWxcIlxyXG4gICAgICAgICAgW2NvbnRlbnRUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZVwiXHJcbiAgICAgICAgICBbY29udGVudFRlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJsaXN0T2ZUb3BJdGVtWzBdXCJcclxuICAgICAgICA+PC9icHMtc2VsZWN0LWl0ZW0+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XHJcbiAgICAgICAgPCEtLW11bHRpcGxlIG9yIHRhZ3MgbW9kZS0tPlxyXG4gICAgICAgIDxicHMtc2VsZWN0LWl0ZW1cclxuICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGxpc3RPZlNsaWNlZEl0ZW07IHRyYWNrQnk6IHRyYWNrVmFsdWVcIlxyXG4gICAgICAgICAgW3JlbW92ZUljb25dPVwicmVtb3ZlSWNvblwiXHJcbiAgICAgICAgICBbbGFiZWxdPVwiaXRlbS5icHNMYWJlbFwiXHJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiaXRlbS5icHNEaXNhYmxlZCB8fCBkaXNhYmxlZFwiXHJcbiAgICAgICAgICBbY29udGVudFRlbXBsYXRlT3V0bGV0XT1cIml0ZW0uY29udGVudFRlbXBsYXRlT3V0bGV0XCJcclxuICAgICAgICAgIFtkZWxldGFibGVdPVwidHJ1ZVwiXHJcbiAgICAgICAgICBbY29udGVudFRlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJpdGVtLmNvbnRlbnRUZW1wbGF0ZU91dGxldENvbnRleHRcIlxyXG4gICAgICAgICAgKGRlbGV0ZSk9XCJvbkRlbGV0ZUl0ZW0oaXRlbS5jb250ZW50VGVtcGxhdGVPdXRsZXRDb250ZXh0KVwiXHJcbiAgICAgICAgPjwvYnBzLXNlbGVjdC1pdGVtPlxyXG4gICAgICAgIDxicHMtc2VsZWN0LXNlYXJjaFxyXG4gICAgICAgICAgW2Jwc0lkXT1cImJwc0lkXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICBbdmFsdWVdPVwiaW5wdXRWYWx1ZSFcIlxyXG4gICAgICAgICAgW2F1dG9mb2N1c109XCJhdXRvZm9jdXNcIlxyXG4gICAgICAgICAgW3Nob3dJbnB1dF09XCJ0cnVlXCJcclxuICAgICAgICAgIFttaXJyb3JTeW5jXT1cInRydWVcIlxyXG4gICAgICAgICAgW2ZvY3VzVHJpZ2dlcl09XCJvcGVuXCJcclxuICAgICAgICAgIChpc0NvbXBvc2luZ0NoYW5nZSk9XCJpc0NvbXBvc2luZ0NoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAgICh2YWx1ZUNoYW5nZSk9XCJvbklucHV0VmFsdWVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgPjwvYnBzLXNlbGVjdC1zZWFyY2g+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8YnBzLXNlbGVjdC1wbGFjZWhvbGRlciAqbmdJZj1cImlzU2hvd1BsYWNlaG9sZGVyXCIgW3BsYWNlaG9sZGVyXT1cInBsYWNlSG9sZGVyXCI+PC9icHMtc2VsZWN0LXBsYWNlaG9sZGVyPlxyXG4gIGAsXHJcbiAgaG9zdDogeyBjbGFzczogJ2FudC1zZWxlY3Qtc2VsZWN0b3InIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc1NlbGVjdFRvcENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBicHNJZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgc2hvd1NlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHBsYWNlSG9sZGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgb3BlbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG1heFRhZ0NvdW50OiBudW1iZXIgPSBJbmZpbml0eTtcclxuICBASW5wdXQoKSBhdXRvZm9jdXMgPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG1vZGU6IE56U2VsZWN0TW9kZVR5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelNlbGVjdEl0ZW1JbnRlcmZhY2UgfT4gfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBtYXhUYWdQbGFjZWhvbGRlcjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56U2FmZUFueVtdIH0+IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgcmVtb3ZlSWNvbjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGxpc3RPZlRvcEl0ZW06IE56U2VsZWN0SXRlbUludGVyZmFjZVtdID0gW107XHJcbiAgQElucHV0KCkgdG9rZW5TZXBhcmF0b3JzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSB0b2tlbml6ZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGlucHV0VmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZGVsZXRlSXRlbSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpTZWxlY3RJdGVtSW50ZXJmYWNlPigpO1xyXG4gIEBWaWV3Q2hpbGQoQnBzU2VsZWN0U2VhcmNoQ29tcG9uZW50KSBuelNlbGVjdFNlYXJjaENvbXBvbmVudCE6IEJwc1NlbGVjdFNlYXJjaENvbXBvbmVudDtcclxuICBsaXN0T2ZTbGljZWRJdGVtOiBOelNlbGVjdFRvcENvbnRyb2xJdGVtVHlwZVtdID0gW107XHJcbiAgaXNTaG93UGxhY2Vob2xkZXIgPSB0cnVlO1xyXG4gIGlzU2hvd1NpbmdsZUxhYmVsID0gZmFsc2U7XHJcbiAgaXNDb21wb3NpbmcgPSBmYWxzZTtcclxuICBpbnB1dFZhbHVlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIHVwZGF0ZVRlbXBsYXRlVmFyaWFibGUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBpc1NlbGVjdGVkVmFsdWVFbXB0eSA9IHRoaXMubGlzdE9mVG9wSXRlbS5sZW5ndGggPT09IDA7XHJcbiAgICB0aGlzLmlzU2hvd1BsYWNlaG9sZGVyID0gaXNTZWxlY3RlZFZhbHVlRW1wdHkgJiYgIXRoaXMuaXNDb21wb3NpbmcgJiYgIXRoaXMuaW5wdXRWYWx1ZTtcclxuICAgIHRoaXMuaXNTaG93U2luZ2xlTGFiZWwgPSAhaXNTZWxlY3RlZFZhbHVlRW1wdHkgJiYgIXRoaXMuaXNDb21wb3NpbmcgJiYgIXRoaXMuaW5wdXRWYWx1ZTtcclxuICB9XHJcblxyXG4gIGlzQ29tcG9zaW5nQ2hhbmdlKGlzQ29tcG9zaW5nOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzQ29tcG9zaW5nID0gaXNDb21wb3Npbmc7XHJcbiAgICB0aGlzLnVwZGF0ZVRlbXBsYXRlVmFyaWFibGUoKTtcclxuICB9XHJcblxyXG4gIG9uSW5wdXRWYWx1ZUNoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuaW5wdXRWYWx1ZSkge1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy51cGRhdGVUZW1wbGF0ZVZhcmlhYmxlKCk7XHJcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgICAgdGhpcy50b2tlblNlcGFyYXRlKHZhbHVlLCB0aGlzLnRva2VuU2VwYXJhdG9ycyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2tlblNlcGFyYXRlKGlucHV0VmFsdWU6IHN0cmluZywgdG9rZW5TZXBhcmF0b3JzOiBzdHJpbmdbXSk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5jbHVkZXNTZXBhcmF0b3JzID0gKHN0cjogc3RyaW5nLCBzZXBhcmF0b3JzOiBzdHJpbmdbXSk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1mb3Itb2ZcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXBhcmF0b3JzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgaWYgKHN0ci5sYXN0SW5kZXhPZihzZXBhcmF0b3JzW2ldKSA+IDApIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc3BsaXRCeVNlcGFyYXRvcnMgPSAoc3RyOiBzdHJpbmcsIHNlcGFyYXRvcnM6IHN0cmluZ1tdKTogc3RyaW5nW10gPT4ge1xyXG4gICAgICBjb25zdCByZWcgPSBuZXcgUmVnRXhwKGBbJHtzZXBhcmF0b3JzLmpvaW4oKX1dYCk7XHJcbiAgICAgIGNvbnN0IGFycmF5ID0gc3RyLnNwbGl0KHJlZykuZmlsdGVyKHRva2VuID0+IHRva2VuKTtcclxuICAgICAgcmV0dXJuIFsuLi5uZXcgU2V0KGFycmF5KV07XHJcbiAgICB9O1xyXG4gICAgaWYgKFxyXG4gICAgICBpbnB1dFZhbHVlICYmXHJcbiAgICAgIGlucHV0VmFsdWUubGVuZ3RoICYmXHJcbiAgICAgIHRva2VuU2VwYXJhdG9ycy5sZW5ndGggJiZcclxuICAgICAgdGhpcy5tb2RlICE9PSAnZGVmYXVsdCcgJiZcclxuICAgICAgaW5jbHVkZXNTZXBhcmF0b3JzKGlucHV0VmFsdWUsIHRva2VuU2VwYXJhdG9ycylcclxuICAgICkge1xyXG4gICAgICBjb25zdCBsaXN0T2ZMYWJlbCA9IHNwbGl0QnlTZXBhcmF0b3JzKGlucHV0VmFsdWUsIHRva2VuU2VwYXJhdG9ycyk7XHJcbiAgICAgIHRoaXMudG9rZW5pemUubmV4dChsaXN0T2ZMYWJlbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbGVhcklucHV0VmFsdWUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uelNlbGVjdFNlYXJjaENvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLm56U2VsZWN0U2VhcmNoQ29tcG9uZW50LmNsZWFySW5wdXRWYWx1ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uelNlbGVjdFNlYXJjaENvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLm56U2VsZWN0U2VhcmNoQ29tcG9uZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBibHVyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpTZWxlY3RTZWFyY2hDb21wb25lbnQpIHtcclxuICAgICAgdGhpcy5uelNlbGVjdFNlYXJjaENvbXBvbmVudC5ibHVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0cmFja1ZhbHVlKF9pbmRleDogbnVtYmVyLCBvcHRpb246IE56U2VsZWN0VG9wQ29udHJvbEl0ZW1UeXBlKTogTnpTYWZlQW55IHtcclxuICAgIHJldHVybiBvcHRpb24uYnBzVmFsdWU7XHJcbiAgfVxyXG5cclxuICBvbkRlbGV0ZUl0ZW0oaXRlbTogTnpTZWxlY3RJdGVtSW50ZXJmYWNlKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIWl0ZW0uYnBzRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5kZWxldGVJdGVtLm5leHQoaXRlbSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb246IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfCBudWxsXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IGxpc3RPZlRvcEl0ZW0sIG1heFRhZ0NvdW50LCBjdXN0b21UZW1wbGF0ZSwgbWF4VGFnUGxhY2Vob2xkZXIgfSA9IGNoYW5nZXM7XHJcbiAgICBpZiAobGlzdE9mVG9wSXRlbSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVRlbXBsYXRlVmFyaWFibGUoKTtcclxuICAgIH1cclxuICAgIGlmIChsaXN0T2ZUb3BJdGVtIHx8IG1heFRhZ0NvdW50IHx8IGN1c3RvbVRlbXBsYXRlIHx8IG1heFRhZ1BsYWNlaG9sZGVyKSB7XHJcbiAgICAgIGNvbnN0IGxpc3RPZlNsaWNlZEl0ZW06IE56U2VsZWN0VG9wQ29udHJvbEl0ZW1UeXBlW10gPSB0aGlzLmxpc3RPZlRvcEl0ZW0uc2xpY2UoMCwgdGhpcy5tYXhUYWdDb3VudCkubWFwKG8gPT4gKHtcclxuICAgICAgICBicHNMYWJlbDogby5icHNMYWJlbCxcclxuICAgICAgICBicHNWYWx1ZTogby5icHNWYWx1ZSxcclxuICAgICAgICBicHNEaXNhYmxlZDogby5icHNEaXNhYmxlZCxcclxuICAgICAgICBjb250ZW50VGVtcGxhdGVPdXRsZXQ6IHRoaXMuY3VzdG9tVGVtcGxhdGUsXHJcbiAgICAgICAgY29udGVudFRlbXBsYXRlT3V0bGV0Q29udGV4dDogb1xyXG4gICAgICB9KSk7XHJcbiAgICAgIGlmICh0aGlzLmxpc3RPZlRvcEl0ZW0ubGVuZ3RoID4gdGhpcy5tYXhUYWdDb3VudCkge1xyXG4gICAgICAgIGNvbnN0IGV4Y2VlZGVkTGFiZWwgPSBgKyAke3RoaXMubGlzdE9mVG9wSXRlbS5sZW5ndGggLSB0aGlzLm1heFRhZ0NvdW50fSAuLi5gO1xyXG4gICAgICAgIGNvbnN0IGxpc3RPZlNlbGVjdGVkVmFsdWUgPSB0aGlzLmxpc3RPZlRvcEl0ZW0ubWFwKGl0ZW0gPT4gaXRlbS5icHNWYWx1ZSk7XHJcbiAgICAgICAgY29uc3QgZXhjZWVkZWRJdGVtID0ge1xyXG4gICAgICAgICAgYnBzTGFiZWw6IGV4Y2VlZGVkTGFiZWwsXHJcbiAgICAgICAgICBicHNWYWx1ZTogJyQkX19uel9leGNlZWRlZF9pdGVtJyxcclxuICAgICAgICAgIGJwc0Rpc2FibGVkOiB0cnVlLFxyXG4gICAgICAgICAgY29udGVudFRlbXBsYXRlT3V0bGV0OiB0aGlzLm1heFRhZ1BsYWNlaG9sZGVyLFxyXG4gICAgICAgICAgY29udGVudFRlbXBsYXRlT3V0bGV0Q29udGV4dDogbGlzdE9mU2VsZWN0ZWRWYWx1ZS5zbGljZSh0aGlzLm1heFRhZ0NvdW50KVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGlzdE9mU2xpY2VkSXRlbS5wdXNoKGV4Y2VlZGVkSXRlbSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5saXN0T2ZTbGljZWRJdGVtID0gbGlzdE9mU2xpY2VkSXRlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBmcm9tRXZlbnQ8TW91c2VFdmVudD4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjbGljaycpXHJcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgICAgLy8gYEhUTUxFbGVtZW50LmZvY3VzKClgIGlzIGEgbmF0aXZlIERPTSBBUEkgd2hpY2ggZG9lc24ndCByZXF1aXJlIEFuZ3VsYXIgdG8gcnVuIGNoYW5nZSBkZXRlY3Rpb24uXHJcbiAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSB0aGlzLm56U2VsZWN0U2VhcmNoQ29tcG9uZW50LmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMubnpTZWxlY3RTZWFyY2hDb21wb25lbnQuZm9jdXMoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIGZyb21FdmVudDxLZXlib2FyZEV2ZW50Pih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2tleWRvd24nKVxyXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgZXZlbnQua2V5Q29kZSA9PT0gQkFDS1NQQUNFICYmXHJcbiAgICAgICAgICAgICAgdGhpcy5tb2RlICE9PSAnZGVmYXVsdCcgJiZcclxuICAgICAgICAgICAgICAhaW5wdXRWYWx1ZSAmJlxyXG4gICAgICAgICAgICAgIHRoaXMubGlzdE9mVG9wSXRlbS5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgLy8gUnVuIGNoYW5nZSBkZXRlY3Rpb24gb25seSBpZiB0aGUgdXNlciBoYXMgcHJlc3NlZCB0aGUgYEJhY2tzcGFjZWAga2V5IGFuZCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbiBpcyBtZXQuXHJcbiAgICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMub25EZWxldGVJdGVtKHRoaXMubGlzdE9mVG9wSXRlbVt0aGlzLmxpc3RPZlRvcEl0ZW0ubGVuZ3RoIC0gMV0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gIH1cclxufVxyXG4iXX0=