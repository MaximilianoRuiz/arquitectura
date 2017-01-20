import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { LoginComponent } from './login/login.component';
import { CommunityComponent }  from './community/community.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [ AppComponent, LoginComponent, CommunityComponent, HomeComponent ],
  imports:      [ BrowserModule, NgbModule.forRoot(), FormsModule, AppRoutingModule ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
