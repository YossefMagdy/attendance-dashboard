import { gql } from "@apollo/client/core";

export const EDIT_ATTRIBUTE_OPTION_QUERY = gql`{
    productAttributes(Function: "Edit") {
        id
      }
  }`;
