import { Component } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,} from '@angular/forms'
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'we-work',
  templateUrl: './wework.component.html',
 styleUrls: ['./wework.component.css']
})
export class WeWorkComponent {
    serverUrl = 'http://localhost:3000/newform';

    public jobdetailForm: FormGroup;
    isLinear = false;
    firstFormGroup: FormGroup;
   // secondFormGroup: FormGroup;

    constructor( private router: Router, private  frmbuilder : FormBuilder,private http : HttpClient) {
      this.jobdetailForm = frmbuilder.group({
  
  
        title : new FormControl(),
        companyhq : new FormControl(),
        companyName : new FormControl(),
        jobtype : new FormControl(),
        state : new FormControl(),
        jobdescription : new FormControl(),
        companyStatement : new FormControl(),
        howtoapply : new FormControl(),
        companyWebsiteUrl: new FormControl(),
        email:new FormControl(),
        category: new FormControl(),
        companydescription: new FormControl()
       });
      
    }

    ngOnInit(){
    
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
