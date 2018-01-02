import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
  }

  dataList: any = [
    {
      label: '产品编号',
      value: '1.AK.AKAE1164',
    },
    {
      label: '产品名称',
      value: '合金五连杆气压膝奥索万力飞毛腿LP大腿',
    },
    {
      label: 'BOM代码',
      value: 'AKHJ1164',
    },
    {
      label: '规格型号',
      value: '自制',
    },
    {
      label: '物料代码',
      value: '1.A.AKHJ1164',
    },
    {
      label: '物料名称',
      value: '合金五连杆气压膝碳纤仿生储能脚',
    },
    {
      label: '单位',
      value: '具',
    },
    {
      label: '数量',
      value: '1',
    },
    {
      label: '产品性质',
      value: '半外购',
    },
    {
      label: '所属类别',
      value: '11合金五连杆气压膝关节',
    },
    {
      label: '成品率',
      value: '100',
    },
    {
      label: '使用状态',
      value: 'true',
    },
    {
      label: '工艺路线',
      value: '',
    },
    {
      label: '产品材质',
      value: '',
    },
  ];

  baoxiuList: any = [
    {
      name: '膝关节',
      duration: 36,
      note: '',
    },
    {
      name: '承筒',
      duration: 12,
      note: '保修期内免费更换一个',
    },
  ];

}
