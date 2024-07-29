import { gql } from "apollo-angular";

export const userWizard_DATA_QUERY = gql`
  {
    userWizard {
      id
      wizard_step_id
      is_done
      step {
        title_ar
        description_ar
        time
        redirect_url
      }
    }
  }
`;
export const userWizard = gql`
  {
    userWizard(Function: "Edit") {
      id
    }
  }
`;
export const userWizar = gql`
  {
    userWizard(Function: "Delete") {
      id
    }
  }
`;
