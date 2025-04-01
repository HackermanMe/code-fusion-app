import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModuleRoutingModule } from './auth-module-routing.module';
import { AuthModuleComponent } from './auth-module.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { VerificationComponent } from './components/verification/verification.component';
import { ComponentsComponent } from './components/components.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthModuleComponent,
    ConnexionComponent,
    VerificationComponent,
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    AuthModuleRoutingModule,
    FormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AuthModuleModule { }
