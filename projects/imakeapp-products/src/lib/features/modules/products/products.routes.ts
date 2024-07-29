
import { Routes } from "@angular/router";
import { ProductsIndexComponent } from "./products-index/products-index.component";






export const PRODUCTS_ROUTES: Routes = [
   {
      path: "",
      pathMatch: "full",
      redirectTo: "all"
   },
   {
      path: "all",
      component: ProductsIndexComponent,
      data: {
         title: "عرض المنتجات"
      }
   }

];
