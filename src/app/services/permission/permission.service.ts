import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { PermissionRequest } from '../../models/request/permission-request';
import { PermissionResponse } from '../../models/response/permission-response';

interface ApiResponse<T> {
  message: string;
  data: T;
}


@Injectable({
  providedIn: 'root'
})


export class PermissionService {

  private apiUrl = `${environment.apiUrl}/api/permissions`; 

  constructor(private http: HttpClient) { }

  createPermission(request: PermissionRequest): Observable<ApiResponse<PermissionResponse>> {
    return this.http.post<ApiResponse<PermissionResponse>>(this.apiUrl, request);
  }

  getPermissionByTrackingId(trackingId: string): Observable<ApiResponse<PermissionResponse>> {
    return this.http.get<ApiResponse<PermissionResponse>>(`${this.apiUrl}/${trackingId}`);
  }

  getAllPermissions(): Observable<ApiResponse<PermissionResponse[]>> {
    return this.http.get<ApiResponse<PermissionResponse[]>>(this.apiUrl);
  }
  

  updatePermission(trackingId: string, request: PermissionRequest): Observable<ApiResponse<PermissionResponse>> {
    return this.http.put<ApiResponse<PermissionResponse>>(`${this.apiUrl}/${trackingId}`, request);
  }

  deletePermission(trackingId: string): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.apiUrl}/${trackingId}`);
  }
  
  
}






















  





