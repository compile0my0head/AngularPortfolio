import { Component, AfterViewInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {
  contactMethods = [
    { icon: 'fas fa-envelope', title: 'Email', value: 'mahmoud.talaat605@gmail.com', link: 'mailto:mahmoud.talaat605@gmail.com' },
    { icon: 'fas fa-phone', title: 'Phone', value: '+20 115 674 1997', link: 'tel:+201156741997' },
    { icon: 'fab fa-linkedin', title: 'LinkedIn', value: 'Mahmoud Talaat', link: 'https://www.linkedin.com/in/mahmoud-talaat605' },
    { icon: 'fab fa-github', title: 'GitHub', value: 'Mahmoud Talaat', link: 'https://github.com/compile0my0head' }
  ];

  ngAfterViewInit(): void {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }

  onSubmit() {
    alert('Thank you for reaching out! Your message has been sent successfully.');
  }
}
