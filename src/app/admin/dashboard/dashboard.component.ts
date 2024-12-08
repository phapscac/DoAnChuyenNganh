// import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
// import { isPlatformBrowser } from '@angular/common';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent  {
//   constructor(@Inject(PLATFORM_ID) private platformId: Object) {}


// }
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';


interface Product {
  productName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

interface ImportData {
  warehouseId: string;
  supplierId: string;
  note: string;
  products: Product[];
}

@Component({
     selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
  })
export class DashboardComponent  implements OnInit {
  importData: ImportData = {
    warehouseId: '',
    supplierId: '',
    note: '',
    products: []
  };
  newProduct: Product = {
    productName: '',
    quantity: 0,
    unitPrice: 0,
    totalPrice: 0
  };
  warehouses: any[] = [];
  suppliers: any[] = [];

  constructor(
    private apiService: ApiService,
  
  ) {}

  ngOnInit(): void {
    this.loadWarehouses();
    this.loadSuppliers();
  }

  loadWarehouses(): void {
    this.apiService.getData('api/Warehouses/all').subscribe({
      next: (response) => {
        if (response.success) {
          this.warehouses = response.data;
        } else {
      
        }
      },
      error: (error) => {
     
      }
    });
  }

  loadSuppliers(): void {
    this.apiService.getData('api/Suppliers').subscribe({
      next: (response) => {
        if (response.success) {
          this.suppliers = response.data;
        } else {
         
        }
      },
      error: (error) => {
      
      }
    });
  }

  addProduct(): void {
    if (!this.newProduct.productName || this.newProduct.quantity <= 0 || this.newProduct.unitPrice <= 0) {
    
      return;
    }
    this.newProduct.totalPrice = this.newProduct.quantity * this.newProduct.unitPrice;
    this.importData.products.push({ ...this.newProduct });
    this.resetNewProduct();
  }

  removeProduct(index: number): void {
    this.importData.products.splice(index, 1);
  }

  resetNewProduct(): void {
    this.newProduct = {
      productName: '',
      quantity: 0,
      unitPrice: 0,
      totalPrice: 0
    };
  }

  createImportSlip(): void {
    if (!this.importData.warehouseId || !this.importData.supplierId) {
     
    }

    const body = {
      warehouseId: this.importData.warehouseId,
      supplierId: this.importData.supplierId,
      note: this.importData.note,
      products: this.importData.products
    };

    console.log('Payload gửi đi:', body); // Log payload trước khi gửi

    this.apiService.postData('api/Warehouses/import/create', body).subscribe({
      next: (response: { success: boolean, message: string }) => {
        if (response.success) {
          
          this.resetForm();
        } else {
          
        }
      },
      error: (error: any) => {
       
      }
    });
  }

  resetForm(): void {
    this.importData = {
      warehouseId: '',
      supplierId: '',
      note: '',
      products: []
    };
  }
}