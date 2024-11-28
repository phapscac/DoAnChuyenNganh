
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service'; 
 interface Data {
  ProductList: any;
 }



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  constructor( private apiService: ApiService,
    private router: Router) { }



    
  viewType: string = 'view-list';

  // Dropdown mở hoặc đóng
  isDropdownOpen: boolean = false;

  // Danh sách các tùy chọn dạng xem
  viewOptions = [
    { value: 'view-list', text: 'Danh sách' },
    { value: 'view-grid', text: 'Lưới' }
  ];

  // Hàm bật/tắt dropdown
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Hàm thay đổi kiểu hiển thị
  changeView(view: string) {
    this.viewType = view;
    this.isDropdownOpen = false; // Đóng dropdown sau khi chọn
  }
  


  ngOnInit() {
    this.getAllProduct();
  }
  data: Data = {
    ProductList: []
  }

  getAllProduct(){
    const body ={

    }
    this.apiService.getData('api/products',body).subscribe({
      next: (reponse) => {
        if (reponse.success) {
           this.data.ProductList = reponse.data.items;
        } else {

        }
      },
      error: (error) => {

      }
    });
    
  }

}
