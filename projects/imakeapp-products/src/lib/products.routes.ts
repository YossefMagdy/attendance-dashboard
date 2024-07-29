import { Routes } from "@angular/router";
import { CanAccessGuardService } from "./features/core/guard/can-access.service";





export const PRODUCTS_ROUTES: Routes = [
   {
      path: "",
      loadChildren: () => import("./features/modules/products/products.module").then( (m) => m.ProductsModule )
   },
   {
      path: "products-categories",
      loadChildren: () => import( "./features/modules/products-categories/products-categories.module" ).then((m) => m. ProductsCategoriesModule),
   },
   {
      path: "products-prices", 
      loadChildren: () => import("./features/modules/products-prices/products-prices.module").then( (m) => m.ProductsPricesModule ),
      canActivateChild: [CanAccessGuardService],
   }
];