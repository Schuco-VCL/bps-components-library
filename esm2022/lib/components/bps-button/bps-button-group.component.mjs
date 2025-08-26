import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import * as i0 from "@angular/core";
import * as i1 from "../core/services/update-host-class.service";
const _c0 = ["*"];
export class BpsButtonGroupComponent {
    get bpsSize() {
        return this._size;
    }
    set bpsSize(value) {
        this._size = value;
        this.setClassMap();
    }
    constructor(nzUpdateHostClassService, elementRef) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.isInDropdown = false;
    }
    setClassMap() {
        const prefixCls = 'ant-btn-group';
        const classMap = {
            [prefixCls]: true,
            [`ant-dropdown-button`]: this.isInDropdown,
            [`${prefixCls}-lg`]: this.bpsSize === 'large',
            [`${prefixCls}-sm`]: this.bpsSize === 'small'
        };
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, classMap);
    }
    ngOnInit() {
        this.setClassMap();
    }
    static { this.ɵfac = function BpsButtonGroupComponent_Factory(t) { return new (t || BpsButtonGroupComponent)(i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService), i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsButtonGroupComponent, selectors: [["bps-button-group"]], inputs: { bpsSize: "bpsSize" }, exportAs: ["bpsButtonGroup"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService])], ngContentSelectors: _c0, decls: 1, vars: 0, template: function BpsButtonGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsButtonGroupComponent, [{
        type: Component,
        args: [{ selector: 'bps-button-group', exportAs: 'bpsButtonGroup', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, preserveWhitespaces: false, providers: [NzUpdateHostClassService], template: "<ng-content></ng-content>\r\n" }]
    }], () => [{ type: i1.NzUpdateHostClassService }, { type: i0.ElementRef }], { bpsSize: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsButtonGroupComponent, { className: "BpsButtonGroupComponent", filePath: "lib\\components\\bps-button\\bps-button-group.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWJ1dHRvbi1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1idXR0b24vYnBzLWJ1dHRvbi1ncm91cC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1idXR0b24vYnBzLWJ1dHRvbi1ncm91cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7OztBQVl0RixNQUFNLE9BQU8sdUJBQXVCO0lBSWxDLElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBSSxPQUFPLENBQUMsS0FBb0I7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxZQUFvQix3QkFBa0QsRUFBVSxVQUFzQjtRQUFsRiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVp0RyxpQkFBWSxHQUFHLEtBQUssQ0FBQztJQVlvRixDQUFDO0lBRTFHLFdBQVc7UUFDVCxNQUFNLFNBQVMsR0FBRyxlQUFlLENBQUM7UUFDbEMsTUFBTSxRQUFRLEdBQUc7WUFDZixDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUk7WUFDakIsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQzFDLENBQUMsR0FBRyxTQUFTLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTztZQUM3QyxDQUFDLEdBQUcsU0FBUyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxLQUFLLE9BQU87U0FDOUMsQ0FBQztRQUNGLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzt3RkE3QlUsdUJBQXVCO29FQUF2Qix1QkFBdUIsb0lBSHZCLENBQUMsd0JBQXdCLENBQUM7O1lDWHZDLGtCQUF5Qjs7O2lGRGNaLHVCQUF1QjtjQVRuQyxTQUFTOzJCQUNFLGtCQUFrQixZQUNsQixnQkFBZ0IsbUJBQ1QsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSx1QkFDaEIsS0FBSyxhQUNmLENBQUMsd0JBQXdCLENBQUM7a0ZBUWpDLE9BQU87a0JBRFYsS0FBSzs7a0ZBSkssdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XHJcbmltcG9ydCB7IE56U2l6ZUxEU1R5cGUgfSBmcm9tICcuLi9jb3JlL3R5cGVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnBzLWJ1dHRvbi1ncm91cCcsXHJcbiAgZXhwb3J0QXM6ICdicHNCdXR0b25Hcm91cCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9icHMtYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzQnV0dG9uR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHByaXZhdGUgX3NpemU6IE56U2l6ZUxEU1R5cGU7XHJcbiAgaXNJbkRyb3Bkb3duID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGJwc1NpemUoKTogTnpTaXplTERTVHlwZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcclxuICB9XHJcblxyXG4gIHNldCBicHNTaXplKHZhbHVlOiBOelNpemVMRFNUeXBlKSB7XHJcbiAgICB0aGlzLl9zaXplID0gdmFsdWU7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJlZml4Q2xzID0gJ2FudC1idG4tZ3JvdXAnO1xyXG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XHJcbiAgICAgIFtwcmVmaXhDbHNdOiB0cnVlLFxyXG4gICAgICBbYGFudC1kcm9wZG93bi1idXR0b25gXTogdGhpcy5pc0luRHJvcGRvd24sXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9LWxnYF06IHRoaXMuYnBzU2l6ZSA9PT0gJ2xhcmdlJyxcclxuICAgICAgW2Ake3ByZWZpeENsc30tc21gXTogdGhpcy5icHNTaXplID09PSAnc21hbGwnXHJcbiAgICB9O1xyXG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc01hcCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcbn1cclxuIiwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4iXX0=