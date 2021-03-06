import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
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
  emptyErrorMessage: string = '';

  needShowEmptyErrorBox: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private oa: OAService,
    private events: Events,
    private app: App
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlowPage');
    this.events.subscribe('reload:flow', () => {
      this.loadData();
    });
    this.loadData();
  }

  gotoFlowDetail(item) {
    console.log(item);
    this.app.getRootNavs()[0].push('FlowDetailPage', {item: item, flowType: this.flowType});
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
      
      console.log(data);

      this.needShowEmptyErrorBox = this.dataList.length == 0;

      console.log(error);
      if (this.flowType == '0') {
        this.emptyErrorMessage = '暂无待办事项';
      } else if (this.flowType == '1') {
        this.emptyErrorMessage = '暂无流程中单据';
      } else if ( this.flowType == '5' ) {
        this.emptyErrorMessage = '暂无单据';
      }
    });
  }

  dataList: any = [];

}
