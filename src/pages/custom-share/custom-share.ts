import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App, ActionSheetController, ModalController } from 'ionic-angular';
import { CRMService } from '../../services/crm.service';
import { Events } from 'ionic-angular/util/events';
import { NativeService } from '../../providers/NativeService';

/**
 * Generated class for the CustomSharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-custom-share',
  templateUrl: 'custom-share.html',
})
export class CustomSharePage {

  constructor(public navCtrl: NavController,
      private app: App,
      private actionSheetCtrl: ActionSheetController,
      private crm: CRMService,
      private nativeServ: NativeService,
      private events: Events,
      private modalCtrl: ModalController,
      public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad CustomSharePage');
    this.loadData();
    this.events.subscribe('customer:changed', () => {
      this.loadData();
    });
  }

  loadData() {
    this.crm.getCRMCustomerChangeListResult((data, error) => {
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
        // {
        //   text: '发送',
        //   handler: () => {
        //     // console.log('Archive clicked');
        //     // this.viewContact(item);
        //     this.sendItem(item);
        //   }
        // },
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

  // sendItem(item) {

  // }

  deleteItem(item) {
    this.crm.deleteCRMCustomerChange(item.CustomerChangeID, (data,error) => {
      if (error) {
        this.nativeServ.showToast(error.message || error);
      } else {
        this.nativeServ.showToast('删除成功');
        this.loadData();
      }
    })
  }

  editItem(item) {
    this.app.getRootNavs()[0].push('CustomerShareFormPage', {item: item, isNew: 0});
  }

  viewItem(item) {
    this.crm.getCRMCustomerChangeModel(item.CustomerChangeID, (data, error) => {
      if (data && data.Model) {
        let temp = [
          {
            label: '客户姓名',
            value: data.Model.CustomerName
          },

          {
            label: '客户电话',
            value: data.Model.CustomerPhone
          },
          {
            label: '客户编号',
            value: data.Model.CustomerCode
          },
          {
            label: '客户性别',
            value: data.Model.CustomerSex == 0 ? '女' : '男'
          },
          {
            label: '分配区域',
            value: data.Model.Area
          },
          {
            label: '客户病况',
            value: data.Model.CustomerSituation
          },
          {
            label: '常住地址',
            value: data.Model.CustomerAddress
          },
          {
            label: '转移原因',
            value: data.Model.ChangeReason
          },
          {
            label: '业绩分配',
            value: data.Model.PerformanceDistribution
          },
          {
            label: '详细地址',
            value: data.Model.Address
          },
          {
            label: '联系方式',
            value: data.Model.Tel
          },
        ];

        this.app.getRootNavs()[0].push('ItemDetailPage', {
          title: '客户转移共享',
          data: temp,
        });
      } else {
        this.nativeServ.showToast('获取转移信息失败');
      }
      
    })
    
  }

  newItem() {
    let modal = this.modalCtrl.create('SelectCustomerPage');
    modal.onDidDismiss((data) => {
      if (data) {
        this.app.getRootNavs()[0].push('CustomerShareFormPage', {item: data, isNew: 1});
      }
    });
    modal.present();
  }

  dataList: any = [];

}
