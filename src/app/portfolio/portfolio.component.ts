import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  angularProjects = [
    { image: 'assets/angular1.png', title: 'Angular Dashboard', description: 'An interactive dashboard built with Angular and TypeScript.' },
    { image: 'assets/angular2.png', title: 'Task Manager', description: 'A task management app with routing and reactive forms.' },
    { image: 'assets/angular3.png', title: 'Portfolio Site', description: 'Personal portfolio built using Angular standalone components.' },
    { image: 'assets/angular4.png', title: 'E-Commerce UI', description: 'Angular-based storefront with lazy loading and API integration.' },
    { image: 'assets/angular5.png', title: 'Blog Platform', description: 'Responsive Angular blog app using Firebase backend.' },
    { image: 'assets/angular6.png', title: 'Weather App', description: 'Weather forecast app using Angular HttpClient and OpenWeather API.' },
    { image: 'assets/angular7.png', title: 'Chat App', description: 'Real-time chat using WebSocket with Angular SignalR.' },
    { image: 'assets/angular8.png', title: 'Learning Platform', description: 'E-learning platform with authentication and routing guards.' },
    { image: 'assets/angular9.png', title: 'Project Tracker', description: 'Kanban-style project tracker using Angular Material.' },
    { image: 'assets/angular3.png', title: 'Portfolio Site', description: 'Personal portfolio built using Angular standalone components.' },
    { image: 'assets/angular6.png', title: 'Weather App', description: 'Weather forecast app using Angular HttpClient and OpenWeather API.' },
  ];

  mvcProjects = [
    { image: 'assets/mvc1.png', title: 'Student Management System', description: 'ASP.NET MVC app managing students and courses using EF Core.' },
    { image: 'assets/mvc2.png', title: 'Shop Admin Panel', description: 'Admin dashboard for product management built in MVC.' },
    { image: 'assets/mvc3.png', title: 'Blog CMS', description: 'Content management system built with ASP.NET MVC and Identity.' },
    { image: 'assets/mvc4.png', title: 'Real Estate Portal', description: 'Property listing web app with advanced filtering and search.' },
    { image: 'assets/mvc5.png', title: 'Hospital System', description: 'Patient and appointment management using EF and LINQ.' },
    { image: 'assets/mvc6.png', title: 'Portfolio Showcase', description: 'Dynamic MVC portfolio integrating C# models and SQL Server.' },
    { image: 'assets/mvc7.png', title: 'Online Course System', description: 'Course enrollment and grading portal with Razor views.' },
    { image: 'assets/mvc8.png', title: 'Library System', description: 'Full-stack CRUD library app with MVC pattern.' },
    { image: 'assets/mvc9.png', title: 'Billing App', description: 'Invoice management MVC app connected to SQL database.' },
    { image: 'assets/mvc2.png', title: 'Hospital System', description: 'Patient and appointment management using EF and LINQ.' },

  ];

  selectedProject: any = null;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => AOS.init({ duration: 1000, once: true }), 0);
    }
  }

  openPopup(project: any) {
    this.selectedProject = project;
  }

  closePopup() {
    this.selectedProject = null;
  }
}
