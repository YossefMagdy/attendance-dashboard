import { EventEmitter, OnInit } from "@angular/core";
import { Iinputs } from "./Interfaces/inputInterface";
import { ActivatedRoute, Router } from "@angular/router";
import * as i0 from "@angular/core";
export declare class GenericFilterComponent implements OnInit {
    private activatedRoute;
    private router;
    inputs: Iinputs[];
    filterOnStart: boolean;
    emptyFilter: boolean;
    filter: EventEmitter<any>;
    onDropDownChange: EventEmitter<any>;
    outputObj: any;
    outputObjCopy: any;
    queryParams: any;
    constructor(activatedRoute: ActivatedRoute, router: Router);
    ngOnInit(): void;
    handleQueryParams(): void;
    deleteEmptyKeys(key: string): void;
    formatDates(i: number): void;
    emitFilterData(buttonType: string): void;
    handleFilterData(): void;
    emitDropDownValue(object: any, id: any): void;
    resetData(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GenericFilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GenericFilterComponent, "app-generic-filter", never, { "inputs": { "alias": "inputs"; "required": false; }; "filterOnStart": { "alias": "filterOnStart"; "required": false; }; "emptyFilter": { "alias": "emptyFilter"; "required": false; }; }, { "filter": "filter"; "onDropDownChange": "onDropDownChange"; }, never, never, false, never>;
}
