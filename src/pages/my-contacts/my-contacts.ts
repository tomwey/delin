import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, App } from 'ionic-angular';

/**
 * Generated class for the MyContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-contacts',
  templateUrl: 'my-contacts.html',
})
export class MyContactsPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private app: App,
              private actionSheetCtrl: ActionSheetController,
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyContactsPage');
  }

  openContact(item) {
    let actionSheet = this.actionSheetCtrl.create({
      title: '',
      buttons: [
        {
          text: '查看',
          handler: () => {
            // console.log('Archive clicked');
            this.viewContact(item);
          }
        },
        {
          text: '编辑',
          handler: () => {
            // console.log('Archive clicked');
            this.editContact(item);
          }
        },
        {
          text: '删除',
          role: 'destructive',
          handler: () => {
            // console.log('Destructive clicked');
            this.deleteContact(item);
          }
        },{
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  newContact() {
    this.app.getRootNavs()[0].push('MyContactFormPage');
  }

  deleteContact(item) {

  }

  editContact(item) {
    this.app.getRootNavs()[0].push('MyContactFormPage', { contact: item });
  }

  viewContact(item) {
    this.app.getRootNavs()[0].push('MyContactDetailPage', { contact: item });
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
