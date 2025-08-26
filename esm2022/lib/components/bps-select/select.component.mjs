import { __decorate } from "tslib";
import { DOWN_ARROW, ENTER, ESCAPE, SPACE, TAB, UP_ARROW } from '@angular/cdk/keycodes';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, EventEmitter, forwardRef, Host, Input, Optional, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, combineLatest, fromEvent, merge, of as observableOf } from 'rxjs';
import { distinctUntilChanged, map, startWith, switchMap, takeUntil, withLatestFrom } from 'rxjs/operators';
import { slideMotion } from 'ng-zorro-antd/core/animation';
import { WithConfig } from 'ng-zorro-antd/core/config';
import { getPlacementName, POSITION_MAP } from 'ng-zorro-antd/core/overlay';
import { cancelRequestAnimationFrame, reqAnimFrame } from 'ng-zorro-antd/core/polyfill';
import { NzDestroyService } from 'ng-zorro-antd/core/services';
import { getStatusClassNames, InputBoolean, isNotNil } from 'ng-zorro-antd/core/util';
import { BpsOptionGroupComponent } from './option-group.component';
import { BpsOptionComponent } from './option.component';
import { BpsSelectTopControlComponent } from './select-top-control.component';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/services";
import * as i2 from "ng-zorro-antd/core/config";
import * as i3 from "@angular/cdk/platform";
import * as i4 from "@angular/cdk/a11y";
import * as i5 from "@angular/cdk/bidi";
import * as i6 from "ng-zorro-antd/core/no-animation";
import * as i7 from "ng-zorro-antd/core/form";
import * as i8 from "@angular/common";
import * as i9 from "@angular/cdk/overlay";
import * as i10 from "ng-zorro-antd/core/overlay";
import * as i11 from "./option-container.component";
import * as i12 from "./select-arrow.component";
import * as i13 from "./select-clear.component";
import * as i14 from "./select-top-control.component";
import * as i15 from "../core/form/feedback";
function BpsSelectComponent_bps_select_arrow_2_ng_template_1_bps_form_item_feedback_icon_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "bps-form-item-feedback-icon", 8);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("status", ctx_r1.status);
} }
function BpsSelectComponent_bps_select_arrow_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, BpsSelectComponent_bps_select_arrow_2_ng_template_1_bps_form_item_feedback_icon_0_Template, 1, 1, "bps-form-item-feedback-icon", 7);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r1.hasFeedback && !!ctx_r1.status);
} }
function BpsSelectComponent_bps_select_arrow_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "bps-select-arrow", 6);
    i0.ɵɵtemplate(1, BpsSelectComponent_bps_select_arrow_2_ng_template_1_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const feedbackIconTpl_r3 = i0.ɵɵreference(2);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("showArrow", ctx_r1.bpsShowArrow)("loading", ctx_r1.bpsLoading)("search", ctx_r1.bpsOpen && ctx_r1.bpsShowSearch)("suffixIcon", ctx_r1.bpsSuffixIcon)("feedbackIcon", feedbackIconTpl_r3);
} }
function BpsSelectComponent_bps_select_clear_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "bps-select-clear", 9);
    i0.ɵɵlistener("clear", function BpsSelectComponent_bps_select_clear_3_Template_bps_select_clear_clear_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onClearSelection()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("clearIcon", ctx_r1.bpsClearIcon);
} }
function BpsSelectComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "bps-option-container", 10);
    i0.ɵɵlistener("keydown", function BpsSelectComponent_ng_template_4_Template_bps_option_container_keydown_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onKeyDown($event)); })("itemClick", function BpsSelectComponent_ng_template_4_Template_bps_option_container_itemClick_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onItemClick($event)); })("scrollToBottom", function BpsSelectComponent_ng_template_4_Template_bps_option_container_scrollToBottom_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.bpsScrollToBottom.emit()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-select-dropdown-placement-bottomLeft", ctx_r1.dropDownPosition === "bottomLeft")("ant-select-dropdown-placement-topLeft", ctx_r1.dropDownPosition === "topLeft")("ant-select-dropdown-placement-bottomRight", ctx_r1.dropDownPosition === "bottomRight")("ant-select-dropdown-placement-topRight", ctx_r1.dropDownPosition === "topRight");
    i0.ɵɵproperty("ngStyle", ctx_r1.bpsDropdownStyle)("itemSize", ctx_r1.bpsOptionHeightPx)("maxItemLength", ctx_r1.bpsOptionOverflowSize)("matchWidth", ctx_r1.bpsDropdownMatchSelectWidth)("@slideMotion", "enter")("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("listOfContainerItem", ctx_r1.listOfContainerItem)("menuItemSelectedIcon", ctx_r1.bpsMenuItemSelectedIcon)("notFoundContent", ctx_r1.bpsNotFoundContent)("activatedValue", ctx_r1.activatedValue)("listOfSelectedValue", ctx_r1.listOfValue)("dropdownRender", ctx_r1.bpsDropdownRender)("compareWith", ctx_r1.compareWith)("mode", ctx_r1.bpsMode);
} }
const defaultFilterOption = (searchValue, item) => {
    if (item && item.bpsLabel) {
        return item.bpsLabel.toString().toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    }
    else {
        return false;
    }
};
const NZ_CONFIG_MODULE_NAME = 'select';
export class BpsSelectComponent {
    set bpsShowArrow(value) {
        this._bpsShowArrow = value;
    }
    get bpsShowArrow() {
        return this._bpsShowArrow === undefined ? this.bpsMode === 'default' : this._bpsShowArrow;
    }
    generateTagItem(value) {
        return {
            bpsValue: value,
            bpsLabel: value,
            type: 'item'
        };
    }
    onItemClick(value) {
        this.activatedValue = value;
        if (this.bpsMode === 'default') {
            if (this.listOfValue.length === 0 || !this.compareWith(this.listOfValue[0], value)) {
                this.updateListOfValue([value]);
            }
            this.setOpenState(false);
        }
        else {
            const targetIndex = this.listOfValue.findIndex(o => this.compareWith(o, value));
            if (targetIndex !== -1) {
                const listOfValueAfterRemoved = this.listOfValue.filter((_, i) => i !== targetIndex);
                this.updateListOfValue(listOfValueAfterRemoved);
            }
            else if (this.listOfValue.length < this.bpsMaxMultipleCount) {
                const listOfValueAfterAdded = [...this.listOfValue, value];
                this.updateListOfValue(listOfValueAfterAdded);
            }
            this.focus();
            if (this.bpsAutoClearSearchValue) {
                this.clearInput();
            }
        }
    }
    onItemDelete(item) {
        const listOfSelectedValue = this.listOfValue.filter(v => !this.compareWith(v, item.bpsValue));
        this.updateListOfValue(listOfSelectedValue);
        this.clearInput();
    }
    updateListOfContainerItem() {
        let listOfContainerItem = this.listOfTagAndTemplateItem
            .filter(item => !item.bpsHide)
            .filter(item => {
            if (!this.bpsServerSearch && this.searchValue) {
                return this.bpsFilterOption(this.searchValue, item);
            }
            else {
                return true;
            }
        });
        if (this.bpsMode === 'tags' && this.searchValue) {
            const matchedItem = this.listOfTagAndTemplateItem.find(item => item.bpsLabel === this.searchValue);
            if (!matchedItem) {
                const tagItem = this.generateTagItem(this.searchValue);
                listOfContainerItem = [tagItem, ...listOfContainerItem];
                this.activatedValue = tagItem.bpsValue;
            }
            else {
                this.activatedValue = matchedItem.bpsValue;
            }
        }
        const activatedItem = listOfContainerItem.find(item => item.bpsLabel === this.searchValue) ||
            listOfContainerItem.find(item => this.compareWith(item.bpsValue, this.activatedValue)) ||
            listOfContainerItem.find(item => this.compareWith(item.bpsValue, this.listOfValue[0])) ||
            listOfContainerItem[0];
        this.activatedValue = (activatedItem && activatedItem.bpsValue) || null;
        let listOfGroupLabel = [];
        if (this.isReactiveDriven) {
            listOfGroupLabel = [...new Set(this.bpsOptions.filter(o => o.groupLabel).map(o => o.groupLabel))];
        }
        else {
            if (this.listOfNzOptionGroupComponent) {
                listOfGroupLabel = this.listOfNzOptionGroupComponent.map(o => o.bpsLabel);
            }
        }
        /** insert group item **/
        listOfGroupLabel.forEach(label => {
            const index = listOfContainerItem.findIndex(item => label === item.groupLabel);
            if (index > -1) {
                const groupItem = { groupLabel: label, type: 'group', key: label };
                listOfContainerItem.splice(index, 0, groupItem);
            }
        });
        this.listOfContainerItem = [...listOfContainerItem];
        this.updateCdkConnectedOverlayPositions();
    }
    clearInput() {
        this.bpsSelectTopControlComponent.clearInputValue();
    }
    updateListOfValue(listOfValue) {
        const covertListToModel = (list, mode) => {
            if (mode === 'default') {
                if (list.length > 0) {
                    return list[0];
                }
                else {
                    return null;
                }
            }
            else {
                return list;
            }
        };
        const model = covertListToModel(listOfValue, this.bpsMode);
        if (this.value !== model) {
            this.listOfValue = listOfValue;
            this.listOfValue$.next(listOfValue);
            this.value = model;
            this.onChange(this.value);
        }
    }
    onTokenSeparate(listOfLabel) {
        const listOfMatchedValue = this.listOfTagAndTemplateItem
            .filter(item => listOfLabel.findIndex(label => label === item.bpsLabel) !== -1)
            .map(item => item.bpsValue)
            .filter(item => this.listOfValue.findIndex(v => this.compareWith(v, item)) === -1);
        if (this.bpsMode === 'multiple') {
            this.updateListOfValue([...this.listOfValue, ...listOfMatchedValue]);
        }
        else if (this.bpsMode === 'tags') {
            const listOfUnMatchedLabel = listOfLabel.filter(label => this.listOfTagAndTemplateItem.findIndex(item => item.bpsLabel === label) === -1);
            this.updateListOfValue([...this.listOfValue, ...listOfMatchedValue, ...listOfUnMatchedLabel]);
        }
        this.clearInput();
    }
    onKeyDown(e) {
        if (this.bpsDisabled) {
            return;
        }
        const listOfFilteredOptionNotDisabled = this.listOfContainerItem
            .filter(item => item.type === 'item')
            .filter(item => !item.bpsDisabled);
        const activatedIndex = listOfFilteredOptionNotDisabled.findIndex(item => this.compareWith(item.bpsValue, this.activatedValue));
        switch (e.keyCode) {
            case UP_ARROW:
                e.preventDefault();
                if (this.bpsOpen && listOfFilteredOptionNotDisabled.length > 0) {
                    const preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionNotDisabled.length - 1;
                    this.activatedValue = listOfFilteredOptionNotDisabled[preIndex].bpsValue;
                }
                break;
            case DOWN_ARROW:
                e.preventDefault();
                if (this.bpsOpen && listOfFilteredOptionNotDisabled.length > 0) {
                    const nextIndex = activatedIndex < listOfFilteredOptionNotDisabled.length - 1 ? activatedIndex + 1 : 0;
                    this.activatedValue = listOfFilteredOptionNotDisabled[nextIndex].bpsValue;
                }
                else {
                    this.setOpenState(true);
                }
                break;
            case ENTER:
                e.preventDefault();
                if (this.bpsOpen) {
                    if (isNotNil(this.activatedValue) && activatedIndex !== -1) {
                        this.onItemClick(this.activatedValue);
                    }
                }
                else {
                    this.setOpenState(true);
                }
                break;
            case SPACE:
                if (!this.bpsOpen) {
                    this.setOpenState(true);
                    e.preventDefault();
                }
                break;
            case TAB:
                if (this.bpsSelectOnTab) {
                    if (this.bpsOpen) {
                        e.preventDefault();
                        if (isNotNil(this.activatedValue)) {
                            this.onItemClick(this.activatedValue);
                        }
                    }
                }
                else {
                    this.setOpenState(false);
                }
                break;
            case ESCAPE:
                /**
                 * Skip the ESCAPE processing, it will be handled in {@link onOverlayKeyDown}.
                 */
                break;
            default:
                if (!this.bpsOpen) {
                    this.setOpenState(true);
                }
        }
    }
    setOpenState(value) {
        if (this.bpsOpen !== value) {
            this.bpsOpen = value;
            this.bpsOpenChange.emit(value);
            this.onOpenChange();
            this.cdr.markForCheck();
        }
    }
    onOpenChange() {
        this.updateCdkConnectedOverlayStatus();
        this.clearInput();
    }
    onInputValueChange(value) {
        this.searchValue = value;
        this.updateListOfContainerItem();
        this.bpsOnSearch.emit(value);
        this.updateCdkConnectedOverlayPositions();
    }
    onClearSelection() {
        this.updateListOfValue([]);
    }
    onClickOutside(event) {
        if (!this.host.nativeElement.contains(event.target)) {
            this.setOpenState(false);
        }
    }
    focus() {
        this.bpsSelectTopControlComponent.focus();
    }
    blur() {
        this.bpsSelectTopControlComponent.blur();
    }
    onPositionChange(position) {
        const placement = getPlacementName(position);
        this.dropDownPosition = placement;
    }
    updateCdkConnectedOverlayStatus() {
        if (this.platform.isBrowser && this.originElement.nativeElement) {
            const triggerWidth = this.triggerWidth;
            cancelRequestAnimationFrame(this.requestId);
            this.requestId = reqAnimFrame(() => {
                // Blink triggers style and layout pipelines anytime the `getBoundingClientRect()` is called, which may cause a
                // frame drop. That's why it's scheduled through the `requestAnimationFrame` to unload the composite thread.
                this.triggerWidth = this.originElement.nativeElement.getBoundingClientRect().width;
                if (triggerWidth !== this.triggerWidth) {
                    // The `requestAnimationFrame` will trigger change detection, but we're inside an `OnPush` component which won't have
                    // the `ChecksEnabled` state. Calling `markForCheck()` will allow Angular to run the change detection from the root component
                    // down to the `nz-select`. But we'll trigger only local change detection if the `triggerWidth` has been changed.
                    this.cdr.detectChanges();
                }
            });
        }
    }
    updateCdkConnectedOverlayPositions() {
        reqAnimFrame(() => {
            this.cdkConnectedOverlay?.overlayRef?.updatePosition();
        });
    }
    constructor(ngZone, destroy$, nzConfigService, cdr, host, renderer, platform, focusMonitor, directionality, noAnimation, nzFormStatusService, nzFormNoStatusService) {
        this.ngZone = ngZone;
        this.destroy$ = destroy$;
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.host = host;
        this.renderer = renderer;
        this.platform = platform;
        this.focusMonitor = focusMonitor;
        this.directionality = directionality;
        this.noAnimation = noAnimation;
        this.nzFormStatusService = nzFormStatusService;
        this.nzFormNoStatusService = nzFormNoStatusService;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.bpsId = null;
        this.bpsSize = 'default';
        this.bpsStatus = '';
        this.bpsOptionHeightPx = 23;
        this.bpsOptionOverflowSize = 8;
        this.bpsDropdownClassName = null;
        this.bpsDropdownMatchSelectWidth = true;
        this.bpsDropdownStyle = null;
        this.bpsNotFoundContent = undefined;
        this.bpsPlaceHolder = null;
        this.bpsPlacement = null;
        this.bpsMaxTagCount = Infinity;
        this.bpsDropdownRender = null;
        this.bpsCustomTemplate = null;
        this.bpsSuffixIcon = null;
        this.bpsClearIcon = null;
        this.bpsRemoveIcon = null;
        this.bpsMenuItemSelectedIcon = null;
        this.bpsTokenSeparators = [];
        this.bpsMaxTagPlaceholder = null;
        this.bpsMaxMultipleCount = Infinity;
        this.bpsMode = 'default';
        this.bpsFilterOption = defaultFilterOption;
        this.compareWith = (o1, o2) => o1 === o2;
        this.bpsAllowClear = false;
        this.bpsBorderless = false;
        this.bpsShowSearch = false;
        this.bpsLoading = false;
        this.bpsAutoFocus = false;
        this.bpsAutoClearSearchValue = true;
        this.bpsServerSearch = false;
        this.bpsDisabled = false;
        this.bpsOpen = false;
        this.bpsSelectOnTab = false;
        this.bpsBackdrop = false;
        this.bpsOptions = [];
        this.bpsOnSearch = new EventEmitter();
        this.bpsScrollToBottom = new EventEmitter();
        this.bpsOpenChange = new EventEmitter();
        this.bpsBlur = new EventEmitter();
        this.bpsFocus = new EventEmitter();
        this.listOfValue$ = new BehaviorSubject([]);
        this.listOfTemplateItem$ = new BehaviorSubject([]);
        this.listOfTagAndTemplateItem = [];
        this.searchValue = '';
        this.isReactiveDriven = false;
        this.requestId = -1;
        this.isNzDisableFirstChange = true;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.dropDownPosition = 'bottomLeft';
        this.triggerWidth = null;
        this.listOfContainerItem = [];
        this.listOfTopItem = [];
        this.activatedValue = null;
        this.listOfValue = [];
        this.focused = false;
        this.dir = 'ltr';
        this.positions = [];
        // status
        this.prefixCls = 'ant-select';
        this.statusCls = {};
        this.status = '';
        this.hasFeedback = false;
    }
    writeValue(modelValue) {
        /** https://github.com/angular/angular/issues/14988 **/
        if (this.value !== modelValue) {
            this.value = modelValue;
            const covertModelToList = (model, mode) => {
                if (model === null || model === undefined) {
                    return [];
                }
                else if (mode === 'default') {
                    return [model];
                }
                else {
                    return model;
                }
            };
            const listOfValue = covertModelToList(modelValue, this.bpsMode);
            this.listOfValue = listOfValue;
            this.listOfValue$.next(listOfValue);
            this.cdr.markForCheck();
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this.bpsDisabled = (this.isNzDisableFirstChange && this.bpsDisabled) || disabled;
        this.isNzDisableFirstChange = false;
        if (this.bpsDisabled) {
            this.setOpenState(false);
        }
        this.cdr.markForCheck();
    }
    ngOnChanges(changes) {
        const { bpsOpen, bpsDisabled, bpsOptions, bpsStatus, bpsPlacement } = changes;
        if (bpsOpen) {
            this.onOpenChange();
        }
        if (bpsDisabled && this.bpsDisabled) {
            this.setOpenState(false);
        }
        if (bpsOptions) {
            this.isReactiveDriven = true;
            const listOfOptions = this.bpsOptions || [];
            const listOfTransformedItem = listOfOptions.map(item => {
                return {
                    template: item.label instanceof TemplateRef ? item.label : null,
                    bpsTitle: this.getTitle(item.title, item.label),
                    bpsLabel: typeof item.label === 'string' || typeof item.label === 'number' ? item.label : null,
                    bpsValue: item.value,
                    bpsDisabled: item.disabled || false,
                    bpsHide: item.hide || false,
                    bpsCustomContent: item.label instanceof TemplateRef,
                    groupLabel: item.groupLabel || null,
                    type: 'item',
                    key: item.key === undefined ? item.value : item.key
                };
            });
            this.listOfTemplateItem$.next(listOfTransformedItem);
        }
        if (bpsStatus) {
            this.setStatusStyles(this.bpsStatus, this.hasFeedback);
        }
        if (bpsPlacement) {
            const { currentValue } = bpsPlacement;
            this.dropDownPosition = currentValue;
            const listOfPlacement = ['bottomLeft', 'topLeft', 'bottomRight', 'topRight'];
            if (currentValue && listOfPlacement.includes(currentValue)) {
                this.positions = [POSITION_MAP[currentValue]];
            }
            else {
                this.positions = listOfPlacement.map(e => POSITION_MAP[e]);
            }
        }
    }
    ngOnInit() {
        this.nzFormStatusService?.formStatusChanges
            .pipe(distinctUntilChanged((pre, cur) => {
            return pre.status === cur.status && pre.hasFeedback === cur.hasFeedback;
        }), withLatestFrom(this.nzFormNoStatusService ? this.nzFormNoStatusService.noFormStatus : observableOf(false)), map(([{ status, hasFeedback }, noStatus]) => ({ status: noStatus ? '' : status, hasFeedback })), takeUntil(this.destroy$))
            .subscribe(({ status, hasFeedback }) => {
            this.setStatusStyles(status, hasFeedback);
        });
        this.focusMonitor
            .monitor(this.host, true)
            .pipe(takeUntil(this.destroy$))
            .subscribe(focusOrigin => {
            if (!focusOrigin) {
                this.focused = false;
                this.cdr.markForCheck();
                this.bpsBlur.emit();
                Promise.resolve().then(() => {
                    this.onTouched();
                });
            }
            else {
                this.focused = true;
                this.cdr.markForCheck();
                this.bpsFocus.emit();
            }
        });
        combineLatest([this.listOfValue$, this.listOfTemplateItem$])
            .pipe(takeUntil(this.destroy$))
            .subscribe(([listOfSelectedValue, listOfTemplateItem]) => {
            const listOfTagItem = listOfSelectedValue
                .filter(() => this.bpsMode === 'tags')
                .filter(value => listOfTemplateItem.findIndex(o => this.compareWith(o.bpsValue, value)) === -1)
                .map(value => this.listOfTopItem.find(o => this.compareWith(o.bpsValue, value)) || this.generateTagItem(value));
            this.listOfTagAndTemplateItem = [...listOfTemplateItem, ...listOfTagItem];
            this.listOfTopItem = this.listOfValue
                .map(v => [...this.listOfTagAndTemplateItem, ...this.listOfTopItem].find(item => this.compareWith(v, item.bpsValue)))
                .filter(item => !!item);
            this.updateListOfContainerItem();
        });
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.nzConfigService
            .getConfigChangeEventForComponent('select')
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.cdr.markForCheck();
        });
        this.dir = this.directionality.value;
        this.ngZone.runOutsideAngular(() => fromEvent(this.host.nativeElement, 'click')
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            if ((this.bpsOpen && this.bpsShowSearch) || this.bpsDisabled) {
                return;
            }
            this.ngZone.run(() => this.setOpenState(!this.bpsOpen));
        }));
        // Caretaker note: we could've added this listener within the template `(overlayKeydown)="..."`,
        // but with this approach, it'll run change detection on each keyboard click, and also it'll run
        // `markForCheck()` internally, which means the whole component tree (starting from the root and
        // going down to the select component) will be re-checked and updated (if needed).
        // This is safe to do that manually since `setOpenState()` calls `markForCheck()` if needed.
        this.cdkConnectedOverlay.overlayKeydown.pipe(takeUntil(this.destroy$)).subscribe(event => {
            if (event.keyCode === ESCAPE) {
                this.setOpenState(false);
            }
        });
    }
    ngAfterContentInit() {
        if (!this.isReactiveDriven) {
            merge(this.listOfNzOptionGroupComponent.changes, this.listOfNzOptionComponent.changes)
                .pipe(startWith(true), switchMap(() => merge(...[
                this.listOfNzOptionComponent.changes,
                this.listOfNzOptionGroupComponent.changes,
                ...this.listOfNzOptionComponent.map(option => option.changes),
                ...this.listOfNzOptionGroupComponent.map(option => option.changes)
            ]).pipe(startWith(true))), takeUntil(this.destroy$))
                .subscribe(() => {
                const listOfOptionInterface = this.listOfNzOptionComponent.toArray().map(item => {
                    const { template, bpsLabel, bpsValue, bpsKey, bpsDisabled, bpsHide, bpsCustomContent, groupLabel } = item;
                    return {
                        template,
                        bpsLabel,
                        bpsValue,
                        bpsDisabled,
                        bpsHide,
                        bpsCustomContent,
                        groupLabel,
                        bpsTitle: this.getTitle(item.bpsTitle, item.bpsLabel),
                        type: 'item',
                        key: bpsKey === undefined ? bpsValue : bpsKey
                    };
                });
                this.listOfTemplateItem$.next(listOfOptionInterface);
                this.cdr.markForCheck();
            });
        }
    }
    ngOnDestroy() {
        cancelRequestAnimationFrame(this.requestId);
        this.focusMonitor.stopMonitoring(this.host);
    }
    setStatusStyles(status, hasFeedback) {
        this.status = status;
        this.hasFeedback = hasFeedback;
        this.cdr.markForCheck();
        // render status if nzStatus is set
        this.statusCls = getStatusClassNames(this.prefixCls, status, hasFeedback);
        Object.keys(this.statusCls).forEach(status => {
            if (this.statusCls[status]) {
                this.renderer.addClass(this.host.nativeElement, status);
            }
            else {
                this.renderer.removeClass(this.host.nativeElement, status);
            }
        });
    }
    getTitle(title, label) {
        let rawTitle = undefined;
        if (title === undefined) {
            if (typeof label === 'string' || typeof label === 'number') {
                rawTitle = label.toString();
            }
        }
        else if (typeof title === 'string' || typeof title === 'number') {
            rawTitle = title.toString();
        }
        return rawTitle;
    }
    static { this.ɵfac = function BpsSelectComponent_Factory(t) { return new (t || BpsSelectComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i1.NzDestroyService), i0.ɵɵdirectiveInject(i2.NzConfigService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i3.Platform), i0.ɵɵdirectiveInject(i4.FocusMonitor), i0.ɵɵdirectiveInject(i5.Directionality, 8), i0.ɵɵdirectiveInject(i6.NzNoAnimationDirective, 9), i0.ɵɵdirectiveInject(i7.NzFormStatusService, 8), i0.ɵɵdirectiveInject(i7.NzFormNoStatusService, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsSelectComponent, selectors: [["bps-select"]], contentQueries: function BpsSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, BpsOptionComponent, 5);
            i0.ɵɵcontentQuery(dirIndex, BpsOptionGroupComponent, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzOptionComponent = _t);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.listOfNzOptionGroupComponent = _t);
        } }, viewQuery: function BpsSelectComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(CdkOverlayOrigin, 7, ElementRef);
            i0.ɵɵviewQuery(CdkConnectedOverlay, 7);
            i0.ɵɵviewQuery(BpsSelectTopControlComponent, 7);
            i0.ɵɵviewQuery(BpsOptionGroupComponent, 7, ElementRef);
            i0.ɵɵviewQuery(BpsSelectTopControlComponent, 7, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.originElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.bpsSelectTopControlComponent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.bpsOptionGroupComponentElement = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.bpsSelectTopControlComponentElement = _t.first);
        } }, hostAttrs: [1, "ant-select"], hostVars: 26, hostBindings: function BpsSelectComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ant-select-in-form-item", !!ctx.nzFormStatusService)("ant-select-lg", ctx.bpsSize === "large")("ant-select-sm", ctx.bpsSize === "small")("ant-select-show-arrow", ctx.bpsShowArrow)("ant-select-disabled", ctx.bpsDisabled)("ant-select-show-search", (ctx.bpsShowSearch || ctx.bpsMode !== "default") && !ctx.bpsDisabled)("ant-select-allow-clear", ctx.bpsAllowClear)("ant-select-borderless", ctx.bpsBorderless)("ant-select-open", ctx.bpsOpen)("ant-select-focused", ctx.bpsOpen || ctx.focused)("ant-select-single", ctx.bpsMode === "default")("ant-select-multiple", ctx.bpsMode !== "default")("ant-select-rtl", ctx.dir === "rtl");
        } }, inputs: { bpsId: "bpsId", bpsSize: "bpsSize", bpsStatus: "bpsStatus", bpsOptionHeightPx: "bpsOptionHeightPx", bpsOptionOverflowSize: "bpsOptionOverflowSize", bpsDropdownClassName: "bpsDropdownClassName", bpsDropdownMatchSelectWidth: "bpsDropdownMatchSelectWidth", bpsDropdownStyle: "bpsDropdownStyle", bpsNotFoundContent: "bpsNotFoundContent", bpsPlaceHolder: "bpsPlaceHolder", bpsPlacement: "bpsPlacement", bpsMaxTagCount: "bpsMaxTagCount", bpsDropdownRender: "bpsDropdownRender", bpsCustomTemplate: "bpsCustomTemplate", bpsSuffixIcon: "bpsSuffixIcon", bpsClearIcon: "bpsClearIcon", bpsRemoveIcon: "bpsRemoveIcon", bpsMenuItemSelectedIcon: "bpsMenuItemSelectedIcon", bpsTokenSeparators: "bpsTokenSeparators", bpsMaxTagPlaceholder: "bpsMaxTagPlaceholder", bpsMaxMultipleCount: "bpsMaxMultipleCount", bpsMode: "bpsMode", bpsFilterOption: "bpsFilterOption", compareWith: "compareWith", bpsAllowClear: "bpsAllowClear", bpsBorderless: "bpsBorderless", bpsShowSearch: "bpsShowSearch", bpsLoading: "bpsLoading", bpsAutoFocus: "bpsAutoFocus", bpsAutoClearSearchValue: "bpsAutoClearSearchValue", bpsServerSearch: "bpsServerSearch", bpsDisabled: "bpsDisabled", bpsOpen: "bpsOpen", bpsSelectOnTab: "bpsSelectOnTab", bpsBackdrop: "bpsBackdrop", bpsOptions: "bpsOptions", bpsShowArrow: "bpsShowArrow" }, outputs: { bpsOnSearch: "bpsOnSearch", bpsScrollToBottom: "bpsScrollToBottom", bpsOpenChange: "bpsOpenChange", bpsBlur: "bpsBlur", bpsFocus: "bpsFocus" }, exportAs: ["bpsSelect"], features: [i0.ɵɵProvidersFeature([
                NzDestroyService,
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => BpsSelectComponent),
                    multi: true
                }
            ]), i0.ɵɵNgOnChangesFeature], decls: 5, vars: 25, consts: [["origin", "cdkOverlayOrigin"], ["feedbackIconTpl", ""], ["cdkOverlayOrigin", "", 3, "inputValueChange", "tokenize", "deleteItem", "keydown", "bpsId", "open", "disabled", "mode", "nzNoAnimation", "maxTagPlaceholder", "removeIcon", "placeHolder", "maxTagCount", "customTemplate", "tokenSeparators", "showSearch", "autofocus", "listOfTopItem"], [3, "showArrow", "loading", "search", "suffixIcon", "feedbackIcon", 4, "ngIf"], [3, "clearIcon", "clear", 4, "ngIf"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "overlayOutsideClick", "detach", "positionChange", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions"], [3, "showArrow", "loading", "search", "suffixIcon", "feedbackIcon"], [3, "status", 4, "ngIf"], [3, "status"], [3, "clear", "clearIcon"], [3, "keydown", "itemClick", "scrollToBottom", "ngStyle", "itemSize", "maxItemLength", "matchWidth", "nzNoAnimation", "listOfContainerItem", "menuItemSelectedIcon", "notFoundContent", "activatedValue", "listOfSelectedValue", "dropdownRender", "compareWith", "mode"]], template: function BpsSelectComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "bps-select-top-control", 2, 0);
            i0.ɵɵlistener("inputValueChange", function BpsSelectComponent_Template_bps_select_top_control_inputValueChange_0_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onInputValueChange($event)); })("tokenize", function BpsSelectComponent_Template_bps_select_top_control_tokenize_0_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onTokenSeparate($event)); })("deleteItem", function BpsSelectComponent_Template_bps_select_top_control_deleteItem_0_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onItemDelete($event)); })("keydown", function BpsSelectComponent_Template_bps_select_top_control_keydown_0_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onKeyDown($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, BpsSelectComponent_bps_select_arrow_2_Template, 3, 5, "bps-select-arrow", 3)(3, BpsSelectComponent_bps_select_clear_3_Template, 1, 1, "bps-select-clear", 4)(4, BpsSelectComponent_ng_template_4_Template, 1, 23, "ng-template", 5);
            i0.ɵɵlistener("overlayOutsideClick", function BpsSelectComponent_Template_ng_template_overlayOutsideClick_4_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onClickOutside($event)); })("detach", function BpsSelectComponent_Template_ng_template_detach_4_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.setOpenState(false)); })("positionChange", function BpsSelectComponent_Template_ng_template_positionChange_4_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onPositionChange($event)); });
        } if (rf & 2) {
            const origin_r6 = i0.ɵɵreference(1);
            i0.ɵɵproperty("bpsId", ctx.bpsId)("open", ctx.bpsOpen)("disabled", ctx.bpsDisabled)("mode", ctx.bpsMode)("@.disabled", !!(ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation))("nzNoAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation)("maxTagPlaceholder", ctx.bpsMaxTagPlaceholder)("removeIcon", ctx.bpsRemoveIcon)("placeHolder", ctx.bpsPlaceHolder)("maxTagCount", ctx.bpsMaxTagCount)("customTemplate", ctx.bpsCustomTemplate)("tokenSeparators", ctx.bpsTokenSeparators)("showSearch", ctx.bpsShowSearch)("autofocus", ctx.bpsAutoFocus)("listOfTopItem", ctx.listOfTopItem);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.bpsShowArrow || ctx.hasFeedback && !!ctx.status);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.bpsAllowClear && !ctx.bpsDisabled && ctx.listOfValue.length);
            i0.ɵɵadvance();
            i0.ɵɵproperty("cdkConnectedOverlayHasBackdrop", ctx.bpsBackdrop)("cdkConnectedOverlayMinWidth", ctx.bpsDropdownMatchSelectWidth ? null : ctx.triggerWidth)("cdkConnectedOverlayWidth", ctx.bpsDropdownMatchSelectWidth ? ctx.triggerWidth : null)("cdkConnectedOverlayOrigin", origin_r6)("cdkConnectedOverlayTransformOriginOn", ".ant-select-dropdown")("cdkConnectedOverlayPanelClass", ctx.bpsDropdownClassName)("cdkConnectedOverlayOpen", ctx.bpsOpen)("cdkConnectedOverlayPositions", ctx.positions);
        } }, dependencies: [i8.NgIf, i8.NgStyle, i9.CdkConnectedOverlay, i9.CdkOverlayOrigin, i6.NzNoAnimationDirective, i10.NzConnectedOverlayDirective, i11.BpsOptionContainerComponent, i12.BpsSelectArrowComponent, i13.BpsSelectClearComponent, i14.BpsSelectTopControlComponent, i15.BpsFormItemFeedbackIconComponent], styles: [".ant-select-dropdown{background-color:#363636;font-size:11px;border-radius:0 0 10px 10px;margin-top:0!important;box-shadow:none;max-width:calc(100% - 29px)}.ant-select-disabled .ant-select-selection{cursor:url(/assets/bps-icons/sps_inaccessible_icon_grey.svg),auto}.ant-select-open .ant-select-selection-selected-value{color:#666}\n"], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 }); }
}
__decorate([
    WithConfig()
], BpsSelectComponent.prototype, "bpsSuffixIcon", void 0);
__decorate([
    InputBoolean()
], BpsSelectComponent.prototype, "bpsAllowClear", void 0);
__decorate([
    WithConfig(),
    InputBoolean()
], BpsSelectComponent.prototype, "bpsBorderless", void 0);
__decorate([
    InputBoolean()
], BpsSelectComponent.prototype, "bpsShowSearch", void 0);
__decorate([
    InputBoolean()
], BpsSelectComponent.prototype, "bpsLoading", void 0);
__decorate([
    InputBoolean()
], BpsSelectComponent.prototype, "bpsAutoFocus", void 0);
__decorate([
    InputBoolean()
], BpsSelectComponent.prototype, "bpsAutoClearSearchValue", void 0);
__decorate([
    InputBoolean()
], BpsSelectComponent.prototype, "bpsServerSearch", void 0);
__decorate([
    InputBoolean()
], BpsSelectComponent.prototype, "bpsDisabled", void 0);
__decorate([
    InputBoolean()
], BpsSelectComponent.prototype, "bpsOpen", void 0);
__decorate([
    InputBoolean()
], BpsSelectComponent.prototype, "bpsSelectOnTab", void 0);
__decorate([
    WithConfig(),
    InputBoolean()
], BpsSelectComponent.prototype, "bpsBackdrop", void 0);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsSelectComponent, [{
        type: Component,
        args: [{ selector: 'bps-select', exportAs: 'bpsSelect', preserveWhitespaces: false, providers: [
                    NzDestroyService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => BpsSelectComponent),
                        multi: true
                    }
                ], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, animations: [slideMotion], template: `
    <bps-select-top-control
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      [bpsId]="bpsId"
      [open]="bpsOpen"
      [disabled]="bpsDisabled"
      [mode]="bpsMode"
      [@.disabled]="!!noAnimation?.nzNoAnimation"
      [nzNoAnimation]="noAnimation?.nzNoAnimation"
      [maxTagPlaceholder]="bpsMaxTagPlaceholder"
      [removeIcon]="bpsRemoveIcon"
      [placeHolder]="bpsPlaceHolder"
      [maxTagCount]="bpsMaxTagCount"
      [customTemplate]="bpsCustomTemplate"
      [tokenSeparators]="bpsTokenSeparators"
      [showSearch]="bpsShowSearch"
      [autofocus]="bpsAutoFocus"
      [listOfTopItem]="listOfTopItem"
      (inputValueChange)="onInputValueChange($event)"
      (tokenize)="onTokenSeparate($event)"
      (deleteItem)="onItemDelete($event)"
      (keydown)="onKeyDown($event)"
    ></bps-select-top-control>
    <bps-select-arrow
      *ngIf="bpsShowArrow || (hasFeedback && !!status)"
      [showArrow]="bpsShowArrow"
      [loading]="bpsLoading"
      [search]="bpsOpen && bpsShowSearch"
      [suffixIcon]="bpsSuffixIcon"
      [feedbackIcon]="feedbackIconTpl"
    >
      <ng-template #feedbackIconTpl>
        <bps-form-item-feedback-icon *ngIf="hasFeedback && !!status" [status]="status"></bps-form-item-feedback-icon>
      </ng-template>
    </bps-select-arrow>

    <bps-select-clear
      *ngIf="bpsAllowClear && !bpsDisabled && listOfValue.length"
      [clearIcon]="bpsClearIcon"
      (clear)="onClearSelection()"
    ></bps-select-clear>
    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="bpsBackdrop"
      [cdkConnectedOverlayMinWidth]="$any(bpsDropdownMatchSelectWidth ? null : triggerWidth)"
      [cdkConnectedOverlayWidth]="$any(bpsDropdownMatchSelectWidth ? triggerWidth : null)"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-select-dropdown'"
      [cdkConnectedOverlayPanelClass]="bpsDropdownClassName!"
      [cdkConnectedOverlayOpen]="bpsOpen"
      [cdkConnectedOverlayPositions]="positions"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="setOpenState(false)"
      (positionChange)="onPositionChange($event)"
    >
      <bps-option-container
        [ngStyle]="bpsDropdownStyle"
        [itemSize]="bpsOptionHeightPx"
        [maxItemLength]="bpsOptionOverflowSize"
        [matchWidth]="bpsDropdownMatchSelectWidth"
        [class.ant-select-dropdown-placement-bottomLeft]="dropDownPosition === 'bottomLeft'"
        [class.ant-select-dropdown-placement-topLeft]="dropDownPosition === 'topLeft'"
        [class.ant-select-dropdown-placement-bottomRight]="dropDownPosition === 'bottomRight'"
        [class.ant-select-dropdown-placement-topRight]="dropDownPosition === 'topRight'"
        [@slideMotion]="'enter'"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [listOfContainerItem]="listOfContainerItem"
        [menuItemSelectedIcon]="bpsMenuItemSelectedIcon"
        [notFoundContent]="bpsNotFoundContent"
        [activatedValue]="activatedValue"
        [listOfSelectedValue]="listOfValue"
        [dropdownRender]="bpsDropdownRender"
        [compareWith]="compareWith"
        [mode]="bpsMode"
        (keydown)="onKeyDown($event)"
        (itemClick)="onItemClick($event)"
        (scrollToBottom)="bpsScrollToBottom.emit()"
      ></bps-option-container>
    </ng-template>
  `, host: {
                    class: 'ant-select',
                    '[class.ant-select-in-form-item]': '!!nzFormStatusService',
                    '[class.ant-select-lg]': 'bpsSize === "large"',
                    '[class.ant-select-sm]': 'bpsSize === "small"',
                    '[class.ant-select-show-arrow]': `bpsShowArrow`,
                    '[class.ant-select-disabled]': 'bpsDisabled',
                    '[class.ant-select-show-search]': `(bpsShowSearch || bpsMode !== 'default') && !bpsDisabled`,
                    '[class.ant-select-allow-clear]': 'bpsAllowClear',
                    '[class.ant-select-borderless]': 'bpsBorderless',
                    '[class.ant-select-open]': 'bpsOpen',
                    '[class.ant-select-focused]': 'bpsOpen || focused',
                    '[class.ant-select-single]': `bpsMode === 'default'`,
                    '[class.ant-select-multiple]': `bpsMode !== 'default'`,
                    '[class.ant-select-rtl]': `dir === 'rtl'`
                }, styles: [".ant-select-dropdown{background-color:#363636;font-size:11px;border-radius:0 0 10px 10px;margin-top:0!important;box-shadow:none;max-width:calc(100% - 29px)}.ant-select-disabled .ant-select-selection{cursor:url(/assets/bps-icons/sps_inaccessible_icon_grey.svg),auto}.ant-select-open .ant-select-selection-selected-value{color:#666}\n"] }]
    }], () => [{ type: i0.NgZone }, { type: i1.NzDestroyService }, { type: i2.NzConfigService }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i3.Platform }, { type: i4.FocusMonitor }, { type: i5.Directionality, decorators: [{
                type: Optional
            }] }, { type: i6.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }, { type: i7.NzFormStatusService, decorators: [{
                type: Optional
            }] }, { type: i7.NzFormNoStatusService, decorators: [{
                type: Optional
            }] }], { bpsId: [{
            type: Input
        }], bpsSize: [{
            type: Input
        }], bpsStatus: [{
            type: Input
        }], bpsOptionHeightPx: [{
            type: Input
        }], bpsOptionOverflowSize: [{
            type: Input
        }], bpsDropdownClassName: [{
            type: Input
        }], bpsDropdownMatchSelectWidth: [{
            type: Input
        }], bpsDropdownStyle: [{
            type: Input
        }], bpsNotFoundContent: [{
            type: Input
        }], bpsPlaceHolder: [{
            type: Input
        }], bpsPlacement: [{
            type: Input
        }], bpsMaxTagCount: [{
            type: Input
        }], bpsDropdownRender: [{
            type: Input
        }], bpsCustomTemplate: [{
            type: Input
        }], bpsSuffixIcon: [{
            type: Input
        }], bpsClearIcon: [{
            type: Input
        }], bpsRemoveIcon: [{
            type: Input
        }], bpsMenuItemSelectedIcon: [{
            type: Input
        }], bpsTokenSeparators: [{
            type: Input
        }], bpsMaxTagPlaceholder: [{
            type: Input
        }], bpsMaxMultipleCount: [{
            type: Input
        }], bpsMode: [{
            type: Input
        }], bpsFilterOption: [{
            type: Input
        }], compareWith: [{
            type: Input
        }], bpsAllowClear: [{
            type: Input
        }], bpsBorderless: [{
            type: Input
        }], bpsShowSearch: [{
            type: Input
        }], bpsLoading: [{
            type: Input
        }], bpsAutoFocus: [{
            type: Input
        }], bpsAutoClearSearchValue: [{
            type: Input
        }], bpsServerSearch: [{
            type: Input
        }], bpsDisabled: [{
            type: Input
        }], bpsOpen: [{
            type: Input
        }], bpsSelectOnTab: [{
            type: Input
        }], bpsBackdrop: [{
            type: Input
        }], bpsOptions: [{
            type: Input
        }], bpsShowArrow: [{
            type: Input
        }], bpsOnSearch: [{
            type: Output
        }], bpsScrollToBottom: [{
            type: Output
        }], bpsOpenChange: [{
            type: Output
        }], bpsBlur: [{
            type: Output
        }], bpsFocus: [{
            type: Output
        }], originElement: [{
            type: ViewChild,
            args: [CdkOverlayOrigin, { static: true, read: ElementRef }]
        }], cdkConnectedOverlay: [{
            type: ViewChild,
            args: [CdkConnectedOverlay, { static: true }]
        }], bpsSelectTopControlComponent: [{
            type: ViewChild,
            args: [BpsSelectTopControlComponent, { static: true }]
        }], listOfNzOptionComponent: [{
            type: ContentChildren,
            args: [BpsOptionComponent, { descendants: true }]
        }], listOfNzOptionGroupComponent: [{
            type: ContentChildren,
            args: [BpsOptionGroupComponent, { descendants: true }]
        }], bpsOptionGroupComponentElement: [{
            type: ViewChild,
            args: [BpsOptionGroupComponent, { static: true, read: ElementRef }]
        }], bpsSelectTopControlComponentElement: [{
            type: ViewChild,
            args: [BpsSelectTopControlComponent, { static: true, read: ElementRef }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsSelectComponent, { className: "BpsSelectComponent", filePath: "lib\\components\\bps-select\\select.component.ts", lineNumber: 196 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RixPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUdqQixNQUFNLHNCQUFzQixDQUFDO0FBRTlCLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUtMLFFBQVEsRUFDUixNQUFNLEVBSU4sV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQWdDLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBR3JGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQWlCLE1BQU0sNEJBQTRCLENBQUM7QUFDM0YsT0FBTyxFQUFF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QUEvQixNQUFNO1lBQ1ksT0FBTztrQkFBekIsTUFBTTtZQUNZLFFBQVE7a0JBQTFCLE1BQU07WUFDMEQsYUFBYTtrQkFBN0UsU0FBUzttQkFBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtZQUNiLG1CQUFtQjtrQkFBcEUsU0FBUzttQkFBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDVyw0QkFBNEI7a0JBQXRGLFNBQVM7bUJBQUMsNEJBQTRCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQ0csdUJBQXVCO2tCQUFsRixlQUFlO21CQUFDLGtCQUFrQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTtZQUUxRCw0QkFBNEI7a0JBRDNCLGVBQWU7bUJBQUMsdUJBQXVCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO1lBRVMsOEJBQThCO2tCQUFyRyxTQUFTO21CQUFDLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBRXRFLG1DQUFtQztrQkFEbEMsU0FBUzttQkFBQyw0QkFBNEIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTs7a0ZBeEVoRSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7IERPV05fQVJST1csIEVOVEVSLCBFU0NBUEUsIFNQQUNFLCBUQUIsIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHtcclxuICBDZGtDb25uZWN0ZWRPdmVybGF5LFxyXG4gIENka092ZXJsYXlPcmlnaW4sXHJcbiAgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLFxyXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXJcclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCwgZnJvbUV2ZW50LCBtZXJnZSwgb2YgYXMgb2JzZXJ2YWJsZU9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwLCB0YWtlVW50aWwsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgc2xpZGVNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgTnpDb25maWdLZXksIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xyXG5pbXBvcnQgeyBOekZvcm1Ob1N0YXR1c1NlcnZpY2UsIE56Rm9ybVN0YXR1c1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvZm9ybSc7XHJcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgZ2V0UGxhY2VtZW50TmFtZSwgUE9TSVRJT05fTUFQLCBQT1NJVElPTl9UWVBFIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL292ZXJsYXknO1xyXG5pbXBvcnQgeyBjYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUsIHJlcUFuaW1GcmFtZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9wb2x5ZmlsbCc7XHJcbmltcG9ydCB7IE56RGVzdHJveVNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvc2VydmljZXMnO1xyXG5pbXBvcnQge1xyXG4gIEJvb2xlYW5JbnB1dCxcclxuICBOZ0NsYXNzSW50ZXJmYWNlLFxyXG4gIE56U2FmZUFueSxcclxuICBOelN0YXR1cyxcclxuICBOelZhbGlkYXRlU3RhdHVzLFxyXG4gIE9uQ2hhbmdlVHlwZSxcclxuICBPblRvdWNoZWRUeXBlXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgZ2V0U3RhdHVzQ2xhc3NOYW1lcywgSW5wdXRCb29sZWFuLCBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuXHJcbmltcG9ydCB7IEJwc09wdGlvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9vcHRpb24tZ3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnBzT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9vcHRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnBzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7XHJcbiAgTnpGaWx0ZXJPcHRpb25UeXBlLFxyXG4gIE56U2VsZWN0SXRlbUludGVyZmFjZSxcclxuICBOelNlbGVjdE1vZGVUeXBlLFxyXG4gIE56U2VsZWN0T3B0aW9uSW50ZXJmYWNlLFxyXG4gIE56U2VsZWN0UGxhY2VtZW50VHlwZVxyXG59IGZyb20gJy4vc2VsZWN0LnR5cGVzJztcclxuXHJcbmNvbnN0IGRlZmF1bHRGaWx0ZXJPcHRpb246IE56RmlsdGVyT3B0aW9uVHlwZSA9IChzZWFyY2hWYWx1ZTogc3RyaW5nLCBpdGVtOiBOelNlbGVjdEl0ZW1JbnRlcmZhY2UpOiBib29sZWFuID0+IHtcclxuICBpZiAoaXRlbSAmJiBpdGVtLmJwc0xhYmVsKSB7XHJcbiAgICByZXR1cm4gaXRlbS5icHNMYWJlbC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgTlpfQ09ORklHX01PRFVMRV9OQU1FOiBOekNvbmZpZ0tleSA9ICdzZWxlY3QnO1xyXG5cclxuZXhwb3J0IHR5cGUgTnpTZWxlY3RTaXplVHlwZSA9ICdsYXJnZScgfCAnZGVmYXVsdCcgfCAnc21hbGwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicHMtc2VsZWN0JyxcclxuICBleHBvcnRBczogJ2Jwc1NlbGVjdCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBOekRlc3Ryb3lTZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnBzU2VsZWN0Q29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnBzLXNlbGVjdC5jb21wb25lbnQuY3NzJ10sXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGJwcy1zZWxlY3QtdG9wLWNvbnRyb2xcclxuICAgICAgY2RrT3ZlcmxheU9yaWdpblxyXG4gICAgICAjb3JpZ2luPVwiY2RrT3ZlcmxheU9yaWdpblwiXHJcbiAgICAgIFticHNJZF09XCJicHNJZFwiXHJcbiAgICAgIFtvcGVuXT1cImJwc09wZW5cIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiYnBzRGlzYWJsZWRcIlxyXG4gICAgICBbbW9kZV09XCJicHNNb2RlXCJcclxuICAgICAgW0AuZGlzYWJsZWRdPVwiISFub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgICAgW21heFRhZ1BsYWNlaG9sZGVyXT1cImJwc01heFRhZ1BsYWNlaG9sZGVyXCJcclxuICAgICAgW3JlbW92ZUljb25dPVwiYnBzUmVtb3ZlSWNvblwiXHJcbiAgICAgIFtwbGFjZUhvbGRlcl09XCJicHNQbGFjZUhvbGRlclwiXHJcbiAgICAgIFttYXhUYWdDb3VudF09XCJicHNNYXhUYWdDb3VudFwiXHJcbiAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJicHNDdXN0b21UZW1wbGF0ZVwiXHJcbiAgICAgIFt0b2tlblNlcGFyYXRvcnNdPVwiYnBzVG9rZW5TZXBhcmF0b3JzXCJcclxuICAgICAgW3Nob3dTZWFyY2hdPVwiYnBzU2hvd1NlYXJjaFwiXHJcbiAgICAgIFthdXRvZm9jdXNdPVwiYnBzQXV0b0ZvY3VzXCJcclxuICAgICAgW2xpc3RPZlRvcEl0ZW1dPVwibGlzdE9mVG9wSXRlbVwiXHJcbiAgICAgIChpbnB1dFZhbHVlQ2hhbmdlKT1cIm9uSW5wdXRWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgKHRva2VuaXplKT1cIm9uVG9rZW5TZXBhcmF0ZSgkZXZlbnQpXCJcclxuICAgICAgKGRlbGV0ZUl0ZW0pPVwib25JdGVtRGVsZXRlKCRldmVudClcIlxyXG4gICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXHJcbiAgICA+PC9icHMtc2VsZWN0LXRvcC1jb250cm9sPlxyXG4gICAgPGJwcy1zZWxlY3QtYXJyb3dcclxuICAgICAgKm5nSWY9XCJicHNTaG93QXJyb3cgfHwgKGhhc0ZlZWRiYWNrICYmICEhc3RhdHVzKVwiXHJcbiAgICAgIFtzaG93QXJyb3ddPVwiYnBzU2hvd0Fycm93XCJcclxuICAgICAgW2xvYWRpbmddPVwiYnBzTG9hZGluZ1wiXHJcbiAgICAgIFtzZWFyY2hdPVwiYnBzT3BlbiAmJiBicHNTaG93U2VhcmNoXCJcclxuICAgICAgW3N1ZmZpeEljb25dPVwiYnBzU3VmZml4SWNvblwiXHJcbiAgICAgIFtmZWVkYmFja0ljb25dPVwiZmVlZGJhY2tJY29uVHBsXCJcclxuICAgID5cclxuICAgICAgPG5nLXRlbXBsYXRlICNmZWVkYmFja0ljb25UcGw+XHJcbiAgICAgICAgPGJwcy1mb3JtLWl0ZW0tZmVlZGJhY2staWNvbiAqbmdJZj1cImhhc0ZlZWRiYWNrICYmICEhc3RhdHVzXCIgW3N0YXR1c109XCJzdGF0dXNcIj48L2Jwcy1mb3JtLWl0ZW0tZmVlZGJhY2staWNvbj5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvYnBzLXNlbGVjdC1hcnJvdz5cclxuXHJcbiAgICA8YnBzLXNlbGVjdC1jbGVhclxyXG4gICAgICAqbmdJZj1cImJwc0FsbG93Q2xlYXIgJiYgIWJwc0Rpc2FibGVkICYmIGxpc3RPZlZhbHVlLmxlbmd0aFwiXHJcbiAgICAgIFtjbGVhckljb25dPVwiYnBzQ2xlYXJJY29uXCJcclxuICAgICAgKGNsZWFyKT1cIm9uQ2xlYXJTZWxlY3Rpb24oKVwiXHJcbiAgICA+PC9icHMtc2VsZWN0LWNsZWFyPlxyXG4gICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgIGNka0Nvbm5lY3RlZE92ZXJsYXlcclxuICAgICAgbnpDb25uZWN0ZWRPdmVybGF5XHJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5SGFzQmFja2Ryb3BdPVwiYnBzQmFja2Ryb3BcIlxyXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU1pbldpZHRoXT1cIiRhbnkoYnBzRHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoID8gbnVsbCA6IHRyaWdnZXJXaWR0aClcIlxyXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVdpZHRoXT1cIiRhbnkoYnBzRHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoID8gdHJpZ2dlcldpZHRoIDogbnVsbClcIlxyXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJvcmlnaW5cIlxyXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVRyYW5zZm9ybU9yaWdpbk9uXT1cIicuYW50LXNlbGVjdC1kcm9wZG93bidcIlxyXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBhbmVsQ2xhc3NdPVwiYnBzRHJvcGRvd25DbGFzc05hbWUhXCJcclxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cImJwc09wZW5cIlxyXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJwb3NpdGlvbnNcIlxyXG4gICAgICAob3ZlcmxheU91dHNpZGVDbGljayk9XCJvbkNsaWNrT3V0c2lkZSgkZXZlbnQpXCJcclxuICAgICAgKGRldGFjaCk9XCJzZXRPcGVuU3RhdGUoZmFsc2UpXCJcclxuICAgICAgKHBvc2l0aW9uQ2hhbmdlKT1cIm9uUG9zaXRpb25DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICA+XHJcbiAgICAgIDxicHMtb3B0aW9uLWNvbnRhaW5lclxyXG4gICAgICAgIFtuZ1N0eWxlXT1cImJwc0Ryb3Bkb3duU3R5bGVcIlxyXG4gICAgICAgIFtpdGVtU2l6ZV09XCJicHNPcHRpb25IZWlnaHRQeFwiXHJcbiAgICAgICAgW21heEl0ZW1MZW5ndGhdPVwiYnBzT3B0aW9uT3ZlcmZsb3dTaXplXCJcclxuICAgICAgICBbbWF0Y2hXaWR0aF09XCJicHNEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGhcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLXBsYWNlbWVudC1ib3R0b21MZWZ0XT1cImRyb3BEb3duUG9zaXRpb24gPT09ICdib3R0b21MZWZ0J1wiXHJcbiAgICAgICAgW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tcGxhY2VtZW50LXRvcExlZnRdPVwiZHJvcERvd25Qb3NpdGlvbiA9PT0gJ3RvcExlZnQnXCJcclxuICAgICAgICBbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1wbGFjZW1lbnQtYm90dG9tUmlnaHRdPVwiZHJvcERvd25Qb3NpdGlvbiA9PT0gJ2JvdHRvbVJpZ2h0J1wiXHJcbiAgICAgICAgW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tcGxhY2VtZW50LXRvcFJpZ2h0XT1cImRyb3BEb3duUG9zaXRpb24gPT09ICd0b3BSaWdodCdcIlxyXG4gICAgICAgIFtAc2xpZGVNb3Rpb25dPVwiJ2VudGVyJ1wiXHJcbiAgICAgICAgW0AuZGlzYWJsZWRdPVwiISFub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICAgICAgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gICAgICAgIFtsaXN0T2ZDb250YWluZXJJdGVtXT1cImxpc3RPZkNvbnRhaW5lckl0ZW1cIlxyXG4gICAgICAgIFttZW51SXRlbVNlbGVjdGVkSWNvbl09XCJicHNNZW51SXRlbVNlbGVjdGVkSWNvblwiXHJcbiAgICAgICAgW25vdEZvdW5kQ29udGVudF09XCJicHNOb3RGb3VuZENvbnRlbnRcIlxyXG4gICAgICAgIFthY3RpdmF0ZWRWYWx1ZV09XCJhY3RpdmF0ZWRWYWx1ZVwiXHJcbiAgICAgICAgW2xpc3RPZlNlbGVjdGVkVmFsdWVdPVwibGlzdE9mVmFsdWVcIlxyXG4gICAgICAgIFtkcm9wZG93blJlbmRlcl09XCJicHNEcm9wZG93blJlbmRlclwiXHJcbiAgICAgICAgW2NvbXBhcmVXaXRoXT1cImNvbXBhcmVXaXRoXCJcclxuICAgICAgICBbbW9kZV09XCJicHNNb2RlXCJcclxuICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXHJcbiAgICAgICAgKGl0ZW1DbGljayk9XCJvbkl0ZW1DbGljaygkZXZlbnQpXCJcclxuICAgICAgICAoc2Nyb2xsVG9Cb3R0b20pPVwiYnBzU2Nyb2xsVG9Cb3R0b20uZW1pdCgpXCJcclxuICAgICAgPjwvYnBzLW9wdGlvbi1jb250YWluZXI+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gIGAsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdhbnQtc2VsZWN0JyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1pbi1mb3JtLWl0ZW1dJzogJyEhbnpGb3JtU3RhdHVzU2VydmljZScsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtbGddJzogJ2Jwc1NpemUgPT09IFwibGFyZ2VcIicsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtc21dJzogJ2Jwc1NpemUgPT09IFwic21hbGxcIicsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtc2hvdy1hcnJvd10nOiBgYnBzU2hvd0Fycm93YCxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kaXNhYmxlZF0nOiAnYnBzRGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXNob3ctc2VhcmNoXSc6IGAoYnBzU2hvd1NlYXJjaCB8fCBicHNNb2RlICE9PSAnZGVmYXVsdCcpICYmICFicHNEaXNhYmxlZGAsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtYWxsb3ctY2xlYXJdJzogJ2Jwc0FsbG93Q2xlYXInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWJvcmRlcmxlc3NdJzogJ2Jwc0JvcmRlcmxlc3MnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LW9wZW5dJzogJ2Jwc09wZW4nLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWZvY3VzZWRdJzogJ2Jwc09wZW4gfHwgZm9jdXNlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtc2luZ2xlXSc6IGBicHNNb2RlID09PSAnZGVmYXVsdCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LW11bHRpcGxlXSc6IGBicHNNb2RlICE9PSAnZGVmYXVsdCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXJ0bF0nOiBgZGlyID09PSAncnRsJ2BcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgcmVhZG9ubHkgX256TW9kdWxlTmFtZTogTnpDb25maWdLZXkgPSBOWl9DT05GSUdfTU9EVUxFX05BTUU7XHJcblxyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNBbGxvd0NsZWFyOiBCb29sZWFuSW5wdXQ7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc0JvcmRlcmxlc3M6IEJvb2xlYW5JbnB1dDtcclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYnBzU2hvd1NlYXJjaDogQm9vbGVhbklucHV0O1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNMb2FkaW5nOiBCb29sZWFuSW5wdXQ7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc0F1dG9Gb2N1czogQm9vbGVhbklucHV0O1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNBdXRvQ2xlYXJTZWFyY2hWYWx1ZTogQm9vbGVhbklucHV0O1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNTZXJ2ZXJTZWFyY2g6IEJvb2xlYW5JbnB1dDtcclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYnBzRGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYnBzT3BlbjogQm9vbGVhbklucHV0O1xyXG5cclxuICBASW5wdXQoKSBicHNJZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgYnBzU2l6ZTogTnpTZWxlY3RTaXplVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBicHNTdGF0dXM6IE56U3RhdHVzID0gJyc7XHJcbiAgQElucHV0KCkgYnBzT3B0aW9uSGVpZ2h0UHggPSAyMztcclxuICBASW5wdXQoKSBicHNPcHRpb25PdmVyZmxvd1NpemUgPSA4O1xyXG4gIEBJbnB1dCgpIGJwc0Ryb3Bkb3duQ2xhc3NOYW1lOiBzdHJpbmdbXSB8IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGJwc0Ryb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCA9IHRydWU7XHJcbiAgQElucHV0KCkgYnBzRHJvcGRvd25TdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGJwc05vdEZvdW5kQ29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKSBicHNQbGFjZUhvbGRlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGJwc1BsYWNlbWVudDogTnpTZWxlY3RQbGFjZW1lbnRUeXBlIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgYnBzTWF4VGFnQ291bnQgPSBJbmZpbml0eTtcclxuICBASW5wdXQoKSBicHNEcm9wZG93blJlbmRlcjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGJwc0N1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpTZWxlY3RJdGVtSW50ZXJmYWNlIH0+IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KClcclxuICBAV2l0aENvbmZpZzxUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgc3RyaW5nIHwgbnVsbD4oKVxyXG4gIGJwc1N1ZmZpeEljb246IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBicHNDbGVhckljb246IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBicHNSZW1vdmVJY29uOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgYnBzTWVudUl0ZW1TZWxlY3RlZEljb246IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBicHNUb2tlblNlcGFyYXRvcnM6IHN0cmluZ1tdID0gW107XHJcbiAgQElucHV0KCkgYnBzTWF4VGFnUGxhY2Vob2xkZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelNhZmVBbnlbXSB9PiB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGJwc01heE11bHRpcGxlQ291bnQgPSBJbmZpbml0eTtcclxuICBASW5wdXQoKSBicHNNb2RlOiBOelNlbGVjdE1vZGVUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIGJwc0ZpbHRlck9wdGlvbjogTnpGaWx0ZXJPcHRpb25UeXBlID0gZGVmYXVsdEZpbHRlck9wdGlvbjtcclxuICBASW5wdXQoKSBjb21wYXJlV2l0aDogKG8xOiBOelNhZmVBbnksIG8yOiBOelNhZmVBbnkpID0+IGJvb2xlYW4gPSAobzE6IE56U2FmZUFueSwgbzI6IE56U2FmZUFueSkgPT4gbzEgPT09IG8yO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNBbGxvd0NsZWFyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWc8Ym9vbGVhbj4oKSBASW5wdXRCb29sZWFuKCkgYnBzQm9yZGVybGVzcyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNTaG93U2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0xvYWRpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzQXV0b0ZvY3VzID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0F1dG9DbGVhclNlYXJjaFZhbHVlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzU2VydmVyU2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc09wZW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzU2VsZWN0T25UYWIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZzxib29sZWFuPigpIEBJbnB1dEJvb2xlYW4oKSBicHNCYWNrZHJvcCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGJwc09wdGlvbnM6IE56U2VsZWN0T3B0aW9uSW50ZXJmYWNlW10gPSBbXTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYnBzU2hvd0Fycm93KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9icHNTaG93QXJyb3cgPSB2YWx1ZTtcclxuICB9XHJcbiAgZ2V0IGJwc1Nob3dBcnJvdygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9icHNTaG93QXJyb3cgPT09IHVuZGVmaW5lZCA/IHRoaXMuYnBzTW9kZSA9PT0gJ2RlZmF1bHQnIDogdGhpcy5fYnBzU2hvd0Fycm93O1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc09uU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc1Njcm9sbFRvQm90dG9tID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNCbHVyID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNGb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAVmlld0NoaWxkKENka092ZXJsYXlPcmlnaW4sIHsgc3RhdGljOiB0cnVlLCByZWFkOiBFbGVtZW50UmVmIH0pIG9yaWdpbkVsZW1lbnQhOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoQ2RrQ29ubmVjdGVkT3ZlcmxheSwgeyBzdGF0aWM6IHRydWUgfSkgY2RrQ29ubmVjdGVkT3ZlcmxheSE6IENka0Nvbm5lY3RlZE92ZXJsYXk7XHJcbiAgQFZpZXdDaGlsZChCcHNTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSBicHNTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50ITogQnBzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudDtcclxuICBAQ29udGVudENoaWxkcmVuKEJwc09wdGlvbkNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZOek9wdGlvbkNvbXBvbmVudCE6IFF1ZXJ5TGlzdDxCcHNPcHRpb25Db21wb25lbnQ+O1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQnBzT3B0aW9uR3JvdXBDb21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcclxuICBsaXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50ITogUXVlcnlMaXN0PEJwc09wdGlvbkdyb3VwQ29tcG9uZW50PjtcclxuICBAVmlld0NoaWxkKEJwc09wdGlvbkdyb3VwQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSwgcmVhZDogRWxlbWVudFJlZiB9KSBicHNPcHRpb25Hcm91cENvbXBvbmVudEVsZW1lbnQhOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoQnBzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUsIHJlYWQ6IEVsZW1lbnRSZWYgfSlcclxuICBicHNTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50RWxlbWVudCE6IEVsZW1lbnRSZWY7XHJcbiAgcHJpdmF0ZSBsaXN0T2ZWYWx1ZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE56U2FmZUFueVtdPihbXSk7XHJcbiAgcHJpdmF0ZSBsaXN0T2ZUZW1wbGF0ZUl0ZW0kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOelNlbGVjdEl0ZW1JbnRlcmZhY2VbXT4oW10pO1xyXG4gIHByaXZhdGUgbGlzdE9mVGFnQW5kVGVtcGxhdGVJdGVtOiBOelNlbGVjdEl0ZW1JbnRlcmZhY2VbXSA9IFtdO1xyXG4gIHByaXZhdGUgc2VhcmNoVmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gIHByaXZhdGUgaXNSZWFjdGl2ZURyaXZlbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgdmFsdWU6IE56U2FmZUFueSB8IE56U2FmZUFueVtdO1xyXG4gIHByaXZhdGUgX2Jwc1Nob3dBcnJvdzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIHJlcXVlc3RJZDogbnVtYmVyID0gLTE7XHJcbiAgcHJpdmF0ZSBpc056RGlzYWJsZUZpcnN0Q2hhbmdlOiBib29sZWFuID0gdHJ1ZTtcclxuICBvbkNoYW5nZTogT25DaGFuZ2VUeXBlID0gKCkgPT4ge307XHJcbiAgb25Ub3VjaGVkOiBPblRvdWNoZWRUeXBlID0gKCkgPT4ge307XHJcbiAgZHJvcERvd25Qb3NpdGlvbjogTnpTZWxlY3RQbGFjZW1lbnRUeXBlID0gJ2JvdHRvbUxlZnQnO1xyXG4gIHRyaWdnZXJXaWR0aDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgbGlzdE9mQ29udGFpbmVySXRlbTogTnpTZWxlY3RJdGVtSW50ZXJmYWNlW10gPSBbXTtcclxuICBsaXN0T2ZUb3BJdGVtOiBOelNlbGVjdEl0ZW1JbnRlcmZhY2VbXSA9IFtdO1xyXG4gIGFjdGl2YXRlZFZhbHVlOiBOelNhZmVBbnkgfCBudWxsID0gbnVsbDtcclxuICBsaXN0T2ZWYWx1ZTogTnpTYWZlQW55W10gPSBbXTtcclxuICBmb2N1c2VkID0gZmFsc2U7XHJcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcclxuICBwb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFtdO1xyXG5cclxuICAvLyBzdGF0dXNcclxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtc2VsZWN0JztcclxuICBzdGF0dXNDbHM6IE5nQ2xhc3NJbnRlcmZhY2UgPSB7fTtcclxuICBzdGF0dXM6IE56VmFsaWRhdGVTdGF0dXMgPSAnJztcclxuICBoYXNGZWVkYmFjazogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBnZW5lcmF0ZVRhZ0l0ZW0odmFsdWU6IHN0cmluZyk6IE56U2VsZWN0SXRlbUludGVyZmFjZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBicHNWYWx1ZTogdmFsdWUsXHJcbiAgICAgIGJwc0xhYmVsOiB2YWx1ZSxcclxuICAgICAgdHlwZTogJ2l0ZW0nXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgb25JdGVtQ2xpY2sodmFsdWU6IE56U2FmZUFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmF0ZWRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMuYnBzTW9kZSA9PT0gJ2RlZmF1bHQnKSB7XHJcbiAgICAgIGlmICh0aGlzLmxpc3RPZlZhbHVlLmxlbmd0aCA9PT0gMCB8fCAhdGhpcy5jb21wYXJlV2l0aCh0aGlzLmxpc3RPZlZhbHVlWzBdLCB2YWx1ZSkpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxpc3RPZlZhbHVlKFt2YWx1ZV0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0T3BlblN0YXRlKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gdGhpcy5saXN0T2ZWYWx1ZS5maW5kSW5kZXgobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8sIHZhbHVlKSk7XHJcbiAgICAgIGlmICh0YXJnZXRJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICBjb25zdCBsaXN0T2ZWYWx1ZUFmdGVyUmVtb3ZlZCA9IHRoaXMubGlzdE9mVmFsdWUuZmlsdGVyKChfLCBpKSA9PiBpICE9PSB0YXJnZXRJbmRleCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMaXN0T2ZWYWx1ZShsaXN0T2ZWYWx1ZUFmdGVyUmVtb3ZlZCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5saXN0T2ZWYWx1ZS5sZW5ndGggPCB0aGlzLmJwc01heE11bHRpcGxlQ291bnQpIHtcclxuICAgICAgICBjb25zdCBsaXN0T2ZWYWx1ZUFmdGVyQWRkZWQgPSBbLi4udGhpcy5saXN0T2ZWYWx1ZSwgdmFsdWVdO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGlzdE9mVmFsdWUobGlzdE9mVmFsdWVBZnRlckFkZGVkKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICAgIGlmICh0aGlzLmJwc0F1dG9DbGVhclNlYXJjaFZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhcklucHV0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uSXRlbURlbGV0ZShpdGVtOiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnN0IGxpc3RPZlNlbGVjdGVkVmFsdWUgPSB0aGlzLmxpc3RPZlZhbHVlLmZpbHRlcih2ID0+ICF0aGlzLmNvbXBhcmVXaXRoKHYsIGl0ZW0uYnBzVmFsdWUpKTtcclxuICAgIHRoaXMudXBkYXRlTGlzdE9mVmFsdWUobGlzdE9mU2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICB0aGlzLmNsZWFySW5wdXQoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUxpc3RPZkNvbnRhaW5lckl0ZW0oKTogdm9pZCB7XHJcbiAgICBsZXQgbGlzdE9mQ29udGFpbmVySXRlbSA9IHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVJdGVtXHJcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiAhaXRlbS5icHNIaWRlKVxyXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5icHNTZXJ2ZXJTZWFyY2ggJiYgdGhpcy5zZWFyY2hWYWx1ZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuYnBzRmlsdGVyT3B0aW9uKHRoaXMuc2VhcmNoVmFsdWUsIGl0ZW0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgaWYgKHRoaXMuYnBzTW9kZSA9PT0gJ3RhZ3MnICYmIHRoaXMuc2VhcmNoVmFsdWUpIHtcclxuICAgICAgY29uc3QgbWF0Y2hlZEl0ZW0gPSB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlSXRlbS5maW5kKGl0ZW0gPT4gaXRlbS5icHNMYWJlbCA9PT0gdGhpcy5zZWFyY2hWYWx1ZSk7XHJcbiAgICAgIGlmICghbWF0Y2hlZEl0ZW0pIHtcclxuICAgICAgICBjb25zdCB0YWdJdGVtID0gdGhpcy5nZW5lcmF0ZVRhZ0l0ZW0odGhpcy5zZWFyY2hWYWx1ZSk7XHJcbiAgICAgICAgbGlzdE9mQ29udGFpbmVySXRlbSA9IFt0YWdJdGVtLCAuLi5saXN0T2ZDb250YWluZXJJdGVtXTtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlZFZhbHVlID0gdGFnSXRlbS5icHNWYWx1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlZFZhbHVlID0gbWF0Y2hlZEl0ZW0uYnBzVmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGFjdGl2YXRlZEl0ZW0gPVxyXG4gICAgICBsaXN0T2ZDb250YWluZXJJdGVtLmZpbmQoaXRlbSA9PiBpdGVtLmJwc0xhYmVsID09PSB0aGlzLnNlYXJjaFZhbHVlKSB8fFxyXG4gICAgICBsaXN0T2ZDb250YWluZXJJdGVtLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0uYnBzVmFsdWUsIHRoaXMuYWN0aXZhdGVkVmFsdWUpKSB8fFxyXG4gICAgICBsaXN0T2ZDb250YWluZXJJdGVtLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0uYnBzVmFsdWUsIHRoaXMubGlzdE9mVmFsdWVbMF0pKSB8fFxyXG4gICAgICBsaXN0T2ZDb250YWluZXJJdGVtWzBdO1xyXG4gICAgdGhpcy5hY3RpdmF0ZWRWYWx1ZSA9IChhY3RpdmF0ZWRJdGVtICYmIGFjdGl2YXRlZEl0ZW0uYnBzVmFsdWUpIHx8IG51bGw7XHJcbiAgICBsZXQgbGlzdE9mR3JvdXBMYWJlbDogQXJyYXk8c3RyaW5nIHwgbnVtYmVyIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGw+ID0gW107XHJcbiAgICBpZiAodGhpcy5pc1JlYWN0aXZlRHJpdmVuKSB7XHJcbiAgICAgIGxpc3RPZkdyb3VwTGFiZWwgPSBbLi4ubmV3IFNldCh0aGlzLmJwc09wdGlvbnMuZmlsdGVyKG8gPT4gby5ncm91cExhYmVsKS5tYXAobyA9PiBvLmdyb3VwTGFiZWwhKSldO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudCkge1xyXG4gICAgICAgIGxpc3RPZkdyb3VwTGFiZWwgPSB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQubWFwKG8gPT4gby5icHNMYWJlbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKiBpbnNlcnQgZ3JvdXAgaXRlbSAqKi9cclxuICAgIGxpc3RPZkdyb3VwTGFiZWwuZm9yRWFjaChsYWJlbCA9PiB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gbGlzdE9mQ29udGFpbmVySXRlbS5maW5kSW5kZXgoaXRlbSA9PiBsYWJlbCA9PT0gaXRlbS5ncm91cExhYmVsKTtcclxuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICBjb25zdCBncm91cEl0ZW0gPSB7IGdyb3VwTGFiZWw6IGxhYmVsLCB0eXBlOiAnZ3JvdXAnLCBrZXk6IGxhYmVsIH0gYXMgTnpTZWxlY3RJdGVtSW50ZXJmYWNlO1xyXG4gICAgICAgIGxpc3RPZkNvbnRhaW5lckl0ZW0uc3BsaWNlKGluZGV4LCAwLCBncm91cEl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMubGlzdE9mQ29udGFpbmVySXRlbSA9IFsuLi5saXN0T2ZDb250YWluZXJJdGVtXTtcclxuICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJJbnB1dCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYnBzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5jbGVhcklucHV0VmFsdWUoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUxpc3RPZlZhbHVlKGxpc3RPZlZhbHVlOiBOelNhZmVBbnlbXSk6IHZvaWQge1xyXG4gICAgY29uc3QgY292ZXJ0TGlzdFRvTW9kZWwgPSAobGlzdDogTnpTYWZlQW55W10sIG1vZGU6IE56U2VsZWN0TW9kZVR5cGUpOiBOelNhZmVBbnlbXSB8IE56U2FmZUFueSA9PiB7XHJcbiAgICAgIGlmIChtb2RlID09PSAnZGVmYXVsdCcpIHtcclxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gbGlzdFswXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbW9kZWwgPSBjb3ZlcnRMaXN0VG9Nb2RlbChsaXN0T2ZWYWx1ZSwgdGhpcy5icHNNb2RlKTtcclxuICAgIGlmICh0aGlzLnZhbHVlICE9PSBtb2RlbCkge1xyXG4gICAgICB0aGlzLmxpc3RPZlZhbHVlID0gbGlzdE9mVmFsdWU7XHJcbiAgICAgIHRoaXMubGlzdE9mVmFsdWUkLm5leHQobGlzdE9mVmFsdWUpO1xyXG4gICAgICB0aGlzLnZhbHVlID0gbW9kZWw7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblRva2VuU2VwYXJhdGUobGlzdE9mTGFiZWw6IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICBjb25zdCBsaXN0T2ZNYXRjaGVkVmFsdWUgPSB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlSXRlbVxyXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gbGlzdE9mTGFiZWwuZmluZEluZGV4KGxhYmVsID0+IGxhYmVsID09PSBpdGVtLmJwc0xhYmVsKSAhPT0gLTEpXHJcbiAgICAgIC5tYXAoaXRlbSA9PiBpdGVtLmJwc1ZhbHVlKVxyXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gdGhpcy5saXN0T2ZWYWx1ZS5maW5kSW5kZXgodiA9PiB0aGlzLmNvbXBhcmVXaXRoKHYsIGl0ZW0pKSA9PT0gLTEpO1xyXG4gICAgaWYgKHRoaXMuYnBzTW9kZSA9PT0gJ211bHRpcGxlJykge1xyXG4gICAgICB0aGlzLnVwZGF0ZUxpc3RPZlZhbHVlKFsuLi50aGlzLmxpc3RPZlZhbHVlLCAuLi5saXN0T2ZNYXRjaGVkVmFsdWVdKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5icHNNb2RlID09PSAndGFncycpIHtcclxuICAgICAgY29uc3QgbGlzdE9mVW5NYXRjaGVkTGFiZWwgPSBsaXN0T2ZMYWJlbC5maWx0ZXIoXHJcbiAgICAgICAgbGFiZWwgPT4gdGhpcy5saXN0T2ZUYWdBbmRUZW1wbGF0ZUl0ZW0uZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5icHNMYWJlbCA9PT0gbGFiZWwpID09PSAtMVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnVwZGF0ZUxpc3RPZlZhbHVlKFsuLi50aGlzLmxpc3RPZlZhbHVlLCAuLi5saXN0T2ZNYXRjaGVkVmFsdWUsIC4uLmxpc3RPZlVuTWF0Y2hlZExhYmVsXSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNsZWFySW5wdXQoKTtcclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5icHNEaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBsaXN0T2ZGaWx0ZXJlZE9wdGlvbk5vdERpc2FibGVkID0gdGhpcy5saXN0T2ZDb250YWluZXJJdGVtXHJcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLnR5cGUgPT09ICdpdGVtJylcclxuICAgICAgLmZpbHRlcihpdGVtID0+ICFpdGVtLmJwc0Rpc2FibGVkKTtcclxuICAgIGNvbnN0IGFjdGl2YXRlZEluZGV4ID0gbGlzdE9mRmlsdGVyZWRPcHRpb25Ob3REaXNhYmxlZC5maW5kSW5kZXgoaXRlbSA9PlxyXG4gICAgICB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0uYnBzVmFsdWUsIHRoaXMuYWN0aXZhdGVkVmFsdWUpXHJcbiAgICApO1xyXG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgY2FzZSBVUF9BUlJPVzpcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuYnBzT3BlbiAmJiBsaXN0T2ZGaWx0ZXJlZE9wdGlvbk5vdERpc2FibGVkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGNvbnN0IHByZUluZGV4ID0gYWN0aXZhdGVkSW5kZXggPiAwID8gYWN0aXZhdGVkSW5kZXggLSAxIDogbGlzdE9mRmlsdGVyZWRPcHRpb25Ob3REaXNhYmxlZC5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmF0ZWRWYWx1ZSA9IGxpc3RPZkZpbHRlcmVkT3B0aW9uTm90RGlzYWJsZWRbcHJlSW5kZXhdLmJwc1ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBET1dOX0FSUk9XOlxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAodGhpcy5icHNPcGVuICYmIGxpc3RPZkZpbHRlcmVkT3B0aW9uTm90RGlzYWJsZWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gYWN0aXZhdGVkSW5kZXggPCBsaXN0T2ZGaWx0ZXJlZE9wdGlvbk5vdERpc2FibGVkLmxlbmd0aCAtIDEgPyBhY3RpdmF0ZWRJbmRleCArIDEgOiAwO1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmF0ZWRWYWx1ZSA9IGxpc3RPZkZpbHRlcmVkT3B0aW9uTm90RGlzYWJsZWRbbmV4dEluZGV4XS5icHNWYWx1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVOVEVSOlxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAodGhpcy5icHNPcGVuKSB7XHJcbiAgICAgICAgICBpZiAoaXNOb3ROaWwodGhpcy5hY3RpdmF0ZWRWYWx1ZSkgJiYgYWN0aXZhdGVkSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25JdGVtQ2xpY2sodGhpcy5hY3RpdmF0ZWRWYWx1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTUEFDRTpcclxuICAgICAgICBpZiAoIXRoaXMuYnBzT3Blbikge1xyXG4gICAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUodHJ1ZSk7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFRBQjpcclxuICAgICAgICBpZiAodGhpcy5icHNTZWxlY3RPblRhYikge1xyXG4gICAgICAgICAgaWYgKHRoaXMuYnBzT3Blbikge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmIChpc05vdE5pbCh0aGlzLmFjdGl2YXRlZFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgIHRoaXMub25JdGVtQ2xpY2sodGhpcy5hY3RpdmF0ZWRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFU0NBUEU6XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2tpcCB0aGUgRVNDQVBFIHByb2Nlc3NpbmcsIGl0IHdpbGwgYmUgaGFuZGxlZCBpbiB7QGxpbmsgb25PdmVybGF5S2V5RG93bn0uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgaWYgKCF0aGlzLmJwc09wZW4pIHtcclxuICAgICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldE9wZW5TdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYnBzT3BlbiAhPT0gdmFsdWUpIHtcclxuICAgICAgdGhpcy5icHNPcGVuID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuYnBzT3BlbkNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgICAgdGhpcy5vbk9wZW5DaGFuZ2UoKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbk9wZW5DaGFuZ2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTtcclxuICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xyXG4gIH1cclxuXHJcbiAgb25JbnB1dFZhbHVlQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VhcmNoVmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlTGlzdE9mQ29udGFpbmVySXRlbSgpO1xyXG4gICAgdGhpcy5icHNPblNlYXJjaC5lbWl0KHZhbHVlKTtcclxuICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgb25DbGVhclNlbGVjdGlvbigpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlTGlzdE9mVmFsdWUoW10pO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja091dHNpZGUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkge1xyXG4gICAgICB0aGlzLnNldE9wZW5TdGF0ZShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb2N1cygpOiB2b2lkIHtcclxuICAgIHRoaXMuYnBzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgYmx1cigpOiB2b2lkIHtcclxuICAgIHRoaXMuYnBzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5ibHVyKCk7XHJcbiAgfVxyXG5cclxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBsYWNlbWVudCA9IGdldFBsYWNlbWVudE5hbWUocG9zaXRpb24pO1xyXG4gICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gcGxhY2VtZW50IGFzIE56U2VsZWN0UGxhY2VtZW50VHlwZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgdGhpcy5vcmlnaW5FbGVtZW50Lm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgY29uc3QgdHJpZ2dlcldpZHRoID0gdGhpcy50cmlnZ2VyV2lkdGg7XHJcbiAgICAgIGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlcXVlc3RJZCk7XHJcbiAgICAgIHRoaXMucmVxdWVzdElkID0gcmVxQW5pbUZyYW1lKCgpID0+IHtcclxuICAgICAgICAvLyBCbGluayB0cmlnZ2VycyBzdHlsZSBhbmQgbGF5b3V0IHBpcGVsaW5lcyBhbnl0aW1lIHRoZSBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClgIGlzIGNhbGxlZCwgd2hpY2ggbWF5IGNhdXNlIGFcclxuICAgICAgICAvLyBmcmFtZSBkcm9wLiBUaGF0J3Mgd2h5IGl0J3Mgc2NoZWR1bGVkIHRocm91Z2ggdGhlIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIHRvIHVubG9hZCB0aGUgY29tcG9zaXRlIHRocmVhZC5cclxuICAgICAgICB0aGlzLnRyaWdnZXJXaWR0aCA9IHRoaXMub3JpZ2luRWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgICAgIGlmICh0cmlnZ2VyV2lkdGggIT09IHRoaXMudHJpZ2dlcldpZHRoKSB7XHJcbiAgICAgICAgICAvLyBUaGUgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAgd2lsbCB0cmlnZ2VyIGNoYW5nZSBkZXRlY3Rpb24sIGJ1dCB3ZSdyZSBpbnNpZGUgYW4gYE9uUHVzaGAgY29tcG9uZW50IHdoaWNoIHdvbid0IGhhdmVcclxuICAgICAgICAgIC8vIHRoZSBgQ2hlY2tzRW5hYmxlZGAgc3RhdGUuIENhbGxpbmcgYG1hcmtGb3JDaGVjaygpYCB3aWxsIGFsbG93IEFuZ3VsYXIgdG8gcnVuIHRoZSBjaGFuZ2UgZGV0ZWN0aW9uIGZyb20gdGhlIHJvb3QgY29tcG9uZW50XHJcbiAgICAgICAgICAvLyBkb3duIHRvIHRoZSBgbnotc2VsZWN0YC4gQnV0IHdlJ2xsIHRyaWdnZXIgb25seSBsb2NhbCBjaGFuZ2UgZGV0ZWN0aW9uIGlmIHRoZSBgdHJpZ2dlcldpZHRoYCBoYXMgYmVlbiBjaGFuZ2VkLlxyXG4gICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zKCk6IHZvaWQge1xyXG4gICAgcmVxQW5pbUZyYW1lKCgpID0+IHtcclxuICAgICAgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Py5vdmVybGF5UmVmPy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIGRlc3Ryb3kkOiBOekRlc3Ryb3lTZXJ2aWNlLFxyXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBob3N0OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgcHJpdmF0ZSBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcixcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxyXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIG56Rm9ybVN0YXR1c1NlcnZpY2U/OiBOekZvcm1TdGF0dXNTZXJ2aWNlLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuekZvcm1Ob1N0YXR1c1NlcnZpY2U/OiBOekZvcm1Ob1N0YXR1c1NlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIHdyaXRlVmFsdWUobW9kZWxWYWx1ZTogTnpTYWZlQW55IHwgTnpTYWZlQW55W10pOiB2b2lkIHtcclxuICAgIC8qKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNDk4OCAqKi9cclxuICAgIGlmICh0aGlzLnZhbHVlICE9PSBtb2RlbFZhbHVlKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBtb2RlbFZhbHVlO1xyXG4gICAgICBjb25zdCBjb3ZlcnRNb2RlbFRvTGlzdCA9IChtb2RlbDogTnpTYWZlQW55W10gfCBOelNhZmVBbnksIG1vZGU6IE56U2VsZWN0TW9kZVR5cGUpOiBOelNhZmVBbnlbXSA9PiB7XHJcbiAgICAgICAgaWYgKG1vZGVsID09PSBudWxsIHx8IG1vZGVsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdkZWZhdWx0Jykge1xyXG4gICAgICAgICAgcmV0dXJuIFttb2RlbF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBtb2RlbDtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IGxpc3RPZlZhbHVlID0gY292ZXJ0TW9kZWxUb0xpc3QobW9kZWxWYWx1ZSwgdGhpcy5icHNNb2RlKTtcclxuICAgICAgdGhpcy5saXN0T2ZWYWx1ZSA9IGxpc3RPZlZhbHVlO1xyXG4gICAgICB0aGlzLmxpc3RPZlZhbHVlJC5uZXh0KGxpc3RPZlZhbHVlKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBPbkNoYW5nZVR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBPblRvdWNoZWRUeXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5icHNEaXNhYmxlZCA9ICh0aGlzLmlzTnpEaXNhYmxlRmlyc3RDaGFuZ2UgJiYgdGhpcy5icHNEaXNhYmxlZCkgfHwgZGlzYWJsZWQ7XHJcbiAgICB0aGlzLmlzTnpEaXNhYmxlRmlyc3RDaGFuZ2UgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLmJwc0Rpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuc2V0T3BlblN0YXRlKGZhbHNlKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBicHNPcGVuLCBicHNEaXNhYmxlZCwgYnBzT3B0aW9ucywgYnBzU3RhdHVzLCBicHNQbGFjZW1lbnQgfSA9IGNoYW5nZXM7XHJcbiAgICBpZiAoYnBzT3Blbikge1xyXG4gICAgICB0aGlzLm9uT3BlbkNoYW5nZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGJwc0Rpc2FibGVkICYmIHRoaXMuYnBzRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgaWYgKGJwc09wdGlvbnMpIHtcclxuICAgICAgdGhpcy5pc1JlYWN0aXZlRHJpdmVuID0gdHJ1ZTtcclxuICAgICAgY29uc3QgbGlzdE9mT3B0aW9ucyA9IHRoaXMuYnBzT3B0aW9ucyB8fCBbXTtcclxuICAgICAgY29uc3QgbGlzdE9mVHJhbnNmb3JtZWRJdGVtID0gbGlzdE9mT3B0aW9ucy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRlbXBsYXRlOiBpdGVtLmxhYmVsIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYgPyBpdGVtLmxhYmVsIDogbnVsbCxcclxuICAgICAgICAgIGJwc1RpdGxlOiB0aGlzLmdldFRpdGxlKGl0ZW0udGl0bGUsIGl0ZW0ubGFiZWwpLFxyXG4gICAgICAgICAgYnBzTGFiZWw6IHR5cGVvZiBpdGVtLmxhYmVsID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgaXRlbS5sYWJlbCA9PT0gJ251bWJlcicgPyBpdGVtLmxhYmVsIDogbnVsbCxcclxuICAgICAgICAgIGJwc1ZhbHVlOiBpdGVtLnZhbHVlLFxyXG4gICAgICAgICAgYnBzRGlzYWJsZWQ6IGl0ZW0uZGlzYWJsZWQgfHwgZmFsc2UsXHJcbiAgICAgICAgICBicHNIaWRlOiBpdGVtLmhpZGUgfHwgZmFsc2UsXHJcbiAgICAgICAgICBicHNDdXN0b21Db250ZW50OiBpdGVtLmxhYmVsIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYsXHJcbiAgICAgICAgICBncm91cExhYmVsOiBpdGVtLmdyb3VwTGFiZWwgfHwgbnVsbCxcclxuICAgICAgICAgIHR5cGU6ICdpdGVtJyxcclxuICAgICAgICAgIGtleTogaXRlbS5rZXkgPT09IHVuZGVmaW5lZCA/IGl0ZW0udmFsdWUgOiBpdGVtLmtleVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmxpc3RPZlRlbXBsYXRlSXRlbSQubmV4dChsaXN0T2ZUcmFuc2Zvcm1lZEl0ZW0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGJwc1N0YXR1cykge1xyXG4gICAgICB0aGlzLnNldFN0YXR1c1N0eWxlcyh0aGlzLmJwc1N0YXR1cywgdGhpcy5oYXNGZWVkYmFjayk7XHJcbiAgICB9XHJcbiAgICBpZiAoYnBzUGxhY2VtZW50KSB7XHJcbiAgICAgIGNvbnN0IHsgY3VycmVudFZhbHVlIH0gPSBicHNQbGFjZW1lbnQ7XHJcbiAgICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IGN1cnJlbnRWYWx1ZSBhcyBOelNlbGVjdFBsYWNlbWVudFR5cGU7XHJcbiAgICAgIGNvbnN0IGxpc3RPZlBsYWNlbWVudCA9IFsnYm90dG9tTGVmdCcsICd0b3BMZWZ0JywgJ2JvdHRvbVJpZ2h0JywgJ3RvcFJpZ2h0J107XHJcbiAgICAgIGlmIChjdXJyZW50VmFsdWUgJiYgbGlzdE9mUGxhY2VtZW50LmluY2x1ZGVzKGN1cnJlbnRWYWx1ZSkpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9ucyA9IFtQT1NJVElPTl9NQVBbY3VycmVudFZhbHVlIGFzIFBPU0lUSU9OX1RZUEVdXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9ucyA9IGxpc3RPZlBsYWNlbWVudC5tYXAoZSA9PiBQT1NJVElPTl9NQVBbZSBhcyBQT1NJVElPTl9UWVBFXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uekZvcm1TdGF0dXNTZXJ2aWNlPy5mb3JtU3RhdHVzQ2hhbmdlc1xyXG4gICAgICAucGlwZShcclxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgocHJlLCBjdXIpID0+IHtcclxuICAgICAgICAgIHJldHVybiBwcmUuc3RhdHVzID09PSBjdXIuc3RhdHVzICYmIHByZS5oYXNGZWVkYmFjayA9PT0gY3VyLmhhc0ZlZWRiYWNrO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMubnpGb3JtTm9TdGF0dXNTZXJ2aWNlID8gdGhpcy5uekZvcm1Ob1N0YXR1c1NlcnZpY2Uubm9Gb3JtU3RhdHVzIDogb2JzZXJ2YWJsZU9mKGZhbHNlKSksXHJcbiAgICAgICAgbWFwKChbeyBzdGF0dXMsIGhhc0ZlZWRiYWNrIH0sIG5vU3RhdHVzXSkgPT4gKHsgc3RhdHVzOiBub1N0YXR1cyA/ICcnIDogc3RhdHVzLCBoYXNGZWVkYmFjayB9KSksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoeyBzdGF0dXMsIGhhc0ZlZWRiYWNrIH0pID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXR1c1N0eWxlcyhzdGF0dXMsIGhhc0ZlZWRiYWNrKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5mb2N1c01vbml0b3JcclxuICAgICAgLm1vbml0b3IodGhpcy5ob3N0LCB0cnVlKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoZm9jdXNPcmlnaW4gPT4ge1xyXG4gICAgICAgIGlmICghZm9jdXNPcmlnaW4pIHtcclxuICAgICAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgICB0aGlzLmJwc0JsdXIuZW1pdCgpO1xyXG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgdGhpcy5icHNGb2N1cy5lbWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIGNvbWJpbmVMYXRlc3QoW3RoaXMubGlzdE9mVmFsdWUkLCB0aGlzLmxpc3RPZlRlbXBsYXRlSXRlbSRdKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKFtsaXN0T2ZTZWxlY3RlZFZhbHVlLCBsaXN0T2ZUZW1wbGF0ZUl0ZW1dKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlzdE9mVGFnSXRlbSA9IGxpc3RPZlNlbGVjdGVkVmFsdWVcclxuICAgICAgICAgIC5maWx0ZXIoKCkgPT4gdGhpcy5icHNNb2RlID09PSAndGFncycpXHJcbiAgICAgICAgICAuZmlsdGVyKHZhbHVlID0+IGxpc3RPZlRlbXBsYXRlSXRlbS5maW5kSW5kZXgobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8uYnBzVmFsdWUsIHZhbHVlKSkgPT09IC0xKVxyXG4gICAgICAgICAgLm1hcChcclxuICAgICAgICAgICAgdmFsdWUgPT4gdGhpcy5saXN0T2ZUb3BJdGVtLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8uYnBzVmFsdWUsIHZhbHVlKSkgfHwgdGhpcy5nZW5lcmF0ZVRhZ0l0ZW0odmFsdWUpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVJdGVtID0gWy4uLmxpc3RPZlRlbXBsYXRlSXRlbSwgLi4ubGlzdE9mVGFnSXRlbV07XHJcbiAgICAgICAgdGhpcy5saXN0T2ZUb3BJdGVtID0gdGhpcy5saXN0T2ZWYWx1ZVxyXG4gICAgICAgICAgLm1hcChcclxuICAgICAgICAgICAgdiA9PlxyXG4gICAgICAgICAgICAgIFsuLi50aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlSXRlbSwgLi4udGhpcy5saXN0T2ZUb3BJdGVtXS5maW5kKGl0ZW0gPT4gdGhpcy5jb21wYXJlV2l0aCh2LCBpdGVtLmJwc1ZhbHVlKSkhXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gISFpdGVtKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxpc3RPZkNvbnRhaW5lckl0ZW0oKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm56Q29uZmlnU2VydmljZVxyXG4gICAgICAuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoJ3NlbGVjdCcpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcclxuXHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PlxyXG4gICAgICBmcm9tRXZlbnQodGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQsICdjbGljaycpXHJcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCh0aGlzLmJwc09wZW4gJiYgdGhpcy5icHNTaG93U2VhcmNoKSB8fCB0aGlzLmJwc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5zZXRPcGVuU3RhdGUoIXRoaXMuYnBzT3BlbikpO1xyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIC8vIENhcmV0YWtlciBub3RlOiB3ZSBjb3VsZCd2ZSBhZGRlZCB0aGlzIGxpc3RlbmVyIHdpdGhpbiB0aGUgdGVtcGxhdGUgYChvdmVybGF5S2V5ZG93bik9XCIuLi5cImAsXHJcbiAgICAvLyBidXQgd2l0aCB0aGlzIGFwcHJvYWNoLCBpdCdsbCBydW4gY2hhbmdlIGRldGVjdGlvbiBvbiBlYWNoIGtleWJvYXJkIGNsaWNrLCBhbmQgYWxzbyBpdCdsbCBydW5cclxuICAgIC8vIGBtYXJrRm9yQ2hlY2soKWAgaW50ZXJuYWxseSwgd2hpY2ggbWVhbnMgdGhlIHdob2xlIGNvbXBvbmVudCB0cmVlIChzdGFydGluZyBmcm9tIHRoZSByb290IGFuZFxyXG4gICAgLy8gZ29pbmcgZG93biB0byB0aGUgc2VsZWN0IGNvbXBvbmVudCkgd2lsbCBiZSByZS1jaGVja2VkIGFuZCB1cGRhdGVkIChpZiBuZWVkZWQpLlxyXG4gICAgLy8gVGhpcyBpcyBzYWZlIHRvIGRvIHRoYXQgbWFudWFsbHkgc2luY2UgYHNldE9wZW5TdGF0ZSgpYCBjYWxscyBgbWFya0ZvckNoZWNrKClgIGlmIG5lZWRlZC5cclxuICAgIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5S2V5ZG93bi5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRSkge1xyXG4gICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNSZWFjdGl2ZURyaXZlbikge1xyXG4gICAgICBtZXJnZSh0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQuY2hhbmdlcywgdGhpcy5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5jaGFuZ2VzKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgc3RhcnRXaXRoKHRydWUpLFxyXG4gICAgICAgICAgc3dpdGNoTWFwKCgpID0+XHJcbiAgICAgICAgICAgIG1lcmdlKFxyXG4gICAgICAgICAgICAgIC4uLltcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdE9mTnpPcHRpb25Db21wb25lbnQuY2hhbmdlcyxcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudC5jaGFuZ2VzLFxyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5tYXAob3B0aW9uID0+IG9wdGlvbi5jaGFuZ2VzKSxcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudC5tYXAob3B0aW9uID0+IG9wdGlvbi5jaGFuZ2VzKVxyXG4gICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgKS5waXBlKHN0YXJ0V2l0aCh0cnVlKSlcclxuICAgICAgICAgICksXHJcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBsaXN0T2ZPcHRpb25JbnRlcmZhY2UgPSB0aGlzLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LnRvQXJyYXkoKS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdGVtcGxhdGUsIGJwc0xhYmVsLCBicHNWYWx1ZSwgYnBzS2V5LCBicHNEaXNhYmxlZCwgYnBzSGlkZSwgYnBzQ3VzdG9tQ29udGVudCwgZ3JvdXBMYWJlbCB9ID0gaXRlbTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICB0ZW1wbGF0ZSxcclxuICAgICAgICAgICAgICBicHNMYWJlbCxcclxuICAgICAgICAgICAgICBicHNWYWx1ZSxcclxuICAgICAgICAgICAgICBicHNEaXNhYmxlZCxcclxuICAgICAgICAgICAgICBicHNIaWRlLFxyXG4gICAgICAgICAgICAgIGJwc0N1c3RvbUNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgZ3JvdXBMYWJlbCxcclxuICAgICAgICAgICAgICBicHNUaXRsZTogdGhpcy5nZXRUaXRsZShpdGVtLmJwc1RpdGxlLCBpdGVtLmJwc0xhYmVsKSxcclxuICAgICAgICAgICAgICB0eXBlOiAnaXRlbScsXHJcbiAgICAgICAgICAgICAga2V5OiBicHNLZXkgPT09IHVuZGVmaW5lZCA/IGJwc1ZhbHVlIDogYnBzS2V5XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMubGlzdE9mVGVtcGxhdGVJdGVtJC5uZXh0KGxpc3RPZk9wdGlvbkludGVyZmFjZSk7XHJcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVxdWVzdElkKTtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuaG9zdCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFN0YXR1c1N0eWxlcyhzdGF0dXM6IE56VmFsaWRhdGVTdGF0dXMsIGhhc0ZlZWRiYWNrOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuICAgIHRoaXMuaGFzRmVlZGJhY2sgPSBoYXNGZWVkYmFjaztcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgLy8gcmVuZGVyIHN0YXR1cyBpZiBuelN0YXR1cyBpcyBzZXRcclxuICAgIHRoaXMuc3RhdHVzQ2xzID0gZ2V0U3RhdHVzQ2xhc3NOYW1lcyh0aGlzLnByZWZpeENscywgc3RhdHVzLCBoYXNGZWVkYmFjayk7XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXR1c0NscykuZm9yRWFjaChzdGF0dXMgPT4ge1xyXG4gICAgICBpZiAodGhpcy5zdGF0dXNDbHNbc3RhdHVzXSkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQsIHN0YXR1cyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmhvc3QubmF0aXZlRWxlbWVudCwgc3RhdHVzKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRpdGxlKHRpdGxlOiBOelNlbGVjdE9wdGlvbkludGVyZmFjZVsndGl0bGUnXSwgbGFiZWw6IE56U2VsZWN0T3B0aW9uSW50ZXJmYWNlWydsYWJlbCddKTogc3RyaW5nIHtcclxuICAgIGxldCByYXdUaXRsZTogc3RyaW5nID0gdW5kZWZpbmVkITtcclxuICAgIGlmICh0aXRsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgbGFiZWwgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBsYWJlbCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICByYXdUaXRsZSA9IGxhYmVsLnRvU3RyaW5nKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRpdGxlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdGl0bGUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHJhd1RpdGxlID0gdGl0bGUudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmF3VGl0bGU7XHJcbiAgfVxyXG59XHJcbiJdfQ==