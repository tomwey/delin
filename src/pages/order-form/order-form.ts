import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ERPService } from '../../services/erp.service';
import { NativeService } from '../../providers/NativeService';

/**
 * Generated class for the OrderFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-form',
  templateUrl: 'order-form.html',
})
export class OrderFormPage {

  orderBaseData: any = {};

  item: any = null;
  title: any = null;

  constructor(public navCtrl: NavController, 
    private modalCtrl: ModalController,
    private erp: ERPService,
    private events: Events,
    private nativeService: NativeService,
    public navParams: NavParams) {
      if (this.navParams.data.item) {
        this.item = this.navParams.data.item;

        this.products = this.item.ProductList;
        this.payItems = this.item.PayDetailList;
        this.auditItems = this.item.YJFP;

        this.populateControlsData(this.baseControls);
        this.populateControlsData(this.yjfpControls);
        this.populateControlsData(this.yjfpBaseControls);
        this.populateControlsData(this.jjBaseControls);
        this.populateControlsData(this.jfControls);

        this.title = "编辑定单";
      } else {
        this.title = "新增定单";
      }
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad OrderFormPage');
    this.loadBaseData();
  }

  // getCurrentOption(arr, val) {
  //   // console.log(arr);
  //   arr.forEach(element => {
  //     console.log(element);
  //     console.log(val);
  //     console.log('-------------');
  //     let label = element.ConfigText || element.DepartmentName || element.EmpName;
  //     let value = element.ConfigValue || element.DepartmentID || element.EmpCode;
  //     if (value === val) {
  //       return { label: label, value: value };
  //     }
  //   });
  //   return null;
  // }

  populateControlsData(controls) {
    controls.forEach(element => {
      element.value = this.item[element.ID + 'Str'] || this.item[element.ID];
    });
  }

  loadBaseData() {
    this.erp.GetCreateOrderResult((data, error) => {
      // console.log(data);
      // console.log(error);
      this.orderBaseData = data || {};

      if (!error) {
        this.populateBaseData();
      }
      
    });
  }

  populateBaseData() {
    this.baseControls[0].value = this.orderBaseData.Creator;
    this.baseControls[1].value = this.orderBaseData.OrderTime; 
  }

  openItem(item) {
    let modal = this.modalCtrl.create('OrderProductItemFormPage', { item: item });
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
    let modal = this.modalCtrl.create('OrderProductItemFormPage');
    modal.onDidDismiss((data) => {
      if (data) {
        this.products.push(data);
      }
    });
    modal.present();
  }

  openPayItem(item) {
    let modal = this.modalCtrl.create('OrderPayItemFormPage', { item: item, payTypes: this.orderBaseData.PayTypes });
    modal.onDidDismiss((data) => {
      if (data) {
        let index = this.payItems.indexOf(item);
        if (index !== -1) {
          this.payItems.splice(index, 1, data);
        }
      }
    });
    modal.present();
  }

  removePayItem(event, item) {
    event.stopPropagation();

    let index = this.payItems.indexOf(item);
    if (index !== -1) {
      this.payItems.splice(index, 1);
    }
  }

  addPayItem() {
    let modal = this.modalCtrl.create('OrderPayItemFormPage', {payTypes: this.orderBaseData.PayTypes});
    modal.onDidDismiss((data) => {
      if (data) {
        this.payItems.push(data);
      }
    });
    modal.present();
  }

  openAuditItem(item) {
    let modal = this.modalCtrl.create('OrderAuditItemFormPage', { item: item, salesman: this.orderBaseData.SalesMans, ssbm: this.orderBaseData.SSBM });
    modal.onDidDismiss((data) => {
      if (data) {
        let index = this.auditItems.indexOf(item);
        if (index !== -1) {
          this.auditItems.splice(index, 1, data);
        }
      }
    });
    modal.present();
  }

  removeAuditItem(event, item) {
    event.stopPropagation();

    let index = this.auditItems.indexOf(item);
    if (index !== -1) {
      this.auditItems.splice(index, 1);
    }
  }

  addAuditItem() {
    let modal = this.modalCtrl.create('OrderAuditItemFormPage', {salesman: this.orderBaseData.SalesMans, ssbm: this.orderBaseData.SSBM});
    modal.onDidDismiss((data) => {
      if (data) {
        this.auditItems.push(data);
      }
    });
    modal.present();
  }

  controlSelect(ev) {
    let data: any = [];

    if (ev.ID === 'CustomerSex') {
      data = [{label: '男', value: '男|1'}, {label: '女', value: '女|0'}];
    } else if (ev.ID === 'SalesMan') {
      let arr = this.orderBaseData.SalesMans || [];
      arr.forEach(element => {
        data.push({label: element.EmpName, 
          value: `${element.EmpName}|${element.EmpCode}`});
      });
    } else if (ev.ID === 'DeskClerk') {
      let arr = this.orderBaseData.DeskClerks || [];
      arr.forEach(element => {
        data.push({label: element.EmpName, 
          value: `${element.EmpName}|${element.EmpCode}`});
      });
    } else if (ev.ID === 'OrderType') {
      let arr = this.orderBaseData.OrderTypes || [];
      arr.forEach(element => {
        data.push({label: element.ConfigText, 
          value: `${element.ConfigText}|${element.ConfigValue}`});
      });
    } else if (ev.ID === 'CustomerNation') { // 民族
      let arr = this.orderBaseData.Nations || [];
      arr.forEach(element => {
        data.push({label: element.ConfigText, 
          value: `${element.ConfigText}|${element.ConfigValue}`});
      });
    } else if (ev.ID === 'ProductUnit') { // 生产单位
      let arr = this.orderBaseData.ProductUnits || [];
      arr.forEach(element => {
        data.push({label: element.DepartmentName, 
          value: `${element.DepartmentName}|${element.DepartmentID}`});
      });
    } else if (ev.ID === 'IsExpenses') {
      data = [{label: '是', value: '是|1'}, {label: '否', value: '否|0'}];
    } /*else if (ev.ID === '') { // 业务员所属部门
      let arr = this.orderBaseData.SSBM || [];
      arr.forEach(element => {
        data.push({label: element.DepartmentName, value: element.DepartmentID});
      });
    } else if (ev.ID === '') {

    }*/

    this.navCtrl.push('CommonSelectPage', { data: data, control: ev });
  }

  populateParams1(array, params) {
    array.forEach(element => {
      let val = element.value || {};
      // console.log(val);

      if (val.label) {
        params[element.ID.toLowerCase()] = val.value;
      } else {
        params[element.ID.toLowerCase()] = val;
      }
      
    });
  }

  populateParams2(array, params, key) {
    let tempProducts = [];
    array.forEach(element => {
      let obj = {};
      for (const key in element) {
        if (key !== 'controls' && element.hasOwnProperty(key)) {
          const val = element[key];
          obj[key.toLowerCase()] = val.value || val;
        }
      }
      if (obj) {
        tempProducts.push(obj);
      }
      
    });

    params[key] = JSON.stringify(tempProducts);
  }

  save() {
    let params = {};

    this.populateParams1(this.baseControls, params);

    this.populateParams1(this.jfControls, params);

    this.populateParams1(this.jjBaseControls, params);

    this.populateParams1(this.yjfpBaseControls, params);

    this.populateParams1(this.yjfpControls, params);

    this.populateParams2(this.products, params, 'products');
    this.populateParams2(this.payItems, params, 'paydetails');
    this.populateParams2(this.auditItems, params, 'yjfp');

    // console.log(params);
    if (this.item) {
      params['orderno'] = this.item.OrderNo;
      this.erp.UpdateOrder(params, (data, error) => {
        this.handleSaveResult(2,error);
      });
    } else {
      this.erp.AddOrder(params, (data, error) => {
        this.handleSaveResult(1,error);
      });
    }
    
  }

  handleSaveResult(type, error) {
    if (!error) {
      this.events.publish('event:reload');
      
      this.navCtrl.pop();

    } else {
      this.nativeService.showToast(error.message || error);
    }
  }

  baseControls: any = [
    // {
    //   ID: 'OrderNo',
    //   type: 0,
    //   value: ''
    // },
    {
      ID: 'Creator',
      type: 2,
      name: '制单人',
      value: '',
      disabled: true,
    },
    {
      ID: 'OrderTime',
      type: 2,
      name: '制单时间',
      value: '',
      disabled: true,
    },
    {
      ID: 'CustomerName',
      type: 2,
      name: '客户姓名'
    },
    {
      ID: 'CustomerSex',
      type: 4,
      name: '客户性别'
    },
    {
      ID: 'SalesMan',
      type: 4,
      name: '业务员编号'
    },
    {
      ID: 'CustomerNation',
      type: 4,
      name: '客户民族'
    },
    {
      ID: 'CustomerIDCard',
      type: 2,
      name: '身份证号'
    },
    {
      ID: 'CustomerAddress',
      type: 2,
      name: '身份证地址'
    },
    {
      ID: 'CustomerPhone',
      type: 8,
      name: '手机号',
      pattern: '[0-9]*'
    },
    {
      ID: 'DeskClerk',
      type: 4,
      name: '接待人员'
    },
    {
      ID: 'CustomerRealName',
      type: 2,
      name: '更正客户姓名'
    },
    {
      ID: 'OrderType',
      type: 4,
      name: '订单类型'
    },
    {
      ID: 'AmountReceived',
      type: 8,
      name: '收款金额',
      pattern: '[0-9]*'
    },
    {
      ID: 'StoredValueCardBalance',
      type: 8,
      name: '储值卡余额',
      pattern: '[0-9]*'
    },
    {
      ID: 'Invoiced',
      type: 2,
      name: '已开发票'
    },
    {
      ID: 'SalesTopic',
      type: 2,
      name: '销售机会主题'
    },
    {
      ID: 'SalesSource',
      type: 2,
      name: '销售机会来源'
    },
    {
      ID: 'CustomerType',
      type: 2,
      name: '客户类型'
    },
    {
      ID: 'OrderApplyNo',
      type: 2,
      name: '采购申请单号'
    },
    {
      ID: 'CustomerCode',
      type: 2,
      name: '客户编号'
    },
    {
      ID: 'SocialUnit',
      type: 2,
      name: '社保单位'
    },
    {
      ID: 'AuditedApplyNo',
      type: 2,
      name: '审批单号'
    },
    {
      ID: 'NextVisitTime',
      type: 7,
      name: '下次机会时间'
    },
    {
      ID: 'HotelExpense',
      type: 8,
      name: '住宿费/天',
      pattern: '[0-9]*'
    },
    // {
    //   ID: 'ApplyType',
    //   type: 4,
    //   name: '优惠申请类型'
    // },
    {
      ID: 'ApplyRemark',
      type: 3,
      name: '优惠申请说明'
    },
  ];

  jfControls: any = [
    {
      ID: 'TotalPrice',
      type: 8,
      name: '协议总价',
      pattern: '[0-9]*'
    },
    {
      ID: 'SettlementAmount',
      type: 8,
      name: '结算金额',
      pattern: '[0-9]*'
    },
    {
      ID: 'Discount',
      type: 2,
      name: '折扣比例'
    },
    {
      ID: 'OrderAddress',
      type: 2,
      name: '交付地址'
    },
    {
      ID: 'ProductUnit',
      type: 4,
      name: '生产单位'
    },
    {
      ID: 'Subsidiary',
      type: 2,
      name: '协议补充条款'
    },
    {
      ID: 'Remark',
      type: 3,
      name: '备注'
    },
  ];

  jjBaseControls: any = [
    {
      ID: 'BonusRatio',
      type: 8,
      name: '奖金综合比例',
      pattern: '[0-9]*'
    },
    {
      ID: 'BonusProportionAdjustment',
      type: 8,
      name: '奖金比例调整',
      pattern: '[0-9]*'
    },
    {
      ID: 'BonusPrice',
      type: 8,
      name: '奖金总额',
      pattern: '[0-9]*'
    },
  ];

  yjfpControls: any = [
    {
      ID: 'PerformanceAdjustment',
      type: 8,
      name: '业绩调整',
      pattern: '[0-9]*'
    },
    {
      ID: 'PerformancePrice',
      type: 8,
      name: '业绩总额',
      pattern: '[0-9]*'
    },
    {
      ID: 'NotInPerformance',
      type: 8,
      name: '不计业绩总额',
      pattern: '[0-9]*'
    },
  ];

  yjfpBaseControls: any = [
    {
      ID: 'OrderPrice',
      type: 8,
      name: '定单收款额',
      pattern: '[0-9]*'
    },
    {
      ID: 'IsExpenses',
      type: 4,
      name: '是否报销'
    },
    {
      ID: 'PreTaxPrice',
      type: 8,
      name: '税前金额',
      pattern: '[0-9]*'
    },
    {
      ID: 'AfterTaxPrice',
      type: 8,
      name: '税后金额',
      pattern: '[0-9]*'
    },
    {
      ID: 'DepositReceived',
      type: 8,
      name: '已收定金',
      pattern: '[0-9]*'
    },
    {
      ID: 'OtherFee',
      type: 8,
      name: '其它费用',
      pattern: '[0-9]*'
    },
    {
      ID: 'Scale',
      type: 8,
      name: '比例%',
      pattern: '[0-9]*'
    },
    {
      ID: 'SaleRemark',
      type: 3,
      name: '情况说明',
    },
  ];

  products: any   = [];
  auditItems: any = [];
  payItems: any   = [];

}
