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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzRowDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.NzUpdateHostClassService }, { token: i2.MediaMatcher }, { token: i0.NgZone }, { token: i3.Platform }, { token: i4.NzDomEventService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: NzRowDirective, selector: "[nz-row],nz-row", inputs: { nzType: "nzType", nzAlign: "nzAlign", nzJustify: "nzJustify", nzGutter: "nzGutter" }, providers: [NzUpdateHostClassService], exportAs: ["nzRow"], usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzRowDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nz-row],nz-row',
                    exportAs: 'nzRow',
                    providers: [NzUpdateHostClassService]
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.NzUpdateHostClassService }, { type: i2.MediaMatcher }, { type: i0.NgZone }, { type: i3.Platform }, { type: i4.NzDomEventService }]; }, propDecorators: { nzType: [{
                type: Input
            }], nzAlign: [{
                type: Input
            }], nzJustify: [{
                type: Input
            }], nzGutter: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWdyaWQvbnotcm93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUVULEtBQUssRUFPTixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFnQixhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7Ozs7O0FBV3RGLE1BQU0sT0FBTyxjQUFjO0lBWXpCLGVBQWU7UUFDYixJQUFJLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDckMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3RCO2FBQU0sSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdkM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7SUFDSCxDQUFDO0lBRUQsWUFBWTtRQUNWLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QyxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssWUFBWSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZ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U0FDcEI7UUFDRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzNCLElBQUksQ0FBQyxpQkFBaUI7aUJBQ25CLHNCQUFzQixFQUFFO2lCQUN4QixJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDeEIsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQ2xFO2lCQUNBLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7K0dBN0ZVLGNBQWM7bUdBQWQsY0FBYywwSUFGZCxDQUFDLHdCQUF3QixDQUFDOzs0RkFFMUIsY0FBYztrQkFMMUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsT0FBTztvQkFDakIsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7aUJBQ3RDO3VRQUVVLE1BQU07c0JBQWQsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTWVkaWFNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaW5hbGl6ZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOekJyZWFrUG9pbnQsIHJlc3BvbnNpdmVNYXAgfSBmcm9tICcuLi9jb3JlL3Jlc3BvbnNpdmUnO1xyXG5pbXBvcnQgeyBJbmRleGFibGVPYmplY3QsIE56QWxpZ25UeXBlIH0gZnJvbSAnLi4vY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XHJcbmltcG9ydCB7IE56RG9tRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy9uei1kb20tZXZlbnQuc2VydmljZSc7XHJcblxyXG5leHBvcnQgdHlwZSBOekp1c3RpZnkgPSAnc3RhcnQnIHwgJ2VuZCcgfCAnY2VudGVyJyB8ICdzcGFjZS1hcm91bmQnIHwgJ3NwYWNlLWJldHdlZW4nO1xyXG5leHBvcnQgdHlwZSBOekdyaWRUeXBlID0gJ2ZsZXgnIHwgbnVsbDtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256LXJvd10sbnotcm93JyxcclxuICBleHBvcnRBczogJ256Um93JyxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelJvd0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIG56VHlwZTogTnpHcmlkVHlwZTtcclxuICBASW5wdXQoKSBuekFsaWduOiBOekFsaWduVHlwZSA9ICd0b3AnO1xyXG4gIEBJbnB1dCgpIG56SnVzdGlmeTogTnpKdXN0aWZ5ID0gJ3N0YXJ0JztcclxuICBASW5wdXQoKSBuekd1dHRlcjogbnVtYmVyIHwgSW5kZXhhYmxlT2JqZWN0O1xyXG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LXJvdyc7XHJcbiAgcHJpdmF0ZSBicmVha1BvaW50OiBOekJyZWFrUG9pbnQ7XHJcbiAgYWN0dWFsR3V0dGVyOiBudW1iZXI7XHJcbiAgYWN0dWFsR3V0dGVyJCA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcclxuICBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIGNhbGN1bGF0ZUd1dHRlcigpOiBudW1iZXIge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLm56R3V0dGVyICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICByZXR1cm4gdGhpcy5uekd1dHRlcjtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5icmVha1BvaW50ICYmIHRoaXMubnpHdXR0ZXJbdGhpcy5icmVha1BvaW50XSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5uekd1dHRlclt0aGlzLmJyZWFrUG9pbnRdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVHdXR0ZXIoKTogdm9pZCB7XHJcbiAgICBjb25zdCBhY3R1YWxHdXR0ZXIgPSB0aGlzLmNhbGN1bGF0ZUd1dHRlcigpO1xyXG4gICAgaWYgKHRoaXMuYWN0dWFsR3V0dGVyICE9PSBhY3R1YWxHdXR0ZXIpIHtcclxuICAgICAgdGhpcy5hY3R1YWxHdXR0ZXIgPSBhY3R1YWxHdXR0ZXI7XHJcbiAgICAgIHRoaXMuYWN0dWFsR3V0dGVyJC5uZXh0KHRoaXMuYWN0dWFsR3V0dGVyKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnbWFyZ2luLWxlZnQnLCBgLSR7dGhpcy5hY3R1YWxHdXR0ZXIgLyAyfXB4YCk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ21hcmdpbi1yaWdodCcsIGAtJHt0aGlzLmFjdHVhbEd1dHRlciAvIDJ9cHhgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdhdGNoTWVkaWEoKTogdm9pZCB7XHJcbiAgICBPYmplY3Qua2V5cyhyZXNwb25zaXZlTWFwKS5tYXAoKHNjcmVlbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhc3RCUCA9IHNjcmVlbiBhcyBOekJyZWFrUG9pbnQ7XHJcbiAgICAgIGNvbnN0IG1hdGNoQmVsb3cgPSB0aGlzLm1lZGlhTWF0Y2hlci5tYXRjaE1lZGlhKHJlc3BvbnNpdmVNYXBbY2FzdEJQXSkubWF0Y2hlcztcclxuICAgICAgaWYgKG1hdGNoQmVsb3cpIHtcclxuICAgICAgICB0aGlzLmJyZWFrUG9pbnQgPSBjYXN0QlA7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy51cGRhdGVHdXR0ZXIoKTtcclxuICB9XHJcblxyXG4gIC8qKiB0ZW1wIHNvbHV0aW9uIHNpbmNlIG5vIG1ldGhvZCBhZGQgY2xhc3NNYXAgdG8gaG9zdCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy83Mjg5Ki9cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9YF06ICF0aGlzLm56VHlwZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubnpUeXBlfWBdOiB0aGlzLm56VHlwZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubnpUeXBlfS0ke3RoaXMubnpBbGlnbn1gXTogdGhpcy5uelR5cGUgJiYgdGhpcy5uekFsaWduLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uelR5cGV9LSR7dGhpcy5uekp1c3RpZnl9YF06IHRoaXMubnpUeXBlICYmIHRoaXMubnpKdXN0aWZ5XHJcbiAgICB9O1xyXG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwsIGNsYXNzTWFwKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHB1YmxpYyBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcclxuICAgIHB1YmxpYyBtZWRpYU1hdGNoZXI6IE1lZGlhTWF0Y2hlcixcclxuICAgIHB1YmxpYyBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIHB1YmxpYyBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICBwcml2YXRlIG56RG9tRXZlbnRTZXJ2aWNlOiBOekRvbUV2ZW50U2VydmljZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLndhdGNoTWVkaWEoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLm56VHlwZSB8fCBjaGFuZ2VzLm56QWxpZ24gfHwgY2hhbmdlcy5uekp1c3RpZnkpIHtcclxuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoYW5nZXMubnpHdXR0ZXIpIHtcclxuICAgICAgdGhpcy51cGRhdGVHdXR0ZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICB0aGlzLm56RG9tRXZlbnRTZXJ2aWNlXHJcbiAgICAgICAgLnJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICAgICAgZmluYWxpemUoKCkgPT4gdGhpcy5uekRvbUV2ZW50U2VydmljZS51bnJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKSlcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLndhdGNoTWVkaWEoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=