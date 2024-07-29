import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { countofusersService } from '../../reports.service';
import { Router } from "@angular/router";
import { GenericService } from "projects/ima-dashboard-categories/src/lib/domain/services/generic.service";
import { company } from '../../company';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  loading?: boolean;

  @Input("StatisticsReport") StatisticsReport: any;
  
  
    basicData: any;
    public lineChartOptions: ChartOptions<'line'> = {
      responsive: false
    };
    public lineChartLegend = true;
  
  
    basicOptions: any;

    chartOptions = {
      animationEnabled: true,
      theme: "white",
      exportEnabled: true,
      title: {
      text: "أسبوع تقييمات العملاء"
      },
      subtitles: [{
      text: "متوسط القييم/الأسبوع"
      }],
      data: [{
      type: "doughnut", //change type to column, line, area, doughnut, etc
      indexLabel: "%{name}: {y}",
      dataPoints: [
        { name: "تقييم 5", y: 9.1 },
        { name: "تقييم 4", y: 3.7 },
        { name: "تقييم 5", y: 36.4 },
        { name: "تقييم 1", y: 30.7 },
        { name: "تقييم 2", y: 20.1 }
      ]
      }]
    }

    chartOptions2 = {
      animationEnabled: true,
      theme: "white",
      exportEnabled: true,
      title: {
      text: ""
      },
      subtitles: [{
      text: ""
      }],
      data: [{
      type: "line", //change type to column, line, area, doughnut, etc
      indexLabel: "%{name}: {y}",
      dataPoints: [
        { name: "تقييم 5", y: 9.1 },
        { name: "تقييم 4", y: 3.7 },
        { name: "تقييم 5", y: 36.4 },
        { name: "تقييم 1", y: 30.7 },
        { name: "تقييم 2", y: 20.1 }
      ]
      }]
    }
  
    
    usercount?: number;
    leadercount?: number;
    Branchcount?: number;
    totalSalary?: number;

    heads = ["#", "id", "الاسم", "اللوجو", "Actions"];
  
    capitalize(s: string): string {
      return s.charAt(0).toUpperCase() + s.slice(1);
    }


    constructor(
      private generic: GenericService,
      private router: Router,
      private service: company,
      private cookie_s: CookieService,

    ) {}

    ngOnInit() {
      this.get();
    }
  
    async get() {
 this.service.getUserCount(JSON.parse(this.cookie_s.get("company"))).subscribe((data:any)=>{
        console.log(data)
        this.usercount = data.data.users.length >  0 ? data.data.users[0].count : 0;
      });
 this.service.getLeaderCount(JSON.parse(this.cookie_s.get("company"))).subscribe((data:any)=>{
        console.log(data)
        this.leadercount = data.data.users.length >  0 ? data.data.users[0].count : 0;

      });

      this.service.getBranchCount(JSON.parse(this.cookie_s.get("company"))).subscribe((data:any)=>{
        console.log(data)
        this.Branchcount = data.data.branch.length >  0 ? data.data.branch[0].count : 0;
      });
      this.service.getTotalSalary(JSON.parse(this.cookie_s.get("company"))).subscribe((data:any)=>{
        console.log(data)
        this.totalSalary =  data.data.users.length >  0 ? data.data.users[0].sum : 0;
      });
    }

    edit(item: any) {
      const obj = JSON.stringify(item);
      localStorage.setItem("item", obj);
      this.router.navigate([`/home/report/display`]);
    }
  
    async delete(id: any, index: number) {
      this.loading = true;
      const data = this.service.delete(id).then(
        () => {
          // this.data.splice(index, 1);
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




