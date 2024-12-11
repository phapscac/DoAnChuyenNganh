import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service'; 
import { get } from 'http';
interface Product {
  productId:any,
  productName:any,
  price:any,
  catalogIds : any,
  images: any,
  warranty:any,
  description:any,
  shortDescription:any
}
interface Data{
  Product:any,
  Catalog:any

}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {

  constructor( 
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllProductCatalog();
  }
  product: Product = {
    productId: '',
    productName: '',
    price: 0,
    catalogIds: [],
    images: [],
    warranty: 0,
    description: '',
    shortDescription: ''
  }
  data: Data = {
    Product: [],
    Catalog: []
  }

  getAllProductCatalog(){
    this.apiService.getData('api/catalogs').subscribe({
      next: (reponse) => {
        if (reponse.success) {
           this.data.Catalog = reponse.data;
           console.log(this.data.Catalog);
        } else {

        }
      },
      error: (error) => {

      }
    });
    
  }
  addProduct(){
    const body = {
      productId:this.product.productId,
      productName:this.product.productName,
      price:this.product.price,
      images : this.product.images,
      warranty:this.product.warranty,
      catalogIds: this.product.catalogIds
    }
    this.apiService.postData('api/products/create',body).subscribe({
      next: (reponse) => {
        if (reponse.success) {
           this.data.Catalog = reponse.data;
           console.log(this.data.Catalog);
        } else {

        }
      },
      error: (error) => {

      }
    });
  }
  onFileSelected(event: any): void {
    this.AddimageOnServer(event);
  }
a: any;
AddimageOnServer(event: any): void {
  // Tạo FormData để gửi file
  const formData = new FormData();
  formData.append('file', event.target.files[0]); // Lấy file đầu tiên từ input
  formData.append('upload_preset', 'doanchuyennganh');
  formData.append('public_id', 'J43yVjomFsSgZqoUHrQin8-5XZA'); // Đây là tùy chọn nếu Cloudinary yêu cầu
  formData.append('api_key', '325853812222845'); // API key của bạn

  // Gửi dữ liệu đến API của Cloudinary
  this.apiService.postDataa('https://api.cloudinary.com/v1_1/dqchxdcjs/image/upload', formData).subscribe({
    next: (response) => {
      if (response.url) {
        this.product.images.push(response.url);
      } else {
        console.error('Không nhận được URL ảnh từ Cloudinary');
      }
    },
    error: (error) => {
      console.error('Lỗi khi tải lên Cloudinary:', error);
    }
  });
}

}
