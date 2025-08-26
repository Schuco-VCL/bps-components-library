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
const _c0 = ["bpsTreeTemplate"];
function BpsTreeComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "bps-tree-node", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const node_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("bpsTreeNode", node_r1)("bpsSelectMode", ctx_r1.bpsSelectMode)("bpsShowLine", ctx_r1.bpsShowLine)("bpsExpandedIcon", ctx_r1.bpsExpandedIcon)("bpsDraggable", ctx_r1.bpsDraggable)("bpsCheckable", ctx_r1.bpsCheckable)("bpsShowExpand", ctx_r1.bpsShowExpand)("bpsAsyncData", ctx_r1.bpsAsyncData)("bpsSearchValue", ctx_r1.bpsSearchValue)("bpsHideUnMatched", ctx_r1.bpsHideUnMatched)("bpsBeforeDrop", ctx_r1.bpsBeforeDrop)("bpsExpandAll", ctx_r1.bpsExpandAll)("bpsShowIcon", ctx_r1.bpsShowIcon)("bpsTreeTemplate", ctx_r1.treeTemplate)("@.disabled", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("bpsNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation);
} }
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
    static { this.ɵfac = function BpsTreeComponent_Factory(t) { return new (t || BpsTreeComponent)(i0.ɵɵdirectiveInject(i1.NzTreeBaseService), i0.ɵɵdirectiveInject(i2.NzConfigService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i3.NzNoAnimationDirective, 9)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsTreeComponent, selectors: [["bps-tree"]], contentQueries: function BpsTreeComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, _c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.bpsTreeTemplateChild = _t.first);
        } }, inputs: { bpsShowIcon: "bpsShowIcon", bpsShowExpand: "bpsShowExpand", bpsShowLine: "bpsShowLine", bpsExpandedIcon: "bpsExpandedIcon", bpsCheckable: "bpsCheckable", bpsAsyncData: "bpsAsyncData", bpsDraggable: "bpsDraggable", bpsHideUnMatched: "bpsHideUnMatched", bpsSelectMode: "bpsSelectMode", bpsCheckStrictly: "bpsCheckStrictly", bpsBlockNode: "bpsBlockNode", bpsExpandAll: "bpsExpandAll", bpsCustomTree: "bpsCustomTree", bpsTreeTemplate: "bpsTreeTemplate", bpsDefaultExpandAll: "bpsDefaultExpandAll", bpsBeforeDrop: "bpsBeforeDrop", bpsMultiple: "bpsMultiple", bpsData: "bpsData", bpsDefaultExpandedKeys: "bpsDefaultExpandedKeys", bpsDefaultSelectedKeys: "bpsDefaultSelectedKeys", bpsDefaultCheckedKeys: "bpsDefaultCheckedKeys", bpsExpandedKeys: "bpsExpandedKeys", bpsSelectedKeys: "bpsSelectedKeys", bpsCheckedKeys: "bpsCheckedKeys", bpsSearchValue: "bpsSearchValue" }, outputs: { bpsExpandedKeysChange: "bpsExpandedKeysChange", bpsSelectedKeysChange: "bpsSelectedKeysChange", bpsCheckedKeysChange: "bpsCheckedKeysChange", bpsSearchValueChange: "bpsSearchValueChange", bpsOnSearchNode: "bpsOnSearchNode", bpsClick: "bpsClick", bpsDblClick: "bpsDblClick", bpsContextMenu: "bpsContextMenu", bpsCheckBoxChange: "bpsCheckBoxChange", bpsExpandChange: "bpsExpandChange", bpsOnDragStart: "bpsOnDragStart", bpsOnDragEnter: "bpsOnDragEnter", bpsOnDragOver: "bpsOnDragOver", bpsOnDragLeave: "bpsOnDragLeave", bpsOnDrop: "bpsOnDrop", bpsOnDragEnd: "bpsOnDragEnd" }, exportAs: ["bpsTree"], features: [i0.ɵɵProvidersFeature([
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
            ]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [["role", "tree", "unselectable", "on", 3, "ngClass"], [4, "ngFor", "ngForOf"], [3, "bpsTreeNode", "bpsSelectMode", "bpsShowLine", "bpsExpandedIcon", "bpsDraggable", "bpsCheckable", "bpsShowExpand", "bpsAsyncData", "bpsSearchValue", "bpsHideUnMatched", "bpsBeforeDrop", "bpsExpandAll", "bpsShowIcon", "bpsTreeTemplate", "bpsNoAnimation"]], template: function BpsTreeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ul", 0);
            i0.ɵɵtemplate(1, BpsTreeComponent_ng_container_1_Template, 2, 16, "ng-container", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.classMap);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.bpsNodes);
        } }, dependencies: [i4.NgClass, i4.NgForOf, i5.BpsTreeNodeComponent], styles: [".ant-tree.bps-tree li ul{padding:0!important}  .ant-tree{background:transparent!important}  .ant-tree li .ant-tree-node-content-wrapper{display:inline-block;height:24px;margin:0;padding:0 5px;color:#000000a6;line-height:24px;text-decoration:none;vertical-align:top;border-radius:2px;cursor:pointer;transition:all .3s}  .ant-tree.ant-tree-block-node li .ant-tree-node-content-wrapper{width:100%!important}  .bps-tree-parent,   .bps-tree-leaf{height:70px!important;max-height:70px!important;overflow:hidden!important;background-color:#363636!important;border:1px solid #363636!important;border-radius:5px!important;color:#fff!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.27!important;letter-spacing:normal!important;text-align:left!important;margin-bottom:5px!important}  .bps-tree-leaf{height:35px!important;max-height:35px!important;padding:10px 20px!important}  .bps-tree-parent:hover,   .bps-tree-leaf:hover{border:solid 1px #445c67!important}  .bps-tree-parent.ant-tree-node-selected,   .bps-tree-leaf.ant-tree-node-selected,   .bps-tree-leaf.ant-tree-node-selected:hover,   .bps-tree-parent.ant-tree-node-selected:hover{border:solid 1px #00a2d1!important}  .ant-tree-treenode-disabled>.bps-tree-leaf:hover,   .ant-tree-treenode-disabled>.bps-tree-leaf,   .ant-tree-treenode-disabled>.bps-tree-parent,   .ant-tree-treenode-disabled>.bps-tree-parent:hover{border:1px solid #363636!important}  li.ant-tree-treenode-disabled>.ant-tree-node-content-wrapper,   li.ant-tree-treenode-disabled>.ant-tree-node-content-wrapper span{color:#666!important}  .ant-tree li{padding:0!important}"], changeDetection: 0 }); }
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsTreeComponent, [{
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
    }], () => [{ type: i1.NzTreeBaseService }, { type: i2.NzConfigService }, { type: i0.ChangeDetectorRef }, { type: i3.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }], { bpsShowIcon: [{
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsTreeComponent, { className: "BpsTreeComponent", filePath: "lib\\components\\bps-tree\\bps-tree.component.ts", lineNumber: 79 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXRyZWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtdHJlZS9icHMtdHJlZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy10cmVlL2Jwcy10cmVlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUlMLFFBQVEsRUFDUixNQUFNLEVBRU4sUUFBUSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQWMsYUFBYSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRSxPQUFPLEVBQ0wsZUFBZSxHQUNoQixNQUFNLDJCQUEyQixDQUFDO0FBQ25DLE9BQU8sRUFDTCxVQUFVLEdBQ1gsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQ0wsaUJBQWlCLEdBQ2xCLE1BQU0sNkJBQTZCLENBQUM7QUFjckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7Ozs7O0lDM0M5RSw2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cUJBQXFCO2tCQUF2QyxNQUFNO1lBQ1ksb0JBQW9CO2tCQUF0QyxNQUFNO1lBRVksb0JBQW9CO2tCQUF0QyxNQUFNO1lBS1ksZUFBZTtrQkFBakMsTUFBTTtZQUVZLFFBQVE7a0JBQTFCLE1BQU07WUFDWSxXQUFXO2tCQUE3QixNQUFNO1lBQ1ksY0FBYztrQkFBaEMsTUFBTTtZQUNZLGlCQUFpQjtrQkFBbkMsTUFBTTtZQUNZLGVBQWU7a0JBQWpDLE1BQU07WUFFWSxjQUFjO2tCQUFoQyxNQUFNO1lBQ1ksY0FBYztrQkFBaEMsTUFBTTtZQUNZLGFBQWE7a0JBQS9CLE1BQU07WUFDWSxjQUFjO2tCQUFoQyxNQUFNO1lBQ1ksU0FBUztrQkFBM0IsTUFBTTtZQUNZLFlBQVk7a0JBQTlCLE1BQU07O2tGQTNJSSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlLFxyXG4gIFNraXBTZWxmLFxyXG4gIFRlbXBsYXRlUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBpc05vdE5pbCwgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQge1xyXG4gIHdhcm5EZXByZWNhdGlvbixcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbG9nZ2VyJztcclxuaW1wb3J0IHtcclxuICBOelRyZWVCYXNlLFxyXG59IGZyb20gJy4vdHJlZS9uei10cmVlLWJhc2UnO1xyXG5pbXBvcnQge1xyXG4gIE56VHJlZUJhc2VTZXJ2aWNlLFxyXG59IGZyb20gJy4vdHJlZS9uei10cmVlLWJhc2Uuc2VydmljZSc7XHJcbmltcG9ydCB7XHJcbiAgTnpUcmVlTm9kZVxyXG59IGZyb20gJy4vdHJlZS9uei10cmVlLWJhc2Utbm9kZSc7XHJcbmltcG9ydCB7XHJcbiAgTnpDb25maWdTZXJ2aWNlXHJcbn0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XHJcbmltcG9ydCB7XHJcbiAgTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQsXHJcbiAgTnpGb3JtYXRFbWl0RXZlbnQsXHJcbn0gZnJvbSAnLi90cmVlL256LXRyZWUtYmFzZS5kZWZpbml0aW9ucyc7XHJcbmltcG9ydCB7XHJcbiAgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSxcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgQnBzVHJlZVNlcnZpY2UgfSBmcm9tICcuL2Jwcy10cmVlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXaXRoQ29uZmlnIH0gZnJvbSAnLi90cmVlL2NvbmZpZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTnpUcmVlSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW4gfSBmcm9tICcuL3RyZWUvbnotdHJlZS1zZXJ2aWNlLnJlc29sdmVyJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOelRyZWVTZXJ2aWNlRmFjdG9yeShcclxuICBoaWdoZXJPcmRlclNlcnZpY2U6IE56VHJlZUJhc2VTZXJ2aWNlLFxyXG4gIHRyZWVTZXJ2aWNlOiBCcHNUcmVlU2VydmljZVxyXG4pOiBOelRyZWVCYXNlU2VydmljZSB7XHJcbiAgcmV0dXJuIGhpZ2hlck9yZGVyU2VydmljZSA/IGhpZ2hlck9yZGVyU2VydmljZSA6IHRyZWVTZXJ2aWNlO1xyXG59XHJcblxyXG5jb25zdCBOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUgPSAndHJlZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jwcy10cmVlJyxcclxuICBleHBvcnRBczogJ2Jwc1RyZWUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9icHMtdHJlZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBCcHNUcmVlU2VydmljZSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTnpUcmVlQmFzZVNlcnZpY2UsXHJcbiAgICAgIHVzZUZhY3Rvcnk6IE56VHJlZVNlcnZpY2VGYWN0b3J5LFxyXG4gICAgICBkZXBzOiBbW25ldyBTa2lwU2VsZigpLCBuZXcgT3B0aW9uYWwoKSwgTnpUcmVlSGlnaGVyT3JkZXJTZXJ2aWNlVG9rZW5dLCBCcHNUcmVlU2VydmljZV1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCcHNUcmVlQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIHN0eWxlVXJsczogWycuL2Jwcy10cmVlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzVHJlZUNvbXBvbmVudCBleHRlbmRzIE56VHJlZUJhc2UgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIEBXaXRoQ29uZmlnKE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSwgZmFsc2UpIGJwc1Nob3dJY29uOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNTaG93RXhwYW5kOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzU2hvd0xpbmUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBicHNFeHBhbmRlZEljb246IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelRyZWVOb2RlIH0+O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNDaGVja2FibGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzQXN5bmNEYXRhID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0RyYWdnYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgYnBzSGlkZVVuTWF0Y2hlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzU2VsZWN0TW9kZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNDaGVja1N0cmljdGx5ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FLCBmYWxzZSkgQElucHV0Qm9vbGVhbigpIGJwc0Jsb2NrTm9kZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzRXhwYW5kQWxsID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNDdXN0b21UcmVlID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KCkgYnBzVHJlZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZSB9PjtcclxuICBAQ29udGVudENoaWxkKCdicHNUcmVlVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBicHNUcmVlVGVtcGxhdGVDaGlsZDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56VHJlZU5vZGUgfT47XHJcbiAgZ2V0IHRyZWVUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpUcmVlTm9kZSB9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5icHNUcmVlVGVtcGxhdGUgfHwgdGhpcy5icHNUcmVlVGVtcGxhdGVDaGlsZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wIHVzZSBgYnBzRXhwYW5kQWxsYCBpbnN0ZWFkLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgc2V0IGJwc0RlZmF1bHRFeHBhbmRBbGwodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHdhcm5EZXByZWNhdGlvbihgJ2Jwc0RlZmF1bHRFeHBhbmRBbGwnIHdvdWxkIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ2Jwc0V4cGFuZEFsbCcgaW5zdGVhZC5gKTtcclxuICAgIHRoaXMuYnBzRXhwYW5kQWxsID0gdmFsdWU7XHJcbiAgICB0aGlzLl9icHNEZWZhdWx0RXhwYW5kQWxsID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgYnBzRGVmYXVsdEV4cGFuZEFsbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9icHNEZWZhdWx0RXhwYW5kQWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfYnBzRGVmYXVsdEV4cGFuZEFsbCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBicHNCZWZvcmVEcm9wOiAoY29uZmlybTogTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQpID0+IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNNdWx0aXBsZSA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBzZXQgYnBzRGF0YSh2YWx1ZTogYW55W10pIHtcclxuICAgIHRoaXMuaW5pdE56RGF0YSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCA5LjAuMCAtIHVzZSBgYnBzRXhwYW5kZWRLZXlzYCBpbnN0ZWFkLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGJwc0RlZmF1bHRFeHBhbmRlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB3YXJuRGVwcmVjYXRpb24oYCdicHNEZWZhdWx0RXhwYW5kZWRLZXlzJyB3b3VsZCBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICdicHNFeHBhbmRlZEtleXMnIGluc3RlYWQuYCk7XHJcbiAgICB0aGlzLmJwc0RlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpFeHBhbmRlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXByZWNhdGVkIDkuMC4wIC0gdXNlIGBicHNTZWxlY3RlZEtleXNgIGluc3RlYWQuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgYnBzRGVmYXVsdFNlbGVjdGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHdhcm5EZXByZWNhdGlvbihgJ2Jwc0RlZmF1bHRTZWxlY3RlZEtleXMnIHdvdWxkIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ2Jwc1NlbGVjdGVkS2V5cycgaW5zdGVhZC5gKTtcclxuICAgIHRoaXMuYnBzRGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduelNlbGVjdGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgOS4wLjAgLSB1c2UgYGJwc0NoZWNrZWRLZXlzYCBpbnN0ZWFkLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGJwc0RlZmF1bHRDaGVja2VkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHdhcm5EZXByZWNhdGlvbihgJ2Jwc0RlZmF1bHRDaGVja2VkS2V5cycgd291bGQgYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnYnBzQ2hlY2tlZEtleXMnIGluc3RlYWQuYCk7XHJcbiAgICB0aGlzLmJwc0RlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpDaGVja2VkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYnBzRXhwYW5kZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5icHNEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256RXhwYW5kZWRLZXlzJywga2V5czogdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBicHNTZWxlY3RlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLmJwc0RlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpTZWxlY3RlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGJwc0NoZWNrZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5icHNEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256Q2hlY2tlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGJwc1NlYXJjaFZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3NlYXJjaFZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2VhcmNoRXhwYW5kKHZhbHVlKTtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5icHNTZWFyY2hWYWx1ZUNoYW5nZS5lbWl0KHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnc2VhcmNoJywgbnVsbCwgbnVsbCkpO1xyXG4gICAgICAvKipcclxuICAgICAgICogQGRlcHJlY2F0ZWQgOS4wLjAgLSB1c2UgYG56T25TZWFyY2hOb2RlYCBpbnN0ZWFkLlxyXG4gICAgICAgKiBIaWRlIHdhcm5pbmcsIG5lZWQgcmVtb3ZlIG5leHQgdmVyc2lvblxyXG4gICAgICAgKi9cclxuICAgICAgdGhpcy5icHNPblNlYXJjaE5vZGUuZW1pdCh0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ3NlYXJjaCcsIG51bGwsIG51bGwpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBicHNTZWFyY2hWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVG8gcmVuZGVyIG5vZGVzIGlmIHJvb3QgaXMgY2hhbmdlZC5cclxuICAgKi9cclxuICBnZXQgYnBzTm9kZXMoKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2Uucm9vdE5vZGVzO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc0V4cGFuZGVkS2V5c0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc1NlbGVjdGVkS2V5c0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc0NoZWNrZWRLZXlzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc1NlYXJjaFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgdXNlIGBuelNlYXJjaFZhbHVlQ2hhbmdlYCBpbnN0ZWFkLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNPblNlYXJjaE5vZGUgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNEYmxDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc0NvbnRleHRNZW51ID0gbmV3IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzQ2hlY2tCb3hDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNFeHBhbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzT25EcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNPbkRyYWdFbnRlciA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc09uRHJhZ092ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNPbkRyYWdMZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc09uRHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc09uRHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcblxyXG4gIF9zZWFyY2hWYWx1ZTogc3RyaW5nO1xyXG4gIGJwc0RlZmF1bHRTdWJqZWN0ID0gbmV3IFJlcGxheVN1YmplY3Q8eyB0eXBlOiBzdHJpbmc7IGtleXM6IHN0cmluZ1tdIH0+KDYpO1xyXG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcmVmaXhDbHMgPSAnYW50LXRyZWUnO1xyXG4gIGNsYXNzTWFwID0ge307XHJcblxyXG4gIG9uQ2hhbmdlOiAodmFsdWU6IE56VHJlZU5vZGVbXSkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsYXNzTWFwID0ge1xyXG4gICAgICBbdGhpcy5wcmVmaXhDbHNdOiB0cnVlLFxyXG4gICAgICBbJ2Jwcy10cmVlJ106IHRydWUsXHJcbiAgICAgIFt0aGlzLnByZWZpeENscyArICctc2hvdy1saW5lJ106IHRoaXMuYnBzU2hvd0xpbmUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taWNvbi1oaWRlYF06ICF0aGlzLmJwc1Nob3dJY29uLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWJsb2NrLW5vZGVgXTogdGhpcy5icHNCbG9ja05vZGUsXHJcbiAgICAgIFsnZHJhZ2dhYmxlLXRyZWUnXTogdGhpcy5icHNEcmFnZ2FibGUsXHJcbiAgICAgIFsnYW50LXNlbGVjdC10cmVlJ106IHRoaXMuYnBzU2VsZWN0TW9kZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IE56VHJlZU5vZGVbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0TnpEYXRhKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBOelRyZWVOb2RlW10pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGluaXROekRhdGEodmFsdWU6IGFueVtdKTogdm9pZCB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzQ2hlY2tTdHJpY3RseSA9IHRoaXMuYnBzQ2hlY2tTdHJpY3RseTtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmlzTXVsdGlwbGUgPSB0aGlzLmJwc011bHRpcGxlO1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaW5pdFRyZWUodGhpcy5jb2VyY2VUcmVlTm9kZXModmFsdWUpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbnpUcmVlU2VydmljZTogTnpUcmVlQmFzZVNlcnZpY2UsXHJcbiAgICBwdWJsaWMgbnpDb25maWdTZXJ2aWNlOiBOekNvbmZpZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHtcclxuICAgIHN1cGVyKG56VHJlZVNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLmJwc0RlZmF1bHRTdWJqZWN0LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRhdGE6IHsgdHlwZTogc3RyaW5nOyBrZXlzOiBzdHJpbmdbXSB9KSA9PiB7XHJcbiAgICAgIGlmICghZGF0YSB8fCAhZGF0YS5rZXlzKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHN3aXRjaCAoZGF0YS50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbnpFeHBhbmRlZEtleXMnOlxyXG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNFeHBhbmRlZEtleXMoZGF0YS5rZXlzLCB0aGlzLmJwc05vZGVzKTtcclxuICAgICAgICAgIHRoaXMuYnBzRXhwYW5kZWRLZXlzQ2hhbmdlLmVtaXQoZGF0YS5rZXlzKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ256U2VsZWN0ZWRLZXlzJzpcclxuICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjU2VsZWN0ZWRLZXlzKGRhdGEua2V5cywgdGhpcy5icHNOb2RlcywgdGhpcy5icHNNdWx0aXBsZSk7XHJcbiAgICAgICAgICB0aGlzLmJwc1NlbGVjdGVkS2V5c0NoYW5nZS5lbWl0KGRhdGEua2V5cyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICduekNoZWNrZWRLZXlzJzpcclxuICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjQ2hlY2tlZEtleXMoZGF0YS5rZXlzLCB0aGlzLmJwc05vZGVzLCB0aGlzLmJwc0NoZWNrU3RyaWN0bHkpO1xyXG4gICAgICAgICAgdGhpcy5icHNDaGVja2VkS2V5c0NoYW5nZS5lbWl0KGRhdGEua2V5cyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlXHJcbiAgICAgIC5ldmVudFRyaWdnZXJDaGFuZ2VkKClcclxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxyXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoZGF0YS5ldmVudE5hbWUpIHtcclxuICAgICAgICAgIGNhc2UgJ2V4cGFuZCc6XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJwc0N1c3RvbVRyZWUpIHtcclxuICAgICAgICAgICAgICBjb25zdCBrZXlzID0gZGF0YS5rZXlzO1xyXG4gICAgICAgICAgICAgIGRhdGEua2V5cyA9IFtrZXlzW2tleXMubGVuZ3RoIC0gMV1dO1xyXG4gICAgICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjRXhwYW5kZWRLZXlzKGRhdGEua2V5cywgdGhpcy5icHNOb2Rlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5icHNFeHBhbmRDaGFuZ2UuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdjbGljayc6XHJcbiAgICAgICAgICAgIHRoaXMuYnBzQ2xpY2suZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdjaGVjayc6XHJcbiAgICAgICAgICAgIHRoaXMuYnBzQ2hlY2tCb3hDaGFuZ2UuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkYmxjbGljayc6XHJcbiAgICAgICAgICAgIHRoaXMuYnBzRGJsQ2xpY2suZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdjb250ZXh0bWVudSc6XHJcbiAgICAgICAgICAgIHRoaXMuYnBzQ29udGV4dE1lbnUuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAvLyBkcmFnIGRyb3BcclxuICAgICAgICAgIGNhc2UgJ2RyYWdzdGFydCc6XHJcbiAgICAgICAgICAgIHRoaXMuYnBzT25EcmFnU3RhcnQuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkcmFnZW50ZXInOlxyXG4gICAgICAgICAgICB0aGlzLmJwc09uRHJhZ0VudGVyLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZHJhZ292ZXInOlxyXG4gICAgICAgICAgICB0aGlzLmJwc09uRHJhZ092ZXIuZW1pdChkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdkcmFnbGVhdmUnOlxyXG4gICAgICAgICAgICB0aGlzLmJwc09uRHJhZ0xlYXZlLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZHJvcCc6XHJcbiAgICAgICAgICAgIHRoaXMuYnBzT25Ecm9wLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZHJhZ2VuZCc6XHJcbiAgICAgICAgICAgIHRoaXMuYnBzT25EcmFnRW5kLmVtaXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5icHNDaGVja1N0cmljdGx5KSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pc0NoZWNrU3RyaWN0bHkgPSB0aGlzLmJwc0NoZWNrU3RyaWN0bHk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5icHNNdWx0aXBsZSkge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuaXNNdWx0aXBsZSA9IHRoaXMuYnBzTXVsdGlwbGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iLCI8dWxcclxuICByb2xlPVwidHJlZVwiXHJcbiAgdW5zZWxlY3RhYmxlPVwib25cIlxyXG4gIFtuZ0NsYXNzXT1cImNsYXNzTWFwXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbm9kZSBvZiBicHNOb2Rlc1wiPlxyXG4gICAgPGJwcy10cmVlLW5vZGVcclxuICAgICAgW2Jwc1RyZWVOb2RlXT1cIm5vZGVcIlxyXG4gICAgICBbYnBzU2VsZWN0TW9kZV09XCJicHNTZWxlY3RNb2RlXCJcclxuICAgICAgW2Jwc1Nob3dMaW5lXT1cImJwc1Nob3dMaW5lXCJcclxuICAgICAgW2Jwc0V4cGFuZGVkSWNvbl09XCJicHNFeHBhbmRlZEljb25cIlxyXG4gICAgICBbYnBzRHJhZ2dhYmxlXT1cImJwc0RyYWdnYWJsZVwiXHJcbiAgICAgIFticHNDaGVja2FibGVdPVwiYnBzQ2hlY2thYmxlXCJcclxuICAgICAgW2Jwc1Nob3dFeHBhbmRdPVwiYnBzU2hvd0V4cGFuZFwiXHJcbiAgICAgIFticHNBc3luY0RhdGFdPVwiYnBzQXN5bmNEYXRhXCJcclxuICAgICAgW2Jwc1NlYXJjaFZhbHVlXT1cImJwc1NlYXJjaFZhbHVlXCJcclxuICAgICAgW2Jwc0hpZGVVbk1hdGNoZWRdPVwiYnBzSGlkZVVuTWF0Y2hlZFwiXHJcbiAgICAgIFticHNCZWZvcmVEcm9wXT1cImJwc0JlZm9yZURyb3BcIlxyXG4gICAgICBbYnBzRXhwYW5kQWxsXT1cImJwc0V4cGFuZEFsbFwiXHJcbiAgICAgIFticHNTaG93SWNvbl09XCJicHNTaG93SWNvblwiXHJcbiAgICAgIFticHNUcmVlVGVtcGxhdGVdPVwidHJlZVRlbXBsYXRlXCJcclxuICAgICAgW0AuZGlzYWJsZWRdPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gICAgICBbYnBzTm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIj5cclxuICAgIDwvYnBzLXRyZWUtbm9kZT5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuPC91bD5cclxuIl19