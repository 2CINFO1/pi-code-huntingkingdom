import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MapComponent} from "./components/maps/map/map.component";
import {CampComponent} from "./components/camping/camp/camp.component";

const routes: Routes = [
  {path: "map", component: MapComponent},
  {path: "camp/add", component: CampComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
