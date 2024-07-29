import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenericService } from 'projects/image-gallaries/src/domain/services/generic.service';
import { ItemsService } from 'src/app/services/items/items.service';

@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.scss']
})
export class AdditemsComponent {
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
    private service: ItemsService,
    private navigate: Router,
    private generic: GenericService,
    private fb: FormBuilder
  ) {}
  ngOnDestroy(): void {
    localStorage.removeItem("item");
  }

  ngOnInit() {
    this.getGroup();

    this.obj = localStorage.getItem("item");
    console.log(this.obj)
    this.createForm();
    this.getLeaderLisr()

    if (this.obj) {
      const obj = JSON.parse(this.obj);
      console.log(obj);
      this.id = obj._id || obj.id;
      this.form.reset(obj);
    }
  }
getLeaderLisr(){
  // this.service.getLeaders().subscribe((data:any)=>{
  //   this.leaders = data.data.users
  //   console.log(this.groups)
  //   });
}
  createForm() {
    if (this.obj) {
console.log("edit")
    this.form = this.fb.group({
      email: [null, Validators.required],
      full_name: [null, Validators.required],
      mobile: [null, Validators.required],
      leader: [null, Validators.required],
      salary: [null, Validators.required],
      attendDays: [null, Validators.required],
      job: [null],
      position: [null],
      photo: [''],


    });
  }else {
    console.log("add")

    this.form = this.fb.group({
      email: [null, Validators.required],
      full_name: [null, Validators.required],
      mobile: [null, Validators.required],
      leader: [null, Validators.required],
      salary: [null, Validators.required],
      attendDays: [null, Validators.required],
      password: [null, Validators.required],
      job: [null],
      position: [null],
      photo: [''],

    });
  }
  }
  onFileChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];
  
    if (file) {
      this.form.patchValue({
        photo: file,
      });
    }
  }
  
  async getGroup() {
  // this.userGroupService.get().subscribe((data:any)=>{
  //   this.groups = data.data.usergroups
  //   console.log(this.groups)
  //   });
  }

   add() {
   
    
    if (this.form.valid) {
      const values = this.form.getRawValue();
      values.isLeader = false

      const formDataa = new FormData();
      values.userGroup = "65259a6fad58c205abcaf80b"
      formDataa.append("data", JSON.stringify(values));
      formDataa.append('photo', this.form!.get('photo')!.value);

      console.log(console.log(formDataa.getAll('data')))


      this.isAdd = true;
      //  this.service.add(formDataa).subscribe(
      //   () => {
      //     this.isAdd = false;
      //     this.generic.showNotification(
      //       "success",
      //       "اضافة",
      //       "تمت العملية بنجاح"
      //     );
      //     this.navigate.navigateByUrl("/home/users/all");
      //     this.form.reset();
      //     this.sub = [];
      //   },
      //   () => {
      //     this.isAdd = false;
      //     this.generic.showNotification(
      //       "error",
      //       "اضافة",
      //       "حدث خطأ بالرجاء المحاولة في وقت لاحق"
      //     );
      //   }
      // );
    }
  }

  async edit() {
    if (this.form.valid) {
      const values = this.form.getRawValue();
      values.id = this.id;

      // await this.service.edit(values,this.form!.get('photo')!.value).subscribe(
      //   () => {
      //     this.isAdd = false;
      //     this.generic.showNotification(
      //       "success",
      //       "تعديل",
      //       "تمت العملية بنجاح"
      //     );
      //     this.navigate.navigateByUrl("/home/users/all");
      //   },
      //   () => {
      //     this.isAdd = false;
      //     this.generic.showNotification(
      //       "error",
      //       "تعديل",
      //       "حدث خطأ بالرجاء المحاولة في وقت لاحق"
      //     );
      //   }
      // );
    }
  }
}
