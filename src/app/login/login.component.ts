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
  
  userEntries: Map<string, UserEntry> = new Map();
  loginForm: FormGroup;
  message: string | null = null;

  
  constructor(private router: Router, private formBuilder: FormBuilder, private userDataService: UserDataService){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      staySignedIn: new FormControl().valid
    });
    this.userEntries = this.userDataService.getUsers();
    console.log(this.userEntries);
  }

  login(): void{
    const {email, password} = this.loginForm.value;
    const user = this.userEntries.get(email);

    if(user && user.getPassword() == password){
      this.message = "Login Successful!"
      sessionStorage.setItem('loggedIn', 'true');
      this.router.navigate(["/main-screen"]);
    }else{
      this.message = "Invalid Email or Password";
    }

    
  }
}
