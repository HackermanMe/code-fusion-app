import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataResponse } from '../../utils/data-response';
import Swal from 'sweetalert2';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';

export interface VerifyCodeRequest {
  email: string;
  code: string;
}

@Injectable({
  providedIn: 'root'
})
export class VerificationService {
  private apiUrl = environment.apiUrl + 'auth/verify';

  constructor(private http: HttpClient, private router: Router) { }

  /**
   * Vérifie le code de validation
   * @param request Les données de vérification (email + code)
   * @returns Observable avec la réponse
   */
  verifyAccount(request: VerifyCodeRequest): Observable<DataResponse<any>> {
    return this.http.post<DataResponse<any>>(this.apiUrl, request);
  }

  /**
   * Affiche une notification de succès
   */
  showSuccessMessage(message: string): void {
    Swal.fire({
      icon: 'success',
      title: 'Succès!',
      text: message,
      timer: 1500,
      showConfirmButton: false,
      timerProgressBar: true
    });
  }

  /**
   * Affiche une notification d'erreur
   */
  showErrorMessage(message: string): void {
    Swal.fire({
      icon: 'error',
      title: 'Erreur',
      text: message,
      confirmButtonText: 'OK',
      confirmButtonColor: '#3085d6'
    });
  }

  /**
   * Affiche une notification d'avertissement
   */
  showWarningMessage(message: string): void {
    Swal.fire({
      icon: 'warning',
      title: 'Attention',
      text: message,
      confirmButtonText: 'Compris',
      confirmButtonColor: '#f59e0b'
    });
  }

  /**
   * Processus complet de vérification
   */
  completeVerification(request: VerifyCodeRequest, onSuccess: () => void): void {
    this.verifyAccount(request).subscribe({
      next: (response) => {
        if (response.data) {
          this.showSuccessMessage(response.message || 'Compte vérifié avec succès!');
          this.router.navigate(['/auth/login']);
          onSuccess();
        } else {
          this.showErrorMessage(response.message || 'Erreur lors de la vérification');
        }
      },
      error: (err) => {
        this.showErrorMessage(err.error?.message || 'Une erreur est survenue');
      }
    });
  }
}