import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ActionSheetController, AlertController, Events } from 'ionic-angular';
import { ERPService } from '../../services/erp.service';
import { NativeService } from '../../providers/NativeService';

/**
 * Generated class for the OrthoticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orthotics',
  templateUrl: 'orthotics.html',
})
export class OrthoticsPage {

  constructor(public navCtrl: NavController, 
    private actionSheetCtrl: ActionSheetController,
    private app: App,
    private erp: ERPService,
    private nativeService: NativeService,
    private events: Events,
    private alertCtrl: AlertController,
    public navParams: NavParams) {
      this.events.subscribe('event:reload', () => {
        this.loadData();
      });
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad OrthoticsPage');
    this.loadData();
  }

  loadData() {
    this.loading = true;

    this.erp.GetJXQSalesList((data, error) => {
      this.error = error;
      this.loading = false;
      
      if (data && data.DataList) {
        this.dataList = data.DataList;
      } else {
        this.dataList = [];
      }
    });
  }

  openItem(item)
  {
    let actionSheet = this.actionSheetCtrl.create({
      title: '',
      buttons: [
        // {
        //   text: '发送',
        //   handler: () => {
        //     // console.log('Archive clicked');
        //     // this.viewItem(item);
        //   }
        // },
        {
          text: '查看',
          handler: () => {
            // console.log('Archive clicked');
            // this.editItem(item);
            this.viewItem(item);
          }
        },
        {
          text: '编辑',
          handler: () => {
            // console.log('Archive clicked');
            // this.viewItem(item);
            this.editItem(item);
          }
        },
        // {
        //   text: '改单',
        //   handler: () => {
        //     // console.log('Archive clicked');
        //     // this.editItem(item);
        //     this.changeItem(item);
        //   }
        // },
        {
          text: '退单',
          handler: () => {
            // console.log('Archive clicked');
            // this.editItem(item);
            this.backItem(item);
          }
        },
        {
          text: '删除',
          role: 'destructive',
          handler: () => {
            // console.log('Destructive clicked');
            // this.deleteItem(item);
            this.deleteItem(item);
          }
        },{
          text: '取消',
          role: 'cancel',
          handler: () => {
            // console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  newItem() {
    this.app.getRootNavs()[0].push('OrthoticsFormPage');
  }

  editItem(item) {
    this.app.getRootNavs()[0].push('OrthoticsFormPage', {item: item});
  }

  formatValueForItem(item, key) {
    if (!item) return '';

    if (!item[key]) return '';
    let value = item[key + 'Str'] || item[key] || '';
    let val = value.toString();
    return val.split('|')[0] || '';
  }

  viewItem(item) {
    let data = [
      {
        label: '销售单号',
        value: this.formatValueForItem(item, 'SalesOrderNo'),
      },
      {
        label: '销售单次数',
        value: this.formatValueForItem(item, 'SalesOrderTimes'),
      },
      {
        label: '制单时间',
        value: this.formatValueForItem(item, 'SalesOrderTimeStr'),
      },
      {
        label: '创建人',
        value: this.formatValueForItem(item, 'CreateEmp'),
      },
      {
        label: '医生',
        value: this.formatValueForItem(item, 'Doctor'),
      },
      {
        label: '业务员',
        value: this.formatValueForItem(item, 'SalesEmp'),
      },
      {
        label: '医院（合作单位）',
        value: this.formatValueForItem(item, 'ContactCorporation'),
      },
      {
        label: '付款方',
        value: this.formatValueForItem(item, 'Payer'),
      },
      {
        label: '付款方式',
        value: this.formatValueForItem(item, 'PayType'),
      },
      {
        label: '技术员',
        value: this.formatValueForItem(item, 'Technician'),
      },
      {
        label: '科室/病区',
        value: this.formatValueForItem(item, 'Area'),
      },
      {
        label: '床位',
        value: this.formatValueForItem(item, 'Berth'),
      },
      {
        label: '客户名字',
        value: this.formatValueForItem(item, 'CustomerName'),
      },
      {
        label: '联系电话',
        value: this.formatValueForItem(item, 'CustomerTel'),
      },
      {
        label: '联系地址',
        value: this.formatValueForItem(item, 'CustomerAddress'),
      },
      {
        label: '客户性别',
        value: this.formatValueForItem(item, 'CustomerSex'),
      },
      {
        label: '医学意见',
        value: this.formatValueForItem(item, 'MedicalOpinion'),
      },
      {
        label: '业务所属部门',
        value: this.formatValueForItem(item, 'Salesdepartment'),
      },
      {
        label: '疾病名称',
        value: this.formatValueForItem(item, 'IllName'),
      },
      {
        label: '已开发票',
        value: this.formatValueForItem(item, 'Invoiced'),
      },

      {
        label: '仓库单据',
        value: this.formatValueForItem(item, 'WarehouseDocuments'),
      },
      {
        label: '收款总额',
        value: this.formatValueForItem(item, 'Prices'),
      },
      {
        label: '发票时间',
        value: this.formatValueForItem(item, 'InvoicedTime'),
      },
      {
        label: '矫形器类型',
        value: this.formatValueForItem(item, 'JXQType'),
      },
      {
        label: '医院欠款情况',
        value: this.formatValueForItem(item, 'HospitalArrears'),
      },
      {
        label: '备注',
        value: this.formatValueForItem(item, 'Remark'),
      },
      {
        label: '退单原因',
        value: this.formatValueForItem(item, 'BackReason'),
      },
      {
        label: '成交价格',
        value: this.formatValueForItem(item, 'CurrentPrice'),
      },
      {
        label: '折扣',
        value: this.formatValueForItem(item, 'Discount'),
      },
      {
        label: '预约试穿时间',
        value: this.formatValueForItem(item, 'TryOutTime'),
      },
      {
        label: '产品签收',
        value: this.formatValueForItem(item, 'Receiver'),
      },
      {
        label: '发票邮寄地址',
        value: this.formatValueForItem(item, 'InvoiceAddress'),
      },
      {
        label: '产品邮寄地址',
        value: this.formatValueForItem(item, 'ProductAddress'),
      },
      {
        label: '发票签收',
        value: this.formatValueForItem(item, 'InvoiceReceiver'),
      },
      {
        label: '客户签字',
        value: this.formatValueForItem(item, 'CustomerSignature'),
      },
      {
        label: '奖金综合比例',
        value: this.formatValueForItem(item, 'BonusRatio'),
      },
      {
        label: '奖金总额',
        value: this.formatValueForItem(item, 'BonusMoney'),
      },
      {
        label: '生产单位',
        value: this.formatValueForItem(item, 'ProductUnit'),
      },
      {
        label: '发票开具要求',
        value: this.formatValueForItem(item, 'InvoiceRequirements'),
      },
      {
        label: '测量情况',
        value: this.formatValueForItem(item, 'TestSituation'),
      },
      {
        label: '销售单状态',
        value: this.formatValueForItem(item, 'SalesOrderStateStr'),
      },
    ];

      this.app.getRootNavs()[0].push('ItemDetailPage', {
        title: '矫形器详情',
        data: data
      });
  }

  changeItem(item) {
    
  }

  doBackItem(data,item) {
    this.erp.BackJXQSalesOrder(item.SalesOrderNo, data.reason, (data, error) => {
      if (!error) {
        this.nativeService.showToast('退单成功!');
        this.loadData();
      } else {
        this.nativeService.showToast(error.message || error);
      }
    });
  }

  backItem(item) {
    
    this.alertCtrl.create({
      title: '确认退单',
      message: '输入退单原因确认退单',
      inputs: [
        {
          name: 'reason',
          placeholder: '退单原因'
        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            // console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: data => {
            // console.log('Saved clicked');
            // console.log(data);
            this.doBackItem(data,item);
          }
        }
      ]
    }).present();
  }

  deleteItem(item) {
    this.erp.DeleteJXQSalesOrder(item.SalesOrderNo, (data, error) => {
      if (!error) {
        this.nativeService.showToast('删除成功!');
        this.loadData();
      } else {
        this.nativeService.showToast(error.message || error);
      }
    });
  }

  dataList: any = [
    // {
    //   ID: 'jxqsales2017000049',
    //   type: '新增',
    //   name: 'ML 可调式头颈胸支架',
    //   mode: '3.ML.1.1-1001',
    //   money: 2180.23,
    //   state: 'approving',
    //   state_name: '审核中',
    // },
    // {
    //   ID: 'jxqsales2017000049',
    //   type: '新增',
    //   name: 'ML 可调式头颈胸支架',
    //   mode: '3.ML.1.1-1001',
    //   money: 1920,
    //   state: 'approved',
    //   state_name: '已审核'
    // },
  ];
  error: any = null;
  loading: boolean = false;

}
