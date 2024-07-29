import { Injectable } from "@angular/core";
import { CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { NzNotificationService } from "ng-zorro-antd/notification";




@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivateChild
{


  constructor(
    private router: Router,
    private notification: NzNotificationService
  ) {}


  canActivateChild(route:any, state: RouterStateSnapshot): Promise<boolean>
  {

    return new Promise((resolve)=>{

      const token = localStorage.getItem("token");

      if (typeof token == "string")
      {
        resolve(true);
      }
      else
      {

        this.notification.warning(
          "تسجيل دخول",
          "يجب عليك تسجيل الدخول لادارة المنصة"
        );

        this.router.navigate(["/authentication/login"], {
          queryParams: { returnUrl: state.url },
        });

        localStorage.setItem("returnUrl", state.url);

      }

      resolve(false);

    });

  }


}
