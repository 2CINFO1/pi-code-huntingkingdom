import { Component, OnInit } from '@angular/core';
import{DataService}from '../../../../services/product/product.service' ;
import {Router} from "@angular/router";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
products : any
  constructor(private dataservice:DataService,private router: Router) {
    this.dataservice.getAllProducts().subscribe(data=>this.products=data)

   }

  ngOnInit(): void {
  }


  delete(_id: String) {
    this.dataservice.deleteProducts(_id).subscribe(() => {
      this.router.navigate(['/dashboard/store'])
    })
  }
}
