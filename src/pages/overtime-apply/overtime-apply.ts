import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController,App, Events } from 'ionic-angular';
import { OAService } from '../../services/oa.service';

/**
 * Generated class for the OvertimeApplyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-overtime-apply',
  templateUrl: 'overtime-apply.html',
})
export class OvertimeApplyPage {

  constructor(public navCtrl: NavController, 
    private actionSheetCtrl: ActionSheetController,
    private app: App,
    private oa: OAService,
    private events: Events,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad OvertimeApplyPage');

    this.loading = true;

    setTimeout(() => {
      this.loadData();
    }, 100);

    this.events.subscribe('flow:commited', () => {
      this.loadData();
    });

  }

  loadData() {
    this.oa.GetOvertiemApplyList((data, error) => {
      this.error = error;
      this.loading = false;

      if (data && data.DataList) {
        this.dataList = data.DataList;
      } else {
        this.dataList = [];
      }
      console.log(data);
      // console.log(error);
    });
  }

  newItem() {
    this.app.getRootNavs()[0].push('FlowFormPage', { FormName: '加班申请单', FormID: '加班申请单' });
  }

  openItem(item) {
    this.app.getRootNavs()[0].push('FlowDetailPage', { item: item });
  }

  dataList: any = [];
  error: any = null;
  loading: boolean = false;

}
