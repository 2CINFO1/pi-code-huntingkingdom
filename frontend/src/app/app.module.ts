import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { NewsComponent } from './components/home/news/news.component';
import { FaqComponent } from './components/home/faq/faq.component';
import { PricingComponent } from './components/home/pricing/pricing.component';
import { FeaturesComponent } from './components/home/features/features.component';
import { HeaderComponent } from './components/home/header/header.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NewsComponent,
    FaqComponent,
    PricingComponent,
    FeaturesComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
