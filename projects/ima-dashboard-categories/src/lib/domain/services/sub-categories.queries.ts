import { gql } from "apollo-angular";

export const CATEGORIES_DROPDOWN_DATA_QUERY = `
{
    categories{
        id
        name_ar
    }
}
`;
export const SUBCATEGORIES_DROPDOWN_DATA_QUERY = `
{
    subCategories{
        id
        name_ar
    }
}
`;
export const SUBCATEGORIES_DATA_QUERY = `
    id
    name_ar
    name_en
    description_ar
    description_en
    home_visible
    sort
    most_popular
    category_id
    photo
    category {
      id
      name_ar
    }
`;

export const SUBCATEGORIES_DELETE_QUERY = gql`
  {
    subCategories(Function: "Delete") {
      id
    }
  }
`;

export const SUBCATEGORIES_ADD_QUERY = `
  {
    subCategories(Function: "AddWithPhoto") {
      category_id
      photo
    }
  }
`;
export const SUB_CATEGORIES_EDIT_QUERY = gql`
  {
    subCategories(Function: "Edit") {
      category_id
    }
  }
`;

export const SUB_CATEGORIES_ADD_QUERY = gql`
  {
    sub_categories(Function: "Add") {
      category_id
    }
  }
`;

export const SUB_CATEGORY_ADD_QUERY = gql`
  {
    subCategory(Function: "Add") {
      category_id
    }
  }
`;
export const SUBCATEGORIES_EDIT_QUERY = `
  {
    subCategories(Function: "EditWithPhoto") {
      id
      category_id
      photo
    }
  }
`;

export const SUBCATEGORIES_ADD_WITH_PHOTO_QUERY = `
{
  subCategories(Function: "AddWithPhotoArray") {
    id
    category_id
  }
}
`;

export const SUBCATEGORIE_ADD_QUERY = gql`
  {
    subCategories(Function: "Add") {
      id
      category_id
    }
  }
`;

export const SUBCATEGORIES_EDIT_WITH_PHOTO_QUERY = `
{
  subCategories(Function: "EditWithPhotoArray") {
    id
    category_id
  }
}
`;

export const CATEGORIES_EDIT = gql`
  {
    categories(Function: "Edit") {
      id
    }
  }
`;
export const SUBCATEGORIES_EDIT = gql`
  {
    subCategories(Function: "Edit") {
      id
    }
  }
`;
export const SUB_SUBCATEGORIES_ADD_WITH_PHOTO_QUERY = `
{
  subCategories(Function: "AddWithPhoto") {
   id
  }
}
`;
export const SUB_SUBCATEGORIES_ADD_QUERY = gql`
  {
    subCategories(Function: "Add") {
      id
    }
  }
`;
export const SUB_SUBCATEGORIES_EDIT_WITH_PHOTO_QUERY = `
{
  subCategories(Function: "EditWithPhoto") {
    id
    parent
  }
}
`;
