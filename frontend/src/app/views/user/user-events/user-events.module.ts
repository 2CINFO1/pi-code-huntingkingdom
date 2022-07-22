import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserEventsRoutingModule } from './user-events-routing.module';
import { EventsComponent } from './events/events.component';
import {FormsModule} from "@angular/forms";
import { AddEventComponent } from './add-event/add-event.component';


@NgModule({
  declarations: [
    EventsComponent,
    AddEventComponent
  ],
  imports: [
    CommonModule,
    UserEventsRoutingModule,
    FormsModule
  ]
})
export class UserEventsModule { }
