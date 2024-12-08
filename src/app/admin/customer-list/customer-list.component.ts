import { Component,OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { isPlatformBrowser } from '@angular/common';
interface Data {
  CustomerList: any[];
  CustomerType:CustomerType[];
}
interface CustomerType {
  cusTypeId: string;
  cusTypeName: string;
}

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit {
  
  constructor(private api: ApiService, private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  currentPage: number = 1;
  totalPages: number = 0;
  showNotification: boolean = false;
  notificationMessage: string = '';
  notificationClass: string = '';
  pageSize: number = 2; // Add pageSize property

  ngOnInit() {
    this.getCustomer(this.currentPage);
    this.checkUserRole();
    this.getcustomerType();
  }
data: Data = {
  CustomerList: [],CustomerType:[]  };

  selectedCustomerIds: Set<string> = new Set<string>();
  isAdmin: boolean = false;
  checkUserRole() {
    const role = localStorage.getItem('role');
    if (role === 'Admin') {
      this.isAdmin = true;
    }
  }
  getCustomer(page: number) {
    console.log(`Fetching customers for page: ${page}`);
    this.api.getData(`api/Customers?page=${page}&pageSize=${this.pageSize}`).subscribe({
        next: (response) => {
            console.log('Response from API:', response); // Ghi lại phản hồi
            if (response.success) {
                if (response.data.items && Array.isArray(response.data.items)) {
                    this.data.CustomerList = response.data.items;
                } else {
                    console.warn('Không có khách hàng nào trong danh sách.');
                    this.data.CustomerList = []; // Đặt danh sách khách hàng thành mảng rỗng nếu không có dữ liệu
                }
                const totalCount = response.data.totalItems || 0;
                this.totalPages = Math.ceil(totalCount / this.pageSize);
                console.log('Total Count:', totalCount);
                console.log('Total Pages:', this.totalPages);
                
            } else {
                console.error('Lỗi khi lấy danh sách khách hàng:', response.message);
            }
        },
        error: (error) => {
            console.error('Lỗi khi lấy danh sách khách hàng:', error);
        }
    });
}
  changePage(page: number | string) {
    console.log('Current Page Before Change:', this.currentPage); // Kiểm tra giá trị trước khi thay đổi
  
    if (page === 'previous' && this.currentPage > 1) {
      this.currentPage--;
    } else if (page === 'next' && this.currentPage < this.totalPages) {
      this.currentPage++;
    } else if (typeof page === 'number') {
      this.currentPage = page;
    }
  
    console.log('Current Page After Change:', this.currentPage); // Kiểm tra giá trị sau khi thay đổi
    this.getCustomer(this.currentPage);
  }
  getcustomerType() {
    this.api.getData('api/Customers/Types').subscribe({
      next: (reponse) => {
        if (reponse.success) {
          this.data.CustomerType = reponse.data;
        } else {
          console.error('Lỗi khi lấy danh sách loại khách hàng:', reponse.message);
        }
      }

    })

  }
  
  getCustomerTypeName(cusTypeId: string): string {
    const customerType = this.data.CustomerType.find(type => type.cusTypeId === cusTypeId);
    return customerType ? customerType.cusTypeName : 'Unknown';
  }
  deleteCustomer(customerId: string): void {
    const apiUrl = `api/Customers?id=${customerId}`; // Sử dụng query string
    console.log('URL gửi yêu cầu:', apiUrl); // Kiểm tra URL gửi đi

    this.api.deleteData(apiUrl).subscribe({
      next: (response: { success: boolean, message: string }) => {
        if (response.success) {
          this.showNotificationMessage(response.message, 'success'); // Hiển thị thông báo thành công
          this.getCustomer(this.currentPage); // Cập nhật danh sách khách hàng sau khi xóa
        } else {
          this.showNotificationMessage(response.message, 'error'); // Hiển thị thông báo thất bại
        }
      },
      error: (error) => {
        this.showNotificationMessage('Lỗi khi xóa khách hàng', 'error'); // Hiển thị thông báo lỗi
      }
    });
  }

  showNotificationMessage(message: string, type: string): void {
    this.notificationMessage = message;
    this.notificationClass = type; // Lấy class tương ứng với kiểu thông báo
    this.showNotification = true;

    // Tự động ẩn thông báo sau 5 giây
    setTimeout(() => {
      this.showNotification = false;
    }, 5000);
  }
  


}
