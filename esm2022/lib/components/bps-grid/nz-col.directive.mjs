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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NzColDirective, deps: [{ token: i1.NzUpdateHostClassService }, { token: i0.ElementRef }, { token: i2.NzRowDirective, host: true, optional: true }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: NzColDirective, selector: "[nz-col],nz-col", inputs: { nzSpan: "nzSpan", nzOrder: "nzOrder", nzOffset: "nzOffset", nzPush: "nzPush", nzPull: "nzPull", nzXs: "nzXs", nzSm: "nzSm", nzMd: "nzMd", nzLg: "nzLg", nzXl: "nzXl", nzXXl: "nzXXl" }, providers: [NzUpdateHostClassService], exportAs: ["nzCol"], usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NzColDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nz-col],nz-col',
                    exportAs: 'nzCol',
                    providers: [NzUpdateHostClassService]
                }]
        }], ctorParameters: () => [{ type: i1.NzUpdateHostClassService }, { type: i0.ElementRef }, { type: i2.NzRowDirective, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }] }, { type: i0.Renderer2 }], propDecorators: { nzSpan: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWdyaWQvbnotY29sLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUVULElBQUksRUFDSixLQUFLLEVBSUwsUUFBUSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7Ozs7QUFpQnRGLE1BQU0sT0FBTyxjQUFjO0lBaUJ6Qix1R0FBdUc7SUFDdkcsV0FBVztRQUNULE1BQU0sUUFBUSxHQUFHO1lBQ2YsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUk7WUFDM0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDM0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLFVBQVUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbkUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLFdBQVcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDdEUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLFNBQVMsSUFBSSxDQUFDLE1BQU0s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b3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUmVuZGVyZXIyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOZ0NsYXNzSW50ZXJmYWNlIH0gZnJvbSAnLi4vY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IE56Um93RGlyZWN0aXZlIH0gZnJvbSAnLi9uei1yb3cuZGlyZWN0aXZlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRW1iZWRkZWRQcm9wZXJ0eSB7XHJcbiAgc3Bhbj86IG51bWJlcjtcclxuICBwdWxsPzogbnVtYmVyO1xyXG4gIHB1c2g/OiBudW1iZXI7XHJcbiAgb2Zmc2V0PzogbnVtYmVyO1xyXG4gIG9yZGVyPzogbnVtYmVyO1xyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuei1jb2xdLG56LWNvbCcsXHJcbiAgZXhwb3J0QXM6ICduekNvbCcsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDb2xEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC1jb2wnO1xyXG4gIHByb3RlY3RlZCBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIEBJbnB1dCgpIG56U3BhbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56T3JkZXI6IG51bWJlcjtcclxuICBASW5wdXQoKSBuek9mZnNldDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56UHVzaDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56UHVsbDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG56WHM6IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHk7XHJcbiAgQElucHV0KCkgbnpTbTogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcclxuICBASW5wdXQoKSBuek1kOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xyXG4gIEBJbnB1dCgpIG56TGc6IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHk7XHJcbiAgQElucHV0KCkgbnpYbDogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcclxuICBASW5wdXQoKSBuelhYbDogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcclxuXHJcbiAgLyoqIHRlbXAgc29sdXRpb24gc2luY2Ugbm8gbWV0aG9kIGFkZCBjbGFzc01hcCB0byBob3N0IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzcyODkqL1xyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc31gXTogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubnpTcGFufWBdOiBpc05vdE5pbCh0aGlzLm56U3BhbiksXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tb3JkZXItJHt0aGlzLm56T3JkZXJ9YF06IGlzTm90TmlsKHRoaXMubnpPcmRlciksXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tb2Zmc2V0LSR7dGhpcy5uek9mZnNldH1gXTogaXNOb3ROaWwodGhpcy5uek9mZnNldCksXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tcHVsbC0ke3RoaXMubnpQdWxsfWBdOiBpc05vdE5pbCh0aGlzLm56UHVsbCksXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tcHVzaC0ke3RoaXMubnpQdXNofWBdOiBpc05vdE5pbCh0aGlzLm56UHVzaCksXHJcbiAgICAgIC4uLnRoaXMuZ2VuZXJhdGVDbGFzcygpXHJcbiAgICB9O1xyXG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwsIGNsYXNzTWFwKTtcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlQ2xhc3MoKTogb2JqZWN0IHtcclxuICAgIGNvbnN0IGxpc3RPZlNpemVJbnB1dE5hbWU6IEFycmF5PGtleW9mIE56Q29sRGlyZWN0aXZlPiA9IFsnbnpYcycsICduelNtJywgJ256TWQnLCAnbnpMZycsICduelhsJywgJ256WFhsJ107XHJcbiAgICBjb25zdCBsaXN0Q2xhc3NNYXA6IE5nQ2xhc3NJbnRlcmZhY2UgPSB7fTtcclxuICAgIGxpc3RPZlNpemVJbnB1dE5hbWUuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgY29uc3Qgc2l6ZU5hbWUgPSBuYW1lLnJlcGxhY2UoJ256JywgJycpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGlmIChpc05vdE5pbCh0aGlzW25hbWVdKSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpc1tuYW1lXSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHRoaXNbbmFtZV0gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICBsaXN0Q2xhc3NNYXBbYCR7dGhpcy5wcmVmaXhDbHN9LSR7c2l6ZU5hbWV9LSR7dGhpc1tuYW1lXX1gXSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IGVtYmVkZGVkID0gdGhpc1tuYW1lXSBhcyBFbWJlZGRlZFByb3BlcnR5O1xyXG4gICAgICAgICAgY29uc3QgcHJlZml4QXJyYXk6IEFycmF5PGtleW9mIEVtYmVkZGVkUHJvcGVydHk+ID0gWydzcGFuJywgJ3B1bGwnLCAncHVzaCcsICdvZmZzZXQnLCAnb3JkZXInXTtcclxuICAgICAgICAgIHByZWZpeEFycmF5LmZvckVhY2gocHJlZml4ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJlZml4Q2xhc3MgPSBwcmVmaXggPT09ICdzcGFuJyA/ICctJyA6IGAtJHtwcmVmaXh9LWA7XHJcbiAgICAgICAgICAgIGxpc3RDbGFzc01hcFtgJHt0aGlzLnByZWZpeENsc30tJHtzaXplTmFtZX0ke3ByZWZpeENsYXNzfSR7ZW1iZWRkZWRbcHJlZml4XX1gXSA9XHJcbiAgICAgICAgICAgICAgZW1iZWRkZWQgJiYgaXNOb3ROaWwoZW1iZWRkZWRbcHJlZml4XSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGxpc3RDbGFzc01hcDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgcHVibGljIG56Um93RGlyZWN0aXZlOiBOelJvd0RpcmVjdGl2ZSxcclxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56Um93RGlyZWN0aXZlKSB7XHJcbiAgICAgIHRoaXMubnpSb3dEaXJlY3RpdmUuYWN0dWFsR3V0dGVyJFxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgc3RhcnRXaXRoKHRoaXMubnpSb3dEaXJlY3RpdmUuYWN0dWFsR3V0dGVyKSxcclxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKGFjdHVhbEd1dHRlciA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdwYWRkaW5nLWxlZnQnLCBgJHthY3R1YWxHdXR0ZXIgLyAyfXB4YCk7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdwYWRkaW5nLXJpZ2h0JywgYCR7YWN0dWFsR3V0dGVyIC8gMn1weGApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=