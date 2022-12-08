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

  addtocart(id: any, quantity: number,name: any,price: any):  void {
    let data = {
      productId: id,
      quantity : quantity ,
      name : name,
      price : price
    };
    console.log(data);
    this.product.addtoCart(data).subscribe(() => {
      this.product.getAllProducts()
    });;

}
}
