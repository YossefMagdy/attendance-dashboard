import { Injectable } from "@angular/core";
import { NzNotificationService } from "ng-zorro-antd/notification";




@Injectable({
  providedIn: "root",
})
export class GenericService 
{


  lang: any = 'ar]';



  constructor(private notification: NzNotificationService) {}


  showNotification(type: string, title: string, message: string) {
    this.notification.create(type, title, message, { nzClass: "lang-ar" });
  }


  formatDate(date: string | number | Date, type = "") {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    if (type != "") return `${year}-${month}-${day}`;

    return `${day}/${month}/${year}`;
  }


}
