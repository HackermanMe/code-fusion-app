import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CryptageService {
  private secretKey = environment.encryptionKey || 'default-secure-key-12345';

  constructor() { }

  encrypt(data: string): string {
    try {
      if (!data) return '';
      return CryptoJS.AES.encrypt(data, this.secretKey).toString();
    } catch (error) {
      console.error('Encryption error:', error);
      return data;
    }
  }

  decrypt(encryptedData: string): string {
    if (!encryptedData) return '';

    try {
      const bytes = CryptoJS.AES.decrypt(encryptedData, this.secretKey);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      return decrypted || encryptedData;
    } catch (error) {
      console.error('Decryption error:', error);
      return encryptedData;
    }
  }

  setEncryptedItem(key: string, data: string): void {
    try {
      const encrypted = this.encrypt(data);
      localStorage.setItem(key, encrypted);
    } catch (error) {
      console.error('Storage set error:', error);
      localStorage.setItem(key, data);
    }
  }

  getDecryptedItem(key: string): string | null {
    try {
      const data = localStorage.getItem(key);
      return data ? this.decrypt(data) : null;
    } catch (error) {
      console.error('Storage get error:', error);
      return localStorage.getItem(key);
    }
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}