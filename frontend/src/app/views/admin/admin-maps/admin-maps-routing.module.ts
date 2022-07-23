import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampComponent } from './camp/camp.component';
import { MapsComponent } from './maps/maps.component';
import {CampDetailsComponent} from "./camp-details/camp-details.component";
import {HuntComponent} from "./hunt/hunt.component";
import {HuntDetailsComponent} from "./hunt-details/hunt-details.component";

const routes: Routes = [
  {path: '', component: MapsComponent},
  {path: 'camp', component: CampComponent},
  {path: 'camp/details/:id', component: CampDetailsComponent},
  {path: 'hunt', component: HuntComponent},
  {path: 'hunt/details/:id', component: HuntDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminMapsRoutingModule { }
