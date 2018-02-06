import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { ERPService } from '../../services/erp.service';

/**
 * Generated class for the MyAuditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-audit',
  templateUrl: 'my-audit.html',
})
export class MyAuditPage {

  error: any;
  loading: boolean = false;

  constructor(public navCtrl: NavController, 
    private app: App,
    private erp: ERPService,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad MyAuditPage');
    this.loadData();
  }

  loadData() {
    this.loading = true;

    this.erp.GetAchievementList((data, error) => {
      if (data && data.DataList) {
        this.dataList = data.DataList;
      } else {
        this.dataList = [];
      }
      this.error = error;
      this.loading = false;
      
    });
  }

  gotoDetail(item) {
    this.app.getRootNavs()[0].push('MyAuditDetailPage', item);
  }

  dataList: any = [
    // {
    //   ID: 1316588,
    //   money: 9.52,
    //   factor: .547485,
    //   yj_money: 190.51,
    //   order_money: 23000,
    //   total_money: 17369,
    //   _no: 'DD20110041',
    //   man: '徐建强',
    //   group: '成都川南组',
    //   time: '2011-09-28 16:58:29',
    //   product: '9.A-H-**DT 带锁凝胶套:1 1.A.AKTQ0918 碳纤气压膝盖:1'
    // },
    // {
    //   ID: 1316588,
    //   money: 364.27,
    //   factor: .65463,
    //   yj_money: 890.51,
    //   order_money: 54000,
    //   total_money: 17369,
    //   _no: 'DD20110041',
    //   man: '徐建强',
    //   group: '成都川南组',
    //   time: '2011-09-28 16:58:29',
    //   product: '9.A-H-**DT 带锁凝胶套:1 1.A.AKTQ0918 碳纤气压膝盖:1'
    // },
  ];
}
