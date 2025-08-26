import { __decorate } from "tslib";
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function BpsGridComponent_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵlistener("mouseenter", function BpsGridComponent_ng_container_4_ng_container_2_Template_div_mouseenter_1_listener() { const j_r2 = i0.ɵɵrestoreView(_r1).index; const i_r3 = i0.ɵɵnextContext().index; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.previewSelection(i_r3, j_r2)); })("mouseleave", function BpsGridComponent_ng_container_4_ng_container_2_Template_div_mouseleave_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.endPreviewSelection()); })("click", function BpsGridComponent_ng_container_4_ng_container_2_Template_div_click_1_listener() { const j_r2 = i0.ɵɵrestoreView(_r1).index; const i_r3 = i0.ɵɵnextContext().index; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onSelectionChange(i_r3, j_r2)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const j_r2 = ctx.index;
    const i_r3 = i0.ɵɵnextContext().index;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("bps-grid-selected-square-top", ctx_r3.isSelected(i_r3, j_r2) && !i_r3)("bps-grid-selected-square-bottom", ctx_r3.isSelected(i_r3, j_r2) && i_r3 === ctx_r3.selection[0])("bps-grid-selected-square-left", ctx_r3.isSelected(i_r3, j_r2) && !j_r2)("bps-grid-selected-square-right", ctx_r3.isSelected(i_r3, j_r2) && j_r2 === ctx_r3.selection[1])("bps-grid-first-square-in-row", !j_r2)("bps-grid-left-top-corner", i_r3 === j_r2 && !i_r3)("bps-grid-left-bottom-corner", i_r3 === ctx_r3._rows.length - 1 && !j_r2)("bps-grid-right-bottom-corner", i_r3 === ctx_r3._rows.length - 1 && j_r2 === ctx_r3._columns.length - 1)("bps-grid-right-top-corner", !i_r3 && j_r2 === ctx_r3._columns.length - 1);
} }
function BpsGridComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵtemplate(2, BpsGridComponent_ng_container_4_ng_container_2_Template, 2, 18, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("bps-grid-row-first", i_r3 === 0)("bps-grid-row-last", i_r3 === ctx_r3._rows.length - 1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r3._columns);
} }
export class BpsGridComponent {
    set columns(value) {
        if (value >= 1) {
            this._columns = new Array(value);
        }
    }
    set rows(value) {
        if (value >= 1) {
            this._rows = new Array(value);
        }
    }
    set selection(value) {
        this._selection = value;
        this._latestSelection = value;
    }
    get selection() {
        return this._selection;
    }
    constructor() {
        this._columns = [];
        this._rows = [];
        this._selection = [1, 2];
        this._latestSelection = [1, 2];
        this.disabled = false;
        this.selectionChange = new EventEmitter();
    }
    onSelectionChange(row, column) {
        this.selection = [row, column];
        this._latestSelection = [row, column];
        this.selectionChange.emit(this.selection);
    }
    isSelected(row, column) {
        return (row <= this.selection[0] && !column) || (!row && column <= this.selection[1]) || (row <= this.selection[0] && column === this.selection[1]) || (row === this.selection[0] && column <= this.selection[1]);
    }
    previewSelection(row, column) {
        const newSel = [row, column];
        this._selection = [...newSel];
    }
    endPreviewSelection() {
        this._selection = this._latestSelection;
    }
    static { this.ɵfac = function BpsGridComponent_Factory(t) { return new (t || BpsGridComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsGridComponent, selectors: [["bps-grid"]], inputs: { disabled: "disabled", columns: "columns", rows: "rows", selection: "selection" }, outputs: { selectionChange: "selectionChange" }, decls: 5, vars: 3, consts: [[1, "bps-grid-selected-value-wrapper"], [1, "bps-grid-wrapper"], [4, "ngFor", "ngForOf"], [1, "bps-grid-row"], [1, "bps-grid-square", 3, "mouseenter", "mouseleave", "click"]], template: function BpsGridComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "span");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(3, "div", 1);
            i0.ɵɵtemplate(4, BpsGridComponent_ng_container_4_Template, 3, 5, "ng-container", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2("", ctx.selection[0] + 1, " x ", ctx.selection[1] + 1, "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx._rows);
        } }, dependencies: [i1.NgForOf], styles: [".bps-grid-square{width:25px;height:25px;transition:all .3s}.bps-grid-row .bps-grid-square{display:inline-flex;border:1px solid #707070;border-top:none;border-left:none}.bps-grid-row{height:25px}.bps-grid-row-first .bps-grid-square{border-top:1px solid #707070}.bps-grid-left-top-corner{border-radius:8px 0 0}.bps-grid-left-bottom-corner{border-radius:0 0 0 8px}.bps-grid-right-bottom-corner{border-radius:0 0 8px}.bps-grid-right-top-corner{border-radius:0 8px 0 0}.bps-grid-first-square-in-row{border-left:1px solid #707070!important}.bps-grid-selected-square-top{border-top:2px solid #00a2d1!important}.bps-grid-selected-square-bottom{border-bottom:2px solid #00a2d1!important}.bps-grid-selected-square-left{border-left:2px solid #00a2d1!important}.bps-grid-selected-square-right{border-right:2px solid #00a2d1!important}.bps-grid-selected-value-wrapper{display:inline-block;font-family:UniversForSchueco-530Med;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:.75;letter-spacing:normal;text-align:left;color:#fff;width:50px;padding-top:2px;vertical-align:top}.bps-grid-wrapper{display:inline-block}\n"], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], BpsGridComponent.prototype, "disabled", void 0);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsGridComponent, [{
        type: Component,
        args: [{ selector: 'bps-grid', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"bps-grid-selected-value-wrapper\">\r\n  <span>{{selection[0] + 1}} x {{selection[1] + 1}}</span>\r\n</div>\r\n\r\n<div class=\"bps-grid-wrapper\">\r\n  <ng-container *ngFor=\"let row of _rows; index as i\">\r\n    <div class=\"bps-grid-row\" [class.bps-grid-row-first]=\"i === 0\" [class.bps-grid-row-last]=\"i === _rows.length - 1\">\r\n      <ng-container *ngFor=\"let column of _columns; index as j\">\r\n        <div class=\"bps-grid-square\"\r\n             (mouseenter)=\"previewSelection(i, j)\"\r\n             (mouseleave)=\"endPreviewSelection()\"\r\n             [class.bps-grid-selected-square-top]=\"isSelected(i, j) && !i\"\r\n             [class.bps-grid-selected-square-bottom]=\"isSelected(i, j) && i === selection[0]\"\r\n             [class.bps-grid-selected-square-left]=\"isSelected(i, j) && !j\"\r\n             [class.bps-grid-selected-square-right]=\"isSelected(i, j) && j === selection[1]\"\r\n             [class.bps-grid-first-square-in-row]=\"!j\"\r\n             [class.bps-grid-left-top-corner]=\"i === j && !i\"\r\n             [class.bps-grid-left-bottom-corner]=\"i === _rows.length - 1 && !j\"\r\n             [class.bps-grid-right-bottom-corner]=\"i === _rows.length - 1 && j === _columns.length - 1\"\r\n             [class.bps-grid-right-top-corner]=\"!i && j === _columns.length - 1\"\r\n             (click)=\"onSelectionChange(i, j)\">\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n  </ng-container>\r\n</div>\r\n", styles: [".bps-grid-square{width:25px;height:25px;transition:all .3s}.bps-grid-row .bps-grid-square{display:inline-flex;border:1px solid #707070;border-top:none;border-left:none}.bps-grid-row{height:25px}.bps-grid-row-first .bps-grid-square{border-top:1px solid #707070}.bps-grid-left-top-corner{border-radius:8px 0 0}.bps-grid-left-bottom-corner{border-radius:0 0 0 8px}.bps-grid-right-bottom-corner{border-radius:0 0 8px}.bps-grid-right-top-corner{border-radius:0 8px 0 0}.bps-grid-first-square-in-row{border-left:1px solid #707070!important}.bps-grid-selected-square-top{border-top:2px solid #00a2d1!important}.bps-grid-selected-square-bottom{border-bottom:2px solid #00a2d1!important}.bps-grid-selected-square-left{border-left:2px solid #00a2d1!important}.bps-grid-selected-square-right{border-right:2px solid #00a2d1!important}.bps-grid-selected-value-wrapper{display:inline-block;font-family:UniversForSchueco-530Med;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:.75;letter-spacing:normal;text-align:left;color:#fff;width:50px;padding-top:2px;vertical-align:top}.bps-grid-wrapper{display:inline-block}\n"] }]
    }], () => [], { disabled: [{
            type: Input
        }], selectionChange: [{
            type: Output
        }], columns: [{
            type: Input
        }], rows: [{
            type: Input
        }], selection: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsGridComponent, { className: "BpsGridComponent", filePath: "lib\\components\\bps-grid\\bps-grid.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtZ3JpZC9icHMtZ3JpZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1ncmlkL2Jwcy1ncmlkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7SUNNakQsNkJBQTBEO0lBQ3hELDhCQVl1QztJQUFsQyxBQVZBLEFBREEscVFBQWMsbUNBQXNCLEtBQUMsK0xBQ3ZCLDRCQUFxQixLQUFDLDhPQVUzQixvQ0FBdUIsS0FBQztJQUN0QyxpQkFBTTs7Ozs7O0lBVkQsY0FBNkQ7SUFRN0QsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLHNGQUE2RCxrR0FDbUIseUVBQ2xCLGlHQUNpQix1Q0FDdEMsb0RBQ08sMEVBQ2tCLHlHQUN3QiwyRUFDdkI7OztJQWQ5RSw2QkFBb0Q7SUFDbEQsOEJBQWtIO0lBQ2hILG1HQUEwRDtJQWdCNUQsaUJBQU07Ozs7O0lBakJvQixjQUFvQztJQUFDLEFBQXJDLGdEQUFvQyx1REFBbUQ7SUFDOUUsY0FBYTtJQUFiLHlDQUFhOztBREdwRCxNQUFNLE9BQU8sZ0JBQWdCO0lBUzNCLElBQ0ksT0FBTyxDQUFDLEtBQWE7UUFDdkIsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFDSSxJQUFJLENBQUMsS0FBYTtRQUNwQixJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQztJQUNILENBQUM7SUFFRCxJQUNJLFNBQVMsQ0FBQyxLQUFlO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7UUEvQkEsYUFBUSxHQUFVLEVBQUUsQ0FBQztRQUNyQixVQUFLLEdBQVUsRUFBRSxDQUFDO1FBQ2xCLGVBQVUsR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5QixxQkFBZ0IsR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNYLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDaEMsb0JBQWUsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQTBCdkQsQ0FBQztJQUVqQixpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsTUFBTTtRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELFVBQVUsQ0FBQyxHQUFXLEVBQUUsTUFBYztRQUNwQyxPQUFPLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwTixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLE1BQU07UUFDMUIsTUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELG1CQUFtQjtRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMxQyxDQUFDO2lGQXBEVSxnQkFBZ0I7b0VBQWhCLGdCQUFnQjtZQ1QzQixBQURGLDhCQUE2QyxXQUNyQztZQUFBLFlBQTJDO1lBQ25ELEFBRG1ELGlCQUFPLEVBQ3BEO1lBRU4sOEJBQThCO1lBQzVCLG1GQUFvRDtZQW9CdEQsaUJBQU07O1lBeEJFLGVBQTJDO1lBQTNDLGdGQUEyQztZQUluQixlQUFVO1lBQVYsbUNBQVU7OztBRFdmO0lBQWYsWUFBWSxFQUFFO2tEQUFrQjtpRkFOL0IsZ0JBQWdCO2NBUDVCLFNBQVM7MkJBQ0UsVUFBVSxpQkFHTCxpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNO29CQVF0QixRQUFRO2tCQUFoQyxLQUFLO1lBQ0ksZUFBZTtrQkFBeEIsTUFBTTtZQUdILE9BQU87a0JBRFYsS0FBSztZQVFGLElBQUk7a0JBRFAsS0FBSztZQVFGLFNBQVM7a0JBRFosS0FBSzs7a0ZBdkJLLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jwcy1ncmlkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnBzLWdyaWQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Jwcy1ncmlkLmNvbXBvbmVudC5jc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNHcmlkQ29tcG9uZW50IHtcclxuXHJcbiAgX2NvbHVtbnM6IGFueVtdID0gW107XHJcbiAgX3Jvd3M6IGFueVtdID0gW107XHJcbiAgX3NlbGVjdGlvbjogbnVtYmVyW10gPSBbMSwgMl07XHJcbiAgX2xhdGVzdFNlbGVjdGlvbjogbnVtYmVyW10gPSBbMSwgMl07XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgY29sdW1ucyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAodmFsdWUgPj0gMSkge1xyXG4gICAgICB0aGlzLl9jb2x1bW5zID0gbmV3IEFycmF5KHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHJvd3ModmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKHZhbHVlID49IDEpIHtcclxuICAgICAgdGhpcy5fcm93cyA9IG5ldyBBcnJheSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzZWxlY3Rpb24odmFsdWU6IG51bWJlcltdKSB7XHJcbiAgICB0aGlzLl9zZWxlY3Rpb24gPSB2YWx1ZTtcclxuICAgIHRoaXMuX2xhdGVzdFNlbGVjdGlvbiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb247XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBvblNlbGVjdGlvbkNoYW5nZShyb3csIGNvbHVtbikge1xyXG4gICAgdGhpcy5zZWxlY3Rpb24gPSBbcm93LCBjb2x1bW5dO1xyXG4gICAgdGhpcy5fbGF0ZXN0U2VsZWN0aW9uID0gW3JvdywgY29sdW1uXTtcclxuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3Rpb24pO1xyXG4gIH1cclxuXHJcbiAgaXNTZWxlY3RlZChyb3c6IG51bWJlciwgY29sdW1uOiBudW1iZXIpIHtcclxuICAgIHJldHVybiAocm93IDw9IHRoaXMuc2VsZWN0aW9uWzBdICYmICFjb2x1bW4pIHx8ICghcm93ICYmIGNvbHVtbiA8PSB0aGlzLnNlbGVjdGlvblsxXSkgfHwgKHJvdyA8PSB0aGlzLnNlbGVjdGlvblswXSAmJiBjb2x1bW4gPT09IHRoaXMuc2VsZWN0aW9uWzFdKSB8fCAocm93ID09PSB0aGlzLnNlbGVjdGlvblswXSAmJiBjb2x1bW4gPD0gdGhpcy5zZWxlY3Rpb25bMV0pOyBcclxuICB9XHJcblxyXG4gIHByZXZpZXdTZWxlY3Rpb24ocm93LCBjb2x1bW4pIHtcclxuICAgIGNvbnN0IG5ld1NlbCA9IFtyb3csIGNvbHVtbl07XHJcbiAgICB0aGlzLl9zZWxlY3Rpb24gPSBbLi4ubmV3U2VsXTtcclxuICB9XHJcblxyXG4gIGVuZFByZXZpZXdTZWxlY3Rpb24oKSB7XHJcbiAgICB0aGlzLl9zZWxlY3Rpb24gPSB0aGlzLl9sYXRlc3RTZWxlY3Rpb247XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYnBzLWdyaWQtc2VsZWN0ZWQtdmFsdWUtd3JhcHBlclwiPlxyXG4gIDxzcGFuPnt7c2VsZWN0aW9uWzBdICsgMX19IHgge3tzZWxlY3Rpb25bMV0gKyAxfX08L3NwYW4+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImJwcy1ncmlkLXdyYXBwZXJcIj5cclxuICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCByb3cgb2YgX3Jvd3M7IGluZGV4IGFzIGlcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJicHMtZ3JpZC1yb3dcIiBbY2xhc3MuYnBzLWdyaWQtcm93LWZpcnN0XT1cImkgPT09IDBcIiBbY2xhc3MuYnBzLWdyaWQtcm93LWxhc3RdPVwiaSA9PT0gX3Jvd3MubGVuZ3RoIC0gMVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgX2NvbHVtbnM7IGluZGV4IGFzIGpcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnBzLWdyaWQtc3F1YXJlXCJcclxuICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cInByZXZpZXdTZWxlY3Rpb24oaSwgailcIlxyXG4gICAgICAgICAgICAgKG1vdXNlbGVhdmUpPVwiZW5kUHJldmlld1NlbGVjdGlvbigpXCJcclxuICAgICAgICAgICAgIFtjbGFzcy5icHMtZ3JpZC1zZWxlY3RlZC1zcXVhcmUtdG9wXT1cImlzU2VsZWN0ZWQoaSwgaikgJiYgIWlcIlxyXG4gICAgICAgICAgICAgW2NsYXNzLmJwcy1ncmlkLXNlbGVjdGVkLXNxdWFyZS1ib3R0b21dPVwiaXNTZWxlY3RlZChpLCBqKSAmJiBpID09PSBzZWxlY3Rpb25bMF1cIlxyXG4gICAgICAgICAgICAgW2NsYXNzLmJwcy1ncmlkLXNlbGVjdGVkLXNxdWFyZS1sZWZ0XT1cImlzU2VsZWN0ZWQoaSwgaikgJiYgIWpcIlxyXG4gICAgICAgICAgICAgW2NsYXNzLmJwcy1ncmlkLXNlbGVjdGVkLXNxdWFyZS1yaWdodF09XCJpc1NlbGVjdGVkKGksIGopICYmIGogPT09IHNlbGVjdGlvblsxXVwiXHJcbiAgICAgICAgICAgICBbY2xhc3MuYnBzLWdyaWQtZmlyc3Qtc3F1YXJlLWluLXJvd109XCIhalwiXHJcbiAgICAgICAgICAgICBbY2xhc3MuYnBzLWdyaWQtbGVmdC10b3AtY29ybmVyXT1cImkgPT09IGogJiYgIWlcIlxyXG4gICAgICAgICAgICAgW2NsYXNzLmJwcy1ncmlkLWxlZnQtYm90dG9tLWNvcm5lcl09XCJpID09PSBfcm93cy5sZW5ndGggLSAxICYmICFqXCJcclxuICAgICAgICAgICAgIFtjbGFzcy5icHMtZ3JpZC1yaWdodC1ib3R0b20tY29ybmVyXT1cImkgPT09IF9yb3dzLmxlbmd0aCAtIDEgJiYgaiA9PT0gX2NvbHVtbnMubGVuZ3RoIC0gMVwiXHJcbiAgICAgICAgICAgICBbY2xhc3MuYnBzLWdyaWQtcmlnaHQtdG9wLWNvcm5lcl09XCIhaSAmJiBqID09PSBfY29sdW1ucy5sZW5ndGggLSAxXCJcclxuICAgICAgICAgICAgIChjbGljayk9XCJvblNlbGVjdGlvbkNoYW5nZShpLCBqKVwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG48L2Rpdj5cclxuIl19