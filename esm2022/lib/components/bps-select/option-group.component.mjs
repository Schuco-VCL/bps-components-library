import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class BpsOptionGroupComponent {
    constructor() {
        this.bpsLabel = null;
        this.changes = new Subject();
    }
    ngOnChanges() {
        this.changes.next();
    }
    static { this.ɵfac = function BpsOptionGroupComponent_Factory(t) { return new (t || BpsOptionGroupComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsOptionGroupComponent, selectors: [["bps-option-group"]], inputs: { bpsLabel: "bpsLabel" }, exportAs: ["bpsOptionGroup"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function BpsOptionGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsOptionGroupComponent, [{
        type: Component,
        args: [{
                selector: 'bps-option-group',
                exportAs: 'bpsOptionGroup',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <ng-content></ng-content> `
            }]
    }], null, { bpsLabel: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsOptionGroupComponent, { className: "BpsOptionGroupComponent", filePath: "lib\\components\\bps-select\\option-group.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9vcHRpb24tZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUEwQixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFXL0IsTUFBTSxPQUFPLHVCQUF1QjtJQVBwQztRQVFXLGFBQVEsR0FBb0QsSUFBSSxDQUFDO1FBQzFFLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0tBSS9CO0lBSEMsV0FBVztRQUNULElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQzt3RkFMVSx1QkFBdUI7b0VBQXZCLHVCQUF1Qjs7WUFGdEIsa0JBQXlCOzs7aUZBRTFCLHVCQUF1QjtjQVBuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsNkJBQTZCO2FBQ3hDO2dCQUVVLFFBQVE7a0JBQWhCLEtBQUs7O2tGQURLLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicHMtb3B0aW9uLWdyb3VwJyxcclxuICBleHBvcnRBczogJ2Jwc09wdGlvbkdyb3VwJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzT3B0aW9uR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGJwc0xhYmVsOiBzdHJpbmcgfCBudW1iZXIgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XHJcbiAgY2hhbmdlcyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZXMubmV4dCgpO1xyXG4gIH1cclxufVxyXG4iXX0=