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

  // formData: any = {
  //   pay_name: '',
  //   pay_type: '',
  //   pay_money: '',
  //   fp_name: '',
  //   note: '',
  // };

  payTypes: any = null;

  constructor(public navCtrl: NavController, 
    private viewCtrl: ViewController,
    public navParams: NavParams) {
      if (this.navParams.data.item) {
        // this.controls = this.navParams.data.item.controls;
        if (this.navParams.data.item.controls) {
          this.controls = this.navParams.data.item.controls;
        } else {
          this.controls.forEach(element => {
            element.value = this.navParams.data.item[element.ID + 'Str'] || this.navParams.data.item[element.ID];
          });
        }
      }

    this.payTypes = this.navParams.data.payTypes || [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrthoticsItemFormPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  controlSelect(ev) {
    if (ev.ID === 'PayDetailType') {
      let arr = [];
      this.payTypes.forEach(element => {
        arr.push({label: element.ConfigText, value: `${element.ConfigText}|${element.ConfigValue}`});
      });
      this.navCtrl.push('CommonSelectPage', { data: arr, control: ev });
      // this.navCtrl.push('SelectSearchPage', { uri: '', item: this.currentProduct });
    }
  }

  save() {

    let formData = {};

    let total = 0;
    this.controls.forEach(element => {
      // let val = element.value || {};
      formData[element.ID] = element.value || '';//val;

      if (!element.value) {
        total ++;
      }
    });

    if (total == this.controls.length) {
      return;
    }

    formData['controls'] = this.controls;

    this.viewCtrl.dismiss(formData);
  }

  controls: any = [
    {
      ID: 'PayDetailName',
      type: 2,
      name: '付款方',
    },
    {
      ID: 'PayDetailType',
      type: 4,
      name: '付款方式',
    },
    {
      ID: 'PayDetailPrice',
      type: 8,
      name: '付款金额',
      pattern: '[0-9]*'
    },
    {
      ID: 'PayDetailInvoiceTitle',
      type: 2,
      name: '抬头',
    },
    {
      ID: 'PayDetailRemark',
      type: 3,
      name: '备注',
    }];
}
