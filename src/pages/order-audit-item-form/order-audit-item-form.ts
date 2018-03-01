import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the OrderAuditItemFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-audit-item-form',
  templateUrl: 'order-audit-item-form.html',
})
export class OrderAuditItemFormPage {

  salesman: any = null;
  ssbm: any = null;

  constructor(public navCtrl: NavController, 
    private viewCtrl: ViewController,
    public navParams: NavParams) {
      if (this.navParams.data.item) {
        if (this.navParams.data.item.controls) {
          this.controls = this.navParams.data.item.controls;
        } else {
          this.controls.forEach(element => {
            element.value = this.navParams.data.item[element.ID + 'Str'] || this.navParams.data.item[element.ID];
          });
        }
        
      }

      this.salesman = this.navParams.data.salesman || [];
      this.ssbm     = this.navParams.data.ssbm || [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrthoticsItemFormPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  controlSelect(ev) {
    let data = [];

    if (ev.ID === 'IsCalculatingPerformance') {
      data = [{label: '计算', value: '计算|1'},{label: '不计算', value: '不计算|0'}];
    } else if (ev.ID === 'SalesManName') {
      this.salesman.forEach(element => {
        data.push({label: element.EmpName, value: `${element.EmpName}|${element.EmpCode}`});
      });
    } else if (ev.ID === 'SalesDepartment') {
      this.ssbm.forEach(element => {
        data.push({label: element.DepartmentName, value: `${element.DepartmentName}|${element.DepartmentID}`});
      });
    }

    this.navCtrl.push('CommonSelectPage', { data: data, control: ev });
  }

  save() {
    let formData = {};

    let total = 0;

    this.controls.forEach(element => {
      // let val = element.value || {};
      formData[element.ID] = element.value || '';
      if (!element.value) {
        total ++;
      }
    });

    if (total == this.controls.length) {
      return;
    }

    formData['controls'] = this.controls;

    this.viewCtrl.dismiss(formData);
  }

  controls: any = [
    {
      ID: 'SalesManName',
      type: 4,
      name: '业务员名字'
    },
    {
      ID: 'SalesDepartment',
      type: 4,
      name: '业务员所属部门'
    },
    {
      ID: 'SalesPrice',
      type: 8,
      name: '金额',
      pattern: '[0-9]*'
    },
    {
      ID: 'SalesRate',
      type: 8,
      name: '比例',
      pattern: '[0-9]*'
    },
    {
      ID: 'BonusShares',
      type: 8,
      name: '已发业绩',
      pattern: '[0-9]*'
    },
    {
      ID: 'ResultsIssued',
      type: 8,
      name: '奖金分配',
      pattern: '[0-9]*'
    },
    {
      ID: 'BonuScalculated',
      type: 8,
      name: '已算奖金',
      pattern: '[0-9]*'
    },
    {
      ID: 'IsCalculatingPerformance',
      type: 4,
      name: '是否计算业绩',
    },
    {
      ID: 'Remark',
      type: 3,
      name: '备注',
    },
  ];

}
