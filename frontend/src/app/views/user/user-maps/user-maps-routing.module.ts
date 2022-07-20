import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MapsComponent} from "./maps/maps.component";
import {CampComponent} from "./camp/camp.component";

const routes: Routes = [
  {path: '', component: MapsComponent},
  {path: 'camp', component: CampComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserMapsRoutingModule { }
