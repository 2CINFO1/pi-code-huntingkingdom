import { Component, OnInit } from '@angular/core';
import{DataService}from '../../../../../services/product/product.service' ;

@Component({
  selector: 'app-forest',
  templateUrl: './forest.component.html',
  styleUrls: ['./forest.component.css']
})
export class ForestComponent implements OnInit {

  HuntingProducts : any;
  constructor(private product:DataService) {
    this.product.getHuntingProducts().subscribe(data=>this.HuntingProducts=data)
  }
  ngOnInit(): void {
  }

}
