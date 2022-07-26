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
  popup : boolean = false;
  currentId : String = '';
  currentName : String = '';
  categoryS  : String = '';

  constructor(private eventsService: EventsService, private router: Router) {
    this.eventsService.listEvents().subscribe((response: Event[])=> {
      this.eventList = response
    })
  }

  ngOnInit(): void {
  }


  initId(id:String,name:String)
  {
    this.currentId = id;
    this.currentName = name;

  }
  delete()
  {
    this.eventsService.deleteEvent(this.currentId).subscribe(() => {
      location.reload();
    })
  }
  update() {
    console.log('currentId is '+this.currentId)
    this.router.navigate(['dashboard/events/update', this.currentId])
  }

  add()
  {
    this.router.navigate(['dashboard/events/add'])

  }
}
