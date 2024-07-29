import { gql } from 'apollo-angular';

export const GET_BADGES_DROPDOWN_QUERY = gql`
  {
    badges {
      id
      name_ar
      name_en
    }
  }
`;
