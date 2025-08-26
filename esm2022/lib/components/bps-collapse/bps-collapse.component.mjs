import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { WithConfig } from '../bps-tree/tree/config.service';
import * as i0 from "@angular/core";
import * as i1 from "../bps-tree/tree/config.service";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsCollapseComponent, deps: [{ token: i1.NzConfigService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BpsCollapseComponent, selector: "bps-collapse", inputs: { bpsAccordion: "bpsAccordion", bpsBordered: "bpsBordered" }, exportAs: ["bpsCollapse"], ngImport: i0, template: "<div class=\"ant-collapse\" [class.ant-collapse-borderless]=\"!bpsBordered\">\r\n  <ng-content></ng-content>\r\n</div>\r\n", styles: [".ant-collapse{margin:0!important;background-color:transparent!important;border:1px solid #707070!important;border-radius:unset!important;padding:15px!important}\n", "bps-collapse{display:block}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
    InputBoolean()
], BpsCollapseComponent.prototype, "bpsAccordion", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
    InputBoolean()
], BpsCollapseComponent.prototype, "bpsBordered", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsCollapseComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-collapse', exportAs: 'bpsCollapse', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"ant-collapse\" [class.ant-collapse-borderless]=\"!bpsBordered\">\r\n  <ng-content></ng-content>\r\n</div>\r\n", styles: [".ant-collapse{margin:0!important;background-color:transparent!important;border:1px solid #707070!important;border-radius:unset!important;padding:15px!important}\n", "bps-collapse{display:block}\n"] }]
        }], ctorParameters: () => [{ type: i1.NzConfigService }], propDecorators: { bpsAccordion: [{
                type: Input
            }], bpsBordered: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWNvbGxhcHNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWNvbGxhcHNlL2Jwcy1jb2xsYXBzZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1jb2xsYXBzZS9icHMtY29sbGFwc2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQW1CLFVBQVUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7QUFJOUUsTUFBTSx3QkFBd0IsR0FBRyxVQUFVLENBQUM7QUFpQjVDLE1BQU0sT0FBTyxvQkFBb0I7SUFLL0IsWUFBbUIsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBSjNDLG1DQUE4QixHQUFnQyxFQUFFLENBQUM7SUFJbEIsQ0FBQztJQUV4RCxRQUFRLENBQUMsS0FBZ0M7UUFDdkMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQWdDO1FBQzFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwRyxDQUFDO0lBRUQsS0FBSyxDQUFDLFFBQW1DO1FBQ3ZDLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUM3QyxJQUFJLENBQUMsOEJBQThCO2lCQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDO2lCQUNqQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO29CQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELFFBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQ3pDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwRCxDQUFDOytHQTdCVSxvQkFBb0I7bUdBQXBCLG9CQUFvQixxSkN2QmpDLDRIQUdBOztBRHNCd0U7SUFBNUQsVUFBVSxDQUFDLHdCQUF3QixFQUFFLEtBQUssQ0FBQztJQUFFLFlBQVksRUFBRTswREFBdUI7QUFDdkI7SUFBM0QsVUFBVSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQztJQUFFLFlBQVksRUFBRTt5REFBc0I7NEZBSC9FLG9CQUFvQjtrQkFmaEMsU0FBUzsrQkFDRSxjQUFjLFlBQ2QsYUFBYSxtQkFFTix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJO29GQVlpQyxZQUFZO3NCQUFqRixLQUFLO2dCQUMrRCxXQUFXO3NCQUEvRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnLi4vYnBzLXRyZWUvdHJlZS9jb25maWcuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBCcHNDb2xsYXBzZVBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9icHMtY29sbGFwc2UtcGFuZWwuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdjb2xsYXBzZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jwcy1jb2xsYXBzZScsXHJcbiAgZXhwb3J0QXM6ICdicHNDb2xsYXBzZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy1jb2xsYXBzZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgYnBzLWNvbGxhcHNlIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnBzLWNvbGxhcHNlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzQ29sbGFwc2VDb21wb25lbnQge1xyXG4gIHByaXZhdGUgbGlzdE9mTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50OiBCcHNDb2xsYXBzZVBhbmVsQ29tcG9uZW50W10gPSBbXTtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBASW5wdXRCb29sZWFuKCkgYnBzQWNjb3JkaW9uOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgdHJ1ZSkgQElucHV0Qm9vbGVhbigpIGJwc0JvcmRlcmVkOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UpIHsgfVxyXG5cclxuICBhZGRQYW5lbCh2YWx1ZTogQnBzQ29sbGFwc2VQYW5lbENvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5saXN0T2ZOekNvbGxhcHNlUGFuZWxDb21wb25lbnQucHVzaCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVQYW5lbCh2YWx1ZTogQnBzQ29sbGFwc2VQYW5lbENvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5saXN0T2ZOekNvbGxhcHNlUGFuZWxDb21wb25lbnQuc3BsaWNlKHRoaXMubGlzdE9mTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50LmluZGV4T2YodmFsdWUpLCAxKTtcclxuICB9XHJcblxyXG4gIGNsaWNrKGNvbGxhcHNlOiBCcHNDb2xsYXBzZVBhbmVsQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5icHNBY2NvcmRpb24gJiYgIWNvbGxhcHNlLmJwc0FjdGl2ZSkge1xyXG4gICAgICB0aGlzLmxpc3RPZk56Q29sbGFwc2VQYW5lbENvbXBvbmVudFxyXG4gICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBjb2xsYXBzZSlcclxuICAgICAgICAuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgIGlmIChpdGVtLmJwc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICBpdGVtLmJwc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpdGVtLmJwc0FjdGl2ZUNoYW5nZS5lbWl0KGl0ZW0uYnBzQWN0aXZlKTtcclxuICAgICAgICAgICAgaXRlbS5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbGxhcHNlLmJwc0FjdGl2ZSA9ICFjb2xsYXBzZS5icHNBY3RpdmU7XHJcbiAgICBjb2xsYXBzZS5icHNBY3RpdmVDaGFuZ2UuZW1pdChjb2xsYXBzZS5icHNBY3RpdmUpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYW50LWNvbGxhcHNlXCIgW2NsYXNzLmFudC1jb2xsYXBzZS1ib3JkZXJsZXNzXT1cIiFicHNCb3JkZXJlZFwiPlxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcbiJdfQ==