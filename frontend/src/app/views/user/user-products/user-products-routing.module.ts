import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaymentComponent} from "./payment/payment.component";
import {CryptoComponent} from "./crypto/crypto.component";
import {ProductsComponent} from "./products/products.component";

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'cart', component: CryptoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProductsRoutingModule { }
