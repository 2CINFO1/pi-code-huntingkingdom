import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "http://localhost:3000/api/user"

  constructor(private http: HttpClient) {
  }

  addStage(stage: string) {
    return this.http.post(this.url, stage);
  }

  updateStage(stage: string) {
    return this.http.put(this.url + stage, stage);
  }

  listVideo() {
    return this.http.get<string[]>(this.url);
  }

  deleteStage(id: number) {
    return this.http.delete(this.url + id);
  }
}
