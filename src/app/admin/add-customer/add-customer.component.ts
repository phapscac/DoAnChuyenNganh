import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

interface Address {
  addressId: string;
  street: string;
  ward: string;
  district: string;
  city: string;
}

interface Customer {
  customerId: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  gender: string;
  memberSince: string;
  cusTypeId: string;
  companyName: string;
  positionInCompany: string;
  taxCode: string;
  faxNumber: string;
  address: Address;
}

interface CustomerType {
  cusTypeId: string;
  cusTypeName: string;
}

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer: Customer = {
    customerId: '',
    fullName: '',
    phoneNumber: '',
    email: '',
    gender: '',
    memberSince: '',
    cusTypeId: '',
    companyName: '',
    positionInCompany: '',
    taxCode: '',
    faxNumber: '',
    address: {
      addressId: '',
      street: '',
      ward: '',
      district: '',
      city: ''
    }
  };

  customerTypes: CustomerType[] = [];
  showAlert = false;
  alertMessage = '';
  alertClass = '';

  constructor(
    private apiService: ApiService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getCustomerTypes();
  }

  getCustomerTypes(): void {
    this.apiService.getDataa('api/Customers/types').subscribe({
      next: (response) => {
        if (response.success) {
          this.customerTypes = response.data;
        } else {
          this.showAlertMessage('Lỗi khi lấy danh sách loại khách hàng', 'alert-danger');
        }
      },
      error: (error) => {
        this.showAlertMessage('Lỗi kết nối tới server', 'alert-danger');
      }
    });
  }


  addCustomer(): void {
    if (!this.validateCustomer()) {
      return;
    }
  
    const customerPayload = {
      fullName: this.customer.fullName,
      phoneNumber: this.customer.phoneNumber,
      email: this.customer.email,
      gender: this.customer.gender,
      cusTypeId: this.customer.cusTypeId,
      companyName: this.customer.companyName,
      positionInCompany: this.customer.positionInCompany,
      taxCode: this.customer.taxCode,
      faxNumber: this.customer.faxNumber,
      street: this.customer.address.street,
      ward: this.customer.address.ward,
      district: this.customer.address.district,
      city: this.customer.address.city
    };

    console.log('Payload gửi lên:', customerPayload);

    this.apiService.postData('api/Customers', customerPayload).subscribe({
      next: (response: { success: boolean }) => {
        if (response.success) {
          this.showAlertMessage('Thêm khách hàng thành công', 'alert-success');
          this.router.navigate(['/admin/customer-list']);
        } else {
          this.showAlertMessage('Thêm khách hàng thất bại', 'alert-danger');
        }
      },
      error: (error: any) => {
        console.error('Lỗi từ backend:', error);
        this.showAlertMessage('Lỗi khi thêm khách hàng', 'alert-danger');
      }
    });
  }
  

  validateCustomer(): boolean {
    const { fullName, phoneNumber, email, address } = this.customer;

    if (!fullName || !phoneNumber || !email || !address.street || !address.ward || !address.district || !address.city) {
      this.showAlertMessage('Vui lòng nhập đầy đủ thông tin', 'alert-warning');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.showAlertMessage('Email không hợp lệ', 'alert-warning');
      return false;
    }

    const phoneRegex = /^\d{10,11}$/;
    if (!phoneRegex.test(phoneNumber)) {
      this.showAlertMessage('Số điện thoại không hợp lệ', 'alert-warning');
      return false;
    }

    return true;
  }

  showAlertMessage(message: string, alertClass: string): void {
    this.alertMessage = message;
    this.alertClass = alertClass;
    this.showAlert = true;
    setTimeout(() => this.showAlert = false, 5000); // Ẩn alert sau 5 giây
  }
}
