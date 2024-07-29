import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { HeadersFacade } from '../../../domain/facades/facades';
import { HeaderThemesService } from '../../../domain/services/HeaderThemesService.service';
import { BaseComponent, LanguagePipe, LanguageService, WebsiteAttributesService, language_interface } from 'projects/imakeapp-shared';
import { CookieService } from 'ngx-cookie-service';
import { BaseHeaderComponenetComponent } from '../../../lib/features/base-header-componenet/base-header-componenet.component';





@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends BaseHeaderComponenetComponent implements OnInit {






  constructor(
    public override router: Router,
    public override store: Store,
    public override fb: FormBuilder,
    public override message_s: MessageService,
    public override header_theme_s: HeaderThemesService,
    public override message: MessageService,
    public override facades: HeadersFacade,
    public override cookie_s: CookieService,
    public override web_attr_s: WebsiteAttributesService,
    public override lang_s: LanguageService,
    public override lang_p: LanguagePipe,
    public override language_s: LanguageService
  ) {
    super(language_s);
  }














}
