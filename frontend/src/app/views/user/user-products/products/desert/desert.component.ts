import { Component, OnInit } from '@angular/core';
import{DataService}from '../../../../../services/product/product.service' ;

@Component({
  selector: 'app-desert',
  templateUrl: './desert.component.html',
  styleUrls: ['./desert.component.css']
})
export class DesertComponent implements OnInit {
  CampingProducts : any;
  constructor(private product:DataService) {
    this.product.getCampingProducts().subscribe(data=>this.CampingProducts=data)

   }
  ngOnInit(): void {
  }

}
