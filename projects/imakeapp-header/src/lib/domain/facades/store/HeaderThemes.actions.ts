
import { Action } from "@ngrx/store";
import * as types from './constants/constants';
import { CategoryInterface, CheckVoucherInteface, HeaderTheme1Data, UserAddressInterface, search_result_interface, vendor_branch_inteface } from "../../entites/HeaderThemes.model";





export class GetHeaderTheme implements Action {
    readonly type = types.GetHeaderTheme;
    constructor() { }
}


export class GetHeaderThemeLoaded implements Action {
    readonly type = types.GetHeaderThemeLoaded;
    constructor(public data:HeaderTheme1Data) { }
}


export class toggle_map_action implements Action {
    readonly type = types.toggle_map;
    constructor(public data: boolean) {}
}



export class UPDATE_AUTH_MODAL_STATUS_ACTION implements Action
{

   readonly type: string = types.update_auth_modal_status;
   constructor( public data: boolean ){}

}

export class set_auth_modal_type_action implements Action
{

   readonly type: string = types.set_auth_modal_type;
   constructor( public data: number ){}

}



export class SIGN_OUT_ACTION implements Action
{

   readonly type: string = types.SIGN_OUT;
   constructor(){}

}


export class UPDATE_CART_DISPLAY_STATUS_ACTION implements Action
{

   readonly type: string = types.update_cart_display_status;
   constructor( public data: boolean ){}

}

export class SET_ACTIVE_LOCATION_ACTION implements Action
{

   readonly type: string = types.set_active_location;
   constructor( public data: any ){}

}

export class SHOW_HEADER_CART_ACTION implements Action
{

   readonly type: string = types.show_header_cart;
   constructor( public data: boolean ){}

}


export class SET_REDIRECT_ACTION implements Action
{

   readonly type: string = types.SET_REDIRECT;
   constructor( public data: string ){}

}

export class SIGN_IN_ACTION implements Action
{

   readonly type: string = types.SIGN_IN;
   constructor( public data: any ){}

}



export class Open_Full_Nav implements Action
{

   readonly type: string = types.Open_Full_Nav;
   constructor( public data: boolean ){}

}

export class SET_VOUCHER_PERCENTAGE_ACTION implements Action
{

   readonly type: string = types.set_voucher_percentage;

   constructor(public data: number){}

}

export class SET_ACTIVE_USER_ADDRESS_ACTION implements Action
{

   readonly type: string = types.SET_ACTIVE_USER_ADDRESS;
   constructor( public data: UserAddressInterface ){}

}

export class GET_TAX_AND_DELIEVERY_ACTION implements Action
{

   readonly type: string = types.GET_TAX_AND_DELIEVERY;
   constructor(){}

}

export class SET_VOUCHER_ACTION implements Action
{

   readonly type: string = types.set_voucher;

   constructor(public data: string){}

}




export class CHECK_VOUCHER_ACTION implements Action
{

   readonly type: string = types.CHECK_VOUCHER;

   constructor(public data: CheckVoucherInteface){}

}


export class SET_CART_TOTAL_WITH_VOUCHER_ACTION implements Action
{

   readonly type: string = types.set_cart_total_with_voucher;

   constructor(public data: number){}

}

export class GET_NAV_MENU_ACTION implements Action
{

   readonly type: string = types.GET_NAV_MENU;
   constructor(){}

}

export class GET_NAV_MENU_LOADED_ACTION implements Action
{

   readonly type: string = types.GET_NAV_MENU_LOADED;
   constructor( public data: any ){}

}




export class REMOVE_FROM_CART_ACTION implements Action
{

   readonly type: string = types.remove_from_cart;
   constructor( public data: number ){}

}



export class GET_SITE_THEME_ACTION implements Action
{

   readonly type: string = types.GET_SITE_THEME;
   constructor(){}

}


export class SITE_THEME_LOADED_ACTION implements Action
{
   readonly type: string = types.SITE_THEME_LOADED;
   constructor( public data: any[] ){}
}


export class show_branches_modal_action implements Action
{
   readonly type: string = types.show_branches_modal;
   constructor( public data: boolean ){}
}


export class request_vendor_branches_action implements Action
{
   readonly type: string = types.request_vendor_branches;
   constructor(){}
}

export class set_vendor_branches_action implements Action
{
   readonly type: string = types.set_vendor_branches;
   constructor( public data: vendor_branch_inteface[] ){}
}


export class set_active_branch_action implements Action
{
   readonly type: string = types.set_active_branch;
   constructor( public data: vendor_branch_inteface ){}
}



export class update_mobile_search_bar_display_action implements Action {
   readonly type = types.update_mobile_search_bar_display;
   constructor(public data: boolean) {}
}


export class mobile_searching_action implements Action {
   readonly type = types.mobile_searching;
   constructor(public data: string) {}
}

export class set_mobile_search_results_action implements Action {
   readonly type = types.set_mobile_search_results;
   constructor(public data: search_result_interface[]) {}
}




export type ActionsUnion = GetHeaderTheme | GetHeaderThemeLoaded | toggle_map_action | UPDATE_AUTH_MODAL_STATUS_ACTION;
