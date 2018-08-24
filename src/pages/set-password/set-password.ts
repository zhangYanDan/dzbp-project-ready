import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular'
import { LoadingController } from 'ionic-angular';

import { PasswordProtectPage } from '../password-protect/password-protect';

/**
 * Generated class for the SetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set-password',
  templateUrl: 'set-password.html',
})
export class SetPasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alterCtrl: AlertController, public loadCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetPasswordPage');
  }
  showAlert(){
    let alert=this.alterCtrl.create({
      title:'失败',
      subTitle:'两次密码不一致，请重新输入',
      buttons:['ok']
    });
    alert.present();
  }

  loading(){
    let load=this.loadCtrl.create({
      content:'提交中...',
      duration:3000
    })
    load.present();
    setTimeout(()=>{
      this.navCtrl.push(PasswordProtectPage);
    },2000);
  }

  submit(setPasswordForm){
    if(setPasswordForm.newPwd===setPasswordForm.reNewPwd){
      this.loading();
    }else{
      this.showAlert();
    }
  }
}
