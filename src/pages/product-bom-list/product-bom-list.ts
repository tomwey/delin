import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductBomListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-bom-list',
  templateUrl: 'product-bom-list.html',
})
export class ProductBomListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductBomListPage');
  }

  dataList: any = [
    {
      name: '自动气阀',
      code: '6.E.E-TSV-A',
      mode: 'A',
      quantity: 1,
      flag: true,
    },
    {
      name: '合金接管式可调接头',
      code: '6.E.E-TSV-A',
      mode: 'L2',
      quantity: 3,
      flag: false,
    },
  ];

}
