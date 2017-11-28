import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlowDetailPage');
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
