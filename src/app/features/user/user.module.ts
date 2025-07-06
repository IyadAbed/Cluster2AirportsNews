import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LangTogglerComponent } from './layout/lang-toggler/lang-toggler.component';
import { ThemeTogglerComponent } from './layout/theme-toggler/theme-toggler.component';
import { NewsComponent } from './news/news.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroSectionComponent } from './news/hero-section/hero-section.component';
import { NewsSectionComponent } from './news/news-section/news-section.component';
import { NewDetailsComponent } from './new-details/new-details.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    LangTogglerComponent,
    ThemeTogglerComponent,
    NewsComponent,
    HeroSectionComponent,
    NewsSectionComponent,
    NewDetailsComponent,
  ],
  imports: [CommonModule, UserRoutingModule, FormsModule],
})
export class UserModule {}
