import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CampSpot} from "../../models/maps/camp_spot";
import {Event} from "../../models/events/events";

@Injectable({
  providedIn: 'root'
})
export class CampSpotService {
  url: string = "http://localhost:3000/camp"

  constructor(private http: HttpClient) {
  }

  addCampSpot(campSpot: CampSpot) {
    return this.http.post(`${this.url}/add`, campSpot).subscribe(data => {
        console.log(data);
      },

      error => {
        console.log('Log the error here: ', error);
      });
  }

  updateCampSpot(campSpot: CampSpot) {
    return this.http.put(`${this.url}/${campSpot._id}`, campSpot);
  }

  listCampSpot() {
    console.log(this.http.get<CampSpot[]>(`${this.url}/fetch`))
    return this.http.get<CampSpot[]>(`${this.url}/fetch`);
  }

  getCampSpot(id: String) {

    return this.http.get<CampSpot>(`${this.url}/find/${id}`)
  }

  deleteCampSpot(id: String) {
    console.log(this.http.delete(`${this.url}/${id}`))
    return this.http.delete(`${this.url}/${id}`);
  }

  getSpotByName(name: String) {
    return this.http.get<CampSpot[]>(`${this.url}/findByName/${name}`)
  }

  listCampSpotsByKey(key: string) {
    console.log(this.http.get<CampSpot[]>(`${this.url}/getSpotsByKey/${key}`))
    return this.http.get<CampSpot[]>(`${this.url}/getSpotsByKey/${key}`);
  }
}
