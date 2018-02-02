import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController,App } from 'ionic-angular';
import { CRMService } from '../../services/crm.service';
import { Events } from 'ionic-angular/util/events';
import { NativeService } from '../../providers/NativeService';

/**
 * Generated class for the PotentialCustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-potential-customer',
  templateUrl: 'potential-customer.html',
})
export class PotentialCustomerPage {

  constructor(public navCtrl: NavController,
    private actionSheetCtrl: ActionSheetController, 
    private app: App,
    private crm: CRMService,
    private nativeServ: NativeService,
    private events: Events,
    public navParams: NavParams) {
      this.events.subscribe('item:added', () => {
        this.loadData();
      });
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad PotentialCustomerPage');
    this.loadData();
  }

  loadData() {
    this.crm.GetCRMIntentCustomerList((data, error) => {
      if (data && data.DataList) {
        this.dataList = data.DataList;
        this.dataList.map(ele => {
          let temp = [];
          for (let i = 0; i < ele.Intimacy; i++) {
            temp.push('1');
          }
          ele.stars = temp;
          return ele;
        });
      } else {
        this.dataList = [];
      }
    });
  }

  openItem(item) {
    let actionSheet = this.actionSheetCtrl.create({
      title: '',
      buttons: [
        {
          text: '查看',
          handler: () => {
            // console.log('Archive clicked');
            // this.viewContact(item);
            this.viewItem(item);
          }
        },
        {
          text: '编辑',
          handler: () => {
            // console.log('Archive clicked');
            // this.editContact(item);
            this.editItem(item);
          }
        },
        {
          text: '删除',
          role: 'destructive',
          handler: () => {
            // console.log('Destructive clicked');
            // this.deleteContact(item);
            this.deleteItem(item);
          }
        },{
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  deleteItem(item) {
    this.crm.DeleteIntentCustomer(item.IntentCustomerCode, (data, error) => {
      if (error) {
        this.nativeServ.showToast(error.message || error);
      } else {
        this.loadData();
      }
    });
  }

  viewItem(item) {
    let data = [
      {
        label: '意向客户编号',
        value: item.IntentCustomerCode,
      },
      {
        label: '意向客户姓名',
        value: item.IntentCustomerName,
      },
      {
        label: '创建日期',
        value: item.CreateDateStr,
      },
      {
        label: '所属单位',
        value: item.Unit,
      },
      {
        label: '性别',
        value: item.Sex == 0 ? '女' : '男',
      },
      {
        label: '移动电话',
        value: item.MobilePhone,
      },
      {
        label: '所属区域',
        value: item.Area,
      },
      {
        label: '生日',
        value: item.BirthdayStr,
      },
      {
        label: '电子邮件',
        value: item.Email,
      },
      {
        label: '部门',
        value: item.Department,
      },
      {
        label: '联系电话',
        value: item.Tel,
      },
      {
        label: '爱好',
        value: item.Hobby,
      },
      {
        label: '职位',
        value: item.Position,
      },
      {
        label: '拜访周期',
        value: item.CalOnCycle,
      },
      {
        label: '亲密度',
        value: item.Intimacy,
      },
      {
        label: '备注',
        value: item.Remark,
      },
    ];
    this.app.getRootNavs()[0].push('ItemDetailPage', {
      title: '意向客户详情',
      data: data,
    })
  }

  editItem(item) {
    this.app.getRootNavs()[0].push('PotentialCustomerFormPage', { item: item });
  }

  newItem(item) {
    this.app.getRootNavs()[0].push('PotentialCustomerFormPage');
  }

  dataList: any = [
    // {
    //   name: '王宽',
    //   sex: '先生',
    //   mobile: '13987736334',
    //   area: '成都市区 A',
    //   area2: '水富家声医院',
    //   time: '2017-06-03',
    //   stars: ['1','1'],
    // },
    // {
    //   name: '陈曦',
    //   sex: '女士',
    //   mobile: '13987736334',
    //   area: '高县',
    //   area2: '高县中医院',
    //   time: '2017-06-03',
    //   stars: ['1'],
    // },
    // {
    //   name: '周建',
    //   sex: '先生',
    //   mobile: '13987736334',
    //   area: '自贡市区',
    //   area2: '自贡市第三人民医院',
    //   time: '2017-06-03',
    //   stars: ['1'],
    // },
    // {
    //   name: '闫从强',
    //   sex: '先生',
    //   mobile: '13987736334',
    //   area: '宜宾',
    //   area2: '宜宾市社保局',
    //   time: '2017-06-03',
    //   stars: ['1'],
    // },
  ];

}
