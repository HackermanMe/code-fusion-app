import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StationServiceRequest } from '../../models/request/station-service-request';
import { StationServiceResponse } from '../../models/response/station-service-response';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StationServiceService {

  private apiUrl = environment.apiUrl + 'stationservices';

  constructor(private http: HttpClient) { }

  getStationService(trackingId: string): Observable<StationServiceResponse> {
    return this.http.get<StationServiceResponse>(`${this.apiUrl}/${trackingId}`);
  }

  getStationServices(): Observable<StationServiceResponse[]> {
    return this.http.get<StationServiceResponse[]>(this.apiUrl);
  }

  createStationService(stationServiceRequest: StationServiceRequest): Observable<StationServiceResponse> {
    return this.http.post<StationServiceResponse>(this.apiUrl, stationServiceRequest);
  }

  updateStationService(trackingId: string, stationServiceRequest: StationServiceRequest): Observable<StationServiceResponse> {
    return this.http.put<StationServiceResponse>(`${this.apiUrl}/${trackingId}`, stationServiceRequest);
  }

  deleteStationService(trackingId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${trackingId}`);
  }
}
