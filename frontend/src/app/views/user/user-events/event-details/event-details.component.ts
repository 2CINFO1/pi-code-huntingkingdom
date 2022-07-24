import { Component, OnInit } from '@angular/core';
import {Event} from "../../../../models/events/events";
import {EventsService} from "../../../../services/events/events.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event_id: string;
  event: Event;


  constructor(private route: ActivatedRoute, private eventsService: EventsService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.event_id = params['id']);
    this.eventsService.getEvent(this.event_id).subscribe((response) => {
      this.event = response;
    })

    console.log(this.event)
  }

  gereInteresses() {
    this.eventsService.addInteressted(this.event).subscribe(() => {
      location.reload();
    })
  }

  gereParticipant() {
    this.eventsService.addParticipant(this.event).subscribe(() => {
      location.reload();
    })
  }



}
