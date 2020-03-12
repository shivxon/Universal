import { Component } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,} from '@angular/forms'
import { Router } from '@angular/router';
import { WindowRefService } from './window-ref.service';

import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'razor-pay',
  templateUrl: './razorpay.component.html',
 styleUrls: ['./razorpay.component.css'],
 providers: [WindowRefService]
})
export class RazorPayComponent {
   
  
  
    constructor( private router: Router,private winRef: WindowRefService){}
   
      
 
  
    navigateOnBoarding() {
    
    }




    // createRzpayOrder(data) {
    //   console.log(data);
    //   // call api to create order_id
    //   this.payWithRazor(order_id);
    // }
  
    payWithRazor(val) {
      const options: any = {
        key: 'rzp_test_2NCbsygonzS4oC',
        amount: 1500000, // amount should be in paise format to display Rs 1255 without decimal point
        currency: 'INR',
        name: '', // company name or product name
        description: '',  // product description
        image: './assets/logo.png', // company logo or product image
        order_id: val, // order_id created by you in backend
        modal: {
          // We should prevent closing of the form when esc key is pressed.
          escape: false,
        },
        notes: {
          // include notes if any
        },
        theme: {
          color: '#0c238a'
        }
      };
      options.handler = ((response, error) => {
        options.response = response;
        console.log(response);
        console.log(options);
        // call your backend api to verify payment signature & capture transaction
      });
      options.modal.ondismiss = (() => {
        // handle the case when user closes the form while transaction is in progress
        console.log('Transaction cancelled.');
      });
     const rzp = new this.winRef.nativeWindow.Razorpay(options);
      rzp.open();
    }
  

}
