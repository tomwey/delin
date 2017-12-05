import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AgencyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agency',
  templateUrl: 'agency.html',
})
export class AgencyPage {
  
  itemHeight: number = 0;
  selectedIndex: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgencyPage');
  }

  selectMenu(index) {
    this.selectedIndex = index;
  }

  expandItem(item){
    
    this.dataList.map((listItem) => {

        if(item == listItem){
            listItem.expanded = !listItem.expanded;
        } else {
            listItem.expanded = false;
        }

        return listItem;

    });
    
  }

  dataList: any = [
    {
      avatar: 'assets/imgs/u1.png',
      name: '王文静',
      time: '2017-10-28 09:34',
      expanded: false,
      tasks: ['车辆采购','同行转账','项目资金支付'],
    },
    {
      avatar: 'assets/imgs/u2.png',
      name: '王文静',
      time: '2017-10-28 09:34',
      expanded: false,
      tasks: ['车辆采购','同行转账'],
    },
    {
      avatar: 'assets/imgs/u1.png',
      name: '王文静',
      time: '2017-10-28 09:34',
      expanded: false,
      tasks: ['项目资金支付'],
    },
  ];

}
