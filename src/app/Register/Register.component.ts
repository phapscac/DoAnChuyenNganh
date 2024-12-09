import { Router } from '@angular/router';
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

  constructor( 
    private apiService: ApiService,
    private router: Router
  ) { }

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
    this.apiService.postData('api/Account/login', body).subscribe({
      next: (data) => {
        if (data.success) {
          this.message='Đăng nhập thành công';
          this.isSuccess = true;
          localStorage.setItem('accessToken', data.data.token.accessToken);
          localStorage.setItem('role', data.data.role);
          console.log(data);
          if (data.data.role === 'admin') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/home']);
          }
          
        } else {
          this.message='Đăng nhập thất bại';
          this.isSuccess = false;
        }
      },
      error: (error) => {
        this.message = error.error?.message || 'Đăng nhập thất bại';
        this.isSuccess = false;
      }
    });
    
  }
}
