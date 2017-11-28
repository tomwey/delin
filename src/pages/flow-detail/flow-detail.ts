import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { App } from 'ionic-angular/components/app/app';

// declare var flowchart;

/**
 * Generated class for the FlowDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flow-detail',
  templateUrl: 'flow-detail.html',
})
export class FlowDetailPage {

  showCharts: boolean = false;
  @ViewChild('flowChart') flowChart;
  constructor(public navCtrl: NavController,
    private modalCtrl: ModalController, 
    private app: App,
    public navParams: NavParams) {
      if (this.navParams.data)
        this.showCharts = this.navParams.data.showCharts;
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad FlowDetailPage');
    if (this.showCharts) {
      // var diagram = flowchart.parse('st=>start: Start:>http://www.google.com[blank]\n' +
      //                               'e=>end:>http://www.google.com\n' +
      //                               'op1=>operation: My Operation\n' +
      //                               'sub1=>subroutine: My Subroutine\n' +
      //                               'cond=>condition: Yes \n' + 
      //                               'or No?\n:>http://www.google.com' +
      //                               'io=>inputoutput|request: catch something...\n' +
      //                               '' +
      //                               'st->op1->cond\n' +
      //                               'cond(yes)->io->e\n' + 
      //                               'cond(no)->sub1(right)->op1');
    
      // diagram.drawSVG('flowChart');
    }
  }

  doAgree() {
    this.modalCtrl.create('FlowCommitPage', {
      enableBackdropDismiss: false
    }).present();
  }

  openFlowChart() {
    this.app.getRootNavs()[0].push('FlowDetailPage', { showCharts: true });
  }

  empInfos: any = [
    { 
      label: '申请人:',
      value: '王文静'
    },
    { 
      label: '职务:',
      value: '总务'
    },
    { 
      label: '职务级别:',
      value: '内务人员'
    },
    { 
      label: '所在部门:',
      value: ' 成都管理'
    },
    { 
      label: '职员类别:',
      value: '正式编制内'
    },
    { 
      label: '入职时间:',
      value: '2010-10-20'
    },
    { 
      label: '转正时间:',
      value: '2010-12-25'
    },
    { 
      label: '申请时间:',
      value: '2010-12-15 09:00'
    },
    { 
      label: '申请说明:',
      value: '由于个人及家庭原因，不得不离开工作了7年的工作岗位，望领导批准'
    },
    { 
      label: '备注:',
      value: ''
    }
  ];

  flowOpinions: any = [
    {
      agree: 1,
      opinion: '',
      user: '李瑞思',
      job: '部门主管',
      time: '2017-12-26 12:12:34',
    },
    {
      agree: 1,
      opinion: '工资将于下一次薪酬结算日发放',
      user: '刘慧思',
      job: '财务主管',
      time: '2017-12-26 12:12:34',
    },
  ];
}
