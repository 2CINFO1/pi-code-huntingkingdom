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
getFishingProducts(){
  return this.http.get('http://localhost:3000/api/product/findall?Categorie=fishing')
}
getCampingProducts(){
  return this.http.get('http://localhost:3000/api/product/findall?Categorie=camping')
}
getHikingProducts(){
  return this.http.get('http://localhost:3000/api/product/findall?Categorie=hiking')
}
getHuntingProducts(){
  return this.http.get('http://localhost:3000/api/product/findall?Categorie=hunting')
}
addOrder(){
  return this.http.get('')
}
}
