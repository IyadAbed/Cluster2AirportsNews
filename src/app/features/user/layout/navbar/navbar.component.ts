import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ThemeService } from '../../../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit, OnDestroy {
  isDark = false;
  private destroy$ = new Subject<void>();
  linksEN: any[] | undefined;
  light_log =
    'https://cdn.prod.website-files.com/6740b990923815a6b00065d5/6740baa3f4245719c711d886_cluster2%20-%20color-01.avif';
  dark_logo =
    'https://cdn.prod.website-files.com/6740b990923815a6b00065d5/67c4bed4ff02e7f9e781c724_Logo.svg';

  constructor(private themeService: ThemeService) {
    this.linksEN = [
      {
        items: [],
      },
    ];
  }

  ngOnInit(): void {
    this.themeService.isDarkMode$
      .pipe(takeUntil(this.destroy$))
      .subscribe((isDarkMode) => {
        this.isDark = isDarkMode;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
