import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoanBillFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loan-bill-form',
  templateUrl: 'loan-bill-form.html',
})
export class LoanBillFormPage {
  title: string = null;
  bill: any = {
    ID: 'JKDH20170027',
    time: '2017-12-18',
    owner: '周朝',
    dept: '成都总经理室T3小组',
    fee_apply: '',
    bill_type: '',
    fee_type: '',
    apply_money: '',
    fee_kemu: '',
    money: '',
    money2: '',
    operator: '周朝',
    time2: '',
    use_desc: '',
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (this.navParams.data.item) {
      this.title = '编辑借款单';
    } else {
      this.title = '新增借款单';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoanBillFormPage');
  }

}
