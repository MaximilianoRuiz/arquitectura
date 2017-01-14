import { Component } from '@angular/core';

@Component({
  selector: 'login-component',
  templateUrl: 'app/login/login.html',
  styleUrls: ['app/login/login.html'],
})

export class LoginComponent  {
  name: string;

  constructor(){
    this.name = "Login";
  }
}