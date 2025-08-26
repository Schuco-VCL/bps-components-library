/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { auditTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class NzDomEventService {
    constructor(ngZone, rendererFactory2) {
        this.ngZone = ngZone;
        this.rendererFactory2 = rendererFactory2;
        this.resizeSource = new Subject();
        this.domEventListeners = new Map();
        this.renderer = this.rendererFactory2.createRenderer(null, null);
    }
    registerResizeListener() {
        if (!this.domEventListeners.has('resize')) {
            this.domEventListeners.set('resize', {
                handler: () => {
                    this.resizeSource.next();
                },
                countOfListeners: 0
            });
        }
        const listener = this.domEventListeners.get('resize');
        this.tryToStartListener(listener, 'resize');
        return this.resizeSource.pipe(auditTime(16));
    }
    unregisterResizeListener() {
        if (!this.domEventListeners.has('resize')) {
            return;
        }
        const listener = this.domEventListeners.get('resize');
        this.tryToStopListener(listener);
    }
    tryToStartListener(l, name) {
        l.countOfListeners += 1;
        this.ngZone.runOutsideAngular(() => {
            if (l.countOfListeners === 1) {
                l.unsubscribe = this.renderer.listen('window', name, l.handler);
            }
        });
    }
    tryToStopListener(l) {
        l.countOfListeners -= 1;
        if (l.countOfListeners === 0) {
            l.unsubscribe();
            l.unsubscribe = undefined;
        }
    }
    static { this.ɵfac = function NzDomEventService_Factory(t) { return new (t || NzDomEventService)(i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i0.RendererFactory2)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NzDomEventService, factory: NzDomEventService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzDomEventService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i0.NgZone }, { type: i0.RendererFactory2 }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZG9tLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NvcmUvc2VydmljZXMvbnotZG9tLWV2ZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBdUMsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBVzNDLE1BQU0sT0FBTyxpQkFBaUI7SUFLNUIsWUFBb0IsTUFBYyxFQUFVLGdCQUFrQztRQUExRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUo3RCxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDbkMsc0JBQWlCLEdBQUcsSUFBSSxHQUFHLEVBQW9CLENBQUM7UUFJL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsc0JBQXNCO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ25DLE9BQU8sRUFBRSxHQUFTLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBQ0QsZ0JBQWdCLEVBQUUsQ0FBQzthQUNwQixDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTVDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELHdCQUF3QjtRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzFDLE9BQU87UUFDVCxDQUFDO1FBRUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVPLGtCQUFrQixDQUFDLENBQVcsRUFBRSxJQUFZO1FBQ2xELENBQUMsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7WUFDakMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQzdCLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEUsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGlCQUFpQixDQUFDLENBQVc7UUFDbkMsQ0FBQyxDQUFDLGdCQUFnQixJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUM3QixDQUFDLENBQUMsV0FBWSxFQUFFLENBQUM7WUFDakIsQ0FBQyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7UUFDNUIsQ0FBQztJQUNILENBQUM7a0ZBakRVLGlCQUFpQjt1RUFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFGaEIsTUFBTTs7aUZBRVAsaUJBQWlCO2NBSDdCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lLCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBhdWRpdFRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbnRlcmZhY2UgTGlzdGVuZXIge1xyXG4gIGhhbmRsZXIoZTogRXZlbnQpOiB2b2lkO1xyXG4gIHVuc3Vic2NyaWJlPygpOiB2b2lkO1xyXG4gIGNvdW50T2ZMaXN0ZW5lcnM6IG51bWJlcjtcclxufVxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpEb21FdmVudFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcmVzaXplU291cmNlID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIHJlYWRvbmx5IGRvbUV2ZW50TGlzdGVuZXJzID0gbmV3IE1hcDxzdHJpbmcsIExpc3RlbmVyPigpO1xyXG4gIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSByZW5kZXJlckZhY3RvcnkyOiBSZW5kZXJlckZhY3RvcnkyKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkyLmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJSZXNpemVMaXN0ZW5lcigpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIGlmICghdGhpcy5kb21FdmVudExpc3RlbmVycy5oYXMoJ3Jlc2l6ZScpKSB7XHJcbiAgICAgIHRoaXMuZG9tRXZlbnRMaXN0ZW5lcnMuc2V0KCdyZXNpemUnLCB7XHJcbiAgICAgICAgaGFuZGxlcjogKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yZXNpemVTb3VyY2UubmV4dCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY291bnRPZkxpc3RlbmVyczogMFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsaXN0ZW5lciA9IHRoaXMuZG9tRXZlbnRMaXN0ZW5lcnMuZ2V0KCdyZXNpemUnKSE7XHJcbiAgICB0aGlzLnRyeVRvU3RhcnRMaXN0ZW5lcihsaXN0ZW5lciwgJ3Jlc2l6ZScpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc2l6ZVNvdXJjZS5waXBlKGF1ZGl0VGltZSgxNikpO1xyXG4gIH1cclxuXHJcbiAgdW5yZWdpc3RlclJlc2l6ZUxpc3RlbmVyKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmRvbUV2ZW50TGlzdGVuZXJzLmhhcygncmVzaXplJykpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxpc3RlbmVyID0gdGhpcy5kb21FdmVudExpc3RlbmVycy5nZXQoJ3Jlc2l6ZScpITtcclxuICAgIHRoaXMudHJ5VG9TdG9wTGlzdGVuZXIobGlzdGVuZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cnlUb1N0YXJ0TGlzdGVuZXIobDogTGlzdGVuZXIsIG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbC5jb3VudE9mTGlzdGVuZXJzICs9IDE7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGlmIChsLmNvdW50T2ZMaXN0ZW5lcnMgPT09IDEpIHtcclxuICAgICAgICBsLnVuc3Vic2NyaWJlID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsIG5hbWUsIGwuaGFuZGxlcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cnlUb1N0b3BMaXN0ZW5lcihsOiBMaXN0ZW5lcik6IHZvaWQge1xyXG4gICAgbC5jb3VudE9mTGlzdGVuZXJzIC09IDE7XHJcbiAgICBpZiAobC5jb3VudE9mTGlzdGVuZXJzID09PSAwKSB7XHJcbiAgICAgIGwudW5zdWJzY3JpYmUhKCk7XHJcbiAgICAgIGwudW5zdWJzY3JpYmUgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==