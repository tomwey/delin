import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events,ViewController } from 'ionic-angular';
import { ERPService } from '../../services/erp.service';

/**
 * Generated class for the OrderProductItemFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-product-item-form',
  templateUrl: 'order-product-item-form.html',
})
export class OrderProductItemFormPage {

  // formData: any = {
  //   product_name: '',
  //   unit: '',
  //   mode: '',
  //   price_version: '',
  //   price: '',
  //   quantity: '',
  //   jj_rate: '',
  //   jj_rate2: '',
  //   product_jj: '',
  //   note: '',
  // };

  constructor(public navCtrl: NavController, 
    private viewCtrl: ViewController,
    // private events: Events,
    private erp: ERPService,
    public navParams: NavParams) {
      if (this.navParams.data.item) {
        // this.controls = this.navParams.data.item.controls;
        if (this.navParams.data.item.controls) {
          this.controls = this.navParams.data.item.controls;
        } else {
          this.controls.forEach(element => {
            element.value = this.navParams.data.item[element.ID + 'Str'] || this.navParams.data.item[element.ID];
          });
        }
      }
      
      // this.events.subscribe('item:selected', (data) => {
      //   // console.log(data);
      //   if (data) {
      //     // this.formData.product_name = data.name;
      //     this.controls[0].value = { label: data.name, value:  };
      //     this.currentProduct = data;
      //   }
      //   // console.log(this.formData.product_name);
      // });
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad OrthoticsItemFormPage');
    this.loadProductList();
  }

  loadProductList() {
    this.erp.GetERPProductList('', (data, error) => {
      if (data && data.DataList) {
        this.products = data.DataList;
      } else {
        this.products = [];
      }
    });
  }

  controlSelect(ev) {
    if (ev.ID === 'ProductCode') {
      let arr = [];
      this.products.forEach(element => {
        arr.push({label: element.ProductName, 
          value: `${element.ProductName}|${element.ProductCode}`});
      });
      this.navCtrl.push('CommonSelectPage', { data: arr, control: ev });
      // this.navCtrl.push('SelectSearchPage', { uri: '', item: this.currentProduct });
    }
  }

  close() {
    this.viewCtrl.dismiss();
  }

  save() {
    let formData = {};
    
    let total = 0;

    this.controls.forEach(element => {
      // let val = element.value || {};
      formData[element.ID] = element.value || '';

      if (!element.value) {
        total++;
      }
    });

    if (total == this.controls.length) {
      return;
    }

    formData['controls'] = this.controls;

    this.viewCtrl.dismiss(formData);
  }

  products: any = [];

  controls: any = [
    {
      ID: 'ProductCode',
      type: 4,
      name: '产品编号',
    },
    {
      ID: 'ProductUnit',
      type: 2,
      name: '产品单位',
    },
    {
      ID: 'NormModel',
      type: 2,
      name: '规格',
    },
    {
      ID: 'PriceVersion',
      type: 2,
      name: '价格版本',
    },
    {
      ID: 'CurrentPrice',
      type: 8,
      name: '价格',
      pattern: '[0-9]*'
    },
    {
      ID: 'OrderNum',
      type: 8,
      name: '数量',
      pattern: '[0-9]*'
    },
    {
      ID: 'ProductBonudsRate',
      type: 8,
      name: '产品奖金比',
      pattern: '[0-9]*'
    },
    {
      ID: 'ProductBonudsTotalRate',
      type: 8,
      name: '产品奖金综合比',
      pattern: '[0-9]*'
    },
    {
      ID: 'ProductBonuds',
      type: 8,
      name: '产品奖金',
      pattern: '[0-9]*'
    },
    {
      ID: 'Remark',
      type: 3,
      name: '备注',
    },
  ];

}
