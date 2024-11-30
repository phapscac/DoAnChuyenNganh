import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';// Giả sử bạn có một PromotionService để gọi API

@Component({
  selector: 'app-add-promotion',
  templateUrl: './add-promotion.component.html',
  styleUrls: ['./add-promotion.component.css']
})
export class AddPromotionComponent {
  promotion = {
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    discount: 0
  };

  constructor(private  apiService: ApiService, private router: Router) { }

  onSubmit() {
    this.apiService.postData('api/Promotion/add', this.promotion).subscribe(
      response => {
        console.log('Khuyến mãi đã được thêm thành công:', response);
        this.router.navigate(['/admin/promotion-list']);
      },
      error => {
        console.error('Lỗi khi thêm khuyến mãi:', error);
      }
    );
  }
}