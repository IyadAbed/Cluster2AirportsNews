import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkModeSubject = new BehaviorSubject<boolean>(
    this.getInitialTheme(),
  );
  public isDarkMode$ = this.isDarkModeSubject.asObservable();

  constructor() {
    this.applyTheme(this.isDarkModeSubject.value);
  }

  toggleTheme(): void {
    const newTheme = !this.isDarkModeSubject.value;
    this.isDarkModeSubject.next(newTheme);
    this.applyTheme(newTheme);
    this.saveThemePreference(newTheme);
  }

  setTheme(isDarkMode: boolean): void {
    this.isDarkModeSubject.next(isDarkMode);
    this.applyTheme(isDarkMode);
    this.saveThemePreference(isDarkMode);
  }

  getCurrentTheme(): boolean {
    return this.isDarkModeSubject.value;
  }

  private applyTheme(isDarkMode: boolean): void {
    const body = document.body;
    const html = document.documentElement;

    if (isDarkMode) {
      html.classList.add('dark');
      body.classList.add('dark');
    } else {
      html.classList.remove('dark');
      body.classList.remove('dark');
    }
  }

  private saveThemePreference(isDarkMode: boolean): void {
    try {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    } catch (error) {
      console.warn('Failed to save theme preference:', error);
    }
  }

  private getInitialTheme(): boolean {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
    } catch (error) {
      console.warn('Failed to load theme preference:', error);
    }

    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    return false;
  }
}
