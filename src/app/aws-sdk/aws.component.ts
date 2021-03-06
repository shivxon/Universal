import { Component } from '@angular/core';
import * as AWS from 'aws-sdk';
import * as S3 from 'aws-sdk/clients/s3';


@Component({
  selector: 'aws-sdk',  
  templateUrl: './aws.component.html',
 styleUrls: ['./aws.component.css'],

})
export class AwsComponent {

 
  image:any =[];
  
constructor(){}
   
    navigateOnBoarding() {
    

       // console.log( this.image)
    }

    fileEvent(fileInput: any) {
        const AWSService = AWS;
        const region = 'us-east-1';
        const bucketName = 'example-bucket-vashishtha';
        const IdentityPoolId = 'us-east-1:f3c20bb6-ad1e-49dd-bf9b-a3e3dc6880b2';
        const file = fileInput.target.files[0];
      //Configures the AWS service and initial authorization
        AWSService.config.update({
          region: region,
          credentials: new AWSService.CognitoIdentityCredentials({
            IdentityPoolId: IdentityPoolId
          })
        });
      //adds the S3 service, make sure the api version and bucket are correct
        const s3 = new S3({
          apiVersion: '2006-03-01',
          params: { Bucket: bucketName}
        });
      //I store this in a variable for retrieval later
        this.image = file.name;
        s3.upload({ Key: file.name, Bucket: bucketName, Body: file, ACL: 'public-read'}, function (err, data) {
         if (err) {
           console.log(err, 'there was an error uploading your file');
         }

        // this.image.push(data)
         console.log(data)
         
       });
      }

}
