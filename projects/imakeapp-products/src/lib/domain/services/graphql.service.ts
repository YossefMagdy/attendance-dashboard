import { Injectable } from "@angular/core";
import { DocumentNode } from "@apollo/client/core";
import { Apollo, gql } from "apollo-angular";

@Injectable({ providedIn: "root" })
export class GraphQLService {
  constructor(private apollo: Apollo) {}

  query(query_string: DocumentNode, variables: any = {}) {
    if (Object.keys(variables).length != 0) {
      return this.apollo.watchQuery({
        query: query_string,
        fetchPolicy: "no-cache",
        variables: variables,
      }).valueChanges;
    } else {
      return this.apollo.watchQuery({
        fetchPolicy: "no-cache",

        query: query_string,
      }).valueChanges;
    }
  }

  mutate(query_string: DocumentNode, variables: any) {
    return this.apollo.mutate({
      mutation: query_string,
      variables: variables,
    });
  }

  getData(
    table: string,
    data: string,
    page?: number,
    limit?: number,
    filter?: any
  ) {
    return this.apollo.watchQuery({
      query: gql`
        {
          ${table}
          (
            ${filter || ""}
            pages:[${page + "," + limit}]
          )
       {
            ${data}
          }
        }`,
      errorPolicy: "all",
      fetchPolicy: "no-cache",

    }).valueChanges;
  }
}
