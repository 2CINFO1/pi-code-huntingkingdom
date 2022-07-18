import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';

const appRoutes: Routes = [
{
  path: 'blog',
  component: BlogComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
