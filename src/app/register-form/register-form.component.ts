import { Component } from '@angular/core';
import {FormControl,FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
profileForm=new FormGroup({
firstName:new FormControl(''),
lastName:new FormControl(''),
Password:new FormControl(''),
Email:new FormControl('')
})
onSubmit(){

  console.log(this.profileForm.value)
}
}
