import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MapsComponent} from "./maps/maps.component";
import {CampComponent} from "./camp/camp.component";
import {CampAddComponent} from "./camp-add/camp-add.component";

const routes: Routes = [
  {path: '', component: MapsComponent},
  {path: 'camp', component: CampComponent},
  {path: 'camp/add', component: CampAddComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserMapsRoutingModule { }
