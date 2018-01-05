import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the TravelLoanItemFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-travel-loan-item-form',
  templateUrl: 'travel-loan-item-form.html',
})
export class TravelLoanItemFormPage {
  formData: any = {
    ID: 'JKDBH201700003',
    fee_km: '汽车费用',
    fee_type: '0',
    money: '',
    money2: '',
    date: '2017-02-18',
  };
  constructor(public navCtrl: NavController, 
    private viewCtrl: ViewController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TravelLoanItemFormPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  save() {
    this.viewCtrl.dismiss(this.formData);
  }

}
