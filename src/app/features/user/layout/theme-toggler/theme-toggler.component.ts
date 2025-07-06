import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from '../../../../core/services/theme.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-theme-toggler',
  standalone: false,
  templateUrl: './theme-toggler.component.html',
  styleUrl: './theme-toggler.component.scss',
})
export class ThemeTogglerComponent implements OnInit, OnDestroy {
  isDark = false;
  private destroy$ = new Subject<void>();

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.isDarkMode$
      .pipe(takeUntil(this.destroy$))
      .subscribe((isDarkMode) => {
        this.isDark = isDarkMode;
      });
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
