import { Component } from '@angular/core';
import { FormControl,Validator,FormGroup } from '@angular/forms';
import { Input } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 
  @Input() users: { username: string,age:number, email: string, password: string,mobile:number }[] = [];

  onLogin(loginForm: NgForm): void {
    
    if (loginForm.valid) {
      const { username, password } = loginForm.value;
    
      let data = null;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username === username && this.users[i].password === password) {
        data = this.users[i];
        break;}
    }
    if (data) {
      console.log('Login sucessfully');
    } else {
      console.log('something went wrong');
    }
  }
}
}
