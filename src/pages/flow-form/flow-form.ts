import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OAService } from '../../services/oa.service';
import { NativeService } from '../../providers/NativeService';
import { App } from 'ionic-angular/components/app/app';

/**
 * Generated class for the FlowFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flow-form',
  templateUrl: 'flow-form.html',
})
export class FlowFormPage {

  item: any = null;
  constructor(public navCtrl: NavController, 
    private oa: OAService,
    private nativeServ: NativeService,
    private app: App,
    public navParams: NavParams) {
    this.item = this.navParams.data;
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad FlowFormPage');

    this.oa.getFormFields(this.item.FormID, (data, error) => {
      if (data) {
        this.dataList = data.DataList;

        this.dataList.sort((o1, o2) => {
          return o1.FieldModel.OrderNo - o2.FieldModel.OrderNo;
        });

        console.log(this.dataList);
      } else {
        this.dataList = [];
      }

    });
  }

  commit() {
    let formFieldsValue = [];
    this.dataList.forEach(element => {
        // console.log(element.formValue);
        formFieldsValue.push({
          fieldid: element.FieldModel.FieldID,
          fieldvalue: element.formValue
        });
    });

    this.oa.addFormInstance({ formid: this.item.FormID, 
      formfieldsvalue: JSON.stringify(formFieldsValue) 
    }, (data, error) => {
      console.log(data);
      console.log(error);
      if (error) {
        this.nativeServ.showToast(error.message || error);
      } else {
        this.nativeServ.showToast('发起流程成功！');
        this.app.getRootNavs()[0].pop();
      }
    });
  }

  public selectValueFromItem(item): string {
    if (!item.formValue) {
      return `请选择 (${item.FieldModel.ControlType == 6 ? '多选' : '单选'})`;
    } else {
      let val = item.formValue.label || item.formValue;
      if (!val) return null;
      
      return val.split('|')[0];
    }
  }

  gotoSelect(item) {
    console.log(item);
    // 跳到选择界面选择
    let arr = item.Option;
    let data = [];
    arr.forEach(element => {
      data.push({label: element.DataSetText, value: `${element.DataSetText}|${element.DataSetValue}`})
    });

    this.navCtrl.push('FlowSelectPage', { data: data, control: item });
  }

  dataList: any = [];

}
