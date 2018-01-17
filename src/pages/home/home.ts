import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private testApi: TestService,
    private app: App) {
  }

  ionViewDidLoad() {
    // this.testApi.test('GetOAFunctionListResult', {});
    this.testApi.test('GetOAElecFormListResult', {functionid: 'F02'});
  }

  openBanner() {
    this.app.getRootNavs()[0].push('ArticlePage');
  }

  openModule(sec) {
    if (sec.page) {
      this.app.getRootNavs()[0].push(sec.page);
    }
  }

  forwardTo(item) {
    if (item.page) {
      this.app.getRootNavs()[0].push(item.page);
    }
  }

  bannersData: any = [{
    image: 'assets/imgs/banner1.png',
  },{
    image: 'assets/imgs/banner2.png'
  }];
  
  mainSections: any = [
    {
    icon: 'assets/imgs/icon_new_flow.png',
    name: '新建事项',
    intro: '简单、快捷',
    page: 'NewFlowPage',
    },
    {
      icon: 'assets/imgs/icon_flow.png',
      name: '我的事项',
      intro: '一键代办、无需等待',
      page: 'FlowPage',
    },
    {
      icon: 'assets/imgs/icon_czone.png',
      name: '云康动态',
      intro: '动态信息一览无遗',
      page: 'CloudZonePage'//'CloudZonePage',
    },
    {
      icon: 'assets/imgs/icon_schedule.png',
      name: '日程中心',
      intro: '重要日程如影随形',
      page: 'SchedulePage',
      },
    {
      icon: 'assets/imgs/icon_agency.png',
      name: '我的委托',
      intro: '让流程飞起来',
      page: 'AgencyPage',
      },
    {
      icon: 'assets/imgs/icon_my_sale.png',
      name: '我的业绩',
      intro: '有动力才有业绩',
      page: 'MyAuditPage'//'SalePage',
      },
    ];

    sections: any = [
      {
        name: '客户关系',
        color: '#1b82d2',
        items: [
          {
            icon: 'icon_my_customer.png',
            name: '我的客户',
            page: 'MyCustomerPage'//'CustomerPage',
          },
          {
            icon: 'icon_customer_share.png',
            name: '客户转移共享',
            page: 'CustomSharePage'//'CustomerPage',
          },
          {
            icon: 'icon_yxkh.png',
            name: '意向客户',
            page: 'PotentialCustomerPage'//'CustomerPage',
          },
          {
            icon: 'icon_dd.png',
            name: '定单',
            page: 'OrderPage',//'CustomerPage',
          },
          {
            icon: 'icon_jxq.png',
            name: '矫形器',
            page: 'OrthoticsPage'//'CustomerPage',
          },
          {
            icon: 'icon_ydkq.png',
            name: '移动考勤',
            page: 'AttendancePage'//'CustomerPage',
          },
        ]
      },

      {
        name: '协同办公',
        color: '#ed890c',
        items: [
          {
            icon: 'icon_gzrz.png',
            name: '工作日志',
            page: 'WorkLogPage'//'CustomerPage',
          },
          // {
          //   icon: 'icon_qc.png',
          //   name: '签呈',
          //   page: ''//'CustomerPage',
          // },
          {
            icon: 'icon_personal_contact.png',
            name: '个人通讯录',
            page: 'MyContactsPage'//'CustomerPage',
          },
          {
            icon: 'icon_comp_contact.png',
            name: '公司通讯录',
            page: 'ContactsPage',
          },
          {
            icon: 'icon_my_mp.png',
            name: '我的名片',
            page: 'SettingPage',//'CustomerPage',
          },
          {
            icon: 'icon_qjd.png',
            name: '请假单',
            page: 'LeaveBillPage'//'CustomerPage',
          },
          {
            icon: 'icon_jbsq.png',
            name: '加班申请',
            page: 'OvertimeApplyPage'//'CustomerPage',
          },
        ]
      },

      {
        name: '费用管理',
        color: '#ea4998',
        items: [
          {
            icon: 'icon_jkd.png',
            name: '借款单',
            page: 'LoanBillPage'//'CustomerPage',
          },
          {
            icon: 'icon_clbxd.png',
            name: '差旅报销单',
            page: 'TravelReimbursementPage'//'CustomerPage',
          },
        ]
      },

      {
        name: '产品信息',
        color: '#116691',
        items: [
          {
            icon: 'icon_product.png',
            name: '产品',
            page: 'ProductListPage'//'CustomerPage',
          },
          {
            icon: 'icon_wl.png',
            name: '物料',
            page: 'MaterialPage',//'CustomerPage',
          },
          {
            icon: 'icon_jld.png',
            name: '借料单',
            page: 'LoanSheetPage'//'CustomerPage',
          },
        ]
      },
    ];
}
