import { Injectable } from '@angular/core';



import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { BoutiqueRequest } from '../../models/request/boutique-request';
import { BoutiqueResponse } from '../../models/response/boutique-response';



interface ApiResponse<T> {
  _embedded: any;
  message: string;
  data: T;
}




@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {

  private apiUrl = `${environment.apiUrl}boutiques`;

  constructor(private http: HttpClient) { }

  createBoutique(request: BoutiqueRequest): Observable<ApiResponse<BoutiqueResponse>> {
    return this.http.post<ApiResponse<BoutiqueResponse>>(this.apiUrl, request);
  }

  getBoutiqueByTrackingId(trackingId: string): Observable<ApiResponse<BoutiqueResponse>> {
    return this.http.get<ApiResponse<BoutiqueResponse>>(`${this.apiUrl}/${trackingId}`);
  }

  getAllBoutiques(): Observable<ApiResponse<BoutiqueResponse[]>> {
    return this.http.get<ApiResponse<BoutiqueResponse[]>>(this.apiUrl);
  }


  updateBoutique(trackingId: string, request: BoutiqueRequest): Observable<ApiResponse<BoutiqueResponse>> {
    return this.http.put<ApiResponse<BoutiqueResponse>>(`${this.apiUrl}/${trackingId}`, request);
  }

  deleteBoutique(trackingId: string): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.apiUrl}/${trackingId}`);
  }


}





