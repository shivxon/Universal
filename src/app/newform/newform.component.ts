import { Component } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,} from '@angular/forms'
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './newform.component.html',
//   styleUrls: ['./app.component.css']
})
export class NewFormComponent {
    serverUrl = 'http://localhost:3000/newform';

    public newuserForm: FormGroup;
    fullName = String;
    email = String;
    address = String;
    phone = Number;
  
    constructor( private router: Router, private  frmbuilder : FormBuilder,private http : HttpClient) {
      this.newuserForm = frmbuilder.group({
  
  
        fullName : new FormControl(),
        email : new FormControl(),
        address  : new FormControl(),
        phone : new FormControl(),
        
       });
   
      
    }
  
    navigateOnBoarding() {
    
    }
  save(newuserForm : any){
  
  
    
    this.http.post(this.serverUrl, this.newuserForm.value).subscribe((data : any)=>{
  
      console.log(data)
    });
  }
}
