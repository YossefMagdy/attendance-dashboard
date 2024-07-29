import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

import { EDIT_ATTRIBUTE_OPTION_QUERY } from "./products-attributes.queries";
import { GraphQLService } from "./graphql.service";

@Injectable({
  providedIn: "root",
})
export class ProductsAttributesService {
  constructor(
    private http: HttpClient,
    private graphQLService: GraphQLService
  ) {}
  add(data: any) {
    return this.http.post(`${environment.ApiEndPoint}/products/add`, data);
  }

  edit(data: any) {
    return this.graphQLService.query(EDIT_ATTRIBUTE_OPTION_QUERY, data);
  }

  delete(id:number) {
    return this.http.get(`${environment.ApiEndPoint}/products/delete/${id}`);
  }
}
