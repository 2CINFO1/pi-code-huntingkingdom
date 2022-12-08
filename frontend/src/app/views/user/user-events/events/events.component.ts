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

  public eventList: Event[] = [];
  searchKeyWord : string = '';
  public searchedEventList: Event[]
  baseUrl : string = 'http://localhost:3000/events/getImage/';

  constructor(private eventsService: EventsService, private router: Router) {
    this.eventsService.listEvents().subscribe((response: Event[])=> {
    //  this.eventList = response

    })
  }


  ngOnInit(): void {
    this.getEvents()
    this.eventList.forEach((event) => {
      console.log(event.coverImagePath)
      event.coverImagePath = this.baseUrl + event.coverImagePath;
      console.log(this.baseUrl + event.coverImagePath)
    })
  }


  // get all products
  getEvents() {
    this.eventsService.listEvents().subscribe((response: any) => {
      response.forEach((data : Event) => {
        let event = new Event()
        event = data
        event.coverImagePath = this.baseUrl + data.coverImagePath
        this.eventList.push(event)
      })
    })
  }

  getEventDetails(_id: String) {
    console.log(_id)
    this.router.navigate(['events/details', _id])
  }

  serachListElement()
  {
    this.eventsService.listSearchedEventsByKey(this.searchKeyWord).subscribe((response: Event[])=> {
      this.searchedEventList = response
      this.searchKeyWord = '';
    })
  }
}
