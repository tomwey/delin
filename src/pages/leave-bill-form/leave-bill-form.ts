import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LeaveBillFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leave-bill-form',
  templateUrl: 'leave-bill-form.html',
})
export class LeaveBillFormPage {

  formData: any = {
    ID: 'HRQJSQ2017000030',
    create_date: '2017-11-10',
    create_man: '吴静',
    owner: '周朝',
    dept: '贵阳义肢',
    type: '1',
    start_time: '',
    end_time: '',
    days: 3,
    agency_man: '',
    reason: '',
    note: ''
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaveBillFormPage');
  }

}
