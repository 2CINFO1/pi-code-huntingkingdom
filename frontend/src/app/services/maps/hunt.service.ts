import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HuntSpot} from "../../models/maps/hunt_spot";

@Injectable({
  providedIn: 'root'
})
export class HuntService {
  url: string = "http://localhost:3000/hunt"

  constructor(private http: HttpClient) {
  }

  addHuntSpot(huntSpot: HuntSpot) {
    return this.http.post(`${this.url}/add`, huntSpot).subscribe(data => {
        console.log(data);
      },

      error => {
        console.log('Log the error here: ', error);
      });
  }

  updateHuntSpot(huntSpot: HuntSpot) {
    return this.http.put(`${this.url}/${huntSpot._id}`, huntSpot);
  }

  listHuntSpot() {
    console.log(this.http.get<HuntSpot[]>(`${this.url}/fetch`))
    return this.http.get<HuntSpot[]>(`${this.url}/fetch`);
  }

  getHuntSpot(id: String) {

    return this.http.get<HuntSpot>(`${this.url}/find/${id}`)
  }

  deleteHuntSpot(id: String) {
    console.log(this.http.delete(`${this.url}/${id}`))
    return this.http.delete(`${this.url}/${id}`);
  }
}
