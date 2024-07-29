import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { gql } from "apollo-angular";
import { GraphQLService } from "projects/ima-dashboard-categories/src/lib/domain/services/graphql.service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class BranchesService {
  constructor(private http: HttpClient,    private graphQLService: GraphQLService) {}


  getBranches(company:string) {
    return this.graphQLService.query(gql`   {
      branch(company_Eq:${company}) {
          id
          name
          address
          company
          lat
          lng
          mobile
          zone
      }
  }`);

 
  }
  indexbyrole(params: any) {
    return this.http
      .get(`${environment.ApiEndPoint2}/mainmenu/indexbyrole/`+params)
      .toPromise();
  }

  search(name: string) {
    return this.http
      .post<any[]>(`${environment.ApiEndPoint}/mainMenu/indexbyroleSearch`, {
        name,
      })
      .toPromise();
  }

  add(obj: any) {
    return   this.graphQLService.query(gql`  {
      branch(Function: "Add"){
          id
      }
  }`,
  obj);
  }


  edit(data: any, id: any) {

    return   this.graphQLService.query(gql`{
      branch(Function: "Edit"){
          id
      }
  }`,
  data);
}

  delete(id: any) {
    return this.graphQLService.query(gql`{
      branch(Function: "Delete"){
          id
      }
  }`,id
  );

  
      
  }
}
