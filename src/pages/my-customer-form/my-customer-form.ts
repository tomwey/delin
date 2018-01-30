import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Utils } from '../../providers/Utils';

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
    createtime: Utils.dateFormat(new Date()),
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

  save() {
    console.log(this.customer);
  }

  selectItem(id) {
    
  }

}
