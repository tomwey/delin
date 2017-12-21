import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-contacts',
  templateUrl: 'my-contacts.html',
})
export class MyContactsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyContactsPage');
  }

  dataList: any = [
    {
      name: '孙静怡',
    },
    {
      name: '刘语熙',
    },
    {
      name: '刘浩',
    },
    {
      name: '孙殿岑',
    },
    {
      name: '吴美珠',
    },
    {
      name: '王江淋',
    },
    {
      name: '刘霞',
    },
    {
      name: '蒋文',
    },
  ];

}
