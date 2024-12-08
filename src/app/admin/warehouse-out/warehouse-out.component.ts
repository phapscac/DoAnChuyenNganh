import { Component ,AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service'; // Giả sử bạn có một WarehouseService để gọi API
import { isPlatformBrowser } from '@angular/common'

interface Product {
  productId: string;
  productName: string;
}
interface Warehouse {
  warehouseId: string;
  warehouseName: string;
}
interface Constract{
  constractId: string;
  constractName: string;
}
interface Data {
  Products: Product[];
  Warehouses: Warehouse[];
  Constracts: Constract[];
}


@Component({
  selector: 'app-warehouse-out',
  templateUrl: './warehouse-out.component.html',
  styleUrls: ['./warehouse-out.component.css']
})
export class WarehouseOutComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object,private apiService: ApiService) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const addProductButton = document.getElementById('addProduct');
      if (addProductButton) {
        addProductButton.addEventListener('click', function () {
          const tbody = document.getElementById('productDetails');
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>
              <select class="form-select">
                <option value="">-- Chọn sản phẩm --</option>
                <!-- Thêm các sản phẩm tại đây -->
              </select>
            </td>
            <td><input type="number" class="form-control" min="1" placeholder="Số lượng"></td>
            <td><input type="number" class="form-control" min="0" placeholder="Đơn giá"></td>
            <td class="text-end">0 VND</td>
            <td class="text-center">
              <button class="btn btn-danger btn-sm">Xóa</button>
            </td>
          `;
          tbody?.appendChild(row);
        });
      }
    }
  }
  data: Data = {
    Products: [],
    Warehouses: [],
    Constracts: []

  };
  
  
  getWarehouses() {
    this.apiService.getData('api/Warehouses/all').subscribe({
      next: (response) => {
        if (response.success) {
          this.data.Warehouses = response.data;
        } else {
          console.error('Lỗi khi lấy danh sách kho:', response.message);
        }
      },
      error: (error) => {
        console.error('Lỗi khi lấy danh sách kho:', error);
      }
    });
  }
  getProducts() {
    this.apiService.getData('api/Products').subscribe({
      next: (response) => {
        if (response.success) {
          this.data.Products = response.data;
        } else {
          console.error('Lỗi khi lấy danh sách sản phẩm:', response.message);
        }
      },
      error: (error) => {
        console.error('Lỗi khi lấy danh sách sản phẩm:', error);
      }
    });
  }
  getConstracts() {
    this.apiService.getData('/api/contracts?filterBy=yourFilterValue').subscribe({
      next: (response) => {
        if (response.success) {
          this.data.Constracts = response.data;
        } else {
          console.error('Lỗi khi lấy danh sách hợp đồng:', response.message);
        }
      },
      error: (error) => {
        console.error('Lỗi khi lấy danh sách hợp đồng:', error);
      }
    });
  }
  ngOnInit(): void {
  
    this.getWarehouses();
    this.getProducts();
    this.getConstracts();
  }

}