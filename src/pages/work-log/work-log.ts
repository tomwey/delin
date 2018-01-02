import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the WorkLogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-work-log',
  templateUrl: 'work-log.html',
})
export class WorkLogPage {

  constructor(public navCtrl: NavController, 
    private actionSheetCtrl: ActionSheetController,
    private app: App,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkLogPage');
  }

  openItem() {
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
            // console.log('Archive clicked');
          }
        },
        {
          text: '编辑',
          handler: () => {
            console.log('Destructive clicked');
            this.editLog();
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

  newLog() {
    this.app.getRootNavs()[0].push('WorkLogFormPage');
  }

  editLog() {
    this.app.getRootNavs()[0].push('WorkLogFormPage', { log: { time: '2018-01-02', content: 'test' } });
  }
}
