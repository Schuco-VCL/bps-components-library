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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsCollapseComponent, deps: [{ token: i1.NzConfigService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsCollapseComponent, selector: "bps-collapse", inputs: { bpsAccordion: "bpsAccordion", bpsBordered: "bpsBordered" }, exportAs: ["bpsCollapse"], ngImport: i0, template: "<div class=\"ant-collapse\" [class.ant-collapse-borderless]=\"!bpsBordered\">\r\n  <ng-content></ng-content>\r\n</div>\r\n", styles: [".ant-collapse{margin:0!important;background-color:transparent!important;border:1px solid #707070!important;border-radius:unset!important;padding:15px!important}\n", "bps-collapse{display:block}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
    InputBoolean()
], BpsCollapseComponent.prototype, "bpsAccordion", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, true),
    InputBoolean()
], BpsCollapseComponent.prototype, "bpsBordered", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsCollapseComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-collapse', exportAs: 'bpsCollapse', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"ant-collapse\" [class.ant-collapse-borderless]=\"!bpsBordered\">\r\n  <ng-content></ng-content>\r\n</div>\r\n", styles: [".ant-collapse{margin:0!important;background-color:transparent!important;border:1px solid #707070!important;border-radius:unset!important;padding:15px!important}\n", "bps-collapse{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NzConfigService }]; }, propDecorators: { bpsAccordion: [{
                type: Input
            }], bpsBordered: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWNvbGxhcHNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWNvbGxhcHNlL2Jwcy1jb2xsYXBzZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1jb2xsYXBzZS9icHMtY29sbGFwc2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQW1CLFVBQVUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7QUFJOUUsTUFBTSx3QkFBd0IsR0FBRyxVQUFVLENBQUM7QUFpQjVDLE1BQU0sT0FBTyxvQkFBb0I7SUFLL0IsWUFBbUIsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBSjNDLG1DQUE4QixHQUFnQyxFQUFFLENBQUM7SUFJbEIsQ0FBQztJQUV4RCxRQUFRLENBQUMsS0FBZ0M7UUFDdkMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQWdDO1FBQzFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwRyxDQUFDO0lBRUQsS0FBSyxDQUFDLFFBQW1DO1FBQ3ZDLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDNUMsSUFBSSxDQUFDLDhCQUE4QjtpQkFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQztpQkFDakMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNkLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2lCQUNyQjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ047UUFDRCxRQUFRLENBQUMsU0FBUyxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUN6QyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEQsQ0FBQzsrR0E3QlUsb0JBQW9CO21HQUFwQixvQkFBb0IscUpDdkJqQyw0SEFHQTs7QURzQndFO0lBQTVELFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUM7SUFBRSxZQUFZLEVBQUU7MERBQXVCO0FBQ3ZCO0lBQTNELFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUM7SUFBRSxZQUFZLEVBQUU7eURBQXNCOzRGQUgvRSxvQkFBb0I7a0JBZmhDLFNBQVM7K0JBQ0UsY0FBYyxZQUNkLGFBQWEsbUJBRU4sdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSTtzR0FZaUMsWUFBWTtzQkFBakYsS0FBSztnQkFDK0QsV0FBVztzQkFBL0UsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJy4uL2Jwcy10cmVlL3RyZWUvY29uZmlnLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgQnBzQ29sbGFwc2VQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vYnBzLWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnY29sbGFwc2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicHMtY29sbGFwc2UnLFxyXG4gIGV4cG9ydEFzOiAnYnBzQ29sbGFwc2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9icHMtY29sbGFwc2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIGJwcy1jb2xsYXBzZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIHN0eWxlVXJsczogWycuL2Jwcy1jb2xsYXBzZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc0NvbGxhcHNlQ29tcG9uZW50IHtcclxuICBwcml2YXRlIGxpc3RPZk56Q29sbGFwc2VQYW5lbENvbXBvbmVudDogQnBzQ29sbGFwc2VQYW5lbENvbXBvbmVudFtdID0gW107XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgQElucHV0Qm9vbGVhbigpIGJwc0FjY29yZGlvbjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIHRydWUpIEBJbnB1dEJvb2xlYW4oKSBicHNCb3JkZXJlZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlKSB7IH1cclxuXHJcbiAgYWRkUGFuZWwodmFsdWU6IEJwc0NvbGxhcHNlUGFuZWxDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMubGlzdE9mTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50LnB1c2godmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlUGFuZWwodmFsdWU6IEJwc0NvbGxhcHNlUGFuZWxDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMubGlzdE9mTnpDb2xsYXBzZVBhbmVsQ29tcG9uZW50LnNwbGljZSh0aGlzLmxpc3RPZk56Q29sbGFwc2VQYW5lbENvbXBvbmVudC5pbmRleE9mKHZhbHVlKSwgMSk7XHJcbiAgfVxyXG5cclxuICBjbGljayhjb2xsYXBzZTogQnBzQ29sbGFwc2VQYW5lbENvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYnBzQWNjb3JkaW9uICYmICFjb2xsYXBzZS5icHNBY3RpdmUpIHtcclxuICAgICAgdGhpcy5saXN0T2ZOekNvbGxhcHNlUGFuZWxDb21wb25lbnRcclxuICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gY29sbGFwc2UpXHJcbiAgICAgICAgLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICBpZiAoaXRlbS5icHNBY3RpdmUpIHtcclxuICAgICAgICAgICAgaXRlbS5icHNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgaXRlbS5icHNBY3RpdmVDaGFuZ2UuZW1pdChpdGVtLmJwc0FjdGl2ZSk7XHJcbiAgICAgICAgICAgIGl0ZW0ubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb2xsYXBzZS5icHNBY3RpdmUgPSAhY29sbGFwc2UuYnBzQWN0aXZlO1xyXG4gICAgY29sbGFwc2UuYnBzQWN0aXZlQ2hhbmdlLmVtaXQoY29sbGFwc2UuYnBzQWN0aXZlKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImFudC1jb2xsYXBzZVwiIFtjbGFzcy5hbnQtY29sbGFwc2UtYm9yZGVybGVzc109XCIhYnBzQm9yZGVyZWRcIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG4iXX0=