import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyContactFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-contact-form',
  templateUrl: 'my-contact-form.html',
})
export class MyContactFormPage {

  title: string = null;
  contact: any = {
    name: '',
    sex: '',
    email: '',
    mobile: '',
    phone1: '',
    phone2: '',
    address: '',
    zip: '',
    city: '',
    company: '',
    note: '',
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (this.navParams.data.contact) {
      this.contact = this.navParams.data.contact;
      this.title = '编辑个人信息';
    } else {
      this.title = '添加个人信息';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyContactFormPage');
  }

  saveContact() {

  }

}
