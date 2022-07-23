import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventsComponent} from "./events/events.component";
import {AddEventComponent} from "./add-event/add-event.component";

const routes: Routes = [
  {path: '', component: EventsComponent},
  {path: 'event/add', component: AddEventComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserEventsRoutingModule { }
