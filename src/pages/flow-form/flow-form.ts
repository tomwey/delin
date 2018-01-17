import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OAService } from '../../services/oa.service';

/**
 * Generated class for the FlowFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flow-form',
  templateUrl: 'flow-form.html',
})
export class FlowFormPage {

  item: any = null;
  constructor(public navCtrl: NavController, 
    private oa: OAService,
    public navParams: NavParams) {
    this.item = this.navParams.data;
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad FlowFormPage');

    this.oa.getFormFields(this.item.FormID, (data, error) => {
      if (data) {
        this.dataList = data.DataList;
        console.log(this.dataList);
      } else {
        this.dataList = [];
      }
    });
  }

  gotoSelect(item) {
    console.log(item);
    // 跳到选择界面选择
  }

  dataList: any = [];

}
