import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NzMessageService } from "ng-zorro-antd/message";
import { Router } from "@angular/router";
import { HeaderThemesService } from "projects/imakeapp-header/src/lib/domain/services/HeaderThemesService.service";
import { CookieService } from "ngx-cookie-service";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls:['./login.component.scss']
})
export class LoginComponent {
  routes: any[] = [];
  count: number = 0;
  constructor(
    private router: Router,
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

  login() {
    const { ...obj } = this.loginForm!.value;
    this.loader = true;
    this.cookie_s?.delete("token")
    this.headerService.sign_in(obj).subscribe(
      async (res: any) => {
        console.log(res)
        if (!res.error) {
          this.data = res;
          this.cookie_s?.set("school", JSON.stringify(res.data.id), undefined, '/');
          this.cookie_s?.set("token", JSON.stringify(res.token), undefined, '/');
          this.router.navigateByUrl(`/home`); 
          return
        }
        this.cookie_s.delete('school')
        this.message.error(res.message || "اسم المستخدم او كلمة المرور خاطئة");

      },
      (err) => {
        this.message.error("اسم المستخدم او كلمة المرور خاطئة");
        this.loader = false;
      }
    );
  }








}
