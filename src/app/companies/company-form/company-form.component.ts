import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GenericService } from 'projects/image-gallaries/src/domain/services/generic.service';
import { UserGroup } from 'src/app/core/enum/UserGroup';
import { UserGroupService } from 'src/app/core/services/UserGroup/UserGroup';
import { ComapanyService } from '../services/companies.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit, OnDestroy  {

  form!: FormGroup;
  isAdd: boolean = false;
  categories: any[] = [];
  obj: any = null;
  id: any;
  sub: any[] = [];
  changed: any[] = [];
  groups: any;
  leaders: any;
  

  constructor(
    private service: ComapanyService,
    private userGroupService: UserGroupService,
    private navigate: Router,
    private generic: GenericService,
    private fb: FormBuilder,
    private cookie_s: CookieService,

  ) {}
  ngOnDestroy(): void {
    localStorage.removeItem("item");
  }

  ngOnInit() {
    this.getGroup();

    this.obj = localStorage.getItem("item");
    this.createForm();

    if (this.obj) {
      const dataGroup = this.form.get('data') as FormGroup;

      const obj = JSON.parse(this.obj);
      this.id = obj.id;
      dataGroup.reset(obj);
    }
  }

  createForm() {
   
    if (this.obj) {
      this.form = this.fb.group({
        // User-related form controls go here
        data: this.fb.group({
          // User-related form controls go here
          isLeader: [false],
          userGroup: [UserGroup.company],
          name: [null, Validators.required],
          email:  [null, Validators.required],
          mobile:  [null, Validators.required],
          expire_date:  [null, Validators.required],

          logo: [''],
        }),
      })
        }else {
          this.form = this.fb.group({
            data: this.fb.group({
              // User-related form controls go here
              isLeader: [false],
              name: [null, Validators.required],
              email:  [null, Validators.required],
              mobile:  [null, Validators.required],
              expire_date:  [null, Validators.required],

              logo: [''],
            }),
            user: this.fb.group({
              full_name: [false],
              password:  [null, Validators.required],
              userGroup: [UserGroup.company],


            }),
          });
      
          
        }
  }

  
  async getGroup() {
  this.userGroupService.get().subscribe((data:any)=>{
    this.groups = data.data.usergroups
    });
  }

  async add() {
    const values = this.form.getRawValue();


    if (this.form.valid) {
      const formDataa = new FormData();
      formDataa.append("data", JSON.stringify(values.data));
      formDataa.append('logo', this.form!.get("data")!.get('logo')!.value);

      formDataa.append("user", JSON.stringify(values.user));
      this.isAdd = true;
   this.service.add(formDataa).subscribe(
        () => {
          this.isAdd = false;

          this.generic.showNotification(
            "success",
            "اضافة",
            "تمت العملية بنجاح"
          );
          this.navigate.navigateByUrl("/home/companies/all");
          this.form.reset();
          this.sub = [];
        },
        () => {
          this.isAdd = false;
          this.generic.showNotification(
            "error",
            "اضافة",
            "حدث خطأ بالرجاء المحاولة في وقت لاحق"
          );
        }
      );
    }
  }

  async edit() {
    if (this.form.valid) {
      const values = this.form.getRawValue();
      values.data.id = this.id;
   
      this.isAdd = true;
      await this.service.editWithPhoto(values.data,this.form!.get("data")!.get('logo')!.value).subscribe(
        () => {
          this.isAdd = false;

          this.generic.showNotification(
            "success",
            "تعديل",
            "تمت العملية بنجاح"
          );
          this.navigate.navigateByUrl("/home/companies/all");
        },
        () => {
          this.isAdd = false;
          this.generic.showNotification(
            "error",
            "تعديل",
            "حدث خطأ بالرجاء المحاولة في وقت لاحق"
          );
        }
      );
    }
  }

  onFileChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];
  
    if (file) {
      // Check whether the 'logo' control is present in the 'data' group
      const dataGroup = this.form.get('data') as FormGroup;
  
      if (dataGroup) {
        dataGroup.patchValue({
          logo: file,
        });
      }
    }
  }
}
 