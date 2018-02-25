import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserService} from '../../doctor-services/services.hospital';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private user:UserService) {
  //console.log("Getting all Cities:\n",user.getAllCity());
  //console.log("Getting all Hospitals:\n",user.getAllHospital());
  //console.log("Getting all Doctors:\n",user.getAllDoctors());

  }

  

}
