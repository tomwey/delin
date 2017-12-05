import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';

/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  currentDate: any = new Date();
  dateOptions: any = {
    monthFormat: 'YYYY 年 MM 月 ',
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    weekStart: 0,
    color: 'primary',
    defaultDate: new Date()
  };

  constructor(public navCtrl: NavController, private app: App, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }

  newSchedule() {
    this.app.getRootNavs()[0].push('NewSchedulePage');
  }

  doEdit() {
    
  }

  events: any = [
    {
      time: '09:30',
      title: '召开部门技术研讨会',
      body: '同技术部门主要领导和技术骨干召开技术研讨会议，听取他们对于目前物联网技术的分析报告'
    },
    {
      time: '14:30',
      title: '参加P1项目关于人工智能的市场分析报告研讨会',
      body: '同技术部门主要领导和技术骨干召开技术研讨会议，听取他们对于目前物联网技术的分析报告'
    },
  ];
}
