import { Injectable } from '@angular/core';

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
export class CustomInterceptor implements HttpInterceptor 
{

  constructor(
    private cookie_s: CookieService
  ) {}

  intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> 
  {

    if (request.url.startsWith(environment.ApiEndPoint) || request.url.startsWith(environment.ApiEndPoint2) || request.url.startsWith(environment.graphqlendpoint) ) 
    {
      if (this.cookie_s.get('user'))
      {
        request = request.clone({
          headers: request.headers
          .set('Authorization', 'Bearer ' + JSON.parse(this.cookie_s.get('user')).token )
          .set('lang', 'en'),
        });

      }
      else
      {
        request = request.clone({
          headers: request.headers.set('lang', 'en'),
        });
      }
    }

    return next.handle(request);

  }



}
