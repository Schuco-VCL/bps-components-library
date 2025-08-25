import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Host, HostListener, Input, Optional, TemplateRef, ViewChild } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { InputBoolean, } from 'ng-zorro-antd/core/util';
import { warnDeprecation, } from 'ng-zorro-antd/core/logger';
import { treeCollapseMotion, } from 'ng-zorro-antd/core/animation';
import * as i0 from "@angular/core";
import * as i1 from "./tree/nz-tree-base.service";
import * as i2 from "ng-zorro-antd/core/no-animation";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/icon";
import * as i5 from "ng-zorro-antd/core/highlight";
export class BpsTreeNodeComponent {
    set bpsDraggable(value) {
        this._bpsDraggable = value;
        this.handDragEvent();
    }
    get bpsDraggable() {
        return this._bpsDraggable;
    }
    /**
     * @deprecated use `nzExpandAll` instead.
     */
    set bpsDefaultExpandAll(value) {
        warnDeprecation(`'bpsDefaultExpandAll' is going to be removed in 9.0.0. Please use 'bpsExpandAll' instead.`);
        this._bpsExpandAll = value;
        if (value && this.bpsTreeNode && !this.bpsTreeNode.isLeaf) {
            this.bpsTreeNode.isExpanded = true;
        }
    }
    get bpsDefaultExpandAll() {
        return this._bpsExpandAll;
    }
    // default set
    set bpsExpandAll(value) {
        this._bpsExpandAll = value;
        if (value && this.bpsTreeNode && !this.bpsTreeNode.isLeaf) {
            this.bpsTreeNode.isExpanded = true;
        }
    }
    get bpsExpandAll() {
        return this._bpsExpandAll;
    }
    get bpsIcon() {
        return this.bpsTreeNode.icon;
    }
    get canDraggable() {
        return this.bpsDraggable && !this.bpsTreeNode.isDisabled ? true : null;
    }
    get isShowLineIcon() {
        return !this.bpsTreeNode.isLeaf && this.bpsShowLine;
    }
    get isShowSwitchIcon() {
        return !this.bpsTreeNode.isLeaf && !this.bpsShowLine;
    }
    get isSwitcherOpen() {
        return this.bpsTreeNode.isExpanded && !this.bpsTreeNode.isLeaf;
    }
    get isSwitcherClose() {
        return !this.bpsTreeNode.isExpanded && !this.bpsTreeNode.isLeaf;
    }
    get displayStyle() {
        // to hide unmatched nodes
        return this.bpsSearchValue &&
            this.bpsHideUnMatched &&
            !this.bpsTreeNode.isMatched &&
            !this.bpsTreeNode.isExpanded &&
            this.bpsTreeNode.canHide
            ? 'none'
            : '';
    }
    /**
     * reset node class
     */
    setClassMap() {
        this.prefixCls = this.bpsSelectMode ? 'ant-select-tree' : 'ant-tree';
        this.bpsNodeClass = {
            [`${this.prefixCls}-treenode-disabled`]: this.bpsTreeNode.isDisabled,
            [`${this.prefixCls}-treenode-switcher-open`]: this.isSwitcherOpen,
            [`${this.prefixCls}-treenode-switcher-close`]: this.isSwitcherClose,
            [`${this.prefixCls}-treenode-checkbox-checked`]: this.bpsTreeNode.isChecked,
            [`${this.prefixCls}-treenode-checkbox-indeterminate`]: this.bpsTreeNode.isHalfChecked,
            [`${this.prefixCls}-treenode-selected`]: this.bpsTreeNode.isSelected,
            [`${this.prefixCls}-treenode-loading`]: this.bpsTreeNode.isLoading
        };
        this.bpsNodeSwitcherClass = {
            [`${this.prefixCls}-switcher`]: true,
            [`${this.prefixCls}-switcher-noop`]: this.bpsTreeNode.isLeaf,
            [`${this.prefixCls}-switcher_open`]: this.isSwitcherOpen,
            [`${this.prefixCls}-switcher_close`]: this.isSwitcherClose
        };
        this.bpsNodeCheckboxClass = {
            [`${this.prefixCls}-checkbox`]: true,
            [`${this.prefixCls}-checkbox-checked`]: this.bpsTreeNode.isChecked,
            [`${this.prefixCls}-checkbox-indeterminate`]: this.bpsTreeNode.isHalfChecked,
            [`${this.prefixCls}-checkbox-disabled`]: this.bpsTreeNode.isDisabled || this.bpsTreeNode.isDisableCheckbox
        };
        this.bpsNodeContentClass = {
            [`${this.prefixCls}-node-content-wrapper`]: true,
            [`bps-tree-leaf`]: this.bpsTreeNode.isLeaf,
            [`bps-tree-parent`]: !this.bpsTreeNode.isLeaf,
            [`${this.prefixCls}-node-content-wrapper-open`]: this.isSwitcherOpen,
            [`${this.prefixCls}-node-content-wrapper-close`]: this.isSwitcherClose,
            [`${this.prefixCls}-node-selected`]: this.bpsTreeNode.isSelected
        };
        this.bpsNodeContentIconClass = {
            [`${this.prefixCls}-iconEle`]: true,
            [`${this.prefixCls}-icon__customize`]: true
        };
        this.bpsNodeContentLoadingClass = {
            [`${this.prefixCls}-iconEle`]: true
        };
    }
    onMousedown(event) {
        if (this.bpsSelectMode) {
            event.preventDefault();
        }
    }
    /**
     * click node to select, 200ms to dbl click
     */
    nzClick(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.bpsTreeNode.isSelectable && !this.bpsTreeNode.isDisabled) {
            if (!this.bpsTreeNode.isSelected) {
                this.bpsTreeNode.isSelected = true;
            }
            if (this.bpsCustomTree) {
                this._clickExpand(event);
            }
        }
        const eventNext = this.nzTreeService.formatEvent('click', this.bpsTreeNode, event);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    nzDblClick(event) {
        event.preventDefault();
        event.stopPropagation();
        const eventNext = this.nzTreeService.formatEvent('dblclick', this.bpsTreeNode, event);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    /**
     * @param event
     */
    nzContextMenu(event) {
        event.preventDefault();
        event.stopPropagation();
        const eventNext = this.nzTreeService.formatEvent('contextmenu', this.bpsTreeNode, event);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    /**
     * collapse node
     * @param event
     */
    _clickExpand(event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.bpsTreeNode.isLoading && !this.bpsTreeNode.isLeaf) {
            // set async state
            if (this.bpsAsyncData && this.bpsTreeNode.children.length === 0 && !this.bpsTreeNode.isExpanded) {
                this.bpsTreeNode.isLoading = true;
            }
            this.bpsTreeNode.isExpanded = !this.bpsTreeNode.isExpanded;
            if (this.bpsTreeNode.isMatched) {
                this.setDisplayForParentNodes(this.bpsTreeNode);
            }
            this.setDisplayForChildNodes(this.bpsTreeNode);
            const eventNext = this.nzTreeService.formatEvent('expand', this.bpsTreeNode, event);
            this.nzTreeService.triggerEventChange$.next(eventNext);
        }
    }
    setDisplayForChildNodes(parentNode) {
        const { children } = parentNode;
        if (children.length > 0) {
            children.map(node => {
                const canHide = !node.isMatched;
                node.canHide = canHide;
                this.setDisplayForChildNodes(node);
            });
        }
    }
    setDisplayForParentNodes(targetNode) {
        const parentNode = targetNode.getParentNode();
        if (parentNode) {
            parentNode.canHide = false;
            this.setDisplayForParentNodes(parentNode);
        }
    }
    /**
     * check node
     * @param event
     */
    _clickCheckBox(event) {
        event.preventDefault();
        event.stopPropagation();
        // return if node is disabled
        if (this.bpsTreeNode.isDisabled || this.bpsTreeNode.isDisableCheckbox) {
            return;
        }
        this.bpsTreeNode.isChecked = !this.bpsTreeNode.isChecked;
        this.bpsTreeNode.isHalfChecked = false;
        if (!this.nzTreeService.isCheckStrictly) {
            this.nzTreeService.conduct(this.bpsTreeNode);
        }
        const eventNext = this.nzTreeService.formatEvent('check', this.bpsTreeNode, event);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    /**
     * drag event
     * @param e
     */
    clearDragClass() {
        const dragClass = ['drag-over-gap-top', 'drag-over-gap-bottom', 'drag-over'];
        dragClass.forEach(e => {
            this.renderer.removeClass(this.dragElement.nativeElement, e);
        });
    }
    handleDragStart(e) {
        e.stopPropagation();
        try {
            // ie throw error
            // firefox-need-it
            e.dataTransfer.setData('text/plain', this.bpsTreeNode.key);
        }
        catch (error) {
            // empty
        }
        this.nzTreeService.setSelectedNode(this.bpsTreeNode);
        this.bpsTreeNode.isExpanded = false;
        const eventNext = this.nzTreeService.formatEvent('dragstart', this.bpsTreeNode, e);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    handleDragEnter(e) {
        e.preventDefault();
        e.stopPropagation();
        // reset position
        this.dragPos = 2;
        this.ngZone.run(() => {
            const node = this.nzTreeService.getSelectedNode();
            if (node && node.key !== this.bpsTreeNode.key && !this.bpsTreeNode.isExpanded && !this.bpsTreeNode.isLeaf) {
                this.bpsTreeNode.isExpanded = true;
            }
            const eventNext = this.nzTreeService.formatEvent('dragenter', this.bpsTreeNode, e);
            this.nzTreeService.triggerEventChange$.next(eventNext);
        });
    }
    handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        const dropPosition = this.nzTreeService.calcDropPosition(e);
        if (this.dragPos !== dropPosition) {
            this.clearDragClass();
            this.dragPos = dropPosition;
            // leaf node will pass
            if (!(this.dragPos === 0 && this.bpsTreeNode.isLeaf)) {
                this.renderer.addClass(this.dragElement.nativeElement, this.dragPosClass[this.dragPos]);
            }
        }
        const eventNext = this.nzTreeService.formatEvent('dragover', this.bpsTreeNode, e);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    handleDragLeave(e) {
        e.stopPropagation();
        this.ngZone.run(() => {
            this.clearDragClass();
        });
        const eventNext = this.nzTreeService.formatEvent('dragleave', this.bpsTreeNode, e);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    handleDragDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        this.ngZone.run(() => {
            this.clearDragClass();
            const node = this.nzTreeService.getSelectedNode();
            if (!node || (node && node.key === this.bpsTreeNode.key) || (this.dragPos === 0 && this.bpsTreeNode.isLeaf)) {
                return;
            }
            // pass if node is leafNo
            const dropEvent = this.nzTreeService.formatEvent('drop', this.bpsTreeNode, e);
            const dragEndEvent = this.nzTreeService.formatEvent('dragend', this.bpsTreeNode, e);
            if (this.bpsBeforeDrop) {
                this.bpsBeforeDrop({
                    dragNode: this.nzTreeService.getSelectedNode(),
                    node: this.bpsTreeNode,
                    pos: this.dragPos
                }).subscribe((canDrop) => {
                    if (canDrop) {
                        this.nzTreeService.dropAndApply(this.bpsTreeNode, this.dragPos);
                    }
                    this.nzTreeService.triggerEventChange$.next(dropEvent);
                    this.nzTreeService.triggerEventChange$.next(dragEndEvent);
                });
            }
            else if (this.bpsTreeNode) {
                this.nzTreeService.dropAndApply(this.bpsTreeNode, this.dragPos);
                this.nzTreeService.triggerEventChange$.next(dropEvent);
            }
        });
    }
    handleDragEnd(e) {
        e.stopPropagation();
        this.ngZone.run(() => {
            // if user do not custom beforeDrop
            if (!this.bpsBeforeDrop) {
                const eventNext = this.nzTreeService.formatEvent('dragend', this.bpsTreeNode, e);
                this.nzTreeService.triggerEventChange$.next(eventNext);
            }
        });
    }
    /**
     * Listening to dragging events.
     */
    handDragEvent() {
        this.ngZone.runOutsideAngular(() => {
            if (this.bpsDraggable) {
                this.destroy$ = new Subject();
                fromEvent(this.elRef.nativeElement, 'dragstart')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragStart(e));
                fromEvent(this.elRef.nativeElement, 'dragenter')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragEnter(e));
                fromEvent(this.elRef.nativeElement, 'dragover')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragOver(e));
                fromEvent(this.elRef.nativeElement, 'dragleave')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragLeave(e));
                fromEvent(this.elRef.nativeElement, 'drop')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragDrop(e));
                fromEvent(this.elRef.nativeElement, 'dragend')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragEnd(e));
            }
            else {
                this.destroy$.next();
                this.destroy$.complete();
            }
        });
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
    constructor(nzTreeService, ngZone, renderer, elRef, cdr, noAnimation) {
        this.nzTreeService = nzTreeService;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.elRef = elRef;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.bpsHideUnMatched = false;
        this.bpsNoAnimation = false;
        this.bpsSelectMode = false;
        this.bpsShowIcon = false;
        this.bpsSearchValue = '';
        this.bpsCustomTree = true;
        // default var
        this.prefixCls = 'ant-tree';
        this.bpsNodeClass = {};
        this.bpsNodeSwitcherClass = {};
        this.bpsNodeContentClass = {};
        this.bpsNodeCheckboxClass = {};
        this.bpsNodeContentIconClass = {};
        this.bpsNodeContentLoadingClass = {};
        /**
         * drag var
         */
        this.destroy$ = new Subject();
        this.dragPos = 2;
        this.dragPosClass = {
            '0': 'drag-over',
            '1': 'drag-over-gap-bottom',
            '-1': 'drag-over-gap-top'
        };
        /**
         * default set
         */
        this._bpsDraggable = false;
        this._bpsExpandAll = false;
    }
    ngOnInit() {
        // init expanded / selected / checked list
        if (this.bpsTreeNode.isSelected) {
            this.nzTreeService.setNodeActive(this.bpsTreeNode);
        }
        if (this.bpsTreeNode.isExpanded) {
            this.nzTreeService.setExpandedNodeList(this.bpsTreeNode);
        }
        if (this.bpsTreeNode.isChecked) {
            this.nzTreeService.setCheckedNodeList(this.bpsTreeNode);
        }
        // TODO
        this.bpsTreeNode.component = this;
        this.nzTreeService
            .eventTriggerChanged()
            .pipe(filter(data => data.node.key === this.bpsTreeNode.key), takeUntil(this.destroy$))
            .subscribe(() => {
            this.setClassMap();
            this.markForCheck();
        });
        this.setClassMap();
    }
    ngOnChanges() {
        this.setClassMap();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsTreeNodeComponent, deps: [{ token: i1.NzTreeBaseService }, { token: i0.NgZone }, { token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i2.NzNoAnimationDirective, host: true, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsTreeNodeComponent, selector: "bps-tree-node", inputs: { bpsTreeNode: "bpsTreeNode", bpsShowLine: "bpsShowLine", bpsShowExpand: "bpsShowExpand", bpsCheckable: "bpsCheckable", bpsAsyncData: "bpsAsyncData", bpsHideUnMatched: "bpsHideUnMatched", bpsNoAnimation: "bpsNoAnimation", bpsSelectMode: "bpsSelectMode", bpsShowIcon: "bpsShowIcon", bpsExpandedIcon: "bpsExpandedIcon", bpsTreeTemplate: "bpsTreeTemplate", bpsBeforeDrop: "bpsBeforeDrop", bpsSearchValue: "bpsSearchValue", bpsCustomTree: "bpsCustomTree", bpsDraggable: "bpsDraggable", bpsDefaultExpandAll: "bpsDefaultExpandAll", bpsExpandAll: "bpsExpandAll" }, host: { listeners: { "mousedown": "onMousedown($event)", "click": "nzClick($event)", "dblclick": "nzDblClick($event)", "contextmenu": "nzContextMenu($event)" } }, viewQueries: [{ propertyName: "dragElement", first: true, predicate: ["dragElement"], descendants: true }], exportAs: ["bpsTreeNode"], usesOnChanges: true, ngImport: i0, template: "<li\r\n  #dragElement\r\n  role=\"treeitem\"\r\n  [style.display]=\"displayStyle\"\r\n  [ngClass]=\"bpsNodeClass\">\r\n  <ng-container *ngIf=\"bpsShowExpand && !bpsCustomTree\">\r\n    <span\r\n      [ngClass]=\"bpsNodeSwitcherClass\"\r\n      (click)=\"_clickExpand($event)\">\r\n      <ng-container *ngIf=\"isShowSwitchIcon\">\r\n        <ng-container *ngIf=\"!bpsTreeNode.isLoading\">\r\n          <ng-template\r\n            *ngIf=\"isTemplateRef(bpsExpandedIcon)\"\r\n            [ngTemplateOutlet]=\"bpsExpandedIcon\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: bpsTreeNode }\">\r\n          </ng-template>\r\n          <i\r\n            *ngIf=\"!isTemplateRef(bpsExpandedIcon)\"\r\n            nz-icon\r\n            nzType=\"caret-down\"\r\n            [class.ant-select-switcher-icon]=\"bpsSelectMode\"\r\n            [class.ant-tree-switcher-icon]=\"!bpsSelectMode\">\r\n          </i>\r\n        </ng-container>\r\n        <i *ngIf=\"bpsTreeNode.isLoading\" nz-icon nzType=\"loading\" [nzSpin]=\"true\" class=\"ant-tree-switcher-loading-icon\"></i>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"bpsShowLine\">\r\n        <ng-template\r\n          *ngIf=\"isTemplateRef(bpsExpandedIcon)\"\r\n          [ngTemplateOutlet]=\"bpsExpandedIcon\"\r\n          [ngTemplateOutletContext]=\"{ $implicit: bpsTreeNode }\">\r\n        </ng-template>\r\n        <ng-container *ngIf=\"!isTemplateRef(bpsExpandedIcon)\">\r\n          <i *ngIf=\"isShowLineIcon\" nz-icon [nzType]=\"isSwitcherOpen ? 'minus-square' : 'plus-square'\" class=\"ant-tree-switcher-line-icon\"></i>\r\n          <i *ngIf=\"!isShowLineIcon\" nz-icon nzType=\"file\" class=\"ant-tree-switcher-line-icon\"></i>\r\n        </ng-container>\r\n      </ng-container>\r\n    </span>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"bpsCheckable && !bpsCustomTree\">\r\n    <span\r\n      [ngClass]=\"bpsNodeCheckboxClass\"\r\n      (click)=\"_clickCheckBox($event)\">\r\n      <span [class.ant-tree-checkbox-inner]=\"!bpsSelectMode\"\r\n            [class.ant-select-tree-checkbox-inner]=\"bpsSelectMode\"></span>\r\n    </span>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"!bpsTreeTemplate\">\r\n    <span\r\n      title=\"{{bpsTreeNode.title}}\"\r\n      [attr.draggable]=\"canDraggable\"\r\n      [attr.aria-grabbed]=\"canDraggable\"\r\n      [ngClass]=\"bpsNodeContentClass\"\r\n      [class.draggable]=\"canDraggable\">\r\n      <span\r\n        *ngIf=\"bpsTreeNode.icon && bpsShowIcon\"\r\n        [class.ant-tree-icon__open]=\"isSwitcherOpen\"\r\n        [class.ant-tree-icon__close]=\"isSwitcherClose\"\r\n        [class.ant-tree-icon_loading]=\"bpsTreeNode.isLoading\"\r\n        [ngClass]=\"bpsNodeContentLoadingClass\">\r\n        <span\r\n          [ngClass]=\"bpsNodeContentIconClass\">\r\n          <i nz-icon *ngIf=\"bpsIcon\" [nzType]=\"bpsIcon\"></i>\r\n        </span>\r\n      </span>\r\n      <span class=\"ant-tree-title\" *ngIf=\"!bpsCustomTree || bpsTreeNode.isLeaf\" [innerHTML]=\"bpsTreeNode.title | nzHighlight: bpsSearchValue: '' : 'font-highlight'\">\r\n      </span>\r\n      <img *ngIf=\"bpsCustomTree && !bpsTreeNode.isLeaf\" [src]=\"bpsTreeNode.title\"/>\r\n    </span>\r\n  </ng-container>\r\n  <ng-template\r\n    [ngTemplateOutlet]=\"bpsTreeTemplate\"\r\n    [ngTemplateOutletContext]=\"{ $implicit: bpsTreeNode }\">\r\n  </ng-template>\r\n\r\n  <ul\r\n    *ngIf=\"bpsTreeNode.isExpanded\"\r\n    role=\"group\"\r\n    class=\"ant-tree-child-tree\"\r\n    [class.ant-tree-child-tree-open]=\"!bpsSelectMode || bpsTreeNode.isExpanded\"\r\n    data-expanded=\"true\"\r\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n    @treeCollapseMotion>\r\n    <bps-tree-node\r\n      *ngFor=\"let node of bpsTreeNode.getChildren()\"\r\n      [bpsTreeNode]=\"node\"\r\n      [bpsShowExpand]=\"bpsShowExpand\"\r\n      [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n      [bpsNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n      [bpsSelectMode]=\"bpsSelectMode\"\r\n      [bpsShowLine]=\"bpsShowLine\"\r\n      [bpsExpandedIcon]=\"bpsExpandedIcon\"\r\n      [bpsDraggable]=\"bpsDraggable\"\r\n      [bpsCheckable]=\"bpsCheckable\"\r\n      [bpsAsyncData]=\"bpsAsyncData\"\r\n      [bpsExpandAll]=\"bpsExpandAll\"\r\n      [bpsShowIcon]=\"bpsShowIcon\"\r\n      [bpsSearchValue]=\"bpsSearchValue\"\r\n      [bpsHideUnMatched]=\"bpsHideUnMatched\"\r\n      [bpsBeforeDrop]=\"bpsBeforeDrop\"\r\n      [bpsTreeTemplate]=\"bpsTreeTemplate\">\r\n    </bps-tree-node>\r\n  </ul>\r\n</li>\r\n", dependencies: [{ kind: "directive", type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i4.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: BpsTreeNodeComponent, selector: "bps-tree-node", inputs: ["bpsTreeNode", "bpsShowLine", "bpsShowExpand", "bpsCheckable", "bpsAsyncData", "bpsHideUnMatched", "bpsNoAnimation", "bpsSelectMode", "bpsShowIcon", "bpsExpandedIcon", "bpsTreeTemplate", "bpsBeforeDrop", "bpsSearchValue", "bpsCustomTree", "bpsDraggable", "bpsDefaultExpandAll", "bpsExpandAll"], exportAs: ["bpsTreeNode"] }, { kind: "pipe", type: i5.NzHighlightPipe, name: "nzHighlight" }], animations: [treeCollapseMotion], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    InputBoolean()
], BpsTreeNodeComponent.prototype, "bpsShowLine", void 0);
__decorate([
    InputBoolean()
], BpsTreeNodeComponent.prototype, "bpsShowExpand", void 0);
__decorate([
    InputBoolean()
], BpsTreeNodeComponent.prototype, "bpsCheckable", void 0);
__decorate([
    InputBoolean()
], BpsTreeNodeComponent.prototype, "bpsAsyncData", void 0);
__decorate([
    InputBoolean()
], BpsTreeNodeComponent.prototype, "bpsHideUnMatched", void 0);
__decorate([
    InputBoolean()
], BpsTreeNodeComponent.prototype, "bpsNoAnimation", void 0);
__decorate([
    InputBoolean()
], BpsTreeNodeComponent.prototype, "bpsSelectMode", void 0);
__decorate([
    InputBoolean()
], BpsTreeNodeComponent.prototype, "bpsShowIcon", void 0);
__decorate([
    InputBoolean()
], BpsTreeNodeComponent.prototype, "bpsCustomTree", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsTreeNodeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-tree-node', exportAs: 'bpsTreeNode', changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, animations: [treeCollapseMotion], template: "<li\r\n  #dragElement\r\n  role=\"treeitem\"\r\n  [style.display]=\"displayStyle\"\r\n  [ngClass]=\"bpsNodeClass\">\r\n  <ng-container *ngIf=\"bpsShowExpand && !bpsCustomTree\">\r\n    <span\r\n      [ngClass]=\"bpsNodeSwitcherClass\"\r\n      (click)=\"_clickExpand($event)\">\r\n      <ng-container *ngIf=\"isShowSwitchIcon\">\r\n        <ng-container *ngIf=\"!bpsTreeNode.isLoading\">\r\n          <ng-template\r\n            *ngIf=\"isTemplateRef(bpsExpandedIcon)\"\r\n            [ngTemplateOutlet]=\"bpsExpandedIcon\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: bpsTreeNode }\">\r\n          </ng-template>\r\n          <i\r\n            *ngIf=\"!isTemplateRef(bpsExpandedIcon)\"\r\n            nz-icon\r\n            nzType=\"caret-down\"\r\n            [class.ant-select-switcher-icon]=\"bpsSelectMode\"\r\n            [class.ant-tree-switcher-icon]=\"!bpsSelectMode\">\r\n          </i>\r\n        </ng-container>\r\n        <i *ngIf=\"bpsTreeNode.isLoading\" nz-icon nzType=\"loading\" [nzSpin]=\"true\" class=\"ant-tree-switcher-loading-icon\"></i>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"bpsShowLine\">\r\n        <ng-template\r\n          *ngIf=\"isTemplateRef(bpsExpandedIcon)\"\r\n          [ngTemplateOutlet]=\"bpsExpandedIcon\"\r\n          [ngTemplateOutletContext]=\"{ $implicit: bpsTreeNode }\">\r\n        </ng-template>\r\n        <ng-container *ngIf=\"!isTemplateRef(bpsExpandedIcon)\">\r\n          <i *ngIf=\"isShowLineIcon\" nz-icon [nzType]=\"isSwitcherOpen ? 'minus-square' : 'plus-square'\" class=\"ant-tree-switcher-line-icon\"></i>\r\n          <i *ngIf=\"!isShowLineIcon\" nz-icon nzType=\"file\" class=\"ant-tree-switcher-line-icon\"></i>\r\n        </ng-container>\r\n      </ng-container>\r\n    </span>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"bpsCheckable && !bpsCustomTree\">\r\n    <span\r\n      [ngClass]=\"bpsNodeCheckboxClass\"\r\n      (click)=\"_clickCheckBox($event)\">\r\n      <span [class.ant-tree-checkbox-inner]=\"!bpsSelectMode\"\r\n            [class.ant-select-tree-checkbox-inner]=\"bpsSelectMode\"></span>\r\n    </span>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"!bpsTreeTemplate\">\r\n    <span\r\n      title=\"{{bpsTreeNode.title}}\"\r\n      [attr.draggable]=\"canDraggable\"\r\n      [attr.aria-grabbed]=\"canDraggable\"\r\n      [ngClass]=\"bpsNodeContentClass\"\r\n      [class.draggable]=\"canDraggable\">\r\n      <span\r\n        *ngIf=\"bpsTreeNode.icon && bpsShowIcon\"\r\n        [class.ant-tree-icon__open]=\"isSwitcherOpen\"\r\n        [class.ant-tree-icon__close]=\"isSwitcherClose\"\r\n        [class.ant-tree-icon_loading]=\"bpsTreeNode.isLoading\"\r\n        [ngClass]=\"bpsNodeContentLoadingClass\">\r\n        <span\r\n          [ngClass]=\"bpsNodeContentIconClass\">\r\n          <i nz-icon *ngIf=\"bpsIcon\" [nzType]=\"bpsIcon\"></i>\r\n        </span>\r\n      </span>\r\n      <span class=\"ant-tree-title\" *ngIf=\"!bpsCustomTree || bpsTreeNode.isLeaf\" [innerHTML]=\"bpsTreeNode.title | nzHighlight: bpsSearchValue: '' : 'font-highlight'\">\r\n      </span>\r\n      <img *ngIf=\"bpsCustomTree && !bpsTreeNode.isLeaf\" [src]=\"bpsTreeNode.title\"/>\r\n    </span>\r\n  </ng-container>\r\n  <ng-template\r\n    [ngTemplateOutlet]=\"bpsTreeTemplate\"\r\n    [ngTemplateOutletContext]=\"{ $implicit: bpsTreeNode }\">\r\n  </ng-template>\r\n\r\n  <ul\r\n    *ngIf=\"bpsTreeNode.isExpanded\"\r\n    role=\"group\"\r\n    class=\"ant-tree-child-tree\"\r\n    [class.ant-tree-child-tree-open]=\"!bpsSelectMode || bpsTreeNode.isExpanded\"\r\n    data-expanded=\"true\"\r\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n    @treeCollapseMotion>\r\n    <bps-tree-node\r\n      *ngFor=\"let node of bpsTreeNode.getChildren()\"\r\n      [bpsTreeNode]=\"node\"\r\n      [bpsShowExpand]=\"bpsShowExpand\"\r\n      [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n      [bpsNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n      [bpsSelectMode]=\"bpsSelectMode\"\r\n      [bpsShowLine]=\"bpsShowLine\"\r\n      [bpsExpandedIcon]=\"bpsExpandedIcon\"\r\n      [bpsDraggable]=\"bpsDraggable\"\r\n      [bpsCheckable]=\"bpsCheckable\"\r\n      [bpsAsyncData]=\"bpsAsyncData\"\r\n      [bpsExpandAll]=\"bpsExpandAll\"\r\n      [bpsShowIcon]=\"bpsShowIcon\"\r\n      [bpsSearchValue]=\"bpsSearchValue\"\r\n      [bpsHideUnMatched]=\"bpsHideUnMatched\"\r\n      [bpsBeforeDrop]=\"bpsBeforeDrop\"\r\n      [bpsTreeTemplate]=\"bpsTreeTemplate\">\r\n    </bps-tree-node>\r\n  </ul>\r\n</li>\r\n" }]
        }], ctorParameters: function () { return [{ type: i1.NzTreeBaseService }, { type: i0.NgZone }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i2.NzNoAnimationDirective, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }]; }, propDecorators: { dragElement: [{
                type: ViewChild,
                args: ['dragElement', { static: false }]
            }], bpsTreeNode: [{
                type: Input
            }], bpsShowLine: [{
                type: Input
            }], bpsShowExpand: [{
                type: Input
            }], bpsCheckable: [{
                type: Input
            }], bpsAsyncData: [{
                type: Input
            }], bpsHideUnMatched: [{
                type: Input
            }], bpsNoAnimation: [{
                type: Input
            }], bpsSelectMode: [{
                type: Input
            }], bpsShowIcon: [{
                type: Input
            }], bpsExpandedIcon: [{
                type: Input
            }], bpsTreeTemplate: [{
                type: Input
            }], bpsBeforeDrop: [{
                type: Input
            }], bpsSearchValue: [{
                type: Input
            }], bpsCustomTree: [{
                type: Input
            }], bpsDraggable: [{
                type: Input
            }], bpsDefaultExpandAll: [{
                type: Input
            }], bpsExpandAll: [{
                type: Input
            }], onMousedown: [{
                type: HostListener,
                args: ['mousedown', ['$event']]
            }], nzClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }], nzDblClick: [{
                type: HostListener,
                args: ['dblclick', ['$event']]
            }], nzContextMenu: [{
                type: HostListener,
                args: ['contextmenu', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXRyZWUtbm9kZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy10cmVlL2Jwcy10cmVlLW5vZGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtdHJlZS9icHMtdHJlZS1ub2RlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxJQUFJLEVBQ0osWUFBWSxFQUNaLEtBQUssRUFLTCxRQUFRLEVBRVIsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFDTCxZQUFZLEdBQ2IsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQ0wsZUFBZSxHQUNoQixNQUFNLDJCQUEyQixDQUFDO0FBQ25DLE9BQU8sRUFDTCxrQkFBa0IsR0FDbkIsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7OztBQXNCdEMsTUFBTSxPQUFPLG9CQUFvQjtJQXNCL0IsSUFDSSxZQUFZLENBQUMsS0FBYztRQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUNJLG1CQUFtQixDQUFDLEtBQWM7UUFDcEMsZUFBZSxD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QUFLO2dCQXVITixXQUFXO3NCQURWLFlBQVk7dUJBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQVdyQyxPQUFPO3NCQUROLFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQWlCakMsVUFBVTtzQkFEVCxZQUFZO3VCQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFZcEMsYUFBYTtzQkFEWixZQUFZO3VCQUFDLGFBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdCxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBJbnB1dEJvb2xlYW4sXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQge1xyXG4gIHdhcm5EZXByZWNhdGlvbixcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbG9nZ2VyJztcclxuaW1wb3J0IHtcclxuICB0cmVlQ29sbGFwc2VNb3Rpb24sXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XHJcbmltcG9ydCB7XHJcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSxcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcclxuaW1wb3J0IHtcclxuICBOekZvcm1hdEJlZm9yZURyb3BFdmVudCxcclxufSBmcm9tICcuL3RyZWUvbnotdHJlZS1iYXNlLmRlZmluaXRpb25zJztcclxuaW1wb3J0IHtcclxuICBOelRyZWVCYXNlU2VydmljZSxcclxufSBmcm9tICcuL3RyZWUvbnotdHJlZS1iYXNlLnNlcnZpY2UnO1xyXG5pbXBvcnQge1xyXG4gIE56VHJlZU5vZGVcclxufSBmcm9tICcuL3RyZWUvbnotdHJlZS1iYXNlLW5vZGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicHMtdHJlZS1ub2RlJyxcclxuICBleHBvcnRBczogJ2Jwc1RyZWVOb2RlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnBzLXRyZWUtbm9kZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgYW5pbWF0aW9uczogW3RyZWVDb2xsYXBzZU1vdGlvbl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc1RyZWVOb2RlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgQFZpZXdDaGlsZCgnZHJhZ0VsZW1lbnQnLCB7IHN0YXRpYzogZmFsc2UgfSkgZHJhZ0VsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIC8qKlxyXG4gICAqIGZvciBnbG9iYWwgcHJvcGVydHlcclxuICAgKi9cclxuICBASW5wdXQoKSBicHNUcmVlTm9kZTogTnpUcmVlTm9kZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzU2hvd0xpbmU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc1Nob3dFeHBhbmQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0NoZWNrYWJsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzQXN5bmNEYXRhOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNIaWRlVW5NYXRjaGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc05vQW5pbWF0aW9uID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc1NlbGVjdE1vZGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzU2hvd0ljb24gPSBmYWxzZTtcclxuICBASW5wdXQoKSBicHNFeHBhbmRlZEljb246IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlIH0+O1xyXG4gIEBJbnB1dCgpIGJwc1RyZWVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT47XHJcbiAgQElucHV0KCkgYnBzQmVmb3JlRHJvcDogKGNvbmZpcm06IE56Rm9ybWF0QmVmb3JlRHJvcEV2ZW50KSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG4gIEBJbnB1dCgpIGJwc1NlYXJjaFZhbHVlID0gJyc7XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNDdXN0b21UcmVlID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYnBzRHJhZ2dhYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9icHNEcmFnZ2FibGUgPSB2YWx1ZTtcclxuICAgIHRoaXMuaGFuZERyYWdFdmVudCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGJwc0RyYWdnYWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9icHNEcmFnZ2FibGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCB1c2UgYG56RXhwYW5kQWxsYCBpbnN0ZWFkLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGJwc0RlZmF1bHRFeHBhbmRBbGwodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHdhcm5EZXByZWNhdGlvbihgJ2Jwc0RlZmF1bHRFeHBhbmRBbGwnIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ2Jwc0V4cGFuZEFsbCcgaW5zdGVhZC5gKTtcclxuICAgIHRoaXMuX2Jwc0V4cGFuZEFsbCA9IHZhbHVlO1xyXG4gICAgaWYgKHZhbHVlICYmIHRoaXMuYnBzVHJlZU5vZGUgJiYgIXRoaXMuYnBzVHJlZU5vZGUuaXNMZWFmKSB7XHJcbiAgICAgIHRoaXMuYnBzVHJlZU5vZGUuaXNFeHBhbmRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgYnBzRGVmYXVsdEV4cGFuZEFsbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9icHNFeHBhbmRBbGw7XHJcbiAgfVxyXG5cclxuICAvLyBkZWZhdWx0IHNldFxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGJwc0V4cGFuZEFsbCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fYnBzRXhwYW5kQWxsID0gdmFsdWU7XHJcbiAgICBpZiAodmFsdWUgJiYgdGhpcy5icHNUcmVlTm9kZSAmJiAhdGhpcy5icHNUcmVlTm9kZS5pc0xlYWYpIHtcclxuICAgICAgdGhpcy5icHNUcmVlTm9kZS5pc0V4cGFuZGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBicHNFeHBhbmRBbGwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYnBzRXhwYW5kQWxsO1xyXG4gIH1cclxuXHJcbiAgLy8gZGVmYXVsdCB2YXJcclxuICBwcmVmaXhDbHMgPSAnYW50LXRyZWUnO1xyXG4gIGJwc05vZGVDbGFzcyA9IHt9O1xyXG4gIGJwc05vZGVTd2l0Y2hlckNsYXNzID0ge307XHJcbiAgYnBzTm9kZUNvbnRlbnRDbGFzcyA9IHt9O1xyXG4gIGJwc05vZGVDaGVja2JveENsYXNzID0ge307XHJcbiAgYnBzTm9kZUNvbnRlbnRJY29uQ2xhc3MgPSB7fTtcclxuICBicHNOb2RlQ29udGVudExvYWRpbmdDbGFzcyA9IHt9O1xyXG5cclxuICAvKipcclxuICAgKiBkcmFnIHZhclxyXG4gICAqL1xyXG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBkcmFnUG9zID0gMjtcclxuICBkcmFnUG9zQ2xhc3M6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XHJcbiAgICAnMCc6ICdkcmFnLW92ZXInLFxyXG4gICAgJzEnOiAnZHJhZy1vdmVyLWdhcC1ib3R0b20nLFxyXG4gICAgJy0xJzogJ2RyYWctb3Zlci1nYXAtdG9wJ1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIGRlZmF1bHQgc2V0XHJcbiAgICovXHJcbiAgX2Jwc0RyYWdnYWJsZSA9IGZhbHNlO1xyXG4gIF9icHNFeHBhbmRBbGwgPSBmYWxzZTtcclxuXHJcbiAgZ2V0IGJwc0ljb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmJwc1RyZWVOb2RlLmljb247XHJcbiAgfVxyXG5cclxuICBnZXQgY2FuRHJhZ2dhYmxlKCk6IGJvb2xlYW4gfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLmJwc0RyYWdnYWJsZSAmJiAhdGhpcy5icHNUcmVlTm9kZS5pc0Rpc2FibGVkID8gdHJ1ZSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTaG93TGluZUljb24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMuYnBzVHJlZU5vZGUuaXNMZWFmICYmIHRoaXMuYnBzU2hvd0xpbmU7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTaG93U3dpdGNoSWNvbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5icHNUcmVlTm9kZS5pc0xlYWYgJiYgIXRoaXMuYnBzU2hvd0xpbmU7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTd2l0Y2hlck9wZW4oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5icHNUcmVlTm9kZS5pc0V4cGFuZGVkICYmICF0aGlzLmJwc1RyZWVOb2RlLmlzTGVhZjtcclxuICB9XHJcblxyXG4gIGdldCBpc1N3aXRjaGVyQ2xvc2UoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMuYnBzVHJlZU5vZGUuaXNFeHBhbmRlZCAmJiAhdGhpcy5icHNUcmVlTm9kZS5pc0xlYWY7XHJcbiAgfVxyXG5cclxuICBnZXQgZGlzcGxheVN0eWxlKCk6IHN0cmluZyB7XHJcbiAgICAvLyB0byBoaWRlIHVubWF0Y2hlZCBub2Rlc1xyXG4gICAgcmV0dXJuIHRoaXMuYnBzU2VhcmNoVmFsdWUgJiZcclxuICAgICAgdGhpcy5icHNIaWRlVW5NYXRjaGVkICYmXHJcbiAgICAgICF0aGlzLmJwc1RyZWVOb2RlLmlzTWF0Y2hlZCAmJlxyXG4gICAgICAhdGhpcy5icHNUcmVlTm9kZS5pc0V4cGFuZGVkICYmXHJcbiAgICAgIHRoaXMuYnBzVHJlZU5vZGUuY2FuSGlkZVxyXG4gICAgICA/ICdub25lJ1xyXG4gICAgICA6ICcnO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVzZXQgbm9kZSBjbGFzc1xyXG4gICAqL1xyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5wcmVmaXhDbHMgPSB0aGlzLmJwc1NlbGVjdE1vZGUgPyAnYW50LXNlbGVjdC10cmVlJyA6ICdhbnQtdHJlZSc7XHJcbiAgICB0aGlzLmJwc05vZGVDbGFzcyA9IHtcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10cmVlbm9kZS1kaXNhYmxlZGBdOiB0aGlzLmJwc1RyZWVOb2RlLmlzRGlzYWJsZWQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdHJlZW5vZGUtc3dpdGNoZXItb3BlbmBdOiB0aGlzLmlzU3dpdGNoZXJPcGVuLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLXN3aXRjaGVyLWNsb3NlYF06IHRoaXMuaXNTd2l0Y2hlckNsb3NlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLWNoZWNrYm94LWNoZWNrZWRgXTogdGhpcy5icHNUcmVlTm9kZS5pc0NoZWNrZWQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdHJlZW5vZGUtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZWBdOiB0aGlzLmJwc1RyZWVOb2RlLmlzSGFsZkNoZWNrZWQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdHJlZW5vZGUtc2VsZWN0ZWRgXTogdGhpcy5icHNUcmVlTm9kZS5pc1NlbGVjdGVkLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLWxvYWRpbmdgXTogdGhpcy5icHNUcmVlTm9kZS5pc0xvYWRpbmdcclxuICAgIH07XHJcbiAgICB0aGlzLmJwc05vZGVTd2l0Y2hlckNsYXNzID0ge1xyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXN3aXRjaGVyYF06IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc3dpdGNoZXItbm9vcGBdOiB0aGlzLmJwc1RyZWVOb2RlLmlzTGVhZixcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zd2l0Y2hlcl9vcGVuYF06IHRoaXMuaXNTd2l0Y2hlck9wZW4sXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc3dpdGNoZXJfY2xvc2VgXTogdGhpcy5pc1N3aXRjaGVyQ2xvc2VcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5icHNOb2RlQ2hlY2tib3hDbGFzcyA9IHtcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jaGVja2JveGBdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNoZWNrYm94LWNoZWNrZWRgXTogdGhpcy5icHNUcmVlTm9kZS5pc0NoZWNrZWQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZWBdOiB0aGlzLmJwc1RyZWVOb2RlLmlzSGFsZkNoZWNrZWQsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2hlY2tib3gtZGlzYWJsZWRgXTogdGhpcy5icHNUcmVlTm9kZS5pc0Rpc2FibGVkIHx8IHRoaXMuYnBzVHJlZU5vZGUuaXNEaXNhYmxlQ2hlY2tib3hcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5icHNOb2RlQ29udGVudENsYXNzID0ge1xyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW5vZGUtY29udGVudC13cmFwcGVyYF06IHRydWUsXHJcbiAgICAgIFtgYnBzLXRyZWUtbGVhZmBdOiB0aGlzLmJwc1RyZWVOb2RlLmlzTGVhZixcclxuICAgICAgW2BicHMtdHJlZS1wYXJlbnRgXTogIXRoaXMuYnBzVHJlZU5vZGUuaXNMZWFmLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW5vZGUtY29udGVudC13cmFwcGVyLW9wZW5gXTogdGhpcy5pc1N3aXRjaGVyT3BlbixcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ub2RlLWNvbnRlbnQtd3JhcHBlci1jbG9zZWBdOiB0aGlzLmlzU3dpdGNoZXJDbG9zZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ub2RlLXNlbGVjdGVkYF06IHRoaXMuYnBzVHJlZU5vZGUuaXNTZWxlY3RlZFxyXG4gICAgfTtcclxuICAgIHRoaXMuYnBzTm9kZUNvbnRlbnRJY29uQ2xhc3MgPSB7XHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taWNvbkVsZWBdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWljb25fX2N1c3RvbWl6ZWBdOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgdGhpcy5icHNOb2RlQ29udGVudExvYWRpbmdDbGFzcyA9IHtcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pY29uRWxlYF06IHRydWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKVxyXG4gIG9uTW91c2Vkb3duKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5icHNTZWxlY3RNb2RlKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBjbGljayBub2RlIHRvIHNlbGVjdCwgMjAwbXMgdG8gZGJsIGNsaWNrXHJcbiAgICovXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIG56Q2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICh0aGlzLmJwc1RyZWVOb2RlLmlzU2VsZWN0YWJsZSAmJiAhdGhpcy5icHNUcmVlTm9kZS5pc0Rpc2FibGVkKSB7XHJcbiAgICAgIGlmICghdGhpcy5icHNUcmVlTm9kZS5pc1NlbGVjdGVkKSB7XHJcbiAgICAgICAgdGhpcy5icHNUcmVlTm9kZS5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5icHNDdXN0b21UcmVlKSB7XHJcbiAgICAgICAgdGhpcy5fY2xpY2tFeHBhbmQoZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2NsaWNrJywgdGhpcy5icHNUcmVlTm9kZSwgZXZlbnQpO1xyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkYmxjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgbnpEYmxDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkYmxjbGljaycsIHRoaXMuYnBzVHJlZU5vZGUsIGV2ZW50KTtcclxuICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGV2ZW50XHJcbiAgICovXHJcbiAgQEhvc3RMaXN0ZW5lcignY29udGV4dG1lbnUnLCBbJyRldmVudCddKVxyXG4gIG56Q29udGV4dE1lbnUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnY29udGV4dG1lbnUnLCB0aGlzLmJwc1RyZWVOb2RlLCBldmVudCk7XHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGNvbGxhcHNlIG5vZGVcclxuICAgKiBAcGFyYW0gZXZlbnRcclxuICAgKi9cclxuICBfY2xpY2tFeHBhbmQoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICghdGhpcy5icHNUcmVlTm9kZS5pc0xvYWRpbmcgJiYgIXRoaXMuYnBzVHJlZU5vZGUuaXNMZWFmKSB7XHJcbiAgICAgIC8vIHNldCBhc3luYyBzdGF0ZVxyXG4gICAgICBpZiAodGhpcy5icHNBc3luY0RhdGEgJiYgdGhpcy5icHNUcmVlTm9kZS5jaGlsZHJlbi5sZW5ndGggPT09IDAgJiYgIXRoaXMuYnBzVHJlZU5vZGUuaXNFeHBhbmRlZCkge1xyXG4gICAgICAgIHRoaXMuYnBzVHJlZU5vZGUuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmJwc1RyZWVOb2RlLmlzRXhwYW5kZWQgPSAhdGhpcy5icHNUcmVlTm9kZS5pc0V4cGFuZGVkO1xyXG4gICAgICBpZiAodGhpcy5icHNUcmVlTm9kZS5pc01hdGNoZWQpIHtcclxuICAgICAgICB0aGlzLnNldERpc3BsYXlGb3JQYXJlbnROb2Rlcyh0aGlzLmJwc1RyZWVOb2RlKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldERpc3BsYXlGb3JDaGlsZE5vZGVzKHRoaXMuYnBzVHJlZU5vZGUpO1xyXG4gICAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2V4cGFuZCcsIHRoaXMuYnBzVHJlZU5vZGUsIGV2ZW50KTtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldERpc3BsYXlGb3JDaGlsZE5vZGVzKHBhcmVudE5vZGU6IE56VHJlZU5vZGUpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHBhcmVudE5vZGU7XHJcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICBjaGlsZHJlbi5tYXAobm9kZSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FuSGlkZSA9ICFub2RlLmlzTWF0Y2hlZDtcclxuICAgICAgICBub2RlLmNhbkhpZGUgPSBjYW5IaWRlO1xyXG4gICAgICAgIHRoaXMuc2V0RGlzcGxheUZvckNoaWxkTm9kZXMobm9kZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXREaXNwbGF5Rm9yUGFyZW50Tm9kZXModGFyZ2V0Tm9kZTogTnpUcmVlTm9kZSk6IHZvaWQge1xyXG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IHRhcmdldE5vZGUuZ2V0UGFyZW50Tm9kZSgpO1xyXG4gICAgaWYgKHBhcmVudE5vZGUpIHtcclxuICAgICAgcGFyZW50Tm9kZS5jYW5IaWRlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2V0RGlzcGxheUZvclBhcmVudE5vZGVzKHBhcmVudE5vZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY2hlY2sgbm9kZVxyXG4gICAqIEBwYXJhbSBldmVudFxyXG4gICAqL1xyXG4gIF9jbGlja0NoZWNrQm94KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAvLyByZXR1cm4gaWYgbm9kZSBpcyBkaXNhYmxlZFxyXG4gICAgaWYgKHRoaXMuYnBzVHJlZU5vZGUuaXNEaXNhYmxlZCB8fCB0aGlzLmJwc1RyZWVOb2RlLmlzRGlzYWJsZUNoZWNrYm94KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuYnBzVHJlZU5vZGUuaXNDaGVja2VkID0gIXRoaXMuYnBzVHJlZU5vZGUuaXNDaGVja2VkO1xyXG4gICAgdGhpcy5icHNUcmVlTm9kZS5pc0hhbGZDaGVja2VkID0gZmFsc2U7XHJcbiAgICBpZiAoIXRoaXMubnpUcmVlU2VydmljZS5pc0NoZWNrU3RyaWN0bHkpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3QodGhpcy5icHNUcmVlTm9kZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2NoZWNrJywgdGhpcy5icHNUcmVlTm9kZSwgZXZlbnQpO1xyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBkcmFnIGV2ZW50XHJcbiAgICogQHBhcmFtIGVcclxuICAgKi9cclxuICBjbGVhckRyYWdDbGFzcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRyYWdDbGFzcyA9IFsnZHJhZy1vdmVyLWdhcC10b3AnLCAnZHJhZy1vdmVyLWdhcC1ib3R0b20nLCAnZHJhZy1vdmVyJ107XHJcbiAgICBkcmFnQ2xhc3MuZm9yRWFjaChlID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmRyYWdFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEcmFnU3RhcnQoZTogRHJhZ0V2ZW50KTogdm9pZCB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gaWUgdGhyb3cgZXJyb3JcclxuICAgICAgLy8gZmlyZWZveC1uZWVkLWl0XHJcbiAgICAgIGUuZGF0YVRyYW5zZmVyIS5zZXREYXRhKCd0ZXh0L3BsYWluJywgdGhpcy5icHNUcmVlTm9kZS5rZXkhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vIGVtcHR5XHJcbiAgICB9XHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0U2VsZWN0ZWROb2RlKHRoaXMuYnBzVHJlZU5vZGUpO1xyXG4gICAgdGhpcy5icHNUcmVlTm9kZS5pc0V4cGFuZGVkID0gZmFsc2U7XHJcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdzdGFydCcsIHRoaXMuYnBzVHJlZU5vZGUsIGUpO1xyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEcmFnRW50ZXIoZTogRHJhZ0V2ZW50KTogdm9pZCB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgLy8gcmVzZXQgcG9zaXRpb25cclxuICAgIHRoaXMuZHJhZ1BvcyA9IDI7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICBjb25zdCBub2RlID0gdGhpcy5uelRyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZSgpO1xyXG4gICAgICBpZiAobm9kZSAmJiBub2RlLmtleSAhPT0gdGhpcy5icHNUcmVlTm9kZS5rZXkgJiYgIXRoaXMuYnBzVHJlZU5vZGUuaXNFeHBhbmRlZCAmJiAhdGhpcy5icHNUcmVlTm9kZS5pc0xlYWYpIHtcclxuICAgICAgICB0aGlzLmJwc1RyZWVOb2RlLmlzRXhwYW5kZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ2VudGVyJywgdGhpcy5icHNUcmVlTm9kZSwgZSk7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChldmVudE5leHQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEcmFnT3ZlcihlOiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBkcm9wUG9zaXRpb24gPSB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY0Ryb3BQb3NpdGlvbihlKTtcclxuICAgIGlmICh0aGlzLmRyYWdQb3MgIT09IGRyb3BQb3NpdGlvbikge1xyXG4gICAgICB0aGlzLmNsZWFyRHJhZ0NsYXNzKCk7XHJcbiAgICAgIHRoaXMuZHJhZ1BvcyA9IGRyb3BQb3NpdGlvbjtcclxuICAgICAgLy8gbGVhZiBub2RlIHdpbGwgcGFzc1xyXG4gICAgICBpZiAoISh0aGlzLmRyYWdQb3MgPT09IDAgJiYgdGhpcy5icHNUcmVlTm9kZS5pc0xlYWYpKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRyYWdFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuZHJhZ1Bvc0NsYXNzW3RoaXMuZHJhZ1Bvc10pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBldmVudE5leHQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdvdmVyJywgdGhpcy5icHNUcmVlTm9kZSwgZSk7XHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURyYWdMZWF2ZShlOiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLmNsZWFyRHJhZ0NsYXNzKCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGV2ZW50TmV4dCA9IHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ2xlYXZlJywgdGhpcy5icHNUcmVlTm9kZSwgZSk7XHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZXZlbnROZXh0KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURyYWdEcm9wKGU6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2xlYXJEcmFnQ2xhc3MoKTtcclxuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMubnpUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGUoKTtcclxuICAgICAgaWYgKCFub2RlIHx8IChub2RlICYmIG5vZGUua2V5ID09PSB0aGlzLmJwc1RyZWVOb2RlLmtleSkgfHwgKHRoaXMuZHJhZ1BvcyA9PT0gMCAmJiB0aGlzLmJwc1RyZWVOb2RlLmlzTGVhZikpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgLy8gcGFzcyBpZiBub2RlIGlzIGxlYWZOb1xyXG4gICAgICBjb25zdCBkcm9wRXZlbnQgPSB0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2Ryb3AnLCB0aGlzLmJwc1RyZWVOb2RlLCBlKTtcclxuICAgICAgY29uc3QgZHJhZ0VuZEV2ZW50ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnZW5kJywgdGhpcy5icHNUcmVlTm9kZSwgZSk7XHJcbiAgICAgIGlmICh0aGlzLmJwc0JlZm9yZURyb3ApIHtcclxuICAgICAgICB0aGlzLmJwc0JlZm9yZURyb3Aoe1xyXG4gICAgICAgICAgZHJhZ05vZGU6IHRoaXMubnpUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGUoKSEsXHJcbiAgICAgICAgICBub2RlOiB0aGlzLmJwc1RyZWVOb2RlLFxyXG4gICAgICAgICAgcG9zOiB0aGlzLmRyYWdQb3NcclxuICAgICAgICB9KS5zdWJzY3JpYmUoKGNhbkRyb3A6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgIGlmIChjYW5Ecm9wKSB7XHJcbiAgICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5kcm9wQW5kQXBwbHkodGhpcy5icHNUcmVlTm9kZSwgdGhpcy5kcmFnUG9zKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZSEudHJpZ2dlckV2ZW50Q2hhbmdlJCEubmV4dChkcm9wRXZlbnQpO1xyXG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGRyYWdFbmRFdmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5icHNUcmVlTm9kZSkge1xyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5kcm9wQW5kQXBwbHkodGhpcy5icHNUcmVlTm9kZSwgdGhpcy5kcmFnUG9zKTtcclxuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UhLnRyaWdnZXJFdmVudENoYW5nZSQhLm5leHQoZHJvcEV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEcmFnRW5kKGU6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgIC8vIGlmIHVzZXIgZG8gbm90IGN1c3RvbSBiZWZvcmVEcm9wXHJcbiAgICAgIGlmICghdGhpcy5icHNCZWZvcmVEcm9wKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnROZXh0ID0gdGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnZW5kJywgdGhpcy5icHNUcmVlTm9kZSwgZSk7XHJcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlIS50cmlnZ2VyRXZlbnRDaGFuZ2UkIS5uZXh0KGV2ZW50TmV4dCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTGlzdGVuaW5nIHRvIGRyYWdnaW5nIGV2ZW50cy5cclxuICAgKi9cclxuICBoYW5kRHJhZ0V2ZW50KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5icHNEcmFnZ2FibGUpIHtcclxuICAgICAgICB0aGlzLmRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50Pih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcmFnc3RhcnQnKVxyXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdTdGFydChlKSk7XHJcbiAgICAgICAgZnJvbUV2ZW50PERyYWdFdmVudD4odGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnZHJhZ2VudGVyJylcclxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnRW50ZXIoZSkpO1xyXG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2RyYWdvdmVyJylcclxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnT3ZlcihlKSk7XHJcbiAgICAgICAgZnJvbUV2ZW50PERyYWdFdmVudD4odGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnZHJhZ2xlYXZlJylcclxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnTGVhdmUoZSkpO1xyXG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2Ryb3AnKVxyXG4gICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAgICAgLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdEcm9wKGUpKTtcclxuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50Pih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcmFnZW5kJylcclxuICAgICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnRW5kKGUpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgICAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaXNUZW1wbGF0ZVJlZih2YWx1ZToge30pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xyXG4gIH1cclxuXHJcbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBuelRyZWVTZXJ2aWNlOiBOelRyZWVCYXNlU2VydmljZSxcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIGluaXQgZXhwYW5kZWQgLyBzZWxlY3RlZCAvIGNoZWNrZWQgbGlzdFxyXG4gICAgaWYgKHRoaXMuYnBzVHJlZU5vZGUuaXNTZWxlY3RlZCkge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0Tm9kZUFjdGl2ZSh0aGlzLmJwc1RyZWVOb2RlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmJwc1RyZWVOb2RlLmlzRXhwYW5kZWQpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldEV4cGFuZGVkTm9kZUxpc3QodGhpcy5icHNUcmVlTm9kZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5icHNUcmVlTm9kZS5pc0NoZWNrZWQpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldENoZWNrZWROb2RlTGlzdCh0aGlzLmJwc1RyZWVOb2RlKTtcclxuICAgIH1cclxuICAgIC8vIFRPRE9cclxuICAgIHRoaXMuYnBzVHJlZU5vZGUuY29tcG9uZW50ID0gdGhpcztcclxuICAgIHRoaXMubnpUcmVlU2VydmljZVxyXG4gICAgICAuZXZlbnRUcmlnZ2VyQ2hhbmdlZCgpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGZpbHRlcihkYXRhID0+IGRhdGEubm9kZSEua2V5ID09PSB0aGlzLmJwc1RyZWVOb2RlLmtleSksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgICAgIHRoaXMubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iLCI8bGlcclxuICAjZHJhZ0VsZW1lbnRcclxuICByb2xlPVwidHJlZWl0ZW1cIlxyXG4gIFtzdHlsZS5kaXNwbGF5XT1cImRpc3BsYXlTdHlsZVwiXHJcbiAgW25nQ2xhc3NdPVwiYnBzTm9kZUNsYXNzXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImJwc1Nob3dFeHBhbmQgJiYgIWJwc0N1c3RvbVRyZWVcIj5cclxuICAgIDxzcGFuXHJcbiAgICAgIFtuZ0NsYXNzXT1cImJwc05vZGVTd2l0Y2hlckNsYXNzXCJcclxuICAgICAgKGNsaWNrKT1cIl9jbGlja0V4cGFuZCgkZXZlbnQpXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc1Nob3dTd2l0Y2hJY29uXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFicHNUcmVlTm9kZS5pc0xvYWRpbmdcIj5cclxuICAgICAgICAgIDxuZy10ZW1wbGF0ZVxyXG4gICAgICAgICAgICAqbmdJZj1cImlzVGVtcGxhdGVSZWYoYnBzRXhwYW5kZWRJY29uKVwiXHJcbiAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJwc0V4cGFuZGVkSWNvblwiXHJcbiAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogYnBzVHJlZU5vZGUgfVwiPlxyXG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICpuZ0lmPVwiIWlzVGVtcGxhdGVSZWYoYnBzRXhwYW5kZWRJY29uKVwiXHJcbiAgICAgICAgICAgIG56LWljb25cclxuICAgICAgICAgICAgbnpUeXBlPVwiY2FyZXQtZG93blwiXHJcbiAgICAgICAgICAgIFtjbGFzcy5hbnQtc2VsZWN0LXN3aXRjaGVyLWljb25dPVwiYnBzU2VsZWN0TW9kZVwiXHJcbiAgICAgICAgICAgIFtjbGFzcy5hbnQtdHJlZS1zd2l0Y2hlci1pY29uXT1cIiFicHNTZWxlY3RNb2RlXCI+XHJcbiAgICAgICAgICA8L2k+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPGkgKm5nSWY9XCJicHNUcmVlTm9kZS5pc0xvYWRpbmdcIiBuei1pY29uIG56VHlwZT1cImxvYWRpbmdcIiBbbnpTcGluXT1cInRydWVcIiBjbGFzcz1cImFudC10cmVlLXN3aXRjaGVyLWxvYWRpbmctaWNvblwiPjwvaT5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJicHNTaG93TGluZVwiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZVxyXG4gICAgICAgICAgKm5nSWY9XCJpc1RlbXBsYXRlUmVmKGJwc0V4cGFuZGVkSWNvbilcIlxyXG4gICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnBzRXhwYW5kZWRJY29uXCJcclxuICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogYnBzVHJlZU5vZGUgfVwiPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc1RlbXBsYXRlUmVmKGJwc0V4cGFuZGVkSWNvbilcIj5cclxuICAgICAgICAgIDxpICpuZ0lmPVwiaXNTaG93TGluZUljb25cIiBuei1pY29uIFtuelR5cGVdPVwiaXNTd2l0Y2hlck9wZW4gPyAnbWludXMtc3F1YXJlJyA6ICdwbHVzLXNxdWFyZSdcIiBjbGFzcz1cImFudC10cmVlLXN3aXRjaGVyLWxpbmUtaWNvblwiPjwvaT5cclxuICAgICAgICAgIDxpICpuZ0lmPVwiIWlzU2hvd0xpbmVJY29uXCIgbnotaWNvbiBuelR5cGU9XCJmaWxlXCIgY2xhc3M9XCJhbnQtdHJlZS1zd2l0Y2hlci1saW5lLWljb25cIj48L2k+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJicHNDaGVja2FibGUgJiYgIWJwc0N1c3RvbVRyZWVcIj5cclxuICAgIDxzcGFuXHJcbiAgICAgIFtuZ0NsYXNzXT1cImJwc05vZGVDaGVja2JveENsYXNzXCJcclxuICAgICAgKGNsaWNrKT1cIl9jbGlja0NoZWNrQm94KCRldmVudClcIj5cclxuICAgICAgPHNwYW4gW2NsYXNzLmFudC10cmVlLWNoZWNrYm94LWlubmVyXT1cIiFicHNTZWxlY3RNb2RlXCJcclxuICAgICAgICAgICAgW2NsYXNzLmFudC1zZWxlY3QtdHJlZS1jaGVja2JveC1pbm5lcl09XCJicHNTZWxlY3RNb2RlXCI+PC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhYnBzVHJlZVRlbXBsYXRlXCI+XHJcbiAgICA8c3BhblxyXG4gICAgICB0aXRsZT1cInt7YnBzVHJlZU5vZGUudGl0bGV9fVwiXHJcbiAgICAgIFthdHRyLmRyYWdnYWJsZV09XCJjYW5EcmFnZ2FibGVcIlxyXG4gICAgICBbYXR0ci5hcmlhLWdyYWJiZWRdPVwiY2FuRHJhZ2dhYmxlXCJcclxuICAgICAgW25nQ2xhc3NdPVwiYnBzTm9kZUNvbnRlbnRDbGFzc1wiXHJcbiAgICAgIFtjbGFzcy5kcmFnZ2FibGVdPVwiY2FuRHJhZ2dhYmxlXCI+XHJcbiAgICAgIDxzcGFuXHJcbiAgICAgICAgKm5nSWY9XCJicHNUcmVlTm9kZS5pY29uICYmIGJwc1Nob3dJY29uXCJcclxuICAgICAgICBbY2xhc3MuYW50LXRyZWUtaWNvbl9fb3Blbl09XCJpc1N3aXRjaGVyT3BlblwiXHJcbiAgICAgICAgW2NsYXNzLmFudC10cmVlLWljb25fX2Nsb3NlXT1cImlzU3dpdGNoZXJDbG9zZVwiXHJcbiAgICAgICAgW2NsYXNzLmFudC10cmVlLWljb25fbG9hZGluZ109XCJicHNUcmVlTm9kZS5pc0xvYWRpbmdcIlxyXG4gICAgICAgIFtuZ0NsYXNzXT1cImJwc05vZGVDb250ZW50TG9hZGluZ0NsYXNzXCI+XHJcbiAgICAgICAgPHNwYW5cclxuICAgICAgICAgIFtuZ0NsYXNzXT1cImJwc05vZGVDb250ZW50SWNvbkNsYXNzXCI+XHJcbiAgICAgICAgICA8aSBuei1pY29uICpuZ0lmPVwiYnBzSWNvblwiIFtuelR5cGVdPVwiYnBzSWNvblwiPjwvaT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtdHJlZS10aXRsZVwiICpuZ0lmPVwiIWJwc0N1c3RvbVRyZWUgfHwgYnBzVHJlZU5vZGUuaXNMZWFmXCIgW2lubmVySFRNTF09XCJicHNUcmVlTm9kZS50aXRsZSB8IG56SGlnaGxpZ2h0OiBicHNTZWFyY2hWYWx1ZTogJycgOiAnZm9udC1oaWdobGlnaHQnXCI+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPGltZyAqbmdJZj1cImJwc0N1c3RvbVRyZWUgJiYgIWJwc1RyZWVOb2RlLmlzTGVhZlwiIFtzcmNdPVwiYnBzVHJlZU5vZGUudGl0bGVcIi8+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPG5nLXRlbXBsYXRlXHJcbiAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJicHNUcmVlVGVtcGxhdGVcIlxyXG4gICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBicHNUcmVlTm9kZSB9XCI+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgPHVsXHJcbiAgICAqbmdJZj1cImJwc1RyZWVOb2RlLmlzRXhwYW5kZWRcIlxyXG4gICAgcm9sZT1cImdyb3VwXCJcclxuICAgIGNsYXNzPVwiYW50LXRyZWUtY2hpbGQtdHJlZVwiXHJcbiAgICBbY2xhc3MuYW50LXRyZWUtY2hpbGQtdHJlZS1vcGVuXT1cIiFicHNTZWxlY3RNb2RlIHx8IGJwc1RyZWVOb2RlLmlzRXhwYW5kZWRcIlxyXG4gICAgZGF0YS1leHBhbmRlZD1cInRydWVcIlxyXG4gICAgW0AuZGlzYWJsZWRdPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gICAgQHRyZWVDb2xsYXBzZU1vdGlvbj5cclxuICAgIDxicHMtdHJlZS1ub2RlXHJcbiAgICAgICpuZ0Zvcj1cImxldCBub2RlIG9mIGJwc1RyZWVOb2RlLmdldENoaWxkcmVuKClcIlxyXG4gICAgICBbYnBzVHJlZU5vZGVdPVwibm9kZVwiXHJcbiAgICAgIFticHNTaG93RXhwYW5kXT1cImJwc1Nob3dFeHBhbmRcIlxyXG4gICAgICBbQC5kaXNhYmxlZF09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICAgIFticHNOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICAgIFticHNTZWxlY3RNb2RlXT1cImJwc1NlbGVjdE1vZGVcIlxyXG4gICAgICBbYnBzU2hvd0xpbmVdPVwiYnBzU2hvd0xpbmVcIlxyXG4gICAgICBbYnBzRXhwYW5kZWRJY29uXT1cImJwc0V4cGFuZGVkSWNvblwiXHJcbiAgICAgIFticHNEcmFnZ2FibGVdPVwiYnBzRHJhZ2dhYmxlXCJcclxuICAgICAgW2Jwc0NoZWNrYWJsZV09XCJicHNDaGVja2FibGVcIlxyXG4gICAgICBbYnBzQXN5bmNEYXRhXT1cImJwc0FzeW5jRGF0YVwiXHJcbiAgICAgIFticHNFeHBhbmRBbGxdPVwiYnBzRXhwYW5kQWxsXCJcclxuICAgICAgW2Jwc1Nob3dJY29uXT1cImJwc1Nob3dJY29uXCJcclxuICAgICAgW2Jwc1NlYXJjaFZhbHVlXT1cImJwc1NlYXJjaFZhbHVlXCJcclxuICAgICAgW2Jwc0hpZGVVbk1hdGNoZWRdPVwiYnBzSGlkZVVuTWF0Y2hlZFwiXHJcbiAgICAgIFticHNCZWZvcmVEcm9wXT1cImJwc0JlZm9yZURyb3BcIlxyXG4gICAgICBbYnBzVHJlZVRlbXBsYXRlXT1cImJwc1RyZWVUZW1wbGF0ZVwiPlxyXG4gICAgPC9icHMtdHJlZS1ub2RlPlxyXG4gIDwvdWw+XHJcbjwvbGk+XHJcbiJdfQ==