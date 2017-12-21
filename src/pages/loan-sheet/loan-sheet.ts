import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoanSheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loan-sheet',
  templateUrl: 'loan-sheet.html',
})
export class LoanSheetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoanSheetPage');
  }

  dataList: any = [
    {
      ID: 'JLD201700020',
      time: '2017-12-10',
      name: '定单借料',
      desc: 'T3 服务器调试，上海区进行对接需要用到相关的服务器资源，需要进行一定量的借料',
      state: '1',
      state_name: '审核中',
      ll_man: '吴静',
      gh_time: '2017-12-25'
    },
    {
      ID: 'JLD201700020',
      time: '2017-12-10',
      name: '定单借料',
      desc: 'T3 服务器调试，上海区进行对接需要用到相关的服务器资源，需要进行一定量的借料',
      state: '1',
      state_name: '审核中',
      ll_man: '吴静',
      gh_time: '2017-12-25'
    },
  ];

}
