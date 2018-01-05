import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the OrderPayItemFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-pay-item-form',
  templateUrl: 'order-pay-item-form.html',
})
export class OrderPayItemFormPage {

  formData: any = {
    pay_name: '',
    pay_type: '',
    pay_money: '',
    fp_name: '',
    note: '',
  };

  constructor(public navCtrl: NavController, 
    private viewCtrl: ViewController,
    public navParams: NavParams) {
      if (this.navParams.data.item) {
        this.formData = this.navParams.data.item;
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrthoticsItemFormPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  save() {
    this.viewCtrl.dismiss(this.formData);
  }

}
