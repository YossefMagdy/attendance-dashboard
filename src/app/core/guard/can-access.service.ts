import { Injectable } from "@angular/core";
import { CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";





@Injectable({
  providedIn: "root",
})
export class CanAccessGuardService implements CanActivateChild 
{


  constructor(
    private authGuard: AuthGuard
  ) {}

  
  canActivateChild(route: any, state: RouterStateSnapshot) 
  {

    return this.authGuard.canActivateChild(route, state).then(
      (auth) => {
      if (!auth) 
      {
        return false;
      }

      return true;

      
    });
  }


}
