import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoleResponse } from '../../models/response/role-response';
import { RoleRequest } from '../../models/request/role-request';
import { environment } from '../../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private apiUrl = environment.apiUrl + 'roles';

  constructor(private http: HttpClient) { }

  getRole(trackingId: string): Observable<RoleResponse> {
    return this.http.get<RoleResponse>(`${this.apiUrl}/${trackingId}`);
  }

  getRoles(): Observable<RoleResponse[]> {
    return this.http.get<RoleResponse[]>(this.apiUrl);
  }

  createRole(roleRequest: RoleRequest): Observable<RoleResponse> {
    return this.http.post<RoleResponse>(this.apiUrl, roleRequest);
  }

  updateRole(trackingId: string, roleRequest: RoleRequest): Observable<RoleResponse> {
    return this.http.put<RoleResponse>(`${this.apiUrl}/${trackingId}`, roleRequest);
  }

  deleteRole(trackingId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${trackingId}`);
  }
}
