import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [ {
  path: '',
  component: HomeComponent,
  children: [
    {
      path: 'products', // Replace 'products' with the desired path for the product module
      loadChildren: () => import('projects/imakeapp-products/src/public-api').then((m) => m.ProductsModule) // Replace with the actual path to your product module
    },{
      path: "reports",
      loadChildren: ()=> import('../reports/reports.module').then( (m)=> m.ReportsModule ),
    },{
      path: "menu",
      loadChildren: ()=> import('../mainmenu/mainmenu.module').then( (m)=> m.MainmenuModule ),
    }
    ,{
      path: "companies",
      loadChildren: ()=> import('../companies/company.module').then( (m)=> m.CompanyModule ),
    }
    ,{
      path: "users",
      loadChildren: ()=> import('../users/users.module').then( (m)=> m.UsersModule ),
    } , {
      path: "rates",
      loadChildren: ()=> import('../rates/rates.module').then( (m)=> m.RatesModule ),
      
    
    },
    {
      path: "campanings",
      loadChildren: ()=> import('../compaings/compaings.module').then( (m)=> m.CompaingsModule ),
      
    
    },
    {
      path: "items",
      loadChildren: ()=> import('../items/items.module').then( (m)=> m.ItemsModule ),
      
    
    }
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
