import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LeaveBillDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leave-bill-detail',
  templateUrl: 'leave-bill-detail.html',
})
export class LeaveBillDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaveBillDetailPage');
  }

  state: string = 'agree';

  dataList: any = [
    {
      label: '单据编号',
      value: 'HRQJSQ2017000030',
    },
    {
      label: '制单日期',
      value: '2017-11-10',
    },
    {
      label: '制单人',
      value: '吴静',
    },
    {
      label: '申请人',
      value: '周朝',
    },
    {
      label: '部门',
      value: '贵阳义肢',
    },
    {
      label: '请假类型',
      value: '事假',
    },
    {
      label: '开始时间',
      value: '2017-11-21 15:54:32',
    },
    {
      label: '结束时间',
      value: '2017-11-24 15:54:32',
    },
    {
      label: '请假天数',
      value: '3',
    },
    {
      label: '职务代理人',
      value: '',
    },
    {
      label: '请假事由',
      value: '有事',
    },
    {
      label: '备注',
      value: '',
    },
  ];

}
