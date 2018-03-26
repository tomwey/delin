import { Component, ViewChild } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { OAService } from '../../services/oa.service';
import { NewsService } from '../../services/news.service';
import { Slides } from 'ionic-angular/components/slides/slides';
import { CRMService } from '../../services/crm.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;

  constructor(
    public navCtrl: NavController,
    private oa: OAService,
    private news: NewsService,
    private crm: CRMService,
    private app: App) {
  }

  ionViewDidLoad() {
    // this.oa.getOAFormInstanceDetail('20171221234214000001', (data, error) => {
    //   console.log(data);
    // });
    // this.oa.getDelegateEvents(0,(data, error) => {});
    // this.oa.getDepartmentList(null, (data, error) => {
      
    // });

    this.news.getBanners('OA', (data, error) => {
      // console.log(data);
      // console.log(error);
      if (data && data.DataList) {
        this.bannersData = data.DataList;

        if (this.slides) {
          this.slides.autoplayDisableOnInteraction = false;

          this.slides.ngOnDestroy();
          this.slides.initialSlide = 0;
          this.slides.update();
          this.slides.ngAfterContentInit();
        }

      }
    });
  }

  ionViewDidEnter() {
    if (this.slides) {
      this.slides.startAutoplay();
    }
  }

  ionViewDidLeave() {   
    if (this.slides) {
      this.slides.stopAutoplay();  
    }
  }

  autoPlay() {
    if (this.bannersData.length > 1 && this.slides) {
      this.slides.startAutoplay();
    }
    
  }

  openBanner(banner) {
    // this.app.getRootNavs()[0].push('CloudZoneDetailPage', banner);
    this.app.getRootNavs()[0].push('ArticlePage', { id: banner.ContentID });
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

  bannersData: any = [
    // {
    // CoverImg: 'assets/imgs/banner1.png',
    // },
    // {
    //   CoverImg: 'assets/imgs/banner2.png'
    // }
  ];
  
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
            icon: 'icon_my_mp.png',
            name: '我的设置',
            page: 'SettingPage',//'CustomerPage',
          },
          {
            icon: 'icon_gzrz.png',
            name: '个人日志',
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
            page: 'ProfilePage',//'CustomerPage',
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
