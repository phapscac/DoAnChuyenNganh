import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';  



@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {
  private baseUrl = 'api/Products/search';

  constructor(private apiService: ApiService){} 

  searchProducts(query: string): Observable<any> {
    return this.apiService.getDataa(`${this.baseUrl}`, { params: { query } });
  }
  
  
}
