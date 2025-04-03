import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransactionRequest } from '../../models/request/transaction-request';
import { TransactionResponse } from '../../models/response/transaction-response';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiUrl = environment.apiUrl + 'transactions';

  constructor(private http: HttpClient) { }

  getTransaction(trackingId: string): Observable<TransactionResponse> {
    return this.http.get<TransactionResponse>(`${this.apiUrl}/${trackingId}`);
  }

  getTransactions(): Observable<TransactionResponse[]> {
    return this.http.get<TransactionResponse[]>(this.apiUrl);
  }

  createTransaction(transactionRequest: TransactionRequest): Observable<TransactionResponse> {
    return this.http.post<TransactionResponse>(this.apiUrl, transactionRequest);
  }

  updateTransaction(trackingId: string, transactionRequest: TransactionRequest): Observable<TransactionResponse> {
    return this.http.put<TransactionResponse>(`${this.apiUrl}/${trackingId}`, transactionRequest);
  }

  deleteTransaction(trackingId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${trackingId}`);
  }
}
