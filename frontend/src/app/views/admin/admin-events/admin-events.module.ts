import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEventsRoutingModule } from './admin-events-routing.module';
import { EventsComponent } from './events/events.component';
import { AngularMaterialModule } from './../../../angular-material/angular-material.module';
import { AppComponent } from 'src/app/app.component';
import { EventsDisplayComponent } from './events-display/events-display.component';
import { DashboardEventComponent } from './events/dashboard-event/dashboard-event.component';
import { EventUpdateAdminComponent } from './events/event-update-admin/event-update-admin.component';
import { EventUpdateComponent } from '../../user/user-events/event-update/event-update.component';
import {FormsModule} from "@angular/forms";
import { EventAddAdminComponent } from './events/event-add-admin/event-add-admin.component';

@NgModule({
  declarations: [
    EventsComponent,
    EventsDisplayComponent,
    DashboardEventComponent,
    EventUpdateAdminComponent,
    EventAddAdminComponent  ],
  imports: [
    CommonModule,
    AdminEventsRoutingModule,
    AngularMaterialModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AdminEventsModule { }
