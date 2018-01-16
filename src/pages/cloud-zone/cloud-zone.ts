import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { NewsService } from '../../services/news.service';

/**
 * Generated class for the CloudZonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cloud-zone',
  templateUrl: 'cloud-zone.html',
})
export class CloudZonePage {
  dataList: any = [];

  constructor(public navCtrl: NavController,
    private app: App,
    public navParams: NavParams,
    private news: NewsService,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CloudZonePage');

    this.news.getNewsList()
      .then(res => {
        console.log(res);
        this.dataList = res['DataList'];
      })
      .catch(error => {
        // console.log(error);

      })
    
  }

  gotoDetail(item) {
    this.app.getRootNavs()[0].push('CloudZoneDetailPage', item);
  }

}
