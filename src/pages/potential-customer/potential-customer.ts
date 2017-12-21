import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PotentialCustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-potential-customer',
  templateUrl: 'potential-customer.html',
})
export class PotentialCustomerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PotentialCustomerPage');
  }

  dataList: any = [
    {
      name: '王宽',
      sex: '先生',
      mobile: '13987736334',
      area: '成都市区 A',
      area2: '水富家声医院',
      time: '2017-06-03',
      stars: ['1','1'],
    },
    {
      name: '陈曦',
      sex: '女士',
      mobile: '13987736334',
      area: '高县',
      area2: '高县中医院',
      time: '2017-06-03',
      stars: ['1'],
    },
    {
      name: '周建',
      sex: '先生',
      mobile: '13987736334',
      area: '自贡市区',
      area2: '自贡市第三人民医院',
      time: '2017-06-03',
      stars: ['1'],
    },
    {
      name: '闫从强',
      sex: '先生',
      mobile: '13987736334',
      area: '宜宾',
      area2: '宜宾市社保局',
      time: '2017-06-03',
      stars: ['1'],
    },
  ];

}
