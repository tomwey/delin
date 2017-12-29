import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController, App } from 'ionic-angular';

/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {

  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public navParams: NavParams,
    private app: App,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
  }

  openItem(item) {
    let actionSheet = this.actionSheetCtrl.create({
      title: '',
      buttons: [
        {
          text: '产品详情',
          handler: () => {
            // console.log('Destructive clicked');
            this.gotoDetail(item);
          }
        },{
          text: 'BOM列表',
          handler: () => {
            // console.log('Archive clicked');
            this.gotoBOMList(item);
          }
        },{
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    }).present();
  }

  gotoDetail(item) {
    let data = [
      {
        label: '产品编号',
        value: '1.AK.AKAE1164',
      },
      {
        label: '产品名称',
        value: '合金五连杆气压膝奥索万力飞毛腿LP大腿',
      },
      {
        label: 'BOM代码',
        value: 'AKHJ1164',
      },
      {
        label: '规格型号',
        value: '自制',
      },
      {
        label: '物料代码',
        value: '1.A.AKHJ1164',
      },
      {
        label: '物料名称',
        value: '合金五连杆气压膝碳纤仿生储能脚',
      },
      {
        label: '单位',
        value: '具',
      },
      {
        label: '数量',
        value: '1',
      },
      {
        label: '产品性质',
        value: '半外购',
      },
      {
        label: '所属类别',
        value: '11合金五连杆气压膝关节',
      },
      {
        label: '成品率',
        value: '100',
      },
      {
        label: '使用状态',
        value: 'true',
      },
      {
        label: '工艺路线',
        value: '',
      },
      {
        label: '产品材质',
        value: '',
      },
    ];
    this.app.getRootNavs()[0].push('ItemDetailPage', { title: '产品详情', data: data });
  }

  gotoBOMList(item) {
    this.app.getRootNavs()[0].push('ProductBomListPage', item);
  }

  dataList: any = [
    {
      ID: '1.AK.AKTQ1344',
      name: '碳纤五连杆压膝耐低温莱邦弹性脚多功能踝',
      cata_name: '13碳纤五连杆气压膝关节',
      money: 102460,
      quantity: 1,
    },
    {
      ID: '1.AK.AKTQ1344',
      name: '碳纤五连杆压膝耐低温莱邦弹性脚多功能踝',
      cata_name: '13碳纤五连杆气压膝关节',
      money: 39640,
      quantity: 1,
    },
    {
      ID: '1.AK.AKTQ1344',
      name: '碳纤五连杆压膝耐低温莱邦弹性脚多功能踝',
      cata_name: '13碳纤五连杆气压膝关节',
      money: 3460,
      quantity: 1,
    },
    {
      ID: '1.AK.AKTQ1344',
      name: '碳纤五连杆压膝耐低温莱邦弹性脚多功能踝',
      cata_name: '13碳纤五连杆气压膝关节',
      money: 1580,
      quantity: 1,
    },
  ];

}
