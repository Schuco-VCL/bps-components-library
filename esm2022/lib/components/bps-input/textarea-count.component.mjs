import { ChangeDetectionStrategy, Component, ContentChild, Input, isDevMode } from '@angular/core';
import { EMPTY, merge, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { isNotNil } from 'ng-zorro-antd/core/util';
import { BpsInputDirective } from './bps-input.directive';
import * as i0 from "@angular/core";
const _c0 = [[["textarea", "bps-input", ""]]];
const _c1 = ["textarea[bps-input]"];
export class BpsTextareaCountComponent {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.bpsMaxCharacterCount = 0;
        this.bpsComputeCharacterCount = v => v.length;
        this.bpsFormatter = (c, m) => `${c}${m > 0 ? `/${m}` : ``}`;
        this.configChange$ = new Subject();
        this.destroy$ = new Subject();
    }
    ngAfterContentInit() {
        if (!this.nzInputDirective && isDevMode()) {
            throw new Error('[nz-textarea-count]: Could not find matching textarea[nz-input] child.');
        }
        if (this.nzInputDirective.ngControl) {
            const valueChanges = this.nzInputDirective.ngControl.valueChanges || EMPTY;
            merge(valueChanges, this.configChange$)
                .pipe(takeUntil(this.destroy$), map(() => this.nzInputDirective.ngControl.value), startWith(this.nzInputDirective.ngControl.value))
                .subscribe(value => {
                this.setDataCount(value);
            });
        }
    }
    setDataCount(value) {
        const inputValue = isNotNil(value) ? String(value) : '';
        const currentCount = this.bpsComputeCharacterCount(inputValue);
        const dataCount = this.bpsFormatter(currentCount, this.bpsMaxCharacterCount);
        this.renderer.setAttribute(this.elementRef.nativeElement, 'data-count', dataCount);
    }
    ngOnDestroy() {
        this.configChange$.complete();
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    static { this.ɵfac = function BpsTextareaCountComponent_Factory(t) { return new (t || BpsTextareaCountComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsTextareaCountComponent, selectors: [["bps-textarea-count"]], contentQueries: function BpsTextareaCountComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, BpsInputDirective, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzInputDirective = _t.first);
        } }, hostAttrs: [1, "ant-input-textarea-show-count"], inputs: { bpsMaxCharacterCount: "bpsMaxCharacterCount", bpsComputeCharacterCount: "bpsComputeCharacterCount", bpsFormatter: "bpsFormatter" }, ngContentSelectors: _c1, decls: 1, vars: 0, template: function BpsTextareaCountComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsTextareaCountComponent, [{
        type: Component,
        args: [{
                selector: 'bps-textarea-count',
                template: ` <ng-content select="textarea[bps-input]"></ng-content> `,
                host: {
                    class: 'ant-input-textarea-show-count'
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], { nzInputDirective: [{
            type: ContentChild,
            args: [BpsInputDirective, { static: true }]
        }], bpsMaxCharacterCount: [{
            type: Input
        }], bpsComputeCharacterCount: [{
            type: Input
        }], bpsFormatter: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsTextareaCountComponent, { className: "BpsTextareaCountComponent", filePath: "lib\\components\\bps-input\\textarea-count.component.ts", lineNumber: 27 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEtY291bnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtaW5wdXQvdGV4dGFyZWEtY291bnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFFWixLQUFLLEVBQ0wsU0FBUyxFQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFVMUQsTUFBTSxPQUFPLHlCQUF5QjtJQVNwQyxZQUFvQixRQUFtQixFQUFVLFVBQW1DO1FBQWhFLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQVAzRSx5QkFBb0IsR0FBVyxDQUFDLENBQUM7UUFDakMsNkJBQXdCLEdBQTBCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNoRSxpQkFBWSxHQUF5QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRTlGLGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM5QixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztJQUU4QyxDQUFDO0lBRXpGLGtCQUFrQjtRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLFNBQVMsRUFBRSxFQUFFLENBQUM7WUFDMUMsTUFBTSxJQUFJLEtBQUssQ0FBQyx3RUFBd0UsQ0FBQyxDQUFDO1FBQzVGLENBQUM7UUFFRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNwQyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFlBQVksSUFBSSxLQUFLLENBQUM7WUFDM0UsS0FBSyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDO2lCQUNwQyxJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDeEIsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQ2hELFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEtBQWUsQ0FBQyxDQUMzRDtpQkFDQSxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0gsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFhO1FBQ3hCLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDeEQsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9ELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzBGQXpDVSx5QkFBeUI7b0VBQXpCLHlCQUF5Qjt3Q0FDdEIsaUJBQWlCOzs7Ozs7WUFQbkIsa0JBQXNEOzs7aUZBTXZELHlCQUF5QjtjQVJyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFLDBEQUEwRDtnQkFDcEUsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSwrQkFBK0I7aUJBQ3ZDO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO21FQUVvRCxnQkFBZ0I7a0JBQWxFLFlBQVk7bUJBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ3hDLG9CQUFvQjtrQkFBNUIsS0FBSztZQUNHLHdCQUF3QjtrQkFBaEMsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7O2tGQUpLLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgaXNEZXZNb2RlLFxyXG4gIE9uRGVzdHJveSxcclxuICBSZW5kZXJlcjJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRU1QVFksIG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuXHJcbmltcG9ydCB7IEJwc0lucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi9icHMtaW5wdXQuZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnBzLXRleHRhcmVhLWNvdW50JyxcclxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudCBzZWxlY3Q9XCJ0ZXh0YXJlYVticHMtaW5wdXRdXCI+PC9uZy1jb250ZW50PiBgLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnYW50LWlucHV0LXRleHRhcmVhLXNob3ctY291bnQnXHJcbiAgfSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzVGV4dGFyZWFDb3VudENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XHJcbiAgQENvbnRlbnRDaGlsZChCcHNJbnB1dERpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgbnpJbnB1dERpcmVjdGl2ZSE6IEJwc0lucHV0RGlyZWN0aXZlO1xyXG4gIEBJbnB1dCgpIGJwc01heENoYXJhY3RlckNvdW50OiBudW1iZXIgPSAwO1xyXG4gIEBJbnB1dCgpIGJwc0NvbXB1dGVDaGFyYWN0ZXJDb3VudDogKHY6IHN0cmluZykgPT4gbnVtYmVyID0gdiA9PiB2Lmxlbmd0aDtcclxuICBASW5wdXQoKSBicHNGb3JtYXR0ZXI6IChjdXI6IG51bWJlciwgbWF4OiBudW1iZXIpID0+IHN0cmluZyA9IChjLCBtKSA9PiBgJHtjfSR7bSA+IDAgPyBgLyR7bX1gIDogYGB9YDtcclxuXHJcbiAgcHJpdmF0ZSBjb25maWdDaGFuZ2UkID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7IH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm56SW5wdXREaXJlY3RpdmUgJiYgaXNEZXZNb2RlKCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbbnotdGV4dGFyZWEtY291bnRdOiBDb3VsZCBub3QgZmluZCBtYXRjaGluZyB0ZXh0YXJlYVtuei1pbnB1dF0gY2hpbGQuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubnpJbnB1dERpcmVjdGl2ZS5uZ0NvbnRyb2wpIHtcclxuICAgICAgY29uc3QgdmFsdWVDaGFuZ2VzID0gdGhpcy5ueklucHV0RGlyZWN0aXZlLm5nQ29udHJvbC52YWx1ZUNoYW5nZXMgfHwgRU1QVFk7XHJcbiAgICAgIG1lcmdlKHZhbHVlQ2hhbmdlcywgdGhpcy5jb25maWdDaGFuZ2UkKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICAgICAgbWFwKCgpID0+IHRoaXMubnpJbnB1dERpcmVjdGl2ZS5uZ0NvbnRyb2wudmFsdWUpLFxyXG4gICAgICAgICAgc3RhcnRXaXRoKHRoaXMubnpJbnB1dERpcmVjdGl2ZS5uZ0NvbnRyb2wudmFsdWUgYXMgc3RyaW5nKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YUNvdW50KHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldERhdGFDb3VudCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gaXNOb3ROaWwodmFsdWUpID8gU3RyaW5nKHZhbHVlKSA6ICcnO1xyXG4gICAgY29uc3QgY3VycmVudENvdW50ID0gdGhpcy5icHNDb21wdXRlQ2hhcmFjdGVyQ291bnQoaW5wdXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhQ291bnQgPSB0aGlzLmJwc0Zvcm1hdHRlcihjdXJyZW50Q291bnQsIHRoaXMuYnBzTWF4Q2hhcmFjdGVyQ291bnQpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkYXRhLWNvdW50JywgZGF0YUNvdW50KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb25maWdDaGFuZ2UkLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==