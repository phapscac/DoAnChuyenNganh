import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

interface User {
  username: string;
  password: string;
  email: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-registerr',
  templateUrl: './registerr.component.html',
  styleUrls: ['./registerr.component.css']
})
export class RegisterrComponent implements OnInit {

  constructor(private apiService: ApiService) {}

  ngOnInit() {}

  user: User = {
    username: '',
    password: '',
    email: '',
    confirmPassword: ''
  };

  Message: string = '';
  successMessage: boolean = false;
  errorMessage: boolean = false;

  dangky() {
  
    if (this.user.password !== this.user.confirmPassword) {
      this.Message = 'Mật khẩu không trùng khớp';
      this.successMessage = false;
      this.errorMessage = true;
      return;
    }

    const body = {
      username: this.user.username,
      email: this.user.email,
      password: this.user.password,
      confirmPassword: this.user.confirmPassword
    };

    // Call API to register
    this.apiService.postData('api/Account/register', body).subscribe(
      data => {
        if (data.success) {
          this.Message = 'Đăng ký thành công';
          this.successMessage = true;
          this.errorMessage = false;
        } else {
          this.Message = data.message || 'Đăng ký thất bại';
          this.successMessage = false;
          this.errorMessage = true;
        }
      },
      error => {
        // Handle errors returned from the API
        if (error.status === 400) {
          // If username already exists
          if (error.error.errors?.Username) {
            this.Message = error.error.errors.Username.join(', ');  // Show username error
            this.successMessage = false;
            this.errorMessage = true;
          }
          // Handle other validation errors from ModelState
          else if (error.error.errors) {
            let validationErrors = [];
            for (const key in error.error.errors) {
              if (error.error.errors[key]) {
                validationErrors.push(...error.error.errors[key]);
              }
            }
            this.Message = validationErrors.join(', ') || 'Đã xảy ra lỗi trong quá trình đăng ký';
            this.successMessage = false;
            this.errorMessage = true;
          } else {
            this.Message = error.error.message || 'Đã xảy ra lỗi trong quá trình đăng ký';
            this.successMessage = false;
            this.errorMessage = true;
          }
        } else {
          // General error handling
          this.Message = 'Đã xảy ra lỗi trong quá trình đăng ký';
          this.successMessage = false;
          this.errorMessage = true;
        }
        console.error('Lỗi chi tiết:', error);
      }
    );
  }
}
