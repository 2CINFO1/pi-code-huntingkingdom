import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {}
getAllProducts(){
  return this.http.get('http://localhost:3000/api/product/findall')
}
addOrder(){
  return this.http.get('')
}
}
