import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderButtonsComponent } from './header/header-buttons/header-buttons.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './home/hero/hero.component';
import { HomeComponent } from './home/home.component';
import { MessageBannerComponent } from './home/message-banner/message-banner.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { InDevelopmentComponent } from './in-development/in-development.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HeaderButtonsComponent,
    HomeComponent,
    HeroComponent,
    InDevelopmentComponent,
    MessageBannerComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SharedModule,
    FooterComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
