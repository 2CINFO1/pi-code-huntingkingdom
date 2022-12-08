import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminStoreRoutingModule } from './admin-store-routing.module';
import { StoreComponent } from './store/store.component';
import { ProductaddComponent } from './store/productadd/productadd/productadd.component';


@NgModule({
  declarations: [
    StoreComponent,
    ProductaddComponent
  ],
  imports: [
    CommonModule,
    AdminStoreRoutingModule
  ]
})
export class AdminStoreModule { }
