import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    FormsModule,
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
