import { Component } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,} from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
//import { WindowRefService } from './window-ref.service';


import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'new-account',
  templateUrl: './update.component.html',
 styleUrls: ['./update.component.css'],
// providers: [WindowRefService]
})
export class StripeUpdateComponent {
    public driverUpdateAccountForm: FormGroup;
    stripeToken;
    params;
    image1 :any =null;
    image2 :any =null;
    handler:any = null;
    serverUrl = 'http://localhost:3000/stripeUpdateAccount'
    constructor( private router: Router, private  frmbuilder : FormBuilder,private http : HttpClient,private route:ActivatedRoute) {
        this.driverUpdateAccountForm= frmbuilder.group({
            companyBusinessType: new FormControl(),
            companyName: new FormControl(),
            companyPhone: new FormControl(),
            companyTaxID:new FormControl(),
            companyAddreesCity: new FormControl(),
            companyAddreesCountry:new FormControl(),
            companyAddreesLine1: new FormControl(),
            companyAddreesLine2: new FormControl(),
            companyAddreesPostalCode:new FormControl(),
            companyAddreesState: new FormControl(),
            file1:['']
      })

      this.route.params.subscribe((params) => {

        this.params = params
      })
    } 
    save(driverUpdateAccountForm : any){
      
      this.http.post<any>( this.serverUrl,{ driverdetails: this.driverUpdateAccountForm.value, params: this.params}).subscribe(
        data => {
            if(data.id){
                this.router.navigateByUrl('/driveraccount/'+ data.id + '/add_person')
            }
          console.log(data)
        },
        err => {
          console.log(err)
        })
  
    }
  }
  