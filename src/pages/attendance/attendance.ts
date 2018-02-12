import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html',
})
export class AttendancePage {

  attendance = 8;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
