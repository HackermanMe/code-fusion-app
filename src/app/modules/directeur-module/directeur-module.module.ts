import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirecteurModuleRoutingModule } from './directeur-module-routing.module';
import { DirecteurModuleComponent } from './directeur-module.component';
import { AsideComponent } from './components/aside/aside.component';
import { ContentComponent } from './components/content/content.component';
import { BodyComponent } from './components/content/body/body.component';
import { HeaderComponent } from './components/content/header/header.component';
import { MainComponent } from './components/main/main.component';
import { TransactionsComponent } from './components/main/transactions/transactions.component';
import { PointsDeVentesComponent } from './components/main/points-de-ventes/points-de-ventes.component';
import { ListePdvComponent } from './components/main/points-de-ventes/liste-pdv/liste-pdv.component';
import { FormsModule } from '@angular/forms';
import {RestaurantComponent} from './components/main/restaurant/restaurant.component';
import { StationComponent } from './components/main/station/station.component';



import { BoutiquesComponent } from './components/main/boutiques/boutiques.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListBoutiquesComponent } from './components/main/boutiques/list-boutiques/list-boutiques.component';
import { MessageService } from 'primeng/api';
import { AddBoutiqueComponent } from './components/main/boutiques/add-boutique/add-boutique.component';
import { EditBoutiqueComponent } from './components/main/boutiques/edit-boutique/edit-boutique.component';
import { UsersComponent } from './components/main/users/users.component';
import { AddUsersComponent } from './components/main/users/add-users/add-users.component';
import { ListUsersComponent } from './components/main/users/list-users/list-users.component';
import {Toast, ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';

@NgModule({
  declarations: [
    DirecteurModuleComponent,
    AsideComponent,
    ContentComponent,
    BodyComponent,
    HeaderComponent,
    MainComponent,
    TransactionsComponent,
    PointsDeVentesComponent,
    ListePdvComponent,
    RestaurantComponent,
    BoutiquesComponent,
    ListBoutiquesComponent,
    AddBoutiqueComponent,
    EditBoutiqueComponent,
    StationComponent,
    UsersComponent,
    AddUsersComponent,
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    DirecteurModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Toast,
    InputTextModule,
    PasswordModule,
    ToastModule
  ],
  providers: [MessageService],
})
export class DirecteurModuleModule {}
