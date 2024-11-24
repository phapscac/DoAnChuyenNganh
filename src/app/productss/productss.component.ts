import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productss',
  templateUrl: './productss.component.html',
  styleUrl: './productss.component.css'
})
export class ProductssComponent implements OnInit {
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
  ]

}
