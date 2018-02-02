import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CRMService } from '../../services/crm.service';
import { NativeService } from '../../providers/NativeService';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { App } from 'ionic-angular/components/app/app';
import { Events } from 'ionic-angular/util/events';

/**
 * Generated class for the CustomerShareFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-share-form',
  templateUrl: 'customer-share-form.html',
})
export class CustomerShareFormPage {
  title: string = null;

  formData: any = {
    customercode: '',
    customername: '',
    customerphone: '',
    customersex: null,
    area: '',
    customersituation: null,
    customeraddress: '',

    changereason: '',
    address: '',
    tel: '',
    performancedistribution: ''
  };

  constructor(public navCtrl: NavController, 
    private crm: CRMService,
    private nativeServ: NativeService,
    private app: App,
    private events: Events,
    public navParams: NavParams) {
    if (this.navParams.data.item) {
      this.formData.customercode = this.navParams.data.item.CustomerCode;
      this.formData.customername = this.navParams.data.item.CustomerName;
      this.formData.customerphone = this.navParams.data.item.CustomerPhone;
      this.formData.customersex = this.navParams.data.item.CustomerSex == 1 ? "男" : "女";
      this.formData.area = this.navParams.data.item.Area;
      this.formData.customersituation = this.navParams.data.item.CustomerSituation || this.navParams.data.item.CustomerType;
      this.formData.customeraddress = this.navParams.data.item.CustomerAddress;
      
      this.formData.changereason = this.navParams.data.item.ChangeReason;
      this.formData.address = this.navParams.data.item.Address;
      this.formData.tel = this.navParams.data.item.Tel;
      this.formData.performancedistribution = this.navParams.data.item.PerformanceDistribution;
      this.formData.customerchangeid = this.navParams.data.item.CustomerChangeID
    }

    this.title = this.navParams.data.isNew === 0 ? '编辑客户转移信息' : '新增客户转移信息';
    console.log(this.navParams.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerShareFormPage');
  }

  selectItem(field) {

  }

  commit() {
    let params = JSON.parse(JSON.stringify(this.formData))
    if (params.customersex === '男') {
      params.customersex = 1;
    } else {
      params.customersex = 0;
    }

    if (this.navParams.data.isNew === 1) {
      this.crm.addCRMCustomerChange(params, (data, error) => {
        console.log(data);
        console.log(error);
        if (!error) {
          this.nativeServ.showToast('提交成功!');
          this.app.getRootNavs()[0].pop();
          this.events.publish('customer:changed');
        } else {
          this.nativeServ.showToast(error.message || error);
        }
      });
    } else {
      this.crm.updateCRMCustomerChange(params, (data, error) => {
        console.log(data);
        console.log(error);
        if (!error) {
          this.nativeServ.showToast('提交成功!');
          this.app.getRootNavs()[0].pop();
          this.events.publish('customer:changed');
        } else {
          this.nativeServ.showToast(error.message || error);
        }
      });
    }
    
  }

  controls: any = [
    {
      ID: 'customercode',
      type: 1,
      name: '客户编号',
      value: '',
    },
    {
      ID: 'customername',
      type: 1,
      name: '客户姓名',
      value: '',
    },
    {
      ID: 'customerphone',
      type: 1,
      name: '客户电话',
      value: '',
    },
    {
      ID: 'customersex',
      type: 1,
      name: '客户性别',
      value: '',
    },
    {
      ID: 'area',
      type: 1,
      name: '分配区域',
      value: '',
    },
    {
      ID: 'CustomerSituation',
      type: 1,
      name: '客户病况',
      value: '',
    },
    {
      ID: 'customeraddress',
      type: 1,
      name: '常住地址',
      value: '',
    },


  ];

}
