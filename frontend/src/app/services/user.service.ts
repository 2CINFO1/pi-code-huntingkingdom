import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = "http://localhost:3000/api/auth/register"

  constructor(private http: HttpClient) {
  }

  addUser(user: any) {
    return this.http.post("http://localhost:3000/api/auth/register", user);
  }

  Login(user: any) {
    return this.http.post("http://localhost:3000/api/auth/login", user);
  }



  updateUser(user: any) {
    return this.http.put(this.url + user, user);
  }

  listUser() {
    return this.http.get("http://localhost:3000/api/user/findall");
  }

  deleteUser(id: any) {
    return this.http.delete("http://localhost:3000/api/user/" + id);
  }
}
