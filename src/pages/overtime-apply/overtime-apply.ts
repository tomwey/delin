import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController,App } from 'ionic-angular';
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
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad OvertimeApplyPage');

    this.loading = true;

    setTimeout(() => {
      this.loadData();
    }, 100);

  }

  loadData() {
    this.oa.GetOvertiemApplyList((data, error) => {
      this.error = error;
      this.loading = false;

      if (data && data.DataSet) {
        this.dataList = data.DataSet;
      } else {
        this.dataList = [];
      }
      console.log(data);
      // console.log(error);
    });
  }

  newItem() {
    
  }

  openItem(item) {
    this.app.getRootNavs()[0].push('FlowDetailPage', { item: item });
  }

  dataList: any = [];
  error: any = null;
  loading: boolean = false;

}
