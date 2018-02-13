import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ERPService } from '../../services/erp.service';

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

  constructor(
    public navCtrl: NavController, 
    private erp: ERPService,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ProductDetailPage');
    this.loadData();
  }

  loadData() {
    this.erp.GetERPProductModel(this.navParams.data.ProductCode, (data, error) => {
      if (data && data.Model) {
        let item = data.Model || {};
        this.dataList = [
          {
            label: '产品编号',
            value: item.ProductCode,
          },
          {
            label: '产品名称',
            value: item.ProductName,
          },
          {
            label: 'BOM代码',
            value: item.BOMCode,
          },
          {
            label: '规格型号',
            value: item.ProductSpecifications,
          },
          {
            label: '物料代码',
            value: item.MaterielID,
          },
          {
            label: '物料名称',
            value: item.MaterielName,
          },
          {
            label: '单位',
            value: item.Unit,
          },
          {
            label: '数量',
            value: item.Count,
          },
          {
            label: '产品性质',
            value: item.ProductProperty,
          },
          {
            label: '所属类别',
            value: item.ProductTypeName,
          },
          {
            label: '成品率',
            value: item.FinishedRate,
          },
          {
            label: '使用状态',
            value: item.State,
          },
          {
            label: '工艺路线',
            value: item.Technics,
          },
          {
            label: '产品材质',
            value: item.ProductMaterialQuality,
          },
        ];

        this.baoxiuList = item.WarrantyList;
      }
    });
  }

  dataList: any = [];

  baoxiuList: any = [];

}
