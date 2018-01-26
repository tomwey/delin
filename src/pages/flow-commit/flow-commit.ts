import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { OAService } from '../../services/oa.service';
import { NativeService } from '../../providers/NativeService';

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

  formData: any = {
    advice: '',
  };
  constructor(public navCtrl: NavController, 
    private viewController: ViewController,
    private oa: OAService,
    private nativeService: NativeService,
    public navParams: NavParams) {
      if (this.navParams.data) {
        this.formData.forminstanceid = this.navParams.data.forminstanceid;
        this.formData.signtype = this.navParams.data.signtype;
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlowCommitPage');
  }

  cancel() {
    this.viewController.dismiss();
  }

  commit() {
    this.oa.signFormInstance(this.formData, (data, error) => {
      if (error) {
        this.nativeService.showToast(error.message || error);
      } else {
        this.nativeService.showToast('流程提交成功!');
        this.viewController.dismiss(1);
      }
    });
    
  }

}
