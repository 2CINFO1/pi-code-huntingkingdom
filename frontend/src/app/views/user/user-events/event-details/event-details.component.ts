import { Component, OnInit } from '@angular/core';
import {Event as Evenement} from "../../../../models/events/events" ;
import {EventsService} from "../../../../services/events/events.service";
import {ActivatedRoute, Params, Router, Event} from "@angular/router";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event_id: string;
  evenement: Evenement;
  file: File;

  loading: boolean = false;
  constructor(private route: ActivatedRoute, private eventsService: EventsService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.event_id = params['id']);
    this.eventsService.getEvent(this.event_id).subscribe((response) => {
      this.evenement = response;
    })

    console.log(this.evenement)
  }

  gereInteresses() {
    this.eventsService.addInteressted(this.evenement).subscribe(() => {
      location.reload();
    })
  }

  gereParticipant() {
    this.eventsService.addParticipant(this.evenement).subscribe(() => {
      location.reload();
    })
  }

    // On file Select
    onChange(event: any) {
      this.file = event.target.files[0];
  }

   // OnClick of button Upload
   onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    console.log('fichieeeeeeeeeer'+this.event_id);
    this.eventsService.uploadImage(this.file,this.event_id);
}


updateCurrentEvent(_id: String) {
  console.log(_id)
  this.router.navigate(['events/update', _id])
}

/*
  onFileSelected(files :File ) {


    if (file) {

        const upload$ = this.eventsService.uploadImage(files[0],this.event_id);

        upload$.subscribe();
    }
}
*/

}
