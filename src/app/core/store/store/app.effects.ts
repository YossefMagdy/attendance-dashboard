import { Injectable } from "@angular/core";
import { mergeMap, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { CookieService } from "ngx-cookie-service";
import { WebsiteAttributesService } from "projects/imakeapp-shared";




@Injectable()
export class AppEffect
{


  constructor(
  private store:Store,
  private actions$: Actions,
  private cookie_s: CookieService,
  private webAttrService :WebsiteAttributesService,
  ) {}


  }
