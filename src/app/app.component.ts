import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'doanchuyennganh';
  private sticky: number = 0;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Thiết lập vị trí ban đầu của menu sau khi component đã khởi tạo
    const menu = document.getElementById('menu');
    if (menu) {
      this.sticky = menu.offsetTop;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
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
