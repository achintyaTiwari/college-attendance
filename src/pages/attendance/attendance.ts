import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NgForm} from '@angular/forms';
import { AttendanceService } from '../../attendance-service/attendance.service';
@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html',
})
export class AttendancePage {

  attendance = 8;
  attendancePercentage:number;
  showArray:number[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private attndcSrvice:AttendanceService) {
  }
 
  onSubmit(f:NgForm){
   this.attndcSrvice.addAttendance(Number(f.value.attendance));
   this.attendancePercentage = 100*(this.attndcSrvice.getTotalClasses()/this.attndcSrvice.getTotalAttendance());
   this.showArray = this.attndcSrvice.attendance;
   console.log(this.showArray);
  }
  

}
