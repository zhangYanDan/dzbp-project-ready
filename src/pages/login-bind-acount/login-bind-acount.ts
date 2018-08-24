import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { BindSuccessPage } from '../bind-success/bind-success';

/**
 * Generated class for the LoginBindAcountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login-bind-acount',
  templateUrl: 'login-bind-acount.html',
})
export class LoginBindAcountPage {
  info={
    username:'ZhangYanDan',
    password:'123'
  }
  inputType='password';
  eyeStatus='eye-off';
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginBindAcountPage');
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: '提示',
      subTitle: '用户名或密码不正确',
      buttons: ['OK']
    });
    alert.present();
  }

  //清除账户名
  clearVal(){
    this.info.username='';
  }
  //修改为明文密码
  changeType(){
    if(this.eyeStatus=='eye-off'){
      this.inputType='text';
      this.eyeStatus='eye';
      console.log(1);
    }else{
      this.inputType='password';
      this.eyeStatus='eye-off';
      console.log(2);

    }
  }
  //获取form内容
  submit(formVal){
    if(formVal.username=='ZhangYanDan'&&formVal.password=='123'){
     this.navCtrl.push(BindSuccessPage);
    }else{
      this.showAlert();
    }
  }

}
