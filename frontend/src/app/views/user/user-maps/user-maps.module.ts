import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMapsRoutingModule } from './user-maps-routing.module';
import { MapsComponent } from './maps/maps.component';
import {FormsModule} from "@angular/forms";
import {AgmCoreModule} from "@agm/core";
import { CampAddComponent } from './camp-add/camp-add.component';
import { HuntComponent } from './hunt-add/hunt.component';


@NgModule({
  declarations: [
    MapsComponent,
    CampAddComponent,
    HuntComponent
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
