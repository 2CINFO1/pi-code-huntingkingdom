import { Component, OnInit } from '@angular/core';
import{DataService}from '../services/data.service' ;

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  products : any;
  constructor(private product:DataService) {
    this.product.getAllProducts().subscribe(data=>this.products=data)
    
   }

  ngOnInit(): void {
  }

}
