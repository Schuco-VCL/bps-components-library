import { ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { NzListGrid } from 'ng-zorro-antd/list';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { NzDirectionVHType, NzSizeLDSType } from '../core/types';
import * as i0 from "@angular/core";
export type BpsListType = 'variation1' | 'variation2' | 'variation3' | 'variation4' | 'variation5' | 'variation6';
export declare class BpsListComponent implements OnInit, OnChanges, OnDestroy {
    private el;
    private updateHostClassService;
    bpsDataSource: any[];
    bpsBordered: boolean;
    bpsDisabled: boolean;
    bpsGrid: NzListGrid;
    bpsListType: BpsListType;
    bpsHeader: string | TemplateRef<void>;
    bpsFooter: string | TemplateRef<void>;
    bpsItemLayout: NzDirectionVHType;
    bpsRenderItem: TemplateRef<void>;
    bpsLoading: boolean;
    bpsLoadMore: TemplateRef<void>;
    bpsPagination: TemplateRef<void>;
    bpsSize: NzSizeLDSType;
    bpsSplit: boolean;
    bpsNoResult: string | TemplateRef<void>;
    private prefixCls;
    private _setClassMap;
    private itemLayoutNotifySource;
    get itemLayoutNotify$(): Observable<NzDirectionVHType>;
    constructor(el: ElementRef, updateHostClassService: NzUpdateHostClassService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsListComponent, "bps-list, [bps-list]", ["bpsList"], { "bpsDataSource": { "alias": "bpsDataSource"; "required": false; }; "bpsBordered": { "alias": "bpsBordered"; "required": false; }; "bpsDisabled": { "alias": "bpsDisabled"; "required": false; }; "bpsGrid": { "alias": "bpsGrid"; "required": false; }; "bpsListType": { "alias": "bpsListType"; "required": false; }; "bpsHeader": { "alias": "bpsHeader"; "required": false; }; "bpsFooter": { "alias": "bpsFooter"; "required": false; }; "bpsItemLayout": { "alias": "bpsItemLayout"; "required": false; }; "bpsRenderItem": { "alias": "bpsRenderItem"; "required": false; }; "bpsLoading": { "alias": "bpsLoading"; "required": false; }; "bpsLoadMore": { "alias": "bpsLoadMore"; "required": false; }; "bpsPagination": { "alias": "bpsPagination"; "required": false; }; "bpsSize": { "alias": "bpsSize"; "required": false; }; "bpsSplit": { "alias": "bpsSplit"; "required": false; }; "bpsNoResult": { "alias": "bpsNoResult"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=bps-list.component.d.ts.map