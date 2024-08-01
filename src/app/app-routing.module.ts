import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './AuthFeature/login/login.component';
import { TopLevelResolver } from './homeFeature/resolver/home.resolver';
import { CanAccessGuardService } from './core/guard/can-access.service';
import { authGuard } from './core/guard/auth-guard.service';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  {path:'login',
    canActivateChild: [CanAccessGuardService],
    component: LoginComponent,
  },
  {
  path: "home",
  canActivate:[authGuard],
  resolve:TopLevelResolver,
  loadChildren: () => import('./homeFeature/home.module').then( (m)=> m.HomeModule ),
  
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes , { scrollPositionRestoration : "top" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
