import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerantModuleComponent } from './gerant-module.component';
import { BodyComponent } from './components/content/body/body.component';

const routes: Routes = [{
  path: '', component: GerantModuleComponent,
  children: [
    { path: '', component: BodyComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerantModuleRoutingModule { }
