import { Component, OnInit } from '@angular/core';
import{DataService}from '../../../../../services/product/product.service' ;

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.css']
})
export class BirdsComponent implements OnInit {
  HikingProducts : any;
  constructor(private product:DataService) {
    this.product.getHikingProducts().subscribe(data=>this.HikingProducts=data)

   }
  ngOnInit(): void {
  }

}
