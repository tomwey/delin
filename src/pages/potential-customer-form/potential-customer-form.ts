import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PotentialCustomerFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-potential-customer-form',
  templateUrl: 'potential-customer-form.html',
})
export class PotentialCustomerFormPage {
  title: string = null;
  customer: any = {
    ID: 'LXR2017001953',
    author: '周朝',
    create_time: '2017-12-26',
    link_man: '',
    company: '',
    link_man_title: '',
    mobile: '',
    area: '',
    birth: '',
    phone: '',
    dept: '',
    bio: '',
    email: '',
    job: '',
    qm: '',
    times: '',
    note: '',
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (this.navParams.data.item) {
      this.title = '编辑意向客户';

      // this.customer = this.navParams.data.item;
    } else {
      this.title = '新增意向客户';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PotentialCustomerFormPage');
  }

}
