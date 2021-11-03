import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  userForm= this.fb.group({
    email : ['',[Validators.required, Validators.email]]
  
  });


  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.userForm.value);
  }
}
