import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ERPService } from '../../services/erp.service';

/**
 * Generated class for the ProductBomListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-bom-list',
  templateUrl: 'product-bom-list.html',
})
export class ProductBomListPage {

  constructor(public navCtrl: NavController, 
    private erp: ERPService,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ProductBomListPage');
    setTimeout(() => {
      this.loading = true;
      this.erp.GetProductBOM(this.navParams.data.ProductCode, (data, error) => {
        this.loading = false;
        this.error = error;

        if (data && data.DataList) {
          this.dataList = data.DataList;
        } else {
          this.dataList = [];
        }
      });
    }, 100);
  }

  dataList: any = [];
  error: any = null;
  loading: boolean = false;

}
