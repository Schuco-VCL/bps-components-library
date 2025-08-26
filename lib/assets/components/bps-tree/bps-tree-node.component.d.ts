import { ChangeDetectorRef, ElementRef, NgZone, OnChanges, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { NzFormatBeforeDropEvent } from './tree/nz-tree-base.definitions';
import { NzTreeBaseService } from './tree/nz-tree-base.service';
import { NzTreeNode } from './tree/nz-tree-base-node';
import * as i0 from "@angular/core";
export declare class BpsTreeNodeComponent implements OnInit, OnChanges, OnDestroy {
    nzTreeService: NzTreeBaseService;
    private ngZone;
    private renderer;
    private elRef;
    private cdr;
    noAnimation?: NzNoAnimationDirective;
    dragElement: ElementRef;
    /**
     * for global property
     */
    bpsTreeNode: NzTreeNode;
    bpsShowLine: boolean;
    bpsShowExpand: boolean;
    bpsCheckable: boolean;
    bpsAsyncData: boolean;
    bpsHideUnMatched: boolean;
    bpsNoAnimation: boolean;
    bpsSelectMode: boolean;
    bpsShowIcon: boolean;
    bpsExpandedIcon: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    bpsTreeTemplate: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    bpsBeforeDrop: (confirm: NzFormatBeforeDropEvent) => Observable<boolean>;
    bpsSearchValue: string;
    bpsCustomTree: boolean;
    set bpsDraggable(value: boolean);
    get bpsDraggable(): boolean;
    /**
     * @deprecated use `nzExpandAll` instead.
     */
    set bpsDefaultExpandAll(value: boolean);
    get bpsDefaultExpandAll(): boolean;
    set bpsExpandAll(value: boolean);
    get bpsExpandAll(): boolean;
    prefixCls: string;
    bpsNodeClass: {};
    bpsNodeSwitcherClass: {};
    bpsNodeContentClass: {};
    bpsNodeCheckboxClass: {};
    bpsNodeContentIconClass: {};
    bpsNodeContentLoadingClass: {};
    /**
     * drag var
     */
    destroy$: Subject<void>;
    dragPos: number;
    dragPosClass: {
        [key: string]: string;
    };
    /**
     * default set
     */
    _bpsDraggable: boolean;
    _bpsExpandAll: boolean;
    get bpsIcon(): string;
    get canDraggable(): boolean | null;
    get isShowLineIcon(): boolean;
    get isShowSwitchIcon(): boolean;
    get isSwitcherOpen(): boolean;
    get isSwitcherClose(): boolean;
    get displayStyle(): string;
    /**
     * reset node class
     */
    setClassMap(): void;
    onMousedown(event: MouseEvent): void;
    /**
     * click node to select, 200ms to dbl click
     */
    nzClick(event: MouseEvent): void;
    nzDblClick(event: MouseEvent): void;
    /**
     * @param event
     */
    nzContextMenu(event: MouseEvent): void;
    /**
     * collapse node
     * @param event
     */
    _clickExpand(event: MouseEvent): void;
    private setDisplayForChildNodes;
    private setDisplayForParentNodes;
    /**
     * check node
     * @param event
     */
    _clickCheckBox(event: MouseEvent): void;
    /**
     * drag event
     * @param e
     */
    clearDragClass(): void;
    handleDragStart(e: DragEvent): void;
    handleDragEnter(e: DragEvent): void;
    handleDragOver(e: DragEvent): void;
    handleDragLeave(e: DragEvent): void;
    handleDragDrop(e: DragEvent): void;
    handleDragEnd(e: DragEvent): void;
    /**
     * Listening to dragging events.
     */
    handDragEvent(): void;
    isTemplateRef(value: {}): boolean;
    markForCheck(): void;
    constructor(nzTreeService: NzTreeBaseService, ngZone: NgZone, renderer: Renderer2, elRef: ElementRef, cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsTreeNodeComponent, [null, null, null, null, null, { optional: true; host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsTreeNodeComponent, "bps-tree-node", ["bpsTreeNode"], { "bpsTreeNode": { "alias": "bpsTreeNode"; "required": false; }; "bpsShowLine": { "alias": "bpsShowLine"; "required": false; }; "bpsShowExpand": { "alias": "bpsShowExpand"; "required": false; }; "bpsCheckable": { "alias": "bpsCheckable"; "required": false; }; "bpsAsyncData": { "alias": "bpsAsyncData"; "required": false; }; "bpsHideUnMatched": { "alias": "bpsHideUnMatched"; "required": false; }; "bpsNoAnimation": { "alias": "bpsNoAnimation"; "required": false; }; "bpsSelectMode": { "alias": "bpsSelectMode"; "required": false; }; "bpsShowIcon": { "alias": "bpsShowIcon"; "required": false; }; "bpsExpandedIcon": { "alias": "bpsExpandedIcon"; "required": false; }; "bpsTreeTemplate": { "alias": "bpsTreeTemplate"; "required": false; }; "bpsBeforeDrop": { "alias": "bpsBeforeDrop"; "required": false; }; "bpsSearchValue": { "alias": "bpsSearchValue"; "required": false; }; "bpsCustomTree": { "alias": "bpsCustomTree"; "required": false; }; "bpsDraggable": { "alias": "bpsDraggable"; "required": false; }; "bpsDefaultExpandAll": { "alias": "bpsDefaultExpandAll"; "required": false; }; "bpsExpandAll": { "alias": "bpsExpandAll"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=bps-tree-node.component.d.ts.map