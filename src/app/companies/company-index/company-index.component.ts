import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GenericService } from 'projects/image-gallaries/src/domain/services/generic.service';
import { ComapanyService } from 'src/app/companies/services/companies.service';

@Component({
  selector: 'app-comapany-index',
  templateUrl: './company-index.component.html',
  styleUrls: ['./company-index.component.scss']
})
export class CompanyIndexComponent {

  data: any[] = [];
  heads = ['الاسم','الايميل','الهاتف', 'اللوجو','تاريخ الانتهاء','Actions']  ;

  loading?: boolean; 

  constructor(
    private service: ComapanyService,
    private generic: GenericService,
    public cookie_s:CookieService,

    private router: Router
  ) { this.data = [];   this.get();
  }

  ngOnInit() {
  }

  async get() {
    const data: any =  this.service.getData().subscribe((data:any)=>{
      this.data = data.data.company;
    });
 
  }

  edit(item: any) {
    const obj = JSON.stringify(item);
    localStorage.setItem("item", obj);
    this.router.navigate([`/home/companies/edit`]);
  }

  async delete(id: any, index: number) {
    this.loading = true;
    const data = this.service.delete(id).subscribe(
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
}
