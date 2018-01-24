import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { OAService } from '../../services/oa.service';

/**
 * Generated class for the ManSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-man-search',
  templateUrl: 'man-search.html',
})
export class ManSearchPage {
  title: string = null;
  dept: any = null;

  deptList: any = []; // 部门
  employeeList: any = []; // 员工

  selectType: number = 1; // 1 表示单选，2 表示多选

  selectedItems: any = [];

  constructor(public navCtrl: NavController, 
    private viewCtrl: ViewController,
    private oa: OAService,
    public navParams: NavParams) {
      this.title = this.navParams.data.title || '选择人员';

      if (this.navParams.data.dept) {
        this.dept  = this.navParams.data.dept;
      }

      if (this.navParams.data.selectType) {
        this.selectType = this.navParams.data.selectType;
      }

      if (this.navParams.data.selectedItems) {
        this.selectedItems = this.navParams.data.selectedItems;
      }
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ManSearchPage');
    this.loadData();
  }

  loadData() {
    this.oa.getDepartmentList(this.dept, (data, error) => {
      if (data && data.DataList) {
        data.DataList.forEach(item => {
          if (item.ObjType === '1') {
            // 部门
            this.deptList.push(item);
          } else if (item.ObjType === '2') {
            // 员工
            this.employeeList.push(item);
          }
        });

        // console.log(this.selectedItems);

        this.employeeList.map(listItem => {
          this.selectedItems.forEach(item => {
            if (item.ObjID === listItem.ObjID) {
              listItem.selected = true;
            }
          });
          return listItem;
        });
      }
    });
  }

  close() {
    this.viewCtrl.dismiss();
  }

  selectMan(item) {
    if (this.selectType === 1) { // 单选
      this.employeeList.map(listItem => {
        listItem.selected = false;
        return listItem;
      });
  
      item.selected = true;

      this.selectedItems = [item];
    } else if (this.selectType === 2) { // 多选
      item.selected = !item.selected;

      if (item.selected) {
        this.selectedItems.push(item);
      } else {
        let index = this.selectedItems.indexOf(item);
        if (index !== -1) {
          this.selectedItems.splice(index, 1);
        }
      }
    }
  }

  clickDept(item) {

  }

  done() {
    this.viewCtrl.dismiss(this.selectedItems);
  }

}
