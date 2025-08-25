import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import * as i0 from "@angular/core";
import * as i1 from "../core/services/update-host-class.service";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsButtonGroupComponent, deps: [{ token: i1.NzUpdateHostClassService }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsButtonGroupComponent, selector: "bps-button-group", inputs: { bpsSize: "bpsSize" }, providers: [NzUpdateHostClassService], exportAs: ["bpsButtonGroup"], ngImport: i0, template: "<ng-content></ng-content>\r\n", changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsButtonGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-button-group', exportAs: 'bpsButtonGroup', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, preserveWhitespaces: false, providers: [NzUpdateHostClassService], template: "<ng-content></ng-content>\r\n" }]
        }], ctorParameters: function () { return [{ type: i1.NzUpdateHostClassService }, { type: i0.ElementRef }]; }, propDecorators: { bpsSize: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWJ1dHRvbi1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1idXR0b24vYnBzLWJ1dHRvbi1ncm91cC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1idXR0b24vYnBzLWJ1dHRvbi1ncm91cC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7O0FBWXRGLE1BQU0sT0FBTyx1QkFBdUI7SUFJbEMsSUFDSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxJQUFJLE9BQU8sQ0FBQyxLQUFvQjtRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFlBQW9CLHdCQUFrRCxFQUFVLFVBQXNCO1FBQWxGLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBWnRHLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBWW9GLENBQUM7SUFFMUcsV0FBVztRQUNULE1BQU0sU0FBUyxHQUFHLGVBQWUsQ0FBQztRQUNsQyxNQUFNLFFBQVEsR0FBRztZQUNmLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSTtZQUNqQixDQUFDLHFCQUFxQixDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDMUMsQ0FBQyxHQUFHLFNBQVMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPO1lBQzdDLENBQUMsR0FBRyxTQUFTLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTztTQUM5QyxDQUFDO1FBQ0YsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOytHQTdCVSx1QkFBdUI7bUdBQXZCLHVCQUF1QiwyRUFIdkIsQ0FBQyx3QkFBd0IsQ0FBQyx3RENYdkMsK0JBQ0E7OzRGRGFhLHVCQUF1QjtrQkFUbkMsU0FBUzsrQkFDRSxrQkFBa0IsWUFDbEIsZ0JBQWdCLG1CQUNULHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksdUJBQ2hCLEtBQUssYUFDZixDQUFDLHdCQUF3QixDQUFDO3dJQVFqQyxPQUFPO3NCQURWLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTnpTaXplTERTVHlwZSB9IGZyb20gJy4uL2NvcmUvdHlwZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicHMtYnV0dG9uLWdyb3VwJyxcclxuICBleHBvcnRBczogJ2Jwc0J1dHRvbkdyb3VwJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy1idXR0b24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNCdXR0b25Hcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBfc2l6ZTogTnpTaXplTERTVHlwZTtcclxuICBpc0luRHJvcGRvd24gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgYnBzU2l6ZSgpOiBOelNpemVMRFNUeXBlIHtcclxuICAgIHJldHVybiB0aGlzLl9zaXplO1xyXG4gIH1cclxuXHJcbiAgc2V0IGJwc1NpemUodmFsdWU6IE56U2l6ZUxEU1R5cGUpIHtcclxuICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cclxuXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBwcmVmaXhDbHMgPSAnYW50LWJ0bi1ncm91cCc7XHJcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcclxuICAgICAgW3ByZWZpeENsc106IHRydWUsXHJcbiAgICAgIFtgYW50LWRyb3Bkb3duLWJ1dHRvbmBdOiB0aGlzLmlzSW5Ecm9wZG93bixcclxuICAgICAgW2Ake3ByZWZpeENsc30tbGdgXTogdGhpcy5icHNTaXplID09PSAnbGFyZ2UnLFxyXG4gICAgICBbYCR7cHJlZml4Q2xzfS1zbWBdOiB0aGlzLmJwc1NpemUgPT09ICdzbWFsbCdcclxuICAgIH07XHJcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTWFwKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxufVxyXG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiJdfQ==