import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.css'
})
export class ServiceListComponent implements OnInit {
  services: any[] = [];

  constructor(private apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices() {
    this.apiService.getData('api/Services').subscribe(
      data => {
        this.services = data;
      },
      error => {
        console.error('Lỗi khi lấy danh sách dịch vụ:', error);
      }
    );
  }
}