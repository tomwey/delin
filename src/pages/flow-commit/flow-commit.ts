import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the FlowCommitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flow-commit',
  templateUrl: 'flow-commit.html',
})
export class FlowCommitPage {

  constructor(public navCtrl: NavController, 
    private viewController: ViewController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlowCommitPage');
  }

  cancel() {
    this.viewController.dismiss();
  }

  commit() {
    this.cancel();
  }

}
