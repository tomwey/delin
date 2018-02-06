import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OAService } from '../../services/oa.service';
import { NativeService } from '../../providers/NativeService';
import { Utils } from '../../providers/Utils';

/**
 * Generated class for the AttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html',
})
export class AttendancePage {
  dataType = 'dk';

  date: string;
  time: string;
  timer: any;

  timestamp: number;

  times: any = [
    {
      state: 'no',
    },
    {
      state: 'no',
    },
    {
      state: 'no',
    },
  ];

  currentDate: any = new Date();
  dateOptions: any = {
    monthFormat: 'YYYY 年 MM 月 ',
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    weekStart: 0,
    color: 'primary',
    defaultDate: new Date()
  };

  dataList: any = [];
  loading: boolean = false;
  error: any = null;

  constructor(public navCtrl: NavController, 
    private oa: OAService,
    private nativeServ: NativeService,
    private zone: NgZone,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad AttendancePage');
    this.loadData();
  }

  ionViewWillLeave() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  onChange(ev) {
    // console.log(ev);
    this.loadHisData(ev);
  }

  loadData() {
    // setInterval(() => {
      this.oa.GetSystemTime(true, (data, error) => {
        let arr = data.DateTimeStr.split(' ');
        this.date = arr[0];
        this.time = arr[1];

        this.timestamp = new Date(data.DateTimeStr).getTime();

        this.loadHisData(this.date);
      });

      // setTimeout(() => {
      //   this.getSystemTime();
      // }, 1000);
      this.timer = setInterval(() => {
        this.getSystemTime();
      }, 1000);
  }

  loadHisData(date) {
    this.loading = true;
    this.oa.GetOACardRecordListResult(date, (data, error) => {
      this.loading = false;
      
    });
  }

  getSystemTime() {
    this.oa.GetSystemTime(false, (data, error) => {
      let arr = data.DateTimeStr.split(' ');
      this.date = arr[0];
      this.time = arr[1];
    });

    // setTimeout(() => {
    //   this.getSystemTime();
    // }, 1000);
  }

  addCard() {
    this.oa.AddCarRecord(104.312398, 30.3837271, (data, error) => {
      if (error) {
        this.nativeServ.showToast(error.message || error);
      } else {
        this.nativeServ.showToast('打卡成功!');

        this.loadData();
      }
    });
  }

}
