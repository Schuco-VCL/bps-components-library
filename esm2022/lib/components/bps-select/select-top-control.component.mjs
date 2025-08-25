import { BACKSPACE } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, Component, EventEmitter, Host, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BpsSelectSearchComponent } from './select-search.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/no-animation";
import * as i2 from "@angular/common";
import * as i3 from "./select-item.component";
import * as i4 from "./select-placeholder.component";
import * as i5 from "./select-search.component";
export class BpsSelectTopControlComponent {
    updateTemplateVariable() {
        const isSelectedValueEmpty = this.listOfTopItem.length === 0;
        this.isShowPlaceholder = isSelectedValueEmpty && !this.isComposing && !this.inputValue;
        this.isShowSingleLabel = !isSelectedValueEmpty && !this.isComposing && !this.inputValue;
    }
    isComposingChange(isComposing) {
        this.isComposing = isComposing;
        this.updateTemplateVariable();
    }
    onInputValueChange(value) {
        if (value !== this.inputValue) {
            this.inputValue = value;
            this.updateTemplateVariable();
            this.inputValueChange.emit(value);
            this.tokenSeparate(value, this.tokenSeparators);
        }
    }
    tokenSeparate(inputValue, tokenSeparators) {
        const includesSeparators = (str, separators) => {
            // eslint-disable-next-line @typescript-eslint/prefer-for-of
            for (let i = 0; i < separators.length; ++i) {
                if (str.lastIndexOf(separators[i]) > 0) {
                    return true;
                }
            }
            return false;
        };
        const splitBySeparators = (str, separators) => {
            const reg = new RegExp(`[${separators.join()}]`);
            const array = str.split(reg).filter(token => token);
            return [...new Set(array)];
        };
        if (inputValue &&
            inputValue.length &&
            tokenSeparators.length &&
            this.mode !== 'default' &&
            includesSeparators(inputValue, tokenSeparators)) {
            const listOfLabel = splitBySeparators(inputValue, tokenSeparators);
            this.tokenize.next(listOfLabel);
        }
    }
    clearInputValue() {
        if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.clearInputValue();
        }
    }
    focus() {
        if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.focus();
        }
    }
    blur() {
        if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.blur();
        }
    }
    trackValue(_index, option) {
        return option.bpsValue;
    }
    onDeleteItem(item) {
        if (!this.disabled && !item.bpsDisabled) {
            this.deleteItem.next(item);
        }
    }
    constructor(elementRef, ngZone, noAnimation) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.noAnimation = noAnimation;
        this.bpsId = null;
        this.showSearch = false;
        this.placeHolder = null;
        this.open = false;
        this.maxTagCount = Infinity;
        this.autofocus = false;
        this.disabled = false;
        this.mode = 'default';
        this.customTemplate = null;
        this.maxTagPlaceholder = null;
        this.removeIcon = null;
        this.listOfTopItem = [];
        this.tokenSeparators = [];
        this.tokenize = new EventEmitter();
        this.inputValueChange = new EventEmitter();
        this.deleteItem = new EventEmitter();
        this.listOfSlicedItem = [];
        this.isShowPlaceholder = true;
        this.isShowSingleLabel = false;
        this.isComposing = false;
        this.inputValue = null;
        this.destroy$ = new Subject();
    }
    ngOnChanges(changes) {
        const { listOfTopItem, maxTagCount, customTemplate, maxTagPlaceholder } = changes;
        if (listOfTopItem) {
            this.updateTemplateVariable();
        }
        if (listOfTopItem || maxTagCount || customTemplate || maxTagPlaceholder) {
            const listOfSlicedItem = this.listOfTopItem.slice(0, this.maxTagCount).map(o => ({
                bpsLabel: o.bpsLabel,
                bpsValue: o.bpsValue,
                bpsDisabled: o.bpsDisabled,
                contentTemplateOutlet: this.customTemplate,
                contentTemplateOutletContext: o
            }));
            if (this.listOfTopItem.length > this.maxTagCount) {
                const exceededLabel = `+ ${this.listOfTopItem.length - this.maxTagCount} ...`;
                const listOfSelectedValue = this.listOfTopItem.map(item => item.bpsValue);
                const exceededItem = {
                    bpsLabel: exceededLabel,
                    bpsValue: '$$__nz_exceeded_item',
                    bpsDisabled: true,
                    contentTemplateOutlet: this.maxTagPlaceholder,
                    contentTemplateOutletContext: listOfSelectedValue.slice(this.maxTagCount)
                };
                listOfSlicedItem.push(exceededItem);
            }
            this.listOfSlicedItem = listOfSlicedItem;
        }
    }
    ngOnInit() {
        this.ngZone.runOutsideAngular(() => {
            fromEvent(this.elementRef.nativeElement, 'click')
                .pipe(takeUntil(this.destroy$))
                .subscribe(event => {
                // `HTMLElement.focus()` is a native DOM API which doesn't require Angular to run change detection.
                if (event.target !== this.nzSelectSearchComponent.inputElement.nativeElement) {
                    this.nzSelectSearchComponent.focus();
                }
            });
            fromEvent(this.elementRef.nativeElement, 'keydown')
                .pipe(takeUntil(this.destroy$))
                .subscribe(event => {
                if (event.target instanceof HTMLInputElement) {
                    const inputValue = event.target.value;
                    if (event.keyCode === BACKSPACE &&
                        this.mode !== 'default' &&
                        !inputValue &&
                        this.listOfTopItem.length > 0) {
                        event.preventDefault();
                        // Run change detection only if the user has pressed the `Backspace` key and the following condition is met.
                        this.ngZone.run(() => this.onDeleteItem(this.listOfTopItem[this.listOfTopItem.length - 1]));
                    }
                }
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsSelectTopControlComponent, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }, { token: i1.NzNoAnimationDirective, host: true, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsSelectTopControlComponent, selector: "bps-select-top-control", inputs: { bpsId: "bpsId", showSearch: "showSearch", placeHolder: "placeHolder", open: "open", maxTagCount: "maxTagCount", autofocus: "autofocus", disabled: "disabled", mode: "mode", customTemplate: "customTemplate", maxTagPlaceholder: "maxTagPlaceholder", removeIcon: "removeIcon", listOfTopItem: "listOfTopItem", tokenSeparators: "tokenSeparators" }, outputs: { tokenize: "tokenize", inputValueChange: "inputValueChange", deleteItem: "deleteItem" }, host: { classAttribute: "ant-select-selector" }, viewQueries: [{ propertyName: "nzSelectSearchComponent", first: true, predicate: BpsSelectSearchComponent, descendants: true }], exportAs: ["bpsSelectTopControl"], usesOnChanges: true, ngImport: i0, template: `
    <!--single mode-->
    <ng-container [ngSwitch]="mode">
      <ng-container *ngSwitchCase="'default'">
        <bps-select-search
          [bpsId]="bpsId"
          [disabled]="disabled"
          [value]="inputValue!"
          [showInput]="showSearch"
          [mirrorSync]="false"
          [autofocus]="autofocus"
          [focusTrigger]="open"
          (isComposingChange)="isComposingChange($event)"
          (valueChange)="onInputValueChange($event)"
        ></bps-select-search>
        <bps-select-item
          *ngIf="isShowSingleLabel"
          [deletable]="false"
          [disabled]="false"
          [removeIcon]="removeIcon"
          [label]="listOfTopItem[0].bpsLabel"
          [contentTemplateOutlet]="customTemplate"
          [contentTemplateOutletContext]="listOfTopItem[0]"
        ></bps-select-item>
      </ng-container>
      <ng-container *ngSwitchDefault>
        <!--multiple or tags mode-->
        <bps-select-item
          *ngFor="let item of listOfSlicedItem; trackBy: trackValue"
          [removeIcon]="removeIcon"
          [label]="item.bpsLabel"
          [disabled]="item.bpsDisabled || disabled"
          [contentTemplateOutlet]="item.contentTemplateOutlet"
          [deletable]="true"
          [contentTemplateOutletContext]="item.contentTemplateOutletContext"
          (delete)="onDeleteItem(item.contentTemplateOutletContext)"
        ></bps-select-item>
        <bps-select-search
          [bpsId]="bpsId"
          [disabled]="disabled"
          [value]="inputValue!"
          [autofocus]="autofocus"
          [showInput]="true"
          [mirrorSync]="true"
          [focusTrigger]="open"
          (isComposingChange)="isComposingChange($event)"
          (valueChange)="onInputValueChange($event)"
        ></bps-select-search>
      </ng-container>
    </ng-container>
    <bps-select-placeholder *ngIf="isShowPlaceholder" [placeholder]="placeHolder"></bps-select-placeholder>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i2.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i2.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "component", type: i3.BpsSelectItemComponent, selector: "bps-select-item", inputs: ["disabled", "label", "deletable", "removeIcon", "contentTemplateOutletContext", "contentTemplateOutlet"], outputs: ["delete"] }, { kind: "component", type: i4.BpsSelectPlaceholderComponent, selector: "bps-select-placeholder", inputs: ["placeholder"] }, { kind: "component", type: i5.BpsSelectSearchComponent, selector: "bps-select-search", inputs: ["bpsId", "disabled", "mirrorSync", "showInput", "focusTrigger", "value", "autofocus"], outputs: ["valueChange", "isComposingChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsSelectTopControlComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bps-select-top-control',
                    exportAs: 'bpsSelectTopControl',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: `
    <!--single mode-->
    <ng-container [ngSwitch]="mode">
      <ng-container *ngSwitchCase="'default'">
        <bps-select-search
          [bpsId]="bpsId"
          [disabled]="disabled"
          [value]="inputValue!"
          [showInput]="showSearch"
          [mirrorSync]="false"
          [autofocus]="autofocus"
          [focusTrigger]="open"
          (isComposingChange)="isComposingChange($event)"
          (valueChange)="onInputValueChange($event)"
        ></bps-select-search>
        <bps-select-item
          *ngIf="isShowSingleLabel"
          [deletable]="false"
          [disabled]="false"
          [removeIcon]="removeIcon"
          [label]="listOfTopItem[0].bpsLabel"
          [contentTemplateOutlet]="customTemplate"
          [contentTemplateOutletContext]="listOfTopItem[0]"
        ></bps-select-item>
      </ng-container>
      <ng-container *ngSwitchDefault>
        <!--multiple or tags mode-->
        <bps-select-item
          *ngFor="let item of listOfSlicedItem; trackBy: trackValue"
          [removeIcon]="removeIcon"
          [label]="item.bpsLabel"
          [disabled]="item.bpsDisabled || disabled"
          [contentTemplateOutlet]="item.contentTemplateOutlet"
          [deletable]="true"
          [contentTemplateOutletContext]="item.contentTemplateOutletContext"
          (delete)="onDeleteItem(item.contentTemplateOutletContext)"
        ></bps-select-item>
        <bps-select-search
          [bpsId]="bpsId"
          [disabled]="disabled"
          [value]="inputValue!"
          [autofocus]="autofocus"
          [showInput]="true"
          [mirrorSync]="true"
          [focusTrigger]="open"
          (isComposingChange)="isComposingChange($event)"
          (valueChange)="onInputValueChange($event)"
        ></bps-select-search>
      </ng-container>
    </ng-container>
    <bps-select-placeholder *ngIf="isShowPlaceholder" [placeholder]="placeHolder"></bps-select-placeholder>
  `,
                    host: { class: 'ant-select-selector' }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: i1.NzNoAnimationDirective, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }]; }, propDecorators: { bpsId: [{
                type: Input
            }], showSearch: [{
                type: Input
            }], placeHolder: [{
                type: Input
            }], open: [{
                type: Input
            }], maxTagCount: [{
                type: Input
            }], autofocus: [{
                type: Input
            }], disabled: [{
                type: Input
            }], mode: [{
                type: Input
            }], customTemplate: [{
                type: Input
            }], maxTagPlaceholder: [{
                type: Input
            }], removeIcon: [{
                type: Input
            }], listOfTopItem: [{
                type: Input
            }], tokenSeparators: [{
                type: Input
            }], tokenize: [{
                type: Output
            }], inputValueChange: [{
                type: Output
            }], deleteItem: [{
                type: Output
            }], nzSelectSearchComponent: [{
                type: ViewChild,
                args: [BpsSelectSearchComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9zZWxlY3QtdG9wLWNvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxZQUFZLEVBQ1osSUFBSSxFQUNKLEtBQUssRUFLTCxRQUFRLEVBQ1IsTUFBTSxFQUdOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSzNDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7O0FBK0RyRSxNQUFNLE9BQU8sNEJBQTRCO0lBMEJ2QyxzQkFBc0I7UUFDcEIsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGlCQUFpQixHQUFHLG9CQUFvQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDdkYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsb0JBQW9CLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMxRixDQUFDO0lBRUQsaUJBQWlCLENBQUMsV0FBb0I7UUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFD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dGVudCI6WyJcclxuaW1wb3J0IHsgQkFDS1NQQUNFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XHJcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcblxyXG5pbXBvcnQgeyBCcHNTZWxlY3RTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC1zZWFyY2guY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpTZWxlY3RJdGVtSW50ZXJmYWNlLCBOelNlbGVjdE1vZGVUeXBlLCBOelNlbGVjdFRvcENvbnRyb2xJdGVtVHlwZSB9IGZyb20gJy4vc2VsZWN0LnR5cGVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnBzLXNlbGVjdC10b3AtY29udHJvbCcsXHJcbiAgZXhwb3J0QXM6ICdicHNTZWxlY3RUb3BDb250cm9sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8IS0tc2luZ2xlIG1vZGUtLT5cclxuICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cIm1vZGVcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2RlZmF1bHQnXCI+XHJcbiAgICAgICAgPGJwcy1zZWxlY3Qtc2VhcmNoXHJcbiAgICAgICAgICBbYnBzSWRdPVwiYnBzSWRcIlxyXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICAgIFt2YWx1ZV09XCJpbnB1dFZhbHVlIVwiXHJcbiAgICAgICAgICBbc2hvd0lucHV0XT1cInNob3dTZWFyY2hcIlxyXG4gICAgICAgICAgW21pcnJvclN5bmNdPVwiZmFsc2VcIlxyXG4gICAgICAgICAgW2F1dG9mb2N1c109XCJhdXRvZm9jdXNcIlxyXG4gICAgICAgICAgW2ZvY3VzVHJpZ2dlcl09XCJvcGVuXCJcclxuICAgICAgICAgIChpc0NvbXBvc2luZ0NoYW5nZSk9XCJpc0NvbXBvc2luZ0NoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAgICh2YWx1ZUNoYW5nZSk9XCJvbklucHV0VmFsdWVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgPjwvYnBzLXNlbGVjdC1zZWFyY2g+XHJcbiAgICAgICAgPGJwcy1zZWxlY3QtaXRlbVxyXG4gICAgICAgICAgKm5nSWY9XCJpc1Nob3dTaW5nbGVMYWJlbFwiXHJcbiAgICAgICAgICBbZGVsZXRhYmxlXT1cImZhbHNlXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCJmYWxzZVwiXHJcbiAgICAgICAgICBbcmVtb3ZlSWNvbl09XCJyZW1vdmVJY29uXCJcclxuICAgICAgICAgIFtsYWJlbF09XCJsaXN0T2ZUb3BJdGVtWzBdLmJwc0xhYmVsXCJcclxuICAgICAgICAgIFtjb250ZW50VGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVGVtcGxhdGVcIlxyXG4gICAgICAgICAgW2NvbnRlbnRUZW1wbGF0ZU91dGxldENvbnRleHRdPVwibGlzdE9mVG9wSXRlbVswXVwiXHJcbiAgICAgICAgPjwvYnBzLXNlbGVjdC1pdGVtPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxyXG4gICAgICAgIDwhLS1tdWx0aXBsZSBvciB0YWdzIG1vZGUtLT5cclxuICAgICAgICA8YnBzLXNlbGVjdC1pdGVtXHJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBsaXN0T2ZTbGljZWRJdGVtOyB0cmFja0J5OiB0cmFja1ZhbHVlXCJcclxuICAgICAgICAgIFtyZW1vdmVJY29uXT1cInJlbW92ZUljb25cIlxyXG4gICAgICAgICAgW2xhYmVsXT1cIml0ZW0uYnBzTGFiZWxcIlxyXG4gICAgICAgICAgW2Rpc2FibGVkXT1cIml0ZW0uYnBzRGlzYWJsZWQgfHwgZGlzYWJsZWRcIlxyXG4gICAgICAgICAgW2NvbnRlbnRUZW1wbGF0ZU91dGxldF09XCJpdGVtLmNvbnRlbnRUZW1wbGF0ZU91dGxldFwiXHJcbiAgICAgICAgICBbZGVsZXRhYmxlXT1cInRydWVcIlxyXG4gICAgICAgICAgW2NvbnRlbnRUZW1wbGF0ZU91dGxldENvbnRleHRdPVwiaXRlbS5jb250ZW50VGVtcGxhdGVPdXRsZXRDb250ZXh0XCJcclxuICAgICAgICAgIChkZWxldGUpPVwib25EZWxldGVJdGVtKGl0ZW0uY29udGVudFRlbXBsYXRlT3V0bGV0Q29udGV4dClcIlxyXG4gICAgICAgID48L2Jwcy1zZWxlY3QtaXRlbT5cclxuICAgICAgICA8YnBzLXNlbGVjdC1zZWFyY2hcclxuICAgICAgICAgIFticHNJZF09XCJicHNJZFwiXHJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgW3ZhbHVlXT1cImlucHV0VmFsdWUhXCJcclxuICAgICAgICAgIFthdXRvZm9jdXNdPVwiYXV0b2ZvY3VzXCJcclxuICAgICAgICAgIFtzaG93SW5wdXRdPVwidHJ1ZVwiXHJcbiAgICAgICAgICBbbWlycm9yU3luY109XCJ0cnVlXCJcclxuICAgICAgICAgIFtmb2N1c1RyaWdnZXJdPVwib3BlblwiXHJcbiAgICAgICAgICAoaXNDb21wb3NpbmdDaGFuZ2UpPVwiaXNDb21wb3NpbmdDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAodmFsdWVDaGFuZ2UpPVwib25JbnB1dFZhbHVlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgID48L2Jwcy1zZWxlY3Qtc2VhcmNoPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPGJwcy1zZWxlY3QtcGxhY2Vob2xkZXIgKm5nSWY9XCJpc1Nob3dQbGFjZWhvbGRlclwiIFtwbGFjZWhvbGRlcl09XCJwbGFjZUhvbGRlclwiPjwvYnBzLXNlbGVjdC1wbGFjZWhvbGRlcj5cclxuICBgLFxyXG4gIGhvc3Q6IHsgY2xhc3M6ICdhbnQtc2VsZWN0LXNlbGVjdG9yJyB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgYnBzSWQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIHNob3dTZWFyY2ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBwbGFjZUhvbGRlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIG9wZW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBtYXhUYWdDb3VudDogbnVtYmVyID0gSW5maW5pdHk7XHJcbiAgQElucHV0KCkgYXV0b2ZvY3VzID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBtb2RlOiBOelNlbGVjdE1vZGVUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpTZWxlY3RJdGVtSW50ZXJmYWNlIH0+IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgbWF4VGFnUGxhY2Vob2xkZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelNhZmVBbnlbXSB9PiB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIHJlbW92ZUljb246IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBsaXN0T2ZUb3BJdGVtOiBOelNlbGVjdEl0ZW1JbnRlcmZhY2VbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIHRva2VuU2VwYXJhdG9yczogc3RyaW5nW10gPSBbXTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdG9rZW5pemUgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBpbnB1dFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGRlbGV0ZUl0ZW0gPSBuZXcgRXZlbnRFbWl0dGVyPE56U2VsZWN0SXRlbUludGVyZmFjZT4oKTtcclxuICBAVmlld0NoaWxkKEJwc1NlbGVjdFNlYXJjaENvbXBvbmVudCkgbnpTZWxlY3RTZWFyY2hDb21wb25lbnQhOiBCcHNTZWxlY3RTZWFyY2hDb21wb25lbnQ7XHJcbiAgbGlzdE9mU2xpY2VkSXRlbTogTnpTZWxlY3RUb3BDb250cm9sSXRlbVR5cGVbXSA9IFtdO1xyXG4gIGlzU2hvd1BsYWNlaG9sZGVyID0gdHJ1ZTtcclxuICBpc1Nob3dTaW5nbGVMYWJlbCA9IGZhbHNlO1xyXG4gIGlzQ29tcG9zaW5nID0gZmFsc2U7XHJcbiAgaW5wdXRWYWx1ZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICB1cGRhdGVUZW1wbGF0ZVZhcmlhYmxlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgaXNTZWxlY3RlZFZhbHVlRW1wdHkgPSB0aGlzLmxpc3RPZlRvcEl0ZW0ubGVuZ3RoID09PSAwO1xyXG4gICAgdGhpcy5pc1Nob3dQbGFjZWhvbGRlciA9IGlzU2VsZWN0ZWRWYWx1ZUVtcHR5ICYmICF0aGlzLmlzQ29tcG9zaW5nICYmICF0aGlzLmlucHV0VmFsdWU7XHJcbiAgICB0aGlzLmlzU2hvd1NpbmdsZUxhYmVsID0gIWlzU2VsZWN0ZWRWYWx1ZUVtcHR5ICYmICF0aGlzLmlzQ29tcG9zaW5nICYmICF0aGlzLmlucHV0VmFsdWU7XHJcbiAgfVxyXG5cclxuICBpc0NvbXBvc2luZ0NoYW5nZShpc0NvbXBvc2luZzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5pc0NvbXBvc2luZyA9IGlzQ29tcG9zaW5nO1xyXG4gICAgdGhpcy51cGRhdGVUZW1wbGF0ZVZhcmlhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBvbklucHV0VmFsdWVDaGFuZ2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLmlucHV0VmFsdWUpIHtcclxuICAgICAgdGhpcy5pbnB1dFZhbHVlID0gdmFsdWU7XHJcbiAgICAgIHRoaXMudXBkYXRlVGVtcGxhdGVWYXJpYWJsZSgpO1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgICAgIHRoaXMudG9rZW5TZXBhcmF0ZSh2YWx1ZSwgdGhpcy50b2tlblNlcGFyYXRvcnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9rZW5TZXBhcmF0ZShpbnB1dFZhbHVlOiBzdHJpbmcsIHRva2VuU2VwYXJhdG9yczogc3RyaW5nW10pOiB2b2lkIHtcclxuICAgIGNvbnN0IGluY2x1ZGVzU2VwYXJhdG9ycyA9IChzdHI6IHN0cmluZywgc2VwYXJhdG9yczogc3RyaW5nW10pOiBib29sZWFuID0+IHtcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItZm9yLW9mXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VwYXJhdG9ycy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIGlmIChzdHIubGFzdEluZGV4T2Yoc2VwYXJhdG9yc1tpXSkgPiAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHNwbGl0QnlTZXBhcmF0b3JzID0gKHN0cjogc3RyaW5nLCBzZXBhcmF0b3JzOiBzdHJpbmdbXSk6IHN0cmluZ1tdID0+IHtcclxuICAgICAgY29uc3QgcmVnID0gbmV3IFJlZ0V4cChgWyR7c2VwYXJhdG9ycy5qb2luKCl9XWApO1xyXG4gICAgICBjb25zdCBhcnJheSA9IHN0ci5zcGxpdChyZWcpLmZpbHRlcih0b2tlbiA9PiB0b2tlbik7XHJcbiAgICAgIHJldHVybiBbLi4ubmV3IFNldChhcnJheSldO1xyXG4gICAgfTtcclxuICAgIGlmIChcclxuICAgICAgaW5wdXRWYWx1ZSAmJlxyXG4gICAgICBpbnB1dFZhbHVlLmxlbmd0aCAmJlxyXG4gICAgICB0b2tlblNlcGFyYXRvcnMubGVuZ3RoICYmXHJcbiAgICAgIHRoaXMubW9kZSAhPT0gJ2RlZmF1bHQnICYmXHJcbiAgICAgIGluY2x1ZGVzU2VwYXJhdG9ycyhpbnB1dFZhbHVlLCB0b2tlblNlcGFyYXRvcnMpXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgbGlzdE9mTGFiZWwgPSBzcGxpdEJ5U2VwYXJhdG9ycyhpbnB1dFZhbHVlLCB0b2tlblNlcGFyYXRvcnMpO1xyXG4gICAgICB0aGlzLnRva2VuaXplLm5leHQobGlzdE9mTGFiZWwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xlYXJJbnB1dFZhbHVlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpTZWxlY3RTZWFyY2hDb21wb25lbnQpIHtcclxuICAgICAgdGhpcy5uelNlbGVjdFNlYXJjaENvbXBvbmVudC5jbGVhcklucHV0VmFsdWUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubnpTZWxlY3RTZWFyY2hDb21wb25lbnQpIHtcclxuICAgICAgdGhpcy5uelNlbGVjdFNlYXJjaENvbXBvbmVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYmx1cigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56U2VsZWN0U2VhcmNoQ29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMubnpTZWxlY3RTZWFyY2hDb21wb25lbnQuYmx1cigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdHJhY2tWYWx1ZShfaW5kZXg6IG51bWJlciwgb3B0aW9uOiBOelNlbGVjdFRvcENvbnRyb2xJdGVtVHlwZSk6IE56U2FmZUFueSB7XHJcbiAgICByZXR1cm4gb3B0aW9uLmJwc1ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgb25EZWxldGVJdGVtKGl0ZW06IE56U2VsZWN0SXRlbUludGVyZmFjZSk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICFpdGVtLmJwc0Rpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuZGVsZXRlSXRlbS5uZXh0KGl0ZW0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uOiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIHwgbnVsbFxyXG4gICkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBsaXN0T2ZUb3BJdGVtLCBtYXhUYWdDb3VudCwgY3VzdG9tVGVtcGxhdGUsIG1heFRhZ1BsYWNlaG9sZGVyIH0gPSBjaGFuZ2VzO1xyXG4gICAgaWYgKGxpc3RPZlRvcEl0ZW0pIHtcclxuICAgICAgdGhpcy51cGRhdGVUZW1wbGF0ZVZhcmlhYmxlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAobGlzdE9mVG9wSXRlbSB8fCBtYXhUYWdDb3VudCB8fCBjdXN0b21UZW1wbGF0ZSB8fCBtYXhUYWdQbGFjZWhvbGRlcikge1xyXG4gICAgICBjb25zdCBsaXN0T2ZTbGljZWRJdGVtOiBOelNlbGVjdFRvcENvbnRyb2xJdGVtVHlwZVtdID0gdGhpcy5saXN0T2ZUb3BJdGVtLnNsaWNlKDAsIHRoaXMubWF4VGFnQ291bnQpLm1hcChvID0+ICh7XHJcbiAgICAgICAgYnBzTGFiZWw6IG8uYnBzTGFiZWwsXHJcbiAgICAgICAgYnBzVmFsdWU6IG8uYnBzVmFsdWUsXHJcbiAgICAgICAgYnBzRGlzYWJsZWQ6IG8uYnBzRGlzYWJsZWQsXHJcbiAgICAgICAgY29udGVudFRlbXBsYXRlT3V0bGV0OiB0aGlzLmN1c3RvbVRlbXBsYXRlLFxyXG4gICAgICAgIGNvbnRlbnRUZW1wbGF0ZU91dGxldENvbnRleHQ6IG9cclxuICAgICAgfSkpO1xyXG4gICAgICBpZiAodGhpcy5saXN0T2ZUb3BJdGVtLmxlbmd0aCA+IHRoaXMubWF4VGFnQ291bnQpIHtcclxuICAgICAgICBjb25zdCBleGNlZWRlZExhYmVsID0gYCsgJHt0aGlzLmxpc3RPZlRvcEl0ZW0ubGVuZ3RoIC0gdGhpcy5tYXhUYWdDb3VudH0gLi4uYDtcclxuICAgICAgICBjb25zdCBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gdGhpcy5saXN0T2ZUb3BJdGVtLm1hcChpdGVtID0+IGl0ZW0uYnBzVmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IGV4Y2VlZGVkSXRlbSA9IHtcclxuICAgICAgICAgIGJwc0xhYmVsOiBleGNlZWRlZExhYmVsLFxyXG4gICAgICAgICAgYnBzVmFsdWU6ICckJF9fbnpfZXhjZWVkZWRfaXRlbScsXHJcbiAgICAgICAgICBicHNEaXNhYmxlZDogdHJ1ZSxcclxuICAgICAgICAgIGNvbnRlbnRUZW1wbGF0ZU91dGxldDogdGhpcy5tYXhUYWdQbGFjZWhvbGRlcixcclxuICAgICAgICAgIGNvbnRlbnRUZW1wbGF0ZU91dGxldENvbnRleHQ6IGxpc3RPZlNlbGVjdGVkVmFsdWUuc2xpY2UodGhpcy5tYXhUYWdDb3VudClcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxpc3RPZlNsaWNlZEl0ZW0ucHVzaChleGNlZWRlZEl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGlzdE9mU2xpY2VkSXRlbSA9IGxpc3RPZlNsaWNlZEl0ZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY2xpY2snKVxyXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICAgIC8vIGBIVE1MRWxlbWVudC5mb2N1cygpYCBpcyBhIG5hdGl2ZSBET00gQVBJIHdoaWNoIGRvZXNuJ3QgcmVxdWlyZSBBbmd1bGFyIHRvIHJ1biBjaGFuZ2UgZGV0ZWN0aW9uLlxyXG4gICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gdGhpcy5uelNlbGVjdFNlYXJjaENvbXBvbmVudC5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLm56U2VsZWN0U2VhcmNoQ29tcG9uZW50LmZvY3VzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBmcm9tRXZlbnQ8S2V5Ym9hcmRFdmVudD4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdrZXlkb3duJylcclxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIGV2ZW50LmtleUNvZGUgPT09IEJBQ0tTUEFDRSAmJlxyXG4gICAgICAgICAgICAgIHRoaXMubW9kZSAhPT0gJ2RlZmF1bHQnICYmXHJcbiAgICAgICAgICAgICAgIWlucHV0VmFsdWUgJiZcclxuICAgICAgICAgICAgICB0aGlzLmxpc3RPZlRvcEl0ZW0ubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIC8vIFJ1biBjaGFuZ2UgZGV0ZWN0aW9uIG9ubHkgaWYgdGhlIHVzZXIgaGFzIHByZXNzZWQgdGhlIGBCYWNrc3BhY2VgIGtleSBhbmQgdGhlIGZvbGxvd2luZyBjb25kaXRpb24gaXMgbWV0LlxyXG4gICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLm9uRGVsZXRlSXRlbSh0aGlzLmxpc3RPZlRvcEl0ZW1bdGhpcy5saXN0T2ZUb3BJdGVtLmxlbmd0aCAtIDFdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICB9XHJcbn1cclxuIl19