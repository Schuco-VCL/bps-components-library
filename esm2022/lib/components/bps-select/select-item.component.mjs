import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../core/addon/string_template_outlet";
import * as i3 from "ng-zorro-antd/icon";
export class BpsSelectItemComponent {
    constructor() {
        this.disabled = false;
        this.label = null;
        this.deletable = false;
        this.removeIcon = null;
        this.contentTemplateOutletContext = null;
        this.contentTemplateOutlet = null;
        this.delete = new EventEmitter();
    }
    onDelete(e) {
        e.preventDefault();
        e.stopPropagation();
        if (!this.disabled) {
            this.delete.next(e);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsSelectItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BpsSelectItemComponent, selector: "bps-select-item", inputs: { disabled: "disabled", label: "label", deletable: "deletable", removeIcon: "removeIcon", contentTemplateOutletContext: "contentTemplateOutletContext", contentTemplateOutlet: "contentTemplateOutlet" }, outputs: { delete: "delete" }, host: { properties: { "attr.title": "label", "class.ant-select-selection-item-disabled": "disabled" }, classAttribute: "ant-select-selection-item" }, ngImport: i0, template: `
    <ng-container *nzStringTemplateOutlet="contentTemplateOutlet; context: { $implicit: contentTemplateOutletContext }">
      <div class="ant-select-selection-item-content" *ngIf="deletable; else labelTemplate">{{ label }}</div>
      <ng-template #labelTemplate>{{ label }}</ng-template>
    </ng-container>
    <span *ngIf="deletable && !disabled" class="ant-select-selection-item-remove" (click)="onDelete($event)">
      <span nz-icon nzType="close" *ngIf="!removeIcon; else removeIcon"></span>
    </span>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: i3.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsSelectItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bps-select-item',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
    <ng-container *nzStringTemplateOutlet="contentTemplateOutlet; context: { $implicit: contentTemplateOutletContext }">
      <div class="ant-select-selection-item-content" *ngIf="deletable; else labelTemplate">{{ label }}</div>
      <ng-template #labelTemplate>{{ label }}</ng-template>
    </ng-container>
    <span *ngIf="deletable && !disabled" class="ant-select-selection-item-remove" (click)="onDelete($event)">
      <span nz-icon nzType="close" *ngIf="!removeIcon; else removeIcon"></span>
    </span>
  `,
                    host: {
                        class: 'ant-select-selection-item',
                        '[attr.title]': 'label',
                        '[class.ant-select-selection-item-disabled]': 'disabled'
                    }
                }]
        }], ctorParameters: () => [], propDecorators: { disabled: [{
                type: Input
            }], label: [{
                type: Input
            }], deletable: [{
                type: Input
            }], removeIcon: [{
                type: Input
            }], contentTemplateOutletContext: [{
                type: Input
            }], contentTemplateOutlet: [{
                type: Input
            }], delete: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtc2VsZWN0L3NlbGVjdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7Ozs7O0FBdUJ2QixNQUFNLE9BQU8sc0JBQXNCO0lBU2pDO1FBUlMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixVQUFLLEdBQXVDLElBQUksQ0FBQztRQUNqRCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBa0MsSUFBSSxDQUFDO1FBQ2pELGlDQUE0QixHQUFxQixJQUFJLENBQUM7UUFDdEQsMEJBQXFCLEdBQTJDLElBQUksQ0FBQztRQUMzRCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUU1QyxDQUFDO0lBRWhCLFFBQVEsQ0FBQyxDQUFhO1FBQ3BCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixDQUFDO0lBQ0gsQ0FBQzsrR0FqQlUsc0JBQXNCO21HQUF0QixzQkFBc0IsOGJBZnZCOzs7Ozs7OztHQVFUOzs0RkFPVSxzQkFBc0I7a0JBbkJsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFOzs7Ozs7OztHQVFUO29CQUNELElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsMkJBQTJCO3dCQUNsQyxjQUFjLEVBQUUsT0FBTzt3QkFDdkIsNENBQTRDLEVBQUUsVUFBVTtxQkFDekQ7aUJBQ0Y7d0RBRVUsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLDRCQUE0QjtzQkFBcEMsS0FBSztnQkFDRyxxQkFBcUI7c0JBQTdCLEtBQUs7Z0JBQ2EsTUFBTTtzQkFBeEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jwcy1zZWxlY3QtaXRlbScsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImNvbnRlbnRUZW1wbGF0ZU91dGxldDsgY29udGV4dDogeyAkaW1wbGljaXQ6IGNvbnRlbnRUZW1wbGF0ZU91dGxldENvbnRleHQgfVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb24taXRlbS1jb250ZW50XCIgKm5nSWY9XCJkZWxldGFibGU7IGVsc2UgbGFiZWxUZW1wbGF0ZVwiPnt7IGxhYmVsIH19PC9kaXY+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjbGFiZWxUZW1wbGF0ZT57eyBsYWJlbCB9fTwvbmctdGVtcGxhdGU+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDxzcGFuICpuZ0lmPVwiZGVsZXRhYmxlICYmICFkaXNhYmxlZFwiIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb24taXRlbS1yZW1vdmVcIiAoY2xpY2spPVwib25EZWxldGUoJGV2ZW50KVwiPlxyXG4gICAgICA8c3BhbiBuei1pY29uIG56VHlwZT1cImNsb3NlXCIgKm5nSWY9XCIhcmVtb3ZlSWNvbjsgZWxzZSByZW1vdmVJY29uXCI+PC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gIGAsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdhbnQtc2VsZWN0LXNlbGVjdGlvbi1pdGVtJyxcclxuICAgICdbYXR0ci50aXRsZV0nOiAnbGFiZWwnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXNlbGVjdGlvbi1pdGVtLWRpc2FibGVkXSc6ICdkaXNhYmxlZCdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNTZWxlY3RJdGVtQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkID0gbnVsbDtcclxuICBASW5wdXQoKSBkZWxldGFibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSByZW1vdmVJY29uOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgY29udGVudFRlbXBsYXRlT3V0bGV0Q29udGV4dDogTnpTYWZlQW55IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgY29udGVudFRlbXBsYXRlT3V0bGV0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGRlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBvbkRlbGV0ZShlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuZGVsZXRlLm5leHQoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==