import { Component } from '@angular/core';

@Component({
  selector: 'login-component',
  template: '<h1>Hola</h1>',
  styles: [`
    	h1 {
  			color: #369;
  			font-family: Arial, Helvetica, sans-serif;
  			font-size: 250%;
		}
  `],
})

export class LoginComponent  {
  name: string;

  constructor(){
    this.name = "Login";
  }
}