import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Utils } from '../../providers/Utils';
import { CRMService } from '../../services/crm.service';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { NativeService } from '../../providers/NativeService';
import { Events } from 'ionic-angular/util/events';

/**
 * Generated class for the MyCustomerFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-customer-form',
  templateUrl: 'my-customer-form.html',
})
export class MyCustomerFormPage {

  title: string = null;
  selectOptions: any = null;

  customer: any = {
    createtime: Utils.dateFormat(new Date()),
  };
  constructor(public navCtrl: NavController, 
    private crm: CRMService,
    private modalCtrl: ModalController,
    private viewCtrl: ViewController,
    private nativeService: NativeService,
    private events: Events,
    public navParams: NavParams) {
      if (this.navParams.data.item) {
        this.title = '编辑客户';
      } else {
        this.title = '新增客户';
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyCustomerFormPage');
    this.events.subscribe('item:selected', (data) => {
      this.handleSelectedItem(data);
    });
    this.loadData();
  }

  loadData() {
    this.crm.getCustomerUserBaseOptions((data, error) => {
      this.selectOptions = data;
    });
  }

  close() {
    this.viewCtrl.dismiss();
  }

  save() {
    // console.log(this.customer);
    let params = [];
    for (const key in this.customer) {
      if (this.customer.hasOwnProperty(key)) {
        const element = this.customer[key];

        params[key] = element.value || element;
      }
    }
    // console.log(params);
    this.crm.addCustomer(params, (data, error) => {
      // console.log(error);
      // console.log(data);
      if (error) {
        this.nativeService.showToast(error.message || error);
      } else {
        this.viewCtrl.dismiss(1);
      }
    });
  }

  selectItem(field, id) {
    // console.log(this.selectOptions[id]);
    let item = this.customer[field];
    
    let data: any = [];

    if (id === 'XB') {
      data = [{label: '男', value: 1}, {label: '女', value: 0}];
    } else {
      this.selectOptions[id].forEach(element => {
        data.push({ label: element.ConfigText, value: element.ConfigValue });
      });
    }

    this.navCtrl.push('CommSelectPage', { field: field, selected: item, data: data });
  }

  handleSelectedItem(selectedData) {
    if (selectedData) {
      this.customer[selectedData.field] = selectedData.selectedItem;
      // console.log(field);
      if (selectedData.field === 'province') {
        this.customer['city'] = null;
        this.crm.getCitiesList(selectedData.selectedItem.value, (data, error) => {
          // console.log(data);
          // console.log(error);
          if (data && data.DataList) {
            this.selectOptions['city'] = data.DataList;
          } else {
            this.selectOptions['city'] = [];
          }
        });
      }
    }
  }

}
