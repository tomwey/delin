import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { OAService } from '../../services/oa.service';

/**
 * Generated class for the LeaveBillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leave-bill',
  templateUrl: 'leave-bill.html',
})
export class LeaveBillPage {

  constructor(public navCtrl: NavController, 
    // private actionSheetCtrl: ActionSheetController,
    private app: App,
    private oa: OAService,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LeaveBillPage');
    
    this.loading = true;

    setTimeout(() => {
      this.loadData();
    }, 100);
  }

  loadData() {
    this.oa.GetLeaveBillList((data, error) => {
      this.error = error;
      this.loading = false;

      if (data && data.DataSet) {
        this.dataList = data.DataSet;
      } else {
        this.dataList = [];
      }
      // console.log(data);
      // console.log(error);
    });
  }

  openItem(item) {
    this.app.getRootNavs()[0].push('FlowDetailPage', { item: item });
  }

  dataList: any = [];
  error: any = null;
  loading: boolean = false;

}
