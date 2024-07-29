import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [ {
  path: '',
  component: HomeComponent,
  children: [

    {
      path: "companies",
      loadChildren: ()=> import('../companies/company.module').then( (m)=> m.CompanyModule ),
    }


]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
