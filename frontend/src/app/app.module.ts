import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { CategoryBarComponent } from './components/common/category-bar/category-bar.component';
import { BlogListComponent } from './components/blog/blog-list/blog-list.component';
import { BlogAddComponent } from './components/blog/blog-add/blog-add.component';
import { FormsModule } from '@angular/forms';
import { BlogDashboardComponent } from './components/blog/blog-dashboard/blog-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryBarComponent,
    BlogListComponent,
    BlogAddComponent,
    BlogDashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
