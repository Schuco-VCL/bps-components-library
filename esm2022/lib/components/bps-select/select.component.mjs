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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsSelectComponent, deps: [{ token: i0.NgZone }, { token: i1.NzDestroyService }, { token: i2.NzConfigService }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i3.Platform }, { token: i4.FocusMonitor }, { token: i5.Directionality, optional: true }, { token: i6.NzNoAnimationDirective, host: true, optional: true }, { token: i7.NzFormStatusService, optional: true }, { token: i7.NzFormNoStatusService, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BpsSelectComponent, selector: "bps-select", inputs: { bpsId: "bpsId", bpsSize: "bpsSize", bpsStatus: "bpsStatus", bpsOptionHeightPx: "bpsOptionHeightPx", bpsOptionOverflowSize: "bpsOptionOverflowSize", bpsDropdownClassName: "bpsDropdownClassName", bpsDropdownMatchSelectWidth: "bpsDropdownMatchSelectWidth", bpsDropdownStyle: "bpsDropdownStyle", bpsNotFoundContent: "bpsNotFoundContent", bpsPlaceHolder: "bpsPlaceHolder", bpsPlacement: "bpsPlacement", bpsMaxTagCount: "bpsMaxTagCount", bpsDropdownRender: "bpsDropdownRender", bpsCustomTemplate: "bpsCustomTemplate", bpsSuffixIcon: "bpsSuffixIcon", bpsClearIcon: "bpsClearIcon", bpsRemoveIcon: "bpsRemoveIcon", bpsMenuItemSelectedIcon: "bpsMenuItemSelectedIcon", bpsTokenSeparators: "bpsTokenSeparators", bpsMaxTagPlaceholder: "bpsMaxTagPlaceholder", bpsMaxMultipleCount: "bpsMaxMultipleCount", bpsMode: "bpsMode", bpsFilterOption: "bpsFilterOption", compareWith: "compareWith", bpsAllowClear: "bpsAllowClear", bpsBorderless: "bpsBorderless", bpsShowSearch: "bpsShowSearch", bpsLoading: "bpsLoading", bpsAutoFocus: "bpsAutoFocus", bpsAutoClearSearchValue: "bpsAutoClearSearchValue", bpsServerSearch: "bpsServerSearch", bpsDisabled: "bpsDisabled", bpsOpen: "bpsOpen", bpsSelectOnTab: "bpsSelectOnTab", bpsBackdrop: "bpsBackdrop", bpsOptions: "bpsOptions", bpsShowArrow: "bpsShowArrow" }, outputs: { bpsOnSearch: "bpsOnSearch", bpsScrollToBottom: "bpsScrollToBottom", bpsOpenChange: "bpsOpenChange", bpsBlur: "bpsBlur", bpsFocus: "bpsFocus" }, host: { properties: { "class.ant-select-in-form-item": "!!nzFormStatusService", "class.ant-select-lg": "bpsSize === \"large\"", "class.ant-select-sm": "bpsSize === \"small\"", "class.ant-select-show-arrow": "bpsShowArrow", "class.ant-select-disabled": "bpsDisabled", "class.ant-select-show-search": "(bpsShowSearch || bpsMode !== 'default') && !bpsDisabled", "class.ant-select-allow-clear": "bpsAllowClear", "class.ant-select-borderless": "bpsBorderless", "class.ant-select-open": "bpsOpen", "class.ant-select-focused": "bpsOpen || focused", "class.ant-select-single": "bpsMode === 'default'", "class.ant-select-multiple": "bpsMode !== 'default'", "class.ant-select-rtl": "dir === 'rtl'" }, classAttribute: "ant-select" }, providers: [
            NzDestroyService,
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => BpsSelectComponent),
                multi: true
            }
        ], queries: [{ propertyName: "listOfNzOptionComponent", predicate: BpsOptionComponent, descendants: true }, { propertyName: "listOfNzOptionGroupComponent", predicate: BpsOptionGroupComponent, descendants: true }], viewQueries: [{ propertyName: "originElement", first: true, predicate: CdkOverlayOrigin, descendants: true, read: ElementRef, static: true }, { propertyName: "cdkConnectedOverlay", first: true, predicate: CdkConnectedOverlay, descendants: true, static: true }, { propertyName: "bpsSelectTopControlComponent", first: true, predicate: BpsSelectTopControlComponent, descendants: true, static: true }, { propertyName: "bpsOptionGroupComponentElement", first: true, predicate: BpsOptionGroupComponent, descendants: true, read: ElementRef, static: true }, { propertyName: "bpsSelectTopControlComponentElement", first: true, predicate: BpsSelectTopControlComponent, descendants: true, read: ElementRef, static: true }], exportAs: ["bpsSelect"], usesOnChanges: true, ngImport: i0, template: `
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
  `, isInline: true, styles: [".ant-select-dropdown{background-color:#363636;font-size:11px;border-radius:0 0 10px 10px;margin-top:0!important;box-shadow:none;max-width:calc(100% - 29px)}.ant-select-disabled .ant-select-selection{cursor:url(/assets/bps-icons/sps_inaccessible_icon_grey.svg),auto}.ant-select-open .ant-select-selection-selected-value{color:#666}\n"], dependencies: [{ kind: "directive", type: i8.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i8.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i9.CdkConnectedOverlay, selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]", inputs: ["cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPositionStrategy", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayWidth", "cdkConnectedOverlayHeight", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayMinHeight", "cdkConnectedOverlayBackdropClass", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayViewportMargin", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOpen", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayLockPosition", "cdkConnectedOverlayFlexibleDimensions", "cdkConnectedOverlayGrowAfterOpen", "cdkConnectedOverlayPush", "cdkConnectedOverlayDisposeOnNavigation"], outputs: ["backdropClick", "positionChange", "attach", "detach", "overlayKeydown", "overlayOutsideClick"], exportAs: ["cdkConnectedOverlay"] }, { kind: "directive", type: i9.CdkOverlayOrigin, selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]", exportAs: ["cdkOverlayOrigin"] }, { kind: "directive", type: i6.NzNoAnimationDirective, selector: "[nzNoAnimation]", inputs: ["nzNoAnimation"], exportAs: ["nzNoAnimation"] }, { kind: "directive", type: i10.NzConnectedOverlayDirective, selector: "[cdkConnectedOverlay][nzConnectedOverlay]", inputs: ["nzArrowPointAtCenter"], exportAs: ["nzConnectedOverlay"] }, { kind: "component", type: i11.BpsOptionContainerComponent, selector: "bps-option-container", inputs: ["notFoundContent", "menuItemSelectedIcon", "dropdownRender", "activatedValue", "listOfSelectedValue", "compareWith", "mode", "matchWidth", "itemSize", "maxItemLength", "listOfContainerItem"], outputs: ["itemClick", "scrollToBottom"], exportAs: ["bpsOptionContainer"] }, { kind: "component", type: i12.BpsSelectArrowComponent, selector: "bps-select-arrow", inputs: ["loading", "search", "showArrow", "suffixIcon", "feedbackIcon"] }, { kind: "component", type: i13.BpsSelectClearComponent, selector: "bps-select-clear", inputs: ["clearIcon"], outputs: ["clear"] }, { kind: "component", type: i14.BpsSelectTopControlComponent, selector: "bps-select-top-control", inputs: ["bpsId", "showSearch", "placeHolder", "open", "maxTagCount", "autofocus", "disabled", "mode", "customTemplate", "maxTagPlaceholder", "removeIcon", "listOfTopItem", "tokenSeparators"], outputs: ["tokenize", "inputValueChange", "deleteItem"], exportAs: ["bpsSelectTopControl"] }, { kind: "component", type: i15.BpsFormItemFeedbackIconComponent, selector: "bps-form-item-feedback-icon", inputs: ["status"], exportAs: ["bpsFormFeedbackIcon"] }], animations: [slideMotion], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsSelectComponent, decorators: [{
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
        }], ctorParameters: () => [{ type: i0.NgZone }, { type: i1.NzDestroyService }, { type: i2.NzConfigService }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i3.Platform }, { type: i4.FocusMonitor }, { type: i5.Directionality, decorators: [{
                    type: Optional
                }] }, { type: i6.NzNoAnimationDirective, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }, { type: i7.NzFormStatusService, decorators: [{
                    type: Optional
                }] }, { type: i7.NzFormNoStatusService, decorators: [{
                    type: Optional
                }] }], propDecorators: { bpsId: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RixPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUdqQixNQUFNLHNCQUFzQixDQUFDO0FBRTlCLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUtMLFFBQVEsRUFDUixNQUFNLEVBSU4sV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQWdDLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBR3JGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQWlCLE1BQU0sNEJBQTRCLENBQUM7QUFDM0YsT0FBTyxFQUFFLDJCQUEyQixFQUFFLFlBQVksRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBVS9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzlFLE1BQU0sbUJBQW1CLEdBQXVCLENBQUMsV0FBbUIsRUFBRSxJQUEyQixFQUFXLEVBQUU7SUFDNUcsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQztTQUFNLENBQUM7UUFDTixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixNQUFNLHFCQUFxQixHQUFnQixRQUFRLENBQUM7QUF3SHBELE1BQU0sT0FBTyxrQkFBa0I7SUFvRDdCLElBQ0ksWUFBWSxDQUFDLEtBQWM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVGLENBQUM7SUEyQ0QsZUFBZSxDQUFDLEtBQWE7UUFDM0IsT0FBTztZQUNMLFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLEtBQUs7WUFDZixJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUM7SUFDSixDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQWdCO1FBQzFCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUMvQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUNuRixJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLENBQUM7WUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUM7YUFBTSxDQUFDO1lBQ04sTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2hGLElBQUksV0FBVyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3ZCLE1BQU0sdUJBQXVCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssV0FBVyxDQUFDLENBQUM7Z0JBQ3JGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ2xELENBQUM7aUJBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDOUQsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDaEQsQ0FBQztZQUNELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNiLElBQUksSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNwQixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxZQUFZLENBQUMsSUFBUztRQUNwQixNQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM5RixJQUFJLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELHlCQUF5QjtRQUN2QixJQUFJLG1CQUFtQixHQUFHLElBQUksQ0FBQyx3QkFBd0I7YUFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDOUMsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdEQsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDaEQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ25HLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDakIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3ZELG1CQUFtQixHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsbUJBQW1CLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3pDLENBQUM7aUJBQU0sQ0FBQztnQkFDTixJQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUM7WUFDN0MsQ0FBQztRQUNILENBQUM7UUFDRCxNQUFNLGFBQWEsR0FDakIsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3BFLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDdEYsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0RixtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDeEUsSUFBSSxnQkFBZ0IsR0FBMkQsRUFBRSxDQUFDO1FBQ2xGLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDMUIsZ0JBQWdCLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckcsQ0FBQzthQUFNLENBQUM7WUFDTixJQUFJLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO2dCQUN0QyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVFLENBQUM7UUFDSCxDQUFDO1FBQ0QseUJBQXlCO1FBQ3pCLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMvQixNQUFNLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9FLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ2YsTUFBTSxTQUFTLEdBQUcsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBMkIsQ0FBQztnQkFDNUYsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDbEQsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxrQ0FBa0MsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLDRCQUE0QixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxXQUF3QjtRQUN4QyxNQUFNLGlCQUFpQixHQUFHLENBQUMsSUFBaUIsRUFBRSxJQUFzQixFQUEyQixFQUFFO1lBQy9GLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRSxDQUFDO2dCQUN2QixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7b0JBQ3BCLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixDQUFDO3FCQUFNLENBQUM7b0JBQ04sT0FBTyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztZQUNILENBQUM7aUJBQU0sQ0FBQztnQkFDTixPQUFPLElBQUksQ0FBQztZQUNkLENBQUM7UUFDSCxDQUFDLENBQUM7UUFDRixNQUFNLEtBQUssR0FBRyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNELElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztZQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDO0lBQ0gsQ0FBQztJQUVELGVBQWUsQ0FBQyxXQUFxQjtRQUNuQyxNQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyx3QkFBd0I7YUFDckQsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDOUUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssVUFBVSxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7YUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssTUFBTSxFQUFFLENBQUM7WUFDbkMsTUFBTSxvQkFBb0IsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUM3QyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUN6RixDQUFDO1lBQ0YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsa0JBQWtCLEVBQUUsR0FBRyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDaEcsQ0FBQztRQUNELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsU0FBUyxDQUFDLENBQWdCO1FBQ3hCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3JCLE9BQU87UUFDVCxDQUFDO1FBQ0QsTUFBTSwrQkFBK0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CO2FBQzdELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDO2FBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sY0FBYyxHQUFHLCtCQUErQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUN0RSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUNyRCxDQUFDO1FBQ0YsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEIsS0FBSyxRQUFRO2dCQUNYLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDbkIsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLCtCQUErQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztvQkFDL0QsTUFBTSxRQUFRLEdBQUcsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsK0JBQStCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFDdEcsSUFBSSxDQUFDLGNBQWMsR0FBRywrQkFBK0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUM7Z0JBQzNFLENBQUM7Z0JBQ0QsTUFBTTtZQUNSLEtBQUssVUFBVTtnQkFDYixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ25CLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSwrQkFBK0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7b0JBQy9ELE1BQU0sU0FBUyxHQUFHLGNBQWMsR0FBRywrQkFBK0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZHLElBQUksQ0FBQyxjQUFjLEdBQUcsK0JBQStCLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDO2dCQUM1RSxDQUFDO3FCQUFNLENBQUM7b0JBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFDRCxNQUFNO1lBQ1IsS0FBSyxLQUFLO2dCQUNSLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDbkIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ2pCLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxjQUFjLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQzt3QkFDM0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQ3hDLENBQUM7Z0JBQ0gsQ0FBQztxQkFBTSxDQUFDO29CQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ0QsTUFBTTtZQUNSLEtBQUssS0FBSztnQkFDUixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN4QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3JCLENBQUM7Z0JBQ0QsTUFBTTtZQUNSLEtBQUssR0FBRztnQkFDTixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7d0JBQ2pCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQzt3QkFDbkIsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7NEJBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dCQUN4QyxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztxQkFBTSxDQUFDO29CQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNCLENBQUM7Z0JBQ0QsTUFBTTtZQUNSLEtBQUssTUFBTTtnQkFDVDs7bUJBRUc7Z0JBQ0gsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFCLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFjO1FBQ3pCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDO0lBQ0gsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsK0JBQStCLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELGtCQUFrQixDQUFDLEtBQWE7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQWlCO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQXFCLENBQUMsRUFBRSxDQUFDO1lBQ25FLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQztJQUNILENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLDRCQUE0QixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxRQUF3QztRQUN2RCxNQUFNLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBa0MsQ0FBQztJQUM3RCxDQUFDO0lBRUQsK0JBQStCO1FBQzdCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNoRSxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3ZDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pDLCtHQUErRztnQkFDL0csNEdBQTRHO2dCQUM1RyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxDQUFDO2dCQUNuRixJQUFJLFlBQVksS0FBSyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQ3ZDLHFIQUFxSDtvQkFDckgsNkhBQTZIO29CQUM3SCxpSEFBaUg7b0JBQ2pILElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQzNCLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRUQsa0NBQWtDO1FBQ2hDLFlBQVksQ0FBQyxHQUFHLEVBQUU7WUFDaEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxZQUNVLE1BQWMsRUFDZCxRQUEwQixFQUMzQixlQUFnQyxFQUMvQixHQUFzQixFQUN0QixJQUE2QixFQUM3QixRQUFtQixFQUNuQixRQUFrQixFQUNsQixZQUEwQixFQUNkLGNBQThCLEVBQ3ZCLFdBQW9DLEVBQzVDLG1CQUF5QyxFQUN4QyxxQkFBNkM7UUFYekQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQzNCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUMvQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixTQUFJLEdBQUosSUFBSSxDQUF5QjtRQUM3QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDZCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDdkIsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBQzVDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBc0I7UUFDeEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF3QjtRQW5YMUQsa0JBQWEsR0FBZ0IscUJBQXFCLENBQUM7UUFZbkQsVUFBSyxHQUFrQixJQUFJLENBQUM7UUFDNUIsWUFBTyxHQUFxQixTQUFTLENBQUM7UUFDdEMsY0FBUyxHQUFhLEVBQUUsQ0FBQztRQUN6QixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDdkIsMEJBQXFCLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLHlCQUFvQixHQUE2QixJQUFJLENBQUM7UUFDdEQsZ0NBQTJCLEdBQUcsSUFBSSxDQUFDO1FBQ25DLHFCQUFnQixHQUFxQyxJQUFJLENBQUM7UUFDMUQsdUJBQWtCLEdBQWdELFNBQVMsQ0FBQztRQUM1RSxtQkFBYyxHQUEyQyxJQUFJLENBQUM7UUFDOUQsaUJBQVksR0FBaUMsSUFBSSxDQUFDO1FBQ2xELG1CQUFjLEdBQUcsUUFBUSxDQUFDO1FBQzFCLHNCQUFpQixHQUFrQyxJQUFJLENBQUM7UUFDeEQsc0JBQWlCLEdBQTZELElBQUksQ0FBQztRQUc1RixrQkFBYSxHQUEyQyxJQUFJLENBQUM7UUFDcEQsaUJBQVksR0FBa0MsSUFBSSxDQUFDO1FBQ25ELGtCQUFhLEdBQWtDLElBQUksQ0FBQztRQUNwRCw0QkFBdUIsR0FBa0MsSUFBSSxDQUFDO1FBQzlELHVCQUFrQixHQUFhLEVBQUUsQ0FBQztRQUNsQyx5QkFBb0IsR0FBbUQsSUFBSSxDQUFDO1FBQzVFLHdCQUFtQixHQUFHLFFBQVEsQ0FBQztRQUMvQixZQUFPLEdBQXFCLFNBQVMsQ0FBQztRQUN0QyxvQkFBZSxHQUF1QixtQkFBbUIsQ0FBQztRQUMxRCxnQkFBVyxHQUE4QyxDQUFDLEVBQWEsRUFBRSxFQUFhLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDckYsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDQyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUM3QyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLDRCQUF1QixHQUFHLElBQUksQ0FBQztRQUMvQixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ0EsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDM0QsZUFBVSxHQUE4QixFQUFFLENBQUM7UUFVakMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3pDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDN0Msa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQzVDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ25DLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBVS9DLGlCQUFZLEdBQUcsSUFBSSxlQUFlLENBQWMsRUFBRSxDQUFDLENBQUM7UUFDcEQsd0JBQW1CLEdBQUcsSUFBSSxlQUFlLENBQTBCLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLDZCQUF3QixHQUE0QixFQUFFLENBQUM7UUFDdkQsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBR3pCLGNBQVMsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUN2QiwyQkFBc0IsR0FBWSxJQUFJLENBQUM7UUFDL0MsYUFBUSxHQUFpQixHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFDbEMsY0FBUyxHQUFrQixHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFDcEMscUJBQWdCLEdBQTBCLFlBQVksQ0FBQztRQUN2RCxpQkFBWSxHQUFrQixJQUFJLENBQUM7UUFDbkMsd0JBQW1CLEdBQTRCLEVBQUUsQ0FBQztRQUNsRCxrQkFBYSxHQUE0QixFQUFFLENBQUM7UUFDNUMsbUJBQWMsR0FBcUIsSUFBSSxDQUFDO1FBQ3hDLGdCQUFXLEdBQWdCLEVBQUUsQ0FBQztRQUM5QixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFFBQUcsR0FBYyxLQUFLLENBQUM7UUFDdkIsY0FBUyxHQUE2QixFQUFFLENBQUM7UUFFekMsU0FBUztRQUNULGNBQVMsR0FBVyxZQUFZLENBQUM7UUFDakMsY0FBUyxHQUFxQixFQUFFLENBQUM7UUFDakMsV0FBTSxHQUFxQixFQUFFLENBQUM7UUFDOUIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7SUFrUjFCLENBQUM7SUFFSixVQUFVLENBQUMsVUFBbUM7UUFDNUMsdURBQXVEO1FBQ3ZELElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxVQUFVLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztZQUN4QixNQUFNLGlCQUFpQixHQUFHLENBQUMsS0FBOEIsRUFBRSxJQUFzQixFQUFlLEVBQUU7Z0JBQ2hHLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFLENBQUM7b0JBQzFDLE9BQU8sRUFBRSxDQUFDO2dCQUNaLENBQUM7cUJBQU0sSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFLENBQUM7b0JBQzlCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakIsQ0FBQztxQkFBTSxDQUFDO29CQUNOLE9BQU8sS0FBSyxDQUFDO2dCQUNmLENBQUM7WUFDSCxDQUFDLENBQUM7WUFDRixNQUFNLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQztJQUNILENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFnQjtRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBaUI7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGdCQUFnQixDQUFDLFFBQWlCO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFFBQVEsQ0FBQztRQUNqRixJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUM5RSxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ1osSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RCLENBQUM7UUFDRCxJQUFJLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDO1FBQ0QsSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7WUFDN0IsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7WUFDNUMsTUFBTSxxQkFBcUIsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNyRCxPQUFPO29CQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSTtvQkFDL0QsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO29CQUMvQyxRQUFRLEVBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJO29CQUM5RixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUs7b0JBQ3BCLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUs7b0JBQ25DLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUs7b0JBQzNCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLLFlBQVksV0FBVztvQkFDbkQsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSTtvQkFDbkMsSUFBSSxFQUFFLE1BQU07b0JBQ1osR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRztpQkFDcEQsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFDRCxJQUFJLFNBQVMsRUFBRSxDQUFDO1lBQ2QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBQ0QsSUFBSSxZQUFZLEVBQUUsQ0FBQztZQUNqQixNQUFNLEVBQUUsWUFBWSxFQUFFLEdBQUcsWUFBWSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxZQUFxQyxDQUFDO1lBQzlELE1BQU0sZUFBZSxHQUFHLENBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDN0UsSUFBSSxZQUFZLElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO2dCQUMzRCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsWUFBWSxDQUFDLFlBQTZCLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLENBQUM7aUJBQU0sQ0FBQztnQkFDTixJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBa0IsQ0FBQyxDQUFDLENBQUM7WUFDOUUsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxpQkFBaUI7YUFDeEMsSUFBSSxDQUNILG9CQUFvQixDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ2hDLE9BQU8sR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxXQUFXLEtBQUssR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUMxRSxDQUFDLENBQUMsRUFDRixjQUFjLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDMUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFDL0YsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDekI7YUFDQSxTQUFTLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO1FBRUwsSUFBSSxDQUFDLFlBQVk7YUFDZCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7YUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3BCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO29CQUMxQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3ZCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7YUFDekQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUIsU0FBUyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLEVBQUU7WUFDdkQsTUFBTSxhQUFhLEdBQUcsbUJBQW1CO2lCQUN0QyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxNQUFNLENBQUM7aUJBQ3JDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUM5RixHQUFHLENBQ0YsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQzFHLENBQUM7WUFDSixJQUFJLENBQUMsd0JBQXdCLEdBQUcsQ0FBQyxHQUFHLGtCQUFrQixFQUFFLEdBQUcsYUFBYSxDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVztpQkFDbEMsR0FBRyxDQUNGLENBQUMsQ0FBQyxFQUFFLENBQ0YsQ0FBQyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUUsQ0FDOUc7aUJBQ0EsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO1FBRUwsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUU7WUFDNUYsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxlQUFlO2FBQ2pCLGdDQUFnQyxDQUFDLFFBQVEsQ0FBQzthQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUVMLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7UUFFckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FDakMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQzthQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDN0QsT0FBTztZQUNULENBQUM7WUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQ0wsQ0FBQztRQUVGLGdHQUFnRztRQUNoRyxnR0FBZ0c7UUFDaEcsZ0dBQWdHO1FBQ2hHLGtGQUFrRjtRQUNsRiw0RkFBNEY7UUFDNUYsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2RixJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssTUFBTSxFQUFFLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDM0IsS0FBSyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQztpQkFDbkYsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFDZixTQUFTLENBQUMsR0FBRyxFQUFFLENBQ2IsS0FBSyxDQUNILEdBQUc7Z0JBQ0QsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE9BQU87Z0JBQ3BDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPO2dCQUN6QyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUM3RCxHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQ25FLENBQ0YsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ3hCLEVBQ0QsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDekI7aUJBQ0EsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDZCxNQUFNLHFCQUFxQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQzlFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUM7b0JBQzFHLE9BQU87d0JBQ0wsUUFBUTt3QkFDUixRQUFRO3dCQUNSLFFBQVE7d0JBQ1IsV0FBVzt3QkFDWCxPQUFPO3dCQUNQLGdCQUFnQjt3QkFDaEIsVUFBVTt3QkFDVixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUM7d0JBQ3JELElBQUksRUFBRSxNQUFNO3dCQUNaLEdBQUcsRUFBRSxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU07cUJBQzlDLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsMkJBQTJCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU8sZUFBZSxDQUFDLE1BQXdCLEVBQUUsV0FBb0I7UUFDcEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMxRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDM0MsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzFELENBQUM7aUJBQU0sQ0FBQztnQkFDTixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM3RCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sUUFBUSxDQUFDLEtBQXVDLEVBQUUsS0FBdUM7UUFDL0YsSUFBSSxRQUFRLEdBQVcsU0FBVSxDQUFDO1FBQ2xDLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRSxDQUFDO1lBQ3hCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRSxDQUFDO2dCQUMzRCxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzlCLENBQUM7UUFDSCxDQUFDO2FBQU0sSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDbEUsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QixDQUFDO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzsrR0FwbUJVLGtCQUFrQjttR0FBbEIsa0JBQWtCLCtwRUFoSGxCO1lBQ1QsZ0JBQWdCO1lBQ2hCO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQ2pELEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRixrRUE2S2dCLGtCQUFrQixrRkFDbEIsdUJBQXVCLCtGQUo3QixnQkFBZ0IsMkJBQXdCLFVBQVUsaUZBQ2xELG1CQUFtQiw2R0FDbkIsNEJBQTRCLCtHQUk1Qix1QkFBdUIsMkJBQXdCLFVBQVUsaUdBQ3pELDRCQUE0QiwyQkFBd0IsVUFBVSx5RkE1Sy9EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0ZULGd1R0FuRlcsQ0FBQyxXQUFXLENBQUM7O0FBa0l6QjtJQURDLFVBQVUsRUFBMEM7eURBQ1E7QUFVcEM7SUFBZixZQUFZLEVBQUU7eURBQXVCO0FBQ0M7SUFBdEMsVUFBVSxFQUFXO0lBQUUsWUFBWSxFQUFFO3lEQUF1QjtBQUM3QztJQUFmLFlBQVksRUFBRTt5REFBdUI7QUFDdEI7SUFBZixZQUFZLEVBQUU7c0RBQW9CO0FBQ25CO0lBQWYsWUFBWSxFQUFFO3dEQUFzQjtBQUNyQjtJQUFmLFlBQVksRUFBRTttRUFBZ0M7QUFDL0I7SUFBZixZQUFZLEVBQUU7MkRBQXlCO0FBQ3hCO0lBQWYsWUFBWSxFQUFFO3VEQUFxQjtBQUNwQjtJQUFmLFlBQVksRUFBRTttREFBaUI7QUFDaEI7SUFBZixZQUFZLEVBQUU7MERBQXdCO0FBQ0E7SUFBdEMsVUFBVSxFQUFXO0lBQUUsWUFBWSxFQUFFO3VEQUFxQjs0RkFqRHpELGtCQUFrQjtrQkFwSDlCLFNBQVM7K0JBQ0UsWUFBWSxZQUNaLFdBQVcsdUJBQ0EsS0FBSyxhQUNmO3dCQUNULGdCQUFnQjt3QkFDaEI7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsbUJBQW1CLENBQUM7NEJBQ2pELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGLG1CQUNnQix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLGNBRXpCLENBQUMsV0FBVyxDQUFDLFlBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrRlQsUUFDSzt3QkFDSixLQUFLLEVBQUUsWUFBWTt3QkFDbkIsaUNBQWlDLEVBQUUsdUJBQXVCO3dCQUMxRCx1QkFBdUIsRUFBRSxxQkFBcUI7d0JBQzlDLHVCQUF1QixFQUFFLHFCQUFxQjt3QkFDOUMsK0JBQStCLEVBQUUsY0FBYzt3QkFDL0MsNkJBQTZCLEVBQUUsYUFBYTt3QkFDNUMsZ0NBQWdDLEVBQUUsMERBQTBEO3dCQUM1RixnQ0FBZ0MsRUFBRSxlQUFlO3dCQUNqRCwrQkFBK0IsRUFBRSxlQUFlO3dCQUNoRCx5QkFBeUIsRUFBRSxTQUFTO3dCQUNwQyw0QkFBNEIsRUFBRSxvQkFBb0I7d0JBQ2xELDJCQUEyQixFQUFFLHVCQUF1Qjt3QkFDcEQsNkJBQTZCLEVBQUUsdUJBQXVCO3dCQUN0RCx3QkFBd0IsRUFBRSxlQUFlO3FCQUMxQzs7MEJBbVhFLFFBQVE7OzBCQUNSLElBQUk7OzBCQUFJLFFBQVE7OzBCQUNoQixRQUFROzswQkFDUixRQUFRO3lDQXZXRixLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csaUJBQWlCO3NCQUF6QixLQUFLO2dCQUNHLHFCQUFxQjtzQkFBN0IsS0FBSztnQkFDRyxvQkFBb0I7c0JBQTVCLEtBQUs7Z0JBQ0csMkJBQTJCO3NCQUFuQyxLQUFLO2dCQUNHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFDRyxrQkFBa0I7c0JBQTFCLEtBQUs7Z0JBQ0csY0FBYztzQkFBdEIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csaUJBQWlCO3NCQUF6QixLQUFLO2dCQUNHLGlCQUFpQjtzQkFBekIsS0FBSztnQkFHTixhQUFhO3NCQUZaLEtBQUs7Z0JBR0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLHVCQUF1QjtzQkFBL0IsS0FBSztnQkFDRyxrQkFBa0I7c0JBQTFCLEtBQUs7Z0JBQ0csb0JBQW9CO3NCQUE1QixLQUFLO2dCQUNHLG1CQUFtQjtzQkFBM0IsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNtQixhQUFhO3NCQUFyQyxLQUFLO2dCQUMwQyxhQUFhO3NCQUE1RCxLQUFLO2dCQUNtQixhQUFhO3NCQUFyQyxLQUFLO2dCQUNtQixVQUFVO3NCQUFsQyxLQUFLO2dCQUNtQixZQUFZO3NCQUFwQyxLQUFLO2dCQUNtQix1QkFBdUI7c0JBQS9DLEtBQUs7Z0JBQ21CLGVBQWU7c0JBQXZDLEtBQUs7Z0JBQ21CLFdBQVc7c0JBQW5DLEtBQUs7Z0JBQ21CLE9BQU87c0JBQS9CLEtBQUs7Z0JBQ21CLGNBQWM7c0JBQXRDLEtBQUs7Z0JBQzBDLFdBQVc7c0JBQTFELEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFHRixZQUFZO3NCQURmLEtBQUs7Z0JBUWEsV0FBVztzQkFBN0IsTUFBTTtnQkFDWSxpQkFBaUI7c0JBQW5DLE1BQU07Z0JBQ1ksYUFBYTtzQkFBL0IsTUFBTTtnQkFDWSxPQUFPO3NCQUF6QixNQUFNO2dCQUNZLFFBQVE7c0JBQTFCLE1BQU07Z0JBQzBELGFBQWE7c0JBQTdFLFNBQVM7dUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7Z0JBQ2IsbUJBQW1CO3NCQUFwRSxTQUFTO3VCQUFDLG1CQUFtQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFDVyw0QkFBNEI7c0JBQXRGLFNBQVM7dUJBQUMsNEJBQTRCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUNHLHVCQUF1QjtzQkFBbEYsZUFBZTt1QkFBQyxrQkFBa0IsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7Z0JBRTFELDRCQUE0QjtzQkFEM0IsZUFBZTt1QkFBQyx1QkFBdUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7Z0JBRVMsOEJBQThCO3NCQUFyRyxTQUFTO3VCQUFDLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2dCQUV0RSxtQ0FBbUM7c0JBRGxDLFNBQVM7dUJBQUMsNEJBQTRCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7IERPV05fQVJST1csIEVOVEVSLCBFU0NBUEUsIFNQQUNFLCBUQUIsIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHtcclxuICBDZGtDb25uZWN0ZWRPdmVybGF5LFxyXG4gIENka092ZXJsYXlPcmlnaW4sXHJcbiAgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLFxyXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXJcclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBIb3N0LFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCwgZnJvbUV2ZW50LCBtZXJnZSwgb2YgYXMgb2JzZXJ2YWJsZU9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHN0YXJ0V2l0aCwgc3dpdGNoTWFwLCB0YWtlVW50aWwsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgc2xpZGVNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgTnpDb25maWdLZXksIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xyXG5pbXBvcnQgeyBOekZvcm1Ob1N0YXR1c1NlcnZpY2UsIE56Rm9ybVN0YXR1c1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvZm9ybSc7XHJcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgZ2V0UGxhY2VtZW50TmFtZSwgUE9TSVRJT05fTUFQLCBQT1NJVElPTl9UWVBFIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL292ZXJsYXknO1xyXG5pbXBvcnQgeyBjYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUsIHJlcUFuaW1GcmFtZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9wb2x5ZmlsbCc7XHJcbmltcG9ydCB7IE56RGVzdHJveVNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvc2VydmljZXMnO1xyXG5pbXBvcnQge1xyXG4gIEJvb2xlYW5JbnB1dCxcclxuICBOZ0NsYXNzSW50ZXJmYWNlLFxyXG4gIE56U2FmZUFueSxcclxuICBOelN0YXR1cyxcclxuICBOelZhbGlkYXRlU3RhdHVzLFxyXG4gIE9uQ2hhbmdlVHlwZSxcclxuICBPblRvdWNoZWRUeXBlXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgZ2V0U3RhdHVzQ2xhc3NOYW1lcywgSW5wdXRCb29sZWFuLCBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuXHJcbmltcG9ydCB7IEJwc09wdGlvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9vcHRpb24tZ3JvdXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnBzT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9vcHRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnBzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7XHJcbiAgTnpGaWx0ZXJPcHRpb25UeXBlLFxyXG4gIE56U2VsZWN0SXRlbUludGVyZmFjZSxcclxuICBOelNlbGVjdE1vZGVUeXBlLFxyXG4gIE56U2VsZWN0T3B0aW9uSW50ZXJmYWNlLFxyXG4gIE56U2VsZWN0UGxhY2VtZW50VHlwZVxyXG59IGZyb20gJy4vc2VsZWN0LnR5cGVzJztcclxuXHJcbmNvbnN0IGRlZmF1bHRGaWx0ZXJPcHRpb246IE56RmlsdGVyT3B0aW9uVHlwZSA9IChzZWFyY2hWYWx1ZTogc3RyaW5nLCBpdGVtOiBOelNlbGVjdEl0ZW1JbnRlcmZhY2UpOiBib29sZWFuID0+IHtcclxuICBpZiAoaXRlbSAmJiBpdGVtLmJwc0xhYmVsKSB7XHJcbiAgICByZXR1cm4gaXRlbS5icHNMYWJlbC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgTlpfQ09ORklHX01PRFVMRV9OQU1FOiBOekNvbmZpZ0tleSA9ICdzZWxlY3QnO1xyXG5cclxuZXhwb3J0IHR5cGUgTnpTZWxlY3RTaXplVHlwZSA9ICdsYXJnZScgfCAnZGVmYXVsdCcgfCAnc21hbGwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicHMtc2VsZWN0JyxcclxuICBleHBvcnRBczogJ2Jwc1NlbGVjdCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBOekRlc3Ryb3lTZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnBzU2VsZWN0Q29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnBzLXNlbGVjdC5jb21wb25lbnQuY3NzJ10sXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGJwcy1zZWxlY3QtdG9wLWNvbnRyb2xcclxuICAgICAgY2RrT3ZlcmxheU9yaWdpblxyXG4gICAgICAjb3JpZ2luPVwiY2RrT3ZlcmxheU9yaWdpblwiXHJcbiAgICAgIFticHNJZF09XCJicHNJZFwiXHJcbiAgICAgIFtvcGVuXT1cImJwc09wZW5cIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiYnBzRGlzYWJsZWRcIlxyXG4gICAgICBbbW9kZV09XCJicHNNb2RlXCJcclxuICAgICAgW0AuZGlzYWJsZWRdPVwiISFub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICAgIFtuek5vQW5pbWF0aW9uXT1cIm5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgICAgW21heFRhZ1BsYWNlaG9sZGVyXT1cImJwc01heFRhZ1BsYWNlaG9sZGVyXCJcclxuICAgICAgW3JlbW92ZUljb25dPVwiYnBzUmVtb3ZlSWNvblwiXHJcbiAgICAgIFtwbGFjZUhvbGRlcl09XCJicHNQbGFjZUhvbGRlclwiXHJcbiAgICAgIFttYXhUYWdDb3VudF09XCJicHNNYXhUYWdDb3VudFwiXHJcbiAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJicHNDdXN0b21UZW1wbGF0ZVwiXHJcbiAgICAgIFt0b2tlblNlcGFyYXRvcnNdPVwiYnBzVG9rZW5TZXBhcmF0b3JzXCJcclxuICAgICAgW3Nob3dTZWFyY2hdPVwiYnBzU2hvd1NlYXJjaFwiXHJcbiAgICAgIFthdXRvZm9jdXNdPVwiYnBzQXV0b0ZvY3VzXCJcclxuICAgICAgW2xpc3RPZlRvcEl0ZW1dPVwibGlzdE9mVG9wSXRlbVwiXHJcbiAgICAgIChpbnB1dFZhbHVlQ2hhbmdlKT1cIm9uSW5wdXRWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgKHRva2VuaXplKT1cIm9uVG9rZW5TZXBhcmF0ZSgkZXZlbnQpXCJcclxuICAgICAgKGRlbGV0ZUl0ZW0pPVwib25JdGVtRGVsZXRlKCRldmVudClcIlxyXG4gICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXHJcbiAgICA+PC9icHMtc2VsZWN0LXRvcC1jb250cm9sPlxyXG4gICAgPGJwcy1zZWxlY3QtYXJyb3dcclxuICAgICAgKm5nSWY9XCJicHNTaG93QXJyb3cgfHwgKGhhc0ZlZWRiYWNrICYmICEhc3RhdHVzKVwiXHJcbiAgICAgIFtzaG93QXJyb3ddPVwiYnBzU2hvd0Fycm93XCJcclxuICAgICAgW2xvYWRpbmddPVwiYnBzTG9hZGluZ1wiXHJcbiAgICAgIFtzZWFyY2hdPVwiYnBzT3BlbiAmJiBicHNTaG93U2VhcmNoXCJcclxuICAgICAgW3N1ZmZpeEljb25dPVwiYnBzU3VmZml4SWNvblwiXHJcbiAgICAgIFtmZWVkYmFja0ljb25dPVwiZmVlZGJhY2tJY29uVHBsXCJcclxuICAgID5cclxuICAgICAgPG5nLXRlbXBsYXRlICNmZWVkYmFja0ljb25UcGw+XHJcbiAgICAgICAgPGJwcy1mb3JtLWl0ZW0tZmVlZGJhY2staWNvbiAqbmdJZj1cImhhc0ZlZWRiYWNrICYmICEhc3RhdHVzXCIgW3N0YXR1c109XCJzdGF0dXNcIj48L2Jwcy1mb3JtLWl0ZW0tZmVlZGJhY2staWNvbj5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvYnBzLXNlbGVjdC1hcnJvdz5cclxuXHJcbiAgICA8YnBzLXNlbGVjdC1jbGVhclxyXG4gICAgICAqbmdJZj1cImJwc0FsbG93Q2xlYXIgJiYgIWJwc0Rpc2FibGVkICYmIGxpc3RPZlZhbHVlLmxlbmd0aFwiXHJcbiAgICAgIFtjbGVhckljb25dPVwiYnBzQ2xlYXJJY29uXCJcclxuICAgICAgKGNsZWFyKT1cIm9uQ2xlYXJTZWxlY3Rpb24oKVwiXHJcbiAgICA+PC9icHMtc2VsZWN0LWNsZWFyPlxyXG4gICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgIGNka0Nvbm5lY3RlZE92ZXJsYXlcclxuICAgICAgbnpDb25uZWN0ZWRPdmVybGF5XHJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5SGFzQmFja2Ryb3BdPVwiYnBzQmFja2Ryb3BcIlxyXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU1pbldpZHRoXT1cIiRhbnkoYnBzRHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoID8gbnVsbCA6IHRyaWdnZXJXaWR0aClcIlxyXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVdpZHRoXT1cIiRhbnkoYnBzRHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoID8gdHJpZ2dlcldpZHRoIDogbnVsbClcIlxyXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJvcmlnaW5cIlxyXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVRyYW5zZm9ybU9yaWdpbk9uXT1cIicuYW50LXNlbGVjdC1kcm9wZG93bidcIlxyXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBhbmVsQ2xhc3NdPVwiYnBzRHJvcGRvd25DbGFzc05hbWUhXCJcclxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cImJwc09wZW5cIlxyXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uc109XCJwb3NpdGlvbnNcIlxyXG4gICAgICAob3ZlcmxheU91dHNpZGVDbGljayk9XCJvbkNsaWNrT3V0c2lkZSgkZXZlbnQpXCJcclxuICAgICAgKGRldGFjaCk9XCJzZXRPcGVuU3RhdGUoZmFsc2UpXCJcclxuICAgICAgKHBvc2l0aW9uQ2hhbmdlKT1cIm9uUG9zaXRpb25DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICA+XHJcbiAgICAgIDxicHMtb3B0aW9uLWNvbnRhaW5lclxyXG4gICAgICAgIFtuZ1N0eWxlXT1cImJwc0Ryb3Bkb3duU3R5bGVcIlxyXG4gICAgICAgIFtpdGVtU2l6ZV09XCJicHNPcHRpb25IZWlnaHRQeFwiXHJcbiAgICAgICAgW21heEl0ZW1MZW5ndGhdPVwiYnBzT3B0aW9uT3ZlcmZsb3dTaXplXCJcclxuICAgICAgICBbbWF0Y2hXaWR0aF09XCJicHNEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGhcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLXBsYWNlbWVudC1ib3R0b21MZWZ0XT1cImRyb3BEb3duUG9zaXRpb24gPT09ICdib3R0b21MZWZ0J1wiXHJcbiAgICAgICAgW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tcGxhY2VtZW50LXRvcExlZnRdPVwiZHJvcERvd25Qb3NpdGlvbiA9PT0gJ3RvcExlZnQnXCJcclxuICAgICAgICBbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1wbGFjZW1lbnQtYm90dG9tUmlnaHRdPVwiZHJvcERvd25Qb3NpdGlvbiA9PT0gJ2JvdHRvbVJpZ2h0J1wiXHJcbiAgICAgICAgW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tcGxhY2VtZW50LXRvcFJpZ2h0XT1cImRyb3BEb3duUG9zaXRpb24gPT09ICd0b3BSaWdodCdcIlxyXG4gICAgICAgIFtAc2xpZGVNb3Rpb25dPVwiJ2VudGVyJ1wiXHJcbiAgICAgICAgW0AuZGlzYWJsZWRdPVwiISFub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICAgICAgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gICAgICAgIFtsaXN0T2ZDb250YWluZXJJdGVtXT1cImxpc3RPZkNvbnRhaW5lckl0ZW1cIlxyXG4gICAgICAgIFttZW51SXRlbVNlbGVjdGVkSWNvbl09XCJicHNNZW51SXRlbVNlbGVjdGVkSWNvblwiXHJcbiAgICAgICAgW25vdEZvdW5kQ29udGVudF09XCJicHNOb3RGb3VuZENvbnRlbnRcIlxyXG4gICAgICAgIFthY3RpdmF0ZWRWYWx1ZV09XCJhY3RpdmF0ZWRWYWx1ZVwiXHJcbiAgICAgICAgW2xpc3RPZlNlbGVjdGVkVmFsdWVdPVwibGlzdE9mVmFsdWVcIlxyXG4gICAgICAgIFtkcm9wZG93blJlbmRlcl09XCJicHNEcm9wZG93blJlbmRlclwiXHJcbiAgICAgICAgW2NvbXBhcmVXaXRoXT1cImNvbXBhcmVXaXRoXCJcclxuICAgICAgICBbbW9kZV09XCJicHNNb2RlXCJcclxuICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXHJcbiAgICAgICAgKGl0ZW1DbGljayk9XCJvbkl0ZW1DbGljaygkZXZlbnQpXCJcclxuICAgICAgICAoc2Nyb2xsVG9Cb3R0b20pPVwiYnBzU2Nyb2xsVG9Cb3R0b20uZW1pdCgpXCJcclxuICAgICAgPjwvYnBzLW9wdGlvbi1jb250YWluZXI+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gIGAsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdhbnQtc2VsZWN0JyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1pbi1mb3JtLWl0ZW1dJzogJyEhbnpGb3JtU3RhdHVzU2VydmljZScsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtbGddJzogJ2Jwc1NpemUgPT09IFwibGFyZ2VcIicsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtc21dJzogJ2Jwc1NpemUgPT09IFwic21hbGxcIicsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtc2hvdy1hcnJvd10nOiBgYnBzU2hvd0Fycm93YCxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kaXNhYmxlZF0nOiAnYnBzRGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXNob3ctc2VhcmNoXSc6IGAoYnBzU2hvd1NlYXJjaCB8fCBicHNNb2RlICE9PSAnZGVmYXVsdCcpICYmICFicHNEaXNhYmxlZGAsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtYWxsb3ctY2xlYXJdJzogJ2Jwc0FsbG93Q2xlYXInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWJvcmRlcmxlc3NdJzogJ2Jwc0JvcmRlcmxlc3MnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LW9wZW5dJzogJ2Jwc09wZW4nLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWZvY3VzZWRdJzogJ2Jwc09wZW4gfHwgZm9jdXNlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtc2luZ2xlXSc6IGBicHNNb2RlID09PSAnZGVmYXVsdCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LW11bHRpcGxlXSc6IGBicHNNb2RlICE9PSAnZGVmYXVsdCdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXJ0bF0nOiBgZGlyID09PSAncnRsJ2BcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgcmVhZG9ubHkgX256TW9kdWxlTmFtZTogTnpDb25maWdLZXkgPSBOWl9DT05GSUdfTU9EVUxFX05BTUU7XHJcblxyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNBbGxvd0NsZWFyOiBCb29sZWFuSW5wdXQ7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc0JvcmRlcmxlc3M6IEJvb2xlYW5JbnB1dDtcclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYnBzU2hvd1NlYXJjaDogQm9vbGVhbklucHV0O1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNMb2FkaW5nOiBCb29sZWFuSW5wdXQ7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc0F1dG9Gb2N1czogQm9vbGVhbklucHV0O1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNBdXRvQ2xlYXJTZWFyY2hWYWx1ZTogQm9vbGVhbklucHV0O1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNTZXJ2ZXJTZWFyY2g6IEJvb2xlYW5JbnB1dDtcclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYnBzRGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYnBzT3BlbjogQm9vbGVhbklucHV0O1xyXG5cclxuICBASW5wdXQoKSBicHNJZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgYnBzU2l6ZTogTnpTZWxlY3RTaXplVHlwZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBicHNTdGF0dXM6IE56U3RhdHVzID0gJyc7XHJcbiAgQElucHV0KCkgYnBzT3B0aW9uSGVpZ2h0UHggPSAyMztcclxuICBASW5wdXQoKSBicHNPcHRpb25PdmVyZmxvd1NpemUgPSA4O1xyXG4gIEBJbnB1dCgpIGJwc0Ryb3Bkb3duQ2xhc3NOYW1lOiBzdHJpbmdbXSB8IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGJwc0Ryb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCA9IHRydWU7XHJcbiAgQElucHV0KCkgYnBzRHJvcGRvd25TdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGJwc05vdEZvdW5kQ29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuICBASW5wdXQoKSBicHNQbGFjZUhvbGRlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGJwc1BsYWNlbWVudDogTnpTZWxlY3RQbGFjZW1lbnRUeXBlIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgYnBzTWF4VGFnQ291bnQgPSBJbmZpbml0eTtcclxuICBASW5wdXQoKSBicHNEcm9wZG93blJlbmRlcjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGJwc0N1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpTZWxlY3RJdGVtSW50ZXJmYWNlIH0+IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KClcclxuICBAV2l0aENvbmZpZzxUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgc3RyaW5nIHwgbnVsbD4oKVxyXG4gIGJwc1N1ZmZpeEljb246IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBicHNDbGVhckljb246IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBicHNSZW1vdmVJY29uOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgYnBzTWVudUl0ZW1TZWxlY3RlZEljb246IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBicHNUb2tlblNlcGFyYXRvcnM6IHN0cmluZ1tdID0gW107XHJcbiAgQElucHV0KCkgYnBzTWF4VGFnUGxhY2Vob2xkZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelNhZmVBbnlbXSB9PiB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGJwc01heE11bHRpcGxlQ291bnQgPSBJbmZpbml0eTtcclxuICBASW5wdXQoKSBicHNNb2RlOiBOelNlbGVjdE1vZGVUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIGJwc0ZpbHRlck9wdGlvbjogTnpGaWx0ZXJPcHRpb25UeXBlID0gZGVmYXVsdEZpbHRlck9wdGlvbjtcclxuICBASW5wdXQoKSBjb21wYXJlV2l0aDogKG8xOiBOelNhZmVBbnksIG8yOiBOelNhZmVBbnkpID0+IGJvb2xlYW4gPSAobzE6IE56U2FmZUFueSwgbzI6IE56U2FmZUFueSkgPT4gbzEgPT09IG8yO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNBbGxvd0NsZWFyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWc8Ym9vbGVhbj4oKSBASW5wdXRCb29sZWFuKCkgYnBzQm9yZGVybGVzcyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNTaG93U2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0xvYWRpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzQXV0b0ZvY3VzID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0F1dG9DbGVhclNlYXJjaFZhbHVlID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzU2VydmVyU2VhcmNoID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc09wZW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzU2VsZWN0T25UYWIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZzxib29sZWFuPigpIEBJbnB1dEJvb2xlYW4oKSBicHNCYWNrZHJvcCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGJwc09wdGlvbnM6IE56U2VsZWN0T3B0aW9uSW50ZXJmYWNlW10gPSBbXTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYnBzU2hvd0Fycm93KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9icHNTaG93QXJyb3cgPSB2YWx1ZTtcclxuICB9XHJcbiAgZ2V0IGJwc1Nob3dBcnJvdygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9icHNTaG93QXJyb3cgPT09IHVuZGVmaW5lZCA/IHRoaXMuYnBzTW9kZSA9PT0gJ2RlZmF1bHQnIDogdGhpcy5fYnBzU2hvd0Fycm93O1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc09uU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc1Njcm9sbFRvQm90dG9tID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNCbHVyID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNGb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAVmlld0NoaWxkKENka092ZXJsYXlPcmlnaW4sIHsgc3RhdGljOiB0cnVlLCByZWFkOiBFbGVtZW50UmVmIH0pIG9yaWdpbkVsZW1lbnQhOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoQ2RrQ29ubmVjdGVkT3ZlcmxheSwgeyBzdGF0aWM6IHRydWUgfSkgY2RrQ29ubmVjdGVkT3ZlcmxheSE6IENka0Nvbm5lY3RlZE92ZXJsYXk7XHJcbiAgQFZpZXdDaGlsZChCcHNTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KSBicHNTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50ITogQnBzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudDtcclxuICBAQ29udGVudENoaWxkcmVuKEJwc09wdGlvbkNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZOek9wdGlvbkNvbXBvbmVudCE6IFF1ZXJ5TGlzdDxCcHNPcHRpb25Db21wb25lbnQ+O1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQnBzT3B0aW9uR3JvdXBDb21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcclxuICBsaXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50ITogUXVlcnlMaXN0PEJwc09wdGlvbkdyb3VwQ29tcG9uZW50PjtcclxuICBAVmlld0NoaWxkKEJwc09wdGlvbkdyb3VwQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSwgcmVhZDogRWxlbWVudFJlZiB9KSBicHNPcHRpb25Hcm91cENvbXBvbmVudEVsZW1lbnQhOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoQnBzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUsIHJlYWQ6IEVsZW1lbnRSZWYgfSlcclxuICBicHNTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50RWxlbWVudCE6IEVsZW1lbnRSZWY7XHJcbiAgcHJpdmF0ZSBsaXN0T2ZWYWx1ZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE56U2FmZUFueVtdPihbXSk7XHJcbiAgcHJpdmF0ZSBsaXN0T2ZUZW1wbGF0ZUl0ZW0kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOelNlbGVjdEl0ZW1JbnRlcmZhY2VbXT4oW10pO1xyXG4gIHByaXZhdGUgbGlzdE9mVGFnQW5kVGVtcGxhdGVJdGVtOiBOelNlbGVjdEl0ZW1JbnRlcmZhY2VbXSA9IFtdO1xyXG4gIHByaXZhdGUgc2VhcmNoVmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gIHByaXZhdGUgaXNSZWFjdGl2ZURyaXZlbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgdmFsdWU6IE56U2FmZUFueSB8IE56U2FmZUFueVtdO1xyXG4gIHByaXZhdGUgX2Jwc1Nob3dBcnJvdzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIHJlcXVlc3RJZDogbnVtYmVyID0gLTE7XHJcbiAgcHJpdmF0ZSBpc056RGlzYWJsZUZpcnN0Q2hhbmdlOiBib29sZWFuID0gdHJ1ZTtcclxuICBvbkNoYW5nZTogT25DaGFuZ2VUeXBlID0gKCkgPT4ge307XHJcbiAgb25Ub3VjaGVkOiBPblRvdWNoZWRUeXBlID0gKCkgPT4ge307XHJcbiAgZHJvcERvd25Qb3NpdGlvbjogTnpTZWxlY3RQbGFjZW1lbnRUeXBlID0gJ2JvdHRvbUxlZnQnO1xyXG4gIHRyaWdnZXJXaWR0aDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgbGlzdE9mQ29udGFpbmVySXRlbTogTnpTZWxlY3RJdGVtSW50ZXJmYWNlW10gPSBbXTtcclxuICBsaXN0T2ZUb3BJdGVtOiBOelNlbGVjdEl0ZW1JbnRlcmZhY2VbXSA9IFtdO1xyXG4gIGFjdGl2YXRlZFZhbHVlOiBOelNhZmVBbnkgfCBudWxsID0gbnVsbDtcclxuICBsaXN0T2ZWYWx1ZTogTnpTYWZlQW55W10gPSBbXTtcclxuICBmb2N1c2VkID0gZmFsc2U7XHJcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcclxuICBwb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFtdO1xyXG5cclxuICAvLyBzdGF0dXNcclxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtc2VsZWN0JztcclxuICBzdGF0dXNDbHM6IE5nQ2xhc3NJbnRlcmZhY2UgPSB7fTtcclxuICBzdGF0dXM6IE56VmFsaWRhdGVTdGF0dXMgPSAnJztcclxuICBoYXNGZWVkYmFjazogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBnZW5lcmF0ZVRhZ0l0ZW0odmFsdWU6IHN0cmluZyk6IE56U2VsZWN0SXRlbUludGVyZmFjZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBicHNWYWx1ZTogdmFsdWUsXHJcbiAgICAgIGJwc0xhYmVsOiB2YWx1ZSxcclxuICAgICAgdHlwZTogJ2l0ZW0nXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgb25JdGVtQ2xpY2sodmFsdWU6IE56U2FmZUFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmF0ZWRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMuYnBzTW9kZSA9PT0gJ2RlZmF1bHQnKSB7XHJcbiAgICAgIGlmICh0aGlzLmxpc3RPZlZhbHVlLmxlbmd0aCA9PT0gMCB8fCAhdGhpcy5jb21wYXJlV2l0aCh0aGlzLmxpc3RPZlZhbHVlWzBdLCB2YWx1ZSkpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxpc3RPZlZhbHVlKFt2YWx1ZV0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0T3BlblN0YXRlKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gdGhpcy5saXN0T2ZWYWx1ZS5maW5kSW5kZXgobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8sIHZhbHVlKSk7XHJcbiAgICAgIGlmICh0YXJnZXRJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICBjb25zdCBsaXN0T2ZWYWx1ZUFmdGVyUmVtb3ZlZCA9IHRoaXMubGlzdE9mVmFsdWUuZmlsdGVyKChfLCBpKSA9PiBpICE9PSB0YXJnZXRJbmRleCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMaXN0T2ZWYWx1ZShsaXN0T2ZWYWx1ZUFmdGVyUmVtb3ZlZCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5saXN0T2ZWYWx1ZS5sZW5ndGggPCB0aGlzLmJwc01heE11bHRpcGxlQ291bnQpIHtcclxuICAgICAgICBjb25zdCBsaXN0T2ZWYWx1ZUFmdGVyQWRkZWQgPSBbLi4udGhpcy5saXN0T2ZWYWx1ZSwgdmFsdWVdO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGlzdE9mVmFsdWUobGlzdE9mVmFsdWVBZnRlckFkZGVkKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmZvY3VzKCk7XHJcbiAgICAgIGlmICh0aGlzLmJwc0F1dG9DbGVhclNlYXJjaFZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhcklucHV0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uSXRlbURlbGV0ZShpdGVtOiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnN0IGxpc3RPZlNlbGVjdGVkVmFsdWUgPSB0aGlzLmxpc3RPZlZhbHVlLmZpbHRlcih2ID0+ICF0aGlzLmNvbXBhcmVXaXRoKHYsIGl0ZW0uYnBzVmFsdWUpKTtcclxuICAgIHRoaXMudXBkYXRlTGlzdE9mVmFsdWUobGlzdE9mU2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICB0aGlzLmNsZWFySW5wdXQoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUxpc3RPZkNvbnRhaW5lckl0ZW0oKTogdm9pZCB7XHJcbiAgICBsZXQgbGlzdE9mQ29udGFpbmVySXRlbSA9IHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVJdGVtXHJcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiAhaXRlbS5icHNIaWRlKVxyXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5icHNTZXJ2ZXJTZWFyY2ggJiYgdGhpcy5zZWFyY2hWYWx1ZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuYnBzRmlsdGVyT3B0aW9uKHRoaXMuc2VhcmNoVmFsdWUsIGl0ZW0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgaWYgKHRoaXMuYnBzTW9kZSA9PT0gJ3RhZ3MnICYmIHRoaXMuc2VhcmNoVmFsdWUpIHtcclxuICAgICAgY29uc3QgbWF0Y2hlZEl0ZW0gPSB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlSXRlbS5maW5kKGl0ZW0gPT4gaXRlbS5icHNMYWJlbCA9PT0gdGhpcy5zZWFyY2hWYWx1ZSk7XHJcbiAgICAgIGlmICghbWF0Y2hlZEl0ZW0pIHtcclxuICAgICAgICBjb25zdCB0YWdJdGVtID0gdGhpcy5nZW5lcmF0ZVRhZ0l0ZW0odGhpcy5zZWFyY2hWYWx1ZSk7XHJcbiAgICAgICAgbGlzdE9mQ29udGFpbmVySXRlbSA9IFt0YWdJdGVtLCAuLi5saXN0T2ZDb250YWluZXJJdGVtXTtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlZFZhbHVlID0gdGFnSXRlbS5icHNWYWx1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmFjdGl2YXRlZFZhbHVlID0gbWF0Y2hlZEl0ZW0uYnBzVmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGFjdGl2YXRlZEl0ZW0gPVxyXG4gICAgICBsaXN0T2ZDb250YWluZXJJdGVtLmZpbmQoaXRlbSA9PiBpdGVtLmJwc0xhYmVsID09PSB0aGlzLnNlYXJjaFZhbHVlKSB8fFxyXG4gICAgICBsaXN0T2ZDb250YWluZXJJdGVtLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0uYnBzVmFsdWUsIHRoaXMuYWN0aXZhdGVkVmFsdWUpKSB8fFxyXG4gICAgICBsaXN0T2ZDb250YWluZXJJdGVtLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0uYnBzVmFsdWUsIHRoaXMubGlzdE9mVmFsdWVbMF0pKSB8fFxyXG4gICAgICBsaXN0T2ZDb250YWluZXJJdGVtWzBdO1xyXG4gICAgdGhpcy5hY3RpdmF0ZWRWYWx1ZSA9IChhY3RpdmF0ZWRJdGVtICYmIGFjdGl2YXRlZEl0ZW0uYnBzVmFsdWUpIHx8IG51bGw7XHJcbiAgICBsZXQgbGlzdE9mR3JvdXBMYWJlbDogQXJyYXk8c3RyaW5nIHwgbnVtYmVyIHwgVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGw+ID0gW107XHJcbiAgICBpZiAodGhpcy5pc1JlYWN0aXZlRHJpdmVuKSB7XHJcbiAgICAgIGxpc3RPZkdyb3VwTGFiZWwgPSBbLi4ubmV3IFNldCh0aGlzLmJwc09wdGlvbnMuZmlsdGVyKG8gPT4gby5ncm91cExhYmVsKS5tYXAobyA9PiBvLmdyb3VwTGFiZWwhKSldO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudCkge1xyXG4gICAgICAgIGxpc3RPZkdyb3VwTGFiZWwgPSB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQubWFwKG8gPT4gby5icHNMYWJlbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKiBpbnNlcnQgZ3JvdXAgaXRlbSAqKi9cclxuICAgIGxpc3RPZkdyb3VwTGFiZWwuZm9yRWFjaChsYWJlbCA9PiB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gbGlzdE9mQ29udGFpbmVySXRlbS5maW5kSW5kZXgoaXRlbSA9PiBsYWJlbCA9PT0gaXRlbS5ncm91cExhYmVsKTtcclxuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICBjb25zdCBncm91cEl0ZW0gPSB7IGdyb3VwTGFiZWw6IGxhYmVsLCB0eXBlOiAnZ3JvdXAnLCBrZXk6IGxhYmVsIH0gYXMgTnpTZWxlY3RJdGVtSW50ZXJmYWNlO1xyXG4gICAgICAgIGxpc3RPZkNvbnRhaW5lckl0ZW0uc3BsaWNlKGluZGV4LCAwLCBncm91cEl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMubGlzdE9mQ29udGFpbmVySXRlbSA9IFsuLi5saXN0T2ZDb250YWluZXJJdGVtXTtcclxuICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJJbnB1dCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYnBzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5jbGVhcklucHV0VmFsdWUoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUxpc3RPZlZhbHVlKGxpc3RPZlZhbHVlOiBOelNhZmVBbnlbXSk6IHZvaWQge1xyXG4gICAgY29uc3QgY292ZXJ0TGlzdFRvTW9kZWwgPSAobGlzdDogTnpTYWZlQW55W10sIG1vZGU6IE56U2VsZWN0TW9kZVR5cGUpOiBOelNhZmVBbnlbXSB8IE56U2FmZUFueSA9PiB7XHJcbiAgICAgIGlmIChtb2RlID09PSAnZGVmYXVsdCcpIHtcclxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gbGlzdFswXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbW9kZWwgPSBjb3ZlcnRMaXN0VG9Nb2RlbChsaXN0T2ZWYWx1ZSwgdGhpcy5icHNNb2RlKTtcclxuICAgIGlmICh0aGlzLnZhbHVlICE9PSBtb2RlbCkge1xyXG4gICAgICB0aGlzLmxpc3RPZlZhbHVlID0gbGlzdE9mVmFsdWU7XHJcbiAgICAgIHRoaXMubGlzdE9mVmFsdWUkLm5leHQobGlzdE9mVmFsdWUpO1xyXG4gICAgICB0aGlzLnZhbHVlID0gbW9kZWw7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblRva2VuU2VwYXJhdGUobGlzdE9mTGFiZWw6IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICBjb25zdCBsaXN0T2ZNYXRjaGVkVmFsdWUgPSB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlSXRlbVxyXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gbGlzdE9mTGFiZWwuZmluZEluZGV4KGxhYmVsID0+IGxhYmVsID09PSBpdGVtLmJwc0xhYmVsKSAhPT0gLTEpXHJcbiAgICAgIC5tYXAoaXRlbSA9PiBpdGVtLmJwc1ZhbHVlKVxyXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gdGhpcy5saXN0T2ZWYWx1ZS5maW5kSW5kZXgodiA9PiB0aGlzLmNvbXBhcmVXaXRoKHYsIGl0ZW0pKSA9PT0gLTEpO1xyXG4gICAgaWYgKHRoaXMuYnBzTW9kZSA9PT0gJ211bHRpcGxlJykge1xyXG4gICAgICB0aGlzLnVwZGF0ZUxpc3RPZlZhbHVlKFsuLi50aGlzLmxpc3RPZlZhbHVlLCAuLi5saXN0T2ZNYXRjaGVkVmFsdWVdKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5icHNNb2RlID09PSAndGFncycpIHtcclxuICAgICAgY29uc3QgbGlzdE9mVW5NYXRjaGVkTGFiZWwgPSBsaXN0T2ZMYWJlbC5maWx0ZXIoXHJcbiAgICAgICAgbGFiZWwgPT4gdGhpcy5saXN0T2ZUYWdBbmRUZW1wbGF0ZUl0ZW0uZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5icHNMYWJlbCA9PT0gbGFiZWwpID09PSAtMVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnVwZGF0ZUxpc3RPZlZhbHVlKFsuLi50aGlzLmxpc3RPZlZhbHVlLCAuLi5saXN0T2ZNYXRjaGVkVmFsdWUsIC4uLmxpc3RPZlVuTWF0Y2hlZExhYmVsXSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNsZWFySW5wdXQoKTtcclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5icHNEaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBsaXN0T2ZGaWx0ZXJlZE9wdGlvbk5vdERpc2FibGVkID0gdGhpcy5saXN0T2ZDb250YWluZXJJdGVtXHJcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLnR5cGUgPT09ICdpdGVtJylcclxuICAgICAgLmZpbHRlcihpdGVtID0+ICFpdGVtLmJwc0Rpc2FibGVkKTtcclxuICAgIGNvbnN0IGFjdGl2YXRlZEluZGV4ID0gbGlzdE9mRmlsdGVyZWRPcHRpb25Ob3REaXNhYmxlZC5maW5kSW5kZXgoaXRlbSA9PlxyXG4gICAgICB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0uYnBzVmFsdWUsIHRoaXMuYWN0aXZhdGVkVmFsdWUpXHJcbiAgICApO1xyXG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgY2FzZSBVUF9BUlJPVzpcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuYnBzT3BlbiAmJiBsaXN0T2ZGaWx0ZXJlZE9wdGlvbk5vdERpc2FibGVkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGNvbnN0IHByZUluZGV4ID0gYWN0aXZhdGVkSW5kZXggPiAwID8gYWN0aXZhdGVkSW5kZXggLSAxIDogbGlzdE9mRmlsdGVyZWRPcHRpb25Ob3REaXNhYmxlZC5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmF0ZWRWYWx1ZSA9IGxpc3RPZkZpbHRlcmVkT3B0aW9uTm90RGlzYWJsZWRbcHJlSW5kZXhdLmJwc1ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBET1dOX0FSUk9XOlxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAodGhpcy5icHNPcGVuICYmIGxpc3RPZkZpbHRlcmVkT3B0aW9uTm90RGlzYWJsZWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gYWN0aXZhdGVkSW5kZXggPCBsaXN0T2ZGaWx0ZXJlZE9wdGlvbk5vdERpc2FibGVkLmxlbmd0aCAtIDEgPyBhY3RpdmF0ZWRJbmRleCArIDEgOiAwO1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmF0ZWRWYWx1ZSA9IGxpc3RPZkZpbHRlcmVkT3B0aW9uTm90RGlzYWJsZWRbbmV4dEluZGV4XS5icHNWYWx1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVOVEVSOlxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAodGhpcy5icHNPcGVuKSB7XHJcbiAgICAgICAgICBpZiAoaXNOb3ROaWwodGhpcy5hY3RpdmF0ZWRWYWx1ZSkgJiYgYWN0aXZhdGVkSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25JdGVtQ2xpY2sodGhpcy5hY3RpdmF0ZWRWYWx1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTUEFDRTpcclxuICAgICAgICBpZiAoIXRoaXMuYnBzT3Blbikge1xyXG4gICAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUodHJ1ZSk7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFRBQjpcclxuICAgICAgICBpZiAodGhpcy5icHNTZWxlY3RPblRhYikge1xyXG4gICAgICAgICAgaWYgKHRoaXMuYnBzT3Blbikge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmIChpc05vdE5pbCh0aGlzLmFjdGl2YXRlZFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgIHRoaXMub25JdGVtQ2xpY2sodGhpcy5hY3RpdmF0ZWRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFU0NBUEU6XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2tpcCB0aGUgRVNDQVBFIHByb2Nlc3NpbmcsIGl0IHdpbGwgYmUgaGFuZGxlZCBpbiB7QGxpbmsgb25PdmVybGF5S2V5RG93bn0uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgaWYgKCF0aGlzLmJwc09wZW4pIHtcclxuICAgICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldE9wZW5TdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYnBzT3BlbiAhPT0gdmFsdWUpIHtcclxuICAgICAgdGhpcy5icHNPcGVuID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuYnBzT3BlbkNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgICAgdGhpcy5vbk9wZW5DaGFuZ2UoKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbk9wZW5DaGFuZ2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTtcclxuICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xyXG4gIH1cclxuXHJcbiAgb25JbnB1dFZhbHVlQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VhcmNoVmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlTGlzdE9mQ29udGFpbmVySXRlbSgpO1xyXG4gICAgdGhpcy5icHNPblNlYXJjaC5lbWl0KHZhbHVlKTtcclxuICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgb25DbGVhclNlbGVjdGlvbigpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlTGlzdE9mVmFsdWUoW10pO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja091dHNpZGUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkge1xyXG4gICAgICB0aGlzLnNldE9wZW5TdGF0ZShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb2N1cygpOiB2b2lkIHtcclxuICAgIHRoaXMuYnBzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgYmx1cigpOiB2b2lkIHtcclxuICAgIHRoaXMuYnBzU2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5ibHVyKCk7XHJcbiAgfVxyXG5cclxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBsYWNlbWVudCA9IGdldFBsYWNlbWVudE5hbWUocG9zaXRpb24pO1xyXG4gICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gcGxhY2VtZW50IGFzIE56U2VsZWN0UGxhY2VtZW50VHlwZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgdGhpcy5vcmlnaW5FbGVtZW50Lm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgY29uc3QgdHJpZ2dlcldpZHRoID0gdGhpcy50cmlnZ2VyV2lkdGg7XHJcbiAgICAgIGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlcXVlc3RJZCk7XHJcbiAgICAgIHRoaXMucmVxdWVzdElkID0gcmVxQW5pbUZyYW1lKCgpID0+IHtcclxuICAgICAgICAvLyBCbGluayB0cmlnZ2VycyBzdHlsZSBhbmQgbGF5b3V0IHBpcGVsaW5lcyBhbnl0aW1lIHRoZSBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClgIGlzIGNhbGxlZCwgd2hpY2ggbWF5IGNhdXNlIGFcclxuICAgICAgICAvLyBmcmFtZSBkcm9wLiBUaGF0J3Mgd2h5IGl0J3Mgc2NoZWR1bGVkIHRocm91Z2ggdGhlIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIHRvIHVubG9hZCB0aGUgY29tcG9zaXRlIHRocmVhZC5cclxuICAgICAgICB0aGlzLnRyaWdnZXJXaWR0aCA9IHRoaXMub3JpZ2luRWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgICAgIGlmICh0cmlnZ2VyV2lkdGggIT09IHRoaXMudHJpZ2dlcldpZHRoKSB7XHJcbiAgICAgICAgICAvLyBUaGUgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAgd2lsbCB0cmlnZ2VyIGNoYW5nZSBkZXRlY3Rpb24sIGJ1dCB3ZSdyZSBpbnNpZGUgYW4gYE9uUHVzaGAgY29tcG9uZW50IHdoaWNoIHdvbid0IGhhdmVcclxuICAgICAgICAgIC8vIHRoZSBgQ2hlY2tzRW5hYmxlZGAgc3RhdGUuIENhbGxpbmcgYG1hcmtGb3JDaGVjaygpYCB3aWxsIGFsbG93IEFuZ3VsYXIgdG8gcnVuIHRoZSBjaGFuZ2UgZGV0ZWN0aW9uIGZyb20gdGhlIHJvb3QgY29tcG9uZW50XHJcbiAgICAgICAgICAvLyBkb3duIHRvIHRoZSBgbnotc2VsZWN0YC4gQnV0IHdlJ2xsIHRyaWdnZXIgb25seSBsb2NhbCBjaGFuZ2UgZGV0ZWN0aW9uIGlmIHRoZSBgdHJpZ2dlcldpZHRoYCBoYXMgYmVlbiBjaGFuZ2VkLlxyXG4gICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zKCk6IHZvaWQge1xyXG4gICAgcmVxQW5pbUZyYW1lKCgpID0+IHtcclxuICAgICAgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Py5vdmVybGF5UmVmPy51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIGRlc3Ryb3kkOiBOekRlc3Ryb3lTZXJ2aWNlLFxyXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBob3N0OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxyXG4gICAgcHJpdmF0ZSBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcixcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlLFxyXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIG56Rm9ybVN0YXR1c1NlcnZpY2U/OiBOekZvcm1TdGF0dXNTZXJ2aWNlLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuekZvcm1Ob1N0YXR1c1NlcnZpY2U/OiBOekZvcm1Ob1N0YXR1c1NlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIHdyaXRlVmFsdWUobW9kZWxWYWx1ZTogTnpTYWZlQW55IHwgTnpTYWZlQW55W10pOiB2b2lkIHtcclxuICAgIC8qKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNDk4OCAqKi9cclxuICAgIGlmICh0aGlzLnZhbHVlICE9PSBtb2RlbFZhbHVlKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBtb2RlbFZhbHVlO1xyXG4gICAgICBjb25zdCBjb3ZlcnRNb2RlbFRvTGlzdCA9IChtb2RlbDogTnpTYWZlQW55W10gfCBOelNhZmVBbnksIG1vZGU6IE56U2VsZWN0TW9kZVR5cGUpOiBOelNhZmVBbnlbXSA9PiB7XHJcbiAgICAgICAgaWYgKG1vZGVsID09PSBudWxsIHx8IG1vZGVsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdkZWZhdWx0Jykge1xyXG4gICAgICAgICAgcmV0dXJuIFttb2RlbF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBtb2RlbDtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IGxpc3RPZlZhbHVlID0gY292ZXJ0TW9kZWxUb0xpc3QobW9kZWxWYWx1ZSwgdGhpcy5icHNNb2RlKTtcclxuICAgICAgdGhpcy5saXN0T2ZWYWx1ZSA9IGxpc3RPZlZhbHVlO1xyXG4gICAgICB0aGlzLmxpc3RPZlZhbHVlJC5uZXh0KGxpc3RPZlZhbHVlKTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBPbkNoYW5nZVR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBPblRvdWNoZWRUeXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5icHNEaXNhYmxlZCA9ICh0aGlzLmlzTnpEaXNhYmxlRmlyc3RDaGFuZ2UgJiYgdGhpcy5icHNEaXNhYmxlZCkgfHwgZGlzYWJsZWQ7XHJcbiAgICB0aGlzLmlzTnpEaXNhYmxlRmlyc3RDaGFuZ2UgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLmJwc0Rpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuc2V0T3BlblN0YXRlKGZhbHNlKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBicHNPcGVuLCBicHNEaXNhYmxlZCwgYnBzT3B0aW9ucywgYnBzU3RhdHVzLCBicHNQbGFjZW1lbnQgfSA9IGNoYW5nZXM7XHJcbiAgICBpZiAoYnBzT3Blbikge1xyXG4gICAgICB0aGlzLm9uT3BlbkNoYW5nZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGJwc0Rpc2FibGVkICYmIHRoaXMuYnBzRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgaWYgKGJwc09wdGlvbnMpIHtcclxuICAgICAgdGhpcy5pc1JlYWN0aXZlRHJpdmVuID0gdHJ1ZTtcclxuICAgICAgY29uc3QgbGlzdE9mT3B0aW9ucyA9IHRoaXMuYnBzT3B0aW9ucyB8fCBbXTtcclxuICAgICAgY29uc3QgbGlzdE9mVHJhbnNmb3JtZWRJdGVtID0gbGlzdE9mT3B0aW9ucy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRlbXBsYXRlOiBpdGVtLmxhYmVsIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYgPyBpdGVtLmxhYmVsIDogbnVsbCxcclxuICAgICAgICAgIGJwc1RpdGxlOiB0aGlzLmdldFRpdGxlKGl0ZW0udGl0bGUsIGl0ZW0ubGFiZWwpLFxyXG4gICAgICAgICAgYnBzTGFiZWw6IHR5cGVvZiBpdGVtLmxhYmVsID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgaXRlbS5sYWJlbCA9PT0gJ251bWJlcicgPyBpdGVtLmxhYmVsIDogbnVsbCxcclxuICAgICAgICAgIGJwc1ZhbHVlOiBpdGVtLnZhbHVlLFxyXG4gICAgICAgICAgYnBzRGlzYWJsZWQ6IGl0ZW0uZGlzYWJsZWQgfHwgZmFsc2UsXHJcbiAgICAgICAgICBicHNIaWRlOiBpdGVtLmhpZGUgfHwgZmFsc2UsXHJcbiAgICAgICAgICBicHNDdXN0b21Db250ZW50OiBpdGVtLmxhYmVsIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYsXHJcbiAgICAgICAgICBncm91cExhYmVsOiBpdGVtLmdyb3VwTGFiZWwgfHwgbnVsbCxcclxuICAgICAgICAgIHR5cGU6ICdpdGVtJyxcclxuICAgICAgICAgIGtleTogaXRlbS5rZXkgPT09IHVuZGVmaW5lZCA/IGl0ZW0udmFsdWUgOiBpdGVtLmtleVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmxpc3RPZlRlbXBsYXRlSXRlbSQubmV4dChsaXN0T2ZUcmFuc2Zvcm1lZEl0ZW0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGJwc1N0YXR1cykge1xyXG4gICAgICB0aGlzLnNldFN0YXR1c1N0eWxlcyh0aGlzLmJwc1N0YXR1cywgdGhpcy5oYXNGZWVkYmFjayk7XHJcbiAgICB9XHJcbiAgICBpZiAoYnBzUGxhY2VtZW50KSB7XHJcbiAgICAgIGNvbnN0IHsgY3VycmVudFZhbHVlIH0gPSBicHNQbGFjZW1lbnQ7XHJcbiAgICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IGN1cnJlbnRWYWx1ZSBhcyBOelNlbGVjdFBsYWNlbWVudFR5cGU7XHJcbiAgICAgIGNvbnN0IGxpc3RPZlBsYWNlbWVudCA9IFsnYm90dG9tTGVmdCcsICd0b3BMZWZ0JywgJ2JvdHRvbVJpZ2h0JywgJ3RvcFJpZ2h0J107XHJcbiAgICAgIGlmIChjdXJyZW50VmFsdWUgJiYgbGlzdE9mUGxhY2VtZW50LmluY2x1ZGVzKGN1cnJlbnRWYWx1ZSkpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9ucyA9IFtQT1NJVElPTl9NQVBbY3VycmVudFZhbHVlIGFzIFBPU0lUSU9OX1RZUEVdXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9ucyA9IGxpc3RPZlBsYWNlbWVudC5tYXAoZSA9PiBQT1NJVElPTl9NQVBbZSBhcyBQT1NJVElPTl9UWVBFXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uekZvcm1TdGF0dXNTZXJ2aWNlPy5mb3JtU3RhdHVzQ2hhbmdlc1xyXG4gICAgICAucGlwZShcclxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgocHJlLCBjdXIpID0+IHtcclxuICAgICAgICAgIHJldHVybiBwcmUuc3RhdHVzID09PSBjdXIuc3RhdHVzICYmIHByZS5oYXNGZWVkYmFjayA9PT0gY3VyLmhhc0ZlZWRiYWNrO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMubnpGb3JtTm9TdGF0dXNTZXJ2aWNlID8gdGhpcy5uekZvcm1Ob1N0YXR1c1NlcnZpY2Uubm9Gb3JtU3RhdHVzIDogb2JzZXJ2YWJsZU9mKGZhbHNlKSksXHJcbiAgICAgICAgbWFwKChbeyBzdGF0dXMsIGhhc0ZlZWRiYWNrIH0sIG5vU3RhdHVzXSkgPT4gKHsgc3RhdHVzOiBub1N0YXR1cyA/ICcnIDogc3RhdHVzLCBoYXNGZWVkYmFjayB9KSksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoeyBzdGF0dXMsIGhhc0ZlZWRiYWNrIH0pID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXR1c1N0eWxlcyhzdGF0dXMsIGhhc0ZlZWRiYWNrKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5mb2N1c01vbml0b3JcclxuICAgICAgLm1vbml0b3IodGhpcy5ob3N0LCB0cnVlKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoZm9jdXNPcmlnaW4gPT4ge1xyXG4gICAgICAgIGlmICghZm9jdXNPcmlnaW4pIHtcclxuICAgICAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgICB0aGlzLmJwc0JsdXIuZW1pdCgpO1xyXG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgICAgdGhpcy5icHNGb2N1cy5lbWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIGNvbWJpbmVMYXRlc3QoW3RoaXMubGlzdE9mVmFsdWUkLCB0aGlzLmxpc3RPZlRlbXBsYXRlSXRlbSRdKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKFtsaXN0T2ZTZWxlY3RlZFZhbHVlLCBsaXN0T2ZUZW1wbGF0ZUl0ZW1dKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlzdE9mVGFnSXRlbSA9IGxpc3RPZlNlbGVjdGVkVmFsdWVcclxuICAgICAgICAgIC5maWx0ZXIoKCkgPT4gdGhpcy5icHNNb2RlID09PSAndGFncycpXHJcbiAgICAgICAgICAuZmlsdGVyKHZhbHVlID0+IGxpc3RPZlRlbXBsYXRlSXRlbS5maW5kSW5kZXgobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8uYnBzVmFsdWUsIHZhbHVlKSkgPT09IC0xKVxyXG4gICAgICAgICAgLm1hcChcclxuICAgICAgICAgICAgdmFsdWUgPT4gdGhpcy5saXN0T2ZUb3BJdGVtLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8uYnBzVmFsdWUsIHZhbHVlKSkgfHwgdGhpcy5nZW5lcmF0ZVRhZ0l0ZW0odmFsdWUpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVJdGVtID0gWy4uLmxpc3RPZlRlbXBsYXRlSXRlbSwgLi4ubGlzdE9mVGFnSXRlbV07XHJcbiAgICAgICAgdGhpcy5saXN0T2ZUb3BJdGVtID0gdGhpcy5saXN0T2ZWYWx1ZVxyXG4gICAgICAgICAgLm1hcChcclxuICAgICAgICAgICAgdiA9PlxyXG4gICAgICAgICAgICAgIFsuLi50aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlSXRlbSwgLi4udGhpcy5saXN0T2ZUb3BJdGVtXS5maW5kKGl0ZW0gPT4gdGhpcy5jb21wYXJlV2l0aCh2LCBpdGVtLmJwc1ZhbHVlKSkhXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gISFpdGVtKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxpc3RPZkNvbnRhaW5lckl0ZW0oKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm56Q29uZmlnU2VydmljZVxyXG4gICAgICAuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoJ3NlbGVjdCcpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcclxuXHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PlxyXG4gICAgICBmcm9tRXZlbnQodGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQsICdjbGljaycpXHJcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCh0aGlzLmJwc09wZW4gJiYgdGhpcy5icHNTaG93U2VhcmNoKSB8fCB0aGlzLmJwc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5zZXRPcGVuU3RhdGUoIXRoaXMuYnBzT3BlbikpO1xyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIC8vIENhcmV0YWtlciBub3RlOiB3ZSBjb3VsZCd2ZSBhZGRlZCB0aGlzIGxpc3RlbmVyIHdpdGhpbiB0aGUgdGVtcGxhdGUgYChvdmVybGF5S2V5ZG93bik9XCIuLi5cImAsXHJcbiAgICAvLyBidXQgd2l0aCB0aGlzIGFwcHJvYWNoLCBpdCdsbCBydW4gY2hhbmdlIGRldGVjdGlvbiBvbiBlYWNoIGtleWJvYXJkIGNsaWNrLCBhbmQgYWxzbyBpdCdsbCBydW5cclxuICAgIC8vIGBtYXJrRm9yQ2hlY2soKWAgaW50ZXJuYWxseSwgd2hpY2ggbWVhbnMgdGhlIHdob2xlIGNvbXBvbmVudCB0cmVlIChzdGFydGluZyBmcm9tIHRoZSByb290IGFuZFxyXG4gICAgLy8gZ29pbmcgZG93biB0byB0aGUgc2VsZWN0IGNvbXBvbmVudCkgd2lsbCBiZSByZS1jaGVja2VkIGFuZCB1cGRhdGVkIChpZiBuZWVkZWQpLlxyXG4gICAgLy8gVGhpcyBpcyBzYWZlIHRvIGRvIHRoYXQgbWFudWFsbHkgc2luY2UgYHNldE9wZW5TdGF0ZSgpYCBjYWxscyBgbWFya0ZvckNoZWNrKClgIGlmIG5lZWRlZC5cclxuICAgIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5S2V5ZG93bi5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRSkge1xyXG4gICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNSZWFjdGl2ZURyaXZlbikge1xyXG4gICAgICBtZXJnZSh0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQuY2hhbmdlcywgdGhpcy5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5jaGFuZ2VzKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgc3RhcnRXaXRoKHRydWUpLFxyXG4gICAgICAgICAgc3dpdGNoTWFwKCgpID0+XHJcbiAgICAgICAgICAgIG1lcmdlKFxyXG4gICAgICAgICAgICAgIC4uLltcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdE9mTnpPcHRpb25Db21wb25lbnQuY2hhbmdlcyxcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudC5jaGFuZ2VzLFxyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5tYXAob3B0aW9uID0+IG9wdGlvbi5jaGFuZ2VzKSxcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudC5tYXAob3B0aW9uID0+IG9wdGlvbi5jaGFuZ2VzKVxyXG4gICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgKS5waXBlKHN0YXJ0V2l0aCh0cnVlKSlcclxuICAgICAgICAgICksXHJcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBsaXN0T2ZPcHRpb25JbnRlcmZhY2UgPSB0aGlzLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LnRvQXJyYXkoKS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdGVtcGxhdGUsIGJwc0xhYmVsLCBicHNWYWx1ZSwgYnBzS2V5LCBicHNEaXNhYmxlZCwgYnBzSGlkZSwgYnBzQ3VzdG9tQ29udGVudCwgZ3JvdXBMYWJlbCB9ID0gaXRlbTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICB0ZW1wbGF0ZSxcclxuICAgICAgICAgICAgICBicHNMYWJlbCxcclxuICAgICAgICAgICAgICBicHNWYWx1ZSxcclxuICAgICAgICAgICAgICBicHNEaXNhYmxlZCxcclxuICAgICAgICAgICAgICBicHNIaWRlLFxyXG4gICAgICAgICAgICAgIGJwc0N1c3RvbUNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgZ3JvdXBMYWJlbCxcclxuICAgICAgICAgICAgICBicHNUaXRsZTogdGhpcy5nZXRUaXRsZShpdGVtLmJwc1RpdGxlLCBpdGVtLmJwc0xhYmVsKSxcclxuICAgICAgICAgICAgICB0eXBlOiAnaXRlbScsXHJcbiAgICAgICAgICAgICAga2V5OiBicHNLZXkgPT09IHVuZGVmaW5lZCA/IGJwc1ZhbHVlIDogYnBzS2V5XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMubGlzdE9mVGVtcGxhdGVJdGVtJC5uZXh0KGxpc3RPZk9wdGlvbkludGVyZmFjZSk7XHJcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVxdWVzdElkKTtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuaG9zdCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFN0YXR1c1N0eWxlcyhzdGF0dXM6IE56VmFsaWRhdGVTdGF0dXMsIGhhc0ZlZWRiYWNrOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuICAgIHRoaXMuaGFzRmVlZGJhY2sgPSBoYXNGZWVkYmFjaztcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgLy8gcmVuZGVyIHN0YXR1cyBpZiBuelN0YXR1cyBpcyBzZXRcclxuICAgIHRoaXMuc3RhdHVzQ2xzID0gZ2V0U3RhdHVzQ2xhc3NOYW1lcyh0aGlzLnByZWZpeENscywgc3RhdHVzLCBoYXNGZWVkYmFjayk7XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXR1c0NscykuZm9yRWFjaChzdGF0dXMgPT4ge1xyXG4gICAgICBpZiAodGhpcy5zdGF0dXNDbHNbc3RhdHVzXSkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQsIHN0YXR1cyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmhvc3QubmF0aXZlRWxlbWVudCwgc3RhdHVzKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRpdGxlKHRpdGxlOiBOelNlbGVjdE9wdGlvbkludGVyZmFjZVsndGl0bGUnXSwgbGFiZWw6IE56U2VsZWN0T3B0aW9uSW50ZXJmYWNlWydsYWJlbCddKTogc3RyaW5nIHtcclxuICAgIGxldCByYXdUaXRsZTogc3RyaW5nID0gdW5kZWZpbmVkITtcclxuICAgIGlmICh0aXRsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgbGFiZWwgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBsYWJlbCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICByYXdUaXRsZSA9IGxhYmVsLnRvU3RyaW5nKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRpdGxlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdGl0bGUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHJhd1RpdGxlID0gdGl0bGUudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmF3VGl0bGU7XHJcbiAgfVxyXG59XHJcbiJdfQ==