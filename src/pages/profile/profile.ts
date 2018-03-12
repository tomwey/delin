import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OAService } from '../../services/oa.service';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user: any = { avatar: 'assets/imgs/default_avatar.png'};
  empcode: any = null;
  constructor(public navCtrl: NavController, 
    private oa: OAService,
    public navParams: NavParams) {
      this.empcode = this.navParams.data.empcode;
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ProfilePage');
    this.loadData();
  }

  loadData() {
    this.oa.getEmpDetail(this.empcode, (data, error) => {
      if (data && data.Model) {
        this.user = data.Model;
        this.user.avatar = data.Model.EmpPicture;
      }
      // console.log(data);
      // console.log(error);
    });
  }

}
