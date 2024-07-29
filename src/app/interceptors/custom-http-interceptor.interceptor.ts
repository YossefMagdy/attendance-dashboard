import { Injectable, OnInit } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';







@Injectable({ providedIn: 'root' })
export class CustomHttpInterceptorInterceptor implements HttpInterceptor
{

  lang =  'en';

  constructor(
    private cookie_s: CookieService,

  ) {}

  intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>>
  {


    // user token
    let user_token = '';
    let vendor_code = '';
    let vendor_id = '';
    let companyId =  JSON.parse( this.cookie_s.get('company') || "null")  || "0"
    if ( this.cookie_s.get('token') )

    {
      user_token =   JSON.parse(this.cookie_s.get('token'));


    }
    else
    {
      user_token = '';
    }
// if(this.cookie_s.get('user') ) {

//   vendor_code = JSON.parse( this.cookie_s.get('user') ).restaurants.code;
//   vendor_id = JSON.parse( this.cookie_s.get('user') ).restaurants.id;


//}
    this.lang=  'ar';

    // set site language



    // language api does not need anything (headers)
    if (
      request.url.startsWith(`${environment.ApiEndPoint2}/lang/langs`)
    )
    {

      request = request.clone({
        headers: request.headers
        .set('company',        JSON.parse( this.cookie_s.get('company') 
        ))
          .set('vendor_code', vendor_code)
          .set('vendor_id',vendor_id.toString())
      });

    }
    else if (
      request.url.startsWith(environment.ApiEndPoint) ||
      request.url.startsWith(environment.ApiEndPoint2) ||
      request.url.startsWith(environment.graphqlendpoint)
    )
    {

      if (user_token != '')
      {

        request = request.clone({
          headers: request.headers
            .set('Authorization', 'Bearer ' + user_token)
            .set('lang', this.lang)
            .set('company',    companyId)
            .set('vendor_code', vendor_code)
            .set('vendor_id', vendor_id.toString())
        });

      }
      else
      {

        request = request.clone({
          headers: request.headers
          .set('lang', this.lang)
          .set('vendor_code', vendor_code)
          .set('vendor_id', vendor_id.toString())

        });
      }

    }



    return next.handle(request);


  }




}
