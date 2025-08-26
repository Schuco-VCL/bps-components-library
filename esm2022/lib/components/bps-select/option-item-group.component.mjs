import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../core/addon/string_template_outlet";
function BpsOptionItemGroupComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.bpsLabel);
} }
export class BpsOptionItemGroupComponent {
    constructor() {
        this.bpsLabel = null;
    }
    static { this.ɵfac = function BpsOptionItemGroupComponent_Factory(t) { return new (t || BpsOptionItemGroupComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsOptionItemGroupComponent, selectors: [["bps-option-item-group"]], hostAttrs: [1, "ant-select-item", "ant-select-item-group"], inputs: { bpsLabel: "bpsLabel" }, decls: 1, vars: 1, consts: [[4, "nzStringTemplateOutlet"]], template: function BpsOptionItemGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BpsOptionItemGroupComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("nzStringTemplateOutlet", ctx.bpsLabel);
        } }, dependencies: [i1.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsOptionItemGroupComponent, [{
        type: Component,
        args: [{
                selector: 'bps-option-item-group',
                template: ` <ng-container *nzStringTemplateOutlet="bpsLabel">{{ bpsLabel }}</ng-container> `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    class: 'ant-select-item ant-select-item-group'
                }
            }]
    }], () => [], { bpsLabel: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsOptionItemGroupComponent, { className: "BpsOptionItemGroupComponent", filePath: "lib\\components\\bps-select\\option-item-group.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWl0ZW0tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtc2VsZWN0L29wdGlvbi1pdGVtLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztJQU01Riw2QkFBaUQ7SUFBQSxZQUFjOzs7O0lBQWQsY0FBYztJQUFkLHFDQUFjOztBQU83RSxNQUFNLE9BQU8sMkJBQTJCO0lBR3RDO1FBRlMsYUFBUSxHQUFvRCxJQUFJLENBQUM7SUFFM0QsQ0FBQzs0RkFITCwyQkFBMkI7b0VBQTNCLDJCQUEyQjtZQVAxQiw4RkFBaUQ7O1lBQWxDLHFEQUFnQzs7O2lGQU9oRCwyQkFBMkI7Y0FUdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRSxrRkFBa0Y7Z0JBQzVGLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSx1Q0FBdUM7aUJBQy9DO2FBQ0Y7b0JBRVUsUUFBUTtrQkFBaEIsS0FBSzs7a0ZBREssMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnBzLW9wdGlvbi1pdGVtLWdyb3VwJyxcclxuICB0ZW1wbGF0ZTogYCA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiYnBzTGFiZWxcIj57eyBicHNMYWJlbCB9fTwvbmctY29udGFpbmVyPiBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdhbnQtc2VsZWN0LWl0ZW0gYW50LXNlbGVjdC1pdGVtLWdyb3VwJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc09wdGlvbkl0ZW1Hcm91cENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgYnBzTGFiZWw6IHN0cmluZyB8IG51bWJlciB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiJdfQ==