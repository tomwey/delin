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

  viewItem(item) {
    // this.app.getRootNavs()[0].push('OrderFormPage');
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
