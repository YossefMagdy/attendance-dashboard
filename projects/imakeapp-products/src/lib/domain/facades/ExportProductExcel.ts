import * as FileSaver from "file-saver";
import { ProductExcel } from "../entities/ExcelModels";
import * as xlsx from "xlsx";

export default class exportExcel {
  columns: string[] = ["الموظف", "المبلغ", "النوع", "ملاحظات", "تاريخ الانشاء"];
  AttributesColumns = ["attribute_name_en", "attribute_name_ar", "options_name_ar", "options_name_en", "price", "required", "is_base_price", "max_check", "sku"]
  SpecsColumns = ["Specifications_name_en", "Specifications_name_ar", "options_name_ar", "options_name_en", "sku"]
  PhotosColumns = ["photo", "sku"]
  CategoryColumns = ["category_name_ar", "category_name_en","subCat_name_ar","subCat_name_en","sku"]

  exportExcel(data: any[]) {
    const domainToRemove = 'https://makeappmall.s3.amazonaws.com/';
    const wscols = [
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      { wch: 25 },
    ];
    var AttributesAtt: any[] = []
    var Specs: any[] = []
    var Photos: any[] = []
    var Categories: any[] = []

    var Productdata: any = data.map(p => {
      return {
        "اسم الموظف": p?.user?.full_name,
        "الموبايل": p?.user?.mobile,
        "وظيفته": p?.user?.job,
        "الرتبة": p?.user?.position,
        "ملاحظات": p.notes,
        التاخير: p.timeDifferenceStart,
         "الوقت الاضافي": p.timeDifferenceEnd,
        الفرع: p?.branch?.name || "",
       "تاريخ الحضور" : p.attendDate,
        الوقت: p.time ?  convertToUTCTime(p.time) : "",
        "نوع العملية":this.getTypeName(p?.type)
      }
    })

    
    const product_sheet = xlsx.utils.json_to_sheet(Productdata!);

    product_sheet["!cols"] = wscols;
    product_sheet["!cols"].forEach((col: any) => {
      col.s = { alignment: { horizontal: "center" } };
    });

    xlsx.utils.sheet_add_aoa(product_sheet, [Object.keys(Productdata![0])], { origin: "A1" });

    // END: abpxx6d04wxr
 

    const workbook = {
      Sheets: { "Products Data": product_sheet, },
      SheetNames: ["Products Data"],
    };
    const excelBuffer: any = xlsx.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    this.saveAsExcelFile(excelBuffer, "بيانات الموظفين");
  }
   calculateHourDifference(startDate: Date, endDate: Date): String {
    const diffInMilliseconds = endDate.getTime() - startDate.getTime();
    const diffInHours = diffInMilliseconds / (1000 * 60 * 60); // Convert milliseconds to hours
    return this.convertHoursToTimeString(diffInHours);
} 
   convertTimeStringToHours(timeString: string): number {
    const [hoursStr, minutesStr] = timeString.split(":");
    const hours = parseInt(hoursStr);
    const minutes = parseInt(minutesStr);
    const totalHours = hours + minutes / 60;
    return totalHours;
}
 convertHoursToTimeString(hours: number): string {
  const totalMinutes = hours * 60;
  const formattedHours = Math.floor(totalMinutes / 60);
  const formattedMinutes = Math.floor(totalMinutes % 60);
  const hoursString = formattedHours < 10 ? `0${formattedHours}` : `${formattedHours}`;
  const minutesString = formattedMinutes < 10 ? `0${formattedMinutes}` : `${formattedMinutes}`;
  return `${hoursString}:${minutesString}`;
}
  exportExcelForDays(data: any[]) {
    const domainToRemove = 'https://makeappmall.s3.amazonaws.com/';
    const wscols = [
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      { wch: 25 },
    ];

    const currentDate = new Date(); // Get current date
    const currentDayOfMonth = currentDate.getDate(); // Get the current day of the month

    // Create an array of month days from 1 to the last day of the month
    const numberOfDaysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const monthDays = Array.from({ length: numberOfDaysInMonth }, (_, i) => i + 1);
    var Productdata: any = data.map(p => {
      let rowData: any = {
          "اسم الموظف": p?.full_name,
          "رقم الباج": p?.mobile,
          "وظيفته": p?.job,
          "القسم": p?.position,
          "ملاحظات": p.notes,
          "نوع العملية": this.getTypeName(p?.type)
      };

      for (let day = 1; day <= numberOfDaysInMonth; day++) {
        rowData[`Day ${day}`] = '';
    }

    if (p.transactions && Array.isArray(p.transactions)) {
      // Iterate over transactions for the user
      for (let day = 1; day <= numberOfDaysInMonth; day++) {
        rowData[`Day ${day}`] = '';
      var  timeDifferenceStart = 0
      var OverTimeHours:any = 0
      var  attendDateStart: Date
      var  attendDateEnd: Date

      p.transactions.forEach((transaction: any) => {

        if(transaction.type == 1){

          
     
           attendDateStart = new Date(transaction.time);
          const transactionDay = attendDateStart.getDate();
           timeDifferenceStart = this.convertTimeStringToHours(transaction.timeDifferenceStart ) || 0.0;


          // Mark the day where transaction occurred
          if (transactionDay >= 1 && transactionDay <= numberOfDaysInMonth) {
              rowData[`Day ${transactionDay}`] =  'لم يتم الانصراف';;
          }
        }
        if(transaction.type == 4){

          
     
const hoursEnd = this.convertTimeStringToHours(transaction.timeDifferenceEnd);

var diff =   hoursEnd
attendDateEnd = new Date(transaction.time);

const transactionDay = attendDateEnd.getDate();
OverTimeHours += diff

              rowData[`Day ${transactionDay}`] = this.calculateHourDifference(attendDateStart, attendDateEnd);
     
        }
      });
      
    }
  }
  console.log(OverTimeHours)
  console.log(this.convertHoursToTimeString(OverTimeHours))
  rowData[`اجمالي الساعات الاضافية`] = OverTimeHours >= 0 ? this.convertHoursToTimeString(OverTimeHours) : '-'+this.convertHoursToTimeString(OverTimeHours*-1)

      return rowData;
  });

    
    const product_sheet = xlsx.utils.json_to_sheet(Productdata!);

    product_sheet["!cols"] = wscols;
    product_sheet["!cols"].forEach((col: any) => {
      col.s = { alignment: { horizontal: "center" } };
    });

    xlsx.utils.sheet_add_aoa(product_sheet, [Object.keys(Productdata![0])], { origin: "A1" });

    // END: abpxx6d04wxr
 

    const workbook = {
      Sheets: { "Products Data": product_sheet, },
      SheetNames: ["Products Data"],
    };
    const excelBuffer: any = xlsx.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    this.saveAsExcelFile(excelBuffer, "بيانات الموظفين");
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
  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    let EXCEL_EXTENSION = ".xlsx";
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
    );
  }
}

function convertToUTCTime(isoString: string): string {
  const date = new Date(isoString);
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}