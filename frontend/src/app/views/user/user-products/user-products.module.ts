import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProductsRoutingModule } from './user-products-routing.module';
import { ProductsComponent } from './products/products.component';
import { PaymentComponent } from './payment/payment.component';
import { CryptoComponent } from './crypto/crypto.component';
import { FishingComponent } from './products/fishing/fishing.component';
import { DesertComponent } from './products/desert/desert.component';
import { ForestComponent } from './products/forest/forest.component';
import { BirdsComponent } from './products/birds/birds.component';


@NgModule({
  declarations: [
    ProductsComponent,
    PaymentComponent,
    CryptoComponent,
    FishingComponent,
    DesertComponent,
    ForestComponent,
    BirdsComponent
  ],
  imports: [
    CommonModule,
    UserProductsRoutingModule
  ]
})
export class UserProductsModule { }
