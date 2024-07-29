import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { LanguageService, WebsiteAttributesService, languages_state_interface } from "projects/imakeapp-shared";
import { Observable, filter, take } from "rxjs";





export const TopLevelResolver: ResolveFn<any> = async (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  lang_s= inject(LanguageService),
  webattrService=  inject(WebsiteAttributesService)
): Promise<any> => Promise.all([
  await lang_s.request_site_languages(),
  await webattrService.get_site_theme()
 ]);;



