import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from '../../../../core/services/language.service';
import { ThemeService } from '../../../../core/services/theme.service';

@Component({
  selector: 'app-lang-toggler',
  templateUrl: './lang-toggler.component.html',
  styleUrl: './lang-toggler.component.scss',
  standalone: false,
})
export class LangTogglerComponent implements OnInit, OnDestroy {
  language = 'EN';
  isDark = false;
  private destroy$ = new Subject<void>();
  constructor(
    private languageService: LanguageService,
    private themeService: ThemeService,
  ) {}
  ngOnInit(): void {
    // translation
    this.language = this.languageService.getLanguage();
    this.languageService.language$
      .pipe(takeUntil(this.destroy$))
      .subscribe((newLanguage) => {
        this.language = newLanguage;
      });

    this.themeService.isDarkMode$
      .pipe(takeUntil(this.destroy$))
      .subscribe((isDarkMode) => {
        this.isDark = isDarkMode;
      });
  }
  toggleLanguage(): void {
    const currentLang = this.languageService.getLanguage();
    const newLang = currentLang === 'EN' ? 'AR' : 'EN';
    this.language = newLang;
    this.languageService.setLanguage(newLang);
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
