import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ManSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-man-search',
  templateUrl: 'man-search.html',
})
export class ManSearchPage {
  title: string = null;
  constructor(public navCtrl: NavController, 
    private viewCtrl: ViewController,
    public navParams: NavParams) {
      this.title = this.navParams.data.title;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManSearchPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  selectMan(item) {
    this.viewCtrl.dismiss(item);
  }

  dataList: any = [
    {
      name: '孙静怡',
      sex: '女',
      mobile: '13012345678',
      phone1: '85320987',
      phone2: '85320987',
      address: '四川成都西大街1号',
      zip: '610000',
      city: '成都',
      company: '成都合能房地产开发有限公司',
      note: '',
    },
    {
      name: '刘语熙',
      sex: '女',
      mobile: '13012345678',
      phone1: '85320987',
      phone2: '85320987',
      address: '四川成都西大街1号',
      zip: '610000',
      city: '成都',
      company: '成都合能房地产开发有限公司',
      note: '',
    },
    {
      name: '刘浩',
      sex: '女',
      mobile: '13012345678',
      phone1: '85320987',
      phone2: '85320987',
      address: '四川成都西大街1号',
      zip: '610000',
      city: '成都',
      company: '成都合能房地产开发有限公司',
      note: '',
    },
    {
      name: '孙殿岑',
      sex: '女',
      mobile: '13012345678',
      phone1: '85320987',
      phone2: '85320987',
      address: '四川成都西大街1号',
      zip: '610000',
      city: '成都',
      company: '成都合能房地产开发有限公司',
      note: '',
    },
    {
      name: '吴美珠',
      sex: '女',
      mobile: '13012345678',
      phone1: '85320987',
      phone2: '85320987',
      address: '四川成都西大街1号',
      zip: '610000',
      city: '成都',
      company: '成都合能房地产开发有限公司',
      note: '',
    },
    {
      name: '王江淋',
      sex: '女',
      mobile: '13012345678',
      phone1: '85320987',
      phone2: '85320987',
      address: '四川成都西大街1号',
      zip: '610000',
      city: '成都',
      company: '成都合能房地产开发有限公司',
      note: '',
    },
    {
      name: '刘霞',
      sex: '女',
      mobile: '13012345678',
      phone1: '85320987',
      phone2: '85320987',
      address: '四川成都西大街1号',
      zip: '610000',
      city: '成都',
      company: '成都合能房地产开发有限公司',
      note: '',
    },
    {
      name: '蒋文',
      sex: '女',
      mobile: '13012345678',
      phone1: '85320987',
      phone2: '85320987',
      address: '四川成都西大街1号',
      zip: '610000',
      city: '成都',
      company: '成都合能房地产开发有限公司',
      note: '',
    },
  ];

}
