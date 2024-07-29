import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { GenericService } from 'projects/ima-dashboard-categories/src/lib/domain/services/generic.service';
import { Iinputs } from 'projects/imakeapp-shared/lib/components/generic-filter/Interfaces/inputInterface';
import { RatesService } from 'src/app/services/rates/rates.service';

@Component({
  selector: 'app-index-rate',
  templateUrl: './index-rate.component.html',
  styleUrls: ['./index-rate.component.scss']
})
export class IndexRateComponent {
  data: any[] = [];
  heads =['#', 'الفرع', 'التعليق', 'العميل', 'الوقت', 'رقم الطلب', 'التقييم', 'اسم المنتج', 'Actions']
  ;
types = [{"id":"1","name":"حضور"},{"id":"2","name":"خروج"},{"id":"3","name":"دخول"},{"id":"4","name":"انصراف"}]
  loading?: boolean; 

  constructor(
    private service: RatesService,
    private router: Router,
    public config: DynamicDialogConfig,
    public cookie_s:CookieService,



  ) {}
  filterInputs: Iinputs[] = [

    {
      type: "dropdown",
      name: "id",
            label: "mobile",
      value: "id",

      placeholder: "الهاتف",
    } , 
    {
      type: "dropdown",
      name: "id",
      placeholder: "اسم المستخدم",
      value: "id",
      label: "full_name",
    } ,
     {
      type: "dropdown",
      name: "branch",
      placeholder: "الفروع",
      value: "id",
      label: "name",
    } ,
     {
      type: "number",
      name: "type",
      placeholder: "التقييم",
      
    },
    {
      type: "date",
      name: "date_from",
      placeholder: "تاريخ من",
      ignoreStartDate: true,
    },
    {
      type: "date",
      name: "date_to",
      placeholder: "تاريخ الى",
      ignoreStartDate: true,
    },
  ];
  ngOnInit() {
    this.get();
    this. getuserlist()
    this. getBranchList()

  }
   getuserlist(){

//  this.userService.get(0,1000).subscribe((data:any)=>{
// this.filterInputs[0].options = data.data.users
// this.filterInputs[1].options = data.data.users

//   })

}
   getBranchList(){

//  this.BranchService.getBranches(this.cookie_s.get("company")).subscribe((data:any)=>{
// this.filterInputs[2].options = data.data.branch

//   })

}
  async get() {
    if (this.config.data) {
      // const data: any =  this.service.getUserTransactions(this.config.data.id).subscribe((data:any)=>{
      //   console.log(data)

      //   this.data = data.data.transactionsmodels;
      // });
    }else {
      // const data: any =  this.service.getTransactions(this.cookie_s.get("company")).subscribe((data:any)=>{
      //   console.log(data.data.transactionsmodels[0].id)

      //   this.data = data.data.transactionsmodels;
      // });
    }
 
 
  }

  edit(item: any) {
    const obj = JSON.stringify(item);
    localStorage.setItem("item", obj);
    this.router.navigate([`/home/transactions/edit`]);
  }

  getTypeName(type:number){
switch (type) {
  case 1:
    return "حضور"
    case 2:
    return "اذن خروج"
    case 3:
      return "اذن دخول"
      case 4:
        return "انصراف"
    break;

  default:
    return "حضور"

}
  }
  filter(values: any) {
console.log(values)
// this.service.Filter(values).subscribe((data:any)=>{
//   console.log(data)
//   this.data = data;

// })
  }
   delete(id: any, index: number) {
    this.loading = true;
    console.log(id)
    // const data = this.service.delete({id}).subscribe(
    //   () => {
    //   //  this.data.splice(index, 1);
    //   this.get();

    //     this.loading = false;
    //     this.generic.showNotification("success", "حذف", "تمت العملية بنجاح");
    //   },
    //   () => {
    //     this.get();

    //     this.loading = false;
    //     this.generic.showNotification("success", "حذف", "تمت العملية بنجاح");

    //   }
    // );
  }

  ExportExcel(){
  //  exporter.exportExcel(this.data);
  }
}
