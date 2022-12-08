import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { User } from 'src/app/models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  updatedUser(id: any) {
    throw new Error('Method not implemented.');
  }

  url: string = "http://localhost:3000/api/auth/register"

  constructor(private http: HttpClient) {
  }

  addUser(user: any) {
    return this.http.post("http://localhost:3000/api/auth/register", user);
  }

  Login(user: any) {
    return this.http.post("http://localhost:3000/api/auth/login", user);
  }

  getUser(id: String) {
    return this.http.get<User>(`http://localhost:3000/api/user/find/${id}`)
  }

  updateUser(id: any,user:any) {
    return this.http.put("http://localhost:3000/api/user/" + id,user);
  }

  listUser() {
    return this.http.get<User[]>("http://localhost:3000/api/user/findall");
  }

  deleteUser(id: any) {
    return this.http.delete("http://localhost:3000/api/user/" + id);
  }
}
