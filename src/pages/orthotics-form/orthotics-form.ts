import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Events } from 'ionic-angular';
import { ERPService } from '../../services/erp.service';
import { NativeService } from '../../providers/NativeService';

/**
 * Generated class for the OrthoticsFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orthotics-form',
  templateUrl: 'orthotics-form.html',
})
export class OrthoticsFormPage {

  item: any = null;
  title: any = null;

  baseData: any = {};

  constructor(public navCtrl: NavController, 
    private modalCtrl: ModalController,
    private erp: ERPService,
    private events: Events,
    private nativeService: NativeService,
    public navParams: NavParams) {
      if (this.navParams.data.item) {
        this.item = this.navParams.data.item;

        this.products = this.item.Products || [];
        // this.payItems = this.item.PayDetailList;
        // this.auditItems = this.item.YJFP;

        this.populateControlsData(this.baseControls);
        this.populateControlsData(this.jfControls);

        this.title = "编辑矫形器资料";
      } else {
        this.title = "新增矫形器";
      }
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad OrthoticsFormPage');
    this.loadBaseData();
  }

  loadBaseData() {
    this.erp.GetCreateJXQSales((data, error) => {
      this.baseData = data || {};
      this.baseData.Sexes = [
        {
          ConfigText: '男',
          ConfigValue: '1'
        },
        {
          ConfigText: '女',
          ConfigValue: '0'
        },
      ];
      if (!error) {
        this.populateBaseData();
      }
    });
  }

  populateBaseData() {
    this.baseControls[0].value = this.baseData.EmpName;
    this.baseControls[1].value = this.baseData.CreateTime; 
  }

  populateControlsData(controls) {
    controls.forEach(element => {
      element.value = this.item[element.ID + 'Str'] || this.item[element.ID];
    });
  }

  controlSelect(ev) {
    let data: any = [];
    if (ev.type === 4) {
      let arr = this.baseData[ev.dsKey] || [];
      arr.forEach(element => {
        data.push({label: element[ev.optionLabel], 
          value: `${element[ev.optionLabel]}|${element[ev.optionValue]}`});
      });
    }

    this.navCtrl.push('CommonSelectPage', { data: data, control: ev });
  }

  openItem(item) {
    let modal = this.modalCtrl.create('OrthoticsItemFormPage', { item: item, optionData: this.baseData });
    modal.onDidDismiss((data) => {
      if (data) {
        let index = this.products.indexOf(item);
        if (index !== -1) {
          this.products.splice(index, 1, data);
        }
      }
    });
    modal.present();
  }

  removeItem(event, item) {
    event.stopPropagation();

    let index = this.products.indexOf(item);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  addItem() {
    let modal = this.modalCtrl.create('OrthoticsItemFormPage', {optionData: this.baseData});
    modal.onDidDismiss((data) => {
      if (data) {
        this.products.push(data);
      }
    });
    modal.present();
  }

  save() {
    let params = {};

    this.populateParams1(this.baseControls, params);

    this.populateParams1(this.jfControls, params);

    this.populateParams2(this.products, params, 'products');

    if (this.item) {
      params['salesorderno'] = this.item.OrderNo;
      console.log(params);

      this.erp.UpdateJXQSalesOrder(params, (data, error) => {
        this.handleSaveResult(2,error);
      });
    } else {
      console.log(params);
      this.erp.AddJXQSalesOrder(params, (data, error) => {
        this.handleSaveResult(1,error);
      });
    }
  }

  populateParams1(array, params) {
    array.forEach(element => {
        params[element.ID.toLowerCase()] = element.value || '';
      // }
      
    });
  }

  populateParams2(array, params, key) {
    // console.log(array);

    let tempProducts = [];
    array.forEach(element => {
      let obj = {};
      for (const key in element) {
        if (key !== 'controls' && element.hasOwnProperty(key)) {
          // const val = element[key];
          // if (val) {
            obj[key.toLowerCase()] = element[key];//val.value || val;
          // }
        }
      }
      if (obj) {
        tempProducts.push(obj);
      }
      
    });

    params[key] = JSON.stringify(tempProducts);
  }

  handleSaveResult(type, error) {
    if (!error) {
      this.events.publish('event:reload');
      
      this.navCtrl.pop();

    } else {
      this.nativeService.showToast(error.message || error);
    }
  }

  products: any = [];
  baseControls: any = [
    // {
    //   ID: 'OrderNo',
    //   type: 0,
    //   value: ''
    // },
    {
      ID: 'CreateEmp',
      type: 2,
      name: '制单人',
      value: '',
      disabled: true,
    },
    {
      ID: 'SalesOrderTime',
      type: 2,
      name: '制单时间',
      value: '',
      disabled: true,
    },
    {
      ID: 'Doctor',
      type: 4,
      name: '医生',
      dsKey: 'Doctors',
      optionLabel: 'ConfigText',
      optionValue: 'ConfigValue',
    },
    {
      ID: 'SalesEmp',
      type: 4,
      name: '业务员',
      dsKey: 'SalesMans',
      optionLabel: 'EmpName',
      optionValue: 'EmpCode',
    },
    {
      ID: 'ContactCorporation',
      type: 4,
      name: '医院（合作单位）',
      dsKey: 'Hospitals',
      optionLabel: 'ConfigText',
      optionValue: 'ConfigValue',
    },
    {
      ID: 'Payer',
      type: 4,
      name: '付款方',
      dsKey: 'PayMans',
      optionLabel: 'ConfigText',
      optionValue: 'ConfigValue',
    },
    {
      ID: 'PayType',
      type: 4,
      name: '付款方式',
      dsKey: 'PayTypes',
      optionLabel: 'ConfigText',
      optionValue: 'ConfigValue',
    },
    {
      ID: 'Technician',
      type: 4,
      name: '技术员',
      dsKey: 'FZJSY',
      optionLabel: 'EmpName',
      optionValue: 'EmpCode',
    },
    {
      ID: 'Area',
      type: 2,
      name: '科室/病区'
    },
    {
      ID: 'Berth',
      type: 2,
      name: '床位'
    },
    {
      ID: 'CustomerName',
      type: 2,
      name: '客户姓名'
    },
    {
      ID: 'CustomerTel',
      type: 8,
      name: '联系电话',
      pattern: '[0-9]*'
    },
    {
      ID: 'CustomerAddress',
      type: 2,
      name: '联系地址'
    },
    {
      ID: 'CustomerSex',
      type: 4,
      name: '客户性别',
      dsKey: 'Sexes',
      optionLabel: 'ConfigText',
      optionValue: 'ConfigValue',
    },
    {
      ID: 'MedicalOpinion',
      type: 2,
      name: '医学意见'
    },
    {
      ID: 'Salesdepartment',
      type: 2,
      name: '业务所属部门'
    },
    {
      ID: 'IllName',
      type: 2,
      name: '疾病名称'
    },
    {
      ID: 'Invoiced',
      type: 2,
      name: '已开发票'
    },
    {
      ID: 'WarehouseDocuments',
      type: 2,
      name: '仓库单据'
    },
    {
      ID: 'Prices',
      type: 8,
      name: '收款总额',
      pattern: '[0-9]*'
    },
    {
      ID: 'InvoicedTime',
      type: 7,
      name: '发票时间'
    },
    {
      ID: 'JXQType',
      type: 4,
      name: '矫形器类型',
      dsKey: 'JXQTypes',
      optionLabel: 'ConfigText',
      optionValue: 'ConfigValue',
    },
    {
      ID: 'HospitalArrears',
      type: 2,
      name: '医院欠款情况'
    },
    {
      ID: 'Remark',
      type: 3,
      name: '备注'
    },
  ];

  jfControls: any = [
    {
      ID: 'CurrentPrice',
      type: 8,
      name: '成交价格',
      pattern: '[0-9]*'
    },
    {
      ID: 'Discount',
      type: 8,
      name: '折扣',
      pattern: '[0-9]*'
    },
    {
      ID: 'TryOutTime',
      type: 7,
      name: '预约试穿时间'
    },
    {
      ID: 'Receiver',
      type: 2,
      name: '产品签收'
    },
    {
      ID: 'InvoiceAddress',
      type: 2,
      name: '发票邮寄地址'
    },
    {
      ID: 'ProductAddress',
      type: 2,
      name: '产品邮寄地址'
    },
    {
      ID: 'InvoiceReceiver',
      type: 2,
      name: '发票签收'
    },
    {
      ID: 'CustomerSignature',
      type: 2,
      name: '客户签字'
    },
    {
      ID: 'BonusRatio',
      type: 8,
      name: '奖金综合比例',
      pattern: '[0-9]*'
    },
    {
      ID: 'BonusMoney',
      type: 8,
      name: '奖金总额',
      pattern: '[0-9]*'
    },
    {
      ID: 'ProductUnit',
      type: 2,
      name: '生产单位'
    },
    {
      ID: 'InvoiceRequirements',
      type: 2,
      name: '发票开具要求'
    },
    {
      ID: 'TestSituation',
      type: 2,
      name: '测量情况'
    },
  ];

}
