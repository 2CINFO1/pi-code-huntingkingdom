import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import { EventsService } from 'src/app/services/events/events.service';
import { Event as Evenement } from '../../../../../models/events/events';


@Component({
  selector: 'app-event-update-admin',
  templateUrl: './event-update-admin.component.html',
  styleUrls: ['./event-update-admin.component.css']
})
export class EventUpdateAdminComponent implements OnInit {


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
      this.router.navigate(['dashboard/events'])
    })
  }

}
