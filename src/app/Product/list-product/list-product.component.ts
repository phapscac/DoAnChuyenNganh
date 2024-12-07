import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service'; 
 interface Data {
  ProductList: any;
 }


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor( 
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllProduct();
  }
  data: Data = {
    ProductList: []
  }

  getAllProduct(){
     this.apiService.getData('api/products').subscribe({
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
  services = [
    {id: 1, name: 'Dich vu 1', image: 'https://suadiencongnghiep.vn/upload/filemanager/files/sua-dien-tu-bu-cong-suat-phan-khang-kcn-tan-do.jpg'},
    {id: 2, name: 'Dich vu 2', image: 'https://suadiencongnghiep.vn/upload/filemanager/files/sua-dien-tu-bu-cong-suat-phan-khang-kcn-tan-do.jpg'},
    {id: 3, name: 'Dich vu 3', image: 'https://suadiencongnghiep.vn/upload/filemanager/files/sua-dien-tu-bu-cong-suat-phan-khang-kcn-tan-do.jpg'},
    {id: 4, name: 'Dich vu 4', image: 'https://suadiencongnghiep.vn/upload/filemanager/files/sua-dien-tu-bu-cong-suat-phan-khang-kcn-tan-do.jpg'},
    {id: 5, name: 'Dich vu 5', image: 'https://suadiencongnghiep.vn/upload/filemanager/files/sua-dien-tu-bu-cong-suat-phan-khang-kcn-tan-do.jpg'},
    {id: 6, name: 'Dich vu 6', image: 'https://suadiencongnghiep.vn/upload/filemanager/files/sua-dien-tu-bu-cong-suat-phan-khang-kcn-tan-do.jpg'},
    {id: 7, name: 'Dich vu 7', image: 'https://suadiencongnghiep.vn/upload/filemanager/files/sua-dien-tu-bu-cong-suat-phan-khang-kcn-tan-do.jpg'},
    {id: 8, name: 'Dich vu 8', image: 'https://suadiencongnghiep.vn/upload/filemanager/files/sua-dien-tu-bu-cong-suat-phan-khang-kcn-tan-do.jpg'}

  ]
}
