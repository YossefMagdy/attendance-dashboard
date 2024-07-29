import { OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import * as i0 from "@angular/core";
export declare class ProfileOrdersSkeletonComponent implements OnInit {
    private lang_s;
    lang: string;
    constructor(lang_s: LanguageService);
    ngOnInit(): void;
    set_lang(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProfileOrdersSkeletonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProfileOrdersSkeletonComponent, "lib-profile-orders-skeleton", never, {}, {}, never, never, false, never>;
}
