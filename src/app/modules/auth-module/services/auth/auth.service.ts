import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataResponse } from '../../../../utils/data-response';
import { environment } from '../../../../../environments/environment.development';
import { CryptageService } from '../cryptage/cryptage.service';
import { jwtDecode } from 'jwt-decode';
import { LoginRequest } from '../../../../models/request/login-request';
import { RegisterRequest } from '../../../../models/request/register-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl + "auth";

  constructor(private http: HttpClient, private router: Router, private cryptageService: CryptageService) { }

  login(credentials: LoginRequest): Observable<DataResponse<string>> {
    return this.http.post<DataResponse<string>>(`${this.apiUrl}/login`, credentials);
  }

  register(credentials: RegisterRequest): Observable<DataResponse<void>> {
    return this.http.post<DataResponse<void>>(`${this.apiUrl}/register`, credentials);
  }

  saveToken(token: string): void {
    this.cryptageService.setEncryptedItem('jwtToken', token);
  }

  getToken(): string | null {
    return this.cryptageService.getDecryptedItem('jwtToken');
  }

  // // Cette méthode va verifier si l'utilisateur est connecté
  // isAuthenticated(): boolean {
  //   return !!this.getToken();
  // }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) return false;

    try {
      const { exp } = jwtDecode(token);
      return exp ? exp > Date.now() / 1000 : false;
    } catch {
      this.logout();
      return false;
    }
  }

  logout(): void {
    this.http.post<DataResponse<void>>(`${this.apiUrl}/logout`, {}).subscribe({
      next: () => {
        // Ici je vais uspprimer le token du localStorage
        this.cryptageService.removeItem('jwtToken');
        // Je vais rediriger l'utilisateur vers la page de connexion
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Erreur lors de la déconnexion', err);
      }
    });
  }

  // Cette méthode va retourner les claims du token
  getUserClaims(): any | null {
    const token = this.getToken();
    if (token) {
      try {
        return jwtDecode(token);
      } catch (error) {
        console.error("Erreur lors du décodage du token", error);
        return null;
      }
    }
    return null;
  }


  getDecryptedClaims(): any | null {
    const token = this.getToken(); // Récupère et déchiffre le token
    if (token) {
      try {
        return jwtDecode(token); // Décode les claims
      } catch (error) {
        console.error("Erreur lors du décodage du token", error);
        return null;
      }
    }
    return null;
  }
}
