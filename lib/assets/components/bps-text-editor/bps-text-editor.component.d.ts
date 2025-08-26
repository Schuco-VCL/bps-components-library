import { OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BpsTextEditorComponent implements OnInit, OnChanges {
    showEditor: boolean;
    lazyLoaded: boolean;
    oninit: EventEmitter<any>;
    onchange: EventEmitter<any>;
    onblur: EventEmitter<any>;
    onkeyup: EventEmitter<any>;
    disabled: boolean;
    height: string;
    editorID: string;
    statusbar: boolean;
    resize: boolean;
    toolbarmobile: string[];
    toolbar: string;
    tinyMceSettings: any;
    constructor();
    ngOnInit(): void;
    initTinyMCE(): void;
    disableEditor(): void;
    enableEditor(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsTextEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsTextEditorComponent, "bps-text-editor", ["bpsTextEditor"], { "lazyLoaded": { "alias": "lazyLoaded"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "height": { "alias": "height"; "required": false; }; "editorID": { "alias": "editorID"; "required": false; }; "statusbar": { "alias": "statusbar"; "required": false; }; "resize": { "alias": "resize"; "required": false; }; "toolbarmobile": { "alias": "toolbarmobile"; "required": false; }; "toolbar": { "alias": "toolbar"; "required": false; }; "tinyMceSettings": { "alias": "tinyMceSettings"; "required": false; }; }, { "oninit": "oninit"; "onchange": "onchange"; "onblur": "onblur"; "onkeyup": "onkeyup"; }, never, never, false, never>;
}
//# sourceMappingURL=bps-text-editor.component.d.ts.map