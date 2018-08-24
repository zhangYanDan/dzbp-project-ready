import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoginBindAcountPage } from '../login-bind-acount/login-bind-acount';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  info={
    username:'ZhangYanDan',
    password:'123'
  }
  inputType='password';
  eyeStatus='eye-off';
  constructor(public nav :NavController,public loadingCtrl :LoadingController,public alertCtrl :AlertController) {}
  
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
  //跳转到绑定账户界面
  goWxLogin(){
    this.nav.push(LoginBindAcountPage);
  }
  //提示
  showAlert() {
    let alert = this.alertCtrl.create({
      title: '登录失败',
      subTitle: '账户名或密码不正确',
      buttons: ['OK']
    });
    alert.present();
  }

  submitLoading() {
    let loader = this.loadingCtrl.create({
      content: "提交中",
      duration: 3000
    });
    loader.present();
    setTimeout(() => {
      this.nav.push(LoginBindAcountPage);
    }, 2000);
    setTimeout(() => {
      loader.dismiss();
    }, 2000);
  }
  //账号登录验证 
  submit(formVal){
    if(formVal.username='ZhangYanDan'&&formVal.password=='123'){
      this.submitLoading();
    }else{
      this.showAlert();
    }
  }

  goCalendar(){
    this.nav.push('CalendarPage');
  }
}
