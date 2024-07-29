import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { gql } from "apollo-angular";
import { GraphQLService } from "projects/ima-dashboard-categories/src/lib/domain/services/graphql.service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class MainmenuService {
  constructor(private http: HttpClient,    private graphQLService: GraphQLService) {}

  get() {
    return this.http.get(`${environment.ApiEndPoint}/mainmenu/index`).toPromise();
  }


  getBranches() {
    return this.graphQLService.query(gql`   {
      branch(company_Eq: "65259560ad58c205abcaf805") {
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
    return this.http
      .post(`${environment.ApiEndPoint}/mainmenu/add`, obj)
      .toPromise();
  }

  edit(user: any[], id: any) {
    return this.http
      .post(`${environment.ApiEndPoint}/mainmenu/edit/${id}`, user)
      .toPromise();
  }

  delete(id: any) {
    return this.http.get(`${environment.ApiEndPoint2}/mainmenu/delete/`+id)

  
      
  }
}
