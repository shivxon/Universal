import { Component, ViewChild,  ElementRef } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'we-work',
  templateUrl: './wework.component.html',
 styleUrls: ['./wework.component.css']
})
export class WeWorkComponent {

   @ViewChild('editor1', {static: false}) editor1;
   @ViewChild('editor2', {static: false}) editor2;
   @ViewChild('fileUploadQueue', {static: false}) addressProof: ElementRef;

    serverUrl = 'http://localhost:3000/newform';

    public jobdetailForm: FormGroup;
    isLinear = false;
    firstFormGroup: FormGroup;
    error:any = false
    message: any
 //  secondFormGroup: FormGroup;
   modules = {
    formula: true,
    toolbar: [      
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      ['formula'], 
      ['image', 'code-block']
    ]
  };
    constructor( private router: Router, private  frmbuilder : FormBuilder,private http : HttpClient) {
      this.jobdetailForm = frmbuilder.group({
  
  
        jobTitle : ['',
        Validators.compose([
          Validators.required
        ])],
        category:['',
        Validators.compose([
          Validators.required
        ])],
        jobType : ['',
        Validators.compose([
          Validators.required
        ])],
        companyhq : ['',
        Validators.compose([
          Validators.required
        ])],
        state : new FormControl(),
        howtoapply : ['',
        Validators.compose([
          Validators.required
        ])],
        jobdescription :['',
        Validators.compose([
          Validators.required
        ])],
        companyName : ['',
        Validators.compose([
          Validators.required
        ])],
        companyStatement : new FormControl(),
        fileUploadQueue:new FormControl(),
        companyWebsiteUrl: ['',
        Validators.compose([
          Validators.required
        ])],
        email:['',
        Validators.compose([
          Validators.required
        ])],
        companydescription: new FormControl(),
        
       });
      
    }

    ngOnInit(){
    
    }
  
    navigateOnBoarding() {
    
    }
  save(jobdetailForm : any){
  

    console.log(this.jobdetailForm.value)
    this.http.post(this.serverUrl, this.jobdetailForm.value).subscribe((data : any)=>{
  
   if(data.message !== null && data.message !== "Success"){
    this.error = true;
    this.message = data.message

   
   }
      // console.log(data.message)
    
    console.log(this.message)
    });
  }

  logChange($event) {
    console.log(this.editor1);
    console.log(this.editor2);
    console.log($event);

      



    
  }
}
