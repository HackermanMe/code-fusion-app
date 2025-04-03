import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataResponse } from '../../utils/data-response';
import { environment } from '../../../environments/environment.development';

export interface VerifyCodeRequest {
  email: string;
  code: string;
}

@Injectable({
  providedIn: 'root'
})
export class VerificationService {
  private apiUrl = environment.apiUrl + 'auth/verify';

  constructor(private http: HttpClient) { }

  /**
   * Vérifie le code de validation
   * @param request Les données de vérification (email + code)
   * @returns Observable avec la réponse
   */
  verifyAccount(request: VerifyCodeRequest): Observable<DataResponse<any>> {
    return this.http.post<DataResponse<any>>(this.apiUrl, request);
  }
}