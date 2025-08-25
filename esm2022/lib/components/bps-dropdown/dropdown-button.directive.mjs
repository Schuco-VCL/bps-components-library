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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsDropdownButtonDirective, deps: [{ token: i0.Renderer2 }, { token: i1.BpsButtonGroupComponent, host: true, optional: true }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: BpsDropdownButtonDirective, selector: "[bps-button][bps-dropdown]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsDropdownButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bps-button][bps-dropdown]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i1.BpsButtonGroupComponent, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }, { type: i0.ElementRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWRyb3Bkb3duL2Ryb3Bkb3duLWJ1dHRvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsSUFBSSxFQUFFLFFBQVEsRUFBYSxNQUFNLGVBQWUsQ0FBQzs7O0FBT2hHLE1BQU0sT0FBTywwQkFBMEI7SUFDckMsWUFDVSxRQUFtQixFQUNDLHNCQUErQyxFQUNuRSxVQUFzQjtRQUZ0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ0MsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF5QjtRQUNuRSxlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQzdCLENBQUM7SUFDSixlQUFlO1FBQ2IsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM5RSxJQUFJLElBQUksQ0FBQyxzQkFBc0IsSUFBSSxhQUFhLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLHFCQUFxQixDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDOytHQVhVLDBCQUEwQjttR0FBMUIsMEJBQTBCOzs0RkFBMUIsMEJBQTBCO2tCQUh0QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7aUJBQ3ZDOzswQkFJSSxJQUFJOzswQkFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0LCBPcHRpb25hbCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJwc0J1dHRvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi4vYnBzLWJ1dHRvbi9icHMtYnV0dG9uLWdyb3VwLmNvbXBvbmVudCc7XHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYnBzLWJ1dHRvbl1bYnBzLWRyb3Bkb3duXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc0Ryb3Bkb3duQnV0dG9uRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHByaXZhdGUgbnpCdXR0b25Hcm91cENvbXBvbmVudDogQnBzQnV0dG9uR3JvdXBDb21wb25lbnQsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcclxuICApIHt9XHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgcGFyZW50RWxlbWVudCA9IHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICBpZiAodGhpcy5uekJ1dHRvbkdyb3VwQ29tcG9uZW50ICYmIHBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhwYXJlbnRFbGVtZW50LCAnYW50LWRyb3Bkb3duLWJ1dHRvbicpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=