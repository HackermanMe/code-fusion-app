import { Component } from '@angular/core';
import { StationServiceService } from '../../../../../services/station-service/station-service.service';

@Component({
  selector: 'app-station',
  standalone: false,
  templateUrl: './station.component.html',
  styleUrl: './station.component.css'
})
export class StationComponent {


  station = {
    nom: '',
    adresse: '',
    telephone: '',
    actif: true,
    havaAnnexe: false
  };

  constructor(private stationService: StationServiceService) { }

  ngOnInit(): void {
    // Tu peux utiliser cette méthode pour récupérer les stations ou effectuer des actions au démarrage
    this.getStations();
  }

  // Méthode pour soumettre le formulaire
  onSubmit(): void {
    this.stationService.createStationService(this.station).subscribe(response => {
      console.log('Station créée avec succès:', response);
      // Tu peux aussi gérer la redirection ou afficher un message de succès
    }, error => {
      console.error('Erreur lors de la création de la station:', error);
    });
  }

  // Méthode pour récupérer toutes les stations
  getStations(): void {
    this.stationService.getStationServices().subscribe(response => {
      console.log('Stations récupérées:', response);
    }, error => {
      console.error('Erreur lors de la récupération des stations:', error);
    });
  }
}

