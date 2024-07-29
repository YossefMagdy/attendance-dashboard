import { ComponentFactoryResolver, Type, ViewContainerRef } from '@angular/core';
import { Injectable } from "@angular/core";
import { HeaderTheme1Component } from 'projects/imakeapp-header/src/lib/features/header-theme1/header-theme1.component';





@Injectable({ providedIn : 'root' })
export class HeaderThemesLoaderService
{


  COMPONENTS_MAP : { [name: string]: any } = {
    'theme1': HeaderTheme1Component,
  }


  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ){}


  loadComponent(componentName: any, viewContainerRef: ViewContainerRef)
  {

    const componentType: Type<any> = this.COMPONENTS_MAP[componentName];

    const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    viewContainerRef.clear();

    viewContainerRef.createComponent(factory);

  }



}
