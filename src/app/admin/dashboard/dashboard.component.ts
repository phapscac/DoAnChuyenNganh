<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
>>>>>>> parent of 0bd40ba (Merge branch 'oanh')

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
<<<<<<< HEAD
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
=======
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const addProductButton = document.getElementById('addProduct');
      if (addProductButton) {
        addProductButton.addEventListener('click', function () {
          const tbody = document.getElementById('productDetails');
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>
              <select class="form-select">
                <option value="">-- Chọn sản phẩm --</option>
                <!-- Thêm các sản phẩm tại đây -->
              </select>
            </td>
            <td><input type="number" class="form-control" min="1" placeholder="Số lượng"></td>
            <td><input type="number" class="form-control" min="0" placeholder="Đơn giá"></td>
            <td class="text-end">0 VND</td>
            <td class="text-center">
              <button class="btn btn-danger btn-sm">Xóa</button>
            </td>
          `;
          tbody?.appendChild(row);
        });
      }
    }
  }
}
>>>>>>> parent of 0bd40ba (Merge branch 'oanh')
