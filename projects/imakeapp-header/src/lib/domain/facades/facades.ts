import { MenuItem } from 'primeng/api';

import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { HeaderThemes1Selector, Is_nav_open, NAV_MENU_SELECTOR, active_branch_selector, auth_modal_selector, branches_modal_selector, mobile_search_view_selector, vendor_branches_selector } from "./store/HeaderThemes.selectors";
import { GET_SITE_THEME_ACTION, GetHeaderTheme, UPDATE_AUTH_MODAL_STATUS_ACTION, UPDATE_CART_DISPLAY_STATUS_ACTION, mobile_searching_action, request_vendor_branches_action, set_active_branch_action, set_auth_modal_type_action, set_mobile_search_results_action, show_branches_modal_action, update_mobile_search_bar_display_action } from "./store/HeaderThemes.actions";
import { HeaderTheme1, HeaderTheme1Data, vendor_branch_inteface } from "../entites/HeaderThemes.model";
import { CookieService } from "ngx-cookie-service";
import { LanguageService, language_interface } from "projects/imakeapp-shared";




@Injectable({ providedIn: 'root' })
export class HeadersFacade
{


  headertheme1$: Observable<HeaderTheme1Data> = this.store.select(HeaderThemes1Selector);
  branches_modal_state$: Observable<any> = this.store.select(branches_modal_selector);
  vendor_branches_state$: Observable<any> = this.store.select(vendor_branches_selector);
  active_branch_selector$: Observable<any> = this.store.select(active_branch_selector);
  auth_modal_selector$: Observable<any> = this.store.select(auth_modal_selector);
  mobile_search_view_selector$: Observable<any> = this.store.select(mobile_search_view_selector);
  navigation_menu_selector$:Observable<MenuItem[]> = this.store.select(NAV_MENU_SELECTOR)
  is_nav_open_selector$:Observable<boolean> = this.store.select(Is_nav_open)


  lang =  'en';


  constructor(
    private store: Store<HeaderTheme1>,
    private language_s: LanguageService
  ) {}



  // other methods for adding, updating, and deleting categories and themes

  getSubCatTheme1() {
    this.store.dispatch(new GetHeaderTheme());
  }



  switchlang(selected_language_value: any, langs: language_interface[])
  {
    // set active language
    let selected_language_object = langs[+selected_language_value.target.value];

    this.language_s.change_language(selected_language_object);

  }

  ShowSignInModal()
  {
    this.store.dispatch( new UPDATE_AUTH_MODAL_STATUS_ACTION(true) );

  }
  reload()
  {
    location.reload();
  }


  get_site_theme()
  {
    this.store.dispatch( new GET_SITE_THEME_ACTION() );
  }


  show_branches_modal(state: boolean)
  {
    this.store.dispatch( new show_branches_modal_action(state) );
  }


  request_vendor_branches()
  {
    this.store.dispatch( new request_vendor_branches_action() );
  }

  set_active_branch(branch: vendor_branch_inteface)
  {
    this.store.dispatch( new set_active_branch_action(branch) );
  }

  openCart()
  {
    this.store.dispatch(new UPDATE_CART_DISPLAY_STATUS_ACTION(true) );}


    openFullNav()
    {
      this.store.dispatch(new UPDATE_CART_DISPLAY_STATUS_ACTION(true) );}


  toggle_auth_modal(status: boolean)
  {
    this.store.dispatch( new UPDATE_AUTH_MODAL_STATUS_ACTION(status) );
  }


  set_auth_modal_type(status: number)
  {
    this.store.dispatch( new set_auth_modal_type_action(status) );
  }


  toggle_mobile_search_view_state(status: boolean)
  {
    this.store.dispatch( new update_mobile_search_bar_display_action(status) );
  }

  mobile_search(search_text: string)
  {
    this.store.dispatch( new mobile_searching_action(search_text) );
  }


  setting_mobile_search_results(search_results: any)
  {
    let data = search_results.data.products;
    this.store.dispatch( new set_mobile_search_results_action(data) );
  }


  mobile_search_view_empty_search()
  {

    this.store.dispatch( new mobile_searching_action('') );
    this.store.dispatch( new set_mobile_search_results_action([]) );

  }




}
