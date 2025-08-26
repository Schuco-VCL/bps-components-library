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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsOptionItemComponent, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }, { token: i1.NzDestroyService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BpsOptionItemComponent, selector: "bps-option-item", inputs: { grouped: "grouped", customContent: "customContent", template: "template", disabled: "disabled", showState: "showState", title: "title", label: "label", value: "value", activatedValue: "activatedValue", listOfSelectedValue: "listOfSelectedValue", icon: "icon", compareWith: "compareWith" }, outputs: { itemClick: "itemClick", itemHover: "itemHover" }, host: { properties: { "attr.title": "title", "class.ant-select-item-option-grouped": "grouped", "class.ant-select-item-option-selected": "selected && !disabled", "class.ant-select-item-option-disabled": "disabled", "class.ant-select-item-option-active": "activated && !disabled" }, classAttribute: "ant-select-item ant-select-item-option" }, providers: [NzDestroyService], usesOnChanges: true, ngImport: i0, template: `
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsOptionItemComponent, decorators: [{
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
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: i1.NzDestroyService }], propDecorators: { grouped: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtc2VsZWN0L29wdGlvbi1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7O0FBNEIvRCxNQUFNLE9BQU8sc0JBQXNCO0lBa0JqQyxZQUNVLFVBQW1DLEVBQ25DLE1BQWMsRUFDZCxRQUEwQjtRQUYxQixlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUNuQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUFwQnBDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNULFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsYUFBUSxHQUFrQyxJQUFJLENBQUM7UUFDL0MsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLFVBQUssR0FBMkIsSUFBSSxDQUFDO1FBQ3JDLFVBQUssR0FBcUIsSUFBSSxDQUFDO1FBQy9CLG1CQUFjLEdBQXFCLElBQUksQ0FBQztRQUN4Qyx3QkFBbUIsR0FBZ0IsRUFBRSxDQUFDO1FBQ3RDLFNBQUksR0FBa0MsSUFBSSxDQUFDO1FBRWpD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RyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csbUJBQW1CO3NCQUEzQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNhLFNBQVM7c0JBQTNCLE1BQU07Z0JBQ1ksU0FBUztzQkFBM0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOekRlc3Ryb3lTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnBzLW9wdGlvbi1pdGVtJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1zZWxlY3QtaXRlbS1vcHRpb24tY29udGVudFwiPlxyXG4gICAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiY3VzdG9tQ29udGVudFwiIFtuZ0lmRWxzZV09XCJub0N1c3RvbUNvbnRlbnRcIj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICA8bmctdGVtcGxhdGUgI25vQ3VzdG9tQ29udGVudD57eyBsYWJlbCB9fTwvbmctdGVtcGxhdGU+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgKm5nSWY9XCJzaG93U3RhdGUgJiYgc2VsZWN0ZWRcIiBjbGFzcz1cImFudC1zZWxlY3QtaXRlbS1vcHRpb24tc3RhdGVcIiBzdHlsZT1cInVzZXItc2VsZWN0OiBub25lXCIgdW5zZWxlY3RhYmxlPVwib25cIj5cclxuICAgICAgPHNwYW4gbnotaWNvbiBuelR5cGU9XCJjaGVja1wiIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3RlZC1pY29uXCIgKm5nSWY9XCIhaWNvbjsgZWxzZSBpY29uXCI+PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnYW50LXNlbGVjdC1pdGVtIGFudC1zZWxlY3QtaXRlbS1vcHRpb24nLFxyXG4gICAgJ1thdHRyLnRpdGxlXSc6ICd0aXRsZScsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtaXRlbS1vcHRpb24tZ3JvdXBlZF0nOiAnZ3JvdXBlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtaXRlbS1vcHRpb24tc2VsZWN0ZWRdJzogJ3NlbGVjdGVkICYmICFkaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtaXRlbS1vcHRpb24tZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1pdGVtLW9wdGlvbi1hY3RpdmVdJzogJ2FjdGl2YXRlZCAmJiAhZGlzYWJsZWQnXHJcbiAgfSxcclxuICBwcm92aWRlcnM6IFtOekRlc3Ryb3lTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzT3B0aW9uSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcclxuICBzZWxlY3RlZCA9IGZhbHNlO1xyXG4gIGFjdGl2YXRlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGdyb3VwZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBjdXN0b21Db250ZW50ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNob3dTdGF0ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHRpdGxlPzogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgdmFsdWU6IE56U2FmZUFueSB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGFjdGl2YXRlZFZhbHVlOiBOelNhZmVBbnkgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBsaXN0T2ZTZWxlY3RlZFZhbHVlOiBOelNhZmVBbnlbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIGljb246IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBjb21wYXJlV2l0aCE6IChvMTogTnpTYWZlQW55LCBvMjogTnpTYWZlQW55KSA9PiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBpdGVtQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE56U2FmZUFueT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgaXRlbUhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxOelNhZmVBbnk+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIGRlc3Ryb3kkOiBOekRlc3Ryb3lTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IHZhbHVlLCBhY3RpdmF0ZWRWYWx1ZSwgbGlzdE9mU2VsZWN0ZWRWYWx1ZSB9ID0gY2hhbmdlcztcclxuICAgIGlmICh2YWx1ZSB8fCBsaXN0T2ZTZWxlY3RlZFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUuc29tZSh2ID0+IHRoaXMuY29tcGFyZVdpdGgodiwgdGhpcy52YWx1ZSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlIHx8IGFjdGl2YXRlZFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZhdGVkID0gdGhpcy5jb21wYXJlV2l0aCh0aGlzLmFjdGl2YXRlZFZhbHVlLCB0aGlzLnZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBmcm9tRXZlbnQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjbGljaycpXHJcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLml0ZW1DbGljay5lbWl0KHRoaXMudmFsdWUpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIGZyb21FdmVudCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21vdXNlZW50ZXInKVxyXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5pdGVtSG92ZXIuZW1pdCh0aGlzLnZhbHVlKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19