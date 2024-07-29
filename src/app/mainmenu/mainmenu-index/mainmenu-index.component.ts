import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GenericService } from "projects/ima-dashboard-categories/src/lib/domain/services/generic.service";
import { MainmenuService } from "src/app/core/services/Mainmenu/Mainmenu";

@Component({
  selector: "app-mainmenu-index",
  templateUrl: "./mainmenu-index.component.html",
  styleUrls: ["./mainmenu-index.component.scss"],
})
export class MainmenuIndexComponent implements OnInit {
  data: any[] = [];
  heads = ["#", "العنوان", "الصلاحية", "Actions"];

  loading?: boolean;

  constructor(
    private service: MainmenuService,
    private generic: GenericService,
    private router: Router
  ) {}

  ngOnInit() {
    this.get();
  }

  async get() {
    const data: any = await this.service.get();
    console.log(data)
    this.data = data.data;
  }

  edit(item: any) {
    const obj = JSON.stringify(item);
    localStorage.setItem("item", obj);
    this.router.navigate([`/home/menu/edit`]);
  }

  async delete(id: any, index: number) {
    this.loading = true;
    const data = this.service.delete(id).subscribe(
      () => {
        this.data.splice(index, 1);
        this.loading = false;
        this.generic.showNotification("success", "حذف", "تمت العملية بنجاح");
      },
      () => {
        this.loading = false;
        this.generic.showNotification(
          "success",
          "حذف",
          "فشلت العملية بالرجاء المحاولة في وقت لاحق"
        );
      }
    );
  }
}
