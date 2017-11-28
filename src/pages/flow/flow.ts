import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';

/**
 * Generated class for the FlowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flow',
  templateUrl: 'flow.html',
})
export class FlowPage {

  flowType: string = 'todo';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private app: App
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlowPage');
  }

  gotoFlowDetail() {
    this.app.getRootNavs()[0].push('FlowDetailPage');
  }

}
