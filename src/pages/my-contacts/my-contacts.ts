import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, App } from 'ionic-angular';
import { Events } from 'ionic-angular/util/events';
import { ERPService } from '../../services/erp.service';
import { NativeService } from '../../providers/NativeService';

/**
 * Generated class for the MyContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-contacts',
  templateUrl: 'my-contacts.html',
})
export class MyContactsPage {

  loading: boolean = false;
  error: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private app: App,
              private events: Events,
              private erp: ERPService,
              private nativeServ: NativeService,
              private actionSheetCtrl: ActionSheetController,
            ) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad MyContactsPage');
    this.loadData();
    this.events.subscribe("reload:data", () => {
      this.loadData();
    });
  }

  loadData() {
    this.loading = true;

    this.erp.GetAddressListResult((data, error) => {
      this.error = error;
      this.loading = false;

      if (data && data.DataList) {
        this.dataList = data.DataList;
      } else {
        this.dataList = [];
      }

      console.log(data);

    });
  }

  openContact(item) {
    let actionSheet = this.actionSheetCtrl.create({
      title: '',
      buttons: [
        {
          text: '查看',
          handler: () => {
            // console.log('Archive clicked');
            this.viewContact(item);
          }
        },
        {
          text: '编辑',
          handler: () => {
            // console.log('Archive clicked');
            this.editContact(item);
          }
        },
        {
          text: '删除',
          role: 'destructive',
          handler: () => {
            // console.log('Destructive clicked');
            this.deleteContact(item);
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

  newContact() {
    this.app.getRootNavs()[0].push('MyContactFormPage');
  }

  deleteContact(item) {
    this.erp.DeleteAddressList(item.AddressListID, (data, error) => {
      if (error) {
        this.nativeServ.showToast(error.message || error);
      } else {
        this.loadData();
      }
    });
  }

  editContact(item) {
    this.app.getRootNavs()[0].push('MyContactFormPage', { contact: item });
  }

  viewContact(item) {
    let data = [];
    data.push({ label: '姓名',value: item.Name});
    data.push({ label: '联系电话',value: item.Tel});
    data.push({ label: '办公电话',value: item.OfficeTel});
    data.push({ label: '住宅电话',value: item.FamilyTel});
    data.push({ label: '区域',value: item.Area});
    data.push({ label: '住址',value: item.Address});
    data.push({ label: '邮箱',value: item.Email});
    data.push({ label: '公司',value: item.Company});
    data.push({ label: '邮编',value: item.Postcode});
    data.push({ label: '备注',value: item.Remark});
    
    this.app.getRootNavs()[0].push('ItemDetailPage', { title: '详情', data: data });
  }

  dataList: any = [];

}
