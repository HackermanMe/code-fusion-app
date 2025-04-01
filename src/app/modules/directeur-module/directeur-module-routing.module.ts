import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirecteurModuleComponent } from './directeur-module.component';
import { BodyComponent } from './components/content/body/body.component';
import { PointsDeVentesComponent } from './components/main/points-de-ventes/points-de-ventes.component';
import { ListePdvComponent } from './components/main/points-de-ventes/liste-pdv/liste-pdv.component';
import { TransactionsComponent } from './components/main/transactions/transactions.component';
import { RestaurantComponent } from './components/main/restaurant/restaurant.component';

const routes: Routes = [{
  path: '', component: DirecteurModuleComponent,
  children: [
    { path: '', component: BodyComponent },

    { path: 'transactions', component: TransactionsComponent },
    { path: 'restaurant', component: RestaurantComponent },

    {
      path: 'pdv', component: PointsDeVentesComponent, children: [
        { path: '', component: ListePdvComponent },
      ]
    },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirecteurModuleRoutingModule { }
