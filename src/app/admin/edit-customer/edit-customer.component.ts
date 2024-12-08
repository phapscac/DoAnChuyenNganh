import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
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

  customerTypes: any[] = [];
  showAlert: boolean = false;
  alertClass: string = '';
  alertMessage: string = '';

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
  
  ) {}

  ngOnInit(): void {
    this.getCustomer();
    this.getCustomerTypes();
  }

  getCustomer(): void {
    const customerId = this.route.snapshot.paramMap.get('id');
    if (customerId) {
      this.apiService.getData(`api/Customers/by-id?Id=${customerId}`).subscribe({
        next: (response) => {
          if (response.success) {
            this.customer = response.data;
          } else {
            this.showAlertMessage('Lỗi khi lấy thông tin khách hàng', 'alert-danger');
          }
        },
        error: (error) => {
          this.showAlertMessage('Lỗi kết nối tới server', 'alert-danger');
         
        }
      });
    }
  }

  getCustomerTypes(): void {
    this.apiService.getData('api/Customers/types').subscribe({
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
  updateCustomer(): void {
    const { address, ...rest } = this.customer; // Tách address từ customer
    const payload = {
      ...rest,
      street: address.street,
      ward: address.ward,
      district: address.district,
      city: address.city
    };
  
    console.log('Payload gửi đi:', payload); // Log payload sau khi chuẩn bị
    const apiUrl = `api/Customers?id=${this.customer.customerId}`;
    this.apiService.updateData(apiUrl, payload).subscribe({
      next: (response: { success: boolean, message: string }) => {
        console.log('Kết quả API:', response); // Log phản hồi API
        if (response.success) {
          this.showAlertMessage(response.message, 'alert-success');
          this.router.navigate(['/admin/customer-list']);
        } else {
          this.showAlertMessage(response.message, 'alert-danger');
        }
      },
      error: (error) => {
        console.error('Lỗi API:', error); // Log lỗi
        this.showAlertMessage('Lỗi khi cập nhật khách hàng', 'alert-danger');
      }
    });
  }
  
  showAlertMessage(message: string, alertClass: string): void {
    this.alertMessage = message;
    this.alertClass = alertClass;
    this.showAlert = true;
    setTimeout(() => this.showAlert = false, 5000); // Ẩn alert sau 5 giây
  }
}