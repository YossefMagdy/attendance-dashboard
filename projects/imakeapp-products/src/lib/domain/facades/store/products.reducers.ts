
import { ProductState } from "../../entities/product.state";
import { productFormViewState, productsIndexViewState } from "../../entities/productModel";
import { AllProductsLoaded, AllSubProductsLoaded, ChangeProductsFilter, ChangeProductsIndexViewState, DeleteMultipleProduct, DeleteProduct, DeleteProductLoaded, EditProductWithPhoto, EditProductWithPhotoLoaded, GetProductFormDropdowns, GetProductFormDropdownsLoaded, ProductForExportLoaded, getAllProducts } from "./constants/constants";
import { ChangeProductFormViewState } from "./products.actions";






function getIntialState()
{
  let initialState: ProductState  = {
    Products: {},
    ProductsForExcel: [],
    ProductsFilter : {page : 1, limit : 10, filter : ''},
    laoding: false,
    has_error: "",
    productFormViewState : new productFormViewState(),
    productsIndexViewState : new productsIndexViewState()
  };

  return initialState
}



export function Products_reducer (state = getIntialState(), action: any)
{

  switch ( action.type )
  {

    case AllProductsLoaded:
    return {
      ...state,
      Products: action.data
    };
    case DeleteProduct:
    return {
      ...state,
      laoding : true
    };
    case DeleteMultipleProduct:
      return {
        ...state,
        laoding : true
      };

    case EditProductWithPhoto:
    return {
      ...state,
      laoding : true
    };
    case EditProductWithPhotoLoaded:
    return {
      ...state,
      productsIndexViewState : { ...state.productsIndexViewState, productFormModalVisibility : false},
      laoding : false
    };
    case GetProductFormDropdownsLoaded:
    return {
      ...state,
      productFormViewState: {...state.productFormViewState,
        brands: action.productformViewState?.brands,
        badges: action.productformViewState?.badges,
      },
      laoding : false
    };
    case DeleteProductLoaded:
    return {
      ...state,
      laoding : false
    };

    case ProductForExportLoaded:
    return {
      ...state,
      ProductsForExcel: action.data
    };

    case AllSubProductsLoaded:
    return {
      ...state,
      Products: action.data
    };
    case ChangeProductsIndexViewState:
    return {
      ...state,
      productsIndexViewState : action.productsIndexViewState
    };
    case ChangeProductFormViewState:
    return {
      ...state,
      productFormViewState : action.productFormViewState
    };

    default:
    return state;

  }

}
