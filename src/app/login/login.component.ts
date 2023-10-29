import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm = this.formBuilder.group({
    email: '',
    password: '',
    staySignedIn: ''
  });
  
  constructor(private router: Router, private formBuilder: FormBuilder){}

  login(){
    
    console.log(this.loginForm.value);
  }
}
