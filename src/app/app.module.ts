import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp,IonicModule, IonicErrorHandler } from 'ionic-angular';
import { FormsModule } from '@angular/forms';


import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';

import { LoginBindAcountPage } from '../pages/login-bind-acount/login-bind-acount';
import { BindSuccessPage } from '../pages/bind-success/bind-success';
import { SetPasswordPage } from '../pages/set-password/set-password';
import { PasswordProtectPage } from '../pages/password-protect/password-protect';



@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    LoginBindAcountPage,
    BindSuccessPage,
    SetPasswordPage,
    PasswordProtectPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    LoginBindAcountPage,
    BindSuccessPage,
    SetPasswordPage,
    PasswordProtectPage
  ],
  providers: []
})
export class AppModule {
  constructor(){
    
  }
  
 }

