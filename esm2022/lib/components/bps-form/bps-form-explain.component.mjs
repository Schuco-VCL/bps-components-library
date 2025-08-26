import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { helpMotion } from 'ng-zorro-antd/core/animation';
import { warnDeprecation } from 'ng-zorro-antd/core/logger';
import * as i0 from "@angular/core";
const _c0 = ["*"];
/**
 * @deprecated Use `[bpsSuccessTip] | [bpsWarningTip] | [bpsErrorTip] | [bpsValidatingTip]` in `bpsFormControlComponent` instead, will remove in 9.0.0.
 */
export class BpsFormExplainComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-explain');
        warnDeprecation(`'bps-form-explain' is going to be removed in 9.0.0. Use [bpsSuccessTip] | [bpsWarningTip] | [bpsErrorTip] | [bpsValidatingTip] in bps-form-control instead. Read https://ng.ant.design/components/form/en`);
    }
    static { this.ɵfac = function BpsFormExplainComponent_Factory(t) { return new (t || BpsFormExplainComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsFormExplainComponent, selectors: [["bps-form-explain"]], exportAs: ["bpsFormExplain"], ngContentSelectors: _c0, decls: 2, vars: 1, template: function BpsFormExplainComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("@helpMotion", undefined);
        } }, styles: ["bps-form-explain{display:block}\n"], encapsulation: 2, data: { animation: [helpMotion] }, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsFormExplainComponent, [{
        type: Component,
        args: [{ selector: 'bps-form-explain', exportAs: 'bpsFormExplain', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, animations: [helpMotion], template: "<div [@helpMotion]>\r\n  <ng-content></ng-content>\r\n</div>", styles: ["bps-form-explain{display:block}\n"] }]
    }], () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsFormExplainComponent, { className: "BpsFormExplainComponent", filePath: "lib\\components\\bps-form\\bps-form-explain.component.ts", lineNumber: 24 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWZvcm0tZXhwbGFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1mb3JtL2Jwcy1mb3JtLWV4cGxhaW4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtZm9ybS9icHMtZm9ybS1leHBsYWluLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQXlCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQWtCNUQ7O0dBRUc7QUFDSCxNQUFNLE9BQU8sdUJBQXVCO0lBQ2xDLFlBQW1CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDcEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUMxRSxlQUFlLENBQ2IsMk1BQTJNLENBQzVNLENBQUM7SUFDSixDQUFDO3dGQU5VLHVCQUF1QjtvRUFBdkIsdUJBQXVCOztZQ3ZCcEMsMkJBQW1CO1lBQ2pCLGtCQUF5QjtZQUMzQixpQkFBTTs7WUFGRCx1Q0FBYTtpR0RVSixDQUFDLFVBQVUsQ0FBQzs7aUZBYWIsdUJBQXVCO2NBbkJuQyxTQUFTOzJCQUNFLGtCQUFrQixZQUNsQixnQkFBZ0IsdUJBQ0wsS0FBSyxpQkFDWCxpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNLGNBQ25DLENBQUMsVUFBVSxDQUFDOztrRkFhYix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGhlbHBNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgd2FybkRlcHJlY2F0aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2xvZ2dlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jwcy1mb3JtLWV4cGxhaW4nLFxyXG4gIGV4cG9ydEFzOiAnYnBzRm9ybUV4cGxhaW4nLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgYW5pbWF0aW9uczogW2hlbHBNb3Rpb25dLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9icHMtZm9ybS1leHBsYWluLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgYnBzLWZvcm0tZXhwbGFpbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCBVc2UgYFticHNTdWNjZXNzVGlwXSB8IFticHNXYXJuaW5nVGlwXSB8IFticHNFcnJvclRpcF0gfCBbYnBzVmFsaWRhdGluZ1RpcF1gIGluIGBicHNGb3JtQ29udHJvbENvbXBvbmVudGAgaW5zdGVhZCwgd2lsbCByZW1vdmUgaW4gOS4wLjAuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQnBzRm9ybUV4cGxhaW5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtZm9ybS1leHBsYWluJyk7XHJcbiAgICB3YXJuRGVwcmVjYXRpb24oXHJcbiAgICAgIGAnYnBzLWZvcm0tZXhwbGFpbicgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC4gVXNlIFticHNTdWNjZXNzVGlwXSB8IFticHNXYXJuaW5nVGlwXSB8IFticHNFcnJvclRpcF0gfCBbYnBzVmFsaWRhdGluZ1RpcF0gaW4gYnBzLWZvcm0tY29udHJvbCBpbnN0ZWFkLiBSZWFkIGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2Zvcm0vZW5gXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IFtAaGVscE1vdGlvbl0+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj4iXX0=