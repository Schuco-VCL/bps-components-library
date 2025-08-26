import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class NzCheckboxWrapperComponent {
    constructor() {
        this.nzOnChange = new EventEmitter();
        this.checkboxList = [];
    }
    addCheckbox(value) {
        this.checkboxList.push(value);
    }
    removeCheckbox(value) {
        this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
    }
    onChange() {
        const listOfCheckedValue = this.checkboxList.filter(item => item.bpsChecked).map(item => item.bpsValue);
        this.nzOnChange.emit(listOfCheckedValue);
    }
    static { this.ɵfac = function NzCheckboxWrapperComponent_Factory(t) { return new (t || NzCheckboxWrapperComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NzCheckboxWrapperComponent, selectors: [["nz-checkbox-wrapper"]], hostAttrs: [1, "ant-checkbox-group"], outputs: { nzOnChange: "nzOnChange" }, exportAs: ["nzCheckboxWrapper"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzCheckboxWrapperComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzCheckboxWrapperComponent, [{
        type: Component,
        args: [{
                selector: 'nz-checkbox-wrapper',
                exportAs: 'nzCheckboxWrapper',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: ` <ng-content></ng-content> `,
                host: {
                    class: 'ant-checkbox-group'
                }
            }]
    }], null, { nzOnChange: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NzCheckboxWrapperComponent, { className: "NzCheckboxWrapperComponent", filePath: "lib\\components\\bps-checkbox\\bps-checkbox-wrapper.component.ts", lineNumber: 18 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWNoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtY2hlY2tib3gvYnBzLWNoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBaUI1RyxNQUFNLE9BQU8sMEJBQTBCO0lBWHZDO1FBWXFCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO1FBQ3hELGlCQUFZLEdBQTJCLEVBQUUsQ0FBQztLQWNuRDtJQVpDLFdBQVcsQ0FBQyxLQUEyQjtRQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQTJCO1FBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUMzQyxDQUFDOzJGQWZVLDBCQUEwQjtvRUFBMUIsMEJBQTBCOztZQUx6QixrQkFBeUI7OztpRkFLMUIsMEJBQTBCO2NBWHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsb0JBQW9CO2lCQUM1QjthQUNGO2dCQUVvQixVQUFVO2tCQUE1QixNQUFNOztrRkFESSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcblxyXG5pbXBvcnQgeyBCcHNDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4vYnBzLWNoZWNrYm94LmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ256LWNoZWNrYm94LXdyYXBwZXInLFxyXG4gIGV4cG9ydEFzOiAnbnpDaGVja2JveFdyYXBwZXInLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnYW50LWNoZWNrYm94LWdyb3VwJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q2hlY2tib3hXcmFwcGVyQ29tcG9uZW50IHtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpTYWZlQW55W10+KCk7XHJcbiAgcHJpdmF0ZSBjaGVja2JveExpc3Q6IEJwc0NoZWNrYm94Q29tcG9uZW50W10gPSBbXTtcclxuXHJcbiAgYWRkQ2hlY2tib3godmFsdWU6IEJwc0NoZWNrYm94Q29tcG9uZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrYm94TGlzdC5wdXNoKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUNoZWNrYm94KHZhbHVlOiBCcHNDaGVja2JveENvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGVja2JveExpc3Quc3BsaWNlKHRoaXMuY2hlY2tib3hMaXN0LmluZGV4T2YodmFsdWUpLCAxKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgbGlzdE9mQ2hlY2tlZFZhbHVlID0gdGhpcy5jaGVja2JveExpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5icHNDaGVja2VkKS5tYXAoaXRlbSA9PiBpdGVtLmJwc1ZhbHVlKTtcclxuICAgIHRoaXMubnpPbkNoYW5nZS5lbWl0KGxpc3RPZkNoZWNrZWRWYWx1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==