import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { gql } from "apollo-angular";
import { GraphQLService } from "./graphql.service";
import { CATEGORIES_DROPDOWN_DATA_QUERY } from "./categories.queries";
import { SUBCATEGORIES_DROPDOWN_DATA_QUERY } from "./sub-categories.queries";
import { CategoriesModel } from "../entities/MenuModel";

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  constructor(
    private http: HttpClient,
    private graphQLService: GraphQLService
  ) {}

  getCategories() {
    return this.http
      .get<Array<CategoriesModel>>(`${environment.ApiEndPoint2}/Categories/index`)

  }

  getCategoriesDropdown() {
    return this.graphQLService.query(
      gql`
        ${CATEGORIES_DROPDOWN_DATA_QUERY}
      `
    );
  }
  getSubCategoriesDropdown() {
    return this.graphQLService.query(
      gql`
        ${SUBCATEGORIES_DROPDOWN_DATA_QUERY}
      `
    );
  }

  getCuisines() {
    return this.http
      .get<Array<CategoriesModel>>(
        `${environment.ApiEndPoint2}/Restaurant/getCusinesList/0`
      )
      .toPromise();
  }

  add(obj:any) {
    return this.http
      .post(`${environment.ApiEndPoint2}/Categories/add`, obj)

  }

  edit(obj:any) {
    return this.http
      .post(`${environment.ApiEndPoint2}/Categories/edit/${obj.id}`, obj)

  }

  delete(id:number) {
    return this.http
      .get(`${environment.ApiEndPoint2}/Categories/delete/${id}`)

  }
}
