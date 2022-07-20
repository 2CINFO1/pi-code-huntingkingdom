import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserEventsRoutingModule } from './user-events-routing.module';
import { EventsComponent } from './events/events.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    CommonModule,
    UserEventsRoutingModule,
    FormsModule
  ]
})
export class UserEventsModule { }
