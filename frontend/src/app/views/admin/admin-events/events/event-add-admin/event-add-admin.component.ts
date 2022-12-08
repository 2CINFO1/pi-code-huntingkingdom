import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events/events.service';
import {Event} from 'src/app/models/events/events';


@Component({
  selector: 'app-event-add-admin',
  templateUrl: './event-add-admin.component.html',
  styleUrls: ['./event-add-admin.component.css']
})
export class EventAddAdminComponent implements OnInit {

  event: Event;
  eventList : Event[];

  constructor(private EventsService: EventsService) { }

  ngOnInit(): void {
    this.event = new Event();
    this.eventList = [];
  }
  save() {
    console.log(this.event);
    this.EventsService.addEvent(this.event);
  }

}
