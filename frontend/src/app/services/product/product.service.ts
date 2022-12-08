import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item} from "../../models/store/item.model";
import { Data } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = "http://localhost:3000/api/cart/item/62b70b1d7f73fec4e5bb3530"
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
addtoCart(data:Data){
  return this.http.post(`${this.url}`, data);
}
getcart(){
  return this.http.get('http://localhost:3000/api/cart/find/62b70b1d7f73fec4e5bb3530')

}
getamount(){
  return this.http.get('http://localhost:3000/api/cart/findamount/62b70b1d7f73fec4e5bb3530')

}
makePayment(stripeToken: any): Observable<any>{
  const url = "http://localhost:3000/api/cart/checkout/62b70b1d7f73fec4e5bb3530"

  return this.http.post<any>(url,{token:stripeToken})
}
deletecart(){
  return this.http.delete('http://localhost:3000/api/cart/62b70b1d7f73fec4e5bb3530')
}
deleteProducts(id: String){
  return this.http.delete('http://localhost:3000/api/product/'+id)
}
}
