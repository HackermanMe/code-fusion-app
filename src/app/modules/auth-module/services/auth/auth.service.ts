import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CryptageService } from '../cryptage/cryptage.service';
import { jwtDecode } from 'jwt-decode';
import { environment } from '../../../../../environments/environment.development';
import { LoginRequest } from '../../../../models/request/login-request';
import { DataResponse } from '../../../../utils/data-response';
import { RegisterRequest } from '../../../../models/request/register-request';
import {AuthResponse} from '../../../../models/response/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl + 'auth/';

  constructor(
    private http: HttpClient,
    private router: Router,
    private cryptageService: CryptageService
  ) { }

  login(credentials: LoginRequest): Observable<DataResponse<AuthResponse>> {
    return this.http.post<DataResponse<AuthResponse>>(`${this.apiUrl}login`, credentials);
  }

  register(credentials: RegisterRequest): Observable<DataResponse<void>> {
    return this.http.post<DataResponse<void>>(`${this.apiUrl}register`, credentials);
  }

  saveToken(token: string): void {
    if (token && this.isValidJWT(token)) {
      this.cryptageService.setEncryptedItem('auth_token', token);
    }
  }

  getToken(): string | null {
    const token = this.cryptageService.getDecryptedItem('auth_token');
    return token && this.isValidJWT(token) ? token : null;
  }

  private isValidJWT(token: string): boolean {
    try {
      const parts = token.split('.');
      return parts.length === 3;
    } catch {
      return false;
    }
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getUserClaims(): any | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      return jwtDecode(token);
    } catch (error) {
      console.error('Token decode error:', error);
      this.clearToken();
      return null;
    }
  }

  clearToken(): void {
    this.cryptageService.removeItem('auth_token');
  }

  logout(): void {
    this.clearToken();
    this.router.navigate(['/auth/login']);
  }
}
