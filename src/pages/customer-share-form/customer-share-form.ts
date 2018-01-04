import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CustomerShareFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-share-form',
  templateUrl: 'customer-share-form.html',
})
export class CustomerShareFormPage {
  formData: any = {
    ID: 'KHBM2012002063',
    name: '周团彬',
    mobile: '13772586782',
    sex: '0',
    create_man: '周朝',
    create_time: '2017-12-09 16:33:16',
    area: '咸阳市区',
    customer_bk: '截肢部位1: HD左',
    address: '兴平市桑镇苟家坡村4组',
    move_reason: '',
    address2: '',
    mobile2: '',
    yjfp: '',
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerShareFormPage');
  }

}
