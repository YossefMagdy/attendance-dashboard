import { gql } from "apollo-angular";
//  JSON.parse(localStorage.getItem("user")).restaurants.id;

export const ADD_PRODUCTPHOTOS_QUERY = `{
  productsPhotos(Function: "AddWithPhoto") {
      id
      photo
      product_id
    }
}`;


export const Get_Gallety = `
  {
    gallery(gallery_type_id: 1) {
        id
        photo
        gallery_type_id
    }
}
`