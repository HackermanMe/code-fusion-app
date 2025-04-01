import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { MarqueteurRequest } from '../../models/request/marqueteur-request';
import { MarqueteurResponse } from '../../models/response/marqueteur-response';

interface ApiResponse<T> {
  message: string;
  data: T;
}


@Injectable({
  providedIn: 'root'
})
export class MarqueteurService {

  private apiUrl = `${environment.apiUrl}/api/marqueteurs`; 

  constructor(private http: HttpClient) { }

  createMarqueteur(request: MarqueteurRequest): Observable<ApiResponse<MarqueteurResponse>> {
    return this.http.post<ApiResponse<MarqueteurResponse>>(this.apiUrl, request);
  }

  getMarqueteurByTrackingId(trackingId: string): Observable<ApiResponse<MarqueteurResponse>> {
    return this.http.get<ApiResponse<MarqueteurResponse>>(`${this.apiUrl}/${trackingId}`);
  }

  getAllMarqueteurs(): Observable<ApiResponse<MarqueteurResponse[]>> {
    return this.http.get<ApiResponse<MarqueteurResponse[]>>(this.apiUrl);
  }
  

  updateMarqueteur(trackingId: string, request: MarqueteurRequest): Observable<ApiResponse<MarqueteurResponse>> {
    return this.http.put<ApiResponse<MarqueteurResponse>>(`${this.apiUrl}/${trackingId}`, request);
  }

  deleteMarqueteur(trackingId: string): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.apiUrl}/${trackingId}`);
  }
  
  
}






















  