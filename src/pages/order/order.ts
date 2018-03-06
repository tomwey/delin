import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ActionSheetController, Events } from 'ionic-angular';
import { ERPService } from '../../services/erp.service';
import { NativeService } from '../../providers/NativeService';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  constructor(public navCtrl: NavController, 
    private actionSheetCtrl: ActionSheetController,
    private app: App,
    private erp: ERPService,
    private events: Events,
    private nativeService: NativeService,
    public navParams: NavParams) {
      this.events.subscribe('event:reload', () => {
        this.loadData();
      });
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad OrderPage');
    this.loadData();
  }

  loadData() {
    this.loading = true;
    this.erp.GetOrderList((data, error) => {
      // console.log(data);
      this.loading = false;
      this.error = error;
      if (data && data.DataList) {
        this.dataList = data.DataList;
      } else {
        this.dataList = [];
      }
      // console.log(error);
    });
  }

  openItem(item) {
    let actionSheet = this.actionSheetCtrl.create({
      title: '',
      buttons: [
        /*{
          text: '发送',
          handler: () => {
            console.log('Destructive clicked');
          }
        },*/{
          text: '查看',
          handler: () => {
            // console.log('Archive clicked');
            this.viewItem(item);
          }
        },
        {
          text: '编辑',
          handler: () => {
            // console.log('Destructive clicked');
            this.editItem(item);
          }
        },{
          text: '删除',
          role: 'destructive',
          handler: () => {
            // console.log('Archive clicked');
            this.deleteItem(item);
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    }).present();
  }

  formatValueForItem(item, key) {
    if (!item) return '';

    if (!item[key]) return '';

    let val = item[key].toString();
    return val.split('|')[0] || '';
  }

  viewItem(item) {
    // this.app.getRootNavs()[0].push('OrderFormPage');
    let data = [
      {
        label: '订单号',
        value: item.OrderNo,
      },
      {
        label: '修改次数',
        value: item.OrderTimes,
      },
      {
        label: '制单时间',
        value: item.OrderTime,
      },
      {
        label: '制单人',
        value: item.EmpCode,
      },
      {
        label: '客户姓名',
        value: item.CustomerName,
      },
      {
        label: '客户性别',
        value: this.formatValueForItem(item, 'CustomerSex'),
      },
      {
        label: '业务员',
        value: this.formatValueForItem(item, 'SalesMan'),
      },
      {
        label: '客户民族',
        value: this.formatValueForItem(item, 'CustomerNation'),
      },
      {
        label: '身份证号',
        value: item.CustomerIDCard,
      },
      {
        label: '身份证地址',
        value: item.CustomerAddress,
      },
      {
        label: '手机号',
        value: item.CustomerPhone,
      },
      {
        label: '接待人员',
        value: this.formatValueForItem(item, 'DeskClerk'),
      },
      {
        label: '更正客户姓名',
        value: item.CustomerRealName,
      },
      {
        label: '定单类型',
        value: this.formatValueForItem(item, 'OrderType'),
      },
      {
        label: '收款金额',
        value: item.AmountReceived,
      },
      {
        label: '储值卡余额',
        value: item.StoredValueCardBalance,
      },
      {
        label: '已开发票',
        value: item.Invoiced,
      },
      {
        label: '销售机会主题',
        value: item.SalesTopic,
      },
      {
        label: '销售机会来源',
        value: item.SalesSource,
      },
      {
        label: '客户类型',
        value: item.CustomerType,
      },
      {
        label: '采购申请单号',
        value: item.OrderApplyNo,
      },
      {
        label: '客户编码',
        value: this.formatValueForItem(item, 'CustomerCode'),
      },
      {
        label: '社保单位',
        value: this.formatValueForItem(item, 'SocialUnit'),
      },
      {
        label: '审批单号',
        value: this.formatValueForItem(item, 'AuditedApplyNo'),
      },
      {
        label: '下次机会时间',
        value: this.formatValueForItem(item, 'NextVisitTime'),
      },
      {
        label: '住宿费/天',
        value: this.formatValueForItem(item, 'HotelExpense'),
      },
      {
        label: '优惠申请说明',
        value: this.formatValueForItem(item, 'ApplyRemark'),
      },
      {
        label: '协议总价',
        value: this.formatValueForItem(item, 'TotalPrice'),
      },
      {
        label: '结算金额',
        value: this.formatValueForItem(item, 'SettlementAmount'),
      },
      {
        label: '折扣比例',
        value: this.formatValueForItem(item, 'Discount'),
      },
      {
        label: '交付地址',
        value: this.formatValueForItem(item, 'OrderAddress'),
      },
      {
        label: '生产单位',
        value: this.formatValueForItem(item, 'ProductUnit'),
      },
      {
        label: '生产单位名称',
        value: this.formatValueForItem(item, 'ProductUnitName'),
      },
      {
        label: '协议补充条款',
        value: this.formatValueForItem(item, 'Subsidiary'),
      },
      {
        label: '备注',
        value: this.formatValueForItem(item, 'Remark'),
      },
      {
        label: '定单状态',
        value: this.formatValueForItem(item, 'OrderStateStr'),
      },
      {
        label: '定单收款额',
        value: this.formatValueForItem(item, 'OrderPrice'),
      },
      {
        label: '是否报销',
        value: this.formatValueForItem(item, 'IsExpenses'),
      },
      {
        label: '税前金额',
        value: this.formatValueForItem(item, 'PreTaxPrice'),
      },
      {
        label: '税后金额',
        value: this.formatValueForItem(item, 'AfterTaxPrice'),
      },
      {
        label: '已收定金',
        value: this.formatValueForItem(item, 'DepositReceived'),
      },
      {
        label: '其他费用',
        value: this.formatValueForItem(item, 'OtherFee'),
      },
      {
        label: '比例',
        value: this.formatValueForItem(item, 'Scale'),
      },
      {
        label: '情况说明',
        value: this.formatValueForItem(item, 'SaleRemark'),
      },
      {
        label: '奖金综合比例',
        value: this.formatValueForItem(item, 'BonusRatio'),
      },
      {
        label: '奖金比例调整',
        value: this.formatValueForItem(item, 'BonusProportionAdjustment'),
      },
      {
        label: '奖金总额',
        value: this.formatValueForItem(item, 'BonusPrice'),
      },
      {
        label: '业绩调整',
        value: this.formatValueForItem(item, 'PerformanceAdjustment'),
      },
      {
        label: '业绩总额',
        value: this.formatValueForItem(item, 'PerformancePrice'),
      },
      {
        label: '不计业绩总额',
        value: this.formatValueForItem(item, 'NotInPerformance'),
      }
    ];

    // 额外的数据
    let data1 = item.ProductList || [];
    let data2 = item.PayDetailList || [];
    let data3 = item.YJFP || [];

    let extraData = [];
    if (data1.length > 0) {
      extraData.push(
        {
          title: '产品列表',
          data: data1,
          labelKey: 'ProductName',
        });
    }

    if (data2.length > 0) {
      extraData.push(
        {
          title: '付款明细',
          data: data2,
          labelKey: 'PayDetailName',
        });
    }

    if (data3.length > 0) {
      extraData.push(
        {
          title: '业绩分配',
          data: data3,
          labelKey: 'PayDetailName',
        });
    }

    this.app.getRootNavs()[0].push('ItemDetailPage', {
      title: '借款单详情',
      data: data,
      extraData: extraData,
    })
  }

  editItem(item) {
    this.app.getRootNavs()[0].push('OrderFormPage', {item: item});
  }

  deleteItem(item) {
    this.erp.DeleteOrder(item.OrderNo, (data, error) => {
      if (!error) {
        this.nativeService.showToast('删除成功!');
        this.loadData();
      } else {
        this.nativeService.showToast(error.message || error);
      }
    });
  }

  newItem() {
    this.app.getRootNavs()[0].push('OrderFormPage');
  }

  error: any = null;
  loading: boolean = false;

  dataList: any = [
  ];
}
