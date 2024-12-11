// storage.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  // Lưu dữ liệu vào local storage
  async setToken(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  // Lấy dữ liệu từ local storage
  getToken(key: string): string | null {
    return localStorage.getItem(key);
  }

  // Xóa một mục từ local storage
  removeToken(key: string): void {
    localStorage.removeItem(key);
  }

  //Lưu dữ liệu vào local storage dạng Object
  saveObjectToLocalStorage(key: string, obj: any): void {
    localStorage.setItem(key, JSON.stringify(obj));
  }

  //Lấy dữ liệu từ local storage dạng Object
  getObjectFromLocalStorage(key: string): any {
    const storedItem = localStorage.getItem(key);
    return storedItem ? JSON.parse(storedItem) : null;
  }

  // Set Token bất đồng bộ
  setTokenAsync(key: string, value: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        localStorage.setItem(key, value);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
}
