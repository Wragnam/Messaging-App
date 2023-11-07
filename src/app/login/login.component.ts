import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../services/user.service';
import { UserEntry } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  userEntries: UserEntry[] = [];
  loginForm: FormGroup;

  
  constructor(private router: Router, private formBuilder: FormBuilder, private userDataService: UserDataService){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      staySignedIn: new FormControl().valid
    });
    this.userEntries = this.userDataService.userEntries;
    console.log(this.userEntries);
  }

  login(){
    console.log(this.loginForm.value);
    sessionStorage.setItem('loggedIn', 'true');
  }
}
