import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, App } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private actionSheetCtrl: ActionSheetController,private app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoanSheetPage');
  }

  openItem(item)
  {
    let actionSheet = this.actionSheetCtrl.create({
      title: '',
      buttons: [
        {
          text: '查看',
          handler: () => {
            // console.log('Archive clicked');
            this.viewItem(item);
          }
        },
        {
          text: '编辑',
          handler: () => {
            // console.log('Archive clicked');
            this.editItem(item);
          }
        },
        {
          text: '删除',
          role: 'destructive',
          handler: () => {
            // console.log('Destructive clicked');
            this.deleteItem(item);
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
        label:  '名称',
        value: '1.A.AEDZ021 上臂三指电子手',
      },
      {
        label: '规格',
        value: '',
      },
      {
        label: '单位',
        value: '具'
      },
      {
        label: '借料数量',
        value: 100,
      },
      {
        label: '可用库存',
        value: 1000,
      },
      {
        label: '备注',
        value: '',
      }
    ];
    this.app.getRootNavs()[0].push('ItemDetailPage', { title: '借料单明细', data: data });
  }

  editItem(item) {
    this.app.getRootNavs()[0].push('LoanSheetFormPage', { item: item });
  }

  deleteItem(item) {

  }

  newLoanSheet() {
    this.app.getRootNavs()[0].push('LoanSheetFormPage');
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
