import { Component, OnDestroy, OnInit } from '@angular/core';
import { Toaster } from './core/services/toaster.service';
import { Subject, takeUntil } from 'rxjs';
import { LanguageService } from './core/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'cluster2airports';
  language = 'AR';

  private destroy$ = new Subject<void>();
  constructor(
    private toaster: Toaster,
    private languageService: LanguageService,
  ) {}

  ngOnInit(): void {
    this.language = this.languageService.getLanguage();
    this.languageService.language$
      .pipe(takeUntil(this.destroy$))
      .subscribe((newLanguage) => {
        this.language = newLanguage;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
