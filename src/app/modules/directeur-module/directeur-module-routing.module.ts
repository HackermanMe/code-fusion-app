import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirecteurModuleComponent } from './directeur-module.component';
import { BodyComponent } from './components/content/body/body.component';
import { PointsDeVentesComponent } from './components/main/points-de-ventes/points-de-ventes.component';
import { ListePdvComponent } from './components/main/points-de-ventes/liste-pdv/liste-pdv.component';
import { TransactionsComponent } from './components/main/transactions/transactions.component';
import { RestaurantComponent } from './components/main/restaurant/restaurant.component';
import { ListBoutiquesComponent } from './components/main/boutiques/list-boutiques/list-boutiques.component';
import { AddBoutiqueComponent } from './components/main/boutiques/add-boutique/add-boutique.component';
import { EditBoutiqueComponent } from './components/main/boutiques/edit-boutique/edit-boutique.component';

import { StationComponent } from './components/main/station/station.component';

const routes: Routes = [{
  path: '', component: DirecteurModuleComponent,
  children: [
    { path: '', component: BodyComponent },

    { path: 'transactions', component: TransactionsComponent },
    { path: 'restaurant', component: RestaurantComponent },
    { path: 'list-boutiques', component: ListBoutiquesComponent },
    { path: 'add-boutique', component: AddBoutiqueComponent },
    { path: 'edit/:id', component: EditBoutiqueComponent },

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
