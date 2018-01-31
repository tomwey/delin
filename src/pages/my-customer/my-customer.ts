import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { CRMService } from '../../services/crm.service';

/**
 * Generated class for the MyCustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-customer',
  templateUrl: 'my-customer.html',
})
export class MyCustomerPage {

  constructor(public navCtrl: NavController, 
    private app: App,
    private crm: CRMService,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad MyCustomerPage');
    this.loadData();
  }

  loadData() {
    this.crm.getCustomersList((data, error) => {
      console.log(data);
      // if (data && data.DataList) {
      //   this.dataList = data.DataList;
      // } else {
      //   this.dataList = [];
      // }
    });
  }

  newItem() {
    this.app.getRootNavs()[0].push('MyCustomerFormPage');
  }

  dataList: any = [
    {
      name: '加红江',
      mobile: '15352354565',
      reason: '肿瘤',
      type_name: '义肢客户',
      address: '四川省雅安市雨城区南郊乡余家村四组',
      area: '德林成都',
    },
    {
      name: '陈福英',
      mobile: '18328601886',
      reason: '糖尿病',
      type_name: '截瘫客户',
      address: '四川省成都市崇州市体育中心斜对面永乐花园1栋1单元3楼左边',
      area: '崇州市',
    },
    {
      name: '李诗琪',
      mobile: '15352354565',
      reason: '意外',
      type_name: '义肢客户',
      address: '四川省成都市简阳',
      area: '成都市区 C',
    },
    {
      name: '秋戈',
      mobile: '15352354565',
      reason: '意外',
      type_name: '义肢客户',
      address: '四川省雅安市雨城区南郊乡余家村四组',
      area: '德林成都',
    },
  ];

}
