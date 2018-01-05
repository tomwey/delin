import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the OrthoticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orthotics',
  templateUrl: 'orthotics.html',
})
export class OrthoticsPage {

  constructor(public navCtrl: NavController, 
    private actionSheetCtrl: ActionSheetController,
    private app: App,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad OrthoticsPage');
  }

  openItem(item)
  {
    let actionSheet = this.actionSheetCtrl.create({
      title: '',
      buttons: [
        {
          text: '发送',
          handler: () => {
            // console.log('Archive clicked');
            // this.viewItem(item);
          }
        },
        {
          text: '查看',
          handler: () => {
            // console.log('Archive clicked');
            // this.editItem(item);
          }
        },
        {
          text: '编辑',
          handler: () => {
            // console.log('Archive clicked');
            // this.viewItem(item);
          }
        },
        {
          text: '改单',
          handler: () => {
            // console.log('Archive clicked');
            // this.editItem(item);
          }
        },
        {
          text: '退单',
          handler: () => {
            // console.log('Archive clicked');
            // this.editItem(item);
          }
        },
        {
          text: '删除',
          role: 'destructive',
          handler: () => {
            // console.log('Destructive clicked');
            // this.deleteItem(item);
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

  newItem() {
    this.app.getRootNavs()[0].push('OrthoticsFormPage');
  }

  dataList: any = [
    {
      ID: 'jxqsales2017000049',
      type: '新增',
      name: 'ML 可调式头颈胸支架',
      mode: '3.ML.1.1-1001',
      money: 2180.23,
      state: 'approving',
      state_name: '审核中',
    },
    {
      ID: 'jxqsales2017000049',
      type: '新增',
      name: 'ML 可调式头颈胸支架',
      mode: '3.ML.1.1-1001',
      money: 1920,
      state: 'approved',
      state_name: '已审核'
    },
  ];

}
