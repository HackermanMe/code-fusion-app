import { Injectable } from '@angular/core';



import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { ProduitRequest } from '../../models/request/produit-request';
import { ProduitResponse } from '../../models/response/produit-response';

interface ApiResponse<T> {
  message: string;
  data: T;
}


@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private apiUrl = `${environment.apiUrl}/api/produits`; 

  constructor(private http: HttpClient) { }

  createProduit(request: ProduitRequest): Observable<ApiResponse<ProduitResponse>> {
    return this.http.post<ApiResponse<ProduitResponse>>(this.apiUrl, request);
  }

  getProduitByTrackingId(trackingId: string): Observable<ApiResponse<ProduitResponse>> {
    return this.http.get<ApiResponse<ProduitResponse>>(`${this.apiUrl}/${trackingId}`);
  }

  getAllProduits(): Observable<ApiResponse<ProduitResponse[]>> {
    return this.http.get<ApiResponse<ProduitResponse[]>>(this.apiUrl);
  }
  

  updateProduit(trackingId: string, request: ProduitRequest): Observable<ApiResponse<ProduitResponse>> {
    return this.http.put<ApiResponse<ProduitResponse>>(`${this.apiUrl}/${trackingId}`, request);
  }

  deleteProduit(trackingId: string): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.apiUrl}/${trackingId}`);
  }
  
  
}





  