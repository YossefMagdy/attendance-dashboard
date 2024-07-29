import { Component } from '@angular/core';
import { BaseComponent, LanguageService } from 'projects/imakeapp-shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent {
  title = 'imakeapp-dashboard';

  constructor(public lang_s:LanguageService){


    super(lang_s);

  }
  override ngOnInit(): void {
    super.ngOnInit()
    document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl' );
        document.getElementsByTagName('html')[0].setAttribute('lang', this.lang || 'ar');


  }
}
