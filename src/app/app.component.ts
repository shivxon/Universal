import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'universal';
  constructor(private router: Router){


  }

  save(){

    this.router.navigate(['/newform'])

  }
}
