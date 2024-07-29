export interface ProductExcel {
  id: any;
  sub_category_id: any;
  category_id: any;
  price?:                  number;
  sku?:                    any;
  short_description_en?:   string;
  short_description_ar?:   string;
  name_en?:                string;
  name_ar?:                string;
  description_en?:         string;
  description_ar?:         string;
  photo?:                  string;
  vendor_id?:              number;
  brand?:                  Brand;
  badge?:                  Badge;
  brand_ar?:string
  brand_id?:number

  subcategory_id?:number
  brand_en?:string
  badge_ar?:string
  badge_en?:string
  badge_id?:number
  attributes?:Attribute[]
  category?:CategoriesModelExcel;
  subcat?:CategoriesModelExcel;

  attributes_options?:     AttributesOption[];
  specifications_options?: SpecificationsOption[];
  products_photos?:        ProductsPhoto[];
}

export interface AttributesOption {
  attribute?: Attribute;
  name_ar?:   string;
  name_en?:   string;
  vendor_id?: number;
  vendorId?:  number;
  required?:  number;
  price?:  number;
  is_base_price?:  number;

  max_check?:  number;
  sku?:string
}

export interface Attribute {
  name_ar?: string;
  name_en?: string;
  sku?:string
  attributes_options?:     AttributesOption[];

}

export interface Badge {
  name_ar?: string;
  name_en?: string;
  vendor_id?: number;
}

export interface Brand {
  name_ar?: string;
  name_en?: string;
  vendor_id?: number;
}

export interface ProductsPhoto {
  photo?:     string;
  vendor_id?: number;
  sku?:string
}

export interface SpecificationsOption {
  specification?: Attribute;
  vendor_id?:     number;
  vendorId?:      number;
  name_ar?: string;
  name_en?: string;
  sku?:string

}

export interface Specifications {
  name_ar?: string;
  name_en?: string;
  vendor_id?:     number;
  sku?:string

}


export class CategoriesModelExcel {
  id?: number;
  category_name_ar?: string;
  category_name_en?: string;
sku?:string
subCat_name_ar?: string;
subCat_name_en?: string;
  sub_categories?: CategoriesModelExcel
  name_ar: any;
  name_en: any;
}
