import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BoutiqueService } from '../../../../../../services/boutique/boutique.service';
import { BoutiqueRequest } from '../../../../../../models/request/boutique-request';
import Swal from 'sweetalert2';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-boutique',
  standalone:false,
  templateUrl: './add-boutique.component.html',
  styleUrls: ['./add-boutique.component.css'],
  providers: [MessageService],
})
export class AddBoutiqueComponent implements OnInit {
  boutiqueForm!: FormGroup;
  isLoading = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private boutiqueService: BoutiqueService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * Initialisation du formulaire avec les validations
   */
  initForm(): void {
    this.boutiqueForm = this.formBuilder.group({
      nom: ['', Validators.required],
      adresse: ['', Validators.required],
      telephone: ['', [Validators.pattern('^[0-9]+$')]],
      actif: [false],
    });
  }

  /**
   * Soumission du formulaire
   */
  onSubmit(): void {
    if (this.boutiqueForm.invalid) {
      this.boutiqueForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const formData = this.boutiqueForm.value;

    const boutiqueData: BoutiqueRequest = {
      nom: formData.nom,
      adresse: formData.adresse,
      telephone: formData.telephone,
      actif: formData.actif,
    };

    this.boutiqueService.createBoutique(boutiqueData).subscribe({
      next: () => {
        this.isLoading = false;
        Swal.fire('Ajout réussi', 'La boutique a été ajoutée avec succès', 'success');
        this.messageService.add({
          severity: 'success',
          summary: 'Ajout réussi',
          detail: 'Boutique ajoutée',
        });
        this.router.navigate(['/directeur/list-boutiques']);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = "Une erreur s'est produite lors de l'ajout.";
        Swal.fire('Erreur', this.errorMessage, 'error');
        console.error('Erreur API :', error);
        this.messageService.add({ severity: 'error', summary: 'Erreur', detail: this.errorMessage });
      },
    });
  }

  /**
   * Annuler et retourner à la liste
   */
  onCancel(): void {
    this.router.navigate(['/directeur/list-boutiques']);
  }
}
