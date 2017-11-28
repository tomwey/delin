import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';

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
      public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewFlowPage');
  }

  selectCatalog(cata) {
    this.currentCatalog = cata.name;

    // if (this.currentCatalog === '全部') {
    //   this.subcatalogs = [

    //   ];
    // } else if (this.currentCatalog == '行政类') {

    // } else if (this.currentCatalog == '财务类') {

    // } else if (this.currentCatalog == '产品类') {

    // }

  }

  gotoNewFlow() {
    this.app.getRootNavs()[0].push('FlowFormPage');
  }

  currentCatalog: string = '全部';
  
  subcatalogs: any = [
    {
      name: '请假单',
      intro: '常用请假单，适用于病假、事假',
    },
    {
      name: '人力资源部干部任免流程',
      intro: '适用于集团及分公司人力任免',
    },
    {
      name: '项目资金支付流程',
      intro: '常用请假单，适用于病假、事假',
    },
    {
      name: '中长期审计计划管理',
      intro: '常用请假单，适用于病假、事假',
    },
    {
      name: '公文收发管理',
      intro: '常用请假单，适用于病假、事假',
    },
  ];
  catalogs: any = [
    {
      name: '全部',
    },
    {
      name: '行政类',
    },
    {
      name: '财务类',
    },
    {
      name: '产品类',
    },
  ];

}
