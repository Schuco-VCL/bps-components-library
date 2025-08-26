import { Directive, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { responsiveMap } from '../core/responsive';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import * as i0 from "@angular/core";
import * as i1 from "../core/services/update-host-class.service";
import * as i2 from "@angular/cdk/layout";
import * as i3 from "@angular/cdk/platform";
import * as i4 from "../core/services/nz-dom-event.service";
export class NzRowDirective {
    calculateGutter() {
        if (typeof this.nzGutter !== 'object') {
            return this.nzGutter;
        }
        else if (this.breakPoint && this.nzGutter[this.breakPoint]) {
            return this.nzGutter[this.breakPoint];
        }
        else {
            return 0;
        }
    }
    updateGutter() {
        const actualGutter = this.calculateGutter();
        if (this.actualGutter !== actualGutter) {
            this.actualGutter = actualGutter;
            this.actualGutter$.next(this.actualGutter);
            this.renderer.setStyle(this.el, 'margin-left', `-${this.actualGutter / 2}px`);
            this.renderer.setStyle(this.el, 'margin-right', `-${this.actualGutter / 2}px`);
        }
    }
    watchMedia() {
        Object.keys(responsiveMap).map((screen) => {
            const castBP = screen;
            const matchBelow = this.mediaMatcher.matchMedia(responsiveMap[castBP]).matches;
            if (matchBelow) {
                this.breakPoint = castBP;
            }
        });
        this.updateGutter();
    }
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    setClassMap() {
        const classMap = {
            [`${this.prefixCls}`]: !this.nzType,
            [`${this.prefixCls}-${this.nzType}`]: this.nzType,
            [`${this.prefixCls}-${this.nzType}-${this.nzAlign}`]: this.nzType && this.nzAlign,
            [`${this.prefixCls}-${this.nzType}-${this.nzJustify}`]: this.nzType && this.nzJustify
        };
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    }
    constructor(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.mediaMatcher = mediaMatcher;
        this.ngZone = ngZone;
        this.platform = platform;
        this.nzDomEventService = nzDomEventService;
        this.nzAlign = 'top';
        this.nzJustify = 'start';
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-row';
        this.actualGutter$ = new Subject();
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        this.setClassMap();
        this.watchMedia();
    }
    ngOnChanges(changes) {
        if (changes.nzType || changes.nzAlign || changes.nzJustify) {
            this.setClassMap();
        }
        if (changes.nzGutter) {
            this.updateGutter();
        }
    }
    ngAfterViewInit() {
        if (this.platform.isBrowser) {
            this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize(() => this.nzDomEventService.unregisterResizeListener()))
                .subscribe(() => this.watchMedia());
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NzRowDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.NzUpdateHostClassService }, { token: i2.MediaMatcher }, { token: i0.NgZone }, { token: i3.Platform }, { token: i4.NzDomEventService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: NzRowDirective, selector: "[nz-row],nz-row", inputs: { nzType: "nzType", nzAlign: "nzAlign", nzJustify: "nzJustify", nzGutter: "nzGutter" }, providers: [NzUpdateHostClassService], exportAs: ["nzRow"], usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NzRowDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nz-row],nz-row',
                    exportAs: 'nzRow',
                    providers: [NzUpdateHostClassService]
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.NzUpdateHostClassService }, { type: i2.MediaMatcher }, { type: i0.NgZone }, { type: i3.Platform }, { type: i4.NzDomEventService }], propDecorators: { nzType: [{
                type: Input
            }], nzAlign: [{
                type: Input
            }], nzJustify: [{
                type: Input
            }], nzGutter: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWdyaWQvbnotcm93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUVULEtBQUssRUFPTixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFnQixhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7Ozs7O0FBV3RGLE1BQU0sT0FBTyxjQUFjO0lBWXpCLGVBQWU7UUFDYixJQUFJLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUN0QyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzthQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1lBQzdELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEMsQ0FBQzthQUFNLENBQUM7WUFDTixPQUFPLENBQUMsQ0FBQztRQUNYLENBQUM7SUFDSCxDQUFDO0lBRUQsWUFBWTtRQUNWLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QyxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssWUFBWSxFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsYUFBYSxFQUFFLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsY0FBYyxFQUFFLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pGLENBQUM7SUFDSCxDQUFDO0lBRUQsVUFBVTtRQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBYyxFQUFFLEVBQUU7WUFDaEQsTUFBTSxNQUFNLEdBQUcsTUFBc0IsQ0FBQztZQUN0QyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDL0UsSUFBSSxVQUFVLEVBQUUsQ0FBQztnQkFDZixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztZQUMzQixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELHVHQUF1RztJQUN2RyxXQUFXO1FBQ1QsTUFBTSxRQUFRLEdBQUc7WUFDZixDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUNuQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNqRCxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE9BQU87WUFDakYsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTO1NBQ3RGLENBQUM7UUFDRixJQUFJLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELFlBQ1MsVUFBc0IsRUFDdEIsUUFBbUIsRUFDbkIsd0JBQWtELEVBQ2xELFlBQTBCLEVBQzFCLE1BQWMsRUFDZCxRQUFrQixFQUNqQixpQkFBb0M7UUFOckMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDakIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQTNEckMsWUFBTyxHQUFnQixLQUFLLENBQUM7UUFDN0IsY0FBUyxHQUFjLE9BQU8sQ0FBQztRQUVoQyxPQUFFLEdBQWdCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ2hELGNBQVMsR0FBRyxTQUFTLENBQUM7UUFHOUIsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBQ3RDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBb0Q1QixDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDM0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEIsQ0FBQztJQUNILENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxpQkFBaUI7aUJBQ25CLHNCQUFzQixFQUFFO2lCQUN4QixJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDeEIsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQ2xFO2lCQUNBLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzsrR0E3RlUsY0FBYzttR0FBZCxjQUFjLDBJQUZkLENBQUMsd0JBQXdCLENBQUM7OzRGQUUxQixjQUFjO2tCQUwxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxPQUFPO29CQUNqQixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztpQkFDdEM7cVBBRVUsTUFBTTtzQkFBZCxLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBNZWRpYU1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbmFsaXplLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE56QnJlYWtQb2ludCwgcmVzcG9uc2l2ZU1hcCB9IGZyb20gJy4uL2NvcmUvcmVzcG9uc2l2ZSc7XHJcbmltcG9ydCB7IEluZGV4YWJsZU9iamVjdCwgTnpBbGlnblR5cGUgfSBmcm9tICcuLi9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTnpEb21FdmVudFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL256LWRvbS1ldmVudC5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCB0eXBlIE56SnVzdGlmeSA9ICdzdGFydCcgfCAnZW5kJyB8ICdjZW50ZXInIHwgJ3NwYWNlLWFyb3VuZCcgfCAnc3BhY2UtYmV0d2Vlbic7XHJcbmV4cG9ydCB0eXBlIE56R3JpZFR5cGUgPSAnZmxleCcgfCBudWxsO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnotcm93XSxuei1yb3cnLFxyXG4gIGV4cG9ydEFzOiAnbnpSb3cnLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Um93RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgbnpUeXBlOiBOekdyaWRUeXBlO1xyXG4gIEBJbnB1dCgpIG56QWxpZ246IE56QWxpZ25UeXBlID0gJ3RvcCc7XHJcbiAgQElucHV0KCkgbnpKdXN0aWZ5OiBOekp1c3RpZnkgPSAnc3RhcnQnO1xyXG4gIEBJbnB1dCgpIG56R3V0dGVyOiBudW1iZXIgfCBJbmRleGFibGVPYmplY3Q7XHJcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtcm93JztcclxuICBwcml2YXRlIGJyZWFrUG9pbnQ6IE56QnJlYWtQb2ludDtcclxuICBhY3R1YWxHdXR0ZXI6IG51bWJlcjtcclxuICBhY3R1YWxHdXR0ZXIkID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xyXG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgY2FsY3VsYXRlR3V0dGVyKCk6IG51bWJlciB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMubnpHdXR0ZXIgIT09ICdvYmplY3QnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm56R3V0dGVyO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmJyZWFrUG9pbnQgJiYgdGhpcy5uekd1dHRlclt0aGlzLmJyZWFrUG9pbnRdKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm56R3V0dGVyW3RoaXMuYnJlYWtQb2ludF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUd1dHRlcigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGFjdHVhbEd1dHRlciA9IHRoaXMuY2FsY3VsYXRlR3V0dGVyKCk7XHJcbiAgICBpZiAodGhpcy5hY3R1YWxHdXR0ZXIgIT09IGFjdHVhbEd1dHRlcikge1xyXG4gICAgICB0aGlzLmFjdHVhbEd1dHRlciA9IGFjdHVhbEd1dHRlcjtcclxuICAgICAgdGhpcy5hY3R1YWxHdXR0ZXIkLm5leHQodGhpcy5hY3R1YWxHdXR0ZXIpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdtYXJnaW4tbGVmdCcsIGAtJHt0aGlzLmFjdHVhbEd1dHRlciAvIDJ9cHhgKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnbWFyZ2luLXJpZ2h0JywgYC0ke3RoaXMuYWN0dWFsR3V0dGVyIC8gMn1weGApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd2F0Y2hNZWRpYSgpOiB2b2lkIHtcclxuICAgIE9iamVjdC5rZXlzKHJlc3BvbnNpdmVNYXApLm1hcCgoc2NyZWVuOiBzdHJpbmcpID0+IHtcclxuICAgICAgY29uc3QgY2FzdEJQID0gc2NyZWVuIGFzIE56QnJlYWtQb2ludDtcclxuICAgICAgY29uc3QgbWF0Y2hCZWxvdyA9IHRoaXMubWVkaWFNYXRjaGVyLm1hdGNoTWVkaWEocmVzcG9uc2l2ZU1hcFtjYXN0QlBdKS5tYXRjaGVzO1xyXG4gICAgICBpZiAobWF0Y2hCZWxvdykge1xyXG4gICAgICAgIHRoaXMuYnJlYWtQb2ludCA9IGNhc3RCUDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnVwZGF0ZUd1dHRlcigpO1xyXG4gIH1cclxuXHJcbiAgLyoqIHRlbXAgc29sdXRpb24gc2luY2Ugbm8gbWV0aG9kIGFkZCBjbGFzc01hcCB0byBob3N0IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzcyODkqL1xyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc31gXTogIXRoaXMubnpUeXBlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uelR5cGV9YF06IHRoaXMubnpUeXBlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uelR5cGV9LSR7dGhpcy5uekFsaWdufWBdOiB0aGlzLm56VHlwZSAmJiB0aGlzLm56QWxpZ24sXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLm56VHlwZX0tJHt0aGlzLm56SnVzdGlmeX1gXTogdGhpcy5uelR5cGUgJiYgdGhpcy5uekp1c3RpZnlcclxuICAgIH07XHJcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwgY2xhc3NNYXApO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHVibGljIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gICAgcHVibGljIG1lZGlhTWF0Y2hlcjogTWVkaWFNYXRjaGVyLFxyXG4gICAgcHVibGljIG5nWm9uZTogTmdab25lLFxyXG4gICAgcHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgIHByaXZhdGUgbnpEb21FdmVudFNlcnZpY2U6IE56RG9tRXZlbnRTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIHRoaXMud2F0Y2hNZWRpYSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpUeXBlIHx8IGNoYW5nZXMubnpBbGlnbiB8fCBjaGFuZ2VzLm56SnVzdGlmeSkge1xyXG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5uekd1dHRlcikge1xyXG4gICAgICB0aGlzLnVwZGF0ZUd1dHRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHRoaXMubnpEb21FdmVudFNlcnZpY2VcclxuICAgICAgICAucmVnaXN0ZXJSZXNpemVMaXN0ZW5lcigpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXHJcbiAgICAgICAgICBmaW5hbGl6ZSgoKSA9PiB0aGlzLm56RG9tRXZlbnRTZXJ2aWNlLnVucmVnaXN0ZXJSZXNpemVMaXN0ZW5lcigpKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMud2F0Y2hNZWRpYSgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==