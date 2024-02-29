import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router:Router){ //  injecting router 


  }
  goToSignUp(pageName:string):void{
    this.router.navigate([`${pageName}`]);

  }

  goToHomePage(pageName:string):void{
    this.router.navigate([`${pageName}`]);

  }
}

