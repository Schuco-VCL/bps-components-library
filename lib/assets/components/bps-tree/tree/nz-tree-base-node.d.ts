import { NzTreeNodeBaseComponent } from './nz-tree-base.definitions';
import { NzTreeBaseService } from './nz-tree-base.service';
export interface NzTreeNodeOptions {
    title: string;
    key: string;
    icon?: string;
    isLeaf?: boolean;
    checked?: boolean;
    selected?: boolean;
    selectable?: boolean;
    disabled?: boolean;
    disableCheckbox?: boolean;
    expanded?: boolean;
    children?: NzTreeNodeOptions[];
    [key: string]: any;
}
export declare class NzTreeNode {
    private _title;
    key: string;
    level: number;
    origin: NzTreeNodeOptions;
    parentNode: NzTreeNode | null;
    private _icon;
    private _children;
    private _isLeaf;
    private _isChecked;
    /**
     * @deprecated Maybe removed in next major version, use isChecked instead
     */
    private _isAllChecked;
    private _isSelectable;
    private _isDisabled;
    private _isDisableCheckbox;
    private _isExpanded;
    private _isHalfChecked;
    private _isSelected;
    private _isLoading;
    canHide: boolean;
    isMatched: boolean;
    service: NzTreeBaseService | null;
    component: NzTreeNodeBaseComponent;
    get treeService(): NzTreeBaseService | null;
    constructor(option: NzTreeNodeOptions | NzTreeNode, parent?: NzTreeNode | null, service?: NzTreeBaseService | null);
    /**
     * auto generate
     * get
     * set
     */
    get title(): string;
    set title(value: string);
    get icon(): string;
    set icon(value: string);
    get children(): NzTreeNode[];
    set children(value: NzTreeNode[]);
    get isLeaf(): boolean;
    set isLeaf(value: boolean);
    get isChecked(): boolean;
    set isChecked(value: boolean);
    get isAllChecked(): boolean;
    /**
     * @deprecated Maybe removed in next major version, use `isChecked` instead.
     */
    set isAllChecked(value: boolean);
    get isHalfChecked(): boolean;
    set isHalfChecked(value: boolean);
    get isSelectable(): boolean;
    set isSelectable(value: boolean);
    get isDisabled(): boolean;
    set isDisabled(value: boolean);
    get isDisableCheckbox(): boolean;
    set isDisableCheckbox(value: boolean);
    get isExpanded(): boolean;
    set isExpanded(value: boolean);
    get isSelected(): boolean;
    set isSelected(value: boolean);
    get isLoading(): boolean;
    set isLoading(value: boolean);
    setSyncChecked(checked?: boolean, halfChecked?: boolean): void;
    /**
     * @deprecated Maybe removed in next major version, use `isChecked` instead.
     */
    setChecked(checked?: boolean, halfChecked?: boolean): void;
    /**
     * @deprecated Maybe removed in next major version, use `isExpanded` instead.
     */
    setExpanded(value: boolean): void;
    /**
     * @deprecated Maybe removed in next major version, use `isSelected` instead.
     */
    setSelected(value: boolean): void;
    getParentNode(): NzTreeNode | null;
    getChildren(): NzTreeNode[];
    /**
     * Support appending child nodes by position. Leaf node cannot be appended.
     */
    addChildren(children: any[], childPos?: number): void;
    clearChildren(): void;
    remove(): void;
    afterValueChange(key: string): void;
    update(): void;
}
//# sourceMappingURL=nz-tree-base-node.d.ts.map