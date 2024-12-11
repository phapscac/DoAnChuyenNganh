import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service'; 

 interface Data {
  ProductList: any;
 }

@Component({
  selector: 'app-productss',
  templateUrl: './productss.component.html',
  styleUrl: './productss.component.css'
})
export class ProductssComponent implements OnInit {
    constructor( private apiService: ApiService,
      private router: Router) { }
  

  ngOnInit() {
    this.getAllProduct();
  }

  getAllProduct(){
    this.apiService.getData('api/products').subscribe({
      next: (reponse) => {
        if (reponse.success) {
           this.data.ProductList = reponse.data.items;
           console.log(this.data.ProductList);
        } else {

        }
      },
      error: (error) => {

      }
    });
    
  }
  data: Data = {
    ProductList: []
  }

}
