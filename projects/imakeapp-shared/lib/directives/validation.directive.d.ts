import { validation_options_interface } from "../interfaces/validation.interface";
import * as i0 from "@angular/core";
export declare class Validation_Directive {
    validate: validation_options_interface;
    mutate: any;
    input(): void;
    focusout(): void;
    onTouchStart(): void;
    ontouchend(): void;
    validate_form_control(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Validation_Directive, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<Validation_Directive, "[validate]", never, { "validate": { "alias": "validate"; "required": false; }; "mutate": { "alias": "mutate"; "required": false; }; }, {}, never, never, false, never>;
}
