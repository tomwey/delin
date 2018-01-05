import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the OrthoticsFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orthotics-form',
  templateUrl: 'orthotics-form.html',
})
export class OrthoticsFormPage {

  formData: any = {
    ID: 'jxqsales2017006072',
    create_date: '2017-12-26',
    create_man: '周朝',
    doctor: '',
    saler: '',
    hospital: '',
    pay_name: '',
    pay_type: '',
    tech_man: '',
    ks_name: '',
    cw_name: '',
    customer_name: '',
    customer_tel: '',
    customer_address: '',
    customer_sex: '',
    yx_opinion: '',
    dept: '',
    jb_name: '',
    ticket: '',
    ck_bill: '',
    total_money: '',
    ticket_time: '',
    type: '',
    qk_desc: '',
    note: '',
    reason: '',
    products: [],
    cj_price: '',
    discount: '',
    yy_time: '',
    product_qs: '',
    ticket_send_address: '',
    product_send_address: '',
    ticket_qs: '',
    customer_qm: '',
    company: '',
    jj_rate: '',
    jj_money: '',
    ticket_requirement: '',
    cl_desc: '',
    ck_items: [],
  };
  constructor(public navCtrl: NavController, 
    private modalCtrl: ModalController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrthoticsFormPage');
  }

  openItem(item) {
    let modal = this.modalCtrl.create('OrthoticsItemFormPage', { item: item });
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
    let modal = this.modalCtrl.create('OrthoticsItemFormPage');
    modal.onDidDismiss((data) => {
      if (data) {
        this.formData.products.push(data);
      }
    });
    modal.present();
  }

}
