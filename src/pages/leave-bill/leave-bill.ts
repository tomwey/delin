import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LeaveBillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leave-bill',
  templateUrl: 'leave-bill.html',
})
export class LeaveBillPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaveBillPage');
  }

  dataList: any = [
    {
      name: '事假',
      time: '2017-11-21',
      days: 2,
      begin_time: '2017-11-21 08:30:00',
      end_time: '2017-11-23 23:59:59',
      state: 0,
      state_name: '未发送',
    },
    {
      name: '婚假',
      time: '2017-11-21',
      days: 2,
      begin_time: '2017-11-21 08:30:00',
      end_time: '2017-11-23 23:59:59',
      state: 2,
      state_name: '未通过',
    },
    {
      name: '分娩假',
      time: '2017-11-21',
      days: 181,
      begin_time: '2017-11-21 08:30:00',
      end_time: '2017-11-23 23:59:59',
      state: 1,
      state_name: '审核中',
    },
  ];

}
