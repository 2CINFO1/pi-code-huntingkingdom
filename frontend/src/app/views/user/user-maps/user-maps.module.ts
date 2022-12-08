import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMapsRoutingModule } from './user-maps-routing.module';
import { MapsComponent } from './maps/maps.component';
import {FormsModule} from "@angular/forms";
import {AgmCoreModule} from "@agm/core";
import { CampAddComponent } from './camp-add/camp-add.component';
import { HuntComponent } from './hunt-add/hunt.component';
import { CampDetailsComponent } from './camp-details/camp-details.component';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations: [
    MapsComponent,
    CampAddComponent,
    HuntComponent,
    CampDetailsComponent
  ],
  imports: [
    CommonModule,
    UserMapsRoutingModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg',
      libraries: ['visualization']
    }),
    FormsModule
  ]
})
export class UserMapsModule { }
