import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptageService {

  private secretKey = 'holly-ghost-fire';

  constructor() { }

  // Chiffrer les données
  encrypt(data: string): string {
    return CryptoJS.AES.encrypt(data, this.secretKey).toString();
  }

  // Déchiffrer les données
  decrypt(encryptedData: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedData, this.secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }

  // Stocker des données chiffrées dans le localStorage
  setEncryptedItem(key: string, data: string): void {
    const encryptedData = this.encrypt(data);
    localStorage.setItem(key, encryptedData);
  }

  // Récupérer et déchiffrer des données du localStorage
  getDecryptedItem(key: string): string | null {
    const encryptedData = localStorage.getItem(key);
    if (encryptedData) {
      return this.decrypt(encryptedData);
    }
    return null;
  }

  // Supprimer un élément du localStorage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Vider le localStorage
  clear(): void {
    localStorage.clear();
  }
}
