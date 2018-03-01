import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the CommonSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-common-select',
  templateUrl: 'common-select.html',
})
export class CommonSelectPage {

  dataList: any = [];
  control: any  = null;
  constructor(public navCtrl: NavController, 
    private events: Events,
    public navParams: NavParams) {
    this.dataList = this.navParams.data.data;
    this.control = this.navParams.data.control;

    this.resetSelect();
  }

  resetSelect() {
    this.dataList.forEach(element => {
      if (element.value === this.control.value) {
        element.selected = true;
      }
    });
  }

  select(item) {
    if (item.selected) return;

    this.control.value = item.value;

    // this.events.publish('item:selected', { field: this.field, selectedItem: item });

    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommonSelectPage');
  }

}
