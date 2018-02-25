import  {Injectable} from '@angular/core';

@Injectable()
export class AttendanceService {
	//total classes array will contain an array of lectures attended by child on each classes day
	attendance = [1,2,3];
	totalClasses:number=8;
		

	constructor() {}

	addAttendance(attndnc: number) {
		this.attendance.push(attndnc);
    }	

	getattendance(){
		return this.attendance.slice();
	}
 
	
	totalAttendance(attendance:number[]) {
	
		let sum = 0;
		for(let i=0; i<attendance.length; i++){

			sum += attendance[i];
		}

		return sum;
	}

	getTotalClasses() {

		return this.totalAttendance(this.attendance);
    }
   getTotalAttendance(){
   	return this.attendance.length*8;
   }

}