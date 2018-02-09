import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OAService } from '../../services/oa.service';
import {CallNumber} from "@ionic-native/call-number";
import { NativeService } from '../../providers/NativeService';

/**
 * Generated class for the ManInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-man-info',
  templateUrl: 'man-info.html',
})
export class ManInfoPage {

  person: any = null;
  constructor(public navCtrl: NavController, 
    private oa: OAService,
    private cn: CallNumber,
    private nativeServ: NativeService,
    public navParams: NavParams) {
    this.person = this.navParams.data;
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ManInfoPage');
    this.loadData();
  }

  callPhone() {
    this.cn.isCallSupported().then(val => {
      if (val) {
        this.cn.callNumber(this.person.Mobile, true);
      } else {
        this.nativeServ.showToast('不支持打电话');
      }
    });
    
  }

  loadData() {
    this.oa.getEmpDetail(this.person.ObjID,(data, error) => {
      console.log(data);
      if (data && data.Model) {
        this.person = data.Model;
      }
    });
  }

}
