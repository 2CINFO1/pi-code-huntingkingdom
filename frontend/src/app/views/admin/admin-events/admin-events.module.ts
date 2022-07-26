import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEventsRoutingModule } from './admin-events-routing.module';
import { EventsComponent } from './events/events.component';
import { AngularMaterialModule } from './../../../angular-material/angular-material.module';
import { AppComponent } from 'src/app/app.component';
import { EventsDisplayComponent } from './events-display/events-display.component';
import { DashboardEventComponent } from './events/dashboard-event/dashboard-event.component';

@NgModule({
  declarations: [
    EventsComponent,
    EventsDisplayComponent,
    DashboardEventComponent
  ],
  imports: [
    CommonModule,
    AdminEventsRoutingModule,
    AngularMaterialModule
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AdminEventsModule { }
