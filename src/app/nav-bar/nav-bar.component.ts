import { Component, HostListener, ElementRef } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  imports: [RouterLink, RouterLinkActive]
})
export class NavbarComponent {

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = this.el.nativeElement.querySelector('.navbar-custom');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  }

  closeMenu() {
    const navCollapse = this.el.nativeElement.querySelector('.navbar-collapse');
    if (navCollapse && navCollapse.classList.contains('show')) {
      const bsCollapse = new (window as any).bootstrap.Collapse(navCollapse, { toggle: false });
      bsCollapse.hide();
    }
  }
}
