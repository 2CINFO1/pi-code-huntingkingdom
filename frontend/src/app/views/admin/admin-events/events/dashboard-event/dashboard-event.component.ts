import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { EventsService } from 'src/app/services/events/events.service';
import {Event} from 'src/app/models/events/events';

@Component({
  selector: 'app-dashboard-event',
  templateUrl: './dashboard-event.component.html',
  styleUrls: ['./dashboard-event.component.css']
})
export class DashboardEventComponent implements OnInit {


  public eventList: Event[]
  searchKeyWord : string = '';
  public searchedEventList: Event[]

  constructor(private eventsService: EventsService, private router: Router) {
    this.eventsService.listEvents().subscribe((response: Event[])=> {
      this.eventList = response
    })
  }

  ngOnInit(): void {
  }

}
