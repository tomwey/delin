import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';
import { OAService } from '../../services/oa.service';

/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {

  constructor(public navCtrl: NavController, 
      private app: App,
      private oa: OAService,
      public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ContactsPage');
    this.loadData();
  }

  loadData() {
    this.oa.getDepartmentList('', (data, error) => {
      console.log(data);
      console.log(error);
    });
  }

  gotoManInfo(item) {
    this.app.getRootNavs()[0].push('ManInfoPage', item);
  }

  people: any = [
    {
      name: '康康妮妮',
      avatar: 'assets/imgs/u1.png',
      job: '产品经理',
    },
    {
      name: '康雪',
      avatar: 'assets/imgs/u2.png',
      job: '职员'
    },
  ];

}
