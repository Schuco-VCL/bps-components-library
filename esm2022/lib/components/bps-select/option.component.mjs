import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, Optional, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { NzDestroyService } from 'ng-zorro-antd/core/services';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "./option-group.component";
import * as i2 from "ng-zorro-antd/core/services";
const _c0 = ["*"];
function BpsOptionComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
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
    static { this.ɵfac = function BpsOptionComponent_Factory(t) { return new (t || BpsOptionComponent)(i0.ɵɵdirectiveInject(i1.BpsOptionGroupComponent, 8), i0.ɵɵdirectiveInject(i2.NzDestroyService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsOptionComponent, selectors: [["bps-option"]], viewQuery: function BpsOptionComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(TemplateRef, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.template = _t.first);
        } }, inputs: { bpsTitle: "bpsTitle", bpsLabel: "bpsLabel", bpsValue: "bpsValue", bpsKey: "bpsKey", bpsDisabled: "bpsDisabled", bpsHide: "bpsHide", bpsCustomContent: "bpsCustomContent" }, exportAs: ["bpsOption"], features: [i0.ɵɵProvidersFeature([NzDestroyService]), i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function BpsOptionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, BpsOptionComponent_ng_template_0_Template, 1, 0, "ng-template");
        } }, encapsulation: 2, changeDetection: 0 }); }
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsOptionComponent, [{
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
    }], () => [{ type: i1.BpsOptionGroupComponent, decorators: [{
                type: Optional
            }] }, { type: i2.NzDestroyService }], { template: [{
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsOptionComponent, { className: "BpsOptionComponent", filePath: "lib\\components\\bps-select\\option.component.ts", lineNumber: 33 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9vcHRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBR0wsUUFBUSxFQUNSLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztJQVlqRCxrQkFBeUI7O0FBSS9CLE1BQU0sT0FBTyxrQkFBa0I7SUFnQjdCLFlBQWdDLHNCQUErQyxFQUFVLFFBQTBCO1FBQW5GLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBeUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFrQjtRQVhuSCxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUM5QixlQUFVLEdBQW9ELElBQUksQ0FBQztRQUcxRCxhQUFRLEdBQTJCLElBQUksQ0FBQztRQUN4QyxhQUFRLEdBQXFCLElBQUksQ0FBQztRQUVsQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztJQUVvRSxDQUFDO0lBRXZILFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDakcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDO1lBQ3pELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO21GQTVCVSxrQkFBa0I7b0VBQWxCLGtCQUFrQjsyQkFPbEIsV0FBVzs7Ozs2UEFkWCxDQUFDLGdCQUFnQixDQUFDOztZQUUzQixnRkFBYTs7O0FBaUJVO0lBQWYsWUFBWSxFQUFFO3VEQUFxQjtBQUNwQjtJQUFmLFlBQVksRUFBRTttREFBaUI7QUFDaEI7SUFBZixZQUFZLEVBQUU7NERBQTBCO2lGQWR2QyxrQkFBa0I7Y0FaOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsV0FBVztnQkFDckIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDN0IsUUFBUSxFQUFFOzs7O0dBSVQ7YUFDRjs7c0JBaUJjLFFBQVE7b0RBVHFCLFFBQVE7a0JBQWpELFNBQVM7bUJBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUMvQixRQUFRO2tCQUFoQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDbUIsV0FBVztrQkFBbkMsS0FBSztZQUNtQixPQUFPO2tCQUEvQixLQUFLO1lBQ21CLGdCQUFnQjtrQkFBeEMsS0FBSzs7a0ZBZEssa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE56RGVzdHJveVNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvc2VydmljZXMnO1xyXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuXHJcbmltcG9ydCB7IEJwc09wdGlvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9vcHRpb24tZ3JvdXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnBzLW9wdGlvbicsXHJcbiAgZXhwb3J0QXM6ICdicHNPcHRpb24nLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbTnpEZXN0cm95U2VydmljZV0sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy10ZW1wbGF0ZT5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNPcHRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc0Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc0hpZGU6IEJvb2xlYW5JbnB1dDtcclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYnBzQ3VzdG9tQ29udGVudDogQm9vbGVhbklucHV0O1xyXG5cclxuICBjaGFuZ2VzID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBncm91cExhYmVsOiBzdHJpbmcgfCBudW1iZXIgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XHJcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSkgdGVtcGxhdGUhOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+O1xyXG4gIEBJbnB1dCgpIGJwc1RpdGxlPzogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcclxuICBASW5wdXQoKSBicHNMYWJlbDogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgYnBzVmFsdWU6IE56U2FmZUFueSB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGJwc0tleT86IHN0cmluZyB8IG51bWJlcjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzRGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzSGlkZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNDdXN0b21Db250ZW50ID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgbnpPcHRpb25Hcm91cENvbXBvbmVudDogQnBzT3B0aW9uR3JvdXBDb21wb25lbnQsIHByaXZhdGUgZGVzdHJveSQ6IE56RGVzdHJveVNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpPcHRpb25Hcm91cENvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLm56T3B0aW9uR3JvdXBDb21wb25lbnQuY2hhbmdlcy5waXBlKHN0YXJ0V2l0aCh0cnVlKSwgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZ3JvdXBMYWJlbCA9IHRoaXMubnpPcHRpb25Hcm91cENvbXBvbmVudC5icHNMYWJlbDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlcy5uZXh0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==