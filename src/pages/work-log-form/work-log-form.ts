import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WorkLogFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-work-log-form',
  templateUrl: 'work-log-form.html',
})
export class WorkLogFormPage {

  title: string = null;
  log: any = {
    ID: 'GZRZ20180102',
    create_time: '2018-01-02',
    time: '',
    content: '',
    author: '周朝',
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (this.navParams.data && this.navParams.data.log) {
      this.title = '编辑日志';
      this.log.time = this.navParams.data.log.time;
      this.log.content = this.navParams.data.log.content;
    } else {
      this.title = '新建日志';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkLogFormPage');
  }

  save() {
    
  }

}
