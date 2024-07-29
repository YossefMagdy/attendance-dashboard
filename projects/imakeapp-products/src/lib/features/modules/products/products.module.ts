import { NgModule } from "@angular/core";

import { PRODUCTS_ROUTES } from "./products.routes";
import { RouterModule } from "@angular/router";

import { FileUploadModule } from "primeng/fileupload";

import { SidebarModule } from 'primeng/sidebar';
import { NzCarouselModule } from "ng-zorro-antd/carousel";
import { TableModule } from "primeng/table";
import { ImageModule } from "primeng/image";
import { PaginatorModule } from "primeng/paginator";
import { ProductAttributeOptionsComponent } from "./product-attribute-options/product-attribute-options.component";
import { SharedModule } from "projects/imakeapp-shared";

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from "primeng/api";
import { CommonModule } from "@angular/common";
import { ProductFormComponent } from "./product-form/product-form.component";
import { ProductsIndexComponent } from "./products-index/products-index.component";


@NgModule({
  declarations: [
    ProductsIndexComponent,
    ProductAttributeOptionsComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PRODUCTS_ROUTES),
SharedModule,
    NzCarouselModule,
    TableModule,
    FileUploadModule,
    SidebarModule,
    ImageModule,
    PaginatorModule,
    ConfirmDialogModule
  ],providers:[ConfirmationService]
})
export class ProductsModule {}
