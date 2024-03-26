import { Component } from '@angular/core';
import { FormControl,FormGroup,Validator, Validators } from '@angular/forms';
import { Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import test from 'node:test';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {


  @Output() registerdetails: EventEmitter<{ username: string,age:number, email: string, password: string,mobile:number }> = new EventEmitter<{ username: string,age:number, email: string, password: string,mobile:number }>();
   

  onRegister(registerForm: NgForm): void {
    
    if (registerForm.valid) {
      const { username, email, password, age, mobile } = registerForm.value;

      // All fields required
      
      if (!username || !email || !age || !password || !mobile) {
        console.log('All fields are required.');
        return;
      }

      // Username validation
      if (!/^[a-zA-Z]+$/.test(username)) {
        console.log('Username must contain only alphabets.');
        return;
      }

      // Age validation
      if (!/^\d+$/.test(age)) {
        console.log('Age must be a number.');
        return;
      }

      // Email validation
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        console.log('Please enter a valid email address.');
        return;
      }

      // Password validation
      if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
        console.log('Password must have minimum 8 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
        return;
      }

      // Mobile number validation
      if (!/^\d{10}$/.test(mobile)) {
        console.log('Mobile number must contain exactly 10 digits.');
        return;
      }
    
      this.registerdetails.emit({ username, email, password, age, mobile });
    
      registerForm.reset();
    } else {
      console.log('All fields are required.');
    }
    }
    
}


