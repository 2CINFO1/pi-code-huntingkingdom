import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminStoreRoutingModule } from './admin-store-routing.module';
import { StoreComponent } from './store/store.component';


@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    CommonModule,
    AdminStoreRoutingModule
  ]
})
export class AdminStoreModule { }
