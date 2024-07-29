import { gql } from 'apollo-angular';

export const GET_BRANDS_DROPDOWN_QUERY = gql`
  {
    brands {
      id
      name_ar
      name_en
    }
  }
`;
