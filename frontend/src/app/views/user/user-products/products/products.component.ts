import { Component, OnInit } from '@angular/core';
import{DataService}from '../../../../services/product/product.service' ;
import {Item} from "../../../../models/store/item.model";
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
  item: Item;
  amount = 0


  toggle() {
    this.visible = !this.visible;}
  products : any;
  constructor(private dataservice:DataService) {
    this.dataservice.getAllProducts().subscribe(data=>this.products=data)

   }
  ngOnInit(): void {
  }
  addtocart(id: Number, quantity: number,name: String,price: any , img : String):  void {
    let data = {
      productId: id,
      quantity : quantity ,
      name : name,
      price : price,
      img : img
    };
    console.log(data);
    this.dataservice.addtoCart(data).subscribe(() => {
      this.dataservice.getAllProducts()
    });;

  }
}
