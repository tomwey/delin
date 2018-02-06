import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ERPService } from '../../services/erp.service';
import { NativeService } from '../../providers/NativeService';
import { Events } from 'ionic-angular/util/events';
import { App } from 'ionic-angular/components/app/app';

/**
 * Generated class for the MyContactFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-contact-form',
  templateUrl: 'my-contact-form.html',
})
export class MyContactFormPage {

  title: string = null;

  constructor(public navCtrl: NavController, 
    private erp: ERPService,
    private nativeServ: NativeService,
    private events: Events,
    private app: App,
    public navParams: NavParams) {
    if (this.navParams.data.contact) {
      // this.contact = this.navParams.data.contact;
      this.title = '编辑个人信息';

      let item = this.navParams.data.contact;

      this.controls.forEach(element => {
        element.value = item[element.ID + 'Str'] || item[element.ID];
      });

    } else {
      this.title = '添加个人信息';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyContactFormPage');
  }

  commit() {
    let params = [];

    this.controls.forEach(element => {
      const key = element.ID.toLowerCase();

      let val = element.value || {};
      params[key] = val.value || val;

    });
    console.log(params);

    if (this.navParams.data.contact) {
      this.erp.UpdateAddressList(params, (data, error) => {
        if (error) {
          this.nativeServ.showToast(error.message || error);
        } else {
          this.nativeServ.showToast('更新成功!');
          this.events.publish('reload:data');

          this.app.getRootNavs()[0].pop();
        }
      });
    } else {
      this.erp.AddAddressList(params, (data, error) => {
        if (error) {
          this.nativeServ.showToast(error.message || error);
        } else {
          this.nativeServ.showToast('提交成功!');
          this.events.publish('reload:data');

          this.app.getRootNavs()[0].pop();
        }
      });
    }
  }

  controls: any = [
    {
      ID: 'AddressListID',
      type: 0,
    },
    {
      ID: 'Name',
      type: 2,
      name: '姓名'
    },
    {
      ID: 'Tel',
      type: 2,
      name: '联系电话'
    },
    {
      ID: 'OfficeTel',
      type: 2,
      name: '办公电话'
    },
    {
      ID: 'FamilyTel',
      type: 2,
      name: '住宅电话'
    },
    {
      ID: 'Email',
      type: 2,
      name: '邮箱'
    },
    {
      ID: 'Address',
      type: 2,
      name: '地址'
    },
    {
      ID: 'Postcode',
      type: 8,
      name: '邮编',
      pattern: '[0-9]*'
    },
    {
      ID: 'Area',
      type: 2,
      name: '地区',
    },
    {
      ID: 'Company',
      type: 2,
      name: '公司',
    },
    {
      ID: 'Remark',
      type: 3,
      name: '备注',
    },
  ];

}
