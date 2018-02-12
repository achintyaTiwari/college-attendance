import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AttendancePage } from '../attendance/attendance';
import { ExtraclassesPage } from '../extraclasses/extraclasses';
import { AttendanceService } from '../../attendance-service/attendance.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  attendance = 0;
  totalAttendance = 0;

  constructor(public navCtrl: NavController, private attndcSrvice : AttendanceService) {

  }

  editAttendance() {
  	this.navCtrl.push(AttendancePage);
    console.log(this.attndcSrvice.getTotalClasses());
  }

  extraClasses() {
    this.navCtrl.push(ExtraclassesPage);
  }


}
