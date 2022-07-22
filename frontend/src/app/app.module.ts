import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutsModule} from "./layouts/layouts.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxStripeModule } from 'ngx-stripe'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    LayoutsModule,
    BrowserAnimationsModule,
    NgxStripeModule.forRoot("pk_test_51LH13WHxNBiDGFedFHcp4ft0duF9OxhYSebOiek0gPpepVKKlWGg6W3aJ8H7YeiFzlW0jEPjgo7im0jYmNOfzuOJ00rXouaPKA")
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
