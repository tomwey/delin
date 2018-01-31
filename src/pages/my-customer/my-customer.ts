import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { CRMService } from '../../services/crm.service';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';

/**
 * Generated class for the MyCustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-customer',
  templateUrl: 'my-customer.html',
})
export class MyCustomerPage {

  constructor(public navCtrl: NavController, 
    private app: App,
    private crm: CRMService,
    private modalCtrl: ModalController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad MyCustomerPage');
    this.loadData();
  }

  loadData() {
    this.crm.getCustomersList((data, error) => {
      // console.log(data);
      if (data && data.DataList) {
        this.dataList = data.DataList;
      } else {
        this.dataList = [];
      }
    });
  }

  newItem() {
    let modal = this.modalCtrl.create('MyCustomerFormPage');
    modal.onDidDismiss((data) => {
      if (data) {
        this.loadData();
      }
    });
    modal.present();
    // this.app.getRootNavs()[0].push('MyCustomerFormPage');
  }

  dataList: any = [];

}
