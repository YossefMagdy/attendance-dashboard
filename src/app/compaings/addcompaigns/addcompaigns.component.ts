import { Component } from '@angular/core';

@Component({
  selector: 'app-addcompaigns',
  templateUrl: './addcompaigns.component.html',
  styleUrls: ['./addcompaigns.component.scss']
})
export class AddcompaignsComponent {
  campaignName?: string;
  durationFrom?: Date;
  durationTo?: Date;
  rating?: string;
  showLimitInput: boolean = false;
  limitCount?: any;
  campaignType: any;
  campaignTypeOptions: any[];
  showQRCode: boolean = false; // Flag to show/hide QR code section
  qrCodeValue?: string; // Value for QR code generation
  singleQuestion?: string;
  multipleQuestions: string[] = [];
  constructor() {
    this.campaignTypeOptions = [
      { name: 'سؤال وحيد', value: 'single' },
      { name: 'متعدد الاسئلة', value: 'multi' }
    ];
  }

  onSubmit() {
    // Handle form submission logic here
    console.log('Campaign Name:', this.campaignName);
    console.log('Duration From:', this.durationFrom);
    console.log('Duration To:', this.durationTo);
    console.log('Rating:', this.rating);
    console.log('Campaign Type:', this.campaignType);

    this.qrCodeValue = JSON.stringify({
      campaignName: this.campaignName,
      durationFrom: this.durationFrom,
      durationTo: this.durationTo,
      rating: this.rating,
      campaignType: this.campaignType
    });

    // Show QR code section
    this.showQRCode = true;
  }
  onRatingChange() {
    if (this.rating === 'single') {
      this.singleQuestion = '';
      this.multipleQuestions = [];
    }
    this.showLimitInput = this.rating === 'limited';
    if (!this.showLimitInput) {
      this.limitCount = null;
    }
  }
 
  addQuestion() {
    this.multipleQuestions.push('');
  }

}
