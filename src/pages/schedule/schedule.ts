import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { OAService } from '../../services/oa.service';
import { Utils } from '../../providers/Utils';

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

  needShowEmptyErrorBox: boolean = false;
  emptyErrorMessage: string = '';

  constructor(
    public navCtrl: NavController, 
    private modalCtrl: ModalController, 
    private oa: OAService,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SchedulePage');
    this.loadData();
  }

  loadData() {
    this.oa.getScheduleList(Utils.dateFormat(new Date()), (data, error) => {
      if (error) {
        this.emptyErrorMessage = error.message || error;
        this.needShowEmptyErrorBox = true;

      } else {
        this.events = data.DataList;

        this.needShowEmptyErrorBox = this.events.length == 0;
        this.emptyErrorMessage = '暂无日程安排';
      }
    });
  }

  newSchedule() {
    // this.app.getRootNavs()[0].push('NewSchedulePage');
    let modal = this.modalCtrl.create('NewSchedulePage');
    modal.onDidDismiss((data) => {
      if (data) {
        this.loadData();
      }
    });
    modal.present();
  }

  doEdit(event) {
    // let modal = this.modalCtrl.create('NewSchedulePage', {item: event});
    // modal.onDidDismiss((data) => {
    //   if (data) {
    //     this.loadData();
    //   }
    // });
    // modal.present();
  }

  events: any = [
    // {
    //   time: '09:30',
    //   title: '召开部门技术研讨会',
    //   body: '同技术部门主要领导和技术骨干召开技术研讨会议，听取他们对于目前物联网技术的分析报告'
    // },
    // {
    //   time: '14:30',
    //   title: '参加P1项目关于人工智能的市场分析报告研讨会',
    //   body: '同技术部门主要领导和技术骨干召开技术研讨会议，听取他们对于目前物联网技术的分析报告'
    // },
  ];
}
