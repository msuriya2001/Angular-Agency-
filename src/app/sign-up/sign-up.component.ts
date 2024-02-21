import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validator } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUPComponent implements OnInit {

  // This code is for submitting the registration of new user

  registerForm : FormGroup ;

  ngOnInit(): void {


    this.registerForm = new FormGroup({
        StoreName:new FormControl(null, [Validators.required]),
        FirstName:new FormControl("Enter your first name", [Validators.required]), // validators to be added ------
        LastName:new FormControl("Enter your last name", [Validators.required]),
        Mobile:new FormControl(null, [Validators.max(10), Validators.required]),
        Email:new FormControl(null, [Validators.required, Validators.email]),
        Password:new FormControl(null,[Validators.required]),
        ReTypePassword:new FormControl(null, [Validators.required])

    });




    }

    OnRegistrationSubmit(){

      console.log(this.registerForm);
    }
    
  }

