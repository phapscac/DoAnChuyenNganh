import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { on } from 'events';  // Add this line
declare var bootstrap: any;

interface Data {
  ProductCategoryList: any;
 }

 
@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.css'
})
export class ProductCategoryComponent {

  constructor(private api: ApiService, private router: Router)
  {
    
  }
  ngOnInit() {
    this.getProductCategory();
  }



  data: Data = {
    ProductCategoryList: []
  }
  selectedProductIds: Set<string> = new Set<string>();

  getProductCategory = () => {
    this.api.getData('api/Catalogs').subscribe(
      {
        next: (reponse) => {
          if (reponse.success) {
             this.data.ProductCategoryList = reponse.data;
          } else {
 
          }
        },
        error: (error) => {
 
        }
      });
  }
 
  deleteProductCategory = (id: string): void => {
    const apiUrl = `api/Catalogs/delete?catalogId=${id}`; // Thay đổi URL sử dụng query string
    console.log('URL gửi yêu cầu:', apiUrl); // Kiểm tra URL gửi đi
  
    this.api.deleteData(apiUrl).subscribe({
      next: (response: { success: boolean }) => {
        if (response.success) {
          this.getProductCategory();
        } else {
          console.error('Xóa không thành công.');
        }
      },
      error: (error: any) => {
        console.error('Lỗi khi xóa danh mục sản phẩm:', error);
      }
    });
  };
  

  toggleSelection(productId: string, event: any) {
    if (event.target.checked) {
      this.selectedProductIds.add(productId);
    } else {
      this.selectedProductIds.delete(productId);
    }
  }

  toggleAll(event: any) {
    if (event.target.checked) {
      this.data.ProductCategoryList.forEach((category: any) => this.selectedProductIds.add(category.id));
    } else {
      this.selectedProductIds.clear();
    }
  }

  deleteSelectedProducts() {
    const idsToDelete = Array.from(this.selectedProductIds);
    idsToDelete.forEach((id) => {
      const apiUrl = `api/Catalogs/delete?catalogId=${id}`; // Thay đổi URL sử dụng query string
      console.log('URL gửi yêu cầu:', apiUrl); // Kiểm tra URL gửi đi

      this.api.deleteData(apiUrl).subscribe({
        next: (response: { success: boolean }) => {
          if (response.success) {
            this.selectedProductIds.delete(id);
            this.getProductCategory();
          } else {
            console.error('Xóa danh mục sản phẩm thất bại');
          }
        },
        error: (error: any) => {
          console.error('Lỗi khi xóa danh mục sản phẩm:', error);
        }
      });
    });
  }
  
  
}

 
  


