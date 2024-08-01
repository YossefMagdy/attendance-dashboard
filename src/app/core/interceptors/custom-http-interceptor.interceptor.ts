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
    let schoolId =  JSON.parse( this.cookie_s.get('school') || "null")  || "0"
    if ( this.cookie_s.get('token') )

    {
      user_token =   JSON.parse(this.cookie_s.get('token'));


    }
    else
    {
      user_token = '';
    }

    this.lang=  'ar';

    if (
      request.url.startsWith(`${environment.ApiEndPoint2}/lang/langs`)
    )
    {

      request = request.clone({
        headers: request.headers
        .set('school',        JSON.parse( this.cookie_s.get('school') 
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
            .set('school',    schoolId)
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
