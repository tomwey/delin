import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the TravelReimbursementFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-travel-reimbursement-form',
  templateUrl: 'travel-reimbursement-form.html',
})
export class TravelReimbursementFormPage {

  formData: any = {
    ID: 'CLBXD20170000005',
    owner: '吴静',
    dept: '贵州义肢',
    dest: '福州',
    event: '0',
    fee_type: '',
    fee_km: '',
    fee_dept: '',
    xcybd: '',
    reason: '',
    pay_items: [],
    loan_items: [],
    total_money: 71,
    total_money2: '',
    jtpj_count: '',
    zspj_count: '',
    gjpj_count: '',
    qtpj_count: '',
    paste_pages: '',
    pay_money: 371,
  };

  constructor(public navCtrl: NavController, 
    private modalCtrl: ModalController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TravelReimbursementFormPage');
  }

  openPayItem(item) {
    let modal = this.modalCtrl.create('TravelPayItemFormPage', { item: item });
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

  openLoanItem(item) {
    let modal = this.modalCtrl.create('TravelLoanItemFormPage', { item: item });
    modal.onDidDismiss((data) => {
      if (data) {
        let index = this.formData.loan_items.indexOf(item);
        if (index !== -1) {
          this.formData.loan_items.splice(index, 1, data);
        }
      }
    });
    modal.present();
  }

  addPayItem() {
    let modal = this.modalCtrl.create('TravelPayItemFormPage');
    modal.onDidDismiss((data) => {
      if (data) {
        this.formData.pay_items.push(data);
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

  addLoanItem() {
    let modal = this.modalCtrl.create('TravelLoanItemFormPage');
    modal.onDidDismiss((data) => {
      if (data) {
        this.formData.loan_items.push(data);
      }
    });
    modal.present();
  }

  removeLoanItem(event, item) {
    event.stopPropagation();

    let index = this.formData.loan_items.indexOf(item);
    if (index !== -1) {
      this.formData.loan_items.splice(index, 1);
    }
  }

}
