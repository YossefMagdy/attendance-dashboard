import { gql } from "apollo-angular";





export const GET_Header_QUERY_THEME1 = (lang: string)=> gql`
{


  categories {
      id
      name:name_${lang}
      menu_photo
      sub_categories {
          id
          name:name_${lang}
      }
  }
  


}
`;



export const FETCH_CART_QUERY = (lang: string)=> gql`{
  
  carts (Function: "Filters")
  {
    id
    cart_product_specification 
    {
      attribute_id
      attributes_options_id
      attribute_options 
      {
        attributes_options
        {
          name: name_${lang}
        }
      }
    }
    storeAmount
    amount
    price
    product 
    {
      name: name_${lang}
      description: description_${lang}
      photo
      brand 
      {
        name: name_${lang}
      }
      badge 
      {
        name: name_${lang}
        color
      }
      offers 
      {
        id
        percentage
      }
    }
  }
  
}`;



export const SEARCHING_ITEMS_QUERY = (lang: string)=>{
  
  return gql`{
    products (limit: 10 , Function: "Filters" ) {
      id
      name: name_${lang}
      photo
      brand
      {
        name: name_${lang}
      }
    }
  }`;
};


export const GET_CATEGORIES_QUERY = (lang: string)=> gql`
{


  categories {
      id
      name:name_${lang}
      menu_photo
      sub_categories {
          id
          name:name_${lang}
      }
  }


}
`;


export const DELETE_CART_QUERY = gql`{

  carts (Function: "Delete")
  {
    id
  }
  
}`;