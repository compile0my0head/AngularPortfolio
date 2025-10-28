import { Component, HostListener, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [RouterLink]
})
export class AboutComponent implements OnInit, AfterViewInit {

  private divider!: HTMLElement;
  private section!: HTMLElement;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });

    this.section = this.el.nativeElement.querySelector('.about-section');
    this.divider = this.el.nativeElement.querySelector('.divider');
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (!this.section || !this.divider) return;

    const rect = this.section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // how far the user has scrolled into the section (0 → 1)
    const scrollProgress =
      1 - Math.min(Math.max(rect.bottom / (rect.height + windowHeight), 0), 1);

    // scale between 1 (small) and 15 (fully expanded)
    const scaleValue = 1 + scrollProgress * 18;

    // apply the scaling transform
    this.divider.style.transform = `scaleX(${scaleValue})`;
  }
}
