import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController,App } from 'ionic-angular';

/**
 * Generated class for the OvertimeApplyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-overtime-apply',
  templateUrl: 'overtime-apply.html',
})
export class OvertimeApplyPage {

  constructor(public navCtrl: NavController, 
    private actionSheetCtrl: ActionSheetController,
    private app: App,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad OvertimeApplyPage');
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

  viewItem(item) {

  }

  editItem(item) {

  }

  newItem() {
    this.app.getRootNavs()[0].push('OvertimeApplyFormPage');
  }

  dataList: any = [
    {
      ID: 'HRJBSQ2017000002',
      name: '工作日加班',
      hour: 1.25,
      is_kq: '是',
      time: '2017-05-09',
      state: '1',
      state_name: '审核中',
    },
    {
      ID: 'HRJBSQ20170000015',
      name: '休息日加班',
      hour: 9.75,
      is_kq: '是',
      time: '2017-06-03',
      state: '0',
      state_name: '未发送',
    },
    {
      ID: 'HRJBSQ20170000022',
      name: '休息日加班',
      hour: 4.5,
      is_kq: '否',
      time: '2017-06-03',
      state: '2',
      state_name: '已审核',
    },
  ];

}
