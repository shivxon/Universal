import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignUpFormComponent} from './signup/signup.component'
import {WeWorkComponent } from './we_work/wework.component'
import {RazorPayComponent} from './payment/razorpay.component'
import {AwsComponent } from './aws-sdk/aws.component'
import {StripeNewAccountComponent} from './stripenewaccount/newaccount.component'
import {StripeUpdateComponent} from './stripeaccountupdate/update.component'
import {StripeUploadComponent} from './uploadimage/upload.component'
import {CreatePassengerComponent} from './createPassenger/create.component'
import {CardDetailsComponent} from './cardToken/carddetails.component'
import {PaymentComponent} from './addpayment/payment.component'
import {PayoutDetailsComponent} from './payoutdriver/payout.component'
import {NewPersonComponent} from './createPerson/createPerson.component'
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
        {
          path: 'driveraccount',
          pathMatch: 'full',
          component: StripeNewAccountComponent },
   {
           path: 'driveraccount/:id/update',
          pathMatch: 'full',
          component: StripeUpdateComponent },
          {
            path: 'driveraccount/:id/add_person',
           pathMatch: 'full',
           component: NewPersonComponent },
          {
            path: 'upload',
           pathMatch: 'full',
           component: StripeUploadComponent },
           {
            path: 'create_passenger',
           pathMatch: 'full',
           component: CreatePassengerComponent },
           {
            path: 'create_passenger/:id/add_card',
           pathMatch: 'full',
           component: CardDetailsComponent},
           {
            path: 'create_passenger/:id/make_payment',
           pathMatch: 'full',
           component: PaymentComponent},
           {
            path: 'get_payout',
           pathMatch: 'full',
           component: PayoutDetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
