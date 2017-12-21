import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TravelReimbursementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-travel-reimbursement',
  templateUrl: 'travel-reimbursement.html',
})
export class TravelReimbursementPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TravelReimbursementPage');
  }

  dataList: any = [
    {
      ID: 'CLBXD201700005',
      name: '业务例行巡防',
      money: 71,
      city: '成都',
      time: '2017-06-03',
      state: 1,
      state_name: '审核中'
    },
    {
      ID: 'CLBXD201700003',
      name: '参展出差',
      money: 854,
      city: '重庆',
      time: '2017-07-24',
      state: 0,
      state_name: '未发送'
    },
    {
      ID: 'CLBXD201700001',
      name: '内部培训',
      money: 934,
      city: '贵阳',
      time: '2017-08-03',
      state: 2,
      state_name: '已审核'
    },
    {
      ID: 'CLBXD201600152',
      name: '内部培训学习',
      money: 1450,
      city: '福州',
      time: '2016-08-03',
      state: 2,
      state_name: '已审核'
    },
  ];

}
