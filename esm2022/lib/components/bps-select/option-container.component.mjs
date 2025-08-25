import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/scrolling";
import * as i3 from "ng-zorro-antd/empty";
import * as i4 from "./option-item.component";
import * as i5 from "./option-item-group.component";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsOptionContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsOptionContainerComponent, selector: "bps-option-container", inputs: { notFoundContent: "notFoundContent", menuItemSelectedIcon: "menuItemSelectedIcon", dropdownRender: "dropdownRender", activatedValue: "activatedValue", listOfSelectedValue: "listOfSelectedValue", compareWith: "compareWith", mode: "mode", matchWidth: "matchWidth", itemSize: "itemSize", maxItemLength: "maxItemLength", listOfContainerItem: "listOfContainerItem" }, outputs: { itemClick: "itemClick", scrollToBottom: "scrollToBottom" }, host: { classAttribute: "ant-select-dropdown" }, viewQueries: [{ propertyName: "cdkVirtualScrollViewport", first: true, predicate: CdkVirtualScrollViewport, descendants: true, static: true }], exportAs: ["bpsOptionContainer"], usesOnChanges: true, ngImport: i0, template: `
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
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i2.CdkFixedSizeVirtualScroll, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: ["itemSize", "minBufferPx", "maxBufferPx"] }, { kind: "directive", type: i2.CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }, { kind: "component", type: i2.CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }, { kind: "component", type: i3.NzEmbedEmptyComponent, selector: "nz-embed-empty", inputs: ["nzComponentName", "specificContent"], exportAs: ["nzEmbedEmpty"] }, { kind: "component", type: i4.BpsOptionItemComponent, selector: "bps-option-item", inputs: ["grouped", "customContent", "template", "disabled", "showState", "title", "label", "value", "activatedValue", "listOfSelectedValue", "icon", "compareWith"], outputs: ["itemClick", "itemHover"] }, { kind: "component", type: i5.BpsOptionItemGroupComponent, selector: "bps-option-item-group", inputs: ["bpsLabel"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsOptionContainerComponent, decorators: [{
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
        }], ctorParameters: function () { return []; }, propDecorators: { notFoundContent: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1zZWxlY3Qvb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbEUsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBR04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQTREdkIsTUFBTSxPQUFPLDJCQUEyQjtJQWlCdEM7UUFoQlMsb0JBQWUsR0FBZ0QsU0FBUyxDQUFDO1FBQ3pFLHlCQUFvQixHQUFrQyxJQUFJLENBQUM7UUFDM0QsbUJBQWMsR0FBa0MsSUFBSSxDQUFDO1FBQ3JELG1CQUFjLEdBQXFCLElBQUksQ0FBQztRQUN4Qyx3QkFBbUIsR0FBZ0IsRUFBRSxDQUFDO1FBRXRDLFNBQUksR0FBcUIsU0FBUyxDQUFDO1FBQ25DLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLHdCQUFtQixHQUE0QixFQUFFLENBQUM7UUFDeEMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFDMUMsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRXJELGtCQUFhLEdBQUcsQ0FBQyxDQUFDO0lBRVgsQ0FBQztJQUVoQixXQUFXLENBQUMsS0FBZ0I7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFnQjtRQUMxQixnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUFjLEVBQUUsTUFBNkI7UUFDdEQsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxLQUFhO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVELHNCQUFzQjtRQUNwQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQzFHLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsRixJQUFJLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztTQUN6RDtJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsTUFBTSxFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUN4RCxJQUFJLG1CQUFtQixJQUFJLGNBQWMsRUFBRTtZQUN6QyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFDRCxlQUFlO1FBQ2IsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQzsrR0F0RFUsMkJBQTJCO21HQUEzQiwyQkFBMkIsa21CQWMzQix3QkFBd0IscUhBOUR6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkNUOzs0RkFHVSwyQkFBMkI7a0JBdER2QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E2Q1Q7b0JBQ0QsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLHFCQUFxQixFQUFFO2lCQUN2QzswRUFFVSxlQUFlO3NCQUF2QixLQUFLO2dCQUNHLG9CQUFvQjtzQkFBNUIsS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csbUJBQW1CO3NCQUEzQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLG1CQUFtQjtzQkFBM0IsS0FBSztnQkFDYSxTQUFTO3NCQUEzQixNQUFNO2dCQUNZLGNBQWM7c0JBQWhDLE1BQU07Z0JBQ2dELHdCQUF3QjtzQkFBOUUsU0FBUzt1QkFBQyx3QkFBd0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuXHJcbmltcG9ydCB7IE56U2VsZWN0SXRlbUludGVyZmFjZSwgTnpTZWxlY3RNb2RlVHlwZSB9IGZyb20gJy4vc2VsZWN0LnR5cGVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnBzLW9wdGlvbi1jb250YWluZXInLFxyXG4gIGV4cG9ydEFzOiAnYnBzT3B0aW9uQ29udGFpbmVyJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwibGlzdE9mQ29udGFpbmVySXRlbS5sZW5ndGggPT09IDBcIiBjbGFzcz1cImFudC1zZWxlY3QtaXRlbS1lbXB0eVwiPlxyXG4gICAgICAgIDxuei1lbWJlZC1lbXB0eSBuekNvbXBvbmVudE5hbWU9XCJzZWxlY3RcIiBbc3BlY2lmaWNDb250ZW50XT1cIm5vdEZvdW5kQ29udGVudCFcIj48L256LWVtYmVkLWVtcHR5PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydFxyXG4gICAgICAgIFtjbGFzcy5mdWxsLXdpZHRoXT1cIiFtYXRjaFdpZHRoXCJcclxuICAgICAgICBbaXRlbVNpemVdPVwiaXRlbVNpemVcIlxyXG4gICAgICAgIFttYXhCdWZmZXJQeF09XCJpdGVtU2l6ZSAqIG1heEl0ZW1MZW5ndGhcIlxyXG4gICAgICAgIFttaW5CdWZmZXJQeF09XCJpdGVtU2l6ZSAqIG1heEl0ZW1MZW5ndGhcIlxyXG4gICAgICAgIChzY3JvbGxlZEluZGV4Q2hhbmdlKT1cIm9uU2Nyb2xsZWRJbmRleENoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBbc3R5bGUuaGVpZ2h0LnB4XT1cImxpc3RPZkNvbnRhaW5lckl0ZW0ubGVuZ3RoICogaXRlbVNpemVcIlxyXG4gICAgICAgIFtzdHlsZS5tYXgtaGVpZ2h0LnB4XT1cIml0ZW1TaXplICogbWF4SXRlbUxlbmd0aFwiXHJcbiAgICAgID5cclxuICAgICAgICA8bmctdGVtcGxhdGVcclxuICAgICAgICAgIGNka1ZpcnR1YWxGb3JcclxuICAgICAgICAgIFtjZGtWaXJ0dWFsRm9yT2ZdPVwibGlzdE9mQ29udGFpbmVySXRlbVwiXHJcbiAgICAgICAgICBbY2RrVmlydHVhbEZvclRyYWNrQnldPVwidHJhY2tWYWx1ZVwiXHJcbiAgICAgICAgICBbY2RrVmlydHVhbEZvclRlbXBsYXRlQ2FjaGVTaXplXT1cIjBcIlxyXG4gICAgICAgICAgbGV0LWl0ZW1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJpdGVtLnR5cGVcIj5cclxuICAgICAgICAgICAgPGJwcy1vcHRpb24taXRlbS1ncm91cCAqbmdTd2l0Y2hDYXNlPVwiJ2dyb3VwJ1wiIFticHNMYWJlbF09XCJpdGVtLmdyb3VwTGFiZWxcIj48L2Jwcy1vcHRpb24taXRlbS1ncm91cD5cclxuICAgICAgICAgICAgPGJwcy1vcHRpb24taXRlbVxyXG4gICAgICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInaXRlbSdcIlxyXG4gICAgICAgICAgICAgIFtpY29uXT1cIm1lbnVJdGVtU2VsZWN0ZWRJY29uXCJcclxuICAgICAgICAgICAgICBbY3VzdG9tQ29udGVudF09XCJpdGVtLmJwc0N1c3RvbUNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnRlbXBsYXRlXCJcclxuICAgICAgICAgICAgICBbZ3JvdXBlZF09XCIhIWl0ZW0uZ3JvdXBMYWJlbFwiXHJcbiAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIml0ZW0uYnBzRGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgIFtzaG93U3RhdGVdPVwibW9kZSA9PT0gJ3RhZ3MnIHx8IG1vZGUgPT09ICdtdWx0aXBsZSdcIlxyXG4gICAgICAgICAgICAgIFt0aXRsZV09XCJpdGVtLmJwc1RpdGxlXCJcclxuICAgICAgICAgICAgICBbbGFiZWxdPVwiaXRlbS5icHNMYWJlbFwiXHJcbiAgICAgICAgICAgICAgW2NvbXBhcmVXaXRoXT1cImNvbXBhcmVXaXRoXCJcclxuICAgICAgICAgICAgICBbYWN0aXZhdGVkVmFsdWVdPVwiYWN0aXZhdGVkVmFsdWVcIlxyXG4gICAgICAgICAgICAgIFtsaXN0T2ZTZWxlY3RlZFZhbHVlXT1cImxpc3RPZlNlbGVjdGVkVmFsdWVcIlxyXG4gICAgICAgICAgICAgIFt2YWx1ZV09XCJpdGVtLmJwc1ZhbHVlXCJcclxuICAgICAgICAgICAgICAoaXRlbUhvdmVyKT1cIm9uSXRlbUhvdmVyKCRldmVudClcIlxyXG4gICAgICAgICAgICAgIChpdGVtQ2xpY2spPVwib25JdGVtQ2xpY2soJGV2ZW50KVwiXHJcbiAgICAgICAgICAgID48L2Jwcy1vcHRpb24taXRlbT5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0PlxyXG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiZHJvcGRvd25SZW5kZXJcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBob3N0OiB7IGNsYXNzOiAnYW50LXNlbGVjdC1kcm9wZG93bicgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzT3B0aW9uQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBub3RGb3VuZENvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgQElucHV0KCkgbWVudUl0ZW1TZWxlY3RlZEljb246IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBkcm9wZG93blJlbmRlcjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGFjdGl2YXRlZFZhbHVlOiBOelNhZmVBbnkgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBsaXN0T2ZTZWxlY3RlZFZhbHVlOiBOelNhZmVBbnlbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIGNvbXBhcmVXaXRoITogKG8xOiBOelNhZmVBbnksIG8yOiBOelNhZmVBbnkpID0+IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbW9kZTogTnpTZWxlY3RNb2RlVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBtYXRjaFdpZHRoID0gdHJ1ZTtcclxuICBASW5wdXQoKSBpdGVtU2l6ZSA9IDIzO1xyXG4gIEBJbnB1dCgpIG1heEl0ZW1MZW5ndGggPSA4O1xyXG4gIEBJbnB1dCgpIGxpc3RPZkNvbnRhaW5lckl0ZW06IE56U2VsZWN0SXRlbUludGVyZmFjZVtdID0gW107XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGl0ZW1DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TnpTYWZlQW55PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBzY3JvbGxUb0JvdHRvbSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAVmlld0NoaWxkKENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCwgeyBzdGF0aWM6IHRydWUgfSkgY2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0ITogQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0O1xyXG4gIHByaXZhdGUgc2Nyb2xsZWRJbmRleCA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgb25JdGVtQ2xpY2sodmFsdWU6IE56U2FmZUFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5pdGVtQ2xpY2suZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBvbkl0ZW1Ib3Zlcih2YWx1ZTogTnpTYWZlQW55KTogdm9pZCB7XHJcbiAgICAvLyBUT0RPOiBrZXlkb3duLmVudGVyIHdvbid0IGFjdGl2YXRlIHRoaXMgdmFsdWVcclxuICAgIHRoaXMuYWN0aXZhdGVkVmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHRyYWNrVmFsdWUoX2luZGV4OiBudW1iZXIsIG9wdGlvbjogTnpTZWxlY3RJdGVtSW50ZXJmYWNlKTogTnpTYWZlQW55IHtcclxuICAgIHJldHVybiBvcHRpb24ua2V5O1xyXG4gIH1cclxuXHJcbiAgb25TY3JvbGxlZEluZGV4Q2hhbmdlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuc2Nyb2xsZWRJbmRleCA9IGluZGV4O1xyXG4gICAgaWYgKGluZGV4ID09PSB0aGlzLmxpc3RPZkNvbnRhaW5lckl0ZW0ubGVuZ3RoIC0gdGhpcy5tYXhJdGVtTGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20uZW1pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2Nyb2xsVG9BY3RpdmF0ZWRWYWx1ZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5saXN0T2ZDb250YWluZXJJdGVtLmZpbmRJbmRleChpdGVtID0+IHRoaXMuY29tcGFyZVdpdGgoaXRlbS5rZXksIHRoaXMuYWN0aXZhdGVkVmFsdWUpKTtcclxuICAgIGlmIChpbmRleCA8IHRoaXMuc2Nyb2xsZWRJbmRleCB8fCBpbmRleCA+PSB0aGlzLnNjcm9sbGVkSW5kZXggKyB0aGlzLm1heEl0ZW1MZW5ndGgpIHtcclxuICAgICAgdGhpcy5jZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQuc2Nyb2xsVG9JbmRleChpbmRleCB8fCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgbGlzdE9mQ29udGFpbmVySXRlbSwgYWN0aXZhdGVkVmFsdWUgfSA9IGNoYW5nZXM7XHJcbiAgICBpZiAobGlzdE9mQ29udGFpbmVySXRlbSB8fCBhY3RpdmF0ZWRWYWx1ZSkge1xyXG4gICAgICB0aGlzLnNjcm9sbFRvQWN0aXZhdGVkVmFsdWUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNjcm9sbFRvQWN0aXZhdGVkVmFsdWUoKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==