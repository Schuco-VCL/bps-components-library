import { __decorate } from "tslib";
import { ContentChildren, Directive, Input } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { WithConfig } from '../bps-tree/tree/config.service';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { BpsFormLabelComponent } from './bps-form-label.component';
import * as i0 from "@angular/core";
import * as i1 from "../bps-tree/tree/config.service";
import * as i2 from "../core/services/update-host-class.service";
const NZ_CONFIG_COMPONENT_NAME = 'form';
export class BpsFormDirective {
    setClassMap() {
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, {
            [`ant-form-${this.bpsLayout}`]: this.bpsLayout
        });
    }
    updateItemsDefaultColon() {
        if (this.bpsFormLabelComponent) {
            this.bpsFormLabelComponent.forEach(item => item.setDefaultNoColon(this.bpsNoColon));
        }
    }
    constructor(nzConfigService, elementRef, renderer, nzUpdateHostClassService) {
        this.nzConfigService = nzConfigService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.bpsLayout = 'horizontal';
        this.destroy$ = new Subject();
        this.renderer.addClass(elementRef.nativeElement, 'ant-form');
    }
    ngOnInit() {
        this.setClassMap();
    }
    ngOnChanges(changes) {
        this.setClassMap();
        if (changes.hasOwnProperty('bpsNoColon')) {
            this.updateItemsDefaultColon();
        }
    }
    ngAfterContentInit() {
        this.bpsFormLabelComponent.changes
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.updateItemsDefaultColon();
        });
    }
    ngOnDestroy() {
        this.destroy$.next(undefined);
        this.destroy$.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsFormDirective, deps: [{ token: i1.NzConfigService }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i2.NzUpdateHostClassService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: BpsFormDirective, selector: "[bps-form]", inputs: { bpsLayout: "bpsLayout", bpsNoColon: "bpsNoColon" }, providers: [NzUpdateHostClassService], queries: [{ propertyName: "bpsFormLabelComponent", predicate: BpsFormLabelComponent, descendants: true }], exportAs: ["bpsForm"], usesOnChanges: true, ngImport: i0 }); }
}
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
    InputBoolean()
], BpsFormDirective.prototype, "bpsNoColon", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsFormDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bps-form]',
                    exportAs: 'bpsForm',
                    providers: [NzUpdateHostClassService]
                }]
        }], ctorParameters: () => [{ type: i1.NzConfigService }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i2.NzUpdateHostClassService }], propDecorators: { bpsLayout: [{
                type: Input
            }], bpsNoColon: [{
                type: Input
            }], bpsFormLabelComponent: [{
                type: ContentChildren,
                args: [BpsFormLabelComponent, { descendants: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWZvcm0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtZm9ybS9icHMtZm9ybS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxlQUFlLEVBQ2YsU0FBUyxFQUVULEtBQUssRUFPTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFtQixVQUFVLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUV0RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQUVuRSxNQUFNLHdCQUF3QixHQUFHLE1BQU0sQ0FBQztBQU94QyxNQUFNLE9BQU8sZ0JBQWdCO0lBUTNCLFdBQVc7UUFDVCxJQUFJLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO1lBQzNFLENBQUMsWUFBWSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUztTQUMvQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsdUJBQXVCO1FBQ3JCLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN0RixDQUFDO0lBQ0gsQ0FBQztJQUVELFlBQ1MsZUFBZ0MsRUFDL0IsVUFBc0IsRUFDdEIsUUFBbUIsRUFDbkIsd0JBQWtEO1FBSG5ELG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQXZCbkQsY0FBUyxHQUFHLFlBQVksQ0FBQztRQUtsQyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQW9CN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUNqQyxDQUFDO0lBQ0gsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTzthQUMvQixJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDekI7YUFDQSxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzsrR0FyRFUsZ0JBQWdCO21HQUFoQixnQkFBZ0IsbUdBRmhCLENBQUMsd0JBQXdCLENBQUMsZ0VBTXBCLHFCQUFxQjs7QUFGZ0M7SUFBNUQsVUFBVSxDQUFDLHdCQUF3QixFQUFFLEtBQUssQ0FBQztJQUFFLFlBQVksRUFBRTtvREFBcUI7NEZBRi9FLGdCQUFnQjtrQkFMNUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2lCQUN0Qzs0S0FFVSxTQUFTO3NCQUFqQixLQUFLO2dCQUNnRSxVQUFVO3NCQUEvRSxLQUFLO2dCQUV5RCxxQkFBcUI7c0JBQW5GLGVBQWU7dUJBQUMscUJBQXFCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnLi4vYnBzLXRyZWUvdHJlZS9jb25maWcuc2VydmljZSc7XHJcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBCcHNGb3JtTGFiZWxDb21wb25lbnQgfSBmcm9tICcuL2Jwcy1mb3JtLWxhYmVsLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAnZm9ybSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1ticHMtZm9ybV0nLFxyXG4gIGV4cG9ydEFzOiAnYnBzRm9ybScsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzRm9ybURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIGJwc0xheW91dCA9ICdob3Jpem9udGFsJztcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUsIGZhbHNlKSBASW5wdXRCb29sZWFuKCkgYnBzTm9Db2xvbjogYm9vbGVhbjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihCcHNGb3JtTGFiZWxDb21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgYnBzRm9ybUxhYmVsQ29tcG9uZW50OiBRdWVyeUxpc3Q8QnBzRm9ybUxhYmVsQ29tcG9uZW50PjtcclxuXHJcbiAgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge1xyXG4gICAgICBbYGFudC1mb3JtLSR7dGhpcy5icHNMYXlvdXR9YF06IHRoaXMuYnBzTGF5b3V0XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUl0ZW1zRGVmYXVsdENvbG9uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYnBzRm9ybUxhYmVsQ29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMuYnBzRm9ybUxhYmVsQ29tcG9uZW50LmZvckVhY2goaXRlbSA9PiBpdGVtLnNldERlZmF1bHROb0NvbG9uKHRoaXMuYnBzTm9Db2xvbikpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1mb3JtJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdicHNOb0NvbG9uJykpIHtcclxuICAgICAgdGhpcy51cGRhdGVJdGVtc0RlZmF1bHRDb2xvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5icHNGb3JtTGFiZWxDb21wb25lbnQuY2hhbmdlc1xyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUl0ZW1zRGVmYXVsdENvbG9uKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQodW5kZWZpbmVkKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19