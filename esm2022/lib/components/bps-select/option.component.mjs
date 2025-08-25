import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, Optional, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { NzDestroyService } from 'ng-zorro-antd/core/services';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "./option-group.component";
import * as i2 from "ng-zorro-antd/core/services";
export class BpsOptionComponent {
    constructor(nzOptionGroupComponent, destroy$) {
        this.nzOptionGroupComponent = nzOptionGroupComponent;
        this.destroy$ = destroy$;
        this.changes = new Subject();
        this.groupLabel = null;
        this.bpsLabel = null;
        this.bpsValue = null;
        this.bpsDisabled = false;
        this.bpsHide = false;
        this.bpsCustomContent = false;
    }
    ngOnInit() {
        if (this.nzOptionGroupComponent) {
            this.nzOptionGroupComponent.changes.pipe(startWith(true), takeUntil(this.destroy$)).subscribe(() => {
                this.groupLabel = this.nzOptionGroupComponent.bpsLabel;
            });
        }
    }
    ngOnChanges() {
        this.changes.next();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsOptionComponent, deps: [{ token: i1.BpsOptionGroupComponent, optional: true }, { token: i2.NzDestroyService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsOptionComponent, selector: "bps-option", inputs: { bpsTitle: "bpsTitle", bpsLabel: "bpsLabel", bpsValue: "bpsValue", bpsKey: "bpsKey", bpsDisabled: "bpsDisabled", bpsHide: "bpsHide", bpsCustomContent: "bpsCustomContent" }, providers: [NzDestroyService], viewQueries: [{ propertyName: "template", first: true, predicate: TemplateRef, descendants: true, static: true }], exportAs: ["bpsOption"], usesOnChanges: true, ngImport: i0, template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], BpsOptionComponent.prototype, "bpsDisabled", void 0);
__decorate([
    InputBoolean()
], BpsOptionComponent.prototype, "bpsHide", void 0);
__decorate([
    InputBoolean()
], BpsOptionComponent.prototype, "bpsCustomContent", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsOptionComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bps-option',
                    exportAs: 'bpsOption',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [NzDestroyService],
                    template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `
                }]
        }], ctorParameters: function () { return [{ type: i1.BpsOptionGroupComponent, decorators: [{
                    type: Optional
                }] }, { type: i2.NzDestroyService }]; }, propDecorators: { template: [{
                type: ViewChild,
                args: [TemplateRef, { static: true }]
            }], bpsTitle: [{
                type: Input
            }], bpsLabel: [{
                type: Input
            }], bpsValue: [{
                type: Input
            }], bpsKey: [{
                type: Input
            }], bpsDisabled: [{
                type: Input
            }], bpsHide: [{
                type: Input
            }], bpsCustomContent: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9vcHRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBR0wsUUFBUSxFQUNSLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFnQnZELE1BQU0sT0FBTyxrQkFBa0I7SUFnQjdCLFlBQWdDLHNCQUErQyxFQUFVLFFBQTBCO1FBQW5GLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBeUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFrQjtRQVhuSCxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUM5QixlQUFVLEdBQW9ELElBQUksQ0FBQztRQUcxRCxhQUFRLEdBQTJCLElBQUksQ0FBQztRQUN4QyxhQUFRLEdBQXFCLElBQUksQ0FBQztRQUVsQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztJQUVvRSxDQUFDO0lBRXZILFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUMvQixJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQztZQUN6RCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7K0dBNUJVLGtCQUFrQjttR0FBbEIsa0JBQWtCLDJOQVBsQixDQUFDLGdCQUFnQixDQUFDLG9FQWNsQixXQUFXLDRHQWJaOzs7O0dBSVQ7O0FBY3dCO0lBQWYsWUFBWSxFQUFFO3VEQUFxQjtBQUNwQjtJQUFmLFlBQVksRUFBRTttREFBaUI7QUFDaEI7SUFBZixZQUFZLEVBQUU7NERBQTBCOzRGQWR2QyxrQkFBa0I7a0JBWjlCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxXQUFXO29CQUNyQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUM3QixRQUFRLEVBQUU7Ozs7R0FJVDtpQkFDRjs7MEJBaUJjLFFBQVE7MkVBVHFCLFFBQVE7c0JBQWpELFNBQVM7dUJBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFDL0IsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNtQixXQUFXO3NCQUFuQyxLQUFLO2dCQUNtQixPQUFPO3NCQUEvQixLQUFLO2dCQUNtQixnQkFBZ0I7c0JBQXhDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTnpEZXN0cm95U2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgQnBzT3B0aW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL29wdGlvbi1ncm91cC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicHMtb3B0aW9uJyxcclxuICBleHBvcnRBczogJ2Jwc09wdGlvbicsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtOekRlc3Ryb3lTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLXRlbXBsYXRlPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc09wdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYnBzRGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYnBzSGlkZTogQm9vbGVhbklucHV0O1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNDdXN0b21Db250ZW50OiBCb29sZWFuSW5wdXQ7XHJcblxyXG4gIGNoYW5nZXMgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIGdyb3VwTGFiZWw6IHN0cmluZyB8IG51bWJlciB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcclxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogdHJ1ZSB9KSB0ZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPE56U2FmZUFueT47XHJcbiAgQElucHV0KCkgYnBzVGl0bGU/OiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xyXG4gIEBJbnB1dCgpIGJwc0xhYmVsOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBicHNWYWx1ZTogTnpTYWZlQW55IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgYnBzS2V5Pzogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNIaWRlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0N1c3RvbUNvbnRlbnQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSBuek9wdGlvbkdyb3VwQ29tcG9uZW50OiBCcHNPcHRpb25Hcm91cENvbXBvbmVudCwgcHJpdmF0ZSBkZXN0cm95JDogTnpEZXN0cm95U2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uek9wdGlvbkdyb3VwQ29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMubnpPcHRpb25Hcm91cENvbXBvbmVudC5jaGFuZ2VzLnBpcGUoc3RhcnRXaXRoKHRydWUpLCB0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5ncm91cExhYmVsID0gdGhpcy5uek9wdGlvbkdyb3VwQ29tcG9uZW50LmJwc0xhYmVsO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VzLm5leHQoKTtcclxuICB9XHJcbn1cclxuIl19