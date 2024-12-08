import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service'; // Giả sử bạn có một WarehouseService để gọi API
import { isPlatformBrowser } from '@angular/common';
interface Data {
  WarehouseList: any[];
  Address: Address[];
 }
 interface Warehouse {
  warehouseId: string;
  warehouseName: string;
  address: Address;
 }
 interface Address {
  addressId: string;
  street: string;
  city: string;
  district: string;
  ward: string;
 }
 
 declare var bootstrap: any;
@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.css']
})
export class WarehouseListComponent implements OnInit {


  constructor(private apiService: ApiService,
    private router: Router, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    this.loadWarehouses();
  }
  selectedProductIds: Set<string> = new Set<string>();
  editMode = false;
  data: Data = {
      WarehouseList:[],
      Address:[]
  }
  warehouse: Warehouse = {
    warehouseId: '',
    warehouseName: '',
    address: {
      addressId: '',
      street: '',
      city: '',
      district: '',
      ward: ''
    }
  };
  isModalOpen: boolean = false; 
  openModal() {
    this.isModalOpen = true; // Cập nhật trạng thái modal
  }

  // Hàm đóng modal
  closeModal() {
    this.isModalOpen = false; // Cập nhật trạng thái modal
  }
  loadWarehouses() {
    this.apiService.getData('api/Warehouses/all').subscribe({
      next: (response) => {
        if (response.success) {
          this.data.WarehouseList = response.data;
        } else {
          console.error('Lỗi khi lấy danh sách kho:', response.message);
        }
      },
      error: (error) => {
        console.error('Lỗi khi lấy danh sách kho:', error);
      }
    });
  }
  addWarehouse = (): void => {
    if (!this.warehouse.warehouseId || !this.warehouse.warehouseName || !this.warehouse.address.street || !this.warehouse.address.ward || !this.warehouse.address.district || !this.warehouse.address.city) {
      console.error('Dữ liệu không hợp lệ. Vui lòng nhập đầy đủ thông tin.');
      return;
    }
    const body = {
      warehouseId: this.warehouse.warehouseId,
      warehouseName: this.warehouse.warehouseName,
      street: this.warehouse.address.street,
      ward: this.warehouse.address.ward,
      district: this.warehouse.address.district,
      city: this.warehouse.address.city

      
    };
  
    this.apiService.postData('api/Warehouses/create', body).subscribe({
      next: (response: { success: boolean }) => {
        if (response.success) {
          this.loadWarehouses();
        } else {
          console.error('Thêm danh mục sản phẩm thất bại');
        }
      },
      error: (error: any) => {
        console.error('Lỗi khi thêm danh mục sản phẩm:', error);
      }
    });
  }


  editWarehouse(category: any): void {
    this.warehouse = { ...category };
    this.editMode = true;
    const modalElement = document.getElementById('editModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
  
  updateWarehouse(): void {
    if (!this.warehouse.warehouseId || !this.warehouse.warehouseName || !this.warehouse.address.street || !this.warehouse.address.ward || !this.warehouse.address.district || !this.warehouse.address.city) {
      console.error('Dữ liệu không hợp lệ. Vui lòng nhập đầy đủ thông tin.');
      return;
    }
    const body = {
      warehouseId: this.warehouse.warehouseId,
      warehouseName: this.warehouse.warehouseName,
      street: this.warehouse.address.street,
      ward: this.warehouse.address.ward,
      district: this.warehouse.address.district,
      city: this.warehouse.address.city
    };
    console.log('warehouseId:', this.warehouse.warehouseId);
console.log('warehouseName:', this.warehouse.warehouseName);
console.log('street:', this.warehouse.address.street);
console.log('ward:', this.warehouse.address.ward);
console.log('district:', this.warehouse.address.district);
console.log('city:', this.warehouse.address.city);
    console.log('Payload gửi đi:', body);
    this.apiService.updateData('api/Warehouses/update', body).subscribe({
      next: (response: { success: boolean }) => {
        if (response.success) {
          this.loadWarehouses();
          this.editMode = false;
          const modalElement = document.getElementById('editModal');
          const modal = bootstrap.Modal.getInstance(modalElement);
          modal.hide();  // Ở đây có thể sử dụng hide() nếu cần
        } else {
          console.error('Cập nhật thất bại');
        }
      },
      error: (error: any) => {
        console.error('Lỗi khi cập nhật ', error);
      }
    });
  }
  

  deleteProductCategory = (id: string): void => {
    const apiUrl = `api/Warehouses/${id}`; // Thay đổi URL sử dụng query string
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
      const apiUrl = `api/Warehouses/${id}`; // Thay đổi URL sử dụng query string
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