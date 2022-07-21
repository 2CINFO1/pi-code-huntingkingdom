import { Component, OnInit } from '@angular/core';
import{DataService}from '../../../../services/product/product.service' ;
import { trigger, transition, animate, style } from '@angular/animations'



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
      trigger('slideInOut', [
        transition(':enter', [
          style({transform: 'translateX(-100%)'}),
          animate('200ms ease-in', style({transform: 'translateX(0%)'}))
        ]),
        transition(':leave', [
          animate('200ms ease-in', style({transform: 'translateX(-100%)'}))
        ])
      ])
    ],


})
export class ProductsComponent implements OnInit {
  visible = false;

  toggle() {
    this.visible = !this.visible;}
  products : any;
  constructor(private product:DataService) {
    this.product.getAllProducts().subscribe(data=>this.products=data)

   }
  ngOnInit(): void {
  }

}
