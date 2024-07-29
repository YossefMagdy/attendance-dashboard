import { ProductModel, ProductsData, ProductsFilter, productFormViewState, productsIndexViewState } from './productModel';

export interface ProductState {
  Products?: ProductsData;
  ProductsForExcel?: ProductModel[];
  ProductsFilter: ProductsFilter;
  laoding?: boolean;
  has_error?: string;
  productsIndexViewState : productsIndexViewState,
  productFormViewState : productFormViewState,
}
