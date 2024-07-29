import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexitemsComponent } from './indexitems/indexitems.component';
import { AdditemsComponent } from './additems/additems.component';

const routes: Routes = [
  {path:'all',component: IndexitemsComponent,},
  {path:'add',component: AdditemsComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
