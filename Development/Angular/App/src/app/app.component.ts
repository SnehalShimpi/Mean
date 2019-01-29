import { Component } from '@angular/core';
import { User } from './user';
import {FormGroup, FormControl} from  '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl : './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  // topics = ['React','Node','Angular'];
  // userModel = new User('snehal' , 'snehal@test.com' , 7350223496,'','morning',true);

  // onSubmit()
  // {
  //   console.log(this.userModel);
  // }
 
  RegistrationForm = new FormGroup({
    userName : new FormControl('snehal'),
    password : new FormControl('abc'),
    confirmPassword : new FormControl('abc')

  });
 }
