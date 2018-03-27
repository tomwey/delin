import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { OAService } from '../../services/oa.service';
import { Utils } from '../../providers/Utils';
import { CalendarComponentOptions,DayConfig, CalendarComponent } from 'ion2-calendar';

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

  @ViewChild('calendar') calendar: CalendarComponent;

  currentDate: string = Utils.dateFormat(new Date());
  // dateOptions: any = {
  //   monthFormat: 'YYYY 年 MM 月 ',
  //   weekdays: ['日', '一', '二', '三', '四', '五', '六'],
  //   weekStart: 0,
  //   color: 'primary',
  //   defaultDate: new Date(),
  //   from: new Date(1900,1,1)
  // };

  dateOptions: CalendarComponentOptions = {
    monthFormat: 'YYYY 年 MM 月 ',
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    monthPickerFormat: [
      '1月','2月','3月',
      '4月','5月','6月',
      '7月','8月','9月',
      '10月','11月','12月',
    ],
    weekStart: 0,
    from: new Date(2000, 0, 1),
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
    this.loadData(this.currentDate);

    this.loadHisData(this.currentDate);
  }

  loadHisData(dateStr) {
    let arr = dateStr.split('-')
    this.oa.GetOAScheduleDateList(arr[0], arr[1], (data, error) => {

      if (data && data.DataList) {
        let _daysConfig: DayConfig[] = [];
        data.DataList.forEach(dateStr => {
          let date = new Date(dateStr);
          console.log(date);

          _daysConfig.push({
            date: date,
            subTitle: `●`,
            // marked: true,
          });
        });
        
        this.dateOptions.daysConfig = _daysConfig;
        // console.log(this.dateOptions);

      } else {
        this.dateOptions.daysConfig = [];
      }

      this.calendar.options = this.dateOptions;

    });
  }

  loadData(dateString) {
    this.events = [];

    this.oa.getScheduleList(dateString, (data, error) => {
      if (error) {
        this.emptyErrorMessage = error.message || error;
        this.needShowEmptyErrorBox = true;
        this.events = [];
      } else {
        this.events = data.DataList;

        this.needShowEmptyErrorBox = this.events.length == 0;
        this.emptyErrorMessage = '暂无日程安排';
      }
    });
  }

  changeDate(ev) {
    // console.log()
    this.loadData(ev);
  }

  changeMonth(ev) {
    // console.log(ev.newMonth.months);
    this.loadHisData(Utils.dateFormat(ev.newMonth.dateObj));
  }

  newSchedule() {
    // this.app.getRootNavs()[0].push('NewSchedulePage');
    let modal = this.modalCtrl.create('NewSchedulePage');
    modal.onDidDismiss((data) => {
      if (data) {
        this.currentDate = Utils.dateFormat(new Date());

        this.loadData(this.currentDate);
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
