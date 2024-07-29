import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexcompaignsComponent } from './indexcompaigns/indexcompaigns.component';
import { AddcompaignsComponent } from './addcompaigns/addcompaigns.component';

const routes: Routes = [
  {path:'all',component: IndexcompaignsComponent,},
  {path:'add',component: AddcompaignsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaingsRoutingModule { }
