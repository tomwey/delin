import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events,ViewController } from 'ionic-angular';

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

  formData: any = {
    product_name: '',
    unit: '',
    mode: '',
    price_version: '',
    price: '',
    quantity: '',
    jj_rate: '',
    jj_rate2: '',
    product_jj: '',
    note: '',
  };

  currentProduct: any = null;

  constructor(public navCtrl: NavController, 
    private viewCtrl: ViewController,
    private events: Events,
    public navParams: NavParams) {
      if (this.navParams.data.item) {
        this.formData = this.navParams.data.item;
      }

      this.events.subscribe('item:selected', (data) => {
        // console.log(data);
        if (data) {
          this.formData.product_name = data.name;
          this.currentProduct = data;
        }
        // console.log(this.formData.product_name);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrthoticsItemFormPage');
  }

  selectProduct() {
    this.navCtrl.push('SelectSearchPage', { uri: '', item: this.currentProduct });
  }

  close() {
    this.viewCtrl.dismiss();
  }

  save() {
    this.viewCtrl.dismiss(this.formData);
  }

}
