import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { WithConfig } from '../bps-tree/tree/config.service';
import * as i0 from "@angular/core";
import * as i1 from "../bps-tree/tree/config.service";
const _c0 = ["*"];
const NZ_CONFIG_COMPONENT_NAME = 'collapse';
export class BpsCollapseComponent {
    constructor(nzConfigService) {
        this.nzConfigService = nzConfigService;
        this.listOfNzCollapsePanelComponent = [];
    }
    addPanel(value) {
        this.listOfNzCollapsePanelComponent.push(value);
    }
    removePanel(value) {
        this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(value), 1);
    }
    click(collapse) {
        if (this.bpsAccordion && !collapse.bpsActive) {
            this.listOfNzCollapsePanelComponent
                .filter(item => item !== collapse)
                .forEach(item => {
                if (item.bpsActive) {
                    item.bpsActive = false;
                    item.bpsActiveChange.emit(item.bpsActive);
                    item.markForCheck();
                }
            });
        }
        collapse.bpsActive = !collapse.bpsActive;
        collapse.bpsActiveChange.emit(collapse.bpsActive);
    }
    static { this.ɵfac = function BpsCollapseComponent_Factory(t) { return new (t || BpsCollapseComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsCollapseComponent, selectors: [["bps-collapse"]], inputs: { bpsAccordion: "bpsAccordion", bpsBordered: "bpsBordered" }, exportAs: ["bpsCollapse"], ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[1, "ant-collapse"]], template: function BpsCollapseComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-collapse-borderless", !ctx.bpsBordered);
        } }, styles: [".ant-collapse{margin:0!important;background-color:transparent!important;border:1px solid #707070!important;border-radius:unset!important;padding:15px!important}\n", "bps-collapse{display:block}\n"], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
    InputBoolean()
], BpsCollapseComponent.prototype, "bpsAccordion", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
    InputBoolean()
], BpsCollapseComponent.prototype, "bpsBordered", void 0);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsCollapseComponent, [{
        type: Component,
        args: [{ selector: 'bps-collapse', exportAs: 'bpsCollapse', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"ant-collapse\" [class.ant-collapse-borderless]=\"!bpsBordered\">\r\n  <ng-content></ng-content>\r\n</div>\r\n", styles: [".ant-collapse{margin:0!important;background-color:transparent!important;border:1px solid #707070!important;border-radius:unset!important;padding:15px!important}\n", "bps-collapse{display:block}\n"] }]
    }], () => [{ type: i1.NzConfigService }], { bpsAccordion: [{
            type: Input
        }], bpsBordered: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsCollapseComponent, { className: "BpsCollapseComponent", filePath: "lib\\components\\bps-collapse\\bps-collapse.component.ts", lineNumber: 24 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWNvbGxhcHNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWNvbGxhcHNlL2Jwcy1jb2xsYXBzZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1jb2xsYXBzZS9icHMtY29sbGFwc2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQW1CLFVBQVUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7O0FBSTlFLE1BQU0sd0JBQXdCLEdBQUcsVUFBVSxDQUFDO0FBaUI1QyxNQUFNLE9BQU8sb0JBQW9CO0lBSy9CLFlBQW1CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUozQyxtQ0FBOEIsR0FBZ0MsRUFBRSxDQUFDO0lBSWxCLENBQUM7SUFFeEQsUUFBUSxDQUFDLEtBQWdDO1FBQ3ZDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFnQztRQUMxQyxJQUFJLENBQUMsOEJBQThCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUFtQztRQUN2QyxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDN0MsSUFBSSxDQUFDLDhCQUE4QjtpQkFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQztpQkFDakMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNkLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUMxQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3RCLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDRCxRQUFRLENBQUMsU0FBUyxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUN6QyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEQsQ0FBQztxRkE3QlUsb0JBQW9CO29FQUFwQixvQkFBb0I7O1lDdkJqQyw4QkFBeUU7WUFDdkUsa0JBQXlCO1lBQzNCLGlCQUFNOztZQUZvQiwyREFBOEM7OztBRHlCQTtJQUE1RCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDO0lBQUUsWUFBWSxFQUFFOzBEQUF1QjtBQUN2QjtJQUEzRCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDO0lBQUUsWUFBWSxFQUFFO3lEQUFzQjtpRkFIL0Usb0JBQW9CO2NBZmhDLFNBQVM7MkJBQ0UsY0FBYyxZQUNkLGFBQWEsbUJBRU4sdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSTtnREFZaUMsWUFBWTtrQkFBakYsS0FBSztZQUMrRCxXQUFXO2tCQUEvRSxLQUFLOztrRkFISyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICcuLi9icHMtdHJlZS90cmVlL2NvbmZpZy5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEJwc0NvbGxhcHNlUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2Jwcy1jb2xsYXBzZS1wYW5lbC5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FID0gJ2NvbGxhcHNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnBzLWNvbGxhcHNlJyxcclxuICBleHBvcnRBczogJ2Jwc0NvbGxhcHNlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnBzLWNvbGxhcHNlLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBicHMtY29sbGFwc2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICBzdHlsZVVybHM6IFsnLi9icHMtY29sbGFwc2UuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNDb2xsYXBzZUNvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSBsaXN0T2ZOekNvbGxhcHNlUGFuZWxDb21wb25lbnQ6IEJwc0NvbGxhcHNlUGFuZWxDb21wb25lbnRbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIEBJbnB1dEJvb2xlYW4oKSBicHNBY2NvcmRpb246IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCB0cnVlKSBASW5wdXRCb29sZWFuKCkgYnBzQm9yZGVyZWQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSkgeyB9XHJcblxyXG4gIGFkZFBhbmVsKHZhbHVlOiBCcHNDb2xsYXBzZVBhbmVsQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmxpc3RPZk56Q29sbGFwc2VQYW5lbENvbXBvbmVudC5wdXNoKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVBhbmVsKHZhbHVlOiBCcHNDb2xsYXBzZVBhbmVsQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmxpc3RPZk56Q29sbGFwc2VQYW5lbENvbXBvbmVudC5zcGxpY2UodGhpcy5saXN0T2ZOekNvbGxhcHNlUGFuZWxDb21wb25lbnQuaW5kZXhPZih2YWx1ZSksIDEpO1xyXG4gIH1cclxuXHJcbiAgY2xpY2soY29sbGFwc2U6IEJwc0NvbGxhcHNlUGFuZWxDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmJwc0FjY29yZGlvbiAmJiAhY29sbGFwc2UuYnBzQWN0aXZlKSB7XHJcbiAgICAgIHRoaXMubGlzdE9mTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50XHJcbiAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IGNvbGxhcHNlKVxyXG4gICAgICAgIC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgaWYgKGl0ZW0uYnBzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uYnBzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGl0ZW0uYnBzQWN0aXZlQ2hhbmdlLmVtaXQoaXRlbS5icHNBY3RpdmUpO1xyXG4gICAgICAgICAgICBpdGVtLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29sbGFwc2UuYnBzQWN0aXZlID0gIWNvbGxhcHNlLmJwc0FjdGl2ZTtcclxuICAgIGNvbGxhcHNlLmJwc0FjdGl2ZUNoYW5nZS5lbWl0KGNvbGxhcHNlLmJwc0FjdGl2ZSk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJhbnQtY29sbGFwc2VcIiBbY2xhc3MuYW50LWNvbGxhcHNlLWJvcmRlcmxlc3NdPVwiIWJwc0JvcmRlcmVkXCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuIl19