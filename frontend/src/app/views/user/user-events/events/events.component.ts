import { Component, OnInit } from '@angular/core';
import {Event} from "../../../../models/events/events";
import {EventsService} from "../../../../services/events/events.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public eventList: Event[]

  constructor(private eventsService: EventsService, private router: Router) {
    this.eventsService.listEvents().subscribe((response: Event[])=> {
      this.eventList = response
    })
  }
  ngOnInit(): void {
  }


  getEventDetails(_id: String) {
    console.log(_id)
    this.router.navigate(['events/details', _id])
  }

}
