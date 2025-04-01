import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestaurantRequest } from '../../models/request/restaurant-request';
import { RestaurantResponse } from '../../models/response/restaurant-response';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private baseUrl = environment.apiUrl + 'restaurants';

  constructor(private http: HttpClient) { }

  // Créer un nouveau restaurant
  createRestaurant(request: RestaurantRequest): Observable<RestaurantResponse> {
    return this.http.post<RestaurantResponse>(this.baseUrl, request);
  }

  // Obtenir un restaurant par son trackingId
  getRestaurant(trackingId: string): Observable<RestaurantResponse> {
    return this.http.get<RestaurantResponse>(`${this.baseUrl}/${trackingId}`);
  }

  // Obtenir la liste de tous les restaurants
  getAllRestaurants(): Observable<RestaurantResponse[]> {
    return this.http.get<RestaurantResponse[]>(this.baseUrl);
  }

  // Mettre à jour un restaurant
  updateRestaurant(trackingId: string, request: RestaurantRequest): Observable<RestaurantResponse> {
    return this.http.put<RestaurantResponse>(`${this.baseUrl}/${trackingId}`, request);
  }

  // Supprimer un restaurant
  deleteRestaurant(trackingId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${trackingId}`);
  }
}
