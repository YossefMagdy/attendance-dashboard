import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersIndexComponent } from './users-index/users-index.component';
import { UsersFormComponent } from './users-form/users-form.component';

const routes: Routes = [  {
  path: '',
  children: [
      {
          path: 'all',
          component: UsersIndexComponent,
          data: {
              title: 'الفروع',
          },                              
      },
      {
          path: 'add',
          component: UsersFormComponent,
          data: {
              title: 'اضافة فرع',
          }, 
                                        
      },
      {
          path: 'edit',
          component: UsersFormComponent ,
          data: {
              title: 'تعديل فرع',
          },                              
      }            
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
