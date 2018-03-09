import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsService } from '../../services/news.service';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the ArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {

  article: any = {};
  constructor(public navCtrl: NavController,
    private news: NewsService,
    private sanitizer: DomSanitizer,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ArticlePage');
    this.loadData();
  }

  loadData() {
    this.news.getNewsDetail(this.navParams.data.id, (data, error) => {
      console.log(data);
      if (data && data.Model) {
        this.article = data.Model;

        this.article["body"] = this.sanitizer.bypassSecurityTrustHtml(this.article.ContentDetail);
      }
    });
  }

}
