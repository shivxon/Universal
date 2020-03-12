import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignUpFormComponent} from './signup/signup.component'
import {WeWorkComponent } from './we_work/wework.component'
import {RazorPayComponent} from './payment/razorpay.component'
import {AwsComponent } from './aws-sdk/aws.component'
const routes: Routes = [
  {
    path: 'signup',
    pathMatch: 'full',
    component: SignUpFormComponent
  },
  {
    path: 'wework',
    pathMatch: 'full',
    component: WeWorkComponent },
    {
      path: 'razorpay',
      pathMatch: 'full',
      component: RazorPayComponent },

      {
        path: 'aws-sdk',
        pathMatch: 'full',
        component: AwsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
