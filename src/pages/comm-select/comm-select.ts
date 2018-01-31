import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

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
  constructor(public navCtrl: NavController, 
    private viewCtrl: ViewController,
    public navParams: NavParams) {
    this.dataList = this.navParams.data.data;
    this.selectedItem = this.navParams.data.selected;

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

    return item.label + item.value.toString();
  }

  close() {
    this.viewCtrl.dismiss();
  }

  select(item) {
    if (item.selected) return;
    this.viewCtrl.dismiss(item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommSelectPage');
  }

}
