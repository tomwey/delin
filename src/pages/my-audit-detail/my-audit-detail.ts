import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyAuditDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-audit-detail',
  templateUrl: 'my-audit-detail.html',
})
export class MyAuditDetailPage {
  item: any = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAuditDetailPage');
  }

}
