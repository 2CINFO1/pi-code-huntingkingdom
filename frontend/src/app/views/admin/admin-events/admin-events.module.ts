import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEventsRoutingModule } from './admin-events-routing.module';
import { EventsComponent } from './events/events.component';


@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    CommonModule,
    AdminEventsRoutingModule
  ]
})
export class AdminEventsModule { }
