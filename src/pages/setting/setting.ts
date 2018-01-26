import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../services/user-service';
import { Events } from 'ionic-angular/util/events';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  user: any = {};
  constructor(public navCtrl: NavController,
    private users: UserService, 
    private events: Events,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SettingPage');
    this.users.currentUser().then(user => {
      this.user = user;
      console.log(user);
    });
  }

  logout() {
    this.users.logout().then(() => {
      this.events.publish('user:logout');
    })
    .catch(errror => {});
  }

}
