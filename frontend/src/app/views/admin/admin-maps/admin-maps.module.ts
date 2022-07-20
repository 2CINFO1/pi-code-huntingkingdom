import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminMapsRoutingModule } from './admin-maps-routing.module';
import { MapsComponent } from './maps/maps.component';
import { CampComponent } from './camp/camp.component';


@NgModule({
  declarations: [
    MapsComponent,
    CampComponent
  ],
  imports: [
    CommonModule,
    AdminMapsRoutingModule
  ]
})
export class AdminMapsModule { }
