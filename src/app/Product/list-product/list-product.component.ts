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
    { id: 1, name: 'Product 1', image: 'path/to/image1.jpg' },
    { id: 2, name: 'Product 2', image: 'path/to/image2.jpg' },
    { id: 3, name: 'Product 3', image: 'path/to/image3.jpg' }
  ];
}
