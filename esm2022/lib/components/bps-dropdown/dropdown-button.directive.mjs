import { Directive, Host, Optional } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../bps-button/bps-button-group.component";
export class BpsDropdownButtonDirective {
    constructor(renderer, nzButtonGroupComponent, elementRef) {
        this.renderer = renderer;
        this.nzButtonGroupComponent = nzButtonGroupComponent;
        this.elementRef = elementRef;
    }
    ngAfterViewInit() {
        const parentElement = this.renderer.parentNode(this.elementRef.nativeElement);
        if (this.nzButtonGroupComponent && parentElement) {
            this.renderer.addClass(parentElement, 'ant-dropdown-button');
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsDropdownButtonDirective, deps: [{ token: i0.Renderer2 }, { token: i1.BpsButtonGroupComponent, host: true, optional: true }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: BpsDropdownButtonDirective, selector: "[bps-button][bps-dropdown]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsDropdownButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bps-button][bps-dropdown]'
                }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }, { type: i1.BpsButtonGroupComponent, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }, { type: i0.ElementRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWRyb3Bkb3duL2Ryb3Bkb3duLWJ1dHRvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsSUFBSSxFQUFFLFFBQVEsRUFBYSxNQUFNLGVBQWUsQ0FBQzs7O0FBT2hHLE1BQU0sT0FBTywwQkFBMEI7SUFDckMsWUFDVSxRQUFtQixFQUNDLHNCQUErQyxFQUNuRSxVQUFzQjtRQUZ0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ0MsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF5QjtRQUNuRSxlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQzdCLENBQUM7SUFDSixlQUFlO1FBQ2IsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM5RSxJQUFJLElBQUksQ0FBQyxzQkFBc0IsSUFBSSxhQUFhLEVBQUUsQ0FBQztZQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUMvRCxDQUFDO0lBQ0gsQ0FBQzsrR0FYVSwwQkFBMEI7bUdBQTFCLDBCQUEwQjs7NEZBQTFCLDBCQUEwQjtrQkFIdEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2lCQUN2Qzs7MEJBSUksSUFBSTs7MEJBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdCwgT3B0aW9uYWwsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcHNCdXR0b25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4uL2Jwcy1idXR0b24vYnBzLWJ1dHRvbi1ncm91cC5jb21wb25lbnQnO1xyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2Jwcy1idXR0b25dW2Jwcy1kcm9wZG93bl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNEcm9wZG93bkJ1dHRvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwcml2YXRlIG56QnV0dG9uR3JvdXBDb21wb25lbnQ6IEJwc0J1dHRvbkdyb3VwQ29tcG9uZW50LFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmXHJcbiAgKSB7fVxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgaWYgKHRoaXMubnpCdXR0b25Hcm91cENvbXBvbmVudCAmJiBwYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MocGFyZW50RWxlbWVudCwgJ2FudC1kcm9wZG93bi1idXR0b24nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19