import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewAgencyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-agency',
  templateUrl: 'new-agency.html',
})
export class NewAgencyPage {
  tasks: any = ['车辆采购','同行转账','集团办公室车辆采购招标'];
  agency: any = { user: null, startDate: new Date(), endDate: new Date(), events: [] }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewAgencyPage');
  }

  deleteTask(task) {
    let index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

}
