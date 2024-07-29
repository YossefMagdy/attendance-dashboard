import { Scrollbar } from 'swiper';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { toggle_map_action, SIGN_OUT_ACTION, UPDATE_CART_DISPLAY_STATUS_ACTION, SIGN_IN_ACTION, SET_REDIRECT_ACTION, SET_ACTIVE_LOCATION_ACTION } from '../../../domain/facades/store/HeaderThemes.actions';
import { HEADER_AUTH_MODAL_STATUS_SELECTOR, HEADER_CART_SELECTOR, REDIRECT_SELECTOR, USER_SELECTOR, map_status_selector } from '../../../domain/facades/store/HeaderThemes.selectors';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { HeadersFacade } from '../../../domain/facades/facades';
import { HeaderThemesService } from '../../../domain/services/HeaderThemesService.service';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { BaseComponent, language_interface, LanguagePipe, LanguageService, Validation_Directive, WebsiteAttributesService } from 'projects/imakeapp-shared';

@Component({
  selector: 'lib-base-header-componenet',
  templateUrl: './base-header-componenet.component.html',
  styleUrls: ['./base-header-componenet.component.css']
})
export class BaseHeaderComponenetComponent  extends BaseComponent implements OnInit{
 // variables
 @ViewChild('overlay') overlay: any;
 @ViewChild('modal') modal?: ElementRef;

 @ViewChild(Validation_Directive) validationDirective!: Validation_Directive;

 search_value: string = '';
 header: boolean = false;
 header2: boolean = true;
 display: boolean = false;
 displayMap: boolean = false;
 map_options: any;
 checked: boolean = false;
 show_results_view: boolean = false;
 search_results: any;
 number_of_cart_items: number = 0;
 sign_in_form?: FormGroup;
 sign_up_form!: FormGroup;
 show_dialog_box: boolean = false;
 form_type: number = 1;    // 1: sign-in | 2: sign-up
 is_signed_in: boolean = false;
 show_cart: boolean = true;
 map_lat = 30.0594885;
 map_lng = 31.2584644;
 map_zoom= 12
 location_name: string = 'N/A';
 active_place_id: string = '';
 cities: any[] = [];
 towns: any[] = [];
 is_towns_ready: boolean = false;
 active_city: number = 0;
 sign_up_modal_width_value: string = "50vw";
 selected_location: string = '';
 notifications: any;
 showNotifications: boolean = false;
 logo_img: string = '';
 langs: language_interface[] = [];
 active_language!: language_interface;
 has_takeaway: number = 1;
  // functions
  constructor(
    public override language_s?:LanguageService,
    public facades?:HeadersFacade,
    public store?: Store,

    public router?: Router,
    public fb?: FormBuilder,
    public message_s?: MessageService,
    public header_theme_s?: HeaderThemesService,
    public message?: MessageService,
    public cookie_s?:CookieService,
    public web_attr_s?: WebsiteAttributesService,
    public lang_s?: LanguageService,
    public lang_p?: LanguagePipe,
  ) {
    super(language_s);
  }

 close_map_dialog()
 {
   this.store?.dispatch( new toggle_map_action(false) );
 }



 override ngOnInit(): void
 {
super.ngOnInit()
   this.init();

   this.get_langaues();

   this.theme_data();

   this.create_sign_in_form();

   this.create_sign_up_form();

   this.listen_to_needed_states();

   this.get_all_places();

   this.check_view_port_width();

   this.listen_to_auth_modal_display_status();

   // get notifications
   //this.get_notifi();


 }

 get f() {
  return this.sign_up_form.controls;
}


 signing_out()
 {

   this.store?.dispatch( new SIGN_OUT_ACTION() );

 }



 close_mobile_nav(close_btn: any)
 {
   close_btn.click();
 }

 redirect_to(type: string)
 {

   if ( type == 'sign-in' )
   {
     // set mode to: sign in
     this.form_type = 1;
     this.facades?.toggle_auth_modal(true);
   }
   else if ( type == 'sign-up' )
   {
     // set mode to: sign up
     this.form_type = 2;
     this.facades?.toggle_auth_modal(true);
   }

 }

 showDialog(type: string)
 {
   if ( type == 'sign-in' )
   {
     // set mode to: sign in
     this.form_type = 1;
     this.facades?.toggle_auth_modal(true);
   }
   else if ( type == 'sign-up' )
   {
     // set mode to: sign up
     this.form_type = 2;
     this.facades?.toggle_auth_modal(true);
   }

 }
switchToProfile(){
if (this.is_signed_in){

  this.router?.navigate(['my-account', 'my-profile']);
}else {
  this.showDialog('sign-in')


}


}
 showBranches()
 {
   this.facades?.show_branches_modal(true);
 }



 showSearchBar() {
  this.facades?.toggle_mobile_search_view_state(true);
}


hideSearchBar() {
  this.facades?.toggle_mobile_search_view_state(false);
}



display_cart(state: boolean)
{
  this.store?.dispatch(new UPDATE_CART_DISPLAY_STATUS_ACTION(true));
}



 searching(searching_string: any)
 {


   if ( searching_string.target.value.length >= 2 )
   {

     this.show_results_view = true;


     this.header_theme_s?.searching(searching_string.target.value).subscribe(
       (response: any)=>{
         this.search_results = response.data.products;
       },
       (err)=>{
         console.error(err);
       }
     );

   }
   else
   {
     this.show_results_view = false;
   }


 }




 search_result_clicked(result: any, search_input: any)
 {


   // empty search field
   search_input.value = '';

   // hide search result box
   this.show_results_view = false;

   // navigate to product details page
   this.router?.navigate(['products', 'product-details', result?.id, result?.name]);

 }



 open_cart()
 {

   this.store?.dispatch(new UPDATE_CART_DISPLAY_STATUS_ACTION(true));

 }




 create_sign_in_form()
 {

   this.sign_in_form = this.fb?.group({
     username: [ '' , Validators.required ],
     password: [ '' , Validators.required ],
   });

 }


 create_sign_up_form()
 {

   this.sign_up_form = this.fb?.group({
     username: [ '' , [Validators.required, Validators.minLength(3)] ],
     password: [ '' , [Validators.required, Validators.minLength(6)] ],
     first_name: [ '' , [Validators.required, Validators.minLength(2)] ],
     last_name: [ '' , [Validators.required, Validators.minLength(2)] ],
     email: [ '' , [Validators.required , Validators.email] ],
     mobile: [ '' , [Validators.required, Validators.minLength(10) ] ],
     code: [ '' ]
   })!;

 }



 signing_in()
 {

   this.header_theme_s?.sign_in(this.sign_in_form?.value).subscribe(
     (response: any)=>{


       // success
       let success_msg = {
         header: this.lang_p?.transform('success_msg_title', 'header'),
         body: this.lang_p?.transform('auth_modal_sign_in_success_message', 'header')
       };

       this.message_s?.add({severity:'success', summary: success_msg.header, detail: success_msg.body });


       // check if response is object NOT error message (precation for bad back-end)
       if ( typeof response != 'string' )
       {
         this.cookie_s?.set("user", JSON.stringify(response), undefined, '/');
         this.store?.dispatch( new SIGN_IN_ACTION(response) );

         this.facades?.toggle_auth_modal(false);

         // check if there is a redirection
         this.check_sign_in_redirection();
         this.sign_in_form?.reset();

       }


     },
     (err)=>{

       // failer
       let success_msg = {
         header: this.lang_p?.transform('failed_msg_title', 'header'),
         body: this.lang_p?.transform('auth_modal_sign_in_failed_message', 'header')
       };

       this.message_s?.add({
         severity: 'error',
         summary: success_msg.header,
         detail: success_msg.body + '(' + err.message || err.error.message + ')'
       });

     }
   );


 }

 get_langaues()
  {

    this.language_s?.get_site_languages().subscribe(lang=>{

      this.langs =lang.languages;
      this.active_language = lang.active_language
      this.lang = lang.active_language.code!!;

    });



  }



  theme_data()
  {

    this.web_attr_s?.get_site_attributes().subscribe(
      (data: any)=>{

        this.set_theme_options(data);

      }
    );

  }


  set_theme_options(theme_data : any)
  {

    // close if no data came
    if ( !Object.keys(theme_data).length ) return;

    // search for key value
    this.logo_img = theme_data['logo'];
    this.has_takeaway = Number(theme_data['has_takeway']);

  }


  get_notifi()
  {

    this.header_theme_s?.getNotifications().subscribe(
      (data : any) => {

        this.notifications = data;
      },
      (err)=>{
        console.error(err);
      }
    );

  }




  init()
  {

    // set language
  //  this.set_lang();

    // set location
    this.get_current_location();

    // set map options
    this.map_options = {
      center: { lat: 30.0594885, lng: 31.2584644 },
      zoom: 12,
    };




  }






  get_current_location()
  {

    this.facades?.active_branch_selector$.subscribe(
      (state: any)=>{

        if (  Object.keys(state).length )
        {
          this.selected_location = state.name;
        }
        else
        {
          // set inital location placeholder text
          this.selected_location = this.lang_p?.transform('delivery_Placeholder', 'header');
        }

      }
    );

  }



  listen_to_needed_states()
  {

    this.store?.pipe( select(USER_SELECTOR) ).subscribe(
      (response)=>{

        if ( response?.token )
        {
          this.is_signed_in = true;
        }
        else
        {
          this.is_signed_in = false;
        }

      }
    );




    this.store?.pipe( select(HEADER_CART_SELECTOR) ).subscribe(
      (reponse: any)=>{
        this.show_cart = reponse;
      }
    );


  }


  listen_to_auth_modal_display_status()
  {


    this.store?.pipe( select(HEADER_AUTH_MODAL_STATUS_SELECTOR) ).subscribe(
      (reponse: any)=>{
        this.show_dialog_box = reponse;
      }
    );


    this.store?.pipe( select(map_status_selector) ).subscribe(
      (reponse: any)=>{
        this.displayMap = reponse;
      }
    );



  }


  navigate_top() {
    const modalContentElement = this.modal?.nativeElement;
    if (modalContentElement) {
      modalContentElement.scrollIntoView({ top: 0, behavior: 'smooth' });
    }

  }

 signing_up()
 {

    // Stop form submission if the form is invalid
    if (this.sign_up_form.invalid) {
      // Stop form submission if the form is invalid
      Object.values(this.sign_up_form.controls).forEach(control => control.markAsTouched());

      setTimeout(() => {
        this.validationDirective.validate_form_control();
        this.navigate_top();
      }, 200);

      let success_msg = {
        header: this.lang_p?.transform('error_msg_title', 'header'),
        body: this.lang_p?.transform('completeallinputs', 'header')
      };

      this.message_s?.add({severity:'error', summary: success_msg.header, detail: success_msg.body });

      return;
    }

   // check if phone number start with (01)
   let is_mobile_valid = this.check_phone_number();

   if ( this.sign_up_form.valid && is_mobile_valid  )
   {

     // add this to activate user account by default
     this.sign_up_form.value.active = 1;
     this.sign_up_form.value.mobile = this.sign_up_form.value.mobile;


     this.header_theme_s?.sign_up(this.sign_up_form.value).subscribe(
       (response: any)=>{

         // success
         let success_msg = {
           header: this.lang_p?.transform('success_msg_title', 'header'),
           body: this.lang_p?.transform('auth_modal_sign_up_success_message', 'header')
         };

         this.message_s?.add({severity:'success', summary: success_msg.header, detail: success_msg.body });

         // sign in automatically
         this.store?.dispatch( new SIGN_IN_ACTION( response ) );

         this.facades?.toggle_auth_modal(false);

         this.sign_up_form.reset();

       },
       (err: any)=>{
         // get error reasons
         for (const field in err.data) {
          if (err.data.hasOwnProperty(field)) {
            const errors = err.data[field];
            for (const error of errors) {

              this.message_s?.add({
                severity: 'error',
              detail: error.message
              });
            }
          }
        }
         // failer


       }
     );

   }
   else
   {
     const header = this.lang_p?.transform('failed_msg_title', 'header')
     let message = this.lang_p?.transform('auth_modal_sign_up_failed_mobile_message', 'header');
     this.message?.add({severity:'error', summary:header, detail:message });
   }


 }






 check_sign_in_redirection()
 {

   this.store?.pipe( select( REDIRECT_SELECTOR ) ).subscribe(
     (data)=>{

       if ( data === 'checkout' )
       {
         this.router?.navigateByUrl('/shopping/checkout');
         this.store?.dispatch( new SET_REDIRECT_ACTION('') );
       }

     }
   );

 }


 check_phone_number()
 {

   return this.sign_up_form.value.mobile.startsWith('01');

 }



 get_client_location()
 {

   this.towns.forEach(
     (town)=>{

       if ( town.id == this.active_city )
       {
         this.store?.dispatch( new SET_ACTIVE_LOCATION_ACTION(town) );
       }

     }
   );


   this.store?.dispatch( new toggle_map_action(false) );

 }


 markerDragEnd(m: any)
 {

   // get new coords. from map
   let lat = m.latLng.lat();
   let lng = m.latLng.lng();

   // set new posiotion
   this.map_lat = lat;
   this.map_lng = lng;

   // this.GetPlaceId(lat,lng)

 }


 get_all_places()
 {

  //  this.header_theme_s?.get_areas().subscribe(
  //    (response: any)=>{
  //      this.cities = response;
  //    },
  //    (err)=>{
  //      console.error(err);
  //    }
  //  );

 }


 city_selected(selected_city: any)
 {

   // get towns for selected city
   this.cities.forEach(
     (city)=>{

       if ( city.id  == selected_city.value )
       {
         this.towns = city.towns;
         this.is_towns_ready = true;
       }

     }
   );

 }


 town_selected(selected_town: any)
 {
   this.active_city = selected_town.value;
 }


 close_auth_modal()
 {

   // send close modal action close modal
   this.facades?.toggle_auth_modal(false);

   // reset forms
   this.sign_in_form?.reset();
   this.sign_up_form.reset();

   // reset form to sign-in
   this.form_type = 1;

 }


 check_view_port_width()
 {

   if ( window.innerWidth <= 420 )    // mobile view
   {
     this.sign_up_modal_width_value = "95vw"
   }
   else
   {
     this.sign_up_modal_width_value = "50vw"
   }

 }


 toggleNotifocations() {

   // toggle notifi
   this.showNotifications = !this.showNotifications;

 }



}
