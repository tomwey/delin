import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { OAService } from '../../services/oa.service';

/**
 * Generated class for the CatalogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-catalog',
  templateUrl: 'catalog.html',
})
export class CatalogPage {

  selectedData: any = [];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private oa: OAService,
              private viewController: ViewController,
            ) {
    this.selectedData = this.navParams.data;
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad CatalogPage');
    this.loadData();
  }

  loadData() {
    this.oa.getCatalogs((data, error) => {
      if (data && data.DataList) {
        this.catalogs = data.DataList;

        if (this.catalogs.length > 0) {
          this.loadSubCatalogs(this.catalogs[0].FunctionID);
          this.currentCatalog = this.catalogs[0].FunctionName;
        }
      } else {

      }
    });
  }

  loadSubCatalogs(catalogID) {
    this.oa.getForms(catalogID, (data, error) => {
      if (data && data.DataList) {
        this.subcatalogs = data.DataList;
      } else {
        this.subcatalogs = [];
      }

      // 设置选中状态
      this.selectedData.forEach(item => {
        this.subcatalogs.forEach(element => {
          if (item.FormID == element.FormID) {
            element.selected = true;
          }
        });
      });
    });
  }

  selectCatalog(cata) {
    // this.currentCatalog = cata.name;

    this.currentCatalog = cata.FunctionName;
    this.loadSubCatalogs(cata.FunctionID);
  }

  selectSubcatalog(catalog) {

    if (catalog.can_select && catalog.can_select == false) return;

    catalog.selected = !catalog.selected;

    if (catalog.selected) {
      this.selectedData.push(catalog);
    } else {
      let index = this.selectedData.indexOf(catalog);
      if (index !== -1) {
        this.selectedData.splice(index, 1);
      }
    }
  }

  close() {
    this.viewController.dismiss();
  }

  done() {
    this.viewController.dismiss(this.selectedData);
  }

  currentCatalog: string = '';
  
  subcatalogs: any = [];
  catalogs: any = [];

  // currentCatalog: string = '全部';
  
  // subcatalogs: any = [
  //   {
  //     name: '车辆采购',
  //     intro: '集团车辆采购',
  //     selected: false,
  //     can_select: true,
  //   },
  //   {
  //     name: '同行转账',
  //     intro: '同行资金支付',
  //     selected: false,
  //     can_select: false,
  //   },
  //   {
  //     name: '集团办公室车辆采购',
  //     intro: '车辆招标',
  //     selected: false,
  //     can_select: true,
  //   },
  //   {
  //     name: '项目资金支付',
  //     intro: '支付项目资金',
  //     selected: false,
  //     can_select: true,
  //   },
  //   {
  //     name: '公文收发管理',
  //     intro: '适用于集团及分公司公文发布',
  //     selected: false,
  //     can_select: false,
  //   },
  // ];
  // catalogs: any = [
  //   {
  //     name: '全部',
  //   },
  //   {
  //     name: '行政类',
  //   },
  //   {
  //     name: '财务类',
  //   },
  //   {
  //     name: '产品类',
  //   },
  // ];

}
