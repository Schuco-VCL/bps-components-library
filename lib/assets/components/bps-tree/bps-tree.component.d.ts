import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChange, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { NzTreeBase } from './tree/nz-tree-base';
import { NzTreeBaseService } from './tree/nz-tree-base.service';
import { NzTreeNode } from './tree/nz-tree-base-node';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { NzFormatBeforeDropEvent, NzFormatEmitEvent } from './tree/nz-tree-base.definitions';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { BpsTreeService } from './bps-tree.service';
import * as i0 from "@angular/core";
export declare function NzTreeServiceFactory(higherOrderService: NzTreeBaseService, treeService: BpsTreeService): NzTreeBaseService;
export declare class BpsTreeComponent extends NzTreeBase implements OnInit, OnDestroy, ControlValueAccessor, OnChanges {
    nzConfigService: NzConfigService;
    private cdr;
    noAnimation?: NzNoAnimationDirective;
    bpsShowIcon: boolean;
    bpsShowExpand: boolean;
    bpsShowLine: boolean;
    bpsExpandedIcon: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    bpsCheckable: boolean;
    bpsAsyncData: boolean;
    bpsDraggable: boolean;
    bpsHideUnMatched: boolean;
    bpsSelectMode: boolean;
    bpsCheckStrictly: boolean;
    bpsBlockNode: boolean;
    bpsExpandAll: boolean;
    bpsCustomTree: boolean;
    bpsTreeTemplate: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    bpsTreeTemplateChild: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    get treeTemplate(): TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    /**
     * @deprecated 9.0.0 use `bpsExpandAll` instead.
     */
    set bpsDefaultExpandAll(value: boolean);
    get bpsDefaultExpandAll(): boolean;
    private _bpsDefaultExpandAll;
    bpsBeforeDrop: (confirm: NzFormatBeforeDropEvent) => Observable<boolean>;
    bpsMultiple: boolean;
    set bpsData(value: any[]);
    /**
     * @deprecated 9.0.0 - use `bpsExpandedKeys` instead.
     */
    set bpsDefaultExpandedKeys(value: string[]);
    /**
     * @deprecated 9.0.0 - use `bpsSelectedKeys` instead.
     */
    set bpsDefaultSelectedKeys(value: string[]);
    /**
     * @deprecated 9.0.0 - use `bpsCheckedKeys` instead.
     */
    set bpsDefaultCheckedKeys(value: string[]);
    set bpsExpandedKeys(value: string[]);
    set bpsSelectedKeys(value: string[]);
    set bpsCheckedKeys(value: string[]);
    set bpsSearchValue(value: string);
    get bpsSearchValue(): string;
    /**
     * To render nodes if root is changed.
     */
    get bpsNodes(): NzTreeNode[];
    readonly bpsExpandedKeysChange: EventEmitter<string[]>;
    readonly bpsSelectedKeysChange: EventEmitter<string[]>;
    readonly bpsCheckedKeysChange: EventEmitter<string[]>;
    readonly bpsSearchValueChange: EventEmitter<NzFormatEmitEvent>;
    /**
     * @deprecated use `nzSearchValueChange` instead.
     */
    readonly bpsOnSearchNode: EventEmitter<NzFormatEmitEvent>;
    readonly bpsClick: EventEmitter<NzFormatEmitEvent>;
    readonly bpsDblClick: EventEmitter<NzFormatEmitEvent>;
    readonly bpsContextMenu: EventEmitter<NzFormatEmitEvent>;
    readonly bpsCheckBoxChange: EventEmitter<NzFormatEmitEvent>;
    readonly bpsExpandChange: EventEmitter<NzFormatEmitEvent>;
    readonly bpsOnDragStart: EventEmitter<NzFormatEmitEvent>;
    readonly bpsOnDragEnter: EventEmitter<NzFormatEmitEvent>;
    readonly bpsOnDragOver: EventEmitter<NzFormatEmitEvent>;
    readonly bpsOnDragLeave: EventEmitter<NzFormatEmitEvent>;
    readonly bpsOnDrop: EventEmitter<NzFormatEmitEvent>;
    readonly bpsOnDragEnd: EventEmitter<NzFormatEmitEvent>;
    _searchValue: string;
    bpsDefaultSubject: ReplaySubject<{
        type: string;
        keys: string[];
    }>;
    destroy$: Subject<void>;
    prefixCls: string;
    classMap: {};
    onChange: (value: NzTreeNode[]) => void;
    onTouched: () => void;
    setClassMap(): void;
    writeValue(value: NzTreeNode[]): void;
    registerOnChange(fn: (_: NzTreeNode[]) => void): void;
    registerOnTouched(fn: () => void): void;
    initNzData(value: any[]): void;
    constructor(nzTreeService: NzTreeBaseService, nzConfigService: NzConfigService, cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsTreeComponent, [null, null, null, { optional: true; host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsTreeComponent, "bps-tree", ["bpsTree"], { "bpsShowIcon": { "alias": "bpsShowIcon"; "required": false; }; "bpsShowExpand": { "alias": "bpsShowExpand"; "required": false; }; "bpsShowLine": { "alias": "bpsShowLine"; "required": false; }; "bpsExpandedIcon": { "alias": "bpsExpandedIcon"; "required": false; }; "bpsCheckable": { "alias": "bpsCheckable"; "required": false; }; "bpsAsyncData": { "alias": "bpsAsyncData"; "required": false; }; "bpsDraggable": { "alias": "bpsDraggable"; "required": false; }; "bpsHideUnMatched": { "alias": "bpsHideUnMatched"; "required": false; }; "bpsSelectMode": { "alias": "bpsSelectMode"; "required": false; }; "bpsCheckStrictly": { "alias": "bpsCheckStrictly"; "required": false; }; "bpsBlockNode": { "alias": "bpsBlockNode"; "required": false; }; "bpsExpandAll": { "alias": "bpsExpandAll"; "required": false; }; "bpsCustomTree": { "alias": "bpsCustomTree"; "required": false; }; "bpsTreeTemplate": { "alias": "bpsTreeTemplate"; "required": false; }; "bpsDefaultExpandAll": { "alias": "bpsDefaultExpandAll"; "required": false; }; "bpsBeforeDrop": { "alias": "bpsBeforeDrop"; "required": false; }; "bpsMultiple": { "alias": "bpsMultiple"; "required": false; }; "bpsData": { "alias": "bpsData"; "required": false; }; "bpsDefaultExpandedKeys": { "alias": "bpsDefaultExpandedKeys"; "required": false; }; "bpsDefaultSelectedKeys": { "alias": "bpsDefaultSelectedKeys"; "required": false; }; "bpsDefaultCheckedKeys": { "alias": "bpsDefaultCheckedKeys"; "required": false; }; "bpsExpandedKeys": { "alias": "bpsExpandedKeys"; "required": false; }; "bpsSelectedKeys": { "alias": "bpsSelectedKeys"; "required": false; }; "bpsCheckedKeys": { "alias": "bpsCheckedKeys"; "required": false; }; "bpsSearchValue": { "alias": "bpsSearchValue"; "required": false; }; }, { "bpsExpandedKeysChange": "bpsExpandedKeysChange"; "bpsSelectedKeysChange": "bpsSelectedKeysChange"; "bpsCheckedKeysChange": "bpsCheckedKeysChange"; "bpsSearchValueChange": "bpsSearchValueChange"; "bpsOnSearchNode": "bpsOnSearchNode"; "bpsClick": "bpsClick"; "bpsDblClick": "bpsDblClick"; "bpsContextMenu": "bpsContextMenu"; "bpsCheckBoxChange": "bpsCheckBoxChange"; "bpsExpandChange": "bpsExpandChange"; "bpsOnDragStart": "bpsOnDragStart"; "bpsOnDragEnter": "bpsOnDragEnter"; "bpsOnDragOver": "bpsOnDragOver"; "bpsOnDragLeave": "bpsOnDragLeave"; "bpsOnDrop": "bpsOnDrop"; "bpsOnDragEnd": "bpsOnDragEnd"; }, ["bpsTreeTemplateChild"], never, false, never>;
}
//# sourceMappingURL=bps-tree.component.d.ts.map