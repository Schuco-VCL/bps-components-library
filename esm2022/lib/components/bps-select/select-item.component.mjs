import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../core/addon/string_template_outlet";
import * as i3 from "ng-zorro-antd/icon";
const _c0 = a0 => ({ $implicit: a0 });
function BpsSelectItemComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.label);
} }
function BpsSelectItemComponent_ng_container_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate(ctx_r0.label);
} }
function BpsSelectItemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BpsSelectItemComponent_ng_container_0_div_1_Template, 2, 1, "div", 3)(2, BpsSelectItemComponent_ng_container_0_ng_template_2_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const labelTemplate_r2 = i0.ɵɵreference(3);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.deletable)("ngIfElse", labelTemplate_r2);
} }
function BpsSelectItemComponent_span_1_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 7);
} }
function BpsSelectItemComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵlistener("click", function BpsSelectItemComponent_span_1_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onDelete($event)); });
    i0.ɵɵtemplate(1, BpsSelectItemComponent_span_1_span_1_Template, 1, 0, "span", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.removeIcon)("ngIfElse", ctx_r0.removeIcon);
} }
export class BpsSelectItemComponent {
    constructor() {
        this.disabled = false;
        this.label = null;
        this.deletable = false;
        this.removeIcon = null;
        this.contentTemplateOutletContext = null;
        this.contentTemplateOutlet = null;
        this.delete = new EventEmitter();
    }
    onDelete(e) {
        e.preventDefault();
        e.stopPropagation();
        if (!this.disabled) {
            this.delete.next(e);
        }
    }
    static { this.ɵfac = function BpsSelectItemComponent_Factory(t) { return new (t || BpsSelectItemComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsSelectItemComponent, selectors: [["bps-select-item"]], hostAttrs: [1, "ant-select-selection-item"], hostVars: 3, hostBindings: function BpsSelectItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("title", ctx.label);
            i0.ɵɵclassProp("ant-select-selection-item-disabled", ctx.disabled);
        } }, inputs: { disabled: "disabled", label: "label", deletable: "deletable", removeIcon: "removeIcon", contentTemplateOutletContext: "contentTemplateOutletContext", contentTemplateOutlet: "contentTemplateOutlet" }, outputs: { delete: "delete" }, decls: 2, vars: 5, consts: [["labelTemplate", ""], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["class", "ant-select-selection-item-remove", 3, "click", 4, "ngIf"], ["class", "ant-select-selection-item-content", 4, "ngIf", "ngIfElse"], [1, "ant-select-selection-item-content"], [1, "ant-select-selection-item-remove", 3, "click"], ["nz-icon", "", "nzType", "close", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close"]], template: function BpsSelectItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BpsSelectItemComponent_ng_container_0_Template, 4, 2, "ng-container", 1)(1, BpsSelectItemComponent_span_1_Template, 2, 2, "span", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("nzStringTemplateOutlet", ctx.contentTemplateOutlet)("nzStringTemplateOutletContext", i0.ɵɵpureFunction1(3, _c0, ctx.contentTemplateOutletContext));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.deletable && !ctx.disabled);
        } }, dependencies: [i1.NgIf, i2.NzStringTemplateOutletDirective, i3.NzIconDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsSelectItemComponent, [{
        type: Component,
        args: [{
                selector: 'bps-select-item',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-container *nzStringTemplateOutlet="contentTemplateOutlet; context: { $implicit: contentTemplateOutletContext }">
      <div class="ant-select-selection-item-content" *ngIf="deletable; else labelTemplate">{{ label }}</div>
      <ng-template #labelTemplate>{{ label }}</ng-template>
    </ng-container>
    <span *ngIf="deletable && !disabled" class="ant-select-selection-item-remove" (click)="onDelete($event)">
      <span nz-icon nzType="close" *ngIf="!removeIcon; else removeIcon"></span>
    </span>
  `,
                host: {
                    class: 'ant-select-selection-item',
                    '[attr.title]': 'label',
                    '[class.ant-select-selection-item-disabled]': 'disabled'
                }
            }]
    }], () => [], { disabled: [{
            type: Input
        }], label: [{
            type: Input
        }], deletable: [{
            type: Input
        }], removeIcon: [{
            type: Input
        }], contentTemplateOutletContext: [{
            type: Input
        }], contentTemplateOutlet: [{
            type: Input
        }], delete: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsSelectItemComponent, { className: "BpsSelectItemComponent", filePath: "lib\\components\\bps-select\\select-item.component.ts", lineNumber: 32 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtc2VsZWN0L3NlbGVjdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUFVakIsOEJBQXFGO0lBQUEsWUFBVztJQUFBLGlCQUFNOzs7SUFBakIsY0FBVztJQUFYLGtDQUFXOzs7SUFDcEUsWUFBVzs7O0lBQVgsa0NBQVc7OztJQUZ6Qyw2QkFBb0g7SUFFbEgsQUFEQSxzRkFBcUYsMEhBQ3pEOzs7OztJQURvQixjQUFpQjtJQUFBLEFBQWpCLHVDQUFpQiw4QkFBa0I7OztJQUluRiwwQkFBeUU7Ozs7SUFEM0UsK0JBQXlHO0lBQTNCLHVMQUFTLHVCQUFnQixLQUFDO0lBQ3RHLGdGQUFrRTtJQUNwRSxpQkFBTzs7O0lBRHlCLGNBQW1CO0lBQUEsQUFBbkIseUNBQW1CLCtCQUFlOztBQVN0RSxNQUFNLE9BQU8sc0JBQXNCO0lBU2pDO1FBUlMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixVQUFLLEdBQXVDLElBQUksQ0FBQztRQUNqRCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBa0MsSUFBSSxDQUFDO1FBQ2pELGlDQUE0QixHQUFxQixJQUFJLENBQUM7UUFDdEQsMEJBQXFCLEdBQTJDLElBQUksQ0FBQztRQUMzRCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUU1QyxDQUFDO0lBRWhCLFFBQVEsQ0FBQyxDQUFhO1FBQ3BCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixDQUFDO0lBQ0gsQ0FBQzt1RkFqQlUsc0JBQXNCO29FQUF0QixzQkFBc0I7O1lBQXRCLGtFQUFzQjs7WUFWL0IsQUFKQSx5RkFBb0gsNERBSVg7O1lBSjNDLEFBQS9DLGtFQUErQywrRkFBb0Q7WUFJM0csY0FBNEI7WUFBNUIscURBQTRCOzs7aUZBVTFCLHNCQUFzQjtjQW5CbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7Ozs7OztHQVFUO2dCQUNELElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsMkJBQTJCO29CQUNsQyxjQUFjLEVBQUUsT0FBTztvQkFDdkIsNENBQTRDLEVBQUUsVUFBVTtpQkFDekQ7YUFDRjtvQkFFVSxRQUFRO2tCQUFoQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyw0QkFBNEI7a0JBQXBDLEtBQUs7WUFDRyxxQkFBcUI7a0JBQTdCLEtBQUs7WUFDYSxNQUFNO2tCQUF4QixNQUFNOztrRkFQSSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicHMtc2VsZWN0LWl0ZW0nLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZW50VGVtcGxhdGVPdXRsZXQ7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBjb250ZW50VGVtcGxhdGVPdXRsZXRDb250ZXh0IH1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uLWl0ZW0tY29udGVudFwiICpuZ0lmPVwiZGVsZXRhYmxlOyBlbHNlIGxhYmVsVGVtcGxhdGVcIj57eyBsYWJlbCB9fTwvZGl2PlxyXG4gICAgICA8bmctdGVtcGxhdGUgI2xhYmVsVGVtcGxhdGU+e3sgbGFiZWwgfX08L25nLXRlbXBsYXRlPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8c3BhbiAqbmdJZj1cImRlbGV0YWJsZSAmJiAhZGlzYWJsZWRcIiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uLWl0ZW0tcmVtb3ZlXCIgKGNsaWNrKT1cIm9uRGVsZXRlKCRldmVudClcIj5cclxuICAgICAgPHNwYW4gbnotaWNvbiBuelR5cGU9XCJjbG9zZVwiICpuZ0lmPVwiIXJlbW92ZUljb247IGVsc2UgcmVtb3ZlSWNvblwiPjwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuICBgLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnYW50LXNlbGVjdC1zZWxlY3Rpb24taXRlbScsXHJcbiAgICAnW2F0dHIudGl0bGVdJzogJ2xhYmVsJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1zZWxlY3Rpb24taXRlbS1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzU2VsZWN0SXRlbUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZCA9IG51bGw7XHJcbiAgQElucHV0KCkgZGVsZXRhYmxlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcmVtb3ZlSWNvbjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGNvbnRlbnRUZW1wbGF0ZU91dGxldENvbnRleHQ6IE56U2FmZUFueSB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGNvbnRlbnRUZW1wbGF0ZU91dGxldDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBkZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgb25EZWxldGUoZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmRlbGV0ZS5uZXh0KGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=