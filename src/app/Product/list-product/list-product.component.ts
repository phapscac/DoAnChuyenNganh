import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  products = [
    { id: 1, name: 'Product 1', image: 'https://suadiencongnghiep.vn/watermark/product/540x540x2/upload/product/aptomat-khoi-160a-mccb-nxm-2142.jpg' },
    { id: 2, name: 'Product 2', image: 'https://suadiencongnghiep.vn/watermark/product/540x540x2/upload/product/aptomat-khoi-160a-mccb-nxm-2142.jpg' },
    { id: 3, name: 'Product 3', image: 'https://suadiencongnghiep.vn/watermark/product/540x540x2/upload/product/aptomat-khoi-160a-mccb-nxm-2142.jpg' },
    {id: 4, name: 'Product 4', image: 'https://suadiencongnghiep.vn/watermark/product/540x540x2/upload/product/aptomat-khoi-160a-mccb-nxm-2142.jpg'},
    {id: 5, name: 'Product 5', image: 'https://suadiencongnghiep.vn/watermark/product/540x540x2/upload/product/aptomat-khoi-160a-mccb-nxm-2142.jpg'},
    {id: 6, name: 'Product 6', image: 'https://suadiencongnghiep.vn/watermark/product/540x540x2/upload/product/aptomat-khoi-160a-mccb-nxm-2142.jpg'},
    {id: 7, name: 'Product 7', image: 'https://suadiencongnghiep.vn/watermark/product/540x540x2/upload/product/aptomat-khoi-160a-mccb-nxm-2142.jpg'},
    {id: 8, name: 'Product 8', image: 'https://suadiencongnghiep.vn/watermark/product/540x540x2/upload/product/aptomat-khoi-160a-mccb-nxm-2142.jpg'},
  ];
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
