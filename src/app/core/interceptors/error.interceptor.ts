import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { HeadersFacade } from "projects/imakeapp-header/src/public-api";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private navigate: Router,private headerFacades:HeadersFacade,private primeMessage:MessageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse) {
          const applicationError = error.headers.get("Application-Error");
          if (applicationError) {
            return throwError(applicationError);
          }
          switch (error.status) {
            case 401:
              localStorage.removeItem("token");
              this.headerFacades?.ShowSignInModal()
              break;
            case 403:
              localStorage.removeItem("token");
              this.headerFacades?.ShowSignInModal()
              break;
            case 500:
              this.primeMessage.add({severity:'error', summary:'Error', detail:error.error.message});

              break;
              case 400:
                this.primeMessage.add({severity:'error', summary:'Error', detail:error.error.message});
  break;
            default:
              break;
          }
        }
        return throwError(error.error);
      })
    );
  }
}
