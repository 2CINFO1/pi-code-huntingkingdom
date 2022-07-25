import { Component, OnInit } from '@angular/core';
import {Event as Evenement} from "../../../../models/events/events" ;
import {EventsService} from "../../../../services/events/events.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.css']
})
export class EventUpdateComponent implements OnInit {

  event_id: string;
  evenement: Evenement;

  constructor(private route: ActivatedRoute, private eventsService: EventsService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.event_id = params['id']);
    this.eventsService.getEvent(this.event_id).subscribe((response) => {
      this.evenement = response;

  })
  console.log(this.evenement)
  }


  update() {
    this.eventsService.updateEvent(this.evenement).subscribe(() => {
      this.router.navigate(['events/details', this.evenement._id])
    })
  }

}
