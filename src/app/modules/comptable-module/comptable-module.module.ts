import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComptableModuleRoutingModule } from './comptable-module-routing.module';
import { ComptableModuleComponent } from './comptable-module.component';
import { HeaderComponent } from './components/content/header/header.component';
import { BodyComponent } from './components/content/body/body.component';
import { ContentComponent } from './components/content/content.component';
import { AsideComponent } from './components/aside/aside.component';


@NgModule({
  declarations: [
    ComptableModuleComponent,
    HeaderComponent,
    BodyComponent,
    ContentComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    ComptableModuleRoutingModule
  ]
})
export class ComptableModuleModule { }
