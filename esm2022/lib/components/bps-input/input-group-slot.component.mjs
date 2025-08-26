import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../core/addon/string_template_outlet";
import * as i3 from "ng-zorro-antd/icon";
export class BpsInputGroupSlotComponent {
    constructor() {
        this.icon = null;
        this.type = null;
        this.template = null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsInputGroupSlotComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BpsInputGroupSlotComponent, selector: "[bps-input-group-slot]", inputs: { icon: "icon", type: "type", template: "template" }, host: { properties: { "class.ant-input-group-addon": "type === 'addon'", "class.ant-input-prefix": "type === 'prefix'", "class.ant-input-suffix": "type === 'suffix'" } }, ngImport: i0, template: `
    <i nz-icon [nzType]="icon" *ngIf="icon"></i>
    <ng-container *nzStringTemplateOutlet="template">{{ template }}</ng-container>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: i3.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsInputGroupSlotComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[bps-input-group-slot]',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
    <i nz-icon [nzType]="icon" *ngIf="icon"></i>
    <ng-container *nzStringTemplateOutlet="template">{{ template }}</ng-container>
  `,
                    host: {
                        '[class.ant-input-group-addon]': `type === 'addon'`,
                        '[class.ant-input-prefix]': `type === 'prefix'`,
                        '[class.ant-input-suffix]': `type === 'suffix'`
                    }
                }]
        }], propDecorators: { icon: [{
                type: Input
            }], type: [{
                type: Input
            }], template: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZ3JvdXAtc2xvdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1pbnB1dC9pbnB1dC1ncm91cC1zbG90LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFpQjFHLE1BQU0sT0FBTywwQkFBMEI7SUFmdkM7UUFnQlcsU0FBSSxHQUFtQixJQUFJLENBQUM7UUFDNUIsU0FBSSxHQUF5QyxJQUFJLENBQUM7UUFDbEQsYUFBUSxHQUF1QyxJQUFJLENBQUM7S0FDOUQ7K0dBSlksMEJBQTBCO21HQUExQiwwQkFBMEIsdVNBVjNCOzs7R0FHVDs7NEZBT1UsMEJBQTBCO2tCQWZ0QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFOzs7R0FHVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osK0JBQStCLEVBQUUsa0JBQWtCO3dCQUNuRCwwQkFBMEIsRUFBRSxtQkFBbUI7d0JBQy9DLDBCQUEwQixFQUFFLG1CQUFtQjtxQkFDaEQ7aUJBQ0Y7OEJBRVUsSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbYnBzLWlucHV0LWdyb3VwLXNsb3RdJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8aSBuei1pY29uIFtuelR5cGVdPVwiaWNvblwiICpuZ0lmPVwiaWNvblwiPjwvaT5cclxuICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZVwiPnt7IHRlbXBsYXRlIH19PC9uZy1jb250YWluZXI+XHJcbiAgYCxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ncm91cC1hZGRvbl0nOiBgdHlwZSA9PT0gJ2FkZG9uJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1wcmVmaXhdJzogYHR5cGUgPT09ICdwcmVmaXgnYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LXN1ZmZpeF0nOiBgdHlwZSA9PT0gJ3N1ZmZpeCdgXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzSW5wdXRHcm91cFNsb3RDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGljb24/OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSB0eXBlOiAnYWRkb24nIHwgJ3ByZWZpeCcgfCAnc3VmZml4JyB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIHRlbXBsYXRlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcclxufVxyXG4iXX0=