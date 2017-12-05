import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ManInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-man-info',
  templateUrl: 'man-info.html',
})
export class ManInfoPage {

  person: any = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.person = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManInfoPage');
  }

}
