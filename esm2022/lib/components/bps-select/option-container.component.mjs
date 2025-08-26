import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/scrolling";
import * as i3 from "ng-zorro-antd/empty";
import * as i4 from "./option-item.component";
import * as i5 from "./option-item-group.component";
function BpsOptionContainerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelement(1, "nz-embed-empty", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("specificContent", ctx_r0.notFoundContent);
} }
function BpsOptionContainerComponent_ng_template_3_bps_option_item_group_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "bps-option-item-group", 9);
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("bpsLabel", item_r2.groupLabel);
} }
function BpsOptionContainerComponent_ng_template_3_bps_option_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "bps-option-item", 10);
    i0.ɵɵlistener("itemHover", function BpsOptionContainerComponent_ng_template_3_bps_option_item_2_Template_bps_option_item_itemHover_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.onItemHover($event)); })("itemClick", function BpsOptionContainerComponent_ng_template_3_bps_option_item_2_Template_bps_option_item_itemClick_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.onItemClick($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("icon", ctx_r0.menuItemSelectedIcon)("customContent", item_r2.bpsCustomContent)("template", item_r2.template)("grouped", !!item_r2.groupLabel)("disabled", item_r2.bpsDisabled)("showState", ctx_r0.mode === "tags" || ctx_r0.mode === "multiple")("title", item_r2.bpsTitle)("label", item_r2.bpsLabel)("compareWith", ctx_r0.compareWith)("activatedValue", ctx_r0.activatedValue)("listOfSelectedValue", ctx_r0.listOfSelectedValue)("value", item_r2.bpsValue);
} }
function BpsOptionContainerComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 6);
    i0.ɵɵtemplate(1, BpsOptionContainerComponent_ng_template_3_bps_option_item_group_1_Template, 1, 1, "bps-option-item-group", 7)(2, BpsOptionContainerComponent_ng_template_3_bps_option_item_2_Template, 1, 12, "bps-option-item", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵproperty("ngSwitch", item_r2.type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "group");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "item");
} }
function BpsOptionContainerComponent_ng_template_4_Template(rf, ctx) { }
export class BpsOptionContainerComponent {
    constructor() {
        this.notFoundContent = undefined;
        this.menuItemSelectedIcon = null;
        this.dropdownRender = null;
        this.activatedValue = null;
        this.listOfSelectedValue = [];
        this.mode = 'default';
        this.matchWidth = true;
        this.itemSize = 23;
        this.maxItemLength = 8;
        this.listOfContainerItem = [];
        this.itemClick = new EventEmitter();
        this.scrollToBottom = new EventEmitter();
        this.scrolledIndex = 0;
    }
    onItemClick(value) {
        this.itemClick.emit(value);
    }
    onItemHover(value) {
        // TODO: keydown.enter won't activate this value
        this.activatedValue = value;
    }
    trackValue(_index, option) {
        return option.key;
    }
    onScrolledIndexChange(index) {
        this.scrolledIndex = index;
        if (index === this.listOfContainerItem.length - this.maxItemLength) {
            this.scrollToBottom.emit();
        }
    }
    scrollToActivatedValue() {
        const index = this.listOfContainerItem.findIndex(item => this.compareWith(item.key, this.activatedValue));
        if (index < this.scrolledIndex || index >= this.scrolledIndex + this.maxItemLength) {
            this.cdkVirtualScrollViewport.scrollToIndex(index || 0);
        }
    }
    ngOnChanges(changes) {
        const { listOfContainerItem, activatedValue } = changes;
        if (listOfContainerItem || activatedValue) {
            this.scrollToActivatedValue();
        }
    }
    ngAfterViewInit() {
        setTimeout(() => this.scrollToActivatedValue());
    }
    static { this.ɵfac = function BpsOptionContainerComponent_Factory(t) { return new (t || BpsOptionContainerComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsOptionContainerComponent, selectors: [["bps-option-container"]], viewQuery: function BpsOptionContainerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(CdkVirtualScrollViewport, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cdkVirtualScrollViewport = _t.first);
        } }, hostAttrs: [1, "ant-select-dropdown"], inputs: { notFoundContent: "notFoundContent", menuItemSelectedIcon: "menuItemSelectedIcon", dropdownRender: "dropdownRender", activatedValue: "activatedValue", listOfSelectedValue: "listOfSelectedValue", compareWith: "compareWith", mode: "mode", matchWidth: "matchWidth", itemSize: "itemSize", maxItemLength: "maxItemLength", listOfContainerItem: "listOfContainerItem" }, outputs: { itemClick: "itemClick", scrollToBottom: "scrollToBottom" }, exportAs: ["bpsOptionContainer"], features: [i0.ɵɵNgOnChangesFeature], decls: 5, vars: 14, consts: [["class", "ant-select-item-empty", 4, "ngIf"], [3, "scrolledIndexChange", "itemSize", "maxBufferPx", "minBufferPx"], ["cdkVirtualFor", "", 3, "cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplateCacheSize"], [3, "ngTemplateOutlet"], [1, "ant-select-item-empty"], ["nzComponentName", "select", 3, "specificContent"], [3, "ngSwitch"], [3, "bpsLabel", 4, "ngSwitchCase"], [3, "icon", "customContent", "template", "grouped", "disabled", "showState", "title", "label", "compareWith", "activatedValue", "listOfSelectedValue", "value", "itemHover", "itemClick", 4, "ngSwitchCase"], [3, "bpsLabel"], [3, "itemHover", "itemClick", "icon", "customContent", "template", "grouped", "disabled", "showState", "title", "label", "compareWith", "activatedValue", "listOfSelectedValue", "value"]], template: function BpsOptionContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, BpsOptionContainerComponent_div_1_Template, 2, 1, "div", 0);
            i0.ɵɵelementStart(2, "cdk-virtual-scroll-viewport", 1);
            i0.ɵɵlistener("scrolledIndexChange", function BpsOptionContainerComponent_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_2_listener($event) { return ctx.onScrolledIndexChange($event); });
            i0.ɵɵtemplate(3, BpsOptionContainerComponent_ng_template_3_Template, 3, 3, "ng-template", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, BpsOptionContainerComponent_ng_template_4_Template, 0, 0, "ng-template", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.listOfContainerItem.length === 0);
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("height", ctx.listOfContainerItem.length * ctx.itemSize, "px")("max-height", ctx.itemSize * ctx.maxItemLength, "px");
            i0.ɵɵclassProp("full-width", !ctx.matchWidth);
            i0.ɵɵproperty("itemSize", ctx.itemSize)("maxBufferPx", ctx.itemSize * ctx.maxItemLength)("minBufferPx", ctx.itemSize * ctx.maxItemLength);
            i0.ɵɵadvance();
            i0.ɵɵproperty("cdkVirtualForOf", ctx.listOfContainerItem)("cdkVirtualForTrackBy", ctx.trackValue)("cdkVirtualForTemplateCacheSize", 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngTemplateOutlet", ctx.dropdownRender);
        } }, dependencies: [i1.NgIf, i1.NgTemplateOutlet, i1.NgSwitch, i1.NgSwitchCase, i2.CdkFixedSizeVirtualScroll, i2.CdkVirtualForOf, i2.CdkVirtualScrollViewport, i3.NzEmbedEmptyComponent, i4.BpsOptionItemComponent, i5.BpsOptionItemGroupComponent], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsOptionContainerComponent, [{
        type: Component,
        args: [{
                selector: 'bps-option-container',
                exportAs: 'bpsOptionContainer',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                template: `
    <div>
      <div *ngIf="listOfContainerItem.length === 0" class="ant-select-item-empty">
        <nz-embed-empty nzComponentName="select" [specificContent]="notFoundContent!"></nz-embed-empty>
      </div>
      <cdk-virtual-scroll-viewport
        [class.full-width]="!matchWidth"
        [itemSize]="itemSize"
        [maxBufferPx]="itemSize * maxItemLength"
        [minBufferPx]="itemSize * maxItemLength"
        (scrolledIndexChange)="onScrolledIndexChange($event)"
        [style.height.px]="listOfContainerItem.length * itemSize"
        [style.max-height.px]="itemSize * maxItemLength"
      >
        <ng-template
          cdkVirtualFor
          [cdkVirtualForOf]="listOfContainerItem"
          [cdkVirtualForTrackBy]="trackValue"
          [cdkVirtualForTemplateCacheSize]="0"
          let-item
        >
          <ng-container [ngSwitch]="item.type">
            <bps-option-item-group *ngSwitchCase="'group'" [bpsLabel]="item.groupLabel"></bps-option-item-group>
            <bps-option-item
              *ngSwitchCase="'item'"
              [icon]="menuItemSelectedIcon"
              [customContent]="item.bpsCustomContent"
              [template]="item.template"
              [grouped]="!!item.groupLabel"
              [disabled]="item.bpsDisabled"
              [showState]="mode === 'tags' || mode === 'multiple'"
              [title]="item.bpsTitle"
              [label]="item.bpsLabel"
              [compareWith]="compareWith"
              [activatedValue]="activatedValue"
              [listOfSelectedValue]="listOfSelectedValue"
              [value]="item.bpsValue"
              (itemHover)="onItemHover($event)"
              (itemClick)="onItemClick($event)"
            ></bps-option-item>
          </ng-container>
        </ng-template>
      </cdk-virtual-scroll-viewport>
      <ng-template [ngTemplateOutlet]="dropdownRender"></ng-template>
    </div>
  `,
                host: { class: 'ant-select-dropdown' }
            }]
    }], () => [], { notFoundContent: [{
            type: Input
        }], menuItemSelectedIcon: [{
            type: Input
        }], dropdownRender: [{
            type: Input
        }], activatedValue: [{
            type: Input
        }], listOfSelectedValue: [{
            type: Input
        }], compareWith: [{
            type: Input
        }], mode: [{
            type: Input
        }], matchWidth: [{
            type: Input
        }], itemSize: [{
            type: Input
        }], maxItemLength: [{
            type: Input
        }], listOfContainerItem: [{
            type: Input
        }], itemClick: [{
            type: Output
        }], scrollToBottom: [{
            type: Output
        }], cdkVirtualScrollViewport: [{
            type: ViewChild,
            args: [CdkVirtualScrollViewport, { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsOptionContainerComponent, { className: "BpsOptionContainerComponent", filePath: "lib\\components\\bps-select\\option-container.component.ts", lineNumber: 74 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1zZWxlY3Qvb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbEUsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBR04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7SUFjakIsOEJBQTRFO0lBQzFFLG9DQUErRjtJQUNqRyxpQkFBTTs7O0lBRHFDLGNBQW9DO0lBQXBDLHdEQUFvQzs7O0lBbUJ6RSwyQ0FBb0c7OztJQUFyRCw2Q0FBNEI7Ozs7SUFDM0UsMkNBZ0JDO0lBREMsQUFEQSx5T0FBYSwwQkFBbUIsS0FBQyw0TkFDcEIsMEJBQW1CLEtBQUM7SUFDbEMsaUJBQWtCOzs7O0lBSGpCLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSxrREFBNkIsMkNBQ1UsOEJBQ2IsaUNBQ0csaUNBQ0EsbUVBQ3VCLDJCQUM3QiwyQkFDQSxtQ0FDSSx5Q0FDTSxtREFDVSwyQkFDcEI7OztJQWYzQixnQ0FBcUM7SUFFbkMsQUFEQSw4SEFBNEUsc0dBaUIzRTs7OztJQWxCVyx1Q0FBc0I7SUFDVixjQUFxQjtJQUFyQixzQ0FBcUI7SUFFMUMsY0FBb0I7SUFBcEIscUNBQW9COzs7QUF3Qm5DLE1BQU0sT0FBTywyQkFBMkI7SUFpQnRDO1FBaEJTLG9CQUFlLEdBQWdELFNBQVMsQ0FBQztRQUN6RSx5QkFBb0IsR0FBa0MsSUFBSSxDQUFDO1FBQzNELG1CQUFjLEdBQWtDLElBQUks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QUFpQixDQUFDLElBQUk7Z0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkNUO2dCQUNELElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRTthQUN2QztvQkFFVSxlQUFlO2tCQUF2QixLQUFLO1lBQ0csb0JBQW9CO2tCQUE1QixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxtQkFBbUI7a0JBQTNCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csbUJBQW1CO2tCQUEzQixLQUFLO1lBQ2EsU0FBUztrQkFBM0IsTUFBTTtZQUNZLGNBQWM7a0JBQWhDLE1BQU07WUFDZ0Qsd0JBQXdCO2tCQUE5RSxTQUFTO21CQUFDLHdCQUF3QixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0ZBZDFDLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5cclxuaW1wb3J0IHsgTnpTZWxlY3RJdGVtSW50ZXJmYWNlLCBOelNlbGVjdE1vZGVUeXBlIH0gZnJvbSAnLi9zZWxlY3QudHlwZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicHMtb3B0aW9uLWNvbnRhaW5lcicsXHJcbiAgZXhwb3J0QXM6ICdicHNPcHRpb25Db250YWluZXInLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgKm5nSWY9XCJsaXN0T2ZDb250YWluZXJJdGVtLmxlbmd0aCA9PT0gMFwiIGNsYXNzPVwiYW50LXNlbGVjdC1pdGVtLWVtcHR5XCI+XHJcbiAgICAgICAgPG56LWVtYmVkLWVtcHR5IG56Q29tcG9uZW50TmFtZT1cInNlbGVjdFwiIFtzcGVjaWZpY0NvbnRlbnRdPVwibm90Rm91bmRDb250ZW50IVwiPjwvbnotZW1iZWQtZW1wdHk+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Y2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0XHJcbiAgICAgICAgW2NsYXNzLmZ1bGwtd2lkdGhdPVwiIW1hdGNoV2lkdGhcIlxyXG4gICAgICAgIFtpdGVtU2l6ZV09XCJpdGVtU2l6ZVwiXHJcbiAgICAgICAgW21heEJ1ZmZlclB4XT1cIml0ZW1TaXplICogbWF4SXRlbUxlbmd0aFwiXHJcbiAgICAgICAgW21pbkJ1ZmZlclB4XT1cIml0ZW1TaXplICogbWF4SXRlbUxlbmd0aFwiXHJcbiAgICAgICAgKHNjcm9sbGVkSW5kZXhDaGFuZ2UpPVwib25TY3JvbGxlZEluZGV4Q2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwibGlzdE9mQ29udGFpbmVySXRlbS5sZW5ndGggKiBpdGVtU2l6ZVwiXHJcbiAgICAgICAgW3N0eWxlLm1heC1oZWlnaHQucHhdPVwiaXRlbVNpemUgKiBtYXhJdGVtTGVuZ3RoXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZVxyXG4gICAgICAgICAgY2RrVmlydHVhbEZvclxyXG4gICAgICAgICAgW2Nka1ZpcnR1YWxGb3JPZl09XCJsaXN0T2ZDb250YWluZXJJdGVtXCJcclxuICAgICAgICAgIFtjZGtWaXJ0dWFsRm9yVHJhY2tCeV09XCJ0cmFja1ZhbHVlXCJcclxuICAgICAgICAgIFtjZGtWaXJ0dWFsRm9yVGVtcGxhdGVDYWNoZVNpemVdPVwiMFwiXHJcbiAgICAgICAgICBsZXQtaXRlbVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cIml0ZW0udHlwZVwiPlxyXG4gICAgICAgICAgICA8YnBzLW9wdGlvbi1pdGVtLWdyb3VwICpuZ1N3aXRjaENhc2U9XCInZ3JvdXAnXCIgW2Jwc0xhYmVsXT1cIml0ZW0uZ3JvdXBMYWJlbFwiPjwvYnBzLW9wdGlvbi1pdGVtLWdyb3VwPlxyXG4gICAgICAgICAgICA8YnBzLW9wdGlvbi1pdGVtXHJcbiAgICAgICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidpdGVtJ1wiXHJcbiAgICAgICAgICAgICAgW2ljb25dPVwibWVudUl0ZW1TZWxlY3RlZEljb25cIlxyXG4gICAgICAgICAgICAgIFtjdXN0b21Db250ZW50XT1cIml0ZW0uYnBzQ3VzdG9tQ29udGVudFwiXHJcbiAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udGVtcGxhdGVcIlxyXG4gICAgICAgICAgICAgIFtncm91cGVkXT1cIiEhaXRlbS5ncm91cExhYmVsXCJcclxuICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiaXRlbS5icHNEaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgW3Nob3dTdGF0ZV09XCJtb2RlID09PSAndGFncycgfHwgbW9kZSA9PT0gJ211bHRpcGxlJ1wiXHJcbiAgICAgICAgICAgICAgW3RpdGxlXT1cIml0ZW0uYnBzVGl0bGVcIlxyXG4gICAgICAgICAgICAgIFtsYWJlbF09XCJpdGVtLmJwc0xhYmVsXCJcclxuICAgICAgICAgICAgICBbY29tcGFyZVdpdGhdPVwiY29tcGFyZVdpdGhcIlxyXG4gICAgICAgICAgICAgIFthY3RpdmF0ZWRWYWx1ZV09XCJhY3RpdmF0ZWRWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgW2xpc3RPZlNlbGVjdGVkVmFsdWVdPVwibGlzdE9mU2VsZWN0ZWRWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgW3ZhbHVlXT1cIml0ZW0uYnBzVmFsdWVcIlxyXG4gICAgICAgICAgICAgIChpdGVtSG92ZXIpPVwib25JdGVtSG92ZXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgKGl0ZW1DbGljayk9XCJvbkl0ZW1DbGljaygkZXZlbnQpXCJcclxuICAgICAgICAgICAgPjwvYnBzLW9wdGlvbi1pdGVtPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQ+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJkcm9wZG93blJlbmRlclwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIGhvc3Q6IHsgY2xhc3M6ICdhbnQtc2VsZWN0LWRyb3Bkb3duJyB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNPcHRpb25Db250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIG5vdEZvdW5kQ29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKSBtZW51SXRlbVNlbGVjdGVkSWNvbjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGRyb3Bkb3duUmVuZGVyOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgYWN0aXZhdGVkVmFsdWU6IE56U2FmZUFueSB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGxpc3RPZlNlbGVjdGVkVmFsdWU6IE56U2FmZUFueVtdID0gW107XHJcbiAgQElucHV0KCkgY29tcGFyZVdpdGghOiAobzE6IE56U2FmZUFueSwgbzI6IE56U2FmZUFueSkgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKSBtb2RlOiBOelNlbGVjdE1vZGVUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIG1hdGNoV2lkdGggPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGl0ZW1TaXplID0gMjM7XHJcbiAgQElucHV0KCkgbWF4SXRlbUxlbmd0aCA9IDg7XHJcbiAgQElucHV0KCkgbGlzdE9mQ29udGFpbmVySXRlbTogTnpTZWxlY3RJdGVtSW50ZXJmYWNlW10gPSBbXTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgaXRlbUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxOelNhZmVBbnk+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNjcm9sbFRvQm90dG9tID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBWaWV3Q2hpbGQoQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0LCB7IHN0YXRpYzogdHJ1ZSB9KSBjZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQhOiBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQ7XHJcbiAgcHJpdmF0ZSBzY3JvbGxlZEluZGV4ID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBvbkl0ZW1DbGljayh2YWx1ZTogTnpTYWZlQW55KTogdm9pZCB7XHJcbiAgICB0aGlzLml0ZW1DbGljay5lbWl0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIG9uSXRlbUhvdmVyKHZhbHVlOiBOelNhZmVBbnkpOiB2b2lkIHtcclxuICAgIC8vIFRPRE86IGtleWRvd24uZW50ZXIgd29uJ3QgYWN0aXZhdGUgdGhpcyB2YWx1ZVxyXG4gICAgdGhpcy5hY3RpdmF0ZWRWYWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgdHJhY2tWYWx1ZShfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBOelNlbGVjdEl0ZW1JbnRlcmZhY2UpOiBOelNhZmVBbnkge1xyXG4gICAgcmV0dXJuIG9wdGlvbi5rZXk7XHJcbiAgfVxyXG5cclxuICBvblNjcm9sbGVkSW5kZXhDaGFuZ2UoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5zY3JvbGxlZEluZGV4ID0gaW5kZXg7XHJcbiAgICBpZiAoaW5kZXggPT09IHRoaXMubGlzdE9mQ29udGFpbmVySXRlbS5sZW5ndGggLSB0aGlzLm1heEl0ZW1MZW5ndGgpIHtcclxuICAgICAgdGhpcy5zY3JvbGxUb0JvdHRvbS5lbWl0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzY3JvbGxUb0FjdGl2YXRlZFZhbHVlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3RPZkNvbnRhaW5lckl0ZW0uZmluZEluZGV4KGl0ZW0gPT4gdGhpcy5jb21wYXJlV2l0aChpdGVtLmtleSwgdGhpcy5hY3RpdmF0ZWRWYWx1ZSkpO1xyXG4gICAgaWYgKGluZGV4IDwgdGhpcy5zY3JvbGxlZEluZGV4IHx8IGluZGV4ID49IHRoaXMuc2Nyb2xsZWRJbmRleCArIHRoaXMubWF4SXRlbUxlbmd0aCkge1xyXG4gICAgICB0aGlzLmNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydC5zY3JvbGxUb0luZGV4KGluZGV4IHx8IDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBsaXN0T2ZDb250YWluZXJJdGVtLCBhY3RpdmF0ZWRWYWx1ZSB9ID0gY2hhbmdlcztcclxuICAgIGlmIChsaXN0T2ZDb250YWluZXJJdGVtIHx8IGFjdGl2YXRlZFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG9BY3RpdmF0ZWRWYWx1ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2Nyb2xsVG9BY3RpdmF0ZWRWYWx1ZSgpKTtcclxuICB9XHJcbn1cclxuIl19