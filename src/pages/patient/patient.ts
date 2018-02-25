import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patient',
  templateUrl: 'patient.html',
})
export class PatientPage {
  doc:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     
     this.doc = this.navParams.get('data');
     console.log("data in patient page is:",this.doc);
  }

 

}
