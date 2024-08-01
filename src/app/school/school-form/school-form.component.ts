import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenericService } from 'projects/image-gallaries/src/domain/services/generic.service';
import { SchoolService } from '../services/school.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.scss']
})
export class SchoolFormComponent implements OnInit, OnDestroy  {

  form!: FormGroup;
  isAdd: boolean = false;
  categories: any[] = [];
  obj: any = null;
  id: any;

  

  constructor(
    private service: SchoolService,
    private navigate: Router,
    private generic: GenericService,
    private fb: FormBuilder,

  ) {}
  ngOnDestroy(): void {
    localStorage.removeItem("item");
  }

  ngOnInit() {
    this.obj = localStorage.getItem("item");
    this.createForm();

    if (this.obj) {
      const obj = JSON.parse(this.obj);
      this.id = obj.id;
      this.form.patchValue(obj);
    }
  }

  createForm() {
   
    if (this.obj) {
      this.form = this.fb.group({
          name: [null, Validators.required],
          address: [null, Validators.required],
          phone:  [null, Validators.required],
          logo: [null],
      
      })
        }else {
          this.form = this.fb.group({
            name: [null, Validators.required],
            address: [null, Validators.required],
            phone:  [null, Validators.required],
            logo: [''],  
            user: this.fb.group({
              username: [null, Validators.required],
              password:  [null, Validators.required],
              email: [null, Validators.required],
            }),
          });
        }
  }



  addSchoolsData(){
    if (this.form.valid) {
      const formData = new FormData();
      // formData.append("data", JSON.stringify(this.form.value));
      formData.append('name',this.form.get('name')?.value)
      formData.append('address',this.form.get('address')?.value)
      formData.append('phone',this.form.get('phone')?.value)
      formData.append('user[username]',this.form.get('user')?.get('username')?.value)
      formData.append('user[password]',this.form.get('user')?.get('password')?.value)
      formData.append('user[email]',this.form.get('user')?.get('email')?.value)
      formData.append('logo', this.form!.get('logo')!.value);
      this.isAdd = true;
      this.service.addSchoolsData(formData).subscribe( { 
        next:()=>{
        this.isAdd = false;
          this.generic.showNotification(
            "success",
            "تعديل",
            "تمت العملية بنجاح"
          );
          this.navigate.navigateByUrl("/home/school/all");
          },
          error:(error)=>{
            this.isAdd = false;
            this.generic.showNotification(
            "error",
            "اضافه",
            error.message
          );
          }
  })
    }
  }

  editSchoolsData(){
    if(this.form.valid){
      this.isAdd = true;

      const formData = new FormData();
      // formData.append('id',this.id)
      formData.append('name',this.form.get('name')?.value)
      formData.append('address',this.form.get('address')?.value)
      formData.append('phone',this.form.get('phone')?.value)
      formData.append('logo', this.form!.get('logo')!.value);
        this.service.editSchoolsData(formData,this.id).subscribe({
          next:()=>{
                this.isAdd = false;
                  this.generic.showNotification(
                    "success",
                    "تعديل",
                    "تمت العملية بنجاح"
                  );
                  this.navigate.navigateByUrl("/home/school/all");
          },
          error:(error)=>{
            this.isAdd = false;
            this.generic.showNotification(
            "error",
            "تعديل",
            error.message
          );
          }
        })
    }
  }



  onFileChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];
  
    if (file) {
      // Check whether the 'logo' control is present in the 'data' group
      const form = this.form as FormGroup;
  
      if (form) {
        this.form.get('logo')?.setValue(file)
      }
    }
  }
}
 