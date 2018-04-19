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
  fixedData: any = null;
  constructor(public navCtrl: NavController, 
    private oa: OAService,
    private nativeServ: NativeService,
    private app: App,
    public navParams: NavParams) {
    this.item = this.navParams.data;
  }

  ionViewDidLoad() {

      this.oa.GetApplyByAndTime((data, error) => {
        this.fixedData = data;

        setTimeout(() => {
          this.loadFormFields();
        }, 10);
      });
  }

  loadFormFields() {
    this.oa.getFormFields(this.item.FormID, (data, error) => {
      if (data) {
        this.dataList = data.DataList;

        this.dataList.sort((o1, o2) => {
          return o1.FieldModel.OrderNo - o2.FieldModel.OrderNo;
        });
      } else {
        this.dataList = [];
      }

      this.dataList.forEach(element => {
        if (element.FieldModel.FieldName === '制单人') {
          element.formValue = this.fixedData.ApplyBy;
          element.disabled = true
        } else if (element.FieldModel.FieldName === '填单日期') {
          element.formValue = this.fixedData.ApplyTime;
          element.disabled = true
        } else {
          element.disabled = false;
          if (element.FieldModel.ControlType === 11 || element.FieldModel.FieldName === '申请人') { // 申请人控件需要有默认值
            element.formValue = { label: this.fixedData.ApplyBy, value: this.fixedData.ApplyCode };
          }
        }
      });

    });
  }

  commit() {
    let formFieldsValue = [];

    this.dataList.forEach(element => {
        // console.log(element.formValue);
        let value = element.formValue;
        if (value.label) {
          value = `${value.label}|${value.value}`;
        }

        formFieldsValue.push({
          fieldid: element.FieldModel.FieldID,
          fieldvalue: value
        });
    });

    this.oa.addFormInstance({ formid: this.item.FormID, 
      formfieldsvalue: JSON.stringify(formFieldsValue) 
    }, (data, error) => {
      // console.log(data);
      // console.log(error);
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
    // console.log(item);

    if (item.FieldModel.ControlType == 9 || 
        item.FieldModel.ControlType == 10) {
      // 部门或者员工选择
      // this.modalCtrl.create('ContactsPage',{ control: item }).present();
      this.app.getRootNavs()[0].push('ContactsPage', { control: item, from: this.navCtrl.getActive() })
    } else {
      // 其它选择
      // 跳到选择界面选择
      let arr = item.Option;
      let data = [];
      arr.forEach(element => {
        data.push({label: element.DataSetText, value: `${element.DataSetText}|${element.DataSetValue}`})
      });

      this.navCtrl.push('FlowSelectPage', { data: data, control: item });
    }    
  }

  dataList: any = [];

}
