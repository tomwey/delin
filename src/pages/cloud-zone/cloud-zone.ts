import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';

/**
 * Generated class for the CloudZonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cloud-zone',
  templateUrl: 'cloud-zone.html',
})
export class CloudZonePage {

  constructor(public navCtrl: NavController,
    private app: App,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CloudZonePage');
  }

  gotoDetail() {
    this.app.getRootNavs()[0].push('CloudZoneDetailPage');
  }

}
