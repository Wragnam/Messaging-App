import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainScreenComponent } from './main-screen/main-screen.component'
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  {path: '', redirectTo: 'main-screen', pathMatch: 'full'},
  {path:'main-screen', component: MainScreenComponent},
  {path:'login', component:LoginComponent},
  {path: 'sign-up', component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
