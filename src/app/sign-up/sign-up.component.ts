import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {



  signUpForm = this.formBuilder.group({
    username:'',
    email:'',
    password: '',
    profilePicture:''
  })

  constructor(private router: Router, private formBuilder: FormBuilder){};


  signUp(){

  }

  verifyImage(event: any){
    const file = event.target.files[0];
    if(!file.type.includes('image/')){
      alert('Only jpg, jpeg and png allowed');
    }
  }
  
}
