import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController } from 'ionic-angular';
// import { ActionSheetController } from 'ionic-angular/components/action-sheet/action-sheet-controller';
import { DomSanitizer } from '@angular/platform-browser';
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

  item: any = null;
  body: any = null;
  constructor(public navCtrl: NavController, 
    private actionSheetCtrl: ActionSheetController,
    private sanitizer: DomSanitizer,
    public navParams: NavParams) {
      this.item = this.navParams.data;

      this.body = this.sanitizer.bypassSecurityTrustHtml(this.item.ContentDetail);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CloudZoneDetailPage');
  }

  more() {
    // this.actionSheetCtrl.create().present();
  }

}
