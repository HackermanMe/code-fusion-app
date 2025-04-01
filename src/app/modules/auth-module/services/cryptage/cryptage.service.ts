import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CryptageService {
  // Utilisez une clé plus sécurisée (idéalement depuis environment.ts)
  private secretKey = 'default-secret-key-123';

  constructor() { }

  // Chiffrer les données
  encrypt(data: string): string {
    try {
      return CryptoJS.AES.encrypt(data, this.secretKey).toString();
    } catch (error) {
      console.error('Erreur de chiffrement:', error);
      return data; // Retourne les données non chiffrées en cas d'erreur
    }
  }

  // Déchiffrer les données
  decrypt(encryptedData: string): string {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedData, this.secretKey);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);

      if (!decrypted) {
        console.warn('Décryptage retourné vide - retour des données originales');
        return encryptedData;
      }

      return decrypted;
    } catch (error) {
      console.error('Erreur de déchiffrement:', error);
      return encryptedData; // Retourne les données originales en cas d'erreur
    }
  }

  // Stocker des données chiffrées
  setEncryptedItem(key: string, data: string): void {
    try {
      if (typeof data !== 'string') {
        data = JSON.stringify(data);
      }
      const encryptedData = this.encrypt(data);
      localStorage.setItem(key, encryptedData);
    } catch (error) {
      console.error('Erreur lors du stockage:', error);
      localStorage.setItem(key, data); // Stocke non chiffré en dernier recours
    }
  }

  // Récupérer des données déchiffrées
  getDecryptedItem(key: string): string | null {
    try {
      const encryptedData = localStorage.getItem(key);
      if (!encryptedData) return null;

      // Essayez de décrypter
      const decrypted = this.decrypt(encryptedData);

      // Vérifiez si le décryptage a retourné quelque chose d'utilisable
      try {
        return JSON.parse(decrypted); // Essayez de parser en cas de JSON
      } catch {
        return decrypted; // Retourne la string directement si ce n'est pas du JSON
      }
    } catch (error) {
      console.error('Erreur de récupération:', error);
      return localStorage.getItem(key); // Retourne la valeur non décryptée
    }
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}