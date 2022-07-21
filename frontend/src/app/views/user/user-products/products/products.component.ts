import { Component, OnInit } from '@angular/core';
import{DataService}from '../../../../services/product/product.service' ;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : any;
  constructor(private product:DataService) {
    this.product.getAllProducts().subscribe(data=>this.products=data)

   }
  ngOnInit(): void {
  }

}
