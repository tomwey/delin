import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ERPService } from '../../services/erp.service';

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

  constructor(public navCtrl: NavController, 
    private modalCtrl: ModalController,
    private erp: ERPService,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad OrderFormPage');
    this.loadBaseData();
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
    let modal = this.modalCtrl.create('OrderPayItemFormPage', { item: item });
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
    let modal = this.modalCtrl.create('OrderPayItemFormPage');
    modal.onDidDismiss((data) => {
      if (data) {
        this.payItems.push(data);
      }
    });
    modal.present();
  }

  openAuditItem(item) {
    let modal = this.modalCtrl.create('OrderAuditItemFormPage', { item: item });
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
    let modal = this.modalCtrl.create('OrderAuditItemFormPage');
    modal.onDidDismiss((data) => {
      if (data) {
        this.auditItems.push(data);
      }
    });
    modal.present();
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
      name: '客户名族'
    },
    {
      ID: 'CustomerIdCard',
      type: 2,
      name: '身份证号'
    },
    {
      ID: 'Customeraddress',
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
      type: 4,
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
      type: 2,
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
      ID: 'PretaxPrice',
      type: 8,
      name: '税前金额',
      pattern: '[0-9]*'
    },
    {
      ID: 'AftertaxPrice',
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
