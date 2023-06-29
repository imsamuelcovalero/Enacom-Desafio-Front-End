/* File: src/app/app.component.ts */
import { Component, Inject, OnDestroy } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  darkTheme = false;
  currentPage = '';

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) {
    /* o método 'pipe' permite manipular e processar fluxos de dados de maneira expressiva e compreensível, encadeando operações em um estilo de programação declarativa. */
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.setCurrentPage(event.urlAfterRedirects);
    });
  }

  ngOnDestroy() {
    // Sem código ainda
  }

  ngOnInit() {
    this.setCurrentPage(this.router.url);
    const localTheme = localStorage.getItem('portfolioTheme');
    if (localTheme) {
      this.darkTheme = localTheme === 'dark';
    }
    this.setTheme();
  }

  setCurrentPage(path: string) {
    this.currentPage = path.startsWith('/') ? path.substring(1) : path;
  }

  get showHomeButton(): boolean {
    return this.currentPage !== 'home';
  }

  get showExperiencesButton(): boolean {
    return this.currentPage !== 'experiences';
  }

  get showCoursesButton(): boolean {
    return this.currentPage !== 'courses';
  }

  get showLanguagesButton(): boolean {
    return this.currentPage !== 'languages';
  }

  get showProjectsButton(): boolean {
    return this.currentPage !== 'projects';
  }

  get showContactButton(): boolean {
    return this.currentPage !== 'contact';
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToExperiences() {
    this.router.navigate(['/experiences']);
  }

  goToCourses() {
    this.router.navigate(['/courses']);
  }

  goToLanguages() {
    this.router.navigate(['/languages']);
  }

  goToProjects() {
    this.router.navigate(['/projects']);
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    localStorage.setItem('portfolioTheme', this.darkTheme ? 'dark' : 'light');
    setTimeout(() => {
      this.setTheme();
    }, 0);
  }

  setTheme() {
    const body = this.document.body;
    if (this.darkTheme) {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    }
  }
}
