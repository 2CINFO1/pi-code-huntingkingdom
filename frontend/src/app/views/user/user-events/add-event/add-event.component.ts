import { Component, OnInit } from '@angular/core';
import {EventsService} from "../../../../services/events/events.service";
import {Event} from "../../../../models/events/events";

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

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
