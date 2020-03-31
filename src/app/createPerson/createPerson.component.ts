import { Component } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,} from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';



import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'new-account',
  templateUrl: './createPerson.component.html',
 styleUrls: ['./createPerson.component.css'],

})
export class NewPersonComponent {
    public newPersonAccountForm: FormGroup;
    stripeToken;
    params
    image1 :any =null;
    image2 :any =null;
    handler:any = null;
    serverUrl = 'http://localhost:3000/stripeNewPersonAccount'
    selectedFile1 = null;
    file1url: any = null;
    
    constructor( private router: Router, private  frmbuilder : FormBuilder,private http : HttpClient,private route:ActivatedRoute) {
        this.newPersonAccountForm= frmbuilder.group({


            personFirstName: new FormControl(),
            personLastName: new FormControl(),
            personDobDay: new FormControl(),
            personDobMonth: new FormControl(),
            personDobYear: new FormControl(),
            personAdressCity: new FormControl(),
            personAdressCountry: new FormControl(),
            personAdressLine1: new FormControl(),
            personAdressLine2: new FormControl(),
            personAdressPostalCode: new FormControl(),
            personAdressState: new FormControl(),
            ssn:new FormControl(),
            personPhone: new FormControl(),
            personEmail:new FormControl(),
           
      })
      this.route.params.subscribe((params) => {

        this.params = params
      }
      
      )
    }
    
    onSelectFileFront(event) {
      // console.log(event)
      if(event.target.files.length > 0){
  
        const file = event.target.files[0]
        this.image2 = file;
      }
      const xhr = new XMLHttpRequest();
      xhr.open("POST", this.serverUrl, true);
      
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
      formdata.append('file',this.image2);
      formdata.append('params', this.params)
      xhr.send(formdata);
  
         }
    
    onSelectFileBack(event) {
    // console.log(event)
    if(event.target.files.length > 0){

      const file = event.target.files[0]
      this.image1 = file;
    }
    const xhr = new XMLHttpRequest();
    xhr.open("POST", this.serverUrl, true);
    
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
    formdata.append('file',this.image1);
    
    xhr.send(formdata);

       }
     
    save(newPersonAccountForm : any){
      
      this.http.post<any>( this.serverUrl,{persondetails: this.newPersonAccountForm.value, params :this.params}).subscribe(
        data => {
            // if(data.id){
            //     this.router.navigateByUrl('/stripe/'+ data.id + 'update')
            // }
          console.log(data)
        },
        err => {
          console.log(err)
        })
  
    }
  }
  