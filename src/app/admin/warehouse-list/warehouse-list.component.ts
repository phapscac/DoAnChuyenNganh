import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service'; // Giả sử bạn có một WarehouseService để gọi API

interface Data {
  WarehouseList: any;
 }
@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.css']
})
export class WarehouseListComponent implements OnInit {
  warehouses: any[] = [];

  constructor(private apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadWarehouses();
  }
  selectedProductIds: Set<string> = new Set<string>();
  
  data: Data = {
      WarehouseList:[]
  }
  loadWarehouses() {
    this.apiService.getData('api/Warehouses').subscribe(
      {
        next: (reponse) => {
          if (reponse.success) {
             this.data.WarehouseList = reponse.data;
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
  
    this.apiService.deleteData(apiUrl).subscribe({
      next: (response: { success: boolean }) => {
        if (response.success) {
          this.loadWarehouses();
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
      this.data.WarehouseList.forEach((category: any) => this.selectedProductIds.add(category.id));
    } else {
      this.selectedProductIds.clear();
    }
  }

  deleteSelectedProducts() {
    const idsToDelete = Array.from(this.selectedProductIds);
    idsToDelete.forEach((id) => {
      const apiUrl = `api/Catalogs/delete?catalogId=${id}`; // Thay đổi URL sử dụng query string
      console.log('URL gửi yêu cầu:', apiUrl); // Kiểm tra URL gửi đi

      this.apiService.deleteData(apiUrl).subscribe({
        next: (response: { success: boolean }) => {
          if (response.success) {
            this.selectedProductIds.delete(id);
            this.loadWarehouses();
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