import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';
import { OAService } from '../../services/oa.service';

/**
 * Generated class for the NewFlowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-flow',
  templateUrl: 'new-flow.html',
})
export class NewFlowPage {

  constructor(public navCtrl: NavController, 
    private app: App,
    private oa: OAService,
      public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad NewFlowPage');
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
      }
    });
  }

  selectCatalog(cata) {
    this.currentCatalog = cata.FunctionName;
    this.loadSubCatalogs(cata.FunctionID);
  }

  gotoNewFlow() {
    this.app.getRootNavs()[0].push('FlowFormPage');
  }

  currentCatalog: string = '';
  
  subcatalogs: any = [];
  catalogs: any = [];

}
