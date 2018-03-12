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

  dept: any = {};
  dataList: any  = [];
  error: any = null;

  loading: boolean = false;

  deptData: any = [];
  manData: any  = [];

  breadcrumbs: any = [];
  activeBreadcrumb: string = '通讯录';

  constructor(public navCtrl: NavController, 
    private app: App,
    private oa: OAService,
    public navParams: NavParams) {
    if (this.navParams.data.item) {
      this.dept = JSON.parse(JSON.stringify(this.navParams.data.item));
      this.activeBreadcrumb = this.dept.ObjName;
    } else {
      
    }

    if (this.navParams.data.breadcrumbs) {
      this.breadcrumbs = this.navParams.data.breadcrumbs;
    } else {

    }
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ContactsPage');
    this.loadData();
  }

  loadData() {
    this.loading = true;
    console.log(this.dept);
    
    this.oa.getDepartmentList(this.dept.ObjID || '', (data, error) => {
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
    this.app.getRootNavs()[0].push('ProfilePage', { empcode: item.ObjID });
  }

  forwardTo(b) {
    this.breadcrumbs.splice(this.breadcrumbs.indexOf(b), 1);

    this.app.getRootNavs()[0].popTo(b.page);
  }

  gotoContacts(item) {
    let b = {};
    b['name'] = item.ObjName;
    b['page'] = this;
    this.breadcrumbs.push(b);

    this.app.getRootNavs()[0].push('ContactsPage', { item: item, breadcrumbs: this.breadcrumbs });
  }

}
