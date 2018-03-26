import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { CRMService } from '../../services/crm.service';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';

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
    private modalCtrl: ModalController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad MyCustomerPage');
    this.loadData();
  }

  loadData() {
    this.crm.getCustomersList((data, error) => {
      // console.log(data);
      if (data && data.DataList) {
        this.dataList = data.DataList;
      } else {
        this.dataList = [];
      }
    });
  }

  openItem(item) {
    // let data = [];
    let data = [
      {
        label: '所属区域',
        value: this.formatValueForItem(item, 'Area'),
      },
      {
        label: '客户性质',
        value: this.formatValueForItem(item, 'CustomerNature'),
      },
      {
        label: '拜访周期',
        value: this.formatValueForItem(item, 'VisitingCycle'),
      },
      {
        label: '客户名称',
        value: this.formatValueForItem(item, 'CustomerName'),
      },
      {
        label: '客户类别',
        value: this.formatValueForItem(item, 'CustomerType'),
      },
      {
        label: '治疗医院',
        value: this.formatValueForItem(item, 'CustomerHospital'),
      },
      {
        label: '民族',
        value: this.formatValueForItem(item, 'Nation'),
      },
      {
        label: '截肢日期',
        value: this.formatValueForItem(item, 'AmputationDate'),
      },
      {
        label: '社保单位',
        value: this.formatValueForItem(item, 'SecurityUnit'),
      },
      {
        label: '性别',
        value: this.formatValueForItem(item, 'Sex'),
      },
      {
        label: '截肢原因',
        value: this.formatValueForItem(item, 'Reason'),
      },
      {
        label: '商业保险',
        value: this.formatValueForItem(item, 'CommercialInsurance'),
      },
      {
        label: '生日',
        value: this.formatValueForItem(item, 'Birthday'),
      },

      {
        label: '截肢部位1',
        value: this.formatValueForItem(item, 'AmputationPart1'),
      },

      {
        label: '截肢部位2',
        value: this.formatValueForItem(item, 'AmputationPart2'),
      },
      {
        label: '截肢部位3',
        value: this.formatValueForItem(item, 'AmputationPart3'),
      },
      {
        label: '截肢部位4',
        value: this.formatValueForItem(item, 'AmputationPart4'),
      },
      {
        label: '截瘫平面',
        value: this.formatValueForItem(item, 'ParaplegicPlane'),
      },

      {
        label: '截瘫情况',
        value: this.formatValueForItem(item, 'ParaplegicSituation'),
      },
      {
        label: '老客户推荐',
        value: this.formatValueForItem(item, 'OldCustomer'),
      },
      {
        label: '决定权人',
        value: this.formatValueForItem(item, 'PowerPeople'),
      },
      {
        label: '决定权人电话',
        value: this.formatValueForItem(item, 'PowerPeopleTel'),
      },
      {
        label: '身份证号码',
        value: this.formatValueForItem(item, 'IDCard'),
      },
      {
        label: '所在单位',
        value: this.formatValueForItem(item, 'CompanyUnit'),
      },
      {
        label: '单位备注',
        value: this.formatValueForItem(item, 'CompanyRemark'),
      },
      {
        label: '固定电话',
        value: this.formatValueForItem(item, 'CustomerPhone'),
      },
      {
        label: '手机',
        value: this.formatValueForItem(item, 'CustomerTel'),
      },

      {
        label: '传真',
        value: this.formatValueForItem(item, 'FaxTel'),
      },
      {
        label: '所在省份',
        value: this.formatValueForItem(item, 'Province'),
      },
      {
        label: '所在城市',
        value: this.formatValueForItem(item, 'City'),
      },
      {
        label: '邮政编码',
        value: this.formatValueForItem(item, 'PostalCode'),
      },
      {
        label: '下次机会时间',
        value: this.formatValueForItem(item, 'NextTime'),
      },
      {
        label: '原系统标识',
        value: this.formatValueForItem(item, 'OldSystemID'),
      },
      {
        label: '原客户编码',
        value: this.formatValueForItem(item, 'OldCustomerCode'),
      },

      {
        label: '常驻地址',
        value: this.formatValueForItem(item, 'CustomerAddress'),
      },
      {
        label: '户籍地址',
        value: this.formatValueForItem(item, 'PermanentAddress'),
      },
      {
        label: '备注',
        value: this.formatValueForItem(item, 'Remark'),
      },
    ];

    this.app.getRootNavs()[0].push('ItemDetailPage', {
      title: '详情',
      data: data
    });
  }

  formatValueForItem(item, key) {
    if (!item) return '';

    if (!item[key]) return '';
    let value = item[key + 'Str'] || item[key] || '';
    let val = value.toString();
    return val.split('|')[0] || '';
  }

  newItem() {
    let modal = this.modalCtrl.create('MyCustomerFormPage');
    modal.onDidDismiss((data) => {
      if (data) {
        this.loadData();
      }
    });
    modal.present();
    // this.app.getRootNavs()[0].push('MyCustomerFormPage');
  }

  dataList: any = [];

}
