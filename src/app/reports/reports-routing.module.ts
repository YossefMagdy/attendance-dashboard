import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './features/index/reports.component';
import { FormComponent } from './features/form/form.component';

const routes: Routes = [{
  path: '',
  children: [
      {
  path: 'display',
  component: ReportsComponent,
},
{
  path: 'form',
  component: FormComponent,
},
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
