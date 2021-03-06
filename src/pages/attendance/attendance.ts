import { Component, NgZone, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { OAService } from '../../services/oa.service';
import { NativeService } from '../../providers/NativeService';
import { Utils } from '../../providers/Utils';
import { CalendarComponentOptions, DayConfig, CalendarComponent } from 'ion2-calendar';

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

  @ViewChild('calendar') calendar: CalendarComponent;

  doCarding: boolean = false;

  date: string;
  time: string;

  hisDate: string;

  timer: any;

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

  currentDate: string = Utils.dateFormat(new Date());
  // dateOptions: any = {
  //   monthFormat: 'YYYY 年 MM 月 ',
  //   weekdays: ['日', '一', '二', '三', '四', '五', '六'],
  //   weekStart: 0,
  //   color: 'primary',
  //   defaultDate: new Date()
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

  dataList: any = [];

  todayDataList: any = [];
  hisDataList: any   = [];

  loading: boolean = false;

  error: any = null;
  
  todayError: any = null;
  hisError: any   = null;

  constructor(public navCtrl: NavController, 
    private oa: OAService,
    private nativeServ: NativeService,
    private zone: NgZone,
    private alertCtrl: AlertController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad AttendancePage');
    this.loadData();

    this.loadEventsData(this.currentDate);
  }

  loadEventsData(dateStr) {
    let arr = dateStr.split('-')
    this.oa.GetOACardRecordDateList(arr[0], arr[1], (data, error) => {

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

  ionViewWillLeave() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  onChange(ev) {
    // console.log(ev);
    this.hisDate = ev;
    this.loadHisData(ev);
  }

  changeMonth(ev) {
    // console.log(ev.newMonth.months);
    this.loadEventsData(Utils.dateFormat(ev.newMonth.dateObj));
  }

  loadData() {
    // setInterval(() => {
      this.oa.GetSystemTime(true, (data, error) => {
        let arr = data.DateTimeStr.split(' ');
        this.date = arr[0];
        this.time = arr[1];

        this.hisDate = this.date;

        this.loadHisData(this.date);
      });

      if (!this.timer) {
        this.timer = setInterval(() => {
          this.getSystemTime();
        }, 1000);
      }
      
  }

  loadHisData(date) {
    this.loading = true;
    this.oa.GetOACardRecordListResult(date, (data, error) => {
      this.loading = false;
      // this.error = error;
      // if (data) {
      //   // 标记打开状态
      //   this.markCardStatus(data);

      //   this.dataList = data.DataList;
      // } else {
      //   this.dataList = [];
      // }
      this.handleResult(data, error, date);
    });
  }

  handleResult(data, error, date) {
    console.log(this.hisDate);
    
    let now = Utils.dateFormat(new Date());
    if (now === date && this.dataType === 'dk') {
      // 打卡
      // this.todayDataList = data && data.DataList;
      if (data && data.DataList) {
        this.todayDataList = data.DataList;
      } else {
        this.todayDataList = [];
      }

      this.todayError = error;

      this.markCardStatus(data);
    } else {
      // 历史
      if (data && data.DataList) {
        this.hisDataList = data.DataList;
      } else {
        this.hisDataList = [];
      }
      
      // console.log(this.hisDataList);

      this.hisError    = error;
    }

    this.segmentChanged();
  }

  segmentChanged() {
    if (this.dataType === 'dk') {
      this.dataList = this.todayDataList;
      this.error    = this.todayError;  
    } else {
      if (this.hisDate === this.date) {
        this.dataList = this.todayDataList;
        this.error    = this.todayError;  
      } else {
        this.dataList = this.hisDataList;
        this.error    = this.hisError;

        console.log(this.dataList);
      }
    }
  }

  markCardStatus(data) {
    let cardType = data && data.CardRecordType;
      if (cardType === '111') {
        this.times.map(ele => {
          ele.state = 'yes';
          return ele;
        });
      } else if (cardType === '110') {
        for (let i=0; i<this.times.length - 2; i++) {
          let ele = this.times[i];
          ele.state = 'yes';
        }
      } else if (cardType === '100') {
        let ele = this.times[0];
        ele.state = 'yes';
      } else {
        this.times.map(ele => {
          ele.state = 'no';
          return ele;
        });
      }
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
    if (this.doCarding) return;

    this.doCarding = true;

    this.nativeServ.getUserLocation(true).then(data => {
      // console.log(data);
      // alert(JSON.stringify(data));
      this.oa.AddCarRecord(data.lng, data.lat, (data, error) => {
        if (error) {
          this.nativeServ.showToast(error.message || error);
        } else {
          this.nativeServ.showToast('打卡成功!');
  
          this.loadHisData(this.date);
          this.loadEventsData(this.date);
        }

        this.doCarding = false;
        
      });

    }).catch(error => {
      // console.log(error);
      this.doCarding = false;

      alert(error);
    });

    
  }

  remove(card) {
    this.alertCtrl.create({
      title: '删除提示',
      message: "您确定要删除吗？",
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: data => {
            this.oa.DeleteCardRecord(card.CardRecordID, (data, error) => {
              if (error) {
                this.nativeServ.showToast(error.message || error);
              } else {
                this.loadHisData(this.date);
                  this.loadEventsData(this.date);
              }
            });
          }
        }
      ]
    }).present();

    
  }

}
