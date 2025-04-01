import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';;

const routes: Routes = [

  // { path: '', component: BodyComponent },

  { path: 'directeur', loadChildren: () => import('./modules/directeur-module/directeur-module.module').then(m => m.DirecteurModuleModule) },

  { path: 'gerant', loadChildren: () => import('./modules/gerant-module/gerant-module.module').then(m => m.GerantModuleModule) },

  { path: 'comptable', loadChildren: () => import('./modules/comptable-module/comptable-module.module').then(m => m.ComptableModuleModule) },

  { path: 'auth', loadChildren: () => import('./modules/auth-module/auth-module.module').then(m => m.AuthModuleModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
