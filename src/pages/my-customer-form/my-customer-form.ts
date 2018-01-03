import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyCustomerFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-customer-form',
  templateUrl: 'my-customer-form.html',
})
export class MyCustomerFormPage {

  title: string = null;
  customer: any = {
    ID: 'KHBM2017007034',
    author: '周朝',
    create_time: '2017-12-26',
    area: '',
    _type: '1',
    times: '',
    name: '',
    type: '',
    hospital: '',
    mz: '',
    jz_time: '',
    sb_company: '',
    sex: '',
    reason: '',
    sybx: '',
    birth: '',
    jz1: '',
    jz2: '',
    jz3: '',
    jz4: '',
    company: '',
    phone: '',
    comp_memo: '',
    mobile: '',
    invitee: '',
    fax: '',
    jdq_man: '',
    province: '',
    city: '',
    jtpm: '',
    jtqk: '',
    jdq_man_mobile: '',
    id_card: '',
    zip: '',
    next_face_time: '',
    old_sys_id: '',
    old_sys_no: '',
    address: '',
    hj_address: '',
    note: '',
  };
  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
      if (this.navParams.data.item) {
        this.title = '编辑客户';
      } else {
        this.title = '新增客户';
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyCustomerFormPage');
  }

}
