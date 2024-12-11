import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { on } from 'events';  // Add this line

interface Data {
  ServiceCategoryList: any;
 }

 @Component({
  selector: 'app-service-category',
  templateUrl: './service-category.component.html',
  styleUrl: './service-category.component.css'
})
export class ServiceCategoryComponent {
  

  constructor(private api: ApiService, private router: Router)
  {
    
  }
  ngOnInit() {
    this.getProductCategory();
  }
  data: Data = {
    ServiceCategoryList: []
  }
  selectedProductIds: Set<string> = new Set<string>();

  getProductCategory = () => {
    this.api.getData('api/ServiceCatalogs').subscribe(
      {
        next: (reponse) => {
          if (reponse.success) {
             this.data.ServiceCategoryList = reponse.data;
          } else {
 
          }
        },
        error: (error) => {
 
        }
      });
  }
 
  deleteProductCategory = (id: string): void => {
    const apiUrl = `api/ServiceCatalogs/delete?catalogId=${id}`; // Thay đổi URL sử dụng query string
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
      this.data.ServiceCategoryList.forEach((category: any) => this.selectedProductIds.add(category.id));
    } else {
      this.selectedProductIds.clear();
    }
  }

  deleteSelectedProducts() {
    const idsToDelete = Array.from(this.selectedProductIds);
    idsToDelete.forEach((id) => {
      const apiUrl = `api/ServiceCatalogs/delete?catalogId=${id}`; // Thay đổi URL sử dụng query string
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

 
  


