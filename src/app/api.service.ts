// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  // Gọi API GET
  getData(url: string): Observable<any> {
    return this.http.get(url);
  }

  // Gọi API POST
  postData(url: string, payload: any): Observable<any> {
    return this.http.post(url, payload);
  }

  // Gọi API PUT
  updateData(url: string, payload: any): Observable<any> {
    return this.http.put(url, payload);
  }

  // Gọi API DELETE
  deleteData(url: string): Observable<any> {
    return this.http.delete(url);
  }
}