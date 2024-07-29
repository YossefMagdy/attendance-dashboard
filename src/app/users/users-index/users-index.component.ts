import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Iinputs } from 'projects/ima-dashboard-categories/src/lib/domain/entities/model/inputInterface';
import { GenericService } from 'projects/image-gallaries/src/domain/services/generic.service';
import { ExcelProcessor } from 'projects/imakeapp-products/src/lib/domain/facades/AddProductExcelHelpter';
import { ProductsFacade } from 'projects/imakeapp-products/src/lib/domain/facades/products.facades';

import { UsersService } from 'src/app/services/users.service';
import * as xlsx from 'xlsx';

@Component({
  selector: 'app-users-index',
  templateUrl: './users-index.component.html',
  styleUrls: ['./users-index.component.scss']

})
export class UsersIndexComponent {

  data: any[] = [];
  heads = ['#', 'الصورة','الايميل', 'الاسم الكامل', 'الهاتف','المرتب', 'المشرف', 'الرتبة', 'الوظيفة', 'Actions'];
  page: number = 0;
  searchpage: number = 0;

  limit: number = 10;
  loading?: boolean; 
  excelInput2: any;
  ExcelData:any[]=[]
  total:number = 0
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;
  constructor(
    private service: UsersService,
    private generic: GenericService,
public dialogService: DialogService,
private messageService: MessageService,
private confirmationService: ConfirmationService,
private ProductFacade: ProductsFacade,
  private router: Router
, public config: DynamicDialogConfig
  ) {}
  filterInputs: Iinputs[] = [
    {
      type: "text",
      name: "full_name",
      placeholder: "اسم المستخدم",
    },
    {
      type: "text",
      name: "mobile",
      placeholder: "الهاتف",
    }
  ];
  ngOnInit() {
    this.get();
  }

  async get() {
    const data: any =  this.service.get(this.page,this.limit).subscribe((data:any)=>{
      this.data = data.data.users;
      this.total = data.data.usercount[0].count - 1
    });
 
  }

  edit(item: any) {
    const obj = JSON.stringify(item);
    localStorage.setItem("item", obj);
    window.open('/home/users/edit', '_blank');

  }
  filter(values: any) { 
    console.log(values)
    values.page = this.searchpage
    values.limit = this.limit
   this.service.SearchForUser(values).subscribe(
      (data:any) => {
      //  this.data.splice(index, 1);

      this.data = data;
      this.total = data.length

      },
      () => {
        this.loading = false;
        this.generic.showNotification(
          "success",
          "حذف",
          "فشلت العملية بالرجاء المحاولة في وقت لاحق"
        );
      })
   // {"full_name":"ELDEEN","mobile":"1231213433"}
  }
  ShowTimes(UserId: any) {
 
  }
  AddTimes(UserId: any) {

  }
  Attendances(UserId: any) {
    
  }
  async delete(id: any, index: number) {
    this.loading = true;
    const data = this.service.delete({id}).subscribe(
      () => {
      //  this.data.splice(index, 1);
      this.get();

        this.loading = false;
        this.generic.showNotification("success", "حذف", "تمت العملية بنجاح");
      },
      () => {
        this.loading = false;

        this.generic.showNotification("success", "حذف", "تمت العملية بنجاح");
        this.get();
      }
    );
  }

  UploadExcel(event: any) {
    let file = event.target.files[0];

    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);
    fileReader.onload = (e) => {
      var workBook = xlsx.read(fileReader.result, { type: 'binary' });
      var sheetNames = workBook.SheetNames;
      this.ExcelData = xlsx.utils.sheet_to_json(
        workBook.Sheets[sheetNames[0]]
      );
      console.log(this.ExcelData)
      this.confirmationService.confirm({
        message: `لقد قمت بتحميل ${this.ExcelData.length} موظف`,
        header: 'تاكيد تحميل الموظفين',
        icon: 'pi pi-info-circle',
        accept: () => {
          console.log(workBook);
          new ExcelProcessor(
            this.ExcelData!,
            workBook,
            this.ProductFacade
          );
          // this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
          this.resetFileInput();
        },
        reject: (type: ConfirmEventType) => {
          switch (type) {
            case ConfirmEventType.REJECT:
              this.messageService.add({
                severity: 'error',
                summary: 'Rejected',
                detail: 'You have rejected',
              });
              break;
            case ConfirmEventType.CANCEL:
              this.messageService.add({
                severity: 'warn',
                summary: 'Cancelled',
                detail: 'You have cancelled',
              });
              break;
            default:
              this.messageService.add({
                severity: 'warn',
                summary: 'Cancelled',
                detail: 'You have cancelled',
              });
          }
        },
      });
    };
  
}
onPageChange(page: number) {
  this.page = page-1 ;
  this.get();
}

onSizeChange(limit: number) {
  this.limit = limit;
  this.page = 1;
  this.get();
}

resetFileInput() {
  if (this.fileInput) {
    this.fileInput.nativeElement.value = '';
  }
}
}