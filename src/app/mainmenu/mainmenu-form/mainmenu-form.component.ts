import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { GenericService } from "projects/ima-dashboard-categories/src/lib/domain/services/generic.service";
import { MainmenuService } from "src/app/core/services/Mainmenu/Mainmenu";
import { UserGroupService } from "src/app/core/services/UserGroup/UserGroup";


@Component({
  selector: "app-mainmenu-form",
  templateUrl: "./mainmenu-form.component.html",
  styleUrls: ["./mainmenu-form.component.scss"],
})
export class MainmenuFormComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  isAdd: boolean = false;
  categories: any[] = [];
  obj: any = null;
  id: any;
  sub: any[] = [];
  changed: any[] = [];
  groups: any;

  constructor(
    private service: MainmenuService,
    private userGroupService: UserGroupService,
    private navigate: Router,
    private generic: GenericService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.getGroup();

    this.createForm();

    this.obj = localStorage.getItem("item");

    if (this.obj) {
      const obj = JSON.parse(this.obj);
      console.log(obj);
      this.id = obj._id;
      this.form.reset(obj);
      if (obj.sub.length) this.sub = [...obj.sub];
    }
  }

  createForm() {
    this.form = this.fb.group({
      path: [""],
      title: [null, Validators.required],
      icon: ["fas fa-globe", Validators.required],
      class: ["has-arrow", Validators.required],
      extralink: [false, Validators.required],
      role: [null, Validators.required],
      sub: [[]],
    });
  }

  async getGroup() {
  this.userGroupService.get().subscribe((data:any)=>{
    this.groups = data.data.usergroups
    console.log(this.groups)
    });
  }

  async add() {
    // if (this.form.valid) {
      const values = this.form.getRawValue();
      values.sub = values.sub.filter(
        (m: { title: string; path: string; }) => m.title != "" && m.path != ""
      );
      this.isAdd = true;
      await this.service.add(values).then(
        () => {
          this.isAdd = false;
          this.generic.showNotification(
            "success",
            "اضافة",
            "تمت العملية بنجاح"
          );
          this.navigate.navigateByUrl("/home/menu/all");
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
   // }
  }

  async edit() {
    // if (this.form.valid) {
      const values = this.form.getRawValue();
      values.id = this.id;
      values.sub = this.sub;
      const sub = values.sub;
      this.isAdd = true;
      await this.service.edit( values, this.id).then(
        () => {
          this.isAdd = false;
          this.generic.showNotification(
            "success",
            "تعديل",
            "تمت العملية بنجاح"
          );
          this.navigate.navigateByUrl("/home/menu/all");
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
    //}
  }

  change(item: any) {
    if (!JSON.stringify(this.changed).includes(JSON.stringify(item)))
      this.changed.push(item);
  }

  addSub() {
    let sub = {
      path: "",
      title: "",
      icon: "",
      role: this.form.get("role")?.value,
      class: "",
      sub: this.id > 0 ? this.id : null,
      extralink: false,
      submenu: [],
    };

    this.sub.push(sub);
  }
  addSubOfSub(index: number) {
    let sub = {
      path: "",
      title: "",
      icon: "",
      role: this.form.get("role")?.value,
      class: "",
      extralink: false,
      submenu: [],
    };

    this.sub[index].sub.push(sub);
  }

  remove(index: number) {
    this.sub.splice(index, 1);
  }

  removeSubOfSub(index: number, subIndex: number) {
    this.sub[index].sub.splice(subIndex, 1);
  }

  async delete(id: any) {
    if (!id) return;
    const data = this.service.delete(id).subscribe(
      () => {
        this.generic.showNotification("success", "حذف", "تمت العملية بنجاح");
      },
      () => {
        this.generic.showNotification(
          "success",
          "حذف",
          "فشلت العملية بالرجاء المحاولة في وقت لاحق"
        );
      }
    );
  }

  ngOnDestroy(): void {
    localStorage.removeItem("item");
  }
}
