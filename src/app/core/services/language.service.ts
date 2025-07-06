import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private languageSubject: BehaviorSubject<string>;
  public language$: Observable<string>;

  constructor(private translateService: TranslateService) {
    this.languageSubject = new BehaviorSubject<string>(
      localStorage.getItem('preferredLanguage') || 'AR',
    );
    this.language$ = this.languageSubject.asObservable();
    this.translateService.setDefaultLang(this.languageSubject.value);
    this.translateService.use(this.languageSubject.value);

    window.addEventListener('storage', (event) => {
      if (event.key === 'preferredLanguage') {
        const newLanguage = event.newValue || '';
        this.languageSubject.next(newLanguage);
        this.translateService.use(newLanguage);
      }
    });
  }

  getLanguage(): string {
    return this.languageSubject.value;
  }
  setLanguage(language: string): void {
    localStorage.setItem('preferredLanguage', language);
    this.languageSubject.next(language);
    this.translateService.use(language);
  }
}
