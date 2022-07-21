import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMapsRoutingModule } from './user-maps-routing.module';
import { MapsComponent } from './maps/maps.component';
import { CampComponent } from './camp/camp.component';
import {FormsModule} from "@angular/forms";
import {AgmCoreModule} from "@agm/core";
import { CampAddComponent } from './camp-add/camp-add.component';


@NgModule({
  declarations: [
    MapsComponent,
    CampComponent,
    CampAddComponent
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
