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

    public jobdetailForm: FormGroup;
    
    title = String;
    companyhq = String;
    companyName = String;
    jobtype = String;
    state = String;
    jobdescription = String;

  
  
    constructor( private router: Router, private  frmbuilder : FormBuilder,private http : HttpClient) {
      this.jobdetailForm = frmbuilder.group({
  
  
        title : new FormControl(),
        companyhq : new FormControl(),
        companyName : new FormControl(),
        jobtype : new FormControl(),
        state : new FormControl(),
        jobdescription : new FormControl(),
        
       });
   
      
    }
  
    navigateOnBoarding() {
    
    }
  save(jobdetailForm : any){
  
  
    console.log(this.jobdetailForm.value)
    this.http.post(this.serverUrl, this.jobdetailForm.value).subscribe((data : any)=>{
  
      console.log(data)
    });
  }
}
