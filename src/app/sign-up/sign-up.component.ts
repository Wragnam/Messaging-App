import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../services/user.service';
import { UserEntry } from '../models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

signUpForm : FormGroup;

  
  constructor(private router: Router, private formBuilder: FormBuilder, private userDataService: UserDataService){}
  
  ngOnInit(): void {
  this.signUpForm = this.formBuilder.group({
    username:new FormControl(null, [Validators.required]),
    email:new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    profilePicture:new FormControl(null, [Validators.required])
  })
  }
;


checkUsername(){
}


  signUp(){
    console.log(this.signUpForm.value);
    const newUser = new UserEntry('',this.signUpForm.value.username, this.signUpForm.value.email,this.signUpForm.value.password,this.signUpForm.value.profilePicture);
    this.userDataService.createUser(newUser);
  }

  verifyImage(event: any){
    const file = event.target.files[0];
    if(!file.type.includes('image/')){
      alert('Only jpg, jpeg and png allowed');
    }
  }
  
}
