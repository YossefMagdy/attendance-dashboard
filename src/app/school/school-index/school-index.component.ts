import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GenericService } from 'projects/image-gallaries/src/domain/services/generic.service';
import { SchoolService } from '../services/school.service';

@Component({
  selector: 'app-comapany-index',
  templateUrl: './school-index.component.html',
  styleUrls: ['./school-index.component.scss'],
})
export class SchoolIndexComponent {
  data: any[] = [];
  heads = ['الاسم', 'العنوان', 'الهاتف', 'اللوجو', 'Actions'];

  loading?: boolean;

  constructor(
    private service: SchoolService,
    private generic: GenericService,
    public cookie_s: CookieService,

    private router: Router
  ) {
    this.data = [];
  }

  ngOnInit() {
    this.getSchoolData();
  }
  
  getSchoolData() {
    this.service.getSchoolsData().subscribe((data) => {
      this.data = data;
    });
  }

  edit(item: any) {
    const obj = JSON.stringify(item);
    localStorage.setItem('item', obj);
    this.router.navigate([`/home/school/edit`]);
  }

  deleteSchoolData(id: string) {
    this.service.deleteSchoolsData(id).subscribe({
      next: () => {
        this.getSchoolData();
        this.loading = false;
        this.generic.showNotification('success', 'حذف', 'تمت العملية بنجاح');
      },
      error: (error) => {
        this.loading = false;
        this.generic.showNotification(
          'error',
          'مسج',
           error.message ||'حدث خطأ بالرجاء المحاولة في وقت لاحق'
        );
        this.getSchoolData();
      },
    });
  }

}
