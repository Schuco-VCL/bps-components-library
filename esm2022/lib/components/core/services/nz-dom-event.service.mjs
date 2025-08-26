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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NzDomEventService, deps: [{ token: i0.NgZone }, { token: i0.RendererFactory2 }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NzDomEventService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NzDomEventService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i0.NgZone }, { type: i0.RendererFactory2 }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZG9tLWV2ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NvcmUvc2VydmljZXMvbnotZG9tLWV2ZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBdUMsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBVzNDLE1BQU0sT0FBTyxpQkFBaUI7SUFLNUIsWUFBb0IsTUFBYyxFQUFVLGdCQUFrQztRQUExRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUo3RCxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDbkMsc0JBQWlCLEdBQUcsSUFBSSxHQUFHLEVBQW9CLENBQUM7UUFJL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsc0JBQXNCO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ25DLE9BQU8sRUFBRSxHQUFTLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBQ0QsZ0JBQWdCLEVBQUUsQ0FBQzthQUNwQixDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTVDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELHdCQUF3QjtRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzFDLE9BQU87UUFDVCxDQUFDO1FBRUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVPLGtCQUFrQixDQUFDLENBQVcsRUFBRSxJQUFZO1FBQ2xELENBQUMsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7WUFDakMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQzdCLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEUsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGlCQUFpQixDQUFDLENBQVc7UUFDbkMsQ0FBQyxDQUFDLGdCQUFnQixJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUM3QixDQUFDLENBQUMsV0FBWSxFQUFFLENBQUM7WUFDakIsQ0FBQyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7UUFDNUIsQ0FBQztJQUNILENBQUM7K0dBakRVLGlCQUFpQjttSEFBakIsaUJBQWlCLGNBRmhCLE1BQU07OzRGQUVQLGlCQUFpQjtrQkFIN0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgYXVkaXRUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW50ZXJmYWNlIExpc3RlbmVyIHtcclxuICBoYW5kbGVyKGU6IEV2ZW50KTogdm9pZDtcclxuICB1bnN1YnNjcmliZT8oKTogdm9pZDtcclxuICBjb3VudE9mTGlzdGVuZXJzOiBudW1iZXI7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56RG9tRXZlbnRTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IHJlc2l6ZVNvdXJjZSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBkb21FdmVudExpc3RlbmVycyA9IG5ldyBNYXA8c3RyaW5nLCBMaXN0ZW5lcj4oKTtcclxuICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5MjogUmVuZGVyZXJGYWN0b3J5Mikge1xyXG4gICAgdGhpcy5yZW5kZXJlciA9IHRoaXMucmVuZGVyZXJGYWN0b3J5Mi5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyUmVzaXplTGlzdGVuZXIoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICBpZiAoIXRoaXMuZG9tRXZlbnRMaXN0ZW5lcnMuaGFzKCdyZXNpemUnKSkge1xyXG4gICAgICB0aGlzLmRvbUV2ZW50TGlzdGVuZXJzLnNldCgncmVzaXplJywge1xyXG4gICAgICAgIGhhbmRsZXI6ICgpOiB2b2lkID0+IHtcclxuICAgICAgICAgIHRoaXMucmVzaXplU291cmNlLm5leHQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvdW50T2ZMaXN0ZW5lcnM6IDBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGlzdGVuZXIgPSB0aGlzLmRvbUV2ZW50TGlzdGVuZXJzLmdldCgncmVzaXplJykhO1xyXG4gICAgdGhpcy50cnlUb1N0YXJ0TGlzdGVuZXIobGlzdGVuZXIsICdyZXNpemUnKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXNpemVTb3VyY2UucGlwZShhdWRpdFRpbWUoMTYpKTtcclxuICB9XHJcblxyXG4gIHVucmVnaXN0ZXJSZXNpemVMaXN0ZW5lcigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kb21FdmVudExpc3RlbmVycy5oYXMoJ3Jlc2l6ZScpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsaXN0ZW5lciA9IHRoaXMuZG9tRXZlbnRMaXN0ZW5lcnMuZ2V0KCdyZXNpemUnKSE7XHJcbiAgICB0aGlzLnRyeVRvU3RvcExpc3RlbmVyKGxpc3RlbmVyKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJ5VG9TdGFydExpc3RlbmVyKGw6IExpc3RlbmVyLCBuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGwuY291bnRPZkxpc3RlbmVycyArPSAxO1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBpZiAobC5jb3VudE9mTGlzdGVuZXJzID09PSAxKSB7XHJcbiAgICAgICAgbC51bnN1YnNjcmliZSA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCBuYW1lLCBsLmhhbmRsZXIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJ5VG9TdG9wTGlzdGVuZXIobDogTGlzdGVuZXIpOiB2b2lkIHtcclxuICAgIGwuY291bnRPZkxpc3RlbmVycyAtPSAxO1xyXG4gICAgaWYgKGwuY291bnRPZkxpc3RlbmVycyA9PT0gMCkge1xyXG4gICAgICBsLnVuc3Vic2NyaWJlISgpO1xyXG4gICAgICBsLnVuc3Vic2NyaWJlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=