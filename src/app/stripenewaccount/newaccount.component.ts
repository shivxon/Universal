import { Component } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,} from '@angular/forms'
import { Router } from '@angular/router';
//import { WindowRefService } from './window-ref.service';

import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'new-account',
  templateUrl: './newaccount.component.html',
 styleUrls: ['./newaccount.component.css'],
// providers: [WindowRefService]
})
export class StripeNewAccountComponent {
    public driverAccountForm: FormGroup;
    stripeToken;
    handler:any = null;
    serverUrl = 'http://localhost:3000/stripeNewAccount'


    constructor( private router: Router, private  frmbuilder : FormBuilder,private http : HttpClient,) {
        this.driverAccountForm= frmbuilder.group({
      email :  new FormControl(),
      country: new FormControl(),
      type :  new FormControl(),
      })
    }
     
    save(driverAccountForm : any){
    
      console.log(this.driverAccountForm.value)

      this.http.post<any>( this. serverUrl, this.driverAccountForm.value).subscribe(
        data => {
            if(data.id){
                this.router.navigateByUrl('/driveraccount/'+ data.id + '/update')
            }
          console.log(data)
        },
        err => {
          console.log(err)
        })
  
    }
  }
  