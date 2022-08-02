import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminMapsRoutingModule} from './admin-maps-routing.module';
import {MapsComponent} from './maps/maps.component';
import {CampComponent} from './camp/camp.component';
import {AgmCoreModule} from "@agm/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CampDetailsComponent} from './camp-details/camp-details.component';
import {HuntComponent} from './hunt/hunt.component';
import {HuntDetailsComponent} from './hunt-details/hunt-details.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";


@NgModule({
  declarations: [
    MapsComponent,
    CampComponent,
    CampDetailsComponent,
    HuntComponent,
    HuntDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminMapsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg',
      libraries: ['visualization']
    }),
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class AdminMapsModule {
}
