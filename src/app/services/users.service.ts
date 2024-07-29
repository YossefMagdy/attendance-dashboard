import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import { CookieService } from 'ngx-cookie-service';
import { GraphQLService } from 'projects/image-gallaries/src/domain/services/graphql.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient,    private graphQLService: GraphQLService,    public cookie_s:CookieService,
    ) {}


  get(page:number,limit:number) {
    const VAR = 
    {
      "count": "id",
      "match": 
              { "$eq": [{ "$toString": "$company" },JSON.parse(this.cookie_s.get("company"))] }
            
          
        }
    
    
    return this.graphQLService.query(gql` {
      usercount:users(Function: "Reports" company_orderBy: "1") {
     
        count
      }
            users(company_Eq: ${this.cookie_s.get("company")} isLeader_Eq: "false"  pages:[${page + "," + limit}]
      ){
          id
          branch{ id name }
          company {name}
job
position
photo
          email
          full_name
          salary
          isLeader
          leader {full_name}
          mobile
          attendDays
      }
  }`,VAR);

 
  }

  getLeaders() {
    return this.graphQLService.query(gql`{
      users(company_Eq: ${this.cookie_s.get("company")}  isLeader_Eq: "true"){
          id
          branch{ id name }
          company {name}
          email
          full_name
          isLeader
          leader {full_name}
          mobile
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
      .post(`${environment.ApiEndPoint2}/users/createUser` ,obj)
  }

  edit(data: any, imgFile: any) {
    const formData = new FormData();
    formData.append("query", `{
      users(Function: "EditWithPhoto"){
          id
      }
  }`);
    if (imgFile) formData.append("photo", imgFile);
    formData.append(
      "variables",
      JSON.stringify({ photoKey: "photo", ...data })
    );
  
    return this.http.post(`${environment.graphqlendpoint}`, formData);

}

  delete(id: any) {
    return this.graphQLService.query(gql`{
      users(Function: "Delete"){
          id
      }
  }`,id
  );

  
      
  }

  SearchForUser(body: any) {
    return this.http
    .post<any[]>(`${environment.ApiEndPoint}/users/SearchForUser`,body)
  
      
  }
  getAttendances(useriD:number) {
    debugger
    return this.graphQLService.query(gql`{
    attendTimes(user_Eq: "${useriD}"){
          user {full_name}
          id
          start_time
          end_time
          day
        }
      
  }`);
  }
  EditAttendances(data: any) {
    return this.graphQLService.query(gql`{
      attendTimes(Function: "Edit"){
          id
      }
  }`,data);
  }
  AddAttendances(data: any) {
    return this.graphQLService.query(gql`{
      attendTimes(Function: "Add"){
          id
      }
  }`,data);
  }
  DeleteAttendanceTime(data: any) {
    return this.graphQLService.query(gql`{
      attendTimes(Function: "Delete"){
          id
      }
  }`,data);
  }
  getTransactions() {
    return this.graphQLService.query(gql`{
      transactionsmodels(company_Eq :${this.cookie_s.get("company")} ) {
        type
        time
        attendDate
        timeDifferenceStart
        company 
        timeDifferenceEnd
        approved
        closed
        notes
        photo
        user {
        full_name
        branch {
        name
          }
        }
      }
      
  }`);
  }
}
