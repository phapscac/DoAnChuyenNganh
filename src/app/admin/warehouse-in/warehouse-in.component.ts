import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { isPlatformBrowser } from '@angular/common';

interface Supplier {
  supplierId: string;
  supplierName: string;
}

interface Product {
  productId: string;
  productName: string;
}

interface Warehouse {
  warehouseId: string;
  warehouseName: string;
}

interface Data {
  Suppliers: Supplier[];
  Products: Product[];
  Warehouses: Warehouse[];
}

@Component({
  selector: 'app-warehouse-in',
  templateUrl: './warehouse-in.component.html',
  styleUrls: ['./warehouse-in.component.css']
})
export class WarehouseInComponent implements AfterViewInit {
  data: Data = {
    Suppliers: [],
    Products: [],
    Warehouses: []
  };
  
  selectedSupplier: string = '';
  selectedWarehouse: string = '';
  selectedProducts: { productId: string; quantity: number; price: number }[] = [];
  productId: string = ''; // Thêm thuộc tính này
  entryDate: string = ''; // Thêm thuộc tính này
  note: string = ''; // Thêm thuộc tính này
  total: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private apiService: ApiService, private router: Router) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const addProductButton = document.getElementById('addProduct');
      if (addProductButton) {
        addProductButton.addEventListener('click', () => {
          this.addProduct();
        });
      }
    }
  }

  addProduct() {
   
    // Logic để thêm sản phẩm
  }

  removeProduct(index: number) {
    this.selectedProducts.splice(index, 1);
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.selectedProducts.reduce((total, product) => {
      return total + product.quantity * product.price;
    }, 0);
  }

  save() {
    console.log('Selected Supplier:', this.selectedSupplier);
    console.log('Selected Warehouse:', this.selectedWarehouse);
    console.log('Selected Products:', this.selectedProducts);
    console.log('Total:', this.total);
    console.log('Entry Date:', this.entryDate);
    console.log('Note:', this.note);
  }

  cancel() {
    // Logic để hủy bỏ
    this.productId = '';
    this.entryDate = '';
    this.note = '';
    this.selectedProducts = [];
    this.total = 0;
  }

  getSuppliers() {
    this.apiService.getData('api/Suppliers').subscribe({
      next: (response) => {
        if (response.success) {
          this.data.Suppliers = response.data;
        } else {
          console.error('Lỗi khi lấy danh sách nhà cung cấp:', response.message);
        }
      },
      error: (error) => {
        console.error('Lỗi khi lấy danh sách nhà cung cấp:', error);
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

  getWarehouses() {
    this.apiService.getData('api/Warehouses/all').subscribe({
      next: (response) => {
        if (response.success) {
          this.data.Warehouses = response.data;
        } else {
          console.error('Lỗi khi lấy danh sách kho hàng:', response.message);
        }
      },
      error: (error) => {
        console.error('Lỗi khi lấy danh sách kho hàng:', error);
      }
    });
  }

  ngOnInit(): void {
    this.getSuppliers();
    this.getProducts();
    this.getWarehouses();
  }
}