import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ApiService } from '../../api.service';
import { Chart } from 'chart.js'; // Import Chart từ chart.js

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements AfterViewInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private apiService: ApiService
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.apiService.getData('report').subscribe({
        next: (data) => {
          this.renderChart(data);
          this.renderTable(data);
        },
        error: (error) => {
          console.error('Lỗi khi lấy dữ liệu báo cáo:', error);
        }
      });
    }
  }

  renderChart(data: any) {
    const canvas = document.getElementById('reportChart') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');
    if (ctx) {
      const chart = new Chart(ctx, {
        type: 'bar', // Loại biểu đồ
        data: {
          labels: data.labels,
          datasets: [{
            label: 'Doanh thu',
            data: data.values,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }

  renderTable(data: any) {
    const tableBody = document.querySelector('#reportTable tbody');
    if (tableBody) {
      data.items.forEach((item: any) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${item.code}</td>
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td>${item.quantity}</td>
          <td>${item.status}</td>
        `;
        tableBody.appendChild(row);
      });
    }
  }
}