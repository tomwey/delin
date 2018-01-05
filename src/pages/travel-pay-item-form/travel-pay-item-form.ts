import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the TravelPayItemFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-travel-pay-item-form',
  templateUrl: 'travel-pay-item-form.html',
})
export class TravelPayItemFormPage {

  formData: any = {
    event: '',
    date: '2017-04-24',
    jt_fee: '',
    gj_fee: '',
    zs_fee: '',
    bz_fee: '',
    s_fee: '',
    dp_money: '',
    target: '',
    desc: '',
  };

  constructor(public navCtrl: NavController, 
    private viewCtrl: ViewController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TravelPayItemFormPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  save() {
    this.viewCtrl.dismiss(this.formData);
  }

}
