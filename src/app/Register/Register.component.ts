
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'; 
​
interface User {
  username: string;
  password: string;
}

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private apiService: ApiService) {
   
   }

  ngOnInit( ) {
  }
  user: User = {
    username: '',
    password: ''
  }

  message: string = '';
  isSuccess: boolean = false;
  dangNhap(){
    
   const body ={
    username: this.user.username,
    password: this.user.password
    }
    console.log(body);
    this.apiService.postData('http://localhost:50598/api/Account/login', body).subscribe(
      data => {
        if (data.success) {
          this.message='Đăng nhập thành công';
          this.isSuccess = true;
          localStorage.setItem('accessToken', data.data.token.accessToken);
          console.log(data);
        } else {
          this.message='Đăng nhập thất bại';
          this.isSuccess = false;
        }
      },
      error => {
        console.error('Lỗi đăng nhập:', error); // Hiển thị chi tiết lỗi trong bảng điều khiển
        this.message='Đăng nhập thất bại: Sai thông tin tài khoản hoặc lỗi hệ thống!';
        this.isSuccess = false;
      }
    );
    
}
}
