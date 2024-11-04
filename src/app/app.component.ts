import { Component, HostListener, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'doanchuyennganh';
  private sticky: number = 0;

  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Kiểm tra xem mã có đang chạy trong trình duyệt hay không
    if (isPlatformBrowser(this.platformId)) {
      // Thiết lập vị trí ban đầu của menu sau khi component đã khởi tạo
      const menu = document.getElementById('menu');
      if (menu) {
        this.sticky = menu.offsetTop;
      }
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Kiểm tra xem mã có đang chạy trong trình duyệt hay không
    if (isPlatformBrowser(this.platformId)) {
      const menu = document.getElementById('menu');
      if (menu) {
        if (window.pageYOffset > this.sticky) {
          this.renderer.addClass(menu, 'fixed');
        } else {
          this.renderer.removeClass(menu, 'fixed');
        }
      }
    }
  }
}