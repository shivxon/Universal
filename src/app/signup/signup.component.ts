import { Component, ViewChild, ElementRef} from '@angular/core';
import{FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { CustomValidators } from '../../app/validations/customValidation';
import {HttpClient} from '@angular/common/http'
//import { ReCaptchaV3Service } from 'ng-recaptcha';
//import { ReCaptchaV3Service } from 'ngx-captcha';

@Component({
  selector: 'signup-form',
  templateUrl: './signup.component.html',
 styleUrls: ['./signup.component.css']
})
export class SignUpFormComponent {
  // @ViewChild('recaptcha', {static: false }) recaptchaElement: ElementRef;

    serverUrl = 'http://localhost:3000/token_validate';
    public signupForm: FormGroup;
    response: any;
    error:any = false
    message: any

  
  
    constructor( private router: Router, private  frmbuilder : FormBuilder,private http : HttpClient,) {
      this.signupForm = frmbuilder.group({
  
        email : ['',
        Validators.compose([
          Validators.required,
          Validators.email
        ])],
        password : ['',
        Validators.compose([
          Validators.required,
        // check whether the entered password has a number
        // CustomValidators.patternValidator(/\d/, {
        //   hasNumber: true
        // }),
        // check whether the entered password has upper case letter
        // CustomValidators.patternValidator(/[A-Z]/, {
        //   hasCapitalCase: true
        // }),
        // check whether the entered password has a lower case letter
        // CustomValidators.patternValidator(/[a-z]/, {
        //   hasSmallCase: true
        // }),
        // check whether the entered password has a special character
        // CustomValidators.patternValidator(
        //   /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
        //   {
        //     hasSpecialCharacters: true
        //   }
        // ),
        // Validators.minLength(8),
        // Validators.maxLength(20) 
      ])
       ],
        // recaptcha: ['',
        // Validators.compose([
        //   Validators.required
        // ])],
      
        
       });
   
      
    }

    


   

   ngOnInit() {
   
    }

    public resolved(captchaResponse: string) {
      

      this.response = captchaResponse;
  console.log(this.response)

      
      //console.log(`Resolved captcha with response: ${this.response }`);

    }
    
    
  
    navigateOnBoarding() {
      // this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {
      //   console.log('This is your token: ', token);
      // }, {
      //     useGlobalDomain: false
      // });

      // this.reCaptchaV3Service.execute(this.siteKey)
      //      .subscribe((token) => console.log(token));
    }
    
   

    
  save(signupForm : any){
  
    console.log(this.signupForm.value)
    // this.http.post(this.serverUrl, this.signupForm.value).subscribe((data : any)=>{
  
    //   console.log(data)
    // });



    this.http.post<any>(this.serverUrl, {recaptcha:  this.response, data: this.signupForm.value}).subscribe(
      data => {
        console.log(data)
      },
      err => {
        console.log(err)
      })

  }
}
