import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController, App } from 'ionic-angular';
import { ERPService } from '../../services/erp.service';

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
    private erp: ERPService,
    private app: App,
  ) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ProductListPage');
    setTimeout(() => {
      this.loadData();
    }, 100);
  }

  loadData() {
    this.loading = true;
    this.erp.GetERPProductList('', (data, error) => {
      this.loading = false;
      this.error = error;

      if (data && data.DataList) {
        this.dataList = data.DataList;
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

  dataList: any = [];
  error: any = null;
  loading: boolean = false;

}
