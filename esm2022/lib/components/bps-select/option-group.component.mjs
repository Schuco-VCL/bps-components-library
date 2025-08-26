import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class BpsOptionGroupComponent {
    constructor() {
        this.bpsLabel = null;
        this.changes = new Subject();
    }
    ngOnChanges() {
        this.changes.next();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsOptionGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BpsOptionGroupComponent, selector: "bps-option-group", inputs: { bpsLabel: "bpsLabel" }, exportAs: ["bpsOptionGroup"], usesOnChanges: true, ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsOptionGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bps-option-group',
                    exportAs: 'bpsOptionGroup',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: ` <ng-content></ng-content> `
                }]
        }], propDecorators: { bpsLabel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9vcHRpb24tZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUEwQixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQVcvQixNQUFNLE9BQU8sdUJBQXVCO0lBUHBDO1FBUVcsYUFBUSxHQUFvRCxJQUFJLENBQUM7UUFDMUUsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7S0FJL0I7SUFIQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOytHQUxVLHVCQUF1QjttR0FBdkIsdUJBQXVCLDZJQUZ4Qiw2QkFBNkI7OzRGQUU1Qix1QkFBdUI7a0JBUG5DLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsNkJBQTZCO2lCQUN4Qzs4QkFFVSxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jwcy1vcHRpb24tZ3JvdXAnLFxyXG4gIGV4cG9ydEFzOiAnYnBzT3B0aW9uR3JvdXAnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNPcHRpb25Hcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgYnBzTGFiZWw6IHN0cmluZyB8IG51bWJlciB8IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcclxuICBjaGFuZ2VzID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlcy5uZXh0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==