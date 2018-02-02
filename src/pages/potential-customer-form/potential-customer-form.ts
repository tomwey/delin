import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular/util/events';
import { CRMService } from '../../services/crm.service';
import { NativeService } from '../../providers/NativeService';

/**
 * Generated class for the PotentialCustomerFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-potential-customer-form',
  templateUrl: 'potential-customer-form.html',
})
export class PotentialCustomerFormPage {
  title: string = null;

  constructor(public navCtrl: NavController,
    private events: Events, 
    private crm: CRMService,
    private nativeServ: NativeService,
    public navParams: NavParams) {
    if (this.navParams.data.item) {
      this.title = '编辑意向客户';

      // this.customer = this.navParams.data.item;
      let item = this.navParams.data.item;
      
      this.controls.forEach(element => {
        if (element.ID == 'Sex') {
          let val = item[element.ID];
          element.value = { label: val == 0 ? '女' : '男', value: val };
        } else {
          element.value = item[element.ID + 'Str'] || item[element.ID];
        }
        
      });
    } else {
      this.title = '新增意向客户';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PotentialCustomerFormPage');
  }

  controlSelect(ev) {
    // console.log(ev);
    let data: any = [];

    if (ev.ID === 'Sex') {
      data = [{label: '男', value: 1}, {label: '女', value: 0}];
      this.navCtrl.push('CommSelectPage', { field: ev.ID, 
        selected: ev.value, data: data, target: ev });
    } 
  }

  commit() {
    let params = {};
    let isEdit = !!this.navParams.data.item;

    this.controls.forEach(element => {
      let fieldID = element.ID.toLowerCase();

      let val = element.value || {};

      console.log(val);
      // if (element.value) {
      //   if (element.value.value !== null && element.value.value !== undefined) {
      params[fieldID] = val.value || val;
        // } else {
        //   params[fieldID] = element.value;
        // }
      // }
    });
    console.log(params);
    if (isEdit) {
      // 更新
      this.crm.UpdateIntentCustomer(params, (data, error) => {
        console.log(data);
        console.log(error);
        if (error) {
          this.nativeServ.showToast(error.message || error);
        } else {
          this.nativeServ.showToast('编辑成功!');
          this.events.publish('item:added');
          this.navCtrl.pop();
        }
      });
    } else {
      // 添加
      this.crm.AddIntentCustomer(params, (data, error) => {
        console.log(data);
        console.log(error);
        if (error) {
          this.nativeServ.showToast(error.message || error);
        } else {
          this.nativeServ.showToast('添加成功!');
          this.events.publish('item:added');
          this.navCtrl.pop();
        }
      });
    }
  }

  controls: any = [
    {
      ID: 'IntentCustomerCode',
      type: 0,
      value: ''
    },
    {
      ID: 'IntentCustomerName',
      type: 2,
      name: '意向客户姓名',
    },
    {
      ID: 'Unit',
      type: 2,
      name: '所属单位',
    },
    {
      ID: 'Sex',
      type: 4,
      name: '性别',
    },
    {
      ID: 'MobilePhone',
      type: 2,
      name: '移动电话',
    },
    {
      ID: 'Area',
      type: 2,
      name: '所属区域',
    },
    {
      ID: 'Birthday',
      type: 7,
      name: '生日',
    },
    {
      ID: 'Email',
      type: 2,
      name: '电子邮件',
    },
    {
      ID: 'Department',
      type: 2,
      name: '部门',
    },
    {
      ID: 'Tel',
      type: 2,
      name: '联系电话',
    },
    {
      ID: 'Hobby',
      type: 2,
      name: '爱好',
    },
    {
      ID: 'Position',
      type: 2,
      name: '职位',
    },
    {
      ID: 'CalOnCycle',
      type: 2,
      name: '拜访周期',
    },
    {
      ID: 'Intimacy',
      type: 8,
      name: '亲密度',
      pattern: '[0-9]*',
      required: true,
    },  
    {
      ID: 'Remark',
      type: 3,
      name: '备注',
      value: '',
    },
  ];
}
