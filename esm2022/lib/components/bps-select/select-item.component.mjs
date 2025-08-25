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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsSelectItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsSelectItemComponent, selector: "bps-select-item", inputs: { disabled: "disabled", label: "label", deletable: "deletable", removeIcon: "removeIcon", contentTemplateOutletContext: "contentTemplateOutletContext", contentTemplateOutlet: "contentTemplateOutlet" }, outputs: { delete: "delete" }, host: { properties: { "attr.title": "label", "class.ant-select-selection-item-disabled": "disabled" }, classAttribute: "ant-select-selection-item" }, ngImport: i0, template: `
    <ng-container *nzStringTemplateOutlet="contentTemplateOutlet; context: { $implicit: contentTemplateOutletContext }">
      <div class="ant-select-selection-item-content" *ngIf="deletable; else labelTemplate">{{ label }}</div>
      <ng-template #labelTemplate>{{ label }}</ng-template>
    </ng-container>
    <span *ngIf="deletable && !disabled" class="ant-select-selection-item-remove" (click)="onDelete($event)">
      <span nz-icon nzType="close" *ngIf="!removeIcon; else removeIcon"></span>
    </span>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: i3.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsSelectItemComponent, decorators: [{
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
        }], ctorParameters: function () { return []; }, propDecorators: { disabled: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtc2VsZWN0L3NlbGVjdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7Ozs7O0FBdUJ2QixNQUFNLE9BQU8sc0JBQXNCO0lBU2pDO1FBUlMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixVQUFLLEdBQXVDLElBQUksQ0FBQztRQUNqRCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBa0MsSUFBSSxDQUFDO1FBQ2pELGlDQUE0QixHQUFxQixJQUFJLENBQUM7UUFDdEQsMEJBQXFCLEdBQTJDLElBQUksQ0FBQztRQUMzRCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUU1QyxDQUFDO0lBRWhCLFFBQVEsQ0FBQyxDQUFhO1FBQ3BCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckI7SUFDSCxDQUFDOytHQWpCVSxzQkFBc0I7bUdBQXRCLHNCQUFzQiw4YkFmdkI7Ozs7Ozs7O0dBUVQ7OzRGQU9VLHNCQUFzQjtrQkFuQmxDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSwyQkFBMkI7d0JBQ2xDLGNBQWMsRUFBRSxPQUFPO3dCQUN2Qiw0Q0FBNEMsRUFBRSxVQUFVO3FCQUN6RDtpQkFDRjswRUFFVSxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csNEJBQTRCO3NCQUFwQyxLQUFLO2dCQUNHLHFCQUFxQjtzQkFBN0IsS0FBSztnQkFDYSxNQUFNO3NCQUF4QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnBzLXNlbGVjdC1pdGVtJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudFRlbXBsYXRlT3V0bGV0OyBjb250ZXh0OiB7ICRpbXBsaWNpdDogY29udGVudFRlbXBsYXRlT3V0bGV0Q29udGV4dCB9XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbi1pdGVtLWNvbnRlbnRcIiAqbmdJZj1cImRlbGV0YWJsZTsgZWxzZSBsYWJlbFRlbXBsYXRlXCI+e3sgbGFiZWwgfX08L2Rpdj5cclxuICAgICAgPG5nLXRlbXBsYXRlICNsYWJlbFRlbXBsYXRlPnt7IGxhYmVsIH19PC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPHNwYW4gKm5nSWY9XCJkZWxldGFibGUgJiYgIWRpc2FibGVkXCIgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbi1pdGVtLXJlbW92ZVwiIChjbGljayk9XCJvbkRlbGV0ZSgkZXZlbnQpXCI+XHJcbiAgICAgIDxzcGFuIG56LWljb24gbnpUeXBlPVwiY2xvc2VcIiAqbmdJZj1cIiFyZW1vdmVJY29uOyBlbHNlIHJlbW92ZUljb25cIj48L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbiAgYCxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2FudC1zZWxlY3Qtc2VsZWN0aW9uLWl0ZW0nLFxyXG4gICAgJ1thdHRyLnRpdGxlXSc6ICdsYWJlbCcsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtc2VsZWN0aW9uLWl0ZW0tZGlzYWJsZWRdJzogJ2Rpc2FibGVkJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc1NlbGVjdEl0ZW1Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyB8IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGRlbGV0YWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHJlbW92ZUljb246IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBjb250ZW50VGVtcGxhdGVPdXRsZXRDb250ZXh0OiBOelNhZmVBbnkgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBjb250ZW50VGVtcGxhdGVPdXRsZXQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG9uRGVsZXRlKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5kZWxldGUubmV4dChlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19