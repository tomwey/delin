import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController,App } from 'ionic-angular';

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
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad PotentialCustomerPage');
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

  viewItem(item) {
    let data = [
      {
        label: '制单时间',
        value: '',
      },
      {
        label: '拜访日期',
        value: '',
      },
      {
        label: '拜访类别',
        value: '',
      },
      {
        label: '拜访人',
        value: '',
      },
      {
        label: '协作人员',
        value: '',
      },
      {
        label: '洽谈情况',
        value: '',
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
    {
      name: '王宽',
      sex: '先生',
      mobile: '13987736334',
      area: '成都市区 A',
      area2: '水富家声医院',
      time: '2017-06-03',
      stars: ['1','1'],
    },
    {
      name: '陈曦',
      sex: '女士',
      mobile: '13987736334',
      area: '高县',
      area2: '高县中医院',
      time: '2017-06-03',
      stars: ['1'],
    },
    {
      name: '周建',
      sex: '先生',
      mobile: '13987736334',
      area: '自贡市区',
      area2: '自贡市第三人民医院',
      time: '2017-06-03',
      stars: ['1'],
    },
    {
      name: '闫从强',
      sex: '先生',
      mobile: '13987736334',
      area: '宜宾',
      area2: '宜宾市社保局',
      time: '2017-06-03',
      stars: ['1'],
    },
  ];

}
