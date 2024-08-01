import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  SchoolIndexComponent } from './school-index/school-index.component';
import {  SchoolFormComponent } from './school-form/school-form.component';

const routes: Routes = [  {
  path: '',
  children: [
    {
        path:'',
        redirectTo:'all',
        pathMatch:'full'
    },
      {
          path: 'all',
          component: SchoolIndexComponent,
          data: {
              title: 'المدارس',
          },                              
      },
      {
          path: 'add',
          component: SchoolFormComponent,
          data: {
              title: 'اضافة مدرسه',
          }, 
                                        
      },
      {
          path: 'edit',
          component: SchoolFormComponent ,
          data: {
              title: 'تعديل مدرسه',
          },                              
      }            
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
