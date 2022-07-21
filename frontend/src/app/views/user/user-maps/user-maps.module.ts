import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMapsRoutingModule } from './user-maps-routing.module';
import { MapsComponent } from './maps/maps.component';
import { CampComponent } from './camp/camp.component';
import {FormsModule} from "@angular/forms";
import {AgmCoreModule} from "@agm/core";


@NgModule({
  declarations: [
    MapsComponent,
    CampComponent
  ],
  imports: [
    CommonModule,
    UserMapsRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8Co765BFMKjzCBHInzOz-cOuKdBTJOdA',
      libraries: ['visualization']
    }),
    FormsModule
  ]
})
export class UserMapsModule { }
