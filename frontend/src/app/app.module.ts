import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/common/navbar/navbar.component';
import {CategoryBarComponent} from './components/common/category-bar/category-bar.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AgmCoreModule} from "@agm/core";
import {MapComponent} from './components/maps/map/map.component';
import {CampComponent} from './components/camping/camp/camp.component';
// import * as dotenv from 'dotenv';
// dotenv.config();

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryBarComponent,
    MapComponent,
    CampComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8Co765BFMKjzCBHInzOz-cOuKdBTJOdA',
      libraries: ['visualization']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
