import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product: any;

  ngOnInit(): void {
    this.product = {
      name: 'Sản phẩm A',
      price: 100000,
      description: 'Mô tả chi tiết về sản phẩm A'
    };
  }

}
