import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AttendanceService } from '../../attendance-service/attendance.service';
import { NgForm } from '@angular/forms'

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private attendanceService:AttendanceService) {
  }

onSubmit(f:NgForm){
	//this.attendanceService.addAttendance(Number(f.value.classDid));

}  

}
