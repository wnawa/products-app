import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-Login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './Login.component.html',
  styleUrl: './Login.component.css'
})
export class LoginComponent {
 
    email=''
    password=''

}
