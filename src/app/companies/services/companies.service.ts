import { gql } from 'apollo-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GraphQLService } from 'projects/image-gallaries/src/domain/services/graphql.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComapanyService {

  constructor(private http: HttpClient,    private graphQLService: GraphQLService) {}


  getData() {
  return this.graphQLService.query(gql`{
   
    company{
      id
      name
      mobile
      logo
      email
      expire_date
  }

}`);
}

add(obj: any) {
return this.http
.post(`${environment.ApiEndPoint2}/companies/createCompany` ,obj)
} 

edit(data: any, id: any) {

  return   this.graphQLService.query(gql`{
    company(Function: "EditWithPhoto"){
        id
    }
}`,
data);
} 

editWithPhoto(data: any, imgFile: any) {
  const formData = new FormData();
  formData.append("query", `{
    company(Function: "EditWithPhoto"){
        id
    }
}`);
  if (imgFile) formData.append("photo", imgFile);
  formData.append(
    "variables",
    JSON.stringify({ photoKey: "logo", ...data })
  );

  return this.http.post(`${environment.graphqlendpoint}`, formData);
}

delete(id: any) {
return this.http.get(`${environment.ApiEndPoint}/companies/delete/${id}`);
}  
}