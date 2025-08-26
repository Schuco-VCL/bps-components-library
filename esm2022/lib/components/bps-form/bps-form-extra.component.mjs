import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { warnDeprecation } from 'ng-zorro-antd/core/logger';
import * as i0 from "@angular/core";
const _c0 = ["*"];
/**
 * @deprecated Use `[bpsExtra]` in `BpsFormControlComponent` instead, will remove in 9.0.0.
 */
export class BpsFormExtraComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-extra');
        warnDeprecation(`'bps-form-extra' is going to be removed in 9.0.0. Use [bpsExtra] in bps-form-control instead. Read https://ng.ant.design/components/form/en`);
    }
    static { this.ɵfac = function BpsFormExtraComponent_Factory(t) { return new (t || BpsFormExtraComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsFormExtraComponent, selectors: [["bps-form-extra"]], exportAs: ["bpsFormExtra"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function BpsFormExtraComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, styles: ["bps-form-extra{display:block}\n"], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsFormExtraComponent, [{
        type: Component,
        args: [{ selector: 'bps-form-extra', exportAs: 'bpsFormExtra', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", styles: ["bps-form-extra{display:block}\n"] }]
    }], () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsFormExtraComponent, { className: "BpsFormExtraComponent", filePath: "lib\\components\\bps-form\\bps-form-extra.component.ts", lineNumber: 22 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWZvcm0tZXh0cmEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtZm9ybS9icHMtZm9ybS1leHRyYS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1mb3JtL2Jwcy1mb3JtLWV4dHJhLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQXlCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBaUI1RDs7R0FFRztBQUNILE1BQU0sT0FBTyxxQkFBcUI7SUFDaEMsWUFBbUIsVUFBc0IsRUFBVSxRQUFtQjtRQUFuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNwRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3hFLGVBQWUsQ0FDYiw2SUFBNkksQ0FDOUksQ0FBQztJQUNKLENBQUM7c0ZBTlUscUJBQXFCO29FQUFyQixxQkFBcUI7O1lDckJsQyxrQkFBeUI7OztpRkRxQloscUJBQXFCO2NBbEJqQyxTQUFTOzJCQUNFLGdCQUFnQixZQUNoQixjQUFjLHVCQUVILEtBQUssaUJBQ1gsaUJBQWlCLENBQUMsSUFBSSxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTTs7a0ZBWXBDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgd2FybkRlcHJlY2F0aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2xvZ2dlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jwcy1mb3JtLWV4dHJhJyxcclxuICBleHBvcnRBczogJ2Jwc0Zvcm1FeHRyYScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy1mb3JtLWV4dHJhLmNvbXBvbmVudC5odG1sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBicHMtZm9ybS1leHRyYSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbi8qKlxyXG4gKiBAZGVwcmVjYXRlZCBVc2UgYFticHNFeHRyYV1gIGluIGBCcHNGb3JtQ29udHJvbENvbXBvbmVudGAgaW5zdGVhZCwgd2lsbCByZW1vdmUgaW4gOS4wLjAuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQnBzRm9ybUV4dHJhQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWZvcm0tZXh0cmEnKTtcclxuICAgIHdhcm5EZXByZWNhdGlvbihcclxuICAgICAgYCdicHMtZm9ybS1leHRyYScgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC4gVXNlIFticHNFeHRyYV0gaW4gYnBzLWZvcm0tY29udHJvbCBpbnN0ZWFkLiBSZWFkIGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2Zvcm0vZW5gXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+Il19