import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminMapsRoutingModule } from './admin-maps-routing.module';
import { MapsComponent } from './maps/maps.component';
import { CampComponent } from './camp/camp.component';
import {AgmCoreModule} from "@agm/core";
import {FormsModule} from "@angular/forms";
import { CampDetailsComponent } from './camp-details/camp-details.component';


@NgModule({
  declarations: [
    MapsComponent,
    CampComponent,
    CampDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminMapsRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8Co765BFMKjzCBHInzOz-cOuKdBTJOdA',
      libraries: ['visualization']
    }),
  ]
})
export class AdminMapsModule { }
