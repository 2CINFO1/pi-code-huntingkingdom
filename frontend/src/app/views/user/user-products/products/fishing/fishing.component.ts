import { Component, OnInit } from '@angular/core';
import{DataService}from '../../../../../services/product/product.service' ;


@Component({
  selector: 'app-fishing',
  templateUrl: './fishing.component.html',
  styleUrls: ['./fishing.component.css']
})
export class FishingComponent implements OnInit {
  FishingProducts : any;
  constructor(private product:DataService) {
    this.product.getFishingProducts().subscribe(data=>this.FishingProducts=data)

   }
  ngOnInit(): void {
  }

}
