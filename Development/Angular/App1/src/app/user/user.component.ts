import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, Validators} from'@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm : FormGroup;
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
      this.userForm = this.fb.group({
        fullName : ['',[Validators.required,Validators.minLength(2), Validators.maxLength(10)]],
        email  : [''],
        //Add Extra Skills from group
        skills : this.fb.group({
          skillName  : [''],
          experiance : [''],
          Proficiency : ['beginner']
        }) 

      });
      this.userForm.get('fullName').valueChanges.subscribe(value =>{
        console.log(value); 
      })
  }
  onSubmit()
  {
    console.log(this.userForm.value); 
    console.log(this.userForm.get('fullName').value);
    //console.log(this.userForm.get('fullName').dirty);
    console.log(this.userForm.get('fullName').valid);
    console.log(this.userForm.get('skills').value);
  }

  OnDataLoad() : void
  {
    this.userForm.patchValue({
      fullName : 'Snehal Shimpi',
      email    : 'snehal@11gmail.com',
      skills :{
        skillName: 'angular',
        experiance: 1 ,
        Proficiency : 'beginner'

      }
     
    });
  }

}
    