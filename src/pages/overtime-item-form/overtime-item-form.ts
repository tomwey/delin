import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the OvertimeItemFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-overtime-item-form',
  templateUrl: 'overtime-item-form.html',
})
export class OvertimeItemFormPage {

  formData: any = {
    name: '',
    dept: '',
    level: '',
    overtime_date: '',
    week_day: '',
    start_time: '',
    end_time: '',
    overtime_length: '',
    overtime_reason: '',
  };
  constructor(public navCtrl: NavController, 
    private viewCtrl: ViewController,
    public navParams: NavParams) {
      if (this.navParams.data.item) {
        this.formData = this.navParams.data.item;
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OvertimeItemFormPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  save() {
    this.viewCtrl.dismiss(this.formData);
  }

}
