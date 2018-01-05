import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  constructor(public navCtrl: NavController, 
    private actionSheetCtrl: ActionSheetController,
    private app: App,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

  openItem(item) {
    let actionSheet = this.actionSheetCtrl.create({
      title: '',
      buttons: [
        {
          text: '发送',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: '查看',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: '编辑',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: '删除',
          role: 'destructive',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    }).present();
  }

  newItem() {
    this.app.getRootNavs()[0].push('OrderFormPage');
  }

  dataList: any = [
    {
      ID: 'DD20170127',
      type: '新增',
      man_name: '赵亚斌',
      dept: '贵阳管理',
      time: '2017-06-03',
      money: '53800',
      discount: '0.3283',
      state: 'approving',
      state_desc: '审核中',
    },
    {
      ID: 'DD20170127',
      type: '提升档次',
      man_name: '赵亚斌',
      dept: '贵阳管理',
      time: '2017-06-03',
      money: '53800',
      discount: '1',
      state: '',
      state_desc: '未发送',
    },
    {
      ID: 'DD20170127',
      type: '配件兑换+提升档次',
      man_name: '赵亚斌',
      dept: '贵阳管理',
      time: '2017-06-03',
      money: '53800',
      discount: '0.3283',
      state: 'approved',
      state_desc: '已审核',
    },
  ];
}
