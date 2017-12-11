import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController } from 'ionic-angular';
// import { ActionSheetController } from 'ionic-angular/components/action-sheet/action-sheet-controller';

/**
 * Generated class for the CloudZoneDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cloud-zone-detail',
  templateUrl: 'cloud-zone-detail.html',
})
export class CloudZoneDetailPage {

  constructor(public navCtrl: NavController, 
    private actionSheetCtrl: ActionSheetController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CloudZoneDetailPage');
  }

  more() {
    // this.actionSheetCtrl.create().present();
  }

}
