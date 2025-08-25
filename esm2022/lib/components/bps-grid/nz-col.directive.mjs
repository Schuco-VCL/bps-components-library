import { Directive, Host, Input, Optional } from '@angular/core';
import { isNotNil } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import * as i0 from "@angular/core";
import * as i1 from "../core/services/update-host-class.service";
import * as i2 from "./nz-row.directive";
export class NzColDirective {
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    setClassMap() {
        const classMap = {
            [`${this.prefixCls}`]: true,
            [`${this.prefixCls}-${this.nzSpan}`]: isNotNil(this.nzSpan),
            [`${this.prefixCls}-order-${this.nzOrder}`]: isNotNil(this.nzOrder),
            [`${this.prefixCls}-offset-${this.nzOffset}`]: isNotNil(this.nzOffset),
            [`${this.prefixCls}-pull-${this.nzPull}`]: isNotNil(this.nzPull),
            [`${this.prefixCls}-push-${this.nzPush}`]: isNotNil(this.nzPush),
            ...this.generateClass()
        };
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    }
    generateClass() {
        const listOfSizeInputName = ['nzXs', 'nzSm', 'nzMd', 'nzLg', 'nzXl', 'nzXXl'];
        const listClassMap = {};
        listOfSizeInputName.forEach(name => {
            const sizeName = name.replace('nz', '').toLowerCase();
            if (isNotNil(this[name])) {
                if (typeof this[name] === 'number' || typeof this[name] === 'string') {
                    listClassMap[`${this.prefixCls}-${sizeName}-${this[name]}`] = true;
                }
                else {
                    const embedded = this[name];
                    const prefixArray = ['span', 'pull', 'push', 'offset', 'order'];
                    prefixArray.forEach(prefix => {
                        const prefixClass = prefix === 'span' ? '-' : `-${prefix}-`;
                        listClassMap[`${this.prefixCls}-${sizeName}${prefixClass}${embedded[prefix]}`] =
                            embedded && isNotNil(embedded[prefix]);
                    });
                }
            }
        });
        return listClassMap;
    }
    constructor(nzUpdateHostClassService, elementRef, nzRowDirective, renderer) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.nzRowDirective = nzRowDirective;
        this.renderer = renderer;
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-col';
        this.destroy$ = new Subject();
    }
    ngOnChanges() {
        this.setClassMap();
    }
    ngAfterViewInit() {
        if (this.nzRowDirective) {
            this.nzRowDirective.actualGutter$
                .pipe(startWith(this.nzRowDirective.actualGutter), takeUntil(this.destroy$))
                .subscribe(actualGutter => {
                this.renderer.setStyle(this.el, 'padding-left', `${actualGutter / 2}px`);
                this.renderer.setStyle(this.el, 'padding-right', `${actualGutter / 2}px`);
            });
        }
    }
    ngOnInit() {
        this.setClassMap();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzColDirective, deps: [{ token: i1.NzUpdateHostClassService }, { token: i0.ElementRef }, { token: i2.NzRowDirective, host: true, optional: true }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: NzColDirective, selector: "[nz-col],nz-col", inputs: { nzSpan: "nzSpan", nzOrder: "nzOrder", nzOffset: "nzOffset", nzPush: "nzPush", nzPull: "nzPull", nzXs: "nzXs", nzSm: "nzSm", nzMd: "nzMd", nzLg: "nzLg", nzXl: "nzXl", nzXXl: "nzXXl" }, providers: [NzUpdateHostClassService], exportAs: ["nzCol"], usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzColDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nz-col],nz-col',
                    exportAs: 'nzCol',
                    providers: [NzUpdateHostClassService]
                }]
        }], ctorParameters: function () { return [{ type: i1.NzUpdateHostClassService }, { type: i0.ElementRef }, { type: i2.NzRowDirective, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }] }, { type: i0.Renderer2 }]; }, propDecorators: { nzSpan: [{
                type: Input
            }], nzOrder: [{
                type: Input
            }], nzOffset: [{
                type: Input
            }], nzPush: [{
                type: Input
            }], nzPull: [{
                type: Input
            }], nzXs: [{
                type: Input
            }], nzSm: [{
                type: Input
            }], nzMd: [{
                type: Input
            }], nzLg: [{
                type: Input
            }], nzXl: [{
                type: Input
            }], nzXXl: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWdyaWQvbnotY29sLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUVULElBQUksRUFDSixLQUFLLEVBSUwsUUFBUSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7Ozs7QUFpQnRGLE1BQU0sT0FBTyxjQUFjO0lBaUJ6Qix1R0FBdUc7SUFDdkcsV0FBVztRQUNULE1BQU0sUUFBUSxHQUFHO1lBQ2YsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUk7WUFDM0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDM0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLFVBQVUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbkUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLFdBQVcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDdEUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLFNBQVMsSUFBSSxDQUFDLE1BQU0s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LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBSZW5kZXJlcjJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XHJcbmltcG9ydCB7IE5nQ2xhc3NJbnRlcmZhY2UgfSBmcm9tICcuLi9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgTnpSb3dEaXJlY3RpdmUgfSBmcm9tICcuL256LXJvdy5kaXJlY3RpdmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFbWJlZGRlZFByb3BlcnR5IHtcclxuICBzcGFuPzogbnVtYmVyO1xyXG4gIHB1bGw/OiBudW1iZXI7XHJcbiAgcHVzaD86IG51bWJlcjtcclxuICBvZmZzZXQ/OiBudW1iZXI7XHJcbiAgb3JkZXI/OiBudW1iZXI7XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256LWNvbF0sbnotY29sJyxcclxuICBleHBvcnRBczogJ256Q29sJyxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNvbERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LWNvbCc7XHJcbiAgcHJvdGVjdGVkIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgQElucHV0KCkgbnpTcGFuOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpPcmRlcjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56T2Zmc2V0OiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpQdXNoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpQdWxsOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpYczogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcclxuICBASW5wdXQoKSBuelNtOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xyXG4gIEBJbnB1dCgpIG56TWQ6IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHk7XHJcbiAgQElucHV0KCkgbnpMZzogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcclxuICBASW5wdXQoKSBuelhsOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xyXG4gIEBJbnB1dCgpIG56WFhsOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xyXG5cclxuICAvKiogdGVtcCBzb2x1dGlvbiBzaW5jZSBubyBtZXRob2QgYWRkIGNsYXNzTWFwIHRvIGhvc3QgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNzI4OSovXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfWBdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uelNwYW59YF06IGlzTm90TmlsKHRoaXMubnpTcGFuKSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1vcmRlci0ke3RoaXMubnpPcmRlcn1gXTogaXNOb3ROaWwodGhpcy5uek9yZGVyKSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1vZmZzZXQtJHt0aGlzLm56T2Zmc2V0fWBdOiBpc05vdE5pbCh0aGlzLm56T2Zmc2V0KSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1wdWxsLSR7dGhpcy5uelB1bGx9YF06IGlzTm90TmlsKHRoaXMubnpQdWxsKSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1wdXNoLSR7dGhpcy5uelB1c2h9YF06IGlzTm90TmlsKHRoaXMubnpQdXNoKSxcclxuICAgICAgLi4udGhpcy5nZW5lcmF0ZUNsYXNzKClcclxuICAgIH07XHJcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwgY2xhc3NNYXApO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVDbGFzcygpOiBvYmplY3Qge1xyXG4gICAgY29uc3QgbGlzdE9mU2l6ZUlucHV0TmFtZTogQXJyYXk8a2V5b2YgTnpDb2xEaXJlY3RpdmU+ID0gWyduelhzJywgJ256U20nLCAnbnpNZCcsICduekxnJywgJ256WGwnLCAnbnpYWGwnXTtcclxuICAgIGNvbnN0IGxpc3RDbGFzc01hcDogTmdDbGFzc0ludGVyZmFjZSA9IHt9O1xyXG4gICAgbGlzdE9mU2l6ZUlucHV0TmFtZS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICBjb25zdCBzaXplTmFtZSA9IG5hbWUucmVwbGFjZSgnbnonLCAnJykudG9Mb3dlckNhc2UoKTtcclxuICAgICAgaWYgKGlzTm90TmlsKHRoaXNbbmFtZV0pKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzW25hbWVdID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdGhpc1tuYW1lXSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgIGxpc3RDbGFzc01hcFtgJHt0aGlzLnByZWZpeENsc30tJHtzaXplTmFtZX0tJHt0aGlzW25hbWVdfWBdID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgZW1iZWRkZWQgPSB0aGlzW25hbWVdIGFzIEVtYmVkZGVkUHJvcGVydHk7XHJcbiAgICAgICAgICBjb25zdCBwcmVmaXhBcnJheTogQXJyYXk8a2V5b2YgRW1iZWRkZWRQcm9wZXJ0eT4gPSBbJ3NwYW4nLCAncHVsbCcsICdwdXNoJywgJ29mZnNldCcsICdvcmRlciddO1xyXG4gICAgICAgICAgcHJlZml4QXJyYXkuZm9yRWFjaChwcmVmaXggPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcmVmaXhDbGFzcyA9IHByZWZpeCA9PT0gJ3NwYW4nID8gJy0nIDogYC0ke3ByZWZpeH0tYDtcclxuICAgICAgICAgICAgbGlzdENsYXNzTWFwW2Ake3RoaXMucHJlZml4Q2xzfS0ke3NpemVOYW1lfSR7cHJlZml4Q2xhc3N9JHtlbWJlZGRlZFtwcmVmaXhdfWBdID1cclxuICAgICAgICAgICAgICBlbWJlZGRlZCAmJiBpc05vdE5pbChlbWJlZGRlZFtwcmVmaXhdKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbGlzdENsYXNzTWFwO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBwdWJsaWMgbnpSb3dEaXJlY3RpdmU6IE56Um93RGlyZWN0aXZlLFxyXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjJcclxuICApIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpSb3dEaXJlY3RpdmUpIHtcclxuICAgICAgdGhpcy5uelJvd0RpcmVjdGl2ZS5hY3R1YWxHdXR0ZXIkXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICBzdGFydFdpdGgodGhpcy5uelJvd0RpcmVjdGl2ZS5hY3R1YWxHdXR0ZXIpLFxyXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoYWN0dWFsR3V0dGVyID0+IHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3BhZGRpbmctbGVmdCcsIGAke2FjdHVhbEd1dHRlciAvIDJ9cHhgKTtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3BhZGRpbmctcmlnaHQnLCBgJHthY3R1YWxHdXR0ZXIgLyAyfXB4YCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==