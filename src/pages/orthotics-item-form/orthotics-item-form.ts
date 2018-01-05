import { Component } from '@angular/core';
import { IonicPage,Events, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the OrthoticsItemFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orthotics-item-form',
  templateUrl: 'orthotics-item-form.html',
})
export class OrthoticsItemFormPage {
  formData: any = {
    product_name: '',
    unit: '',
    price_version: '',
    product_type: '',
    price: '',
    quantity: '',
    hospital_prod_name: '',
    hospital_prod_code: '',
    product_reg_code1: '',
    product_reg_code2: '',
    rate: '',
    jj_rate: '',
    product_jj: '',
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
