import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the OrderAuditItemFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-audit-item-form',
  templateUrl: 'order-audit-item-form.html',
})
export class OrderAuditItemFormPage {

  formData: any = {
    saler: '',
    dept: '',
    money: '',
    rate: '',
    sent_yj: '',
    jjfp: '',
    calc_jj: '',
    is_calc_yj: '',
    note: ''
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
