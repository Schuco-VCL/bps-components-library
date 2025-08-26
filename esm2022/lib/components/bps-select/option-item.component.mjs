import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzDestroyService } from 'ng-zorro-antd/core/services';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/services";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/icon";
function BpsOptionItemComponent_ng_template_1_ng_template_0_Template(rf, ctx) { }
function BpsOptionItemComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BpsOptionItemComponent_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.template);
} }
function BpsOptionItemComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate(ctx_r0.label);
} }
function BpsOptionItemComponent_div_4_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 7);
} }
function BpsOptionItemComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, BpsOptionItemComponent_div_4_span_1_Template, 1, 0, "span", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.icon)("ngIfElse", ctx_r0.icon);
} }
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
    static { this.ɵfac = function BpsOptionItemComponent_Factory(t) { return new (t || BpsOptionItemComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i1.NzDestroyService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsOptionItemComponent, selectors: [["bps-option-item"]], hostAttrs: [1, "ant-select-item", "ant-select-item-option"], hostVars: 9, hostBindings: function BpsOptionItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("title", ctx.title);
            i0.ɵɵclassProp("ant-select-item-option-grouped", ctx.grouped)("ant-select-item-option-selected", ctx.selected && !ctx.disabled)("ant-select-item-option-disabled", ctx.disabled)("ant-select-item-option-active", ctx.activated && !ctx.disabled);
        } }, inputs: { grouped: "grouped", customContent: "customContent", template: "template", disabled: "disabled", showState: "showState", title: "title", label: "label", value: "value", activatedValue: "activatedValue", listOfSelectedValue: "listOfSelectedValue", icon: "icon", compareWith: "compareWith" }, outputs: { itemClick: "itemClick", itemHover: "itemHover" }, features: [i0.ɵɵProvidersFeature([NzDestroyService]), i0.ɵɵNgOnChangesFeature], decls: 5, vars: 3, consts: [["noCustomContent", ""], [1, "ant-select-item-option-content"], [3, "ngIf", "ngIfElse"], ["class", "ant-select-item-option-state", "style", "user-select: none", "unselectable", "on", 4, "ngIf"], [3, "ngTemplateOutlet"], ["unselectable", "on", 1, "ant-select-item-option-state", 2, "user-select", "none"], ["nz-icon", "", "nzType", "check", "class", "ant-select-selected-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "check", 1, "ant-select-selected-icon"]], template: function BpsOptionItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵtemplate(1, BpsOptionItemComponent_ng_template_1_Template, 1, 1, "ng-template", 2)(2, BpsOptionItemComponent_ng_template_2_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, BpsOptionItemComponent_div_4_Template, 2, 2, "div", 3);
        } if (rf & 2) {
            const noCustomContent_r2 = i0.ɵɵreference(3);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.customContent)("ngIfElse", noCustomContent_r2);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.showState && ctx.selected);
        } }, dependencies: [i2.NgIf, i2.NgTemplateOutlet, i3.NzIconDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsOptionItemComponent, [{
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
    }], () => [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: i1.NzDestroyService }], { grouped: [{
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsOptionItemComponent, { className: "BpsOptionItemComponent", filePath: "lib\\components\\bps-select\\option-item.component.ts", lineNumber: 46 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtc2VsZWN0L29wdGlvbi1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7SUFRdkQscUdBQTJDOzs7SUFBOUIsa0RBQTZCOzs7SUFFZCxZQUFXOzs7SUFBWCxrQ0FBVzs7O0lBR3pDLDBCQUE4Rjs7O0lBRGhHLDhCQUFvSDtJQUNsSCwrRUFBdUY7SUFDekYsaUJBQU07OztJQUQyRCxjQUFhO0lBQUEsQUFBYixtQ0FBYSx5QkFBUzs7QUFlM0YsTUFBTSxPQUFPLHNCQUFzQjtJQWtCakMsWUFDVSxVQUFtQyxFQUNuQyxNQUFjLEVBQ2QsUUFBMEI7UUFGMUIsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFDbkMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBcEJwQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDVCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGFBQVEsR0FBa0MsSUFBSSxDQUFDO1FBQy9DLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFHLEtBQUssQ0FB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Qix3Q0FBd0MsRUFBRSxTQUFTO29CQUNuRCx5Q0FBeUMsRUFBRSx1QkFBdUI7b0JBQ2xFLHlDQUF5QyxFQUFFLFVBQVU7b0JBQ3JELHVDQUF1QyxFQUFFLHdCQUF3QjtpQkFDbEU7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDOUI7K0ZBSVUsT0FBTztrQkFBZixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxtQkFBbUI7a0JBQTNCLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ2EsU0FBUztrQkFBM0IsTUFBTTtZQUNZLFNBQVM7a0JBQTNCLE1BQU07O2tGQWhCSSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTnpEZXN0cm95U2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jwcy1vcHRpb24taXRlbScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJhbnQtc2VsZWN0LWl0ZW0tb3B0aW9uLWNvbnRlbnRcIj5cclxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cImN1c3RvbUNvbnRlbnRcIiBbbmdJZkVsc2VdPVwibm9DdXN0b21Db250ZW50XCI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPG5nLXRlbXBsYXRlICNub0N1c3RvbUNvbnRlbnQ+e3sgbGFiZWwgfX08L25nLXRlbXBsYXRlPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2ICpuZ0lmPVwic2hvd1N0YXRlICYmIHNlbGVjdGVkXCIgY2xhc3M9XCJhbnQtc2VsZWN0LWl0ZW0tb3B0aW9uLXN0YXRlXCIgc3R5bGU9XCJ1c2VyLXNlbGVjdDogbm9uZVwiIHVuc2VsZWN0YWJsZT1cIm9uXCI+XHJcbiAgICAgIDxzcGFuIG56LWljb24gbnpUeXBlPVwiY2hlY2tcIiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0ZWQtaWNvblwiICpuZ0lmPVwiIWljb247IGVsc2UgaWNvblwiPjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2FudC1zZWxlY3QtaXRlbSBhbnQtc2VsZWN0LWl0ZW0tb3B0aW9uJyxcclxuICAgICdbYXR0ci50aXRsZV0nOiAndGl0bGUnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWl0ZW0tb3B0aW9uLWdyb3VwZWRdJzogJ2dyb3VwZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWl0ZW0tb3B0aW9uLXNlbGVjdGVkXSc6ICdzZWxlY3RlZCAmJiAhZGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWl0ZW0tb3B0aW9uLWRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtaXRlbS1vcHRpb24tYWN0aXZlXSc6ICdhY3RpdmF0ZWQgJiYgIWRpc2FibGVkJ1xyXG4gIH0sXHJcbiAgcHJvdmlkZXJzOiBbTnpEZXN0cm95U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc09wdGlvbkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XHJcbiAgc2VsZWN0ZWQgPSBmYWxzZTtcclxuICBhY3RpdmF0ZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBncm91cGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY3VzdG9tQ29udGVudCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaG93U3RhdGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSB0aXRsZT86IHN0cmluZyB8IG51bWJlciB8IG51bGw7XHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyB8IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBOelNhZmVBbnkgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBhY3RpdmF0ZWRWYWx1ZTogTnpTYWZlQW55IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgbGlzdE9mU2VsZWN0ZWRWYWx1ZTogTnpTYWZlQW55W10gPSBbXTtcclxuICBASW5wdXQoKSBpY29uOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgY29tcGFyZVdpdGghOiAobzE6IE56U2FmZUFueSwgbzI6IE56U2FmZUFueSkgPT4gYm9vbGVhbjtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgaXRlbUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxOelNhZmVBbnk+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGl0ZW1Ib3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8TnpTYWZlQW55PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgcHJpdmF0ZSBkZXN0cm95JDogTnpEZXN0cm95U2VydmljZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyB2YWx1ZSwgYWN0aXZhdGVkVmFsdWUsIGxpc3RPZlNlbGVjdGVkVmFsdWUgfSA9IGNoYW5nZXM7XHJcbiAgICBpZiAodmFsdWUgfHwgbGlzdE9mU2VsZWN0ZWRWYWx1ZSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlLnNvbWUodiA9PiB0aGlzLmNvbXBhcmVXaXRoKHYsIHRoaXMudmFsdWUpKTtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZSB8fCBhY3RpdmF0ZWRWYWx1ZSkge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlZCA9IHRoaXMuY29tcGFyZVdpdGgodGhpcy5hY3RpdmF0ZWRWYWx1ZSwgdGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgZnJvbUV2ZW50KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY2xpY2snKVxyXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5pdGVtQ2xpY2suZW1pdCh0aGlzLnZhbHVlKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBmcm9tRXZlbnQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWVudGVyJylcclxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuaXRlbUhvdmVyLmVtaXQodGhpcy52YWx1ZSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==