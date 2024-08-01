import { inject, Injectable } from "@angular/core";
import { CanActivateChild, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { NzNotificationService } from "ng-zorro-antd/notification";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivateChild 
{


  constructor(
    private router: Router,
    private notification: NzNotificationService
  ) {}


  canActivateChild(route: any, state: RouterStateSnapshot): Promise<boolean> 
  {

    return new Promise((resolve)=>{
      const token = localStorage.getItem("token");
      if (typeof token == "string") {

        resolve(true);
      } else {
        this.notification.warning(
          "تسجيل دخول",
          "يجب عليك تسجيل الدخول لادارة المنصة"
        );
        this.router.navigate(["/login"], {
          queryParams: { returnUrl: state.url },
        });
        localStorage.setItem("returnUrl", state.url);
      }
      resolve(false);
    });

  }


}


  
export const authGuard: CanActivateFn = (route, state) => {
  const router=inject(Router) 
  const cookie_s= inject(CookieService)

    if(cookie_s.get('token').length){
      return true;
    }else{
      router.navigate(['/login'])
      return false
    }
 

};