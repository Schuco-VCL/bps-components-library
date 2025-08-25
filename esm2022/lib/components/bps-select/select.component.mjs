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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsSelectComponent, deps: [{ token: i0.NgZone }, { token: i1.NzDestroyService }, { token: i2.NzConfigService }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i3.Platform }, { token: i4.FocusMonitor }, { token: i5.Directionality, optional: true }, { token: i6.NzNoAnimationDirective, host: true, optional: true }, { token: i7.NzFormStatusService, optional: true }, { token: i7.NzFormNoStatusService, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsSelectComponent, selector: "bps-select", inputs: { bpsId: "bpsId", bpsSize: "bpsSize", bpsStatus: "bpsStatus", bpsOptionHeightPx: "bpsOptionHeightPx", bpsOptionOverflowSize: "bpsOptionOverflowSize", bpsDropdownClassName: "bpsDropdownClassName", bpsDropdownMatchSelectWidth: "bpsDropdownMatchSelectWidth", bpsDropdownStyle: "bpsDropdownStyle", bpsNotFoundContent: "bpsNotFoundContent", bpsPlaceHolder: "bpsPlaceHolder", bpsPlacement: "bpsPlacement", bpsMaxTagCount: "bpsMaxTagCount", bpsDropdownRender: "bpsDropdownRender", bpsCustomTemplate: "bpsCustomTemplate", bpsSuffixIcon: "bpsSuffixIcon", bpsClearIcon: "bpsClearIcon", bpsRemoveIcon: "bpsRemoveIcon", bpsMenuItemSelectedIcon: "bpsMenuItemSelectedIcon", bpsTokenSeparators: "bpsTokenSeparators", bpsMaxTagPlaceholder: "bpsMaxTagPlaceholder", bpsMaxMultipleCount: "bpsMaxMultipleCount", bpsMode: "bpsMode", bpsFilterOption: "bpsFilterOption", compareWith: "compareWith", bpsAllowClear: "bpsAllowClear", bpsBorderless: "bpsBorderless", bpsShowSearch: "bpsShowSearch", bpsLoading: "bpsLoading", bpsAutoFocus: "bpsAutoFocus", bpsAutoClearSearchValue: "bpsAutoClearSearchValue", bpsServerSearch: "bpsServerSearch", bpsDisabled: "bpsDisabled", bpsOpen: "bpsOpen", bpsSelectOnTab: "bpsSelectOnTab", bpsBackdrop: "bpsBackdrop", bpsOptions: "bpsOptions", bpsShowArrow: "bpsShowArrow" }, outputs: { bpsOnSearch: "bpsOnSearch", bpsScrollToBottom: "bpsScrollToBottom", bpsOpenChange: "bpsOpenChange", bpsBlur: "bpsBlur", bpsFocus: "bpsFocus" }, host: { properties: { "class.ant-select-in-form-item": "!!nzFormStatusService", "class.ant-select-lg": "bpsSize === \"large\"", "class.ant-select-sm": "bpsSize === \"small\"", "class.ant-select-show-arrow": "bpsShowArrow", "class.ant-select-disabled": "bpsDisabled", "class.ant-select-show-search": "(bpsShowSearch || bpsMode !== 'default') && !bpsDisabled", "class.ant-select-allow-clear": "bpsAllowClear", "class.ant-select-borderless": "bpsBorderless", "class.ant-select-open": "bpsOpen", "class.ant-select-focused": "bpsOpen || focused", "class.ant-select-single": "bpsMode === 'default'", "class.ant-select-multiple": "bpsMode !== 'default'", "class.ant-select-rtl": "dir === 'rtl'" }, classAttribute: "ant-select" }, providers: [
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
  `, isInline: true, styles: [".ant-select-dropdown{background-color:#363636;font-size:11px;border-radius:0 0 10px 10px;margin-top:0!important;box-shadow:none;max-width:calc(100% - 29px)}.ant-select-disabled .ant-select-selection{cursor:url(/assets/bps-icons/sps_inaccessible_icon_grey.svg),auto}.ant-select-open .ant-select-selection-selected-value{color:#666}\n"], dependencies: [{ kind: "directive", type: i8.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i8.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i9.CdkConnectedOverlay, selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]", inputs: ["cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPositionStrategy", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayWidth", "cdkConnectedOverlayHeight", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayMinHeight", "cdkConnectedOverlayBackdropClass", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayViewportMargin", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOpen", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayLockPosition", "cdkConnectedOverlayFlexibleDimensions", "cdkConnectedOverlayGrowAfterOpen", "cdkConnectedOverlayPush"], outputs: ["backdropClick", "positionChange", "attach", "detach", "overlayKeydown", "overlayOutsideClick"], exportAs: ["cdkConnectedOverlay"] }, { kind: "directive", type: i9.CdkOverlayOrigin, selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]", exportAs: ["cdkOverlayOrigin"] }, { kind: "directive", type: i6.NzNoAnimationDirective, selector: "[nzNoAnimation]", inputs: ["nzNoAnimation"], exportAs: ["nzNoAnimation"] }, { kind: "directive", type: i10.NzConnectedOverlayDirective, selector: "[cdkConnectedOverlay][nzConnectedOverlay]", inputs: ["nzArrowPointAtCenter"], exportAs: ["nzConnectedOverlay"] }, { kind: "component", type: i11.BpsOptionContainerComponent, selector: "bps-option-container", inputs: ["notFoundContent", "menuItemSelectedIcon", "dropdownRender", "activatedValue", "listOfSelectedValue", "compareWith", "mode", "matchWidth", "itemSize", "maxItemLength", "listOfContainerItem"], outputs: ["itemClick", "scrollToBottom"], exportAs: ["bpsOptionContainer"] }, { kind: "component", type: i12.BpsSelectArrowComponent, selector: "bps-select-arrow", inputs: ["loading", "search", "showArrow", "suffixIcon", "feedbackIcon"] }, { kind: "component", type: i13.BpsSelectClearComponent, selector: "bps-select-clear", inputs: ["clearIcon"], outputs: ["clear"] }, { kind: "component", type: i14.BpsSelectTopControlComponent, selector: "bps-select-top-control", inputs: ["bpsId", "showSearch", "placeHolder", "open", "maxTagCount", "autofocus", "disabled", "mode", "customTemplate", "maxTagPlaceholder", "removeIcon", "listOfTopItem", "tokenSeparators"], outputs: ["tokenize", "inputValueChange", "deleteItem"], exportAs: ["bpsSelectTopControl"] }, { kind: "component", type: i15.BpsFormItemFeedbackIconComponent, selector: "bps-form-item-feedback-icon", inputs: ["status"], exportAs: ["bpsFormFeedbackIcon"] }], animations: [slideMotion], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsSelectComponent, decorators: [{
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
        }], ctorParameters: function () { return [{ type: i0.NgZone }, { type: i1.NzDestroyService }, { type: i2.NzConfigService }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i3.Platform }, { type: i4.FocusMonitor }, { type: i5.Directionality, decorators: [{
                    type: Optional
                }] }, { type: i6.NzNoAnimationDirective, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }, { type: i7.NzFormStatusService, decorators: [{
                    type: Optional
                }] }, { type: i7.NzFormNoStatusService, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { bpsId: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RixPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUdqQixNQUFNLHNCQUFzQixDQUFDO0FBRTlCLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUtMLFFBQVEsRUFDUixNQUFNLEVBSU4sV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQWdDLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBR3JGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQWlCLE1BQU0sNEJBQTRCLENBQUM7QUFDM0YsT0FBTyxFQUFF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QjtzQkFBbkMsTUFBTTtnQkFDWSxhQUFhO3NCQUEvQixNQUFNO2dCQUNZLE9BQU87c0JBQXpCLE1BQU07Z0JBQ1ksUUFBUTtzQkFBMUIsTUFBTTtnQkFDMEQsYUFBYTtzQkFBN0UsU0FBUzt1QkFBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtnQkFDYixtQkFBbUI7c0JBQXBFLFNBQVM7dUJBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUNXLDRCQUE0QjtzQkFBdEYsU0FBUzt1QkFBQyw0QkFBNEIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBQ0csdUJBQXVCO3NCQUFsRixlQUFlO3VCQUFDLGtCQUFrQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTtnQkFFMUQsNEJBQTRCO3NCQUQzQixlQUFlO3VCQUFDLHVCQUF1QixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTtnQkFFUyw4QkFBOEI7c0JBQXJHLFNBQVM7dUJBQUMsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7Z0JBRXRFLG1DQUFtQztzQkFEbEMsU0FBUzt1QkFBQyw0QkFBNEIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuaW1wb3J0IHsgRE9XTl9BUlJPVywgRU5URVIsIEVTQ0FQRSwgU1BBQ0UsIFRBQiwgVVBfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQge1xyXG4gIENka0Nvbm5lY3RlZE92ZXJsYXksXHJcbiAgQ2RrT3ZlcmxheU9yaWdpbixcclxuICBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsXHJcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpclxyXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBmcm9tRXZlbnQsIG1lcmdlLCBvZiBhcyBvYnNlcnZhYmxlT2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCwgd2l0aExhdGVzdEZyb20gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBzbGlkZU1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xyXG5pbXBvcnQgeyBOekNvbmZpZ0tleSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XHJcbmltcG9ydCB7IE56Rm9ybU5vU3RhdHVzU2VydmljZSwgTnpGb3JtU3RhdHVzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9mb3JtJztcclxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xyXG5pbXBvcnQgeyBnZXRQbGFjZW1lbnROYW1lLCBQT1NJVElPTl9NQVAsIFBPU0lUSU9OX1RZUEUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3ZlcmxheSc7XHJcbmltcG9ydCB7IGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSwgcmVxQW5pbUZyYW1lIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3BvbHlmaWxsJztcclxuaW1wb3J0IHsgTnpEZXN0cm95U2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7XHJcbiAgQm9vbGVhbklucHV0LFxyXG4gIE5nQ2xhc3NJbnRlcmZhY2UsXHJcbiAgTnpTYWZlQW55LFxyXG4gIE56U3RhdHVzLFxyXG4gIE56VmFsaWRhdGVTdGF0dXMsXHJcbiAgT25DaGFuZ2VUeXBlLFxyXG4gIE9uVG91Y2hlZFR5cGVcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBnZXRTdGF0dXNDbGFzc05hbWVzLCBJbnB1dEJvb2xlYW4sIGlzTm90TmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgQnBzT3B0aW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL29wdGlvbi1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCcHNPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL29wdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCcHNTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QtdG9wLWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHtcclxuICBOekZpbHRlck9wdGlvblR5cGUsXHJcbiAgTnpTZWxlY3RJdGVtSW50ZXJmYWNlLFxyXG4gIE56U2VsZWN0TW9kZVR5cGUsXHJcbiAgTnpTZWxlY3RPcHRpb25JbnRlcmZhY2UsXHJcbiAgTnpTZWxlY3RQbGFjZW1lbnRUeXBlXHJcbn0gZnJvbSAnLi9zZWxlY3QudHlwZXMnO1xyXG5cclxuY29uc3QgZGVmYXVsdEZpbHRlck9wdGlvbjogTnpGaWx0ZXJPcHRpb25UeXBlID0gKHNlYXJjaFZhbHVlOiBzdHJpbmcsIGl0ZW06IE56U2VsZWN0SXRlbUludGVyZmFjZSk6IGJvb2xlYW4gPT4ge1xyXG4gIGlmIChpdGVtICYmIGl0ZW0uYnBzTGFiZWwpIHtcclxuICAgIHJldHVybiBpdGVtLmJwc0xhYmVsLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTE7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBOWl9DT05GSUdfTU9EVUxFX05BTUU6IE56Q29uZmlnS2V5ID0gJ3NlbGVjdCc7XHJcblxyXG5leHBvcnQgdHlwZSBOelNlbGVjdFNpemVUeXBlID0gJ2xhcmdlJyB8ICdkZWZhdWx0JyB8ICdzbWFsbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jwcy1zZWxlY3QnLFxyXG4gIGV4cG9ydEFzOiAnYnBzU2VsZWN0JyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIE56RGVzdHJveVNlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCcHNTZWxlY3RDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzdHlsZVVybHM6IFsnLi9icHMtc2VsZWN0LmNvbXBvbmVudC5jc3MnXSxcclxuICBhbmltYXRpb25zOiBbc2xpZGVNb3Rpb25dLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8YnBzLXNlbGVjdC10b3AtY29udHJvbFxyXG4gICAgICBjZGtPdmVybGF5T3JpZ2luXHJcbiAgICAgICNvcmlnaW49XCJjZGtPdmVybGF5T3JpZ2luXCJcclxuICAgICAgW2Jwc0lkXT1cImJwc0lkXCJcclxuICAgICAgW29wZW5dPVwiYnBzT3BlblwiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJicHNEaXNhYmxlZFwiXHJcbiAgICAgIFttb2RlXT1cImJwc01vZGVcIlxyXG4gICAgICBbQC5kaXNhYmxlZF09XCIhIW5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgICAgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gICAgICBbbWF4VGFnUGxhY2Vob2xkZXJdPVwiYnBzTWF4VGFnUGxhY2Vob2xkZXJcIlxyXG4gICAgICBbcmVtb3ZlSWNvbl09XCJicHNSZW1vdmVJY29uXCJcclxuICAgICAgW3BsYWNlSG9sZGVyXT1cImJwc1BsYWNlSG9sZGVyXCJcclxuICAgICAgW21heFRhZ0NvdW50XT1cImJwc01heFRhZ0NvdW50XCJcclxuICAgICAgW2N1c3RvbVRlbXBsYXRlXT1cImJwc0N1c3RvbVRlbXBsYXRlXCJcclxuICAgICAgW3Rva2VuU2VwYXJhdG9yc109XCJicHNUb2tlblNlcGFyYXRvcnNcIlxyXG4gICAgICBbc2hvd1NlYXJjaF09XCJicHNTaG93U2VhcmNoXCJcclxuICAgICAgW2F1dG9mb2N1c109XCJicHNBdXRvRm9jdXNcIlxyXG4gICAgICBbbGlzdE9mVG9wSXRlbV09XCJsaXN0T2ZUb3BJdGVtXCJcclxuICAgICAgKGlucHV0VmFsdWVDaGFuZ2UpPVwib25JbnB1dFZhbHVlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAodG9rZW5pemUpPVwib25Ub2tlblNlcGFyYXRlKCRldmVudClcIlxyXG4gICAgICAoZGVsZXRlSXRlbSk9XCJvbkl0ZW1EZWxldGUoJGV2ZW50KVwiXHJcbiAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcclxuICAgID48L2Jwcy1zZWxlY3QtdG9wLWNvbnRyb2w+XHJcbiAgICA8YnBzLXNlbGVjdC1hcnJvd1xyXG4gICAgICAqbmdJZj1cImJwc1Nob3dBcnJvdyB8fCAoaGFzRmVlZGJhY2sgJiYgISFzdGF0dXMpXCJcclxuICAgICAgW3Nob3dBcnJvd109XCJicHNTaG93QXJyb3dcIlxyXG4gICAgICBbbG9hZGluZ109XCJicHNMb2FkaW5nXCJcclxuICAgICAgW3NlYXJjaF09XCJicHNPcGVuICYmIGJwc1Nob3dTZWFyY2hcIlxyXG4gICAgICBbc3VmZml4SWNvbl09XCJicHNTdWZmaXhJY29uXCJcclxuICAgICAgW2ZlZWRiYWNrSWNvbl09XCJmZWVkYmFja0ljb25UcGxcIlxyXG4gICAgPlxyXG4gICAgICA8bmctdGVtcGxhdGUgI2ZlZWRiYWNrSWNvblRwbD5cclxuICAgICAgICA8YnBzLWZvcm0taXRlbS1mZWVkYmFjay1pY29uICpuZ0lmPVwiaGFzRmVlZGJhY2sgJiYgISFzdGF0dXNcIiBbc3RhdHVzXT1cInN0YXR1c1wiPjwvYnBzLWZvcm0taXRlbS1mZWVkYmFjay1pY29uPlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPC9icHMtc2VsZWN0LWFycm93PlxyXG5cclxuICAgIDxicHMtc2VsZWN0LWNsZWFyXHJcbiAgICAgICpuZ0lmPVwiYnBzQWxsb3dDbGVhciAmJiAhYnBzRGlzYWJsZWQgJiYgbGlzdE9mVmFsdWUubGVuZ3RoXCJcclxuICAgICAgW2NsZWFySWNvbl09XCJicHNDbGVhckljb25cIlxyXG4gICAgICAoY2xlYXIpPVwib25DbGVhclNlbGVjdGlvbigpXCJcclxuICAgID48L2Jwcy1zZWxlY3QtY2xlYXI+XHJcbiAgICA8bmctdGVtcGxhdGVcclxuICAgICAgY2RrQ29ubmVjdGVkT3ZlcmxheVxyXG4gICAgICBuekNvbm5lY3RlZE92ZXJsYXlcclxuICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlIYXNCYWNrZHJvcF09XCJicHNCYWNrZHJvcFwiXHJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5TWluV2lkdGhdPVwiJGFueShicHNEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPyBudWxsIDogdHJpZ2dlcldpZHRoKVwiXHJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5V2lkdGhdPVwiJGFueShicHNEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPyB0cmlnZ2VyV2lkdGggOiBudWxsKVwiXHJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cIm9yaWdpblwiXHJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5VHJhbnNmb3JtT3JpZ2luT25dPVwiJy5hbnQtc2VsZWN0LWRyb3Bkb3duJ1wiXHJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5UGFuZWxDbGFzc109XCJicHNEcm9wZG93bkNsYXNzTmFtZSFcIlxyXG4gICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwiYnBzT3BlblwiXHJcbiAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zXT1cInBvc2l0aW9uc1wiXHJcbiAgICAgIChvdmVybGF5T3V0c2lkZUNsaWNrKT1cIm9uQ2xpY2tPdXRzaWRlKCRldmVudClcIlxyXG4gICAgICAoZGV0YWNoKT1cInNldE9wZW5TdGF0ZShmYWxzZSlcIlxyXG4gICAgICAocG9zaXRpb25DaGFuZ2UpPVwib25Qb3NpdGlvbkNoYW5nZSgkZXZlbnQpXCJcclxuICAgID5cclxuICAgICAgPGJwcy1vcHRpb24tY29udGFpbmVyXHJcbiAgICAgICAgW25nU3R5bGVdPVwiYnBzRHJvcGRvd25TdHlsZVwiXHJcbiAgICAgICAgW2l0ZW1TaXplXT1cImJwc09wdGlvbkhlaWdodFB4XCJcclxuICAgICAgICBbbWF4SXRlbUxlbmd0aF09XCJicHNPcHRpb25PdmVyZmxvd1NpemVcIlxyXG4gICAgICAgIFttYXRjaFdpZHRoXT1cImJwc0Ryb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aFwiXHJcbiAgICAgICAgW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tcGxhY2VtZW50LWJvdHRvbUxlZnRdPVwiZHJvcERvd25Qb3NpdGlvbiA9PT0gJ2JvdHRvbUxlZnQnXCJcclxuICAgICAgICBbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1wbGFjZW1lbnQtdG9wTGVmdF09XCJkcm9wRG93blBvc2l0aW9uID09PSAndG9wTGVmdCdcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLXBsYWNlbWVudC1ib3R0b21SaWdodF09XCJkcm9wRG93blBvc2l0aW9uID09PSAnYm90dG9tUmlnaHQnXCJcclxuICAgICAgICBbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1wbGFjZW1lbnQtdG9wUmlnaHRdPVwiZHJvcERvd25Qb3NpdGlvbiA9PT0gJ3RvcFJpZ2h0J1wiXHJcbiAgICAgICAgW0BzbGlkZU1vdGlvbl09XCInZW50ZXInXCJcclxuICAgICAgICBbQC5kaXNhYmxlZF09XCIhIW5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgICAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICAgICAgW2xpc3RPZkNvbnRhaW5lckl0ZW1dPVwibGlzdE9mQ29udGFpbmVySXRlbVwiXHJcbiAgICAgICAgW21lbnVJdGVtU2VsZWN0ZWRJY29uXT1cImJwc01lbnVJdGVtU2VsZWN0ZWRJY29uXCJcclxuICAgICAgICBbbm90Rm91bmRDb250ZW50XT1cImJwc05vdEZvdW5kQ29udGVudFwiXHJcbiAgICAgICAgW2FjdGl2YXRlZFZhbHVlXT1cImFjdGl2YXRlZFZhbHVlXCJcclxuICAgICAgICBbbGlzdE9mU2VsZWN0ZWRWYWx1ZV09XCJsaXN0T2ZWYWx1ZVwiXHJcbiAgICAgICAgW2Ryb3Bkb3duUmVuZGVyXT1cImJwc0Ryb3Bkb3duUmVuZGVyXCJcclxuICAgICAgICBbY29tcGFyZVdpdGhdPVwiY29tcGFyZVdpdGhcIlxyXG4gICAgICAgIFttb2RlXT1cImJwc01vZGVcIlxyXG4gICAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcclxuICAgICAgICAoaXRlbUNsaWNrKT1cIm9uSXRlbUNsaWNrKCRldmVudClcIlxyXG4gICAgICAgIChzY3JvbGxUb0JvdHRvbSk9XCJicHNTY3JvbGxUb0JvdHRvbS5lbWl0KClcIlxyXG4gICAgICA+PC9icHMtb3B0aW9uLWNvbnRhaW5lcj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgYCxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2FudC1zZWxlY3QnLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWluLWZvcm0taXRlbV0nOiAnISFuekZvcm1TdGF0dXNTZXJ2aWNlJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1sZ10nOiAnYnBzU2l6ZSA9PT0gXCJsYXJnZVwiJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1zbV0nOiAnYnBzU2l6ZSA9PT0gXCJzbWFsbFwiJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1zaG93LWFycm93XSc6IGBicHNTaG93QXJyb3dgLFxyXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRpc2FibGVkXSc6ICdicHNEaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtc2hvdy1zZWFyY2hdJzogYChicHNTaG93U2VhcmNoIHx8IGJwc01vZGUgIT09ICdkZWZhdWx0JykgJiYgIWJwc0Rpc2FibGVkYCxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1hbGxvdy1jbGVhcl0nOiAnYnBzQWxsb3dDbGVhcicsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtYm9yZGVybGVzc10nOiAnYnBzQm9yZGVybGVzcycsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtb3Blbl0nOiAnYnBzT3BlbicsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZm9jdXNlZF0nOiAnYnBzT3BlbiB8fCBmb2N1c2VkJyxcclxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1zaW5nbGVdJzogYGJwc01vZGUgPT09ICdkZWZhdWx0J2AsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtbXVsdGlwbGVdJzogYGJwc01vZGUgIT09ICdkZWZhdWx0J2AsXHJcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtcnRsXSc6IGBkaXIgPT09ICdydGwnYFxyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc1NlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICByZWFkb25seSBfbnpNb2R1bGVOYW1lOiBOekNvbmZpZ0tleSA9IE5aX0NPTkZJR19NT0RVTEVfTkFNRTtcclxuXHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc0FsbG93Q2xlYXI6IEJvb2xlYW5JbnB1dDtcclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYnBzQm9yZGVybGVzczogQm9vbGVhbklucHV0O1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNTaG93U2VhcmNoOiBCb29sZWFuSW5wdXQ7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc0xvYWRpbmc6IEJvb2xlYW5JbnB1dDtcclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYnBzQXV0b0ZvY3VzOiBCb29sZWFuSW5wdXQ7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc0F1dG9DbGVhclNlYXJjaFZhbHVlOiBCb29sZWFuSW5wdXQ7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Jwc1NlcnZlclNlYXJjaDogQm9vbGVhbklucHV0O1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNEaXNhYmxlZDogQm9vbGVhbklucHV0O1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9icHNPcGVuOiBCb29sZWFuSW5wdXQ7XHJcblxyXG4gIEBJbnB1dCgpIGJwc0lkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBicHNTaXplOiBOelNlbGVjdFNpemVUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIGJwc1N0YXR1czogTnpTdGF0dXMgPSAnJztcclxuICBASW5wdXQoKSBicHNPcHRpb25IZWlnaHRQeCA9IDIzO1xyXG4gIEBJbnB1dCgpIGJwc09wdGlvbk92ZXJmbG93U2l6ZSA9IDg7XHJcbiAgQElucHV0KCkgYnBzRHJvcGRvd25DbGFzc05hbWU6IHN0cmluZ1tdIHwgc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgYnBzRHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoID0gdHJ1ZTtcclxuICBASW5wdXQoKSBicHNEcm9wZG93blN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgYnBzTm90Rm91bmRDb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG4gIEBJbnB1dCgpIGJwc1BsYWNlSG9sZGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgYnBzUGxhY2VtZW50OiBOelNlbGVjdFBsYWNlbWVudFR5cGUgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBicHNNYXhUYWdDb3VudCA9IEluZmluaXR5O1xyXG4gIEBJbnB1dCgpIGJwc0Ryb3Bkb3duUmVuZGVyOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgYnBzQ3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelNlbGVjdEl0ZW1JbnRlcmZhY2UgfT4gfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKVxyXG4gIEBXaXRoQ29uZmlnPFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBzdHJpbmcgfCBudWxsPigpXHJcbiAgYnBzU3VmZml4SWNvbjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGJwc0NsZWFySWNvbjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGJwc1JlbW92ZUljb246IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBicHNNZW51SXRlbVNlbGVjdGVkSWNvbjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGJwc1Rva2VuU2VwYXJhdG9yczogc3RyaW5nW10gPSBbXTtcclxuICBASW5wdXQoKSBicHNNYXhUYWdQbGFjZWhvbGRlcjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56U2FmZUFueVtdIH0+IHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgYnBzTWF4TXVsdGlwbGVDb3VudCA9IEluZmluaXR5O1xyXG4gIEBJbnB1dCgpIGJwc01vZGU6IE56U2VsZWN0TW9kZVR5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgYnBzRmlsdGVyT3B0aW9uOiBOekZpbHRlck9wdGlvblR5cGUgPSBkZWZhdWx0RmlsdGVyT3B0aW9uO1xyXG4gIEBJbnB1dCgpIGNvbXBhcmVXaXRoOiAobzE6IE56U2FmZUFueSwgbzI6IE56U2FmZUFueSkgPT4gYm9vbGVhbiA9IChvMTogTnpTYWZlQW55LCBvMjogTnpTYWZlQW55KSA9PiBvMSA9PT0gbzI7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0FsbG93Q2xlYXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZzxib29sZWFuPigpIEBJbnB1dEJvb2xlYW4oKSBicHNCb3JkZXJsZXNzID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc1Nob3dTZWFyY2ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzTG9hZGluZyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNBdXRvRm9jdXMgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzQXV0b0NsZWFyU2VhcmNoVmFsdWUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNTZXJ2ZXJTZWFyY2ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzRGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzT3BlbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNTZWxlY3RPblRhYiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnPGJvb2xlYW4+KCkgQElucHV0Qm9vbGVhbigpIGJwc0JhY2tkcm9wID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYnBzT3B0aW9uczogTnpTZWxlY3RPcHRpb25JbnRlcmZhY2VbXSA9IFtdO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBicHNTaG93QXJyb3codmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Jwc1Nob3dBcnJvdyA9IHZhbHVlO1xyXG4gIH1cclxuICBnZXQgYnBzU2hvd0Fycm93KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Jwc1Nob3dBcnJvdyA9PT0gdW5kZWZpbmVkID8gdGhpcy5icHNNb2RlID09PSAnZGVmYXVsdCcgOiB0aGlzLl9icHNTaG93QXJyb3c7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzT25TZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzU2Nyb2xsVG9Cb3R0b20gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc09wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc0JsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc0ZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBWaWV3Q2hpbGQoQ2RrT3ZlcmxheU9yaWdpbiwgeyBzdGF0aWM6IHRydWUsIHJlYWQ6IEVsZW1lbnRSZWYgfSkgb3JpZ2luRWxlbWVudCE6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChDZGtDb25uZWN0ZWRPdmVybGF5LCB7IHN0YXRpYzogdHJ1ZSB9KSBjZGtDb25uZWN0ZWRPdmVybGF5ITogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcclxuICBAVmlld0NoaWxkKEJwc1NlbGVjdFRvcENvbnRyb2xDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pIGJwc1NlbGVjdFRvcENvbnRyb2xDb21wb25lbnQhOiBCcHNTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50O1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQnBzT3B0aW9uQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGxpc3RPZk56T3B0aW9uQ29tcG9uZW50ITogUXVlcnlMaXN0PEJwc09wdGlvbkNvbXBvbmVudD47XHJcbiAgQENvbnRlbnRDaGlsZHJlbihCcHNPcHRpb25Hcm91cENvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxyXG4gIGxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQhOiBRdWVyeUxpc3Q8QnBzT3B0aW9uR3JvdXBDb21wb25lbnQ+O1xyXG4gIEBWaWV3Q2hpbGQoQnBzT3B0aW9uR3JvdXBDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlLCByZWFkOiBFbGVtZW50UmVmIH0pIGJwc09wdGlvbkdyb3VwQ29tcG9uZW50RWxlbWVudCE6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZChCcHNTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSwgcmVhZDogRWxlbWVudFJlZiB9KVxyXG4gIGJwc1NlbGVjdFRvcENvbnRyb2xDb21wb25lbnRFbGVtZW50ITogRWxlbWVudFJlZjtcclxuICBwcml2YXRlIGxpc3RPZlZhbHVlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TnpTYWZlQW55W10+KFtdKTtcclxuICBwcml2YXRlIGxpc3RPZlRlbXBsYXRlSXRlbSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE56U2VsZWN0SXRlbUludGVyZmFjZVtdPihbXSk7XHJcbiAgcHJpdmF0ZSBsaXN0T2ZUYWdBbmRUZW1wbGF0ZUl0ZW06IE56U2VsZWN0SXRlbUludGVyZmFjZVtdID0gW107XHJcbiAgcHJpdmF0ZSBzZWFyY2hWYWx1ZTogc3RyaW5nID0gJyc7XHJcbiAgcHJpdmF0ZSBpc1JlYWN0aXZlRHJpdmVuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSB2YWx1ZTogTnpTYWZlQW55IHwgTnpTYWZlQW55W107XHJcbiAgcHJpdmF0ZSBfYnBzU2hvd0Fycm93OiBib29sZWFuIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgcmVxdWVzdElkOiBudW1iZXIgPSAtMTtcclxuICBwcml2YXRlIGlzTnpEaXNhYmxlRmlyc3RDaGFuZ2U6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIG9uQ2hhbmdlOiBPbkNoYW5nZVR5cGUgPSAoKSA9PiB7fTtcclxuICBvblRvdWNoZWQ6IE9uVG91Y2hlZFR5cGUgPSAoKSA9PiB7fTtcclxuICBkcm9wRG93blBvc2l0aW9uOiBOelNlbGVjdFBsYWNlbWVudFR5cGUgPSAnYm90dG9tTGVmdCc7XHJcbiAgdHJpZ2dlcldpZHRoOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBsaXN0T2ZDb250YWluZXJJdGVtOiBOelNlbGVjdEl0ZW1JbnRlcmZhY2VbXSA9IFtdO1xyXG4gIGxpc3RPZlRvcEl0ZW06IE56U2VsZWN0SXRlbUludGVyZmFjZVtdID0gW107XHJcbiAgYWN0aXZhdGVkVmFsdWU6IE56U2FmZUFueSB8IG51bGwgPSBudWxsO1xyXG4gIGxpc3RPZlZhbHVlOiBOelNhZmVBbnlbXSA9IFtdO1xyXG4gIGZvY3VzZWQgPSBmYWxzZTtcclxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xyXG4gIHBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gW107XHJcblxyXG4gIC8vIHN0YXR1c1xyXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1zZWxlY3QnO1xyXG4gIHN0YXR1c0NsczogTmdDbGFzc0ludGVyZmFjZSA9IHt9O1xyXG4gIHN0YXR1czogTnpWYWxpZGF0ZVN0YXR1cyA9ICcnO1xyXG4gIGhhc0ZlZWRiYWNrOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGdlbmVyYXRlVGFnSXRlbSh2YWx1ZTogc3RyaW5nKTogTnpTZWxlY3RJdGVtSW50ZXJmYWNlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJwc1ZhbHVlOiB2YWx1ZSxcclxuICAgICAgYnBzTGFiZWw6IHZhbHVlLFxyXG4gICAgICB0eXBlOiAnaXRlbSdcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBvbkl0ZW1DbGljayh2YWx1ZTogTnpTYWZlQW55KTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGl2YXRlZFZhbHVlID0gdmFsdWU7XHJcbiAgICBpZiAodGhpcy5icHNNb2RlID09PSAnZGVmYXVsdCcpIHtcclxuICAgICAgaWYgKHRoaXMubGlzdE9mVmFsdWUubGVuZ3RoID09PSAwIHx8ICF0aGlzLmNvbXBhcmVXaXRoKHRoaXMubGlzdE9mVmFsdWVbMF0sIHZhbHVlKSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGlzdE9mVmFsdWUoW3ZhbHVlXSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSB0aGlzLmxpc3RPZlZhbHVlLmZpbmRJbmRleChvID0+IHRoaXMuY29tcGFyZVdpdGgobywgdmFsdWUpKTtcclxuICAgICAgaWYgKHRhcmdldEluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIGNvbnN0IGxpc3RPZlZhbHVlQWZ0ZXJSZW1vdmVkID0gdGhpcy5saXN0T2ZWYWx1ZS5maWx0ZXIoKF8sIGkpID0+IGkgIT09IHRhcmdldEluZGV4KTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxpc3RPZlZhbHVlKGxpc3RPZlZhbHVlQWZ0ZXJSZW1vdmVkKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmxpc3RPZlZhbHVlLmxlbmd0aCA8IHRoaXMuYnBzTWF4TXVsdGlwbGVDb3VudCkge1xyXG4gICAgICAgIGNvbnN0IGxpc3RPZlZhbHVlQWZ0ZXJBZGRlZCA9IFsuLi50aGlzLmxpc3RPZlZhbHVlLCB2YWx1ZV07XHJcbiAgICAgICAgdGhpcy51cGRhdGVMaXN0T2ZWYWx1ZShsaXN0T2ZWYWx1ZUFmdGVyQWRkZWQpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgICAgaWYgKHRoaXMuYnBzQXV0b0NsZWFyU2VhcmNoVmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNsZWFySW5wdXQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25JdGVtRGVsZXRlKGl0ZW06IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3QgbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IHRoaXMubGlzdE9mVmFsdWUuZmlsdGVyKHYgPT4gIXRoaXMuY29tcGFyZVdpdGgodiwgaXRlbS5icHNWYWx1ZSkpO1xyXG4gICAgdGhpcy51cGRhdGVMaXN0T2ZWYWx1ZShsaXN0T2ZTZWxlY3RlZFZhbHVlKTtcclxuICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTGlzdE9mQ29udGFpbmVySXRlbSgpOiB2b2lkIHtcclxuICAgIGxldCBsaXN0T2ZDb250YWluZXJJdGVtID0gdGhpcy5saXN0T2ZUYWdBbmRUZW1wbGF0ZUl0ZW1cclxuICAgICAgLmZpbHRlcihpdGVtID0+ICFpdGVtLmJwc0hpZGUpXHJcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmJwc1NlcnZlclNlYXJjaCAmJiB0aGlzLnNlYXJjaFZhbHVlKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5icHNGaWx0ZXJPcHRpb24odGhpcy5zZWFyY2hWYWx1ZSwgaXRlbSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICBpZiAodGhpcy5icHNNb2RlID09PSAndGFncycgJiYgdGhpcy5zZWFyY2hWYWx1ZSkge1xyXG4gICAgICBjb25zdCBtYXRjaGVkSXRlbSA9IHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVJdGVtLmZpbmQoaXRlbSA9PiBpdGVtLmJwc0xhYmVsID09PSB0aGlzLnNlYXJjaFZhbHVlKTtcclxuICAgICAgaWYgKCFtYXRjaGVkSXRlbSkge1xyXG4gICAgICAgIGNvbnN0IHRhZ0l0ZW0gPSB0aGlzLmdlbmVyYXRlVGFnSXRlbSh0aGlzLnNlYXJjaFZhbHVlKTtcclxuICAgICAgICBsaXN0T2ZDb250YWluZXJJdGVtID0gW3RhZ0l0ZW0sIC4uLmxpc3RPZkNvbnRhaW5lckl0ZW1dO1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkVmFsdWUgPSB0YWdJdGVtLmJwc1ZhbHVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkVmFsdWUgPSBtYXRjaGVkSXRlbS5icHNWYWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgYWN0aXZhdGVkSXRlbSA9XHJcbiAgICAgIGxpc3RPZkNvbnRhaW5lckl0ZW0uZmluZChpdGVtID0+IGl0ZW0uYnBzTGFiZWwgPT09IHRoaXMuc2VhcmNoVmFsdWUpIHx8XHJcbiAgICAgIGxpc3RPZkNvbnRhaW5lckl0ZW0uZmluZChpdGVtID0+IHRoaXMuY29tcGFyZVdpdGgoaXRlbS5icHNWYWx1ZSwgdGhpcy5hY3RpdmF0ZWRWYWx1ZSkpIHx8XHJcbiAgICAgIGxpc3RPZkNvbnRhaW5lckl0ZW0uZmluZChpdGVtID0+IHRoaXMuY29tcGFyZVdpdGgoaXRlbS5icHNWYWx1ZSwgdGhpcy5saXN0T2ZWYWx1ZVswXSkpIHx8XHJcbiAgICAgIGxpc3RPZkNvbnRhaW5lckl0ZW1bMF07XHJcbiAgICB0aGlzLmFjdGl2YXRlZFZhbHVlID0gKGFjdGl2YXRlZEl0ZW0gJiYgYWN0aXZhdGVkSXRlbS5icHNWYWx1ZSkgfHwgbnVsbDtcclxuICAgIGxldCBsaXN0T2ZHcm91cExhYmVsOiBBcnJheTxzdHJpbmcgfCBudW1iZXIgfCBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbD4gPSBbXTtcclxuICAgIGlmICh0aGlzLmlzUmVhY3RpdmVEcml2ZW4pIHtcclxuICAgICAgbGlzdE9mR3JvdXBMYWJlbCA9IFsuLi5uZXcgU2V0KHRoaXMuYnBzT3B0aW9ucy5maWx0ZXIobyA9PiBvLmdyb3VwTGFiZWwpLm1hcChvID0+IG8uZ3JvdXBMYWJlbCEpKV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50KSB7XHJcbiAgICAgICAgbGlzdE9mR3JvdXBMYWJlbCA9IHRoaXMubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudC5tYXAobyA9PiBvLmJwc0xhYmVsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqIGluc2VydCBncm91cCBpdGVtICoqL1xyXG4gICAgbGlzdE9mR3JvdXBMYWJlbC5mb3JFYWNoKGxhYmVsID0+IHtcclxuICAgICAgY29uc3QgaW5kZXggPSBsaXN0T2ZDb250YWluZXJJdGVtLmZpbmRJbmRleChpdGVtID0+IGxhYmVsID09PSBpdGVtLmdyb3VwTGFiZWwpO1xyXG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgIGNvbnN0IGdyb3VwSXRlbSA9IHsgZ3JvdXBMYWJlbDogbGFiZWwsIHR5cGU6ICdncm91cCcsIGtleTogbGFiZWwgfSBhcyBOelNlbGVjdEl0ZW1JbnRlcmZhY2U7XHJcbiAgICAgICAgbGlzdE9mQ29udGFpbmVySXRlbS5zcGxpY2UoaW5kZXgsIDAsIGdyb3VwSXRlbSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5saXN0T2ZDb250YWluZXJJdGVtID0gWy4uLmxpc3RPZkNvbnRhaW5lckl0ZW1dO1xyXG4gICAgdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zKCk7XHJcbiAgfVxyXG5cclxuICBjbGVhcklucHV0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5icHNTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmNsZWFySW5wdXRWYWx1ZSgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTGlzdE9mVmFsdWUobGlzdE9mVmFsdWU6IE56U2FmZUFueVtdKTogdm9pZCB7XHJcbiAgICBjb25zdCBjb3ZlcnRMaXN0VG9Nb2RlbCA9IChsaXN0OiBOelNhZmVBbnlbXSwgbW9kZTogTnpTZWxlY3RNb2RlVHlwZSk6IE56U2FmZUFueVtdIHwgTnpTYWZlQW55ID0+IHtcclxuICAgICAgaWYgKG1vZGUgPT09ICdkZWZhdWx0Jykge1xyXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHJldHVybiBsaXN0WzBdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBtb2RlbCA9IGNvdmVydExpc3RUb01vZGVsKGxpc3RPZlZhbHVlLCB0aGlzLmJwc01vZGUpO1xyXG4gICAgaWYgKHRoaXMudmFsdWUgIT09IG1vZGVsKSB7XHJcbiAgICAgIHRoaXMubGlzdE9mVmFsdWUgPSBsaXN0T2ZWYWx1ZTtcclxuICAgICAgdGhpcy5saXN0T2ZWYWx1ZSQubmV4dChsaXN0T2ZWYWx1ZSk7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBtb2RlbDtcclxuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVG9rZW5TZXBhcmF0ZShsaXN0T2ZMYWJlbDogc3RyaW5nW10pOiB2b2lkIHtcclxuICAgIGNvbnN0IGxpc3RPZk1hdGNoZWRWYWx1ZSA9IHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVJdGVtXHJcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiBsaXN0T2ZMYWJlbC5maW5kSW5kZXgobGFiZWwgPT4gbGFiZWwgPT09IGl0ZW0uYnBzTGFiZWwpICE9PSAtMSlcclxuICAgICAgLm1hcChpdGVtID0+IGl0ZW0uYnBzVmFsdWUpXHJcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiB0aGlzLmxpc3RPZlZhbHVlLmZpbmRJbmRleCh2ID0+IHRoaXMuY29tcGFyZVdpdGgodiwgaXRlbSkpID09PSAtMSk7XHJcbiAgICBpZiAodGhpcy5icHNNb2RlID09PSAnbXVsdGlwbGUnKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mVmFsdWUoWy4uLnRoaXMubGlzdE9mVmFsdWUsIC4uLmxpc3RPZk1hdGNoZWRWYWx1ZV0pO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmJwc01vZGUgPT09ICd0YWdzJykge1xyXG4gICAgICBjb25zdCBsaXN0T2ZVbk1hdGNoZWRMYWJlbCA9IGxpc3RPZkxhYmVsLmZpbHRlcihcclxuICAgICAgICBsYWJlbCA9PiB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlSXRlbS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmJwc0xhYmVsID09PSBsYWJlbCkgPT09IC0xXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mVmFsdWUoWy4uLnRoaXMubGlzdE9mVmFsdWUsIC4uLmxpc3RPZk1hdGNoZWRWYWx1ZSwgLi4ubGlzdE9mVW5NYXRjaGVkTGFiZWxdKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmJwc0Rpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGxpc3RPZkZpbHRlcmVkT3B0aW9uTm90RGlzYWJsZWQgPSB0aGlzLmxpc3RPZkNvbnRhaW5lckl0ZW1cclxuICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0udHlwZSA9PT0gJ2l0ZW0nKVxyXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gIWl0ZW0uYnBzRGlzYWJsZWQpO1xyXG4gICAgY29uc3QgYWN0aXZhdGVkSW5kZXggPSBsaXN0T2ZGaWx0ZXJlZE9wdGlvbk5vdERpc2FibGVkLmZpbmRJbmRleChpdGVtID0+XHJcbiAgICAgIHRoaXMuY29tcGFyZVdpdGgoaXRlbS5icHNWYWx1ZSwgdGhpcy5hY3RpdmF0ZWRWYWx1ZSlcclxuICAgICk7XHJcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICBjYXNlIFVQX0FSUk9XOlxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAodGhpcy5icHNPcGVuICYmIGxpc3RPZkZpbHRlcmVkT3B0aW9uTm90RGlzYWJsZWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgY29uc3QgcHJlSW5kZXggPSBhY3RpdmF0ZWRJbmRleCA+IDAgPyBhY3RpdmF0ZWRJbmRleCAtIDEgOiBsaXN0T2ZGaWx0ZXJlZE9wdGlvbk5vdERpc2FibGVkLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2YXRlZFZhbHVlID0gbGlzdE9mRmlsdGVyZWRPcHRpb25Ob3REaXNhYmxlZFtwcmVJbmRleF0uYnBzVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERPV05fQVJST1c6XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmJwc09wZW4gJiYgbGlzdE9mRmlsdGVyZWRPcHRpb25Ob3REaXNhYmxlZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBjb25zdCBuZXh0SW5kZXggPSBhY3RpdmF0ZWRJbmRleCA8IGxpc3RPZkZpbHRlcmVkT3B0aW9uTm90RGlzYWJsZWQubGVuZ3RoIC0gMSA/IGFjdGl2YXRlZEluZGV4ICsgMSA6IDA7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2YXRlZFZhbHVlID0gbGlzdE9mRmlsdGVyZWRPcHRpb25Ob3REaXNhYmxlZFtuZXh0SW5kZXhdLmJwc1ZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRU5URVI6XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmJwc09wZW4pIHtcclxuICAgICAgICAgIGlmIChpc05vdE5pbCh0aGlzLmFjdGl2YXRlZFZhbHVlKSAmJiBhY3RpdmF0ZWRJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkl0ZW1DbGljayh0aGlzLmFjdGl2YXRlZFZhbHVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNQQUNFOlxyXG4gICAgICAgIGlmICghdGhpcy5icHNPcGVuKSB7XHJcbiAgICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZSh0cnVlKTtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVEFCOlxyXG4gICAgICAgIGlmICh0aGlzLmJwc1NlbGVjdE9uVGFiKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5icHNPcGVuKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKGlzTm90TmlsKHRoaXMuYWN0aXZhdGVkVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5vbkl0ZW1DbGljayh0aGlzLmFjdGl2YXRlZFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEVTQ0FQRTpcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTa2lwIHRoZSBFU0NBUEUgcHJvY2Vzc2luZywgaXQgd2lsbCBiZSBoYW5kbGVkIGluIHtAbGluayBvbk92ZXJsYXlLZXlEb3dufS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBpZiAoIXRoaXMuYnBzT3Blbikge1xyXG4gICAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0T3BlblN0YXRlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5icHNPcGVuICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLmJwc09wZW4gPSB2YWx1ZTtcclxuICAgICAgdGhpcy5icHNPcGVuQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gICAgICB0aGlzLm9uT3BlbkNoYW5nZSgpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uT3BlbkNoYW5nZSgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpO1xyXG4gICAgdGhpcy5jbGVhcklucHV0KCk7XHJcbiAgfVxyXG5cclxuICBvbklucHV0VmFsdWVDaGFuZ2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGVMaXN0T2ZDb250YWluZXJJdGVtKCk7XHJcbiAgICB0aGlzLmJwc09uU2VhcmNoLmVtaXQodmFsdWUpO1xyXG4gICAgdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zKCk7XHJcbiAgfVxyXG5cclxuICBvbkNsZWFyU2VsZWN0aW9uKCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVMaXN0T2ZWYWx1ZShbXSk7XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrT3V0c2lkZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmhvc3QubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpKSB7XHJcbiAgICAgIHRoaXMuc2V0T3BlblN0YXRlKGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5icHNTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBibHVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5icHNTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmJsdXIoKTtcclxuICB9XHJcblxyXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xyXG4gICAgY29uc3QgcGxhY2VtZW50ID0gZ2V0UGxhY2VtZW50TmFtZShwb3NpdGlvbik7XHJcbiAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSBwbGFjZW1lbnQgYXMgTnpTZWxlY3RQbGFjZW1lbnRUeXBlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3NlciAmJiB0aGlzLm9yaWdpbkVsZW1lbnQubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICBjb25zdCB0cmlnZ2VyV2lkdGggPSB0aGlzLnRyaWdnZXJXaWR0aDtcclxuICAgICAgY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVxdWVzdElkKTtcclxuICAgICAgdGhpcy5yZXF1ZXN0SWQgPSByZXFBbmltRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgIC8vIEJsaW5rIHRyaWdnZXJzIHN0eWxlIGFuZCBsYXlvdXQgcGlwZWxpbmVzIGFueXRpbWUgdGhlIGBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKWAgaXMgY2FsbGVkLCB3aGljaCBtYXkgY2F1c2UgYVxyXG4gICAgICAgIC8vIGZyYW1lIGRyb3AuIFRoYXQncyB3aHkgaXQncyBzY2hlZHVsZWQgdGhyb3VnaCB0aGUgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAgdG8gdW5sb2FkIHRoZSBjb21wb3NpdGUgdGhyZWFkLlxyXG4gICAgICAgIHRoaXMudHJpZ2dlcldpZHRoID0gdGhpcy5vcmlnaW5FbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgICAgICAgaWYgKHRyaWdnZXJXaWR0aCAhPT0gdGhpcy50cmlnZ2VyV2lkdGgpIHtcclxuICAgICAgICAgIC8vIFRoZSBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCB3aWxsIHRyaWdnZXIgY2hhbmdlIGRldGVjdGlvbiwgYnV0IHdlJ3JlIGluc2lkZSBhbiBgT25QdXNoYCBjb21wb25lbnQgd2hpY2ggd29uJ3QgaGF2ZVxyXG4gICAgICAgICAgLy8gdGhlIGBDaGVja3NFbmFibGVkYCBzdGF0ZS4gQ2FsbGluZyBgbWFya0ZvckNoZWNrKClgIHdpbGwgYWxsb3cgQW5ndWxhciB0byBydW4gdGhlIGNoYW5nZSBkZXRlY3Rpb24gZnJvbSB0aGUgcm9vdCBjb21wb25lbnRcclxuICAgICAgICAgIC8vIGRvd24gdG8gdGhlIGBuei1zZWxlY3RgLiBCdXQgd2UnbGwgdHJpZ2dlciBvbmx5IGxvY2FsIGNoYW5nZSBkZXRlY3Rpb24gaWYgdGhlIGB0cmlnZ2VyV2lkdGhgIGhhcyBiZWVuIGNoYW5nZWQuXHJcbiAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnMoKTogdm9pZCB7XHJcbiAgICByZXFBbmltRnJhbWUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXk/Lm92ZXJsYXlSZWY/LnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIHByaXZhdGUgZGVzdHJveSQ6IE56RGVzdHJveVNlcnZpY2UsXHJcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGhvc3Q6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICBwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmUsXHJcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgbnpGb3JtU3RhdHVzU2VydmljZT86IE56Rm9ybVN0YXR1c1NlcnZpY2UsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIG56Rm9ybU5vU3RhdHVzU2VydmljZT86IE56Rm9ybU5vU3RhdHVzU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgd3JpdGVWYWx1ZShtb2RlbFZhbHVlOiBOelNhZmVBbnkgfCBOelNhZmVBbnlbXSk6IHZvaWQge1xyXG4gICAgLyoqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE0OTg4ICoqL1xyXG4gICAgaWYgKHRoaXMudmFsdWUgIT09IG1vZGVsVmFsdWUpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IG1vZGVsVmFsdWU7XHJcbiAgICAgIGNvbnN0IGNvdmVydE1vZGVsVG9MaXN0ID0gKG1vZGVsOiBOelNhZmVBbnlbXSB8IE56U2FmZUFueSwgbW9kZTogTnpTZWxlY3RNb2RlVHlwZSk6IE56U2FmZUFueVtdID0+IHtcclxuICAgICAgICBpZiAobW9kZWwgPT09IG51bGwgfHwgbW9kZWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ2RlZmF1bHQnKSB7XHJcbiAgICAgICAgICByZXR1cm4gW21vZGVsXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIG1vZGVsO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgY29uc3QgbGlzdE9mVmFsdWUgPSBjb3ZlcnRNb2RlbFRvTGlzdChtb2RlbFZhbHVlLCB0aGlzLmJwc01vZGUpO1xyXG4gICAgICB0aGlzLmxpc3RPZlZhbHVlID0gbGlzdE9mVmFsdWU7XHJcbiAgICAgIHRoaXMubGlzdE9mVmFsdWUkLm5leHQobGlzdE9mVmFsdWUpO1xyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IE9uQ2hhbmdlVHlwZSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IE9uVG91Y2hlZFR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmJwc0Rpc2FibGVkID0gKHRoaXMuaXNOekRpc2FibGVGaXJzdENoYW5nZSAmJiB0aGlzLmJwc0Rpc2FibGVkKSB8fCBkaXNhYmxlZDtcclxuICAgIHRoaXMuaXNOekRpc2FibGVGaXJzdENoYW5nZSA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMuYnBzRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IGJwc09wZW4sIGJwc0Rpc2FibGVkLCBicHNPcHRpb25zLCBicHNTdGF0dXMsIGJwc1BsYWNlbWVudCB9ID0gY2hhbmdlcztcclxuICAgIGlmIChicHNPcGVuKSB7XHJcbiAgICAgIHRoaXMub25PcGVuQ2hhbmdlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoYnBzRGlzYWJsZWQgJiYgdGhpcy5icHNEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnNldE9wZW5TdGF0ZShmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoYnBzT3B0aW9ucykge1xyXG4gICAgICB0aGlzLmlzUmVhY3RpdmVEcml2ZW4gPSB0cnVlO1xyXG4gICAgICBjb25zdCBsaXN0T2ZPcHRpb25zID0gdGhpcy5icHNPcHRpb25zIHx8IFtdO1xyXG4gICAgICBjb25zdCBsaXN0T2ZUcmFuc2Zvcm1lZEl0ZW0gPSBsaXN0T2ZPcHRpb25zLm1hcChpdGVtID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdGVtcGxhdGU6IGl0ZW0ubGFiZWwgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZiA/IGl0ZW0ubGFiZWwgOiBudWxsLFxyXG4gICAgICAgICAgYnBzVGl0bGU6IHRoaXMuZ2V0VGl0bGUoaXRlbS50aXRsZSwgaXRlbS5sYWJlbCksXHJcbiAgICAgICAgICBicHNMYWJlbDogdHlwZW9mIGl0ZW0ubGFiZWwgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBpdGVtLmxhYmVsID09PSAnbnVtYmVyJyA/IGl0ZW0ubGFiZWwgOiBudWxsLFxyXG4gICAgICAgICAgYnBzVmFsdWU6IGl0ZW0udmFsdWUsXHJcbiAgICAgICAgICBicHNEaXNhYmxlZDogaXRlbS5kaXNhYmxlZCB8fCBmYWxzZSxcclxuICAgICAgICAgIGJwc0hpZGU6IGl0ZW0uaGlkZSB8fCBmYWxzZSxcclxuICAgICAgICAgIGJwc0N1c3RvbUNvbnRlbnQ6IGl0ZW0ubGFiZWwgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZixcclxuICAgICAgICAgIGdyb3VwTGFiZWw6IGl0ZW0uZ3JvdXBMYWJlbCB8fCBudWxsLFxyXG4gICAgICAgICAgdHlwZTogJ2l0ZW0nLFxyXG4gICAgICAgICAga2V5OiBpdGVtLmtleSA9PT0gdW5kZWZpbmVkID8gaXRlbS52YWx1ZSA6IGl0ZW0ua2V5XHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMubGlzdE9mVGVtcGxhdGVJdGVtJC5uZXh0KGxpc3RPZlRyYW5zZm9ybWVkSXRlbSk7XHJcbiAgICB9XHJcbiAgICBpZiAoYnBzU3RhdHVzKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdHVzU3R5bGVzKHRoaXMuYnBzU3RhdHVzLCB0aGlzLmhhc0ZlZWRiYWNrKTtcclxuICAgIH1cclxuICAgIGlmIChicHNQbGFjZW1lbnQpIHtcclxuICAgICAgY29uc3QgeyBjdXJyZW50VmFsdWUgfSA9IGJwc1BsYWNlbWVudDtcclxuICAgICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gY3VycmVudFZhbHVlIGFzIE56U2VsZWN0UGxhY2VtZW50VHlwZTtcclxuICAgICAgY29uc3QgbGlzdE9mUGxhY2VtZW50ID0gWydib3R0b21MZWZ0JywgJ3RvcExlZnQnLCAnYm90dG9tUmlnaHQnLCAndG9wUmlnaHQnXTtcclxuICAgICAgaWYgKGN1cnJlbnRWYWx1ZSAmJiBsaXN0T2ZQbGFjZW1lbnQuaW5jbHVkZXMoY3VycmVudFZhbHVlKSkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25zID0gW1BPU0lUSU9OX01BUFtjdXJyZW50VmFsdWUgYXMgUE9TSVRJT05fVFlQRV1dO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25zID0gbGlzdE9mUGxhY2VtZW50Lm1hcChlID0+IFBPU0lUSU9OX01BUFtlIGFzIFBPU0lUSU9OX1RZUEVdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56Rm9ybVN0YXR1c1NlcnZpY2U/LmZvcm1TdGF0dXNDaGFuZ2VzXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChwcmUsIGN1cikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHByZS5zdGF0dXMgPT09IGN1ci5zdGF0dXMgJiYgcHJlLmhhc0ZlZWRiYWNrID09PSBjdXIuaGFzRmVlZGJhY2s7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgd2l0aExhdGVzdEZyb20odGhpcy5uekZvcm1Ob1N0YXR1c1NlcnZpY2UgPyB0aGlzLm56Rm9ybU5vU3RhdHVzU2VydmljZS5ub0Zvcm1TdGF0dXMgOiBvYnNlcnZhYmxlT2YoZmFsc2UpKSxcclxuICAgICAgICBtYXAoKFt7IHN0YXR1cywgaGFzRmVlZGJhY2sgfSwgbm9TdGF0dXNdKSA9PiAoeyBzdGF0dXM6IG5vU3RhdHVzID8gJycgOiBzdGF0dXMsIGhhc0ZlZWRiYWNrIH0pKSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCh7IHN0YXR1cywgaGFzRmVlZGJhY2sgfSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdHVzU3R5bGVzKHN0YXR1cywgaGFzRmVlZGJhY2spO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvclxyXG4gICAgICAubW9uaXRvcih0aGlzLmhvc3QsIHRydWUpXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZShmb2N1c09yaWdpbiA9PiB7XHJcbiAgICAgICAgaWYgKCFmb2N1c09yaWdpbikge1xyXG4gICAgICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICAgIHRoaXMuYnBzQmx1ci5lbWl0KCk7XHJcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgICB0aGlzLmJwc0ZvY3VzLmVtaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgY29tYmluZUxhdGVzdChbdGhpcy5saXN0T2ZWYWx1ZSQsIHRoaXMubGlzdE9mVGVtcGxhdGVJdGVtJF0pXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoW2xpc3RPZlNlbGVjdGVkVmFsdWUsIGxpc3RPZlRlbXBsYXRlSXRlbV0pID0+IHtcclxuICAgICAgICBjb25zdCBsaXN0T2ZUYWdJdGVtID0gbGlzdE9mU2VsZWN0ZWRWYWx1ZVxyXG4gICAgICAgICAgLmZpbHRlcigoKSA9PiB0aGlzLmJwc01vZGUgPT09ICd0YWdzJylcclxuICAgICAgICAgIC5maWx0ZXIodmFsdWUgPT4gbGlzdE9mVGVtcGxhdGVJdGVtLmZpbmRJbmRleChvID0+IHRoaXMuY29tcGFyZVdpdGgoby5icHNWYWx1ZSwgdmFsdWUpKSA9PT0gLTEpXHJcbiAgICAgICAgICAubWFwKFxyXG4gICAgICAgICAgICB2YWx1ZSA9PiB0aGlzLmxpc3RPZlRvcEl0ZW0uZmluZChvID0+IHRoaXMuY29tcGFyZVdpdGgoby5icHNWYWx1ZSwgdmFsdWUpKSB8fCB0aGlzLmdlbmVyYXRlVGFnSXRlbSh2YWx1ZSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5saXN0T2ZUYWdBbmRUZW1wbGF0ZUl0ZW0gPSBbLi4ubGlzdE9mVGVtcGxhdGVJdGVtLCAuLi5saXN0T2ZUYWdJdGVtXTtcclxuICAgICAgICB0aGlzLmxpc3RPZlRvcEl0ZW0gPSB0aGlzLmxpc3RPZlZhbHVlXHJcbiAgICAgICAgICAubWFwKFxyXG4gICAgICAgICAgICB2ID0+XHJcbiAgICAgICAgICAgICAgWy4uLnRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVJdGVtLCAuLi50aGlzLmxpc3RPZlRvcEl0ZW1dLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKHYsIGl0ZW0uYnBzVmFsdWUpKSFcclxuICAgICAgICAgIClcclxuICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiAhIWl0ZW0pO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGlzdE9mQ29udGFpbmVySXRlbSgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcclxuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlXHJcbiAgICAgIC5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudCgnc2VsZWN0JylcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xyXG5cclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+XHJcbiAgICAgIGZyb21FdmVudCh0aGlzLmhvc3QubmF0aXZlRWxlbWVudCwgJ2NsaWNrJylcclxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoKHRoaXMuYnBzT3BlbiAmJiB0aGlzLmJwc1Nob3dTZWFyY2gpIHx8IHRoaXMuYnBzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLnNldE9wZW5TdGF0ZSghdGhpcy5icHNPcGVuKSk7XHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgLy8gQ2FyZXRha2VyIG5vdGU6IHdlIGNvdWxkJ3ZlIGFkZGVkIHRoaXMgbGlzdGVuZXIgd2l0aGluIHRoZSB0ZW1wbGF0ZSBgKG92ZXJsYXlLZXlkb3duKT1cIi4uLlwiYCxcclxuICAgIC8vIGJ1dCB3aXRoIHRoaXMgYXBwcm9hY2gsIGl0J2xsIHJ1biBjaGFuZ2UgZGV0ZWN0aW9uIG9uIGVhY2gga2V5Ym9hcmQgY2xpY2ssIGFuZCBhbHNvIGl0J2xsIHJ1blxyXG4gICAgLy8gYG1hcmtGb3JDaGVjaygpYCBpbnRlcm5hbGx5LCB3aGljaCBtZWFucyB0aGUgd2hvbGUgY29tcG9uZW50IHRyZWUgKHN0YXJ0aW5nIGZyb20gdGhlIHJvb3QgYW5kXHJcbiAgICAvLyBnb2luZyBkb3duIHRvIHRoZSBzZWxlY3QgY29tcG9uZW50KSB3aWxsIGJlIHJlLWNoZWNrZWQgYW5kIHVwZGF0ZWQgKGlmIG5lZWRlZCkuXHJcbiAgICAvLyBUaGlzIGlzIHNhZmUgdG8gZG8gdGhhdCBtYW51YWxseSBzaW5jZSBgc2V0T3BlblN0YXRlKClgIGNhbGxzIGBtYXJrRm9yQ2hlY2soKWAgaWYgbmVlZGVkLlxyXG4gICAgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlLZXlkb3duLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRVNDQVBFKSB7XHJcbiAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc1JlYWN0aXZlRHJpdmVuKSB7XHJcbiAgICAgIG1lcmdlKHRoaXMubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudC5jaGFuZ2VzLCB0aGlzLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LmNoYW5nZXMpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICBzdGFydFdpdGgodHJ1ZSksXHJcbiAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT5cclxuICAgICAgICAgICAgbWVyZ2UoXHJcbiAgICAgICAgICAgICAgLi4uW1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5jaGFuZ2VzLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50LmNoYW5nZXMsXHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50Lm1hcChvcHRpb24gPT4gb3B0aW9uLmNoYW5nZXMpLFxyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50Lm1hcChvcHRpb24gPT4gb3B0aW9uLmNoYW5nZXMpXHJcbiAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICApLnBpcGUoc3RhcnRXaXRoKHRydWUpKVxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGxpc3RPZk9wdGlvbkludGVyZmFjZSA9IHRoaXMubGlzdE9mTnpPcHRpb25Db21wb25lbnQudG9BcnJheSgpLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeyB0ZW1wbGF0ZSwgYnBzTGFiZWwsIGJwc1ZhbHVlLCBicHNLZXksIGJwc0Rpc2FibGVkLCBicHNIaWRlLCBicHNDdXN0b21Db250ZW50LCBncm91cExhYmVsIH0gPSBpdGVtO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHRlbXBsYXRlLFxyXG4gICAgICAgICAgICAgIGJwc0xhYmVsLFxyXG4gICAgICAgICAgICAgIGJwc1ZhbHVlLFxyXG4gICAgICAgICAgICAgIGJwc0Rpc2FibGVkLFxyXG4gICAgICAgICAgICAgIGJwc0hpZGUsXHJcbiAgICAgICAgICAgICAgYnBzQ3VzdG9tQ29udGVudCxcclxuICAgICAgICAgICAgICBncm91cExhYmVsLFxyXG4gICAgICAgICAgICAgIGJwc1RpdGxlOiB0aGlzLmdldFRpdGxlKGl0ZW0uYnBzVGl0bGUsIGl0ZW0uYnBzTGFiZWwpLFxyXG4gICAgICAgICAgICAgIHR5cGU6ICdpdGVtJyxcclxuICAgICAgICAgICAgICBrZXk6IGJwc0tleSA9PT0gdW5kZWZpbmVkID8gYnBzVmFsdWUgOiBicHNLZXlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy5saXN0T2ZUZW1wbGF0ZUl0ZW0kLm5leHQobGlzdE9mT3B0aW9uSW50ZXJmYWNlKTtcclxuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBjYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZXF1ZXN0SWQpO1xyXG4gICAgdGhpcy5mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5ob3N0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0U3RhdHVzU3R5bGVzKHN0YXR1czogTnpWYWxpZGF0ZVN0YXR1cywgaGFzRmVlZGJhY2s6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgdGhpcy5oYXNGZWVkYmFjayA9IGhhc0ZlZWRiYWNrO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAvLyByZW5kZXIgc3RhdHVzIGlmIG56U3RhdHVzIGlzIHNldFxyXG4gICAgdGhpcy5zdGF0dXNDbHMgPSBnZXRTdGF0dXNDbGFzc05hbWVzKHRoaXMucHJlZml4Q2xzLCBzdGF0dXMsIGhhc0ZlZWRiYWNrKTtcclxuICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdHVzQ2xzKS5mb3JFYWNoKHN0YXR1cyA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXR1c0Nsc1tzdGF0dXNdKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmhvc3QubmF0aXZlRWxlbWVudCwgc3RhdHVzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50LCBzdGF0dXMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VGl0bGUodGl0bGU6IE56U2VsZWN0T3B0aW9uSW50ZXJmYWNlWyd0aXRsZSddLCBsYWJlbDogTnpTZWxlY3RPcHRpb25JbnRlcmZhY2VbJ2xhYmVsJ10pOiBzdHJpbmcge1xyXG4gICAgbGV0IHJhd1RpdGxlOiBzdHJpbmcgPSB1bmRlZmluZWQhO1xyXG4gICAgaWYgKHRpdGxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgaWYgKHR5cGVvZiBsYWJlbCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGxhYmVsID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgIHJhd1RpdGxlID0gbGFiZWwudG9TdHJpbmcoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdGl0bGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0aXRsZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgcmF3VGl0bGUgPSB0aXRsZS50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByYXdUaXRsZTtcclxuICB9XHJcbn1cclxuIl19