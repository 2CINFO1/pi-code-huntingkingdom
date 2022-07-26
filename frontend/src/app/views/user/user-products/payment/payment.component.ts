import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as Stripe from 'stripe';



// import { StripeService, Elements, Element as StripeElement, ElementsOptions } from "ngx-stripe";
import{DataService}from '../../../../services/product/product.service' ;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentHandler: any = null;

  success: boolean = false

  failure:boolean = false

  constructor(private dataservice:DataService) {}

  ngOnInit() {
    this.invokeStripe();
  }

  makePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: "pk_test_51LH13WHxNBiDGFedFHcp4ft0duF9OxhYSebOiek0gPpepVKKlWGg6W3aJ8H7YeiFzlW0jEPjgo7im0jYmNOfzuOJ00rXouaPKA",
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        paymentstripe(stripeToken);
      },
    });

    const paymentstripe = (stripeToken: any) => {
      this.dataservice.makePayment(stripeToken).subscribe((data: any) => {
        console.log(data);
        if (data.data === "success") {
          this.success = true
        }
        else {
          this.failure = true
        }
      });
    };

    paymentHandler.open({
      name: 'Coding Shiksha',
      description: 'This is a sample pdf file',
      amount: amount * 100,
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51LH13WHxNBiDGFedFHcp4ft0duF9OxhYSebOiek0gPpepVKKlWGg6W3aJ8H7YeiFzlW0jEPjgo7im0jYmNOfzuOJ00rXouaPKA',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };

      window.document.body.appendChild(script);
    }
  }
}



