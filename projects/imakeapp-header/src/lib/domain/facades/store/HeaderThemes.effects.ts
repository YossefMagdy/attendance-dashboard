import { Injectable } from "@angular/core";
import { mergeMap, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { HeaderThemesService } from "../../services/HeaderThemesService.service";
import {  CHECK_VOUCHER_ACTION, GET_NAV_MENU_LOADED_ACTION, GET_TAX_AND_DELIEVERY_ACTION, GetHeaderThemeLoaded, SITE_THEME_LOADED_ACTION, set_vendor_branches_action } from "./HeaderThemes.actions";
import {  GET_NAV_MENU, GET_SITE_THEME, GetHeaderTheme, SET_ACTIVE_USER_ADDRESS, SIGN_IN, mobile_searching, request_vendor_branches,  } from "./constants/constants";
import { ACTIVE_USER_ADDRESS_SELECTOR, set_voucher_percentage_selector, voucher_selector } from "./HeaderThemes.selectors";
import { CookieService } from "ngx-cookie-service";
import { WebsiteAttributesService } from "projects/imakeapp-shared";
import { HeadersFacade } from "../facades";




@Injectable()
export class HeaderEffect
{


  constructor(
  private store:Store,
  private actions$: Actions,
  private service: HeaderThemesService,
  private cookie_s: CookieService,
  private webAttrService :WebsiteAttributesService,
  private facades: HeadersFacade
  ) {}



  getHeaderThemes1$ = createEffect(
    () => {
      return this.actions$
      .pipe(

        ofType(GetHeaderTheme),

        mergeMap(async action  => {

          this.service.GETHeader_QUERY_THEME1().subscribe(
          (response: any)=>{
            this.store.dispatch(new GetHeaderThemeLoaded(response.data))
          },
          (err: any)=>{
            console.error(err);
          })

        })

      )
    },{dispatch:false}

  );



  sign_in_effect$ = createEffect(
    () => {

      return this.actions$.pipe(
            ofType(SIGN_IN),
            tap(
              (action:any)=>{

                // save in cookie
                this.cookie_s.set("user", JSON.stringify(action.data), undefined, '/');

                // fetch new cart (cart items connected to user id)
              //  this.cartFacades.RequestCart();

              }
            )
          )
  },{dispatch:false});







  set_active_user_address_effect$ = createEffect(
    () => {
      return this.actions$.pipe(
              ofType(SET_ACTIVE_USER_ADDRESS),
              tap(
                (action: any)=>{

                  let cart_code = this.cookie_s.get('cart_code');

                  // only trigger this when in checkout
                  // after checkout cart code gets deleted and you cannot get new prices data(tax/delievery fee) without code
                  if ( cart_code )
                  {
                    this.store.dispatch( new GET_TAX_AND_DELIEVERY_ACTION() );
                  }


                }
              )

          )
  },{dispatch:false});





  get_navigation_menu$ = createEffect(
    () => {

      return this.actions$.pipe(
            ofType(GET_NAV_MENU),
            tap(
              (action: any)=>{

                this.service.get_naviagtion_menu(action.param).subscribe(
                  (response: any)=>{
                    console.log(response)
                    if (JSON.parse(this.cookie_s.get("usergroup")) == "652b13a399bd7c1b529fef02") {
                      this.store.dispatch(new GET_NAV_MENU_LOADED_ACTION([{
                        title: "حملات التقييم",
                        "title_en": "supervisor",
                        "icon": "fas fa-book-reader",
                        "path": "/test",
                        "role": "652b13a399bd7c1b529fef02",
                        "class": "class",
                        "extraLink": "test",
                        "sort": 1,
                        "id": "653afa02be2bb2d083d9df99",
                        "sub": [
                            {
                                "title": "اضافة",
                                "title_en": "add",
                                "icon": "test",
                                "path": "/home/campanings/add",
                                "role": "652b13a399bd7c1b529fef02",
                                "class": "class",
                                "extraLink": "test",
                                "sort": 1,
                                "_id": "653afa02be2bb2d083d9df9a"
                            },
                            {
                                "title": "عرض",
                                "title_en": "index",
                                "icon": "test",
                                "path": "/home/campanings/all",
                                "role": "652b13a399bd7c1b529fef02",
                                "class": "class",
                                "extraLink": "test",
                                "sort": 2,
                                "_id": "653afa02be2bb2d083d9df9b"
                            }
                        ]
                    },
                    {
                        "title": "التقييمات",
                        "title_en": "employees",
                        "icon": "fas fa-user-tie",
                        "path": "/test",
                        "role": "652b13a399bd7c1b529fef02",
                        "class": "class",
                        "extraLink": "test",
                        "sort": 1,
                        "id": "653afd07be2bb2d083d9dfa5",
                        "sub": [
                            {
                                "title": "اضافة",
                                "title_en": "add",
                                "icon": "test",
                                "path": "/home/rates/add",
                                "role": "652b13a399bd7c1b529fef02",
                                "class": "class",
                                "extraLink": "test",
                                "sort": 1,
                                "_id": "653afd07be2bb2d083d9dfa6"
                            },
                            {
                                "title": "عرض",
                                "title_en": "index",
                                "icon": "test",
                                "path": "/home/rates/all",
                                "role": "652b13a399bd7c1b529fef02",
                                "class": "class",
                                "extraLink": "test",
                                "sort": 2,
                                "_id": "653afd07be2bb2d083d9dfa7"
                            }
                        ]
                    },
                    {
                        "title": "المنتجات",
                        "title_en": "branches",
                        "icon": "fas fa-code-branch",
                        "path": "/test",
                        "role": "652b13a399bd7c1b529fef02",
                        "class": "class",
                        "extraLink": "test",
                        "sort": 1,
                        "id": "653afd86be2bb2d083d9dfad",
                        "sub": [
                            {
                                "title": "اضافة",
                                "title_en": "add",
                                "icon": "test",
                                "path": "/home/items/add",
                                "role": "652b13a399bd7c1b529fef02",
                                "class": "class",
                                "extraLink": "test",
                                "sort": 1,
                                "_id": "653afd86be2bb2d083d9dfae"
                            },
                            {
                                "title": "عرض",
                                "title_en": "index",
                                "icon": "test",
                                "path": "/home/items/all",
                                "role": "652b13a399bd7c1b529fef02",
                                "class": "class",
                                "extraLink": "test",
                                "sort": 2,
                                "_id": "653afd86be2bb2d083d9dfaf"
                            }
                        ]
                    },
                    {
                        "title": "التقارير",
                        "icon": "fas fa-globe",
                        "path": "home/reports/display/",
                        "role": "652b13a399bd7c1b529fef02",
                        "class": "",
                        "id": "6544e52b73c45af161536e85",
                        "sub": [
                            {
                                "title": "عرض",
                                "icon": "",
                                "path": "home/reports/display/",
                                "role": "652b13a399bd7c1b529fef02",
                                "class": "",
                                "_id": "6544e54573c45af161536e9e"
                            }
                        ]
                    },
                   ]));
                    }else {
                      this.store.dispatch(new GET_NAV_MENU_LOADED_ACTION([
                        {
                            "title": "شركات",
                            "icon": "fas fa-globe",
                            "path": "/",
                            "role": "652b13ae99bd7c1b529fef05",
                            "class": "has-arrow",
                            "id": "659494c71723f692afd8afab",
                            "sub": [
                                {
                                    "title": "اضافة",
                                    "icon": "",
                                    "path": "/home/companies/add",
                                    "role": "652b13ae99bd7c1b529fef05",
                                    "class": "",
                                    "_id": "659494c71723f692afd8afac"
                                },
                                {
                                    "title": "عرض",
                                    "icon": "",
                                    "path": "/home/companies/all",
                                    "role": "652b13ae99bd7c1b529fef05",
                                    "class": "",
                                    "_id": "659494c71723f692afd8afad"
                                }
                            ]
                        }
                    ]));
                    }
               
                    // this.store.dispatch(new CATEGORIES_LOADED_ACTION(response.data.subCategories));

                  },
                  (err: any)=>{
                    console.error(err);
                  }
                );

              }
            )
          )
  },{dispatch:false});









  get_site_theme$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(GET_SITE_THEME),
        tap(
          (action: any)=>{

            this.webAttrService.get_site_attributes().subscribe(
              (response : any)=>{
                this.store.dispatch( new SITE_THEME_LOADED_ACTION(response) );
              },
              (err)=>{
                console.error(err);
              }
            );


          }
        )
      )
    },
    {
      dispatch:false
    }
  );


  request_site_vendors_theme$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(request_vendor_branches),
        tap(
          ()=>{

            this.service.get_vendor_branches().subscribe(
              (response : any)=>{

                this.store.dispatch( new set_vendor_branches_action(response) );

              },
              (err)=>{
                console.error(err);
              }
            );


          }
        )
      )
    },
    {
      dispatch:false
    }
  );



  mobile_searching_effect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(mobile_searching),
        tap(
          (action: any)=>{

            // start searching after 2 characters input
            if ( action.data.length >= 2 )
            {

              this.service.searching(action.data).subscribe(
                (response: any)=>{

                  this.facades.setting_mobile_search_results(response);


                },
                (err)=>{
                  console.error(err);
                }
              );

            }

          }
        )
      )
    },
    {
      dispatch:false
    }
  );







}
