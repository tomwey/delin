import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Utils } from '../../providers/Utils';
import { CRMService } from '../../services/crm.service';

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
    public navParams: NavParams) {
      if (this.navParams.data.item) {
        this.title = '编辑客户';
      } else {
        this.title = '新增客户';
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyCustomerFormPage');

    this.loadData();
  }

  loadData() {
    this.crm.getCustomerUserBaseOptions((data, error) => {
      this.selectOptions = data;
    });
  }

  save() {
    // console.log(this.customer);
    this.crm.addCustomer(this.customer, (data, error) => {
      console.log(error);
      console.log(data);
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

    let modal = this.modalCtrl.create('CommSelectPage', { selected: item, data: data })
    modal.onDidDismiss((data) => {
      if (data) {
        this.customer[field] = data;
        // console.log(field);
        if (field === 'province') {
          this.customer['city'] = null;
          this.crm.getCitiesList(data.value, (data, error) => {
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
    });
    modal.present();
  }

}
