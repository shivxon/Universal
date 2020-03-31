import { Component } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,} from '@angular/forms'
import { Router } from '@angular/router';
//import { WindowRefService } from './window-ref.service';

import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'stripe-pay',
  templateUrl: './stripe.component.html',
 styleUrls: ['./stripe.component.css'],
// providers: [WindowRefService]
})
export class StripePayComponent {
    stripeToken;
    handler:any = null;
    serverUrl = 'http://localhost:3000/StripeCharge'
    constructor( private router: Router , private http :HttpClient){}
   
      
 
  
    navigateOnBoarding() {
    
    }


    ngOnInit() {
 ;
    }


    pay(amount) {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_ia31nWSV2YhPyv1Gh5ogdLD800WA9MOXSB',
      locale: 'auto',
      country: "inr",
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        this.stripeToken = token
        console.log(token)
        alert('Token Created!!');
      }
    });
 
    handler.open({
      name: 'test',
      description: '2 widgets',
      amount: amount * 1000,
      currency : "INR",
      country:"IN",
    card:{  
        
        address_country:"india"
    },
    used: true

    });

    this.http.post<any>(this.serverUrl, {token: this.stripeToken}).subscribe(
        data => {
          console.log(data)
        },
        err => {
          console.log(err)
        })




  }
 

}
