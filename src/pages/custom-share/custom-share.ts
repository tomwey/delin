import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App, ActionSheetController, ModalController } from 'ionic-angular';

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
      private actionSheetCtrl: ActionSheetController,
      private modalCtrl: ModalController,
      public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomSharePage');
  }

  openItem(item) {
    let actionSheet = this.actionSheetCtrl.create({
      title: '',
      buttons: [
        {
          text: '发送',
          handler: () => {
            // console.log('Archive clicked');
            // this.viewContact(item);
            this.sendItem(item);
          }
        },
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

  sendItem(item) {

  }

  editItem(item) {

  }

  viewItem(item) {
    let data = [];
    this.app.getRootNavs()[0].push('ItemDetailPage', {
      title: '客户转移共享',
      data: data,
    });
  }

  newItem() {
    let modal = this.modalCtrl.create('ManSearchPage', { title: '选择客户', uri: '' });
    modal.onDidDismiss((data) => {
      if (data) {
        this.app.getRootNavs()[0].push('CustomerShareFormPage');
      }
    });
    modal.present();
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
