import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';
import { OAService } from '../../services/oa.service';

/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {

  deptID: string = '';
  dataList: any  = [];
  error: any = null;

  loading: boolean = false;

  deptData: any = [];
  manData: any  = [];

  constructor(public navCtrl: NavController, 
      private app: App,
      private oa: OAService,
      public navParams: NavParams) {
        if (this.navParams.data.deptID) {
          this.deptID = this.navParams.data.deptID;
        }
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ContactsPage');
    this.loadData();
  }

  loadData() {
    this.loading = true;
    this.oa.getDepartmentList(this.deptID, (data, error) => {
      this.loading = false;
      this.error = error;

      if (data && data.DataList) {
        this.dataList = data.DataList;
      } else {
        this.dataList = [];
      }

      this.dataList.forEach(element => {
        if (element.ObjType == '2') {
          this.manData.push(element);
        } else {
          this.deptData.push(element);
        }
      });

    });
  }

  gotoManInfo(item) {
    this.app.getRootNavs()[0].push('ManInfoPage', item);
  }

  gotoContacts(item) {
    this.app.getRootNavs()[0].push('ContactsPage', { deptID: item.ObjID});
  }

}
