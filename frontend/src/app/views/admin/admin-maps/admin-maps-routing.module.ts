import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampComponent } from './camp/camp.component';
import { MapsComponent } from './maps/maps.component';

const routes: Routes = [
  {path: '', component: MapsComponent},
  {path: 'camp', component: CampComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminMapsRoutingModule { }
