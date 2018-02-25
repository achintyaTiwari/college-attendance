import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NgForm} from '@angular/forms';
import {HospitalPage} from '../hospital/hospital';
/**
 * Generated class for the CityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-city',
  templateUrl: 'city.html',
})
export class CityPage {
  city:string= "Sultanpur";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onSubmit(f:NgForm){
   this.navCtrl.push(HospitalPage,{city:f.value.city});
   console.log(f);
  }

}
