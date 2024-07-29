import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "../../entities/product.state";




export const Products_state = createFeatureSelector<ProductState>('Products_state');



export const getAllProductsSelector = createSelector(
  Products_state, (states)=> {
    return states.Products ?? {};
  }
);

export const getAllProductsForExcelSelector = createSelector(
  Products_state, (states)=> {
    return states.ProductsForExcel!;
  }
);

export const productsIndexViewStateSelector = createSelector(
  Products_state, (states)=> {
    return states.productsIndexViewState;
  }
);
export const productFormViewStateSelector = createSelector(
  Products_state, (states)=> {
    return states.productFormViewState;
  }
);
