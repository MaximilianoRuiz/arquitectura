import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [ AppComponent, LoginComponent ],
  imports:      [ BrowserModule, NgbModule.forRoot(), FormsModule ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
