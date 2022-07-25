import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventsComponent} from "./events/events.component";
import {AddEventComponent} from "./add-event/add-event.component";
import {EventDetailsComponent} from "./event-details/event-details.component";
import {EventUpdateComponent} from "./event-update/event-update.component";



const routes: Routes = [
  {path: '', component: EventsComponent},
  {path: 'add', component: AddEventComponent},
  {path: 'details/:id', component: EventDetailsComponent},
  {path: 'update/:id', component: EventUpdateComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserEventsRoutingModule { }
