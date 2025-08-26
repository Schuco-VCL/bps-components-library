import { __decorate } from "tslib";
import { Component, ViewEncapsulation, Output, Input, EventEmitter } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@tinymce/tinymce-angular";
export class BpsTextEditorComponent {
    constructor() {
        this.showEditor = false;
        this.lazyLoaded = false;
        this.oninit = new EventEmitter();
        this.onchange = new EventEmitter();
        this.onblur = new EventEmitter();
        this.onkeyup = new EventEmitter();
        this.disabled = false;
        this.height = '250px';
        this.editorID = 'myEditor';
        this.statusbar = false;
        this.resize = false;
        // tslint:disable-next-line: max-line-length
        this.toolbarmobile = ['bold', 'italic', 'underline', 'strikethrough', 'alignleft', 'aligncenter', 'alignright', 'alignjustify', 'bullist', 'numlist', 'forecolor'];
        this.toolbar = 'bold italic underline forecolor | strikethrough backcolor | alignleft aligncenter alignright alignjustify | bullist numlist image';
    }
    ngOnInit() {
        if (!this.lazyLoaded) {
            this.initTinyMCE();
        }
    }
    initTinyMCE() {
        if (this.tinyMceSettings === undefined) {
            this.tinyMceSettings = {
                mobile: {
                    theme: 'mobile',
                    plugins: ['image table textcolor lists advlist'],
                    toolbar: this.toolbarmobile
                },
                menubar: false,
                content_css: '/assets/tiny.css',
                image_title: true,
                toolbar_location: 'bottom',
                resize: this.resize,
                automatic_uploads: true,
                height: this.height,
                statusbar: this.statusbar,
                file_picker_types: 'image',
                images_upload_url: '#',
                setup: (editor) => {
                    editor.on('init', (obj) => {
                        if (this.disabled) {
                            this.disableEditor();
                        }
                        this.oninit.emit(obj);
                    });
                    editor.on('blur', (obj) => {
                        this.onblur.emit(obj);
                    });
                    editor.on('keyup', (obj) => {
                        this.onkeyup.emit(obj);
                    });
                    editor.on('Change', (obj) => {
                        this.onchange.emit(obj);
                    });
                },
                color_map: [
                    "e94c0a", "Orange",
                    "00a2d1", "Blue",
                    "7bc053", "Green",
                    "d80f0f", "Red",
                    "e9d90a", "Yellow",
                    "ffffff", "White"
                ],
                plugins: ['image table textcolor lists advlist'],
                toolbar: this.toolbar
            };
        }
        setTimeout(() => {
            this.showEditor = true;
        }, 100);
    }
    disableEditor() {
        tinymce.get(this.editorID).mode.set('readonly');
    }
    enableEditor() {
        tinymce.get(this.editorID).mode.set('design');
    }
    ngOnChanges(changes) {
        if (changes.disabled !== null && changes.disabled !== undefined && tinymce.get(this.editorID)) {
            if (changes.disabled) {
                this.disableEditor();
            }
            else {
                this.enableEditor();
            }
        }
        if (changes.lazyLoaded !== null && changes.lazyLoaded !== undefined) {
            if (!this.lazyLoaded) {
                this.initTinyMCE();
            }
            else if (tinymce.get(this.editorID)) {
                this.showEditor = false;
                tinymce.get(this.editorID).remove();
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsTextEditorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BpsTextEditorComponent, selector: "bps-text-editor", inputs: { lazyLoaded: "lazyLoaded", disabled: "disabled", height: "height", editorID: "editorID", statusbar: "statusbar", resize: "resize", toolbarmobile: "toolbarmobile", toolbar: "toolbar", tinyMceSettings: "tinyMceSettings" }, outputs: { oninit: "oninit", onchange: "onchange", onblur: "onblur", onkeyup: "onkeyup" }, exportAs: ["bpsTextEditor"], usesOnChanges: true, ngImport: i0, template: "<editor [class.bps-editor-disabled]=\"disabled\"\r\n        [id]=\"editorID\"\r\n        *ngIf=\"showEditor\"\r\n        [init]=\"tinyMceSettings\"\r\n        class=\"bps-editor\"\r\n        [disabled]=\"disabled\"></editor>\r\n", styles: [".tox-tinymce{border:none!important;border-radius:4px!important}.tox .tox-edit-area__iframe{background-color:#313131!important}.mce-content-body{color:#fff}.tox .tox-toolbar__primary{background-color:#313131!important}.tox:not([dir=rtl]) .tox-toolbar__group:not(:last-of-type){border-right:1px solid #ffffff!important}.tox .tox-tbtn svg{fill:#fff!important;transform:scale(.74)!important}.tox .tox-split-button__chevron svg{fill:#fff!important}.tox .tox-tbtn:hover svg{fill:#00a2d1!important}.tox .tox-split-button:hover{box-shadow:none!important}.tox-tinymce:not(.tox-tinymce-inline) .tox-editor-header:not(:first-child) .tox-toolbar-overlord:first-child .tox-toolbar__primary{border-top:none!important;background:#313131!important;padding-bottom:10px}.tox .tox-tbtn{height:34px!important;width:25px!important;margin:0!important;top:-3px;position:relative}.tox .tox-split-button{height:34px!important;position:relative!important;top:-3px!important;padding:3px 0!important}.tox .tox-tbtn:hover,.tox .tox-tbtn--enabled,.tox .tox-split-button:hover,.tox .tox-split-button--enabled,.tox .tox-tbtn--enabled:hover{background:#262626!important}.tox .tox-split-button:focus{background:#262626!important}.tox .tox-split-button__chevron{width:16px!important}.tox .tox-tbtn:active{background:#262626!important}.tox .tox-tbtn:focus{background:#313131!important}.tox .tox-toolbar__group{margin:0!important;height:30px!important}.tox-sidebar-wrap{color:#fff}.tox.tox-tinymce-aux .tox-toolbar__overflow{background-color:#363636!important;border:none!important;border-radius:4px!important;padding-top:7px!important;margin-bottom:6px!important}.tox .tox-toolbar__overflow{background:unset!important;height:39px!important}.tox .tox-menu{border:none!important;box-shadow:0 3px 12px #000000e6!important;background-color:#262626!important;margin-bottom:10px!important}.tox .tox-collection__item-checkmark svg,.tox .tox-collection__item-icon svg{fill:#fff!important}.tox .tox-collection--toolbar .tox-collection__item--active:not(.tox-collection__item--enabled),.tox .tox-collection--toolbar .tox-collection__item--active:not(.tox-collection__item--enabled) .tox-collection__item-icon svg,.tox .tox-collection--toolbar .tox-collection__item--active:not(.tox-collection__item--enabled) .tox-collection__item-checkmark svg{background-color:#262626!important;fill:#fff!important}.tox .tox-collection--toolbar .tox-collection__item:hover,.tox .tox-collection--toolbar .tox-collection__item:hover .tox-collection__item-icon svg,.tox .tox-collection--toolbar .tox-collection__item:hover .tox-collection__item-checkmark svg{fill:#00a2d1!important;background-color:#313131!important}.tox .tox-collection--toolbar .tox-collection__item--enabled{background-color:#313131!important}.tox .tox-collection--toolbar .tox-collection__item--enabled .tox-collection__item-checkmark svg,.tox .tox-collection--toolbar .tox-collection__item--enabled .tox-collection__item-icon svg{fill:#00a2d1!important;background-color:#313131!important}.tox .tox-button{background-color:#00a2d1!important;border-color:#00a2d1!important}.tox .tox-button:hover:not(:disabled){background-color:#1c6ca1!important;border-color:#1c6ca1!important}.tox .tox-button--naked:hover:not(:disabled){background-color:#262626!important;border-color:#262626!important}.tox .tox-button--naked:not(:disabled){background-color:transparent!important;border-color:transparent!important}.tox .tox-button--icon .tox-icon svg,.tox .tox-button.tox-button--icon .tox-icon svg,.tox .tox-button.tox-button--secondary.tox-button--icon .tox-icon svg{fill:#fff!important}.tox .tox-dialog__header{background-color:#313131!important;border-bottom:none!important;color:#fff!important}.tox .tox-dialog__body{background-color:#313131!important}.tox .tox-dialog__body-nav-item{color:#fff!important}.tox .tox-label,.tox .tox-toolbar-label{color:#fff!important;margin-bottom:4px!important}.tox .tox-textarea,.tox .tox-textfield,.tox .tox-toolbar-textfield{background-color:#262626!important;border-color:#262626!important;border-radius:6px!important;color:#fff!important;font-size:12px!important;min-height:24px!important;padding:2px 4.75px!important}.tox .tox-dialog__title{font-size:16px!important}.tox .tox-dropzone{background:#363636!important;border:2px dashed #262626!important}.tox .tox-dropzone p{color:#999!important}.tox .tox-button--secondary{background-color:#313131!important;border-color:#313131!important;border-radius:4px!important;color:#fff!important}.tox .tox-button--secondary:hover:not(:disabled){background-color:#262626!important;border-color:#262626!important;color:#fff!important}.tox .tox-button--naked:active:not(:disabled){background-color:#262626!important;border-color:#262626!important}.tox .tox-dialog__footer{background-color:#313131!important;border-top:1px solid #363636!important}.tox .tox-dialog__body-nav-item--active{border-bottom:2px solid #207ab7!important;color:#207ab7!important}.tox .tox-tbtn--disabled,.tox .tox-tbtn--disabled:hover,.tox .tox-tbtn:disabled,.tox .tox-tbtn:disabled:hover{background-color:#313131!important}.tox .tox-tbtn--disabled svg,.tox .tox-tbtn--disabled:hover svg,.tox .tox-tbtn:disabled svg,.tox .tox-tbtn:disabled:hover svg{fill:#666!important}.bps-editor-disabled .tox:not([dir=rtl]) .tox-toolbar__group:not(:last-of-type){border-color:#666!important}[title=\"Align right\"],[title=\"Align left\"],[title=\"Align center\"],[title=Justify]{top:-1px!important}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.EditorComponent, selector: "editor", inputs: ["cloudChannel", "apiKey", "init", "id", "initialValue", "outputFormat", "inline", "tagName", "plugins", "toolbar", "modelEvents", "allowedEvents", "ignoreEvents", "disabled"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], BpsTextEditorComponent.prototype, "lazyLoaded", void 0);
__decorate([
    InputBoolean()
], BpsTextEditorComponent.prototype, "disabled", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsTextEditorComponent, decorators: [{
            type: Component,
            args: [{ exportAs: 'bpsTextEditor', selector: 'bps-text-editor', encapsulation: ViewEncapsulation.None, template: "<editor [class.bps-editor-disabled]=\"disabled\"\r\n        [id]=\"editorID\"\r\n        *ngIf=\"showEditor\"\r\n        [init]=\"tinyMceSettings\"\r\n        class=\"bps-editor\"\r\n        [disabled]=\"disabled\"></editor>\r\n", styles: [".tox-tinymce{border:none!important;border-radius:4px!important}.tox .tox-edit-area__iframe{background-color:#313131!important}.mce-content-body{color:#fff}.tox .tox-toolbar__primary{background-color:#313131!important}.tox:not([dir=rtl]) .tox-toolbar__group:not(:last-of-type){border-right:1px solid #ffffff!important}.tox .tox-tbtn svg{fill:#fff!important;transform:scale(.74)!important}.tox .tox-split-button__chevron svg{fill:#fff!important}.tox .tox-tbtn:hover svg{fill:#00a2d1!important}.tox .tox-split-button:hover{box-shadow:none!important}.tox-tinymce:not(.tox-tinymce-inline) .tox-editor-header:not(:first-child) .tox-toolbar-overlord:first-child .tox-toolbar__primary{border-top:none!important;background:#313131!important;padding-bottom:10px}.tox .tox-tbtn{height:34px!important;width:25px!important;margin:0!important;top:-3px;position:relative}.tox .tox-split-button{height:34px!important;position:relative!important;top:-3px!important;padding:3px 0!important}.tox .tox-tbtn:hover,.tox .tox-tbtn--enabled,.tox .tox-split-button:hover,.tox .tox-split-button--enabled,.tox .tox-tbtn--enabled:hover{background:#262626!important}.tox .tox-split-button:focus{background:#262626!important}.tox .tox-split-button__chevron{width:16px!important}.tox .tox-tbtn:active{background:#262626!important}.tox .tox-tbtn:focus{background:#313131!important}.tox .tox-toolbar__group{margin:0!important;height:30px!important}.tox-sidebar-wrap{color:#fff}.tox.tox-tinymce-aux .tox-toolbar__overflow{background-color:#363636!important;border:none!important;border-radius:4px!important;padding-top:7px!important;margin-bottom:6px!important}.tox .tox-toolbar__overflow{background:unset!important;height:39px!important}.tox .tox-menu{border:none!important;box-shadow:0 3px 12px #000000e6!important;background-color:#262626!important;margin-bottom:10px!important}.tox .tox-collection__item-checkmark svg,.tox .tox-collection__item-icon svg{fill:#fff!important}.tox .tox-collection--toolbar .tox-collection__item--active:not(.tox-collection__item--enabled),.tox .tox-collection--toolbar .tox-collection__item--active:not(.tox-collection__item--enabled) .tox-collection__item-icon svg,.tox .tox-collection--toolbar .tox-collection__item--active:not(.tox-collection__item--enabled) .tox-collection__item-checkmark svg{background-color:#262626!important;fill:#fff!important}.tox .tox-collection--toolbar .tox-collection__item:hover,.tox .tox-collection--toolbar .tox-collection__item:hover .tox-collection__item-icon svg,.tox .tox-collection--toolbar .tox-collection__item:hover .tox-collection__item-checkmark svg{fill:#00a2d1!important;background-color:#313131!important}.tox .tox-collection--toolbar .tox-collection__item--enabled{background-color:#313131!important}.tox .tox-collection--toolbar .tox-collection__item--enabled .tox-collection__item-checkmark svg,.tox .tox-collection--toolbar .tox-collection__item--enabled .tox-collection__item-icon svg{fill:#00a2d1!important;background-color:#313131!important}.tox .tox-button{background-color:#00a2d1!important;border-color:#00a2d1!important}.tox .tox-button:hover:not(:disabled){background-color:#1c6ca1!important;border-color:#1c6ca1!important}.tox .tox-button--naked:hover:not(:disabled){background-color:#262626!important;border-color:#262626!important}.tox .tox-button--naked:not(:disabled){background-color:transparent!important;border-color:transparent!important}.tox .tox-button--icon .tox-icon svg,.tox .tox-button.tox-button--icon .tox-icon svg,.tox .tox-button.tox-button--secondary.tox-button--icon .tox-icon svg{fill:#fff!important}.tox .tox-dialog__header{background-color:#313131!important;border-bottom:none!important;color:#fff!important}.tox .tox-dialog__body{background-color:#313131!important}.tox .tox-dialog__body-nav-item{color:#fff!important}.tox .tox-label,.tox .tox-toolbar-label{color:#fff!important;margin-bottom:4px!important}.tox .tox-textarea,.tox .tox-textfield,.tox .tox-toolbar-textfield{background-color:#262626!important;border-color:#262626!important;border-radius:6px!important;color:#fff!important;font-size:12px!important;min-height:24px!important;padding:2px 4.75px!important}.tox .tox-dialog__title{font-size:16px!important}.tox .tox-dropzone{background:#363636!important;border:2px dashed #262626!important}.tox .tox-dropzone p{color:#999!important}.tox .tox-button--secondary{background-color:#313131!important;border-color:#313131!important;border-radius:4px!important;color:#fff!important}.tox .tox-button--secondary:hover:not(:disabled){background-color:#262626!important;border-color:#262626!important;color:#fff!important}.tox .tox-button--naked:active:not(:disabled){background-color:#262626!important;border-color:#262626!important}.tox .tox-dialog__footer{background-color:#313131!important;border-top:1px solid #363636!important}.tox .tox-dialog__body-nav-item--active{border-bottom:2px solid #207ab7!important;color:#207ab7!important}.tox .tox-tbtn--disabled,.tox .tox-tbtn--disabled:hover,.tox .tox-tbtn:disabled,.tox .tox-tbtn:disabled:hover{background-color:#313131!important}.tox .tox-tbtn--disabled svg,.tox .tox-tbtn--disabled:hover svg,.tox .tox-tbtn:disabled svg,.tox .tox-tbtn:disabled:hover svg{fill:#666!important}.bps-editor-disabled .tox:not([dir=rtl]) .tox-toolbar__group:not(:last-of-type){border-color:#666!important}[title=\"Align right\"],[title=\"Align left\"],[title=\"Align center\"],[title=Justify]{top:-1px!important}\n"] }]
        }], ctorParameters: () => [], propDecorators: { lazyLoaded: [{
                type: Input
            }], oninit: [{
                type: Output
            }], onchange: [{
                type: Output
            }], onblur: [{
                type: Output
            }], onkeyup: [{
                type: Output
            }], disabled: [{
                type: Input
            }], height: [{
                type: Input
            }], editorID: [{
                type: Input
            }], statusbar: [{
                type: Input
            }], resize: [{
                type: Input
            }], toolbarmobile: [{
                type: Input
            }], toolbar: [{
                type: Input
            }], tinyMceSettings: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXRleHQtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXRleHQtZWRpdG9yL2Jwcy10ZXh0LWVkaXRvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy10ZXh0LWVkaXRvci9icHMtdGV4dC1lZGl0b3IuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQzVILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQVd2RCxNQUFNLE9BQU8sc0JBQXNCO0lBa0JqQztRQWhCQSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ00sZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNsQyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDcEQsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RELFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNwRCxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQyxXQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxVQUFVLENBQUM7UUFDdEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLDRDQUE0QztRQUNuQyxrQkFBYSxHQUFHLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFB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TTtzQkFBZixNQUFNO2dCQUNHLFFBQVE7c0JBQWpCLE1BQU07Z0JBQ0csTUFBTTtzQkFBZixNQUFNO2dCQUNHLE9BQU87c0JBQWhCLE1BQU07Z0JBQ2tCLFFBQVE7c0JBQWhDLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBRUcsYUFBYTtzQkFBckIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT3V0cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuZGVjbGFyZSB2YXIgdGlueW1jZTogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZXhwb3J0QXM6ICdicHNUZXh0RWRpdG9yJyxcclxuICBzZWxlY3RvcjogJ2Jwcy10ZXh0LWVkaXRvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy10ZXh0LWVkaXRvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnBzLXRleHQtZWRpdG9yLmNvbXBvbmVudC5jc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNUZXh0RWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBzaG93RWRpdG9yID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxhenlMb2FkZWQgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgb25pbml0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25ibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmtleXVwOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGhlaWdodCA9ICcyNTBweCc7XHJcbiAgQElucHV0KCkgZWRpdG9ySUQgPSAnbXlFZGl0b3InO1xyXG4gIEBJbnB1dCgpIHN0YXR1c2JhciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHJlc2l6ZSA9IGZhbHNlO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgQElucHV0KCkgdG9vbGJhcm1vYmlsZSA9IFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZXRocm91Z2gnLCAnYWxpZ25sZWZ0JywgJ2FsaWduY2VudGVyJywgJ2FsaWducmlnaHQnLCAnYWxpZ25qdXN0aWZ5JywgJ2J1bGxpc3QnLCAnbnVtbGlzdCcsICdmb3JlY29sb3InXTtcclxuICBASW5wdXQoKSB0b29sYmFyID0gJ2JvbGQgaXRhbGljIHVuZGVybGluZSBmb3JlY29sb3IgfCBzdHJpa2V0aHJvdWdoIGJhY2tjb2xvciB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IGFsaWduanVzdGlmeSB8IGJ1bGxpc3QgbnVtbGlzdCBpbWFnZSc7XHJcbiAgQElucHV0KCkgdGlueU1jZVNldHRpbmdzITogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICghdGhpcy5sYXp5TG9hZGVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdFRpbnlNQ0UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluaXRUaW55TUNFKCkge1xyXG4gICAgaWYgKHRoaXMudGlueU1jZVNldHRpbmdzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy50aW55TWNlU2V0dGluZ3MgPSB7XHJcbiAgICAgICAgbW9iaWxlOiB7XHJcbiAgICAgICAgICB0aGVtZTogJ21vYmlsZScsXHJcbiAgICAgICAgICBwbHVnaW5zOiBbJ2ltYWdlIHRhYmxlIHRleHRjb2xvciBsaXN0cyBhZHZsaXN0J10sXHJcbiAgICAgICAgICB0b29sYmFyOiB0aGlzLnRvb2xiYXJtb2JpbGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1lbnViYXI6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRfY3NzOiAnL2Fzc2V0cy90aW55LmNzcycsXHJcbiAgICAgICAgaW1hZ2VfdGl0bGU6IHRydWUsXHJcbiAgICAgICAgdG9vbGJhcl9sb2NhdGlvbjogJ2JvdHRvbScsXHJcbiAgICAgICAgcmVzaXplOiB0aGlzLnJlc2l6ZSxcclxuICAgICAgICBhdXRvbWF0aWNfdXBsb2FkczogdHJ1ZSxcclxuICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgIHN0YXR1c2JhcjogdGhpcy5zdGF0dXNiYXIsXHJcbiAgICAgICAgZmlsZV9waWNrZXJfdHlwZXM6ICdpbWFnZScsXHJcbiAgICAgICAgaW1hZ2VzX3VwbG9hZF91cmw6ICcjJyxcclxuICAgICAgICBzZXR1cDogKGVkaXRvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICBlZGl0b3Iub24oJ2luaXQnLCAob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlRWRpdG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5vbmluaXQuZW1pdChvYmopO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBlZGl0b3Iub24oJ2JsdXInLCAob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25ibHVyLmVtaXQob2JqKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZWRpdG9yLm9uKCdrZXl1cCcsIChvYmopID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbmtleXVwLmVtaXQob2JqKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZWRpdG9yLm9uKCdDaGFuZ2UnLCAob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25jaGFuZ2UuZW1pdChvYmopO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2xvcl9tYXA6IFtcclxuICAgICAgICAgIFwiZTk0YzBhXCIsIFwiT3JhbmdlXCIsXHJcbiAgICAgICAgICBcIjAwYTJkMVwiLCBcIkJsdWVcIixcclxuICAgICAgICAgIFwiN2JjMDUzXCIsIFwiR3JlZW5cIixcclxuICAgICAgICAgIFwiZDgwZjBmXCIsIFwiUmVkXCIsXHJcbiAgICAgICAgICBcImU5ZDkwYVwiLCBcIlllbGxvd1wiLFxyXG4gICAgICAgICAgXCJmZmZmZmZcIiwgXCJXaGl0ZVwiXHJcbiAgICAgICAgXSxcclxuICAgICAgICBwbHVnaW5zOiBbJ2ltYWdlIHRhYmxlIHRleHRjb2xvciBsaXN0cyBhZHZsaXN0J10sXHJcbiAgICAgICAgdG9vbGJhcjogdGhpcy50b29sYmFyXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2hvd0VkaXRvciA9IHRydWU7XHJcbiAgICB9LCAxMDApO1xyXG4gIH1cclxuXHJcbiAgZGlzYWJsZUVkaXRvcigpIHtcclxuICAgIHRpbnltY2UuZ2V0KHRoaXMuZWRpdG9ySUQpLm1vZGUuc2V0KCdyZWFkb25seScpO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlRWRpdG9yKCkge1xyXG4gICAgdGlueW1jZS5nZXQodGhpcy5lZGl0b3JJRCkubW9kZS5zZXQoJ2Rlc2lnbicpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKGNoYW5nZXMuZGlzYWJsZWQgIT09IG51bGwgJiYgY2hhbmdlcy5kaXNhYmxlZCAhPT0gdW5kZWZpbmVkICYmIHRpbnltY2UuZ2V0KHRoaXMuZWRpdG9ySUQpKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlRWRpdG9yKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVFZGl0b3IoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmxhenlMb2FkZWQgIT09IG51bGwgJiYgY2hhbmdlcy5sYXp5TG9hZGVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgaWYgKCF0aGlzLmxhenlMb2FkZWQpIHtcclxuICAgICAgICB0aGlzLmluaXRUaW55TUNFKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGlueW1jZS5nZXQodGhpcy5lZGl0b3JJRCkpIHtcclxuICAgICAgICB0aGlzLnNob3dFZGl0b3IgPSBmYWxzZTtcclxuICAgICAgICB0aW55bWNlLmdldCh0aGlzLmVkaXRvcklEKS5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiPGVkaXRvciBbY2xhc3MuYnBzLWVkaXRvci1kaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgW2lkXT1cImVkaXRvcklEXCJcclxuICAgICAgICAqbmdJZj1cInNob3dFZGl0b3JcIlxyXG4gICAgICAgIFtpbml0XT1cInRpbnlNY2VTZXR0aW5nc1wiXHJcbiAgICAgICAgY2xhc3M9XCJicHMtZWRpdG9yXCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj48L2VkaXRvcj5cclxuIl19