import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './utils/guards/auth-guard';

;

const routes: Routes = [

  // { path: '', component: BodyComponent },

  { path: 'directeur', loadChildren: () => import('./modules/directeur-module/directeur-module.module').then(m => m.DirecteurModuleModule) , canActivate: [AuthGuard] },

  { path: 'gerant', loadChildren: () => import('./modules/gerant-module/gerant-module.module').then(m => m.GerantModuleModule), canActivate: [AuthGuard]  },

  { path: 'comptable', loadChildren: () => import('./modules/comptable-module/comptable-module.module').then(m => m.ComptableModuleModule), canActivate: [AuthGuard]  },

  { path: 'auth', loadChildren: () => import('./modules/auth-module/auth-module.module').then(m => m.AuthModuleModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
