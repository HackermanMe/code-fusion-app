import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment.development';
import { CategorieRequest } from '../../models/request/categorie-request';
import { CategorieResponse } from '../../models/response/categorie-response';


interface ApiResponse<T> {
  message: string;
  data: T;
}


@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private apiUrl = `${environment.apiUrl}/api/categories`; 

  constructor(private http: HttpClient) { }

  createCategorie(request: CategorieRequest): Observable<ApiResponse<CategorieResponse>> {
    return this.http.post<ApiResponse<CategorieResponse>>(this.apiUrl, request);
  }

  getCategorieByTrackingId(trackingId: string): Observable<ApiResponse<CategorieResponse>> {
    return this.http.get<ApiResponse<CategorieResponse>>(`${this.apiUrl}/${trackingId}`);
  }

  getAllCategories(): Observable<ApiResponse<CategorieResponse[]>> {
    return this.http.get<ApiResponse<CategorieResponse[]>>(this.apiUrl);
  }
  

  updateCategorie(trackingId: string, request: CategorieRequest): Observable<ApiResponse<CategorieResponse>> {
    return this.http.put<ApiResponse<CategorieResponse>>(`${this.apiUrl}/${trackingId}`, request);
  }

  deleteCategorie(trackingId: string): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.apiUrl}/${trackingId}`);
  }
  
  
}






















  