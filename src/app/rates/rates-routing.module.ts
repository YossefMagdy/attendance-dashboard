import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRateComponent } from './add-rate/add-rate.component';
import { IndexRateComponent } from './index-rate/index-rate.component';

const routes: Routes = [
  {path:'all',component: IndexRateComponent,},
  {path:'add',component: AddRateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RatesRoutingModule { }
