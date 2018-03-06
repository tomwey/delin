import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { ERPService } from '../../services/erp.service';

/**
 * Generated class for the OrthoticsItemFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orthotics-item-form',
  templateUrl: 'orthotics-item-form.html',
})
export class OrthoticsItemFormPage {
  optionData: any = null;

  constructor(public navCtrl: NavController, 
    private viewCtrl: ViewController,
    // private events: Events,
    private erp: ERPService,
    public navParams: NavParams) {
      if (this.navParams.data.item) {
        // this.controls = this.navParams.data.item.controls;
        if (this.navParams.data.item.controls) {
          this.controls = this.navParams.data.item.controls;
        } else {
          this.controls.forEach(element => {
            element.value = this.navParams.data.item[element.ID + 'Str'] || this.navParams.data.item[element.ID];
          });
        }
      }

      this.optionData = this.navParams.data.optionData;
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad OrthoticsItemFormPage');
    this.loadProductList();
  }

  loadProductList() {
    this.erp.GetERPProductList('', (data, error) => {
      if (data && data.DataList) {
        this.products = data.DataList;
      } else {
        this.products = [];
      }
    });
  }

  controlSelect(ev) {
    let data: any = [];
    if (ev.type === 4) {
      let arr = this.optionData[ev.dsKey];
      arr.forEach(element => {
        data.push({label: element[ev.optionLabel], 
          value: `${element[ev.optionLabel]}|${element[ev.optionValue]}`});
      });
    }

    this.navCtrl.push('CommonSelectPage', { data: data, control: ev });
  }

  close() {
    this.viewCtrl.dismiss();
  }

  save() {
    let formData = {};
    
    let total = 0;

    this.controls.forEach(element => {
      // let val = element.value || {};
      formData[element.ID] = element.value || '';

      if (!element.value) {
        total++;
      }
    });

    if (total == this.controls.length) {
      return;
    }

    formData['controls'] = this.controls;

    this.viewCtrl.dismiss(formData);
  }

  products: any = [];

  controls: any = [
    {
      ID: 'ProductCode',
      type: 4,
      name: '产品编号',
    },
    {
      ID: 'ProductUnit',
      type: 4,
      name: '生产单位',
      dsKey: 'ProductUnits',
      optionLabel: 'DepartmentName',
      optionValue: 'DepartmentID',
    },
    {
      ID: 'PriceVersion',
      type: 2,
      name: '价格版本',
    },
    {
      ID: 'ProductKind',
      type: 4,
      name: '产品种类',
      dsKey: 'JXQCPZL',
      optionLabel: 'ConfigText',
      optionValue: 'ConfigValue',
    },
    {
      ID: 'CurrentPrice',
      type: 8,
      name: '价格',
      pattern: '[0-9]*'
    },
    {
      ID: 'ProductCount',
      type: 8,
      name: '数量',
      pattern: '[0-9]*'
    },
    {
      ID: 'HospitalName',
      type: 2,
      name: '医院产品名称',
    },
    {
      ID: 'HospitalCode',
      type: 2,
      name: '医院产品代码',
    },
    {
      ID: 'ProductsCertificate',
      type: 2,
      name: '产品注册证',
    },
    {
      ID: 'ProductsCertificateCode',
      type: 2,
      name: '产品注册证代码',
    },
    {
      ID: 'Ratio',
      type: 8,
      name: '比例',
      pattern: '[0-9]*'
    },
    {
      ID: 'ProductBonudsRate',
      type: 8,
      name: '产品奖金比例',
      pattern: '[0-9]*'
    },
    {
      ID: 'ProductBonuds',
      type: 8,
      name: '产品奖金',
      pattern: '[0-9]*'
    },
  ];

}
