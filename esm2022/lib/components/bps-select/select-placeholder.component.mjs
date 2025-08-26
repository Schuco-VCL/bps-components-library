import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../core/addon/string_template_outlet";
function BpsSelectPlaceholderComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.placeholder, " ");
} }
export class BpsSelectPlaceholderComponent {
    constructor() {
        this.placeholder = null;
    }
    static { this.ɵfac = function BpsSelectPlaceholderComponent_Factory(t) { return new (t || BpsSelectPlaceholderComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsSelectPlaceholderComponent, selectors: [["bps-select-placeholder"]], hostAttrs: [1, "ant-select-selection-placeholder"], inputs: { placeholder: "placeholder" }, decls: 1, vars: 1, consts: [[4, "nzStringTemplateOutlet"]], template: function BpsSelectPlaceholderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BpsSelectPlaceholderComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("nzStringTemplateOutlet", ctx.placeholder);
        } }, dependencies: [i1.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsSelectPlaceholderComponent, [{
        type: Component,
        args: [{
                selector: 'bps-select-placeholder',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-container *nzStringTemplateOutlet="placeholder">
      {{ placeholder }}
    </ng-container>
  `,
                host: { class: 'ant-select-selection-placeholder' }
            }]
    }], () => [], { placeholder: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsSelectPlaceholderComponent, { className: "BpsSelectPlaceholderComponent", filePath: "lib\\components\\bps-select\\select-placeholder.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXBsYWNlaG9sZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9zZWxlY3QtcGxhY2Vob2xkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0lBU3RHLDZCQUFvRDtJQUNsRCxZQUNGOzs7O0lBREUsY0FDRjtJQURFLG1EQUNGOztBQUlKLE1BQU0sT0FBTyw2QkFBNkI7SUFHeEM7UUFGUyxnQkFBVyxHQUEyQyxJQUFJLENBQUM7SUFFckQsQ0FBQzs4RkFITCw2QkFBNkI7b0VBQTdCLDZCQUE2QjtZQU50QyxnR0FBb0Q7O1lBQXJDLHdEQUFtQzs7O2lGQU16Qyw2QkFBNkI7Y0FYekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7O0dBSVQ7Z0JBQ0QsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLGtDQUFrQyxFQUFFO2FBQ3BEO29CQUVVLFdBQVc7a0JBQW5CLEtBQUs7O2tGQURLLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicHMtc2VsZWN0LXBsYWNlaG9sZGVyJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwicGxhY2Vob2xkZXJcIj5cclxuICAgICAge3sgcGxhY2Vob2xkZXIgfX1cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGAsXHJcbiAgaG9zdDogeyBjbGFzczogJ2FudC1zZWxlY3Qtc2VsZWN0aW9uLXBsYWNlaG9sZGVyJyB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNTZWxlY3RQbGFjZWhvbGRlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG59XHJcbiJdfQ==