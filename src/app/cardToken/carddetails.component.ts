
  import { Component } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,} from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
//import { WindowRefService } from './window-ref.service';

import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'card-details',
  templateUrl: './carddetails.component.html',
 styleUrls: ['./carddetails.component.css'],
// providers: [WindowRefService]
})
export class CardDetailsComponent  {
    public CardDetailsForm: FormGroup;
    stripeToken;
    params;
    handler:any = null;
    serverUrl = 'http://localhost:3000/card_token'


    constructor( private router: Router, private  frmbuilder : FormBuilder,private http : HttpClient,private route:ActivatedRoute) {
        this.CardDetailsForm= frmbuilder.group({
          cardNumber :  new FormControl(),
          expiryMonth :  new FormControl(),
          expiryYear:  new FormControl(),
          cvc :  new FormControl(),
      
      })
      this.route.params.subscribe((params) => {

        this.params = params
      }
      
      )
    }
     
    save(CardDetailsForm : any){
    
      console.log(this.CardDetailsForm.value)

      this.http.post<any>( this. serverUrl, {carddetails:this.CardDetailsForm.value,params :this.params}).subscribe(
        data => {
            if(data.id){
                this.router.navigateByUrl('/create_passenger/'+ data.id +'/make_payment')
            }
          console.log(data)
        },
        err => {
          console.log(err)
        })
  
    }
  }
  