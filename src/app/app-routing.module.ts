import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewFormComponent} from './newform/newform.component'


const routes: Routes = [
  {
    path: 'newform',
    pathMatch: 'full',
    component: NewFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
