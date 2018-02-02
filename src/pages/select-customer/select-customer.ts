import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CRMService } from '../../services/crm.service';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the SelectCustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-customer',
  templateUrl: 'select-customer.html',
})
export class SelectCustomerPage {

  dataList: any = [];

  constructor(public navCtrl: NavController, 
    private crm: CRMService,
    private viewCtrl: ViewController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectCustomerPage');
    this.loadData();
  }

  loadData() {
    this.crm.getCustomersList((data, error) => {
      console.log(data);
      if (data && data.DataList) {
        this.dataList = data.DataList;
      } else {
        this.dataList = [];
      }
    });
  }

  close() {
    this.viewCtrl.dismiss();
  }

  selectMan(item) {
    this.viewCtrl.dismiss(item);
  }

}
