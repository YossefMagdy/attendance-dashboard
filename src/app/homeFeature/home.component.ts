import { Component } from '@angular/core';
import { BaseComponent, LanguageService } from 'projects/imakeapp-shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent {

  constructor(public lang_s:LanguageService){


    super(lang_s);

  }
  override ngOnInit(): void {
    super.ngOnInit()
    document.getElementsByTagName('html')[0].setAttribute('dir', this.lang == 'ar' ? 'rtl' : 'rtl');
        document.getElementsByTagName('html')[0].setAttribute('lang', this.lang || 'en');


  }
}
