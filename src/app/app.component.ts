import { CalendarPage } from './../pages/calendar/calendar';
import { Component } from '@angular/core';

import { LoginPage } from '../pages/login/login'



@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  HomePage:any=LoginPage;
  constructor() { }
  
}