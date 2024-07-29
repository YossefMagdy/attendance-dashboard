import { Component } from '@angular/core';

@Component({
  selector: 'app-add-rate',
  templateUrl: './add-rate.component.html',
  styleUrls: ['./add-rate.component.scss']
})
export class AddRateComponent {
  questions: string[] = ['كان كان المنتج', 'كيف كان التوصيل', 'تقييمك لاداء خدمة الدعم الفني لدينا']; // Add your questions here
  ratings: number[] = new Array(this.questions.length).fill(0);
  value!: number;

  constructor() {}

  submit() {
    console.log('Ratings:', this.ratings);
    // Here you can send the ratings to your backend or perform any other action
  }
}
