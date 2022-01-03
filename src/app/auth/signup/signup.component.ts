import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  authForm = new FormGroup({
    
    username: new FormControl('', [ Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z9-9]+$/)]),
      
    password: new FormControl(''),
    passwordConfiguration: new FormControl(''),
  })

  constructor() { }

  ngOnInit() {
  }

}
