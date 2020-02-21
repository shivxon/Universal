import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewFormComponent} from './newform/newform.component'
import {WeWorkComponent } from './we_work/wework.component'

const routes: Routes = [
  {
    path: 'newform',
    pathMatch: 'full',
    component: NewFormComponent
  },
  {
    path: 'wework',
    pathMatch: 'full',
    component: WeWorkComponent },
    
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
