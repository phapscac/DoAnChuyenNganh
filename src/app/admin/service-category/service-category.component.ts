import { Component,AfterViewInit, OnInit,ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

declare var bootstrap: any;
interface Data {
  ServiceCategoryList: any;
 }

 interface ServiceCategory {
  catalogId: string;
  catalogName: string;
 
 }
 @Component({
  selector: 'app-service-category',
  templateUrl: './service-category.component.html',
  styleUrl: './service-category.component.css'
})
export class ServiceCategoryComponent implements OnInit{
  

  constructor(private api: ApiService, private router: Router)
  {
    
  }
  ngOnInit() {
    this.getserviceCategory();
  }
  data: Data = {
    ServiceCategoryList: []
  }
  serviceCategory: ServiceCategory = {
    catalogId: '',
  catalogName: ''
  };
  editMode = false;
  selectedProductIds: Set<string> = new Set<string>();

  
  isModalOpen: boolean = false; 
  openModal() {
    this.isModalOpen = true; // Cập nhật trạng thái modal
  }

  // Hàm đóng modal
  closeModal() {
    this.isModalOpen = false; // Cập nhật trạng thái modal
  }

  getserviceCategory = () => {
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

  addCategory = (): void => {
    if (!this.serviceCategory.catalogId || !this.serviceCategory.catalogName) {
      console.error('Dữ liệu không hợp lệ. Vui lòng nhập đầy đủ thông tin.');
      return;
    }
    const body = {
      catalogId: this.serviceCategory.catalogId,
      catalogName: this.serviceCategory.catalogName
      
    };
  
    this.api.postData('api/ServiceCatalogs/create', body).subscribe({
      next: (response: { success: boolean }) => {
        if (response.success) {
          this.getserviceCategory();
        } else {
          console.error('Thêm danh mục dịch vụ thất bại');
        }
      },
      error: (error: any) => {
        console.error('Lỗi khi thêm danh mục dịch vụ:', error);
      }
    });
  }
  editCategory(category: any): void {
    this.serviceCategory = { ...category };
    this.editMode = true;
    const modalElement = document.getElementById('editModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
  
  updateCategory(): void {
    if (!this.serviceCategory.catalogId || !this.serviceCategory.catalogName) {
      console.error('Dữ liệu không hợp lệ. Vui lòng nhập đầy đủ thông tin.');
      return;
    }
    const body = {
      catalogId: this.serviceCategory.catalogId,
      catalogName: this.serviceCategory.catalogName
    };
  
    this.api.updateData('api/Catalogs/update', body).subscribe({
      next: (response: { success: boolean }) => {
        if (response.success) {
          this.getserviceCategory();
          this.editMode = false;
          const modalElement = document.getElementById('editModal');
          const modal = bootstrap.Modal.getInstance(modalElement);
          modal.hide();  // Ở đây có thể sử dụng hide() nếu cần
        } else {
          console.error('Cập nhật danh mục  dịch vụ thất bại');
        }
      },
      error: (error: any) => {
        console.error('Lỗi khi cập nhật danh mục  dịch vụ', error);
      }
    });
  }

  deleteserviceCategory = (id: string): void => {
    const apiUrl = `api/ServiceCatalogs/delete?catalogId=${id}`; // Thay đổi URL sử dụng query string
    console.log('URL gửi yêu cầu:', apiUrl); // Kiểm tra URL gửi đi
  
    this.api.deleteData(apiUrl).subscribe({
      next: (response: { success: boolean }) => {
        if (response.success) {
          this.getserviceCategory();
        } else {
          console.error('Xóa không thành công.');
        }
      },
      error: (error: any) => {
        console.error('Lỗi khi xóa danh mục dịch vụ:', error);
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
            this.getserviceCategory();
          } else {
            console.error('Xóa danh mục  dịch vụ thất bại');
          }
        },
        error: (error: any) => {
          console.error('Lỗi khi xóa danh mục  dịch vụ:', error);
        }
      });
    });
  }
  
  
}

 
  


