import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Event} from "../../models/events/events";

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  url: string = "http://localhost:3000/events"

  constructor(private http: HttpClient) { }

  addEvent(event: Event) {
    return this.http.post(`${this.url}/add`, event).subscribe(data => {
        console.log(data);
      },

      error => {
        console.log('Log the error here: ', error);
      });
  }

  listEvents() {
    console.log(this.http.get<Event[]>(`${this.url}/show`))
    return this.http.get<Event[]>(`${this.url}/show`);
  }

  updateEvent(event: Event) {
    return this.http.put(`${this.url}/update/${event._id}`, event);
  }
  getEvent(id: string) {

    return this.http.get(`${this.url}/showEventById/${id}`)
  }
  deleteEvent(id: string) {
    console.log(this.http.delete(`${this.url}/delete/${id}`))
    return this.http.delete(`${this.url}/delete/${id}`);
  }
}
