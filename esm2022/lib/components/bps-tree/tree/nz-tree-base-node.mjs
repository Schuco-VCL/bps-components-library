import { warnDeprecation } from 'ng-zorro-antd/core/logger';
export class NzTreeNode {
    get treeService() {
        return this.service || (this.parentNode && this.parentNode.treeService);
    }
    constructor(option, parent = null, service = null) {
        this.level = 0;
        if (option instanceof NzTreeNode) {
            return option;
        }
        this.service = service || null;
        this.origin = option;
        this.key = option.key;
        this.parentNode = parent;
        this._title = option.title || '---';
        this._icon = option.icon || '';
        this._isLeaf = option.isLeaf || false;
        this._children = [];
        // option params
        this._isChecked = option.checked || false;
        this._isSelectable = option.disabled || option.selectable !== false;
        this._isDisabled = option.disabled || false;
        this._isDisableCheckbox = option.disableCheckbox || false;
        this._isExpanded = option.isLeaf ? false : option.expanded || false;
        this._isHalfChecked = false;
        this._isSelected = (!option.disabled && option.selected) || false;
        this._isLoading = false;
        this.isMatched = false;
        /**
         * parent's checked status will affect children while initializing
         */
        if (parent) {
            this.level = parent.level + 1;
        }
        else {
            this.level = 0;
        }
        if (typeof option.children !== 'undefined' && option.children !== null) {
            option.children.forEach(nodeOptions => {
                const s = this.treeService;
                if (s &&
                    !s.isCheckStrictly &&
                    option.checked &&
                    !option.disabled &&
                    !nodeOptions.disabled &&
                    !nodeOptions.disableCheckbox) {
                    nodeOptions.checked = option.checked;
                }
                this._children.push(new NzTreeNode(nodeOptions, this));
            });
        }
    }
    /**
     * auto generate
     * get
     * set
     */
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
        this.update();
    }
    get icon() {
        return this._icon;
    }
    set icon(value) {
        this._icon = value;
        this.update();
    }
    get children() {
        return this._children;
    }
    set children(value) {
        this._children = value;
        this.update();
    }
    get isLeaf() {
        return this._isLeaf;
    }
    set isLeaf(value) {
        this._isLeaf = value;
        this.update();
    }
    get isChecked() {
        return this._isChecked;
    }
    set isChecked(value) {
        this._isChecked = value;
        this._isAllChecked = value;
        this.origin.checked = value;
        this.afterValueChange('isChecked');
    }
    get isAllChecked() {
        return this._isAllChecked;
    }
    /**
     * @deprecated Maybe removed in next major version, use `isChecked` instead.
     */
    set isAllChecked(value) {
        warnDeprecation(`'isAllChecked' is going to be removed in 9.0.0. Please use 'isChecked' instead.`);
        this._isAllChecked = value;
    }
    get isHalfChecked() {
        return this._isHalfChecked;
    }
    set isHalfChecked(value) {
        this._isHalfChecked = value;
        this.afterValueChange('isHalfChecked');
    }
    get isSelectable() {
        return this._isSelectable;
    }
    set isSelectable(value) {
        this._isSelectable = value;
        this.update();
    }
    get isDisabled() {
        return this._isDisabled;
    }
    set isDisabled(value) {
        this._isDisabled = value;
        this.update();
    }
    get isDisableCheckbox() {
        return this._isDisableCheckbox;
    }
    set isDisableCheckbox(value) {
        this._isDisableCheckbox = value;
        this.update();
    }
    get isExpanded() {
        return this._isExpanded;
    }
    set isExpanded(value) {
        this._isExpanded = value;
        this.origin.expanded = value;
        this.afterValueChange('isExpanded');
    }
    get isSelected() {
        return this._isSelected;
    }
    set isSelected(value) {
        this._isSelected = value;
        this.origin.selected = value;
        this.afterValueChange('isSelected');
    }
    get isLoading() {
        return this._isLoading;
    }
    set isLoading(value) {
        this._isLoading = value;
        this.update();
    }
    setSyncChecked(checked = false, halfChecked = false) {
        this.setChecked(checked, halfChecked);
        if (this.treeService && !this.treeService.isCheckStrictly) {
            this.treeService.conduct(this);
        }
    }
    /**
     * @deprecated Maybe removed in next major version, use `isChecked` instead.
     */
    setChecked(checked = false, halfChecked = false) {
        warnDeprecation(`'setChecked' is going to be removed in 9.0.0. Please use 'isChecked' instead.`);
        this.origin.checked = checked;
        this.isChecked = checked;
        this.isAllChecked = checked;
        this.isHalfChecked = halfChecked;
    }
    /**
     * @deprecated Maybe removed in next major version, use `isExpanded` instead.
     */
    setExpanded(value) {
        warnDeprecation(`'setExpanded' is going to be removed in 9.0.0. Please use 'isExpanded' instead.`);
        this.isExpanded = value;
    }
    /**
     * @deprecated Maybe removed in next major version, use `isSelected` instead.
     */
    setSelected(value) {
        warnDeprecation(`'setSelected' is going to be removed in 9.0.0. Please use 'isExpanded' isSelected.`);
        if (this.isDisabled) {
            return;
        }
        this.isSelected = value;
    }
    getParentNode() {
        return this.parentNode;
    }
    getChildren() {
        return this.children;
    }
    /**
     * Support appending child nodes by position. Leaf node cannot be appended.
     */
    // tslint:disable-next-line:no-any
    addChildren(children, childPos = -1) {
        if (!this.isLeaf) {
            children.forEach(node => {
                const refreshLevel = (n) => {
                    n.getChildren().forEach(c => {
                        c.level = c.getParentNode().level + 1;
                        // flush origin
                        c.origin.level = c.level;
                        refreshLevel(c);
                    });
                };
                let child = node;
                if (child instanceof NzTreeNode) {
                    child.parentNode = this;
                }
                else {
                    child = new NzTreeNode(node, this);
                }
                child.level = this.level + 1;
                child.origin.level = child.level;
                refreshLevel(child);
                try {
                    childPos === -1 ? this.children.push(child) : this.children.splice(childPos, 0, child);
                    // flush origin
                }
                catch (e) { }
            });
            this.origin.children = this.getChildren().map(v => v.origin);
            // remove loading state
            this.isLoading = false;
        }
    }
    clearChildren() {
        // refresh checked state
        this.afterValueChange('clearChildren');
        this.children = [];
        this.origin.children = [];
    }
    remove() {
        const parentNode = this.getParentNode();
        if (parentNode) {
            parentNode.children = parentNode.getChildren().filter(v => v.key !== this.key);
            parentNode.origin.children = parentNode.origin.children.filter(v => v.key !== this.key);
            this.afterValueChange('remove');
        }
    }
    afterValueChange(key) {
        if (this.treeService) {
            switch (key) {
                case 'isChecked':
                    this.treeService.setCheckedNodeList(this);
                    break;
                case 'isHalfChecked':
                    this.treeService.setHalfCheckedNodeList(this);
                    break;
                case 'isExpanded':
                    this.treeService.setExpandedNodeList(this);
                    break;
                case 'isSelected':
                    this.treeService.setNodeActive(this);
                    break;
                case 'clearChildren':
                    this.treeService.afterRemove(this.getChildren());
                    break;
                case 'remove':
                    this.treeService.afterRemove([this]);
                    break;
            }
        }
        this.update();
    }
    update() {
        if (this.component) {
            this.component.setClassMap();
            this.component.markForCheck();
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1iYXNlLW5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy10cmVlL3RyZWUvbnotdHJlZS1iYXNlLW5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBcUI1RCxNQUFNLE9BQU8sVUFBVTtJQTRCckIsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCxZQUNFLE1BQXNDLEVBQ3RDLFNBQTRCLElBQUksRUFDaEMsVUFBb0MsSUFBSTtRQWhDMUMsVUFBSyxHQUFXLENBQUMsQ0FBQztRQWtDaEIsSUFBSSxNQUFNLFlBQVksVUFBVSxFQUFFO1lBQ2hDLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGdCQUFnQjtRQUNo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QUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM5QyxNQUFNO2dCQUNSLEtBQUssWUFBWTtvQkFDZixJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMzQyxNQUFNO2dCQUNSLEtBQUssWUFBWTtvQkFDZixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDckMsTUFBTTtnQkFDUixLQUFLLGVBQWU7b0JBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO29CQUNqRCxNQUFNO2dCQUNSLEtBQUssUUFBUTtvQkFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ3JDLE1BQU07YUFDVDtTQUNGO1FBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxNQUFNO1FBQ1gsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUMvQjtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdhcm5EZXByZWNhdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9sb2dnZXInO1xyXG5pbXBvcnQgeyBOelRyZWVOb2RlQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vbnotdHJlZS1iYXNlLmRlZmluaXRpb25zJztcclxuaW1wb3J0IHsgTnpUcmVlQmFzZVNlcnZpY2UgfSBmcm9tICcuL256LXRyZWUtYmFzZS5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTnpUcmVlTm9kZU9wdGlvbnMge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAga2V5OiBzdHJpbmc7XHJcbiAgaWNvbj86IHN0cmluZztcclxuICBpc0xlYWY/OiBib29sZWFuO1xyXG4gIGNoZWNrZWQ/OiBib29sZWFuO1xyXG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcclxuICBzZWxlY3RhYmxlPzogYm9vbGVhbjtcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgZGlzYWJsZUNoZWNrYm94PzogYm9vbGVhbjtcclxuICBleHBhbmRlZD86IGJvb2xlYW47XHJcbiAgY2hpbGRyZW4/OiBOelRyZWVOb2RlT3B0aW9uc1tdO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTnpUcmVlTm9kZSB7XHJcbiAgcHJpdmF0ZSBfdGl0bGU6IHN0cmluZztcclxuICBrZXk6IHN0cmluZztcclxuICBsZXZlbDogbnVtYmVyID0gMDtcclxuICBvcmlnaW46IE56VHJlZU5vZGVPcHRpb25zO1xyXG4gIC8vIFBhcmVudCBOb2RlXHJcbiAgcGFyZW50Tm9kZTogTnpUcmVlTm9kZSB8IG51bGw7XHJcbiAgcHJpdmF0ZSBfaWNvbjogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2NoaWxkcmVuOiBOelRyZWVOb2RlW107XHJcbiAgcHJpdmF0ZSBfaXNMZWFmOiBib29sZWFuO1xyXG4gIHByaXZhdGUgX2lzQ2hlY2tlZDogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCBNYXliZSByZW1vdmVkIGluIG5leHQgbWFqb3IgdmVyc2lvbiwgdXNlIGlzQ2hlY2tlZCBpbnN0ZWFkXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfaXNBbGxDaGVja2VkOiBib29sZWFuO1xyXG4gIHByaXZhdGUgX2lzU2VsZWN0YWJsZTogYm9vbGVhbjtcclxuICBwcml2YXRlIF9pc0Rpc2FibGVkOiBib29sZWFuO1xyXG4gIHByaXZhdGUgX2lzRGlzYWJsZUNoZWNrYm94OiBib29sZWFuO1xyXG4gIHByaXZhdGUgX2lzRXhwYW5kZWQ6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBfaXNIYWxmQ2hlY2tlZDogYm9vbGVhbjtcclxuICBwcml2YXRlIF9pc1NlbGVjdGVkOiBib29sZWFuO1xyXG4gIHByaXZhdGUgX2lzTG9hZGluZzogYm9vbGVhbjtcclxuICBjYW5IaWRlOiBib29sZWFuO1xyXG4gIGlzTWF0Y2hlZDogYm9vbGVhbjtcclxuXHJcbiAgc2VydmljZTogTnpUcmVlQmFzZVNlcnZpY2UgfCBudWxsO1xyXG4gIGNvbXBvbmVudDogTnpUcmVlTm9kZUJhc2VDb21wb25lbnQ7XHJcblxyXG4gIGdldCB0cmVlU2VydmljZSgpOiBOelRyZWVCYXNlU2VydmljZSB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VydmljZSB8fCAodGhpcy5wYXJlbnROb2RlICYmIHRoaXMucGFyZW50Tm9kZS50cmVlU2VydmljZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG9wdGlvbjogTnpUcmVlTm9kZU9wdGlvbnMgfCBOelRyZWVOb2RlLFxyXG4gICAgcGFyZW50OiBOelRyZWVOb2RlIHwgbnVsbCA9IG51bGwsXHJcbiAgICBzZXJ2aWNlOiBOelRyZWVCYXNlU2VydmljZSB8IG51bGwgPSBudWxsXHJcbiAgKSB7XHJcbiAgICBpZiAob3B0aW9uIGluc3RhbmNlb2YgTnpUcmVlTm9kZSkge1xyXG4gICAgICByZXR1cm4gb3B0aW9uO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZSB8fCBudWxsO1xyXG4gICAgdGhpcy5vcmlnaW4gPSBvcHRpb247XHJcbiAgICB0aGlzLmtleSA9IG9wdGlvbi5rZXk7XHJcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnQ7XHJcbiAgICB0aGlzLl90aXRsZSA9IG9wdGlvbi50aXRsZSB8fCAnLS0tJztcclxuICAgIHRoaXMuX2ljb24gPSBvcHRpb24uaWNvbiB8fCAnJztcclxuICAgIHRoaXMuX2lzTGVhZiA9IG9wdGlvbi5pc0xlYWYgfHwgZmFsc2U7XHJcbiAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xyXG4gICAgLy8gb3B0aW9uIHBhcmFtc1xyXG4gICAgdGhpcy5faXNDaGVja2VkID0gb3B0aW9uLmNoZWNrZWQgfHwgZmFsc2U7XHJcbiAgICB0aGlzLl9pc1NlbGVjdGFibGUgPSBvcHRpb24uZGlzYWJsZWQgfHwgb3B0aW9uLnNlbGVjdGFibGUgIT09IGZhbHNlO1xyXG4gICAgdGhpcy5faXNEaXNhYmxlZCA9IG9wdGlvbi5kaXNhYmxlZCB8fCBmYWxzZTtcclxuICAgIHRoaXMuX2lzRGlzYWJsZUNoZWNrYm94ID0gb3B0aW9uLmRpc2FibGVDaGVja2JveCB8fCBmYWxzZTtcclxuICAgIHRoaXMuX2lzRXhwYW5kZWQgPSBvcHRpb24uaXNMZWFmID8gZmFsc2UgOiBvcHRpb24uZXhwYW5kZWQgfHwgZmFsc2U7XHJcbiAgICB0aGlzLl9pc0hhbGZDaGVja2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLl9pc1NlbGVjdGVkID0gKCFvcHRpb24uZGlzYWJsZWQgJiYgb3B0aW9uLnNlbGVjdGVkKSB8fCBmYWxzZTtcclxuICAgIHRoaXMuX2lzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc01hdGNoZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIHBhcmVudCdzIGNoZWNrZWQgc3RhdHVzIHdpbGwgYWZmZWN0IGNoaWxkcmVuIHdoaWxlIGluaXRpYWxpemluZ1xyXG4gICAgICovXHJcbiAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgIHRoaXMubGV2ZWwgPSBwYXJlbnQubGV2ZWwgKyAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sZXZlbCA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIG9wdGlvbi5jaGlsZHJlbiAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0aW9uLmNoaWxkcmVuICE9PSBudWxsKSB7XHJcbiAgICAgIG9wdGlvbi5jaGlsZHJlbi5mb3JFYWNoKG5vZGVPcHRpb25zID0+IHtcclxuICAgICAgICBjb25zdCBzID0gdGhpcy50cmVlU2VydmljZTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBzICYmXHJcbiAgICAgICAgICAhcy5pc0NoZWNrU3RyaWN0bHkgJiZcclxuICAgICAgICAgIG9wdGlvbi5jaGVja2VkICYmXHJcbiAgICAgICAgICAhb3B0aW9uLmRpc2FibGVkICYmXHJcbiAgICAgICAgICAhbm9kZU9wdGlvbnMuZGlzYWJsZWQgJiZcclxuICAgICAgICAgICFub2RlT3B0aW9ucy5kaXNhYmxlQ2hlY2tib3hcclxuICAgICAgICApIHtcclxuICAgICAgICAgIG5vZGVPcHRpb25zLmNoZWNrZWQgPSBvcHRpb24uY2hlY2tlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4ucHVzaChuZXcgTnpUcmVlTm9kZShub2RlT3B0aW9ucywgdGhpcykpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGF1dG8gZ2VuZXJhdGVcclxuICAgKiBnZXRcclxuICAgKiBzZXRcclxuICAgKi9cclxuICBnZXQgdGl0bGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl90aXRsZTtcclxuICB9XHJcblxyXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBpY29uKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcclxuICB9XHJcblxyXG4gIHNldCBpY29uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2ljb24gPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgY2hpbGRyZW4oKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIHJldHVybiB0aGlzLl9jaGlsZHJlbjtcclxuICB9XHJcblxyXG4gIHNldCBjaGlsZHJlbih2YWx1ZTogTnpUcmVlTm9kZVtdKSB7XHJcbiAgICB0aGlzLl9jaGlsZHJlbiA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0xlYWYoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNMZWFmO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzTGVhZih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faXNMZWFmID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzQ2hlY2tlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0NoZWNrZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgaXNDaGVja2VkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9pc0NoZWNrZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuX2lzQWxsQ2hlY2tlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5vcmlnaW4uY2hlY2tlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5hZnRlclZhbHVlQ2hhbmdlKCdpc0NoZWNrZWQnKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0FsbENoZWNrZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNBbGxDaGVja2VkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgTWF5YmUgcmVtb3ZlZCBpbiBuZXh0IG1ham9yIHZlcnNpb24sIHVzZSBgaXNDaGVja2VkYCBpbnN0ZWFkLlxyXG4gICAqL1xyXG4gIHNldCBpc0FsbENoZWNrZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHdhcm5EZXByZWNhdGlvbihgJ2lzQWxsQ2hlY2tlZCcgaXMgZ29pbmcgdG8gYmUgcmVtb3ZlZCBpbiA5LjAuMC4gUGxlYXNlIHVzZSAnaXNDaGVja2VkJyBpbnN0ZWFkLmApO1xyXG4gICAgdGhpcy5faXNBbGxDaGVja2VkID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNIYWxmQ2hlY2tlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0hhbGZDaGVja2VkO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzSGFsZkNoZWNrZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2lzSGFsZkNoZWNrZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuYWZ0ZXJWYWx1ZUNoYW5nZSgnaXNIYWxmQ2hlY2tlZCcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU2VsZWN0YWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc1NlbGVjdGFibGU7XHJcbiAgfVxyXG5cclxuICBzZXQgaXNTZWxlY3RhYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9pc1NlbGVjdGFibGUgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNEaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzRGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2lzRGlzYWJsZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNEaXNhYmxlQ2hlY2tib3goKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNEaXNhYmxlQ2hlY2tib3g7XHJcbiAgfVxyXG5cclxuICBzZXQgaXNEaXNhYmxlQ2hlY2tib3godmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2lzRGlzYWJsZUNoZWNrYm94ID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzRXhwYW5kZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNFeHBhbmRlZDtcclxuICB9XHJcblxyXG4gIHNldCBpc0V4cGFuZGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9pc0V4cGFuZGVkID0gdmFsdWU7XHJcbiAgICB0aGlzLm9yaWdpbi5leHBhbmRlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5hZnRlclZhbHVlQ2hhbmdlKCdpc0V4cGFuZGVkJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTZWxlY3RlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc1NlbGVjdGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzU2VsZWN0ZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2lzU2VsZWN0ZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMub3JpZ2luLnNlbGVjdGVkID0gdmFsdWU7XHJcbiAgICB0aGlzLmFmdGVyVmFsdWVDaGFuZ2UoJ2lzU2VsZWN0ZWQnKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0xvYWRpbmcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNMb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzTG9hZGluZyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5faXNMb2FkaW5nID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFN5bmNDaGVja2VkKGNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZSwgaGFsZkNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDaGVja2VkKGNoZWNrZWQsIGhhbGZDaGVja2VkKTtcclxuICAgIGlmICh0aGlzLnRyZWVTZXJ2aWNlICYmICF0aGlzLnRyZWVTZXJ2aWNlLmlzQ2hlY2tTdHJpY3RseSkge1xyXG4gICAgICB0aGlzLnRyZWVTZXJ2aWNlLmNvbmR1Y3QodGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCBNYXliZSByZW1vdmVkIGluIG5leHQgbWFqb3IgdmVyc2lvbiwgdXNlIGBpc0NoZWNrZWRgIGluc3RlYWQuXHJcbiAgICovXHJcbiAgcHVibGljIHNldENoZWNrZWQoY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlLCBoYWxmQ2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICB3YXJuRGVwcmVjYXRpb24oYCdzZXRDaGVja2VkJyBpcyBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICdpc0NoZWNrZWQnIGluc3RlYWQuYCk7XHJcbiAgICB0aGlzLm9yaWdpbi5jaGVja2VkID0gY2hlY2tlZDtcclxuICAgIHRoaXMuaXNDaGVja2VkID0gY2hlY2tlZDtcclxuICAgIHRoaXMuaXNBbGxDaGVja2VkID0gY2hlY2tlZDtcclxuICAgIHRoaXMuaXNIYWxmQ2hlY2tlZCA9IGhhbGZDaGVja2VkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgTWF5YmUgcmVtb3ZlZCBpbiBuZXh0IG1ham9yIHZlcnNpb24sIHVzZSBgaXNFeHBhbmRlZGAgaW5zdGVhZC5cclxuICAgKi9cclxuICBwdWJsaWMgc2V0RXhwYW5kZWQodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHdhcm5EZXByZWNhdGlvbihgJ3NldEV4cGFuZGVkJyBpcyBnb2luZyB0byBiZSByZW1vdmVkIGluIDkuMC4wLiBQbGVhc2UgdXNlICdpc0V4cGFuZGVkJyBpbnN0ZWFkLmApO1xyXG4gICAgdGhpcy5pc0V4cGFuZGVkID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCBNYXliZSByZW1vdmVkIGluIG5leHQgbWFqb3IgdmVyc2lvbiwgdXNlIGBpc1NlbGVjdGVkYCBpbnN0ZWFkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXRTZWxlY3RlZCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgd2FybkRlcHJlY2F0aW9uKGAnc2V0U2VsZWN0ZWQnIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgJ2lzRXhwYW5kZWQnIGlzU2VsZWN0ZWQuYCk7XHJcbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuaXNTZWxlY3RlZCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFBhcmVudE5vZGUoKTogTnpUcmVlTm9kZSB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDaGlsZHJlbigpOiBOelRyZWVOb2RlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdXBwb3J0IGFwcGVuZGluZyBjaGlsZCBub2RlcyBieSBwb3NpdGlvbi4gTGVhZiBub2RlIGNhbm5vdCBiZSBhcHBlbmRlZC5cclxuICAgKi9cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcHVibGljIGFkZENoaWxkcmVuKGNoaWxkcmVuOiBhbnlbXSwgY2hpbGRQb3M6IG51bWJlciA9IC0xKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNMZWFmKSB7XHJcbiAgICAgIGNoaWxkcmVuLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVmcmVzaExldmVsID0gKG46IE56VHJlZU5vZGUpID0+IHtcclxuICAgICAgICAgIG4uZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgICAgICBjLmxldmVsID0gYy5nZXRQYXJlbnROb2RlKCkhLmxldmVsICsgMTtcclxuICAgICAgICAgICAgLy8gZmx1c2ggb3JpZ2luXHJcbiAgICAgICAgICAgIGMub3JpZ2luLmxldmVsID0gYy5sZXZlbDtcclxuICAgICAgICAgICAgcmVmcmVzaExldmVsKGMpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgY2hpbGQgPSBub2RlO1xyXG4gICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIE56VHJlZU5vZGUpIHtcclxuICAgICAgICAgIGNoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjaGlsZCA9IG5ldyBOelRyZWVOb2RlKG5vZGUsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaGlsZC5sZXZlbCA9IHRoaXMubGV2ZWwgKyAxO1xyXG4gICAgICAgIGNoaWxkLm9yaWdpbi5sZXZlbCA9IGNoaWxkLmxldmVsO1xyXG4gICAgICAgIHJlZnJlc2hMZXZlbChjaGlsZCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNoaWxkUG9zID09PSAtMSA/IHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCkgOiB0aGlzLmNoaWxkcmVuLnNwbGljZShjaGlsZFBvcywgMCwgY2hpbGQpO1xyXG4gICAgICAgICAgLy8gZmx1c2ggb3JpZ2luXHJcbiAgICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMub3JpZ2luLmNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpLm1hcCh2ID0+IHYub3JpZ2luKTtcclxuICAgICAgLy8gcmVtb3ZlIGxvYWRpbmcgc3RhdGVcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhckNoaWxkcmVuKCk6IHZvaWQge1xyXG4gICAgLy8gcmVmcmVzaCBjaGVja2VkIHN0YXRlXHJcbiAgICB0aGlzLmFmdGVyVmFsdWVDaGFuZ2UoJ2NsZWFyQ2hpbGRyZW4nKTtcclxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcclxuICAgIHRoaXMub3JpZ2luLmNoaWxkcmVuID0gW107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IHRoaXMuZ2V0UGFyZW50Tm9kZSgpO1xyXG4gICAgaWYgKHBhcmVudE5vZGUpIHtcclxuICAgICAgcGFyZW50Tm9kZS5jaGlsZHJlbiA9IHBhcmVudE5vZGUuZ2V0Q2hpbGRyZW4oKS5maWx0ZXIodiA9PiB2LmtleSAhPT0gdGhpcy5rZXkpO1xyXG4gICAgICBwYXJlbnROb2RlLm9yaWdpbi5jaGlsZHJlbiA9IHBhcmVudE5vZGUub3JpZ2luLmNoaWxkcmVuIS5maWx0ZXIodiA9PiB2LmtleSAhPT0gdGhpcy5rZXkpO1xyXG4gICAgICB0aGlzLmFmdGVyVmFsdWVDaGFuZ2UoJ3JlbW92ZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFmdGVyVmFsdWVDaGFuZ2Uoa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRyZWVTZXJ2aWNlKSB7XHJcbiAgICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgY2FzZSAnaXNDaGVja2VkJzpcclxuICAgICAgICAgIHRoaXMudHJlZVNlcnZpY2Uuc2V0Q2hlY2tlZE5vZGVMaXN0KHRoaXMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnaXNIYWxmQ2hlY2tlZCc6XHJcbiAgICAgICAgICB0aGlzLnRyZWVTZXJ2aWNlLnNldEhhbGZDaGVja2VkTm9kZUxpc3QodGhpcyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdpc0V4cGFuZGVkJzpcclxuICAgICAgICAgIHRoaXMudHJlZVNlcnZpY2Uuc2V0RXhwYW5kZWROb2RlTGlzdCh0aGlzKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2lzU2VsZWN0ZWQnOlxyXG4gICAgICAgICAgdGhpcy50cmVlU2VydmljZS5zZXROb2RlQWN0aXZlKHRoaXMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnY2xlYXJDaGlsZHJlbic6XHJcbiAgICAgICAgICB0aGlzLnRyZWVTZXJ2aWNlLmFmdGVyUmVtb3ZlKHRoaXMuZ2V0Q2hpbGRyZW4oKSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdyZW1vdmUnOlxyXG4gICAgICAgICAgdGhpcy50cmVlU2VydmljZS5hZnRlclJlbW92ZShbdGhpc10pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY29tcG9uZW50KSB7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50LnNldENsYXNzTWFwKCk7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50Lm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=