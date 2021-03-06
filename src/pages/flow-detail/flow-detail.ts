import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { App } from 'ionic-angular/components/app/app';
import { OAService } from '../../services/oa.service';
import { NativeService } from '../../providers/NativeService';

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
  item: any = null;
  showCharts: boolean = false;
  operType: number = 1;
  
  flowType: string = null;

  @ViewChild('flowChart') flowChart;
  constructor(public navCtrl: NavController,
    private modalCtrl: ModalController, 
    private app: App,
    private oa: OAService,
    private events: Events,
    private navtiveServ: NativeService,
    public navParams: NavParams) {
      if (this.navParams.data)
        this.showCharts = this.navParams.data.showCharts;
      
      this.item = this.navParams.data.item.Model || this.navParams.data.item;

      this.flowType = this.navParams.data.flowType;
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
    } else {
      this.loadData();
    }

    this.events.subscribe('flow:submited', () => {
      this.flowType = '-1';
      
      this.loadData();
    });
  }

  loadData() {
    // console.log(this.item);
    
    this.oa.getOAFormInstanceDetail(this.item.FormInstanceID||this.item.Model.FormInstanceID, (data, error) => {
      console.log(data);

      if (data && data.CurrentStep && data.CurrentStep.Model && data.CurrentStep.Model.IsSpecifyNextStep) {
        this.isSpecifyNextStep = data.CurrentStep.Model.IsSpecifyNextStep == 1;
      }
      
      if (error) {
        this.navtiveServ.showToast(error.message || error);
        return;
      }
      if (data && data.FieldList) {
        
        let temp = [];
        data.FieldList.forEach(element => {
          temp.push({ 
            label: element.FieldValue.FieldName, 
            value: element.FieldValue.ControlText });
        });
        this.fieldsList = temp;
      } else {
        this.fieldsList = [];
      }

      if (data && data.SignApproverList) {
        this.flowOpinions = data.SignApproverList;
      } else {
        this.flowOpinions = [];
      }

      // 获取操作类型
      if (data && data.CurrentStep) {
        if (data.CurrentStep.Model && data.CurrentStep.Model.OptionType) {
          this.operType = data.CurrentStep.Model.OptionType;
        }
      }
    });
  }

  reject() {
    this.openCommitPage({ signtype: 2 });
  }

  doAgree() {
    this.openCommitPage({ signtype: 1 });
  }

  btnClick() {
    this.openCommitPage({ signtype: (this.operType + 1) });
  }

  openCommitPage(data) {
    data.forminstanceid = this.item.FormInstanceID;
    data.isSpecifyNextStep = (data.signtype  == 1 && this.isSpecifyNextStep);

    this.app.getRootNavs()[0].push('FlowSubmitPage', data);
  }

  // openCommitPage(data) {
  //   data.forminstanceid = this.item.FormInstanceID;
  //   let modal = this.modalCtrl.create('FlowCommitPage', data, {
  //     enableBackdropDismiss: false
  //   });
  //   modal.onDidDismiss((data) => {
  //     if (data) {
  //       this.events.publish('reload:flow');
  //       this.flowType = '-1';
  //       this.loadData();
  //     }
  //   });
  //   modal.present();
  // }

  public formatSignState(opinion): string {
    if (opinion.SignType == 0) {
      return '待签核';
    } else if (opinion.SignType == 1) {
      return '签核通过';
    } else if (opinion.SignType == 2) {
      return '签核驳回';
    } else if (opinion.SignType == 3) {
      return '处理';
    } else if (opinion.SignType == 4) {
      return '知会';
    } 

    return null;
  }

  openFlowChart() {
    this.app.getRootNavs()[0].push('FlowDetailPage', { showCharts: true, item: this.item });
  }

  changeSeg(type) {
    this.changeSegType = type;

    if (type === 0) {
      this.loadData();
    } else if (type === 1) {
      this.loadFlowTree();
    }
  }

  loadFlowTree() {
    this.oa.GetFormTree(this.item.FormInstanceID||this.item.Model.FormInstanceID, (data, error) => {
      console.log(data);
      if (data && data.DataList) {
        this.flowTreeData = data.DataList;
      } else {
        this.flowTreeData = [];
      }
    });
  }

  formatNodeName(item) {
    if (item.SignStepNum === '0') return item.SignPeople;

    if (parseInt(item.SignStepNum) === this.flowTreeData.length - 1) return item.StepName;

    return `${item.StepName}（${item.SignPeople}）`;
  }

  changeSegType: number = 0;

  fieldsList: any = [];
  flowTreeData: any = [];

  isSpecifyNextStep: boolean = false;

  flowOpinions: any = [
    // {
    //   agree: 1,
    //   opinion: '',
    //   user: '李瑞思',
    //   job: '部门主管',
    //   time: '2017-12-26 12:12:34',
    // },
    // {
    //   agree: 1,
    //   opinion: '工资将于下一次薪酬结算日发放',
    //   user: '刘慧思',
    //   job: '财务主管',
    //   time: '2017-12-26 12:12:34',
    // },
  ];
}
