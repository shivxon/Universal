import { Component } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,} from '@angular/forms'
import { Router } from '@angular/router';
//import { WindowRefService } from './window-ref.service';

import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'new-account',
  templateUrl: './create.component.html',
 styleUrls: ['./create.component.css'],
// providers: [WindowRefService]
})
export class CreatePassengerComponent  {
    public PassengerAccountForm: FormGroup;
    stripeToken;
    handler:any = null;
    serverUrl = 'http://localhost:3000/create_passenger'


    constructor( private router: Router, private  frmbuilder : FormBuilder,private http : HttpClient,) {
        this.PassengerAccountForm= frmbuilder.group({
      email :  new FormControl(),
      
      })
    }
     
    save(PassengerAccountForm : any){
    
      console.log(this.PassengerAccountForm.value)

      this.http.post<any>( this. serverUrl, this.PassengerAccountForm.value).subscribe(
        data => {
            if(data.id){
                this.router.navigateByUrl('/create_passenger/'+ data.id + '/add_card')
            }
          console.log(data)
        },
        err => {
          console.log(err)
        })
  
    }
  }