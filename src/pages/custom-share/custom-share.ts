import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';

/**
 * Generated class for the CustomSharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-custom-share',
  templateUrl: 'custom-share.html',
})
export class CustomSharePage {

  constructor(public navCtrl: NavController,
    private app: App,
      public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomSharePage');
  }

  new() {
    this.app.getRootNavs()[0].push('NewCustomSharePage');
  }

  dataList: any = [
    {
      name: '杨贵红',
      sex: '男',
      mobile: '13987736334',
      reason: 'A',
      reason2: '截肢部位 1 : BE左',
      state: 1,
      state_name: '审核中',
    },
    {
      name: '江心',
      sex: '女',
      mobile: '13987736334',
      reason: 'B',
      reason2: '截肢部位 1 : BE右；截肢部位2：AE右',
      state: 2,
      state_name: '未通过',
    },
    {
      name: '吴思连',
      sex: '男',
      mobile: '13987736334',
      reason: 'A',
      reason2: '截肢部位 1 : BE左',
      state: 1,
      state_name: '审核中',
    },
    {
      name: '宋丽',
      sex: '女',
      mobile: '13987736334',
      reason: 'B',
      reason2: '截肢部位 1 : BE左',
      state: 3,
      state_name: '已通过',
    },
  ];

}
