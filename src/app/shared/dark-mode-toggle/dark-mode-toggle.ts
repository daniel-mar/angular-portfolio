import { Component, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-dark-mode-toggle',
  standalone: true,
  templateUrl: './dark-mode-toggle.html',
  styleUrls: ['./dark-mode-toggle.scss']
})
export class DarkModeToggle {

  private platformId = inject(PLATFORM_ID);
  
  isDarkMode = signal<boolean>(true); 

  constructor() {
    // Runs after injecting
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('portfolio-theme');
      
      if (savedTheme) {
        this.isDarkMode.set(savedTheme === 'dark');
      } else {
        this.isDarkMode.set(true); 
      }
      this.applyTheme();
    }
  }

  toggleTheme() {
    this.isDarkMode.update(mode => !mode);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('portfolio-theme', this.isDarkMode() ? 'dark' : 'light');
      this.applyTheme();
    }
  }

  private applyTheme() {
    if (this.isDarkMode()) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}