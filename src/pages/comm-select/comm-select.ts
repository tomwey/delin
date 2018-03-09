import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular/util/events';

/**
 * Generated class for the CommSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comm-select',
  templateUrl: 'comm-select.html',
})
export class CommSelectPage {

  dataList: any = [];
  selectedItem: any = null;
  field: any = null;
  target: any = null;
  constructor(public navCtrl: NavController, 
    private events: Events,
    public navParams: NavParams) {
    this.dataList = this.navParams.data.data;
    this.selectedItem = this.navParams.data.selected;
    this.field = this.navParams.data.field;

    this.target = this.navParams.data.target;

    this.resetSelect();
  }

  resetSelect() {
    this.dataList.forEach(element => {
      let val2 = this.valueFromItem(element);
      let val1 = this.valueFromItem(this.selectedItem);
      if (val1 === val2) {
        element.selected = true;
      }
    });
  }

  valueFromItem(item) {
    if (!item) return null;

    return item.label + `${item.value}`;
  }

  select(item) {
    if (item.selected) return;

    this.target.value = item;

    this.events.publish('item:selected', { field: this.field, selectedItem: item });

    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommSelectPage');
  }

}
