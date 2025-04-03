import { Component } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css',
  standalone: false,
})
export class RestaurantComponent {
  restaurantData = {
    nom: '',
    adresse: '',
    telephone: '',
    actif: true
  };

  submitForm() {
    console.log("Formulaire soumis :", this.restaurantData);
  }

}

