import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpHeaders } from '@angular/common/http';

interface User {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'] // Sửa 'styleUrl' thành 'styleUrls'
})
export class ChangePasswordComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  user: User = {
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  };

  isSuccess: boolean = false;
  message: string = '';
  isChangPasswordFormVisible: boolean = true;

  changePasswordForm(): void {
    // Kiểm tra các điều kiện trước khi gọi API
    if (!this.user.oldPassword || !this.user.newPassword || !this.user.confirmNewPassword) {
      this.message = 'Vui lòng điền đầy đủ thông tin.';
      this.isSuccess = false;
      return;
    }

    if (this.user.newPassword !== this.user.confirmNewPassword) {
      this.message = 'Mật khẩu mới và xác nhận mật khẩu không trùng khớp.';
      this.isSuccess = false;
      return;
    }

    if (this.user.newPassword === this.user.oldPassword) {
      this.message = 'Mật khẩu mới không được giống mật khẩu cũ.';
      this.isSuccess = false;
      return;
    }

    // Chuẩn bị dữ liệu và header
    const body = {
      oldPassword: this.user.oldPassword,
      newPassword: this.user.newPassword,
      confirmPassword: this.user.confirmNewPassword
    };

    const accessToken = localStorage.getItem('accessToken');
console.log('Access Token:', accessToken);


    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    });

    // Gửi API
    this.apiService
      .postData('http://localhost:50598/api/Account/change-password', body, { headers })
      .subscribe(
        (data: any) => {
          if (data.success) {
            this.message = 'Đổi mật khẩu thành công.';
            this.isSuccess = true;
          } else {
            this.message = data.message || 'Đổi mật khẩu thất bại.';
            this.isSuccess = false;
          }
        },
        (error) => {
          console.error('Lỗi đổi mật khẩu:', error);
          this.message = 'Đổi mật khẩu thất bại: Lỗi hệ thống.';
          this.isSuccess = false;
        }
      );
  }
}
