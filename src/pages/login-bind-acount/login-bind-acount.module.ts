import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginBindAcountPage } from './login-bind-acount';

@NgModule({
  declarations: [
    LoginBindAcountPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginBindAcountPage),
  ],
})
export class LoginBindAcountPageModule {}
