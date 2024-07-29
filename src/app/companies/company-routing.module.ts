import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyIndexComponent } from './company-index/company-index.component';
import { CompanyFormComponent } from './company-form/company-form.component';

const routes: Routes = [  {
  path: '',
  children: [
      {
          path: 'all',
          component: CompanyIndexComponent,
          data: {
              title: 'الشركات',
          },                              
      },
      {
          path: 'add',
          component: CompanyFormComponent,
          data: {
              title: 'اضافة الشركات',
          }, 
                                        
      },
      {
          path: 'edit',
          component: CompanyFormComponent ,
          data: {
              title: 'تعديل الشركات',
          },                              
      }            
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
