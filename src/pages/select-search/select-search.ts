import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';

/**
 * Generated class for the SelectSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-search',
  templateUrl: 'select-search.html',
})
export class SelectSearchPage {

  selectedItem: any = null;
  constructor(public navCtrl: NavController, 
    private events: Events,
    public navParams: NavParams) {
    this.selectedItem = this.navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectSearchPage');
  }

  selectItem(item) {
    this.dataList.forEach(element => {
      element.selected = false;
    });

    item.selected = true;

    this.selectedItem = item;
  }

  ok() {
    if (!this.selectedItem) return;

    this.events.publish('item:selected', this.selectedItem);
    this.navCtrl.pop();
  }

  dataList: any = [
    {
      name: '产品1'
    },
    {
      name: '产品2'
    },
  ];

}
