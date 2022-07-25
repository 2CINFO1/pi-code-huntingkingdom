import { Component, OnInit } from '@angular/core';
import{DataService}from '../../services/product/product.service' ;
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/store/Cart.model';
@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {

  visible = false;
  carts:any
  products : any
  amount = 0 ;


  ngOnInit(): void {
  }

  toggle() {
    this.dataservice.getcart().subscribe((data: any) => {
      this.products = data;
      // this.cartDetails = data.data;
      console.log(this.carts);})
this.dataservice.getamount().subscribe((data:any) => {
    this.amount = data ;
}
    ),
    this.visible = !this.visible;}

    constructor(private dataservice:DataService) {
    }


     }

