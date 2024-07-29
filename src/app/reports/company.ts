import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import { GraphQLService } from 'projects/ima-dashboard-categories/src/lib/domain/services/graphql.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class company {

  constructor(private http: HttpClient,    private graphQLService: GraphQLService
    ) { }

    get() {
      return this.graphQLService.query(gql`{
       
        company{
          id
          name
          logo
      }
  
    }`);
    }
getUserCount(company:string){
  const variable = {"orderBy":"approved_orderBy","count":"id","match":[
    { "$eq": [{ "$toString": "$company" },company] },
    { "$eq": [{ "$toString": "$isLeader" }, "false"] }
   ]}
  return this.graphQLService.query(gql`{
    users(
        Function: "Reports"
        company_orderBy :"1"
    ) {
      count
      
    }
      
  }`,variable);

}
getLeaderCount(company:string){
  const variable = {"orderBy":"approved_orderBy","count":"id","match":[
    { "$eq": [{ "$toString": "$company" },company] },
                   { "$eq": [{ "$toString": "$isLeader" }, "true"] }
   ]}
  return this.graphQLService.query(gql`{
    users(
        Function: "Reports"
        company_orderBy :"1"
    ) {
      count
      
    }
      
  }`,variable);

}

getBranchCount(company:string){
  const variable = {"orderBy":"approved_orderBy","count":"id","match":[
    { "$eq": [{ "$toString": "$company" },company] }
                   
   ]}
  return this.graphQLService.query(gql`{
    branch(
        Function: "Reports"
        company_orderBy :"1"
    ) {
      count
      
    }
      
  }`,variable);

}
getTotalSalary(company:string){
  const variable = {"orderBy":"approved_orderBy","sum":"salary","match":[
    { "$eq": [{ "$toString": "$company" },company] }
                   
   ]}
  return this.graphQLService.query(gql`
  {
      users(
          Function: "Reports"
          company_orderBy :"1"
      ) {
        sum
        
      }
        
  }`,variable);

}
  add(obj: any) {
    return this.http.post(`${environment.ApiEndPoint}/UserGroup/add`, obj).toPromise();
  } 
  
  edit(user: any, id: any) {
    return this.http.post(`${environment.ApiEndPoint}/UserGroup/edit/${id}`, user).toPromise();
  }  

  delete(id: any) {
    return this.http.get(`${environment.ApiEndPoint}/UserGroup/delete/${id}`).toPromise();
  }  

}
