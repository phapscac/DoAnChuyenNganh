import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service'; // Giả sử bạn có một WarehouseService để gọi API

@Component({
  selector: 'app-warehouse-in',
  templateUrl: './warehouse-in.component.html',
  styleUrls: ['./warehouse-in.component.css']
})
export class WarehouseInComponent {
  warehouseIn = {
    productName: '',
    quantity: 0
  };

  constructor(private apiService: ApiService,
    private router: Router) { }

  onSubmit() {
    this.apiService.getData('').subscribe(
      response => {
        console.log('Nhập kho thành công:', response);
        this.router.navigate(['/admin/warehouse-list']);
      },
      error => {
        console.error('Lỗi khi nhập kho:', error);
      }
    );
  }
}