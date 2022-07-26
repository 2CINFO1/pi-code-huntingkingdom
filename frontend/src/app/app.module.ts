import {CUSTOM_ELEMENTS_SCHEMA,NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutsModule} from "./layouts/layouts.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2OrderPipe } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,

    LayoutsModule,
    ReactiveFormsModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule {}
