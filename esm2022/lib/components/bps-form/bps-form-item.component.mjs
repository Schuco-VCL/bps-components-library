import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ContentChildren, Input, ViewEncapsulation } from '@angular/core';
import { startWith, takeUntil } from 'rxjs/operators';
import { BpsFormExplainComponent } from './bps-form-explain.component';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { NzRowDirective } from '../bps-grid/nz-row.directive';
import * as i0 from "@angular/core";
import * as i1 from "../core/services/update-host-class.service";
import * as i2 from "@angular/cdk/layout";
import * as i3 from "@angular/cdk/platform";
import * as i4 from "../core/services/nz-dom-event.service";
/** should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 **/
export class BpsFormItemComponent extends NzRowDirective {
    updateFlexStyle() {
        if (this.bpsFlex) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'flex');
        }
        else {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
        }
    }
    setWithHelpViaTips(value) {
        this.tipsMode = true;
        this.withHelpClass = value;
        this.cdr.markForCheck();
    }
    constructor(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService, cdr) {
        super(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService);
        this.cdr = cdr;
        this.bpsFlex = false;
        this.withHelpClass = false;
        this.tipsMode = false;
        renderer.addClass(elementRef.nativeElement, 'ant-form-item');
    }
    ngAfterContentInit() {
        if (!this.tipsMode) {
            this.listOfNzFormExplainComponent.changes
                .pipe(startWith(true), takeUntil(this.destroy$))
                .subscribe(() => {
                this.withHelpClass = this.listOfNzFormExplainComponent && this.listOfNzFormExplainComponent.length > 0;
                this.cdr.markForCheck();
            });
        }
    }
    ngOnInit() {
        super.ngOnInit();
        this.updateFlexStyle();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes.hasOwnProperty('bpsFlex')) {
            this.updateFlexStyle();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsFormItemComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.NzUpdateHostClassService }, { token: i2.MediaMatcher }, { token: i0.NgZone }, { token: i3.Platform }, { token: i4.NzDomEventService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsFormItemComponent, selector: "bps-form-item", inputs: { bpsFlex: "bpsFlex" }, host: { properties: { "class.ant-form-item-with-help": "withHelpClass" } }, providers: [NzUpdateHostClassService], queries: [{ propertyName: "listOfNzFormExplainComponent", predicate: BpsFormExplainComponent, descendants: true }], exportAs: ["bpsFormItem"], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ng-content></ng-content>", styles: ["bps-form-item{display:block!important}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], BpsFormItemComponent.prototype, "bpsFlex", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsFormItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-form-item', exportAs: 'bpsFormItem', preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [NzUpdateHostClassService], host: {
                        '[class.ant-form-item-with-help]': 'withHelpClass'
                    }, template: "<ng-content></ng-content>", styles: ["bps-form-item{display:block!important}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.NzUpdateHostClassService }, { type: i2.MediaMatcher }, { type: i0.NgZone }, { type: i3.Platform }, { type: i4.NzDomEventService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { bpsFlex: [{
                type: Input
            }], listOfNzFormExplainComponent: [{
                type: ContentChildren,
                args: [BpsFormExplainComponent, { descendants: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWZvcm0taXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1mb3JtL2Jwcy1mb3JtLWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtZm9ybS9icHMtZm9ybS1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxlQUFlLEVBRWYsS0FBSyxFQVFMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7OztBQUU5RCxpR0FBaUc7QUFvQmpHLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxjQUFjO0lBUXRELGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzFFO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNyRTtJQUNILENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxLQUFjO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFlBQ0UsVUFBc0IsRUFDdEIsUUFBbUIsRUFDbkIsd0JBQWtELEVBQ2xELFlBQTBCLEVBQzFCLE1BQWMsRUFDZCxRQUFrQixFQUNsQixpQkFBb0MsRUFDNUIsR0FBc0I7UUFFOUIsS0FBSyxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsd0JBQStCLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUZ4RyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQTVCUCxZQUFPLEdBQVksS0FBSyxDQUFDO1FBR2xELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUEyQmYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU87aUJBQ3RDLElBQUksQ0FDSCxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQ2YsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDekI7aUJBQ0EsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyw0QkFBNEIsSUFBSSxJQUFJLENBQUMsNEJBQTRCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDdkcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFakIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxXQUFXO1FBQ1QsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzsrR0FqRVUsb0JBQW9CO21HQUFwQixvQkFBb0Isb0pBYnBCLENBQUMsd0JBQXdCLENBQUMsdUVBZ0JwQix1QkFBdUIsdUhDbEQxQywyQkFBeUI7O0FEaURFO0lBQWYsWUFBWSxFQUFFO3FEQUEwQjs0RkFGdkMsb0JBQW9CO2tCQW5CaEMsU0FBUzsrQkFDRSxlQUFlLFlBQ2YsYUFBYSx1QkFDRixLQUFLLG1CQUNULHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksYUFDMUIsQ0FBQyx3QkFBd0IsQ0FBQyxRQUUvQjt3QkFDSixpQ0FBaUMsRUFBRSxlQUFlO3FCQUNuRDt1U0FXd0IsT0FBTztzQkFBL0IsS0FBSztnQkFFTiw0QkFBNEI7c0JBRDNCLGVBQWU7dUJBQUMsdUJBQXVCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVkaWFNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgQnBzRm9ybUV4cGxhaW5Db21wb25lbnQgfSBmcm9tICcuL2Jwcy1mb3JtLWV4cGxhaW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBOekRvbUV2ZW50U2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvbnotZG9tLWV2ZW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOelJvd0RpcmVjdGl2ZSB9IGZyb20gJy4uL2Jwcy1ncmlkL256LXJvdy5kaXJlY3RpdmUnO1xyXG5cclxuLyoqIHNob3VsZCBhZGQgbnotcm93IGRpcmVjdGl2ZSB0byBob3N0LCB0cmFjayBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy84Nzg1ICoqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jwcy1mb3JtLWl0ZW0nLFxyXG4gIGV4cG9ydEFzOiAnYnBzRm9ybUl0ZW0nLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnBzLWZvcm0taXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1pdGVtLXdpdGgtaGVscF0nOiAnd2l0aEhlbHBDbGFzcydcclxuICB9LFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBicHMtZm9ybS1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzRm9ybUl0ZW1Db21wb25lbnQgZXh0ZW5kcyBOelJvd0RpcmVjdGl2ZVxyXG4gIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzRmxleDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQnBzRm9ybUV4cGxhaW5Db21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcclxuICBsaXN0T2ZOekZvcm1FeHBsYWluQ29tcG9uZW50OiBRdWVyeUxpc3Q8QnBzRm9ybUV4cGxhaW5Db21wb25lbnQ+O1xyXG4gIHdpdGhIZWxwQ2xhc3MgPSBmYWxzZTtcclxuICB0aXBzTW9kZSA9IGZhbHNlO1xyXG5cclxuICB1cGRhdGVGbGV4U3R5bGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5icHNGbGV4KSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ2ZsZXgnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRXaXRoSGVscFZpYVRpcHModmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMudGlwc01vZGUgPSB0cnVlO1xyXG4gICAgdGhpcy53aXRoSGVscENsYXNzID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcclxuICAgIG1lZGlhTWF0Y2hlcjogTWVkaWFNYXRjaGVyLFxyXG4gICAgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICBuekRvbUV2ZW50U2VydmljZTogTnpEb21FdmVudFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyLCBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgYXMgYW55LCBtZWRpYU1hdGNoZXIsIG5nWm9uZSwgcGxhdGZvcm0sIG56RG9tRXZlbnRTZXJ2aWNlKTtcclxuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1mb3JtLWl0ZW0nKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy50aXBzTW9kZSkge1xyXG4gICAgICB0aGlzLmxpc3RPZk56Rm9ybUV4cGxhaW5Db21wb25lbnQuY2hhbmdlc1xyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgc3RhcnRXaXRoKHRydWUpLFxyXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy53aXRoSGVscENsYXNzID0gdGhpcy5saXN0T2ZOekZvcm1FeHBsYWluQ29tcG9uZW50ICYmIHRoaXMubGlzdE9mTnpGb3JtRXhwbGFpbkNvbXBvbmVudC5sZW5ndGggPiAwO1xyXG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVGbGV4U3R5bGUoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2Jwc0ZsZXgnKSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUZsZXhTdHlsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+Il19