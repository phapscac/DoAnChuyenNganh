import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { ProductSearchService } from '../product-search.service';  

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(private route: ActivatedRoute,  private apiService: ApiService,
    private productSearchService: ProductSearchService 
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['query'];
      this.searchProducts();
    });
  }

  searchProducts(): void {
    this.productSearchService.searchProducts(this.searchQuery).subscribe(
      data => {
        this.searchResults = data;
      },
      error => {
        console.error('Lỗi khi tìm kiếm:', error);
      }
    );
  }
}