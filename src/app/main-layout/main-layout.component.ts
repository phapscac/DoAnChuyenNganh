import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ProductSearchService } from '../product-search.service';  

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
  searchQuery: string = '';

  constructor( private apiService: ApiService, private router: Router,
    private productSearchService: ProductSearchService
  ) { }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.productSearchService.searchProducts(this.searchQuery).subscribe(
        data => {
          console.log('Kết quả tìm kiếm:', data);
          // Xử lý kết quả tìm kiếm, ví dụ: điều hướng đến trang kết quả tìm kiếm
          this.router.navigate(['/search-results'], { queryParams: { query: this.searchQuery } });
        },
        error => {
          console.error('Lỗi khi tìm kiếm:', error);
        }
      );
    }
  }
}