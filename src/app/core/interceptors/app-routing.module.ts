import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../AuthFeature/login/login.component';
import { TopLevelResolver } from '../../homeFeature/resolver/home.resolver';
import { CanAccessGuardService } from '../guard/can-access.service';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  {path:'login',component: LoginComponent,
  canActivateChild: [CanAccessGuardService]},
  {
  path: "home",
  resolve:TopLevelResolver,
  loadChildren: () => import('../../homeFeature/home.module').then( (m)=> m.HomeModule ),
  
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes , { scrollPositionRestoration : "top" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
