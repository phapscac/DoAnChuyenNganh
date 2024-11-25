// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { env } from '../env/env';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl: string = env.apiUrl;

  constructor(private http: HttpClient) {}

  // Gọi API GET
  getData(url: string): Observable<any> {
    return this.http
        .get(`${this.apiUrl}/${url}`)
        .pipe(catchError(this.handleError));
  }

  // Gọi API POST
  postData(url: string, payload: any, options?: any): Observable<any> {

    return this.http
        .post(`${this.apiUrl}/${url}`, payload, options)
        .pipe(catchError(this.handleError));;

  }

  // Gọi API PUT
  updateData(url: string, payload: any): Observable<any> {
    return this.http
        .put(`${this.apiUrl}/${url}`, payload)
        .pipe(catchError(this.handleError));;
  }

  // Gọi API DELETE
  deleteData(url: string): Observable<any> {
    return this.http
        .delete(`${this.apiUrl}/${url}`)
        .pipe(catchError(this.handleError));
  }

  // Xử lý lỗi
  handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(() => 
      error
    );
  }
}