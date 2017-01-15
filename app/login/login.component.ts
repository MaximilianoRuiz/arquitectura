import { Component } from '@angular/core';


const LOGIN_REQUIREMENTS: string[] = [
  "Email is required",
  "Password is required",
];

const PASSWORDS_NOT_EQUALS: string[] = [
  "Passwords not equals",
];

const REGISTER_REQUIREMENTS: string[] = [
  "First Name is required",
  "Last Name is required",
  "Email is required",
  "Password is required",
  "Confirm Password is required",
  "Bouth passwords should be equals"
];

@Component({
  selector: 'login-component',
  templateUrl: 'app/login/login.html',
  styleUrls: ['app/login/login.css'],
})


export class LoginComponent  {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordRepeated: string;

  isRequirementsShows: boolean;
  isLoginSuccesss: boolean;

  requirenments: string[];

  constructor(){
    this.reset();
  }

  checkLoginForm(): void {
  	this.requirenments = LOGIN_REQUIREMENTS;
  	if(this.email == '' || this.password == '') {
  		this.isRequirementsShows = true;
  	} else {
  		this.reset();
  		this.isLoginSuccesss = true;
  		setTimeout(() => this.isLoginSuccesss = false, 3000);
  	}
  }

  checkRegisterForm(): void {
  	this.requirenments = REGISTER_REQUIREMENTS;
  	if (this.firstName == '' || this.lastName == '' || this.email == '' || this.password == '' || this.passwordRepeated == '') {
  		this.isRequirementsShows = true;
  		
  	} else if (this.password != this.passwordRepeated){
  			this.requirenments = PASSWORDS_NOT_EQUALS;
  			this.isRequirementsShows = true;
  		} else {	
  			this.reset();
  			this.isLoginSuccesss = true;
  			setTimeout(() => this.isLoginSuccesss = false, 3000);

  		}
  }

  closeAlerts(): void {
  	this.isRequirementsShows = false;
  	this.isLoginSuccesss = false;
  }

  reset(): void {
  	this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
    this.passwordRepeated = '';

    this.isRequirementsShows = false;
    this.isLoginSuccesss = false;
    this.requirenments = LOGIN_REQUIREMENTS;
  }

}