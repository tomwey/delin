import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ActionSheetController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, 
    private app: App,
    private actionSheetCtrl: ActionSheetController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LoanBillPage');
  }

  openItem(item) {
    let actionSheet = this.actionSheetCtrl.create({
      title: '',
      buttons: [
        {
          text: '查看',
          handler: () => {
            // console.log('Archive clicked');
            // this.viewContact(item);
            this.viewItem(item);
          }
        },
        {
          text: '编辑',
          handler: () => {
            // console.log('Archive clicked');
            // this.editContact(item);
            this.editItem(item);
          }
        },
        {
          text: '删除',
          role: 'destructive',
          handler: () => {
            // console.log('Destructive clicked');
            // this.deleteContact(item);
          }
        },{
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  viewItem(item) {
    let data = [
      {
        label: '单据编号',
        value: 'JKDH2017000321',
      },
      {
        label: '借款人',
        value: '周朝',
      },
      {
        label: '部门',
        value: '成都总经理室T3小组',
      },
      {
        label: '费用科目',
        value: '电话网',
      },
      {
        label: '费用金额',
        value: '6000',
      },
      {
        label: '申请日期',
        value: '2017-06-09',
      },
      {
        label: '预计还款日期',
        value: '2017-06-23',
      },
      {
        label: '流程状态',
        value: '未发送',
      },
      {
        label: '是否报销',
        value: '未报销',
      },
      {
        label: '是否核销',
        value: '未还款',
      },
      {
        label: '未核销金额',
        value: '4000',
      },
    ];
    this.app.getRootNavs()[0].push('ItemDetailPage', {
      title: '借款单详情',
      data: data,
    })
  }

  editItem(item) {
    this.app.getRootNavs()[0].push('LoanBillFormPage', { item: item });
  }

  newItem(item) {
    this.app.getRootNavs()[0].push('LoanBillFormPage');
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
