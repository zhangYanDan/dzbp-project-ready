import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasswordProtectPage } from './password-protect';

@NgModule({
  declarations: [
    PasswordProtectPage,
  ],
  imports: [
    IonicPageModule.forChild(PasswordProtectPage),
  ],
})
export class PasswordProtectPageModule {}
