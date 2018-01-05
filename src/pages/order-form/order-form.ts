import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the OrderFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-form',
  templateUrl: 'order-form.html',
})
export class OrderFormPage {

  constructor(public navCtrl: NavController, 
    private modalCtrl: ModalController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderFormPage');
  }

  openItem(item) {
    let modal = this.modalCtrl.create('OrderProductItemFormPage', { item: item });
    modal.onDidDismiss((data) => {
      if (data) {
        let index = this.formData.products.indexOf(item);
        if (index !== -1) {
          this.formData.products.splice(index, 1, data);
        }
      }
    });
    modal.present();
  }

  removeItem(event, item) {
    event.stopPropagation();

    let index = this.formData.products.indexOf(item);
    if (index !== -1) {
      this.formData.products.splice(index, 1);
    }
  }

  addItem() {
    let modal = this.modalCtrl.create('OrderProductItemFormPage');
    modal.onDidDismiss((data) => {
      if (data) {
        this.formData.products.push(data);
      }
    });
    modal.present();
  }

  openPayItem(item) {
    let modal = this.modalCtrl.create('OrderPayItemFormPage', { item: item });
    modal.onDidDismiss((data) => {
      if (data) {
        let index = this.formData.pay_items.indexOf(item);
        if (index !== -1) {
          this.formData.pay_items.splice(index, 1, data);
        }
      }
    });
    modal.present();
  }

  removePayItem(event, item) {
    event.stopPropagation();

    let index = this.formData.pay_items.indexOf(item);
    if (index !== -1) {
      this.formData.pay_items.splice(index, 1);
    }
  }

  addPayItem() {
    let modal = this.modalCtrl.create('OrderPayItemFormPage');
    modal.onDidDismiss((data) => {
      if (data) {
        this.formData.pay_items.push(data);
      }
    });
    modal.present();
  }

  openAuditItem(item) {
    let modal = this.modalCtrl.create('OrderAuditItemFormPage', { item: item });
    modal.onDidDismiss((data) => {
      if (data) {
        let index = this.formData.audit_items.indexOf(item);
        if (index !== -1) {
          this.formData.audit_items.splice(index, 1, data);
        }
      }
    });
    modal.present();
  }

  removeAuditItem(event, item) {
    event.stopPropagation();

    let index = this.formData.audit_items.indexOf(item);
    if (index !== -1) {
      this.formData.audit_items.splice(index, 1);
    }
  }

  addAuditItem() {
    let modal = this.modalCtrl.create('OrderAuditItemFormPage');
    modal.onDidDismiss((data) => {
      if (data) {
        this.formData.audit_items.push(data);
      }
    });
    modal.present();
  }

  formData: any = {
    ID: 'DD2017120111',
    create_man: '周朝',
    create_date: '2017-12-24',
    man_name: '',
    man_sex: '0',
    saler: '',
    man_mz: '',
    id_card: '',
    id_card_address: '',
    mobile: '',
    jd_man: '',
    change_man_name: '',
    type: '',
    money: '',
    balance: '',
    ticket: '',
    sale_chance: '',
    sale_source: '',
    man_type: '',
    man_code: '',
    sb_company: '',
    buy_no: '',
    approve_no: '',
    next_face_time: '',
    zs_unit: '',
    discount_desc: '',
    products: [],
    xy_price: '',
    js_money: '',
    discount_rate: '',
    jf_address: '',
    company: '',
    agreement: '',
    note2: '', // 交付备注
    pay_items: [],
    audit_items: [],
    order_payin: '',
    is_bx: true,
    tax_money: '',
    tax_money2: '',
    other_money: '',
    order_money: '',
    rate2: '', // 比例%
    note3: '', // 情况说明
    jj_rate2: '',
    jj_rate_change: '',
    jj_total_money: '',
    yj_change: '',
    yj_total: '',
    yj_total2: '',
    product_change_items: [],
    order_change_items: [],
    pay_change_items: [],
  };

}
