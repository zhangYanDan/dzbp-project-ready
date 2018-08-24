import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SetPasswordPage} from '../set-password/set-password'

/**
 * Generated class for the BindSuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bind-success',
  templateUrl: 'bind-success.html',
})
export class BindSuccessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  setNewPassword(){
    this.navCtrl.push(SetPasswordPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BindSuccessPage');
    setTimeout(() => {
      this.setNewPassword();
    }, 3000);
  }
}
