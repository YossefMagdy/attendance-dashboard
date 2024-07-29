import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { gql } from 'apollo-angular';
import { GenericService } from 'projects/image-gallaries/src/domain/services/generic.service';
import { GraphQLService } from 'projects/image-gallaries/src/domain/services/graphql.service';
import {
  ProductModel,
  productFormViewState,
} from 'projects/imakeapp-products/src/lib/domain/entities/productModel';
import { ProductsFacade } from 'projects/imakeapp-products/src/lib/domain/facades/products.facades';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
  ImgSrc: any;
  imageFile: any;
  imageName = 'اختر الصورة';
  imageInput: any;

  form!: FormGroup;

  brands: any;
  badges: any;

  id: number = 0;
  vendor_id = JSON.parse(localStorage.getItem('user') || '{}')?.restaurants?.id;
  loading: boolean = false;

  productFormViewState: productFormViewState = { badges: [], brands: [] };

  constructor(
    private graphService: GraphQLService,
    private fb: FormBuilder,
    private ProductsFacade: ProductsFacade
  ) {}

  ngOnInit() {
    this.createForm();
    this.getSelectedProduct();
    this.GetProductFormDropdowns();
  }

  GetProductFormDropdowns(): void {
    this.ProductsFacade.GetProductFormDropdowns();
    this.ProductsFacade.productFormViewStateSelector$.subscribe({
      next: (data) => {
        this.productFormViewState = data;
      },
    });
  }

  getSelectedProduct(): void {
    this.ProductsFacade.productsIndexViewStateSelector$.subscribe({
      next: (data) => {
        if (data.productFormModalVisibility) {
          this.handleEditProductData(data.selectedProduct);
        } else {
          this.createForm();
          this.ImgSrc = '';
          this.id = 0;
        }
      },
    });
  }

  handleEditProductData(selectedProduct: ProductModel): void {
    this.id = selectedProduct.id || 0;
    this.form.patchValue({
      ...selectedProduct,
      available_start_date: new Date(+selectedProduct.available_start_date!!),
      available_end_date: new Date(+selectedProduct.available_end_date!!),
    });
    this.ImgSrc = selectedProduct['photo'];
  }

  createForm() {
    this.form = this.fb.group({
      name_ar: [null, Validators.required],
      name_en: [null, Validators.required],

      short_description_ar: [null, Validators.required],
      short_description_en: [null, Validators.required],

      description_ar: [null, Validators.required],
      description_en: [null, Validators.required],

      available_start_date: [null],
      available_end_date: [null],

      brand_id: [null, Validators.required],
      badge_id: [null],

      mark_as_new: [0, Validators.required],
      visible: [0, Validators.required],

      sku: [null, Validators.required],
      price: [null, Validators.required],

      photo: [null, Validators.required],

      sub_category_id: [Number(localStorage.getItem('sub_cat_id'))],

      category_id: [Number(localStorage.getItem('cat_id'))],
      vendor_id: [this.vendor_id],
    });
  }

  getImageName(event: any) {
    this.imageFile = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(this.imageFile);
    reader.onload = (_event) => {
      this.ImgSrc = reader.result;
    };
  }

  deleteImg() {
    this.ImgSrc = null;
  }

  getBrandsDropdown() {
    // this.graphService
    //   .query(
    //     gql`{
    //           subCategories(idEq:${JSON.parse(
    //             localStorage.getItem('sub_cat_id') || ''
    //           )}){
    //             mBrands {
    //               id
    //               name_ar
    //             }
    //           }
    //         }`
    //   )
    //   .subscribe({
    //     next: (results: any) => {
    //       this.brands = results.data.subCategories[0].mBrands;
    //     },
    //     error: (err) => {
    //       // console.error(err);
    //       // this.genericService.showNotification('error', 'إضافة', 'حدث خطأ ما');
    //     },
    //   });
  }
  getBrandsDropdownForCat() {
    // this.graphService
    //   .query(
    //     gql`{
    //           categories(idEq:${JSON.parse(
    //             localStorage.getItem('cat_id') || ''
    //           )}){
    //             mBrands {
    //               id
    //               name_ar
    //             }
    //           }
    //         }`
    //   )
    //   .subscribe({
    //     next: (results: any) => {
    //       this.brands = results.data.categories[0].mBrands;
    //     },
    //     error: (err) => {
    //       console.error(err);
    //       // this.genericService.showNotification('error', 'إضافة', 'حدث خطأ ما');
    //     },
    //   });
  }
  getbadgesDropdown() {
    this.graphService
      .query(
        gql`
          {
            badges {
              id
              name_ar
            }
          }
        `
      )
      .subscribe({
        next: (results: any) => {
          this.badges = results.data.badges;
        },
        error: (err) => {
          console.error(err);
          // this.genericService.showNotification('error', 'إضافة', 'حدث خطأ ما');
        },
      });
  }
  
  add(): void {}
  edit() {
    if (this.form.valid) {
      this.ProductsFacade.editProductWithPhoto(
        { ...this.form.value, id: this.id },
        this.imageFile
      );
    }
  }
}
