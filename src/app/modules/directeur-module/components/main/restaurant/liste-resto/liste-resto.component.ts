import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MessageService } from 'primeng/api';
import { RestaurantResponse } from '../../../../../../models/response/restaurant-response'; // Mettez le bon chemin
import { RestaurantService } from '../../../../../../services/restaurant/restaurant.service'; // Mettez le bon chemin

@Component({
  selector: 'app-list-restaurants',
  standalone: false,
  templateUrl: './liste-resto.component.html',
  providers: [MessageService],
  styleUrls: ['./liste-resto.component.css'],
})
export class ListRestaurantsComponent implements OnInit {
  restaurants: RestaurantResponse[] = [];
  loading: boolean = true;

  constructor(
    private restaurantService: RestaurantService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.loading = true;
    this.restaurantService.getAllRestaurants().subscribe({
      next: (response) => {
        this.restaurants = response || [];
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des restaurants:', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Impossible de charger les restaurants',
        });
        this.loading = false;
      }
    });
  }

  addRestaurant(): void {
    console.log("Navigation vers add-restaurant...");
    this.router.navigate(['directeur/add-restaurant']);
  }

  editRestaurant(id: string): void {
    this.router.navigate([`directeur/edit-restaurant/${id}`]);
  }

  deleteRestaurant(id: string): void {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: 'Vous voulez vraiment supprimer ce restaurant !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Annuler',
      confirmButtonText: 'Oui, supprimer !',
    }).then((result) => {
      if (result.isConfirmed) {
        this.loading = true;
        this.restaurantService.deleteRestaurant(id).subscribe({
          next: () => {
            this.restaurants = this.restaurants.filter(restaurant => restaurant.trackingId !== id);
            this.messageService.add({
              severity: 'success',
              summary: 'Succès',
              detail: 'Restaurant supprimé avec succès',
            });
            Swal.fire('Supprimé !', 'Le restaurant a bien été supprimé.', 'success');
            this.loading = false;
          },
          error: (err) => {
            console.error('Erreur suppression restaurant:', err);
            Swal.fire(
              'Erreur',
              err.error?.message || 'Erreur lors de la suppression',
              'error'
            );
            this.loading = false;
          }
        });
      }
    });
  }
}