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

  listSearchedEventsByKey(key: string) {
    console.log(this.http.get<Event[]>(`${this.url}/showEventBykey/${key}`))
    return this.http.get<Event[]>(`${this.url}/showEventBykey/${key}`);
  }


  updateEvent(event: Event) {
    console.log(`${this.url}/update/${event._id}`)
    return this.http.put(`${this.url}/update/${event._id}`, event);
  }

  getEvent(id: string) {
    return this.http.get<Event>(`${this.url}/showEventById/${id}`)
  }

  addParticipant(event: Event) {
    console.log(event._id);
    console.log(`${this.url}/addParticipant/${event._id}`);
    return this.http.put(`${this.url}/addParticipant/${event._id}`, event);
  }



  addInteressted(event: Event) {
    console.log(event._id);
    console.log(`${this.url}/addInterested/${event._id}`);
    return this.http.put(`${this.url}/addInterested/${event._id}`, event);
  }

  deleteEvent(id: String) {
    console.log(this.http.delete(`${this.url}/delete/${id}`))
    return this.http.delete(`${this.url}/delete/${id}`);
  }

  uploadImage(image: File, id : string) {
    /*const formData = new FormData();
    formData.append('image', image);
    console.log(formData);
*/

        let formData:FormData = new FormData();
        formData.append('uploadFile', image, image.name);
        let headers = new Headers();
        /** In Angular 5, including the header Content-Type can invalidate your request */
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
       /* let options = new RequestOptions({ headers: headers }); */
        this.http.post(`${this.url}/uploadCoverImage/${id}`, formData);

    console.log(image);
    console.log(id);
    console.log(`${this.url}/uploadCoverImage/${id}`);
    return this.http.post(`${this.url}/uploadCoverImage/${id}`, {'file': image});

  }



}
