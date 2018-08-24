import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';

/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private calendar: Calendar) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
    this.calendar.createCalendar('MyCalendar').then(
      (msg) => { 
        console.log(msg); 
        alert(JSON.stringify(msg))
      },
      (err) => { 
        console.log(err); 
        alert(JSON.stringify(err))
      }
    );
  }

}
