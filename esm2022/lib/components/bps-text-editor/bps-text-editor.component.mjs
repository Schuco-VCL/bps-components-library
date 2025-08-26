import { __decorate } from "tslib";
import { Component, ViewEncapsulation, Output, Input, EventEmitter } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@tinymce/tinymce-angular";
function BpsTextEditorComponent_editor_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "editor", 1);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("bps-editor-disabled", ctx_r0.disabled);
    i0.ɵɵproperty("id", ctx_r0.editorID)("init", ctx_r0.tinyMceSettings)("disabled", ctx_r0.disabled);
} }
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
    static { this.ɵfac = function BpsTextEditorComponent_Factory(t) { return new (t || BpsTextEditorComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsTextEditorComponent, selectors: [["bps-text-editor"]], inputs: { lazyLoaded: "lazyLoaded", disabled: "disabled", height: "height", editorID: "editorID", statusbar: "statusbar", resize: "resize", toolbarmobile: "toolbarmobile", toolbar: "toolbar", tinyMceSettings: "tinyMceSettings" }, outputs: { oninit: "oninit", onchange: "onchange", onblur: "onblur", onkeyup: "onkeyup" }, exportAs: ["bpsTextEditor"], features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "bps-editor", 3, "bps-editor-disabled", "id", "init", "disabled", 4, "ngIf"], [1, "bps-editor", 3, "id", "init", "disabled"]], template: function BpsTextEditorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BpsTextEditorComponent_editor_0_Template, 1, 5, "editor", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.showEditor);
        } }, dependencies: [i1.NgIf, i2.EditorComponent], styles: [".tox-tinymce{border:none!important;border-radius:4px!important}.tox .tox-edit-area__iframe{background-color:#313131!important}.mce-content-body{color:#fff}.tox .tox-toolbar__primary{background-color:#313131!important}.tox:not([dir=rtl]) .tox-toolbar__group:not(:last-of-type){border-right:1px solid #ffffff!important}.tox .tox-tbtn svg{fill:#fff!important;transform:scale(.74)!important}.tox .tox-split-button__chevron svg{fill:#fff!important}.tox .tox-tbtn:hover svg{fill:#00a2d1!important}.tox .tox-split-button:hover{box-shadow:none!important}.tox-tinymce:not(.tox-tinymce-inline) .tox-editor-header:not(:first-child) .tox-toolbar-overlord:first-child .tox-toolbar__primary{border-top:none!important;background:#313131!important;padding-bottom:10px}.tox .tox-tbtn{height:34px!important;width:25px!important;margin:0!important;top:-3px;position:relative}.tox .tox-split-button{height:34px!important;position:relative!important;top:-3px!important;padding:3px 0!important}.tox .tox-tbtn:hover,.tox .tox-tbtn--enabled,.tox .tox-split-button:hover,.tox .tox-split-button--enabled,.tox .tox-tbtn--enabled:hover{background:#262626!important}.tox .tox-split-button:focus{background:#262626!important}.tox .tox-split-button__chevron{width:16px!important}.tox .tox-tbtn:active{background:#262626!important}.tox .tox-tbtn:focus{background:#313131!important}.tox .tox-toolbar__group{margin:0!important;height:30px!important}.tox-sidebar-wrap{color:#fff}.tox.tox-tinymce-aux .tox-toolbar__overflow{background-color:#363636!important;border:none!important;border-radius:4px!important;padding-top:7px!important;margin-bottom:6px!important}.tox .tox-toolbar__overflow{background:unset!important;height:39px!important}.tox .tox-menu{border:none!important;box-shadow:0 3px 12px #000000e6!important;background-color:#262626!important;margin-bottom:10px!important}.tox .tox-collection__item-checkmark svg,.tox .tox-collection__item-icon svg{fill:#fff!important}.tox .tox-collection--toolbar .tox-collection__item--active:not(.tox-collection__item--enabled),.tox .tox-collection--toolbar .tox-collection__item--active:not(.tox-collection__item--enabled) .tox-collection__item-icon svg,.tox .tox-collection--toolbar .tox-collection__item--active:not(.tox-collection__item--enabled) .tox-collection__item-checkmark svg{background-color:#262626!important;fill:#fff!important}.tox .tox-collection--toolbar .tox-collection__item:hover,.tox .tox-collection--toolbar .tox-collection__item:hover .tox-collection__item-icon svg,.tox .tox-collection--toolbar .tox-collection__item:hover .tox-collection__item-checkmark svg{fill:#00a2d1!important;background-color:#313131!important}.tox .tox-collection--toolbar .tox-collection__item--enabled{background-color:#313131!important}.tox .tox-collection--toolbar .tox-collection__item--enabled .tox-collection__item-checkmark svg,.tox .tox-collection--toolbar .tox-collection__item--enabled .tox-collection__item-icon svg{fill:#00a2d1!important;background-color:#313131!important}.tox .tox-button{background-color:#00a2d1!important;border-color:#00a2d1!important}.tox .tox-button:hover:not(:disabled){background-color:#1c6ca1!important;border-color:#1c6ca1!important}.tox .tox-button--naked:hover:not(:disabled){background-color:#262626!important;border-color:#262626!important}.tox .tox-button--naked:not(:disabled){background-color:transparent!important;border-color:transparent!important}.tox .tox-button--icon .tox-icon svg,.tox .tox-button.tox-button--icon .tox-icon svg,.tox .tox-button.tox-button--secondary.tox-button--icon .tox-icon svg{fill:#fff!important}.tox .tox-dialog__header{background-color:#313131!important;border-bottom:none!important;color:#fff!important}.tox .tox-dialog__body{background-color:#313131!important}.tox .tox-dialog__body-nav-item{color:#fff!important}.tox .tox-label,.tox .tox-toolbar-label{color:#fff!important;margin-bottom:4px!important}.tox .tox-textarea,.tox .tox-textfield,.tox .tox-toolbar-textfield{background-color:#262626!important;border-color:#262626!important;border-radius:6px!important;color:#fff!important;font-size:12px!important;min-height:24px!important;padding:2px 4.75px!important}.tox .tox-dialog__title{font-size:16px!important}.tox .tox-dropzone{background:#363636!important;border:2px dashed #262626!important}.tox .tox-dropzone p{color:#999!important}.tox .tox-button--secondary{background-color:#313131!important;border-color:#313131!important;border-radius:4px!important;color:#fff!important}.tox .tox-button--secondary:hover:not(:disabled){background-color:#262626!important;border-color:#262626!important;color:#fff!important}.tox .tox-button--naked:active:not(:disabled){background-color:#262626!important;border-color:#262626!important}.tox .tox-dialog__footer{background-color:#313131!important;border-top:1px solid #363636!important}.tox .tox-dialog__body-nav-item--active{border-bottom:2px solid #207ab7!important;color:#207ab7!important}.tox .tox-tbtn--disabled,.tox .tox-tbtn--disabled:hover,.tox .tox-tbtn:disabled,.tox .tox-tbtn:disabled:hover{background-color:#313131!important}.tox .tox-tbtn--disabled svg,.tox .tox-tbtn--disabled:hover svg,.tox .tox-tbtn:disabled svg,.tox .tox-tbtn:disabled:hover svg{fill:#666!important}.bps-editor-disabled .tox:not([dir=rtl]) .tox-toolbar__group:not(:last-of-type){border-color:#666!important}[title=\"Align right\"],[title=\"Align left\"],[title=\"Align center\"],[title=Justify]{top:-1px!important}\n"], encapsulation: 2 }); }
}
__decorate([
    InputBoolean()
], BpsTextEditorComponent.prototype, "lazyLoaded", void 0);
__decorate([
    InputBoolean()
], BpsTextEditorComponent.prototype, "disabled", void 0);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsTextEditorComponent, [{
        type: Component,
        args: [{ exportAs: 'bpsTextEditor', selector: 'bps-text-editor', encapsulation: ViewEncapsulation.None, template: "<editor [class.bps-editor-disabled]=\"disabled\"\r\n        [id]=\"editorID\"\r\n        *ngIf=\"showEditor\"\r\n        [init]=\"tinyMceSettings\"\r\n        class=\"bps-editor\"\r\n        [disabled]=\"disabled\"></editor>\r\n", styles: [".tox-tinymce{border:none!important;border-radius:4px!important}.tox .tox-edit-area__iframe{background-color:#313131!important}.mce-content-body{color:#fff}.tox .tox-toolbar__primary{background-color:#313131!important}.tox:not([dir=rtl]) .tox-toolbar__group:not(:last-of-type){border-right:1px solid #ffffff!important}.tox .tox-tbtn svg{fill:#fff!important;transform:scale(.74)!important}.tox .tox-split-button__chevron svg{fill:#fff!important}.tox .tox-tbtn:hover svg{fill:#00a2d1!important}.tox .tox-split-button:hover{box-shadow:none!important}.tox-tinymce:not(.tox-tinymce-inline) .tox-editor-header:not(:first-child) .tox-toolbar-overlord:first-child .tox-toolbar__primary{border-top:none!important;background:#313131!important;padding-bottom:10px}.tox .tox-tbtn{height:34px!important;width:25px!important;margin:0!important;top:-3px;position:relative}.tox .tox-split-button{height:34px!important;position:relative!important;top:-3px!important;padding:3px 0!important}.tox .tox-tbtn:hover,.tox .tox-tbtn--enabled,.tox .tox-split-button:hover,.tox .tox-split-button--enabled,.tox .tox-tbtn--enabled:hover{background:#262626!important}.tox .tox-split-button:focus{background:#262626!important}.tox .tox-split-button__chevron{width:16px!important}.tox .tox-tbtn:active{background:#262626!important}.tox .tox-tbtn:focus{background:#313131!important}.tox .tox-toolbar__group{margin:0!important;height:30px!important}.tox-sidebar-wrap{color:#fff}.tox.tox-tinymce-aux .tox-toolbar__overflow{background-color:#363636!important;border:none!important;border-radius:4px!important;padding-top:7px!important;margin-bottom:6px!important}.tox .tox-toolbar__overflow{background:unset!important;height:39px!important}.tox .tox-menu{border:none!important;box-shadow:0 3px 12px #000000e6!important;background-color:#262626!important;margin-bottom:10px!important}.tox .tox-collection__item-checkmark svg,.tox .tox-collection__item-icon svg{fill:#fff!important}.tox .tox-collection--toolbar .tox-collection__item--active:not(.tox-collection__item--enabled),.tox .tox-collection--toolbar .tox-collection__item--active:not(.tox-collection__item--enabled) .tox-collection__item-icon svg,.tox .tox-collection--toolbar .tox-collection__item--active:not(.tox-collection__item--enabled) .tox-collection__item-checkmark svg{background-color:#262626!important;fill:#fff!important}.tox .tox-collection--toolbar .tox-collection__item:hover,.tox .tox-collection--toolbar .tox-collection__item:hover .tox-collection__item-icon svg,.tox .tox-collection--toolbar .tox-collection__item:hover .tox-collection__item-checkmark svg{fill:#00a2d1!important;background-color:#313131!important}.tox .tox-collection--toolbar .tox-collection__item--enabled{background-color:#313131!important}.tox .tox-collection--toolbar .tox-collection__item--enabled .tox-collection__item-checkmark svg,.tox .tox-collection--toolbar .tox-collection__item--enabled .tox-collection__item-icon svg{fill:#00a2d1!important;background-color:#313131!important}.tox .tox-button{background-color:#00a2d1!important;border-color:#00a2d1!important}.tox .tox-button:hover:not(:disabled){background-color:#1c6ca1!important;border-color:#1c6ca1!important}.tox .tox-button--naked:hover:not(:disabled){background-color:#262626!important;border-color:#262626!important}.tox .tox-button--naked:not(:disabled){background-color:transparent!important;border-color:transparent!important}.tox .tox-button--icon .tox-icon svg,.tox .tox-button.tox-button--icon .tox-icon svg,.tox .tox-button.tox-button--secondary.tox-button--icon .tox-icon svg{fill:#fff!important}.tox .tox-dialog__header{background-color:#313131!important;border-bottom:none!important;color:#fff!important}.tox .tox-dialog__body{background-color:#313131!important}.tox .tox-dialog__body-nav-item{color:#fff!important}.tox .tox-label,.tox .tox-toolbar-label{color:#fff!important;margin-bottom:4px!important}.tox .tox-textarea,.tox .tox-textfield,.tox .tox-toolbar-textfield{background-color:#262626!important;border-color:#262626!important;border-radius:6px!important;color:#fff!important;font-size:12px!important;min-height:24px!important;padding:2px 4.75px!important}.tox .tox-dialog__title{font-size:16px!important}.tox .tox-dropzone{background:#363636!important;border:2px dashed #262626!important}.tox .tox-dropzone p{color:#999!important}.tox .tox-button--secondary{background-color:#313131!important;border-color:#313131!important;border-radius:4px!important;color:#fff!important}.tox .tox-button--secondary:hover:not(:disabled){background-color:#262626!important;border-color:#262626!important;color:#fff!important}.tox .tox-button--naked:active:not(:disabled){background-color:#262626!important;border-color:#262626!important}.tox .tox-dialog__footer{background-color:#313131!important;border-top:1px solid #363636!important}.tox .tox-dialog__body-nav-item--active{border-bottom:2px solid #207ab7!important;color:#207ab7!important}.tox .tox-tbtn--disabled,.tox .tox-tbtn--disabled:hover,.tox .tox-tbtn:disabled,.tox .tox-tbtn:disabled:hover{background-color:#313131!important}.tox .tox-tbtn--disabled svg,.tox .tox-tbtn--disabled:hover svg,.tox .tox-tbtn:disabled svg,.tox .tox-tbtn:disabled:hover svg{fill:#666!important}.bps-editor-disabled .tox:not([dir=rtl]) .tox-toolbar__group:not(:last-of-type){border-color:#666!important}[title=\"Align right\"],[title=\"Align left\"],[title=\"Align center\"],[title=Justify]{top:-1px!important}\n"] }]
    }], () => [], { lazyLoaded: [{
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsTextEditorComponent, { className: "BpsTextEditorComponent", filePath: "lib\\components\\bps-text-editor\\bps-text-editor.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLXRleHQtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXRleHQtZWRpdG9yL2Jwcy10ZXh0LWVkaXRvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy10ZXh0LWVkaXRvci9icHMtdGV4dC1lZGl0b3IuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQzVILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7SUNEdkQsNEJBS3VDOzs7SUFML0Isc0RBQXNDO0lBS3RDLEFBRkEsQUFGQSxvQ0FBZSxnQ0FFUyw2QkFFSDs7QURPN0IsTUFBTSxPQUFPLHNCQUFzQjtJQWtCakM7UUFoQkEsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNNLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbEMsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BELGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN0RCxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDcEQsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakMsV0FBTSxHQUFHLE9BQU8sQ0FBQztRQUNqQixhQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUN4Qiw0Q0FBNEM7UUFDbkMs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QkFDRSxlQUFlLFlBQ2YsaUJBQWlCLGlCQUdaLGlCQUFpQixDQUFDLElBQUk7b0JBS1osVUFBVTtrQkFBbEMsS0FBSztZQUNJLE1BQU07a0JBQWYsTUFBTTtZQUNHLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxNQUFNO2tCQUFmLE1BQU07WUFDRyxPQUFPO2tCQUFoQixNQUFNO1lBQ2tCLFFBQVE7a0JBQWhDLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUVHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLOztrRkFoQkssc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPdXRwdXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxyXG5kZWNsYXJlIHZhciB0aW55bWNlOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBleHBvcnRBczogJ2Jwc1RleHRFZGl0b3InLFxyXG4gIHNlbGVjdG9yOiAnYnBzLXRleHQtZWRpdG9yJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnBzLXRleHQtZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9icHMtdGV4dC1lZGl0b3IuY29tcG9uZW50LmNzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc1RleHRFZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIHNob3dFZGl0b3IgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbGF6eUxvYWRlZCA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBvbmluaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9ua2V5dXA6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaGVpZ2h0ID0gJzI1MHB4JztcclxuICBASW5wdXQoKSBlZGl0b3JJRCA9ICdteUVkaXRvcic7XHJcbiAgQElucHV0KCkgc3RhdHVzYmFyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcmVzaXplID0gZmFsc2U7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcclxuICBASW5wdXQoKSB0b29sYmFybW9iaWxlID0gWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtldGhyb3VnaCcsICdhbGlnbmxlZnQnLCAnYWxpZ25jZW50ZXInLCAnYWxpZ25yaWdodCcsICdhbGlnbmp1c3RpZnknLCAnYnVsbGlzdCcsICdudW1saXN0JywgJ2ZvcmVjb2xvciddO1xyXG4gIEBJbnB1dCgpIHRvb2xiYXIgPSAnYm9sZCBpdGFsaWMgdW5kZXJsaW5lIGZvcmVjb2xvciB8IHN0cmlrZXRocm91Z2ggYmFja2NvbG9yIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgYWxpZ25qdXN0aWZ5IHwgYnVsbGlzdCBudW1saXN0IGltYWdlJztcclxuICBASW5wdXQoKSB0aW55TWNlU2V0dGluZ3MhOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKCF0aGlzLmxhenlMb2FkZWQpIHtcclxuICAgICAgdGhpcy5pbml0VGlueU1DRSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdFRpbnlNQ0UoKSB7XHJcbiAgICBpZiAodGhpcy50aW55TWNlU2V0dGluZ3MgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnRpbnlNY2VTZXR0aW5ncyA9IHtcclxuICAgICAgICBtb2JpbGU6IHtcclxuICAgICAgICAgIHRoZW1lOiAnbW9iaWxlJyxcclxuICAgICAgICAgIHBsdWdpbnM6IFsnaW1hZ2UgdGFibGUgdGV4dGNvbG9yIGxpc3RzIGFkdmxpc3QnXSxcclxuICAgICAgICAgIHRvb2xiYXI6IHRoaXMudG9vbGJhcm1vYmlsZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVudWJhcjogZmFsc2UsXHJcbiAgICAgICAgY29udGVudF9jc3M6ICcvYXNzZXRzL3RpbnkuY3NzJyxcclxuICAgICAgICBpbWFnZV90aXRsZTogdHJ1ZSxcclxuICAgICAgICB0b29sYmFyX2xvY2F0aW9uOiAnYm90dG9tJyxcclxuICAgICAgICByZXNpemU6IHRoaXMucmVzaXplLFxyXG4gICAgICAgIGF1dG9tYXRpY191cGxvYWRzOiB0cnVlLFxyXG4gICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgc3RhdHVzYmFyOiB0aGlzLnN0YXR1c2JhcixcclxuICAgICAgICBmaWxlX3BpY2tlcl90eXBlczogJ2ltYWdlJyxcclxuICAgICAgICBpbWFnZXNfdXBsb2FkX3VybDogJyMnLFxyXG4gICAgICAgIHNldHVwOiAoZWRpdG9yOiBhbnkpID0+IHtcclxuICAgICAgICAgIGVkaXRvci5vbignaW5pdCcsIChvYmopID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLmRpc2FibGVFZGl0b3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm9uaW5pdC5lbWl0KG9iaik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGVkaXRvci5vbignYmx1cicsIChvYmopID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbmJsdXIuZW1pdChvYmopO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBlZGl0b3Iub24oJ2tleXVwJywgKG9iaikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9ua2V5dXAuZW1pdChvYmopO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBlZGl0b3Iub24oJ0NoYW5nZScsIChvYmopID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbmNoYW5nZS5lbWl0KG9iaik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbG9yX21hcDogW1xyXG4gICAgICAgICAgXCJlOTRjMGFcIiwgXCJPcmFuZ2VcIixcclxuICAgICAgICAgIFwiMDBhMmQxXCIsIFwiQmx1ZVwiLFxyXG4gICAgICAgICAgXCI3YmMwNTNcIiwgXCJHcmVlblwiLFxyXG4gICAgICAgICAgXCJkODBmMGZcIiwgXCJSZWRcIixcclxuICAgICAgICAgIFwiZTlkOTBhXCIsIFwiWWVsbG93XCIsXHJcbiAgICAgICAgICBcImZmZmZmZlwiLCBcIldoaXRlXCJcclxuICAgICAgICBdLFxyXG4gICAgICAgIHBsdWdpbnM6IFsnaW1hZ2UgdGFibGUgdGV4dGNvbG9yIGxpc3RzIGFkdmxpc3QnXSxcclxuICAgICAgICB0b29sYmFyOiB0aGlzLnRvb2xiYXJcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zaG93RWRpdG9yID0gdHJ1ZTtcclxuICAgIH0sIDEwMCk7XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlRWRpdG9yKCkge1xyXG4gICAgdGlueW1jZS5nZXQodGhpcy5lZGl0b3JJRCkubW9kZS5zZXQoJ3JlYWRvbmx5Jyk7XHJcbiAgfVxyXG5cclxuICBlbmFibGVFZGl0b3IoKSB7XHJcbiAgICB0aW55bWNlLmdldCh0aGlzLmVkaXRvcklEKS5tb2RlLnNldCgnZGVzaWduJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy5kaXNhYmxlZCAhPT0gbnVsbCAmJiBjaGFuZ2VzLmRpc2FibGVkICE9PSB1bmRlZmluZWQgJiYgdGlueW1jZS5nZXQodGhpcy5lZGl0b3JJRCkpIHtcclxuICAgICAgaWYgKGNoYW5nZXMuZGlzYWJsZWQpIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVFZGl0b3IoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVuYWJsZUVkaXRvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMubGF6eUxvYWRlZCAhPT0gbnVsbCAmJiBjaGFuZ2VzLmxhenlMb2FkZWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBpZiAoIXRoaXMubGF6eUxvYWRlZCkge1xyXG4gICAgICAgIHRoaXMuaW5pdFRpbnlNQ0UoKTtcclxuICAgICAgfSBlbHNlIGlmICh0aW55bWNlLmdldCh0aGlzLmVkaXRvcklEKSkge1xyXG4gICAgICAgIHRoaXMuc2hvd0VkaXRvciA9IGZhbHNlO1xyXG4gICAgICAgIHRpbnltY2UuZ2V0KHRoaXMuZWRpdG9ySUQpLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZWRpdG9yIFtjbGFzcy5icHMtZWRpdG9yLWRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICBbaWRdPVwiZWRpdG9ySURcIlxyXG4gICAgICAgICpuZ0lmPVwic2hvd0VkaXRvclwiXHJcbiAgICAgICAgW2luaXRdPVwidGlueU1jZVNldHRpbmdzXCJcclxuICAgICAgICBjbGFzcz1cImJwcy1lZGl0b3JcIlxyXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPjwvZWRpdG9yPlxyXG4iXX0=