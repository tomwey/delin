import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoanSheetFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loan-sheet-form',
  templateUrl: 'loan-sheet-form.html',
})
export class LoanSheetFormPage {
  title: string = null;
  loan: any = {
    ID: 'JLD201700020',
    zd_man: '周朝',
    zd_dept: '成都总经理室T3小组',
    zd_time: this.getNowFormatDate(),
    fh_warehouse: '',
    plan_hl_time: '',
    jl_man: '',
    jl_type: '',
    order: '',
    use_desc: '',
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let now = new Date();
    // this.loan.zd_time = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
    if (this.navParams.data.item) {
      this.title = '编辑借料单';
      this.loan = this.navParams.data.item;
    } else {
      this.title = '新增借料单';
    }
  }

  getNowFormatDate() {
    let date = new Date();
    let seperator1 = "-";
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    let mStr = month.toString();
    let dStr = strDate.toString();
    if (month >= 1 && month <= 9) {
      mStr = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      dStr = "0" + strDate;
    }
    let currentdate = year + seperator1 + mStr + seperator1 + dStr;
    return currentdate;
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoanSheetFormPage');
  }

}
