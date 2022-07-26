import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserEventsRoutingModule } from './user-events-routing.module';
import { EventsComponent } from './events/events.component';
import {FormsModule} from "@angular/forms";
import { AddEventComponent } from './add-event/add-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventUpdateComponent } from './event-update/event-update.component';
import { EventCommentsComponent } from './event-comments/event-comments.component';


@NgModule({
  declarations: [
    EventsComponent,
    AddEventComponent,
    EventDetailsComponent,
    EventUpdateComponent,
    EventCommentsComponent
  ],
  imports: [
    CommonModule,
    UserEventsRoutingModule,
    FormsModule
  ]
})
export class UserEventsModule { }
