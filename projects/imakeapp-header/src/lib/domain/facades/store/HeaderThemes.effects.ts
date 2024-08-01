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
