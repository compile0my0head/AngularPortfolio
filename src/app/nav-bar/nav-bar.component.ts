import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

declare var bootstrap: any; // Declare bootstrap to fix TypeScript error

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  imports: [RouterLink, RouterLinkActive]
})
export class NavbarComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector('.navbar-custom');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  }

  closeOffcanvas() {
    // Find the offcanvas element
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    if (offcanvasElement) {
      // Get the Bootstrap offcanvas instance and hide it
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }
  }
}
