import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { ProfileComponent } from './components/user/profile/profile.component';

import { NavbarComponent } from './components/common/navbar/navbar.component';
import { CategoryBarComponent } from './components/common/category-bar/category-bar.component';
import { BlogListComponent } from './components/blog/blog-list/blog-list.component';
import { BlogAddComponent } from './components/blog/blog-add/blog-add.component';

import { BlogDashboardComponent } from './components/blog/blog-dashboard/blog-dashboard.component';
// import { ListusersComponent } from './components/user/listusers/listusers.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    // ProfileComponent,
    NavbarComponent,
    CategoryBarComponent,
    BlogListComponent,
    BlogAddComponent,
    BlogDashboardComponent,
    // ListusersComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
