import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MapsComponent} from "./maps/maps.component";
import {CampAddComponent} from "./camp-add/camp-add.component";
import {HuntComponent} from "./hunt-add/hunt.component";
import {CampDetailsComponent} from "./camp-details/camp-details.component";

const routes: Routes = [
  {path: '', component: MapsComponent},
  {path: 'camp/add', component: CampAddComponent},
  {path: 'camp/details/:id', component: CampDetailsComponent},
  {path: 'hunt/add', component: HuntComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserMapsRoutingModule { }
