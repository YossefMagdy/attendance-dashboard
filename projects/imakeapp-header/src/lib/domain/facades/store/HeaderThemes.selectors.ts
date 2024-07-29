import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HeaderState } from "../../entites/HeaderThemes.model";



export const header_themes_states = createFeatureSelector<HeaderState>('header_themes');



export const HeaderThemes1Selector = createSelector(
    header_themes_states, (header_states) => {
        return header_states.HeaderTheme1!!;
    }
);


export const map_status_selector = createSelector(
    header_themes_states, (header_states) => {
        return header_states.display_map;
    }
);


export const HEADER_AUTH_MODAL_STATUS_SELECTOR = createSelector(
    header_themes_states, (header_states) => {
        return header_states.show_header_auth_modal;
    }
);


export const USER_SELECTOR = createSelector(
    header_themes_states, (header_states) => {
        return header_states.user;
    }
);

export const CART_DISPLAY_STATUS_SELECTOR = createSelector(
    header_themes_states, (header_states) => {
        return header_states.cart_display_status;
    }
);

export const ACTIVE_LOCATION_SELECTOR = createSelector(
    header_themes_states, (header_states) => {
        return header_states.active_location;
    }
);


export const HEADER_CART_SELECTOR = createSelector(
    header_themes_states, (header_states) => {
        return header_states.show_header_cart;
    }
);

export const REDIRECT_SELECTOR = createSelector(
    header_themes_states, (header_states) => {
        return header_states.redirect;
    }
);


export const set_voucher_percentage_selector = createSelector(
    header_themes_states, (header_states) => {
        return header_states.voucher_percentage;
    }
);



export const set_cart_total_with_voucher_selector = createSelector(
    header_themes_states, (header_states) => {
        return header_states.cart_total_with_voucher;
    }
);

export const ACTIVE_USER_ADDRESS_SELECTOR = createSelector(
    header_themes_states, (header_states) => {
        return header_states.active_user_address;
    }
);

export const voucher_selector = createSelector(
    header_themes_states, (header_states) => {
        return header_states.voucher_code;
    }
);

export const CART_TOTAL_SELECTOR = createSelector(
    header_themes_states, (header_states) => {
        return header_states.cart_total;
    }
);

export const NAV_MENU_SELECTOR = createSelector(
    header_themes_states, (header_states)=> {
      return header_states.naviagation_items || [];
    }
);



export const CART_LIST_SELECTOR = createSelector(
    header_themes_states, (header_states) => {
        return header_states.cart_list  || [];
    }
);


export const branches_modal_selector = createSelector(
    header_themes_states, (header_states) => {
        return header_states.branches_modal;
    }
);

export const Is_nav_open = createSelector(
  header_themes_states, (header_states)=> {
    return header_states.is_nav_open || false;
  }
);

export const vendor_branches_selector = createSelector(
    header_themes_states, (header_states) => {
        return header_states.branches_modal?.vendor_branches;
    }
);


export const active_branch_selector = createSelector(
    header_themes_states, (header_states) => {
        return header_states.branches_modal?.active_branch;
    }
);


export const auth_modal_selector = createSelector(
    header_themes_states, (header_states) => {
        return header_states.auth_modal;
    }
);


export const mobile_search_view_selector = createSelector(
    header_themes_states, (header_states) => {
        return header_states.mobile_search_view;
    }
);
