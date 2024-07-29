import { gql } from "apollo-angular";

export const PRODUCT_DROPDOWN_DATA_QUERY = `
    {
        products{
            id
            name_ar
        }
    }
`;

export const PRODUCTS_DATA_QUERY = `
    id
    name_ar
    name_en
    brand_id
    description_ar
    description_en
    short_description_ar
    short_description_en
    available_end_date
    available_start_date
    price
    mark_as_new
    product_type
    sku
    visible
    visible_individually
    photo
    badge_id
    category_id
    sub_category_id
    vendor_id
    attributes {
      name_ar
      is_base_price
      attributetype {
        is_photo
      }
      attributes_options {
        price
        attributes_optionsId
        product_optionsId
        value
        name_ar
        name_en
        required
        max_check
      }
    }
    specifications_options {
      name_ar
      id
      specifications_id
      specification {
        name_ar
      }
    }
    products_specifications {
      id
    }

    products_photos {
      id
      photo
    }
  `;

export const PRODUCTS_ADD_QUERY = gql`
  {
    products(Function: "Add") {
      name
      price
      supplier_id
      vendor_id
      category_id
      unit_id
    }
  }
`;

export const PRODUCTS_EDIT_QUERY = gql`
  {
    products(Function: "Edit") {
      id
      name
      price
      supplier_id
      vendor_id
      category_id
      unit_id
    }
  }
`;

export const PRODCUT_DELETE_QUERY = gql`
  {
    products(Function: "Delete") {
      id
    }
  }
`;



export const ADD_QUERY = gql`
  {
    products(Function: "Add") {
      id
      brand_id
      description_ar
      description_en
      mark_as_new
      name_ar
      name_en
      product_type
      short_description_ar
      short_description_en
      sku
      vendor_id
      price
      visible
      visible_individually
      sub_category_id
    }
  }
`;

export const ADD_With_Photo_QUERY = `{
  productAttributes(Function: "AddWithPhoto") {
    id
    value
    product_id
    attributes_options_id
    id
    price
    required
  }
}`;

export const ADD_productAttributes_QUERY = gql`
  {
    productAttributes(Function: "Add") {
      id
    }
  }
`;

export const Edit_With_Photo_QUERY = `{
  productAttributes(Function: "EditWithPhoto") {
    id
    value
    product_id
    attributes_options_id
    id
    price
    required
  }
}`;
export const Delete_Attr_OPTION = gql`
  {
    productAttributes(Function: "Delete") {
      id
    }
  }
`;
export const ADD_PRODUCTPHOTOS_QUERY = `{
  productsPhotos(Function: "AddWithPhoto") {
      id
      photo
      product_id
    }
}`;
export const EDIT_PRODUCTPHOTOS_QUERY = `{
  productsPhotos(Function: "EditWithPhoto") {
      id
      photo
    }
}`;

export const ADD_PRODUCT_Photo_QUERY = `{
  products(Function: "AddWithPhoto") {
    id
    photo
    brand_id
    description_ar
    description_en
    mark_as_new
    name_ar
    name_en
    product_type
    short_description_ar
    short_description_en
    sku
    vendor_id
    price
    visible
    visible_individually
    sub_category_id
  }
}`;
export const ADD_PRODUCT_With_Excel = gql`
  {
    products(Function: "Add") {
      id
    }
  }
`;

export const ADD_Specification_With_Excel = gql`
  {
    specifications(Function: "Add") {
      id
    }
  }
`;

export const ADD_SpecificationOptions_With_Excel = gql`
  {
    specificationOptions(Function: "Add") {
      id
    }
  }
`;

export const ADD_attributes_With_Excel = gql`
  {
    attributes(Function: "Add") {
      id
    }
  }
`;

export const ADD_attributesOptions_With_Excel = gql`
  {
    attributesOptions(Function: "Add") {
      id
    }
  }
`;

export const ADD_ATTRIBUTE_OPTION = gql`
  {
    productAttributes(Function: "Add") {
      product_id
      attributes_options_id
      id
      price
      max_check
      is_base_price
    }
  }
`;

export const ADD_SPECIFICATIONS_OPTION = `
  {
    productsSpecifications(Function: "Add") {
      product_id
      specification_options_id
      id
    }
  }
`;

export const Edit_SPECIFICATIONS_OPTION = gql`
  {
    productsSpecifications(Function: "Edit") {
      product_id
      specification_options_id
      id
    }
  }
`;
export const Delete_SPECIFICATIONS_OPTION = gql`
  {
    productsSpecifications(Function: "Delete") {
      id
    }
  }
`;

export const PRODUCT_EDIT_WITH_PHOTO_QUERY = `
  {
    products(Function: "EditWithPhoto") {
      id
    }
  }
`;
export const PRODUCT_EDIT_QUERY = `
  {
    products(Function: "Edit") {
      id
    }
  }
`;
export const Photo_DELETE_QUERY = gql`
  {
    productsPhotos(Function: "Delete") {
      id
    }
  }
`;

export const ExportProductToExcelFile = gql `{
  products( Function: "Details") {
      id
      price
      photo
      can_reserve
    brand_id
    badge_id
    category_id
    sku
    sub_category_id
    brand {
      name_ar
      name_en

    }
    badge {
      name_ar
      name_en
    }
    category {
  name_en
  name_ar
}
subcat {
  name_en
  name_ar
}
      sub_category_id
       description_en
       short_description_en
       description_ar
       short_description_ar
      name_en
      name_ar
      rate
      vendor_id
      rateCount

      specifications_options {
          id
           name_en
           name_ar
          specification {
               name_en
               name_ar
          }
      }
     attributes {
          attributetype {
              is_photo
          }
          name_en
          name_ar
          id
          is_base_price
          attribute_type_id

          attributes_options {
              id
              product_optionsId
              required
              attributes_optionsId
              price
              is_base_price
              value
              max_check
              name_en
              name_ar
          }
      }
      products_photos {
          id
          photo
      }
  }
}

`
