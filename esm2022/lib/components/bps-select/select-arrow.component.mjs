import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../core/addon/string_template_outlet";
import * as i3 from "ng-zorro-antd/icon";
export class BpsSelectArrowComponent {
    constructor() {
        this.loading = false;
        this.search = false;
        this.showArrow = false;
        this.suffixIcon = null;
        this.feedbackIcon = null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsSelectArrowComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsSelectArrowComponent, selector: "bps-select-arrow", inputs: { loading: "loading", search: "search", showArrow: "showArrow", suffixIcon: "suffixIcon", feedbackIcon: "feedbackIcon" }, host: { properties: { "class.ant-select-arrow-loading": "loading" }, classAttribute: "ant-select-arrow" }, ngImport: i0, template: `
    <span nz-icon nzType="loading" *ngIf="loading; else defaultArrow"></span>
    <ng-template #defaultArrow>
      <ng-container *ngIf="showArrow && !suffixIcon; else suffixTemplate">
        <span nz-icon nzType="down" *ngIf="!search"></span>
        <span nz-icon nzType="search" *ngIf="search"></span>
      </ng-container>
      <ng-template #suffixTemplate>
        <ng-container *nzStringTemplateOutlet="suffixIcon; let suffixIcon">
          <span *ngIf="suffixIcon" nz-icon [nzType]="suffixIcon"></span>
        </ng-container>
      </ng-template>
    </ng-template>
    <ng-container *nzStringTemplateOutlet="feedbackIcon">{{ feedbackIcon }}</ng-container>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: i3.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsSelectArrowComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bps-select-arrow',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
    <span nz-icon nzType="loading" *ngIf="loading; else defaultArrow"></span>
    <ng-template #defaultArrow>
      <ng-container *ngIf="showArrow && !suffixIcon; else suffixTemplate">
        <span nz-icon nzType="down" *ngIf="!search"></span>
        <span nz-icon nzType="search" *ngIf="search"></span>
      </ng-container>
      <ng-template #suffixTemplate>
        <ng-container *nzStringTemplateOutlet="suffixIcon; let suffixIcon">
          <span *ngIf="suffixIcon" nz-icon [nzType]="suffixIcon"></span>
        </ng-container>
      </ng-template>
    </ng-template>
    <ng-container *nzStringTemplateOutlet="feedbackIcon">{{ feedbackIcon }}</ng-container>
  `,
                    host: {
                        class: 'ant-select-arrow',
                        '[class.ant-select-arrow-loading]': 'loading'
                    }
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { loading: [{
                type: Input
            }], search: [{
                type: Input
            }], showArrow: [{
                type: Input
            }], suffixIcon: [{
                type: Input
            }], feedbackIcon: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWFycm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9zZWxlY3QtYXJyb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQTRCMUcsTUFBTSxPQUFPLHVCQUF1QjtJQU9sQztRQU5TLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUEyQyxJQUFJLENBQUM7UUFDMUQsaUJBQVksR0FBMkMsSUFBSSxDQUFDO0lBRXRELENBQUM7K0dBUEwsdUJBQXVCO21HQUF2Qix1QkFBdUIscVNBcEJ4Qjs7Ozs7Ozs7Ozs7Ozs7R0FjVDs7NEZBTVUsdUJBQXVCO2tCQXhCbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7R0FjVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLGtCQUFrQjt3QkFDekIsa0NBQWtDLEVBQUUsU0FBUztxQkFDOUM7aUJBQ0Y7MEVBRVUsT0FBTztzQkFBZixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicHMtc2VsZWN0LWFycm93JyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8c3BhbiBuei1pY29uIG56VHlwZT1cImxvYWRpbmdcIiAqbmdJZj1cImxvYWRpbmc7IGVsc2UgZGVmYXVsdEFycm93XCI+PC9zcGFuPlxyXG4gICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0QXJyb3c+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93QXJyb3cgJiYgIXN1ZmZpeEljb247IGVsc2Ugc3VmZml4VGVtcGxhdGVcIj5cclxuICAgICAgICA8c3BhbiBuei1pY29uIG56VHlwZT1cImRvd25cIiAqbmdJZj1cIiFzZWFyY2hcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gbnotaWNvbiBuelR5cGU9XCJzZWFyY2hcIiAqbmdJZj1cInNlYXJjaFwiPjwvc3Bhbj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjc3VmZml4VGVtcGxhdGU+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInN1ZmZpeEljb247IGxldCBzdWZmaXhJY29uXCI+XHJcbiAgICAgICAgICA8c3BhbiAqbmdJZj1cInN1ZmZpeEljb25cIiBuei1pY29uIFtuelR5cGVdPVwic3VmZml4SWNvblwiPjwvc3Bhbj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiZmVlZGJhY2tJY29uXCI+e3sgZmVlZGJhY2tJY29uIH19PC9uZy1jb250YWluZXI+XHJcbiAgYCxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2FudC1zZWxlY3QtYXJyb3cnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWFycm93LWxvYWRpbmddJzogJ2xvYWRpbmcnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzU2VsZWN0QXJyb3dDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGxvYWRpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzZWFyY2ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaG93QXJyb3cgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzdWZmaXhJY29uOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgZmVlZGJhY2tJY29uOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iXX0=