import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../core/addon/string_template_outlet";
export class BpsOptionItemGroupComponent {
    constructor() {
        this.bpsLabel = null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsOptionItemGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BpsOptionItemGroupComponent, selector: "bps-option-item-group", inputs: { bpsLabel: "bpsLabel" }, host: { classAttribute: "ant-select-item ant-select-item-group" }, ngImport: i0, template: ` <ng-container *nzStringTemplateOutlet="bpsLabel">{{ bpsLabel }}</ng-container> `, isInline: true, dependencies: [{ kind: "directive", type: i1.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsOptionItemGroupComponent, decorators: [{
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
        }], ctorParameters: () => [], propDecorators: { bpsLabel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWl0ZW0tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtc2VsZWN0L29wdGlvbi1pdGVtLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBYTFHLE1BQU0sT0FBTywyQkFBMkI7SUFHdEM7UUFGUyxhQUFRLEdBQW9ELElBQUksQ0FBQztJQUUzRCxDQUFDOytHQUhMLDJCQUEyQjttR0FBM0IsMkJBQTJCLGtLQVA1QixrRkFBa0Y7OzRGQU9qRiwyQkFBMkI7a0JBVHZDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsUUFBUSxFQUFFLGtGQUFrRjtvQkFDNUYsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLHVDQUF1QztxQkFDL0M7aUJBQ0Y7d0RBRVUsUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jwcy1vcHRpb24taXRlbS1ncm91cCcsXHJcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImJwc0xhYmVsXCI+e3sgYnBzTGFiZWwgfX08L25nLWNvbnRhaW5lcj4gYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnYW50LXNlbGVjdC1pdGVtIGFudC1zZWxlY3QtaXRlbS1ncm91cCdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNPcHRpb25JdGVtR3JvdXBDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGJwc0xhYmVsOiBzdHJpbmcgfCBudW1iZXIgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iXX0=