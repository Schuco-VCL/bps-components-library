import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../core/addon/string_template_outlet";
export class BpsSelectPlaceholderComponent {
    constructor() {
        this.placeholder = null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsSelectPlaceholderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BpsSelectPlaceholderComponent, selector: "bps-select-placeholder", inputs: { placeholder: "placeholder" }, host: { classAttribute: "ant-select-selection-placeholder" }, ngImport: i0, template: `
    <ng-container *nzStringTemplateOutlet="placeholder">
      {{ placeholder }}
    </ng-container>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsSelectPlaceholderComponent, decorators: [{
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
        }], ctorParameters: () => [], propDecorators: { placeholder: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXBsYWNlaG9sZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9zZWxlY3QtcGxhY2Vob2xkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFlMUcsTUFBTSxPQUFPLDZCQUE2QjtJQUd4QztRQUZTLGdCQUFXLEdBQTJDLElBQUksQ0FBQztJQUVyRCxDQUFDOytHQUhMLDZCQUE2QjttR0FBN0IsNkJBQTZCLG9LQVA5Qjs7OztHQUlUOzs0RkFHVSw2QkFBNkI7a0JBWHpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUU7Ozs7R0FJVDtvQkFDRCxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsa0NBQWtDLEVBQUU7aUJBQ3BEO3dEQUVVLFdBQVc7c0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnBzLXNlbGVjdC1wbGFjZWhvbGRlcicsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInBsYWNlaG9sZGVyXCI+XHJcbiAgICAgIHt7IHBsYWNlaG9sZGVyIH19XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICBgLFxyXG4gIGhvc3Q6IHsgY2xhc3M6ICdhbnQtc2VsZWN0LXNlbGVjdGlvbi1wbGFjZWhvbGRlcicgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzU2VsZWN0UGxhY2Vob2xkZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iXX0=