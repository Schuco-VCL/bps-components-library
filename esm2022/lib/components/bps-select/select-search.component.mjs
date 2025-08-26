import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
const _c0 = ["inputElement"];
const _c1 = ["mirrorElement"];
function BpsSelectSearchComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 4, 1);
} }
export class BpsSelectSearchComponent {
    setCompositionState(isComposing) {
        this.isComposingChange.next(isComposing);
    }
    onValueChange(value) {
        this.value = value;
        this.valueChange.next(value);
        if (this.mirrorSync) {
            this.syncMirrorWidth();
        }
    }
    clearInputValue() {
        const inputDOM = this.inputElement.nativeElement;
        inputDOM.value = '';
        this.onValueChange('');
    }
    syncMirrorWidth() {
        const mirrorDOM = this.mirrorElement.nativeElement;
        const hostDOM = this.elementRef.nativeElement;
        const inputDOM = this.inputElement.nativeElement;
        this.renderer.removeStyle(hostDOM, 'width');
        this.renderer.setProperty(mirrorDOM, 'textContent', `${inputDOM.value}\u00a0`);
        this.renderer.setStyle(hostDOM, 'width', `${mirrorDOM.scrollWidth}px`);
    }
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    blur() {
        this.inputElement.nativeElement.blur();
    }
    constructor(elementRef, renderer, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.focusMonitor = focusMonitor;
        this.bpsId = null;
        this.disabled = false;
        this.mirrorSync = false;
        this.showInput = true;
        this.focusTrigger = false;
        this.value = '';
        this.autofocus = false;
        this.valueChange = new EventEmitter();
        this.isComposingChange = new EventEmitter();
    }
    ngOnChanges(changes) {
        const inputDOM = this.inputElement.nativeElement;
        const { focusTrigger, showInput } = changes;
        if (showInput) {
            if (this.showInput) {
                this.renderer.removeAttribute(inputDOM, 'readonly');
            }
            else {
                this.renderer.setAttribute(inputDOM, 'readonly', 'readonly');
            }
        }
        // IE11 cannot input value if focused before removing readonly
        if (focusTrigger && focusTrigger.currentValue === true && focusTrigger.previousValue === false) {
            inputDOM.focus();
        }
    }
    ngAfterViewInit() {
        if (this.mirrorSync) {
            this.syncMirrorWidth();
        }
        if (this.autofocus) {
            this.focus();
        }
    }
    static { this.ɵfac = function BpsSelectSearchComponent_Factory(t) { return new (t || BpsSelectSearchComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.FocusMonitor)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsSelectSearchComponent, selectors: [["bps-select-search"]], viewQuery: function BpsSelectSearchComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mirrorElement = _t.first);
        } }, hostAttrs: [1, "ant-select-selection-search"], inputs: { bpsId: "bpsId", disabled: "disabled", mirrorSync: "mirrorSync", showInput: "showInput", focusTrigger: "focusTrigger", value: "value", autofocus: "autofocus" }, outputs: { valueChange: "valueChange", isComposingChange: "isComposingChange" }, features: [i0.ɵɵProvidersFeature([{ provide: COMPOSITION_BUFFER_MODE, useValue: false }]), i0.ɵɵNgOnChangesFeature], decls: 3, vars: 7, consts: [["inputElement", ""], ["mirrorElement", ""], ["autocomplete", "off", 1, "ant-select-selection-search-input", 3, "ngModelChange", "compositionstart", "compositionend", "ngModel", "disabled"], ["class", "ant-select-selection-search-mirror", 4, "ngIf"], [1, "ant-select-selection-search-mirror"]], template: function BpsSelectSearchComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "input", 2, 0);
            i0.ɵɵlistener("ngModelChange", function BpsSelectSearchComponent_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onValueChange($event)); })("compositionstart", function BpsSelectSearchComponent_Template_input_compositionstart_0_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.setCompositionState(true)); })("compositionend", function BpsSelectSearchComponent_Template_input_compositionend_0_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.setCompositionState(false)); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, BpsSelectSearchComponent_span_2_Template, 2, 0, "span", 3);
        } if (rf & 2) {
            i0.ɵɵstyleProp("opacity", ctx.showInput ? null : 0);
            i0.ɵɵproperty("ngModel", ctx.value)("disabled", ctx.disabled);
            i0.ɵɵattribute("id", ctx.bpsId)("autofocus", ctx.autofocus ? "autofocus" : null);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.mirrorSync);
        } }, dependencies: [i2.NgIf, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsSelectSearchComponent, [{
        type: Component,
        args: [{
                selector: 'bps-select-search',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <input
      #inputElement
      [attr.id]="bpsId"
      autocomplete="off"
      class="ant-select-selection-search-input"
      [ngModel]="value"
      [attr.autofocus]="autofocus ? 'autofocus' : null"
      [disabled]="disabled"
      [style.opacity]="showInput ? null : 0"
      (ngModelChange)="onValueChange($event)"
      (compositionstart)="setCompositionState(true)"
      (compositionend)="setCompositionState(false)"
    />
    <span #mirrorElement *ngIf="mirrorSync" class="ant-select-selection-search-mirror"></span>
  `,
                host: { class: 'ant-select-selection-search' },
                providers: [{ provide: COMPOSITION_BUFFER_MODE, useValue: false }]
            }]
    }], () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.FocusMonitor }], { bpsId: [{
            type: Input
        }], disabled: [{
            type: Input
        }], mirrorSync: [{
            type: Input
        }], showInput: [{
            type: Input
        }], focusTrigger: [{
            type: Input
        }], value: [{
            type: Input
        }], autofocus: [{
            type: Input
        }], valueChange: [{
            type: Output
        }], isComposingChange: [{
            type: Output
        }], inputElement: [{
            type: ViewChild,
            args: ['inputElement', { static: true }]
        }], mirrorElement: [{
            type: ViewChild,
            args: ['mirrorElement', { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsSelectSearchComponent, { className: "BpsSelectSearchComponent", filePath: "lib\\components\\bps-select\\select-search.component.ts", lineNumber: 42 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1zZWxlY3Qvc2VsZWN0LXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBR04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7SUFvQnJELDZCQUEwRjs7QUFLOUYsTUFBTSxPQUFPLHdCQUF3QjtJQWFuQyxtQkFBbUIsQ0FBQyxXQUFvQjtRQUN0QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsQ0FBQztJQUNILENBQUM7SUFFRCxlQUFlO1FBQ2IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUM7UUFDakQsUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsZUFBZTtRQUNiLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFjLENBQUMsYUFBYSxDQUFDO1FBQ3BELE1B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LDJFQUFtRjs7WUFMakYsbURBQXNDO1lBRHRDLEFBRkEsbUNBQWlCLDBCQUVJOztZQU1ELGVBQWdCO1lBQWhCLHFDQUFnQjs7O2lGQUs3Qix3QkFBd0I7Y0F2QnBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0dBZVQ7Z0JBQ0QsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLDZCQUE2QixFQUFFO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7YUFDbkU7OEZBRVUsS0FBSztrQkFBYixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDYSxXQUFXO2tCQUE3QixNQUFNO1lBQ1ksaUJBQWlCO2tCQUFuQyxNQUFNO1lBQ3NDLFlBQVk7a0JBQXhELFNBQVM7bUJBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNJLGFBQWE7a0JBQTNELFNBQVM7bUJBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7a0ZBWGxDLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ09NUE9TSVRJT05fQlVGRkVSX01PREUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jwcy1zZWxlY3Qtc2VhcmNoJyxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8aW5wdXRcclxuICAgICAgI2lucHV0RWxlbWVudFxyXG4gICAgICBbYXR0ci5pZF09XCJicHNJZFwiXHJcbiAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb24tc2VhcmNoLWlucHV0XCJcclxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxyXG4gICAgICBbYXR0ci5hdXRvZm9jdXNdPVwiYXV0b2ZvY3VzID8gJ2F1dG9mb2N1cycgOiBudWxsXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgW3N0eWxlLm9wYWNpdHldPVwic2hvd0lucHV0ID8gbnVsbCA6IDBcIlxyXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJvblZhbHVlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAoY29tcG9zaXRpb25zdGFydCk9XCJzZXRDb21wb3NpdGlvblN0YXRlKHRydWUpXCJcclxuICAgICAgKGNvbXBvc2l0aW9uZW5kKT1cInNldENvbXBvc2l0aW9uU3RhdGUoZmFsc2UpXCJcclxuICAgIC8+XHJcbiAgICA8c3BhbiAjbWlycm9yRWxlbWVudCAqbmdJZj1cIm1pcnJvclN5bmNcIiBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uLXNlYXJjaC1taXJyb3JcIj48L3NwYW4+XHJcbiAgYCxcclxuICBob3N0OiB7IGNsYXNzOiAnYW50LXNlbGVjdC1zZWxlY3Rpb24tc2VhcmNoJyB9LFxyXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogQ09NUE9TSVRJT05fQlVGRkVSX01PREUsIHVzZVZhbHVlOiBmYWxzZSB9XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzU2VsZWN0U2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBicHNJZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBtaXJyb3JTeW5jID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2hvd0lucHV0ID0gdHJ1ZTtcclxuICBASW5wdXQoKSBmb2N1c1RyaWdnZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSB2YWx1ZSA9ICcnO1xyXG4gIEBJbnB1dCgpIGF1dG9mb2N1cyA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBpc0NvbXBvc2luZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dEVsZW1lbnQhOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ21pcnJvckVsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgbWlycm9yRWxlbWVudD86IEVsZW1lbnRSZWY7XHJcblxyXG4gIHNldENvbXBvc2l0aW9uU3RhdGUoaXNDb21wb3Npbmc6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuaXNDb21wb3NpbmdDaGFuZ2UubmV4dChpc0NvbXBvc2luZyk7XHJcbiAgfVxyXG5cclxuICBvblZhbHVlQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMudmFsdWVDaGFuZ2UubmV4dCh2YWx1ZSk7XHJcbiAgICBpZiAodGhpcy5taXJyb3JTeW5jKSB7XHJcbiAgICAgIHRoaXMuc3luY01pcnJvcldpZHRoKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbGVhcklucHV0VmFsdWUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBpbnB1dERPTSA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBpbnB1dERPTS52YWx1ZSA9ICcnO1xyXG4gICAgdGhpcy5vblZhbHVlQ2hhbmdlKCcnKTtcclxuICB9XHJcblxyXG4gIHN5bmNNaXJyb3JXaWR0aCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IG1pcnJvckRPTSA9IHRoaXMubWlycm9yRWxlbWVudCEubmF0aXZlRWxlbWVudDtcclxuICAgIGNvbnN0IGhvc3RET00gPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIGNvbnN0IGlucHV0RE9NID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUoaG9zdERPTSwgJ3dpZHRoJyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KG1pcnJvckRPTSwgJ3RleHRDb250ZW50JywgYCR7aW5wdXRET00udmFsdWV9XFx1MDBhMGApO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShob3N0RE9NLCAnd2lkdGgnLCBgJHttaXJyb3JET00uc2Nyb2xsV2lkdGh9cHhgKTtcclxuICB9XHJcblxyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5pbnB1dEVsZW1lbnQsICdrZXlib2FyZCcpO1xyXG4gIH1cclxuXHJcbiAgYmx1cigpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IpIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IGlucHV0RE9NID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICAgIGNvbnN0IHsgZm9jdXNUcmlnZ2VyLCBzaG93SW5wdXQgfSA9IGNoYW5nZXM7XHJcblxyXG4gICAgaWYgKHNob3dJbnB1dCkge1xyXG4gICAgICBpZiAodGhpcy5zaG93SW5wdXQpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShpbnB1dERPTSwgJ3JlYWRvbmx5Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoaW5wdXRET00sICdyZWFkb25seScsICdyZWFkb25seScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSUUxMSBjYW5ub3QgaW5wdXQgdmFsdWUgaWYgZm9jdXNlZCBiZWZvcmUgcmVtb3ZpbmcgcmVhZG9ubHlcclxuICAgIGlmIChmb2N1c1RyaWdnZXIgJiYgZm9jdXNUcmlnZ2VyLmN1cnJlbnRWYWx1ZSA9PT0gdHJ1ZSAmJiBmb2N1c1RyaWdnZXIucHJldmlvdXNWYWx1ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgaW5wdXRET00uZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm1pcnJvclN5bmMpIHtcclxuICAgICAgdGhpcy5zeW5jTWlycm9yV2lkdGgoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmF1dG9mb2N1cykge1xyXG4gICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==