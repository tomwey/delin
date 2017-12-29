import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {

  title: string = null;
  dataList: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (this.navParams.data) {
      this.title = this.navParams.data.title || '详情';
      if (this.navParams.data.data) {
        this.dataList = this.navParams.data.data;
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailPage');
  }

}
