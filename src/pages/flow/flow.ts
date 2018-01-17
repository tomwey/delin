import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';
import { OAService } from '../../services/oa.service';

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

  flowType: string = '0';
  needShowEmptyErrorBox: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private oa: OAService,
    private app: App
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlowPage');

    this.loadData();
  }

  gotoFlowDetail(item) {
    // console.log(item);
    this.app.getRootNavs()[0].push('FlowDetailPage', {item: item});
  }

  segmentChanged(ev) {
    // console.log(ev);
    this.loadData();
  }

  loadData() {
    this.needShowEmptyErrorBox = false;

    this.oa.getOAFormInstanceList(this.flowType, (data, error) => {
      if (data) {
        this.dataList = data.DataList;
      } else {
        this.dataList = [];
      }

      this.needShowEmptyErrorBox = this.dataList.length == 0;
    });
  }

  dataList: any = [];

}
