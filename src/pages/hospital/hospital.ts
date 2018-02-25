import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { UserPage } from '../user/user';
import { UserService } from '../../doctor-services/services.hospital';
import { DoctorPage } from '../doctor/doctor';

/**
 * Generated class for the HospitalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hospital',
  templateUrl: 'hospital.html',
})
export class HospitalPage {
  city:any;
  hospitals:string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private user: UserService ) {
   
   this.city= this.navParams.get('city');
   console.log("city got from city page:",this.city);
   this.hospitals= this.user.getallhospitals(this.city);
   
  }
 showDoctors(i:number){
 	console.log("show me i in hospital page:",i);
    this.navCtrl.push(DoctorPage,{data:{city:this.city,hospital:this.hospitals[i]}})
 }

}
