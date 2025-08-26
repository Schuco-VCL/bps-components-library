import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';
import { NzModalControlServiceModule } from './nz-modal-control.service.module';
import * as i0 from "@angular/core";
export class BpsModalControlService {
    // Track singleton afterAllClose through over the injection tree
    get afterAllClose() {
        return this.parentService ? this.parentService.afterAllClose : this.rootAfterAllClose;
    }
    // Track singleton openModals array through over the injection tree
    get openModals() {
        return this.parentService ? this.parentService.openModals : this.rootOpenModals;
    }
    get registeredMetaMap() {
        // Registered modal for later usage
        return this.parentService ? this.parentService.registeredMetaMap : this.rootRegisteredMetaMap;
    }
    constructor(parentService) {
        this.parentService = parentService;
        this.rootOpenModals = this.parentService ? null : [];
        this.rootAfterAllClose = this.parentService ? null : new Subject();
        this.rootRegisteredMetaMap = this.parentService ? null : new Map();
    }
    // Register a modal to listen its open/close
    registerModal(modalRef) {
        if (!this.hasRegistered(modalRef)) {
            const afterOpenSubscription = modalRef.afterOpen.subscribe(() => this.openModals.push(modalRef));
            const afterCloseSubscription = modalRef.afterClose.subscribe(() => this.removeOpenModal(modalRef));
            this.registeredMetaMap.set(modalRef, { modalRef, afterOpenSubscription, afterCloseSubscription });
        }
    }
    // deregister modals
    deregisterModal(modalRef) {
        const registeredMeta = this.registeredMetaMap.get(modalRef);
        if (registeredMeta) {
            // Remove this modal if it is still in the opened modal list (NOTE: it may trigger "afterAllClose")
            this.removeOpenModal(registeredMeta.modalRef);
            registeredMeta.afterOpenSubscription.unsubscribe();
            registeredMeta.afterCloseSubscription.unsubscribe();
            this.registeredMetaMap.delete(modalRef);
        }
    }
    hasRegistered(modalRef) {
        return this.registeredMetaMap.has(modalRef);
    }
    // Close all registered opened modals
    closeAll() {
        let i = this.openModals.length;
        while (i--) {
            this.openModals[i].close();
        }
    }
    removeOpenModal(modalRef) {
        const index = this.openModals.indexOf(modalRef);
        if (index > -1) {
            this.openModals.splice(index, 1);
            if (!this.openModals.length) {
                this.afterAllClose.next();
            }
        }
    }
    static { this.ɵfac = function BpsModalControlService_Factory(t) { return new (t || BpsModalControlService)(i0.ɵɵinject(BpsModalControlService, 12)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BpsModalControlService, factory: BpsModalControlService.ɵfac, providedIn: NzModalControlServiceModule }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsModalControlService, [{
        type: Injectable,
        args: [{
                providedIn: NzModalControlServiceModule
            }]
    }], () => [{ type: BpsModalControlService, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLW1vZGFsLWNvbnRyb2wuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLW1vZGFsL2Jwcy1tb2RhbC1jb250cm9sLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBRTdDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQVdoRixNQUFNLE9BQU8sc0JBQXNCO0lBQ2pDLGdFQUFnRTtJQUNoRSxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWtCLENBQUM7SUFDekYsQ0FBQztJQUVELG1FQUFtRTtJQUNuRSxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBZSxDQUFDO0lBQ25GLENBQUM7SUFNRCxJQUFZLGlCQUFpQjtRQUMzQixtQ0FBbUM7UUFDbkMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXNCLENBQUM7SUFDakcsQ0FBQztJQUVELFlBQTRDLGFBQXFDO1FBQXJDLGtCQUFhLEdBQWIsYUFBYSxDQUF3QjtRQVR6RSxtQkFBYyxHQUF5QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN0RSxzQkFBaUIsR0FBeUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQzFGLDBCQUFxQixHQUE0QyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFPM0IsQ0FBQztJQUVyRiw0Q0FBNEM7SUFDNUMsYUFBYSxDQUFDLFFBQXFCO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDbEMsTUFBTSxxQkFBcUIsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2pHLE1BQU0sc0JBQXNCLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBRW5HLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFLHNCQUFzQixFQUFFLENBQUMsQ0FBQztRQUNwRyxDQUFDO0lBQ0gsQ0FBQztJQUVELG9CQUFvQjtJQUNwQixlQUFlLENBQUMsUUFBcUI7UUFDbkMsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RCxJQUFJLGNBQWMsRUFBRSxDQUFDO1lBQ25CLG1HQUFtRztZQUNuRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxjQUFjLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkQsY0FBYyxDQUFDLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3BELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsQ0FBQztJQUNILENBQUM7SUFFRCxhQUFhLENBQUMsUUFBcUI7UUFDakMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxxQ0FBcUM7SUFDckMsUUFBUTtRQUNOLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBRS9CLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFFTyxlQUFlLENBQUMsUUFBcUI7UUFDM0MsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFaEQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM1QixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7dUZBbkVVLHNCQUFzQjt1RUFBdEIsc0JBQXNCLFdBQXRCLHNCQUFzQixtQkFGckIsMkJBQTJCOztpRkFFNUIsc0JBQXNCO2NBSGxDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsMkJBQTJCO2FBQ3hDOztzQkFxQmMsUUFBUTs7c0JBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQnBzTW9kYWxSZWYgfSBmcm9tICcuL2Jwcy1tb2RhbC1yZWYuY2xhc3MnO1xyXG5pbXBvcnQgeyBOek1vZGFsQ29udHJvbFNlcnZpY2VNb2R1bGUgfSBmcm9tICcuL256LW1vZGFsLWNvbnRyb2wuc2VydmljZS5tb2R1bGUnO1xyXG5cclxuaW50ZXJmYWNlIFJlZ2lzdGVyZWRNZXRhIHtcclxuICBtb2RhbFJlZjogQnBzTW9kYWxSZWY7XHJcbiAgYWZ0ZXJPcGVuU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgYWZ0ZXJDbG9zZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogTnpNb2RhbENvbnRyb2xTZXJ2aWNlTW9kdWxlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNNb2RhbENvbnRyb2xTZXJ2aWNlIHtcclxuICAvLyBUcmFjayBzaW5nbGV0b24gYWZ0ZXJBbGxDbG9zZSB0aHJvdWdoIG92ZXIgdGhlIGluamVjdGlvbiB0cmVlXHJcbiAgZ2V0IGFmdGVyQWxsQ2xvc2UoKTogU3ViamVjdDx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnRTZXJ2aWNlID8gdGhpcy5wYXJlbnRTZXJ2aWNlLmFmdGVyQWxsQ2xvc2UgOiB0aGlzLnJvb3RBZnRlckFsbENsb3NlITtcclxuICB9XHJcblxyXG4gIC8vIFRyYWNrIHNpbmdsZXRvbiBvcGVuTW9kYWxzIGFycmF5IHRocm91Z2ggb3ZlciB0aGUgaW5qZWN0aW9uIHRyZWVcclxuICBnZXQgb3Blbk1vZGFscygpOiBCcHNNb2RhbFJlZltdIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudFNlcnZpY2UgPyB0aGlzLnBhcmVudFNlcnZpY2Uub3Blbk1vZGFscyA6IHRoaXMucm9vdE9wZW5Nb2RhbHMhO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByb290T3Blbk1vZGFsczogQnBzTW9kYWxSZWZbXSB8IG51bGwgPSB0aGlzLnBhcmVudFNlcnZpY2UgPyBudWxsIDogW107XHJcbiAgcHJpdmF0ZSByb290QWZ0ZXJBbGxDbG9zZTogU3ViamVjdDx2b2lkPiB8IG51bGwgPSB0aGlzLnBhcmVudFNlcnZpY2UgPyBudWxsIDogbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIHJvb3RSZWdpc3RlcmVkTWV0YU1hcDogTWFwPEJwc01vZGFsUmVmLCBSZWdpc3RlcmVkTWV0YT4gfCBudWxsID0gdGhpcy5wYXJlbnRTZXJ2aWNlID8gbnVsbCA6IG5ldyBNYXAoKTtcclxuXHJcbiAgcHJpdmF0ZSBnZXQgcmVnaXN0ZXJlZE1ldGFNYXAoKTogTWFwPEJwc01vZGFsUmVmLCBSZWdpc3RlcmVkTWV0YT4ge1xyXG4gICAgLy8gUmVnaXN0ZXJlZCBtb2RhbCBmb3IgbGF0ZXIgdXNhZ2VcclxuICAgIHJldHVybiB0aGlzLnBhcmVudFNlcnZpY2UgPyB0aGlzLnBhcmVudFNlcnZpY2UucmVnaXN0ZXJlZE1ldGFNYXAgOiB0aGlzLnJvb3RSZWdpc3RlcmVkTWV0YU1hcCE7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwcml2YXRlIHBhcmVudFNlcnZpY2U6IEJwc01vZGFsQ29udHJvbFNlcnZpY2UpIHt9XHJcblxyXG4gIC8vIFJlZ2lzdGVyIGEgbW9kYWwgdG8gbGlzdGVuIGl0cyBvcGVuL2Nsb3NlXHJcbiAgcmVnaXN0ZXJNb2RhbChtb2RhbFJlZjogQnBzTW9kYWxSZWYpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5oYXNSZWdpc3RlcmVkKG1vZGFsUmVmKSkge1xyXG4gICAgICBjb25zdCBhZnRlck9wZW5TdWJzY3JpcHRpb24gPSBtb2RhbFJlZi5hZnRlck9wZW4uc3Vic2NyaWJlKCgpID0+IHRoaXMub3Blbk1vZGFscy5wdXNoKG1vZGFsUmVmKSk7XHJcbiAgICAgIGNvbnN0IGFmdGVyQ2xvc2VTdWJzY3JpcHRpb24gPSBtb2RhbFJlZi5hZnRlckNsb3NlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlbW92ZU9wZW5Nb2RhbChtb2RhbFJlZikpO1xyXG5cclxuICAgICAgdGhpcy5yZWdpc3RlcmVkTWV0YU1hcC5zZXQobW9kYWxSZWYsIHsgbW9kYWxSZWYsIGFmdGVyT3BlblN1YnNjcmlwdGlvbiwgYWZ0ZXJDbG9zZVN1YnNjcmlwdGlvbiB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGRlcmVnaXN0ZXIgbW9kYWxzXHJcbiAgZGVyZWdpc3Rlck1vZGFsKG1vZGFsUmVmOiBCcHNNb2RhbFJlZik6IHZvaWQge1xyXG4gICAgY29uc3QgcmVnaXN0ZXJlZE1ldGEgPSB0aGlzLnJlZ2lzdGVyZWRNZXRhTWFwLmdldChtb2RhbFJlZik7XHJcbiAgICBpZiAocmVnaXN0ZXJlZE1ldGEpIHtcclxuICAgICAgLy8gUmVtb3ZlIHRoaXMgbW9kYWwgaWYgaXQgaXMgc3RpbGwgaW4gdGhlIG9wZW5lZCBtb2RhbCBsaXN0IChOT1RFOiBpdCBtYXkgdHJpZ2dlciBcImFmdGVyQWxsQ2xvc2VcIilcclxuICAgICAgdGhpcy5yZW1vdmVPcGVuTW9kYWwocmVnaXN0ZXJlZE1ldGEubW9kYWxSZWYpO1xyXG4gICAgICByZWdpc3RlcmVkTWV0YS5hZnRlck9wZW5TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgcmVnaXN0ZXJlZE1ldGEuYWZ0ZXJDbG9zZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLnJlZ2lzdGVyZWRNZXRhTWFwLmRlbGV0ZShtb2RhbFJlZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYXNSZWdpc3RlcmVkKG1vZGFsUmVmOiBCcHNNb2RhbFJlZik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVnaXN0ZXJlZE1ldGFNYXAuaGFzKG1vZGFsUmVmKTtcclxuICB9XHJcblxyXG4gIC8vIENsb3NlIGFsbCByZWdpc3RlcmVkIG9wZW5lZCBtb2RhbHNcclxuICBjbG9zZUFsbCgpOiB2b2lkIHtcclxuICAgIGxldCBpID0gdGhpcy5vcGVuTW9kYWxzLmxlbmd0aDtcclxuXHJcbiAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgIHRoaXMub3Blbk1vZGFsc1tpXS5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVPcGVuTW9kYWwobW9kYWxSZWY6IEJwc01vZGFsUmVmKTogdm9pZCB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMub3Blbk1vZGFscy5pbmRleE9mKG1vZGFsUmVmKTtcclxuXHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICB0aGlzLm9wZW5Nb2RhbHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgIGlmICghdGhpcy5vcGVuTW9kYWxzLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuYWZ0ZXJBbGxDbG9zZS5uZXh0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19