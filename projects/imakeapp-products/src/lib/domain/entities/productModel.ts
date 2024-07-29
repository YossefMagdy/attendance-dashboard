import { Attribute, ProductExcel } from './ExcelModels';
import { IBadgesDropdown } from './badges.model';
import { IBrandsDropdown } from './brands.model';
import { configuration, filterInputs, messages } from './filterobjects';

export interface ProductsData {
  products?: Products;
}

export interface Products {
  results?: ProductModel[];
  total?: number;
}

export interface ProductModel {
  id?: number;
  name_ar?: string;
  name_en?: string;
  description_ar?: string;
  description_en?: string;
  short_description_ar?: string;
  short_description_en?: string;
  available_end_date?: null | string;
  available_start_date?: string;
  price?: number;
  mark_as_new?: number;
  product_type?: string;
  sku?: string;
  visible?: number;
  visible_individually?: number;
  photo?: string;
  badge_id?: number;

  attributes: Attribute[];
  specifications_options?: any[];
  products_specifications?: any[];
  products_photos?: any[];
  vendor_id?: string;
}

export interface Attributetype {
  is_photo?: number;
  __typename?: string;
}

export interface ProductsFilter {
  page: number;
  limit: number;
  filter: '';
}

export class productsIndexViewState {
  products: ProductModel[] = [];
  totalProducts?: number;
  productCategories: any;
  rowData: ProductModel[] = [];
  clonedProduct: { [id: number]: any } = {};
  selectedAttributeOptions: any;
  attributeOptionsModalVisibility?: boolean;
  attributeIndex: number = -1;
  productIndex: number = -1;
  timer: any;
  selectedProduct: any;

  excelData: any;
  ExcelData?: ProductExcel[];
  excelInput2: any;

  productPhotoFile: any;
  defaultImg: string = '../../../../../assets/images/default.png';

  configuration = configuration;
  filterInputs = filterInputs;
  messages = messages;
  productsFilter: ProductsFilter = { filter: '', limit: 10, page: 1 };

  productFormModalVisibility: boolean = false;
}

export class productFormViewState {
  brands: IBrandsDropdown[] = [];
  badges: IBadgesDropdown[] = [];
}
