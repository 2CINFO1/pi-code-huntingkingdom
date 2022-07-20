import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProductsRoutingModule } from './user-products-routing.module';
import { ProductsComponent } from './products/products.component';
import { PaymentComponent } from './payment/payment.component';
import { CryptoComponent } from './crypto/crypto.component';


@NgModule({
  declarations: [
    ProductsComponent,
    PaymentComponent,
    CryptoComponent
  ],
  imports: [
    CommonModule,
    UserProductsRoutingModule
  ]
})
export class UserProductsModule { }
