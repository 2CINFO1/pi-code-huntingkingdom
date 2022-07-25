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

  carts : Cart[];
  visible = false;
  cart : any;


  ngOnInit(): void {
  }

  toggle() {
    this.visible = !this.visible;}

    constructor(private dataservice:DataService) {
      this.dataservice.getcart().subscribe(data=>this.cart=data)

     }

     }

