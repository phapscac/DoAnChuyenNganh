import { Component } from '@angular/core';

@Component({
  selector: 'app-registerr',
  templateUrl: './registerr.component.html',
  styleUrl: './registerr.component.css'
})
export class RegisterrComponent {
  user = {
    username: '',
    email: '',
    password: ''
  };

  onSubmit() {
    console.log('User:', this.user);
    // Thực hiện các hành động đăng ký ở đây, ví dụ: gọi API
  }
}