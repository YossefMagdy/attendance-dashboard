import { PipeTransform } from "@angular/core";
import { LanguageService } from "../services/language.service";
import * as i0 from "@angular/core";
export declare class LanguagePipe implements PipeTransform {
    private lang_s;
    constructor(lang_s: LanguageService);
    transform(word: any, ...args: any[]): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<LanguagePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<LanguagePipe, "translate", false>;
}
