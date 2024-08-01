import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [ {
  path: '',
  component: HomeComponent,
  children: [
    {path:'',redirectTo:'school',pathMatch:'full'},
    {
      path: "school",
      loadChildren: ()=> import('../school/school.module').then( (m)=> m.SchoolModule ),
    }


]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
