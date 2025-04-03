import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TypeTransaction } from '../../../../../enums/type-transaction';
import { StatutTransaction } from '../../../../../enums/statut-transaction';
import { TransactionRequest } from '../../../../../models/request/transaction-request';
import { AuthService } from '../../../../auth-module/services/auth/auth.service';
import { environment } from '../../../../../../environments/environment.development';

@Component({
  selector: 'app-transactions',
  standalone: false,
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  showAddForm = false;
  transactions: any[] = [];
  selectedTransaction: any = null;
  transactionTypes = Object.values(TypeTransaction);
  transactionStatuts = Object.values(StatutTransaction);

  newTransaction: TransactionRequest = {
    numero: '',
    montant: 0,
    date: new Date(),
    description: '',
    type: TypeTransaction.APPROVISIONNEMENT,
    statut: StatutTransaction.ATTENTE,
    stationServiceTrackingId: '',
    restaurantTrackingId: '',
    boutiqueTrackingId: '',
    marqueteurTrackingId: ''
  };

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    const apiUrl = `${environment.apiUrl}transactions`;
    const headers = {
      'Authorization': `Bearer ${this.authService.getToken()}`
    };

    this.http.get<any[]>(apiUrl, { headers }).subscribe({
      next: (data) => {
        this.transactions = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des transactions:', err);
      }
    });
  }

  addTransaction(): void {
    const apiUrl = `${environment.apiUrl}transactions`;
    const headers = {
      'Authorization': `Bearer ${this.authService.getToken()}`
    };

    this.http.post(apiUrl, this.newTransaction, { headers }).subscribe({
      next: () => {
        this.showAddForm = false;
        this.resetForm();
        this.loadTransactions();
      },
      error: (err) => {
        console.error('Erreur lors de l\'ajout de la transaction:', err);
      }
    });
  }

  openDetailsModal(transaction: any): void {
    this.selectedTransaction = transaction;
  }

  resetForm(): void {
    this.newTransaction = {
      numero: '',
      montant: 0,
      date: new Date(),
      description: '',
      type: TypeTransaction.APPROVISIONNEMENT,
      statut: StatutTransaction.ATTENTE,
      stationServiceTrackingId: '',
      restaurantTrackingId: '',
      boutiqueTrackingId: '',
      marqueteurTrackingId: ''
    };
  }
}