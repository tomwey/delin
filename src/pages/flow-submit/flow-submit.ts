import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Events } from 'ionic-angular';
import { OAService } from '../../services/oa.service';
import { NativeService } from '../../providers/NativeService';

/**
 * Generated class for the FlowSubmitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flow-submit',
  templateUrl: 'flow-submit.html',
})
export class FlowSubmitPage {

  formControl: any = {
    opinion: ''
  };

  manSelectControl: any = {
    FieldModel: {
      ControlType: 9
    }
  };

  title: string = '';
  isSpecifyNextStep: boolean = true;
  constructor(public navCtrl: NavController, 
    private app: App,
    private oa: OAService,
    private nativeService: NativeService,
    private events: Events,
    public navParams: NavParams) {
    this.title = this.navParams.data.signtype == 1 ? '同意' : '驳回';
    this.isSpecifyNextStep = this.navParams.data.isSpecifyNextStep;

    // console.log(this.navParams.data);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad FlowSubmitPage');
  }

  public selectValueFromItem(): string {
    if (!this.manSelectControl.formValue) {
      return `请选择 (单选)`;
    } else {
      let val = this.manSelectControl.formValue.label || this.manSelectControl.formValue;
      if (!val) return null;
      
      return val.split('|')[0];
    }
  }

  gotoSelect() {
    // console.log(item);
    this.app.getRootNavs()[0].push('ContactsPage', { control: this.manSelectControl, from: this.navCtrl.getActive() })   
  }

  commit() {
    // console.log(this.formControl.opinion);
    // console.log(this.manSelectControl);
    if (this.isSpecifyNextStep && !this.manSelectControl.formValue) {
      this.nativeService.showToast('下个审核人不能为空');
      return;
    }

    let formData = {
      forminstanceid: this.navParams.data.forminstanceid, 
      signtype: this.navParams.data.signtype,
      advice: this.formControl.opinion,
      //nextemp: `${this.manSelectControl.formValue.label}|${this.manSelectControl.formValue.value}`
    };

    if (this.isSpecifyNextStep && !this.manSelectControl.formValue) {
      formData["nextemp"] = `${this.manSelectControl.formValue.label}|${this.manSelectControl.formValue.value}`;
    } else {
      formData["nextemp"] = '';
    }

    this.oa.signFormInstance(formData, (data, error) => {
      if (error) {
        this.nativeService.showToast(error.message || error);
      } else {
        this.nativeService.showToast('流程提交成功!');
        // this.viewController.dismiss(1);
        this.events.publish('flow:submited');
        this.events.publish('reload:flow');

        this.navCtrl.pop();
      }
    });
  }

}
