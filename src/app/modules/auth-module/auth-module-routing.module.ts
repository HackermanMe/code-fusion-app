import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModuleComponent } from './auth-module.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { VerificationComponent } from './components/verification/verification.component';
import { ComponentsComponent } from './components/components.component';

const routes: Routes = [
  {
    path: '', component: AuthModuleComponent,
    children: [
      {
        path: '', component: ComponentsComponent,
        children: [
          { path: 'login', component: ConnexionComponent },
          { path: 'inscription', component: InscriptionComponent },
          { path: 'code', component: VerificationComponent },
        ]
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthModuleRoutingModule { }
