import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AgmCoreModule} from "@agm/core";
import {MapComponent} from './components/maps/map/map.component';
import {CampComponent} from './components/maps/camping/camp/camp.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './components/user/profile/profile.component';

import { NavbarComponent } from './components/common/navbar/navbar.component';
import { CategoryBarComponent } from './components/common/category-bar/category-bar.component';
import { BlogListComponent } from './components/blog/blog-list/blog-list.component';
import { BlogAddComponent } from './components/blog/blog-add/blog-add.component';

import { BlogDashboardComponent } from './components/blog/blog-dashboard/blog-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NavbarComponent,
    CategoryBarComponent,
    MapComponent,
    BlogListComponent,
    BlogAddComponent,
    BlogDashboardComponent,
    CampComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'GOOGLE_MAP_API',
      libraries: ['visualization']
    }),
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
export class AppModule {
}
