import { __decorate } from "tslib";
import { forwardRef, ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Host, Input, Optional, Output, SkipSelf } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isNotNil, InputBoolean } from 'ng-zorro-antd/core/util';
import { warnDeprecation, } from 'ng-zorro-antd/core/logger';
import { NzTreeBase, } from './tree/nz-tree-base';
import { NzTreeBaseService, } from './tree/nz-tree-base.service';
import { BpsTreeService } from './bps-tree.service';
import { WithConfig } from './tree/config.service';
import { NzTreeHigherOrderServiceToken } from './tree/nz-tree-service.resolver';
import * as i0 from "@angular/core";
import * as i1 from "./tree/nz-tree-base.service";
import * as i2 from "ng-zorro-antd/core/config";
import * as i3 from "ng-zorro-antd/core/no-animation";
import * as i4 from "@angular/common";
import * as i5 from "./bps-tree-node.component";
export function NzTreeServiceFactory(higherOrderService, treeService) {
    return higherOrderService ? higherOrderService : treeService;
}
const NZ_CONFIG_COMPONENT_NAME = 'tree';
export class BpsTreeComponent extends NzTreeBase {
    get treeTemplate() {
        return this.bpsTreeTemplate || this.bpsTreeTemplateChild;
    }
    /**
     * @deprecated 9.0.0 use `bpsExpandAll` instead.
     */
    set bpsDefaultExpandAll(value) {
        warnDeprecation(`'bpsDefaultExpandAll' would be removed in 9.0.0. Please use 'bpsExpandAll' instead.`);
        this.bpsExpandAll = value;
        this._bpsDefaultExpandAll = value;
    }
    get bpsDefaultExpandAll() {
        return this._bpsDefaultExpandAll;
    }
    set bpsData(value) {
        this.initNzData(value);
    }
    /**
     * @deprecated 9.0.0 - use `bpsExpandedKeys` instead.
     */
    set bpsDefaultExpandedKeys(value) {
        warnDeprecation(`'bpsDefaultExpandedKeys' would be removed in 9.0.0. Please use 'bpsExpandedKeys' instead.`);
        this.bpsDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
    }
    /**
     * @deprecated 9.0.0 - use `bpsSelectedKeys` instead.
     */
    set bpsDefaultSelectedKeys(value) {
        warnDeprecation(`'bpsDefaultSelectedKeys' would be removed in 9.0.0. Please use 'bpsSelectedKeys' instead.`);
        this.bpsDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
    }
    /**
     * @deprecated 9.0.0 - use `bpsCheckedKeys` instead.
     */
    set bpsDefaultCheckedKeys(value) {
        warnDeprecation(`'bpsDefaultCheckedKeys' would be removed in 9.0.0. Please use 'bpsCheckedKeys' instead.`);
        this.bpsDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
    }
    set bpsExpandedKeys(value) {
        this.bpsDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
    }
    set bpsSelectedKeys(value) {
        this.bpsDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
    }
    set bpsCheckedKeys(value) {
        this.bpsDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
    }
    set bpsSearchValue(value) {
        this._searchValue = value;
        this.nzTreeService.searchExpand(value);
        if (isNotNil(value)) {
            this.bpsSearchValueChange.emit(this.nzTreeService.formatEvent('search', null, null));
            /**
             * @deprecated 9.0.0 - use `nzOnSearchNode` instead.
             * Hide warning, need remove next version
             */
            this.bpsOnSearchNode.emit(this.nzTreeService.formatEvent('search', null, null));
        }
    }
    get bpsSearchValue() {
        return this._searchValue;
    }
    /**
     * To render nodes if root is changed.
     */
    get bpsNodes() {
        return this.nzTreeService.rootNodes;
    }
    setClassMap() {
        this.classMap = {
            [this.prefixCls]: true,
            ['bps-tree']: true,
            [this.prefixCls + '-show-line']: this.bpsShowLine,
            [`${this.prefixCls}-icon-hide`]: !this.bpsShowIcon,
            [`${this.prefixCls}-block-node`]: this.bpsBlockNode,
            ['draggable-tree']: this.bpsDraggable,
            ['ant-select-tree']: this.bpsSelectMode
        };
    }
    writeValue(value) {
        this.initNzData(value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    // tslint:disable-next-line:no-any
    initNzData(value) {
        if (Array.isArray(value)) {
            this.nzTreeService.isCheckStrictly = this.bpsCheckStrictly;
            this.nzTreeService.isMultiple = this.bpsMultiple;
            this.nzTreeService.initTree(this.coerceTreeNodes(value));
        }
    }
    constructor(nzTreeService, nzConfigService, cdr, noAnimation) {
        super(nzTreeService);
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.bpsShowExpand = true;
        this.bpsShowLine = false;
        this.bpsCheckable = false;
        this.bpsAsyncData = false;
        this.bpsDraggable = false;
        this.bpsSelectMode = false;
        this.bpsCheckStrictly = false;
        this.bpsExpandAll = false;
        this.bpsCustomTree = true;
        this._bpsDefaultExpandAll = false;
        this.bpsMultiple = false;
        this.bpsExpandedKeysChange = new EventEmitter();
        this.bpsSelectedKeysChange = new EventEmitter();
        this.bpsCheckedKeysChange = new EventEmitter();
        this.bpsSearchValueChange = new EventEmitter();
        /**
         * @deprecated use `nzSearchValueChange` instead.
         */
        this.bpsOnSearchNode = new EventEmitter();
        this.bpsClick = new EventEmitter();
        this.bpsDblClick = new EventEmitter();
        this.bpsContextMenu = new EventEmitter();
        this.bpsCheckBoxChange = new EventEmitter();
        this.bpsExpandChange = new EventEmitter();
        this.bpsOnDragStart = new EventEmitter();
        this.bpsOnDragEnter = new EventEmitter();
        this.bpsOnDragOver = new EventEmitter();
        this.bpsOnDragLeave = new EventEmitter();
        this.bpsOnDrop = new EventEmitter();
        this.bpsOnDragEnd = new EventEmitter();
        this.bpsDefaultSubject = new ReplaySubject(6);
        this.destroy$ = new Subject();
        this.prefixCls = 'ant-tree';
        this.classMap = {};
        this.onChange = () => null;
        this.onTouched = () => null;
    }
    ngOnInit() {
        this.setClassMap();
        this.bpsDefaultSubject.pipe(takeUntil(this.destroy$)).subscribe((data) => {
            if (!data || !data.keys) {
                return;
            }
            switch (data.type) {
                case 'nzExpandedKeys':
                    this.nzTreeService.calcExpandedKeys(data.keys, this.bpsNodes);
                    this.bpsExpandedKeysChange.emit(data.keys);
                    break;
                case 'nzSelectedKeys':
                    this.nzTreeService.calcSelectedKeys(data.keys, this.bpsNodes, this.bpsMultiple);
                    this.bpsSelectedKeysChange.emit(data.keys);
                    break;
                case 'nzCheckedKeys':
                    this.nzTreeService.calcCheckedKeys(data.keys, this.bpsNodes, this.bpsCheckStrictly);
                    this.bpsCheckedKeysChange.emit(data.keys);
                    break;
            }
            this.cdr.markForCheck();
        });
        this.nzTreeService
            .eventTriggerChanged()
            .pipe(takeUntil(this.destroy$))
            .subscribe(data => {
            switch (data.eventName) {
                case 'expand':
                    if (this.bpsCustomTree) {
                        const keys = data.keys;
                        data.keys = [keys[keys.length - 1]];
                        this.nzTreeService.calcExpandedKeys(data.keys, this.bpsNodes);
                    }
                    this.bpsExpandChange.emit(data);
                    break;
                case 'click':
                    this.bpsClick.emit(data);
                    break;
                case 'check':
                    this.bpsCheckBoxChange.emit(data);
                    break;
                case 'dblclick':
                    this.bpsDblClick.emit(data);
                    break;
                case 'contextmenu':
                    this.bpsContextMenu.emit(data);
                    break;
                // drag drop
                case 'dragstart':
                    this.bpsOnDragStart.emit(data);
                    break;
                case 'dragenter':
                    this.bpsOnDragEnter.emit(data);
                    break;
                case 'dragover':
                    this.bpsOnDragOver.emit(data);
                    break;
                case 'dragleave':
                    this.bpsOnDragLeave.emit(data);
                    break;
                case 'drop':
                    this.bpsOnDrop.emit(data);
                    break;
                case 'dragend':
                    this.bpsOnDragEnd.emit(data);
                    break;
            }
        });
    }
    ngOnChanges(changes) {
        if (changes.bpsCheckStrictly) {
            this.nzTreeService.isCheckStrictly = this.bpsCheckStrictly;
        }
        if (changes.bpsMultiple) {
            this.nzTreeService.isMultiple = this.bpsMultiple;
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsTreeComponent, deps: [{ token: i1.NzTreeBaseService }, { token: i2.NzConfigService }, { token: i0.ChangeDetectorRef }, { token: i3.NzNoAnimationDirective, host: true, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsTreeComponent, selector: "bps-tree", inputs: { bpsShowIcon: "bpsShowIcon", bpsShowExpand: "bpsShowExpand", bpsShowLine: "bpsShowLine", bpsExpandedIcon: "bpsExpandedIcon", bpsCheckable: "bpsCheckable", bpsAsyncData: "bpsAsyncData", bpsDraggable: "bpsDraggable", bpsHideUnMatched: "bpsHideUnMatched", bpsSelectMode: "bpsSelectMode", bpsCheckStrictly: "bpsCheckStrictly", bpsBlockNode: "bpsBlockNode", bpsExpandAll: "bpsExpandAll", bpsCustomTree: "bpsCustomTree", bpsTreeTemplate: "bpsTreeTemplate", bpsDefaultExpandAll: "bpsDefaultExpandAll", bpsBeforeDrop: "bpsBeforeDrop", bpsMultiple: "bpsMultiple", bpsData: "bpsData", bpsDefaultExpandedKeys: "bpsDefaultExpandedKeys", bpsDefaultSelectedKeys: "bpsDefaultSelectedKeys", bpsDefaultCheckedKeys: "bpsDefaultCheckedKeys", bpsExpandedKeys: "bpsExpandedKeys", bpsSelectedKeys: "bpsSelectedKeys", bpsCheckedKeys: "bpsCheckedKeys", bpsSearchValue: "bpsSearchValue" }, outputs: { bpsExpandedKeysChange: "bpsExpandedKeysChange", bpsSelectedKeysChange: "bpsSelectedKeysChange", bpsCheckedKeysChange: "bpsCheckedKeysChange", bpsSearchValueChange: "bpsSearchValueChange", bpsOnSearchNode: "bpsOnSearchNode", bpsClick: "bpsClick", bpsDblClick: "bpsDblClick", bpsContextMenu: "bpsContextMenu", bpsCheckBoxChange: "bpsCheckBoxChange", bpsExpandChange: "bpsExpandChange", bpsOnDragStart: "bpsOnDragStart", bpsOnDragEnter: "bpsOnDragEnter", bpsOnDragOver: "bpsOnDragOver", bpsOnDragLeave: "bpsOnDragLeave", bpsOnDrop: "bpsOnDrop", bpsOnDragEnd: "bpsOnDragEnd" }, providers: [
            BpsTreeService,
            {
                provide: NzTreeBaseService,
                useFactory: NzTreeServiceFactory,
                deps: [[new SkipSelf(), new Optional(), NzTreeHigherOrderServiceToken], BpsTreeService]
            },
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => BpsTreeComponent),
                multi: true
            }
        ], queries: [{ propertyName: "bpsTreeTemplateChild", first: true, predicate: ["bpsTreeTemplate"], descendants: true, static: true }], exportAs: ["bpsTree"], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ul\r\n  role=\"tree\"\r\n  unselectable=\"on\"\r\n  [ngClass]=\"classMap\">\r\n  <ng-container *ngFor=\"let node of bpsNodes\">\r\n    <bps-tree-node\r\n      [bpsTreeNode]=\"node\"\r\n      [bpsSelectMode]=\"bpsSelectMode\"\r\n      [bpsShowLine]=\"bpsShowLine\"\r\n      [bpsExpandedIcon]=\"bpsExpandedIcon\"\r\n      [bpsDraggable]=\"bpsDraggable\"\r\n      [bpsCheckable]=\"bpsCheckable\"\r\n      [bpsShowExpand]=\"bpsShowExpand\"\r\n      [bpsAsyncData]=\"bpsAsyncData\"\r\n      [bpsSearchValue]=\"bpsSearchValue\"\r\n      [bpsHideUnMatched]=\"bpsHideUnMatched\"\r\n      [bpsBeforeDrop]=\"bpsBeforeDrop\"\r\n      [bpsExpandAll]=\"bpsExpandAll\"\r\n      [bpsShowIcon]=\"bpsShowIcon\"\r\n      [bpsTreeTemplate]=\"treeTemplate\"\r\n      [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n      [bpsNoAnimation]=\"noAnimation?.nzNoAnimation\">\r\n    </bps-tree-node>\r\n  </ng-container>\r\n</ul>\r\n", styles: ["::ng-deep .ant-tree.bps-tree li ul{padding:0!important}::ng-deep .ant-tree{background:transparent!important}::ng-deep .ant-tree li .ant-tree-node-content-wrapper{display:inline-block;height:24px;margin:0;padding:0 5px;color:#000000a6;line-height:24px;text-decoration:none;vertical-align:top;border-radius:2px;cursor:pointer;transition:all .3s}::ng-deep .ant-tree.ant-tree-block-node li .ant-tree-node-content-wrapper{width:100%!important}::ng-deep .bps-tree-parent,::ng-deep .bps-tree-leaf{height:70px!important;max-height:70px!important;overflow:hidden!important;background-color:#363636!important;border:1px solid #363636!important;border-radius:5px!important;color:#fff!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.27!important;letter-spacing:normal!important;text-align:left!important;margin-bottom:5px!important}::ng-deep .bps-tree-leaf{height:35px!important;max-height:35px!important;padding:10px 20px!important}::ng-deep .bps-tree-parent:hover,::ng-deep .bps-tree-leaf:hover{border:solid 1px #445c67!important}::ng-deep .bps-tree-parent.ant-tree-node-selected,::ng-deep .bps-tree-leaf.ant-tree-node-selected,::ng-deep .bps-tree-leaf.ant-tree-node-selected:hover,::ng-deep .bps-tree-parent.ant-tree-node-selected:hover{border:solid 1px #00a2d1!important}::ng-deep .ant-tree-treenode-disabled>.bps-tree-leaf:hover,::ng-deep .ant-tree-treenode-disabled>.bps-tree-leaf,::ng-deep .ant-tree-treenode-disabled>.bps-tree-parent,::ng-deep .ant-tree-treenode-disabled>.bps-tree-parent:hover{border:1px solid #363636!important}::ng-deep li.ant-tree-treenode-disabled>.ant-tree-node-content-wrapper,::ng-deep li.ant-tree-treenode-disabled>.ant-tree-node-content-wrapper span{color:#666!important}::ng-deep .ant-tree li{padding:0!important}\n"], dependencies: [{ kind: "directive", type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i5.BpsTreeNodeComponent, selector: "bps-tree-node", inputs: ["bpsTreeNode", "bpsShowLine", "bpsShowExpand", "bpsCheckable", "bpsAsyncData", "bpsHideUnMatched", "bpsNoAnimation", "bpsSelectMode", "bpsShowIcon", "bpsExpandedIcon", "bpsTreeTemplate", "bpsBeforeDrop", "bpsSearchValue", "bpsCustomTree", "bpsDraggable", "bpsDefaultExpandAll", "bpsExpandAll"], exportAs: ["bpsTreeNode"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    InputBoolean(),
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false)
], BpsTreeComponent.prototype, "bpsShowIcon", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsShowExpand", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsShowLine", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsCheckable", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsAsyncData", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsDraggable", void 0);
__decorate([
    InputBoolean(),
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false)
], BpsTreeComponent.prototype, "bpsHideUnMatched", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsSelectMode", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsCheckStrictly", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME, false),
    InputBoolean()
], BpsTreeComponent.prototype, "bpsBlockNode", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsExpandAll", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsCustomTree", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsDefaultExpandAll", null);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsMultiple", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsTreeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-tree', exportAs: 'bpsTree', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        BpsTreeService,
                        {
                            provide: NzTreeBaseService,
                            useFactory: NzTreeServiceFactory,
                            deps: [[new SkipSelf(), new Optional(), NzTreeHigherOrderServiceToken], BpsTreeService]
                        },
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => BpsTreeComponent),
                            multi: true
                        }
                    ], template: "<ul\r\n  role=\"tree\"\r\n  unselectable=\"on\"\r\n  [ngClass]=\"classMap\">\r\n  <ng-container *ngFor=\"let node of bpsNodes\">\r\n    <bps-tree-node\r\n      [bpsTreeNode]=\"node\"\r\n      [bpsSelectMode]=\"bpsSelectMode\"\r\n      [bpsShowLine]=\"bpsShowLine\"\r\n      [bpsExpandedIcon]=\"bpsExpandedIcon\"\r\n      [bpsDraggable]=\"bpsDraggable\"\r\n      [bpsCheckable]=\"bpsCheckable\"\r\n      [bpsShowExpand]=\"bpsShowExpand\"\r\n      [bpsAsyncData]=\"bpsAsyncData\"\r\n      [bpsSearchValue]=\"bpsSearchValue\"\r\n      [bpsHideUnMatched]=\"bpsHideUnMatched\"\r\n      [bpsBeforeDrop]=\"bpsBeforeDrop\"\r\n      [bpsExpandAll]=\"bpsExpandAll\"\r\n      [bpsShowIcon]=\"bpsShowIcon\"\r\n      [bpsTreeTemplate]=\"treeTemplate\"\r\n      [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n      [bpsNoAnimation]=\"noAnimation?.nzNoAnimation\">\r\n    </bps-tree-node>\r\n  </ng-container>\r\n</ul>\r\n", styles: ["::ng-deep .ant-tree.bps-tree li ul{padding:0!important}::ng-deep .ant-tree{background:transparent!important}::ng-deep .ant-tree li .ant-tree-node-content-wrapper{display:inline-block;height:24px;margin:0;padding:0 5px;color:#000000a6;line-height:24px;text-decoration:none;vertical-align:top;border-radius:2px;cursor:pointer;transition:all .3s}::ng-deep .ant-tree.ant-tree-block-node li .ant-tree-node-content-wrapper{width:100%!important}::ng-deep .bps-tree-parent,::ng-deep .bps-tree-leaf{height:70px!important;max-height:70px!important;overflow:hidden!important;background-color:#363636!important;border:1px solid #363636!important;border-radius:5px!important;color:#fff!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.27!important;letter-spacing:normal!important;text-align:left!important;margin-bottom:5px!important}::ng-deep .bps-tree-leaf{height:35px!important;max-height:35px!important;padding:10px 20px!important}::ng-deep .bps-tree-parent:hover,::ng-deep .bps-tree-leaf:hover{border:solid 1px #445c67!important}::ng-deep .bps-tree-parent.ant-tree-node-selected,::ng-deep .bps-tree-leaf.ant-tree-node-selected,::ng-deep .bps-tree-leaf.ant-tree-node-selected:hover,::ng-deep .bps-tree-parent.ant-tree-node-selected:hover{border:solid 1px #00a2d1!important}::ng-deep .ant-tree-treenode-disabled>.bps-tree-leaf:hover,::ng-deep .ant-tree-treenode-disabled>.bps-tree-leaf,::ng-deep .ant-tree-treenode-disabled>.bps-tree-parent,::ng-deep .ant-tree-treenode-disabled>.bps-tree-parent:hover{border:1px solid #363636!important}::ng-deep li.ant-tree-treenode-disabled>.ant-tree-node-content-wrapper,::ng-deep li.ant-tree-treenode-disabled>.ant-tree-node-content-wrapper span{color:#666!important}::ng-deep .ant-tree li{padding:0!important}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NzTreeBaseService }, { type: i2.NzConfigService }, { type: i0.ChangeDetectorRef }, { type: i3.NzNoAnimationDirective, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }]; }, propDecorators: { bpsShowIcon: [{
                type: Input
            }], bpsShowExpand: [{
                type: Input
            }], bpsShowLine: [{
                type: Input
            }], bpsExpandedIcon: [{
                type: Input
            }], bpsCheckable: [{
                type: Input
            }], bpsAsyncData: [{
                type: Input
            }], bpsDraggable: [{
                type: Input
            }], bpsHideUnMatched: [{
                type: Input
            }], bpsSelectMode: [{
                type: Input
            }], bpsCheckStrictly: [{
                type: Input
            }], bpsBlockNode: [{
                type: Input
            }], bpsExpandAll: [{
                type: Input
            }], bpsCustomTree: [{
                type: Input
            }], bpsTreeTemplate: [{
                type: Input
            }], bpsTreeTemplateChild: [{
                type: ContentChild,
                args: ['bpsTreeTemplate', { static: true }]
            }], bpsDefaultExpandAll: [{
                type: Input
            }], bpsBeforeDrop: [{
                type: Input
            }], bpsMultiple: [{
                type: Input
            }], bpsData: [{
                type: Input
            }], bpsDefaultExpandedKeys: [{
                type: Input
            }], bpsDefaultSelectedKeys: [{
                type: Input
            }], bpsDefaultCheckedKeys: [{
                type: Input
            }], bpsExpandedKeys: [{
                type: Input
            }], bpsSelectedKeys: [{
                type: Input
            }], bpsCheckedKeys: [{
                type: Input
            }], bpsSearchValue: [{
                type: Input
            }], bpsExpandedKeysChange: [{
                type: Output
            }], bpsSelectedKeysChange: [{
                type: Output
            }], bpsCheckedKeysChange: [{
                type: Output
            }], bpsSearchValueChange: [{
                type: Output
            }], bpsOnSearchNode: [{
                type: Output
            }], bpsClick: [{
                type: Output
            }], bpsDblClick: [{
                type: Output
            }], bpsContextMenu: [{
                type: Output
            }], bpsCheckBoxChange: [{
                type: Output
            }], bpsExpandChange: [{
                type: Output
            }], bpsOnDragStart: [{
                type: Output
            }], bpsOnDragEnter: [{
                type: Output
            }], bpsOnDragOver: [{
                type: Output
            }], bpsOnDragLeave: [{
                type: Output
            }], bpsOnDrop: [{
                type: Output
            }], bpsOnDragEnd: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXRyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtdHJlZS9icHMtdHJlZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy10cmVlL2Jwcy10cmVlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBRU4sUUFBUSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQWMsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRSxPQUFPLEVBQ0wsZUFBZSxHQUNoQixNQUFNLDJCQUEyQixDQUFDO0FBQ25DLE9BQU8sRUFDTCxVQUFVLEdBQ1gsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQ0wsaUJBQWlCLEdBQ2xCLE1BQU0sNkJBQTZCLENBQUM7QUFjckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7OztBQUVoRixNQUFN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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlLFxyXG4gIFNraXBTZWxmLFxyXG4gIFRlbXBsYXRlUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBpc05vdE5pbCwgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQge1xyXG4gIHdhcm5EZXByZWNhdGlvbixcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbG9nZ2VyJztcclxuaW1wb3J0IHtcclxuICBOelRyZWVCYXNlLFxyXG59IGZyb20gJy4vdHJlZS9uei10cmVlLWJhc2UnO1xyXG5pbXBvcnQge1xyXG4gIE56VHJlZUJhc2VTZXJ2aWNlLFxyXG59IGZyb20gJy4vdHJlZS9uei10cmVlLWJhc2Uuc2VydmljZSc7XHJcbmltcG9ydCB7XHJcbiAgTnpUcmVlTm9kZVxyXG59IGZyb20gJy4vdHJlZS9uei10cmVlLWJhc2Utbm9kZSc7XHJcbmltcG9ydCB7XHJcbiAgTnpDb25maWdTZXJ2aWNlXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XHJcbmltcG9ydCB7XHJcbiAgTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQsXHJcbiAgTnpGb3JtYXRFbWl0RXZlbnQsXHJcbn0gZnJvbSAnLi90cmVlL256LXRyZWUtYmFzZS5kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7XHJcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSxcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgQnBzVHJlZVNlcnZpY2UgfSBmcm9tICcuL2Jwcy10cmVlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXaXRoQ29uZmlnIH0gZnJvbSAnLi90cmVlL2NvbmZpZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTnpUcmVlSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4gfSBmcm9tICcuL3RyZWUvbnotdHJlZS1zZXJ2aWNlLnJlc29sdmVyJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOelRyZWVTZXJ2aWNlRmFjdG9yeShcclxuICBoaWdoZXJPcmRlclNlcnZpY2U6IE56VHJlZUJhc2VTZXJ2aWNlLFxyXG4gIHRyZWVTZXJ2aWNlOiBCcHNUcmVlU2VydmljZVxyXG4pOiBOelRyZWVCYXNlU2VydmljZSB7XHJcbiAgcmV0dXJuIGhpZ2hlck9yZGVyU2VydmljZSA/IGhpZ2hlck9yZGVyU2VydmljZSA6IHRyZWVTZXJ2aWNlO1xyXG59XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAndHJlZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jwcy10cmVlJyxcclxuICBleHBvcnRBczogJ2Jwc1RyZWUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9icHMtdHJlZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBCcHNUcmVlU2VydmljZSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTnpUcmVlQmFzZVNlcnZpY2UsXHJcbiAgICAgIHVzZUZhY3Rvcnk6IE56VHJlZVNlcnZpY2VGYWN0b3J5LFxyXG4gICAgICBkZXBzOiBbW25ldyBTa2lwU2VsZigpLCBuZXcgT3B0aW9uYWwoKSwgTnpUcmVlSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW5dLCBCcHNUcmVlU2VydmljZV1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCcHNUcmVlQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIHN0eWxlVXJsczogWycuL2Jwcy10cmVlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzVHJlZUNvbXBvbmVudCBleHRlbmRzIE56VHJlZUJhc2UgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIGJwc1Nob3dJY29uOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNTaG93RXhwYW5kOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzU2hvd0xpbmUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBicHNFeHBhbmRlZEljb246IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlIH0+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNDaGVja2FibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzQXN5bmNEYXRhID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0RyYWdnYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgYnBzSGlkZVVuTWF0Y2hlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzU2VsZWN0TW9kZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNDaGVja1N0cmljdGx5ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgQElucHV0Qm9vbGVhbigpIGJwc0Jsb2NrTm9kZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzRXhwYW5kQWxsID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNDdXN0b21UcmVlID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KCkgYnBzVHJlZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZSB9PjtcclxuICBAQ29udGVudENoaWxkKCdicHNUcmVlVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBicHNUcmVlVGVtcGxhdGVDaGlsZDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT47XHJcbiAgZ2V0IHRyZWVUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZSB9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5icHNUcmVlVGVtcGxhdGUgfHwgdGhpcy5icHNUcmVlVGVtcGxhdGVDaGlsZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wIHVzZSBgYnBzRXhwYW5kQWxsYCBpbnN0ZWFkLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgc2V0IGJwc0RlZmF1bHRFeHBhbmRBbGwodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHdhcm5EZXByZWNhdGlvbihgJ2Jwc0RlZmF1bHRFeHBhbmRBbGwnIHdvdWxkIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ2Jwc0V4cGFuZEFsbCcgaW5zdGVhZC5gKTtcclxuICAgIHRoaXMuYnBzRXhwYW5kQWxsID0gdmFsdWU7XHJcbiAgICB0aGlzLl9icHNEZWZhdWx0RXhwYW5kQWxsID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgYnBzRGVmYXVsdEV4cGFuZEFsbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9icHNEZWZhdWx0RXhwYW5kQWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfYnBzRGVmYXVsdEV4cGFuZEFsbCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBicHNCZWZvcmVEcm9wOiAoY29uZmlybTogTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQpID0+IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNNdWx0aXBsZSA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBzZXQgYnBzRGF0YSh2YWx1ZTogYW55W10pIHtcclxuICAgIHRoaXMuaW5pdE56RGF0YSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMCAtIHVzZSBgYnBzRXhwYW5kZWRLZXlzYCBpbnN0ZWFkLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGJwc0RlZmF1bHRFeHBhbmRlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB3YXJuRGVwcmVjYXRpb24oYCdicHNEZWZhdWx0RXhwYW5kZWRLZXlzJyB3b3VsZCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICdicHNFeHBhbmRlZEtleXMnIGluc3RlYWQuYCk7XHJcbiAgICB0aGlzLmJwc0RlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpFeHBhbmRlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wIC0gdXNlIGBicHNTZWxlY3RlZEtleXNgIGluc3RlYWQuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgYnBzRGVmYXVsdFNlbGVjdGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHdhcm5EZXByZWNhdGlvbihgJ2Jwc0RlZmF1bHRTZWxlY3RlZEtleXMnIHdvdWxkIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ2Jwc1NlbGVjdGVkS2V5cycgaW5zdGVhZC5gKTtcclxuICAgIHRoaXMuYnBzRGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduelNlbGVjdGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAgLSB1c2UgYGJwc0NoZWNrZWRLZXlzYCBpbnN0ZWFkLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGJwc0RlZmF1bHRDaGVja2VkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHdhcm5EZXByZWNhdGlvbihgJ2Jwc0RlZmF1bHRDaGVja2VkS2V5cycgd291bGQgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnYnBzQ2hlY2tlZEtleXMnIGluc3RlYWQuYCk7XHJcbiAgICB0aGlzLmJwc0RlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpDaGVja2VkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYnBzRXhwYW5kZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5icHNEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256RXhwYW5kZWRLZXlzJywga2V5czogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBicHNTZWxlY3RlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLmJwc0RlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpTZWxlY3RlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGJwc0NoZWNrZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5icHNEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256Q2hlY2tlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGJwc1NlYXJjaFZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3NlYXJjaFZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2VhcmNoRXhwYW5kKHZhbHVlKTtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5icHNTZWFyY2hWYWx1ZUNoYW5nZS5lbWl0KHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnc2VhcmNoJywgbnVsbCwgbnVsbCkpO1xyXG4gICAgICAvKipcclxuICAgICAgICogQGRlcHJlY2F0ZWQgOS4wLjAgLSB1c2UgYG56T25TZWFyY2hOb2RlYCBpbnN0ZWFkLlxyXG4gICAgICAgKiBIaWRlIHdhcm5pbmcsIG5lZWQgcmVtb3ZlIG5leHQgdmVyc2lvblxyXG4gICAgICAgKi9cclxuICAgICAgdGhpcy5icHNPblNlYXJjaE5vZGUuZW1pdCh0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ3NlYXJjaCcsIG51bGwsIG51bGwpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBicHNTZWFyY2hWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVG8gcmVuZGVyIG5vZGVzIGlmIHJvb3QgaXMgY2hhbmdlZC5cclxuICAgKi9cclxuICBnZXQgYnBzTm9kZXMoKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2Uucm9vdE5vZGVzO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc0V4cGFuZGVkS2V5c0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc1NlbGVjdGVkS2V5c0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc0NoZWNrZWRLZXlzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc1NlYXJjaFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgdXNlIGBuelNlYXJjaFZhbHVlQ2hhbmdlYCBpbnN0ZWFkLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNPblNlYXJjaE5vZGUgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNEYmxDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc0NvbnRleHRNZW51ID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzQ2hlY2tCb3hDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNFeHBhbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzT25EcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNPbkRyYWdFbnRlciA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc09uRHJhZ092ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNPbkRyYWdMZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc09uRHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc09uRHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcblxyXG4gIF9zZWFyY2hWYWx1ZTogc3RyaW5nO1xyXG4gIGJwc0RlZmF1bHRTdWJqZWN0ID0gbmV3IFJlcGxheVN1YmplY3Q8eyB0eXBlOiBzdHJpbmc7IGtleXM6IHN0cmluZ1tdIH0+KDYpO1xyXG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBwcmVmaXhDbHMgPSAnYW50LXRyZWUnO1xyXG4gIGNsYXNzTWFwID0ge307XHJcblxyXG4gIG9uQ2hhbmdlOiAodmFsdWU6IE56VHJlZU5vZGVbXSkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsYXNzTWFwID0ge1xyXG4gICAgICBbdGhpcy5wcmVmaXhDbHNdOiB0cnVlLFxyXG4gICAgICBbJ2Jwcy10cmVlJ106IHRydWUsXHJcbiAgICAgIFt0aGlzLnByZWZpeENscyArICctc2hvdy1saW5lJ106IHRoaXMuYnBzU2hvd0xpbmUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taWNvbi1oaWRlYF06ICF0aGlzLmJwc1Nob3dJY29uLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWJsb2NrLW5vZGVgXTogdGhpcy5icHNCbG9ja05vZGUsXHJcbiAgICAgIFsnZHJhZ2dhYmxlLXRyZWUnXTogdGhpcy5icHNEcmFnZ2FibGUsXHJcbiAgICAgIFsnYW50LXNlbGVjdC10cmVlJ106IHRoaXMuYnBzU2VsZWN0TW9kZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IE56VHJlZU5vZGVbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0TnpEYXRhKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBOelRyZWVOb2RlW10pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGluaXROekRhdGEodmFsdWU6IGFueVtdKTogdm9pZCB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzQ2hlY2tTdHJpY3RseSA9IHRoaXMuYnBzQ2hlY2tTdHJpY3RseTtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzTXVsdGlwbGUgPSB0aGlzLmJwc011bHRpcGxlO1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaW5pdFRyZWUodGhpcy5jb2VyY2VUcmVlTm9kZXModmFsdWUpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbnpUcmVlU2VydmljZTogTnpUcmVlQmFzZVNlcnZpY2UsXHJcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHN1cGVyKG56VHJlZVNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLmJwc0RlZmF1bHRTdWJqZWN0LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRhdGE6IHsgdHlwZTogc3RyaW5nOyBrZXlzOiBzdHJpbmdbXSB9KSA9PiB7XHJcbiAgICAgIGlmICghZGF0YSB8fCAhZGF0YS5rZXlzKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHN3aXRjaCAoZGF0YS50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbnpFeHBhbmRlZEtleXMnOlxyXG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNFeHBhbmRlZEtleXMoZGF0YS5rZXlzLCB0aGlzLmJwc05vZGVzKTtcclxuICAgICAgICAgIHRoaXMuYnBzRXhwYW5kZWRLZXlzQ2hhbmdlLmVtaXQoZGF0YS5rZXlzKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ256U2VsZWN0ZWRLZXlzJzpcclxuICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjU2VsZWN0ZWRLZXlzKGRhdGEua2V5cywgdGhpcy5icHNOb2RlcywgdGhpcy5icHNNdWx0aXBsZSk7XHJcbiAgICAgICAgICB0aGlzLmJwc1NlbGVjdGVkS2V5c0NoYW5nZS5lbWl0KGRhdGEua2V5cyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICduekNoZWNrZWRLZXlzJzpcclxuICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjQ2hlY2tlZEtleXMoZGF0YS5rZXlzLCB0aGlzLmJwc05vZGVzLCB0aGlzLmJwc0NoZWNrU3RyaWN0bHkpO1xyXG4gICAgICAgICAgdGhpcy5icHNDaGVja2VkS2V5c0NoYW5nZS5lbWl0KGRhdGEua2V5cyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlXHJcbiAgICAgIC5ldmVudFRyaWdnZXJDaGFuZ2VkKClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoZGF0YS5ldmVudE5hbWUpIHtcclxuICAgICAgICAgIGNhc2UgJ2V4cGFuZCc6XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJwc0N1c3RvbVRyZWUpIHtcclxuICAgICAgICAgICAgICBjb25zdCBrZXlzID0gZGF0YS5rZXlzO1xyXG4gICAgICAgICAgICAgIGRhdGEua2V5cyA9IFtrZXlzW2tleXMubGVuZ3RoIC0gMV1dO1xyXG4gICAgICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjRXhwYW5kZWRLZXlzKGRhdGEua2V5cywgdGhpcy5icHNOb2Rlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5icHNFeHBhbmRDaGFuZ2UuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdjbGljayc6XHJcbiAgICAgICAgICAgIHRoaXMuYnBzQ2xpY2suZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdjaGVjayc6XHJcbiAgICAgICAgICAgIHRoaXMuYnBzQ2hlY2tCb3hDaGFuZ2UuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkYmxjbGljayc6XHJcbiAgICAgICAgICAgIHRoaXMuYnBzRGJsQ2xpY2suZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdjb250ZXh0bWVudSc6XHJcbiAgICAgICAgICAgIHRoaXMuYnBzQ29udGV4dE1lbnUuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAvLyBkcmFnIGRyb3BcclxuICAgICAgICAgIGNhc2UgJ2RyYWdzdGFydCc6XHJcbiAgICAgICAgICAgIHRoaXMuYnBzT25EcmFnU3RhcnQuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkcmFnZW50ZXInOlxyXG4gICAgICAgICAgICB0aGlzLmJwc09uRHJhZ0VudGVyLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZHJhZ292ZXInOlxyXG4gICAgICAgICAgICB0aGlzLmJwc09uRHJhZ092ZXIuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkcmFnbGVhdmUnOlxyXG4gICAgICAgICAgICB0aGlzLmJwc09uRHJhZ0xlYXZlLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZHJvcCc6XHJcbiAgICAgICAgICAgIHRoaXMuYnBzT25Ecm9wLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZHJhZ2VuZCc6XHJcbiAgICAgICAgICAgIHRoaXMuYnBzT25EcmFnRW5kLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5icHNDaGVja1N0cmljdGx5KSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pc0NoZWNrU3RyaWN0bHkgPSB0aGlzLmJwc0NoZWNrU3RyaWN0bHk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5icHNNdWx0aXBsZSkge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaXNNdWx0aXBsZSA9IHRoaXMuYnBzTXVsdGlwbGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iLCI8dWxcclxuICByb2xlPVwidHJlZVwiXHJcbiAgdW5zZWxlY3RhYmxlPVwib25cIlxyXG4gIFtuZ0NsYXNzXT1cImNsYXNzTWFwXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbm9kZSBvZiBicHNOb2Rlc1wiPlxyXG4gICAgPGJwcy10cmVlLW5vZGVcclxuICAgICAgW2Jwc1RyZWVOb2RlXT1cIm5vZGVcIlxyXG4gICAgICBbYnBzU2VsZWN0TW9kZV09XCJicHNTZWxlY3RNb2RlXCJcclxuICAgICAgW2Jwc1Nob3dMaW5lXT1cImJwc1Nob3dMaW5lXCJcclxuICAgICAgW2Jwc0V4cGFuZGVkSWNvbl09XCJicHNFeHBhbmRlZEljb25cIlxyXG4gICAgICBbYnBzRHJhZ2dhYmxlXT1cImJwc0RyYWdnYWJsZVwiXHJcbiAgICAgIFticHNDaGVja2FibGVdPVwiYnBzQ2hlY2thYmxlXCJcclxuICAgICAgW2Jwc1Nob3dFeHBhbmRdPVwiYnBzU2hvd0V4cGFuZFwiXHJcbiAgICAgIFticHNBc3luY0RhdGFdPVwiYnBzQXN5bmNEYXRhXCJcclxuICAgICAgW2Jwc1NlYXJjaFZhbHVlXT1cImJwc1NlYXJjaFZhbHVlXCJcclxuICAgICAgW2Jwc0hpZGVVbk1hdGNoZWRdPVwiYnBzSGlkZVVuTWF0Y2hlZFwiXHJcbiAgICAgIFticHNCZWZvcmVEcm9wXT1cImJwc0JlZm9yZURyb3BcIlxyXG4gICAgICBbYnBzRXhwYW5kQWxsXT1cImJwc0V4cGFuZEFsbFwiXHJcbiAgICAgIFticHNTaG93SWNvbl09XCJicHNTaG93SWNvblwiXHJcbiAgICAgIFticHNUcmVlVGVtcGxhdGVdPVwidHJlZVRlbXBsYXRlXCJcclxuICAgICAgW0AuZGlzYWJsZWRdPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gICAgICBbYnBzTm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIj5cclxuICAgIDwvYnBzLXRyZWUtbm9kZT5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC91bD5cclxuIl19