import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventsComponent} from "./events/events.component";
import {AddEventComponent} from "./add-event/add-event.component";
import {EventDetailsComponent} from "./event-details/event-details.component";

const routes: Routes = [
  {path: '', component: EventsComponent},
  {path: 'add', component: AddEventComponent},
  {path: 'details/:id', component: EventDetailsComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserEventsRoutingModule { }
