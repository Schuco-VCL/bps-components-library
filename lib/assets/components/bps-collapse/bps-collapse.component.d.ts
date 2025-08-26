import { NzConfigService } from '../bps-tree/tree/config.service';
import { BpsCollapsePanelComponent } from './bps-collapse-panel.component';
import * as i0 from "@angular/core";
export declare class BpsCollapseComponent {
    nzConfigService: NzConfigService;
    private listOfNzCollapsePanelComponent;
    bpsAccordion: boolean;
    bpsBordered: boolean;
    constructor(nzConfigService: NzConfigService);
    addPanel(value: BpsCollapsePanelComponent): void;
    removePanel(value: BpsCollapsePanelComponent): void;
    click(collapse: BpsCollapsePanelComponent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsCollapseComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsCollapseComponent, "bps-collapse", ["bpsCollapse"], { "bpsAccordion": { "alias": "bpsAccordion"; "required": false; }; "bpsBordered": { "alias": "bpsBordered"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=bps-collapse.component.d.ts.map