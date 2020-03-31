import { Component } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,} from '@angular/forms'
import { Router } from '@angular/router';
//import { WindowRefService } from './window-ref.service';


import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'new-account',
  templateUrl: './upload.component.html',
 styleUrls: ['./upload.component.css'],
// providers: [WindowRefService]
})
export class StripeUploadComponent {
    public driverUpdateAccountForm: FormGroup;
   
   image;
   serverUrl2 = 'http://localhost:3000/stripeUpdateAccount'
    constructor(  private  frmbuilder : FormBuilder,private http : HttpClient,) {
        this.driverUpdateAccountForm= frmbuilder.group({

         
            file1:['']
      })
    }
   
    onSelectFileBack(event) {
    
          if(event.target.files.length > 0){

            const file = event.target.files[0]
            this.image = file;
          }
          const xhr = new XMLHttpRequest();
          xhr.open("POST", this.serverUrl2, true);
          
          xhr.onload = () => {
            const status = xhr.status;
            console.log(status)
            if (status === 200) {
              
              console.log("happy")
            }
          }

          xhr.onerror = (error) => {
            console.log(error)
          };
          const formdata = new FormData()
          formdata.append('file',this.image);
          
          xhr.send(formdata);

        
        
        
    }     
 
    
  save(){
      const formdata = new FormData()
      formdata.append('file',this.image);
      this.http.post<any>(this.serverUrl2,formdata ).subscribe(
          res => console.log(res)
      );

  }

  
  }
  