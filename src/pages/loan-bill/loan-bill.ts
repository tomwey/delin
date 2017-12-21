import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoanBillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loan-bill',
  templateUrl: 'loan-bill.html',
})
export class LoanBillPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoanBillPage');
  }

  dataList: any = [
    {
      ID: 'JKDH201700012',
      name: '电话网络费用',
      money: 6000,
      money2: 6000,
      is_hx: '未还款',
      hk_time: '2017-06-03',
      state: 1,
      state_name: '审核中'
    },
    {
      ID: 'JKDH201700006',
      name: '坏账核销',
      money: 4400,
      money2: 4400,
      is_hx: '未还款',
      hk_time: '2017-07-24',
      state: 0,
      state_name: '未发送'
    },
    {
      ID: 'JKDH201700024',
      name: '办公费',
      money: 1047,
      money2: 1047,
      is_hx: '未还款',
      hk_time: '2017-08-03',
      state: 2,
      state_name: '已审核'
    },
  ];

}
