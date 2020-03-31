
  import { Component } from '@angular/core';
  import{FormGroup,FormControl,FormBuilder,} from '@angular/forms'
  import { Router, ActivatedRoute } from '@angular/router';
  //import { WindowRefService } from './window-ref.service';
  
  import {HttpClient} from '@angular/common/http'
  
  @Component({
    selector: 'card-details',
    templateUrl: './payout.component.html',
   styleUrls: ['./payout.component.css'],
  // providers: [WindowRefService]
  })
  export class PayoutDetailsComponent  {
      public PayoutDetailsForm: FormGroup;
      params;
      serverUrl = 'http://localhost:3000/get_payout'
  
  
      constructor( private router: Router, private  frmbuilder : FormBuilder,private http : HttpClient,private route:ActivatedRoute) {
          this.PayoutDetailsForm= frmbuilder.group({
            payoutAmount :  new FormControl(),
            currencyType :  new FormControl(),
            
        })
      }
       
      save(PayoutDetailsForm : any){
      
        console.log(this.PayoutDetailsForm.value)
  
        this.http.post<any>( this. serverUrl, this.PayoutDetailsForm.value).subscribe(
          data => {
              if(data.id){
                  this.router.navigateByUrl('/success')
              }
            console.log(data)
          },
          err => {
            console.log(err)
          })
    
      }
    }
    