import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  ProductModel,
  ProductsData,
  ProductsFilter,
  productFormViewState,
  productsIndexViewState,
} from '../entities/productModel';
import {
  getAllProductsForExcelSelector,
  getAllProductsSelector,
  productFormViewStateSelector,
  productsIndexViewStateSelector,
} from './store/products.selectors';
import {
  AddProductsByExcelAction,
  ChangeProductFormViewState,
  ChangeProductsIndexViewState,
  DeleteMultipleProductAction,
  DeleteProductAction,
  EditProductWithPhotoAction,
  GetProductForExcelAction,
  GetProductFormDropdowns,
  getAllProductsAction,
} from './store/products.actions';
import { ProductExcel } from '../entities/ExcelModels';

@Injectable({ providedIn: 'root' })
export class ProductsFacade {
  constructor(public store: Store<any>) {}

  Products_selector$: Observable<ProductsData> = this.store.pipe(
    select(getAllProductsSelector)
  );
  ProductsForExcel_selector$: Observable<ProductModel[]> = this.store.pipe(
    select(getAllProductsForExcelSelector)
  );
  productsIndexViewStateSelector$: Observable<productsIndexViewState> =
    this.store.pipe(select(productsIndexViewStateSelector));
  productFormViewStateSelector$: Observable<productFormViewState> =
    this.store.pipe(select(productFormViewStateSelector));

  getAllProducts() {
    this.store.dispatch(new getAllProductsAction());
  }

  editProductWithPhoto(data: ProductModel, file: any): void {
    this.store.dispatch(new EditProductWithPhotoAction(data, file));
  }
  addProducts(param: any) {}
  GetProductsForExcel() {
    this.store.dispatch(new GetProductForExcelAction());
  }
  addProductsByExcel(param: ProductExcel[]) {
    this.store.dispatch(new AddProductsByExcelAction(param));
  }
  deleteProduct(id: number) {
    this.store.dispatch(new DeleteProductAction(id));
  }
  DeleteMultipleProduct(selectedProducts: ProductModel[]) {
    this.store.dispatch(new DeleteMultipleProductAction(selectedProducts));
  }
  ChangeProductsIndexViewState(productsIndexViewState: productsIndexViewState) {
    this.store.dispatch(
      new ChangeProductsIndexViewState(productsIndexViewState)
    );
  }
  ChangeProductFormViewState(productFormViewState: productFormViewState) {
    this.store.dispatch(new ChangeProductFormViewState(productFormViewState));
  }
  GetProductFormDropdowns(): void {
    this.store.dispatch(new GetProductFormDropdowns());
  }
}
