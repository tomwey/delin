import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Utils } from '../../providers/Utils';
import { CRMService } from '../../services/crm.service';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { NativeService } from '../../providers/NativeService';
import { Events } from 'ionic-angular/util/events';

/**
 * Generated class for the MyCustomerFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-customer-form',
  templateUrl: 'my-customer-form.html',
})
export class MyCustomerFormPage {

  title: string = null;
  selectOptions: any = null;

  customer: any = {
    createtime: Utils.dateFormat(new Date()),
  };
  constructor(public navCtrl: NavController, 
    private crm: CRMService,
    private modalCtrl: ModalController,
    private viewCtrl: ViewController,
    private nativeService: NativeService,
    private events: Events,
    public navParams: NavParams) {
      if (this.navParams.data.item) {
        this.title = '编辑客户';
      } else {
        this.title = '新增客户';
      }
  }

  cityControl() {
    this.controls.forEach(element => {
      if (element.ID === 'city') {
        return element;
      }
    });
    return null;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyCustomerFormPage');
    this.events.subscribe('item:selected', (control) => {
      // this.handleSelectedItem(data);
      if (control.ID === 'province') {
        let code = control.value || '';
        code = code.split('|')[0];

        // 重置城市选择
        let control2 = this.cityControl();
        if (control2) {
          control2.value = null;
        }

        this.crm.getCitiesList(code, (data, error) => {
          console.log(data);
          console.log(error);
          if (data && data.DataList) {
            this.selectOptions['KHCS'] = data.DataList;
          }
          //   this.selectOptions['city'] = data.DataList;
          // } else {
          //   this.selectOptions['city'] = [];
          // }
        });
      }
    });
    this.loadData();
  }

  loadData() {
    this.crm.getCustomerUserBaseOptions((data, error) => {
      this.selectOptions = data;

      this.selectOptions.Sex = [
        {
          ConfigText: '男',
          ConfigValue: '1'
        },
        {
          ConfigText: '女',
          ConfigValue: '0'
        },
      ];
    });
  }

  controlSelect(ev) {
    let data: any = [];
    if (ev.type === 4) {
      let arr = this.selectOptions[ev.dsKey] || [];
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
    // console.log(this.customer);
    let params = {};
    this.controls.forEach(element => {
      params[element.ID.toLowerCase()] = element.value || '';
    // }
    
  });

    // for (const key in this.customer) {
    //   if (this.customer.hasOwnProperty(key)) {
    //     const element = this.customer[key];

    //     params[key] = element.value || element;
    //   }
    // }
    // console.log(params);
    this.crm.addCustomer(params, (data, error) => {
      // console.log(error);
      // console.log(data);
      if (error) {
        this.nativeService.showToast(error.message || error);
      } else {
        this.viewCtrl.dismiss(1);
      }
    });
  }

  // selectItem(field, id) {
  //   // console.log(this.selectOptions[id]);
  //   let item = this.customer[field];
    
  //   let data: any = [];

  //   if (id === 'XB') {
  //     data = [{label: '男', value: 1}, {label: '女', value: 0}];
  //   } else {
  //     this.selectOptions[id].forEach(element => {
  //       data.push({ label: element.ConfigText, value: element.ConfigValue });
  //     });
  //   }

  //   this.navCtrl.push('CommSelectPage', { field: field, selected: item, data: data, target:  });
  // }
// 
  // handleSelectedItem(selectedData) {
  //   if (selectedData) {
  //     this.customer[selectedData.field] = selectedData.selectedItem;
  //     // console.log(field);
  //     if (selectedData.field === 'province') {
  //       this.customer['city'] = null;
  //       this.crm.getCitiesList(selectedData.selectedItem.value, (data, error) => {
  //         // console.log(data);
  //         // console.log(error);
  //         if (data && data.DataList) {
  //           this.selectOptions['city'] = data.DataList;
  //         } else {
  //           this.selectOptions['city'] = [];
  //         }
  //       });
  //     }
  //   }
  // }

  controls: any = [
    {
      ID: 'createtime',
      type: 2,
      name: '制单时间',
      value: Utils.dateFormat(new Date()),
      disabled: true,
    },
    {
      ID: 'area',
      type: 2,
      name: '所属区域',
    },
    {
      ID: 'customernature',
      type: 4,
      name: '客户性质',
      dsKey: 'KHXZ',
      optionLabel: 'ConfigText',
      optionValue: 'ConfigValue',
    },
    {
      ID: 'visitingcycle',
      type: 2,
      name: '拜访周期',
    },
    {
      ID: 'customername',
      type: 2,
      name: '客户名称',
    },
    {
      ID: 'customertype',
      type: 4,
      name: '客户类别',
      dsKey: 'KHLB',
      optionLabel: 'ConfigText',
      optionValue: 'ConfigValue',
    },
    {
      ID: 'customerhospital',
      type: 2,
      name: '治疗医院',
    },
    {
      ID: 'nation',
      type: 4,
      name: '民族',
      dsKey: 'MZ',
      optionLabel: 'ConfigText',
      optionValue: 'ConfigValue',
    },
    {
      ID: 'amputationdate',
      type: 7,
      name: '截肢日期',
    },
    {
      ID: 'securityunit',
      type: 2,
      name: '社保单位',
    },
    {
      ID: 'sex',
      type: 4,
      name: '性别',
      dsKey: 'Sex',
      optionLabel: 'ConfigText',
      optionValue: 'ConfigValue',
    },
    {
      ID: 'reason',
      type: 4,
      name: '截肢原因',
      dsKey: 'SSYY',
      optionLabel: 'ConfigText',
      optionValue: 'ConfigValue',
    },
    {
      ID: 'commercialinsurance',
      type: 2,
      name: '商业保险',
    },
    {
      ID: 'birthday',
      type: 7,
      name: '出生日期',
    },
    {
      ID: 'amputationpart1',
      type: 4,
      name: '截肢部位1',
      dsKey: 'JZBW1',
      optionLabel: 'ConfigText',
      optionValue: 'ConfigValue',
    },
    {
      ID: 'amputationpart2',
      type: 4,
      name: '截肢部位2',
      dsKey: 'JZBW2',
      optionLabel: 'ConfigText',
      optionValue: 'ConfigValue',
    },
    {
      ID: 'amputationpart3',
      type: 4,
      name: '截肢部位3',
      dsKey: 'JZBW3',
      optionLabel: 'ConfigText',
      optionValue: 'ConfigValue',
    },
    {
      ID: 'amputationpart4',
      type: 4,
      name: '截肢部位4',
      dsKey: 'JZBW4',
      optionLabel: 'ConfigText',
      optionValue: 'ConfigValue',
    },
    {
      ID: 'paraplegicplane',
      type: 4,
      name: '截瘫平面',
      dsKey: 'JTPM',
      optionLabel: 'ConfigText',
      optionValue: 'ConfigValue',
    },
    {
      ID: 'paraplegicsituation',
      type: 4,
      name: '截瘫情况',
      dsKey: 'JTQK',
      optionLabel: 'ConfigText',
      optionValue: 'ConfigValue',
    },
    {
      ID: 'oldcustomer',
      type: 2,
      name: '老客户推荐',
    },
    {
      ID: 'powerpeople',
      type: 2,
      name: '决定权人',
    },
    {
      ID: 'powerpeopletel',
      type: 8,
      name: '决定权人电话',
      pattern: '[0-9]*'
    },
    {
      ID: 'idcard',
      type: 2,
      name: '身份证号',
    },
    {
      ID: 'companyunit',
      type: 2,
      name: '所在单位',
    },
    {
      ID: 'companyremark',
      type: 2,
      name: '单位备注',
    },
    {
      ID: 'customerphone',
      type: 2,
      name: '固定电话',
    },
    {
      ID: 'customertel',
      type: 8,
      name: '手机',
      pattern: '[0-9]*'
    },
    {
      ID: 'faxtel',
      type: 2,
      name: '传真',
    },
    {
      ID: 'province',
      type: 4,
      name: '所在省份',
      dsKey: 'KHSF',
      optionLabel: 'ConfigText',
      optionValue: 'ConfigValue',
    },
    {
      ID: 'city',
      type: 4,
      name: '所在城市',
      dsKey: 'KHCS',
      optionLabel: 'ConfigText',
      optionValue: 'ConfigValue',
    },
    {
      ID: 'postalcode',
      type: 8,
      name: '邮政编码',
      pattern: '[0-9]*'
    },
    {
      ID: 'nexttime',
      type: 7,
      name: '下次机会时间',
    },
    {
      ID: 'oldsystemid',
      type: 2,
      name: '原系统标识',
    },
    {
      ID: 'oldcustomercode',
      type: 2,
      name: '原客户编码',
    },
    {
      ID: 'customeraddress',
      type: 2,
      name: '常驻地址',
    },
    {
      ID: 'permanentaddress',
      type: 2,
      name: '户籍地址',
    },
    {
      ID: 'remark',
      type: 3,
      name: '备注',
    },
  ];

}
