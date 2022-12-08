import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaymentComponent} from "./payment/payment.component";
import {CryptoComponent} from "./crypto/crypto.component";
import {ProductsComponent} from "./products/products.component";
import {DesertComponent} from "./products/desert/desert.component";
import {ForestComponent} from "./products/forest/forest.component";
import {FishingComponent} from "./products/fishing/fishing.component";
import {BirdsComponent} from "./products/birds/birds.component";


const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'crypto', component: CryptoComponent},
  {path: 'fishing', component: FishingComponent},
  {path: 'hunting', component: ForestComponent},
  {path: 'hiking', component: DesertComponent},
  {path: 'camping', component: BirdsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProductsRoutingModule { }
