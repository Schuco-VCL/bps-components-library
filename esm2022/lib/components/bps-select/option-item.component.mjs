import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzDestroyService } from 'ng-zorro-antd/core/services';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/services";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/icon";
export class BpsOptionItemComponent {
    constructor(elementRef, ngZone, destroy$) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.destroy$ = destroy$;
        this.selected = false;
        this.activated = false;
        this.grouped = false;
        this.customContent = false;
        this.template = null;
        this.disabled = false;
        this.showState = false;
        this.label = null;
        this.value = null;
        this.activatedValue = null;
        this.listOfSelectedValue = [];
        this.icon = null;
        this.itemClick = new EventEmitter();
        this.itemHover = new EventEmitter();
    }
    ngOnChanges(changes) {
        const { value, activatedValue, listOfSelectedValue } = changes;
        if (value || listOfSelectedValue) {
            this.selected = this.listOfSelectedValue.some(v => this.compareWith(v, this.value));
        }
        if (value || activatedValue) {
            this.activated = this.compareWith(this.activatedValue, this.value);
        }
    }
    ngOnInit() {
        this.ngZone.runOutsideAngular(() => {
            fromEvent(this.elementRef.nativeElement, 'click')
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                if (!this.disabled) {
                    this.ngZone.run(() => this.itemClick.emit(this.value));
                }
            });
            fromEvent(this.elementRef.nativeElement, 'mouseenter')
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                if (!this.disabled) {
                    this.ngZone.run(() => this.itemHover.emit(this.value));
                }
            });
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsOptionItemComponent, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }, { token: i1.NzDestroyService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsOptionItemComponent, selector: "bps-option-item", inputs: { grouped: "grouped", customContent: "customContent", template: "template", disabled: "disabled", showState: "showState", title: "title", label: "label", value: "value", activatedValue: "activatedValue", listOfSelectedValue: "listOfSelectedValue", icon: "icon", compareWith: "compareWith" }, outputs: { itemClick: "itemClick", itemHover: "itemHover" }, host: { properties: { "attr.title": "title", "class.ant-select-item-option-grouped": "grouped", "class.ant-select-item-option-selected": "selected && !disabled", "class.ant-select-item-option-disabled": "disabled", "class.ant-select-item-option-active": "activated && !disabled" }, classAttribute: "ant-select-item ant-select-item-option" }, providers: [NzDestroyService], usesOnChanges: true, ngImport: i0, template: `
    <div class="ant-select-item-option-content">
      <ng-template [ngIf]="customContent" [ngIfElse]="noCustomContent">
        <ng-template [ngTemplateOutlet]="template"></ng-template>
      </ng-template>
      <ng-template #noCustomContent>{{ label }}</ng-template>
    </div>
    <div *ngIf="showState && selected" class="ant-select-item-option-state" style="user-select: none" unselectable="on">
      <span nz-icon nzType="check" class="ant-select-selected-icon" *ngIf="!icon; else icon"></span>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i3.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsOptionItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bps-option-item',
                    template: `
    <div class="ant-select-item-option-content">
      <ng-template [ngIf]="customContent" [ngIfElse]="noCustomContent">
        <ng-template [ngTemplateOutlet]="template"></ng-template>
      </ng-template>
      <ng-template #noCustomContent>{{ label }}</ng-template>
    </div>
    <div *ngIf="showState && selected" class="ant-select-item-option-state" style="user-select: none" unselectable="on">
      <span nz-icon nzType="check" class="ant-select-selected-icon" *ngIf="!icon; else icon"></span>
    </div>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        class: 'ant-select-item ant-select-item-option',
                        '[attr.title]': 'title',
                        '[class.ant-select-item-option-grouped]': 'grouped',
                        '[class.ant-select-item-option-selected]': 'selected && !disabled',
                        '[class.ant-select-item-option-disabled]': 'disabled',
                        '[class.ant-select-item-option-active]': 'activated && !disabled'
                    },
                    providers: [NzDestroyService]
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: i1.NzDestroyService }]; }, propDecorators: { grouped: [{
                type: Input
            }], customContent: [{
                type: Input
            }], template: [{
                type: Input
            }], disabled: [{
                type: Input
            }], showState: [{
                type: Input
            }], title: [{
                type: Input
            }], label: [{
                type: Input
            }], value: [{
                type: Input
            }], activatedValue: [{
                type: Input
            }], listOfSelectedValue: [{
                type: Input
            }], icon: [{
                type: Input
            }], compareWith: [{
                type: Input
            }], itemClick: [{
                type: Output
            }], itemHover: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtc2VsZWN0L29wdGlvbi1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7O0FBNEIvRCxNQUFNLE9BQU8sc0JBQXNCO0lBa0JqQyxZQUNVLFVBQW1DLEVBQ25DLE1BQWMsRUFDZCxRQUEwQjtRQUYxQixlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUNuQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUFwQnBDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNULFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsYUFBUSxHQUFrQyxJQUFJLENBQUM7UUFDL0MsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLFVBQUssR0FBMkIsSUFBSSxDQUFDO1FBQ3JDLFVBQUssR0FBcUIsSUFBSSxDQUFDO1FBQy9CLG1CQUFjLEdBQXFCLElBQUksQ0FBQztRQUN4Qyx3QkFBbUIsR0FBZ0IsRUFBRSxDQUFDO1FBQ3RDLFNBQUksR0FBa0MsSUFBSSxDQUFDO1FBRWpD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Z0JBQ0csY0FBYztzQkFBdEIsS0FBSztnQkFDRyxtQkFBbUI7c0JBQTNCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ2EsU0FBUztzQkFBM0IsTUFBTTtnQkFDWSxTQUFTO3NCQUEzQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE56RGVzdHJveVNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvc2VydmljZXMnO1xyXG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicHMtb3B0aW9uLWl0ZW0nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LXNlbGVjdC1pdGVtLW9wdGlvbi1jb250ZW50XCI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJjdXN0b21Db250ZW50XCIgW25nSWZFbHNlXT1cIm5vQ3VzdG9tQ29udGVudFwiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjbm9DdXN0b21Db250ZW50Pnt7IGxhYmVsIH19PC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiAqbmdJZj1cInNob3dTdGF0ZSAmJiBzZWxlY3RlZFwiIGNsYXNzPVwiYW50LXNlbGVjdC1pdGVtLW9wdGlvbi1zdGF0ZVwiIHN0eWxlPVwidXNlci1zZWxlY3Q6IG5vbmVcIiB1bnNlbGVjdGFibGU9XCJvblwiPlxyXG4gICAgICA8c3BhbiBuei1pY29uIG56VHlwZT1cImNoZWNrXCIgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGVkLWljb25cIiAqbmdJZj1cIiFpY29uOyBlbHNlIGljb25cIj48L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdhbnQtc2VsZWN0LWl0ZW0gYW50LXNlbGVjdC1pdGVtLW9wdGlvbicsXHJcbiAgICAnW2F0dHIudGl0bGVdJzogJ3RpdGxlJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1pdGVtLW9wdGlvbi1ncm91cGVkXSc6ICdncm91cGVkJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1pdGVtLW9wdGlvbi1zZWxlY3RlZF0nOiAnc2VsZWN0ZWQgJiYgIWRpc2FibGVkJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1pdGVtLW9wdGlvbi1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWl0ZW0tb3B0aW9uLWFjdGl2ZV0nOiAnYWN0aXZhdGVkICYmICFkaXNhYmxlZCdcclxuICB9LFxyXG4gIHByb3ZpZGVyczogW056RGVzdHJveVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNPcHRpb25JdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xyXG4gIHNlbGVjdGVkID0gZmFsc2U7XHJcbiAgYWN0aXZhdGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZ3JvdXBlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGN1c3RvbUNvbnRlbnQgPSBmYWxzZTtcclxuICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2hvd1N0YXRlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdGl0bGU/OiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSB2YWx1ZTogTnpTYWZlQW55IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgYWN0aXZhdGVkVmFsdWU6IE56U2FmZUFueSB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGxpc3RPZlNlbGVjdGVkVmFsdWU6IE56U2FmZUFueVtdID0gW107XHJcbiAgQElucHV0KCkgaWNvbjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGNvbXBhcmVXaXRoITogKG8xOiBOelNhZmVBbnksIG8yOiBOelNhZmVBbnkpID0+IGJvb2xlYW47XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGl0ZW1DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TnpTYWZlQW55PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBpdGVtSG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPE56U2FmZUFueT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIHByaXZhdGUgZGVzdHJveSQ6IE56RGVzdHJveVNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgdmFsdWUsIGFjdGl2YXRlZFZhbHVlLCBsaXN0T2ZTZWxlY3RlZFZhbHVlIH0gPSBjaGFuZ2VzO1xyXG4gICAgaWYgKHZhbHVlIHx8IGxpc3RPZlNlbGVjdGVkVmFsdWUpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZS5zb21lKHYgPT4gdGhpcy5jb21wYXJlV2l0aCh2LCB0aGlzLnZhbHVlKSk7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUgfHwgYWN0aXZhdGVkVmFsdWUpIHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZWQgPSB0aGlzLmNvbXBhcmVXaXRoKHRoaXMuYWN0aXZhdGVkVmFsdWUsIHRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGZyb21FdmVudCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NsaWNrJylcclxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuaXRlbUNsaWNrLmVtaXQodGhpcy52YWx1ZSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgZnJvbUV2ZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbW91c2VlbnRlcicpXHJcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLml0ZW1Ib3Zlci5lbWl0KHRoaXMudmFsdWUpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=