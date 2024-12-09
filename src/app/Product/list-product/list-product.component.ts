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
    {id: 1, name: 'Lắp đặt tủ điện', image: 'https://i.imgur.com/OorI6da.jpeg'},
    {id: 2, name: 'Lắp đặt cầu trục', image: 'https://www.cokhicongnghiep.com/assets/upload/cokhicongnghiep.com/res/user-store/20028_thiet-bi/15284087-371735519884884-116142256476214452-n.jpg'},
    {id: 3, name: 'Lắp đặt biến tần cho máy nén', image: 'https://i.imgur.com/RO6P98Z.jpeg'},
    {id: 4, name: 'Lắp đặt tủ biến tần và máy biến cao áp ', image: 'https://i.imgur.com/2mXrlav.jpeg'},
    {id: 5, name: 'Lắp đặt tủ điện cho hệ thống xếp thùng phi tại nhà máy dầu nhớt BP', image: 'https://i.imgur.com/semQFZ8.jpeg'},
    {id: 6, name: 'Sửa chữa palang cho công trình điện gió', image: 'https://suadiencongnghiep.vn/upload/filemanager/files/sua-dien-tu-bu-cong-suat-phan-khang-kcn-tan-do.jpg'},
    {id: 7, name: 'Sửa chữa biến tần công suất nhỏ và lớn', image: 'https://i.imgur.com/DCcatDm.jpeg'},
    {id: 8, name: 'Lắp tủ điện điều khiển biến tần cho máy ép nhiệt ', image: 'https://i.imgur.com/7jb5Oej.jpeg'}

  ]
}
