import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GerantModuleRoutingModule } from './gerant-module-routing.module';
import { GerantModuleComponent } from './gerant-module.component';
import { AsideComponent } from './components/aside/aside.component';
import { ContentComponent } from './components/content/content.component';
import { BodyComponent } from './components/content/body/body.component';
import { HeaderComponent } from './components/content/header/header.component';


@NgModule({
  declarations: [
    GerantModuleComponent,
    AsideComponent,
    ContentComponent,
    BodyComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    GerantModuleRoutingModule
  ]
})
export class GerantModuleModule { }
