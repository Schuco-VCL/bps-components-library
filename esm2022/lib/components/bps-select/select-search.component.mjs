import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsSelectSearchComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.FocusMonitor }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsSelectSearchComponent, selector: "bps-select-search", inputs: { bpsId: "bpsId", disabled: "disabled", mirrorSync: "mirrorSync", showInput: "showInput", focusTrigger: "focusTrigger", value: "value", autofocus: "autofocus" }, outputs: { valueChange: "valueChange", isComposingChange: "isComposingChange" }, host: { classAttribute: "ant-select-selection-search" }, providers: [{ provide: COMPOSITION_BUFFER_MODE, useValue: false }], viewQueries: [{ propertyName: "inputElement", first: true, predicate: ["inputElement"], descendants: true, static: true }, { propertyName: "mirrorElement", first: true, predicate: ["mirrorElement"], descendants: true }], usesOnChanges: true, ngImport: i0, template: `
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
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsSelectSearchComponent, decorators: [{
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
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.FocusMonitor }]; }, propDecorators: { bpsId: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1zZWxlY3Qvc2VsZWN0LXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBR04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUF5QnpELE1BQU0sT0FBTyx3QkFBd0I7SUFhbkMsbUJBQW1CLENBQUMsV0FBb0I7UUFDdEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFRCxlQUFlO1FBQ2IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUM7UUFDakQsUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsZUFBZTtRQUNiLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFjLENBQUMsYUFBYSxDQUFDO1FBQ3BELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFV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QUUsNkJBQTZCLEVBQUU7b0JBQzlDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztpQkFDbkU7b0pBRVUsS0FBSztzQkFBYixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ2EsV0FBVztzQkFBN0IsTUFBTTtnQkFDWSxpQkFBaUI7c0JBQW5DLE1BQU07Z0JBQ3NDLFlBQVk7c0JBQXhELFNBQVM7dUJBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFDSSxhQUFhO3NCQUEzRCxTQUFTO3VCQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENPTVBPU0lUSU9OX0JVRkZFUl9NT0RFIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicHMtc2VsZWN0LXNlYXJjaCcsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGlucHV0XHJcbiAgICAgICNpbnB1dEVsZW1lbnRcclxuICAgICAgW2F0dHIuaWRdPVwiYnBzSWRcIlxyXG4gICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxyXG4gICAgICBjbGFzcz1cImFudC1zZWxlY3Qtc2VsZWN0aW9uLXNlYXJjaC1pbnB1dFwiXHJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcclxuICAgICAgW2F0dHIuYXV0b2ZvY3VzXT1cImF1dG9mb2N1cyA/ICdhdXRvZm9jdXMnIDogbnVsbFwiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFtzdHlsZS5vcGFjaXR5XT1cInNob3dJbnB1dCA/IG51bGwgOiAwXCJcclxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25WYWx1ZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgKGNvbXBvc2l0aW9uc3RhcnQpPVwic2V0Q29tcG9zaXRpb25TdGF0ZSh0cnVlKVwiXHJcbiAgICAgIChjb21wb3NpdGlvbmVuZCk9XCJzZXRDb21wb3NpdGlvblN0YXRlKGZhbHNlKVwiXHJcbiAgICAvPlxyXG4gICAgPHNwYW4gI21pcnJvckVsZW1lbnQgKm5nSWY9XCJtaXJyb3JTeW5jXCIgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbi1zZWFyY2gtbWlycm9yXCI+PC9zcGFuPlxyXG4gIGAsXHJcbiAgaG9zdDogeyBjbGFzczogJ2FudC1zZWxlY3Qtc2VsZWN0aW9uLXNlYXJjaCcgfSxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENPTVBPU0lUSU9OX0JVRkZFUl9NT0RFLCB1c2VWYWx1ZTogZmFsc2UgfV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc1NlbGVjdFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgYnBzSWQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbWlycm9yU3luYyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNob3dJbnB1dCA9IHRydWU7XHJcbiAgQElucHV0KCkgZm9jdXNUcmlnZ2VyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdmFsdWUgPSAnJztcclxuICBASW5wdXQoKSBhdXRvZm9jdXMgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgaXNDb21wb3NpbmdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgaW5wdXRFbGVtZW50ITogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdtaXJyb3JFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIG1pcnJvckVsZW1lbnQ/OiBFbGVtZW50UmVmO1xyXG5cclxuICBzZXRDb21wb3NpdGlvblN0YXRlKGlzQ29tcG9zaW5nOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzQ29tcG9zaW5nQ2hhbmdlLm5leHQoaXNDb21wb3NpbmcpO1xyXG4gIH1cclxuXHJcbiAgb25WYWx1ZUNoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLm5leHQodmFsdWUpO1xyXG4gICAgaWYgKHRoaXMubWlycm9yU3luYykge1xyXG4gICAgICB0aGlzLnN5bmNNaXJyb3JXaWR0aCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xlYXJJbnB1dFZhbHVlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5wdXRET00gPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gICAgaW5wdXRET00udmFsdWUgPSAnJztcclxuICAgIHRoaXMub25WYWx1ZUNoYW5nZSgnJyk7XHJcbiAgfVxyXG5cclxuICBzeW5jTWlycm9yV2lkdGgoKTogdm9pZCB7XHJcbiAgICBjb25zdCBtaXJyb3JET00gPSB0aGlzLm1pcnJvckVsZW1lbnQhLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjb25zdCBob3N0RE9NID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjb25zdCBpbnB1dERPTSA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKGhvc3RET00sICd3aWR0aCcpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eShtaXJyb3JET00sICd0ZXh0Q29udGVudCcsIGAke2lucHV0RE9NLnZhbHVlfVxcdTAwYTBgKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaG9zdERPTSwgJ3dpZHRoJywgYCR7bWlycm9yRE9NLnNjcm9sbFdpZHRofXB4YCk7XHJcbiAgfVxyXG5cclxuICBmb2N1cygpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLmZvY3VzVmlhKHRoaXMuaW5wdXRFbGVtZW50LCAna2V5Ym9hcmQnKTtcclxuICB9XHJcblxyXG4gIGJsdXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCBpbnB1dERPTSA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjb25zdCB7IGZvY3VzVHJpZ2dlciwgc2hvd0lucHV0IH0gPSBjaGFuZ2VzO1xyXG5cclxuICAgIGlmIChzaG93SW5wdXQpIHtcclxuICAgICAgaWYgKHRoaXMuc2hvd0lucHV0KSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoaW5wdXRET00sICdyZWFkb25seScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGlucHV0RE9NLCAncmVhZG9ubHknLCAncmVhZG9ubHknKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIElFMTEgY2Fubm90IGlucHV0IHZhbHVlIGlmIGZvY3VzZWQgYmVmb3JlIHJlbW92aW5nIHJlYWRvbmx5XHJcbiAgICBpZiAoZm9jdXNUcmlnZ2VyICYmIGZvY3VzVHJpZ2dlci5jdXJyZW50VmFsdWUgPT09IHRydWUgJiYgZm9jdXNUcmlnZ2VyLnByZXZpb3VzVmFsdWUgPT09IGZhbHNlKSB7XHJcbiAgICAgIGlucHV0RE9NLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5taXJyb3JTeW5jKSB7XHJcbiAgICAgIHRoaXMuc3luY01pcnJvcldpZHRoKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5hdXRvZm9jdXMpIHtcclxuICAgICAgdGhpcy5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=