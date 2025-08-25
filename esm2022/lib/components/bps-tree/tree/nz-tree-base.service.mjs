import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { isNotNil } from 'ng-zorro-antd/core/util';
import { NzTreeNode } from './nz-tree-base-node';
import { isCheckDisabled, isInArray } from './nz-tree-base-util';
import * as i0 from "@angular/core";
export class NzTreeBaseService {
    constructor() {
        this.DRAG_SIDE_RANGE = 0.25;
        this.DRAG_MIN_GAP = 2;
        this.isCheckStrictly = false;
        this.isMultiple = false;
        this.rootNodes = [];
        this.selectedNodeList = [];
        this.expandedNodeList = [];
        this.checkedNodeList = [];
        this.halfCheckedNodeList = [];
        this.matchedNodeList = [];
        this.triggerEventChange$ = new Subject();
    }
    /**
     * trigger event
     */
    eventTriggerChanged() {
        return this.triggerEventChange$.asObservable();
    }
    /**
     * reset tree nodes will clear default node list
     */
    initTree(nzNodes) {
        this.rootNodes = nzNodes;
        this.expandedNodeList = [];
        this.selectedNodeList = [];
        this.halfCheckedNodeList = [];
        this.checkedNodeList = [];
        this.matchedNodeList = [];
        // refresh node checked state
        setTimeout(() => {
            this.refreshCheckState(this.isCheckStrictly);
        });
    }
    getSelectedNode() {
        return this.selectedNode;
    }
    /**
     * get some list
     */
    getSelectedNodeList() {
        return this.conductNodeState('select');
    }
    /**
     * return checked nodes
     */
    getCheckedNodeList() {
        return this.conductNodeState('check');
    }
    getHalfCheckedNodeList() {
        return this.conductNodeState('halfCheck');
    }
    /**
     * return expanded nodes
     */
    getExpandedNodeList() {
        return this.conductNodeState('expand');
    }
    /**
     * return search matched nodes
     */
    getMatchedNodeList() {
        return this.conductNodeState('match');
    }
    // tslint:disable-next-line:no-any
    isArrayOfNzTreeNode(value) {
        return value.every(item => item instanceof NzTreeNode);
    }
    /**
     * reset selectedNodeList
     */
    calcSelectedKeys(selectedKeys, nzNodes, isMulti = false) {
        const calc = (nodes) => {
            return nodes.every(node => {
                if (isInArray(node.key, selectedKeys)) {
                    node.isSelected = true;
                    if (!isMulti) {
                        // if not support multi select
                        return false;
                    }
                }
                else {
                    node.isSelected = false;
                }
                if (node.children.length > 0) {
                    // Recursion
                    return calc(node.children);
                }
                return true;
            });
        };
        calc(nzNodes);
    }
    /**
     * reset expandedNodeList
     */
    calcExpandedKeys(expandedKeys, nzNodes) {
        this.expandedNodeList = [];
        const calc = (nodes) => {
            nodes.forEach(node => {
                node.isExpanded = isInArray(node.key, expandedKeys);
                if (node.children.length > 0) {
                    calc(node.children);
                }
            });
        };
        calc(nzNodes);
    }
    /**
     * reset checkedNodeList
     */
    calcCheckedKeys(checkedKeys, nzNodes, isCheckStrictly = false) {
        this.checkedNodeList = [];
        this.halfCheckedNodeList = [];
        const calc = (nodes) => {
            nodes.forEach(node => {
                if (isInArray(node.key, checkedKeys)) {
                    node.isChecked = true;
                    node.isHalfChecked = false;
                }
                else {
                    node.isChecked = false;
                    node.isHalfChecked = false;
                }
                if (node.children.length > 0) {
                    calc(node.children);
                }
            });
        };
        calc(nzNodes);
        // controlled state
        this.refreshCheckState(isCheckStrictly);
    }
    /**
     * set drag node
     */
    setSelectedNode(node) {
        this.selectedNode = node;
    }
    /**
     * set node selected status
     */
    setNodeActive(node) {
        if (!this.isMultiple && node.isSelected) {
            this.selectedNodeList.forEach(n => {
                if (node.key !== n.key) {
                    // reset other nodes
                    n.isSelected = false;
                }
            });
            // single mode: remove pre node
            this.selectedNodeList = [];
        }
        this.setSelectedNodeList(node, this.isMultiple);
    }
    /**
     * add or remove node to selectedNodeList
     */
    setSelectedNodeList(node, isMultiple = false) {
        const index = this.selectedNodeList.findIndex(n => node.key === n.key);
        if (isMultiple) {
            if (node.isSelected && index === -1) {
                this.selectedNodeList.push(node);
            }
        }
        else {
            if (node.isSelected && index === -1) {
                this.selectedNodeList = [node];
            }
        }
        if (!node.isSelected) {
            this.selectedNodeList = this.selectedNodeList.filter(n => n.key !== node.key);
        }
    }
    /**
     * merge checked nodes
     */
    setHalfCheckedNodeList(node) {
        const index = this.halfCheckedNodeList.findIndex(n => node.key === n.key);
        if (node.isHalfChecked && index === -1) {
            this.halfCheckedNodeList.push(node);
        }
        else if (!node.isHalfChecked && index > -1) {
            this.halfCheckedNodeList = this.halfCheckedNodeList.filter(n => node.key !== n.key);
        }
    }
    setCheckedNodeList(node) {
        const index = this.checkedNodeList.findIndex(n => node.key === n.key);
        if (node.isChecked && index === -1) {
            this.checkedNodeList.push(node);
        }
        else if (!node.isChecked && index > -1) {
            this.checkedNodeList = this.checkedNodeList.filter(n => node.key !== n.key);
        }
    }
    /**
     * conduct checked/selected/expanded keys
     */
    conductNodeState(type = 'check') {
        let resultNodesList = [];
        switch (type) {
            case 'select':
                resultNodesList = this.selectedNodeList;
                break;
            case 'expand':
                resultNodesList = this.expandedNodeList;
                break;
            case 'match':
                resultNodesList = this.matchedNodeList;
                break;
            case 'check':
                resultNodesList = this.checkedNodeList;
                const isIgnore = (node) => {
                    const parentNode = node.getParentNode();
                    if (parentNode) {
                        if (this.checkedNodeList.findIndex(n => n.key === parentNode.key) > -1) {
                            return true;
                        }
                        else {
                            return isIgnore(parentNode);
                        }
                    }
                    return false;
                };
                // merge checked
                if (!this.isCheckStrictly) {
                    resultNodesList = this.checkedNodeList.filter(n => !isIgnore(n));
                }
                break;
            case 'halfCheck':
                if (!this.isCheckStrictly) {
                    resultNodesList = this.halfCheckedNodeList;
                }
                break;
        }
        return resultNodesList;
    }
    /**
     * set expanded nodes
     */
    setExpandedNodeList(node) {
        if (node.isLeaf) {
            return;
        }
        const index = this.expandedNodeList.findIndex(n => node.key === n.key);
        if (node.isExpanded && index === -1) {
            this.expandedNodeList.push(node);
        }
        else if (!node.isExpanded && index > -1) {
            this.expandedNodeList = this.expandedNodeList.filter(n => node.key !== n.key);
        }
    }
    /**
     * check state
     * @param isCheckStrictly
     */
    refreshCheckState(isCheckStrictly = false) {
        if (isCheckStrictly) {
            return;
        }
        this.checkedNodeList.forEach(node => {
            this.conduct(node);
        });
    }
    // reset other node checked state based current node
    conduct(node) {
        const isChecked = node.isChecked;
        if (node) {
            this.conductUp(node);
            this.conductDown(node, isChecked);
        }
    }
    /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     */
    conductUp(node) {
        const parentNode = node.getParentNode();
        if (parentNode) {
            if (!isCheckDisabled(parentNode)) {
                if (parentNode.children.every(child => isCheckDisabled(child) || (!child.isHalfChecked && child.isChecked))) {
                    parentNode.isChecked = true;
                    parentNode.isHalfChecked = false;
                }
                else if (parentNode.children.some(child => child.isHalfChecked || child.isChecked)) {
                    parentNode.isChecked = false;
                    parentNode.isHalfChecked = true;
                }
                else {
                    parentNode.isChecked = false;
                    parentNode.isHalfChecked = false;
                }
            }
            this.setCheckedNodeList(parentNode);
            this.setHalfCheckedNodeList(parentNode);
            this.conductUp(parentNode);
        }
    }
    /**
     * reset child check state
     */
    conductDown(node, value) {
        if (!isCheckDisabled(node)) {
            node.isChecked = value;
            node.isHalfChecked = false;
            this.setCheckedNodeList(node);
            this.setHalfCheckedNodeList(node);
            node.children.forEach(n => {
                this.conductDown(n, value);
            });
        }
    }
    /**
     * search value & expand node
     * should add expandlist
     */
    searchExpand(value) {
        this.matchedNodeList = [];
        const expandedKeys = [];
        if (!isNotNil(value)) {
            return;
        }
        // to reset expandedNodeList
        const expandParent = (n) => {
            // expand parent node
            const parentNode = n.getParentNode();
            if (parentNode) {
                expandedKeys.push(parentNode.key);
                expandParent(parentNode);
            }
        };
        const searchChild = (n) => {
            if (value && n.title.includes(value)) {
                // match the node
                n.isMatched = true;
                this.matchedNodeList.push(n);
                // expand parentNode
                expandParent(n);
            }
            else {
                n.isMatched = false;
            }
            n.canHide = !n.isMatched;
            n.children.forEach(child => {
                searchChild(child);
            });
        };
        this.rootNodes.forEach(child => {
            searchChild(child);
        });
        // expand matched keys
        this.calcExpandedKeys(expandedKeys, this.rootNodes);
    }
    /**
     * flush after delete node
     */
    afterRemove(nodes) {
        // to reset selectedNodeList & expandedNodeList
        const loopNode = (node) => {
            // remove selected node
            this.selectedNodeList = this.selectedNodeList.filter(n => n.key !== node.key);
            // remove expanded node
            this.expandedNodeList = this.expandedNodeList.filter(n => n.key !== node.key);
            // remove checked node
            this.checkedNodeList = this.checkedNodeList.filter(n => n.key !== node.key);
            if (node.children) {
                node.children.forEach(child => {
                    loopNode(child);
                });
            }
        };
        nodes.forEach(n => {
            loopNode(n);
        });
        this.refreshCheckState(this.isCheckStrictly);
    }
    /**
     * drag event
     */
    refreshDragNode(node) {
        if (node.children.length === 0) {
            // until root
            this.conductUp(node);
        }
        else {
            node.children.forEach(child => {
                this.refreshDragNode(child);
            });
        }
    }
    // reset node level
    resetNodeLevel(node) {
        const parentNode = node.getParentNode();
        if (parentNode) {
            node.level = parentNode.level + 1;
        }
        else {
            node.level = 0;
        }
        for (const child of node.children) {
            this.resetNodeLevel(child);
        }
    }
    calcDropPosition(event) {
        const { clientY } = event;
        // to fix firefox undefined
        const { top, bottom, height } = event.srcElement
            ? event.srcElement.getBoundingClientRect()
            : event.target.getBoundingClientRect();
        const des = Math.max(height * this.DRAG_SIDE_RANGE, this.DRAG_MIN_GAP);
        if (clientY <= top + des) {
            return -1;
        }
        else if (clientY >= bottom - des) {
            return 1;
        }
        return 0;
    }
    /**
     * drop
     * 0: inner -1: pre 1: next
     */
    dropAndApply(targetNode, dragPos = -1) {
        if (!targetNode || dragPos > 1) {
            return;
        }
        const treeService = targetNode.treeService;
        const targetParent = targetNode.getParentNode();
        const isSelectedRootNode = this.selectedNode.getParentNode();
        // remove the dragNode
        if (isSelectedRootNode) {
            isSelectedRootNode.children = isSelectedRootNode.children.filter(n => n.key !== this.selectedNode.key);
        }
        else {
            this.rootNodes = this.rootNodes.filter(n => n.key !== this.selectedNode.key);
        }
        switch (dragPos) {
            case 0:
                targetNode.addChildren([this.selectedNode]);
                this.resetNodeLevel(targetNode);
                break;
            case -1:
            case 1:
                const tIndex = dragPos === 1 ? 1 : 0;
                if (targetParent) {
                    targetParent.addChildren([this.selectedNode], targetParent.children.indexOf(targetNode) + tIndex);
                    const parentNode = this.selectedNode.getParentNode();
                    if (parentNode) {
                        this.resetNodeLevel(parentNode);
                    }
                }
                else {
                    const targetIndex = this.rootNodes.indexOf(targetNode) + tIndex;
                    // Insert root node.
                    this.rootNodes.splice(targetIndex, 0, this.selectedNode);
                    this.rootNodes[targetIndex].parentNode = null;
                    this.rootNodes[targetIndex].level = 0;
                }
                break;
        }
        // flush all nodes
        this.rootNodes.forEach(child => {
            if (!child.treeService) {
                child.service = treeService;
            }
            this.refreshDragNode(child);
        });
    }
    /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     */
    formatEvent(eventName, node, event) {
        const emitStructure = {
            eventName: eventName,
            node: node,
            event: event
        };
        switch (eventName) {
            case 'dragstart':
            case 'dragenter':
            case 'dragover':
            case 'dragleave':
            case 'drop':
            case 'dragend':
                Object.assign(emitStructure, { dragNode: this.getSelectedNode() });
                break;
            case 'click':
            case 'dblclick':
                Object.assign(emitStructure, { selectedKeys: this.selectedNodeList });
                Object.assign(emitStructure, { nodes: this.selectedNodeList });
                Object.assign(emitStructure, { keys: this.selectedNodeList.map(n => n.key) });
                break;
            case 'check':
                const checkedNodeList = this.getCheckedNodeList();
                Object.assign(emitStructure, { checkedKeys: checkedNodeList });
                Object.assign(emitStructure, { nodes: checkedNodeList });
                Object.assign(emitStructure, { keys: checkedNodeList.map(n => n.key) });
                break;
            case 'search':
                Object.assign(emitStructure, { matchedKeys: this.getMatchedNodeList() });
                Object.assign(emitStructure, { nodes: this.getMatchedNodeList() });
                Object.assign(emitStructure, { keys: this.getMatchedNodeList().map(n => n.key) });
                break;
            case 'expand':
                Object.assign(emitStructure, { nodes: this.expandedNodeList });
                Object.assign(emitStructure, { keys: this.expandedNodeList.map(n => n.key) });
                break;
        }
        return emitStructure;
    }
    ngOnDestroy() {
        this.triggerEventChange$.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzTreeBaseService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzTreeBaseService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzTreeBaseService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1iYXNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy10cmVlL3RyZWUvbnotdHJlZS1iYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFJakUsTUFBTSxPQUFPLGlCQUFpQjtJQUQ5QjtRQUVFLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBRWpCLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBQ2pDLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFFNUIsY0FBUyxHQUFpQixFQUFFLENBQUM7UUFDN0IscUJBQWdCLEdBQWlCLEVBQUUsQ0FBQztRQUNwQyxxQkFBZ0IsR0FBaUIsRUFBRSxDQUFDO1FBQ3BDLG9CQUFlLEdBQWlCLEVBQUUsQ0FBQztRQUNuQyx3QkFBbUIsR0FBaUIsRUFBRSxDQUFDO1FBQ3ZDLG9CQUFlLEdBQWlCLEVBQUUsQ0FBQztRQUNuQyx3QkFBbUIsR0FBRyxJQUFJLE9BQU8sRUFBcUIsQ0FBQztLQTZnQnhEO0lBM2dCQzs7T0FFRztJQUNILG1CQUFtQjtRQUNqQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRLENBQUMsT0FBcUI7UUFDNUIs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QyxhQUFhLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNuRSxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRixNQUFNO1lBQ1IsS0FBSyxRQUFRO2dCQUNYLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7Z0JBQy9ELE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM5RSxNQUFNO1NBQ1Q7UUFDRCxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN0QyxDQUFDOytHQXpoQlUsaUJBQWlCO21IQUFqQixpQkFBaUI7OzRGQUFqQixpQkFBaUI7a0JBRDdCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBOelRyZWVOb2RlIH0gZnJvbSAnLi9uei10cmVlLWJhc2Utbm9kZSc7XHJcbmltcG9ydCB7IGlzQ2hlY2tEaXNhYmxlZCwgaXNJbkFycmF5IH0gZnJvbSAnLi9uei10cmVlLWJhc2UtdXRpbCc7XHJcbmltcG9ydCB7IE56Rm9ybWF0RW1pdEV2ZW50IH0gZnJvbSAnLi9uei10cmVlLWJhc2UuZGVmaW5pdGlvbnMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTnpUcmVlQmFzZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIERSQUdfU0lERV9SQU5HRSA9IDAuMjU7XHJcbiAgRFJBR19NSU5fR0FQID0gMjtcclxuXHJcbiAgaXNDaGVja1N0cmljdGx5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgaXNNdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHNlbGVjdGVkTm9kZTogTnpUcmVlTm9kZTtcclxuICByb290Tm9kZXM6IE56VHJlZU5vZGVbXSA9IFtdO1xyXG4gIHNlbGVjdGVkTm9kZUxpc3Q6IE56VHJlZU5vZGVbXSA9IFtdO1xyXG4gIGV4cGFuZGVkTm9kZUxpc3Q6IE56VHJlZU5vZGVbXSA9IFtdO1xyXG4gIGNoZWNrZWROb2RlTGlzdDogTnpUcmVlTm9kZVtdID0gW107XHJcbiAgaGFsZkNoZWNrZWROb2RlTGlzdDogTnpUcmVlTm9kZVtdID0gW107XHJcbiAgbWF0Y2hlZE5vZGVMaXN0OiBOelRyZWVOb2RlW10gPSBbXTtcclxuICB0cmlnZ2VyRXZlbnRDaGFuZ2UkID0gbmV3IFN1YmplY3Q8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIHRyaWdnZXIgZXZlbnRcclxuICAgKi9cclxuICBldmVudFRyaWdnZXJDaGFuZ2VkKCk6IE9ic2VydmFibGU8TnpGb3JtYXRFbWl0RXZlbnQ+IHtcclxuICAgIHJldHVybiB0aGlzLnRyaWdnZXJFdmVudENoYW5nZSQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZXNldCB0cmVlIG5vZGVzIHdpbGwgY2xlYXIgZGVmYXVsdCBub2RlIGxpc3RcclxuICAgKi9cclxuICBpbml0VHJlZShuek5vZGVzOiBOelRyZWVOb2RlW10pOiB2b2lkIHtcclxuICAgIHRoaXMucm9vdE5vZGVzID0gbnpOb2RlcztcclxuICAgIHRoaXMuZXhwYW5kZWROb2RlTGlzdCA9IFtdO1xyXG4gICAgdGhpcy5zZWxlY3RlZE5vZGVMaXN0ID0gW107XHJcbiAgICB0aGlzLmhhbGZDaGVja2VkTm9kZUxpc3QgPSBbXTtcclxuICAgIHRoaXMuY2hlY2tlZE5vZGVMaXN0ID0gW107XHJcbiAgICB0aGlzLm1hdGNoZWROb2RlTGlzdCA9IFtdO1xyXG4gICAgLy8gcmVmcmVzaCBub2RlIGNoZWNrZWQgc3RhdGVcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlZnJlc2hDaGVja1N0YXRlKHRoaXMuaXNDaGVja1N0cmljdGx5KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWROb2RlKCk6IE56VHJlZU5vZGUgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkTm9kZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGdldCBzb21lIGxpc3RcclxuICAgKi9cclxuICBnZXRTZWxlY3RlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25kdWN0Tm9kZVN0YXRlKCdzZWxlY3QnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJldHVybiBjaGVja2VkIG5vZGVzXHJcbiAgICovXHJcbiAgZ2V0Q2hlY2tlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25kdWN0Tm9kZVN0YXRlKCdjaGVjaycpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SGFsZkNoZWNrZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZHVjdE5vZGVTdGF0ZSgnaGFsZkNoZWNrJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZXR1cm4gZXhwYW5kZWQgbm9kZXNcclxuICAgKi9cclxuICBnZXRFeHBhbmRlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25kdWN0Tm9kZVN0YXRlKCdleHBhbmQnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJldHVybiBzZWFyY2ggbWF0Y2hlZCBub2Rlc1xyXG4gICAqL1xyXG4gIGdldE1hdGNoZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZHVjdE5vZGVTdGF0ZSgnbWF0Y2gnKTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBpc0FycmF5T2ZOelRyZWVOb2RlKHZhbHVlOiBhbnlbXSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGl0ZW0gPT4gaXRlbSBpbnN0YW5jZW9mIE56VHJlZU5vZGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVzZXQgc2VsZWN0ZWROb2RlTGlzdFxyXG4gICAqL1xyXG4gIGNhbGNTZWxlY3RlZEtleXMoc2VsZWN0ZWRLZXlzOiBzdHJpbmdbXSwgbnpOb2RlczogTnpUcmVlTm9kZVtdLCBpc011bHRpOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNhbGMgPSAobm9kZXM6IE56VHJlZU5vZGVbXSk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICByZXR1cm4gbm9kZXMuZXZlcnkobm9kZSA9PiB7XHJcbiAgICAgICAgaWYgKGlzSW5BcnJheShub2RlLmtleSwgc2VsZWN0ZWRLZXlzKSkge1xyXG4gICAgICAgICAgbm9kZS5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgIGlmICghaXNNdWx0aSkge1xyXG4gICAgICAgICAgICAvLyBpZiBub3Qgc3VwcG9ydCBtdWx0aSBzZWxlY3RcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBub2RlLmlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgLy8gUmVjdXJzaW9uXHJcbiAgICAgICAgICByZXR1cm4gY2FsYyhub2RlLmNoaWxkcmVuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNhbGMobnpOb2Rlcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZXNldCBleHBhbmRlZE5vZGVMaXN0XHJcbiAgICovXHJcbiAgY2FsY0V4cGFuZGVkS2V5cyhleHBhbmRlZEtleXM6IHN0cmluZ1tdLCBuek5vZGVzOiBOelRyZWVOb2RlW10pOiB2b2lkIHtcclxuICAgIHRoaXMuZXhwYW5kZWROb2RlTGlzdCA9IFtdO1xyXG4gICAgY29uc3QgY2FsYyA9IChub2RlczogTnpUcmVlTm9kZVtdKSA9PiB7XHJcbiAgICAgIG5vZGVzLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgbm9kZS5pc0V4cGFuZGVkID0gaXNJbkFycmF5KG5vZGUua2V5LCBleHBhbmRlZEtleXMpO1xyXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGNhbGMobm9kZS5jaGlsZHJlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjYWxjKG56Tm9kZXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVzZXQgY2hlY2tlZE5vZGVMaXN0XHJcbiAgICovXHJcbiAgY2FsY0NoZWNrZWRLZXlzKGNoZWNrZWRLZXlzOiBzdHJpbmdbXSwgbnpOb2RlczogTnpUcmVlTm9kZVtdLCBpc0NoZWNrU3RyaWN0bHk6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGVja2VkTm9kZUxpc3QgPSBbXTtcclxuICAgIHRoaXMuaGFsZkNoZWNrZWROb2RlTGlzdCA9IFtdO1xyXG4gICAgY29uc3QgY2FsYyA9IChub2RlczogTnpUcmVlTm9kZVtdKSA9PiB7XHJcbiAgICAgIG5vZGVzLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgaWYgKGlzSW5BcnJheShub2RlLmtleSwgY2hlY2tlZEtleXMpKSB7XHJcbiAgICAgICAgICBub2RlLmlzQ2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICBub2RlLmlzSGFsZkNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbm9kZS5pc0NoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgIG5vZGUuaXNIYWxmQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBjYWxjKG5vZGUuY2hpbGRyZW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY2FsYyhuek5vZGVzKTtcclxuICAgIC8vIGNvbnRyb2xsZWQgc3RhdGVcclxuICAgIHRoaXMucmVmcmVzaENoZWNrU3RhdGUoaXNDaGVja1N0cmljdGx5KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHNldCBkcmFnIG5vZGVcclxuICAgKi9cclxuICBzZXRTZWxlY3RlZE5vZGUobm9kZTogTnpUcmVlTm9kZSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZE5vZGUgPSBub2RlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2V0IG5vZGUgc2VsZWN0ZWQgc3RhdHVzXHJcbiAgICovXHJcbiAgc2V0Tm9kZUFjdGl2ZShub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNNdWx0aXBsZSAmJiBub2RlLmlzU2VsZWN0ZWQpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVMaXN0LmZvckVhY2gobiA9PiB7XHJcbiAgICAgICAgaWYgKG5vZGUua2V5ICE9PSBuLmtleSkge1xyXG4gICAgICAgICAgLy8gcmVzZXQgb3RoZXIgbm9kZXNcclxuICAgICAgICAgIG4uaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIC8vIHNpbmdsZSBtb2RlOiByZW1vdmUgcHJlIG5vZGVcclxuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVMaXN0ID0gW107XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFNlbGVjdGVkTm9kZUxpc3Qobm9kZSwgdGhpcy5pc011bHRpcGxlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGFkZCBvciByZW1vdmUgbm9kZSB0byBzZWxlY3RlZE5vZGVMaXN0XHJcbiAgICovXHJcbiAgc2V0U2VsZWN0ZWROb2RlTGlzdChub2RlOiBOelRyZWVOb2RlLCBpc011bHRpcGxlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zZWxlY3RlZE5vZGVMaXN0LmZpbmRJbmRleChuID0+IG5vZGUua2V5ID09PSBuLmtleSk7XHJcbiAgICBpZiAoaXNNdWx0aXBsZSkge1xyXG4gICAgICBpZiAobm9kZS5pc1NlbGVjdGVkICYmIGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWROb2RlTGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAobm9kZS5pc1NlbGVjdGVkICYmIGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWROb2RlTGlzdCA9IFtub2RlXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFub2RlLmlzU2VsZWN0ZWQpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVMaXN0ID0gdGhpcy5zZWxlY3RlZE5vZGVMaXN0LmZpbHRlcihuID0+IG4ua2V5ICE9PSBub2RlLmtleSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtZXJnZSBjaGVja2VkIG5vZGVzXHJcbiAgICovXHJcbiAgc2V0SGFsZkNoZWNrZWROb2RlTGlzdChub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaGFsZkNoZWNrZWROb2RlTGlzdC5maW5kSW5kZXgobiA9PiBub2RlLmtleSA9PT0gbi5rZXkpO1xyXG4gICAgaWYgKG5vZGUuaXNIYWxmQ2hlY2tlZCAmJiBpbmRleCA9PT0gLTEpIHtcclxuICAgICAgdGhpcy5oYWxmQ2hlY2tlZE5vZGVMaXN0LnB1c2gobm9kZSk7XHJcbiAgICB9IGVsc2UgaWYgKCFub2RlLmlzSGFsZkNoZWNrZWQgJiYgaW5kZXggPiAtMSkge1xyXG4gICAgICB0aGlzLmhhbGZDaGVja2VkTm9kZUxpc3QgPSB0aGlzLmhhbGZDaGVja2VkTm9kZUxpc3QuZmlsdGVyKG4gPT4gbm9kZS5rZXkgIT09IG4ua2V5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldENoZWNrZWROb2RlTGlzdChub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuY2hlY2tlZE5vZGVMaXN0LmZpbmRJbmRleChuID0+IG5vZGUua2V5ID09PSBuLmtleSk7XHJcbiAgICBpZiAobm9kZS5pc0NoZWNrZWQgJiYgaW5kZXggPT09IC0xKSB7XHJcbiAgICAgIHRoaXMuY2hlY2tlZE5vZGVMaXN0LnB1c2gobm9kZSk7XHJcbiAgICB9IGVsc2UgaWYgKCFub2RlLmlzQ2hlY2tlZCAmJiBpbmRleCA+IC0xKSB7XHJcbiAgICAgIHRoaXMuY2hlY2tlZE5vZGVMaXN0ID0gdGhpcy5jaGVja2VkTm9kZUxpc3QuZmlsdGVyKG4gPT4gbm9kZS5rZXkgIT09IG4ua2V5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGNvbmR1Y3QgY2hlY2tlZC9zZWxlY3RlZC9leHBhbmRlZCBrZXlzXHJcbiAgICovXHJcbiAgY29uZHVjdE5vZGVTdGF0ZSh0eXBlOiBzdHJpbmcgPSAnY2hlY2snKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIGxldCByZXN1bHROb2Rlc0xpc3Q6IE56VHJlZU5vZGVbXSA9IFtdO1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgJ3NlbGVjdCc6XHJcbiAgICAgICAgcmVzdWx0Tm9kZXNMaXN0ID0gdGhpcy5zZWxlY3RlZE5vZGVMaXN0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdleHBhbmQnOlxyXG4gICAgICAgIHJlc3VsdE5vZGVzTGlzdCA9IHRoaXMuZXhwYW5kZWROb2RlTGlzdDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnbWF0Y2gnOlxyXG4gICAgICAgIHJlc3VsdE5vZGVzTGlzdCA9IHRoaXMubWF0Y2hlZE5vZGVMaXN0O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdjaGVjayc6XHJcbiAgICAgICAgcmVzdWx0Tm9kZXNMaXN0ID0gdGhpcy5jaGVja2VkTm9kZUxpc3Q7XHJcbiAgICAgICAgY29uc3QgaXNJZ25vcmUgPSAobm9kZTogTnpUcmVlTm9kZSk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IG5vZGUuZ2V0UGFyZW50Tm9kZSgpO1xyXG4gICAgICAgICAgaWYgKHBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tlZE5vZGVMaXN0LmZpbmRJbmRleChuID0+IG4ua2V5ID09PSBwYXJlbnROb2RlLmtleSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJldHVybiBpc0lnbm9yZShwYXJlbnROb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gbWVyZ2UgY2hlY2tlZFxyXG4gICAgICAgIGlmICghdGhpcy5pc0NoZWNrU3RyaWN0bHkpIHtcclxuICAgICAgICAgIHJlc3VsdE5vZGVzTGlzdCA9IHRoaXMuY2hlY2tlZE5vZGVMaXN0LmZpbHRlcihuID0+ICFpc0lnbm9yZShuKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdoYWxmQ2hlY2snOlxyXG4gICAgICAgIGlmICghdGhpcy5pc0NoZWNrU3RyaWN0bHkpIHtcclxuICAgICAgICAgIHJlc3VsdE5vZGVzTGlzdCA9IHRoaXMuaGFsZkNoZWNrZWROb2RlTGlzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0Tm9kZXNMaXN0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2V0IGV4cGFuZGVkIG5vZGVzXHJcbiAgICovXHJcbiAgc2V0RXhwYW5kZWROb2RlTGlzdChub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XHJcbiAgICBpZiAobm9kZS5pc0xlYWYpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmV4cGFuZGVkTm9kZUxpc3QuZmluZEluZGV4KG4gPT4gbm9kZS5rZXkgPT09IG4ua2V5KTtcclxuICAgIGlmIChub2RlLmlzRXhwYW5kZWQgJiYgaW5kZXggPT09IC0xKSB7XHJcbiAgICAgIHRoaXMuZXhwYW5kZWROb2RlTGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgfSBlbHNlIGlmICghbm9kZS5pc0V4cGFuZGVkICYmIGluZGV4ID4gLTEpIHtcclxuICAgICAgdGhpcy5leHBhbmRlZE5vZGVMaXN0ID0gdGhpcy5leHBhbmRlZE5vZGVMaXN0LmZpbHRlcihuID0+IG5vZGUua2V5ICE9PSBuLmtleSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBjaGVjayBzdGF0ZVxyXG4gICAqIEBwYXJhbSBpc0NoZWNrU3RyaWN0bHlcclxuICAgKi9cclxuICByZWZyZXNoQ2hlY2tTdGF0ZShpc0NoZWNrU3RyaWN0bHk6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgaWYgKGlzQ2hlY2tTdHJpY3RseSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoZWNrZWROb2RlTGlzdC5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICB0aGlzLmNvbmR1Y3Qobm9kZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIHJlc2V0IG90aGVyIG5vZGUgY2hlY2tlZCBzdGF0ZSBiYXNlZCBjdXJyZW50IG5vZGVcclxuICBjb25kdWN0KG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkIHtcclxuICAgIGNvbnN0IGlzQ2hlY2tlZCA9IG5vZGUuaXNDaGVja2VkO1xyXG4gICAgaWYgKG5vZGUpIHtcclxuICAgICAgdGhpcy5jb25kdWN0VXAobm9kZSk7XHJcbiAgICAgIHRoaXMuY29uZHVjdERvd24obm9kZSwgaXNDaGVja2VkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIDHjgIFjaGlsZHJlbiBoYWxmIGNoZWNrZWRcclxuICAgKiAy44CBY2hpbGRyZW4gYWxsIGNoZWNrZWQsIHBhcmVudCBjaGVja2VkXHJcbiAgICogM+OAgW5vIGNoaWxkcmVuIGNoZWNrZWRcclxuICAgKi9cclxuICBjb25kdWN0VXAobm9kZTogTnpUcmVlTm9kZSk6IHZvaWQge1xyXG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IG5vZGUuZ2V0UGFyZW50Tm9kZSgpO1xyXG4gICAgaWYgKHBhcmVudE5vZGUpIHtcclxuICAgICAgaWYgKCFpc0NoZWNrRGlzYWJsZWQocGFyZW50Tm9kZSkpIHtcclxuICAgICAgICBpZiAocGFyZW50Tm9kZS5jaGlsZHJlbi5ldmVyeShjaGlsZCA9PiBpc0NoZWNrRGlzYWJsZWQoY2hpbGQpIHx8ICghY2hpbGQuaXNIYWxmQ2hlY2tlZCAmJiBjaGlsZC5pc0NoZWNrZWQpKSkge1xyXG4gICAgICAgICAgcGFyZW50Tm9kZS5pc0NoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgcGFyZW50Tm9kZS5pc0hhbGZDaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXJlbnROb2RlLmNoaWxkcmVuLnNvbWUoY2hpbGQgPT4gY2hpbGQuaXNIYWxmQ2hlY2tlZCB8fCBjaGlsZC5pc0NoZWNrZWQpKSB7XHJcbiAgICAgICAgICBwYXJlbnROb2RlLmlzQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgcGFyZW50Tm9kZS5pc0hhbGZDaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcGFyZW50Tm9kZS5pc0NoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgIHBhcmVudE5vZGUuaXNIYWxmQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldENoZWNrZWROb2RlTGlzdChwYXJlbnROb2RlKTtcclxuICAgICAgdGhpcy5zZXRIYWxmQ2hlY2tlZE5vZGVMaXN0KHBhcmVudE5vZGUpO1xyXG4gICAgICB0aGlzLmNvbmR1Y3RVcChwYXJlbnROb2RlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlc2V0IGNoaWxkIGNoZWNrIHN0YXRlXHJcbiAgICovXHJcbiAgY29uZHVjdERvd24obm9kZTogTnpUcmVlTm9kZSwgdmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICghaXNDaGVja0Rpc2FibGVkKG5vZGUpKSB7XHJcbiAgICAgIG5vZGUuaXNDaGVja2VkID0gdmFsdWU7XHJcbiAgICAgIG5vZGUuaXNIYWxmQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNldENoZWNrZWROb2RlTGlzdChub2RlKTtcclxuICAgICAgdGhpcy5zZXRIYWxmQ2hlY2tlZE5vZGVMaXN0KG5vZGUpO1xyXG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2gobiA9PiB7XHJcbiAgICAgICAgdGhpcy5jb25kdWN0RG93bihuLCB2YWx1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2VhcmNoIHZhbHVlICYgZXhwYW5kIG5vZGVcclxuICAgKiBzaG91bGQgYWRkIGV4cGFuZGxpc3RcclxuICAgKi9cclxuICBzZWFyY2hFeHBhbmQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5tYXRjaGVkTm9kZUxpc3QgPSBbXTtcclxuICAgIGNvbnN0IGV4cGFuZGVkS2V5czogc3RyaW5nW10gPSBbXTtcclxuICAgIGlmICghaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIHRvIHJlc2V0IGV4cGFuZGVkTm9kZUxpc3RcclxuICAgIGNvbnN0IGV4cGFuZFBhcmVudCA9IChuOiBOelRyZWVOb2RlKSA9PiB7XHJcbiAgICAgIC8vIGV4cGFuZCBwYXJlbnQgbm9kZVxyXG4gICAgICBjb25zdCBwYXJlbnROb2RlID0gbi5nZXRQYXJlbnROb2RlKCk7XHJcbiAgICAgIGlmIChwYXJlbnROb2RlKSB7XHJcbiAgICAgICAgZXhwYW5kZWRLZXlzLnB1c2gocGFyZW50Tm9kZS5rZXkpO1xyXG4gICAgICAgIGV4cGFuZFBhcmVudChwYXJlbnROb2RlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHNlYXJjaENoaWxkID0gKG46IE56VHJlZU5vZGUpID0+IHtcclxuICAgICAgaWYgKHZhbHVlICYmIG4udGl0bGUuaW5jbHVkZXModmFsdWUpKSB7XHJcbiAgICAgICAgLy8gbWF0Y2ggdGhlIG5vZGVcclxuICAgICAgICBuLmlzTWF0Y2hlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tYXRjaGVkTm9kZUxpc3QucHVzaChuKTtcclxuICAgICAgICAvLyBleHBhbmQgcGFyZW50Tm9kZVxyXG4gICAgICAgIGV4cGFuZFBhcmVudChuKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuLmlzTWF0Y2hlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIG4uY2FuSGlkZSA9ICFuLmlzTWF0Y2hlZDtcclxuICAgICAgbi5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICBzZWFyY2hDaGlsZChjaGlsZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHRoaXMucm9vdE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICBzZWFyY2hDaGlsZChjaGlsZCk7XHJcbiAgICB9KTtcclxuICAgIC8vIGV4cGFuZCBtYXRjaGVkIGtleXNcclxuICAgIHRoaXMuY2FsY0V4cGFuZGVkS2V5cyhleHBhbmRlZEtleXMsIHRoaXMucm9vdE5vZGVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGZsdXNoIGFmdGVyIGRlbGV0ZSBub2RlXHJcbiAgICovXHJcbiAgYWZ0ZXJSZW1vdmUobm9kZXM6IE56VHJlZU5vZGVbXSk6IHZvaWQge1xyXG4gICAgLy8gdG8gcmVzZXQgc2VsZWN0ZWROb2RlTGlzdCAmIGV4cGFuZGVkTm9kZUxpc3RcclxuICAgIGNvbnN0IGxvb3BOb2RlID0gKG5vZGU6IE56VHJlZU5vZGUpID0+IHtcclxuICAgICAgLy8gcmVtb3ZlIHNlbGVjdGVkIG5vZGVcclxuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVMaXN0ID0gdGhpcy5zZWxlY3RlZE5vZGVMaXN0LmZpbHRlcihuID0+IG4ua2V5ICE9PSBub2RlLmtleSk7XHJcbiAgICAgIC8vIHJlbW92ZSBleHBhbmRlZCBub2RlXHJcbiAgICAgIHRoaXMuZXhwYW5kZWROb2RlTGlzdCA9IHRoaXMuZXhwYW5kZWROb2RlTGlzdC5maWx0ZXIobiA9PiBuLmtleSAhPT0gbm9kZS5rZXkpO1xyXG4gICAgICAvLyByZW1vdmUgY2hlY2tlZCBub2RlXHJcbiAgICAgIHRoaXMuY2hlY2tlZE5vZGVMaXN0ID0gdGhpcy5jaGVja2VkTm9kZUxpc3QuZmlsdGVyKG4gPT4gbi5rZXkgIT09IG5vZGUua2V5KTtcclxuICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgbG9vcE5vZGUoY2hpbGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgbm9kZXMuZm9yRWFjaChuID0+IHtcclxuICAgICAgbG9vcE5vZGUobik7XHJcbiAgICB9KTtcclxuICAgIHRoaXMucmVmcmVzaENoZWNrU3RhdGUodGhpcy5pc0NoZWNrU3RyaWN0bHkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZHJhZyBldmVudFxyXG4gICAqL1xyXG4gIHJlZnJlc2hEcmFnTm9kZShub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XHJcbiAgICBpZiAobm9kZS5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgLy8gdW50aWwgcm9vdFxyXG4gICAgICB0aGlzLmNvbmR1Y3RVcChub2RlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoRHJhZ05vZGUoY2hpbGQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHJlc2V0IG5vZGUgbGV2ZWxcclxuICByZXNldE5vZGVMZXZlbChub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XHJcbiAgICBjb25zdCBwYXJlbnROb2RlID0gbm9kZS5nZXRQYXJlbnROb2RlKCk7XHJcbiAgICBpZiAocGFyZW50Tm9kZSkge1xyXG4gICAgICBub2RlLmxldmVsID0gcGFyZW50Tm9kZS5sZXZlbCArIDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBub2RlLmxldmVsID0gMDtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xyXG4gICAgICB0aGlzLnJlc2V0Tm9kZUxldmVsKGNoaWxkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbGNEcm9wUG9zaXRpb24oZXZlbnQ6IERyYWdFdmVudCk6IG51bWJlciB7XHJcbiAgICBjb25zdCB7IGNsaWVudFkgfSA9IGV2ZW50O1xyXG4gICAgLy8gdG8gZml4IGZpcmVmb3ggdW5kZWZpbmVkXHJcbiAgICBjb25zdCB7IHRvcCwgYm90dG9tLCBoZWlnaHQgfSA9IGV2ZW50LnNyY0VsZW1lbnRcclxuICAgICAgPyAoZXZlbnQuc3JjRWxlbWVudCBhcyBFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICA6IChldmVudC50YXJnZXQgYXMgRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBkZXMgPSBNYXRoLm1heChoZWlnaHQgKiB0aGlzLkRSQUdfU0lERV9SQU5HRSwgdGhpcy5EUkFHX01JTl9HQVApO1xyXG5cclxuICAgIGlmIChjbGllbnRZIDw9IHRvcCArIGRlcykge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9IGVsc2UgaWYgKGNsaWVudFkgPj0gYm90dG9tIC0gZGVzKSB7XHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZHJvcFxyXG4gICAqIDA6IGlubmVyIC0xOiBwcmUgMTogbmV4dFxyXG4gICAqL1xyXG4gIGRyb3BBbmRBcHBseSh0YXJnZXROb2RlOiBOelRyZWVOb2RlLCBkcmFnUG9zOiBudW1iZXIgPSAtMSk6IHZvaWQge1xyXG4gICAgaWYgKCF0YXJnZXROb2RlIHx8IGRyYWdQb3MgPiAxKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHRyZWVTZXJ2aWNlID0gdGFyZ2V0Tm9kZS50cmVlU2VydmljZTtcclxuICAgIGNvbnN0IHRhcmdldFBhcmVudCA9IHRhcmdldE5vZGUuZ2V0UGFyZW50Tm9kZSgpO1xyXG4gICAgY29uc3QgaXNTZWxlY3RlZFJvb3ROb2RlID0gdGhpcy5zZWxlY3RlZE5vZGUuZ2V0UGFyZW50Tm9kZSgpO1xyXG4gICAgLy8gcmVtb3ZlIHRoZSBkcmFnTm9kZVxyXG4gICAgaWYgKGlzU2VsZWN0ZWRSb290Tm9kZSkge1xyXG4gICAgICBpc1NlbGVjdGVkUm9vdE5vZGUuY2hpbGRyZW4gPSBpc1NlbGVjdGVkUm9vdE5vZGUuY2hpbGRyZW4uZmlsdGVyKG4gPT4gbi5rZXkgIT09IHRoaXMuc2VsZWN0ZWROb2RlLmtleSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJvb3ROb2RlcyA9IHRoaXMucm9vdE5vZGVzLmZpbHRlcihuID0+IG4ua2V5ICE9PSB0aGlzLnNlbGVjdGVkTm9kZS5rZXkpO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoIChkcmFnUG9zKSB7XHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICB0YXJnZXROb2RlLmFkZENoaWxkcmVuKFt0aGlzLnNlbGVjdGVkTm9kZV0pO1xyXG4gICAgICAgIHRoaXMucmVzZXROb2RlTGV2ZWwodGFyZ2V0Tm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgLTE6XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICBjb25zdCB0SW5kZXggPSBkcmFnUG9zID09PSAxID8gMSA6IDA7XHJcbiAgICAgICAgaWYgKHRhcmdldFBhcmVudCkge1xyXG4gICAgICAgICAgdGFyZ2V0UGFyZW50LmFkZENoaWxkcmVuKFt0aGlzLnNlbGVjdGVkTm9kZV0sIHRhcmdldFBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRhcmdldE5vZGUpICsgdEluZGV4KTtcclxuICAgICAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSB0aGlzLnNlbGVjdGVkTm9kZS5nZXRQYXJlbnROb2RlKCk7XHJcbiAgICAgICAgICBpZiAocGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0Tm9kZUxldmVsKHBhcmVudE5vZGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IHRoaXMucm9vdE5vZGVzLmluZGV4T2YodGFyZ2V0Tm9kZSkgKyB0SW5kZXg7XHJcbiAgICAgICAgICAvLyBJbnNlcnQgcm9vdCBub2RlLlxyXG4gICAgICAgICAgdGhpcy5yb290Tm9kZXMuc3BsaWNlKHRhcmdldEluZGV4LCAwLCB0aGlzLnNlbGVjdGVkTm9kZSk7XHJcbiAgICAgICAgICB0aGlzLnJvb3ROb2Rlc1t0YXJnZXRJbmRleF0ucGFyZW50Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgICB0aGlzLnJvb3ROb2Rlc1t0YXJnZXRJbmRleF0ubGV2ZWwgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIC8vIGZsdXNoIGFsbCBub2Rlc1xyXG4gICAgdGhpcy5yb290Tm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgIGlmICghY2hpbGQudHJlZVNlcnZpY2UpIHtcclxuICAgICAgICBjaGlsZC5zZXJ2aWNlID0gdHJlZVNlcnZpY2U7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yZWZyZXNoRHJhZ05vZGUoY2hpbGQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBlbWl0IFN0cnVjdHVyZVxyXG4gICAqIGV2ZW50TmFtZVxyXG4gICAqIG5vZGVcclxuICAgKiBldmVudDogTW91c2VFdmVudCAvIERyYWdFdmVudFxyXG4gICAqIGRyYWdOb2RlXHJcbiAgICovXHJcbiAgZm9ybWF0RXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIG5vZGU6IE56VHJlZU5vZGUgfCBudWxsLCBldmVudDogTW91c2VFdmVudCB8IERyYWdFdmVudCB8IG51bGwpOiBOekZvcm1hdEVtaXRFdmVudCB7XHJcbiAgICBjb25zdCBlbWl0U3RydWN0dXJlOiBOekZvcm1hdEVtaXRFdmVudCA9IHtcclxuICAgICAgZXZlbnROYW1lOiBldmVudE5hbWUsXHJcbiAgICAgIG5vZGU6IG5vZGUsXHJcbiAgICAgIGV2ZW50OiBldmVudFxyXG4gICAgfTtcclxuICAgIHN3aXRjaCAoZXZlbnROYW1lKSB7XHJcbiAgICAgIGNhc2UgJ2RyYWdzdGFydCc6XHJcbiAgICAgIGNhc2UgJ2RyYWdlbnRlcic6XHJcbiAgICAgIGNhc2UgJ2RyYWdvdmVyJzpcclxuICAgICAgY2FzZSAnZHJhZ2xlYXZlJzpcclxuICAgICAgY2FzZSAnZHJvcCc6XHJcbiAgICAgIGNhc2UgJ2RyYWdlbmQnOlxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyBkcmFnTm9kZTogdGhpcy5nZXRTZWxlY3RlZE5vZGUoKSB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnY2xpY2snOlxyXG4gICAgICBjYXNlICdkYmxjbGljayc6XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7IHNlbGVjdGVkS2V5czogdGhpcy5zZWxlY3RlZE5vZGVMaXN0IH0pO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyBub2RlczogdGhpcy5zZWxlY3RlZE5vZGVMaXN0IH0pO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyBrZXlzOiB0aGlzLnNlbGVjdGVkTm9kZUxpc3QubWFwKG4gPT4gbi5rZXkpIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdjaGVjayc6XHJcbiAgICAgICAgY29uc3QgY2hlY2tlZE5vZGVMaXN0ID0gdGhpcy5nZXRDaGVja2VkTm9kZUxpc3QoKTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7IGNoZWNrZWRLZXlzOiBjaGVja2VkTm9kZUxpc3QgfSk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7IG5vZGVzOiBjaGVja2VkTm9kZUxpc3QgfSk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7IGtleXM6IGNoZWNrZWROb2RlTGlzdC5tYXAobiA9PiBuLmtleSkgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3NlYXJjaCc6XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7IG1hdGNoZWRLZXlzOiB0aGlzLmdldE1hdGNoZWROb2RlTGlzdCgpIH0pO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyBub2RlczogdGhpcy5nZXRNYXRjaGVkTm9kZUxpc3QoKSB9KTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsga2V5czogdGhpcy5nZXRNYXRjaGVkTm9kZUxpc3QoKS5tYXAobiA9PiBuLmtleSkgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2V4cGFuZCc6XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7IG5vZGVzOiB0aGlzLmV4cGFuZGVkTm9kZUxpc3QgfSk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7IGtleXM6IHRoaXMuZXhwYW5kZWROb2RlTGlzdC5tYXAobiA9PiBuLmtleSkgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZW1pdFN0cnVjdHVyZTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy50cmlnZ2VyRXZlbnRDaGFuZ2UkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==