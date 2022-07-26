import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { EventUpdateAdminComponent } from './events/event-update-admin/event-update-admin.component';


const routes: Routes = [
  {path: '', component: EventsComponent},
  {path: 'update/:id', component: EventUpdateAdminComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEventsRoutingModule { }
