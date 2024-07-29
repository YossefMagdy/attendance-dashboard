import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NzMessageService } from "ng-zorro-antd/message";
import { Router } from "@angular/router";
import { GraphQLService } from "projects/imakeapp-products/src/lib/domain/services/graphql.service";
import { userWizard_DATA_QUERY } from "../userWizard/queries/userWizard.queries";
import { HeaderThemesService } from "projects/imakeapp-header/src/lib/domain/services/HeaderThemesService.service";
import { LanguageService, WebsiteAttributesService } from "projects/imakeapp-shared";
import { CookieService } from "ngx-cookie-service";
import { UserGroup } from "src/app/core/enum/UserGroup";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent {
  routes: any[] = [];
  count: number = 0;
  constructor(
    private router: Router,
    private languageService:LanguageService,
    private webattribute:WebsiteAttributesService,
    private graphQLService: GraphQLService,
    public fb: FormBuilder,
    public cookie_s:CookieService,
    public message:NzMessageService,
    private headerService:HeaderThemesService
  ) {}
  show: boolean = false;
  loginform = true;
  recoverform = false;
  username:any
  password:any

  loginForm?: FormGroup;
  loader = false;
  data?:any;
  wizardData?:any;

  ngOnInit(): void {
    this.loginForm = this.fb?.group({
      username: [ '' , Validators.required ],
      password: [ '' , Validators.required ],
    });


  }
  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }

  login() {
    const { ...obj } = this.loginForm!.value;
    const returnUrl = localStorage.getItem("returnUrl") || "/restaurants/all";
    const CompanyUrl = "/dashboard/dashboard1";

    this.loader = true;
    this.cookie_s?.delete("token")
    this.headerService.sign_in(obj).subscribe(
      async (res: any) => {
        if (res) {


          this.data = res;
            if (res.data.user[0].userGroup == UserGroup.company) {
//               const dateString1 = '2022-01-01';
// const dateString2 = '2023-01-01';

const date1 = new Date(Date.parse(res.data.user[0].companies[0].expire_date));
const date2 = new Date();


// Compare dates
if (date1 > date2) {
          this.cookie_s?.set("company", JSON.stringify(res.data.user[0].companies.length > 0 ? res.data.user[0].companies[0]._id : 0), undefined, '/');
              this.cookie_s?.set("token", JSON.stringify(res.data.token), undefined, '/');
              this.cookie_s?.set("usergroup", JSON.stringify(res.data.user[0].userGroup), undefined, '/');

              this.router.navigateByUrl(`/home/reports/display`);
            } else if (date1 <= date2) {
              this.message.error("من فضلك قم بتجديد الاشتراك");

            } 
                
            }else if (res.data.user[0].userGroup == UserGroup.admin){

              this.cookie_s?.set("usergroup", JSON.stringify(res.data.user[0].userGroup), undefined, '/');

              this.cookie_s?.set("token", JSON.stringify(res.data.token), undefined, '/');
              this.router.navigateByUrl(`/home/companies/all`);

            }
            
          else {
              this.message.error("يجب الدخول بحساب شركة");


            }
         

        }
        else
        {
        this.message.error("اسم المستخدم او كلمة المرور خاطئة");
        }
      },
      (err) => {
        this.message.error("اسم المستخدم او كلمة المرور خاطئة");
        this.loader = false;
      }
    );
  }





  Redirct()
  {

      // if (!this.data.user.new_pass) {
      // this.router.navigateByUrl(
      //   `/restuarantDetails/${this.data.user.restaurants.id}`
      // );
      this.graphQLService.query(userWizard_DATA_QUERY, {}).subscribe({
        next: (response: any) => {
          this.wizardData = response.data.userWizard;
          for (let index = 0; index < this.wizardData?.length; index++) {
            if (this.wizardData[index].is_done) {
              this.count++;
            }
          }
          // if (this.count / this.wizardData?.length != 1) {
          //   this.router.navigateByUrl("/userWizard/all");
          // } else {
            this.router.navigateByUrl(`/home/reports/display`);
         // }
        },
      });

  }




}
