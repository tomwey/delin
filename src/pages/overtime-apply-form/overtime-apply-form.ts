import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the OvertimeApplyFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-overtime-apply-form',
  templateUrl: 'overtime-apply-form.html',
})
export class OvertimeApplyFormPage {

  title: string = null;
  formData: any = {
    ID: 'HRJBSQ20170000005',
    owner: '吴静',
    apply_length: 9.75,
    overtime_type: '',
    is_kq: true,
    overtime_reason: '',
    overtime_items: [],
  };
  constructor(public navCtrl: NavController,
    private modalCtrl: ModalController, 
    public navParams: NavParams) {
    if (this.navParams.data.item) {
      this.title = "编辑加班申请单";
    } else {
      this.title = "新增加班申请单";
    }
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad OvertimeApplyFormPage');
  }

  openItem(item) {
    let modal = this.modalCtrl.create('OvertimeItemFormPage', { item: item });
    modal.onDidDismiss((data) => {
      if (data) {
        let index = this.formData.overtime_items.indexOf(item);
        if (index !== -1) {
          this.formData.overtime_items.splice(index, 1, data);
        }
      }
    });
    modal.present();
  }

  removeItem(event, item) {
    event.stopPropagation();

    let index = this.formData.overtime_items.indexOf(item);
    if (index !== -1) {
      this.formData.overtime_items.splice(index, 1);
    }
  }

  addItem() {
    let modal = this.modalCtrl.create('OvertimeItemFormPage');
    modal.onDidDismiss((data) => {
      if (data) {
        this.formData.overtime_items.push(data);
      }
    });
    modal.present();
  }

}
