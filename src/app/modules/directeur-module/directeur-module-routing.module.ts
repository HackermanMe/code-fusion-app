import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DirecteurModuleComponent} from './directeur-module.component';
import {BodyComponent} from './components/content/body/body.component';
import {PointsDeVentesComponent} from './components/main/points-de-ventes/points-de-ventes.component';
import {ListePdvComponent} from './components/main/points-de-ventes/liste-pdv/liste-pdv.component';
import {TransactionsComponent} from './components/main/transactions/transactions.component';
import {RestaurantComponent} from './components/main/restaurant/restaurant.component';
import {ListBoutiquesComponent} from './components/main/boutiques/list-boutiques/list-boutiques.component';
import {AddBoutiqueComponent} from './components/main/boutiques/add-boutique/add-boutique.component';
import {EditBoutiqueComponent} from './components/main/boutiques/edit-boutique/edit-boutique.component';

import {StationComponent} from './components/main/station/station.component';
import {UsersComponent} from './components/main/users/users.component';
import {AddUsersComponent} from './components/main/users/add-users/add-users.component';
import {AuthGuard} from '../../utils/guards/auth-guard';

const routes: Routes = [{
  path: '', component: DirecteurModuleComponent,
  children: [
    {path: '', component: BodyComponent},

    {
      path: 'users', component: UsersComponent, children:
        [
          {path: 'add', component: AddUsersComponent},
        ]
      , canActivate: [AuthGuard]

    },

    {path: 'stations', component: StationComponent, canActivate: [AuthGuard] },
    {path: 'transactions', component: TransactionsComponent, canActivate: [AuthGuard] },
    {path: 'restaurant', component: RestaurantComponent, canActivate: [AuthGuard] },
    {path: 'list-boutiques', component: ListBoutiquesComponent, canActivate: [AuthGuard] },
    {path: 'add-boutique', component: AddBoutiqueComponent, canActivate: [AuthGuard] },
    {path: 'edit/:id', component: EditBoutiqueComponent, canActivate: [AuthGuard] },

    {
      path: 'pdv', component: PointsDeVentesComponent, children: [
        {path: '', component: ListePdvComponent},
      ], canActivate: [AuthGuard]
    },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirecteurModuleRoutingModule {
}
