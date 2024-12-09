// api.service.ts
import { Injectable ,Inject, PLATFORM_ID} from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { env } from '../env/env';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl: string = env.apiUrl;

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {}


  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('accessToken');
      if (token) {
        headers = headers.set('Authorization', `Bearer ${token}`);
      

      }
    }
  

    return headers;
  }


  // Gọi API GET
  getData(url: string): Observable<any> {
    return this.http
        .get(`${this.apiUrl}/${url}`,{ headers: this.getHeaders()})
        .pipe(catchError(this.handleError));
  }

  getDataa(url: string, params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        httpParams = httpParams.set(key, params[key]);
      });
    }
    return this.http
      .get(`${this.apiUrl}/${url}`, { headers: this.getHeaders(), params: httpParams })
      .pipe(catchError(this.handleError));
  }

  
  

  // Gọi API POST
  postData(url: string, payload: any, options?: any): Observable<any> {

    return this.http
        .post(`${this.apiUrl}/${url}`, payload,{ headers: this.getHeaders(), ...options })
        .pipe(catchError(this.handleError));;

  }

  postDataa(url: string, payload: any, options?: any): Observable<any> {

    return this.http
        .post(`${url}`, payload, options)
        .pipe(catchError(this.handleError));;

  }

  // Gọi API PUT
  updateData(url: string, payload: any): Observable<any> {
    return this.http
        .put(`${this.apiUrl}/${url}`, payload, { headers: this.getHeaders() })
        .pipe(catchError(this.handleError));;
  }

  // Gọi API DELETE
  deleteData(url: string): Observable<any> {
    return this.http
        .delete(`${this.apiUrl}/${url}`,{ headers: this.getHeaders() })
        .pipe(catchError(this.handleError));
  }

  // Xử lý lỗi
  handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(() => 
      error
    );
  }
}