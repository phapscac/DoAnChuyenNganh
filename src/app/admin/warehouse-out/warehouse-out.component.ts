import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';// Giả sử bạn có một WarehouseService để gọi API

@Component({
  selector: 'app-warehouse-out',
  templateUrl: './warehouse-out.component.html',
  styleUrls: ['./warehouse-out.component.css']
})
export class WarehouseOutComponent {
  warehouseOut = {
    productName: '',
    quantity: 0
  };

  constructor(private apiService: ApiService,
    private router: Router) { }

  onSubmit() {
    this.apiService.getData('api/Warehouses').subscribe(
      response => {
        console.log('Xuất kho thành công:', response);
        this.router.navigate(['/admin/warehouse-list']);
      },
      error => {
        console.error('Lỗi khi xuất kho:', error);
      }
    );
  }
}