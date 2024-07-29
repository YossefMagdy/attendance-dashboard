import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { GenericService } from 'projects/image-gallaries/src/domain/services/generic.service';
import { Iinputs } from 'projects/imakeapp-shared/lib/components/generic-filter/Interfaces/inputInterface';
import { CampaingsService } from 'src/app/services/campaings/campaings.service';
import { ItemsService } from 'src/app/services/items/items.service';

@Component({
  selector: 'app-indexitems',
  templateUrl: './indexitems.component.html',
  styleUrls: ['./indexitems.component.scss']
})
export class IndexitemsComponent {
  data: any[] = [];
  heads =['#','الاسم', 'السعر', 'الصور', 'التاريخ',  'Actions']
  ;
  loading?: boolean; 

  constructor(
    private service: ItemsService,
    private generic: GenericService,
    private router: Router,
    public config: DynamicDialogConfig,
    public cookie_s:CookieService,



  ) {}
  filterInputs: Iinputs[] = [

    {
      type: "dropdown",
      name: "id",
            label: "الاسم",
      value: "id",

      placeholder: "الاسم",
    } , 
    {
      type: "dropdown",
      name: "id",
      placeholder: "السعر",
      value: "id",
      label: "السعر",
    } ,
    {
      type: "date",
      name: "التاريخ",
      placeholder: "التاريخ",
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
