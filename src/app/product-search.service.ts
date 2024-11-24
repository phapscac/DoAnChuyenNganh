import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';  



@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {
  private baseUrl = 'http://localhost:50598/api/Products/search';

  constructor(private apiService: ApiService){} 

  searchProduct(query: string): Observable<any> {
    // Gửi tham số query thay vì keyword
    return this.apiService.getData(this.baseUrl + '?query=' + query);
  }
  
  
}
