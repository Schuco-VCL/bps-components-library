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
const _c0 = ["*"];
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
    static { this.ɵfac = function BpsFormItemComponent_Factory(t) { return new (t || BpsFormItemComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.NzUpdateHostClassService), i0.ɵɵdirectiveInject(i2.MediaMatcher), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i3.Platform), i0.ɵɵdirectiveInject(i4.NzDomEventService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsFormItemComponent, selectors: [["bps-form-item"]], contentQueries: function BpsFormItemComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, BpsFormExplainComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzFormExplainComponent = _t);
        } }, hostVars: 2, hostBindings: function BpsFormItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-form-item-with-help", ctx.withHelpClass);
        } }, inputs: { bpsFlex: "bpsFlex" }, exportAs: ["bpsFormItem"], features: [i0.ɵɵProvidersFeature([NzUpdateHostClassService]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function BpsFormItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, styles: ["bps-form-item{display:block!important}\n"], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], BpsFormItemComponent.prototype, "bpsFlex", void 0);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsFormItemComponent, [{
        type: Component,
        args: [{ selector: 'bps-form-item', exportAs: 'bpsFormItem', preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [NzUpdateHostClassService], host: {
                    '[class.ant-form-item-with-help]': 'withHelpClass'
                }, template: "<ng-content></ng-content>", styles: ["bps-form-item{display:block!important}\n"] }]
    }], () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.NzUpdateHostClassService }, { type: i2.MediaMatcher }, { type: i0.NgZone }, { type: i3.Platform }, { type: i4.NzDomEventService }, { type: i0.ChangeDetectorRef }], { bpsFlex: [{
            type: Input
        }], listOfNzFormExplainComponent: [{
            type: ContentChildren,
            args: [BpsFormExplainComponent, { descendants: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsFormItemComponent, { className: "BpsFormItemComponent", filePath: "lib\\components\\bps-form\\bps-form-item.component.ts", lineNumber: 48 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWZvcm0taXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1mb3JtL2Jwcy1mb3JtLWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtZm9ybS9icHMtZm9ybS1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxlQUFlLEVBRWYsS0FBSyxFQVFMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7QUFFOUQsaUdBQWlHO0FBb0JqRyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsY0FBYztJQVF0RCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNFLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDdEUsQ0FBQztJQUNILENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxLQUFjO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFlBQ0UsVUFBc0IsRUFDdEIsUUFBbUIsRUFDbkIsd0JBQWtELEVBQ2xELFlBQTBCLEVBQzFCLE1BQWMsRUFDZCxRQUFrQixFQUNsQixpQkFBb0MsRUFDNUIsR0FBc0I7UUFFOUIsS0FBSyxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsd0JBQStCLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUZ4RyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQTVCUCxZQUFPLEdBQVksS0FBSyxDQUFDO1FBR2xELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUEyQmYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTztpQkFDdEMsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFDZixTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QjtpQkFDQSxTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixJQUFJLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUN2RyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWpCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsV0FBVztRQUNULEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDO3FGQWpFVSxvQkFBb0I7b0VBQXBCLG9CQUFvQjt3Q0FHZCx1QkFBdUI7Ozs7O1lBSDdCLDREQUFvQjt5R0FicEIsQ0FBQyx3QkFBd0IsQ0FBQzs7WUNsQ3ZDLGtCQUF5Qjs7O0FEaURFO0lBQWYsWUFBWSxFQUFFO3FEQUEwQjtpRkFGdkMsb0JBQW9CO2NBbkJoQyxTQUFTOzJCQUNFLGVBQWUsWUFDZixhQUFhLHVCQUNGLEtBQUssbUJBQ1QsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxhQUMxQixDQUFDLHdCQUF3QixDQUFDLFFBRS9CO29CQUNKLGlDQUFpQyxFQUFFLGVBQWU7aUJBQ25EO2lQQVd3QixPQUFPO2tCQUEvQixLQUFLO1lBRU4sNEJBQTRCO2tCQUQzQixlQUFlO21CQUFDLHVCQUF1QixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTs7a0ZBSHBELG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lZGlhTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IEJwc0Zvcm1FeHBsYWluQ29tcG9uZW50IH0gZnJvbSAnLi9icHMtZm9ybS1leHBsYWluLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgTnpEb21FdmVudFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL256LWRvbS1ldmVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTnpSb3dEaXJlY3RpdmUgfSBmcm9tICcuLi9icHMtZ3JpZC9uei1yb3cuZGlyZWN0aXZlJztcclxuXHJcbi8qKiBzaG91bGQgYWRkIG56LXJvdyBkaXJlY3RpdmUgdG8gaG9zdCwgdHJhY2sgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvODc4NSAqKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicHMtZm9ybS1pdGVtJyxcclxuICBleHBvcnRBczogJ2Jwc0Zvcm1JdGVtJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy1mb3JtLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuYW50LWZvcm0taXRlbS13aXRoLWhlbHBdJzogJ3dpdGhIZWxwQ2xhc3MnXHJcbiAgfSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgYnBzLWZvcm0taXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc0Zvcm1JdGVtQ29tcG9uZW50IGV4dGVuZHMgTnpSb3dEaXJlY3RpdmVcclxuICBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0ZsZXg6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBAQ29udGVudENoaWxkcmVuKEJwc0Zvcm1FeHBsYWluQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXHJcbiAgbGlzdE9mTnpGb3JtRXhwbGFpbkNvbXBvbmVudDogUXVlcnlMaXN0PEJwc0Zvcm1FeHBsYWluQ29tcG9uZW50PjtcclxuICB3aXRoSGVscENsYXNzID0gZmFsc2U7XHJcbiAgdGlwc01vZGUgPSBmYWxzZTtcclxuXHJcbiAgdXBkYXRlRmxleFN0eWxlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYnBzRmxleCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdmbGV4Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0V2l0aEhlbHBWaWFUaXBzKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLnRpcHNNb2RlID0gdHJ1ZTtcclxuICAgIHRoaXMud2l0aEhlbHBDbGFzcyA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBtZWRpYU1hdGNoZXI6IE1lZGlhTWF0Y2hlcixcclxuICAgIG5nWm9uZTogTmdab25lLFxyXG4gICAgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgbnpEb21FdmVudFNlcnZpY2U6IE56RG9tRXZlbnRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgICBzdXBlcihlbGVtZW50UmVmLCByZW5kZXJlciwgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIGFzIGFueSwgbWVkaWFNYXRjaGVyLCBuZ1pvbmUsIHBsYXRmb3JtLCBuekRvbUV2ZW50U2VydmljZSk7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtZm9ybS1pdGVtJyk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMudGlwc01vZGUpIHtcclxuICAgICAgdGhpcy5saXN0T2ZOekZvcm1FeHBsYWluQ29tcG9uZW50LmNoYW5nZXNcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHN0YXJ0V2l0aCh0cnVlKSxcclxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMud2l0aEhlbHBDbGFzcyA9IHRoaXMubGlzdE9mTnpGb3JtRXhwbGFpbkNvbXBvbmVudCAmJiB0aGlzLmxpc3RPZk56Rm9ybUV4cGxhaW5Db21wb25lbnQubGVuZ3RoID4gMDtcclxuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlRmxleFN0eWxlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdicHNGbGV4JykpIHtcclxuICAgICAgdGhpcy51cGRhdGVGbGV4U3R5bGUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiJdfQ==