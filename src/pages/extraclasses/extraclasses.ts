import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-extraclasses',
  templateUrl: 'extraclasses.html',
})
export class ExtraclassesPage {
  
  extraclasses = 4;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
}
