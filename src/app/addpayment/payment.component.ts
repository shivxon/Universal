
  import { Component } from '@angular/core';
  import{FormGroup,FormControl,FormBuilder,} from '@angular/forms'
  import { Router,ActivatedRoute  } from '@angular/router';
  //import { WindowRefService } from './window-ref.service';
  
  import {HttpClient} from '@angular/common/http'
  
  @Component({
    selector: 'card-details',
    templateUrl: './payment.component.html',
   styleUrls: ['./payment.component.css'],
  // providers: [WindowRefService]
  })
  export class PaymentComponent  {
      public makePaymentForm: FormGroup;
      stripeToken;
      params;
      handler:any = null;
      serverUrl = 'http://localhost:3000/make_payment'
  
  
      constructor( private router: Router, private  frmbuilder : FormBuilder,private http : HttpClient,private route:ActivatedRoute) {
          this.makePaymentForm= frmbuilder.group({
            amount :  new FormControl(),
            currencyType :  new FormControl(),
            description:  new FormControl(),
           
        
        })
        this.route.params.subscribe((params) => {

          this.params = params
        }
        
        )
      }
       
      save(makePaymentForm : any){
      
        console.log(this.makePaymentForm.value)
  
        this.http.post<any>( this. serverUrl,{paymentdetails:this.makePaymentForm.value,params :this.params} ).subscribe(
          data => {
              if(data.id){
                  this.router.navigateByUrl('/get_payout')
              }
            console.log(data)
          },
          err => {
            console.log(err)
          })
    
      }
    }
    