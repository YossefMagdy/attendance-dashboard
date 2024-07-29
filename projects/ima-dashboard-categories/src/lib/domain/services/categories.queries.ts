import { gql } from "apollo-angular";
//  JSON.parse(localStorage.getItem("user")).restaurants.id;

export const CATEGORIES_DROPDOWN_DATA_QUERY = gql`
  {
    categories {
      name_ar
      name_en
      id
    }
  }
`;
export const CATEGORIES_DATA_QUERY = `
    id
    name_ar
    name_en
    description_ar
    description_en
    most_popular
    sort
    home_visible
    created_at
    photo
    home_photo
    menu_photo
    sub_categories(parentIsNull:true){
      id
      name_ar
      name_en
      description_ar
      description_en
      most_popular
      sort
      home_visible
      home_photo
      menu_photo
      created
      photo
      category_id
      parent
      vendor_id
      subCategory{
        id
        name_ar
        name_en
        description_ar
        description_en
        most_popular
        sort
        home_visible
        created
        photo
      }
    }
`;

export const CATEGORIES_DELETE_QUERY = gql`
  {
    categories(Function: "Delete") {
      id
    }
  }
`;
export const SUBCATEGORIES_DELETE_QUERY = gql`
  {
    subCategories(Function: "Delete") {
      id
    }
  }
`;
export const CATEGORIES_ADD_QUERY = gql`
  {
    categories(Function: "Add") {
      id
    }
  }
`;
export const CATEGORIES_ADD_WITH_PHOTO_ARRAY_QUERY = `
  {
    categories(Function: "AddWithPhotoArray") {
      id

    }
  }
`;
export const CATEGORIES__ARRAY_QUERY = gql`
  {
    categories(Function: "Add") {
      id
    }
  }
`;

export const CATEGORIES_EDIT_WITH_PHOTO_QUERY = `
  {
    categories(Function: "EditWithPhotoArray") {
      id

    }
  }
`;
export const CATEGORIES_EDIT_QUERY = gql`
  {
    categories(Function: "Edit") {
      id
      sub_categories {
        id
        subCategory {
          id
        }
      }
    }
  }
`;

export const sCATEGORIES_EDIT_QUERY = `
  {
    categories(Function: "Edit") {
      id
      sub_categories {
        id
        subCategory {
          id
        }
      }
    }
  }
`;
