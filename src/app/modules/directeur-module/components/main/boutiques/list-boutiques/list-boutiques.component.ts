import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MessageService } from 'primeng/api';
import { BoutiqueResponse } from '../../../../../../models/response/boutique-response';
import { BoutiqueService } from '../../../../../../services/boutique/boutique.service';

@Component({
  selector: 'app-list-boutiques',
  standalone:false,
  templateUrl: './list-boutiques.component.html',
  providers: [MessageService],
  styleUrls: ['./list-boutiques.component.css'],
})
export class ListBoutiquesComponent implements OnInit {
  boutiques: BoutiqueResponse[] = [];
  loading: boolean = true;

  constructor(
    private boutiqueService: BoutiqueService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getBoutiques();
  }

  getBoutiques(): void {
    this.loading = true;
    this.boutiqueService.getAllBoutiques().subscribe({
      next: (response) => {
        this.boutiques = response.data || response._embedded?.Boutiques || [];
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des boutiques:', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Impossible de charger les boutiques',
        });
        this.loading = false;
      }
    });
  }
  addBoutique(): void {
    console.log("Navigation vers add-boutique...");
    this.router.navigate(['directeur/add-boutique']);
  }

  editBoutique(id: string): void {
    this.router.navigate([`directeur/edit-boutique/${id}`]);
  }

  deleteBoutique(id: string): void {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: 'Vous voulez vraiment supprimer cette boutique !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Annuler',
      confirmButtonText: 'Oui, supprimer !',
    }).then((result) => {
      if (result.isConfirmed) {
        this.loading = true;
        this.boutiqueService.deleteBoutique(id).subscribe({
          next: () => {
            this.boutiques = this.boutiques.filter(boutique => boutique.trackingId !== id);
            this.messageService.add({
              severity: 'success',
              summary: 'Succès',
              detail: 'Boutique supprimée avec succès',
            });
            Swal.fire('Supprimée !', 'La boutique a bien été supprimée.', 'success');
            this.loading = false;
          },
          error: (err) => {
            console.error('Erreur suppression boutique:', err);
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
