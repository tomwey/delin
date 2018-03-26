import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';
import { OAService } from '../../services/oa.service';
import { BreadcrumbService } from '../../services/breadcrumb.service';

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

  // breadcrumbs: any = [];
  // activeBreadcrumb: string = '通讯录';

  constructor(public navCtrl: NavController, 
    private app: App,
    private oa: OAService,
    public breadcrumb: BreadcrumbService,
    public navParams: NavParams) {
    if (this.navParams.data.item) {
      this.dept = JSON.parse(JSON.stringify(this.navParams.data.item));
      // this.activeBreadcrumb = this.dept.ObjName;
    } else {
      
    }

    // if (this.navParams.data.breadcrumbs) {
    //   let bc = this.navParams.data.breadcrumbs;
    //   bc.forEach(element => {
    //     let b = JSON.parse(JSON.stringify(element))
    //     b.page = element.page;

    //     this.breadcrumbs.push(b);
    //   });
    // } else {
    //   this.breadcrumbs = ['全部'];
    // }

    // console.log(this.breadcrumbs);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ContactsPage');
    this.loadData();
  }

  loadData() {
    this.loading = true;
    // console.log(this.dept);
    
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
          let arr = JSON.parse(JSON.stringify(this.breadcrumb.breadcrumbs));

          arr.push({
            name: element.ObjName,
          });

          element.breadcrumbs = arr;

        }
      });

    });
  }

  gotoManInfo(item) {
    this.app.getRootNavs()[0].push('ProfilePage', { empcode: item.ObjID });
  }

  back() {
    this.breadcrumb.breadcrumbs.pop()

    this.changeBreadcrumbs();

    this.navCtrl.pop()

    if (this.breadcrumb.breadcrumbs.length === 0) {
      this.breadcrumb.breadcrumbs = [
        {
            name: '通讯录',
            current: 1,
        }
    ];
    }
  }

  backToRoot() {
    this.breadcrumb.breadcrumbs = [
      {
          name: '通讯录',
          current: 1,
      }
  ];

    this.app.getActiveNav().popToRoot()
  }

  forwardTo(b) {
    if (b.current && b.current === 1) return;
    
    let index = this.breadcrumb.breadcrumbs.indexOf(b);

    this.breadcrumb.breadcrumbs.splice(index + 1, this.breadcrumb.breadcrumbs.length - index)

    this.changeBreadcrumbs();

    this.navCtrl.popTo(this.navCtrl.getByIndex(index+1));
  }

  changeBreadcrumbs() {
    const count = this.breadcrumb.breadcrumbs.length;
    for (let i = 0; i < count; i ++) {
      let bb = this.breadcrumb.breadcrumbs[i];
      if (i === count - 1) {
        bb.current = 1;
      } else {
        bb.current = 0;
      }
    }
  }  

  gotoContacts(item) {
    // this.breadcrumbs.push(item.ObjName);
    this.breadcrumb.breadcrumbs = JSON.parse(JSON.stringify(item.breadcrumbs));
    // console.log(this.breadcrumb.breadcrumbs);

    this.changeBreadcrumbs();
    

    this.app.getRootNavs()[0].push('ContactsPage', { item: item });
  }

}
