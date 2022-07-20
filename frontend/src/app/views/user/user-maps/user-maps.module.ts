import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMapsRoutingModule } from './user-maps-routing.module';
import { MapsComponent } from './maps/maps.component';
import { CampComponent } from './camp/camp.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MapsComponent,
    CampComponent
  ],
  imports: [
    CommonModule,
    UserMapsRoutingModule,
    FormsModule
  ]
})
export class UserMapsModule { }
