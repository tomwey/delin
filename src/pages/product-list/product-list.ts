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
    this.app.getRootNavs()[0].push('ProductDetailPage', item);
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
