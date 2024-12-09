import { Component, AfterViewInit, OnInit,ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

declare var bootstrap: any;

interface Data {
  ProductCategoryList: any;
 }
 interface ProductCategory {
  catalogId: string;
  catalogName: string;
 
 }

 
@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.css'
})
export class ProductCategoryComponent implements OnInit{

  constructor(private api: ApiService, private router: Router)
  {}
  ngOnInit() {
    this.getProductCategory();
  }

  productCategory: ProductCategory = {
    catalogId: '',
  catalogName: ''
  };
  editMode = false;
 

  data: Data = {
    ProductCategoryList: []
  }
  selectedProductIds: Set<string> = new Set<string>();

  isModalOpen: boolean = false; 
  openModal() {
    this.isModalOpen = true; // Cập nhật trạng thái modal
  }

  // Hàm đóng modal
  closeModal() {
    this.isModalOpen = false; // Cập nhật trạng thái modal
  }
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

  addCategory = (): void => {
    if (!this.productCategory.catalogId || !this.productCategory.catalogName) {
      console.error('Dữ liệu không hợp lệ. Vui lòng nhập đầy đủ thông tin.');
      return;
    }
    const body = {
      catalogId: this.productCategory.catalogId,
      catalogName: this.productCategory.catalogName
      
    };
  
    this.api.postData('api/Catalogs/create', body).subscribe({
      next: (response: { success: boolean }) => {
        if (response.success) {
          this.getProductCategory();
        } else {
          console.error('Thêm danh mục sản phẩm thất bại');
        }
      },
      error: (error: any) => {
        console.error('Lỗi khi thêm danh mục sản phẩm:', error);
      }
    });
  }


  editCategory(category: any): void {
    this.productCategory = { ...category };
    this.editMode = true;
    const modalElement = document.getElementById('editModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
  
  updateCategory(): void {
    if (!this.productCategory.catalogId || !this.productCategory.catalogName) {
      console.error('Dữ liệu không hợp lệ. Vui lòng nhập đầy đủ thông tin.');
      return;
    }
    const body = {
      catalogId: this.productCategory.catalogId,
      catalogName: this.productCategory.catalogName
    };
  
    this.api.updateData('api/Catalogs/update', body).subscribe({
      next: (response: { success: boolean }) => {
        if (response.success) {
          this.getProductCategory();
          this.editMode = false;
          const modalElement = document.getElementById('editModal');
          const modal = bootstrap.Modal.getInstance(modalElement);
          modal.hide();  // Ở đây có thể sử dụng hide() nếu cần
        } else {
          console.error('Cập nhật danh mục sản phẩm thất bại');
        }
      },
      error: (error: any) => {
        console.error('Lỗi khi cập nhật danh mục sản phẩm:', error);
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

 
  


